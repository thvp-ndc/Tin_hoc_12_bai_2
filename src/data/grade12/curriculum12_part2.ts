import { LessonCurriculum12 } from './curriculum12';

export const GRADE_12_CURRICULUM_PART2: Record<number, LessonCurriculum12> = {
  // Bài 6: Giao tiếp an toàn trong mạng cục bộ
  6: {
    objectives: [
      {
        id: 'obj_12_6_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các nguy cơ an toàn mạng LAN',
        description: 'Chỉ ra được các nguy cơ mất an toàn trong mạng nội bộ: nghe lén gói tin (Sniffing), giả mạo địa chỉ IP/MAC (Spoofing) và lây lan mã độc qua thư mục dùng chung.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_12_6_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Biện pháp phòng vệ mạng nội bộ',
        description: 'Cấu hình bật Tường lửa Windows (Firewall), đặt mật khẩu bảo vệ thư mục chia sẻ, bảo mật mật khẩu Wi-Fi chuẩn WPA2/WPA3.',
        iconName: 'Lock'
      },
      {
        id: 'obj_12_6_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Kỷ luật an toàn thông tin cơ quan',
        description: 'Tuân thủ các nội quy an ninh mạng của trường học, không tự ý cắm thiết bị lạ hoặc chia sẻ quyền truy cập cho người ngoài.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_6_1',
        title: '1. Các nguy cơ mất an toàn trong mạng cục bộ',
        subtitle: 'Ảo tưởng an toàn đằng sau bức tường mạng nội bộ',
        iconName: 'AlertTriangle',
        keyPoints: [
          'Tâm lý chủ quan: Nhiều người lầm tưởng mạng LAN nội bộ là hoàn toàn an toàn. Thực tế, khi một máy trong mạng bị nhiễm virus, mã độc sẽ nhanh chóng lây lan sang toàn bộ các máy khác qua các thư mục chia sẻ không có mật khẩu.',
          'Các hình thức tấn công nội bộ phổ biến:',
          '  - Nghe lén gói tin (Packet Sniffing): Kẻ xấu dùng phần mềm bắt gói tin để đọc trộm mật khẩu, email không được mã hóa.',
          '  - Tấn công giả mạo (ARP Spoofing / Man-in-the-middle): Giả mạo Router để chuyển hướng toàn bộ lưu lượng mạng qua máy kẻ tấn công.',
          '  - Đột nhập qua Wi-Fi yếu: Mật khẩu Wi-Fi dễ đoán (như 12345678) bị bẻ khóa trong vài giây.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nguy cơ mạng LAN', 'Cơ chế tấn công', 'Hậu quả'],
          rows: [
            ['Nghe lén (Sniffing)', 'Bắt và giải mã các gói tin truyền qua dây mạng', 'Lộ mật khẩu và dữ liệu nội bộ'],
            ['Lây lan mã độc', 'Tự sao chép qua các thư mục Share quyền Write', 'Cả phòng máy bị tê liệt'],
            ['Truy cập trái phép', 'Bẻ khóa mật khẩu Wi-Fi hoặc tài khoản khách', 'Kẻ lạ thâm nhập vào CSDL trường']
          ]
        },
        emCanNho: [
          'Mạng nội bộ LAN vẫn tiềm ẩn nhiều nguy cơ mất an toàn nghiêm trọng.',
          'Mã độc lây lan rất nhanh qua các thư mục chia sẻ không cài mật khẩu.',
          'Luôn sử dụng giao thức mã hóa HTTPS để chống nghe lén thông tin.'
        ]
      },
      {
        id: 'tab_12_6_2',
        title: '2. Biện pháp phòng chống truy cập trái phép và bảo vệ dữ liệu mạng',
        subtitle: 'Xây dựng pháo đài bảo vệ mạng nội bộ',
        iconName: 'ShieldCheck',
        keyPoints: [
          '1. Kích hoạt Tường lửa (Windows Defender Firewall): Kiểm soát mọi luồng dữ liệu vào/ra, tự động chặn các kết nối đáng ngờ từ máy khác.',
          '2. Phân đoạn mạng (VLAN): Tách riêng mạng phòng máy học sinh, mạng giáo viên và mạng Wi-Fi khách để cô lập rủi ro.',
          '3. Bảo mật Wi-Fi cấp cao: Sử dụng chuẩn mã hóa WPA2/WPA3-Enterprise, đổi mật khẩu định kỳ, ẩn tên mạng (Hide SSID) nếu cần.',
          '4. Nguyên tắc chia sẻ: Chỉ cấp quyền `Read` cho các thư mục tài liệu; định kỳ kiểm tra và thu hồi quyền chia sẻ khi xong việc.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tường lửa Firewall', desc: 'Lọc cổng và chặn các kết nối độc hại từ bên ngoài' },
            { label: 'Phân đoạn mạng VLAN', desc: 'Cách ly mạng học sinh và mạng quản lý tài chính' },
            { label: 'Bảo mật Wi-Fi chuẩn WPA3', desc: 'Mã hóa sóng vô tuyến chống bẻ khóa mật khẩu' }
          ]
        },
        emCanNho: [
          'Bật Tường lửa (Firewall) trên tất cả các máy tính trong mạng.',
          'Phân quyền chia sẻ ở mức tối thiểu cần thiết (ưu tiên Read).',
          'Sử dụng chuẩn bảo mật WPA2/WPA3 cho mạng không dây Wi-Fi.'
        ]
      }
    ]
  },

  // Bài 7: Khái niệm, cấu trúc và các thẻ định dạng văn bản trong HTML
  7: {
    objectives: [
      {
        id: 'obj_12_7_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Ngôn ngữ HTML & cấu trúc trang web',
        description: 'Hiểu HTML (HyperText Markup Language) là ngôn ngữ đánh dấu siêu văn bản định hình bộ khung của trang web; nắm vững khung cấu trúc tài liệu `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.',
        iconName: 'Code'
      },
      {
        id: 'obj_12_7_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết các thẻ định dạng văn bản cơ bản',
        description: 'Sử dụng thành thạo các thẻ tiêu đề `<h1>` - `<h6>`, thẻ đoạn văn `<p>`, thẻ xuống dòng `<br>`, đường kẻ ngang `<hr>` và thẻ in đậm `<b>`, in nghiêng `<i>`.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_7_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong viết mã HTML chuẩn W3C',
        description: 'Hình thành thói quen luôn đóng thẻ đầy đủ, viết thụt lề ngay ngắn và khai báo thẻ meta charset="UTF-8" để hiển thị tiếng Việt.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_7_1',
        title: '1. Khái niệm ngôn ngữ HTML và cấu trúc trang web',
        subtitle: 'Bộ khung xương vững chắc của mọi trang web trên Internet',
        iconName: 'Globe',
        keyPoints: [
          'HTML (HyperText Markup Language): Không phải là ngôn ngữ lập trình, mà là ngôn ngữ đánh dấu siêu văn bản. HTML sử dụng các thẻ (Tags) để báo cho trình duyệt biết cách hiển thị từng phần tử nội dung.',
          'Cú pháp thẻ chuẩn: `<tên_thẻ thuộc_tính="giá_trị"> Nội dung </tên_thẻ>`. Thẻ mở đi kèm thẻ đóng có dấu gạch chéo `/`. (Một số thẻ rỗng không cần thẻ đóng như `<br>`, `<img>`, `<hr>`).',
          'Khung cấu trúc chuẩn W3C của tệp HTML:',
          '  - `<!DOCTYPE html>`: Khai báo phiên bản chuẩn HTML5.',
          '  - `<html lang="vi">`: Phần tử gốc chứa toàn bộ trang web.',
          '  - `<head>`: Chứa siêu dữ liệu không hiển thị trên trang (tiêu đề `<title>`, bảng mã `<meta charset="UTF-8">`).',
          '  - `<body>`: Chứa toàn bộ nội dung hiển thị cho người xem.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Trang Web Đầu Tiên</title>
</head>
<body>
  <h1>Chào mừng đến với Tin học 12!</h1>
  <p>Đây là bài học thiết kế trang web đầu tiên của tôi.</p>
</body>
</html>`
        },
        emCanNho: [
          'HTML là ngôn ngữ đánh dấu siêu văn bản tạo nên khung xương trang web.',
          'Cấu trúc gồm 2 phần chính: `<head>` (thông tin ẩn) và `<body>` (nội dung hiển thị).',
          'Luôn có `<meta charset="UTF-8">` để không bị lỗi font chữ tiếng Việt.'
        ]
      },
      {
        id: 'tab_12_7_2',
        title: '2. Các thẻ định dạng văn bản cơ bản (p, h1-h6, br, hr)',
        subtitle: 'Tổ chức phân cấp bài viết khoa học và rõ ràng',
        iconName: 'Type',
        keyPoints: [
          'Các thẻ tiêu đề `<h1>` đến `<h6>`: Phân cấp mức độ quan trọng từ lớn nhất (`<h1>` - thường là tiêu đề bài viết) giảm dần đến nhỏ nhất (`<h6>`).',
          'Thẻ đoạn văn `<p>` (Paragraph): Tự động tạo một đoạn văn bản riêng biệt có khoảng cách phía trên và dưới.',
          'Thẻ ngắt dòng `<br>` (Break): Xuống dòng ngay lập tức mà không tạo khoảng cách đoạn văn.',
          'Thẻ đường kẻ ngang `<hr>` (Horizontal Rule): Tạo một đường kẻ ngang chia tách các phần nội dung.',
          'Thẻ định dạng kiểu chữ: `<b>` hoặc `<strong>` (in đậm), `<i>` hoặc `<em>` (in nghiêng), `<u>` (gạch chân).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<h1>Trường THPT Thân Yêu</h1>
<hr>
<h2>1. Giới thiệu chung</h2>
<p>Trường được thành lập năm <b>2000</b>, đạt chuẩn quốc gia.<br>
Khẩu hiệu: <i>Dạy tốt - Học tốt</i>.</p>`
        },
        emCanNho: [
          'Dùng `<h1>` cho tiêu đề chính, `<h2>` cho tiêu đề mục lớn.',
          'Dùng `<p>` cho đoạn văn, `<br>` để xuống dòng trong đoạn.',
          'Đóng các cặp thẻ đúng thứ tự (thẻ nào mở sau thì đóng trước).'
        ]
      }
    ]
  },

  // Bài 8: Chèn hình ảnh và tạo liên kết trong HTML
  8: {
    objectives: [
      {
        id: 'obj_12_8_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Thẻ hình ảnh & liên kết siêu văn bản',
        description: 'Hiểu cú pháp thẻ tự đóng `<img>` với thuộc tính src, alt; và thẻ liên kết siêu văn bản `<a>` với thuộc tính href, target.',
        iconName: 'Image'
      },
      {
        id: 'obj_12_8_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Chèn ảnh & tạo liên kết tương đối/tuyệt đối',
        description: 'Chèn được ảnh kèm kích thước width/height hợp lý; tạo liên kết chuyển trang nội bộ (đường dẫn tương đối) và liên kết ra trang ngoài (đường dẫn tuyệt đối target="_blank").',
        iconName: 'Link'
      },
      {
        id: 'obj_12_8_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tối ưu trải nghiệm tiếp cận người dùng',
        description: 'Hình thành thói quen luôn điền thuộc tính `alt` mô tả ảnh giúp người khiếm thị dùng máy đọc màn hình vẫn hiểu được nội dung.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_8_1',
        title: '1. Thẻ chèn hình ảnh <img> và các thuộc tính',
        subtitle: 'Thổi bừng sức sống thị giác cho trang web',
        iconName: 'Image',
        keyPoints: [
          'Cú pháp: `<img src="đường_dẫn_ảnh" alt="chữ_thay_thế" width="chiều_rộng" height="chiều_cao">`.',
          'Thuộc tính `src` (Source): Đường dẫn đến tệp hình ảnh (.jpg, .png, .svg, .webp).',
          'Thuộc tính `alt` (Alternative Text): Văn bản mô tả thay thế hiển thị khi ảnh bị lỗi mạng không tải được; là tiêu chuẩn bắt buộc của W3C hỗ trợ người dùng khiếm thị và tối ưu công cụ tìm kiếm (SEO).',
          'Thuộc tính `width` và `height`: Đặt kích thước chiều rộng, chiều cao (đơn vị pixel hoặc phần trăm %).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<h2>Hình ảnh hoạt động trường</h2>
<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400" 
     alt="Học sinh trong giờ học" 
     width="320">
<p><i>Hình 1: Giờ học thực hành tin học sôi nổi.</i></p>`
        },
        emCanNho: [
          'Thẻ `<img>` là thẻ đơn, không có thẻ đóng `</img>`.',
          'Luôn khai báo thuộc tính `alt` để giải thích nội dung ảnh khi lỗi tải.',
          'Đường dẫn ảnh có thể là liên kết web (URL) hoặc tệp nằm trong máy tính.'
        ]
      },
      {
        id: 'tab_12_8_2',
        title: '2. Thẻ tạo liên kết <a> (Hyperlink) và đường dẫn tương đối/tuyệt đối',
        subtitle: 'Sợi tơ kết nối mạng lưới World Wide Web toàn cầu',
        iconName: 'Link',
        keyPoints: [
          'Cú pháp: `<a href="địa_chỉ_đích" target="_blank">Văn bản liên kết</a>`.',
          'Thuộc tính `href` (Hypertext Reference): Địa chỉ trang web hoặc tệp tin mà liên kết sẽ trỏ tới.',
          'Thuộc tính `target="_blank"`: Mở trang đích trên một tab trình duyệt mới tinh, giữ nguyên trang hiện tại.',
          'Đường dẫn tuyệt đối (Absolute URL): Chứa đầy đủ giao thức và tên miền (VD: `https://moet.gov.vn`). Dùng khi liên kết ra trang web bên ngoài.',
          'Đường dẫn tương đối (Relative URL): Trỏ đến tệp nằm trong cùng thư mục dự án (VD: `lienhe.html` hoặc `images/logo.png`). Dùng khi liên kết giữa các trang con trong cùng một website.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<p>Truy cập cổng thông tin chính thức:</p>
<a href="https://moet.gov.vn" target="_blank">
  Bộ Giáo dục và Đào tạo (Mở tab mới)
</a>
<br><br>
<a href="gioithieu.html">Trang Giới Thiệu Trường</a>`
        },
        emCanNho: [
          'Thẻ `<a>` biến chữ hoặc ảnh thành liên kết bấm được (Hyperlink).',
          'Đường dẫn tuyệt đối dùng cho link ngoài; đường dẫn tương đối dùng cho các trang nội bộ.',
          'Thêm `target="_blank"` để mở liên kết trên tab mới mà không làm mất trang cũ.'
        ]
      }
    ]
  },

  // Bài 9: Trình bày dữ liệu dạng danh sách và bảng trong HTML
  9: {
    objectives: [
      {
        id: 'obj_12_9_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cấu trúc Danh sách & Bảng HTML',
        description: 'Hiểu cấu trúc danh sách có thứ tự `<ol>`, không thứ tự `<ul>`, mục con `<li>` và các thẻ cấu thành bảng: `<table>`, `<tr>` (hàng), `<td>` (ô dữ liệu), `<th>` (ô tiêu đề).',
        iconName: 'Table'
      },
      {
        id: 'obj_12_9_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tạo danh sách nhiều cấp & bảng thời khóa biểu',
        description: 'Viết được bảng dữ liệu hoàn chỉnh có viền border, căn chỉnh và sử dụng thuộc tính gộp cột `colspan`, gộp hàng `rowspan` chuẩn xác.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_9_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tổ chức thông tin khoa học',
        description: 'Rèn luyện khả năng hệ thống hóa số liệu bảng biểu trực quan, giúp người xem dễ dàng tra cứu thông tin học tập.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_9_1',
        title: '1. Danh sách có thứ tự <ol> và không thứ tự <ul>',
        subtitle: 'Trình bày các gạch đầu dòng và các bước thực hiện tuần tự',
        iconName: 'ListOrdered',
        keyPoints: [
          'Danh sách không thứ tự `<ul>` (Unordered List): Dùng cho các mục có vai trò tương đương nhau, hiển thị dạng các dấu chấm tròn đầu dòng (Bullet). Mỗi mục con đặt trong thẻ `<li>` (List Item).',
          'Danh sách có thứ tự `<ol>` (Ordered List): Dùng cho quy trình các bước, bảng xếp hạng, hiển thị dạng số thứ tự 1, 2, 3... (Thuộc tính `type="A"` hoặc `type="I"` đổi sang chữ cái hoặc số La Mã).',
          'Danh sách lồng nhau (Nested List): Một danh sách con có thể được đặt bên trong một thẻ `<li>` của danh sách cha để tạo menu đa cấp.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<h3>Danh sách môn thi tốt nghiệp</h3>
<ul>
  <li>Toán học</li>
  <li>Ngữ văn</li>
  <li>Tin học ứng dụng</li>
</ul>

<h3>Các bước nộp bài:</h3>
<ol>
  <li>Hoàn thiện mã nguồn</li>
  <li>Kiểm thử chạy thử nghiệm</li>
  <li>Xuất bản lên website</li>
</ol>`
        },
        emCanNho: [
          '`<ul>` tạo danh sách dấu chấm tròn; `<ol>` tạo danh sách đánh số thứ tự 1, 2, 3.',
          'Mỗi mục trong danh sách bắt buộc đặt trong cặp thẻ `<li>...</li>`.',
          'Có thể lồng `<ul>` bên trong `<ol>` để tạo phân cấp mục con.'
        ]
      },
      {
        id: 'tab_12_9_2',
        title: '2. Bảng dữ liệu <table>, <tr>, <td>, <th>',
        subtitle: 'Cấu trúc ma trận hàng và cột chuẩn mực để trình bày số liệu',
        iconName: 'Table',
        keyPoints: [
          'Bộ 4 thẻ cấu thành bảng:',
          '  - `<table>`: Phần tử bao toàn bộ bảng.',
          '  - `<tr>` (Table Row): Tạo một hàng ngang trong bảng.',
          '  - `<th>` (Table Header): Ô tiêu đề cột (chữ tự động in đậm và căn giữa).',
          '  - `<td>` (Table Data): Ô chứa dữ liệu thông thường trong hàng.',
          'Thuộc tính gộp ô:',
          '  - `colspan="n"`: Gộp $n$ cột nằm ngang liền nhau thành 1 ô duy nhất.',
          '  - `rowspan="m"`: Gộp $m$ hàng dọc liên tiếp thành 1 ô duy nhất.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<table border="1" style="border-collapse: collapse; width: 100%;">
  <tr style="background: #f0f0f0;">
    <th>STT</th>
    <th>Môn Học</th>
    <th>Điểm TB</th>
  </tr>
  <tr>
    <td align="center">1</td>
    <td>Tin học 12</td>
    <td align="center">9.5</td>
  </tr>
  <tr>
    <td align="center">2</td>
    <td>Toán giải tích</td>
    <td align="center">9.0</td>
  </tr>
</table>`
        },
        emCanNho: [
          'Bảng gồm các hàng `<tr>`; mỗi hàng chứa các ô tiêu đề `<th>` hoặc ô dữ liệu `<td>`.',
          'Dùng `border="1"` để hiện đường viền bảng.',
          'Dùng `colspan` để gộp nhiều cột ngang; `rowspan` để gộp nhiều hàng dọc.'
        ]
      }
    ]
  },

  // Bài 10: Tạo biểu mẫu trong HTML
  10: {
    objectives: [
      {
        id: 'obj_10_10_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm biểu mẫu Form & thẻ <form>',
        description: 'Hiểu vai trò của Form trong việc thu thập thông tin người dùng gửi về máy chủ; nắm vững các thuộc tính `action` (địa chỉ nhận) và `method` (GET/POST).',
        iconName: 'FileText'
      },
      {
        id: 'obj_10_10_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Sử dụng các phần tử nhập liệu <input>',
        description: 'Xây dựng được form đăng ký hoàn chỉnh gồm các trường: input text, password, radio (chọn 1), checkbox (chọn nhiều), textarea (viết đoạn văn) và nút gửi submit.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_10_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo vệ dữ liệu cá nhân trên Form',
        description: 'Ý thức được sự bảo mật thông tin khi điền form trên mạng, nhận diện form lừa đảo và luôn sử dụng type="password" cho mật khẩu.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_10_1',
        title: '1. Khái niệm biểu mẫu (Form) và thẻ <form>',
        subtitle: 'Cổng tương tác hai chiều giữa người dùng và máy chủ web',
        iconName: 'FileText',
        keyPoints: [
          'Vai trò: Dùng để thu thập dữ liệu người dùng nhập vào (đăng ký tài khoản, đăng nhập, tìm kiếm, gửi phản hồi) để chuyển về máy chủ xử lý.',
          'Cú pháp thẻ form: `<form action="xuly.php" method="POST"> ... </form>`.',
          'Thuộc tính `action`: Đường dẫn đến tệp chương trình máy chủ sẽ nhận và xử lý dữ liệu gửi lên.',
          'Thuộc tính `method`:',
          '  - `GET`: Dữ liệu gửi đính kèm lộ rõ trên thanh địa chỉ URL của trình duyệt (thích hợp cho form tìm kiếm đơn giản).',
          '  - `POST`: Dữ liệu được đóng gói ẩn bên trong gói tin HTTP, bảo mật hơn nhiều (bắt buộc dùng cho form đăng nhập, mật khẩu, thông tin nhạy cảm).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng điền Form', desc: 'Nhập họ tên, email, mật khẩu trên trình duyệt' },
            { label: 'Phương thức POST an toàn', desc: 'Đóng gói dữ liệu bảo mật gửi qua mạng Internet' },
            { label: 'Máy chủ Web xử lý', desc: 'Lưu hồ sơ vào Cơ sở dữ liệu và trả kết quả thành công' }
          ]
        },
        emCanNho: [
          'Thẻ `<form>` bao quanh toàn bộ các ô nhập liệu và nút bấm.',
          'Thuộc tính `action` chỉ định nơi tiếp nhận dữ liệu trên máy chủ.',
          'Dùng `method="POST"` khi gửi thông tin nhạy cảm và mật khẩu.'
        ]
      },
      {
        id: 'tab_12_10_2',
        title: '2. Các phần tử nhập liệu: input, textarea, button',
        subtitle: 'Bộ sưu tập các công cụ thu nhận dữ liệu đa dạng',
        iconName: 'Sliders',
        keyPoints: [
          'Thẻ `<input type="...">` đa năng:',
          '  - `type="text"`: Ô nhập văn bản một dòng ngắn (Họ tên, Địa chỉ).',
          '  - `type="password"`: Ô nhập mật khẩu, tự động che giấu bằng các dấu chấm đen tròn.',
          '  - `type="radio"`: Nút chọn hình tròn chỉ cho phép CHỌN 1 TRONG NHIỀU phương án (các nút cùng nhóm phải có chung thuộc tính `name`).',
          '  - `type="checkbox"`: Ô vuông tích chọn cho phép CHỌN NHIỀU phương án cùng lúc.',
          '  - `type="submit"`: Nút bấm gửi dữ liệu form đi.',
          'Khung nhập nhiều dòng `<textarea rows="4" cols="30">`: Dùng cho nội dung dài như góp ý, tiểu sử.',
          'Menu thả xuống `<select>` và `<option>`: Chọn một mục trong danh sách sổ xuống (như chọn Tỉnh/Thành phố).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<form>
  <label>Họ và tên:</label><br>
  <input type="text" placeholder="Nhập họ tên..."><br><br>
  
  <label>Giới tính:</label>
  <input type="radio" name="gioitinh" checked> Nam
  <input type="radio" name="gioitinh"> Nữ<br><br>
  
  <label>Sở thích:</label>
  <input type="checkbox"> Lập trình
  <input type="checkbox"> Đồ họa<br><br>
  
  <button type="submit" style="background: #2563eb; color: white; padding: 6px 16px; border: none; border-radius: 4px;">Đăng Ký</button>
</form>`
        },
        emCanNho: [
          'Các nút chọn `radio` phải có cùng `name` để người dùng chỉ được chọn 1 phương án.',
          '`checkbox` cho phép chọn nhiều mục cùng lúc.',
          'Ô mật khẩu luôn phải đặt `type="password"` để che giấu ký tự bảo mật.'
        ]
      }
    ]
  }
};
