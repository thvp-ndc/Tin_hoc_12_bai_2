import React, { useRef, useState } from 'react';
import { 
  Network, 
  Sparkles, 
  Download, 
  Share2, 
  Briefcase, 
  CheckCircle2, 
  Lightbulb,
  FileImage,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import { Lesson, MindMapNode } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';
import { toPng } from 'html-to-image';

interface ApplicationMindmapProps {
  lesson: Lesson;
  onMindmapDownloaded: (xpGain: number) => void;
  hasDownloaded: boolean;
  onOpenCurriculumMindmap?: () => void;
}

export const ApplicationMindmap: React.FC<ApplicationMindmapProps> = ({
  lesson,
  onMindmapDownloaded,
  hasDownloaded,
  onOpenCurriculumMindmap
}) => {
  const mindmapRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const project = lesson.application.project;
  const rootNode = lesson.application.mindmap;

  const handleDownloadPng = async () => {
    if (!mindmapRef.current) return;
    sounds.playWin();
    setIsExporting(true);

    try {
      const dataUrl = await toPng(mindmapRef.current, {
        cacheBust: true,
        backgroundColor: '#0f172a',
        quality: 0.95
      });

      const link = document.createElement('a');
      link.download = `So_Do_Tu_Duy_Bai_${lesson.id}_Tin_Hoc_${lesson.grade || 12}.png`;
      link.href = dataUrl;
      link.click();


      if (!hasDownloaded) {
        onMindmapDownloaded(50);
      }
    } catch (err) {
      console.error('Export failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Step Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white shadow-glow-cyan shrink-0">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">Bước 7 / 8</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">Vận Dụng Thực Tiễn & Sơ Đồ Tư Duy</h2>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          +50 XP
        </div>
      </div>

      {/* Part 1: Real-world Application Project */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 p-4 sm:p-8 shadow-floating-lg space-y-5 sm:space-y-6 text-white">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            Dự án nhỏ thực chiến
          </div>
          <h3 className="text-lg sm:text-2xl font-bold text-white">
            {project.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            {project.context}
          </p>
        </div>

        {/* Mission Box */}
        <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-950/60 to-cyan-950/60 border border-cyan-500/40 space-y-2.5 sm:space-y-3">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-cyan-400">Nhiệm vụ của bạn:</div>
          <p className="text-white text-sm sm:text-base font-semibold">{project.mission}</p>

          <div className="space-y-2 pt-2 border-t border-slate-800">
            {project.steps.map((step, sIdx) => (
              <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{step}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs text-amber-300 flex items-center gap-1.5">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
            <span><strong className="text-amber-200">Lời khuyên:</strong> {project.practicalTip}</span>
          </div>
        </div>
      </div>

      {/* Part 2: Interactive Mindmap (Infographic nhánh phẳng) */}
      <div className="rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 p-4 sm:p-8 shadow-floating-lg space-y-5 sm:space-y-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
              <Network className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 shrink-0" />
              <span>Sơ Đồ Tư Duy Tổng Kết Bài Học</span>
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Infographic sơ đồ tư duy tổng kết các mục trọng tâm theo đúng nội dung phần Khám phá kiến thức trong SGK.
            </p>
          </div>

          {/* Export & Zoom Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.1))}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.3, prev + 0.1))}
              className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              title="Phóng to"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {/* Open Curriculum Master Mindmap */}
            {onOpenCurriculumMindmap && (
              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenCurriculumMindmap();
                }}
                className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-2xl bg-indigo-600/80 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm border border-indigo-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm shrink-0"
                title="Xem sơ đồ tư duy tổng quát toàn bộ các bài học trong năm học"
              >
                <Network className="w-4 h-4 text-cyan-300" />
                <span className="hidden md:inline">Sơ đồ tổng quát Lớp {lesson.grade || 12}</span>
                <span className="md:hidden">Sơ đồ khối</span>
              </button>
            )}

            <button
              disabled={isExporting}
              onClick={handleDownloadPng}
              className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Đang xuất...' : 'Tải PNG'}</span>
            </button>
          </div>
        </div>

        {/* Mobile touch tip */}
        <div className="text-center text-[11px] text-slate-500 sm:hidden">
          💡 Vuốt ngang màn hình hoặc dùng nút Phóng to/Thu nhỏ để xem toàn bộ sơ đồ
        </div>

        {/* Mindmap Canvas Area */}
        <div className="overflow-x-auto p-2 sm:p-4 rounded-2xl bg-slate-950 border border-slate-800 touch-pan-x">
          <div 
            ref={mindmapRef}
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
            className={`mx-auto p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800/80 transition-transform duration-200 ${
              (rootNode.children?.length || 1) >= 4 ? 'min-w-[900px] max-w-6xl' : 'min-w-[650px] max-w-5xl'

            }`}
          >
            {/* Root Node */}
            <div className="text-center space-y-6">
              <div className="inline-block p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-black text-lg sm:text-xl shadow-glow-cyan uppercase tracking-wider border border-white/20">
                {rootNode.label}
              </div>

              {/* Main Branches - Direct 1:1 mapping from Khám phá kiến thức */}
              <div className={`grid gap-6 pt-4 ${
                (rootNode.children?.length || 1) === 1 ? 'grid-cols-1 max-w-xl mx-auto' :
                (rootNode.children?.length || 1) === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                (rootNode.children?.length || 1) === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                'grid-cols-1 md:grid-cols-3'
              }`}>
                {rootNode.children?.map((branch, bIdx) => (
                  <div 
                    key={branch.id || `branch_${bIdx}`} 
                    className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-500/40 shadow-floating space-y-3 text-left relative before:content-[''] before:absolute before:-top-4 before:left-1/2 before:w-0.5 before:h-4 before:bg-cyan-500/40 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-cyan-300 text-sm sm:text-base leading-snug">{branch.label}</h4>
                        {branch.badge && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold shrink-0">
                            {branch.badge}
                          </span>
                        )}
                      </div>

                      {branch.subtitle && (
                        <p className="text-[11px] text-slate-400 italic line-clamp-2">
                          {branch.subtitle}
                        </p>
                      )}

                      {/* Sub Nodes from emCanNho */}
                      <div className="space-y-2 pt-2 border-t border-slate-800">
                        {branch.children?.map((sub, sIdx) => (
                          <div key={sub.id || `sub_${sIdx}`} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                            <span>{sub.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mindmap Watermark */}
            <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
              <span>Tin học {lesson.grade || 12} • GDPT 2018 (NXB Giáo Dục Việt Nam)</span>
              <span>Website Học Tập Tương Tác Tin Học THPT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

