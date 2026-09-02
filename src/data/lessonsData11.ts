import { Lesson } from '../types/lesson';

export const LESSONS_DATA_11: Lesson[] = [
  // Bài 1: Hệ điều hành
  {
    id: 1,
    code: 'TIN11_B01',
    title: 'Hệ điều hành',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Hệ điều hành & Phần cứng',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bộ não điều phối toàn bộ tài nguyên phần cứng và phần mềm máy tính',
      description: 'Khám phá lịch sử phát triển, vai trò trung gian và các chức năng then chốt của Hệ điều hành (Windows, Linux, macOS, Android, iOS).',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Quản lý tài nguyên phần cứng', 'Giao diện người dùng GUI', 'Hệ điều hành máy tính vs di động']
    },
    objectives: [
      {
        id: 'obj_11_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu vai trò của Hệ điều hành',
        description: 'Trình bày được khái niệm và các chức năng cơ bản của hệ điều hành trong quản lý thiết bị, tệp tin và tiến trình.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_11_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân loại các hệ điều hành',
        description: 'Phân biệt được hệ điều hành cho máy tính cá nhân (Windows, Linux, macOS) và thiết bị di động (Android, iOS).',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Sử dụng hệ điều hành có bản quyền',
        description: 'Nhận thức được tầm quan trọng của việc cập nhật bản vá bảo mật và tôn trọng bản quyền hệ điều hành.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Chiếc máy tính không có Hệ điều hành',
      scenario: 'Một chiếc máy tính cấu hình khủng gồm chip Core i9 và card đồ họa RTX 4090 vừa được lắp ráp nhưng chưa cài bất kỳ phần mềm nào. Khi bấm nút nguồn, máy tính có chạy được các phần mềm học tập không?',
      pollQuestion: 'Hệ điều hành đóng vai trò gì giúp người dùng có thể sử dụng được phần cứng máy tính?',
      pollOptions: [
        { id: 'p11_1', text: 'Là môi trường trung gian kết nối và điều khiển tài nguyên phần cứng cho các ứng dụng hoạt động', votesPercent: 88, isPopular: true, insight: 'Chính xác! Không có hệ điều hành, người dùng không thể giao tiếp và điều khiển phần cứng máy tính.' },
        { id: 'p11_2', text: 'Chỉ có tác dụng làm hình nền máy tính đẹp hơn', votesPercent: 4, insight: 'Hình nền chỉ là giao diện trực quan nhỏ, chức năng cốt lõi là quản lý tài nguyên.' },
        { id: 'p11_3', text: 'Chỉ để kết nối Wi-Fi', votesPercent: 8, insight: 'Kết nối mạng chỉ là một trong rất nhiều dịch vụ do hệ điều hành quản lý.' }
      ],
      reflection: 'Hệ điều hành là phần mềm quan trọng nhất trên mọi thiết bị số, cung cấp nền tảng để mọi ứng dụng khác có thể thực thi.'
    },
    knowledge: [
      {
        id: 'tab_11_1_1',
        title: '1. Khái niệm & Chức năng của Hệ điều hành',
        subtitle: 'Cầu nối giữa phần cứng, phần mềm và người dùng',
        iconName: 'Server',
        keyPoints: [
          'Hệ điều hành (Operating System - OS) là tập hợp các chương trình quản lý, điều phối tài nguyên phần cứng và cung cấp môi trường cho các phần mềm ứng dụng hoạt động.',
          'Các chức năng cơ bản: Quản lý bộ nhớ (RAM), quản lý bộ vi xử lý (CPU), quản lý thiết bị ngoại vi (I/O), quản lý hệ thống tệp và cung cấp giao diện người dùng (GUI/CLI).',
          'Sự phát triển: Từ giao diện dòng lệnh (MS-DOS, Unix CLI) đến giao diện đồ họa trực quan (Windows GUI, macOS) và giao diện cảm ứng đa điểm (iOS, Android).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng & Ứng dụng', desc: 'Trình duyệt, Office, Game, Zalo' },
            { label: 'Hệ điều hành (OS)', desc: 'Windows, Linux, macOS, Android' },
            { label: 'Phần cứng (Hardware)', desc: 'CPU, RAM, Ổ cứng SSD, Màn hình, Chuột' }
          ]
        },
        emCanNho: [
          'Hệ điều hành là phần mềm hệ thống điều khiển và quản lý toàn bộ tài nguyên máy tính.',
          'Hệ điều hành cung cấp giao tiếp trực quan giữa người dùng với thiết bị.',
          'Hệ điều hành máy tính tiêu biểu: Windows, macOS, Linux; Di động: Android, iOS.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Hệ điều hành Máy tính & Thiết bị di động',
      instruction: 'Hãy kéo các hệ điều hành vào đúng nhóm thiết bị tương ứng:',
      categories: [
        { id: 'pc_os', title: 'Hệ điều hành cho Máy tính (PC / Laptop)', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
        { id: 'mobile_os', title: 'Hệ điều hành cho Thiết bị di động', color: 'border-purple-500 bg-purple-950/40 text-purple-300' }
      ],
      dragItems: [
        { id: 'os_1', text: 'Microsoft Windows 11', category: 'pc_os', explanation: 'Hệ điều hành phổ biến nhất trên máy tính cá nhân.' },
        { id: 'os_2', text: 'Google Android 14', category: 'mobile_os', explanation: 'Hệ điều hành mã nguồn mở phổ biến cho smartphone/tablet.' },
        { id: 'os_3', text: 'Apple macOS Sonoma', category: 'pc_os', explanation: 'Hệ điều hành độc quyền cho máy tính Mac của Apple.' },
        { id: 'os_4', text: 'Apple iOS 17', category: 'mobile_os', explanation: 'Hệ điều hành cho iPhone và iPad.' },
        { id: 'os_5', text: 'Ubuntu Linux Desktop', category: 'pc_os', explanation: 'Hệ điều hành mã nguồn mở mạnh mẽ và an toàn cho PC/Server.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Chức năng nào sau đây KHÔNG PHẢI là chức năng chính của hệ điều hành?',
        options: [
          'Tự động soạn thảo bài văn nghị luận xã hội thay học sinh',
          'Quản lý và cấp phát bộ nhớ trong (RAM) cho các tiến trình',
          'Tổ chức lưu trữ và quản lý tệp trên đĩa',
          'Cung cấp giao diện tương tác giữa người dùng và máy tính'
        ],
        correctIndex: 0,
        explanation: 'Soạn thảo văn bản là nhiệm vụ của phần mềm ứng dụng (như Word) hoặc trí tuệ con người, không phải chức năng của hệ điều hành.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Giao diện đồ họa người dùng viết tắt là gì trong thuật ngữ tin học?',
        options: ['GUI (Graphical User Interface)', 'CLI (Command Line Interface)', 'API (Application Interface)', 'CPU (Central Processing)'],
        correctIndex: 0,
        explanation: 'GUI (Graphical User Interface) là giao diện trực quan sử dụng cửa sổ, biểu tượng icon, chuột và menu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hệ điều hành Android trên các dòng điện thoại thông minh hiện nay được phát triển dựa trên nhân (kernel) của hệ điều hành nào?',
        options: ['Linux', 'Windows XP', 'MS-DOS', 'macOS'],
        correctIndex: 0,
        explanation: 'Android được Google phát triển dựa trên nền tảng nhân mã nguồn mở Linux.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Thao tác nào sau đây giúp hệ điều hành duy trì khả năng bảo mật và vận hành ổn định nhất?',
        options: [
          'Thường xuyên cập nhật các bản vá lỗi bảo mật (Windows Update / System Update)',
          'Tắt hoàn toàn tường lửa và phần mềm diệt virus',
          'Cài đặt các phần mềm bẻ khóa không rõ nguồn gốc',
          'Rút phích cắm máy tính khi đang làm việc'
        ],
        correctIndex: 0,
        explanation: 'Cập nhật hệ điều hành thường xuyên giúp vá các lỗ hổng bảo mật mà tin tặc có thể khai thác.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Chương trình quản lý tiến trình Task Manager trên hệ điều hành Windows dùng để làm gì?',
        options: [
          'Theo dõi hiệu suất phần cứng (CPU, RAM, Disk) và tắt các ứng dụng bị treo (Not Responding)',
          'Đổi màu sắc của chuột quang',
          'In ấn tài liệu tự động',
          'Dịch văn bản sang tiếng Anh'
        ],
        correctIndex: 0,
        explanation: 'Task Manager hiển thị chi tiết mức sử dụng tài nguyên của từng tiến trình và cho phép dừng các chương trình bị lỗi.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Tối ưu hóa và Dọn dẹp Hiệu suất Hệ điều hành Máy tính',
        context: 'Sau một thời gian sử dụng, máy tính của phòng thực hành hoặc máy tính cá nhân bị chậm do nhiều tệp rác và chương trình khởi động cùng Windows.',
        mission: 'Sử dụng các công cụ có sẵn trong hệ điều hành để kiểm tra tài nguyên và dọn dẹp hệ thống an toàn.',
        steps: [
          'Bước 1: Mở Task Manager (Ctrl + Shift + Esc) và kiểm tra thẻ Performance để xem % chiếm dụng CPU, RAM.',
          'Bước 2: Vào thẻ Startup Apps và tắt các ứng dụng không cần thiết khởi động cùng máy.',
          'Bước 3: Sử dụng công cụ Disk Cleanup để xóa các tệp tạm (Temporary files).'
        ],
        outputRequirement: 'Ghi lại % RAM trước và sau khi tối ưu hóa hệ điều hành.',
        practicalTip: 'Không nên tắt các tiến trình hệ thống mang tên "Windows Explorer" hay "System" trong Task Manager.'
      },
      mindmap: {
        id: 'mm_11_1',
        label: 'HỆ ĐIỀU HÀNH (OPERATING SYSTEM)',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_1_1',
            label: 'Vai trò & Bản chất',
            children: [
              { id: 'mm_11_1_1_1', label: 'Cầu nối phần cứng - phần mềm' },
              { id: 'mm_11_1_1_2', label: 'Quản lý tài nguyên hệ thống' }
            ]
          },
          {
            id: 'mm_11_1_2',
            label: 'Các chức năng cốt lõi',
            children: [
              { id: 'mm_11_1_2_1', label: 'Quản lý CPU & Bộ nhớ RAM' },
              { id: 'mm_11_1_2_2', label: 'Quản lý tập tin & Thư mục' },
              { id: 'mm_11_1_2_3', label: 'Giao diện người dùng (GUI/CLI)' }
            ]
          },
          {
            id: 'mm_11_1_3',
            label: 'Phân loại phổ biến',
            children: [
              { id: 'mm_11_1_3_1', label: 'Máy tính: Windows, Linux, macOS' },
              { id: 'mm_11_1_3_2', label: 'Di động: Android, iOS' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Viên Hệ Điều Hành 11',
      badgeIcon: 'Cpu',
      roleTitle: 'Quản Trị Viên Hệ Điều Hành Cơ Bản',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ kiến thức về Hệ điều hành theo chuẩn SGK Tin học 11 GDPT 2018.',
      skillsUnlocked: ['Hiểu kiến trúc OS', 'Quản lý tài nguyên qua Task Manager', 'Tối ưu hóa hệ thống']
    }
  },

  // Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc (Trọng tâm CSDL 11)
  {
    id: 14,
    code: 'TIN11_B14',
    title: 'SQL – Ngôn ngữ truy vấn có cấu trúc',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Hệ CSDL & SQL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Làm chủ chiếc chìa khóa vạn năng khai thác dữ liệu số: Ngôn ngữ SQL',
      description: 'Làm quen với các câu lệnh truy vấn dữ liệu chuẩn mực (SELECT, FROM, WHERE, ORDER BY) để trích xuất thông tin nhanh chóng từ hàng triệu bản ghi.',
      accentColor: 'from-indigo-600 to-cyan-500',
      keyHighlights: ['Mệnh đề SELECT và FROM', 'Lọc điều kiện với WHERE', 'Sắp xếp kết quả với ORDER BY']
    },
    objectives: [
      {
        id: 'obj_11_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp câu lệnh truy vấn SQL',
        description: 'Trình bày được vai trò của SQL và cú pháp câu lệnh truy vấn cơ bản: SELECT <danh sách cột> FROM <bảng> WHERE <điều kiện>.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết câu lệnh SQL truy xuất dữ liệu',
        description: 'Tự viết được các câu truy vấn để tìm kiếm học sinh theo lớp, tính điểm trung bình hoặc lọc danh sách sản phẩm.',
        iconName: 'Code2'
      },
      {
        id: 'obj_11_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo mật và toàn vẹn dữ liệu',
        description: 'Ý thức cẩn trọng khi thực thi các câu lệnh thay đổi dữ liệu và tuân thủ an toàn thông tin.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Tìm kiếm hồ sơ học sinh trong 3000 em',
      scenario: 'Thầy Tổng phụ trách cần tìm danh sách tất cả học sinh Khối 11 đạt điểm tổng kết môn Tin học từ 9.0 trở lên trong cơ sở dữ liệu toàn trường. Nếu tìm thủ công bằng mắt sẽ mất nhiều ngày.',
      pollQuestion: 'Ngôn ngữ tiêu chuẩn nào được toàn thế giới sử dụng để máy tính trích xuất dữ liệu trong chớp mắt?',
      pollOptions: [
        { id: 'p11_14_1', text: 'SQL (Structured Query Language)', votesPercent: 91, isPopular: true, insight: 'Chính xác! SQL là ngôn ngữ tiêu chuẩn quốc tế để truy vấn và thao tác trên cơ sở dữ liệu quan hệ.' },
        { id: 'p11_14_2', text: 'HTML', votesPercent: 5, insight: 'HTML chỉ dùng để định dạng hiển thị trang web.' },
        { id: 'p11_14_3', text: 'Photoshop', votesPercent: 4, insight: 'Photoshop dùng để xử lý hình ảnh raster.' }
      ],
      reflection: 'SQL là kỹ năng công nghệ được săn đón hàng đầu trong mọi lĩnh vực phân tích dữ liệu, trí tuệ nhân tạo và lập trình phần mềm.'
    },
    knowledge: [
      {
        id: 'tab_11_14_1',
        title: '1. Cú pháp cơ bản của câu lệnh SELECT',
        subtitle: 'Trích xuất dữ liệu có điều kiện',
        iconName: 'Code',
        keyPoints: [
          'Cú pháp chuẩn: `SELECT <Danh sách cột> FROM <Tên bảng> WHERE <Điều kiện lọc> ORDER BY <Cột sắp xếp> [ASC|DESC];`',
          '`SELECT *`: Chọn tất cả các cột dữ liệu trong bảng.',
          'Mệnh đề `WHERE`: Sử dụng các phép so sánh (=, >, <, >=, <=, <>) và toán tử logic (AND, OR, NOT) để lọc dữ liệu chính xác.',
          'Mệnh đề `ORDER BY`: Sắp xếp kết quả tăng dần (ASC - mặc định) hoặc giảm dần (DESC).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: 'SELECT HoTen, Lop, DiemTin FROM HOC_SINH WHERE DiemTin >= 8.5 ORDER BY DiemTin DESC;',
          sampleTable: {
            columns: ['MaHS', 'HoTen', 'Lop', 'DiemTin'],
            rows: [
              ['HS01', 'Nguyễn Văn An', '11A1', '9.5'],
              ['HS02', 'Trần Thị Bình', '11A2', '8.8'],
              ['HS03', 'Lê Hoàng Cúc', '11A1', '7.5'],
              ['HS04', 'Phạm Minh Đức', '11A3', '9.0']
            ]
          }
        },
        emCanNho: [
          'SQL là ngôn ngữ truy vấn có cấu trúc dùng để giao tiếp với hệ quản trị CSDL quan hệ.',
          'Cấu trúc cơ bản nhất: `SELECT ... FROM ... WHERE ...`',
          'Dấu `*` đại diện cho việc lấy tất cả các cột dữ liệu của bảng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp từ khóa SQL và Ý nghĩa',
      instruction: 'Nối từ khóa câu lệnh SQL với chức năng tương ứng:',
      matchingPairs: [
        { id: 'sql_1', left: 'SELECT HoTen, Lop', right: 'Chỉ định các cột dữ liệu cần lấy ra' },
        { id: 'sql_2', left: 'FROM HOC_SINH', right: 'Chỉ định bảng nguồn chứa dữ liệu' },
        { id: 'sql_3', left: 'WHERE DiemTin >= 8.0', right: 'Điều kiện lọc chỉ lấy học sinh đạt từ 8 điểm' },
        { id: 'sql_4', left: 'ORDER BY DiemTin DESC', right: 'Sắp xếp điểm số giảm dần từ cao xuống thấp' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Từ viết tắt SQL là viết tắt của cụm từ tiếng Anh nào?',
        options: ['Structured Query Language', 'Simple Question Language', 'Standard Quality List', 'System Quick Link'],
        correctIndex: 0,
        explanation: 'SQL là viết tắt của Structured Query Language (Ngôn ngữ truy vấn có cấu trúc).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để lấy TẤT CẢ các cột và tất cả các dòng từ bảng "NHAN_VIEN", câu lệnh SQL nào đúng?',
        options: ['SELECT * FROM NHAN_VIEN;', 'GET ALL FROM NHAN_VIEN;', 'FIND TABLE NHAN_VIEN;', 'FETCH ALL IN NHAN_VIEN;'],
        correctIndex: 0,
        explanation: 'Ký tự sao (*) trong mệnh đề SELECT mang ý nghĩa lấy toàn bộ các trường (cột) dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Muốn sắp xếp danh sách kết quả theo thứ tự từ CAO XUỐNG THẤP (giảm dần), ta dùng từ khóa nào sau ORDER BY?',
        options: ['DESC', 'ASC', 'DOWN', 'TOP'],
        correctIndex: 0,
        explanation: 'DESC (Descending) sắp xếp giảm dần, còn ASC (Ascending) sắp xếp tăng dần.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Trong câu lệnh SQL: SELECT * FROM SAN_PHAM WHERE GiaTien < 50000; Mệnh đề WHERE có vai trò gì?',
        options: [
          'Lọc ra những sản phẩm có giá tiền nhỏ hơn 50,000 đồng',
          'Xóa toàn bộ sản phẩm khỏi kho',
          'Tăng giá sản phẩm lên 50,000 đồng',
          'Đổi tên sản phẩm'
        ],
        correctIndex: 0,
        explanation: 'Mệnh đề WHERE áp dụng điều kiện lọc logic, chỉ các bản ghi thỏa mãn điều kiện mới được trả về.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Muốn tìm học sinh thuộc lớp "11A1" VÀ có điểm môn Tin lớn hơn hoặc bằng 8.0, toán tử logic nào được sử dụng?',
        options: ['AND', 'OR', 'NOT', 'XOR'],
        correctIndex: 0,
        explanation: 'Toán tử AND yêu cầu cả hai điều kiện cùng phải đúng (Lop = "11A1" AND DiemTin >= 8.0).',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Viết Câu lệnh SQL Quản lý Thư viện Trường học',
        context: 'Cơ sở dữ liệu thư viện có bảng `SACH` gồm các trường: `MaSach`, `TenSach`, `TacGia`, `NamXuatBan`, `SoLuong`.',
        mission: 'Soạn thảo 3 câu truy vấn SQL đáp ứng các yêu cầu tìm kiếm của cán bộ thư viện.',
        steps: [
          'Câu 1: Lấy danh sách toàn bộ sách xuất bản từ năm 2020 trở lại đây.',
          'Câu 2: Tìm những cuốn sách của tác giả "Nguyễn Nhật Ánh".',
          'Câu 3: Sắp xếp toàn bộ sách theo số lượng tồn kho giảm dần.'
        ],
        outputRequirement: 'Viết đúng 3 câu lệnh SQL có chấm phẩy kết thúc chuẩn cú pháp.',
        practicalTip: 'Chuỗi ký tự trong SQL luôn được đặt trong cặp dấu nháy đơn hoặc nháy kép (VD: \'Nguyễn Nhật Ánh\').'
      },
      mindmap: {
        id: 'mm_11_14',
        label: 'NGÔN NGỮ TRUY VẤN SQL',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_14_1',
            label: 'Cấu trúc câu lệnh',
            children: [
              { id: 'mm_11_14_1_1', label: 'SELECT <cột>' },
              { id: 'mm_11_14_1_2', label: 'FROM <bảng>' }
            ]
          },
          {
            id: 'mm_11_14_2',
            label: 'Mệnh đề lọc WHERE',
            children: [
              { id: 'mm_11_14_2_1', label: 'Toán tử so sánh (=, >, <)' },
              { id: 'mm_11_14_2_2', label: 'Toán tử logic (AND, OR, NOT)' }
            ]
          },
          {
            id: 'mm_11_14_3',
            label: 'Sắp xếp ORDER BY',
            children: [
              { id: 'mm_11_14_3_1', label: 'ASC (Tăng dần)' },
              { id: 'mm_11_14_3_2', label: 'DESC (Giảm dần)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Truy Vấn SQL 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Khai Thác Cơ Sở Dữ Liệu',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ câu lệnh truy vấn SQL để khai thác dữ liệu lớn hiệu quả.',
      skillsUnlocked: ['Viết câu lệnh SELECT', 'Lọc điều kiện với WHERE', 'Sắp xếp kết quả với ORDER BY']
    }
  }
];

// Complete 31 lessons of Grade 11 Applied Informatics from taphuan.nxbgd.vn
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
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Bám sát chuẩn SGK GDPT 2018 taphuan.nxbgd.vn', 'Trải nghiệm học tập tương tác', 'Thực hành ứng dụng thực tế']
    },
    objectives: [
      {
        id: `obj_11_${id}_1`,
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: `Nắm vững lý thuyết ${meta.title}`,
        description: `Hiểu rõ các khái niệm, quy trình và kỹ thuật chuẩn được trình bày trong ${meta.title}.`,
        iconName: 'BookOpen'
      },
      {
        id: `obj_11_${id}_2`,
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng thực hành ứng dụng',
        description: 'Vận dụng kiến thức bài học để giải quyết bài toán quản trị CSDL, xử lý hình ảnh hoặc biên tập video.',
        iconName: 'Wrench'
      },
      {
        id: `obj_11_${id}_3`,
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong chuyên nghiệp & An toàn số',
        description: 'Hình thành thói quen sao lưu dữ liệu, bảo mật thông tin và tôn trọng quyền tác giả trong môi trường số.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: `Tình huống mở đầu: ${meta.title}`,
      scenario: `Trong thực tiễn công việc văn phòng và sản xuất số, chúng ta thường xuyên gặp các bài toán liên quan đến ${meta.title} cần được xử lý nhanh chóng và khoa học.`,
      pollQuestion: `Theo bạn, yếu tố quan trọng nhất giúp làm chủ ${meta.title} là gì?`,
      pollOptions: [
        { id: `p11_${id}_1`, text: 'Hiểu bản chất lý thuyết kết hợp thao tác thực hành thường xuyên', votesPercent: 88, isPopular: true, insight: 'Chính xác! Thực hành liên tục trên phần mềm là chìa khóa làm chủ Tin học ứng dụng.' },
        { id: `p11_${id}_2`, text: 'Chỉ học thuộc lòng định nghĩa trong sách', votesPercent: 5, insight: 'Học vẹt lý thuyết không thể phát triển kỹ năng thao tác máy tính.' },
        { id: `p11_${id}_3`, text: 'Xem qua một lần rồi không luyện tập', votesPercent: 7, insight: 'Không luyện tập sẽ nhanh chóng quên các bước kỹ thuật.' }
      ],
      reflection: `Kiên trì rèn luyện kỹ năng với ${meta.title} sẽ giúp bạn tự tin ứng dụng vào học tập và công việc sau này.`
    },
    knowledge: [
      {
        id: `tab_11_${id}_1`,
        title: `1. Nội dung trọng tâm ${meta.title}`,
        subtitle: 'Kiến thức chuẩn SGK Tin học 11 - Định hướng Tin học ứng dụng',
        iconName: 'Layers',
        keyPoints: [
          `Nắm vững các thuật ngữ và khái niệm then chốt trong ${meta.title}.`,
          'Thao tác đúng quy trình kỹ thuật chuẩn xác theo từng bước hướng dẫn.',
          'Kết hợp linh hoạt các công cụ để hoàn thành sản phẩm số chất lượng.'
        ],
        visualType: id >= 10 && id <= 24 ? 'interactive-sql' : 'infographic',
        visualData: id >= 10 && id <= 24 ? {
          defaultSql: `-- Truy vấn mẫu cho ${meta.title}\nSELECT * FROM DU_LIEU_11 WHERE TrangThai = 1;`
        } : {
          nodes: [
            { label: 'Bước 1: Chuẩn bị', desc: 'Xác định mục tiêu và dữ liệu nguồn' },
            { label: 'Bước 2: Xử lý kỹ thuật', desc: 'Thao tác công cụ theo chuẩn SGK' },
            { label: 'Bước 3: Xuất bản & Lưu trữ', desc: 'Lưu tệp an toàn và kiểm tra chất lượng' }
          ]
        },
        emCanNho: [
          `Nắm vững nguyên lý và các bước thao tác cốt lõi của ${meta.title}.`,
          'Luôn sao lưu dữ liệu và kiểm tra kết quả cẩn thận.',
          'Tuân thủ các quy tắc an toàn và bản quyền số.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: `Thử thách ghép cặp: ${meta.title}`,
      instruction: 'Nối đúng khái niệm với chức năng hoặc cú pháp tương ứng:',
      matchingPairs: [
        { id: `pair_11_${id}_1`, left: 'Khái niệm chuẩn SGK 11', right: 'Định nghĩa chính xác theo chuẩn taphuan.nxbgd.vn' },
        { id: `pair_11_${id}_2`, left: 'Quy trình kỹ thuật', right: 'Các bước thao tác khoa học và chuẩn xác' },
        { id: `pair_11_${id}_3`, left: 'Ứng dụng thực tế', right: 'Giải quyết bài toán CSDL và đồ hoạ truyền thông' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: `Mục tiêu cơ bản nhất khi học bài "${meta.title}" là gì?`,
        options: [
          `Nắm vững kiến thức và kỹ năng thực hành chuẩn của ${meta.title}`,
          'Chỉ để xem phim giải trí',
          'Tắt máy tính đi ngủ',
          'Không có ý nghĩa gì'
        ],
        correctIndex: 0,
        explanation: 'Bài học giúp học sinh trang bị đầy đủ năng lực lý thuyết và thực hành theo chương trình GDPT 2018.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: `Trong quá trình thực hành "${meta.title}", thói quen nào sau đây giúp phòng tránh mất mát dữ liệu?`,
        options: [
          'Thường xuyên lưu tệp (Ctrl + S) và sao lưu dữ liệu định kỳ',
          'Xóa hết các tệp quan trọng trong thư mục',
          'Rút nguồn điện máy tính đột ngột',
          'Không bao giờ đặt mật khẩu'
        ],
        correctIndex: 0,
        explanation: 'Lưu tệp liên tục và sao lưu định kỳ là nguyên tắc an toàn dữ liệu hàng đầu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: `Bài học "${meta.title}" thuộc chủ đề nào trong SGK Tin học 11?`,
        options: [meta.themeName, 'Địa lý tự nhiên', 'Văn học dân gian', 'Vật lý hạt nhân'],
        correctIndex: 0,
        explanation: `Nội dung bài học nằm trong ${meta.themeName} theo chương trình GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: `Kỹ năng thu được từ "${meta.title}" giúp học sinh phát triển năng lực gì?`,
        options: [
          'Năng lực ứng dụng tin học, khai thác cơ sở dữ liệu và sáng tạo sản phẩm số',
          'Năng lực chơi game thâu đêm',
          'Làm hỏng bàn phím máy tính',
          'Quên các lệnh đã học'
        ],
        correctIndex: 0,
        explanation: 'Kỹ năng tin học ứng dụng giúp học sinh tự tin làm chủ công cụ số trong thời đại chuyển đổi số.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: `Để kiểm tra lại kết quả thực hành sau khi hoàn thành "${meta.title}", bạn nên làm gì?`,
        options: [
          'Đối chiếu với các tiêu chí chuẩn trong SGK và làm bài tập đánh giá',
          'Xóa toàn bộ sản phẩm vừa tạo',
          'Không bao giờ mở lại máy tính',
          'Tắt nguồn ngay lập tức'
        ],
        correctIndex: 0,
        explanation: 'Đối chiếu tiêu chuẩn và làm bài tự đánh giá giúp củng cố kiến thức vững chắc.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: `Dự án Vận dụng Thực tiễn: ${meta.title}`,
        context: 'Ứng dụng kỹ năng bài học vào các tình huống thực tế của học sinh lớp 11.',
        mission: `Thực hiện dự án nhỏ áp dụng kiến thức của ${meta.title} để tạo ra sản phẩm hoàn chỉnh.`,
        steps: [
          'Bước 1: Lên ý tưởng và xác định yêu cầu sản phẩm.',
          'Bước 2: Mở phần mềm và thao tác từng bước theo quy trình.',
          'Bước 3: Đánh giá chất lượng và chia sẻ sản phẩm với bạn bè, thầy cô.'
        ],
        outputRequirement: 'Một sản phẩm số hoàn chỉnh đạt chuẩn kỹ thuật theo yêu cầu.',
        practicalTip: 'Đừng ngại thử nghiệm các tính năng mới để nâng cao tính sáng tạo của sản phẩm!'
      },
      mindmap: {
        id: `mm_11_${id}`,
        label: meta.title.toUpperCase(),
        color: '#7c3aed',
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
