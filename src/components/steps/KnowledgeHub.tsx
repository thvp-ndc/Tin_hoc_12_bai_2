import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Code2, 
  Play, 
  RotateCcw, 
  Sparkles, 
  Lightbulb, 
  Layers, 
  CheckCircle,
  Eye,
  Terminal,
  Database,
  Table
} from 'lucide-react';
import { Lesson, KnowledgeTab } from '../../types/lesson';
import { sounds } from '../../utils/soundEffects';

interface KnowledgeHubProps {
  lesson: Lesson;
  onExploreCompleted: (xpGain: number) => void;
  hasExplored: boolean;
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({
  lesson,
  onExploreCompleted,
  hasExplored
}) => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeTab: KnowledgeTab = lesson.knowledge[activeTabIdx] || lesson.knowledge[0];

  // Sandbox states
  const [interactiveCode, setInteractiveCode] = useState<string>('');
  const [pythonOutput, setPythonOutput] = useState<string>('');
  const [sqlExecuted, setSqlExecuted] = useState<boolean>(false);

  useEffect(() => {
    if (activeTab.visualType === 'interactive-code') {
      setInteractiveCode(activeTab.visualData?.defaultCode || '<h1>Xin chào!</h1>');
    } else if (activeTab.visualType === 'interactive-python') {
      setInteractiveCode(activeTab.visualData?.defaultCode || 'print("Xin chào Python!")');
      setPythonOutput(activeTab.visualData?.simulatedOutput || 'Xin chào Python!');
    } else if (activeTab.visualType === 'interactive-sql') {
      setInteractiveCode(activeTab.visualData?.defaultSql || 'SELECT * FROM DU_LIEU;');
      setSqlExecuted(false);
    }
  }, [activeTab]);

  const handleTabChange = (idx: number) => {
    sounds.playClick();
    setActiveTabIdx(idx);
    if (!hasExplored) {
      onExploreCompleted(30);
    }
  };

  const handleRunPython = () => {
    sounds.playCorrect();
    // Simple client-side simulation for print statements
    let output = '';
    const lines = interactiveCode.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('print(') && trimmed.endsWith(')')) {
        const inside = trimmed.slice(6, -1);
            output += inside.replace(/^["']|["']$/g, '') + '\n';
      }
    }
    setPythonOutput(output.trim() || activeTab.visualData?.simulatedOutput || 'Chương trình thực thi thành công (Mã thoát: 0)');
  };

  const handleRunSql = () => {
    sounds.playCorrect();
    setSqlExecuted(true);
  };

  return (
    <section className="space-y-6">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-glow-purple">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Bước 4 / 8</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">Khám Phá Kiến Thức</h2>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          +30 XP
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {lesson.knowledge.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(idx)}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 border ${
              activeTabIdx === idx
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-glow-purple scale-[1.02]'
                : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-700 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Active Tab Main Card */}
      <div className="rounded-3xl bg-slate-900 border border-slate-700/80 p-6 sm:p-8 shadow-floating-lg space-y-8 text-white">
        {/* Title & Subtitle */}
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Nội dung cốt lõi</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white">{activeTab.title}</h3>
          <p className="text-slate-400 text-sm">{activeTab.subtitle}</p>
        </div>

        {/* Key Points Bullet List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activeTab.keyPoints.map((point, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3 hover:border-slate-500 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 border border-cyan-500/30">
                {idx + 1}
              </div>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Experience Sandbox / Infographic */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>
                {activeTab.visualType === 'interactive-code' && 'Trình soạn thảo mã nguồn Live HTML/CSS'}
                {activeTab.visualType === 'interactive-python' && 'Trình mô phỏng Lập trình Python (Interactive Shell)'}
                {activeTab.visualType === 'interactive-sql' && 'Trình mô phỏng Truy vấn SQL (SQL Runner)'}
                {activeTab.visualType === 'infographic' && 'Sơ đồ Infographic Trực quan'}
                {activeTab.visualType === 'comparison-table' && 'Bảng So Sánh Đối Chiếu'}
              </span>
            </div>
          </div>

          {/* Type 1: Live Interactive HTML/CSS Playground */}
          {activeTab.visualType === 'interactive-code' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
              <div className="p-4 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Code2 className="w-4 h-4" /> index.html
                  </span>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      if (activeTab.visualData?.defaultCode) {
                        setInteractiveCode(activeTab.visualData.defaultCode);
                      }
                    }}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Khôi phục
                  </button>
                </div>
                <textarea
                  value={interactiveCode}
                  onChange={(e) => setInteractiveCode(e.target.value)}
                  rows={8}
                  className="w-full font-mono text-xs sm:text-sm bg-slate-900 text-cyan-300 p-3 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none leading-relaxed"
                />
              </div>
              <div className="p-4 flex flex-col space-y-2 bg-slate-900/60">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                  <Play className="w-3.5 h-3.5" /> Kết quả hiển thị Trình duyệt (Live Preview):
                </div>
                <div className="flex-1 min-h-[160px] bg-white text-slate-900 p-4 rounded-xl shadow-inner overflow-auto border border-slate-300">
                  <div dangerouslySetInnerHTML={{ __html: interactiveCode }} />
                </div>
              </div>
            </div>
          )}

          {/* Type 2: Interactive Python Playground (for Grade 10) */}
          {activeTab.visualType === 'interactive-python' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
              <div className="p-4 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Terminal className="w-4 h-4" /> main.py (Python 3.11)
                  </span>
                  <button
                    onClick={handleRunPython}
                    className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1 shadow-glow-primary transition-all"
                  >
                    <Play className="w-3.5 h-3.5" /> Chạy mã (Run)
                  </button>
                </div>
                <textarea
                  value={interactiveCode}
                  onChange={(e) => setInteractiveCode(e.target.value)}
                  rows={8}
                  className="w-full font-mono text-xs sm:text-sm bg-slate-900 text-amber-200 p-3 rounded-xl border border-slate-700 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none leading-relaxed"
                  placeholder="Nhập mã lệnh Python tại đây..."
                />
              </div>
              <div className="p-4 flex flex-col space-y-2 bg-slate-900/60 font-mono">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" /> Cửa sổ Console Đầu ra (Terminal Output):
                </div>
                <pre className="flex-1 min-h-[160px] bg-slate-950 text-emerald-300 p-4 rounded-xl shadow-inner overflow-auto border border-slate-800 text-xs whitespace-pre-wrap leading-relaxed">
                  {pythonOutput || '>>> Bấm nút [Chạy mã (Run)] để thực thi...'}
                </pre>
              </div>
            </div>
          )}

          {/* Type 3: Interactive SQL Playground (for Grade 11) */}
          {activeTab.visualType === 'interactive-sql' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
              <div className="p-4 flex flex-col space-y-2 border-b lg:border-b-0 lg:border-r border-slate-800">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Database className="w-4 h-4" /> query.sql
                  </span>
                  <button
                    onClick={handleRunSql}
                    className="px-3 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black text-xs flex items-center gap-1 shadow-glow-cyan transition-all"
                  >
                    <Play className="w-3.5 h-3.5" /> Thực thi SQL
                  </button>
                </div>
                <textarea
                  value={interactiveCode}
                  onChange={(e) => setInteractiveCode(e.target.value)}
                  rows={8}
                  className="w-full font-mono text-xs sm:text-sm bg-slate-900 text-cyan-300 p-3 rounded-xl border border-slate-700 focus:outline-none focus:border-cyan-500 resize-none leading-relaxed"
                  placeholder="Nhập câu lệnh SQL tại đây..."
                />
              </div>
              <div className="p-4 flex flex-col space-y-2 bg-slate-900/60 font-mono">
                <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                  <Table className="w-3.5 h-3.5" /> Bảng kết quả truy vấn (Query Result):
                </div>
                <div className="flex-1 min-h-[160px] bg-slate-950 text-slate-200 p-3 rounded-xl overflow-auto border border-slate-800 text-xs">
                  {sqlExecuted ? (
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700 text-cyan-300 font-bold">
                          <th className="p-2">MaHS</th>
                          <th className="p-2">HoTen</th>
                          <th className="p-2">Lop</th>
                          <th className="p-2">DiemTin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr><td className="p-2">HS01</td><td className="p-2">Nguyễn Văn An</td><td className="p-2">11A1</td><td className="p-2 text-emerald-400 font-bold">9.5</td></tr>
                        <tr><td className="p-2">HS04</td><td className="p-2">Phạm Minh Đức</td><td className="p-2">11A3</td><td className="p-2 text-emerald-400 font-bold">9.0</td></tr>
                        <tr><td className="p-2">HS02</td><td className="p-2">Trần Thị Bình</td><td className="p-2">11A2</td><td className="p-2 text-emerald-400 font-bold">8.8</td></tr>
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-slate-500 italic p-6 text-center">
                      Nhấn [Thực thi SQL] để chạy câu lệnh và xem bảng kết quả...
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Type 4: Infographic Flow Nodes */}
          {activeTab.visualType === 'infographic' && activeTab.visualData?.nodes && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60">
              {activeTab.visualData.nodes.map((node: any, nIdx: number) => (
                <div key={nIdx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 space-y-2 text-center hover:border-cyan-400 transition-colors">
                  <div className="w-8 h-8 mx-auto rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-sm flex items-center justify-center border border-cyan-500/40">
                    {nIdx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">{node.label}</h4>
                  <p className="text-xs text-slate-300">{node.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Type 5: Comparison Table */}
          {activeTab.visualType === 'comparison-table' && activeTab.visualData && (
            <div className="overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950/60">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-800/80 text-cyan-300 border-b border-slate-700 font-bold">
                  <tr>
                    {activeTab.visualData.headers?.map((h: string, hi: number) => (
                      <th key={hi} className="p-3.5">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {activeTab.visualData.rows?.map((row: string[], ri: number) => (
                    <tr key={ri} className="hover:bg-slate-800/40">
                      {row.map((cell, ci) => (
                        <td key={ci} className={`p-3.5 ${ci === 0 ? 'font-semibold text-slate-400' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 🌟 Highlight Box "Em cần nhớ" */}
        <div className="relative rounded-2xl p-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-glow-cyan">
          <div className="rounded-[15px] bg-slate-950 p-5 sm:p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-black text-amber-300 tracking-wide uppercase">
                Em Cần Nhớ (Tóm tắt trọng tâm)
              </h4>
            </div>

            <ul className="space-y-2.5">
              {activeTab.emCanNho.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-slate-200 text-sm sm:text-base leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
