import React, { useState } from 'react';
import { 
  X, 
  UserPlus, 
  LogIn, 
  User, 
  Lock, 
  School, 
  MapPin, 
  BookOpen, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { registerStudent, loginStudent } from '../../services/authService';
import { StudentUser } from '../../types/auth';
import { sounds } from '../../utils/soundEffects';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: StudentUser) => void;
  defaultMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  defaultMode = 'register'
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form Fields - 6 trường thông tin chuẩn hóa theo yêu cầu
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [className, setClassName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [province, setProvince] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      if (mode === 'register') {
        const res = registerStudent({
          username,
          password,
          fullName,
          className,
          schoolName,
          province
        });

        if (!res.success) {
          sounds.playError();
          setErrorMessage(res.error || 'Đăng ký không thành công. Vui lòng kiểm tra lại!');
          return;
        }

        sounds.playWin();
        if (res.user) {
          onSuccess(res.user);
          onClose();
        }
      } else {
        const res = await loginStudent(username, password);

        if (!res.success) {
          sounds.playError();
          setErrorMessage(res.error || 'Đăng nhập không thành công!');
          return;
        }

        sounds.playCorrect();
        if (res.user) {
          onSuccess(res.user);
          onClose();
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-white">
        
        {/* Header with Mode Switch */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 text-white shadow-glow-cyan">
              {mode === 'register' ? <UserPlus className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-black text-white">
                {mode === 'register' ? 'Đăng Ký Học Cá Nhân' : 'Đăng Nhập Học Sinh'}
              </h3>
              <p className="text-xs text-slate-400">
                {mode === 'register' ? 'Tạo tài khoản để tự động lưu tiến độ & điểm thi' : 'Tiếp tục lộ trình học tập của bạn'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-6 pt-4">
          <div className="grid grid-cols-2 p-1 rounded-2xl bg-slate-950 border border-slate-800">
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setMode('register');
                setErrorMessage(null);
              }}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                mode === 'register'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Đăng Ký Tài Khoản
            </button>
            <button
              type="button"
              onClick={() => {
                sounds.playClick();
                setMode('login');
                setErrorMessage(null);
              }}
              className={`py-2 text-xs font-bold rounded-xl transition-all ${
                mode === 'login'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Đăng Nhập
            </button>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {mode === 'register' && (
            <>
              {/* Họ và tên */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  1. Họ và tên học sinh <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="VD: Nguyễn Văn An"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              {/* Lớp & Trường học */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    2. Lớp học <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={className}
                      onChange={e => setClassName(e.target.value)}
                      placeholder="VD: 11A1, 10B2..."
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 uppercase"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    3. Trường học <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <School className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      value={schoolName}
                      onChange={e => setSchoolName(e.target.value)}
                      placeholder="VD: THPT Nguyễn Đáng"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
              </div>

              {/* Tỉnh / Thành phố */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  4. Tỉnh / Thành phố <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={province}
                    onChange={e => setProvince(e.target.value)}
                    placeholder="VD: Trà Vinh, Vĩnh Long, Hà Nội..."
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </>
          )}

          {/* Tên đăng nhập */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {mode === 'register' ? '5. Tên đăng nhập (viết liền)' : 'Tên đăng nhập'}{' '}
              <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="text"
                required
                value={username}
                onChange={e => setUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                placeholder="VD: nguyenvanan"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 lowercase"
              />
            </div>
          </div>

          {/* Mật khẩu */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              {mode === 'register' ? '6. Mật khẩu (tối thiểu 4 ký tự)' : 'Mật khẩu'}{' '}
              <span className="text-rose-400">*</span>
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-sm shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isSubmitting ? 'opacity-60 cursor-not-allowed' : ''
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>
                {isSubmitting 
                  ? 'Đang kết nối hệ thống...' 
                  : (mode === 'register' ? 'Hoàn Tất Đăng Ký & Vào Học' : 'Đăng Nhập Vào Học')}
              </span>
            </button>
          </div>

        </form>

        {/* Footer Note */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 text-center text-xs text-slate-500">
          Dữ liệu học tập được lưu trữ an toàn trên thiết bị của bạn.
        </div>

      </div>
    </div>
  );
};
