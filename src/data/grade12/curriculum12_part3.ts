import { LessonCurriculum12 } from './curriculum12';

export const GRADE_12_CURRICULUM_PART3: Record<number, LessonCurriculum12> = {
  // Bài 11: Chèn tệp đa phương tiện và khung nội tuyến vào trang web
  11: {
    objectives: [
      {
        id: 'obj_12_11_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các thẻ đa phương tiện HTML5 & iframe',
        description: 'Hiểu cú pháp thẻ `<audio>`, thẻ `<video>` cùng các thuộc tính `controls`, `autoplay`, `loop`; và thẻ `<iframe>` dùng để nhúng nội dung trang web khác hoặc video YouTube.',
        iconName: 'Video'
      },
      {
        id: 'obj_12_11_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Chèn video & nhúng bản đồ, YouTube',
        description: 'Chèn được tệp video MP4 phát trực tiếp trên trang web và nhúng được video YouTube hoặc bản đồ Google Maps bằng thẻ iframe.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_11_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền đa phương tiện',
        description: 'Ý thức sử dụng video, âm nhạc có bản quyền hợp pháp và không nhúng nội dung phản cảm, độc hại vào trang web.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_11_1',
        title: '1. Thẻ chèn âm thanh <audio> và thuộc tính controls',
        subtitle: 'Tích hợp trình phát nhạc trực tiếp không cần cài thêm plugin',
        iconName: 'Volume2',
        keyPoints: [
          'Thẻ `<audio>`: Dùng để nhúng âm thanh (.mp3, .wav, .ogg) vào trang web.',
          'Thuộc tính quan trọng: `controls` (hiển thị nút Play, âm lượng), `autoplay` (tự động phát), `loop` (phát lặp lại).',
          'Cú pháp chuẩn đa định dạng:',
          '  `<audio controls>`',
          '    `<source src="baihat.mp3" type="audio/mpeg">`',
          '    `Trình duyệt của bạn không hỗ trợ thẻ audio.`',
          '  `</audio>`'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<h3>Nghe nhạc tuổi học trò</h3>
<audio controls style="width: 100%;">
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Trình duyệt không hỗ trợ phát âm thanh.
</audio>`
        },
        emCanNho: [
          'Luôn thêm thuộc tính `controls` vào thẻ `<audio>` để người dùng có nút bấm nghe.',
          'Định dạng MP3 được hỗ trợ tốt nhất trên mọi trình duyệt.',
          'Dòng văn bản bên trong `<audio>` là lời cảnh báo nếu trình duyệt quá cũ.'
        ]
      },
      {
        id: 'tab_12_11_2',
        title: '2. Thẻ chèn video <video> và nhúng video từ YouTube (iframe)',
        subtitle: 'Chiếu phim sắc nét và tích hợp nội dung số bên ngoài',
        iconName: 'Video',
        keyPoints: [
          'Thẻ `<video>`: Dùng thuộc tính `controls`, `width`, `height`, `poster` (ảnh thu nhỏ đại diện). Định dạng chuẩn nhất là `.mp4`.',
          'Khung nội tuyến `<iframe>` (Inline Frame): Nhúng nguyên một cửa sổ trang web khác hoặc video từ nền tảng khác vào trang web của mình.',
          'Nhúng video YouTube bằng iframe: Vào YouTube -> bấm nút "Chia sẻ" -> chọn "Nhúng" (Embed) -> sao chép mã `<iframe ...></iframe>`.',
          'Nhúng bản đồ Google Maps: Tương tự, dùng tính năng chia sẻ bản đồ dạng nhúng để hiển thị vị trí trường học trên trang liên hệ.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<h3>Video bài giảng Tin học 12</h3>
<iframe width="100%" height="220" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video" 
        frameborder="0" 
        allowfullscreen>
</iframe>`
        },
        emCanNho: [
          'Dùng thẻ `<video controls>` để chèn video MP4 lưu trữ cục bộ.',
          'Dùng `<iframe>` để nhúng video YouTube hoặc bản đồ Google Maps thuận tiện.',
          'Nhúng qua YouTube giúp tiết kiệm dung lượng máy chủ lưu trữ trang web.'
        ]
      }
    ]
  },

  // Bài 12: Làm quen với Cascading Style Sheets (CSS)
  12: {
    objectives: [
      {
        id: 'obj_12_12_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm CSS & 3 cách chèn CSS',
        description: 'Hiểu CSS (Cascading Style Sheets) là ngôn ngữ định kiểu trang trí giao diện; phân biệt 3 cách chèn CSS: Inline (nội dòng), Internal (trong thẻ `<style>`), External (tệp `.css` ngoài).',
        iconName: 'Palette'
      },
      {
        id: 'obj_12_12_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết bộ chọn (Selector) & thuộc tính CSS',
        description: 'Viết được bộ chọn theo tên thẻ (`h1`), theo lớp class (`.card`) và theo định danh id (`#header`); thay đổi màu chữ `color`, màu nền `background-color`, cỡ chữ `font-size`.',
        iconName: 'Code'
      },
      {
        id: 'obj_12_12_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tách biệt nội dung & hình thức',
        description: 'Hiểu rõ giá trị của việc tách biệt nội dung (HTML) khỏi giao diện (CSS) để trang web sáng sủa, dễ dàng thay đổi giao diện đồng loạt.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_12_1',
        title: '1. Khái niệm CSS và cách chèn CSS vào trang web',
        subtitle: 'Khoác áo mới thời trang rực rỡ cho bộ xương HTML',
        iconName: 'Palette',
        keyPoints: [
          'Khái niệm: CSS (Cascading Style Sheets) định dạng cách hiển thị của phần tử HTML.',
          'Ba cách chèn CSS:',
          '  1. Inline CSS: Viết trong thuộc tính `style` của thẻ.',
          '  2. Internal CSS: Viết trong thẻ `<style>` đặt ở phần `<head>`.',
          '  3. External CSS: Viết trong tệp `.css` riêng và liên kết bằng `<link rel="stylesheet" href="style.css">`.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Cách chèn CSS', 'Cú pháp thực hiện', 'Ưu/Nhược điểm & Khuyên dùng'],
          rows: [
            ['Inline CSS', 'Viết trong thuộc tính style="..."', 'Nhanh nhưng rối mã, chỉ dùng sửa tạm 1 chỗ'],
            ['Internal CSS', 'Viết trong thẻ <style> ở <head>', 'Tốt cho trang đơn lẻ độc lập'],
            ['External CSS', 'Tệp riêng .css + thẻ <link>', 'Chuẩn công nghiệp, tái sử dụng trên toàn website']
          ]
        },
        emCanNho: [
          'HTML tạo cấu trúc nội dung; CSS trang trí màu sắc và giao diện.',
          'Ưu tiên dùng External CSS (liên kết qua thẻ `<link>`) để code chuyên nghiệp.',
          'Một thay đổi trong tệp `.css` sẽ tự động cập nhật cho toàn bộ các trang web.'
        ]
      },
      {
        id: 'tab_12_12_2',
        title: '2. Cú pháp bộ chọn (Selector) và thuộc tính CSS cơ bản',
        subtitle: 'Nhắm trúng đối tượng cần trang trí bằng bộ chọn Selector',
        iconName: 'Code',
        keyPoints: [
          'Cú pháp: `Bộ_chọn { Thuộc_tính: Giá_trị; }`.',
          'Ba bộ chọn cơ bản: Thẻ (`p`), Lớp (`.class`), Định danh (`#id`).',
          'Các thuộc tính cơ bản: `color`, `background-color`, `font-size`, `text-align`.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<style>
  .tieu-de {
    color: #2563eb;
    font-size: 22px;
    text-align: center;
  }
  .the-bai-viet {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    padding: 16px;
  }
</style>

<div class="the-bai-viet">
  <h2 class="tieu-de">Bài Viết Nổi Bật</h2>
  <p>Nội dung được định kiểu bằng bộ chọn lớp Class CSS.</p>
</div>`
        },
        emCanNho: [
          'Bộ chọn thẻ: `tên_thẻ`; Bộ chọn lớp: `.tên_class`; Bộ chọn ID: `#tên_id`.',
          'Mỗi quy tắc CSS gồm cặp `thuộc_tính: giá_trị;`, kết thúc bằng dấu chấm phẩy `;`.',
          'Đặt tên class bằng chữ không dấu, dùng dấu gạch ngang (kebab-case).'
        ]
      }
    ]
  },

  // Bài 13: Định dạng màu sắc và font chữ trong CSS
  13: {
    objectives: [
      {
        id: 'obj_12_13_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Màu sắc, Font chữ & Mô hình hộp (Box Model)',
        description: 'Hiểu các hệ màu trong CSS (HEX, RGB, HSL); nắm vững 4 lớp cấu thành Mô hình hộp (Box Model): Content, Padding, Border, Margin.',
        iconName: 'Box'
      },
      {
        id: 'obj_12_13_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Căn chỉnh khoảng cách Box Model hoàn hảo',
        description: 'Sử dụng thành thạo `margin` và `padding` để tạo khoảng cách thông thoáng cho các khối thẻ card, nhúng font chữ Google Fonts tiếng Việt đẹp mắt.',
        iconName: 'Layout'
      },
      {
        id: 'obj_12_13_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cảm quan thị giác hiện đại',
        description: 'Rèn luyện mắt thẩm mỹ tinh tế: không dùng quá 3 màu sắc và 2 kiểu font chữ trên một trang web để giữ vẻ trang nhã, dễ đọc.',
        iconName: 'Eye'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_13_1',
        title: '1. Định dạng màu sắc và font chữ trong CSS',
        subtitle: 'Kho màu sắc phong phú và nghệ thuật chữ Typography',
        iconName: 'Palette',
        keyPoints: [
          'Biểu diễn màu: Tên màu (`red`), HEX (`#2563eb`), RGB (`rgb(37, 99, 235)`).',
          'Thuộc tính font: `font-family` (họ font), `font-weight` (độ đậm), `line-height` (độ giãn dòng 1.5 - 1.6).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #334155;">
  <h2 style="color: #0f172a; font-weight: bold;">Tiêu Đề Đậm Nét</h2>
  <p style="color: #64748b;">Đoạn văn có màu xám hiện đại, độ giãn dòng 1.6 giúp người đọc không bị mỏi mắt.</p>
</div>`
        },
        emCanNho: [
          'Dùng mã màu HEX (`#hex`) để chọn chính xác tông màu thương hiệu.',
          'Khai báo danh sách font dự phòng trong thuộc tính `font-family`.',
          'Đặt `line-height: 1.5` để tăng cường độ dễ đọc cho bài viết.'
        ]
      },
      {
        id: 'tab_12_13_2',
        title: '2. Mô hình hộp (Box Model): margin, border, padding, content',
        subtitle: 'Trụ cột định hình kích thước và khoảng cách trong thế giới web',
        iconName: 'Box',
        keyPoints: [
          'Box Model gồm 4 lớp từ trong ra ngoài: Content -> Padding -> Border -> Margin.',
          'Padding: Đệm bên trong viền. Margin: Lề khoảng cách bên ngoài viền.',
          'Quy tắc chiều kim đồng hồ: Trên - Phải - Dưới - Trái.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thành phần Box Model', 'Vị trí', 'Hiệu ứng thị giác'],
          rows: [
            ['Content', 'Lõi trong cùng', 'Hiển thị chữ, hình ảnh thực tế'],
            ['Padding', 'Đệm quanh nội dung', 'Giúp chữ không bị dính sát vào mép viền'],
            ['Border', 'Đường viền ngăn cách', 'Kẻ khung viền bao quanh khối'],
            ['Margin', 'Lề trống ngoài cùng', 'Đẩy các khối lân cận ra xa nhau']
          ]
        },
        emCanNho: [
          'Mô hình hộp gồm 4 lớp: Content -> Padding -> Border -> Margin.',
          '`Padding` là đệm trong viền; `Margin` là khoảng cách ngoài viền.',
          'Thiết lập `box-sizing: border-box;` giúp tính toán kích thước hộp chuẩn xác.'
        ]
      }
    ]
  },

  // Bài 14: Định dạng bố cục trang web
  14: {
    objectives: [
      {
        id: 'obj_12_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các mô hình bố cục hiện đại: Flexbox & Grid',
        description: 'Hiểu nguyên lý dàn trang linh hoạt với CSS Flexbox (trục chính Main Axis, trục phụ Cross Axis) và CSS Grid 2 chiều.',
        iconName: 'Layout'
      },
      {
        id: 'obj_12_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết kế thanh điều hướng Navbar & lưới bài viết',
        description: 'Sử dụng thành thạo `display: flex;`, `justify-content`, `align-items` để xây dựng thanh điều hướng (Navbar) chuyên nghiệp và bố cục lưới bài viết nhiều cột.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tổ chức giao diện công thái học',
        description: 'Ý thức thiết kế thanh điều hướng rõ ràng, trực quan giúp người dùng dễ dàng tìm kiếm thông tin trên trang web trường học.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_14_1',
        title: '1. Bố cục trang web với Flexbox/Grid',
        subtitle: 'Khai tử kỹ thuật dàn trang float lỗi thời bằng Flexbox một chiều linh hoạt',
        iconName: 'Layout',
        keyPoints: [
          'CSS Flexbox kích hoạt bằng `display: flex;` trên phần tử cha.',
          'Thuộc tính căn chỉnh: `justify-content` (trục ngang), `align-items` (trục đứng), `gap` (khoảng cách giữa các cột).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<div style="display: flex; justify-content: space-between; gap: 12px;">
  <div style="flex: 1; background: #e0e7ff; padding: 16px; border-radius: 6px; text-align: center;">Cột 1: Tin Tức</div>
  <div style="flex: 1; background: #dbeafe; padding: 16px; border-radius: 6px; text-align: center;">Cột 2: Đào Tạo</div>
  <div style="flex: 1; background: #e0f2fe; padding: 16px; border-radius: 6px; text-align: center;">Cột 3: Hoạt Động</div>
</div>`
        },
        emCanNho: [
          'Khai báo `display: flex;` trên phần tử cha để biến các con thành hàng ngang.',
          'Dùng `justify-content: space-between;` để dãn đều các mục hai đầu.',
          'Dùng `align-items: center;` để căn giữa các phần tử theo trục dọc.'
        ]
      },
      {
        id: 'tab_12_14_2',
        title: '2. Thiết kế thanh điều hướng (Navigation Bar) đa cấp',
        subtitle: 'Xây dựng chiếc la bàn định hướng cho toàn bộ website',
        iconName: 'Navigation',
        keyPoints: [
          'Cấu trúc Navbar: Logo bên trái, Menu liên kết bên phải.',
          'Sử dụng `display: flex; justify-content: space-between; align-items: center;` và hiệu ứng di chuột `a:hover`.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<nav style="display: flex; justify-content: space-between; align-items: center; background: #1e293b; padding: 12px 24px; border-radius: 8px;">
  <div style="color: #38bdf8; font-weight: bold; font-size: 18px;">THPT ABC</div>
  <div style="display: flex; gap: 16px;">
    <a href="#" style="color: white; text-decoration: none;">Trang Chủ</a>
    <a href="#" style="color: #94a3b8; text-decoration: none;">Giới Thiệu</a>
    <a href="#" style="color: #94a3b8; text-decoration: none;">Tuyển Sinh</a>
  </div>
</nav>`
        },
        emCanNho: [
          'Thanh điều hướng là cửa sổ định hướng người dùng chuyển trang.',
          'Kết hợp `display: flex;` với `gap` để tạo khoảng cách menu đồng đều.',
          'Sử dụng các thẻ ngữ nghĩa `<nav>`, `<header>` theo chuẩn SEO W3C.'
        ]
      }
    ]
  },

  // Bài 15: Thiết kế giao diện thích ứng (Responsive Web Design)
  15: {
    objectives: [
      {
        id: 'obj_12_15_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm Responsive & thẻ meta viewport',
        description: 'Hiểu nguyên lý thiết kế giao diện thích ứng Responsive Web Design: trang web tự động co giãn hiển thị hoàn hảo trên mọi kích thước màn hình; hiểu vai trò của thẻ `<meta name="viewport">`.',
        iconName: 'Smartphone'
      },
      {
        id: 'obj_12_15_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết truy vấn Media Queries (@media)',
        description: 'Sử dụng thành thạo cú pháp `@media (max-width: 768px)` để chuyển đổi bố cục từ nhiều cột trên máy tính thành một cột đơn trên điện thoại di động.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_15_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Triết lý Mobile-First hiện đại',
        description: 'Ưu tiên trải nghiệm người dùng trên điện thoại di động vì hơn 70% lưu lượng truy cập web ngày nay đến từ các thiết bị cầm tay.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_15_1',
        title: '1. Khái niệm thiết kế thích ứng (Responsive Web Design)',
        subtitle: 'Một trang web - Hiển thị hoàn hảo trên mọi màn hình',
        iconName: 'Smartphone',
        keyPoints: [
          'Responsive Web Design giúp trang web tự động co giãn theo kích thước màn hình.',
          'Thẻ Viewport bắt buộc trong `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Máy tính (Desktop)', desc: 'Bố cục 3-4 cột rộng rãi' },
            { label: 'Máy tính bảng (Tablet)', desc: 'Bố cục tự co lại thành 2 cột' },
            { label: 'Điện thoại (Mobile)', desc: 'Các cột tự xếp chồng thành 1 cột dọc' }
          ]
        },
        emCanNho: [
          'Responsive Web Design giúp trang web thích ứng với mọi kích cỡ màn hình.',
          'Bắt buộc phải có thẻ `<meta name="viewport">` trong phần `<head>`.',
          'Sử dụng đơn vị linh hoạt (% hoặc rem) thay vì đơn vị cứng px cố định.'
        ]
      },
      {
        id: 'tab_12_15_2',
        title: '2. Kỹ thuật Media Queries điều chỉnh giao diện trên điện thoại và máy tính',
        subtitle: 'Chiếc chìa khóa thần kỳ của CSS Responsive',
        iconName: 'Code',
        keyPoints: [
          'Media Queries (`@media`): Áp dụng CSS khi màn hình thỏa mãn điều kiện kích thước.',
          'Cú pháp: `@media (max-width: 768px) { .bo-cuc { flex-direction: column; } }`.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<style>
  .hop-container {
    display: flex;
    gap: 10px;
  }
  .hop-con {
    flex: 1;
    background: #38bdf8;
    color: white;
    padding: 16px;
    text-align: center;
    border-radius: 6px;
  }
  @media (max-width: 600px) {
    .hop-container {
      flex-direction: column;
    }
  }
</style>

<div class="hop-container">
  <div class="hop-con">Khối Nội Dung 1</div>
  <div class="hop-con">Khối Nội Dung 2</div>
</div>`
        },
        emCanNho: [
          'Cú pháp `@media (max-width: 768px)` để tùy chỉnh giao diện trên màn hình nhỏ.',
          'Chuyển `flex-direction: column;` để các cột xếp chồng thành hàng dọc trên điện thoại.',
          'Bấm `F12` trên trình duyệt và bật chế độ Toggle Device Toolbar để kiểm thử giao diện di động.'
        ]
      }
    ]
  },

  // Bài 16: Định dạng văn bản và tạo siêu liên kết cho trang web
  16: {
    objectives: [
      {
        id: 'obj_12_16_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình lập kế hoạch website & Sitemap',
        description: 'Nắm vững các bước chuẩn bị dự án web: xác định mục tiêu trang web, đối tượng người xem, lập sơ đồ cấu trúc trang (Sitemap) và chuẩn bị tài nguyên.',
        iconName: 'Workflow'
      },
      {
        id: 'obj_12_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thu thập & xử lý tài nguyên đa phương tiện',
        description: 'Thu thập, biên tập hình ảnh (dùng GIMP cắt cúp, nén nhẹ), soạn thảo nội dung văn bản cho trang web giới thiệu câu lạc bộ trường học.',
        iconName: 'Folder'
      },
      {
        id: 'obj_12_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong chuẩn bị chu đáo',
        description: 'Rèn luyện thói quen lập kế hoạch chi tiết trước khi gõ mã, không làm việc tùy tiện, tự phát.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_16_1',
        title: '1. Lập kế hoạch và thiết kế sơ đồ trang web (Sitemap)',
        subtitle: 'Bản vẽ kiến trúc trước khi đặt những viên gạch HTML đầu tiên',
        iconName: 'Workflow',
        keyPoints: [
          'Sơ đồ trang web (Sitemap): Cấu trúc hình cây thể hiện mối liên kết giữa trang chủ (`index.html`) và các trang con (`gioithieu.html`, `lienhe.html`).',
          'Thiết kế Wireframe: Phác thảo vị trí đặt Header, Navbar, Banner, Khối nội dung chính và Footer trên giấy.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Trang Chủ (index.html)', desc: 'Cửa ngõ chính dẫn đến các chuyên mục' },
            { label: 'Trang Giới Thiệu (gioithieu.html)', desc: 'Lịch sử phát triển và đội ngũ giáo viên' },
            { label: 'Trang Liên Hệ (lienhe.html)', desc: 'Biểu mẫu góp ý và bản đồ trường' }
          ]
        },
        emCanNho: [
          'Trang chủ của website luôn phải đặt tên tệp là `index.html`.',
          'Lập sơ đồ cây Sitemap giúp liên kết giữa các trang mạch lạc, không bị gãy link.',
          'Phác thảo bố cục Wireframe trước khi viết mã HTML/CSS.'
        ]
      },
      {
        id: 'tab_12_16_2',
        title: '2. Thu thập và chuẩn bị tài nguyên (ảnh, nội dung) cho trang web trường học',
        subtitle: 'Tổ chức kho nguyên liệu số ngăn nắp, khoa học',
        iconName: 'Folder',
        keyPoints: [
          'Cấu trúc thư mục chuẩn: HTML ở gốc, `css/` chứa CSS, `images/` chứa ảnh.',
          'Tối ưu dung lượng hình ảnh: Nén ảnh dưới 500KB để trang web tải nhanh.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Loại tài nguyên', 'Thư mục lưu trữ', 'Yêu cầu tối ưu chuẩn web'],
          rows: [
            ['Trang web HTML', 'Thư mục gốc dự án', 'Đặt tên tiếng Việt không dấu (index.html, lienhe.html)'],
            ['Bảng kiểu CSS', 'Thư mục css/', 'Tệp style.css viết theo chuẩn BEM/CSS3'],
            ['Hình ảnh', 'Thư mục images/', 'Nén dung lượng < 500KB, định dạng JPG/PNG/WebP']
          ]
        },
        emCanNho: [
          'Tổ chức thư mục dự án gồm các tệp HTML ở gốc, CSS và Images ở thư mục con.',
          'Đặt tên tệp không dấu, không dấu cách, dùng dấu gạch ngang.',
          'Tối ưu dung lượng ảnh trước khi chèn vào trang web để tăng tốc độ tải trang.'
        ]
      }
    ]
  },

  // Bài 17: Thực hành tạo trang web
  17: {
    objectives: [
      {
        id: 'obj_12_17_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình ghép nối HTML và CSS hoàn chỉnh',
        description: 'Vận dụng toàn diện các thẻ ngữ nghĩa HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) và liên kết tệp `style.css` tạo thành một website hoàn chỉnh.',
        iconName: 'Code'
      },
      {
        id: 'obj_12_17_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Lập trình trang web đa trang & kiểm thử trình duyệt',
        description: 'Viết mã cho trang chủ và 2 trang con liên kết thông suốt; kiểm thử hiển thị trên các trình duyệt Chrome, Edge, Safari và thiết bị di động.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_17_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tính tỉ mỉ và trách nhiệm sản phẩm',
        description: 'Kiểm tra kỹ lưỡng từng đường link, lỗi chính tả và lỗi hiển thị trước khi bàn giao sản phẩm website cho lớp học.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_17_1',
        title: '1. Viết mã HTML/CSS cho trang chủ và các trang con',
        subtitle: 'Hiện thực hóa bản thiết kế thành trang web sống động',
        iconName: 'Code',
        keyPoints: [
          'Dùng các thẻ ngữ nghĩa HTML5: `<header>`, `<nav>`, `<main>`, `<footer>`.',
          'Đồng bộ thanh menu và chân trang trên tất cả các trang con; chỉ thay đổi nội dung trong thẻ `<main>`.'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<header style="background: #1e3a8a; color: white; padding: 16px; text-align: center;">
  <h1>ĐOÀN TRƯỜNG THPT NGUYỄN DU</h1>
</header>
<nav style="background: #2563eb; padding: 10px; display: flex; gap: 15px; justify-content: center;">
  <a href="index.html" style="color: white; text-decoration: none; font-weight: bold;">Trang Chủ</a>
  <a href="gioithieu.html" style="color: #bfdbfe; text-decoration: none;">Giới Thiệu</a>
</nav>
<main style="padding: 20px; font-family: sans-serif;">
  <h2>Tin Mới: Khai Mạc Giải Bóng Đá Học Sinh 2026</h2>
  <p>Hội thao diễn ra sôi nổi với sự tham gia của 30 chi đoàn.</p>
</main>
<footer style="background: #0f172a; color: #94a3b8; text-align: center; padding: 12px; font-size: 14px;">
  &copy; 2026 Bản quyền thuộc Đoàn trường THPT Nguyễn Du
</footer>`
        },
        emCanNho: [
          'Dùng các thẻ ngữ nghĩa HTML5: `<header>`, `<nav>`, `<main>`, `<footer>`.',
          'Giữ phần đầu trang và chân trang đồng bộ trên toàn bộ các trang con.',
          'Liên kết tệp `style.css` vào thẻ `<head>` của từng trang web.'
        ]
      },
      {
        id: 'tab_12_17_2',
        title: '2. Kiểm thử hiển thị trên các trình duyệt khác nhau',
        subtitle: 'Đảm bảo tính tương thích chéo trình duyệt (Cross-browser Compatibility)',
        iconName: 'CheckCircle',
        keyPoints: [
          'Kiểm thử trên Chrome, Edge, Safari và giao diện Mobile bằng phím F12.',
          'Bấm thử từng đường link để đảm bảo không bị lỗi 404.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Hạng mục kiểm thử', 'Cách kiểm tra', 'Tiêu chuẩn đạt yêu cầu'],
          rows: [
            ['Tương thích trình duyệt', 'Mở trên Chrome, Edge, Firefox', 'Giao diện hiển thị giống hệt nhau 100%'],
            ['Thích ứng di động', 'F12 xem giả lập màn hình 375px', 'Không bị thanh cuộn ngang, chữ đọc rõ ràng'],
            ['Tính toàn vẹn link', 'Bấm thử mọi menu và nút bấm', 'Tất cả các trang chuyển mượt, không lỗi 404']
          ]
        },
        emCanNho: [
          'Nhấn `F12` để kiểm thử giao diện di động trên trình duyệt.',
          'Kiểm tra kỹ lưỡng tính tương thích trên Chrome, Edge, Firefox.',
          'Sửa sạch các liên kết bị gãy trước khi xuất bản trang web.'
        ]
      }
    ]
  },

  // Bài 18: Xuất bản trang web
  18: {
    objectives: [
      {
        id: 'obj_12_18_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm Hosting & Tên miền (Domain)',
        description: 'Hiểu nguyên lý xuất bản web: Tên miền (Domain Name) là địa chỉ định danh trang web; Dịch vụ lưu trữ (Web Hosting) là máy chủ lưu trữ tệp để mọi người truy cập 24/7.',
        iconName: 'Globe'
      },
      {
        id: 'obj_12_18_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Đưa website lên GitHub Pages / Netlify',
        description: 'Thực hiện được việc tải mã nguồn lên kho chứa GitHub và kích hoạt tính năng GitHub Pages để trang web có địa chỉ URL công khai trên Internet.',
        iconName: 'UploadCloud'
      },
      {
        id: 'obj_12_18_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Trách nhiệm thông tin khi xuất bản toàn cầu',
        description: 'Nhận thức sâu sắc rằng khi trang web xuất bản lên Internet thì cả thế giới đều có thể xem được, do đó nội dung phải luôn chuẩn mực, tuân thủ pháp luật.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_18_1',
        title: '1. Xuất bản website lên dịch vụ lưu trữ miễn phí (GitHub Pages / Netlify)',
        subtitle: 'Đưa đứa con tinh thần từ máy tính cá nhân ra không gian mạng toàn cầu',
        iconName: 'UploadCloud',
        keyPoints: [
          'Web Hosting: Máy chủ chạy 24/7 lưu trữ tệp web.',
          'Các bước đẩy web lên GitHub Pages: Đẩy code lên Repo -> Vào Settings -> Pages -> Chọn nhánh main -> Nhận link `https://username.github.io/repo`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Mã nguồn trên máy tính', desc: 'Kiểm tra tệp index.html hoạt động tốt' },
            { label: '2. Tải lên GitHub Repository', desc: 'Đưa toàn bộ tệp HTML, CSS, ảnh lên kho chứa' },
            { label: '3. Kích hoạt GitHub Pages', desc: 'Nhận địa chỉ website https://...github.io miễn phí' }
          ]
        },
        emCanNho: [
          'Tệp trang chủ bắt buộc phải đặt tên là `index.html` ở thư mục gốc.',
          'GitHub Pages cấp hosting miễn phí trọn đời có chứng chỉ bảo mật HTTPS.',
          'Đường link trang web có thể chia sẻ cho bạn bè và thầy cô cùng truy cập.'
        ]
      },
      {
        id: 'tab_12_18_2',
        title: '2. Đánh giá và bảo trì trang web sau khi xuất bản',
        subtitle: 'Duy trì sức sống và sự an toàn lâu dài cho website',
        iconName: 'CheckCircle',
        keyPoints: [
          'Cập nhật nội dung thường xuyên, kiểm tra liên kết hỏng, sao lưu mã nguồn định kỳ.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Công việc bảo trì', 'Tần suất', 'Mục đích duy trì'],
          rows: [
            ['Cập nhật bài viết mới', 'Hàng tuần', 'Giữ cho website luôn mới mẻ, thu hút bạn đọc'],
            ['Kiểm tra liên kết hỏng', 'Hàng tháng', 'Đảm bảo người dùng không bấm vào link lỗi 404'],
            ['Sao lưu mã nguồn', 'Sau mỗi lần sửa lớn', 'Lưu bản sao dự phòng trên máy tính cá nhân']
          ]
        },
        emCanNho: [
          'Website cần được cập nhật nội dung thường xuyên để duy trì sức hút.',
          'Kiểm tra tốc độ tải trang bằng công cụ trực tuyến.',
          'Luôn lưu trữ bản sao lưu mã nguồn trên máy tính trước khi cập nhật lên mạng.'
        ]
      }
    ]
  },

  // Bài 19: Dịch vụ thông tin trên mạng Internet
  19: {
    objectives: [
      {
        id: 'obj_12_19_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các hình thức giao tiếp không gian mạng',
        description: 'Trình bày được các hình thức giao tiếp số: Thư điện tử (Email), Mạng xã hội, Ứng dụng họp trực tuyến, Diễn đàn trao đổi học thuật.',
        iconName: 'MessageSquare'
      },
      {
        id: 'obj_12_19_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hành văn hóa ứng xử số Netiquette',
        description: 'Áp dụng được các quy tắc ứng xử văn minh (Netiquette) khi gửi email xin tài liệu cho thầy cô, tranh luận lịch sự trên mạng xã hội.',
        iconName: 'Smile'
      },
      {
        id: 'obj_12_19_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Xây dựng môi trường mạng nhân văn',
        description: 'Nói KHÔNG với bắt nạt qua mạng (Cyberbullying), kiên quyết không dùng lời lẽ thô tục, xúc phạm người khác trên không gian mạng.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_19_1',
        title: '1. Khái niệm và các hình thức giao tiếp trong không gian mạng',
        subtitle: 'Thế giới phẳng xóa nhòa mọi rào cản địa lý',
        iconName: 'MessageSquare',
        keyPoints: [
          'Các kênh giao tiếp chính: Email (trang trọng), Tin nhắn nhanh (hàng ngày), Mạng xã hội (cộng đồng), Họp trực tuyến Zoom/Teams (tương tác trực tiếp).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Phương tiện', 'Tính chất giao tiếp', 'Tình huống phù hợp'],
          rows: [
            ['Thư điện tử (Email)', 'Trang trọng, lưu vết lâu dài', 'Nộp bài tập, gửi thư xin việc, liên hệ thầy cô'],
            ['Tin nhắn tức thời', 'Nhanh chóng, tức thời', 'Trao đổi việc gấp trong nhóm bạn cùng lớp'],
            ['Họp trực tuyến', 'Tương tác đa chiều trực tiếp', 'Buổi học online, thảo luận chuyên đề nhóm']
          ]
        },
        emCanNho: [
          'Chọn đúng kênh giao tiếp phù hợp với đối tượng và mục đích.',
          'Email là kênh giao tiếp chuẩn mực, trang trọng trong học tập và công việc.',
          'Bảo mật thông tin cá nhân khi tham gia các hội nhóm mạng xã hội.'
        ]
      },
      {
        id: 'tab_12_19_2',
        title: '2. Quy tắc ứng xử nhân văn, lịch sự và văn hóa số',
        subtitle: 'Bộ quy tắc vàng Netiquette của công dân số thế kỷ 21',
        iconName: 'Heart',
        keyPoints: [
          'Quy tắc Netiquette: Không gõ toàn chữ hoa, viết email có đầu có đuôi, tranh luận văn minh bằng dẫn chứng số liệu, nói KHÔNG với Cyberbullying.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tôn trọng người khác', desc: 'Nhớ rằng phía sau màn hình là một con người bằng xương bằng thịt' },
            { label: 'Soạn thảo chỉn chu', desc: 'Viết đúng chính tả, lời lẽ trang nhã, có đầu có cuối' },
            { label: 'Nói KHÔNG với Cyberbullying', desc: 'Bảo vệ bản thân và bạn bè trước các hành vi bắt nạt qua mạng' }
          ]
        },
        emCanNho: [
          'Luôn đối xử với người khác trên mạng như cách bạn muốn được đối xử ngoài đời.',
          'Không gõ chữ in hoa toàn bộ nội dung tin nhắn.',
          'Kiên quyết lên án và báo cáo các hành vi bắt nạt, lăng mạ trên mạng xã hội.'
        ]
      }
    ]
  },

  // Bài 20: Pháp luật và an toàn thông tin
  20: {
    objectives: [
      {
        id: 'obj_12_20_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Luật An ninh mạng & các hành vi vi phạm',
        description: 'Trình bày được các điều khoản cơ bản của Luật An ninh mạng Việt Nam; nhận diện được các hành vi vi phạm pháp luật (tán phát tin giả, vu khống, tấn công mạng).',
        iconName: 'Scale'
      },
      {
        id: 'obj_12_20_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xử lý tình huống pháp lý số',
        description: 'Biết cách ứng xử đúng luật khi gặp thông tin sai sự thật trên mạng: không bấm like/share tin giả, lưu giữ bằng chứng và báo cáo cơ quan chức năng.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_12_20_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức thượng tôn pháp luật số',
        description: 'Có thái độ nghiêm túc tuân thủ pháp luật trên không gian mạng, chịu trách nhiệm hoàn toàn về mọi phát ngôn và hành vi số của mình.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_20_1',
        title: '1. Các hành vi vi phạm pháp luật trên không gian mạng',
        subtitle: 'Không gian mạng là không gian thực: Mọi hành vi đều chịu chế tài pháp lý',
        iconName: 'AlertOctagon',
        keyPoints: [
          'Các hành vi vi phạm: Phát tán tin giả (Fake News), xúc phạm danh dự bôi nhọ cá nhân, hack tài khoản mạng xã hội, lừa đảo tài chính qua mạng.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Hành vi vi phạm', 'Hậu quả thực tế', 'Chế tài xử lý pháp luật'],
          rows: [
            ['Chia sẻ tin giả, tin sai sự thật', 'Gây hoang mang xã hội, hại uy tín', 'Phạt tiền từ 10 - 20 triệu đồng'],
            ['Bôi nhọ, xúc phạm danh dự', 'Làm tổn thương tinh thần nạn nhân', 'Phạt tiền và bồi thường danh dự'],
            ['Tấn công hack hệ thống mạng', 'Làm tê liệt hạ tầng công nghệ', 'Xử lý hình sự, phạt tù nghiêm minh']
          ]
        },
        emCanNho: [
          'Không gian mạng được điều chỉnh chặt chẽ bởi pháp luật hình sự và dân sự.',
          'Chia sẻ tin giả (kể cả chỉ ấn nút Share) đều bị xử phạt hành chính nghiêm khắc.',
          'Chịu trách nhiệm hoàn toàn về mọi dấu chân kỹ thuật số (Digital Footprint) của mình.'
        ]
      },
      {
        id: 'tab_12_20_2',
        title: '2. Luật An ninh mạng và trách nhiệm pháp lý của công dân',
        subtitle: 'Lá chắn pháp lý bảo vệ chủ quyền quốc gia và trật tự an toàn xã hội số',
        iconName: 'Scale',
        keyPoints: [
          'Luật An ninh mạng (hiệu lực từ 01/01/2019) bảo vệ an ninh quốc gia và trật tự an toàn số.',
          'Đầu số 156 / 5656 tiếp nhận phản ánh cuộc gọi và tin nhắn lừa đảo.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Luật An ninh mạng', desc: 'Khung pháp lý cao nhất điều chỉnh hành vi trên Internet' },
            { label: 'Trách nhiệm công dân', desc: 'Kiểm chứng tin trước khi chia sẻ, bảo vệ tài khoản' },
            { label: 'Đường dây nóng 156', desc: 'Tiếp nhận phản ánh lừa đảo và tin nhắn độc hại' }
          ]
        },
        emCanNho: [
          'Luật An ninh mạng bảo vệ quyền lợi chính đáng của mọi công dân số.',
          'Thực hiện phương châm: "Không tin - Không làm theo - Không chuyển tiền".',
          'Gọi ngay đầu số 156 khi nhận cuộc gọi, tin nhắn nghi ngờ lừa đảo.'
        ]
      }
    ]
  }
};
