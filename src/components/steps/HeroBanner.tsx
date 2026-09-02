import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  ChevronLeft, 
  ChevronRight,
  PlayCircle
} from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface HeroBannerProps {
  lesson: Lesson;
  xp: number;
  onStartLearning: () => void;
  onPrevLesson: () => void;
  onNextLesson: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  lesson,
  xp,
  onStartLearning,
  onPrevLesson,
  onNextLesson,
  hasPrev,
  hasNext,
}) => {
  return (
    <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/80 border border-slate-800 p-4 sm:p-8 lg:p-12 shadow-floating-lg text-white">
      {/* Background Decorative Glow Elements */}
      <div className="absolute -top-24 -right-24 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Column: Lesson Metadata & CTA */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-white shadow-md ${
              lesson.grade === 10
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-glow-primary'
                : lesson.grade === 11
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-glow-purple'
                : 'bg-gradient-to-r from-blue-600 to-cyan-500 shadow-glow-cyan'
            }`}>
              KHỐI {lesson.grade} • {lesson.grade >= 11 ? 'TIN HỌC ỨNG DỤNG' : 'GDPT 2018'}
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-slate-800/90 text-cyan-300 border border-slate-700">
              {lesson.topicBadge}
            </span>
            <span className="flex items-center gap-1 text-[10px] sm:text-xs text-slate-400 px-2.5 sm:px-3 py-1 rounded-full bg-slate-800/60 border border-slate-800">
              <Clock className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-amber-400" />
              {lesson.estimatedMinutes} phút
            </span>
          </div>

          {/* Lesson Title */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="text-cyan-400 text-xs sm:text-sm font-bold tracking-wide uppercase">
              {lesson.themeName}
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Bài {lesson.id}: {lesson.title}
            </h1>
            <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
              {lesson.hero.description}
            </p>
          </div>

          {/* Key Highlight Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            {lesson.hero.keyHighlights.map((hl, i) => (
              <div 
                key={i}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-800/80 border border-slate-700/80 text-[11px] sm:text-xs text-slate-200"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{hl}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => {
                sounds.playClick();
                onStartLearning();
              }}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-glow-cyan hover:shadow-floating-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <PlayCircle className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>Bắt đầu học ngay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Quick Prev/Next Lesson Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
              <button
                disabled={!hasPrev}
                onClick={() => {
                  sounds.playClick();
                  onPrevLesson();
                }}
                className={`flex-1 sm:flex-initial p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all flex items-center justify-center ${
                  hasPrev
                    ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                    : 'bg-slate-900/40 border-slate-800/40 text-slate-600 cursor-not-allowed'
                }`}
                title="Bài trước"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="sm:hidden text-xs font-semibold ml-1">Bài trước</span>
              </button>

              <button
                disabled={!hasNext}
                onClick={() => {
                  sounds.playClick();
                  onNextLesson();
                }}
                className={`flex-1 sm:flex-initial p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all flex items-center justify-center ${
                  hasNext
                    ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200'
                    : 'bg-slate-900/40 border-slate-800/40 text-slate-600 cursor-not-allowed'
                }`}
                title="Bài tiếp theo"
              >
                <span className="sm:hidden text-xs font-semibold mr-1">Bài sau</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Isometric Tech Graphic Visual */}
        <div className="lg:col-span-5 flex justify-center pt-2 lg:pt-0">
          <div className="relative w-full max-w-[260px] sm:max-w-sm aspect-square rounded-2xl sm:rounded-3xl bg-gradient-to-tr from-slate-800/90 to-blue-900/40 border border-slate-700/60 p-4 sm:p-6 flex flex-col items-center justify-center shadow-floating group">

            {/* Animated Glow Rings */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />

            {/* Central 3D Tech Icon Graphic */}
            <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-0.5 shadow-glow-cyan animate-float flex items-center justify-center">
              <div className="w-full h-full rounded-[22px] bg-slate-950/80 backdrop-blur-md flex items-center justify-center">
                {lesson.themeId === 1 && <Cpu className="w-16 h-16 text-cyan-400 animate-pulse" />}
                {lesson.themeId === 2 && <Globe className="w-16 h-16 text-blue-400 animate-pulse" />}
                {lesson.themeId === 3 && <ShieldCheck className="w-16 h-16 text-emerald-400 animate-pulse" />}
                {lesson.themeId === 4 && <BookOpen className="w-16 h-16 text-purple-400 animate-pulse" />}
                {lesson.themeId >= 5 && <Sparkles className="w-16 h-16 text-amber-400 animate-pulse" />}
              </div>
            </div>

            {/* Micro Badges */}
            <div className="relative z-10 mt-6 grid grid-cols-2 gap-3 w-full">
              <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Thưởng hoàn thành</span>
                <div className="text-base font-extrabold text-amber-400">+{lesson.xpTotal} XP</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-700 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Huy hiệu</span>
                <div className="text-xs font-bold text-cyan-300 truncate">{lesson.completion.badgeName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
