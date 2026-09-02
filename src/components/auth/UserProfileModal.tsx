import React from 'react';
import { 
  X, 
  User, 
  School, 
  MapPin, 
  BookOpen, 
  Award, 
  Sparkles, 
  LogOut, 
  CheckCircle2, 
  GraduationCap,
  Calendar
} from 'lucide-react';
import { StudentUser } from '../../types/auth';
import { calculateStudentStats, getStudentCertificates } from '../../services/progressService';
import { sounds } from '../../utils/soundEffects';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: StudentUser;
  onLogout: () => void;
}

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogout
}) => {
  if (!isOpen) return null;

  const stats = calculateStudentStats(user.id);
  const certificates = getStudentCertificates(user.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-white flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl p-2 rounded-2xl bg-gradient-to-tr from-cyan-600/30 to-indigo-600/30 border border-cyan-500/30">
              {user.avatar || '👨‍💻'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{user.fullName}</h3>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                  {user.className}
                </span>
              </div>
              <p className="text-xs text-slate-400">@{user.username} • Học sinh THPT</p>
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <School className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Trường:</strong> {user.schoolName}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Tỉnh/TP:</strong> {user.province}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Lớp:</strong> {user.className}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
              <span><strong>Ngày tham gia:</strong> {new Date(user.createdAt).toLocaleDateString('vi-VN')}</span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 text-center space-y-1">
              <Sparkles className="w-5 h-5 text-amber-400 mx-auto" />
              <div className="text-xl sm:text-2xl font-black text-amber-300">+{stats.totalXp}</div>
              <div className="text-[10px] sm:text-xs text-amber-400/80 font-bold uppercase">Điểm Kinh Nghiệm</div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-center space-y-1">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 mx-auto" />
              <div className="text-xl sm:text-2xl font-black text-cyan-300">{stats.completedCount}</div>
              <div className="text-[10px] sm:text-xs text-cyan-400/80 font-bold uppercase">Bài Hoàn Thành</div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 text-center space-y-1">
              <Award className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-xl sm:text-2xl font-black text-emerald-300">{stats.avgQuizScore}%</div>
              <div className="text-[10px] sm:text-xs text-emerald-400/80 font-bold uppercase">Điểm Trắc Nghiệm TB</div>
            </div>
          </div>

          {/* Progress by Grade */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Tiến Độ Học Tập Theo Từng Khối Lớp
            </h4>

            <div className="space-y-2.5">
              {/* Lớp 10 */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Tin học 10 (34 bài)</span>
                  <span className="font-bold text-emerald-400">{stats.completedByGrade[10]} / 34 bài ({Math.round((stats.completedByGrade[10]/34)*100)}%)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-1.5 rounded-full transition-all" 
                    style={{ width: `${(stats.completedByGrade[10]/34)*100}%` }}
                  />
                </div>
              </div>

              {/* Lớp 11 */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Tin học 11 - Định hướng Ứng dụng (31 bài)</span>
                  <span className="font-bold text-purple-400">{stats.completedByGrade[11]} / 31 bài ({Math.round((stats.completedByGrade[11]/31)*100)}%)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-purple-500 h-1.5 rounded-full transition-all" 
                    style={{ width: `${(stats.completedByGrade[11]/31)*100}%` }}
                  />
                </div>
              </div>

              {/* Lớp 12 */}
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300">Tin học 12 - Định hướng Ứng dụng (28 bài)</span>
                  <span className="font-bold text-cyan-400">{stats.completedByGrade[12]} / 28 bài ({Math.round((stats.completedByGrade[12]/28)*100)}%)</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-cyan-500 h-1.5 rounded-full transition-all" 
                    style={{ width: `${(stats.completedByGrade[12]/28)*100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Earned */}
          {certificates.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                Giấy Chứng Nhận Đã Nhận ({certificates.length})
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certificates.slice(-4).map((cert: any) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30 flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-amber-300 truncate max-w-[200px]">{cert.lessonTitle}</div>
                      <div className="text-[10px] text-slate-400">Tin học {cert.grade} • Đạt {cert.scorePercent}%</div>
                    </div>
                    <span className="text-lg">📜</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <button
            onClick={() => {
              sounds.playClick();
              onLogout();
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng Xuất Tài Khoản</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>

      </div>
    </div>
  );
};
