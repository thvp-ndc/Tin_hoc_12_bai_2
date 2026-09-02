import { Lesson } from '../../types/lesson';

export const THEME6_LESSONS_PART2_11: Lesson[] = [
  // Bài 19: Thực hành tạo lập cơ sở dữ liệu và các bảng
  {
    id: 19,
    code: 'TIN11_B19',
    title: 'Thực hành tạo lập cơ sở dữ liệu và các bảng',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Tạo lập CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Hiện thực hóa bản thiết kế: Viết câu lệnh CREATE DATABASE và CREATE TABLE',
      description: 'Thực hành tạo cơ sở dữ liệu mới bằng cả công cụ đồ họa trực quan và câu lệnh SQL chuẩn (CREATE DATABASE, CREATE TABLE, kiểu dữ liệu, khóa chính PRIMARY KEY).',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Lệnh CREATE DATABASE', 'Lệnh CREATE TABLE', 'Thiết lập thuộc tính PRIMARY KEY']
    },
    objectives: [
      {
        id: 'obj_11_19_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp tạo CSDL và Bảng',
        description: 'Nắm vững cú pháp: CREATE DATABASE <tên_csdl>; và CREATE TABLE <tên_bảng> (tên_cột kiểu_dữ_liệu ràng_buộc, ...).',
        iconName: 'Code'
      },
      {
        id: 'obj_11_19_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác tạo bảng trên phần mềm',
        description: 'Tự tay gõ câu lệnh SQL hoặc dùng giao diện đồ hoạ để tạo bảng `HOC_SINH` và bảng `LOP` không bị lỗi cú pháp.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_19_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Chuẩn hóa quy ước đặt tên',
        description: 'Tuân thủ quy ước đặt tên bảng và cột bằng chữ không dấu, viết hoa hoặc gạch dưới (snake_case), dễ đọc, dễ hiểu.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tạo CSDL bằng chuột hay bằng dòng lệnh SQL?',
      scenario: 'Trong phần mềm HeidiSQL, bạn có thể nhấp chuột phải chọn "Create new > Database" hoặc vào tab Query gõ lệnh `CREATE DATABASE truong_hoc;`.',
      pollQuestion: 'Tại sao các lập trình viên chuyên nghiệp luôn ưu tiên viết lệnh bằng câu lệnh SQL thay vì nhấp chuột?',
      pollOptions: [
        { id: 'p11_19_1', text: 'Vì câu lệnh SQL có thể lưu lại thành tệp script để chạy tự động trên hàng trăm máy chủ khác nhau', votesPercent: 91, isPopular: true, insight: 'Chính xác! Viết script SQL giúp tái tạo CSDL nhanh chóng và tự động hóa trong quy trình lập trình.' },
        { id: 'p11_19_2', text: 'Vì dùng chuột tốn pin hơn', votesPercent: 4, insight: 'Pin chuột không liên quan đến quy trình kỹ thuật phần mềm.' },
        { id: 'p11_19_3', text: 'Vì câu lệnh SQL khó hơn nên nhìn ngầu hơn', votesPercent: 5, insight: 'Lý do thực chất là khả năng tái sử dụng và kiểm soát phiên bản mã nguồn.' }
      ],
      reflection: 'Kết hợp linh hoạt giữa giao diện đồ họa và câu lệnh SQL script là kỹ năng của một kỹ sư công nghệ chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_19_1',
        title: '1. Cú Pháp Câu Lệnh Tạo CSDL & Tạo Bảng SQL',
        subtitle: 'Khởi tạo cấu trúc bảng với các ràng buộc chuẩn',
        iconName: 'Code2',
        keyPoints: [
          'Tạo CSDL: `CREATE DATABASE <Tên_CSDL> CHARACTER SET utf8mb4;`',
          'Chọn CSDL làm việc: `USE <Tên_CSDL>;`',
          'Tạo Bảng: `CREATE TABLE <Tên_Bảng> ( TenCot KieuDuLieu RangBuoc, ... , PRIMARY KEY (CotKhoaChinh) );`',
          'Xóa bảng (nếu cần làm lại): `DROP TABLE IF EXISTS <Tên_Bảng>;`'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- 1. Tạo cơ sở dữ liệu\nCREATE DATABASE IF NOT EXISTS quan_ly_hoc_sinh;\nUSE quan_ly_hoc_sinh;\n\n-- 2. Tạo bảng LỚP\nCREATE TABLE LOP (\n  MaLop VARCHAR(10) PRIMARY KEY,\n  TenLop VARCHAR(50) NOT NULL,\n  GiaoVienChuNhiem VARCHAR(50)\n);\n\n-- 3. Tạo bảng HỌC SINH\nCREATE TABLE HOC_SINH (\n  MaHS VARCHAR(10) PRIMARY KEY,\n  HoTen VARCHAR(50) NOT NULL,\n  NgaySinh DATE,\n  MaLop VARCHAR(10)\n);'
        },
        emCanNho: [
          'Lệnh tạo CSDL: `CREATE DATABASE <tên_csdl>;`',
          'Lệnh chọn CSDL: `USE <tên_csdl>;`',
          'Lệnh tạo bảng: `CREATE TABLE <tên_bảng> (...);` kèm định nghĩa `PRIMARY KEY`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu lệnh SQL và Ý nghĩa',
      instruction: 'Nối câu lệnh DDL với hành động tương ứng trên máy chủ:',
      matchingPairs: [
        { id: 'c1', left: 'CREATE DATABASE truong_hoc;', right: 'Tạo một cơ sở dữ liệu mới mang tên truong_hoc' },
        { id: 'c2', left: 'USE truong_hoc;', right: 'Kích hoạt CSDL truong_hoc để bắt đầu làm việc' },
        { id: 'c3', left: 'CREATE TABLE LOP (...);', right: 'Khởi tạo bảng mới mang tên LOP kèm các trường định nghĩa' },
        { id: 'c4', left: 'DROP TABLE IF EXISTS LOP;', right: 'Xóa hoàn toàn bảng LOP khỏi CSDL nếu bảng đó đã tồn tại' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để kích hoạt và bắt đầu làm việc với một Cơ sở dữ liệu đã có trong MySQL, ta dùng lệnh nào?',
        options: ['USE <ten_csdl>;', 'OPEN <ten_csdl>;', 'START <ten_csdl>;', 'LOAD <ten_csdl>;'],
        correctIndex: 0,
        explanation: 'Lệnh USE là lệnh tiêu chuẩn chuyển phiên làm việc hiện tại vào CSDL mong muốn.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Câu lệnh SQL nào sau đây viết ĐÚNG cú pháp để tạo một bảng có tên là `HOC_SINH`?',
        options: [
          'CREATE TABLE HOC_SINH (MaHS VARCHAR(10) PRIMARY KEY, HoTen VARCHAR(50) NOT NULL);',
          'MAKE TABLE HOC_SINH (MaHS, HoTen);',
          'NEW TABLE HOC_SINH;',
          'BUILD TABLE HOC_SINH;'
        ],
        correctIndex: 0,
        explanation: 'CREATE TABLE kèm danh sách các trường trong ngoặc đơn và kiểu dữ liệu là cú pháp chuẩn của SQL.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tại sao khi tạo CSDL nên bổ sung cấu hình `CHARACTER SET utf8mb4`?',
        options: [
          'Để CSDL hỗ trợ lưu trữ và hiển thị chuẩn xác tiếng Việt có dấu và các biểu tượng ký tự quốc tế',
          'Để chữ trong CSDL to gấp đôi',
          'Để máy tính không bị nóng',
          'Để tự động đổi màu nền'
        ],
        correctIndex: 0,
        explanation: 'utf8mb4 là bảng mã chuẩn hỗ trợ đầy đủ tiếng Việt có dấu và toàn bộ ký tự Unicode.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Nếu trong lệnh CREATE TABLE bạn không chỉ định trường nào làm PRIMARY KEY, điều gì sẽ xảy ra?',
        options: [
          'Bảng vẫn được tạo nhưng không có khóa chính, vi phạm nguyên tắc chuẩn hóa và gây khó khăn khi liên kết bảng',
          'Máy tính sẽ tắt nguồn ngay',
          'Phần mềm tự xóa ổ cứng',
          'Câu lệnh tự động biến thành file Word'
        ],
        correctIndex: 0,
        explanation: 'Bảng không có khóa chính sẽ không thể đảm bảo tính duy nhất của các bản ghi và không thể tạo khóa ngoại tham chiếu.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Lệnh `DROP TABLE IF EXISTS SAN_PHAM;` mang lại lợi ích gì so với lệnh `DROP TABLE SAN_PHAM;` thông thường?',
        options: [
          'Không bị báo lỗi dừng chương trình nếu bảng SAN_PHAM chưa tồn tại trên máy chủ',
          'Xóa vĩnh viễn không khôi phục được',
          'Tự động sao lưu trước khi xóa',
          'Làm máy tính chạy êm hơn'
        ],
        correctIndex: 0,
        explanation: 'Mệnh đề IF EXISTS giúp script SQL thực thi trơn tru mà không bị lỗi gián đoạn nếu bảng chưa được tạo.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Viết Mã SQL Tạo Lập Hệ Thống Quản Lý Thư Viện',
        context: 'Tạo lập CSDL hoàn chỉnh cho thư viện trường gồm 2 bảng: `DANH_MUC` và `SACH`.',
        mission: 'Soạn thảo tệp script `tao_csdl_thuvien.sql` và thực thi trên HeidiSQL.',
        steps: [
          'Bước 1: Viết lệnh tạo CSDL: `CREATE DATABASE ql_thuvien; USE ql_thuvien;`.',
          'Bước 2: Tạo bảng `DANH_MUC` gồm: `MaDanhMuc` (Khoá chính), `TenDanhMuc`.',
          'Bước 3: Tạo bảng `SACH` gồm: `MaSach` (Khoá chính), `TenSach`, `TacGia`, `NamXB`, `MaDanhMuc`.',
          'Bước 4: Bấm F9 chạy script và kiểm tra kết quả trong cây điều hướng.'
        ],
        outputRequirement: 'Hai bảng `DANH_MUC` và `SACH` được tạo thành công trên máy chủ MySQL.',
        practicalTip: 'Tạo bảng độc lập (`DANH_MUC`) trước, sau đó mới tạo bảng phụ thuộc (`SACH`).'
      },
      mindmap: {
        id: 'mm_11_19',
        label: 'TẠO LẬP CSDL VÀ BẢNG',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_19_1',
            label: 'Quản lý CSDL',
            children: [
              { id: 'mm_11_19_1_1', label: 'CREATE DATABASE' },
              { id: 'mm_11_19_1_2', label: 'USE <csdl>' },
              { id: 'mm_11_19_1_3', label: 'CHARACTER SET utf8mb4' }
            ]
          },
          {
            id: 'mm_11_19_2',
            label: 'Quản lý Bảng',
            children: [
              { id: 'mm_11_19_2_1', label: 'CREATE TABLE' },
              { id: 'mm_11_19_2_2', label: 'PRIMARY KEY' },
              { id: 'mm_11_19_2_3', label: 'DROP TABLE IF EXISTS' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Tạo Lập Bảng 11',
      badgeIcon: 'Code2',
      roleTitle: 'Chuyên Viên Tạo Lập CSDL SQL',
      congratsMessage: 'Tuyệt vời! Bạn đã viết thành công câu lệnh CREATE DATABASE và CREATE TABLE tạo lập cấu trúc CSDL.',
      skillsUnlocked: ['Viết lệnh CREATE DATABASE', 'Định nghĩa CREATE TABLE', 'Thiết lập PRIMARY KEY']
    }
  },

  // Bài 20: Thực hành tạo lập các bảng có khoá ngoài
  {
    id: 20,
    code: 'TIN11_B20',
    title: 'Thực hành tạo lập các bảng có khoá ngoài',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Khoá ngoài & Ràng buộc',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kết nối các thực thể: Thiết lập Khóa ngoài và Ràng buộc toàn vẹn tham chiếu',
      description: 'Làm chủ khái niệm Khóa ngoài (Foreign Key), mệnh đề CONSTRAINT ... FOREIGN KEY ... REFERENCES, và quy tắc đảm bảo toàn vẹn dữ liệu quan hệ giữa các bảng.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Khái niệm Khóa ngoài (Foreign Key)', 'Mệnh đề FOREIGN KEY REFERENCES', 'Ràng buộc toàn vẹn tham chiếu']
    },
    objectives: [
      {
        id: 'obj_11_20_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của Khóa ngoài',
        description: 'Trình bày được định nghĩa Khóa ngoài là trường trong bảng này nhưng tham chiếu đến Khóa chính của bảng khác.',
        iconName: 'Link2'
      },
      {
        id: 'obj_11_20_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khai báo FOREIGN KEY trong SQL',
        description: 'Viết thành thạo cú pháp: `FOREIGN KEY (MaLop) REFERENCES LOP(MaLop)` trong câu lệnh tạo bảng.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_20_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng quan hệ dữ liệu',
        description: 'Nhận thức được việc không thể tùy tiện nhập mã một lớp học không tồn tại trong bảng danh mục Lớp.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Học sinh được xếp vào lớp học... "ma"',
      scenario: 'Trường học chỉ có các lớp 11A1, 11A2, 11A3. Khi nhập hồ sơ học sinh mới, nhân viên văn phòng vô tình gõ nhầm mã lớp thành "11Z9" (lớp không hề tồn tại).',
      pollQuestion: 'Cơ chế nào trong Hệ CSDL quan hệ sẽ lập tức báo lỗi và chặn đứng hành vi nhập nhầm lớp này?',
      pollOptions: [
        { id: 'p11_20_1', text: 'Ràng buộc Khóa ngoài (FOREIGN KEY ... REFERENCES LOP(MaLop))', votesPercent: 94, isPopular: true, insight: 'Chính xác! Ràng buộc khóa ngoài đảm bảo mọi giá trị nhập vào bắt buộc phải tồn tại trong bảng cha.' },
        { id: 'p11_20_2', text: 'Tự động mở thêm một lớp mới tên 11Z9', votesPercent: 3, insight: 'Phần mềm không thể tự tiện thành lập lớp học mới trong trường.' },
        { id: 'p11_20_3', text: 'Tắt máy tính', votesPercent: 3, insight: 'Hệ CSDL được thiết kế để kiểm soát lỗi thông minh, không gây sập máy.' }
      ],
      reflection: 'Khóa ngoài chính là sợi dây liên kết tạo nên sức mạnh "Quan hệ" (Relational) của CSDL.'
    },
    knowledge: [
      {
        id: 'tab_11_20_1',
        title: '1. Cú Pháp Khai Báo Khóa Ngoài trong SQL',
        subtitle: 'Bảng cha (Bảng tham chiếu) và Bảng con (Bảng chứa khóa ngoài)',
        iconName: 'Link',
        keyPoints: [
          'Khóa ngoài (Foreign Key): Là trường trong bảng con dùng để liên kết đến trường Khóa chính của bảng cha.',
          'Nguyên tắc toàn vẹn tham chiếu: Giá trị của khóa ngoài phải tồn tại trong cột khóa chính của bảng cha (hoặc mang giá trị NULL).',
          'Cú pháp khai báo trong CREATE TABLE: `CONSTRAINT fk_ten_khoa FOREIGN KEY (CotKhoaNgoai) REFERENCES BangCha(CotKhoaChinh);`',
          'Quy tắc tạo bảng: Bắt buộc phải tạo bảng cha (bảng có khóa chính) TRƯỚC, rồi mới tạo bảng con (bảng có khóa ngoài).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- 1. Bảng cha: LOP\nCREATE TABLE LOP (\n  MaLop VARCHAR(10) PRIMARY KEY,\n  TenLop VARCHAR(50) NOT NULL\n);\n\n-- 2. Bảng con: HOC_SINH (chứa khóa ngoài MaLop tham chiếu đến LOP)\nCREATE TABLE HOC_SINH (\n  MaHS VARCHAR(10) PRIMARY KEY,\n  HoTen VARCHAR(50) NOT NULL,\n  MaLop VARCHAR(10),\n  CONSTRAINT fk_hocsinh_lop FOREIGN KEY (MaLop) REFERENCES LOP(MaLop)\n);'
        },
        emCanNho: [
          'Khóa ngoài (Foreign Key) tạo liên kết giữa bảng con và bảng cha.',
          'Cú pháp: `FOREIGN KEY (CotNgoai) REFERENCES BangCha(CotChinh)`.',
          'Bảng cha phải được tạo trước bảng con; khi xóa bảng thì xóa bảng con trước.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Bảng cha và Bảng con trong liên kết Khóa ngoài',
      instruction: 'Nối đúng cặp bảng cha (chứa khóa chính) và bảng con (chứa khóa ngoài):',
      matchingPairs: [
        { id: 'fk1', left: 'Bảng LOP (MaLop làm PK)', right: 'Bảng HOC_SINH (MaLop làm FK tham chiếu đến LOP)' },
        { id: 'fk2', left: 'Bảng TAC_GIA (MaTacGia làm PK)', right: 'Bảng SACH (MaTacGia làm FK tham chiếu đến TAC_GIA)' },
        { id: 'fk3', left: 'Bảng KHACH_HANG (MaKH làm PK)', right: 'Bảng HOA_DON (MaKH làm FK tham chiếu đến KHACH_HANG)' },
        { id: 'fk4', left: 'Bảng KHOA_HOC (MaKhoaHoc làm PK)', right: 'Bảng DANG_KY (MaKhoaHoc làm FK tham chiếu KHOA_HOC)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Khóa ngoài (Foreign Key) trong cơ sở dữ liệu quan hệ dùng để làm gì?',
        options: [
          'Tạo mối liên kết giữa hai bảng và đảm bảo tính toàn vẹn tham chiếu dữ liệu',
          'Khóa máy tính lại khi người dùng đi ra ngoài',
          'Tăng tốc độ kết nối Wi-Fi',
          'Đổi mật khẩu cho người dùng'
        ],
        correctIndex: 0,
        explanation: 'Khóa ngoài là công cụ kỹ thuật để thiết lập mối quan hệ giữa các bảng và kiểm soát tính đúng đắn của dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Trong câu lệnh SQL: `CONSTRAINT fk_hs FOREIGN KEY (MaLop) REFERENCES LOP(MaLop);` Từ khóa REFERENCES dùng để làm gì?',
        options: [
          'Chỉ định bảng cha và cột khóa chính mà khóa ngoài đang tham chiếu tới',
          'Xóa bảng LOP',
          'Nhập điểm cho học sinh',
          'Tắt máy chủ CSDL'
        ],
        correctIndex: 0,
        explanation: 'REFERENCES (tham chiếu đến) xác định nguồn gốc của khóa chính trong bảng cha.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Khi thiết lập quan hệ giữa bảng `KHOA` (Khoa đào tạo) và bảng `SINH_VIEN`, bạn bắt buộc phải tạo bảng nào trước?',
        options: [
          'Bắt buộc tạo bảng KHOA trước vì bảng SINH_VIEN chứa khóa ngoài tham chiếu đến KHOA',
          'Tạo bảng SINH_VIEN trước',
          'Tạo bảng nào trước cũng được, không quan trọng',
          'Không được tạo bảng nào cả'
        ],
        correctIndex: 0,
        explanation: 'Bảng cha phải tồn tại trước thì bảng con mới có đối tượng để tham chiếu khóa ngoại.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Điều gì xảy ra nếu bạn cố gắng nhập một bản ghi vào bảng con với giá trị khóa ngoài KHÔNG TỒN TẠI trong bảng cha?',
        options: [
          'Hệ QTCSDL sẽ lập tức từ chối và báo lỗi vi phạm toàn vẹn tham chiếu (Foreign Key Constraint Fails)',
          'Hệ QTCSDL tự động tắt',
          'Hệ QTCSDL tự động xóa bảng cha',
          'Dữ liệu vẫn được lưu bình thường'
        ],
        correctIndex: 0,
        explanation: 'Hệ QTCSDL kiểm tra nghiêm ngặt tính toàn vẹn tham chiếu và ngăn chặn dữ liệu rác.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Kiểu dữ liệu của trường Khóa ngoài và trường Khóa chính được tham chiếu đến phải thỏa mãn điều kiện gì?',
        options: [
          'Phải có cùng kiểu dữ liệu và tương thích về kích thước',
          'Một bên là số, một bên là ngày tháng',
          'Không cần cùng kiểu dữ liệu',
          'Một bên là ảnh, một bên là âm thanh'
        ],
        correctIndex: 0,
        explanation: 'Khóa ngoài và khóa chính bắt buộc phải tương thích về kiểu dữ liệu (ví dụ cùng là VARCHAR(10) hoặc INT) để có thể so khớp.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thiết lập Liên kết Khóa ngoài cho Hệ thống Quản lý Bán hàng',
        context: 'Hệ thống gồm 2 bảng: `KHACH_HANG` (bảng cha) và `DON_HANG` (bảng con).',
        mission: 'Viết mã SQL tạo 2 bảng kèm ràng buộc khóa ngoài kết nối `MaKH`.',
        steps: [
          'Bước 1: Tạo bảng `KHACH_HANG` gồm: `MaKH` (PK), `HoTen`, `SoDienThoai`.',
          'Bước 2: Tạo bảng `DON_HANG` gồm: `MaDonHang` (PK), `NgayDat`, `TongTien`, `MaKH` (FK).',
          'Bước 3: Thêm mệnh đề `CONSTRAINT fk_donhang_kh FOREIGN KEY (MaKH) REFERENCES KHACH_HANG(MaKH)`.'
        ],
        outputRequirement: 'Hai bảng được tạo thành công với đường liên kết quan hệ hiển thị trên sơ đồ ERD.',
        practicalTip: 'Trong HeidiSQL, sau khi tạo bảng, bạn có thể xem biểu đồ quan hệ trực quan để thấy đường nối giữa 2 bảng.'
      },
      mindmap: {
        id: 'mm_11_20',
        label: 'KHÓA NGOÀI VÀ LIÊN KẾT',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_20_1',
            label: 'Đặc tính Khóa ngoài',
            children: [
              { id: 'mm_11_20_1_1', label: 'Liên kết bảng con với bảng cha' },
              { id: 'mm_11_20_1_2', label: 'Bảo vệ toàn vẹn tham chiếu' },
              { id: 'mm_11_20_1_3', label: 'Cùng kiểu dữ liệu với PK' }
            ]
          },
          {
            id: 'mm_11_20_2',
            label: 'Cú pháp SQL',
            children: [
              { id: 'mm_11_20_2_1', label: 'FOREIGN KEY (cột_ngoài)' },
              { id: 'mm_11_20_2_2', label: 'REFERENCES BangCha(cột_chính)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Khóa Ngoài 11',
      badgeIcon: 'Link2',
      roleTitle: 'Chuyên Viên Thiết Kế Quan Hệ CSDL',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ kỹ thuật thiết lập Khóa ngoài (FOREIGN KEY) kết nối các thực thể dữ liệu.',
      skillsUnlocked: ['Viết lệnh FOREIGN KEY REFERENCES', 'Phân biệt Bảng cha vs Bảng con', 'Bảo vệ toàn vẹn tham chiếu']
    }
  },

  // Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng
  {
    id: 21,
    code: 'TIN11_B21',
    title: 'Thực hành cập nhật và truy xuất dữ liệu các bảng',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Thao tác dữ liệu CRUD',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Vận hành dòng chảy dữ liệu: Thêm, Sửa, Xóa và Truy vấn thông tin',
      description: 'Thực hành thành thạo bộ 4 câu lệnh thao tác dữ liệu kinh điển (CRUD): INSERT INTO (thêm bản ghi mới), UPDATE (cập nhật thông tin), DELETE (xóa dữ liệu) và SELECT (truy xuất báo cáo).',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Thêm dữ liệu INSERT INTO', 'Cập nhật với UPDATE ... SET', 'Xóa an toàn với DELETE WHERE']
    },
    objectives: [
      {
        id: 'obj_11_21_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp bộ lệnh CRUD',
        description: 'Nắm vững cú pháp lệnh INSERT INTO VALUES, UPDATE SET WHERE, DELETE FROM WHERE và SELECT FROM WHERE.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_21_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác dữ liệu không bị lỗi',
        description: 'Thực hiện được việc chèn nhiều bản ghi có dấu tiếng Việt, sửa thông tin học sinh và xóa bản ghi thỏa mãn điều kiện.',
        iconName: 'Edit3'
      },
      {
        id: 'obj_11_21_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn trọng với lệnh UPDATE và DELETE',
        description: 'Luôn ghi nhớ nguyên tắc vàng: Phải luôn có mệnh đề WHERE khi UPDATE hoặc DELETE để tránh làm mất sạch dữ liệu của cả bảng.',
        iconName: 'AlertTriangle'
      }
    ],
    warmup: {
      title: 'Tình huống: Thảm họa xóa nhầm toàn bộ dữ liệu công ty',
      scenario: 'Một nhân viên thử việc muốn xóa tài khoản của bạn học sinh "HS99" đã chuyển trường. Thay vì gõ `DELETE FROM HOC_SINH WHERE MaHS = \'HS99\';`, bạn ấy lại gõ nhầm: `DELETE FROM HOC_SINH;` và bấm Enter.',
      pollQuestion: 'Điều gì tồi tệ sẽ xảy ra khi thực hiện lệnh DELETE mà không có mệnh đề WHERE?',
      pollOptions: [
        { id: 'p11_21_1', text: 'Toàn bộ tất cả học sinh trong trường bị xóa sạch không còn một ai!', votesPercent: 95, isPopular: true, insight: 'Chính xác! Lệnh DELETE không có WHERE sẽ quét sạch toàn bộ các bản ghi trong bảng dữ liệu.' },
        { id: 'p11_21_2', text: 'Máy tính tự động hỏi lại 10 lần', votesPercent: 3, insight: 'Trong môi trường dòng lệnh SQL, hệ thống thực thi ngay lập tức chỉ thị mà không hỏi lại.' },
        { id: 'p11_21_3', text: 'Chỉ xóa ngẫu nhiên 1 học sinh', votesPercent: 2, insight: 'SQL thực hiện triệt để theo cú pháp bạn đã ra lệnh.' }
      ],
      reflection: 'Ghi nhớ sống còn của mọi kỹ sư dữ liệu: Luôn kiểm tra mệnh đề WHERE trước khi chạy lệnh UPDATE hoặc DELETE.'
    },
    knowledge: [
      {
        id: 'tab_11_21_1',
        title: '1. Cú Pháp Thêm, Sửa, Xóa Dữ Liệu SQL',
        subtitle: 'INSERT INTO, UPDATE SET và DELETE FROM',
        iconName: 'Edit',
        keyPoints: [
          'Thêm dữ liệu: `INSERT INTO <Tên_Bảng> (Cột1, Cột2, ...) VALUES (GiaTri1, GiaTri2, ...);`',
          'Sửa dữ liệu: `UPDATE <Tên_Bảng> SET Cột1 = GiaTriMoi, Cột2 = GiaTriMoi WHERE <Điều_Kiện>;`',
          'Xóa dữ liệu: `DELETE FROM <Tên_Bảng> WHERE <Điều_Kiện>;`',
          'Quy tắc an toàn: Luôn sử dụng lệnh SELECT để xem trước các dòng thỏa mãn điều kiện trước khi quyết định DELETE.'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- 1. Thêm bản ghi mới\nINSERT INTO HOC_SINH (MaHS, HoTen, NgaySinh, MaLop)\nVALUES (\'HS05\', \'Hoàng Văn Nam\', \'2008-11-20\', \'11A1\');\n\n-- 2. Cập nhật ngày sinh cho học sinh HS05\nUPDATE HOC_SINH\nSET NgaySinh = \'2008-11-22\'\nWHERE MaHS = \'HS05\';\n\n-- 3. Xem lại dữ liệu sau khi cập nhật\nSELECT * FROM HOC_SINH WHERE MaLop = \'11A1\';'
        },
        emCanNho: [
          'Thêm dữ liệu: `INSERT INTO <table> VALUES (...);`',
          'Cập nhật: `UPDATE <table> SET <cột> = <giá_trị> WHERE <điều_kiện>;`',
          'Xóa bản ghi: `DELETE FROM <table> WHERE <điều_kiện>;` (Bắt buộc phải có WHERE).'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu lệnh DML và Thao tác tương ứng',
      instruction: 'Nối câu lệnh SQL với hành động tương ứng trên dữ liệu:',
      matchingPairs: [
        { id: 'crud1', left: 'INSERT INTO LOP VALUES (\'11A1\', \'Lớp 11A1\');', right: 'Thêm mới một lớp học có mã 11A1 vào danh mục' },
        { id: 'crud2', left: 'UPDATE HOC_SINH SET DiemTin = 10 WHERE MaHS = \'HS01\';', right: 'Cập nhật điểm Tin học thành 10 cho học sinh có mã HS01' },
        { id: 'crud3', left: 'DELETE FROM HOC_SINH WHERE MaHS = \'HS05\';', right: 'Xóa hồ sơ của học sinh có mã HS05 khỏi danh sách' },
        { id: 'crud4', left: 'SELECT * FROM HOC_SINH WHERE DiemTin >= 8.0;', right: 'Truy vấn hiển thị danh sách học sinh đạt điểm từ 8 trở lên' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Câu lệnh SQL nào sau đây dùng để THÊM một dòng dữ liệu mới vào bảng?',
        options: ['INSERT INTO', 'ADD ROW', 'NEW RECORD', 'CREATE DATA'],
        correctIndex: 0,
        explanation: 'INSERT INTO là câu lệnh chuẩn trong SQL để chèn các bản ghi mới vào bảng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để sửa đổi thông tin điểm số của học sinh trong CSDL, ta dùng câu lệnh nào?',
        options: ['UPDATE ... SET ... WHERE', 'ALTER TABLE', 'MODIFY ROW', 'CHANGE DATA'],
        correctIndex: 0,
        explanation: 'UPDATE ... SET dùng để sửa đổi giá trị dữ liệu bên trong các bản ghi hiện có.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hậu quả gì xảy ra khi bạn thực thi lệnh: `UPDATE SAN_PHAM SET GiaTien = 0;`?',
        options: [
          'Toàn bộ tất cả sản phẩm trong cửa hàng đều bị đổi giá tiền về 0 đồng do thiếu mệnh đề WHERE',
          'Chỉ sản phẩm đầu tiên đổi về 0 đồng',
          'Phần mềm báo lỗi cú pháp',
          'Không có sản phẩm nào bị ảnh hưởng'
        ],
        correctIndex: 0,
        explanation: 'Khi thiếu mệnh đề WHERE, lệnh UPDATE sẽ áp dụng giá trị mới lên 100% các dòng trong bảng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Muốn xóa những học sinh có điểm rèn luyện dưới 50 điểm trong bảng `DANH_GIA`, câu lệnh nào ĐÚNG?',
        options: [
          'DELETE FROM DANH_GIA WHERE DiemRenLuyen < 50;',
          'REMOVE FROM DANH_GIA < 50;',
          'DROP DANH_GIA WHERE DiemRenLuyen < 50;',
          'CLEAR DATA < 50;'
        ],
        correctIndex: 0,
        explanation: 'DELETE FROM kết hợp với điều kiện lọc WHERE xóa chính xác các bản ghi thỏa mãn.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Trong câu lệnh INSERT INTO, giá trị dạng chuỗi (ký tự văn bản) hoặc ngày tháng phải được đặt trong cặp dấu nào?',
        options: ['Cặp dấu nháy đơn \'...\' (hoặc nháy kép "...")', 'Cặp dấu ngoặc vuông [...]', 'Cặp dấu thăng #...#', 'Không cần đặt trong dấu nào'],
        correctIndex: 0,
        explanation: 'Chuỗi ký tự và ngày tháng trong SQL bắt buộc phải được bao bọc trong dấu nháy.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Cập nhật Hồ sơ Đội Viên và Điểm số Học tập',
        context: 'Lớp học có sự thay đổi thông tin học sinh cần được cập nhật vào CSDL.',
        mission: 'Soạn thảo chuỗi lệnh SQL thực hiện 3 thao tác liên hoàn.',
        steps: [
          'Bước 1: Chèn 3 bạn học sinh mới vào bảng `HOC_SINH` bằng lệnh `INSERT INTO`.',
          'Bước 2: Cập nhật địa chỉ của bạn "HS02" chuyển sang "Số 10 Đường Lê Duẩn" bằng lệnh `UPDATE`.',
          'Bước 3: Xóa một bạn có mã "HS99" đã chuyển trường bằng lệnh `DELETE FROM ... WHERE`.',
          'Bước 4: Chạy lệnh `SELECT * FROM HOC_SINH;` để kiểm tra kết quả.'
        ],
        outputRequirement: 'Dữ liệu trong bảng được cập nhật chính xác, không còn bản ghi cũ.',
        practicalTip: 'Nên viết lệnh vào tab Query và bấm F9 từng dòng một để quan sát thông báo thành công từ máy chủ.'
      },
      mindmap: {
        id: 'mm_11_21',
        label: 'THAO TÁC DỮ LIỆU CRUD',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_21_1',
            label: 'Thêm & Đọc',
            children: [
              { id: 'mm_11_21_1_1', label: 'INSERT INTO ... VALUES' },
              { id: 'mm_11_21_1_2', label: 'SELECT ... FROM ... WHERE' }
            ]
          },
          {
            id: 'mm_11_21_2',
            label: 'Sửa & Xóa an toàn',
            children: [
              { id: 'mm_11_21_2_1', label: 'UPDATE ... SET ... WHERE' },
              { id: 'mm_11_21_2_2', label: 'DELETE FROM ... WHERE' },
              { id: 'mm_11_21_2_3', label: 'Cảnh báo mất WHERE' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Viên Dữ Liệu CRUD 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Thao Tác Dữ Liệu Thực Chiến',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ 4 câu lệnh thao tác dữ liệu cốt lõi INSERT, UPDATE, DELETE, SELECT.',
      skillsUnlocked: ['Thêm dữ liệu INSERT INTO', 'Cập nhật UPDATE có WHERE', 'Xóa an toàn DELETE']
    }
  }
];
