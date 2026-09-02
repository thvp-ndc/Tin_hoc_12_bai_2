import { Lesson, ThemeGroup } from '../types/lesson';
import { THEME_GROUPS as THEME_GROUPS_12 } from './themesData';
import { THEME_GROUPS_11 } from './themesData11';
import { THEME_GROUPS_10 } from './themesData10';
import { getLessonById as getLesson12ById } from './lessonsData';
import { getLesson11ById } from './lessonsData11';
import { getLesson10ById } from './lessonsData10';
import { ensureRobustMindmap } from '../utils/mindmapGenerator';

export function getLesson(grade: 10 | 11 | 12, id: number): Lesson {
  let lesson: Lesson;
  switch (grade) {
    case 10:
      lesson = getLesson10ById(id);
      break;
    case 11:
      lesson = getLesson11ById(id);
      break;
    case 12:
    default:
      lesson = getLesson12ById(id);
      break;
  }
  return ensureRobustMindmap(lesson);
}


export function getThemeGroups(grade: 10 | 11 | 12): ThemeGroup[] {
  switch (grade) {
    case 10:
      return THEME_GROUPS_10;
    case 11:
      return THEME_GROUPS_11;
    case 12:
    default:
      return THEME_GROUPS_12;
  }
}

export function getTotalLessons(grade: 10 | 11 | 12): number {
  switch (grade) {
    case 10:
      return 34;
    case 11:
      return 31;
    case 12:
    default:
      return 28;
  }
}

export function getAllLessons(grade: 10 | 11 | 12): Lesson[] {
  const total = getTotalLessons(grade);
  return Array.from({ length: total }, (_, i) => getLesson(grade, i + 1));
}
