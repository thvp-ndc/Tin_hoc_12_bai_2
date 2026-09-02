import React from 'react';
import { 
  Users, 
  CheckCircle2, 
  Award, 
  Sparkles, 
  TrendingUp, 
  BookOpen, 
  GraduationCap,
  Trophy
} from 'lucide-react';
import { AdminAnalytics } from '../../types/auth';

interface AnalyticsOverviewProps {
  analytics: AdminAnalytics;
}

export const AnalyticsOverview: React.FC<AnalyticsOverviewProps> = ({ analytics }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* 4 Core KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Total Students */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-blue-950/60 to-slate-900 border border-blue-500/30 space-y-2 shadow-floating">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Tổng Học Sinh</span>
            <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{analytics.totalStudents}</div>
          <div className="text-xs text-slate-400">Đã đăng ký tài khoản học tập</div>
        </div>

        {/* Total Lessons Completed */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/30 space-y-2 shadow-floating">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Bài Đã Hoàn Thành</span>
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{analytics.totalLessonsCompleted}</div>
          <div className="text-xs text-slate-400">Lượt hoàn tất 8 bước bài học</div>
        </div>

        {/* Avg Quiz Score */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-purple-950/60 to-slate-900 border border-purple-500/30 space-y-2 shadow-floating">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Điểm Trắc Nghiệm TB</span>
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-black text-white">{analytics.averageQuizScore}%</div>
          <div className="text-xs text-slate-400">Tỷ lệ trả lời đúng câu hỏi SGK</div>
        </div>

        {/* Active Grades */}
        <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-950/60 to-slate-900 border border-amber-500/30 space-y-2 shadow-floating">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Phân Phối Khối Lớp</span>
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-200 space-y-0.5">
            <div>Khối 10: <strong className="text-emerald-400">{analytics.studentsByGrade[10]}</strong> em</div>
            <div>Khối 11: <strong className="text-purple-400">{analytics.studentsByGrade[11]}</strong> em</div>
            <div>Khối 12: <strong className="text-cyan-400">{analytics.studentsByGrade[12]}</strong> em</div>
          </div>
        </div>

      </div>

      {/* Completion Rates & Leaderboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Progress Rate by Grade */}
        <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyan-400" />
            Tỷ Lệ Hoàn Thành Chương Trình Theo Khối
          </h4>

          <div className="space-y-4 pt-2">
            {/* Lớp 10 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Tin học 10 (34 bài học)</span>
                <span className="font-bold text-emerald-400">{analytics.completionRateByGrade[10]}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.completionRateByGrade[10]}%` }}
                />
              </div>
            </div>

            {/* Lớp 11 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Tin học 11 - Định hướng Ứng dụng (31 bài học)</span>
                <span className="font-bold text-purple-400">{analytics.completionRateByGrade[11]}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.completionRateByGrade[11]}%` }}
                />
              </div>
            </div>

            {/* Lớp 12 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-300">Tin học 12 - Định hướng Ứng dụng (28 bài học)</span>
                <span className="font-bold text-cyan-400">{analytics.completionRateByGrade[12]}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${analytics.completionRateByGrade[12]}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Leaderboard */}
        <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            Top Học Sinh Tích Cực Nhất
          </h4>

          {analytics.topStudents.length === 0 ? (
            <div className="text-center py-8 text-xs text-slate-500">
              Chưa có dữ liệu học sinh làm bài tập.
            </div>
          ) : (
            <div className="space-y-2.5 pt-1">
              {analytics.topStudents.slice(0, 5).map((std, idx) => (
                <div 
                  key={std.id}
                  className="p-2.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-black text-xs ${
                      idx === 0 ? 'bg-amber-400 text-slate-950 shadow-glow-primary' :
                      idx === 1 ? 'bg-slate-300 text-slate-950' :
                      idx === 2 ? 'bg-amber-600 text-white' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <div className="font-bold text-white">{std.fullName}</div>
                      <div className="text-[10px] text-slate-400">{std.className} • {std.schoolName}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-extrabold text-amber-300">+{std.totalXp} XP</div>
                    <div className="text-[10px] text-emerald-400">{std.completedCount} bài xong</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
