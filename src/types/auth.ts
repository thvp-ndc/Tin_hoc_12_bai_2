/**
 * Kiểu dữ liệu xác thực, học sinh và quản trị
 */

export interface StudentUser {
  id: string;             // UUID hoặc 'student_' + timestamp
  username: string;       // Tên đăng nhập (viết liền không dấu)
  password: string;       // Mật khẩu
  fullName: string;       // Họ và tên học sinh
  className: string;      // Lớp học (VD: 10A1, 11B2, 12C3)
  schoolName: string;     // Trường học (VD: THPT Nguyễn Đáng)
  province: string;       // Tỉnh / Thành phố (VD: Trà Vinh)
  role: 'student';
  createdAt: string;      // Thời gian tạo tài khoản (ISO String)
  lastActiveAt: string;   // Lần hoạt động gần nhất (ISO String)
  avatar?: string;        // Tùy chọn avatar emoji
}

export interface LessonProgress {
  lessonId: number;
  grade: 10 | 11 | 12;
  isCompleted: boolean;
  completedSteps: number[]; // Các bước đã xong [1, 2, ..., 8]
  quizScorePercent: number; // Điểm số trắc nghiệm (0-100)
  quizAttempts: number;     // Số lần đã làm bài
  xpEarned: number;         // Tổng XP đã tích lũy từ bài này
  completedAt?: string;     // Thời điểm hoàn thành bài học
}

export interface StudentProgressMap {
  // grade (10, 11, 12) -> lessonId -> LessonProgress
  [grade: number]: {
    [lessonId: number]: LessonProgress;
  };
}

export interface StudentFullData {
  user: StudentUser;
  progress: StudentProgressMap;
  totalXp: number;
  certificates: {
    id: string;
    grade: 10 | 11 | 12;
    lessonId: number;
    lessonTitle: string;
    issuedAt: string;
    scorePercent: number;
  }[];
}

export interface AdminAnalytics {
  totalStudents: number;
  totalLessonsCompleted: number;
  averageQuizScore: number;
  studentsByGrade: {
    10: number;
    11: number;
    12: number;
  };
  completionRateByGrade: {
    10: number;
    11: number;
    12: number;
  };
  topStudents: {
    id: string;
    fullName: string;
    className: string;
    schoolName: string;
    province: string;
    totalXp: number;
    completedCount: number;
    avgScore: number;
  }[];
}
