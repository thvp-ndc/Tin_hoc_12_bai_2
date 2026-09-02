import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Tv, 
  ArrowUp,
  Award
} from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface SmartboardControlsProps {
  activeStep: number;
  totalSteps: number;
  onStepChange: (step: number) => void;
  onScrollToTop: () => void;
  onOpenCompletion: () => void;
}

export const SmartboardControls: React.FC<SmartboardControlsProps> = ({
  activeStep,
  totalSteps,
  onStepChange,
  onScrollToTop,
  onOpenCompletion
}) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 p-2 rounded-2xl bg-slate-900/95 border border-cyan-500/50 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom">
      {/* Teacher/Smartboard Indicator */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
        <Tv className="w-4 h-4 text-cyan-400" />
        <span>Trình chiếu: Bước {activeStep}/{totalSteps}</span>
      </div>

      {/* Prev Step Button */}
      <button
        disabled={activeStep <= 1}
        onClick={() => {
          sounds.playClick();
          onStepChange(activeStep - 1);
        }}
        className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold transition-all"
        title="Bước trước (Phím mũi tên trái)"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next Step Button */}
      <button
        disabled={activeStep >= totalSteps}
        onClick={() => {
          sounds.playClick();
          onStepChange(activeStep + 1);
        }}
        className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black transition-all flex items-center gap-1.5 shadow-glow-cyan"
        title="Bước tiếp theo (Phím mũi tên phải)"
      >
        <span>Bước tiếp</span>
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Trigger Step 8 Victory Modal */}
      <button
        onClick={() => {
          sounds.playWin();
          onOpenCompletion();
        }}
        className="p-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/40 transition-all"
        title="Mở màn hình vinh danh hoàn thành bài học"
      >
        <Award className="w-5 h-5" />
      </button>

      {/* Scroll to Top */}
      <button
        onClick={() => {
          sounds.playClick();
          onScrollToTop();
        }}
        className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all"
        title="Cuộn lên đầu trang"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
