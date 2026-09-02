import { Lesson, MindMapNode } from '../types/lesson';

/**
 * Làm sạch và chuẩn hóa nhãn cho các nút con trên Sơ đồ tư duy
 */
function cleanSubNodeText(text: string, maxLen: number = 110): string {
  if (!text) return '';
  let cleaned = text.trim();
  // Loại bỏ các gạch đầu dòng hoặc ký tự hoa thị/số thứ tự thừa
  cleaned = cleaned.replace(/^[-•*]\s*/, '');
  cleaned = cleaned.replace(/^\d+[\).]\s*/, '');
  
  if (cleaned.length > maxLen) {
    cleaned = cleaned.substring(0, maxLen - 3) + '...';
  }
  return cleaned;
}

/**
 * Xây dựng Sơ đồ tư duy tổng kết (Mindmap ở Bước 7/8)
 * THEO ĐÚNG NỘI DUNG BÀI HỌC Ở MỤC KHÁM PHÁ KIẾN THỨC (Bước 4/8)
 * 
 * Mỗi nhánh chính trong sơ đồ tư duy tương ứng chuẩn xác 1:1 với một mục trong
 * phần Khám phá kiến thức (Mục 1, Mục 2, Mục 3...).
 * Các nút con được trích xuất trực tiếp từ các ý trọng tâm trong hộp "Em cần nhớ"
 * và các điểm cốt lõi (keyPoints) của từng mục.
 */
export function generateRobustMindmap(lesson: Lesson): MindMapNode {
  const grade = lesson.grade || 12;
  const gradeColor = grade === 10 ? '#059669' : grade === 11 ? '#8b5cf6' : '#2563eb';
  const rootId = `mm_${grade}_${lesson.id}`;

  const tabs = lesson.knowledge || [];

  // Trường hợp không có tab khám phá kiến thức (phòng hờ dữ liệu lỗi)
  if (tabs.length === 0) {
    return {
      id: rootId,
      label: lesson.title.toUpperCase(),
      color: gradeColor,
      children: [
        {
          id: `${rootId}_1`,
          label: 'Nội Dung Trọng Tâm',
          badge: 'Bài học',
          children: [
            { id: `${rootId}_1_1`, label: lesson.hero?.tagline || lesson.title },
            { id: `${rootId}_1_2`, label: 'Nắm vững lý thuyết và thực hành theo SGK' }
          ]
        }
      ]
    };
  }

  // TẠO CÁC NHÁNH CHÍNH THEO ĐÚNG CÁC MỤC TRONG KHÁM PHÁ KIẾN THỨC (1:1)
  const branches: MindMapNode[] = tabs.map((tab, tabIdx) => {
    const rawTitle = tab.title.trim();
    
    // Xác định huy hiệu mục (Ví dụ: "Mục 1", "Mục 2", "Mục 3")
    const matchMuc = rawTitle.match(/^(\d+)[\.\:]\s*(.*)/);
    const badge = matchMuc ? `Mục ${matchMuc[1]}` : `Mục ${tabIdx + 1}`;

    // Lấy các ý trọng tâm từ "Em cần nhớ" hoặc "keyPoints" của mục khám phá kiến thức này
    const sourcePoints = (tab.emCanNho && tab.emCanNho.length > 0) ? tab.emCanNho : tab.keyPoints;

    // Mỗi ý trong mục là một nút con phản ánh chính xác kiến thức của mục
    const subNodes: MindMapNode[] = sourcePoints.slice(0, 4).map((point, ptIdx) => ({
      id: `${rootId}_${tabIdx + 1}_${ptIdx + 1}`,
      label: cleanSubNodeText(point)
    }));

    return {
      id: `${rootId}_${tabIdx + 1}`,
      label: rawTitle,
      badge: badge,
      subtitle: tab.subtitle ? cleanSubNodeText(tab.subtitle, 80) : undefined,
      children: subNodes
    };
  });

  return {
    id: rootId,
    label: lesson.title.toUpperCase(),
    color: gradeColor,
    children: branches
  };
}

/**
 * Đảm bảo Sơ đồ tư duy tổng kết của mọi bài học luôn được cập nhật đồng bộ
 * và phản ánh chính xác 100% nội dung bài học ở mục khám phá kiến thức
 */
export function ensureRobustMindmap(lesson: Lesson): Lesson {
  const mindmapFromKnowledge = generateRobustMindmap(lesson);
  return {
    ...lesson,
    application: {
      ...lesson.application,
      mindmap: mindmapFromKnowledge
    }
  };
}
