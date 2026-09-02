import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Eye, 
  GraduationCap, 
  ArrowUpDown,
  BookOpen,
  MapPin,
  School
} from 'lucide-react';
import { StudentUser } from '../../types/auth';
import { calculateStudentStats } from '../../services/progressService';
import { sounds } from '../../utils/soundEffects';

interface StudentRosterTableProps {
  students: StudentUser[];
  onSelectStudent: (student: StudentUser) => void;
}

export const StudentRosterTable: React.FC<StudentRosterTableProps> = ({
  students,
  onSelectStudent
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'name' | 'xp' | 'completed' | 'recent'>('recent');

  // Lấy danh sách các lớp học độc nhất
  const uniqueClasses = Array.from(new Set(students.map(s => s.className))).sort();

  // Lọc học sinh
  const filtered = students.filter(std => {
    const matchSearch = 
      std.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.schoolName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.province.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.className.toLowerCase().includes(searchQuery.toLowerCase());

    const matchClass = selectedClass === 'ALL' || std.className === selectedClass;

    return matchSearch && matchClass;
  });

  // Tính toán trước stats cho từng học sinh để sắp xếp
  const studentsWithStats = filtered.map(std => ({
    student: std,
    stats: calculateStudentStats(std.id)
  }));

  studentsWithStats.sort((a, b) => {
    if (sortBy === 'name') {
      return a.student.fullName.localeCompare(b.student.fullName, 'vi');
    }
    if (sortBy === 'xp') {
      return b.stats.totalXp - a.stats.totalXp;
    }
    if (sortBy === 'completed') {
      return b.stats.completedCount - a.stats.completedCount;
    }
    // 'recent'
    return new Date(b.student.lastActiveAt).getTime() - new Date(a.student.lastActiveAt).getTime();
  });

  return (
    <div className="space-y-4 animate-fade-in">
      
      {/* Search & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
        
        {/* Search */}
        <div className="relative flex-1 min-w-[220px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên học sinh, lớp, trường, tỉnh..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Filter by Class */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Lớp:</span>
            <select
              value={selectedClass}
              onChange={e => setSelectedClass(e.target.value)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
            >
              <option value="ALL">Tất cả lớp ({students.length})</option>
              {uniqueClasses.map(cls => (
                <option key={cls} value={cls}>
                  Lớp {cls}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
            >
              <option value="recent">Mới hoạt động</option>
              <option value="xp">Điểm XP cao nhất</option>
              <option value="completed">Bài hoàn thành nhiều nhất</option>
              <option value="name">Tên A-Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Roster Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/60">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
              <th className="py-3 px-4">STT</th>
              <th className="py-3 px-4">Học Sinh</th>
              <th className="py-3 px-4">Lớp</th>
              <th className="py-3 px-4">Trường & Tỉnh</th>
              <th className="py-3 px-4 text-center">Bài Hoàn Thành</th>
              <th className="py-3 px-4 text-right">Tổng XP</th>
              <th className="py-3 px-4 text-center">Điểm Quiz TB</th>
              <th className="py-3 px-4 text-right">Hoạt Động</th>
              <th className="py-3 px-4 text-center">Thao Tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-200">
            {studentsWithStats.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-10 text-slate-500">
                  Không tìm thấy học sinh nào phù hợp với bộ lọc.
                </td>
              </tr>
            ) : (
              studentsWithStats.map((item, idx) => {
                const std = item.student;
                const stats = item.stats;
                const lastActive = new Date(std.lastActiveAt).toLocaleString('vi-VN', {
                  day: '2-digit',
                  month: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <tr key={std.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3 px-4 text-slate-500 font-mono">{idx + 1}</td>
                    
                    {/* Name & Username */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{std.avatar || '👨‍💻'}</span>
                        <div>
                          <div className="font-bold text-white hover:text-cyan-300 cursor-pointer" onClick={() => onSelectStudent(std)}>
                            {std.fullName}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">@{std.username}</div>
                        </div>
                      </div>
                    </td>

                    {/* Class */}
                    <td className="py-3 px-4">
                      <span className="font-bold px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {std.className}
                      </span>
                    </td>

                    {/* School & Province */}
                    <td className="py-3 px-4">
                      <div className="truncate max-w-[180px] text-slate-300">{std.schoolName}</div>
                      <div className="text-[10px] text-slate-400">{std.province}</div>
                    </td>

                    {/* Completed Count & Certificates */}
                    <td className="py-3 px-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-emerald-400">
                          {stats.completedCount} bài
                        </span>
                        {stats.certificatesCount > 0 && (
                          <span className="text-[10px] text-amber-300 font-semibold flex items-center gap-0.5">
                            📜 {stats.certificatesCount} chứng chỉ
                          </span>
                        )}
                      </div>
                    </td>


                    {/* XP */}
                    <td className="py-3 px-4 text-right">
                      <span className="font-extrabold text-amber-300">
                        +{stats.totalXp}
                      </span>
                    </td>

                    {/* Average Quiz */}
                    <td className="py-3 px-4 text-center">
                      <span className={`font-bold px-2 py-0.5 rounded-md ${
                        stats.avgQuizScore >= 80 ? 'bg-emerald-500/20 text-emerald-300' :
                        stats.avgQuizScore >= 50 ? 'bg-amber-500/20 text-amber-300' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {stats.avgQuizScore > 0 ? `${stats.avgQuizScore}%` : '—'}
                      </span>
                    </td>

                    {/* Last Active */}
                    <td className="py-3 px-4 text-right text-[11px] text-slate-400">
                      {lastActive}
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          onSelectStudent(std);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-colors cursor-pointer"
                        title="Xem chi tiết tiến độ bài học của học sinh"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};
