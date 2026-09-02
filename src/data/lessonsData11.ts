import { Lesson } from '../types/lesson';
import { THEME1_LESSONS_11 } from './grade11/theme1_os';
import { THEME2_LESSONS_11 } from './grade11/theme2_info';
import { THEME3_LESSONS_11 } from './grade11/theme3_ethics';
import { THEME4_LESSONS_11 } from './grade11/theme4_database';
import { THEME5_LESSONS_11 } from './grade11/theme5_career';
import { THEME6_LESSONS_11 } from './grade11/theme6_db_practice';
import { THEME7_LESSONS_11 } from './grade11/theme7_multimedia';

// Complete 31 lessons of Grade 11 Applied Informatics from taphuan.nxbgd.vn
export const LESSONS_DATA_11: Lesson[] = [
  ...THEME1_LESSONS_11,
  ...THEME2_LESSONS_11,
  ...THEME3_LESSONS_11,
  ...THEME4_LESSONS_11,
  ...THEME5_LESSONS_11,
  ...THEME6_LESSONS_11,
  ...THEME7_LESSONS_11
];

// Complete 31 lesson metadata of Grade 11 Applied Informatics from taphuan.nxbgd.vn
export const LESSON_TITLES_11: Record<number, { title: string; themeId: number; themeName: string; badge: string; desc: string }> = {
  1: { title: 'Hệ điều hành', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Hệ điều hành', desc: 'Khái niệm, lịch sử phát triển và các chức năng cốt lõi của hệ điều hành máy tính và di động.' },
  2: { title: 'Thực hành sử dụng hệ điều hành', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thực hành OS', desc: 'Thực hành thiết lập cấu hình hệ thống, quản lý tài khoản người dùng và quản lý tiến trình với Task Manager.' },
  3: { title: 'Phần mềm nguồn mở và phần mềm chạy trên Internet', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Phần mềm nguồn mở', desc: 'Tìm hiểu phần mềm thương mại, phần mềm tự do, mã nguồn mở (FOSS) và ứng dụng điện toán đám mây SaaS.' },
  4: { title: 'Bên trong máy tính', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Phần cứng máy tính', desc: 'Kiến trúc Von Neumann, chức năng của CPU, RAM, ROM, Mainboard, nguồn và các cổng giao tiếp ngoại vi.' },
  5: { title: 'Kết nối máy tính với các thiết bị số', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Kết nối thiết bị', desc: 'Kỹ năng kết nối máy tính với màn hình phụ, máy chiếu qua HDMI/VGA, máy in và truyền dữ liệu qua Bluetooth/USB.' },
  6: { title: 'Lưu trữ và chia sẻ tập tin trên Internet', themeId: 2, themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', badge: 'Lưu trữ đám mây', desc: 'Sử dụng các dịch vụ lưu trữ đám mây Google Drive, OneDrive để sao lưu an toàn và cộng tác trực tuyến.' },
  7: { title: 'Thực hành tìm kiếm thông tin trên Internet', themeId: 2, themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', badge: 'Tìm kiếm nâng cao', desc: 'Sử dụng các toán tử tìm kiếm nâng cao (AND, OR, dấu ngoặc kép, filetype, site) để tìm thông tin chính xác.' },
  8: { title: 'Thực hành nâng cao sử dụng thư điện tử và mạng xã hội', themeId: 2, themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin', badge: 'Email & Mạng xã hội', desc: 'Kỹ năng gửi email chuyên nghiệp với CC/BCC, chữ ký số và thiết lập quyền riêng tư trên mạng xã hội.' },
  9: { title: 'Giao tiếp an toàn trên Internet', themeId: 3, themeName: 'Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số', badge: 'An toàn mạng', desc: 'Nhận diện các hình thức tấn công phi kỹ thuật (Social Engineering), mã độc tống tiền (Ransomware) và lừa đảo.' },
  10: { title: 'Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'Quản lý dữ liệu', desc: 'Bài toán quản lý thực tế và sự cần thiết của việc tổ chức dữ liệu một cách khoa học, tập trung.' },
  11: { title: 'Cơ sở dữ liệu', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'Cơ sở dữ liệu', desc: 'Khái niệm cơ sở dữ liệu (Database), tính toàn vẹn, tính nhất quán và các mức biểu diễn dữ liệu.' },
  12: { title: 'Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'Hệ QT CSDL', desc: 'Phần mềm Hệ quản trị CSDL (DBMS), kiến trúc hệ CSDL và vai trò của người quản trị CSDL.' },
  13: { title: 'Cơ sở dữ liệu quan hệ', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'CSDL Quan hệ', desc: 'Mô hình dữ liệu quan hệ (Relational Model), khái niệm bảng, bản ghi, trường, khoá chính và liên kết.' },
  14: { title: 'SQL – Ngôn ngữ truy vấn có cấu trúc', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'Ngôn ngữ SQL', desc: 'Cú pháp câu lệnh SELECT, FROM, WHERE, ORDER BY trích xuất dữ liệu có điều kiện từ các bảng.' },
  15: { title: 'Bảo mật và an toàn hệ cơ sở dữ liệu', themeId: 4, themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu', badge: 'Bảo mật CSDL', desc: 'Các biện pháp xác thực người dùng, phân quyền truy cập (GRANT/REVOKE) và mã hóa dữ liệu nhạy cảm.' },
  16: { title: 'Công việc quản trị cơ sở dữ liệu', themeId: 5, themeName: 'Chủ đề 5: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp DBA', desc: 'Tìm hiểu nghề Quản trị cơ sở dữ liệu (DBA): yêu cầu công việc, cơ hội nghề nghiệp và kỹ năng cần có.' },
  17: { title: 'Quản trị cơ sở dữ liệu trên máy tính', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Thực hành CSDL', desc: 'Làm quen với phần mềm quản trị CSDL thực tế (HeidiSQL, MySQL Workbench, Microsoft Access).' },
  18: { title: 'Thực hành xác định cấu trúc bảng và các trường khoá', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Thiết kế bảng', desc: 'Phân tích thực thể, chọn kiểu dữ liệu phù hợp (INT, VARCHAR, DATE) và chỉ định trường khoá chính (Primary Key).' },
  19: { title: 'Thực hành tạo lập cơ sở dữ liệu và các bảng', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Tạo lập CSDL', desc: 'Sử dụng công cụ đồ hoạ và lệnh CREATE DATABASE, CREATE TABLE để tạo lập cấu trúc CSDL hoàn chỉnh.' },
  20: { title: 'Thực hành tạo lập các bảng có khoá ngoài', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Khoá ngoài', desc: 'Thiết lập khoá ngoài (Foreign Key) và ràng buộc toàn vẹn tham chiếu giữa các bảng dữ liệu liên quan.' },
  21: { title: 'Thực hành cập nhật và truy xuất dữ liệu các bảng', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Truy vấn bảng', desc: 'Thực hiện thao tác thêm dữ liệu (INSERT), sửa dữ liệu (UPDATE), xóa dữ liệu (DELETE) và truy vấn đơn bảng.' },
  22: { title: 'Thực hành cập nhật bảng dữ liệu có tham chiếu', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Ràng buộc tham chiếu', desc: 'Quy tắc cập nhật và xóa an toàn dữ liệu trên các bảng có quan hệ ràng buộc khoá ngoại (CASCADE/RESTRICT).' },
  23: { title: 'Thực hành truy xuất dữ liệu qua liên kết các bảng', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Liên kết bảng JOIN', desc: 'Sử dụng mệnh đề INNER JOIN liên kết nhiều bảng để trích xuất báo cáo tổng hợp từ CSDL.' },
  24: { title: 'Thực hành sao lưu dữ liệu', themeId: 6, themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu', badge: 'Sao lưu CSDL', desc: 'Quy trình xuất tệp sao lưu (Export/Backup .sql) và phục hồi cơ sở dữ liệu (Import/Restore) khi gặp sự cố.' },
  25: { title: 'Phần mềm chỉnh sửa ảnh', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Đồ hoạ GIMP', desc: 'Làm quen với giao diện phần mềm chỉnh sửa ảnh GIMP, vùng làm việc, thanh công cụ và các thao tác cơ bản.' },
  26: { title: 'Công cụ tinh chỉnh màu sắc và công cụ chọn', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Chỉnh sửa ảnh', desc: 'Sử dụng các công cụ chọn (Lasso, Fuzzy Select) và cân bằng sáng tối, độ bão hòa màu sắc (Levels, Curves).' },
  27: { title: 'Công cụ vẽ và một số ứng dụng', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Vẽ & Layer', desc: 'Làm việc với các lớp (Layers), công cụ bút vẽ (Brush), tẩy xóa (Eraser) và tạo ảnh ghép nghệ thuật.' },
  28: { title: 'Tạo ảnh động', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Ảnh động GIF', desc: 'Kỹ thuật tạo ảnh động GIF từ các lớp hình ảnh, điều chỉnh tốc độ khung hình và tối ưu hóa dung lượng.' },
  29: { title: 'Khám phá phần mềm làm phim', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Biên tập video', desc: 'Giao diện phần mềm dựng phim (OpenShot / Clipchamp), dòng thời gian Timeline và quản lý tài nguyên Media.' },
  30: { title: 'Biên tập phim', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Hiệu ứng video', desc: 'Thao tác cắt ghép video, thêm nhạc nền, lời bình âm thanh, tạo hiệu ứng chuyển cảnh và chèn phụ đề tiêu đề.' },
  31: { title: 'Thực hành tạo phim hoạt hình', themeId: 7, themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video', badge: 'Dự án Phim hoạt hình', desc: 'Dự án thực hành tổng hợp: Xây dựng kịch bản, thiết kế nhân vật và sản xuất một đoạn video hoạt hình hoàn chỉnh.' }
};

export function getLesson11ById(id: number): Lesson {
  const existing = LESSONS_DATA_11.find(l => l.id === id);
  if (existing) return existing;

  const meta = LESSON_TITLES_11[id] || {
    title: `Bài ${id}: Tin học 11 - Định hướng Tin học ứng dụng`,
    themeId: 1,
    themeName: 'Chủ đề chuẩn SGK Tin học 11',
    badge: 'Tin học 11 Ứng dụng',
    desc: 'Học tập và thực hành theo chuẩn SGK Tin học 11 - Định hướng Tin học ứng dụng (taphuan.nxbgd.vn).'
  };

  return {
    id,
    code: `TIN11_B${id.toString().padStart(2, '0')}`,
    title: meta.title,
    themeId: meta.themeId,
    themeName: meta.themeName,
    topicBadge: meta.badge,
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: `Chinh phục chuẩn kiến thức và kỹ năng thực hành: ${meta.title}`,
      description: meta.desc,
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Chuẩn SGK Kết nối tri thức', 'Định hướng Tin học ứng dụng', '8 bước tự học EdTech']
    },
    objectives: [
      {
        id: `obj_11_${id}_1`,
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: `Nắm vững nội dung ${meta.title}`,
        description: `Trình bày và giải thích được các khái niệm trọng tâm của ${meta.title} theo SGK GDPT 2018.`,
        iconName: 'BookOpen'
      },
      {
        id: `obj_11_${id}_2`,
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng thực hành ứng dụng',
        description: `Thực hiện thành thạo các thao tác thực hành tin học, CSDL hoặc phần mềm ứng dụng của ${meta.title}.`,
        iconName: 'Play'
      },
      {
        id: `obj_11_${id}_3`,
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thái độ & Trách nhiệm số',
        description: 'Vận dụng kiến thức khoa học, tuân thủ pháp luật và an toàn thông tin trong môi trường số.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: `Tình huống thực tiễn: Khởi động bài học ${meta.title}`,
      scenario: `Trong bối cảnh chuyển đổi số và ứng dụng tin học vào công việc thực tế, nội dung của "${meta.title}" đóng vai trò thiết yếu giúp tối ưu hóa hiệu quả làm việc.`,
      pollQuestion: `Mục tiêu quan trọng nhất bạn muốn đạt được khi học ${meta.title} là gì?`,
      pollOptions: [
        { id: `p11_${id}_1`, text: 'Làm chủ lý thuyết và thực hành thành thạo các công cụ trên máy tính', votesPercent: 88, isPopular: true, insight: 'Chính xác! Học đi đôi với hành là phương châm hàng đầu của Tin học ứng dụng.' },
        { id: `p11_${id}_2`, text: 'Đạt điểm tối đa trong các bài kiểm tra đánh giá định kỳ', votesPercent: 8, insight: 'Điểm số cao là kết quả tự nhiên khi bạn đã nắm chắc kiến thức và kỹ năng.' },
        { id: `p11_${id}_3`, text: 'Áp dụng vào các dự án công nghệ và nghề nghiệp tương lai', votesPercent: 4, insight: 'Tầm nhìn thực tế giúp bạn có động lực học tập chuyên sâu.' }
      ],
      reflection: 'Thực hành thường xuyên trên máy tính là chìa khóa vàng để làm chủ môn Tin học 11.'
    },
    knowledge: [
      {
        id: `tab_11_${id}_1`,
        title: `1. Trọng Tâm Kiến Thức: ${meta.title}`,
        subtitle: meta.themeName,
        iconName: 'Layers',
        keyPoints: [
          `Nội dung ${meta.title} bám sát cấu trúc chương trình GDPT 2018 - Bộ sách Kết nối tri thức với cuộc sống.`,
          `${meta.desc}`,
          'Vận dụng công cụ phần mềm hiện đại và phương pháp tư duy giải quyết vấn đề bằng công nghệ.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Kiến thức cốt lõi', desc: `Trọng tâm lý thuyết của ${meta.title}` },
            { label: 'Thực hành thao tác', desc: 'Rèn luyện kỹ năng thực chiến trên máy tính' },
            { label: 'Vận dụng thực tế', desc: 'Giải quyết bài toán học tập và đời sống' }
          ]
        },
        emCanNho: [
          `Nắm chắc định nghĩa và quy trình cốt lõi trong ${meta.title}.`,
          'Luôn thực hành trực tiếp trên máy tính để ghi nhớ sâu các thao tác kỹ thuật.',
          'Tuân thủ các nguyên tắc an toàn, bảo mật dữ liệu và bản quyền phần mềm.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: `Thử Thách Nhanh: ${meta.title}`,
      instruction: 'Ghép cặp khái niệm đúng với định nghĩa/mục tiêu tương ứng:',
      matchingPairs: [
        { id: 'm1', left: `${meta.title} - Trọng tâm`, right: 'Chuẩn kiến thức SGK Tin học 11 Kết nối tri thức' },
        { id: 'm2', left: 'Kỹ năng thực hành', right: 'Thao tác chính xác, tối ưu thời gian xử lý trên máy tính' },
        { id: 'm3', left: 'Ứng dụng thực tế', right: 'Giải quyết bài toán quản lý dữ liệu và sản xuất truyền thông' },
        { id: 'm4', left: 'An toàn & Pháp luật số', right: 'Bảo vệ dữ liệu cá nhân và tuân thủ bản quyền phần mềm' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: `Nội dung cốt lõi của bài học "${meta.title}" thuộc chủ đề nào trong chương trình Tin học 11?`,
        options: [meta.themeName, 'Chủ đề không có trong chương trình', 'Môn học khác', 'Kiến thức tự do'],
        correctIndex: 0,
        explanation: `Bài học thuộc ${meta.themeName} theo chương trình GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: `Mục tiêu kỹ năng thực hành quan trọng nhất của bài học "${meta.title}" là gì?`,
        options: [
          'Thao tác thành thạo trên phần mềm máy tính và áp dụng giải quyết bài toán thực tế',
          'Chỉ cần học thuộc lòng lý thuyết trong sách',
          'Không cần sử dụng máy tính',
          'Chỉ làm bài tập trắc nghiệm'
        ],
        correctIndex: 0,
        explanation: 'Định hướng Tin học ứng dụng đề cao kỹ năng thực hành và giải quyết vấn đề thực tế.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi thực hiện các thao tác trên cơ sở dữ liệu hoặc phần mềm đồ họa, nguyên tắc an toàn nào luôn được ưu tiên hàng đầu?',
        options: [
          'Sao lưu dữ liệu định kỳ và lưu tệp dự án cẩn thận trước khi thay đổi lớn',
          'Tắt máy tính đột ngột',
          'Xóa toàn bộ các tệp gốc',
          'Không cần lưu tệp'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu và bảo toàn dữ liệu gốc là nguyên tắc làm việc sống còn của người làm công nghệ.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Định hướng Tin học ứng dụng trong chương trình Tin học 11 tập trung phát triển năng lực nào cho học sinh?',
        options: [
          'Năng lực sử dụng và quản trị CSDL, phần mềm xử lý đa phương tiện (ảnh, video) phục vụ học tập và nghề nghiệp',
          'Chỉ học lý thuyết lịch sử máy tính cổ đại',
          'Chỉ chơi trò chơi điện tử',
          'Học sửa chữa cơ khí'
        ],
        correctIndex: 0,
        explanation: 'Tin học ứng dụng 11 trang bị kỹ năng thực tế về CSDL và biên tập đa phương tiện.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: `Thái độ học tập đúng đắn nhất đối với bài học "${meta.title}" là gì?`,
        options: [
          'Chủ động tìm tòi, tích cực thực hành trên máy và tôn trọng bản quyền số',
          'Chép bài của bạn khác',
          'Bỏ qua các giờ thực hành',
          'Sử dụng phần mềm bẻ khóa độc hại'
        ],
        correctIndex: 0,
        explanation: 'Thái độ chủ động, trung thực và tuân thủ đạo đức số là phẩm chất của công dân số mẫu mực.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: `Dự án thực tế: Ứng dụng ${meta.title} trong học đường`,
        context: `Áp dụng các kiến thức và kỹ năng của ${meta.title} vào hoạt động học tập và sinh hoạt tại trường THPT.`,
        mission: `Thực hiện một bài tập thực hành hoặc sản phẩm số minh họa cho nội dung ${meta.title}.`,
        steps: [
          `Bước 1: Nghiên cứu kỹ yêu cầu và các bước thao tác chuẩn của ${meta.title}.`,
          'Bước 2: Thực hành trực tiếp trên máy tính tại phòng máy hoặc máy tính cá nhân.',
          'Bước 3: Kiểm tra, hoàn thiện sản phẩm và xuất kết quả theo định dạng chuẩn.'
        ],
        outputRequirement: `Sản phẩm thực hành hoàn chỉnh đáp ứng đầy đủ tiêu chí của bài học ${meta.title}.`,
        practicalTip: 'Luôn ghi chú lại các phím tắt và lỗi thường gặp để xử lý nhanh hơn trong các lần sau.'
      },
      mindmap: {
        id: `mm_11_${id}`,
        label: meta.title.toUpperCase(),
        color: '#4f46e5',
        children: [
          {
            id: `mm_11_${id}_1`,
            label: 'Kiến thức cốt lõi',
            children: [
              { id: `mm_11_${id}_1_1`, label: 'Khái niệm & Quy tắc chuẩn' },
              { id: `mm_11_${id}_1_2`, label: 'Nguyên lý hoạt động' }
            ]
          },
          {
            id: `mm_11_${id}_2`,
            label: 'Kỹ năng thực hành',
            children: [
              { id: `mm_11_${id}_2_1`, label: 'Thao tác từng bước' },
              { id: `mm_11_${id}_2_2`, label: 'Kiểm thử & Tối ưu' }
            ]
          },
          {
            id: `mm_11_${id}_3`,
            label: 'Ứng dụng thực tiễn',
            children: [
              { id: `mm_11_${id}_3_1`, label: 'Dự án học đường' },
              { id: `mm_11_${id}_3_2`, label: 'Định hướng nghề nghiệp số' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: `Chuyên Gia ${meta.badge}`,
      badgeIcon: 'Award',
      roleTitle: `Nhà Thực Hành Tin Học 11 - ${meta.badge}`,
      congratsMessage: `Tuyệt vời! Bạn đã hoàn thành xuất sắc ${meta.title} theo chuẩn SGK Tin học 11 - Định hướng Tin học ứng dụng.`,
      skillsUnlocked: [`Làm chủ ${meta.title}`, 'Tư duy ứng dụng CSDL & Đồ họa', 'Kỹ năng thực chiến']
    }
  };
}
