import React, { useState } from 'react';
import { 
  X, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  ChevronRight,
  Filter,
  GraduationCap
} from 'lucide-react';
import { THEME_GROUPS } from '../../data/themesData';
import { getLessonById } from '../../data/lessonsData';
import { sounds } from '../../utils/soundEffects';

interface LessonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  completedLessons: number[];
}

export const LessonDrawer: React.FC<LessonDrawerProps> = ({
  isOpen,
  onClose,
  currentLessonId,
  onSelectLesson,
  completedLessons
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);

  if (!isOpen) return null;

  // Generate list of all 28 lessons
  const allLessons = Array.from({ length: 28 }, (_, i) => getLessonById(i + 1));

  const filteredLessons = allLessons.filter(lesson => {
    const matchesSearch = 
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.themeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `Bài ${lesson.id}`.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTheme = selectedThemeId === null || lesson.themeId === selectedThemeId;

    return matchesSearch && matchesTheme;
  });

  const completionPercentage = Math.round((completedLessons.length / 28) * 100);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
      />

      {/* Drawer Body */}
      <div className="relative ml-auto w-full max-w-md sm:max-w-lg bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col h-full z-10 text-white animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-glow-cyan">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100">Mục Lục Sách Giáo Khoa</h2>
              <p className="text-xs text-slate-400">Tin học 12 • Định hướng Tin học Ứng dụng</p>
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

        {/* Course Progress Card */}
        <div className="p-4 bg-slate-800/40 border-b border-slate-800 mx-4 mt-4 rounded-2xl">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-slate-300">Tiến độ hoàn thành môn học:</span>
            <span className="font-bold text-cyan-400">{completedLessons.length}/28 Bài ({completionPercentage}%)</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {/* Search & Filter */}
        <div className="p-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên bài, chủ đề..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
          </div>

          {/* Theme Badges Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedThemeId(null);
              }}
              className={`px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all ${
                selectedThemeId === null 
                  ? 'bg-cyan-500 text-slate-950 font-bold' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              Tất cả (28)
            </button>
            {THEME_GROUPS.map(theme => (
              <button
                key={theme.id}
                onClick={() => {
                  sounds.playClick();
                  setSelectedThemeId(theme.id === selectedThemeId ? null : theme.id);
                }}
                className={`px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all ${
                  selectedThemeId === theme.id 
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                CĐ {theme.id}
              </button>
            ))}
          </div>
        </div>

        {/* Lessons List */}
        <div className="flex-1 overflow-y-auto px-4 pb-6 space-y-2.5">
          {filteredLessons.map(lesson => {
            const isSelected = lesson.id === currentLessonId;
            const isCompleted = completedLessons.includes(lesson.id);

            return (
              <div
                key={lesson.id}
                onClick={() => {
                  sounds.playClick();
                  onSelectLesson(lesson.id);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 group ${
                  isSelected 
                    ? 'bg-gradient-to-r from-blue-900/60 to-cyan-900/40 border-cyan-500 shadow-glow-cyan' 
                    : 'bg-slate-800/60 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center font-bold text-xs ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-black'
                      : isCompleted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : lesson.id}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                      <span className="font-semibold text-cyan-400">{lesson.code}</span>
                      <span>•</span>
                      <span className="truncate">{lesson.themeName.split(':')[0]}</span>
                    </div>
                    <h3 className={`text-sm font-semibold truncate ${
                      isSelected ? 'text-cyan-300 font-bold' : 'text-slate-100 group-hover:text-cyan-400'
                    }`}>
                      Bài {lesson.id}: {lesson.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600">
                    +{lesson.xpTotal} XP
                  </span>
                  <ChevronRight className={`w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all ${
                    isSelected ? 'text-cyan-400' : ''
                  }`} />
                </div>
              </div>
            );
          })}

          {filteredLessons.length === 0 && (
            <div className="p-8 text-center text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-600" />
              <p className="text-sm">Không tìm thấy bài học phù hợp với từ khóa.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
