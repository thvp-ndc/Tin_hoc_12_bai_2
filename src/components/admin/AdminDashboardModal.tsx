import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShieldCheck, 
  BarChart3, 
  Users, 
  Download, 
  Upload, 
  Settings, 
  FileSpreadsheet, 
  Database, 
  RefreshCw,
  Key,
  CheckCircle2
} from 'lucide-react';
import { getAllStudents, changeAdminPassword } from '../../services/authService';
import { getAdminAnalytics } from '../../services/progressService';
import { exportStudentsToCsv, exportFullBackupJson, importBackupJson } from '../../services/exportService';
import { StudentUser, AdminAnalytics } from '../../types/auth';
import { AnalyticsOverview } from './AnalyticsOverview';
import { StudentRosterTable } from './StudentRosterTable';
import { StudentDetailView } from './StudentDetailView';
import { CloudConfigPanel } from './CloudConfigPanel';
import { getCloudConfig } from '../../services/cloudSyncService';
import { refreshStudentsFromCloud } from '../../services/authService';
import { sounds } from '../../utils/soundEffects';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'roster' | 'export' | 'settings'>('overview');
  const [students, setStudents] = useState<StudentUser[]>([]);
  const [analytics, setAnalytics] = useState<AdminAnalytics | null>(null);
  const [selectedStudent, setSelectedStudent] = useState<StudentUser | null>(null);

  // Settings State
  const [newAdminPin, setNewAdminPin] = useState('');
  const [pinChangeMessage, setPinChangeMessage] = useState<string | null>(null);

  // Load Data
  const reloadData = async () => {
    await refreshStudentsFromCloud();
    const stds = getAllStudents();
    setStudents(stds);
    setAnalytics(getAdminAnalytics());
  };

  useEffect(() => {
    if (isOpen) {
      reloadData();
      setSelectedStudent(null);
    }
  }, [isOpen]);


  if (!isOpen || !analytics) return null;

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importBackupJson(content);
      if (res.success) {
        sounds.playWin();
        alert(`Đã khôi phục thành công dữ liệu của ${res.count} học sinh!`);
        reloadData();
      } else {
        sounds.playError();
        alert(`Lỗi khi nhập tệp: ${res.error}`);
      }
    };
    reader.readAsText(file);
    // Reset file input
    e.target.value = '';
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAdminPin.length < 6) {
      alert('Mật khẩu quản trị mới phải có ít nhất 6 ký tự!');
      return;
    }
    if (changeAdminPassword(newAdminPin)) {
      sounds.playCorrect();
      setPinChangeMessage('Đã cập nhật mật khẩu quản trị giáo viên thành công!');
      setNewAdminPin('');
      setTimeout(() => setPinChangeMessage(null), 4000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-7xl h-[94vh] flex flex-col rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden text-white">
        
        {/* Master Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 border-b border-slate-800 bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-amber-600 to-rose-600 text-white shadow-glow-primary">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Bảng Điều Khiển Giáo Viên</span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {students.length} học sinh
                </span>
                <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
                  getCloudConfig().isEnabled 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 font-bold'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {getCloudConfig().isEnabled ? '☁️ Đám Mây: Đang Bật' : '💾 Lưu Cục Bộ'}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Quản Trị Tiến Độ & Báo Cáo Học Sinh THPT
              </h2>
            </div>
          </div>


          {/* Navigation Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-950 border border-slate-800">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('overview');
                setSelectedStudent(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-glow-primary'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Tổng Quan</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('roster');
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'roster'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-glow-primary'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Danh Sách Học Sinh</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('export');
                setSelectedStudent(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'export'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-glow-primary'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Xuất / Nhập Báo Cáo</span>
            </button>

            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('settings');
                setSelectedStudent(null);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-gradient-to-r from-amber-500 to-rose-600 text-white shadow-glow-primary'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4" />
              <span>Cài Đặt</span>
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-slate-900/60">
          {activeTab === 'overview' && (
            <AnalyticsOverview analytics={analytics} />
          )}

          {activeTab === 'roster' && (
            selectedStudent ? (
              <StudentDetailView
                student={selectedStudent}
                onBack={() => setSelectedStudent(null)}
                onStudentUpdated={reloadData}
                onStudentDeleted={() => {
                  setSelectedStudent(null);
                  reloadData();
                }}
              />
            ) : (
              <StudentRosterTable
                students={students}
                onSelectStudent={setSelectedStudent}
              />
            )
          )}

          {activeTab === 'export' && (
            <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileSpreadsheet className="w-6 h-6 text-emerald-400" />
                  Xuất / Nhập Dữ Liệu Báo Cáo Học Tập
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  Công cụ hỗ trợ Thầy/Cô xuất bảng điểm Excel (CSV) để lưu trữ và nhập dữ liệu sao lưu tổng hợp từ các máy tính trong phòng thực hành.
                </p>
              </div>

              {/* Action 1: Export CSV */}
              <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base">1. Xuất file Excel (CSV) danh sách học sinh</h4>
                    <p className="text-xs text-slate-400">
                      Tệp tải về chuẩn tiếng Việt UTF-8 BOM, bao gồm Họ tên, Lớp, Trường, Tỉnh, Số bài hoàn thành, Tổng XP và Điểm trắc nghiệm TB.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      exportStudentsToCsv();
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-glow-primary flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Tải File Excel (.CSV)</span>
                  </button>
                </div>
              </div>

              {/* Action 2: Backup JSON */}
              <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base">2. Sao lưu toàn diện cơ sở dữ liệu (JSON)</h4>
                    <p className="text-xs text-slate-400">
                      Xuất toàn bộ hồ sơ tài khoản và dữ liệu chi tiết từng bước học của tất cả học sinh ra tệp JSON dự phòng.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      exportFullBackupJson();
                    }}
                    className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs shadow-glow-cyan flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Database className="w-4 h-4" />
                    <span>Tải Tệp Sao Lưu (.JSON)</span>
                  </button>
                </div>
              </div>

              {/* Action 3: Import JSON */}
              <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-white text-base">3. Nhập dữ liệu từ tệp sao lưu</h4>
                  <p className="text-xs text-slate-400">
                    Chọn tệp JSON sao lưu từ máy tính khác để đồng bộ thêm học sinh và tiến độ vào hệ thống này.
                  </p>
                </div>
                <div>
                  <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer border border-slate-700 transition-colors">
                    <Upload className="w-4 h-4 text-cyan-400" />
                    <span>Chọn Tệp JSON Để Phục Hồi...</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportFile}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              {/* 1. Cấu hình Đồng Bộ Đám Mây Supabase */}
              <CloudConfigPanel onSyncComplete={reloadData} />

              {/* 2. Cài Đặt Mật Khẩu Quản Trị */}
              <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4 max-w-md">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Key className="w-5 h-5 text-amber-400" />
                    Đổi Mật Khẩu Quản Trị Giáo Viên
                  </h3>
                  <p className="text-slate-400 text-xs">
                    Thay đổi mã PIN bảo vệ trang quản trị dành riêng cho Thầy/Cô.
                  </p>
                </div>

                <form onSubmit={handleChangePin} className="space-y-4">
                  {pinChangeMessage && (
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pinChangeMessage}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1.5">
                      Mật khẩu quản trị mới (tối thiểu 6 ký tự)
                    </label>
                    <div className="relative">
                      <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input
                        type="password"
                        required
                        value={newAdminPin}
                        onChange={e => setNewAdminPin(e.target.value)}
                        placeholder="Nhập mật khẩu quản trị mới..."
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-bold text-xs shadow-glow-primary transition-all cursor-pointer"
                  >
                    Cập Nhật Mật Khẩu
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
