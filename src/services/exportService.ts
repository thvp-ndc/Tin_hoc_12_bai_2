import { getAllStudents } from './authService';
import { calculateStudentStats, getStudentProgress } from './progressService';

/**
 * Xuất danh sách học sinh và kết quả học tập ra tệp CSV hỗ trợ mở bằng Microsoft Excel
 */
export function exportStudentsToCsv(): void {
  const students = getAllStudents();
  if (students.length === 0) {
    alert('Chưa có học sinh nào đăng ký học để xuất dữ liệu.');
    return;
  }

  // Tiêu đề các cột trong bảng Excel
  const headers = [
    'STT',
    'Tên đăng nhập',
    'Họ và tên',
    'Lớp',
    'Trường học',
    'Tỉnh / Thành phố',
    'Số bài hoàn thành',
    'Tổng điểm XP',
    'Điểm trắc nghiệm TB (%)',
    'Ngày đăng ký',
    'Lần học gần nhất'
  ];

  const rows = students.map((std, idx) => {
    const stats = calculateStudentStats(std.id);
    const createdDate = new Date(std.createdAt).toLocaleDateString('vi-VN');
    const lastActiveDate = new Date(std.lastActiveAt).toLocaleString('vi-VN');

    return [
      idx + 1,
      `"${std.username}"`,
      `"${std.fullName}"`,
      `"${std.className}"`,
      `"${std.schoolName}"`,
      `"${std.province}"`,
      stats.completedCount,
      stats.totalXp,
      `${stats.avgQuizScore}%`,
      `"${createdDate}"`,
      `"${lastActiveDate}"`
    ].join(',');
  });

  // UTF-8 BOM (\uFEFF) giúp Excel tự động nhận diện bảng mã tiếng Việt có dấu
  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Bao_Cao_Tien_Do_Hoc_Sinh_Tin_Hoc_THPT_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Xuất tệp sao lưu dữ liệu toàn diện (JSON)
 */
export function exportFullBackupJson(): void {
  const students = getAllStudents();
  const backupData: {
    exportDate: string;
    version: string;
    students: any[];
  } = {
    exportDate: new Date().toISOString(),
    version: '1.0',
    students: []
  };

  students.forEach(std => {
    const progress = getStudentProgress(std.id);
    backupData.students.push({
      user: std,
      progress: progress
    });
  });

  const jsonString = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Sao_Luu_Du_Lieu_Hoc_Sinh_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * Nhập dữ liệu từ tệp JSON sao lưu
 */
export function importBackupJson(fileContent: string): { success: boolean; count?: number; error?: string } {
  try {
    const data = JSON.parse(fileContent);
    if (!data.students || !Array.isArray(data.students)) {
      return { success: false, error: 'Định dạng tệp sao lưu không hợp lệ.' };
    }

    const currentStudents = getAllStudents();
    let importedCount = 0;

    data.students.forEach((item: any) => {
      if (item.user && item.user.username) {
        // Kiểm tra xem học sinh đã có chưa
        const existingIdx = currentStudents.findIndex(s => s.username.toLowerCase() === item.user.username.toLowerCase());
        if (existingIdx >= 0) {
          currentStudents[existingIdx] = item.user;
        } else {
          currentStudents.push(item.user);
        }

        // Khôi phục tiến độ học tập
        if (item.progress) {
          localStorage.setItem(`tin_progress_${item.user.id}`, JSON.stringify(item.progress));
        }

        importedCount++;
      }
    });

    localStorage.setItem('tin_thpt_students_db', JSON.stringify(currentStudents));
    return { success: true, count: importedCount };
  } catch (err: any) {
    return { success: false, error: err.message || 'Lỗi khi đọc tệp dữ liệu.' };
  }
}
