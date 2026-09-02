import { Lesson, MindMapNode } from '../types/lesson';

/**
 * Tinh chỉnh nhãn chuỗi cho ngắn gọn, súc tích phù hợp hiển thị trên Sơ đồ tư duy
 */
function cleanMindmapLabel(text: string, maxLen: number = 80): string {
  if (!text) return '';
  let cleaned = text.trim();
  // Loại bỏ số thứ tự đầu dòng như "1. ", "2. ", "Bước 1: "
  cleaned = cleaned.replace(/^\d+\.\s*/, '');
  cleaned = cleaned.replace(/^Bước\s+\d+:\s*/i, '');
  // Cắt ngắn nếu quá dài
  if (cleaned.length > maxLen) {
    cleaned = cleaned.substring(0, maxLen - 3) + '...';
  }
  return cleaned;
}

/**
 * Kiểm tra xem sơ đồ tư duy có phải là placeholder mẫu chung chung không
 */
function isGenericMindmap(mindmap?: MindMapNode): boolean {
  if (!mindmap || !mindmap.children || mindmap.children.length === 0) return true;
  
  // Kiểm tra nếu có các từ khóa placeholder cũ
  const genericLabels = [
    'kiến thức cốt lõi',
    'khái niệm & cú pháp chuẩn',
    'thao tác từng bước',
    'dự án học đường',
    'nguyên lý hoạt động',
    'kiểm thử & sửa lỗi',
    'định hướng nghề nghiệp'
  ];

  let genericMatchCount = 0;
  for (const branch of mindmap.children) {
    if (genericLabels.includes(branch.label.toLowerCase().trim())) {
      genericMatchCount++;
    }
    if (branch.children) {
      for (const sub of branch.children) {
        if (genericLabels.includes(sub.label.toLowerCase().trim())) {
          genericMatchCount++;
        }
      }
    }
  }

  // Nếu có từ 2 nhãn trùng với placeholder generic thì coi là generic
  return genericMatchCount >= 2;
}

/**
 * Xây dựng Sơ đồ tư duy (Mindmap) chuẩn xác, chuyên sâu từ các tab kiến thức SGK và mục tiêu bài học
 */
export function generateRobustMindmap(lesson: Lesson): MindMapNode {
  // Nếu bài học đã có mindmap thủ công chất lượng cao và KHÔNG phải placeholder generic, giữ nguyên
  if (lesson.application?.mindmap && !isGenericMindmap(lesson.application.mindmap)) {
    // Đảm bảo có màu sắc đẹp
    return {
      ...lesson.application.mindmap,
      color: lesson.application.mindmap.color || (lesson.grade === 10 ? '#059669' : lesson.grade === 11 ? '#8b5cf6' : '#2563eb')
    };
  }

  const gradeColor = lesson.grade === 10 ? '#059669' : lesson.grade === 11 ? '#8b5cf6' : '#2563eb';
  const rootId = `mm_${lesson.grade || 12}_${lesson.id}`;

  const branches: MindMapNode[] = [];
  const knowledgeTabs = lesson.knowledge || [];

  if (knowledgeTabs.length >= 3) {
    // Trường hợp bài học có từ 3 mục SGK trở lên: 3 nhánh tương ứng 3 mục lớn
    for (let i = 0; i < Math.min(3, knowledgeTabs.length); i++) {
      const tab = knowledgeTabs[i];
      const branchTitle = cleanMindmapLabel(tab.title, 45);
      
      // Lấy các ý quan trọng từ emCanNho hoặc keyPoints
      const sourcePoints = (tab.emCanNho && tab.emCanNho.length > 0) ? tab.emCanNho : tab.keyPoints;
      const subNodes: MindMapNode[] = sourcePoints.slice(0, 3).map((pt, idx) => ({
        id: `${rootId}_${i + 1}_${idx + 1}`,
        label: cleanMindmapLabel(pt, 75)
      }));

      branches.push({
        id: `${rootId}_${i + 1}`,
        label: branchTitle,
        badge: `Mục ${i + 1}`,
        children: subNodes
      });
    }
  } else if (knowledgeTabs.length === 2) {
    // Trường hợp bài học có 2 mục SGK: Nhánh 1 (Mục 1), Nhánh 2 (Mục 2), Nhánh 3 (Kỹ năng & Vận dụng thực tiễn)
    // Nhánh 1: Mục 1
    const tab1 = knowledgeTabs[0];
    const sourcePoints1 = (tab1.emCanNho && tab1.emCanNho.length > 0) ? tab1.emCanNho : tab1.keyPoints;
    branches.push({
      id: `${rootId}_1`,
      label: cleanMindmapLabel(tab1.title, 45),
      badge: 'Mục 1',
      children: sourcePoints1.slice(0, 3).map((pt, idx) => ({
        id: `${rootId}_1_${idx + 1}`,
        label: cleanMindmapLabel(pt, 75)
      }))
    });

    // Nhánh 2: Mục 2
    const tab2 = knowledgeTabs[1];
    const sourcePoints2 = (tab2.emCanNho && tab2.emCanNho.length > 0) ? tab2.emCanNho : tab2.keyPoints;
    branches.push({
      id: `${rootId}_2`,
      label: cleanMindmapLabel(tab2.title, 45),
      badge: 'Mục 2',
      children: sourcePoints2.slice(0, 3).map((pt, idx) => ({
        id: `${rootId}_2_${idx + 1}`,
        label: cleanMindmapLabel(pt, 75)
      }))
    });

    // Nhánh 3: Kỹ năng & Vận dụng từ Mục tiêu (skill, attitude) và Dự án (project)
    const skillObj = lesson.objectives?.find(o => o.category === 'skill');
    const attitudeObj = lesson.objectives?.find(o => o.category === 'attitude');
    const projectMission = lesson.application?.project?.mission || lesson.application?.project?.title;

    const subNodes3: MindMapNode[] = [];
    if (skillObj) {
      subNodes3.push({
        id: `${rootId}_3_1`,
        label: `Kỹ năng: ${cleanMindmapLabel(skillObj.title, 65)}`
      });
    }
    if (attitudeObj) {
      subNodes3.push({
        id: `${rootId}_3_2`,
        label: `Phẩm chất: ${cleanMindmapLabel(attitudeObj.title, 65)}`
      });
    }
    if (projectMission) {
      subNodes3.push({
        id: `${rootId}_3_3`,
        label: `Thực chiến: ${cleanMindmapLabel(projectMission, 65)}`
      });
    } else {
      subNodes3.push({
        id: `${rootId}_3_3`,
        label: 'Thực hành thao tác và kiểm thử chuẩn mực'
      });
    }

    branches.push({
      id: `${rootId}_3`,
      label: 'Kỹ Năng & Vận Dụng',
      badge: 'Thực hành',
      children: subNodes3
    });
  } else if (knowledgeTabs.length === 1) {
    // Trường hợp bài học có 1 mục: Nhánh 1 (Lý thuyết cốt lõi), Nhánh 2 (Quy trình thực hành), Nhánh 3 (Vận dụng)
    const tab1 = knowledgeTabs[0];
    const sourcePoints1 = (tab1.emCanNho && tab1.emCanNho.length > 0) ? tab1.emCanNho : tab1.keyPoints;
    
    branches.push({
      id: `${rootId}_1`,
      label: cleanMindmapLabel(tab1.title, 45),
      badge: 'Trọng tâm',
      children: sourcePoints1.slice(0, 3).map((pt, idx) => ({
        id: `${rootId}_1_${idx + 1}`,
        label: cleanMindmapLabel(pt, 75)
      }))
    });

    const skillObj = lesson.objectives?.find(o => o.category === 'skill');
    branches.push({
      id: `${rootId}_2`,
      label: 'Kỹ Năng Thực Hành',
      badge: 'Thao tác',
      children: [
        { id: `${rootId}_2_1`, label: skillObj ? cleanMindmapLabel(skillObj.description, 70) : 'Tuân thủ các bước thực hành' },
        { id: `${rootId}_2_2`, label: 'Kiểm thử dữ liệu và phát hiện lỗi sớm' }
      ]
    });

    branches.push({
      id: `${rootId}_3`,
      label: 'Ứng Dụng Thực Tế',
      badge: 'Dự án',
      children: [
        { id: `${rootId}_3_1`, label: cleanMindmapLabel(lesson.application?.project?.title || 'Giải quyết vấn đề học tập', 70) },
        { id: `${rootId}_3_2`, label: cleanMindmapLabel(lesson.application?.project?.practicalTip || 'Tối ưu hiệu quả và chia sẻ sản phẩm', 70) }
      ]
    });
  }

  return {
    id: rootId,
    label: lesson.title.toUpperCase(),
    color: gradeColor,
    children: branches
  };
}

/**
 * Đảm bảo mọi bài học khi được lấy ra đều có Sơ đồ tư duy chuẩn xác, không bị rỗng hay generic
 */
export function ensureRobustMindmap(lesson: Lesson): Lesson {
  const robustMindmap = generateRobustMindmap(lesson);
  return {
    ...lesson,
    application: {
      ...lesson.application,
      mindmap: robustMindmap
    }
  };
}
