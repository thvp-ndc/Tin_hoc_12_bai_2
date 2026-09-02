import { Lesson } from '../../types/lesson';
import { THEME7_LESSONS_PART2_11 } from './theme7_multimedia_part2';

const THEME7_BASE_LESSONS_11: Lesson[] = [
  // Bài 25: Phần mềm chỉnh sửa ảnh
  {
    id: 25,
    code: 'TIN11_B25',
    title: 'Phần mềm chỉnh sửa ảnh',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Đồ họa GIMP',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Phòng tối kỹ thuật số: Làm chủ phần mềm xử lý ảnh nguồn mở GIMP chuyên nghiệp',
      description: 'Làm quen với phần mềm GIMP (GNU Image Manipulation Program): giao diện làm việc, hộp công cụ Toolbox, phân biệt tệp dự án .xcf và các định dạng xuất ảnh thành phẩm (.jpg, .png), cùng kỹ thuật cắt cúp ảnh chuẩn tỷ lệ.',
      accentColor: 'from-amber-600 to-orange-600',
      keyHighlights: ['Giao diện GIMP & Hộp công cụ Toolbox', 'Định dạng dự án .xcf vs .png/.jpg', 'Công cụ cắt cúp Crop Tool']
    },
    objectives: [
      {
        id: 'obj_11_25_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nhận biết giao diện & định dạng tệp GIMP',
        description: 'Nhận biết được các vùng làm việc của GIMP (Toolbox, Image Window, Dockable Dialogs) và phân biệt được tệp dự án chứa lớp `.xcf` với ảnh thành phẩm nén `.jpg`, `.png`.',
        iconName: 'Image'
      },
      {
        id: 'obj_11_25_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Mở tệp, thu phóng & cắt cúp hình ảnh',
        description: 'Thực hiện được việc mở ảnh, phóng to thu nhỏ vùng nhìn (Zoom Tool) và cắt cúp khung hình (Crop Tool) theo đúng tỷ lệ mong muốn.',
        iconName: 'Crop'
      },
      {
        id: 'obj_11_25_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền & tính chân thực của ảnh',
        description: 'Ý thức tôn trọng bản quyền tác giả ảnh và không cắt ghép, chỉnh sửa hình ảnh với mục đích bôi nhọ, xuyên tạc sự thật.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Bức ảnh chụp kỷ yếu bị thừa nhiều chi tiết thừa xung quanh',
      scenario: 'Bạn chụp được một bức ảnh nhóm rất đẹp ở sân trường, nhưng góc trái có chiếc thùng rác và góc phải có người lạ đi ngang qua làm mất vẻ đẹp của bức ảnh.',
      pollQuestion: 'Công cụ cơ bản nào trong phần mềm xử lý ảnh giúp bạn loại bỏ phần viền thừa và chỉ giữ lại khung hình đẹp nhất?',
      pollOptions: [
        { id: 'p11_25_1', text: 'Công cụ cắt cúp hình ảnh Crop Tool (Phím tắt Shift + C)', votesPercent: 95, isPopular: true, insight: 'Chính xác! Crop Tool cho phép bạn kéo khung chọn phần ảnh đẹp và cắt bỏ hoàn toàn các chi tiết rác xung quanh.' },
        { id: 'p11_25_2', text: 'Dùng bút xóa bôi trắng', votesPercent: 3, insight: 'Bôi trắng sẽ để lại vệt màu nham nhở làm hỏng bức ảnh.' },
        { id: 'p11_25_3', text: 'Chụp lại bức ảnh khác', votesPercent: 2, insight: 'Khoảnh khắc kỷ yếu tự nhiên rất khó có thể tái tạo lại giống hệt.' }
      ],
      reflection: 'Cắt cúp (Crop) là bước chỉnh sửa đầu tiên và quan trọng nhất để tạo nên bố cục thị giác ấn tượng cho bức ảnh.'
    },
    knowledge: [
      {
        id: 'tab_11_25_1',
        title: '1. Giao diện làm việc của phần mềm GIMP',
        subtitle: 'Bố cục 3 khu vực chính của phần mềm xử lý ảnh nguồn mở hàng đầu',
        iconName: 'Layout',
        keyPoints: [
          'GIMP (GNU Image Manipulation Program): Phần mềm đồ họa điểm ảnh (Raster) mã nguồn mở hoàn toàn miễn phí, có sức mạnh tương đương Adobe Photoshop.',
          'Ba khu vực làm việc chính:',
          '  - Hộp công cụ (Toolbox bên trái): Chứa tất cả các công cụ chọn, vẽ, biến đổi và tinh chỉnh màu sắc.',
          '  - Cửa sổ hình ảnh (Image Window ở giữa): Nơi hiển thị bức ảnh đang được chỉnh sửa và thanh thước đo (Ruler).',
          '  - Bảng điều khiển lớp và kênh (Dockable Dialogs bên phải): Nơi quản lý các Layer, Lịch sử thao tác (Undo History) và Bút vẽ (Brushes).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Toolbox bên trái', desc: 'Các công cụ chọn, vẽ, cắt cúp và phóng to' },
            { label: 'Vùng Canvas ở giữa', desc: 'Hiển thị hình ảnh làm việc và thước đo' },
            { label: 'Layers Panel bên phải', desc: 'Quản lý các lớp ảnh xếp chồng và thuộc tính' }
          ]
        },
        emCanNho: [
          'GIMP là phần mềm chỉnh sửa ảnh nguồn mở miễn phí, chuyên nghiệp.',
          'Giao diện gồm 3 phần: Hộp công cụ Toolbox, Cửa sổ ảnh Canvas và Bảng quản lý Layer.',
          'Phím tắt `Tab` giúp ẩn/hiện nhanh các bảng công cụ xung quanh để tập trung xem ảnh.'
        ]
      },
      {
        id: 'tab_11_25_2',
        title: '2. Mở tệp, thu phóng và cắt cúp hình ảnh (Crop Tool)',
        subtitle: 'Các thao tác điều hướng và định hình lại bố cục khung hình',
        iconName: 'Crop',
        keyPoints: [
          'Mở tệp ảnh: `File -> Open...` (Ctrl + O) hoặc kéo thả trực tiếp tệp ảnh vào GIMP.',
          'Thu phóng vùng nhìn (Zoom): Chọn công cụ Zoom Tool (Z) hoặc giữ phím `Ctrl` và cuộn con lăn chuột giữa.',
          'Cắt cúp ảnh (Crop Tool - Shift + C):',
          '  - Nhấp chuột và kéo tạo khung hình chữ nhật mong muốn.',
          '  - Kéo các góc để điều chỉnh kích thước khung cắt.',
          '  - Nhấn phím `Enter` để hoàn tất việc cắt bỏ toàn bộ phần ảnh thừa bên ngoài.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thao tác', 'Phím tắt nhanh', 'Mục đích sử dụng'],
          rows: [
            ['Mở tệp ảnh', 'Ctrl + O', 'Nạp ảnh chụp từ máy tính vào GIMP'],
            ['Thu phóng xem ảnh', 'Ctrl + Con lăn chuột', 'Phóng to để sửa chi tiết nhỏ, thu nhỏ để xem tổng thể'],
            ['Cắt cúp bố cục', 'Shift + C (Enter để cắt)', 'Loại bỏ phần viền thừa, lấy nét đối tượng chính']
          ]
        },
        emCanNho: [
          'Giữ phím `Ctrl` + cuộn chuột để phóng to/thu nhỏ vùng ảnh làm việc.',
          'Công cụ Crop Tool (Shift + C) dùng để cắt cúp khung hình.',
          'Nhấn phím `Enter` để hoàn thành thao tác cắt ảnh.'
        ]
      },
      {
        id: 'tab_11_25_3',
        title: '3. Tệp dự án .xcf và xuất tệp ảnh thành phẩm (.jpg, .png)',
        subtitle: 'Phân biệt lưu trữ quá trình làm việc và xuất bản ấn phẩm',
        iconName: 'FileCheck',
        keyPoints: [
          'Tệp dự án GIMP (`.xcf`): Lưu trữ toàn bộ các lớp (Layers), mặt nạ (Masks), lịch sử và đường dẫn vector. Dùng lệnh `File -> Save` (Ctrl + S) để lưu tệp này phục vụ cho việc tiếp tục chỉnh sửa sau này.',
          'Xuất ảnh thành phẩm (`File -> Export As...` - Shift + Ctrl + E):',
          '  - Định dạng `.jpg / .jpeg`: Dung lượng nhẹ, phù hợp cho ảnh chụp phong cảnh, chân dung đăng web hoặc gửi mạng xã hội (không hỗ trợ nền trong suốt).',
          '  - Định dạng `.png`: Giữ nguyên chất lượng ảnh sắc nét và hỗ trợ kênh trong suốt (Transparent Background), thích hợp cho logo, nhãn dán, icon.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Định dạng tệp', 'Lệnh thao tác', 'Đặc điểm & Mục đích sử dụng'],
          rows: [
            ['Tệp dự án .xcf', 'File -> Save (Ctrl + S)', 'Giữ nguyên toàn bộ các Layer để sửa tiếp sau này'],
            ['Ảnh nén .jpg', 'File -> Export As (Shift+Ctrl+E)', 'Ảnh chụp dung lượng nhẹ đăng Facebook/Zalo'],
            ['Ảnh trong suốt .png', 'File -> Export As (Shift+Ctrl+E)', 'Chất lượng cao, giữ được nền trong suốt cho Logo']
          ]
        },
        emCanNho: [
          'Lưu tệp dự án dùng `File -> Save` (đuôi `.xcf`) để giữ nguyên các lớp Layer.',
          'Xuất ảnh xem được thông thường phải dùng `File -> Export As...`.',
          'Chọn `.jpg` cho ảnh chụp nhẹ; chọn `.png` khi cần giữ nền trong suốt.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Định Dạng Tệp và Mục Đích trong GIMP',
      instruction: 'Nối định dạng tệp với trường hợp sử dụng chính xác:',
      matchingPairs: [
        { id: 'gm1', left: 'Định dạng tệp dự án .xcf', right: 'Lưu toàn bộ các Layer để mở ra chỉnh sửa tiếp vào ngày mai' },
        { id: 'gm2', left: 'Định dạng ảnh .png', right: 'Xuất ảnh chất lượng cao giữ được nền trong suốt cho logo' },
        { id: 'gm3', left: 'Định dạng ảnh .jpg', right: 'Xuất ảnh nén dung lượng nhẹ để đăng tải lên mạng xã hội' },
        { id: 'gm4', left: 'Công cụ Crop Tool (Shift + C)', right: 'Cắt bỏ phần khung hình thừa để làm nổi bật nhân vật chính' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Định dạng tệp dự án mặc định của phần mềm GIMP giúp lưu giữ toàn bộ các lớp (Layers) chỉnh sửa là gì?',
        options: ['.xcf', '.mp3', '.docx', '.exe'],
        correctIndex: 0,
        explanation: 'XCF là định dạng tệp dự án độc quyền của GIMP lưu toàn bộ thông tin các lớp và mặt nạ.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để xuất bức ảnh đã chỉnh sửa trong GIMP ra định dạng ảnh thông thường (.jpg hoặc .png), bạn sử dụng lệnh nào?',
        options: ['File -> Export As...', 'File -> Save', 'Edit -> Copy', 'Image -> Mode'],
        correctIndex: 0,
        explanation: 'Lệnh Save chỉ lưu tệp dự án .xcf; muốn tạo tệp ảnh thành phẩm bắt buộc phải dùng Export As.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi cần thiết kế một logo tròn để chèn lên trên nền các trang web mà không bị lộ khung viền trắng xung quanh, bạn BẮT BUỘC phải xuất ra định dạng nào?',
        options: ['.png (vì hỗ trợ kênh trong suốt Transparent)', '.jpg', '.bmp', '.pdf'],
        correctIndex: 0,
        explanation: 'Định dạng PNG hỗ trợ kênh Alpha giúp nền trong suốt, trong khi JPG luôn biến nền trong suốt thành màu trắng.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Phím tắt nào trong GIMP dùng để kích hoạt nhanh công cụ Cắt cúp ảnh (Crop Tool)?',
        options: ['Shift + C', 'Ctrl + C', 'Alt + C', 'Shift + Z'],
        correctIndex: 0,
        explanation: 'Shift + C kích hoạt công cụ Crop Tool để cắt xén khung hình ảnh.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Sau khi dùng công cụ Crop Tool kéo khung chữ nhật quanh khu vực ảnh cần lấy, phím bấm nào dùng để hoàn tất việc cắt bỏ phần thừa?',
        options: ['Phím Enter', 'Phím Esc', 'Phím Space', 'Phím Tab'],
        correctIndex: 0,
        explanation: 'Nhấn phím Enter (hoặc nhấp chuột vào tâm khung cắt) để hoàn tất thao tác cắt cúp trong GIMP.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Cắt Cúp & Chuẩn Hóa Bức Ảnh Chân Dung Làm Thẻ Học Sinh',
        context: 'Làm thẻ đoàn viên hoặc thẻ học sinh kích thước chuẩn 3x4 cm.',
        mission: 'Mở ảnh chân dung, cắt bỏ phông nền thừa và xuất ảnh thẻ học sinh đạt chuẩn.',
        steps: [
          'Bước 1: Mở bức ảnh chân dung bằng GIMP (`File -> Open`).',
          'Bước 2: Chọn Crop Tool (Shift + C), trong ô Tool Options tích chọn `Fixed: Aspect ratio` và nhập tỉ lệ `3:4`.',
          'Bước 3: Kéo khung cắt lấy trọn từ ngực lên đến đỉnh đầu, căn giữa khuôn mặt.',
          'Bước 4: Nhấn `Enter` để cắt. Vào `File -> Export As...` xuất thành `anh_the_3x4.jpg`.'
        ],
        outputRequirement: 'Tệp ảnh thẻ `anh_the_3x4.jpg` đúng tỷ lệ 3:4, khuôn mặt cân đối, sắc nét.',
        practicalTip: 'Khóa tỷ lệ khung cắt (Fixed Aspect ratio) giúp bạn kéo khung to nhỏ thoải mái mà không bao giờ bị méo tỷ lệ 3x4.'
      },
      mindmap: {
        id: 'mm_11_25',
        label: 'PHẦN MỀM GIMP',
        color: '#d97706',
        children: [
          {
            id: 'mm_11_25_1',
            label: 'Giao diện & Thao tác',
            children: [
              { id: 'mm_11_25_1_1', label: 'Toolbox (Hộp công cụ bên trái)' },
              { id: 'mm_11_25_1_2', label: 'Canvas (Cửa sổ hiển thị ảnh)' },
              { id: 'mm_11_25_1_3', label: 'Crop Tool (Shift + C, Enter)' }
            ]
          },
          {
            id: 'mm_11_25_2',
            label: 'Định dạng tệp',
            children: [
              { id: 'mm_11_25_2_1', label: '.xcf: Tệp dự án chứa Layer' },
              { id: 'mm_11_25_2_2', label: '.jpg: Nén nhẹ ảnh chụp' },
              { id: 'mm_11_25_2_3', label: '.png: Trong suốt cho Logo' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Phù Thủy Hình Ảnh GIMP 11',
      badgeIcon: 'Image',
      roleTitle: 'Chuyên Viên Xử Lý Hình Ảnh Số',
      congratsMessage: 'Tuyệt vời! Bạn đã làm quen với phần mềm GIMP, phân biệt tệp dự án .xcf và sẵn sàng tinh chỉnh màu sắc cho ảnh.',
      skillsUnlocked: ['Sử dụng giao diện GIMP', 'Phân biệt .xcf vs .png/.jpg', 'Cắt cúp ảnh chuẩn tỷ lệ Crop Tool']
    }
  },

  // Bài 26: Công cụ tinh chỉnh màu sắc và công cụ chọn
  {
    id: 26,
    code: 'TIN11_B26',
    title: 'Công cụ tinh chỉnh màu sắc và công cụ chọn',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Chỉnh màu & Chọn vùng',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Cân bằng ánh sáng và tách nền đối tượng: Kỹ thuật chọn vùng và đồ thị sắc thái Levels',
      description: 'Làm chủ các công cụ chọn vùng chuyên nghiệp (Lasso, Fuzzy Select tách nền một nhấp), cùng kỹ thuật cứu sáng ảnh chụp bị tối, thiếu tương phản bằng đồ thị sắc thái Levels trong menu Colors.',
      accentColor: 'from-amber-600 to-orange-600',
      keyHighlights: ['Công cụ chọn tự do Lasso & Fuzzy Select', 'Đồ thị sắc thái Colors -> Levels', 'Kỹ thuật tách nền hình ảnh']
    },
    objectives: [
      {
        id: 'obj_11_26_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu nguyên lý chọn vùng & đồ thị Levels',
        description: 'Giải thích được nguyên lý hoạt động của các công cụ chọn theo màu (Fuzzy Select) và cách đồ thị Levels phân bố dải sắc thái từ vùng tối (Shadows), vùng trung gian (Midtones) đến vùng sáng (Highlights).',
        iconName: 'Sliders'
      },
      {
        id: 'obj_11_26_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác tách nền & cứu sáng ảnh',
        description: 'Sử dụng thành thạo Fuzzy Select để tách nền bức ảnh sản phẩm và điều chỉnh đồ thị Levels để cứu sáng bức ảnh chụp ngược sáng bị tối.',
        iconName: 'Sun'
      },
      {
        id: 'obj_11_26_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cảm quan mỹ thuật & sự tinh tế',
        description: 'Phát triển cảm nhận về sự hài hòa của màu sắc, độ tương phản tự nhiên, tránh lạm dụng chỉnh sáng quá mức làm cháy ảnh.',
        iconName: 'Eye'
      }
    ],
    warmup: {
      title: 'Tình huống: Bức ảnh chụp ngày mưa bị tối om và nhợt nhạt',
      scenario: 'Bức ảnh chụp buổi chào cờ đầu tuần do trời âm u nên toàn bộ khuôn mặt các bạn học sinh bị tối sầm, màu cờ đỏ bị xỉn màu và thiếu sức sống.',
      pollQuestion: 'Công cụ tinh chỉnh chuyên nghiệp nào trong menu Colors của GIMP giúp kéo sáng và tăng độ tương phản cho ảnh tự nhiên nhất?',
      pollOptions: [
        { id: 'p11_26_1', text: 'Công cụ Levels (Đồ thị sắc thái) trong menu Colors', votesPercent: 94, isPopular: true, insight: 'Chính xác! Levels cho phép bạn kéo thanh trượt vùng tối, vùng sáng và vùng trung gian để cân bằng lại độ sáng hoàn hảo.' },
        { id: 'p11_26_2', text: 'Bật đèn flash điện thoại chiếu vào màn hình', votesPercent: 3, insight: 'Chiếu đèn ngoài không làm thay đổi các giá trị pixel bên trong tệp ảnh.' },
        { id: 'p11_26_3', text: 'Tăng âm lượng loa máy tính', votesPercent: 3, insight: 'Âm thanh không liên quan đến độ sáng thị giác của điểm ảnh.' }
      ],
      reflection: 'Làm chủ công cụ Levels giúp bạn hô biến những bức ảnh chụp lỗi thành những tác phẩm sắc nét, rực rỡ.'
    },
    knowledge: [
      {
        id: 'tab_11_26_1',
        title: '1. Các công cụ chọn vùng (Rectangle, Lasso, Fuzzy Select)',
        subtitle: 'Khoanh vùng đối tượng để chỉnh sửa cục bộ mà không ảnh hưởng vùng khác',
        iconName: 'Maximize',
        keyPoints: [
          'Ý nghĩa: Khi có vùng chọn (đường viền nét đứt nhấp nháy - "kiến bò"), mọi thao tác vẽ, xóa, chỉnh màu chỉ tác động lên khu vực bên trong vùng chọn.',
          'Các công cụ chọn chính:',
          '  - Rectangle Select (R) / Ellipse Select (E): Chọn vùng hình chữ nhật hoặc hình tròn/elip.',
          '  - Free Select (Lasso Tool - F): Nhấp chuột vẽ đường viền tự do bao quanh đối tượng.',
          '  - Fuzzy Select (Magic Wand - U): Tự động chọn toàn bộ vùng các điểm ảnh có màu sắc tương đồng chỉ với một cú nhấp chuột (rất phù hợp để xóa nền một màu).',
          'Bỏ vùng chọn: Menu `Select -> None` (Phím tắt `Shift + Ctrl + A`).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Công cụ chọn', 'Phím tắt', 'Nguyên lý chọn', 'Trường hợp sử dụng'],
          rows: [
            ['Rectangle / Ellipse', 'R / E', 'Hình học cố định', 'Cắt ảnh khung vuông, khung tròn'],
            ['Free Select (Lasso)', 'F', 'Vẽ tự do bằng tay', 'Khoanh vùng người, đồ vật có hình dáng phức tạp'],
            ['Fuzzy Select (Magic Wand)', 'U', 'Chọn theo độ tương đồng màu sắc', 'Nhấp 1 phát chọn sạch phông nền trắng hoặc xanh']
          ]
        },
        emCanNho: [
          'Vùng chọn giới hạn phạm vi thao tác (đường kiến bò).',
          'Fuzzy Select (U) chọn nhanh vùng cùng màu; Lasso (F) vẽ viền tự do.',
          'Nhấn `Shift + Ctrl + A` để hủy bỏ vùng chọn khi đã chỉnh sửa xong.'
        ]
      },
      {
        id: 'tab_11_26_2',
        title: '2. Tinh chỉnh độ sáng, tương phản và đồ thị sắc thái Levels',
        subtitle: 'Cân bằng lại ánh sáng khoa học trong menu Colors',
        iconName: 'Sliders',
        keyPoints: [
          'Mở công cụ: Vào menu `Colors -> Levels...`.',
          'Đồ thị sắc thái (Histogram) hiển thị phân bố số lượng điểm ảnh từ tối sang sáng.',
          'Ba con trượt điều khiển (Input Levels):',
          '  - Con trượt đen bên trái: Đại diện cho vùng tối nhất (Shadows). Kéo sang phải làm vùng tối sâu hơn.',
          '  - Con trượt trắng bên phải: Đại diện cho vùng sáng nhất (Highlights). Kéo sang trái giúp cứu sáng các bức ảnh bị tối.',
          '  - Con trượt xám ở giữa: Đại diện cho vùng trung gian (Midtones / Gamma). Kéo sang trái để làm sáng khuôn mặt một cách tự nhiên.',
          'Công cụ Hue-Saturation: Chỉnh tông màu (Hue) và độ rực rỡ của màu sắc (Saturation).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Con trượt đen (Shadows)', desc: 'Tăng độ tương phản cho vùng bóng tối' },
            { label: 'Con trượt xám (Midtones)', desc: 'Kéo sang trái làm sáng bừng da mặt tự nhiên' },
            { label: 'Con trượt trắng (Highlights)', desc: 'Kéo về mép đồ thị để bù sáng cho ảnh thiếu sáng' }
          ]
        },
        emCanNho: [
          'Dùng menu `Colors -> Levels...` để cân chỉnh độ sáng và tương phản.',
          'Kéo con trượt xám ở giữa sang trái để làm sáng vùng mặt một cách hài hòa.',
          'Tích chọn ô "Preview" để xem trước sự thay đổi trước khi bấm OK.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Công Cụ GIMP và Nhu Cầu Xử Lý Ảnh',
      instruction: 'Nối công cụ với nhu cầu xử lý tương ứng:',
      matchingPairs: [
        { id: 'tl1', left: 'Công cụ Fuzzy Select (U)', right: 'Nhấp 1 cái chọn toàn bộ phông nền xanh phía sau người mẫu' },
        { id: 'tl2', left: 'Menu Colors -> Levels', right: 'Kéo sáng bức ảnh bị chụp ngược sáng trong phòng tối' },
        { id: 'tl3', left: 'Phím tắt Shift + Ctrl + A', right: 'Hủy bỏ vùng chọn đường viền kiến bò sau khi làm xong' },
        { id: 'tl4', left: 'Menu Colors -> Hue-Saturation', right: 'Tăng độ tươi tắn rực rỡ cho màu cờ đỏ sao vàng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Công cụ nào trong GIMP cho phép bạn chọn nhanh các vùng điểm ảnh có màu sắc tương đồng nhau chỉ với một cú nhấp chuột?',
        options: ['Fuzzy Select (Magic Wand - Phím U)', 'Text Tool', 'Zoom Tool', 'Eraser Tool'],
        correctIndex: 0,
        explanation: 'Fuzzy Select dựa trên thuật toán lan truyền màu sắc để khoanh vùng các pixel cùng màu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để làm sáng một bức ảnh chụp thiếu sáng mà không làm cháy trắng các vùng vốn đã sáng, bạn nên kéo con trượt nào trong công cụ Levels?',
        options: [
          'Kéo con trượt xám ở giữa (Midtones) sang phía bên trái',
          'Kéo con trượt đen sang bên phải',
          'Kéo cả 3 con trượt về số 0',
          'Xóa đồ thị đi'
        ],
        correctIndex: 0,
        explanation: 'Con trượt Midtones (Gamma) điều chỉnh độ sáng của dải màu trung gian, giúp ảnh sáng tự nhiên mà không bị cháy sáng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tổ hợp phím nào dùng để HỦY BỎ VÙNG CHỌN (Select None) trong phần mềm GIMP?',
        options: ['Shift + Ctrl + A', 'Ctrl + Z', 'Ctrl + S', 'Alt + F4'],
        correctIndex: 0,
        explanation: 'Shift + Ctrl + A là phím tắt của lệnh Select -> None trong GIMP.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Muốn tách nền trắng của một bức ảnh sản phẩm để lấy riêng đồ vật, thao tác chuẩn là gì?',
        options: [
          'Dùng Fuzzy Select nhấp vào nền trắng -> Nhấn phím Delete để xóa nền -> Xuất file dạng .PNG',
          'Dùng chổi sơn tô màu đen lên nền',
          'Cắt đôi bức ảnh bằng kéo',
          'Tắt màn hình máy tính'
        ],
        correctIndex: 0,
        explanation: 'Fuzzy Select chọn toàn bộ nền trắng, phím Delete xóa nền tạo độ trong suốt và PNG lưu giữ độ trong suốt đó.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Mục đích chính của tùy chọn "Preview" trong các hộp thoại chỉnh màu của GIMP là gì?',
        options: [
          'Xem trước sự thay đổi của bức ảnh theo thời gian thực trước khi quyết định nhấn nút OK',
          'Để in ảnh ra giấy',
          'Để gửi ảnh cho bạn bè',
          'Để máy tính phát âm thanh'
        ],
        correctIndex: 0,
        explanation: 'Preview giúp bạn kiểm tra độ hài hòa của màu sắc trước khi áp dụng vĩnh viễn lên ảnh.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Phục Chế & Tách Nền Bông Hoa Hướng Dương',
        context: 'Làm tài nguyên thiết kế banner cho câu lạc bộ Sinh học trường.',
        mission: 'Cứu sáng bức ảnh chụp hoa bị thiếu sáng và tách nền bông hoa.',
        steps: [
          'Bước 1: Mở ảnh bông hoa bằng GIMP (`File -> Open`).',
          'Bước 2: Mở `Colors -> Levels...`, kéo con trượt Midtones sang trái để làm rực rỡ cánh hoa vàng.',
          'Bước 3: Dùng `Fuzzy Select (U)` nhấp chọn phông nền phía sau.',
          'Bước 4: Nhấn `Delete` để xóa nền (nền hiển thị dạng ô cờ caro xám trắng báo hiệu trong suốt).',
          'Bước 5: Xuất tệp `hoa_huong_duong.png` dạng trong suốt.'
        ],
        outputRequirement: 'Tệp PNG bông hoa hướng dương màu sắc tươi tắn, tách nền hoàn hảo không dính viền răng cưa.',
        practicalTip: 'Điều chỉnh thanh trượt `Threshold` trong Tool Options của Fuzzy Select để mở rộng hoặc thu hẹp độ nhạy nhận diện màu sắc.'
      },
      mindmap: {
        id: 'mm_11_26',
        label: 'CHỈNH MÀU & CHỌN VÙNG',
        color: '#d97706',
        children: [
          {
            id: 'mm_11_26_1',
            label: 'Công cụ chọn vùng',
            children: [
              { id: 'mm_11_26_1_1', label: 'Fuzzy Select (U): Chọn theo màu' },
              { id: 'mm_11_26_1_2', label: 'Lasso (F): Khoanh tự do' },
              { id: 'mm_11_26_1_3', label: 'Select None (Shift+Ctrl+A)' }
            ]
          },
          {
            id: 'mm_11_26_2',
            label: 'Tinh chỉnh màu sắc',
            children: [
              { id: 'mm_11_26_2_1', label: 'Colors -> Levels (Đồ thị)' },
              { id: 'mm_11_26_2_2', label: 'Con trượt Midtones cứu sáng' },
              { id: 'mm_11_26_2_3', label: 'Colors -> Hue-Saturation' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Sắc Thái GIMP 11',
      badgeIcon: 'Sliders',
      roleTitle: 'Chuyên Viên Hiệu Chỉnh Màu Sắc & Tách Nền',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ công cụ chọn vùng Fuzzy Select và đồ thị Levels, tự tin cứu sáng và tách nền mọi bức ảnh chụp.',
      skillsUnlocked: ['Tách nền bằng Fuzzy Select', 'Cứu sáng ảnh với Levels', 'Hủy vùng chọn Shift+Ctrl+A']
    }
  }
];

export const THEME7_LESSONS_11: Lesson[] = [
  ...THEME7_BASE_LESSONS_11,
  ...THEME7_LESSONS_PART2_11
];
