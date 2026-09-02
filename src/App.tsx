import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { LessonDrawer } from './components/layout/LessonDrawer';
import { HeroBanner } from './components/steps/HeroBanner';
import { ObjectiveCards } from './components/steps/ObjectiveCards';
import { WarmUpScenario } from './components/steps/WarmUpScenario';
import { KnowledgeHub } from './components/steps/KnowledgeHub';
import { InteractiveGame } from './components/steps/InteractiveGame';
import { AssessmentQuiz } from './components/steps/AssessmentQuiz';
import { ApplicationMindmap } from './components/steps/ApplicationMindmap';
import { CompletionModal } from './components/steps/CompletionModal';
import { CertificateModal } from './components/ui/CertificateModal';
import { SmartboardControls } from './components/ui/SmartboardControls';

import { getLesson, getTotalLessons } from './data/curriculumManager';
import { sounds } from './utils/soundEffects';

export function App() {
  // Multi-grade state: 10 | 11 | 12
  const [currentGrade, setCurrentGrade] = useState<10 | 11 | 12>(() => {
    const saved = localStorage.getItem('tin_current_grade');
    if (saved === '10' || saved === '11' || saved === '12') {
      return parseInt(saved) as 10 | 11 | 12;
    }
    return 11; // Default to Grade 11 Applied Informatics as requested
  });

  const [currentLessonId, setCurrentLessonId] = useState<number>(() => {
    const saved = localStorage.getItem(`tin_${currentGrade}_lesson_id`);
    return saved ? parseInt(saved) : 1;
  });

  const [activeStep, setActiveStep] = useState<number>(1);
  const [xp, setXp] = useState<number>(150);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [smartboardMode, setSmartboardMode] = useState<boolean>(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isCompletionOpen, setIsCompletionOpen] = useState<boolean>(false);
  const [isCertificateOpen, setIsCertificateOpen] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Nguyễn Văn An');

  // Track user interactions per lesson
  const [completedObjectives, setCompletedObjectives] = useState<string[]>([]);
  const [hasAnsweredPoll, setHasAnsweredPoll] = useState<boolean>(false);
  const [hasExploredKnowledge, setHasExploredKnowledge] = useState<boolean>(false);
  const [hasWonGame, setHasWonGame] = useState<boolean>(false);
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState<boolean>(false);
  const [hasDownloadedMindmap, setHasDownloadedMindmap] = useState<boolean>(false);
  const [quizScorePercent, setQuizScorePercent] = useState<number>(100);

  // Completed lessons map by grade
  const [completedLessonsByGrade, setCompletedLessonsByGrade] = useState<Record<number, number[]>>(() => {
    const saved = localStorage.getItem('tin_completed_lessons');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // Fallback
      }
    }
    return { 10: [1], 11: [1], 12: [1] };
  });

  const totalLessonsInGrade = getTotalLessons(currentGrade);
  const currentLesson = getLesson(currentGrade, currentLessonId);
  const currentCompletedLessons = completedLessonsByGrade[currentGrade] || [1];

  // Save current grade & lesson to localStorage
  useEffect(() => {
    localStorage.setItem('tin_current_grade', currentGrade.toString());
    localStorage.setItem(`tin_${currentGrade}_lesson_id`, currentLessonId.toString());
  }, [currentGrade, currentLessonId]);

  useEffect(() => {
    localStorage.setItem('tin_completed_lessons', JSON.stringify(completedLessonsByGrade));
  }, [completedLessonsByGrade]);

  // References for step scrolling
  const stepRefs = {
    1: useRef<HTMLDivElement>(null),
    2: useRef<HTMLDivElement>(null),
    3: useRef<HTMLDivElement>(null),
    4: useRef<HTMLDivElement>(null),
    5: useRef<HTMLDivElement>(null),
    6: useRef<HTMLDivElement>(null),
    7: useRef<HTMLDivElement>(null),
  };

  // Scroll to step
  const scrollToStep = (stepNum: number) => {
    setActiveStep(stepNum);
    if (stepNum === 8) {
      setIsCompletionOpen(true);
      return;
    }
    const targetRef = stepRefs[stepNum as keyof typeof stepRefs];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setEnabled(next);
  };

  const handleToggleSmartboard = () => {
    setSmartboardMode(prev => !prev);
  };

  const resetLessonState = () => {
    setActiveStep(1);
    setCompletedObjectives([]);
    setHasAnsweredPoll(false);
    setHasExploredKnowledge(false);
    setHasWonGame(false);
    setHasCompletedQuiz(false);
    setHasDownloadedMindmap(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGrade = (newGrade: 10 | 11 | 12) => {
    if (newGrade === currentGrade) return;
    setCurrentGrade(newGrade);
    const savedLesson = localStorage.getItem(`tin_${newGrade}_lesson_id`);
    const targetLessonId = savedLesson ? Math.min(parseInt(savedLesson), getTotalLessons(newGrade)) : 1;
    setCurrentLessonId(targetLessonId);
    resetLessonState();
  };

  const handleSelectLesson = (id: number) => {
    setCurrentLessonId(id);
    resetLessonState();
  };

  const handleGainXp = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const handleToggleObjective = (objId: string) => {
    setCompletedObjectives(prev => {
      if (prev.includes(objId)) {
        return prev.filter(id => id !== objId);
      } else {
        handleGainXp(15);
        return [...prev, objId];
      }
    });
  };

  const handleQuizCompleted = (score: number, total: number, xpGain: number) => {
    setHasCompletedQuiz(true);
    const percent = Math.round((score / total) * 100);
    setQuizScorePercent(percent);
    handleGainXp(xpGain);

    setCompletedLessonsByGrade(prev => {
      const currentList = prev[currentGrade] || [];
      if (!currentList.includes(currentLessonId)) {
        return {
          ...prev,
          [currentGrade]: [...currentList, currentLessonId]
        };
      }
      return prev;
    });
  };

  // Keyboard navigation for Smartboard/Presentation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (activeStep < 8) {
          scrollToStep(activeStep + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (activeStep > 1) {
          scrollToStep(activeStep - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStep]);

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-white ${
      smartboardMode ? 'smartboard-mode' : ''
    }`}>
      {/* Top Fixed Header with Grade Switcher */}
      <Header
        currentLesson={currentLesson}
        currentGrade={currentGrade}
        totalLessonsInGrade={totalLessonsInGrade}
        onSelectGrade={handleSelectGrade}
        activeStep={activeStep}
        totalSteps={8}
        xp={xp}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        smartboardMode={smartboardMode}
        onToggleSmartboard={handleToggleSmartboard}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onStepSelect={scrollToStep}
      />

      {/* Main 8-Step Learning Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Step 1: Hero Banner */}
        <div ref={stepRefs[1]} id="step-1" className="scroll-mt-24">
          <HeroBanner
            lesson={currentLesson}
            xp={xp}
            onStartLearning={() => scrollToStep(2)}
            onPrevLesson={() => handleSelectLesson(Math.max(1, currentLessonId - 1))}
            onNextLesson={() => handleSelectLesson(Math.min(totalLessonsInGrade, currentLessonId + 1))}
            hasPrev={currentLessonId > 1}
            hasNext={currentLessonId < totalLessonsInGrade}
          />
        </div>

        {/* Step 2: Objective Cards */}
        <div ref={stepRefs[2]} id="step-2" className="scroll-mt-24">
          <ObjectiveCards
            lesson={currentLesson}
            completedObjectives={completedObjectives}
            onToggleObjective={handleToggleObjective}
          />
        </div>

        {/* Step 3: Warm-up Scenario */}
        <div ref={stepRefs[3]} id="step-3" className="scroll-mt-24">
          <WarmUpScenario
            lesson={currentLesson}
            onAnswerPoll={(gain) => {
              setHasAnsweredPoll(true);
              handleGainXp(gain);
            }}
            hasAnswered={hasAnsweredPoll}
          />
        </div>

        {/* Step 4: Knowledge Hub (Interactive Sandbox & Em cần nhớ) */}
        <div ref={stepRefs[4]} id="step-4" className="scroll-mt-24">
          <KnowledgeHub
            lesson={currentLesson}
            onExploreCompleted={(gain) => {
              setHasExploredKnowledge(true);
              handleGainXp(gain);
            }}
            hasExplored={hasExploredKnowledge}
          />
        </div>

        {/* Step 5: Interactive Game (Mini-game Thử thách Tin học) */}
        <div ref={stepRefs[5]} id="step-5" className="scroll-mt-24">
          <InteractiveGame
            lesson={currentLesson}
            onGameCompleted={(gain) => {
              setHasWonGame(true);
              handleGainXp(gain);
            }}
            hasWon={hasWonGame}
          />
        </div>

        {/* Step 6: Assessment Quiz (Tự đánh giá trắc nghiệm) */}
        <div ref={stepRefs[6]} id="step-6" className="scroll-mt-24">
          <AssessmentQuiz
            lesson={currentLesson}
            onQuizCompleted={handleQuizCompleted}
            hasCompletedQuiz={hasCompletedQuiz}
          />
        </div>

        {/* Step 7: Application & Mindmap (Vận dụng & Sơ đồ tư duy xuất PNG) */}
        <div ref={stepRefs[7]} id="step-7" className="scroll-mt-24">
          <ApplicationMindmap
            lesson={currentLesson}
            onMindmapDownloaded={(gain) => {
              setHasDownloadedMindmap(true);
              handleGainXp(gain);
            }}
            hasDownloaded={hasDownloadedMindmap}
          />
        </div>
      </main>

      {/* Smartboard Floating Remote Controls */}
      <SmartboardControls
        activeStep={activeStep}
        totalSteps={8}
        onStepChange={scrollToStep}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onOpenCompletion={() => setIsCompletionOpen(true)}
      />

      {/* Step 8: Completion & Gamification Modal */}
      <CompletionModal
        isOpen={isCompletionOpen}
        onClose={() => setIsCompletionOpen(false)}
        lesson={currentLesson}
        xpEarned={currentLesson.xpTotal}
        onOpenCertificate={() => {
          setIsCompletionOpen(false);
          setIsCertificateOpen(true);
        }}
        onRetryLesson={() => {
          setIsCompletionOpen(false);
          handleSelectLesson(currentLessonId);
        }}
        onNextLesson={() => {
          setIsCompletionOpen(false);
          if (currentLessonId < totalLessonsInGrade) {
            handleSelectLesson(currentLessonId + 1);
          }
        }}
        hasNextLesson={currentLessonId < totalLessonsInGrade}
      />

      {/* Digital Certificate Generator Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
        lesson={currentLesson}
        studentName={studentName}
        onUpdateStudentName={setStudentName}
        scorePercent={quizScorePercent}
      />

      {/* Lesson Drawer (Full Grade Index) */}
      <LessonDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentGrade={currentGrade}
        onSelectGrade={handleSelectGrade}
        currentLessonId={currentLessonId}
        onSelectLesson={handleSelectLesson}
        completedLessons={currentCompletedLessons}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
