import { Lesson } from '../types/lesson';
import { THEME1_LESSONS_10 } from './grade10/theme1_info';
import { THEME4_INKSCAPE_10 } from './grade10/theme4_inkscape';
import { THEME5_PYTHON_BASICS_10 } from './grade10/theme5_python_basics';
import { THEME5_CONTROL_FLOW_10 } from './grade10/theme5_control_flow';

export const LESSONS_DATA_10: Lesson[] = [
  ...THEME1_LESSONS_10,
  ...THEME4_INKSCAPE_10,
  ...THEME5_PYTHON_BASICS_10,
  ...THEME5_CONTROL_FLOW_10
];

// Full 34 lessons of Grade 10 from taphuan.nxbgd.vn
export const LESSON_TITLES_10: Record<number, { title: string; themeId: number; themeName: string; badge: string; desc: string }> = {
  1: { title: 'Thông tin và xử lí thông tin', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thông tin & Dữ liệu', desc: 'Dữ liệu, thông tin, tri thức và quy trình thu nhận, xử lý, truyền tải thông tin của máy tính.' },
  2: { title: 'Vai trò của thiết bị thông minh và tin học đối với xã hội', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thiết bị thông minh', desc: 'Sự phổ biến của điện thoại thông minh, IoT, máy tính bảng và tác động của tin học tới đời sống xã hội.' },
  3: { title: 'Một số kiểu dữ liệu và dữ liệu văn bản', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Dữ liệu văn bản', desc: 'Các kiểu dữ liệu trong tin học, bảng mã chuẩn ASCII và bảng mã quốc tế Unicode tiếng Việt UTF-8.' },
  4: { title: 'Hệ nhị phân và dữ liệu số nguyên', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Hệ nhị phân', desc: 'Quy tắc biểu diễn số nguyên trong hệ nhị phân (Binary Base 2), chuyển đổi giữa hệ 10 và hệ 2.' },
  5: { title: 'Dữ liệu lôgic', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Logic học', desc: 'Các giá trị logic True/False và các phép toán logic cơ bản: AND (VÀ), OR (HOẶC), NOT (PHỦ ĐỊNH).' },
  6: { title: 'Dữ liệu âm thanh và hình ảnh', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Âm thanh & Ảnh số', desc: 'Số hóa âm thanh (tần số lấy mẫu) và số hóa hình ảnh (điểm ảnh Pixel, độ phân giải, hệ màu RGB).' },
  7: { title: 'Thực hành sử dụng thiết bị số thông dụng', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thực hành thiết bị số', desc: 'Kết nối và khai thác các tính năng của điện thoại thông minh, máy tính bảng và thiết bị lưu trữ ngoài.' },
  8: { title: 'Mạng máy tính trong cuộc sống hiện đại', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'Mạng máy tính', desc: 'Mạng cục bộ (LAN), mạng diện rộng (WAN), dịch vụ Internet và điện toán đám mây trong kỷ nguyên số.' },
  9: { title: 'An toàn trong không gian mạng', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'An toàn mạng', desc: 'Nhận biết mã độc (Virus, Trojan, Worm), lừa đảo qua mạng và các biện pháp bảo vệ mật khẩu an toàn.' },
  10: { title: 'Thực hành khai thác tài nguyên trên Internet', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'Tài nguyên Internet', desc: 'Kỹ năng tìm kiếm thông tin bằng Google, dịch thuật trực tuyến và khai thác học liệu số phục vụ tự học.' },
  11: { title: 'Ứng dụng trên môi trường số. Nghĩa vụ tôn trọng bản quyền', themeId: 3, themeName: 'Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số', badge: 'Bản quyền số', desc: 'Quy định về sở hữu trí tuệ, bản quyền tác giả phần mềm, giấy phép Creative Commons và đạo đức số.' },
  12: { title: 'Phần mềm thiết kế đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Đồ hoạ Vector', desc: 'Khái niệm đồ họa Raster vs Vector, giao diện phần mềm Inkscape và các công cụ vẽ hình học cơ bản.' },
  13: { title: 'Bổ sung các đối tượng đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Vẽ đối tượng', desc: 'Thao tác với màu tô (Fill), màu viền (Stroke), nhóm đối tượng (Group) và sắp xếp thứ tự các lớp hình.' },
  14: { title: 'Làm việc với đối tượng đường và văn bản', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Đường cong Bezier', desc: 'Vẽ và uốn cong đường viền bằng công cụ Bezier, chèn chữ nghệ thuật và uốn văn bản theo đường cong.' },
  15: { title: 'Hoàn thiện hình ảnh đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Dự án Logo/Banner', desc: 'Dự án thực hành thiết kế một huy hiệu Logo hoặc Poster cổ động hoàn chỉnh và xuất tệp ảnh PNG/SVG.' },
  16: { title: 'Ngôn ngữ lập trình bậc cao và Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Nhập môn Python', desc: 'Khái niệm ngôn ngữ lập trình bậc cao, trình thông dịch Python và câu lệnh in print() đầu tiên.' },
  17: { title: 'Biến và lệnh gán', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Biến & Lệnh gán', desc: 'Quy tắc đặt tên biến, lệnh gán giá trị (=) và các kiểu dữ liệu cơ bản trong Python (int, float, str, bool).' },
  18: { title: 'Các lệnh vào ra đơn giản', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Lệnh vào ra input/print', desc: 'Nhập dữ liệu từ bàn phím bằng hàm input(), ép kiểu dữ liệu int()/float() và định dạng in ra màn hình.' },
  19: { title: 'Câu lệnh điều kiện If', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Rẽ nhánh if-else', desc: 'Cú pháp cấu trúc rẽ nhánh if, if-else, if-elif-else và quy tắc thụt lề (Indentation) bắt buộc trong Python.' },
  20: { title: 'Câu lệnh lặp For', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Vòng lặp for', desc: 'Cú pháp vòng lặp for kết hợp hàm sinh dãy số range(start, stop, step) để lặp với số lần biết trước.' },
  21: { title: 'Câu lệnh lặp While', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Vòng lặp while', desc: 'Vòng lặp với số lần chưa biết trước while <điều kiện>, tránh lỗi lặp vô hạn và lệnh ngắt break.' },
  22: { title: 'Kiểu dữ liệu danh sách', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Danh sách List', desc: 'Khái niệm kiểu dữ liệu danh sách (List), chỉ số phần tử (bắt đầu từ 0) và truy cập phần tử trong mảng.' },
  23: { title: 'Một số lệnh làm việc với dữ liệu danh sách', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phương thức List', desc: 'Các phương thức thông dụng: append() thêm phần tử, remove() xóa, len() độ dài, sort() sắp xếp.' },
  24: { title: 'Xâu kí tự', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Xâu ký tự String', desc: 'Kiểu dữ liệu xâu ký tự (String), phép ghép xâu (+), phép nhân xâu (*) và truy cập từng ký tự theo chỉ số.' },
  25: { title: 'Một số lệnh làm việc với xâu kí tự', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Hàm xử lý xâu', desc: 'Các phương thức xử lý xâu: split() tách từ, join() nối từ, find() tìm kiếm và replace() thay thế từ.' },
  26: { title: 'Hàm trong Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Hàm def', desc: 'Khái niệm chương trình con, cách định nghĩa hàm với từ khóa def và lợi ích của hàm trong tái sử dụng mã.' },
  27: { title: 'Tham số của hàm', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Tham số & Return', desc: 'Truyền đối số vào hàm, giá trị mặc định của tham số và trả về kết quả tính toán với lệnh return.' },
  28: { title: 'Phạm vi của biến', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phạm vi biến', desc: 'Phân biệt biến toàn cục (Global variable) và biến cục bộ (Local variable) trong và ngoài thân hàm.' },
  29: { title: 'Nhận biết lỗi chương trình', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phân loại lỗi', desc: 'Nhận biết 3 loại lỗi chính: Lỗi cú pháp (Syntax Error), Lỗi khi thực thi (Runtime Error) và Lỗi ngữ nghĩa (Logic Error).' },
  30: { title: 'Kiểm thử và gỡ lỗi chương trình', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Kiểm thử & Debug', desc: 'Phương pháp xây dựng bộ dữ liệu thử nghiệm (Test cases) và kỹ thuật gỡ lỗi debug bằng print hoặc breakpoint.' },
  31: { title: 'Thực hành viết chương trình đơn giản', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Dự án Lập trình', desc: 'Vận dụng tổng hợp các kiến thức Python để giải quyết bài toán tính tiền điện thoại, quản lý điểm học sinh.' },
  32: { title: 'Ôn tập lập trình Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Tổng ôn Python', desc: 'Hệ thống hóa toàn bộ cấu trúc dữ liệu và giải thuật trong chương trình Tin học 10 chuẩn bị cho kiểm tra.' },
  33: { title: 'Nghề thiết kế đồ hoạ máy tính', themeId: 6, themeName: 'Chủ đề 6: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp Graphic Design', desc: 'Tìm hiểu công việc của chuyên viên thiết kế đồ họa (Graphic Designer), cơ hội việc làm và các kỹ năng cần trau dồi.' },
  34: { title: 'Nghề phát triển phần mềm', themeId: 6, themeName: 'Chủ đề 6: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp Lập trình viên', desc: 'Khám phá nghề Kỹ sư phần mềm (Software Engineer): quy trình làm việc Agile, vai trò và triển vọng phát triển nghề nghiệp.' }
};

import { ALL_GRADE_10_CURRICULUM } from './grade10/curriculum10';

export function getLesson10ById(id: number): Lesson {
  const existing = LESSONS_DATA_10.find(l => l.id === id);
  const curriculum = ALL_GRADE_10_CURRICULUM[id];

  if (existing) {
    if (curriculum) {
      return {
        ...existing,
        objectives: curriculum.objectives,
        knowledge: curriculum.knowledge
      };
    }
    return existing;
  }

  const meta = LESSON_TITLES_10[id] || {
    title: `Bài ${id}: Tin học 10 chuẩn GDPT 2018`,
    themeId: 1,
    themeName: 'Chủ đề chuẩn SGK Tin học 10',
    badge: 'Tin học 10',
    desc: 'Học tập và thực hành theo chuẩn SGK Tin học 10 (taphuan.nxbgd.vn).'
  };

  const defaultObjectives = [
    {
      id: `obj_10_${id}_1`,
      category: 'knowledge' as const,
      categoryName: 'Kiến thức cốt lõi',
      title: `Nắm vững lý thuyết ${meta.title}`,
      description: `Hiểu rõ các khái niệm, quy tắc và cú pháp chuẩn được trình bày trong ${meta.title}.`,
      iconName: 'BookOpen'
    },
    {
      id: `obj_10_${id}_2`,
      category: 'skill' as const,
      categoryName: 'Kỹ năng & Năng lực',
      title: 'Kỹ năng thực hành & Thuật toán',
      description: 'Vận dụng kiến thức để giải quyết bài toán trên máy tính hoặc viết chương trình Python.',
      iconName: 'Code'
    },
    {
      id: `obj_10_${id}_3`,
      category: 'attitude' as const,
      categoryName: 'Phẩm chất & Đạo đức',
      title: 'Tư duy logic & Ý thức tự học',
      description: 'Phát triển năng lực tư duy logic, tính kiên trì và thói quen giải quyết vấn đề khoa học.',
      iconName: 'Sparkles'
    }
  ];

  const defaultKnowledge = [
    {
      id: `tab_10_${id}_1`,
      title: `1. Nội dung trọng tâm ${meta.title}`,
      subtitle: 'Kiến thức chuẩn SGK Tin học 10 taphuan.nxbgd.vn',
      iconName: 'Code2',
      keyPoints: [
        `Nắm vững các thuật ngữ và định nghĩa then chốt trong ${meta.title}.`,
        'Thực hiện đúng cú pháp và quy trình thao tác theo từng bước.',
        'Kết hợp kiểm thử để đảm bảo kết quả chính xác không có lỗi.'
      ],
      visualType: id >= 16 && id <= 32 ? 'interactive-python' as const : 'infographic' as const,
      visualData: id >= 16 && id <= 32 ? {
        defaultCode: `# Thực hành lập trình Python cho ${meta.title}\nprint("Xin chào! Đang chạy ${meta.title}")\nx = 10\ny = 20\nprint("Kết quả x + y =", x + y)`,
        simulatedOutput: `Xin chào! Đang chạy ${meta.title}\nKết quả x + y = 30`
      } : {
        nodes: [
          { label: 'Bước 1: Khái niệm', desc: 'Xác định định nghĩa cốt lõi' },
          { label: 'Bước 2: Cú pháp / Thao tác', desc: 'Thực thi các lệnh theo chuẩn' },
          { label: 'Bước 3: Đánh giá', desc: 'Kiểm tra và củng cố kiến thức' }
        ]
      },
      emCanNho: [
        `Nắm vững bản chất và quy tắc cốt lõi của ${meta.title}.`,
        'Luôn chạy thử nghiệm và kiểm tra lỗi cẩn thận.',
        'Ghi nhớ các trường hợp đặc biệt để tránh mắc lỗi cú pháp.'
      ]
    }
  ];

  return {
    id,
    code: `TIN10_B${id.toString().padStart(2, '0')}`,
    title: meta.title,
    themeId: meta.themeId,
    themeName: meta.themeName,
    topicBadge: meta.badge,
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: `Chinh phục chuẩn kiến thức và kỹ năng: ${meta.title}`,
      description: meta.desc,
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Chuẩn SGK GDPT 2018 taphuan.nxbgd.vn', 'Trải nghiệm học tập tương tác', 'Thực hành ứng dụng thực tế']
    },
    objectives: curriculum?.objectives || defaultObjectives,
    warmup: {
      title: `Tình huống khởi động: ${meta.title}`,
      scenario: `Trong quá trình học tập và áp dụng máy tính, tình huống gắn liền với ${meta.title} sẽ giúp ta thấu hiểu rõ nét giá trị của công nghệ.`,
      pollQuestion: `Theo bạn, phương pháp học tập hiệu quả nhất với ${meta.title} là gì?`,
      pollOptions: [
        { id: `p10_${id}_1`, text: 'Hiểu bản chất nguyên lý và tự tay gõ mã / thực hành máy tính', votesPercent: 89, isPopular: true, insight: 'Chính xác! Lập trình và Tin học bắt buộc phải tự tay thực hành mới thành thạo.' },
        { id: `p10_${id}_2`, text: 'Chỉ đọc sách mà không bao giờ mở máy tính', votesPercent: 4, insight: 'Đọc suông không thể hình thành kỹ năng thao tác.' },
        { id: `p10_${id}_3`, text: 'Nhờ bạn làm hộ bài', votesPercent: 7, insight: 'Nhờ người khác sẽ làm mất cơ hội tự phát triển tư duy của bản thân.' }
      ],
      reflection: `Thực hành đều đặn với ${meta.title} sẽ giúp bạn phát triển tư duy giải quyết vấn đề xuất sắc.`
    },
    knowledge: curriculum?.knowledge || defaultKnowledge,

    miniGame: {
      type: 'matching',
      title: `Thử thách ghép cặp thuật ngữ: ${meta.title}`,
      instruction: 'Nối đúng khái niệm với chức năng hoặc cú pháp tương ứng:',
      matchingPairs: [
        { id: `pair_10_${id}_1`, left: 'Thuật ngữ cốt lõi', right: 'Định nghĩa chính xác theo chuẩn taphuan.nxbgd.vn' },
        { id: `pair_10_${id}_2`, left: 'Cú pháp / Quy tắc', right: 'Quy tắc lập trình và thao tác máy tính chuẩn mực' },
        { id: `pair_10_${id}_3`, left: 'Ứng dụng thực tế', right: 'Giải quyết bài toán học tập và đời sống' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: `Mục tiêu cơ bản nhất khi học bài "${meta.title}" là gì?`,
        options: [
          `Nắm vững kiến thức và kỹ năng thực hành chuẩn của ${meta.title}`,
          'Chỉ để xem video giải trí',
          'Tắt máy tính',
          'Không có mục tiêu nào'
        ],
        correctIndex: 0,
        explanation: 'Bài học giúp học sinh trang bị đầy đủ năng lực lý thuyết và thực hành theo chương trình GDPT 2018.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: `Khi thực hành nội dung của "${meta.title}", thói quen nào sau đây giúp viết mã hoặc thao tác ít lỗi nhất?`,
        options: [
          'Đọc kỹ đề bài, viết mã cẩn thận và kiểm thử từng bước',
          'Gõ thật nhanh không cần nhìn màn hình',
          'Rút nguồn điện đột ngột',
          'Không bao giờ lưu bài'
        ],
        correctIndex: 0,
        explanation: 'Cẩn thận, chú ý cú pháp và kiểm thử từng bước giúp phát hiện lỗi sớm và sửa chữa dễ dàng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: `Nội dung của bài học "${meta.title}" thuộc chủ đề nào trong SGK Tin học 10?`,
        options: [meta.themeName, 'Địa lý kinh tế', 'Hóa học hữu cơ', 'Âm nhạc cổ điển'],
        correctIndex: 0,
        explanation: `Nội dung bài học nằm trong ${meta.themeName} của SGK Tin học 10 GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: `Kỹ năng đạt được từ "${meta.title}" giúp học sinh phát triển năng lực gì?`,
        options: [
          'Năng lực tư duy giải quyết vấn đề và năng lực ứng dụng công nghệ thông tin',
          'Năng lực làm hỏng máy vi tính',
          'Tăng thời gian chơi game',
          'Quên hết các lệnh đã học'
        ],
        correctIndex: 0,
        explanation: 'Kỹ năng tin học và tư duy máy tính giúp học sinh làm chủ tương lai trong thời đại số.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: `Để tự đánh giá mức độ hiểu bài sau khi học xong "${meta.title}", học sinh nên làm gì?`,
        options: [
          'Làm bài kiểm tra tự đánh giá và hoàn thành bài tập vận dụng thực tế',
          'Đóng sách lại và không bao giờ ôn lại',
          'Xóa toàn bộ tệp bài làm',
          'Tắt màn hình ngay'
        ],
        correctIndex: 0,
        explanation: 'Làm bài tự đánh giá và dự án vận dụng là phương pháp tốt nhất để ghi nhớ sâu kiến thức.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: `Dự án Vận dụng Thực tế: ${meta.title}`,
        context: 'Ứng dụng kiến thức đã học vào dự án học tập thực tế của học sinh lớp 10.',
        mission: `Hoàn thành bài tập thực hành áp dụng kiến thức của ${meta.title} để nâng cao năng lực Tin học.`,
        steps: [
          'Bước 1: Đọc lại kiến thức cốt lõi và các ví dụ mẫu.',
          'Bước 2: Mở môi trường thực hành và thao tác từng bước.',
          'Bước 3: Đánh giá kết quả và chia sẻ sản phẩm với thầy cô, bạn bè.'
        ],
        outputRequirement: 'Sản phẩm thực hành hoàn chỉnh đạt chuẩn kỹ thuật theo yêu cầu.',
        practicalTip: 'Hãy thử nghiệm các trường hợp dữ liệu khác nhau để kiểm tra độ tin cậy của sản phẩm!'
      },
      mindmap: {
        id: `mm_10_${id}`,
        label: meta.title.toUpperCase(),
        color: '#059669',
        children: [
          {
            id: `mm_10_${id}_1`,
            label: 'Kiến thức cốt lõi',
            children: [
              { id: `mm_10_${id}_1_1`, label: 'Khái niệm & Cú pháp' },
              { id: `mm_10_${id}_1_2`, label: 'Nguyên lý hoạt động' }
            ]
          },
          {
            id: `mm_10_${id}_2`,
            label: 'Kỹ năng thực hành',
            children: [
              { id: `mm_10_${id}_2_1`, label: 'Thao tác từng bước' },
              { id: `mm_10_${id}_2_2`, label: 'Kiểm thử & Gỡ lỗi' }
            ]
          },
          {
            id: `mm_10_${id}_3`,
            label: 'Vận dụng thực tiễn',
            children: [
              { id: `mm_10_${id}_3_1`, label: 'Dự án học đường' },
              { id: `mm_10_${id}_3_2`, label: 'Định hướng nghề nghiệp' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: `Chuyên Gia ${meta.badge}`,
      badgeIcon: 'Award',
      roleTitle: `Nhà Thực Hành Tin Học 10 - ${meta.badge}`,
      congratsMessage: `Tuyệt vời! Bạn đã hoàn thành xuất sắc ${meta.title} theo chuẩn SGK Tin học 10 GDPT 2018.`,
      skillsUnlocked: [`Làm chủ ${meta.title}`, 'Tư duy logic & Thuật toán', 'Kỹ năng thực chiến']
    }
  };
}
