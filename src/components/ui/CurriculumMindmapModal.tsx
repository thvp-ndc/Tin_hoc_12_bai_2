import React, { useRef, useState } from 'react';
import { 
  X, 
  Network, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Search, 
  BookOpen, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { getLesson, getThemeGroups, getTotalLessons } from '../../data/curriculumManager';
import { sounds } from '../../utils/soundEffects';
import { toPng } from 'html-to-image';

interface CurriculumMindmapModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentGrade: 10 | 11 | 12;
  onSelectGrade: (grade: 10 | 11 | 12) => void;
  onSelectLesson: (lessonId: number) => void;
}

export const CurriculumMindmapModal: React.FC<CurriculumMindmapModalProps> = ({
  isOpen,
  onClose,
  currentGrade,
  onSelectGrade,
  onSelectLesson
}) => {
  const mindmapRef = useRef<HTMLDivElement>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedThemeId, setSelectedThemeId] = useState<number | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  if (!isOpen) return null;

  const themes = getThemeGroups(currentGrade);
  const totalLessons = getTotalLessons(currentGrade);

  // Lấy dữ liệu tất cả bài học trong khối
  const allLessons = Array.from({ length: totalLessons }, (_, i) => getLesson(currentGrade, i + 1));

  // Lọc theo tìm kiếm và theo chủ đề
  const filteredThemes = themes.map(theme => {
    const themeLessons = allLessons.filter(l => theme.lessons.includes(l.id));
    const matchingLessons = themeLessons.filter(l => {
      const matchSearch = searchQuery === '' || 
        l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.knowledge.some(k => k.title.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchSearch;
    });
    return {
      ...theme,
      filteredLessons: matchingLessons
    };
  }).filter(theme => selectedThemeId === null || theme.id === selectedThemeId);

  const handleDownloadPng = async () => {
    if (!mindmapRef.current) return;
    sounds.playWin();
    setIsExporting(true);

    try {
      const dataUrl = await toPng(mindmapRef.current, {
        cacheBust: true,
        backgroundColor: '#030712',
        quality: 0.95
      });

      const link = document.createElement('a');
      link.download = `So_Do_Tu_Duy_Tong_Quat_Tin_Hoc_${currentGrade}_GDPT2018.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export master mindmap failed:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const getGradeTitle = () => {
    switch (currentGrade) {
      case 10:
        return 'TIN HỌC 10 - KẾT NỐI TRI THỨC (34 BÀI)';
      case 11:
        return 'TIN HỌC 11 - ĐỊNH HƯỚNG TIN HỌC ỨNG DỤNG (31 BÀI)';
      case 12:
        return 'TIN HỌC 12 - ĐỊNH HƯỚNG TIN HỌC ỨNG DỤNG (28 BÀI)';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-7xl h-[92vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-slate-800 bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white shadow-glow-cyan">
              <Network className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Infographic Bản Đồ Tri Thức</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  Chuẩn taphuan.nxbgd.vn
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Sơ Đồ Tư Duy Tổng Quát Toàn Bộ Bài Học
              </h2>
            </div>
          </div>

          {/* Grade Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800">
            {([10, 11, 12] as const).map(grade => (
              <button
                key={grade}
                onClick={() => {
                  sounds.playClick();
                  onSelectGrade(grade);
                  setSelectedThemeId(null);
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  currentGrade === grade
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                Lớp {grade}
              </button>
            ))}
          </div>

          {/* Action Tools & Close */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center bg-slate-950 rounded-xl border border-slate-800 p-0.5">
              <button
                onClick={() => setZoomLevel(prev => Math.max(0.6, prev - 0.1))}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Thu nhỏ"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="px-2 text-xs font-mono text-cyan-400 hover:bg-slate-800 rounded-lg cursor-pointer"
                title="Đặt lại 100%"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={() => setZoomLevel(prev => Math.min(1.4, prev + 0.1))}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Phóng to"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Export PNG */}
            <button
              disabled={isExporting}
              onClick={handleDownloadPng}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-glow-cyan cursor-pointer transition-all"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">{isExporting ? 'Đang xuất...' : 'Tải Sơ Đồ PNG'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 cursor-pointer transition-colors"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 shrink-0 text-xs">
          {/* Search Box */}
          <div className="relative min-w-[240px] max-w-sm flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Tìm bài học, chủ đề, mục kiến thức..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Theme Badges Filter */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            <button
              onClick={() => setSelectedThemeId(null)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap ${
                selectedThemeId === null
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Tất cả chủ đề
            </button>
            {themes.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedThemeId(selectedThemeId === t.id ? null : t.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors whitespace-nowrap ${
                  selectedThemeId === t.id
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t.title.split(':')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Mindmap Canvas Area */}
        <div className="flex-1 overflow-auto p-6 sm:p-10 bg-slate-950 flex justify-center items-start">
          <div 
            ref={mindmapRef}
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
            className="p-10 rounded-3xl bg-slate-950 border border-slate-800/90 min-w-[960px] max-w-6xl transition-transform duration-200 space-y-10"
          >
            {/* Root Central Node */}
            <div className="text-center space-y-3">
              <div className="inline-block px-8 py-4 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white font-black text-xl sm:text-2xl shadow-glow-cyan uppercase tracking-wider border border-white/25">
                {getGradeTitle()}
              </div>
              <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto">
                Bản đồ tư duy cấu trúc các chủ đề và toàn bộ bài học theo chương trình Giáo dục Phổ thông 2018
              </p>
            </div>

            {/* Themes Grid */}
            <div className="space-y-8">
              {filteredThemes.map(theme => (
                <div 
                  key={theme.id}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-700/80 shadow-floating-lg space-y-5"
                >
                  {/* Theme Header */}
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-glow-cyan" />
                      <h3 className="text-lg font-black text-white">
                        {theme.title}
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                      {theme.filteredLessons.length} bài học
                    </span>
                  </div>

                  {/* Lessons Cards Grid inside Theme */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {theme.filteredLessons.map(lesson => (
                      <div
                        key={lesson.id}
                        className="group relative p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/60 hover:bg-slate-900/80 transition-all shadow-sm flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          {/* Lesson Header */}
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-black px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                              Bài {lesson.id}
                            </span>
                            <span className="text-[10px] text-slate-500">
                              {lesson.knowledge.length} mục trọng tâm
                            </span>
                          </div>

                          {/* Lesson Title */}
                          <h4 className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors line-clamp-2">
                            {lesson.title}
                          </h4>

                          {/* Knowledge Sub-items (Mindmap Sub-nodes) */}
                          <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                            {lesson.knowledge.map((k, kIdx) => (
                              <div key={k.id} className="flex items-start gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                                <span className="line-clamp-1 text-slate-300">{k.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Direct Learn Button */}
                        <div className="mt-4 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                          <span className="text-[10px] text-slate-400 font-mono">
                            {lesson.code}
                          </span>
                          <button
                            onClick={() => {
                              sounds.playClick();
                              onSelectLesson(lesson.id);
                              onClose();
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 hover:underline cursor-pointer"
                          >
                            <span>Học bài</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mindmap Watermark */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                Tin học {currentGrade} • Chương trình GDPT 2018 (NXB Giáo Dục Việt Nam)
              </span>
              <span>Website Học Tập Tương Tác Tin Học THPT</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
