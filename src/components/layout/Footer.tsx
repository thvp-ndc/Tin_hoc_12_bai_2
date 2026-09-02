import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/90 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-slate-200 font-bold text-sm">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Nền Tảng Học Tập Tương Tác Môn Tin Học 12 (GDPT 2018)</span>
          </div>
          <p className="text-slate-400 max-w-lg">
            Thiết kế theo chuẩn chương trình Giáo dục phổ thông 2018 – Định hướng Tin học Ứng dụng. 
            Nguồn kiến thức tham khảo chính thống từ <a href="https://taphuan.nxbgd.vn/" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-0.5">NXB Giáo Dục Việt Nam <ExternalLink className="w-3 h-3" /></a>.
          </p>
        </div>

        {/* Right Links & Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Chuẩn Visual EdTech 8 Bước</span>
          </div>
          <div className="text-slate-500">
            © {new Date().getFullYear()} EdTech Designer • Tin học 12
          </div>
        </div>
      </div>
    </footer>
  );
};
