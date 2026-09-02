import React, { useEffect } from 'react';
import { 
  Trophy, 
  Sparkles, 
  Award, 
  RotateCcw, 
  ChevronRight, 
  CheckCircle2, 
  X,
  Share2,
  GraduationCap
} from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

interface CompletionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: Lesson;
  xpEarned: number;
  onOpenCertificate: () => void;
  onRetryLesson: () => void;
  onNextLesson: () => void;
  hasNextLesson: boolean;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  isOpen,
  onClose,
  lesson,
  xpEarned,
  onOpenCertificate,
  onRetryLesson,
  onNextLesson,
  hasNextLesson
}) => {
  useEffect(() => {
    if (isOpen) {
      sounds.playWin();
      // Multi-angle Confetti Cannon
      const count = 200;
      const defaults = { origin: { y: 0.7 } };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, { spread: 26, startVelocity: 55 });
      fire(0.2, { spread: 60 });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
      fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
      fire(0.1, { spread: 120, startVelocity: 45 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 text-white shadow-2xl text-center space-y-6">
        {/* Close Button */}
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Central Floating Trophy Graphic */}
        <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-300 p-0.5 shadow-glow-cyan animate-bounce flex items-center justify-center">
          <div className="w-full h-full rounded-[22px] bg-slate-950/80 flex items-center justify-center">
            <Trophy className="w-12 h-12 text-amber-400" />
          </div>
        </div>

        {/* Congratulations Title */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            HOÀN THÀNH BÀI HỌC 8 BƯỚC
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            CHÚC MỪNG BẠN!
          </h2>
          <p className="text-slate-300 text-sm">
            {lesson.completion.congratsMessage}
          </p>
        </div>

        {/* Reward Badges & XP summary card */}
        <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Điểm kinh nghiệm</span>
            <div className="text-xl font-black text-amber-300">+{xpEarned} XP</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-center space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400">Huy hiệu đạt được</span>
            <div className="text-xs sm:text-sm font-bold text-cyan-300 truncate">
              {lesson.completion.badgeName}
            </div>
          </div>
        </div>

        {/* Skills Unlocked Badges */}
        <div className="space-y-2 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Năng lực Tin học 12 đã mở khóa:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {lesson.completion.skillsUnlocked.map((sk, idx) => (
              <span key={idx} className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {sk}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCertificate();
            }}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm sm:text-base shadow-glow-primary hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Nhận Chứng Nhận Điện Tử</span>
          </button>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => {
                sounds.playClick();
                onRetryLesson();
              }}
              className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs sm:text-sm font-semibold border border-slate-700 transition-all flex items-center justify-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Học lại</span>
            </button>

            <button
              disabled={!hasNextLesson}
              onClick={() => {
                sounds.playClick();
                onNextLesson();
              }}
              className="py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold shadow-glow-cyan transition-all flex items-center justify-center gap-1"
            >
              <span>Bài tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
