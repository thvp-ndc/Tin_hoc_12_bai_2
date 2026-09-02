import React from 'react';
import { 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Circle,
  Target,
  Sparkles
} from 'lucide-react';
import { Lesson, ObjectiveItem } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface ObjectiveCardsProps {
  lesson: Lesson;
  completedObjectives: string[];
  onToggleObjective: (id: string) => void;
}

export const ObjectiveCards: React.FC<ObjectiveCardsProps> = ({
  lesson,
  completedObjectives,
  onToggleObjective
}) => {
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'knowledge':
        return {
          icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
          bgGradient: 'from-cyan-900/30 to-blue-900/20',
          borderColor: 'border-cyan-500/40',
          badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
          activeGlow: 'shadow-glow-cyan'
        };
      case 'skill':
        return {
          icon: <Wrench className="w-6 h-6 text-purple-400" />,
          bgGradient: 'from-purple-900/30 to-indigo-900/20',
          borderColor: 'border-purple-500/40',
          badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
          activeGlow: 'shadow-glow-purple'
        };
      case 'attitude':
      default:
        return {
          icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
          bgGradient: 'from-emerald-900/30 to-teal-900/20',
          borderColor: 'border-emerald-500/40',
          badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          activeGlow: 'shadow-glow-primary'
        };
    }
  };

  return (
    <section className="space-y-6">
      {/* Step Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-glow-cyan">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Bước 2 / 8</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Mục Tiêu Bài Học</h2>
          </div>
        </div>
        <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
          Đã đạt {completedObjectives.length}/{lesson.objectives.length} mục tiêu
        </div>
      </div>

      <p className="text-slate-300 text-sm sm:text-base">
        Sau khi học xong bài này, học sinh sẽ làm chủ 3 chuẩn năng lực cốt lõi theo khung GDPT 2018. Hãy tích chọn khi bạn đã tự tin nắm vững từng phần:
      </p>

      {/* 3 Objective Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {lesson.objectives.map((obj) => {
          const theme = getCategoryTheme(obj.category);
          const isDone = completedObjectives.includes(obj.id);

          return (
            <div
              key={obj.id}
              onClick={() => {
                sounds.playCorrect();
                onToggleObjective(obj.id);
              }}
              className={`relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer group bg-gradient-to-b ${theme.bgGradient} ${
                isDone
                  ? 'border-emerald-500 shadow-glow-primary bg-slate-900/90'
                  : `${theme.borderColor} hover:border-slate-500 bg-slate-900/60 hover:-translate-y-1 shadow-floating`
              }`}
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-800/90 border border-slate-700 group-hover:scale-110 transition-transform">
                    {theme.icon}
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${theme.badgeColor}`}>
                    {obj.categoryName}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {obj.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {obj.description}
                  </p>
                </div>
              </div>

              {/* Card Bottom Status Checkbox */}
              <div className="pt-6 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className={isDone ? 'font-bold text-emerald-400' : 'text-slate-400'}>
                  {isDone ? '✓ Đã nắm vững' : 'Bấm để đánh dấu đã đạt'}
                </span>

                <div className={`p-1 rounded-full transition-colors ${
                  isDone ? 'text-emerald-400 bg-emerald-500/20' : 'text-slate-500 group-hover:text-slate-300'
                }`}>
                  {isDone ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
