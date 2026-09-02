import React, { useState } from 'react';
import { 
  ArrowLeft, 
  User, 
  School, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Key, 
  Trash2, 
  Award,
  Sparkles,
  Calendar
} from 'lucide-react';
import { StudentUser } from '../../types/auth';
import { getStudentProgress, calculateStudentStats, getStudentCertificates } from '../../services/progressService';
import { updateStudentProfile, deleteStudent } from '../../services/authService';
import { getTotalLessons, getLesson } from '../../data/curriculumManager';
import { sounds } from '../../utils/soundEffects';

interface StudentDetailViewProps {
  student: StudentUser;
  onBack: () => void;
  onStudentUpdated: () => void;
  onStudentDeleted: () => void;
}

export const StudentDetailView: React.FC<StudentDetailViewProps> = ({
  student,
  onBack,
  onStudentUpdated,
  onStudentDeleted
}) => {
  const [activeGrade, setActiveGrade] = useState<10 | 11 | 12>(11);
  const [newPassword, setNewPassword] = useState('');
  const [isChangingPass, setIsChangingPass] = useState(false);

  const stats = calculateStudentStats(student.id);
  const certificates = getStudentCertificates(student.id);
  const progressMap = getStudentProgress(student.id);
  const gradeProgress = progressMap[activeGrade] || {};
  const totalLessons = getTotalLessons(activeGrade);


  const handleResetPassword = () => {
    if (newPassword.length < 4) {
      alert('Mật khẩu mới phải có ít nhất 4 ký tự!');
      return;
    }
    updateStudentProfile(student.id, { password: newPassword });
    sounds.playCorrect();
    alert(`Đã đặt lại mật khẩu cho học sinh ${student.fullName} thành: ${newPassword}`);
    setIsChangingPass(false);
    setNewPassword('');
    onStudentUpdated();
  };

  const handleDelete = () => {
    if (confirm(`Bạn có chắc chắn muốn xóa học sinh "${student.fullName}" và toàn bộ kết quả học tập không?`)) {
      deleteStudent(student.id);
      sounds.playClick();
      onStudentDeleted();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Top Bar with Back Button */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <button
          onClick={() => {
            sounds.playClick();
            onBack();
          }}
          className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại danh sách</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsChangingPass(!isChangingPass)}
            className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Key className="w-3.5 h-3.5" />
            <span>Đặt lại mật khẩu</span>
          </button>

          <button
            onClick={handleDelete}
            className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa tài khoản</span>
          </button>
        </div>
      </div>

      {/* Password Change Box */}
      {isChangingPass && (
        <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex flex-wrap items-center gap-3">
          <span className="text-xs text-amber-200 font-semibold">Mật khẩu mới cho {student.fullName}:</span>
          <input
            type="text"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            placeholder="Nhập mật khẩu mới..."
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
          />
          <button
            onClick={handleResetPassword}
            className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all cursor-pointer"
          >
            Lưu thay đổi
          </button>
        </div>
      )}

      {/* Student Profile Card */}
      <div className="p-6 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-4xl p-3 rounded-2xl bg-slate-900 border border-slate-800">
              {student.avatar || '👨‍💻'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{student.fullName}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {student.className}
                </span>
              </div>
              <p className="text-xs text-slate-400">Tên đăng nhập: <strong className="text-slate-200">@{student.username}</strong> • Mật khẩu: <code className="text-amber-300">{student.password}</code></p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-black text-amber-300">+{stats.totalXp}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Tổng XP</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-black text-emerald-400">{stats.completedCount}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Bài Hoàn Thành</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-black text-amber-400">{certificates.length}</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Chứng Nhận</div>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-black text-cyan-300">{stats.avgQuizScore}%</div>
              <div className="text-[10px] text-slate-400 uppercase font-bold">Điểm Quiz TB</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
          <div>Trường học: <strong className="text-white">{student.schoolName}</strong></div>
          <div>Tỉnh / TP: <strong className="text-white">{student.province}</strong></div>
          <div>Ngày đăng ký: <strong className="text-white">{new Date(student.createdAt).toLocaleDateString('vi-VN')}</strong></div>
        </div>
      </div>

      {/* Certificates Section */}
      {certificates.length > 0 && (
        <div className="p-5 rounded-3xl bg-slate-950/80 border border-amber-500/30 space-y-3">
          <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            Giấy Chứng Nhận Số Đã Cấp ({certificates.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certificates.map((c: any) => (
              <div key={c.id} className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white truncate max-w-[200px]">{c.lessonTitle}</div>
                  <div className="text-[10px] text-slate-400">
                    Khối {c.grade} • Điểm: <strong className="text-emerald-400">{c.scorePercent}%</strong>
                  </div>
                  <div className="text-[9px] text-slate-500">
                    Cấp ngày: {new Date(c.issuedAt).toLocaleDateString('vi-VN')}
                  </div>
                </div>
                <span className="text-2xl">📜</span>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Grade Selector Tabs for Progress Inspection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            Chi Tiết Kết Quả Từng Bài Học
          </h4>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
            {([10, 11, 12] as const).map(g => (
              <button
                key={g}
                onClick={() => {
                  sounds.playClick();
                  setActiveGrade(g);
                }}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  activeGrade === g
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Lớp {g}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Array.from({ length: totalLessons }, (_, i) => {
            const lessonId = i + 1;
            const lesson = getLesson(activeGrade, lessonId);
            const p = gradeProgress[lessonId];
            const isCompleted = p?.isCompleted || false;
            const quizScore = p?.quizScorePercent || 0;

            return (
              <div 
                key={lessonId}
                className={`p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-3 text-xs ${
                  isCompleted
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-slate-950/50 border-slate-800/80 opacity-75'
                }`}
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      Bài {lessonId}
                    </span>
                    <span className="truncate font-semibold text-slate-200">
                      {lesson.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] pt-1">
                    <span className={isCompleted ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                      {isCompleted ? '✓ Đã hoàn thành' : 'Chưa học'}
                    </span>
                    {p?.quizAttempts ? (
                      <span className="text-cyan-400">
                        Điểm: <strong>{quizScore}%</strong> ({p.quizAttempts} lần làm)
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="shrink-0 pt-0.5">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-slate-600" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
