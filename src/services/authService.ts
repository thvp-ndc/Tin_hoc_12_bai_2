import { StudentUser } from '../types/auth';
import { 
  syncStudentToCloud, 
  fetchStudentDataFromCloud, 
  fetchStudentsFromCloud,
  pullAllCloudData,
  getCloudConfig
} from './cloudSyncService';

const STORAGE_KEY_STUDENTS = 'tin_thpt_students_db';
const STORAGE_KEY_CURRENT_USER = 'tin_thpt_current_student_id';
const STORAGE_KEY_ADMIN_PIN = 'tin_thpt_admin_pin';
const DEFAULT_ADMIN_PIN = 'giaovien2026';

// Danh sách emoji avatar ngẫu nhiên dành cho học sinh
const AVATAR_EMOJIS = ['👨‍💻', '👩‍💻', '🚀', '💡', '⚡', '💻', '🎓', '🤖', '🌟', '🎨'];

function getRandomAvatar(): string {
  return AVATAR_EMOJIS[Math.floor(Math.random() * AVATAR_EMOJIS.length)];
}

/**
 * Lấy danh sách tất cả học sinh đã đăng ký trên máy
 */
export function getAllStudents(): StudentUser[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_STUDENTS);
    if (!raw) return [];
    return JSON.parse(raw) as StudentUser[];
  } catch (err) {
    console.error('Lỗi khi nạp danh sách học sinh:', err);
    return [];
  }
}

/**
 * Tải danh sách học sinh, tiến độ và chứng chỉ mới nhất từ Cloud và gộp vào máy
 */
export async function refreshStudentsFromCloud(): Promise<StudentUser[]> {
  try {
    const cloudStudents = await fetchStudentsFromCloud();
    // Đồng bộ toàn bộ tiến độ bài học và chứng chỉ từ Cloud
    await pullAllCloudData();

    if (cloudStudents.length === 0) return getAllStudents();

    const localStudents = getAllStudents();
    cloudStudents.forEach(cs => {
      const idx = localStudents.findIndex(
        ls => ls.id === cs.id || ls.username.toLowerCase() === cs.username.toLowerCase()
      );
      if (idx >= 0) {
        localStudents[idx] = { ...localStudents[idx], ...cs };
      } else {
        localStudents.push(cs);
      }
    });

    saveAllStudents(localStudents);
    return localStudents;
  } catch {
    return getAllStudents();
  }
}


/**
 * Lưu danh sách học sinh vào LocalStorage
 */
function saveAllStudents(students: StudentUser[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(students));
  } catch (err) {
    console.error('Lỗi khi lưu danh sách học sinh:', err);
  }
}

/**
 * Lấy học sinh hiện đang đăng nhập
 */
export function getCurrentStudent(): StudentUser | null {
  try {
    const currentId = localStorage.getItem(STORAGE_KEY_CURRENT_USER);
    if (!currentId) return null;
    const students = getAllStudents();
    return students.find(s => s.id === currentId) || null;
  } catch {
    return null;
  }
}

/**
 * Đăng ký học sinh mới với 6 trường thông tin chuẩn hóa
 */
export function registerStudent(input: {
  username: string;
  password: string;
  fullName: string;
  className: string;
  schoolName: string;
  province: string;
}): { success: boolean; error?: string; user?: StudentUser } {
  const usernameClean = input.username.trim().toLowerCase();
  const fullNameClean = input.fullName.trim();
  const classNameClean = input.className.trim().toUpperCase();
  const schoolNameClean = input.schoolName.trim();
  const provinceClean = input.province.trim();
  const passwordClean = input.password.trim();

  if (!usernameClean) return { success: false, error: 'Vui lòng nhập Tên đăng nhập!' };
  if (passwordClean.length < 4) return { success: false, error: 'Mật khẩu phải có ít nhất 4 ký tự!' };
  if (!fullNameClean) return { success: false, error: 'Vui lòng nhập Họ và tên học sinh!' };
  if (!classNameClean) return { success: false, error: 'Vui lòng nhập Lớp học (VD: 11A1)!' };
  if (!schoolNameClean) return { success: false, error: 'Vui lòng nhập Tên trường học!' };
  if (!provinceClean) return { success: false, error: 'Vui lòng nhập Tỉnh / Thành phố!' };

  const students = getAllStudents();
  // Kiểm tra tên đăng nhập đã tồn tại chưa
  const existing = students.find(s => s.username.toLowerCase() === usernameClean);
  if (existing) {
    return { success: false, error: 'Tên đăng nhập này đã được sử dụng. Vui lòng chọn tên khác!' };
  }

  const now = new Date().toISOString();
  const newUser: StudentUser = {
    id: `std_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    username: usernameClean,
    password: passwordClean,
    fullName: fullNameClean,
    className: classNameClean,
    schoolName: schoolNameClean,
    province: provinceClean,
    role: 'student',
    createdAt: now,
    lastActiveAt: now,
    avatar: getRandomAvatar()
  };

  students.push(newUser);
  saveAllStudents(students);
  // Tự động đăng nhập luôn sau khi đăng ký thành công
  localStorage.setItem(STORAGE_KEY_CURRENT_USER, newUser.id);

  // Đồng bộ lên Cloud Database trong nền (không làm nghẽn giao diện)
  syncStudentToCloud(newUser);

  return { success: true, user: newUser };
}

/**
 * Đăng nhập học sinh (Hỗ trợ đăng nhập đa máy tính thông qua Cloud)
 */
export async function loginStudent(
  username: string, 
  password: string
): Promise<{ success: boolean; error?: string; user?: StudentUser }> {
  const usernameClean = username.trim().toLowerCase();
  const passwordClean = password.trim();

  const students = getAllStudents();
  let user = students.find(s => s.username.toLowerCase() === usernameClean);

  // Nếu không thấy tài khoản trên máy này, tự động tìm kiếm trên Cloud Database
  if (!user) {
    const cloudResult = await fetchStudentDataFromCloud(usernameClean, passwordClean);
    if (cloudResult) {
      user = cloudResult.student;
      students.push(user);
      saveAllStudents(students);
      if (cloudResult.progress) {
        localStorage.setItem(`tin_progress_${user.id}`, JSON.stringify(cloudResult.progress));
      }
      if (cloudResult.certificates && cloudResult.certificates.length > 0) {
        localStorage.setItem(`tin_certs_${user.id}`, JSON.stringify(cloudResult.certificates));
      }
    }
  }

  if (!user) {
    return { success: false, error: 'Tài khoản không tồn tại. Vui lòng kiểm tra lại hoặc bấm Đăng Ký!' };
  }

  if (user.password !== passwordClean) {
    return { success: false, error: 'Mật khẩu không chính xác!' };
  }

  // Kéo tiến độ và chứng chỉ mới nhất từ Cloud (để cập nhật nếu học sinh vừa học ở máy khác)
  if (getCloudConfig().isEnabled) {
    try {
      const cloudResult = await fetchStudentDataFromCloud(usernameClean, passwordClean);
      if (cloudResult) {
        if (cloudResult.progress) {
          localStorage.setItem(`tin_progress_${user.id}`, JSON.stringify(cloudResult.progress));
        }
        if (cloudResult.certificates && cloudResult.certificates.length > 0) {
          localStorage.setItem(`tin_certs_${user.id}`, JSON.stringify(cloudResult.certificates));
        }
      }
    } catch (err) {
      console.warn('Lỗi khi kéo tiến độ mới nhất từ Cloud:', err);
    }
  }

  // Cập nhật lần đăng nhập gần nhất
  user.lastActiveAt = new Date().toISOString();
  saveAllStudents(students);
  localStorage.setItem(STORAGE_KEY_CURRENT_USER, user.id);

  // Đồng bộ trạng thái mới lên Cloud
  syncStudentToCloud(user);

  return { success: true, user };
}



/**
 * Đăng xuất học sinh
 */
export function logoutStudent(): void {
  localStorage.removeItem(STORAGE_KEY_CURRENT_USER);
}

/**
 * Cập nhật thông tin học sinh
 */
export function updateStudentProfile(id: string, partial: Partial<StudentUser>): boolean {
  const students = getAllStudents();
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) return false;

  students[idx] = { ...students[idx], ...partial, lastActiveAt: new Date().toISOString() };
  saveAllStudents(students);
  return true;
}

/**
 * Xóa tài khoản học sinh
 */
export function deleteStudent(id: string): boolean {
  let students = getAllStudents();
  const initialLength = students.length;
  students = students.filter(s => s.id !== id);
  if (students.length !== initialLength) {
    saveAllStudents(students);
    if (localStorage.getItem(STORAGE_KEY_CURRENT_USER) === id) {
      logoutStudent();
    }
    // Xóa cả dữ liệu tiến độ của học sinh đó
    localStorage.removeItem(`tin_progress_${id}`);
    return true;
  }
  return false;
}

/**
 * Cập nhật thời điểm hoạt động gần nhất
 */
export function touchLastActive(id: string): void {
  const students = getAllStudents();
  const user = students.find(s => s.id === id);
  if (user) {
    user.lastActiveAt = new Date().toISOString();
    saveAllStudents(students);
  }
}

/**
 * Xác thực mật khẩu cổng quản trị giáo viên
 */
export function verifyAdminPassword(password: string): boolean {
  const currentPin = localStorage.getItem(STORAGE_KEY_ADMIN_PIN) || DEFAULT_ADMIN_PIN;
  return password.trim() === currentPin;
}

/**
 * Đổi mật khẩu quản trị giáo viên
 */
export function changeAdminPassword(newPassword: string): boolean {
  if (!newPassword || newPassword.trim().length < 6) return false;
  localStorage.setItem(STORAGE_KEY_ADMIN_PIN, newPassword.trim());
  return true;
}
