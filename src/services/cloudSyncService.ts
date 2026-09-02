import { StudentUser, LessonProgress } from '../types/auth';

const STORAGE_KEY_CLOUD_URL = 'tin_supabase_url';
const STORAGE_KEY_CLOUD_KEY = 'tin_supabase_anon_key';
const STORAGE_KEY_CLOUD_ENABLED = 'tin_cloud_sync_enabled';

// Cấu hình Supabase mặc định của hệ thống
const DEFAULT_SUPABASE_URL = 'https://fhyaewfzcfllqtfxpuap.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_KbT9GEJCQB61i4AnZOGANA_KA60BCal';

export interface CloudConfig {
  url: string;
  anonKey: string;
  isEnabled: boolean;
}

/**
 * Lấy cấu hình kết nối đám mây hiện tại
 */
export function getCloudConfig(): CloudConfig {
  try {
    const url = localStorage.getItem(STORAGE_KEY_CLOUD_URL) || DEFAULT_SUPABASE_URL;
    const anonKey = localStorage.getItem(STORAGE_KEY_CLOUD_KEY) || DEFAULT_SUPABASE_ANON_KEY;
    const isEnabledRaw = localStorage.getItem(STORAGE_KEY_CLOUD_ENABLED);
    // Mặc định kích hoạt nếu chưa cấu hình tắt
    const isEnabled = isEnabledRaw === null ? true : isEnabledRaw === 'true';
    return { url, anonKey, isEnabled };
  } catch {
    return { url: DEFAULT_SUPABASE_URL, anonKey: DEFAULT_SUPABASE_ANON_KEY, isEnabled: true };
  }
}

/**
 * Lưu cấu hình kết nối đám mây
 */
export function saveCloudConfig(url: string, anonKey: string, isEnabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY_CLOUD_URL, url.trim().replace(/\/+$/, ''));
    localStorage.setItem(STORAGE_KEY_CLOUD_KEY, anonKey.trim());
    localStorage.setItem(STORAGE_KEY_CLOUD_ENABLED, isEnabled ? 'true' : 'false');
  } catch (err) {
    console.error('Lỗi khi lưu cấu hình Cloud:', err);
  }
}

/**
 * Tạo headers chuẩn cho Supabase PostgREST API
 */
function getHeaders(anonKey: string) {
  return {
    'apikey': anonKey,
    'Authorization': `Bearer ${anonKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation, resolution=merge-duplicates'
  };
}

/**
 * Kiểm tra kết nối tới máy chủ Supabase
 */
export async function testCloudConnection(url: string, anonKey: string): Promise<{ success: boolean; message: string }> {
  if (!url) return { success: false, message: 'Chưa nhập Supabase Project URL!' };
  if (!anonKey) return { success: false, message: 'Chưa nhập Supabase Anon Key!' };

  const cleanUrl = url.trim().replace(/\/+$/, '');
  try {
    const res = await fetch(`${cleanUrl}/rest/v1/students?select=*&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': anonKey.trim(),
        'Authorization': `Bearer ${anonKey.trim()}`
      }
    });

    if (res.ok) {
      return { success: true, message: 'Kết nối Cơ sở dữ liệu đám mây Supabase thành công 100%!' };
    } else if (res.status === 404 || res.status === 400) {
      return {
        success: false,
        message: 'Kết nối được tới Supabase nhưng chưa tạo bảng "students". Vui lòng kiểm tra mã SQL!'
      };
    } else {
      return { success: false, message: `Lỗi xác thực (${res.status}): Vui lòng kiểm tra lại Anon Key!` };
    }
  } catch (err: any) {
    return { success: false, message: `Không thể kết nối tới máy chủ: ${err.message || 'Lỗi mạng'}` };
  }
}


/**
 * Đồng bộ thông tin học sinh lên Cloud (Upsert)
 */
export async function syncStudentToCloud(student: StudentUser): Promise<boolean> {
  const config = getCloudConfig();
  if (!config.isEnabled || !config.url || !config.anonKey) return false;

  try {
    const payload = {
      id: student.id,
      username: student.username,
      password: student.password,
      full_name: student.fullName,
      class_name: student.className,
      school_name: student.schoolName,
      province: student.province,
      avatar: student.avatar || '👨‍💻',
      created_at: student.createdAt,
      last_active_at: student.lastActiveAt
    };

    const res = await fetch(`${config.url}/rest/v1/students`, {
      method: 'POST',
      headers: getHeaders(config.anonKey),
      body: JSON.stringify(payload)
    });

    return res.ok;
  } catch (err) {
    console.warn('Lỗi khi đồng bộ học sinh lên Cloud:', err);
    return false;
  }
}

/**
 * Tải toàn bộ danh sách học sinh từ Cloud về
 */
export async function fetchStudentsFromCloud(): Promise<StudentUser[]> {
  const config = getCloudConfig();
  if (!config.isEnabled || !config.url || !config.anonKey) return [];

  try {
    const res = await fetch(`${config.url}/rest/v1/students?select=*`, {
      method: 'GET',
      headers: {
        'apikey': config.anonKey,
        'Authorization': `Bearer ${config.anonKey}`
      }
    });

    if (!res.ok) return [];

    const data = await res.json();
    if (!Array.isArray(data)) return [];

    return data.map((item: any) => ({
      id: item.id,
      username: item.username,
      password: item.password,
      fullName: item.full_name,
      className: item.class_name,
      schoolName: item.school_name,
      province: item.province,
      role: 'student',
      createdAt: item.created_at,
      lastActiveAt: item.last_active_at,
      avatar: item.avatar || '👨‍💻'
    }));
  } catch (err) {
    console.warn('Lỗi khi tải học sinh từ Cloud:', err);
    return [];
  }
}

/**
 * Đồng bộ tiến độ bài học lên Cloud
 */
export async function syncProgressToCloud(
  studentId: string,
  grade: number,
  lessonId: number,
  progress: Partial<LessonProgress>
): Promise<boolean> {
  const config = getCloudConfig();
  if (!config.isEnabled || !config.url || !config.anonKey) return false;

  try {
    const payload = {
      id: `${studentId}_${grade}_${lessonId}`,
      student_id: studentId,
      grade: grade,
      lesson_id: lessonId,
      is_completed: progress.isCompleted || false,
      quiz_score_percent: progress.quizScorePercent || 0,
      quiz_attempts: progress.quizAttempts || 1,
      xp_earned: progress.xpEarned || 0,
      updated_at: new Date().toISOString()
    };

    const res = await fetch(`${config.url}/rest/v1/student_progress`, {
      method: 'POST',
      headers: getHeaders(config.anonKey),
      body: JSON.stringify(payload)
    });

    return res.ok;
  } catch (err) {
    console.warn('Lỗi khi đồng bộ tiến độ lên Cloud:', err);
    return false;
  }
}

/**
 * Đồng bộ giấy chứng nhận lên Cloud
 */
export async function syncCertificateToCloud(
  studentId: string,
  cert: { grade: number; lessonId: number; lessonTitle: string; scorePercent: number }
): Promise<boolean> {
  const config = getCloudConfig();
  if (!config.isEnabled || !config.url || !config.anonKey) return false;

  try {
    const payload = {
      id: `cert_${studentId}_${cert.grade}_${cert.lessonId}`,
      student_id: studentId,
      grade: cert.grade,
      lesson_id: cert.lessonId,
      lesson_title: cert.lessonTitle,
      score_percent: cert.scorePercent,
      issued_at: new Date().toISOString()
    };

    const res = await fetch(`${config.url}/rest/v1/student_certificates`, {
      method: 'POST',
      headers: getHeaders(config.anonKey),
      body: JSON.stringify(payload)
    });

    return res.ok;
  } catch (err) {
    console.warn('Lỗi khi đồng bộ chứng chỉ lên Cloud:', err);
    return false;
  }
}

/**
 * Tìm kiếm học sinh trên Cloud và kéo toàn bộ tiến độ & chứng chỉ về máy
 */
export async function fetchStudentDataFromCloud(username: string, password: string): Promise<{
  student: StudentUser;
  progress: any;
  certificates: any[];
} | null> {
  const config = getCloudConfig();
  if (!config.isEnabled || !config.url || !config.anonKey) return null;

  try {
    const cleanUsername = username.trim().toLowerCase();
    // 1. Tìm học sinh
    const stdRes = await fetch(
      `${config.url}/rest/v1/students?username=eq.${encodeURIComponent(cleanUsername)}&select=*`,
      {
        headers: {
          'apikey': config.anonKey,
          'Authorization': `Bearer ${config.anonKey}`
        }
      }
    );

    if (!stdRes.ok) return null;
    const stdList = await stdRes.json();
    if (!Array.isArray(stdList) || stdList.length === 0) return null;

    const stdItem = stdList[0];
    if (stdItem.password !== password.trim()) return null; // Sai mật khẩu

    const student: StudentUser = {
      id: stdItem.id,
      username: stdItem.username,
      password: stdItem.password,
      fullName: stdItem.full_name,
      className: stdItem.class_name,
      schoolName: stdItem.school_name,
      province: stdItem.province,
      role: 'student',
      createdAt: stdItem.created_at,
      lastActiveAt: new Date().toISOString(),
      avatar: stdItem.avatar || '👨‍💻'
    };

    // 2. Kéo tiến độ
    const progRes = await fetch(
      `${config.url}/rest/v1/student_progress?student_id=eq.${encodeURIComponent(student.id)}&select=*`,
      {
        headers: {
          'apikey': config.anonKey,
          'Authorization': `Bearer ${config.anonKey}`
        }
      }
    );

    const progressMap: any = { 10: {}, 11: {}, 12: {} };
    if (progRes.ok) {
      const progList = await progRes.json();
      if (Array.isArray(progList)) {
        progList.forEach((p: any) => {
          if (progressMap[p.grade]) {
            progressMap[p.grade][p.lesson_id] = {
              lessonId: p.lesson_id,
              grade: p.grade,
              isCompleted: p.is_completed,
              completedSteps: [1, 2, 3, 4, 5, 6, 7, 8],
              quizScorePercent: p.quiz_score_percent,
              quizAttempts: p.quiz_attempts,
              xpEarned: p.xp_earned,
              completedAt: p.updated_at
            };
          }
        });
      }
    }

    // 3. Kéo chứng chỉ
    const certRes = await fetch(
      `${config.url}/rest/v1/student_certificates?student_id=eq.${encodeURIComponent(student.id)}&select=*`,
      {
        headers: {
          'apikey': config.anonKey,
          'Authorization': `Bearer ${config.anonKey}`
        }
      }
    );

    const certificates: any[] = [];
    if (certRes.ok) {
      const certList = await certRes.json();
      if (Array.isArray(certList)) {
        certList.forEach((c: any) => {
          certificates.push({
            id: c.id,
            grade: c.grade,
            lessonId: c.lesson_id,
            lessonTitle: c.lesson_title,
            scorePercent: c.score_percent,
            issuedAt: c.issued_at
          });
        });
      }
    }

    return { student, progress: progressMap, certificates };
  } catch (err) {
    console.error('Lỗi khi kéo dữ liệu học sinh từ Cloud:', err);
    return null;
  }
}

/**
 * Đoạn mã SQL khởi tạo bảng trên Supabase dành cho Thầy/Cô
 */
export const SUPABASE_SETUP_SQL = `-- 1. Tạo bảng học sinh (students)
CREATE TABLE IF NOT EXISTS public.students (
    id TEXT PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    full_name TEXT NOT NULL,
    class_name TEXT NOT NULL,
    school_name TEXT NOT NULL,
    province TEXT NOT NULL,
    avatar TEXT DEFAULT '👨‍💻',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    last_active_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tạo bảng tiến độ bài học (student_progress)
CREATE TABLE IF NOT EXISTS public.student_progress (
    id TEXT PRIMARY KEY,
    student_id TEXT NOT NULL,
    grade INTEGER NOT NULL,
    lesson_id INTEGER NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    quiz_score_percent INTEGER DEFAULT 0,
    quiz_attempts INTEGER DEFAULT 1,
    xp_earned INTEGER DEFAULT 0,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tạo bảng giấy chứng nhận (student_certificates)
CREATE TABLE IF NOT EXISTS public.student_certificates (
    id TEXT PRIMARY KEY,
    student_id TEXT NOT NULL,
    grade INTEGER NOT NULL,
    lesson_id INTEGER NOT NULL,
    lesson_title TEXT NOT NULL,
    score_percent INTEGER DEFAULT 0,
    issued_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Bật quyền truy cập công khai (RLS Disabled để học sinh từ mọi máy đều lưu được)
ALTER TABLE public.students DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_progress DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.student_certificates DISABLE ROW LEVEL SECURITY;
`;
