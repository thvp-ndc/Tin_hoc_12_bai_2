import React, { useState, useEffect } from 'react';
import { 
  Cloud, 
  UploadCloud, 
  CloudOff, 

  RefreshCw, 
  Key, 
  Globe, 
  Copy, 
  Check, 
  AlertCircle, 
  CheckCircle2, 
  Code2, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  getCloudConfig, 
  saveCloudConfig, 
  testCloudConnection, 
  syncStudentToCloud,
  syncProgressToCloud,
  syncCertificateToCloud,
  SUPABASE_SETUP_SQL 
} from '../../services/cloudSyncService';
import { getAllStudents, refreshStudentsFromCloud } from '../../services/authService';
import { getStudentProgress, getStudentCertificates } from '../../services/progressService';
import { sounds } from '../../utils/soundEffects';

interface CloudConfigPanelProps {
  onSyncComplete?: () => void;
}

export const CloudConfigPanel: React.FC<CloudConfigPanelProps> = ({ onSyncComplete }) => {
  const [url, setUrl] = useState('');
  const [anonKey, setAnonKey] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  // Status & Testing
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  // Manual Sync
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatusMessage, setSyncStatusMessage] = useState<string | null>(null);

  // SQL Script & Guide Toggle
  const [showGuide, setShowGuide] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  useEffect(() => {
    const cfg = getCloudConfig();
    setUrl(cfg.url);
    setAnonKey(cfg.anonKey);
    setIsEnabled(cfg.isEnabled);
  }, []);

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    saveCloudConfig(url, anonKey, isEnabled);
    sounds.playCorrect();
    setSyncStatusMessage('Đã lưu cấu hình kết nối đám mây thành công!');
    setTimeout(() => setSyncStatusMessage(null), 3000);
  };

  const handleTestConnection = async () => {
    setIsTesting(true);
    setTestResult(null);

    const res = await testCloudConnection(url, anonKey);
    setIsTesting(false);
    setTestResult(res);

    if (res.success) {
      sounds.playWin();
    } else {
      sounds.playError();
    }
  };

  const handleFullSync = async () => {
    setIsSyncing(true);
    setSyncStatusMessage('Đang đồng bộ dữ liệu giữa các máy tính và Đám mây...');

    try {
      // 1. Đẩy tất cả học sinh và tiến độ cục bộ lên Cloud
      const localStudents = getAllStudents();
      let pushCount = 0;

      for (const std of localStudents) {
        await syncStudentToCloud(std);
        pushCount++;

        const progressMap = getStudentProgress(std.id);
        for (const grade of [10, 11, 12] as const) {
          const list = Object.values(progressMap[grade] || {});
          for (const p of list) {
            await syncProgressToCloud(std.id, grade, p.lessonId, p);
          }
        }

        const certs = getStudentCertificates(std.id);
        for (const c of certs) {
          await syncCertificateToCloud(std.id, c);
        }
      }

      // 2. Kéo danh sách học sinh mới từ Cloud về máy này
      const updatedStudents = await refreshStudentsFromCloud();

      sounds.playWin();
      setSyncStatusMessage(
        `Đồng bộ hoàn tất! Đã cập nhật ${updatedStudents.length} học sinh từ Đám mây về máy này.`
      );
      if (onSyncComplete) onSyncComplete();
    } catch (err: any) {
      sounds.playError();
      setSyncStatusMessage(`Lỗi khi đồng bộ: ${err.message || 'Lỗi kết nối mạng'}`);
    } finally {
      setIsSyncing(false);
      setTimeout(() => setSyncStatusMessage(null), 5000);
    }
  };

  const handleCopySql = () => {
    navigator.clipboard.writeText(SUPABASE_SETUP_SQL);
    setCopiedSql(true);
    sounds.playClick();
    setTimeout(() => setCopiedSql(false), 2500);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title & Overview */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-5 rounded-3xl bg-slate-950/70 border border-slate-800">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-2xl ${
            isEnabled 
              ? 'bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-glow-cyan' 
              : 'bg-slate-800 text-slate-400'
          }`}>
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              Đồng Bộ Cơ Sở Dữ Liệu Đám Mây (Supabase)
              <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                isEnabled
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-slate-800 text-slate-400 border-slate-700'
              }`}>
                {isEnabled ? '🟢 Đang Bật Đồng Bộ' : '⚪ Đang Tắt (Chỉ Lưu Cục Bộ)'}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Tự động liên kết dữ liệu giữa tất cả các máy tính của học sinh trong trường và máy tính giáo viên.
            </p>
          </div>
        </div>

        {/* Toggle On/Off */}
        <label className="flex items-center gap-3 cursor-pointer bg-slate-900 px-4 py-2 rounded-2xl border border-slate-700">
          <span className="text-xs font-bold text-slate-200">Kích hoạt Đám mây:</span>
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={e => setIsEnabled(e.target.checked)}
            className="w-4 h-4 accent-cyan-500 cursor-pointer"
          />
        </label>
      </div>

      {/* Main Settings Form */}
      <form onSubmit={handleSaveConfig} className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
        
        {/* Status notification */}
        {syncStatusMessage && (
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{syncStatusMessage}</span>
          </div>
        )}

        {/* Project URL */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span>Supabase Project URL</span>
          </label>
          <input
            type="text"
            required
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://xxxxxxxxxxxx.supabase.co"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Anon Key */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
            <Key className="w-4 h-4 text-amber-400" />
            <span>Supabase Anon Public API Key</span>
          </label>
          <input
            type="password"
            required
            value={anonKey}
            onChange={e => setAnonKey(e.target.value)}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
          <p className="text-[11px] text-slate-400 mt-1">
            Khóa công khai (anon public key) an toàn được cấp trong Supabase Dashboard → Settings → API.
          </p>
        </div>

        {/* Test Result Box */}
        {testResult && (
          <div className={`p-3.5 rounded-2xl text-xs flex items-start gap-2.5 border ${
            testResult.success
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
          }`}>
            {testResult.success ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-bold">{testResult.success ? 'Kết nối thành công!' : 'Kết nối không thành công!'}</div>
              <div>{testResult.message}</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs shadow-glow-cyan transition-all cursor-pointer"
          >
            Lưu Cấu Hình
          </button>

          <button
            type="button"
            disabled={isTesting}
            onClick={handleTestConnection}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isTesting ? 'animate-spin' : ''}`} />
            <span>{isTesting ? 'Đang kiểm tra...' : 'Kiểm Tra Kết Nối'}</span>
          </button>

          <button
            type="button"
            disabled={isSyncing || !isEnabled}
            onClick={handleFullSync}
            className="px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
            title="Tải học sinh từ máy lên đám mây và kéo học sinh từ đám mây về máy"
          >
            <UploadCloud className={`w-4 h-4 ${isSyncing ? 'animate-bounce' : ''}`} />
            <span>{isSyncing ? 'Đang đồng bộ...' : 'Đồng Bộ 2 Chiều Ngay'}</span>
          </button>

        </div>
      </form>

      {/* Guide & SQL Setup Box */}
      <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
        <button
          type="button"
          onClick={() => setShowGuide(!showGuide)}
          className="w-full flex items-center justify-between text-left font-bold text-sm text-amber-300 hover:text-amber-200 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-amber-400" />
            <span>Hướng Dẫn Khởi Tạo Cơ Sở Dữ Liệu Supabase & Mã SQL (Chỉ mất 30 giây)</span>
          </div>
          {showGuide ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showGuide && (
          <div className="space-y-4 pt-2 text-xs text-slate-300 border-t border-slate-800 animate-fade-in">
            <ol className="list-decimal pl-4 space-y-2 text-slate-300">
              <li>
                Truy cập <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-cyan-400 underline font-bold inline-flex items-center gap-0.5">supabase.com <ExternalLink className="w-3 h-3" /></a>, đăng nhập bằng GitHub hoặc Email và tạo một Project miễn phí mới.
              </li>
              <li>
                Chọn menu <strong>SQL Editor</strong> ở thanh bên trái của Supabase, tạo một Query mới.
              </li>
              <li>
                Sao chép toàn bộ đoạn mã SQL bên dưới, dán vào SQL Editor rồi bấm nút <strong>RUN</strong> để tự động tạo 3 bảng (học sinh, tiến độ, chứng chỉ).
              </li>
              <li>
                Vào <strong>Project Settings → API</strong>, sao chép <strong>Project URL</strong> và <strong>anon public key</strong>, dán vào 2 ô ở trên rồi bấm <strong>Lưu cấu hình</strong>.
              </li>
            </ol>

            {/* Code Box with Copy Button */}
            <div className="relative rounded-2xl bg-slate-900 border border-slate-800 p-4 font-mono text-[11px] text-cyan-300 max-h-56 overflow-y-auto">
              <button
                type="button"
                onClick={handleCopySql}
                className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-sans text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-all cursor-pointer"
              >
                {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copiedSql ? 'Đã sao chép!' : 'Sao chép mã SQL'}</span>
              </button>
              <pre className="whitespace-pre-wrap">{SUPABASE_SETUP_SQL}</pre>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
