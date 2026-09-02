import { Lesson } from '../../types/lesson';
import { THEME6_LESSONS_PART2_11 } from './theme6_db_practice_part2';
import { THEME6_LESSONS_PART3_11 } from './theme6_db_practice_part3';

const THEME6_BASE_LESSONS_11: Lesson[] = [
  // Bài 17: Quản trị cơ sở dữ liệu trên máy tính
  {
    id: 17,
    code: 'TIN11_B17',
    title: 'Quản trị cơ sở dữ liệu trên máy tính',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Quản trị CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bước vào phòng thí nghiệm CSDL: Làm quen với phần mềm quản trị HeidiSQL / MySQL',
      description: 'Làm quen với giao diện công cụ quản trị CSDL trực quan, tạo kết nối máy chủ cục bộ (localhost), quản lý các phiên làm việc và khám phá cấu trúc cây dữ liệu.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Giao diện HeidiSQL / phpMyAdmin', 'Kết nối máy chủ localhost', 'Cấu trúc cây CSDL']
    },
    objectives: [
      {
        id: 'obj_11_17_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu vai trò của công cụ quản trị CSDL',
        description: 'Nắm được các khu vực làm việc chính trong phần mềm quản trị: cây điều hướng CSDL, vùng soạn thảo truy vấn SQL và vùng hiển thị kết quả.',
        iconName: 'Server'
      },
      {
        id: 'obj_11_17_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết lập kết nối máy chủ',
        description: 'Thao tác tạo mới một kết nối (Session) tới máy chủ MySQL với tên người dùng (root), mật khẩu và cổng (port 3306).',
        iconName: 'Link'
      },
      {
        id: 'obj_11_17_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn thận khi thao tác máy chủ',
        description: 'Ý thức không tùy tiện xóa các CSDL mặc định của hệ thống (như information_schema, mysql).',
        iconName: 'ShieldAlert'
      }
    ],
    warmup: {
      title: 'Tình huống: Làm sao để ra lệnh cho máy chủ CSDL?',
      scenario: 'Máy chủ MySQL chạy ngầm trong hệ thống không có giao diện đồ họa. Để con người có thể nhìn thấy các bảng dữ liệu, tạo bảng và gõ câu lệnh dễ dàng, ta cần dùng công cụ nào?',
      pollQuestion: 'Phần mềm quản trị CSDL giao diện đồ họa (GUI Client) nào được sử dụng phổ biến trong thực hành SGK Tin 11?',
      pollOptions: [
        { id: 'p11_17_1', text: 'HeidiSQL hoặc phpMyAdmin / MySQL Workbench', votesPercent: 92, isPopular: true, insight: 'Chính xác! HeidiSQL là công cụ nguồn mở nhỏ gọn, giao diện trực quan rất dễ sử dụng cho học sinh.' },
        { id: 'p11_17_2', text: 'Ứng dụng nghe nhạc Zing MP3', votesPercent: 3, insight: 'Zing MP3 dùng để phát nhạc giải trí, không quản trị CSDL.' },
        { id: 'p11_17_3', text: 'Phần mềm vẽ tranh Paint', votesPercent: 5, insight: 'Paint chỉ để vẽ hình ảnh đơn giản.' }
      ],
      reflection: 'Sử dụng thành thạo phần mềm quản trị CSDL trực quan giúp công việc thiết kế và lập trình trở nên nhanh chóng, thú vị.'
    },
    knowledge: [
      {
        id: 'tab_11_17_1',
        title: '1. Giao Diện & Kết Nối Máy Chủ trong HeidiSQL',
        subtitle: 'Kết nối máy chủ cơ sở dữ liệu cục bộ',
        iconName: 'Layers',
        keyPoints: [
          'Phiên kết nối (Session Manager): Cấu hình địa chỉ máy chủ (Host: 127.0.0.1 hoặc localhost), tên tài khoản (User: root), mật khẩu (Password) và Cổng kết nối (Port: 3306).',
          'Vùng cây điều hướng (bên trái): Hiển thị danh sách tất cả các Cơ sở dữ liệu và các bảng bên trong.',
          'Vùng soạn thảo truy vấn SQL (bên phải): Nơi gõ các câu lệnh SQL và bấm nút Run (F9) để thực thi.',
          'Vùng kết quả và thông báo lỗi: Hiển thị bảng dữ liệu trả về hoặc thông báo chi tiết lỗi cú pháp nếu có.'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- Xem danh sách các CSDL đang có trên máy chủ\nSHOW DATABASES;\n-- Chọn cơ sở dữ liệu để làm việc\nUSE truong_hoc;'
        },
        emCanNho: [
          'Địa chỉ máy chủ cục bộ mặc định: `127.0.0.1` hoặc `localhost` (Port 3306).',
          'Tài khoản quản trị cao nhất mặc định của MySQL là `root`.',
          'Cửa sổ quản trị gồm 3 vùng chính: Cây CSDL, Tab soạn thảo SQL và Bảng kết quả.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thông số kết nối MySQL và Ý nghĩa',
      instruction: 'Nối các thông số trong cửa sổ kết nối với ý nghĩa tương ứng:',
      matchingPairs: [
        { id: 's1', left: 'Host / IP: 127.0.0.1', right: 'Địa chỉ máy chủ cục bộ chính là chiếc máy tính bạn đang ngồi (localhost)' },
        { id: 's2', left: 'User: root', right: 'Tên tài khoản quản trị viên cao nhất có toàn quyền trên hệ thống' },
        { id: 's3', left: 'Port: 3306', right: 'Cổng giao tiếp mặc định của hệ quản trị cơ sở dữ liệu MySQL' },
        { id: 's4', left: 'Phím F9 (hoặc nút Execute)', right: 'Phím tắt thực thi câu lệnh SQL đang soạn thảo' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Cổng kết nối (Port) mạng mặc định của hệ quản trị cơ sở dữ liệu MySQL là cổng số bao nhiêu?',
        options: ['3306', '80', '443', '21'],
        correctIndex: 0,
        explanation: 'Port 3306 là cổng giao tiếp chuẩn của MySQL và MariaDB.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Địa chỉ IP "127.0.0.1" trong thuật ngữ mạng và máy tính có ý nghĩa là gì?',
        options: [
          'Địa chỉ Loopback đại diện cho chính máy tính cục bộ của bạn (localhost)',
          'Địa chỉ của trang tìm kiếm Google',
          'Địa chỉ của trường học',
          'Địa chỉ vệ tinh ngoài không gian'
        ],
        correctIndex: 0,
        explanation: '127.0.0.1 (localhost) trỏ về chính cỗ máy tính đang chạy phần mềm.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Câu lệnh SQL nào sau đây dùng để hiển thị toàn bộ các cơ sở dữ liệu có trên máy chủ?',
        options: ['SHOW DATABASES;', 'LIST ALL DB;', 'DISPLAY DATA;', 'GET SYSTEM;'],
        correctIndex: 0,
        explanation: 'SHOW DATABASES; là lệnh tiêu chuẩn trong MySQL để liệt kê các CSDL.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Khi sử dụng phần mềm quản trị CSDL, bạn KHÔNG ĐƯỢC phép xóa CSDL nào sau đây để tránh làm hỏng máy chủ?',
        options: ['mysql và information_schema', 'CSDL bai_tap_tin_11 do bạn vừa tạo', 'CSDL test_demo', 'CSDL quan_ly_thu_vien'],
        correctIndex: 0,
        explanation: 'mysql và information_schema là các CSDL hệ thống chứa cấu hình và tài khoản người dùng của máy chủ.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Phím tắt thông dụng để thực thi câu lệnh SQL trong phần mềm HeidiSQL là phím nào?',
        options: ['Phím F9', 'Phím F1', 'Phím Esc', 'Phím Space'],
        correctIndex: 0,
        explanation: 'Phím F9 trong HeidiSQL dùng để chạy toàn bộ hoặc đoạn mã SQL đang được bôi đen.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Khởi tạo Phiên Kết nối Máy chủ CSDL',
        context: 'Thiết lập môi trường làm việc trên máy tính phòng thực hành.',
        mission: 'Mở HeidiSQL, tạo phiên kết nối "ThucHanh_Tin11" và kiểm tra trạng thái hoạt động của máy chủ.',
        steps: [
          'Bước 1: Khởi động phần mềm HeidiSQL.',
          'Bước 2: Bấm New Session, đặt tên "ThucHanh_Tin11".',
          'Bước 3: Nhập Host: 127.0.0.1, User: root, bấm Open để kết nối.',
          'Bước 4: Mở tab Query, gõ lệnh `SHOW DATABASES;` và bấm F9.'
        ],
        outputRequirement: 'Kết nối thành công hiển thị danh sách các CSDL có sẵn trên máy chủ.',
        practicalTip: 'Nếu không kết nối được, hãy kiểm tra xem dịch vụ MySQL Service (hoặc bảng điều khiển XAMPP) đã được bấm Start chưa.'
      },
      mindmap: {
        id: 'mm_11_17',
        label: 'QUẢN TRỊ CSDL TRÊN MÁY TÍNH',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_17_1',
            label: 'Thiết lập kết nối',
            children: [
              { id: 'mm_11_17_1_1', label: 'Host: 127.0.0.1 (localhost)' },
              { id: 'mm_11_17_1_2', label: 'User: root' },
              { id: 'mm_11_17_1_3', label: 'Port: 3306' }
            ]
          },
          {
            id: 'mm_11_17_2',
            label: 'Không gian làm việc',
            children: [
              { id: 'mm_11_17_2_1', label: 'Cây danh mục CSDL' },
              { id: 'mm_11_17_2_2', label: 'Tab soạn thảo SQL (F9)' },
              { id: 'mm_11_17_2_3', label: 'Tab xem dữ liệu bảng' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Quản Trị CSDL Thực Hành 11',
      badgeIcon: 'Server',
      roleTitle: 'Kỹ Thuật Viên Kết Nối Máy Chủ CSDL',
      congratsMessage: 'Tuyệt vời! Bạn đã kết nối thành công máy chủ CSDL và sẵn sàng cho các bài thực hành tạo bảng.',
      skillsUnlocked: ['Kết nối MySQL localhost:3306', 'Sử dụng HeidiSQL', 'Thực thi lệnh SHOW DATABASES']
    }
  },

  // Bài 18: Thực hành xác định cấu trúc bảng và các trường khoá
  {
    id: 18,
    code: 'TIN11_B18',
    title: 'Thực hành xác định cấu trúc bảng và các trường khoá',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Thiết kế bảng CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Đặt nền móng thiết kế: Chọn kiểu dữ liệu và xác định khóa chính tối ưu',
      description: 'Phân tích các thuộc tính thực tế thành các trường dữ liệu, lựa chọn kiểu dữ liệu phù hợp (INT, VARCHAR, DATE, DECIMAL) và chỉ định trường khoá chính phân biệt duy nhất.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Chọn kiểu dữ liệu chuẩn (INT, VARCHAR, DATE)', 'Chỉ định Khoá chính (Primary Key)', 'Quy tắc đặt tên trường khoa học']
    },
    objectives: [
      {
        id: 'obj_11_18_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các kiểu dữ liệu thông dụng trong SQL',
        description: 'Phân biệt được khi nào dùng INT (số nguyên), VARCHAR (chuỗi ký tự thay đổi độ dài), DATE (ngày tháng), DECIMAL/FLOAT (số thực).',
        iconName: 'Table'
      },
      {
        id: 'obj_11_18_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết kế cấu trúc bảng hoàn chỉnh',
        description: 'Xác định được danh sách các trường, kích thước dữ liệu và trường làm Khoá chính cho một bài toán quản lý cụ thể.',
        iconName: 'Key'
      },
      {
        id: 'obj_11_18_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tối ưu hóa bộ nhớ',
        description: 'Chọn kích thước trường vừa đủ (ví dụ VARCHAR(50) thay vì VARCHAR(255) vô ích) để tiết kiệm dung lượng lưu trữ.',
        iconName: 'Cpu'
      }
    ],
    warmup: {
      title: 'Tình huống: Lưu số điện thoại bằng kiểu Số nguyên (INT) hay Chuỗi (VARCHAR)?',
      scenario: 'Một bạn học sinh khi thiết kế bảng `HOC_SINH` đã chọn kiểu dữ liệu cho trường `SoDienThoai` là kiểu số nguyên `INT`. Khi nhập số "0912345678", phần mềm tự động biến thành "912345678" (mất số 0 ở đầu).',
      pollQuestion: 'Tại sao trường số điện thoại BẮT BUỘC phải chọn kiểu chuỗi ký tự VARCHAR?',
      pollOptions: [
        { id: 'p11_18_1', text: 'Vì kiểu số nguyên tự động bỏ số 0 ở đầu và số điện thoại không bao giờ dùng để cộng trừ nhân chia', votesPercent: 93, isPopular: true, insight: 'Chính xác! Những dãy số chỉ để định danh như số điện thoại, số CCCD, mã học sinh luôn phải chọn kiểu chuỗi VARCHAR.' },
        { id: 'p11_18_2', text: 'Vì kiểu số nguyên chạy chậm hơn kiểu chuỗi', votesPercent: 3, insight: 'Kiểu số nguyên xử lý rất nhanh, nhưng sai logic biểu diễn cho số điện thoại.' },
        { id: 'p11_18_3', text: 'Vì máy tính không thích số điện thoại', votesPercent: 4, insight: 'Máy tính xử lý theo đúng kiểu dữ liệu mà người lập trình quy định.' }
      ],
      reflection: 'Chọn đúng kiểu dữ liệu ngay từ giai đoạn thiết kế là yếu tố quyết định sự ổn định của phần mềm.'
    },
    knowledge: [
      {
        id: 'tab_11_18_1',
        title: '1. Bảng Tra Cứu Kiểu Dữ Liệu SQL & Xác Định Khoá Chính',
        subtitle: 'Lựa chọn kiểu dữ liệu tối ưu cho từng trường thông tin',
        iconName: 'CheckSquare',
        keyPoints: [
          '`INT`: Kiểu số nguyên, thích hợp cho số thứ tự, số lượng tồn kho, năm sinh.',
          '`VARCHAR(n)`: Chuỗi ký tự có độ dài biến đổi tối đa n ký tự, dùng cho họ tên, địa chỉ, mã định danh, số điện thoại.',
          '`DATE`: Kiểu ngày tháng năm (định dạng chuẩn: `YYYY-MM-DD`), dùng cho ngày sinh, ngày mượn sách.',
          '`DECIMAL(p, s)`: Số thực có độ chính xác cố định, thích hợp cho điểm số (DECIMAL(4,2)) hoặc giá tiền.',
          'Tiêu chí chọn Khoá chính: Phải mang tính duy nhất, không rỗng (NOT NULL) và có tính ổn định cao (không thay đổi theo thời gian).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tên trường', 'Ý nghĩa thực tế', 'Kiểu dữ liệu đề xuất', 'Lý do lựa chọn'],
          rows: [
            ['MaHS', 'Mã số học sinh', 'VARCHAR(10) PRIMARY KEY', 'Chuỗi ngắn, duy nhất, làm Khoá chính'],
            ['HoTen', 'Họ và tên học sinh', 'VARCHAR(50) NOT NULL', 'Độ dài họ tên tiếng Việt tối đa 50 ký tự'],
            ['NgaySinh', 'Ngày tháng năm sinh', 'DATE', 'Lưu đúng định dạng ngày chuẩn quốc tế'],
            ['DiemTrungBinh', 'Điểm trung bình môn', 'DECIMAL(3,1)', 'Lưu số có 1 chữ số thập phân (VD: 8.5)']
          ]
        },
        emCanNho: [
          'Các kiểu dữ liệu chính: `INT`, `VARCHAR(n)`, `DATE`, `DECIMAL(p,s)`.',
          'Số điện thoại, CCCD, Mã học sinh bắt buộc dùng kiểu `VARCHAR`.',
          'Khoá chính phải được gán thuộc tính `PRIMARY KEY NOT NULL`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Trường dữ liệu và Kiểu dữ liệu tối ưu',
      instruction: 'Nối tên trường dữ liệu với kiểu dữ liệu SQL phù hợp nhất:',
      matchingPairs: [
        { id: 'dt1', left: 'NgayVaoDoan (Ngày vào Đoàn)', right: 'DATE (Lưu trữ ngày tháng năm)' },
        { id: 'dt2', left: 'SoCCCD (Số Căn cước công dân)', right: 'VARCHAR(12) (Chuỗi ký tự giữ số 0 ở đầu)' },
        { id: 'dt3', left: 'SoLuongSach (Số lượng cuốn sách)', right: 'INT (Số nguyên đếm số lượng)' },
        { id: 'dt4', left: 'DiemTongKet (Điểm tổng kết)', right: 'DECIMAL(3,1) (Số thực có 1 chữ số thập phân)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để lưu trữ thông tin ngày tháng năm sinh của học sinh trong SQL, kiểu dữ liệu nào sau đây là CHUẨN NHẤT?',
        options: ['DATE', 'INT', 'VARCHAR', 'BOOLEAN'],
        correctIndex: 0,
        explanation: 'DATE là kiểu dữ liệu chuyên biệt để lưu trữ ngày tháng năm theo chuẩn YYYY-MM-DD.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tại sao trường `SoDienThoai` nên chọn kiểu `VARCHAR(10)` mà KHÔNG NÊN chọn kiểu `INT`?',
        options: [
          'Vì kiểu INT sẽ tự động làm mất số 0 ở đầu (ví dụ 098... thành 98...) và không thực hiện phép tính toán trên số điện thoại',
          'Vì VARCHAR rẻ tiền hơn',
          'Vì INT không thể lưu số',
          'Vì số điện thoại đổi màu liên tục'
        ],
        correctIndex: 0,
        explanation: 'Số điện thoại mang tính định danh chuỗi số, dùng INT sẽ làm mất số 0 dẫn đầu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong bảng `MON_HOC` gồm các trường: `MaMon`, `TenMon`, `SoTiet`. Trường nào nên được chọn làm Khoá chính?',
        options: ['MaMon (Mã môn học)', 'TenMon (Tên môn học)', 'SoTiet (Số tiết)', 'Không cần khoá chính'],
        correctIndex: 0,
        explanation: 'MaMon là mã ký hiệu ngắn gọn, duy nhất định danh từng môn học (như TIN11, TOAN11).',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Ký hiệu `VARCHAR(50)` trong khai báo cấu trúc trường có ý nghĩa gì?',
        options: [
          'Chuỗi ký tự có độ dài thay đổi linh hoạt, tối đa không quá 50 ký tự',
          'Bắt buộc người dùng phải gõ đúng 50 ký tự',
          'Chỉ lưu được 50 số nguyên',
          'Lưu được 50 bức ảnh'
        ],
        correctIndex: 0,
        explanation: 'VARCHAR là Variable Character, chỉ chiếm dung lượng tương ứng với số ký tự thực tế nhập vào (tối đa 50).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Khi thiết kế bảng, thuộc tính `NOT NULL` được gán cho một trường mang ý nghĩa gì?',
        options: [
          'Bắt buộc trường đó phải có dữ liệu khi thêm bản ghi mới, không được phép bỏ trống',
          'Trường đó luôn có giá trị bằng 0',
          'Xóa trường đó khỏi bảng',
          'Cho phép nhập tùy ý'
        ],
        correctIndex: 0,
        explanation: 'NOT NULL ngăn chặn việc để trống các thông tin bắt buộc phải có.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thiết kế Bảng Thông tin Sách cho Thư viện Trường',
        context: 'Thư viện trường cần thiết kế bảng `SACH` để quản lý hàng nghìn đầu sách.',
        mission: 'Xác định tên trường, kiểu dữ liệu, kích thước và chọn Khoá chính cho bảng `SACH`.',
        steps: [
          'Trường 1: `MaSach` - Kiểu `VARCHAR(10)` - Khóa chính (PRIMARY KEY).',
          'Trường 2: `TenSach` - Kiểu `VARCHAR(100)` - Bắt buộc (NOT NULL).',
          'Trường 3: `TacGia` - Kiểu `VARCHAR(50)`.',
          'Trường 4: `NamXuatBan` - Kiểu `INT`.',
          'Trường 5: `DonGia` - Kiểu `DECIMAL(10,2)`.'
        ],
        outputRequirement: 'Bản thiết kế cấu trúc bảng chi tiết sẵn sàng để viết lệnh CREATE TABLE.',
        practicalTip: 'Luôn dự phòng độ dài tên sách từ 100 đến 150 ký tự để không bị tràn dữ liệu với các đầu sách có tiêu đề dài.'
      },
      mindmap: {
        id: 'mm_11_18',
        label: 'THIẾT KẾ CẤU TRÚC BẢNG',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_18_1',
            label: 'Kiểu dữ liệu thông dụng',
            children: [
              { id: 'mm_11_18_1_1', label: 'Số nguyên INT' },
              { id: 'mm_11_18_1_2', label: 'Chuỗi VARCHAR(n)' },
              { id: 'mm_11_18_1_3', label: 'Ngày tháng DATE' },
              { id: 'mm_11_18_1_4', label: 'Số thực DECIMAL' }
            ]
          },
          {
            id: 'mm_11_18_2',
            label: 'Ràng buộc trường',
            children: [
              { id: 'mm_11_18_2_1', label: 'PRIMARY KEY' },
              { id: 'mm_11_18_2_2', label: 'NOT NULL' },
              { id: 'mm_11_18_2_3', label: 'UNIQUE' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kiến Trúc Sư Thiết Kế Bảng 11',
      badgeIcon: 'Table',
      roleTitle: 'Chuyên Viên Phân Tích Dữ Liệu Bảng',
      congratsMessage: 'Tuyệt vời! Bạn đã thành thạo kỹ năng lựa chọn kiểu dữ liệu và xác định khoá chính tối ưu.',
      skillsUnlocked: ['Chọn kiểu dữ liệu chuẩn', 'Thiết lập PRIMARY KEY', 'Ràng buộc NOT NULL']
    }
  }
];

export const THEME6_LESSONS_11: Lesson[] = [
  ...THEME6_BASE_LESSONS_11,
  ...THEME6_LESSONS_PART2_11,
  ...THEME6_LESSONS_PART3_11
];
