import React, { useRef, useState } from 'react';
import { 
  Award, 
  Download, 
  Printer, 
  X, 
  CheckCircle
} from 'lucide-react';
import { Lesson } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';
import { toPng } from 'html-to-image';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  lesson: Lesson;
  studentName: string;
  onUpdateStudentName: (name: string) => void;
  scorePercent: number;
  onSaveCertificate?: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  lesson,
  studentName,
  onUpdateStudentName,
  scorePercent,
  onSaveCertificate
}) => {
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  React.useEffect(() => {
    if (isOpen && onSaveCertificate) {
      onSaveCertificate();
    }
  }, [isOpen]);

  if (!isOpen) return null;


  const handleDownload = async () => {
    if (!certRef.current) return;
    sounds.playWin();
    setIsDownloading(true);

    try {
      const dataUrl = await toPng(certRef.current, {
        cacheBust: true,
        backgroundColor: '#ffffff',
        quality: 1
      });
      const link = document.createElement('a');
      link.download = `Chung_Nhan_Tin_Hoc_${lesson.grade}_${lesson.code}_${studentName || 'Hoc_Sinh'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    sounds.playClick();
    window.print();
  };

  const currentDate = new Date().toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl p-4 sm:p-8 text-white shadow-2xl space-y-4 sm:space-y-6 max-h-[92vh] overflow-y-auto">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 sm:pb-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-base sm:text-lg">
            <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            <span>Chứng Nhận Hoàn Thành Điện Tử</span>
          </div>
          <button 
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Input Student Name */}
        <div className="space-y-1.5 sm:space-y-2">
          <label className="text-[11px] sm:text-xs font-bold text-slate-300 uppercase tracking-wider">
            Nhập Họ và Tên học sinh hiển thị trên chứng chỉ:
          </label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => onUpdateStudentName(e.target.value)}
            placeholder={`Ví dụ: Nguyễn Văn An - Lớp ${lesson.grade}A1`}
            className="w-full px-3.5 py-2 sm:py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs sm:text-sm font-semibold text-cyan-300 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        {/* Printable Certificate Template View */}
        <div 
          ref={certRef}
          className="relative p-4 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-amber-100/60 border-4 sm:border-8 border-double border-amber-600/60 text-slate-900 shadow-xl text-center space-y-3 sm:space-y-4"
        >
          {/* Certificate Header */}
          <div className="space-y-1">
            <div className="text-[9px] sm:text-[11px] uppercase font-bold tracking-widest text-amber-800">
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </div>
            <div className="text-[8px] sm:text-[9px] text-slate-600">Độc lập - Tự do - Hạnh phúc</div>
            <div className="w-16 sm:w-24 h-0.5 bg-amber-600/40 mx-auto my-1" />
            <h2 className="text-base sm:text-2xl font-black text-amber-900 tracking-tight pt-1 sm:pt-2 uppercase">
              CHỨNG NHẬN HOÀN THÀNH BÀI HỌC
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-600 font-medium">
              Chương trình GDPT 2018 môn Tin học {lesson.grade} {lesson.grade >= 11 ? '(Định hướng Tin học Ứng dụng)' : ''}
            </p>
          </div>

          {/* Student Name */}
          <div className="py-1 sm:py-2 space-y-0.5 sm:space-y-1">
            <p className="text-[10px] sm:text-xs text-slate-600 italic">Chứng nhận em:</p>
            <div className="text-lg sm:text-3xl font-black text-blue-900 font-serif tracking-wide border-b-2 border-amber-400/60 pb-1 inline-block min-w-[150px] sm:min-w-[200px]">
              {studentName || `HỌC SINH LỚP ${lesson.grade}`}
            </div>
          </div>

          {/* Achievement Description */}
          <p className="text-[11px] sm:text-sm text-slate-700 max-w-lg mx-auto leading-relaxed">
            Đã xuất sắc hoàn thành đầy đủ 8 bước học tập tương tác của bài học:
            <br />
            <strong className="text-blue-950 font-bold text-xs sm:text-base">Bài {lesson.id}: {lesson.title}</strong>
          </p>

          {/* Badges & Scores */}
          <div className="flex justify-center items-center gap-3 sm:gap-6 py-1.5 sm:py-2">
            <div className="text-center">
              <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold">Danh hiệu</span>
              <div className="text-[11px] sm:text-sm font-bold text-amber-800 truncate max-w-[130px] sm:max-w-none">{lesson.completion.badgeName}</div>
            </div>
            <div className="w-px h-6 sm:h-8 bg-amber-300" />
            <div className="text-center">
              <span className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-bold">Kết quả tự đánh giá</span>
              <div className="text-[11px] sm:text-sm font-bold text-emerald-700">{scorePercent}% Xuất sắc</div>
            </div>
          </div>

          {/* Date and Signature Footer */}
          <div className="flex justify-between items-end pt-3 sm:pt-6 border-t border-amber-300/60 text-xs">
            <div className="text-left space-y-0.5 sm:space-y-1">
              <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-slate-600">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                <span>Nền tảng EdTech Tin học {lesson.grade}</span>
              </div>
              <div className="text-[8px] sm:text-[9px] text-slate-500">Mã số: TH{lesson.grade}-KNTT-{lesson.id}</div>
            </div>

            <div className="text-right space-y-0.5 sm:space-y-1">
              <div className="text-[8px] sm:text-[10px] italic text-slate-600">Ngày cấp: {currentDate}</div>
              <div className="text-[9px] sm:text-[11px] font-bold text-amber-950">BAN CHUYÊN MÔN TIN HỌC</div>
            </div>
          </div>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" /> In chứng chỉ
          </button>
          <button
            disabled={isDownloading}
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs sm:text-sm font-extrabold shadow-glow-primary transition-all flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" /> {isDownloading ? 'Đang xuất file...' : 'Tải về Chứng chỉ (.PNG)'}
          </button>
        </div>
      </div>
    </div>
  );
};
