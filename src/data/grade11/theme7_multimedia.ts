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
      tagline: 'Sáng tạo đồ họa số: Khám phá phần mềm chỉnh sửa ảnh nguồn mở GIMP',
      description: 'Làm quen với giao diện chuẩn của GIMP (GNU Image Manipulation Program), cấu trúc thanh công cụ Toolbox, bảng điều khiển bảng vẽ (Canvas) và các thao tác cơ bản: mở ảnh, thu phóng, cắt cúp (Crop) và lưu tệp dự án (.xcf).',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Giao diện phần mềm GIMP', 'Định dạng dự án .xcf vs .png/.jpg', 'Công cụ cắt cúp Crop Tool']
    },
    objectives: [
      {
        id: 'obj_11_25_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các thành phần giao diện GIMP',
        description: 'Nhận biết được hộp công cụ (Toolbox), thanh tùy chọn công cụ (Tool Options), cửa sổ hình ảnh và bảng quản lý lớp (Layers Panel).',
        iconName: 'Palette'
      },
      {
        id: 'obj_11_25_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác cơ bản với hình ảnh',
        description: 'Thực hiện được việc mở ảnh, phóng to thu nhỏ (Zoom), xoay ảnh, lật ảnh, cắt cúp vùng ảnh và xuất tệp ảnh JPEG/PNG.',
        iconName: 'Crop'
      },
      {
        id: 'obj_11_25_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền hình ảnh',
        description: 'Ý thức sử dụng hình ảnh có giấy phép mở hoặc tự chụp, không tùy tiện lấy hình ảnh cá nhân của người khác để chế tác trái phép.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Cần phần mềm chỉnh sửa ảnh thẻ học sinh chuyên nghiệp',
      scenario: 'Bạn cần chỉnh sửa và cắt cúp bức ảnh chân dung để làm thẻ học sinh lớp 11 nhưng máy tính không có phần mềm Photoshop trả phí đắt đỏ.',
      pollQuestion: 'Phần mềm đồ họa mã nguồn mở miễn phí 100% nào được đưa vào chương trình SGK Tin học 11?',
      pollOptions: [
        { id: 'p11_25_1', text: 'GIMP (GNU Image Manipulation Program)', votesPercent: 93, isPopular: true, insight: 'Chính xác! GIMP là phần mềm chỉnh sửa ảnh nguồn mở mạnh mẽ nhất thế giới hiện nay, tương đương Photoshop.' },
        { id: 'p11_25_2', text: 'Phần mềm bảng tính Excel', votesPercent: 3, insight: 'Excel dùng cho bảng tính số liệu tài chính, không phải phần mềm đồ họa chuyên dụng.' },
        { id: 'p11_25_3', text: 'Trình duyệt web Chrome', votesPercent: 4, insight: 'Chrome dùng để duyệt web, không hỗ trợ chỉnh sửa ảnh chuyên sâu.' }
      ],
      reflection: 'Làm chủ GIMP mở ra cánh cửa sáng tạo nghệ thuật số không giới hạn cho mọi học sinh.'
    },
    knowledge: [
      {
        id: 'tab_11_25_1',
        title: '1. Giao Diện & Thao Tác Cơ Bản Trong GIMP',
        subtitle: 'Toolbox, Tool Options và Định dạng tệp .xcf',
        iconName: 'Layers',
        keyPoints: [
          'Thanh công cụ (Toolbox): Chứa toàn bộ các công cụ chọn, vẽ, tô màu, biến đổi hình dạng và văn bản.',
          'Bảng tùy chọn công cụ (Tool Options): Hiển thị các thông số chi tiết của công cụ đang được chọn (kích thước, độ mờ đục Opacity, nét cọ).',
          'Định dạng tệp `.xcf`: Là định dạng tệp dự án gốc của GIMP, lưu giữ đầy đủ các lớp (Layers), đường dẫn (Paths) và lịch sử để tiếp tục chỉnh sửa sau này.',
          'Xuất ảnh (Export As): Dùng để xuất ra các định dạng phổ thông để in ấn hoặc đăng mạng như `.png` (trong suốt) hoặc `.jpg` (nén dung lượng nhẹ).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Toolbox (Hộp công cụ)', desc: 'Chọn vùng, cắt cúp, vẽ, tô màu, tẩy xóa' },
            { label: 'Image Window (Bảng vẽ)', desc: 'Không gian hiển thị và chỉnh sửa bức ảnh' },
            { label: 'Layers Panel (Bảng lớp)', desc: 'Quản lý thứ tự chồng lớp của các đối tượng' }
          ]
        },
        emCanNho: [
          'GIMP là phần mềm chỉnh sửa ảnh raster mã nguồn mở miễn phí và mạnh mẽ.',
          'Tệp dự án gốc của GIMP có phần mở rộng là `.xcf`.',
          'Dùng `File -> Export As...` để xuất ảnh sang định dạng `.png` hoặc `.jpg`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Công cụ GIMP và Chức năng',
      instruction: 'Nối biểu tượng công cụ trong GIMP với công dụng tương ứng:',
      matchingPairs: [
        { id: 'gimp1', left: 'Crop Tool (Phím tắt Shift + C)', right: 'Cắt cúp lấy một vùng ảnh mong muốn và loại bỏ phần thừa' },
        { id: 'gimp2', left: 'Zoom Tool (Phím Z)', right: 'Phóng to hoặc thu nhỏ vùng hiển thị chi tiết bức ảnh' },
        { id: 'gimp3', left: 'Scale Tool (Shift + S)', right: 'Thay đổi kích thước chiều rộng và chiều cao của ảnh hoặc lớp' },
        { id: 'gimp4', left: 'File -> Export As...', right: 'Xuất bức ảnh ra tệp thành phẩm định dạng PNG hoặc JPG' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Định dạng tệp nào sau đây là tệp dự án gốc của phần mềm đồ họa GIMP?',
        options: ['.xcf', '.psd', '.docx', '.mp4'],
        correctIndex: 0,
        explanation: '`.xcf` (eXperimental Computing Facility) là định dạng tệp lưu trữ toàn bộ các lớp của GIMP.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để cắt lấy một vùng hình chữ nhật trên ảnh chân dung và loại bỏ phần nền thừa xung quanh trong GIMP, bạn dùng công cụ nào?',
        options: ['Crop Tool (Phím Shift + C)', 'Bucket Fill Tool', 'Text Tool', 'Eraser Tool'],
        correctIndex: 0,
        explanation: 'Crop Tool là công cụ chuyên trách thao tác cắt cúp khung hình.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Sự khác biệt lớn nhất giữa lệnh "Save" (Lưu) và "Export As" (Xuất) trong GIMP là gì?',
        options: [
          'Save chỉ lưu thành tệp dự án .xcf để sửa tiếp, còn Export As cho phép xuất thành ảnh phổ thông (.png, .jpg) để chia sẻ',
          'Save làm mất ảnh, Export As giữ ảnh',
          'Hai lệnh này hoàn toàn giống hệt nhau',
          'Export As chỉ dùng để in ra giấy'
        ],
        correctIndex: 0,
        explanation: 'GIMP tách bạch giữa lưu dự án (.xcf) và xuất bản ảnh định dạng thành phẩm (.jpg, .png).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Khi cần lưu ảnh có nền trong suốt (không có phông nền trắng đằng sau), bạn BẮT BUỘC phải xuất ra định dạng tệp nào?',
        options: ['.png (Portable Network Graphics)', '.jpg', '.bmp', '.pdf'],
        correctIndex: 0,
        explanation: 'Định dạng PNG hỗ trợ kênh Alpha trong suốt, trong khi JPG luôn tự động phủ nền màu trắng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Thao tác nào sau đây giúp phóng to một chi tiết nhỏ trên bức ảnh để chỉnh sửa chính xác hơn?',
        options: [
          'Giữ phím Ctrl và lăn bánh xe chuột lên trên (hoặc chọn Zoom Tool bấm chuột trái)',
          'Bấm phím Delete',
          'Kéo màn hình lại gần mắt',
          'Tắt bớt đèn phòng'
        ],
        correctIndex: 0,
        explanation: 'Ctrl + cuộn chuột là thao tác phóng to thu nhỏ (Zoom In/Out) phổ biến trong phần mềm đồ họa.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Cắt Cúp và Chuẩn Hóa Ảnh Thẻ Học Sinh 3x4',
        context: 'Lớp 11 chuẩn bị hồ sơ thi nghề và làm thẻ đoàn viên cần ảnh thẻ 3x4 chuẩn.',
        mission: 'Sử dụng GIMP để cắt cúp ảnh chân dung theo đúng tỉ lệ kích thước chuẩn 3x4 cm.',
        steps: [
          'Bước 1: Mở ảnh chân dung chụp bằng điện thoại trong GIMP.',
          'Bước 2: Chọn Crop Tool, trong Tool Options tích chọn "Fixed: Aspect ratio" và gõ tỉ lệ `3:4`.',
          'Bước 3: Kéo khung cắt cân đối khuôn mặt ở giữa và bấm Enter.',
          'Bước 4: Xuất ảnh thành tệp `anh_the_3x4.jpg` với chất lượng 95%.'
        ],
        outputRequirement: 'Tệp ảnh thẻ 3x4 rõ nét, cân đối khuôn mặt và dung lượng nhẹ dưới 500KB.',
        practicalTip: 'Khi cắt ảnh thẻ, đỉnh đầu nên cách mép trên một khoảng nhỏ và phần vai hiển thị đều hai bên.'
      },
      mindmap: {
        id: 'mm_11_25',
        label: 'PHẦN MỀM GIMP',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_25_1',
            label: 'Giao diện làm việc',
            children: [
              { id: 'mm_11_25_1_1', label: 'Toolbox (Thanh công cụ)' },
              { id: 'mm_11_25_1_2', label: 'Tool Options (Tùy chọn)' },
              { id: 'mm_11_25_1_3', label: 'Layers Panel (Quản lý lớp)' }
            ]
          },
          {
            id: 'mm_11_25_2',
            label: 'Lưu & Xuất tệp',
            children: [
              { id: 'mm_11_25_2_1', label: 'Dự án gốc .xcf' },
              { id: 'mm_11_25_2_2', label: 'Xuất ảnh PNG (Trong suốt)' },
              { id: 'mm_11_25_2_3', label: 'Xuất ảnh JPG (Nén dung lượng)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Thiết Kế GIMP Khởi Đầu 11',
      badgeIcon: 'Palette',
      roleTitle: 'Chuyên Viên Chỉnh Sửa Ảnh Nhập Môn',
      congratsMessage: 'Tuyệt vời! Bạn đã làm quen thành thạo giao diện GIMP và kỹ thuật cắt cúp ảnh chuẩn.',
      skillsUnlocked: ['Sử dụng GIMP Toolbox', 'Phân biệt .xcf vs .png/.jpg', 'Cắt ảnh tỉ lệ chuẩn với Crop Tool']
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
      tagline: 'Phép màu thị giác: Cân bằng sáng tối và chọn lọc đối tượng tinh xảo',
      description: 'Làm chủ các công cụ chọn vùng chuyên nghiệp (Rectangle Select, Ellipse Select, Free Select Lasso, Fuzzy Select Magic Wand) và các bộ tinh chỉnh màu sắc: Brightness-Contrast, Levels, Color Temperature.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Công cụ chọn tự do Lasso & Fuzzy Select', 'Cân bằng sáng tối Brightness-Contrast', 'Đồ thị cân chỉnh Levels']
    },
    objectives: [
      {
        id: 'obj_11_26_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các công cụ chọn vùng trong GIMP',
        description: 'Phân biệt được khi nào dùng chọn hình học, chọn tự do (Lasso) và chọn theo vùng màu tương đồng (Fuzzy Select).',
        iconName: 'Sparkles'
      },
      {
        id: 'obj_11_26_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Cân chỉnh màu sắc và độ tương phản',
        description: 'Sử dụng được hộp thoại Brightness-Contrast và Levels để làm sáng bức ảnh bị thiếu sáng hoặc tối màu.',
        iconName: 'Sun'
      },
      {
        id: 'obj_11_26_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cảm thụ mỹ thuật và sự hài hòa',
        description: 'Phát triển gu thẩm mỹ thị giác, không lạm dụng đẩy màu quá rực làm mất tính chân thực tự nhiên của bức ảnh.',
        iconName: 'Eye'
      }
    ],
    warmup: {
      title: 'Tình huống: Bức ảnh chụp buổi dã ngoại bị tối mờ',
      scenario: 'Bức ảnh chụp kỷ niệm lớp trong chuyến cắm trại bị ngược sáng nên khuôn mặt của mọi người đều bị tối đen, phông nền trời thì quá lóa.',
      pollQuestion: 'Công cụ nào trong menu Colors của GIMP giúp kéo sáng chi tiết vùng tối mà không làm cháy trắng các vùng khác?',
      pollOptions: [
        { id: 'p11_26_1', text: 'Công cụ Levels (hoặc Curves / Shadows-Highlights)', votesPercent: 92, isPopular: true, insight: 'Chính xác! Đồ thị Levels cho phép cân bằng độc lập 3 vùng: Vùng tối (Shadows), Vùng trung gian (Midtones) và Vùng sáng (Highlights).' },
        { id: 'p11_26_2', text: 'Đổ thùng sơn màu trắng đè lên mặt', votesPercent: 4, insight: 'Đổ sơn sẽ che lấp toàn bộ chi tiết bức ảnh.' },
        { id: 'p11_26_3', text: 'Xóa luôn bức ảnh', votesPercent: 4, insight: 'Kỹ thuật chỉnh màu hoàn toàn có thể cứu vãn bức ảnh kỷ niệm quý giá.' }
      ],
      reflection: 'Kỹ năng chỉnh sáng và màu sắc giúp biến những bức ảnh chụp lỗi thành những tác phẩm nghệ thuật bắt mắt.'
    },
    knowledge: [
      {
        id: 'tab_11_26_1',
        title: '1. Các Công Cụ Chọn Vùng & Tinh Chỉnh Màu Sắc',
        subtitle: 'Khóa vùng xử lý và làm chủ ánh sáng',
        iconName: 'Sliders',
        keyPoints: [
          'Nhóm công cụ chọn (Selection Tools):',
          '- `Rectangle / Ellipse Select`: Chọn vùng hình chữ nhật hoặc hình elip/tròn.',
          '- `Free Select (Lasso - Phím F)`: Vẽ tay tự do bao quanh hình dáng đối tượng phức tạp.',
          '- `Fuzzy Select (Magic Wand - Phím U)`: Tự động nhận diện và chọn vùng có màu sắc đồng nhất (rất tiện để xóa phông nền 1 màu).',
          'Bộ công cụ chỉnh màu (Menu Colors):',
          '- `Brightness-Contrast`: Tăng giảm độ sáng tổng thể và độ tương phản giữa mảng sáng/tối.',
          '- `Levels`: Biểu đồ sắc thái Histogram, cho phép dịch chuyển điểm đen, điểm xám trung gian và điểm trắng để bức ảnh trong trẻo và có chiều sâu.',
          '- `Color Temperature`: Chỉnh nhiệt độ màu ấm áp (ngả vàng) hoặc mát lạnh (ngả xanh dương).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bước 1: Chọn đối tượng', desc: 'Dùng Lasso hoặc Fuzzy Select cô lập vùng cần sửa' },
            { label: 'Bước 2: Cân chỉnh Levels', desc: 'Kéo con trượt trung gian làm sáng khuôn mặt' },
            { label: 'Bước 3: Hoàn tất', desc: 'Nhấn Select -> None (Ctrl+Shift+A) hủy vùng chọn' }
          ]
        },
        emCanNho: [
          'Dùng `Fuzzy Select` để chọn nhanh vùng màu đồng nhất (xóa phông).',
          'Menu `Colors -> Levels` giúp cân bằng sáng tối chuyên nghiệp nhất.',
          'Phím tắt hủy bỏ vùng chọn: `Ctrl + Shift + A` (Select None).'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Công cụ Chọn và Tình huống ứng dụng',
      instruction: 'Nối công cụ chọn vùng trong GIMP với tình huống sử dụng tối ưu:',
      matchingPairs: [
        { id: 'sel1', left: 'Fuzzy Select (Magic Wand - Phím U)', right: 'Chọn phông nền màu xanh lá cây đồng nhất để xóa nền' },
        { id: 'sel2', left: 'Free Select (Lasso - Phím F)', right: 'Vẽ tự do men theo đường viền phức tạp của người hoặc đồ vật' },
        { id: 'sel3', left: 'Ellipse Select (Phím E)', right: 'Khoanh tròn mặt trời hoặc logo hình tròn' },
        { id: 'sel4', left: 'Ctrl + Shift + A', right: 'Hủy bỏ đường kiến bò của vùng chọn sau khi thao tác xong' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Công cụ nào trong GIMP cho phép chọn nhanh các vùng ảnh có màu sắc tương đồng chỉ bằng MỘT cú nhấp chuột?',
        options: ['Fuzzy Select (Magic Wand)', 'Crop Tool', 'Text Tool', 'Zoom Tool'],
        correctIndex: 0,
        explanation: 'Fuzzy Select tự động lan tỏa và bắt dính các điểm ảnh có sắc độ màu gần giống nhau.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để hủy bỏ hoàn toàn đường viền vùng chọn (đường kiến bò) sau khi đã xử lý xong trong GIMP, ta dùng tổ hợp phím nào?',
        options: ['Ctrl + Shift + A (Select -> None)', 'Ctrl + C', 'Ctrl + V', 'Ctrl + Z'],
        correctIndex: 0,
        explanation: 'Ctrl + Shift + A là phím tắt hủy vùng chọn (None) đưa bảng vẽ về trạng thái bình thường.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Trong menu Colors -> Levels, con trượt hình tam giác nằm ở CHÍNH GIỮA biểu đồ đại diện cho sắc thái nào?',
        options: ['Vùng xám trung gian (Midtones)', 'Vùng đen tuyệt đối (Shadows)', 'Vùng trắng lóa (Highlights)', 'Độ trong suốt'],
        correctIndex: 0,
        explanation: 'Con trượt giữa điều chỉnh độ sáng tối của vùng sắc thái trung gian (Midtones).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Muốn tăng độ tươi tắn và rực rỡ của các gam màu trong một bức ảnh phong cảnh, công cụ nào sau đây là phù hợp nhất?',
        options: ['Colors -> Hue-Saturation (hoặc Saturation)', 'Tools -> Crop', 'Image -> Scale Image', 'Filters -> Blur'],
        correctIndex: 0,
        explanation: 'Độ bão hòa (Saturation) kiểm soát mức độ đậm đà, tươi tắn của các sắc màu trong ảnh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Khi sử dụng công cụ Lasso (Free Select) để khoanh vùng đối tượng, bạn cần kết thúc bằng thao tác nào để tạo thành vùng chọn khép kín?',
        options: [
          'Nhấp chuột quay trở lại đúng điểm chấm xuất phát ban đầu (hoặc nhấn phím Enter)',
          'Nhấn phím Esc',
          'Tắt phần mềm GIMP',
          'Rút dây chuột'
        ],
        correctIndex: 0,
        explanation: 'Nối điểm cuối với điểm đầu sẽ khép kín đường bao thành một vùng chọn hoàn chỉnh.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Tách Nền Nhân Vật và Phục Hồi Độ Sáng Bức Ảnh',
        context: 'Cần tách hình ảnh một người khỏi phông nền cũ để ghép vào khung cảnh mới sinh động hơn.',
        mission: 'Dùng Fuzzy Select hoặc Lasso để tách nền và cân chỉnh độ sáng khuôn mặt.',
        steps: [
          'Bước 1: Mở ảnh chân dung, dùng `Fuzzy Select` chọn phông nền phía sau.',
          'Bước 2: Nhấn phím `Delete` để xóa phông nền (nhớ nhấp chuột phải vào Layer chọn Add Alpha Channel trước).',
          'Bước 3: Vào `Colors -> Levels`, kéo con trượt giữa sang trái một chút để làm sáng mặt.',
          'Bước 4: Xuất ảnh thành tệp `nhan_vat_tach_nen.png` có nền trong suốt.'
        ],
        outputRequirement: 'Bức ảnh nhân vật đã được làm sáng đẹp và phông nền trong suốt hoàn toàn.',
        practicalTip: 'Nếu đường viền bị răng cưa, vào menu `Select -> Feather` khoảng 2-3 pixel trước khi xóa để viền được mềm mại tự nhiên.'
      },
      mindmap: {
        id: 'mm_11_26',
        label: 'CHỈNH MÀU & CHỌN VÙNG',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_26_1',
            label: 'Công cụ chọn vùng',
            children: [
              { id: 'mm_11_26_1_1', label: 'Fuzzy Select (Màu đồng nhất)' },
              { id: 'mm_11_26_1_2', label: 'Lasso (Vẽ tự do)' },
              { id: 'mm_11_26_1_3', label: 'Select None (Ctrl+Shift+A)' }
            ]
          },
          {
            id: 'mm_11_26_2',
            label: 'Tinh chỉnh màu sắc',
            children: [
              { id: 'mm_11_26_2_1', label: 'Levels (Đồ thị sáng tối)' },
              { id: 'mm_11_26_2_2', label: 'Brightness-Contrast' },
              { id: 'mm_11_26_2_3', label: 'Hue-Saturation (Độ tươi màu)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Tách Nền & Ánh Sáng 11',
      badgeIcon: 'Sun',
      roleTitle: 'Chuyên Viên Hiệu Chỉnh Sắc Thái Đồ Họa',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững các công cụ chọn vùng tinh xảo và nghệ thuật cân chỉnh màu sắc Levels.',
      skillsUnlocked: ['Tách nền với Fuzzy Select & Lasso', 'Hiệu chỉnh ánh sáng Levels', 'Khử răng cưa Feather']
    }
  }
];

export const THEME7_LESSONS_11: Lesson[] = [
  ...THEME7_BASE_LESSONS_11,
  ...THEME7_LESSONS_PART2_11
];
