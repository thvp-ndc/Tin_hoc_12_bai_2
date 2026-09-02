import React from 'react';
import { 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Tv, 
  Maximize2, 
  Minimize2, 
  Menu, 
  GraduationCap,
  Network,
  ShieldCheck
} from 'lucide-react';

import { Lesson } from '../../types/lesson';
import { StudentUser } from '../../types/auth';
import { UserMenu } from '../auth/UserMenu';
import { sounds } from '../../utils/soundEffects';

interface HeaderProps {
  currentLesson: Lesson;
  currentGrade: 10 | 11 | 12;
  totalLessonsInGrade: number;
  onSelectGrade: (grade: 10 | 11 | 12) => void;
  activeStep: number;
  totalSteps: number;
  xp: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  smartboardMode: boolean;
  onToggleSmartboard: () => void;
  onOpenDrawer: () => void;
  onStepSelect: (step: number) => void;
  onOpenCurriculumMindmap?: () => void;
  currentUser: StudentUser | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onOpenProfile: () => void;
  onOpenAdmin: () => void;
}


export const Header: React.FC<HeaderProps> = ({
  currentLesson,
  currentGrade,
  totalLessonsInGrade,
  onSelectGrade,
  activeStep,
  totalSteps,
  xp,
  soundEnabled,
  onToggleSound,
  smartboardMode,
  onToggleSmartboard,
  onOpenDrawer,
  onStepSelect,
  onOpenCurriculumMindmap,
  currentUser,
  onOpenAuth,
  onOpenProfile,
  onOpenAdmin,
}) => {


  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = () => {
    sounds.playClick();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const progressPercent = Math.round((activeStep / totalSteps) * 100);

  const stepLabels = [
    '1. Hero',
    '2. Mục tiêu',
    '3. Khởi động',
    '4. Khám phá',
    '5. Luyện tập',
    '6. Đánh giá',
    '7. Vận dụng',
    '8. Hoàn thành'
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-floating">
      {/* Top Navbar */}
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 min-h-[54px] md:h-16 flex items-center justify-between gap-2 sm:gap-4 py-1.5 md:py-0">
        {/* Left: Grade Switcher & Brand & Lesson Selector */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
          {/* Grade Switcher Pill */}
          <div className="flex items-center bg-slate-950/90 p-0.5 sm:p-1 rounded-xl sm:rounded-2xl border border-slate-800 shrink-0">
            {([10, 11, 12] as const).map(g => (
              <button
                key={g}
                onClick={() => {
                  sounds.playClick();
                  onSelectGrade(g);
                }}
                className={`px-2 sm:px-2.5 py-1 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  currentGrade === g
                    ? g === 10
                      ? 'bg-emerald-500 text-slate-950 shadow-glow-primary'
                      : g === 11
                      ? 'bg-purple-500 text-slate-950 shadow-glow-purple'
                      : 'bg-cyan-500 text-slate-950 shadow-glow-cyan'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
                title={`Chuyển sang Sách giáo khoa Tin học Lớp ${g}`}
              >
                <span className="hidden sm:inline">Lớp </span>{g}
              </button>
            ))}
          </div>

          {/* Lesson Drawer Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenDrawer();
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-cyan-400 hover:text-white transition-all flex items-center gap-1 sm:gap-2 border border-slate-700 hover:border-cyan-500 shadow-sm group shrink-0"
            title={`Mục lục bài học Lớp ${currentGrade}`}
          >
            <Menu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200">
              Bài {currentLesson.id}<span className="hidden md:inline">/{totalLessonsInGrade}</span>
            </span>
          </button>

          {/* Desktop Title & Theme Display */}
          <div className="hidden md:flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                currentGrade === 10
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : currentGrade === 11
                  ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                  : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
              }`}>
                TIN {currentGrade} {currentGrade >= 11 ? '• ỨNG DỤNG' : '• NỀN TẢNG'}
              </span>
              <span className="hidden lg:inline text-slate-400 text-xs truncate">
                {currentLesson.themeName}
              </span>
            </div>
            <h1 
              className="text-sm sm:text-base font-bold text-slate-100 truncate hover:text-cyan-300 cursor-pointer" 
              onClick={onOpenDrawer}
              title={`Bài ${currentLesson.id}: ${currentLesson.title}`}
            >
              Bài {currentLesson.id}: {currentLesson.title}
            </h1>
          </div>
        </div>

        {/* Right: Gamification & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Master Curriculum Mindmap Button */}
          {onOpenCurriculumMindmap && (
            <button
              onClick={() => {
                sounds.playClick();
                onOpenCurriculumMindmap();
              }}
              className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-indigo-600/80 to-blue-600/80 hover:from-indigo-500 hover:to-blue-500 text-white border border-indigo-400/30 text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95 shrink-0"
              title="Xem Sơ đồ tư duy tổng quát toàn bộ các bài học trong năm học"
            >
              <Network className="w-4 h-4 text-cyan-300 shrink-0" />
              <span className="hidden md:inline">Sơ đồ tổng quát</span>
            </button>
          )}

          {/* Teacher Admin Dashboard Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenAdmin();
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-amber-500/20 text-slate-300 hover:text-amber-400 border border-slate-700 hover:border-amber-500/40 transition-all cursor-pointer shrink-0 flex items-center gap-1"
            title="Cổng Quản trị giáo viên (Theo dõi học sinh & xuất báo cáo)"
          >
            <ShieldCheck className="w-4 h-4 shrink-0 text-amber-400" />
            <span className="hidden xl:inline text-xs font-bold text-amber-400">Quản trị</span>
          </button>

          {/* Student Auth & Profile */}
          <UserMenu
            currentUser={currentUser}
            onOpenAuth={onOpenAuth}
            onOpenProfile={onOpenProfile}
          />

          {/* XP Counter (Tablet & Desktop) */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-300 shadow-inner shrink-0">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-amber-400/80 leading-none">Kinh nghiệm</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-200 leading-tight">+{xp} XP</span>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleSound();
            }}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all shrink-0"
            title={soundEnabled ? "Tắt âm thanh" : "Bật âm thanh"}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* Smartboard Toggle (Desktop) */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleSmartboard();
            }}
            className={`hidden lg:flex p-2 rounded-xl border transition-all ${
              smartboardMode 
                ? 'bg-cyan-500 text-slate-900 border-cyan-400 font-bold shadow-glow-cyan' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Bật/Tắt chế độ Trình chiếu Smartboard / TV phòng học"
          >
            <Tv className="w-4 h-4" />
          </button>

          {/* Fullscreen (Desktop) */}
          <button
            onClick={toggleFullscreen}
            className="hidden md:flex p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all"
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Lesson Title & XP Bar (Only on < md screens) */}
      <div 
        onClick={onOpenDrawer}
        className="md:hidden bg-slate-950/90 border-t border-slate-800/80 px-3 py-1.5 flex items-center justify-between gap-2 cursor-pointer hover:bg-slate-900 transition-colors"
        title="Nhấp để xem danh sách toàn bộ bài học"
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <span className={`px-1.5 py-0.5 rounded text-[10px] font-black shrink-0 border ${
            currentGrade === 10
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              : currentGrade === 11
              ? 'bg-purple-500/20 text-purple-300 border-purple-500/30'
              : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
          }`}>
            TIN {currentGrade}
          </span>
          <span className="text-xs font-bold text-slate-200 truncate">
            Bài {currentLesson.id}: {currentLesson.title}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            +{xp} XP
          </span>
          <Menu className="w-3.5 h-3.5 text-cyan-400" />
        </div>
      </div>


      {/* Progress & Step Navigator Ribbon */}
      <div className="bg-slate-950/60 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 text-xs overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="font-semibold text-cyan-400">Tiến độ bài học:</span>
          <span className="font-bold text-white">{progressPercent}%</span>
        </div>

        {/* 8-Step Quick Jump Indicator */}
        <div className="flex items-center gap-1 sm:gap-2">
          {stepLabels.map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = stepNum < activeStep;
            const isCurrent = stepNum === activeStep;

            return (
              <button
                key={stepNum}
                onClick={() => {
                  sounds.playClick();
                  onStepSelect(stepNum);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 shrink-0 ${
                  isCurrent
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-glow-cyan'
                    : isCompleted
                    ? 'bg-slate-800/90 text-emerald-400 hover:bg-slate-700 border border-emerald-500/30'
                    : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress Bar Line */}
      <div className="w-full bg-slate-800 h-1">
        <div 
          className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 h-1 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </header>
  );
};
