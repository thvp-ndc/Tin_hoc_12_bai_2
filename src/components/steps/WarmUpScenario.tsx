import React, { useState } from 'react';
import { 
  Compass, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import { Lesson, PollOption } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface WarmUpScenarioProps {
  lesson: Lesson;
  onAnswerPoll: (xpGain: number) => void;
  hasAnswered: boolean;
}

export const WarmUpScenario: React.FC<WarmUpScenarioProps> = ({
  lesson,
  onAnswerPoll,
  hasAnswered
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const handleVote = (option: PollOption) => {
    if (selectedOptionId) return; // Prevent double vote
    sounds.playCorrect();
    setSelectedOptionId(option.id);
    if (!hasAnswered) {
      onAnswerPoll(20);
    }
  };

  const selectedOption = lesson.warmup.pollOptions.find(o => o.id === selectedOptionId);

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white shadow-floating shrink-0">
            <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-400">Bước 3 / 8</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">Khởi Động & Tình Huống Thực Tế</h2>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          +20 XP
        </div>
      </div>

      {/* Main Scenario Box */}
      <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-850 border border-slate-700/80 p-4 sm:p-8 shadow-floating-lg space-y-5 sm:space-y-6">
        {/* Story Paragraph */}
        <div className="space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            Tình huống gợi mở
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
            {lesson.warmup.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-base md:text-lg leading-relaxed bg-slate-800/40 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-700/60">
            {lesson.warmup.scenario}
          </p>
        </div>

        {/* Quick Poll Widget */}
        <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
          <div className="flex items-start sm:items-center gap-2 text-slate-200 font-bold text-sm sm:text-lg">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5 sm:mt-0" />
            <span>{lesson.warmup.pollQuestion}</span>
          </div>


          {/* Options List */}
          <div className="space-y-3">
            {lesson.warmup.pollOptions.map((opt) => {
              const isSelected = selectedOptionId === opt.id;
              const isVoted = selectedOptionId !== null;

              return (
                <div
                  key={opt.id}
                  onClick={() => handleVote(opt)}
                  className={`relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/40 shadow-glow-cyan'
                      : isVoted
                      ? 'border-slate-800 bg-slate-900/60 opacity-90'
                      : 'border-slate-700 hover:border-cyan-500 bg-slate-800/60 hover:bg-slate-800 hover:scale-[1.01]'
                  }`}
                >
                  {/* Live Percentage Fill Bar (Visible after vote) */}
                  {isVoted && (
                    <div 
                      className={`absolute top-0 bottom-0 left-0 transition-all duration-1000 ease-out ${
                        isSelected 
                          ? 'bg-cyan-500/20 border-r-2 border-cyan-400' 
                          : 'bg-slate-700/30'
                      }`}
                      style={{ width: `${opt.votesPercent}%` }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        isSelected 
                          ? 'bg-cyan-400 text-slate-950' 
                          : 'bg-slate-700 text-slate-300'
                      }`}>
                        {isSelected ? <CheckCircle2 className="w-4 h-4" /> : opt.id.slice(-1)}
                      </div>
                      <span className={`text-sm sm:text-base font-medium ${
                        isSelected ? 'text-cyan-200 font-bold' : 'text-slate-200'
                      }`}>
                        {opt.text}
                      </span>
                    </div>

                    {/* Percentage Tag (Visible after vote) */}
                    {isVoted && (
                      <span className="font-extrabold text-sm sm:text-base text-cyan-300 shrink-0">
                        {opt.votesPercent}%
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feedback & Insight Box (Appears after voting) */}
          {selectedOption && (
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/40 animate-in fade-in duration-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Phân tích nhận định:</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {selectedOption.insight}
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-xs text-slate-400 italic">
                💡 <span className="font-semibold text-slate-300">Gợi mở: </span>{lesson.warmup.reflection}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
