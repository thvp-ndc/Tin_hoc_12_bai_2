export type ObjectiveCategory = 'knowledge' | 'skill' | 'attitude';

export interface ObjectiveItem {
  id: string;
  category: ObjectiveCategory;
  categoryName: string;
  title: string;
  description: string;
  iconName: string;
}

export type Objective = ObjectiveItem;


export interface PollOption {
  id: string;
  text: string;
  votesPercent: number;
  isPopular?: boolean;
  insight: string;
}

export interface WarmUpScenario {
  title: string;
  scenario: string;
  imagePrompt?: string;
  pollQuestion: string;
  pollOptions: PollOption[];
  reflection: string;
}

export interface KnowledgeTab {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  contentHtml?: string;
  keyPoints: string[];
  visualType: 'infographic' | 'interactive-code' | 'interactive-python' | 'interactive-sql' | 'interactive-simulator' | 'comparison-table' | 'interactive-diagram';
  visualData?: any;
  emCanNho: string[]; // Maximum 3 key highlight bullets as per prompt requirement
}

export interface DragDropItem {
  id: string;
  text: string;
  category: string;
  explanation: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MiniGame {
  type: 'drag-drop' | 'matching';
  title: string;
  instruction: string;
  categories?: { id: string; title: string; color: string }[];
  dragItems?: DragDropItem[];
  matchingPairs?: MatchingPair[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Nhận biết' | 'Thông hiểu' | 'Vận dụng' | 'Vận dụng cao';
}

export interface ApplicationProject {
  title: string;
  context: string;
  mission: string;
  steps: string[];
  outputRequirement: string;
  practicalTip: string;
}

export interface MindMapNode {
  id: string;
  label: string;
  badge?: string;
  children?: MindMapNode[];
  color?: string;
}

export interface Lesson {
  id: number;
  code: string;
  title: string;
  themeId: number;
  themeName: string;
  topicBadge: string;
  grade: 10 | 11 | 12;
  estimatedMinutes: number;
  xpTotal: number;
  
  // 8 Steps
  hero: {
    tagline: string;
    description: string;
    accentColor: string;
    keyHighlights: string[];
  };
  objectives: ObjectiveItem[];
  warmup: WarmUpScenario;
  knowledge: KnowledgeTab[];
  miniGame: MiniGame;
  assessment: QuizQuestion[];
  application: {
    project: ApplicationProject;
    mindmap: MindMapNode;
  };
  completion: {
    badgeName: string;
    badgeIcon: string;
    roleTitle: string;
    congratsMessage: string;
    skillsUnlocked: string[];
  };
}

export interface ThemeGroup {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
  lessons: number[]; // Array of lesson IDs
}

export interface GradeInfo {
  grade: 10 | 11 | 12;
  title: string;
  shortTitle: string;
  curriculum: string;
  totalLessons: number;
  badgeColor: string;
}
