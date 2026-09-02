import React, { useState } from 'react';
import { 
  CheckSquare, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  HelpCircle,
  ChevronRight,
  Lightbulb
} from 'lucide-react';
import { Lesson, QuizQuestion } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface AssessmentQuizProps {
  lesson: Lesson;
  onQuizCompleted: (score: number, total: number, xpGain: number) => void;
  hasCompletedQuiz: boolean;
}

export const AssessmentQuiz: React.FC<AssessmentQuizProps> = ({
  lesson,
  onQuizCompleted,
  hasCompletedQuiz
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // qId -> selectedOptionIndex
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [showSummary, setShowSummary] = useState<boolean>(false);

  const questions = lesson.assessment;
  const currentQ: QuizQuestion = questions[currentQIndex] || questions[0];

  const handleSelectOption = (qId: number, optionIdx: number) => {
    if (userAnswers[qId] !== undefined) return; // Prevent changing after choice

    const isCorrect = optionIdx === currentQ.correctIndex;
    if (isCorrect) {
      sounds.playCorrect();
    } else {
      sounds.playIncorrect();
    }

    const updated = { ...userAnswers, [qId]: optionIdx };
    setUserAnswers(updated);

    // If this is the last question answered
    if (Object.keys(updated).length === questions.length) {
      const correctCount = questions.reduce((acc, q) => acc + (updated[q.id] === q.correctIndex ? 1 : 0), 0);
      sounds.playWin();
      if (!hasCompletedQuiz) {
        onQuizCompleted(correctCount, questions.length, 100);
      }
    }
  };

  const handleResetQuiz = () => {
    sounds.playClick();
    setUserAnswers({});
    setCurrentQIndex(0);
    setShowSummary(false);
  };

  const totalAnswered = Object.keys(userAnswers).length;
  const correctCount = questions.reduce((acc, q) => acc + (userAnswers[q.id] === q.correctIndex ? 1 : 0), 0);
  const scorePercent = Math.round((correctCount / questions.length) * 100);

  return (
    <section className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-600 text-white shadow-floating shrink-0">
            <CheckSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-rose-400">Bước 6 / 8</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">Tự Đánh Giá & Phản Hồi Trắc Nghiệm</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            +100 XP
          </div>
          <button
            onClick={handleResetQuiz}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all"
            title="Làm lại bài kiểm tra"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Quiz Card */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 p-4 sm:p-8 shadow-floating-lg space-y-5 sm:space-y-6 text-white">
        {/* Question Selector Dots / Progress */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 sm:pb-4 border-b border-slate-800">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
            {questions.map((q, idx) => {
              const isAnswered = userAnswers[q.id] !== undefined;
              const isCorrect = userAnswers[q.id] === q.correctIndex;
              const isCurrent = currentQIndex === idx;

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    sounds.playClick();
                    setCurrentQIndex(idx);
                  }}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl font-bold text-xs transition-all flex items-center justify-center border shrink-0 ${
                    isCurrent
                      ? 'border-cyan-400 bg-cyan-500 text-slate-950 shadow-glow-cyan scale-105 sm:scale-110'
                      : isAnswered
                      ? isCorrect
                        ? 'border-emerald-500/40 bg-emerald-950/40 text-emerald-400'
                        : 'border-rose-500/40 bg-rose-950/40 text-rose-400'
                      : 'border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-750'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] sm:text-xs text-slate-400">
            Đã làm: <span className="font-bold text-white">{totalAnswered}/{questions.length} câu</span>
          </div>
        </div>

        {/* Current Question View */}
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Câu {currentQIndex + 1} / {questions.length} • {currentQ.difficulty}
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>


          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((optionText, optIdx) => {
              const hasAnsweredCurrent = userAnswers[currentQ.id] !== undefined;
              const isSelected = userAnswers[currentQ.id] === optIdx;
              const isCorrectAnswer = optIdx === currentQ.correctIndex;

              let styleClasses = 'bg-slate-800/80 border-slate-700 hover:border-cyan-400 hover:bg-slate-750 text-slate-200';

              if (hasAnsweredCurrent) {
                if (isCorrectAnswer) {
                  styleClasses = 'bg-emerald-950/60 border-emerald-400 text-emerald-200 shadow-glow-primary font-bold';
                } else if (isSelected) {
                  styleClasses = 'bg-rose-950/60 border-rose-400 text-rose-200';
                } else {
                  styleClasses = 'bg-slate-900/40 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <div
                  key={optIdx}
                  onClick={() => handleSelectOption(currentQ.id, optIdx)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${styleClasses}`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border ${
                      hasAnsweredCurrent && isCorrectAnswer
                        ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                        : hasAnsweredCurrent && isSelected
                        ? 'bg-rose-500 text-white border-rose-300'
                        : 'bg-slate-700 text-slate-300 border-slate-600'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </div>
                    <span className="text-xs sm:text-base leading-relaxed">{optionText}</span>
                  </div>


                  {hasAnsweredCurrent && (
                    <div className="shrink-0">
                      {isCorrectAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-in zoom-in" />}
                      {!isCorrectAnswer && isSelected && <XCircle className="w-5 h-5 text-rose-400 animate-in zoom-in" />}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Explanation Box (Appears after answer) */}
          {userAnswers[currentQ.id] !== undefined && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 animate-in fade-in duration-300 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Giải thích chi tiết (Chuẩn SGK GDPT 2018):</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next / Previous Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              disabled={currentQIndex === 0}
              onClick={() => {
                sounds.playClick();
                setCurrentQIndex(prev => Math.max(0, prev - 1));
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              ← Câu trước
            </button>

            <button
              disabled={currentQIndex === questions.length - 1}
              onClick={() => {
                sounds.playClick();
                setCurrentQIndex(prev => Math.min(questions.length - 1, prev + 1));
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1 shadow-glow-cyan"
            >
              <span>Câu tiếp theo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Total Score Report Banner (When all answered) */}
        {totalAnswered === questions.length && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950 to-indigo-950 border border-cyan-500 text-center space-y-3 animate-in zoom-in-95 shadow-floating-lg">
            <Award className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-black text-white">BẢNG ĐIỂM ĐÁNH GIÁ NĂNG LỰC</h4>
            <div className="text-3xl font-black text-cyan-300">
              {correctCount} / {questions.length} Câu Đúng ({scorePercent}%)
            </div>
            <p className="text-sm text-slate-300">
              {scorePercent >= 80 
                ? 'Xuất sắc! Bạn đã nắm vững toàn bộ kiến thức trọng tâm của bài học.'
                : 'Khá tốt! Bạn có thể xem lại phần giải thích chi tiết hoặc bấm làm lại để đạt điểm 100% nhé!'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
