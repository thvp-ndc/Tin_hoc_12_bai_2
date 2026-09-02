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
        title: '1. Giao diện và các thành phần của phần mềm quản trị HeidiSQL',
        subtitle: 'Bố cục 3 khu vực làm việc trực quan của ứng dụng quản trị CSDL',
        iconName: 'Layers',
        keyPoints: [
          'Vùng cây điều hướng (bên trái): Hiển thị danh mục các máy chủ kết nối, danh sách tất cả Cơ sở dữ liệu và các Bảng bên trong.',
          'Vùng soạn thảo truy vấn SQL (bên phải): Tab "Query" là nơi lập trình viên gõ các câu lệnh SQL tự do và bấm nút Run (F9) để thực thi.',
          'Vùng kết quả và nhật ký sự kiện (bên dưới): Hiển thị bảng dữ liệu trả về, số hàng bị ảnh hưởng, thời gian chạy câu lệnh và chi tiết thông báo lỗi cú pháp nếu có.',
          'Tab cấu trúc bảng (Table): Cho phép xem, thêm, sửa cột dữ liệu trực quan bằng nhấp chuột.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Cây CSDL bên trái', desc: 'Duyệt các Database và danh sách các Table' },
            { label: '2. Tab Query bên phải', desc: 'Soạn thảo lệnh SQL, phím F9 để thực thi' },
            { label: '3. Khung kết quả bên dưới', desc: 'Xem dữ liệu trả về và thông báo thành công' }
          ]
        },
        emCanNho: [
          'HeidiSQL là công cụ quản trị CSDL trực quan, gọn nhẹ và miễn phí.',
          'Cửa sổ gồm 3 vùng: Cây CSDL, Vùng soạn thảo câu lệnh và Khung kết quả.',
          'Phím tắt `F9` dùng để chạy nhanh câu lệnh SQL đang soạn thảo.'
        ]
      },
      {
        id: 'tab_11_17_2',
        title: '2. Thiết lập kết nối máy chủ cục bộ (localhost:3306)',
        subtitle: 'Quản lý các phiên làm việc (Session Manager) với MySQL Server',
        iconName: 'Server',
        keyPoints: [
          'Khái niệm phiên kết nối: Trước khi thao tác với dữ liệu, bạn phải khai báo thông số kết nối tới máy chủ MySQL.',
          'Các thông số kết nối cục bộ tiêu chuẩn:',
          '  - Network type: MariaDB or MySQL (TCP/IP).',
          '  - Hostname / IP: `127.0.0.1` hoặc `localhost` (chỉ định chính chiếc máy tính bạn đang ngồi).',
          '  - User: `root` (tài khoản quản trị cao nhất mặc định).',
          '  - Password: Để trống (nếu dùng XAMPP mặc định) hoặc mật khẩu bạn đã đặt khi cài đặt.',
          '  - Port: `3306` (cổng mạng tiêu chuẩn của dịch vụ MySQL).',
          'Lưu phiên: Đặt tên phiên là "May_Cuc_Bo" và bấm nút `Open` để bắt đầu làm việc.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thông số kết nối', 'Giá trị mặc định', 'Ý nghĩa thực tế'],
          rows: [
            ['Network type', 'MySQL (TCP/IP)', 'Giao thức mạng kết nối chuẩn'],
            ['Hostname / IP', 'localhost hoặc 127.0.0.1', 'Chính chiếc máy tính của bạn'],
            ['User', 'root', 'Tài khoản có toàn quyền cao nhất'],
            ['Port', '3306', 'Cổng giao tiếp dịch vụ máy chủ MySQL']
          ]
        },
        emCanNho: [
          'Địa chỉ máy chủ cục bộ là `localhost` hoặc `127.0.0.1`.',
          'Tài khoản quản trị mặc định là `root`, cổng dịch vụ mặc định là `3306`.',
          'Luôn kiểm tra máy chủ MySQL đã được bật (Start trong XAMPP) trước khi kết nối.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thông số Kết nối Máy chủ HeidiSQL',
      instruction: 'Nối tên thông số với giá trị mặc định chuẩn của nó:',
      matchingPairs: [
        { id: 's1', left: 'Địa chỉ máy chủ cục bộ (Hostname)', right: '127.0.0.1 hoặc localhost' },
        { id: 's2', left: 'Tài khoản quản trị cao nhất (User)', right: 'root' },
        { id: 's3', left: 'Cổng kết nối mặc định (Port)', right: '3306' },
        { id: 's4', left: 'Phím tắt thực thi câu lệnh SQL', right: 'Phím F9' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Địa chỉ IP chuẩn đại diện cho chính máy tính cục bộ (localhost) khi kết nối máy chủ CSDL là gì?',
        options: ['127.0.0.1', '192.168.1.1', '8.8.8.8', '255.255.255.0'],
        correctIndex: 0,
        explanation: '127.0.0.1 là địa chỉ IP vòng lặp nội bộ (Loopback IP) trỏ về chính máy tính hiện tại.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tên tài khoản quản trị tối cao mặc định trong hệ quản trị MySQL là gì?',
        options: ['root', 'admin', 'user', 'guest'],
        correctIndex: 0,
        explanation: 'Tài khoản "root" là tài khoản mặc định có toàn bộ đặc quyền trên hệ thống MySQL/MariaDB.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Cổng mạng (Port) mặc định được hệ quản trị cơ sở dữ liệu MySQL sử dụng là cổng số mấy?',
        options: ['3306', '80', '443', '21'],
        correctIndex: 0,
        explanation: 'Cổng 3306 là cổng tiêu chuẩn được gán cho dịch vụ cơ sở dữ liệu MySQL/MariaDB.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Trong phần mềm HeidiSQL, phím tắt nào dùng để CHẠY (thực thi) câu lệnh SQL đang viết trong tab Query?',
        options: ['Phím F9', 'Phím F1', 'Phím Esc', 'Phím Space'],
        correctIndex: 0,
        explanation: 'Phím F9 là phím tắt kinh điển trong HeidiSQL để thực thi câu lệnh SQL đang được chọn.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Khi kết nối HeidiSQL báo lỗi "Can\'t connect to MySQL server on \'127.0.0.1\' (10061)", nguyên nhân PHỔ BIẾN NHẤT là gì?',
        options: [
          'Dịch vụ máy chủ MySQL chưa được bật (chưa bấm nút Start trong bảng điều khiển XAMPP)',
          'Màn hình máy tính bị bẩn',
          'Chuột máy tính hết pin',
          'Bàn phím bị kẹt phím cách'
        ],
        correctIndex: 0,
        explanation: 'Lỗi 10061 báo hiệu máy chủ chưa khởi động hoặc cổng 3306 đang bị chặn.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Thiết Lập Phiên Kết Nối "Truong_Hoc" Trên HeidiSQL',
        context: 'Chuẩn bị môi trường thực hành cho toàn bộ chuỗi bài thực hành CSDL lớp 11.',
        mission: 'Cài đặt và thiết lập phiên làm việc kết nối tới máy chủ MySQL localhost.',
        steps: [
          'Bước 1: Mở phần mềm XAMPP, nhấn nút `Start` tại dòng MySQL (chuyển sang màu xanh lá cây).',
          'Bước 2: Mở HeidiSQL, trong cửa sổ Session manager nhấn nút `New`.',
          'Bước 3: Đặt tên phiên là `ThucHanh_Tin11`, nhập Hostname: `127.0.0.1`, User: `root`, Port: `3306`.',
          'Bước 4: Nhấn nút `Open` để kết nối thành công, chiêm ngưỡng cây CSDL bên trái.'
        ],
        outputRequirement: 'Ảnh chụp màn hình HeidiSQL đã kết nối thành công hiển thị cây cơ sở dữ liệu.',
        practicalTip: 'Không bao giờ xóa các CSDL mặc định của hệ thống như `mysql`, `information_schema`, `performance_schema`.'
      },
      mindmap: {
        id: 'mm_11_17',
        label: 'QUẢN TRỊ CSDL TRÊN MÁY TÍNH',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_17_1',
            label: 'Thông số kết nối',
            children: [
              { id: 'mm_11_17_1_1', label: 'Host: 127.0.0.1 (localhost)' },
              { id: 'mm_11_17_1_2', label: 'User: root (Quản trị)' },
              { id: 'mm_11_17_1_3', label: 'Port: 3306 tiêu chuẩn' }
            ]
          },
          {
            id: 'mm_11_17_2',
            label: 'Giao diện HeidiSQL',
            children: [
              { id: 'mm_11_17_2_1', label: 'Cây Database bên trái' },
              { id: 'mm_11_17_2_2', label: 'Tab Query gõ lệnh (F9)' },
              { id: 'mm_11_17_2_3', label: 'Bảng kết quả bên dưới' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Quản Trị CSDL Khởi Nghiệp 11',
      badgeIcon: 'Server',
      roleTitle: 'Chuyên Viên Vận Hành Hệ Thống HeidiSQL',
      congratsMessage: 'Tuyệt vời! Bạn đã kết nối thành công tới máy chủ MySQL và sẵn sàng bắt tay vào thiết kế các bảng dữ liệu.',
      skillsUnlocked: ['Kết nối máy chủ localhost:3306', 'Sử dụng giao diện HeidiSQL', 'Phím tắt thực thi lệnh F9']
    }
  },

  // Bài 18: Thực hành xác định cấu trúc bảng và các trường khoá
  {
    id: 18,
    code: 'TIN11_B18',
    title: 'Thực hành xác định cấu trúc bảng và các trường khoá',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Thiết kế cấu trúc bảng',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Đặt móng cho hệ thống dữ liệu: Phân tích thực thể, chọn kiểu dữ liệu và xác định khóa chính',
      description: 'Luyện tập kỹ năng phân tích bài toán thực tế: tách đối tượng thành các bảng, chọn kiểu dữ liệu chuẩn (INT, VARCHAR, DATE, DECIMAL) và chỉ định trường khóa chính tối ưu dung lượng.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Kiểu dữ liệu INT, VARCHAR, DATE', 'Quy tắc đặt tên trường chuẩn', 'Xác định khóa chính Primary Key']
    },
    objectives: [
      {
        id: 'obj_11_18_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nắm vững các kiểu dữ liệu SQL',
        description: 'Phân tích thực thể và chọn đúng kiểu dữ liệu (INT, VARCHAR, DATE, DECIMAL) cho từng thuộc tính thông tin thực tế.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_18_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết kế cấu trúc bảng & khóa chính',
        description: 'Xây dựng được bảng đặc tả cấu trúc bảng (Tên trường, Kiểu dữ liệu, Độ dài, Khóa chính, Ràng buộc NOT NULL) cho bài toán quản lý thư viện hoặc điểm trường học.',
        iconName: 'Key'
      },
      {
        id: 'obj_11_18_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong chuẩn hóa chuyên nghiệp',
        description: 'Hình thành thói quen đặt tên trường bằng tiếng Việt không dấu, sử dụng dấu gạch dưới `_` và tối ưu kích thước trường để tiết kiệm bộ nhớ.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Chọn kiểu dữ liệu cho cột "Số điện thoại"',
      scenario: 'Một bạn học sinh khi thiết kế bảng dữ liệu đã chọn kiểu số nguyên `INT` cho cột `SoDienThoai`. Khi nhập số điện thoại "0912345678", số 0 ở đầu lập tức bị máy tính tự động xóa mất thành "912345678" do số nguyên không lưu số 0 đứng đầu.',
      pollQuestion: 'Kiểu dữ liệu chuẩn xác nhất bắt buộc phải chọn cho cột "Số điện thoại" là gì?',
      pollOptions: [
        { id: 'p11_18_1', text: 'Kiểu chuỗi ký tự độ dài thay đổi VARCHAR(15)', votesPercent: 95, isPopular: true, insight: 'Chính xác! Số điện thoại không dùng để cộng trừ nhân chia và có số 0 ở đầu nên luôn phải lưu dưới dạng chuỗi ký tự VARCHAR.' },
        { id: 'p11_18_2', text: 'Kiểu số nguyên INT', votesPercent: 3, insight: 'Kiểu INT sẽ tự động làm mất số 0 ở đầu số điện thoại.' },
        { id: 'p11_18_3', text: 'Kiểu ngày tháng DATE', votesPercent: 2, insight: 'DATE chỉ dùng cho ngày tháng năm, không lưu được số điện thoại.' }
      ],
      reflection: 'Chọn đúng kiểu dữ liệu ngay từ đầu giúp bảo toàn nguyên vẹn thông tin và tiết kiệm bộ nhớ cho toàn hệ thống.'
    },
    knowledge: [
      {
        id: 'tab_11_18_1',
        title: '1. Phân tích thực thể và chọn kiểu dữ liệu (INT, VARCHAR, DATE, DECIMAL)',
        subtitle: 'Bản đồ kiểu dữ liệu chuẩn trong MySQL/HeidiSQL',
        iconName: 'Table',
        keyPoints: [
          'Kiểu số nguyên INT: Dùng cho số đếm, số thứ tự, mã số tự tăng (ID, Tuoi, SoLuong).',
          'Kiểu chuỗi ký tự VARCHAR(n): Dùng cho văn bản có độ dài thay đổi như Họ tên, Địa chỉ, Email, Số điện thoại (n là số ký tự tối đa). Ví dụ: `HoTen VARCHAR(50)`.',
          'Kiểu ngày tháng DATE: Lưu trữ định dạng năm-tháng-ngày (`YYYY-MM-DD`). Ví dụ: `NgaySinh DATE`.',
          'Kiểu số thực DECIMAL(M, D): Dùng cho số điểm, tiền tệ cần độ chính xác tuyệt đối. M là tổng số chữ số, D là số chữ số phần thập phân. Ví dụ: `DiemTB DECIMAL(4, 2)` (lưu được tối đa 10.00).',
          'Quy tắc đặt tên trường: Đặt tên bằng tiếng Việt không dấu, không chứa dấu cách, dùng dấu gạch dưới `_` ngăn cách (ví dụ: `ma_hoc_sinh`, `ho_va_ten`).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Kiểu dữ liệu SQL', 'Dữ liệu thực tế phù hợp', 'Ví dụ giá trị cụ thể'],
          rows: [
            ['INT', 'Số lượng, Mã số nguyên', '1, 2, 100, 2026'],
            ['VARCHAR(50)', 'Họ và tên, Tên sách, Địa chỉ', '\'Nguyễn Văn An\', \'Hà Nội\''],
            ['VARCHAR(15)', 'Số điện thoại, Số CCCD', '\'0988123456\', \'001208001234\''],
            ['DATE', 'Ngày sinh, Ngày mượn sách', '\'2008-10-25\''],
            ['DECIMAL(4,2)', 'Điểm trung bình, Điểm thi', '8.75, 9.50, 10.00']
          ]
        },
        emCanNho: [
          'Số điện thoại và CCCD luôn chọn kiểu chuỗi `VARCHAR` để giữ số 0 ở đầu.',
          'Ngày tháng năm chọn kiểu `DATE` chuẩn định dạng `YYYY-MM-DD`.',
          'Điểm số chọn kiểu số thực `DECIMAL(4,2)` đảm bảo độ chính xác tuyệt đối.'
        ]
      },
      {
        id: 'tab_11_18_2',
        title: '2. Chỉ định trường khóa chính cho từng bảng',
        subtitle: 'Quy tắc vàng chọn trường định danh duy nhất (Primary Key)',
        iconName: 'Key',
        keyPoints: [
          'Tiêu chí chọn Khóa chính cho bảng:',
          '  1. Tính duy nhất: Giá trị của trường không bao giờ bị trùng lặp giữa hai bản ghi khác nhau.',
          '  2. Không bao giờ để trống (NOT NULL): Bắt buộc mọi bản ghi phải có giá trị khóa chính.',
          '  3. Tính ổn định: Giá trị khóa chính không nên bị thay đổi thường xuyên trong suốt vòng đời.',
          'Các ví dụ khóa chính lý tưởng:',
          '  - Bảng HOC_SINH -> Khóa chính: `MaHS` (ví dụ: HS001, HS002).',
          '  - Bảng SACH -> Khóa chính: `MaSach` (ví dụ: S001, S002).',
          '  - Bảng LOP_HOC -> Khóa chính: `MaLop` (ví dụ: 11A1, 11A2).',
          'Thuộc tính AUTO_INCREMENT: Tự động tăng giá trị số nguyên thêm 1 mỗi khi có bản ghi mới được chèn vào bảng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bảng HOC_SINH', desc: 'Khóa chính: MaHS (duy nhất, NOT NULL)' },
            { label: 'Bảng MON_HOC', desc: 'Khóa chính: MaMon (TIN, TOAN, VAN)' },
            { label: 'Bảng BANG_DIEM', desc: 'Khóa chính: MaDiem (Số tự tăng AUTO_INCREMENT)' }
          ]
        },
        emCanNho: [
          'Khóa chính phân biệt duy nhất từng bản ghi, không được trùng, không được rỗng.',
          'Ưu tiên tạo trường mã định danh ngắn gọn (như MaHS, MaSach) làm khóa chính.',
          'Sử dụng thuộc tính AUTO_INCREMENT cho các khóa chính dạng số nguyên tự tăng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thông Tin Thực Tế và Kiểu Dữ Liệu SQL',
      instruction: 'Nối loại dữ liệu thực tế với kiểu dữ liệu SQL chuẩn nhất:',
      matchingPairs: [
        { id: 'dt1', left: 'Họ và tên học sinh', right: 'VARCHAR(50)' },
        { id: 'dt2', left: 'Số điện thoại cá nhân', right: 'VARCHAR(15)' },
        { id: 'dt3', left: 'Ngày sinh nhật', right: 'DATE' },
        { id: 'dt4', left: 'Điểm tổng kết môn học', right: 'DECIMAL(4,2)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để lưu trữ ngày sinh của học sinh trong cơ sở dữ liệu MySQL, kiểu dữ liệu nào sau đây là CHUẨN NHẤT?',
        options: ['DATE', 'INT', 'VARCHAR(10)', 'TIME'],
        correctIndex: 0,
        explanation: 'Kiểu DATE chuyên dụng lưu trữ ngày-tháng-năm theo chuẩn YYYY-MM-DD và hỗ trợ tính toán tuổi tác.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tại sao cột "Số Căn cước công dân" gồm 12 chữ số (ví dụ: 001208001234) KHÔNG NÊN chọn kiểu INT?',
        options: [
          'Vì kiểu INT sẽ tự động làm mất các chữ số 0 ở đầu và có thể bị tràn giới hạn lưu trữ số nguyên thông thường',
          'Vì máy tính không cho phép nhập số vào kiểu INT',
          'Vì số CCCD đổi sau mỗi ngày',
          'Vì kiểu INT chỉ dành cho điểm số'
        ],
        correctIndex: 0,
        explanation: 'Số CCCD có các số 0 ở đầu và không dùng để tính toán nên bắt buộc phải chọn kiểu chuỗi ký tự VARCHAR.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Thuộc tính AUTO_INCREMENT trong MySQL thường được áp dụng cho trường nào?',
        options: [
          'Trường Khóa chính dạng số nguyên tự động tăng giá trị thêm 1 mỗi khi thêm bản ghi mới',
          'Trường Họ tên học sinh',
          'Trường Ngày sinh',
          'Trường Quê quán'
        ],
        correctIndex: 0,
        explanation: 'AUTO_INCREMENT tự động tạo ra số thứ tự tăng dần duy nhất (1, 2, 3...) cho khóa chính.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Trong bảng SACH gồm: MaSach, TenSach, TacGia, NamXuatBan, GiaTien. Trường nào đóng vai trò là KHÓA CHÍNH lý tưởng nhất?',
        options: ['MaSach', 'TenSach (vì có thể có sách trùng tên)', 'TacGia (một tác giả viết nhiều sách)', 'NamXuatBan'],
        correctIndex: 0,
        explanation: 'MaSach là mã định danh duy nhất cấp cho từng ấn phẩm sách, không bao giờ trùng nhau.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Ràng buộc NOT NULL khi khai báo một trường dữ liệu trong bảng có ý nghĩa gì?',
        options: [
          'Bắt buộc người dùng phải nhập dữ liệu cho trường này, không được phép bỏ trống',
          'Trường này phải luôn luôn bằng 0',
          'Trường này chỉ được nhập chữ số',
          'Trường này tự động biến mất'
        ],
        correctIndex: 0,
        explanation: 'NOT NULL ngăn chặn việc để trống trường dữ liệu bắt buộc (như Khóa chính, Họ tên).',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Bảng Đặc Tả Cấu Trúc: Hệ Thống Quản Lý Sách Thư Viện',
        context: 'Thiết kế cấu trúc bảng dữ liệu cho phần mềm thư viện trường.',
        mission: 'Lập bảng đặc tả chi tiết cho bảng SACH gồm 5 trường dữ liệu.',
        steps: [
          '1. `ma_sach`: VARCHAR(10), Khóa chính (Primary Key), NOT NULL.',
          '2. `ten_sach`: VARCHAR(100), NOT NULL.',
          '3. `tac_gia`: VARCHAR(50), NOT NULL.',
          '4. `nam_xb`: INT.',
          '5. `gia_tien`: DECIMAL(10,2).'
        ],
        outputRequirement: 'Bảng đặc tả chuẩn kỹ thuật gồm 5 cột: Tên trường, Kiểu dữ liệu, Độ dài, Khóa chính, Diễn giải.',
        practicalTip: 'Đặt tên trường ngắn gọn, viết thường và dùng dấu gạch dưới giúp viết lệnh SQL sau này rất nhanh và không bị lỗi.'
      },
      mindmap: {
        id: 'mm_11_18',
        label: 'CẤU TRÚC BẢNG & KHÓA',
        color: '#2563eb',
        children: [
          {
            id: 'mm_11_18_1',
            label: 'Kiểu dữ liệu SQL',
            children: [
              { id: 'mm_11_18_1_1', label: 'INT: Số nguyên' },
              { id: 'mm_11_18_1_2', label: 'VARCHAR(n): Chuỗi ký tự' },
              { id: 'mm_11_18_1_3', label: 'DATE: Ngày tháng' },
              { id: 'mm_11_18_1_4', label: 'DECIMAL(M,D): Số thực chính xác' }
            ]
          },
          {
            id: 'mm_11_18_2',
            label: 'Khóa & Ràng buộc',
            children: [
              { id: 'mm_11_18_2_1', label: 'PRIMARY KEY: Duy nhất, NOT NULL' },
              { id: 'mm_11_18_2_2', label: 'AUTO_INCREMENT: Tự tăng' },
              { id: 'mm_11_18_2_3', label: 'NOT NULL: Bắt buộc điền' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kiến Trúc Sư Cấu Trúc Bảng 11',
      badgeIcon: 'Table',
      roleTitle: 'Chuyên Viên Phân Tích Thiết Kế CSDL',
      congratsMessage: 'Tuyệt vời! Bạn đã thành thạo kỹ năng chọn kiểu dữ liệu và chỉ định khóa chính - nền tảng vững chắc để viết lệnh tạo bảng CREATE TABLE.',
      skillsUnlocked: ['Lựa chọn kiểu dữ liệu SQL', 'Chỉ định khóa chính Primary Key', 'Lập bảng đặc tả kỹ thuật CSDL']
    }
  }
];

export const THEME6_LESSONS_11: Lesson[] = [
  ...THEME6_BASE_LESSONS_11,
  ...THEME6_LESSONS_PART2_11,
  ...THEME6_LESSONS_PART3_11
];
