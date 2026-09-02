import React, { useState } from 'react';
import { 
  Gamepad2, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  Trophy,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Lesson, MiniGame, DragDropItem, MatchingPair } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface InteractiveGameProps {
  lesson: Lesson;
  onGameCompleted: (xpGain: number) => void;
  hasWon: boolean;
}

export const InteractiveGame: React.FC<InteractiveGameProps> = ({
  lesson,
  onGameCompleted,
  hasWon
}) => {
  const game = lesson.miniGame;

  // State for Drag & Drop
  const [placedItems, setPlacedItems] = useState<Record<string, string>>({}); // itemId -> categoryId
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // State for Matching
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]); // pair ids matched

  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Drag-Drop Click Handler
  const handleSelectItem = (item: DragDropItem) => {
    sounds.playClick();
    setSelectedItemId(item.id === selectedItemId ? null : item.id);
  };

  const handlePlaceInCategory = (categoryId: string) => {
    if (!selectedItemId) return;
    const currentItem = game.dragItems?.find(i => i.id === selectedItemId);
    if (!currentItem) return;

    if (currentItem.category === categoryId) {
      sounds.playCorrect();
      const updated = { ...placedItems, [selectedItemId]: categoryId };
      setPlacedItems(updated);
      setSelectedItemId(null);
      setFeedbackMsg(`Chính xác! ${currentItem.explanation}`);

      // Check win condition
      if (game.dragItems && Object.keys(updated).length === game.dragItems.length) {
        sounds.playWin();
        if (!hasWon) onGameCompleted(50);
      }
    } else {
      sounds.playIncorrect();
      setFeedbackMsg('Chưa chính xác, hãy thử lại vào nhóm khác nhé!');
    }
  };

  // Matching Handler
  const handleLeftClick = (pairId: string) => {
    sounds.playClick();
    setSelectedLeft(pairId);
    if (selectedRight) {
      checkMatch(pairId, selectedRight);
    }
  };

  const handleRightClick = (pairId: string) => {
    sounds.playClick();
    setSelectedRight(pairId);
    if (selectedLeft) {
      checkMatch(selectedLeft, pairId);
    }
  };

  const checkMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      sounds.playCorrect();
      const updated = [...matchedPairs, leftId];
      setMatchedPairs(updated);
      setSelectedLeft(null);
      setSelectedRight(null);
      setFeedbackMsg('Tuyệt vời! Ghép đôi hoàn toàn chính xác.');

      if (game.matchingPairs && updated.length === game.matchingPairs.length) {
        sounds.playWin();
        if (!hasWon) onGameCompleted(50);
      }
    } else {
      sounds.playIncorrect();
      setSelectedLeft(null);
      setSelectedRight(null);
      setFeedbackMsg('Chưa khớp, hãy đọc kỹ khái niệm và ghép lại nhé!');
    }
  };

  const handleReset = () => {
    sounds.playClick();
    setPlacedItems({});
    setSelectedItemId(null);
    setSelectedLeft(null);
    setSelectedRight(null);
    setMatchedPairs([]);
    setFeedbackMsg(null);
  };

  const isComplete = game.type === 'drag-drop'
    ? (game.dragItems && Object.keys(placedItems).length === game.dragItems.length)
    : (game.matchingPairs && matchedPairs.length === game.matchingPairs.length);

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-600 text-white shadow-glow-cyan">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Bước 5 / 8</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Luyện Tập & Mini-Game "Thử Thách Tin Học"</h2>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            +50 XP
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-all"
            title="Chơi lại mini-game"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Game Container */}
      <div className="rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-floating-lg space-y-6 text-white">
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            {game.title}
          </h3>
          <p className="text-slate-300 text-sm">{game.instruction}</p>
        </div>

        {/* Feedback Message Banner */}
        {feedbackMsg && (
          <div className={`p-3.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 animate-in fade-in duration-200 ${
            feedbackMsg.includes('Chính xác') || feedbackMsg.includes('Tuyệt vời')
              ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/60 border border-rose-500/40 text-rose-300'
          }`}>
            {feedbackMsg.includes('Chính xác') || feedbackMsg.includes('Tuyệt vời') ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
            )}
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* GAME TYPE 1: DRAG AND DROP */}
        {game.type === 'drag-drop' && game.dragItems && game.categories && (
          <div className="space-y-6">
            {/* Unplaced Items Pool */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Các thẻ cần phân loại (Bấm chọn thẻ rồi bấm vào nhóm đích bên dưới):
              </div>
              <div className="flex flex-wrap gap-2.5">
                {game.dragItems.map((item) => {
                  const isPlaced = placedItems[item.id] !== undefined;
                  const isSelected = selectedItemId === item.id;

                  if (isPlaced) return null;

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-300 shadow-glow-cyan scale-105'
                          : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-cyan-400 hover:bg-slate-750'
                      }`}
                    >
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Target Category Bins */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {game.categories.map((cat) => {
                const itemsInThisCat = game.dragItems?.filter(i => placedItems[i.id] === cat.id) || [];

                return (
                  <div
                    key={cat.id}
                    onClick={() => handlePlaceInCategory(cat.id)}
                    className={`p-5 rounded-2xl border-2 transition-all cursor-pointer min-h-[160px] flex flex-col justify-between ${cat.color} ${
                      selectedItemId ? 'ring-2 ring-cyan-400/50 scale-[1.01]' : ''
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between font-bold text-sm sm:text-base">
                        <span>{cat.title}</span>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-900/60 border border-slate-700">
                          {itemsInThisCat.length} thẻ
                        </span>
                      </div>

                      {/* Placed Items List */}
                      <div className="space-y-2">
                        {itemsInThisCat.map((pi) => (
                          <div
                            key={pi.id}
                            className="p-2.5 rounded-xl bg-slate-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-in zoom-in-95"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>{pi.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {itemsInThisCat.length === 0 && (
                      <div className="text-center text-xs text-slate-400 italic py-4">
                        (Bấm chọn một thẻ bên trên rồi nhấp vào đây để thả)
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* GAME TYPE 2: MATCHING PAIRS */}
        {game.type === 'matching' && game.matchingPairs && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Khái niệm / Thuật ngữ</div>
              {game.matchingPairs.map((pair) => {
                const isMatched = matchedPairs.includes(pair.id);
                const isSelected = selectedLeft === pair.id;

                return (
                  <button
                    key={`left_${pair.id}`}
                    disabled={isMatched}
                    onClick={() => handleLeftClick(pair.id)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-300 shadow-glow-cyan scale-102'
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-cyan-400 hover:bg-slate-750'
                    }`}
                  >
                    <span>{pair.left}</span>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Ứng dụng / Ý nghĩa</div>
              {game.matchingPairs.map((pair) => {
                const isMatched = matchedPairs.includes(pair.id);
                const isSelected = selectedRight === pair.id;

                return (
                  <button
                    key={`right_${pair.id}`}
                    disabled={isMatched}
                    onClick={() => handleRightClick(pair.id)}
                    className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-semibold border transition-all cursor-pointer flex items-center justify-between ${
                      isMatched
                        ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300 opacity-80 cursor-default'
                        : isSelected
                        ? 'bg-purple-500 text-slate-950 font-bold border-purple-300 shadow-glow-purple scale-102'
                        : 'bg-slate-800 text-slate-200 border-slate-700 hover:border-purple-400 hover:bg-slate-750'
                    }`}
                  >
                    <span>{pair.right}</span>
                    {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Victory Celebration Card */}
        {isComplete && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-cyan-950/80 border border-emerald-500 text-center space-y-3 animate-in zoom-in-95 shadow-glow-primary">
            <Trophy className="w-12 h-12 text-amber-400 mx-auto animate-bounce" />
            <h4 className="text-xl font-black text-white">XUẤT SẮC! BẠN ĐÃ CHIẾN THẮNG THỬ THÁCH!</h4>
            <p className="text-sm text-slate-200">
              Bạn đã hoàn thành chính xác 100% các yêu cầu luyện tập và nhận được <span className="text-amber-300 font-extrabold">+50 XP</span>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
