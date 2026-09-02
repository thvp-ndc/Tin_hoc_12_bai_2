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
        title: 'Cú pháp tạo CSDL và Bảng SQL',
        description: 'Nắm vững cú pháp chuẩn: `CREATE DATABASE <tên_csdl>;`, `USE <tên_csdl>;` và `CREATE TABLE <tên_bảng> (tên_cột kiểu_dữ_liệu ràng_buộc, PRIMARY KEY (khóa));`.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_19_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tự tay viết script tạo bảng trên HeidiSQL',
        description: 'Soạn thảo và thực thi thành công script SQL tạo các bảng `HOC_SINH`, `LOP` trên HeidiSQL không gặp lỗi cú pháp.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_19_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Chuẩn hóa quy ước đặt tên',
        description: 'Tuân thủ quy ước đặt tên bảng và cột bằng chữ không dấu, dùng dấu gạch dưới (snake_case), dễ đọc và dễ bảo trì.',
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
        title: '1. Lệnh tạo CSDL (CREATE DATABASE, USE)',
        subtitle: 'Khởi tạo không gian lưu trữ và chọn vùng làm việc hiện hành',
        iconName: 'Database',
        keyPoints: [
          'Lệnh tạo cơ sở dữ liệu mới: `CREATE DATABASE <Ten_CSDL> CHARACTER SET utf8mb4;`',
          '  - Bảng mã `utf8mb4`: Hỗ trợ lưu trữ tiếng Việt có dấu đầy đủ và các ký tự emoji hiện đại.',
          'Lệnh chọn CSDL hiện hành để thao tác: `USE <Ten_CSDL>;`',
          '  - Phải dùng lệnh USE trước khi tạo bảng để các bảng được đặt đúng vào cơ sở dữ liệu mong muốn.',
          'Lệnh xóa CSDL (nếu cần làm lại từ đầu): `DROP DATABASE IF EXISTS <Ten_CSDL>;`'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: '-- Tạo CSDL trường học\nCREATE DATABASE IF NOT EXISTS ql_truong_hoc\nCHARACTER SET utf8mb4;\n\n-- Chọn CSDL vừa tạo\nUSE ql_truong_hoc;'
        },
        emCanNho: [
          'Cú pháp tạo CSDL: `CREATE DATABASE <Tên_CSDL>;`.',
          'Cú pháp chọn CSDL làm việc: `USE <Tên_CSDL>;`.',
          'Luôn thêm `CHARACTER SET utf8mb4` để hiển thị tiếng Việt không bị lỗi font.'
        ]
      },
      {
        id: 'tab_11_19_2',
        title: '2. Lệnh tạo bảng dữ liệu (CREATE TABLE) kèm PRIMARY KEY',
        subtitle: 'Định nghĩa các cột thuộc tính và chỉ định khóa chính cho bảng',
        iconName: 'Table',
        keyPoints: [
          'Cú pháp tạo bảng chuẩn:',
          '  `CREATE TABLE <Ten_Bang> (`',
          '    `TenCot1 KieuDuLieu RangBuoc,`',
          '    `TenCot2 KieuDuLieu RangBuoc,`',
          '    `... ,`',
          '    `PRIMARY KEY (CotKhoaChinh)`',
          '  `);`',
          'Ví dụ tạo bảng HOC_SINH:',
          '  `CREATE TABLE HOC_SINH (`',
          '    `MaHS VARCHAR(10) NOT NULL,`',
          '    `HoTen VARCHAR(50) NOT NULL,`',
          '    `NgaySinh DATE,`',
          '    `GioiTinh VARCHAR(5),`',
          '    `DiemTB DECIMAL(4, 2),`',
          '    `PRIMARY KEY (MaHS)`',
          '  `);`'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'CREATE TABLE HOC_SINH (\n    MaHS VARCHAR(10) NOT NULL,\n    HoTen VARCHAR(50) NOT NULL,\n    NgaySinh DATE,\n    DiemTB DECIMAL(4, 2),\n    PRIMARY KEY (MaHS)\n);'
        },
        emCanNho: [
          'Cú pháp tạo bảng: `CREATE TABLE <Tên_Bảng> (các_cột, PRIMARY KEY (cột_khóa));`.',
          'Khóa chính luôn đi kèm ràng buộc `NOT NULL`.',
          'Mỗi cột cách nhau dấu phẩy `,`, kết thúc câu lệnh bằng dấu chấm phẩy `;`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu Lệnh DDL và Ý Nghĩa Thực Thi',
      instruction: 'Nối câu lệnh SQL với hành động tương ứng:',
      matchingPairs: [
        { id: 'ddl1', left: 'CREATE DATABASE ql_hocsinh;', right: 'Khởi tạo một cơ sở dữ liệu mới trên máy chủ' },
        { id: 'ddl2', left: 'USE ql_hocsinh;', right: 'Kích hoạt cơ sở dữ liệu này làm vùng làm việc hiện tại' },
        { id: 'ddl3', left: 'PRIMARY KEY (MaHS)', right: 'Chỉ định trường MaHS làm khóa chính định danh cho bảng' },
        { id: 'ddl4', left: 'DROP TABLE IF EXISTS LOP;', right: 'Xóa bảng LOP nếu bảng này đã tồn tại trong CSDL' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Câu lệnh SQL nào sau đây dùng để TẠO MỚI một cơ sở dữ liệu có tên là `quan_ly_sach`?',
        options: [
          'CREATE DATABASE quan_ly_sach;',
          'MAKE DATABASE quan_ly_sach;',
          'NEW DATABASE quan_ly_sach;',
          'INSERT DATABASE quan_ly_sach;'
        ],
        correctIndex: 0,
        explanation: 'CREATE DATABASE là cú pháp chuẩn của chuẩn SQL quốc tế.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Sau khi tạo CSDL, câu lệnh nào BẮT BUỘC phải thực hiện để chỉ định CSDL đó làm vùng làm việc hiện hành trước khi tạo bảng?',
        options: ['USE <Tên_CSDL>;', 'OPEN <Tên_CSDL>;', 'SELECT <Tên_CSDL>;', 'GO TO <Tên_CSDL>;'],
        correctIndex: 0,
        explanation: 'Lệnh USE kích hoạt ngữ cảnh cơ sở dữ liệu hiện hành.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Trong câu lệnh CREATE TABLE, mệnh đề nào dùng để thiết lập trường khóa chính?',
        options: ['PRIMARY KEY (tên_trường)', 'MAIN KEY (tên_trường)', 'KEY FIRST (tên_trường)', 'MASTER KEY (tên_trường)'],
        correctIndex: 0,
        explanation: 'Từ khóa PRIMARY KEY xác định trường định danh duy nhất cho bảng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Khi tạo bảng HOC_SINH trong MySQL, tham số `CHARACTER SET utf8mb4` có tác dụng gì?',
        options: [
          'Hỗ trợ lưu trữ tiếng Việt có dấu đầy đủ và chính xác không bị lỗi hiển thị',
          'Giúp máy tính chạy mát hơn',
          'Khóa bảng không cho ai xem',
          'Tự động dịch sang tiếng Anh'
        ],
        correctIndex: 0,
        explanation: 'Bảng mã utf8mb4 là chuẩn Unicode hoàn chỉnh nhất hỗ trợ tiếng Việt trên MySQL.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Điều gì xảy ra nếu bạn cố gắng thực hiện lệnh CREATE TABLE cho một bảng đã tồn tại sẵn trong CSDL mà không có mệnh đề IF NOT EXISTS?',
        options: [
          'Hệ QTCSDL sẽ báo lỗi "Table already exists" và dừng thực thi lệnh',
          'Hệ thống tự động xóa bảng cũ đi ghi đè bảng mới',
          'Máy tính tự khởi động lại',
          'Tự động đổi tên bảng thành bảng số 2'
        ],
        correctIndex: 0,
        explanation: 'MySQL không cho phép tạo hai bảng cùng tên trong cùng một cơ sở dữ liệu.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Script Tự Động Hóa: Tạo Lập CSDL "QuanLyThuVien"',
        context: 'Xây dựng kịch bản SQL hoàn chỉnh khởi tạo hệ thống thư viện.',
        mission: 'Soạn tệp `tao_lap_csdl.sql` thực thi trọn vẹn từ tạo CSDL đến tạo bảng.',
        steps: [
          'Dòng 1: `CREATE DATABASE IF NOT EXISTS thu_vien CHARACTER SET utf8mb4;`',
          'Dòng 2: `USE thu_vien;`',
          'Dòng 3: Tạo bảng `DOC_GIA` gồm `MaDG` (PK), `HoTen`, `Lop`, `NgaySinh`.',
          'Dòng 4: Chạy toàn bộ script bằng phím F9 trong HeidiSQL và kiểm tra danh sách bảng.'
        ],
        outputRequirement: 'Tệp mã nguồn SQL chạy trơn tru, bảng được tạo thành công trên máy chủ cục bộ.',
        practicalTip: 'Viết hoa các từ khóa SQL (CREATE, TABLE, PRIMARY KEY) giúp mã nguồn sáng sủa và dễ đọc hơn.'
      },
      mindmap: {
        id: 'mm_11_19',
        label: 'TẠO CSDL & BẢNG',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_19_1',
            label: 'Lệnh cấp Database',
            children: [
              { id: 'mm_11_19_1_1', label: 'CREATE DATABASE <tên>' },
              { id: 'mm_11_19_1_2', label: 'USE <tên_csdl>' },
              { id: 'mm_11_19_1_3', label: 'CHARACTER SET utf8mb4' }
            ]
          },
          {
            id: 'mm_11_19_2',
            label: 'Lệnh cấp Bảng',
            children: [
              { id: 'mm_11_19_2_1', label: 'CREATE TABLE <tên>' },
              { id: 'mm_11_19_2_2', label: 'Định nghĩa các cột' },
              { id: 'mm_11_19_2_3', label: 'PRIMARY KEY (cột_khóa)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Kiến Tạo DDL 11',
      badgeIcon: 'Code',
      roleTitle: 'Chuyên Viên Lập Trình Định Nghĩa Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã tự tay viết script tạo lập CSDL và bảng dữ liệu đầu tiên trên máy chủ thực tế.',
      skillsUnlocked: ['Lệnh CREATE DATABASE & USE', 'Cú pháp CREATE TABLE', 'Thiết lập PRIMARY KEY']
    }
  },

  // Bài 20: Thực hành tạo lập các bảng có khoá ngoài
  {
    id: 20,
    code: 'TIN11_B20',
    title: 'Thực hành tạo lập các bảng có khoá ngoài',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Khóa ngoài FOREIGN KEY',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kết nối đa chiều: Thiết lập các sợi dây liên kết giữa bảng cha và bảng con',
      description: 'Luyện tập kỹ năng xác định quan hệ cha - con giữa các bảng và khai báo ràng buộc khóa ngoài chuẩn xác bằng câu lệnh FOREIGN KEY ... REFERENCES.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Quan hệ Bảng cha - Bảng con', 'Cú pháp FOREIGN KEY REFERENCES', 'Toàn vẹn tham chiếu']
    },
    objectives: [
      {
        id: 'obj_11_20_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu quan hệ Bảng cha & Bảng con',
        description: 'Xác định được vai trò của bảng cha (chứa khóa chính) và bảng con (chứa khóa ngoài tham chiếu tới bảng cha).',
        iconName: 'Link'
      },
      {
        id: 'obj_11_20_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết cú pháp khai báo khóa ngoài',
        description: 'Viết được mệnh đề `FOREIGN KEY (CotNgoai) REFERENCES BangCha(CotChinh)` khi tạo bảng phụ thuộc không bị lỗi quan hệ.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_20_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng trật tự tạo bảng logic',
        description: 'Hình thành tư duy trình tự: Bắt buộc phải tạo bảng cha trước rồi mới tạo được bảng con chứa khóa ngoài.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tạo bảng con trước bảng cha và nhận thông báo lỗi đỏ',
      scenario: 'Một bạn học sinh viết script tạo bảng `PHIEU_MUON` tham chiếu đến `MaSach` trong bảng `SACH`. Khi chạy lệnh, MySQL báo lỗi nghiêm trọng: "Cannot add foreign key constraint (1215)" vì bảng `SACH` lúc đó thậm chí còn chưa được tạo!',
      pollQuestion: 'Nguyên tắc vàng về thứ tự khi viết script tạo các bảng có liên kết khóa ngoài là gì?',
      pollOptions: [
        { id: 'p11_20_1', text: 'BẮT BUỘC phải tạo bảng cha (chứa khóa chính) trước, sau đó mới tạo bảng con (chứa khóa ngoài)', votesPercent: 96, isPopular: true, insight: 'Chính xác! Khóa ngoài cần có mục tiêu để tham chiếu đến, nên bảng cha phải tồn tại trước.' },
        { id: 'p11_20_2', text: 'Tạo bảng nào trước cũng được, MySQL tự đoán', votesPercent: 2, insight: 'Hệ QTCSDL đòi hỏi tính xác định chặt chẽ, không thể tham chiếu vào bảng chưa tồn tại.' },
        { id: 'p11_20_3', text: 'Xóa hết khóa ngoài đi cho đỡ lỗi', votesPercent: 2, insight: 'Xóa khóa ngoài sẽ làm mất liên kết dữ liệu và mất tính toàn vẹn tham chiếu.' }
      ],
      reflection: 'Thứ tự logic là nguyên tắc kỷ luật cao nhất của lập trình viên cơ sở dữ liệu.'
    },
    knowledge: [
      {
        id: 'tab_11_20_1',
        title: '1. Xác định quan hệ bảng cha - bảng con',
        subtitle: 'Nhận diện đối tượng độc lập và đối tượng phụ thuộc tham chiếu',
        iconName: 'Layers',
        keyPoints: [
          'Bảng cha (Parent Table): Bảng chứa thực thể độc lập, trường được tham chiếu tới là Khóa chính của bảng này. Ví dụ: Bảng `LOP_HOC` (Mã lớp), Bảng `SACH` (Mã sách).',
          'Bảng con (Child Table): Bảng phụ thuộc, chứa trường khóa ngoài trỏ về khóa chính của bảng cha. Ví dụ: Bảng `HOC_SINH` thuộc về một `LOP_HOC`, Bảng `PHIEU_MUON` chứa `MaSach` mượn.',
          'Nguyên tắc toàn vẹn tham chiếu: Giá trị của khóa ngoài ở bảng con hoặc là rỗng (NULL), hoặc bắt buộc phải xuất hiện trong tập các giá trị khóa chính của bảng cha.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bảng cha: LOP_HOC', desc: 'Khóa chính: [MaLop] (Phải tạo trước)' },
            { label: 'Sợi dây liên kết', desc: 'Ràng buộc toàn vẹn tham chiếu Foreign Key' },
            { label: 'Bảng con: HOC_SINH', desc: 'Khóa ngoài: (MaLop) tham chiếu tới LOP_HOC' }
          ]
        },
        emCanNho: [
          'Bảng cha chứa khóa chính được tham chiếu; Bảng con chứa khóa ngoài.',
          'Bảng cha luôn phải được tạo trước bảng con.',
          'Khóa ngoài ngăn chặn việc nhập dữ liệu liên kết không tồn tại ở bảng cha.'
        ]
      },
      {
        id: 'tab_11_20_2',
        title: '2. Khai báo khóa ngoài FOREIGN KEY ... REFERENCES',
        subtitle: 'Cú pháp câu lệnh thiết lập ràng buộc khóa ngoài trong CREATE TABLE',
        iconName: 'Code',
        keyPoints: [
          'Cú pháp chuẩn khai báo khóa ngoài trong lệnh CREATE TABLE:',
          '  `CONSTRAINT <Ten_Rang_Buoc>`',
          '  `FOREIGN KEY (<Cot_Khoa_Ngoai>)`',
          '  `REFERENCES <Bang_Cha>(<Cot_Khoa_Chinh_Bang_Cha>);`',
          'Ví dụ tạo bảng HOC_SINH liên kết với bảng LOP_HOC:',
          '  `CREATE TABLE HOC_SINH (`',
          '    `MaHS VARCHAR(10) NOT NULL,`',
          '    `HoTen VARCHAR(50) NOT NULL,`',
          '    `MaLop VARCHAR(10),`',
          '    `PRIMARY KEY (MaHS),`',
          '    `FOREIGN KEY (MaLop) REFERENCES LOP_HOC(MaLop)`',
          '  `);`'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: '-- 1. Tạo bảng cha trước\nCREATE TABLE LOP_HOC (\n    MaLop VARCHAR(10) NOT NULL,\n    TenLop VARCHAR(50) NOT NULL,\n    PRIMARY KEY (MaLop)\n);\n\n-- 2. Tạo bảng con có khóa ngoài\nCREATE TABLE HOC_SINH (\n    MaHS VARCHAR(10) NOT NULL,\n    HoTen VARCHAR(50) NOT NULL,\n    MaLop VARCHAR(10),\n    PRIMARY KEY (MaHS),\n    FOREIGN KEY (MaLop) REFERENCES LOP_HOC(MaLop)\n);'
        },
        emCanNho: [
          'Cú pháp: `FOREIGN KEY (cot_ngoai) REFERENCES BangCha(cot_chinh)`.',
          'Kiểu dữ liệu của khóa ngoài phải giống hệt kiểu dữ liệu của khóa chính bảng cha.',
          'Nếu muốn xóa bảng, phải xóa bảng con trước rồi mới xóa được bảng cha.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Mối Quan Hệ Bảng Cha và Bảng Con',
      instruction: 'Nối bảng cha với bảng con phụ thuộc tương ứng:',
      matchingPairs: [
        { id: 'fk1', left: 'Bảng cha: KHOA_HOC', right: 'Bảng con: LOP_HOC (chứa khóa ngoài MaKhoa)' },
        { id: 'fk2', left: 'Bảng cha: DOC_GIA', right: 'Bảng con: PHIEU_MUON (chứa khóa ngoài MaDG)' },
        { id: 'fk3', left: 'Bảng cha: TAC_GIA', right: 'Bảng con: SACH (chứa khóa ngoài MaTacGia)' },
        { id: 'fk4', left: 'Thứ tự xóa bảng có liên kết', right: 'Bắt buộc xóa bảng con trước, sau đó mới xóa bảng cha' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Từ khóa nào trong SQL được dùng để thiết lập mối liên kết giữa khóa ngoài và khóa chính của bảng khác?',
        options: ['REFERENCES', 'CONNECT TO', 'LINK WITH', 'JOIN ON'],
        correctIndex: 0,
        explanation: 'Từ khóa REFERENCES (tham chiếu tới) chỉ định bảng cha và cột đích được kết nối.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi thiết kế hai bảng LOP (bảng cha) và HOC_SINH (bảng con), thứ tự thực thi các lệnh tạo bảng nào sau đây là ĐÚNG?',
        options: [
          'Tạo bảng LOP trước, sau đó tạo bảng HOC_SINH',
          'Tạo bảng HOC_SINH trước, sau đó tạo bảng LOP',
          'Tạo cả hai bảng cùng lúc trên một dòng',
          'Thứ tự nào cũng được'
        ],
        correctIndex: 0,
        explanation: 'Bảng cha phải tồn tại trước thì bảng con mới có mục tiêu để tham chiếu khóa ngoài.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Điều kiện BẮT BUỘC về kiểu dữ liệu giữa cột Khóa ngoài và cột Khóa chính được tham chiếu là gì?',
        options: [
          'Phải có cùng kiểu dữ liệu và tương thích về kích thước độ dài',
          'Khóa ngoài bắt buộc phải là số, còn khóa chính là chữ',
          'Khóa ngoài phải có độ dài gấp đôi khóa chính',
          'Không có bất kỳ ràng buộc nào'
        ],
        correctIndex: 0,
        explanation: 'Cùng kiểu dữ liệu (ví dụ cùng VARCHAR(10)) là yêu cầu bắt buộc để máy chủ so khớp liên kết.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Nếu bảng HOC_SINH đang tham chiếu đến bảng LOP, điều gì xảy ra nếu bạn chạy lệnh: `DROP TABLE LOP;`?',
        options: [
          'MySQL sẽ báo lỗi và ngăn cản việc xóa vì bảng LOP đang bị bảng khác tham chiếu (Foreign Key Constraint)',
          'Toàn bộ bảng HOC_SINH cũng tự động bị xóa theo',
          'Máy tính bị đơ',
          'Hệ thống tự động xóa hết học sinh'
        ],
        correctIndex: 0,
        explanation: 'Ràng buộc khóa ngoài bảo vệ bảng cha không bị xóa khi vẫn còn các bản ghi con phụ thuộc.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Lợi ích lớn nhất của việc thiết lập khóa ngoài (Foreign Key) thay vì chỉ tạo cột bình thường là gì?',
        options: [
          'Hệ QTCSDL sẽ tự động kiểm tra và ngăn chặn việc nhập dữ liệu tham chiếu sai lệch, không tồn tại',
          'Làm giao diện phần mềm có thêm màu sắc',
          'Tăng dung lượng ổ cứng gấp đôi',
          'Tự động in báo cáo ra máy in'
        ],
        correctIndex: 0,
        explanation: 'Khóa ngoài tự động bảo vệ tính toàn vẹn tham chiếu dữ liệu ở cấp độ máy chủ CSDL.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Thiết Lập Liên Kết Khóa Ngoài Giữa Sách và Thể Loại',
        context: 'Phân loại các đầu sách trong thư viện theo từng thể loại văn học, khoa học.',
        mission: 'Viết script SQL tạo 2 bảng THE_LOAI và SACH có ràng buộc khóa ngoài chuẩn.',
        steps: [
          'Bước 1: Tạo bảng cha `THE_LOAI` gồm `MaTL VARCHAR(10) PRIMARY KEY`, `TenTL VARCHAR(50)`.',
          'Bước 2: Tạo bảng con `SACH` gồm `MaSach VARCHAR(10) PRIMARY KEY`, `TenSach VARCHAR(100)`, `MaTL VARCHAR(10)`.',
          'Bước 3: Khai báo `FOREIGN KEY (MaTL) REFERENCES THE_LOAI(MaTL)`.',
          'Bước 4: Chạy script và dùng HeidiSQL kiểm tra thẻ Foreign keys của bảng SACH.'
        ],
        outputRequirement: 'Script SQL hoàn chỉnh không lỗi cú pháp, mối liên kết hiển thị trên HeidiSQL.',
        practicalTip: 'Đặt tên cho ràng buộc khóa ngoài theo mẫu `fk_bangcon_bangcha` (ví dụ: `fk_sach_theloai`) để dễ quản lý.'
      },
      mindmap: {
        id: 'mm_11_20',
        label: 'KHÓA NGOÀI FOREIGN KEY',
        color: '#2563eb',
        children: [
          {
            id: 'mm_11_20_1',
            label: 'Nguyên tắc quan hệ',
            children: [
              { id: 'mm_11_20_1_1', label: 'Bảng cha chứa Khóa chính (PK)' },
              { id: 'mm_11_20_1_2', label: 'Bảng con chứa Khóa ngoài (FK)' },
              { id: 'mm_11_20_1_3', label: 'Tạo bảng cha trước bảng con' }
            ]
          },
          {
            id: 'mm_11_20_2',
            label: 'Cú pháp FOREIGN KEY',
            children: [
              { id: 'mm_11_20_2_1', label: 'FOREIGN KEY (cot_con)' },
              { id: 'mm_11_20_2_2', label: 'REFERENCES BangCha(cot_chinh)' },
              { id: 'mm_11_20_2_3', label: 'Bảo vệ toàn vẹn tham chiếu' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Liên Kết Dữ Liệu 11',
      badgeIcon: 'Link',
      roleTitle: 'Chuyên Viên Thiết Kế Mối Quan Hệ CSDL',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ kỹ thuật khai báo khóa ngoài, bảo đảm tính toàn vẹn tham chiếu giữa các bảng dữ liệu.',
      skillsUnlocked: ['Phân biệt bảng cha vs con', 'Cú pháp FOREIGN KEY REFERENCES', 'Trật tự tạo và xóa bảng quan hệ']
    }
  },

  // Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng
  {
    id: 21,
    code: 'TIN11_B21',
    title: 'Thực hành cập nhật và truy xuất dữ liệu các bảng',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Bộ lệnh CRUD',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Vận hành dữ liệu thực tế: Trọn bộ 4 thao tác kinh điển INSERT, UPDATE, DELETE, SELECT',
      description: 'Thực hành thao tác với dữ liệu bên trong bảng: Thêm bản ghi mới bằng INSERT INTO, chỉnh sửa dữ liệu bằng UPDATE, xóa dữ liệu an toàn bằng DELETE và truy xuất chọn lọc bằng SELECT.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Thêm dữ liệu INSERT INTO', 'Chỉnh sửa dữ liệu UPDATE', 'Xóa an toàn DELETE với WHERE']
    },
    objectives: [
      {
        id: 'obj_11_21_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nắm vững cú pháp bộ lệnh CRUD',
        description: 'Trình bày được cú pháp chuẩn của 3 lệnh thay đổi dữ liệu: INSERT INTO (Thêm), UPDATE SET WHERE (Sửa), DELETE FROM WHERE (Xóa).',
        iconName: 'Edit3'
      },
      {
        id: 'obj_11_21_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác dữ liệu an toàn có điều kiện',
        description: 'Thực hiện được việc chèn nhiều bản ghi, cập nhật chính xác một trường và xóa đúng bản ghi chỉ định bằng mệnh đề WHERE mà không làm hỏng dữ liệu khác.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_21_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Kỷ luật an toàn dữ liệu tuyệt đối',
        description: 'Khắc sâu thói quen luôn kiểm tra kỹ mệnh đề WHERE trước khi chạy lệnh UPDATE hoặc DELETE để tránh thảm họa xóa sạch dữ liệu toàn bảng.',
        iconName: 'AlertTriangle'
      }
    ],
    warmup: {
      title: 'Tình huống: Câu chuyện kinh hoàng "UPDATE quên WHERE"',
      scenario: 'Một nhân viên thử việc cần cập nhật địa chỉ cho học sinh có mã "HS005". Do vội vàng, nhân viên này chỉ gõ: `UPDATE HOC_SINH SET DiaChi = \'Hà Nội\';` và bấm phím F9.',
      pollQuestion: 'Hậu quả gì đã xảy ra ngay sau khi câu lệnh trên được thực thi trên cơ sở dữ liệu?',
      pollOptions: [
        { id: 'p11_21_1', text: 'Toàn bộ 3000 học sinh trong trường đều bị đổi địa chỉ thành "Hà Nội" do thiếu mệnh đề WHERE lọc MaHS = \'HS005\'', votesPercent: 95, isPopular: true, insight: 'Chính xác! Lệnh UPDATE hoặc DELETE nếu không có WHERE sẽ tự động áp dụng lên TOÀN BỘ tất cả các hàng trong bảng.' },
        { id: 'p11_21_2', text: 'Chỉ có bạn HS005 bị đổi địa chỉ', votesPercent: 3, insight: 'Máy chủ không thể biết bạn muốn đổi cho ai nếu bạn không chỉ định WHERE MaHS = \'HS005\'.' },
        { id: 'p11_21_3', text: 'Máy tính tự động từ chối chạy lệnh', votesPercent: 2, insight: 'Cú pháp đó hoàn toàn hợp lệ về mặt ngữ pháp nên MySQL sẽ chạy ngay lập tức.' }
      ],
      reflection: 'Quy tắc sống còn của mọi lập trình viên CSDL: "Trước khi bấm chạy lệnh UPDATE hoặc DELETE, hãy soi lại mệnh đề WHERE ít nhất 3 lần!".'
    },
    knowledge: [
      {
        id: 'tab_11_21_1',
        title: '1. Thao tác thêm dữ liệu (INSERT INTO)',
        subtitle: 'Bổ sung các bản ghi mới vào bảng',
        iconName: 'PlusCircle',
        keyPoints: [
          'Cú pháp chèn 1 bản ghi:',
          '  `INSERT INTO <Ten_Bang> (Cot1, Cot2, ...)`',
          '  `VALUES (GiaTri1, GiaTri2, ...);`',
          'Cú pháp chèn nhiều bản ghi đồng thời:',
          '  `INSERT INTO HOC_SINH (MaHS, HoTen, NgaySinh, DiemTB) VALUES`',
          '  `(\'HS01\', \'Nguyễn An\', \'2008-01-15\', 8.5),`',
          '  `(\'HS02\', \'Trần Bình\', \'2008-05-20\', 9.0);`',
          'Quy tắc dữ liệu: Chuỗi ký tự và Ngày tháng phải đặt trong dấu nháy đơn `\' \'`; Số không cần dấu nháy; Thứ tự giá trị phải khớp đúng với danh sách cột.'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'INSERT INTO HOC_SINH (MaHS, HoTen, NgaySinh, DiemTB)\nVALUES (\'HS01\', \'Nguyễn Văn An\', \'2008-01-15\', 8.5);\n\nSELECT * FROM HOC_SINH;'
        },
        emCanNho: [
          'Cú pháp thêm dữ liệu: `INSERT INTO TenBang (danh_sach_cot) VALUES (danh_sach_gia_tri);`.',
          'Chuỗi ký tự và Ngày tháng bắt buộc đặt trong cặp dấu nháy đơn `\' \'`.',
          'Có thể chèn nhiều dòng một lúc bằng cách ngăn cách các bộ giá trị bằng dấu phẩy `,`.'
        ]
      },
      {
        id: 'tab_11_21_2',
        title: '2. Thao tác sửa dữ liệu (UPDATE ... SET ... WHERE)',
        subtitle: 'Cập nhật giá trị các trường dữ liệu hiện có',
        iconName: 'Edit3',
        keyPoints: [
          'Cú pháp câu lệnh sửa dữ liệu:',
          '  `UPDATE <Ten_Bang>`',
          '  `SET Cot1 = GiaTriMoi1, Cot2 = GiaTriMoi2`',
          '  `WHERE <Dieu_Kien_Loc>;`',
          'Ví dụ sửa điểm cho học sinh HS01:',
          '  `UPDATE HOC_SINH`',
          '  `SET DiemTB = 9.5`',
          '  `WHERE MaHS = \'HS01\';`',
          'CẢNH BÁO NGUY HIỂM: Nếu bỏ quên mệnh đề `WHERE`, toàn bộ tất cả các hàng trong bảng sẽ bị sửa sang giá trị mới!'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'UPDATE HOC_SINH\nSET DiemTB = 9.5\nWHERE MaHS = \'HS01\';\n\nSELECT * FROM HOC_SINH WHERE MaHS = \'HS01\';'
        },
        emCanNho: [
          'Cú pháp sửa dữ liệu: `UPDATE TenBang SET cot = gia_tri_moi WHERE dieu_kien;`.',
          'Mệnh đề `WHERE` chỉ định chính xác bản ghi nào cần cập nhật.',
          'Tuyệt đối không bỏ quên mệnh đề `WHERE` khi cập nhật dữ liệu.'
        ]
      },
      {
        id: 'tab_11_21_3',
        title: '3. Thao tác xóa dữ liệu (DELETE FROM ... WHERE)',
        subtitle: 'Loại bỏ các bản ghi không còn giá trị sử dụng',
        iconName: 'Trash2',
        keyPoints: [
          'Cú pháp câu lệnh xóa dữ liệu:',
          '  `DELETE FROM <Ten_Bang>`',
          '  `WHERE <Dieu_Kien_Loc>;`',
          'Ví dụ xóa một học sinh có mã HS02:',
          '  `DELETE FROM HOC_SINH`',
          '  `WHERE MaHS = \'HS02\';`',
          'CẢNH BÁO ĐỎ: `DELETE FROM HOC_SINH;` (không có WHERE) sẽ xóa sạch sành sanh mọi dữ liệu trong bảng mà không thể hoàn tác!'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'DELETE FROM HOC_SINH\nWHERE MaHS = \'HS02\';\n\nSELECT * FROM HOC_SINH;'
        },
        emCanNho: [
          'Cú pháp xóa: `DELETE FROM TenBang WHERE dieu_kien;`.',
          '`DELETE` chỉ xóa các dòng dữ liệu, cấu trúc bảng vẫn còn nguyên vẹn.',
          'Luôn viết và kiểm tra điều kiện `WHERE` trước khi nhấn thực thi lệnh xóa.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu Lệnh CRUD và Ý Nghĩa Thao Tác',
      instruction: 'Nối câu lệnh SQL với thao tác nghiệp vụ tương ứng:',
      matchingPairs: [
        { id: 'cr1', left: 'INSERT INTO LOP VALUES (\'11A1\', \'Lớp 11A1\');', right: 'Thêm một lớp học mới vào cơ sở dữ liệu' },
        { id: 'cr2', left: 'UPDATE HOC_SINH SET DiemTB = 10.0 WHERE MaHS = \'HS01\';', right: 'Sửa điểm cho duy nhất học sinh có mã HS01' },
        { id: 'cr3', left: 'DELETE FROM HOC_SINH WHERE MaHS = \'HS09\';', right: 'Xóa hồ sơ học sinh HS09 ra khỏi bảng' },
        { id: 'cr4', left: 'SELECT * FROM HOC_SINH WHERE DiemTB >= 8.0;', right: 'Truy xuất danh sách học sinh đạt điểm giỏi' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Câu lệnh SQL nào sau đây dùng để THÊM MỚI một bản ghi vào bảng dữ liệu?',
        options: ['INSERT INTO', 'ADD ROW', 'NEW RECORD', 'PUT DATA'],
        correctIndex: 0,
        explanation: 'INSERT INTO là câu lệnh thao tác dữ liệu chuẩn để chèn hàng mới.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Cú pháp câu lệnh UPDATE dùng để chỉnh sửa dữ liệu có cấu trúc từ khóa theo thứ tự nào?',
        options: [
          'UPDATE <Bảng> SET <Cột = Giá trị mới> WHERE <Điều kiện>;',
          'UPDATE <Bảng> WHERE <Điều kiện> SET <Cột = Giá trị>;',
          'MODIFY <Bảng> VALUE <Giá trị> IF <Điều kiện>;',
          'CHANGE <Bảng> SET <Cột> WHERE <Điều kiện>;'
        ],
        correctIndex: 0,
        explanation: 'Thứ tự chuẩn là: UPDATE tên_bảng SET cột = giá_trị WHERE điều_kiện.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Nếu thực hiện câu lệnh: `DELETE FROM HOC_SINH;` (không có mệnh đề WHERE), điều gì sẽ xảy ra?',
        options: [
          'Toàn bộ tất cả các hàng dữ liệu trong bảng HOC_SINH sẽ bị xóa sạch, bảng trở nên rỗng',
          'Hệ thống tự động xóa học sinh đầu tiên',
          'MySQL báo lỗi cú pháp',
          'Bảng HOC_SINH bị xóa hẳn cấu trúc khỏi CSDL'
        ],
        correctIndex: 0,
        explanation: 'DELETE không có WHERE sẽ xóa tất cả các hàng dữ liệu (nhưng khung cấu trúc bảng vẫn còn).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Khi chèn dữ liệu kiểu Ngày tháng hoặc Chuỗi ký tự trong câu lệnh INSERT, quy tắc viết nào sau đây là BẮT BUỘC?',
        options: [
          'Phải đặt giá trị bên trong cặp dấu nháy đơn, ví dụ: \'Nguyễn Văn An\', \'2008-11-20\'',
          'Phải viết bằng chữ in hoa',
          'Phải đặt bên trong dấu ngoặc vuông [ ]',
          'Không được có dấu cách'
        ],
        correctIndex: 0,
        explanation: 'Chuỗi ký tự (string literal) và ngày tháng (date literal) trong SQL luôn bắt buộc dùng nháy đơn.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Để tăng điểm trung bình thêm 0.5 điểm cho tất cả học sinh lớp \'11A1\', câu lệnh SQL nào sau đây viết CHUẨN XÁC NHẤT?',
        options: [
          'UPDATE HOC_SINH SET DiemTB = DiemTB + 0.5 WHERE Lop = \'11A1\';',
          'UPDATE DiemTB = DiemTB + 0.5 FROM HOC_SINH WHERE Lop = \'11A1\';',
          'SET HOC_SINH DiemTB = 0.5 WHERE Lop = \'11A1\';',
          'INCREASE DiemTB BY 0.5 IN HOC_SINH;'
        ],
        correctIndex: 0,
        explanation: 'Biểu thức `DiemTB = DiemTB + 0.5` kết hợp với `WHERE Lop = \'11A1\'` cập nhật chính xác cho toàn bộ lớp 11A1.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Vận Hành Dữ Liệu Độc Giả Thư Viện',
        context: 'Cập nhật danh sách bạn đọc nhân dịp năm học mới.',
        mission: 'Thực hiện chuỗi 3 thao tác: Thêm 2 độc giả mới, Cập nhật lớp học và Xóa độc giả chuyển trường.',
        steps: [
          'Thao tác 1 (INSERT): Thêm 2 bạn: `(\'DG01\', \'Trần Văn Nam\', \'11A1\')`, `(\'DG02\', \'Lê Thu Hà\', \'11A2\')`.',
          'Thao tác 2 (UPDATE): Bạn DG01 chuyển từ lớp 11A1 sang 11A3: `UPDATE DOC_GIA SET Lop = \'11A3\' WHERE MaDG = \'DG01\';`.',
          'Thao tác 3 (DELETE): Bạn DG02 chuyển trường: `DELETE FROM DOC_GIA WHERE MaDG = \'DG02\';`.',
          'Thao tác 4 (SELECT): `SELECT * FROM DOC_GIA;` kiểm tra kết quả cuối cùng.'
        ],
        outputRequirement: 'Toàn bộ script SQL 4 bước chạy mượt mà trên HeidiSQL kèm bảng kết quả.',
        practicalTip: 'Nên chạy câu `SELECT * FROM ... WHERE ...` trước để nhìn thấy bản ghi cần sửa trước khi thực thi lệnh UPDATE/DELETE.'
      },
      mindmap: {
        id: 'mm_11_21',
        label: 'BỘ LỆNH CRUD',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_21_1',
            label: 'INSERT INTO (Thêm)',
            children: [
              { id: 'mm_11_21_1_1', label: 'VALUES (giá_trị_1, giá_trị_2)' },
              { id: 'mm_11_21_1_2', label: 'Chuỗi & Ngày dùng nháy đơn' },
              { id: 'mm_11_21_1_3', label: 'Thêm nhiều dòng bằng dấu phẩy' }
            ]
          },
          {
            id: 'mm_11_21_2',
            label: 'UPDATE & DELETE',
            children: [
              { id: 'mm_11_21_2_1', label: 'UPDATE SET cot = gia_tri' },
              { id: 'mm_11_21_2_2', label: 'DELETE FROM TenBang' },
              { id: 'mm_11_21_2_3', label: 'BẮT BUỘC PHẢI CÓ WHERE' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Thao Tác Dữ Liệu 11',
      badgeIcon: 'Edit3',
      roleTitle: 'Chuyên Viên Thao Tác & Quản Lý Dữ Liệu SQL',
      congratsMessage: 'Tuyệt vời! Bạn đã thành thạo trọn bộ 4 thao tác CRUD kinh điển và hiểu sâu sắc nguyên tắc an toàn dữ liệu.',
      skillsUnlocked: ['Lệnh chèn dữ liệu INSERT INTO', 'Cập nhật dữ liệu UPDATE SET', 'Xóa an toàn DELETE FROM với WHERE']
    }
  }
];
