import React from 'react';
import { User, LogIn, ChevronDown } from 'lucide-react';
import { StudentUser } from '../../types/auth';
import { sounds } from '../../utils/soundEffects';

interface UserMenuProps {
  currentUser: StudentUser | null;
  onOpenAuth: (mode?: 'login' | 'register') => void;
  onOpenProfile: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({
  currentUser,
  onOpenAuth,
  onOpenProfile
}) => {
  if (!currentUser) {
    return (
      <button
        onClick={() => {
          sounds.playClick();
          onOpenAuth('register');
        }}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-glow-primary hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Đăng ký hoặc đăng nhập tài khoản học sinh để lưu tiến độ"
      >
        <LogIn className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:inline">Đăng Ký Học</span>
        <span className="sm:hidden text-[11px]">Đăng ký</span>
      </button>
    );
  }


  return (
    <button
      onClick={() => {
        sounds.playClick();
        onOpenProfile();
      }}
      className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-white transition-all cursor-pointer hover:border-cyan-500/50"
      title={`Hồ sơ học sinh: ${currentUser.fullName} (${currentUser.className})`}
    >
      <span className="text-base">{currentUser.avatar || '👨‍💻'}</span>
      <div className="flex flex-col text-left leading-tight hidden sm:flex">
        <span className="text-xs font-bold text-slate-100 max-w-[110px] truncate">
          {currentUser.fullName}
        </span>
        <span className="text-[10px] font-semibold text-cyan-400">
          {currentUser.className}
        </span>
      </div>
      <ChevronDown className="w-3 h-3 text-slate-400" />
    </button>
  );
};
