import { StudentProgressMap, LessonProgress, AdminAnalytics } from '../types/auth';
import { getAllStudents, touchLastActive } from './authService';
import { getTotalLessons } from '../data/curriculumManager';
import { syncProgressToCloud, syncCertificateToCloud } from './cloudSyncService';


function getProgressStorageKey(studentId: string): string {
  return `tin_progress_${studentId}`;
}

function getCertificatesStorageKey(studentId: string): string {
  return `tin_certs_${studentId}`;
}

/**
 * Lấy toàn bộ tiến độ học tập của một học sinh
 */
export function getStudentProgress(studentId: string): StudentProgressMap {
  try {
    const raw = localStorage.getItem(getProgressStorageKey(studentId));
    if (!raw) {
      return { 10: {}, 11: {}, 12: {} };
    }
    const data = JSON.parse(raw);
    return {
      10: data[10] || {},
      11: data[11] || {},
      12: data[12] || {}
    };
  } catch {
    return { 10: {}, 11: {}, 12: {} };
  }
}

/**
 * Lưu tiến độ của một bài học
 */
export function saveLessonProgress(
  studentId: string,
  grade: 10 | 11 | 12,
  lessonId: number,
  updates: Partial<LessonProgress>
): LessonProgress {
  const allProgress = getStudentProgress(studentId);
  const currentGradeProgress = allProgress[grade] || {};
  const existing: LessonProgress = currentGradeProgress[lessonId] || {
    lessonId,
    grade,
    isCompleted: false,
    completedSteps: [1],
    quizScorePercent: 0,
    quizAttempts: 0,
    xpEarned: 0
  };

  const updated: LessonProgress = {
    ...existing,
    ...updates,
    completedSteps: Array.from(new Set([...existing.completedSteps, ...(updates.completedSteps || [])]))
  };

  currentGradeProgress[lessonId] = updated;
  allProgress[grade] = currentGradeProgress;

  try {
    localStorage.setItem(getProgressStorageKey(studentId), JSON.stringify(allProgress));
    touchLastActive(studentId);
    // Đồng bộ lên Cloud trong nền
    syncProgressToCloud(studentId, grade, lessonId, updated);
  } catch (err) {
    console.error('Lỗi khi lưu tiến độ học sinh:', err);
  }

  return updated;
}


/**
 * Đánh dấu bài học đã hoàn thành xuất sắc
 */
export function markLessonComplete(
  studentId: string,
  grade: 10 | 11 | 12,
  lessonId: number,
  xpEarned: number,
  scorePercent: number
): void {
  saveLessonProgress(studentId, grade, lessonId, {
    isCompleted: true,
    completedSteps: [1, 2, 3, 4, 5, 6, 7, 8],
    quizScorePercent: Math.max(scorePercent, 0),
    xpEarned: xpEarned,
    completedAt: new Date().toISOString()
  });
}

/**
 * Lấy danh sách ID các bài học đã hoàn thành của một khối lớp
 */
export function getCompletedLessonIds(studentId: string, grade: 10 | 11 | 12): number[] {
  const progress = getStudentProgress(studentId);
  const gradeProg = progress[grade] || {};
  return Object.values(gradeProg)
    .filter(p => p.isCompleted)
    .map(p => p.lessonId);
}

/**
 * Tính toán số liệu thống kê tổng quát của một học sinh
 */
export function calculateStudentStats(studentId: string): {
  totalXp: number;
  completedCount: number;
  completedByGrade: { 10: number; 11: number; 12: number };
  avgQuizScore: number;
  certificatesCount: number;
} {
  const progress = getStudentProgress(studentId);
  const certs = getStudentCertificates(studentId);
  let totalXp = 0;
  let completedCount = 0;
  let scoreSum = 0;
  let scoreCount = 0;

  const completedByGrade = { 10: 0, 11: 0, 12: 0 };

  ([10, 11, 12] as const).forEach(g => {
    const list = Object.values(progress[g] || {});
    list.forEach(item => {
      totalXp += item.xpEarned || 0;
      if (item.isCompleted) {
        completedCount++;
        completedByGrade[g]++;
      }
      if (item.quizScorePercent > 0) {
        scoreSum += item.quizScorePercent;
        scoreCount++;
      }
    });
  });

  const certificatesCount = certs.length;

  const avgQuizScore = scoreCount > 0 ? Math.round(scoreSum / scoreCount) : 0;

  return {
    totalXp,
    completedCount,
    completedByGrade,
    avgQuizScore,
    certificatesCount
  };
}

/**
 * Lưu giấy chứng nhận hoàn thành và đồng bộ trạng thái bài học
 */
export function saveCertificate(
  studentId: string,
  cert: { grade: 10 | 11 | 12; lessonId: number; lessonTitle: string; scorePercent: number }
): void {
  try {
    const key = getCertificatesStorageKey(studentId);
    const existing: any[] = JSON.parse(localStorage.getItem(key) || '[]');
    
    // Kiểm tra xem đã có chứng chỉ cho bài học này của khối lớp này chưa
    const idx = existing.findIndex(c => c.grade === cert.grade && c.lessonId === cert.lessonId);
    if (idx >= 0) {
      existing[idx] = {
        ...existing[idx],
        scorePercent: Math.max(existing[idx].scorePercent || 0, cert.scorePercent),
        lessonTitle: cert.lessonTitle || existing[idx].lessonTitle,
        issuedAt: new Date().toISOString()
      };
    } else {
      const newCert = {
        id: `cert_${cert.grade}_${cert.lessonId}_${Date.now()}`,
        ...cert,
        issuedAt: new Date().toISOString()
      };
      existing.push(newCert);
    }
    localStorage.setItem(key, JSON.stringify(existing));

    // Đồng bộ ngay lập tức trạng thái bài học thành hoàn thành
    saveLessonProgress(studentId, cert.grade, cert.lessonId, {
      isCompleted: true,
      quizScorePercent: cert.scorePercent,
      completedAt: new Date().toISOString()
    });

    // Đồng bộ chứng chỉ lên Cloud trong nền
    syncCertificateToCloud(studentId, cert);
  } catch (err) {
    console.error('Lỗi khi lưu giấy chứng nhận:', err);
  }
}


/**
 * Lấy danh sách giấy chứng nhận của học sinh
 */
export function getStudentCertificates(studentId: string): any[] {
  try {
    const raw = localStorage.getItem(getCertificatesStorageKey(studentId));
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Tổng hợp số liệu phân tích dành cho Bảng điều khiển Quản trị Giáo viên
 */
export function getAdminAnalytics(): AdminAnalytics {
  const students = getAllStudents();
  let totalLessonsCompleted = 0;
  let totalCertificatesIssued = 0;
  let totalScoreSum = 0;
  let totalScoreCount = 0;

  const studentsByGrade = { 10: 0, 11: 0, 12: 0 };
  const totalCompletedByGrade = { 10: 0, 11: 0, 12: 0 };

  const topStudentsList: AdminAnalytics['topStudents'] = [];

  students.forEach(student => {
    const stats = calculateStudentStats(student.id);
    totalLessonsCompleted += stats.completedCount;
    totalCertificatesIssued += stats.certificatesCount;

    if (stats.avgQuizScore > 0) {
      totalScoreSum += stats.avgQuizScore;
      totalScoreCount++;
    }

    // Đếm học sinh theo lớp
    const cls = student.className.toUpperCase();
    if (cls.startsWith('10')) studentsByGrade[10]++;
    else if (cls.startsWith('11')) studentsByGrade[11]++;
    else if (cls.startsWith('12')) studentsByGrade[12]++;
    else studentsByGrade[11]++; // Mặc định

    totalCompletedByGrade[10] += stats.completedByGrade[10];
    totalCompletedByGrade[11] += stats.completedByGrade[11];
    totalCompletedByGrade[12] += stats.completedByGrade[12];

    topStudentsList.push({
      id: student.id,
      fullName: student.fullName,
      className: student.className,
      schoolName: student.schoolName,
      province: student.province,
      totalXp: stats.totalXp,
      completedCount: stats.completedCount,
      certificatesCount: stats.certificatesCount,
      avgScore: stats.avgQuizScore
    });
  });

  // Tính tỉ lệ hoàn thành theo khối
  const totalL10 = getTotalLessons(10);
  const totalL11 = getTotalLessons(11);
  const totalL12 = getTotalLessons(12);

  const numStd10 = Math.max(1, studentsByGrade[10]);
  const numStd11 = Math.max(1, studentsByGrade[11]);
  const numStd12 = Math.max(1, studentsByGrade[12]);

  const completionRateByGrade = {
    10: Math.min(100, Math.round((totalCompletedByGrade[10] / (numStd10 * totalL10)) * 100)),
    11: Math.min(100, Math.round((totalCompletedByGrade[11] / (numStd11 * totalL11)) * 100)),
    12: Math.min(100, Math.round((totalCompletedByGrade[12] / (numStd12 * totalL12)) * 100))
  };

  // Sắp xếp top học sinh theo XP giảm dần
  topStudentsList.sort((a, b) => b.totalXp - a.totalXp);

  return {
    totalStudents: students.length,
    totalLessonsCompleted,
    totalCertificatesIssued,
    averageQuizScore: totalScoreCount > 0 ? Math.round(totalScoreSum / totalScoreCount) : 0,
    studentsByGrade,
    completionRateByGrade,
    topStudents: topStudentsList.slice(0, 10)
  };
}

