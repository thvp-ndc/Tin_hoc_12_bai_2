import { Lesson } from '../../types/lesson';

export const THEME7_LESSONS_PART2_11: Lesson[] = [
  // Bài 27: Công cụ vẽ và một số ứng dụng
  {
    id: 27,
    code: 'TIN11_B27',
    title: 'Công cụ vẽ và một số ứng dụng',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Vẽ & Lớp (Layer)',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Linh hồn của đồ họa số: Làm chủ hệ thống Lớp (Layer) và Bút vẽ (Brush)',
      description: 'Khám phá khái niệm Lớp ảnh (Layers) xếp chồng lên nhau như những tấm kính trong suốt, công cụ cọ vẽ Paintbrush, tẩy xóa Eraser, chèn chữ Text Tool và kỹ thuật ghép ảnh nghệ thuật không phá hủy ảnh gốc.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Khái niệm Lớp (Layer) xếp chồng', 'Công cụ cọ vẽ Paintbrush & Tẩy Eraser', 'Ghép ảnh nghệ thuật đa lớp']
    },
    objectives: [
      {
        id: 'obj_11_27_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của Lớp (Layer) & độ mờ đục',
        description: 'Hiểu được nguyên lý các lớp ảnh xếp chồng trong suốt, lớp trên che khuất lớp dưới và cách kiểm soát độ mờ đục (Opacity).',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_27_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác quản lý Layer & cọ vẽ, chèn chữ',
        description: 'Thực hiện được việc tạo lớp mới (Shift+Ctrl+N), đổi thứ tự lớp, ẩn/hiện lớp (con mắt), dùng cọ Paintbrush vẽ chi tiết và chèn chữ Text Tool.',
        iconName: 'Sliders'
      },
      {
        id: 'obj_11_27_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong làm việc chuyên nghiệp',
        description: 'Rèn luyện thói quen luôn vẽ hoặc chèn chi tiết mới trên một Layer riêng biệt để dễ dàng chỉnh sửa mà không làm hỏng hình gốc.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Vẽ râu ria lên ảnh chân dung rồi... không xóa được!',
      scenario: 'Một bạn học sinh mở ảnh chân dung và dùng công cụ cọ vẽ Paintbrush vẽ trực tiếp một chiếc kính râm lên khuôn mặt. Sau đó bạn muốn bỏ chiếc kính đi nhưng lệnh Eraser lại tẩy trắng toát cả khuôn mặt đằng sau!',
      pollQuestion: 'Nguyên tắc thiết kế sống còn nào đã bị bạn ấy bỏ qua khi vẽ thêm chi tiết?',
      pollOptions: [
        { id: 'p11_27_1', text: 'Phải tạo một Lớp mới (New Layer) riêng biệt ở trên rồi mới vẽ chiếc kính lên lớp đó', votesPercent: 94, isPopular: true, insight: 'Chính xác! Làm việc trên Layer riêng giúp bạn có thể xóa, di chuyển hoặc ẩn chiếc kính mà khuôn mặt gốc bên dưới vẫn nguyên vẹn.' },
        { id: 'p11_27_2', text: 'Phải dùng bút dạ quang vẽ lên màn hình máy tính', votesPercent: 3, insight: 'Vẽ lên màn hình vật lý sẽ làm hỏng thiết bị phần cứng.' },
        { id: 'p11_27_3', text: 'Không được phép vẽ kính râm', votesPercent: 3, insight: 'Phần mềm cho phép sáng tạo tự do nếu bạn nắm vững kỹ thuật Layer.' }
      ],
      reflection: 'Tư duy làm việc theo từng Lớp (Layer) là bí quyết phân biệt giữa một người mới tập tành và một nhà thiết kế đồ họa chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_27_1',
        title: '1. Khái niệm và nguyên lý hoạt động của các lớp (Layers)',
        subtitle: 'Những tấm kính trong suốt xếp chồng tạo nên tác phẩm hoàn chỉnh',
        iconName: 'Layers',
        keyPoints: [
          'Khái niệm: Lớp (Layer) giống như một tấm kính trong suốt. Các chi tiết vẽ trên một lớp sẽ độc lập hoàn toàn với các lớp khác.',
          'Nguyên lý xếp chồng:',
          '  - Chi tiết ở lớp nằm phía trên sẽ che khuất chi tiết ở lớp nằm phía dưới.',
          '  - Các vùng trống không vẽ gì trên lớp sẽ trong suốt, cho phép nhìn xuyên thấu xuống các lớp bên dưới.',
          'Lợi ích tối thượng: Cho phép di chuyển, phóng to, xóa hoặc đổi màu một chi tiết mà không làm ảnh hưởng đến các chi tiết khác của bức ảnh.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Layer 3: Lớp chữ Text (Trên cùng)', desc: 'Chứa dòng chữ tiêu đề "Chào năm học mới"' },
            { label: 'Layer 2: Lớp hình nhân vật', desc: 'Ảnh học sinh đã được tách nền trong suốt' },
            { label: 'Layer 1: Lớp hình nền Background', desc: 'Bức ảnh phong cảnh cổng trường THPT' }
          ]
        },
        emCanNho: [
          'Lớp (Layer) là các tấm kính trong suốt xếp chồng lên nhau.',
          'Lớp trên che khuất lớp dưới; vùng trong suốt cho phép nhìn xuyên thấu.',
          'Chỉnh sửa trên lớp nào chỉ tác động duy nhất lên lớp đó.'
        ]
      },
      {
        id: 'tab_11_27_2',
        title: '2. Quản lý lớp (New Layer, thứ tự, ẩn/hiện, Opacity)',
        subtitle: 'Các thao tác điều khiển bảng điều khiển Layers Panel',
        iconName: 'Sliders',
        keyPoints: [
          'Tạo lớp mới: Nhấn nút dấu cộng dưới bảng Layers hoặc bấm phím tắt `Shift + Ctrl + N`.',
          'Thay đổi thứ tự lớp: Kéo thả layer lên trên hoặc xuống dưới bằng chuột, hoặc dùng nút mũi tên lên/xuống.',
          'Ẩn / Hiện lớp: Nhấp vào biểu tượng Con mắt bên trái tên layer để tạm thời ẩn đi chi tiết đó.',
          'Độ mờ đục (Opacity): Điều chỉnh thanh trượt Opacity từ 100% (rõ nét hoàn toàn) về 50% hoặc 0% (trong suốt hoàn toàn) để tạo hiệu ứng bóng mờ ảo diệu.',
          'Khóa lớp (Lock): Khóa điểm ảnh hoặc khóa vị trí để tránh vô tình vẽ nhầm lên lớp quan trọng.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thao tác quản trị Layer', 'Phím tắt / Nút bấm', 'Ý nghĩa thực tế'],
          rows: [
            ['Tạo lớp mới', 'Shift + Ctrl + N', 'Tạo tấm kính trắng tinh để vẽ chi tiết mới'],
            ['Ẩn / Hiện lớp', 'Biểu tượng Con Mắt', 'Tạm thời giấu chi tiết để so sánh trước/sau'],
            ['Độ mờ đục (Opacity)', 'Thanh trượt Opacity (0-100%)', 'Tạo hiệu ứng bóng ma hoặc làm mờ nền'],
            ['Xóa lớp', 'Phím Delete / Nút thùng rác', 'Vứt bỏ hẳn một lớp không còn sử dụng']
          ]
        },
        emCanNho: [
          'Tạo lớp mới bằng phím tắt `Shift + Ctrl + N`.',
          'Biểu tượng Con Mắt dùng để bật/tắt hiển thị lớp.',
          'Thanh trượt Opacity kiểm soát mức độ mờ đục trong suốt của lớp.'
        ]
      },
      {
        id: 'tab_11_27_3',
        title: '3. Công cụ cọ vẽ Brush, tẩy Eraser và chèn chữ Text Tool',
        subtitle: 'Bộ công cụ sáng tạo nghệ thuật trên từng lớp',
        iconName: 'PenTool',
        keyPoints: [
          'Paintbrush (P): Cọ vẽ nét mềm mại, có thể chọn kiểu đầu cọ (Brush Shape), kích thước (Size) và độ cứng (Hardness).',
          'Eraser (Shift + E): Tẩy xóa các nét vẽ thừa trên lớp đang chọn.',
          'Bucket Fill (Shift + B): Đổ màu nền hoặc tô màu mảng khép kín.',
          'Text Tool (T): Nhấp chuột tạo hộp văn bản, gõ chữ tiếng Việt (hỗ trợ chọn font chữ, kích cỡ chữ, màu sắc và căn lề). Lưu ý: Mỗi hộp văn bản tạo ra sẽ tự động sinh ra một Layer chữ độc lập.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Công cụ', 'Phím tắt', 'Thuộc tính quan trọng cần lưu ý'],
          rows: [
            ['Paintbrush', 'P', 'Size (Kích thước cọ), Spacing (Khoảng cách nét)'],
            ['Eraser', 'Shift + E', 'Tẩy trên Layer trong suốt sẽ biến thành trong suốt'],
            ['Text Tool', 'T', 'Tự động tạo Text Layer riêng, chọn font hỗ trợ tiếng Việt']
          ]
        },
        emCanNho: [
          'Công cụ cọ vẽ Paintbrush (P) dùng để vẽ nét nghệ thuật.',
          'Công cụ Text Tool (T) tự động sinh ra một lớp chữ riêng biệt.',
          'Luôn kiểm tra đúng lớp đang được chọn (Active Layer) trước khi cầm cọ vẽ.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao Tác Layer và Phím Tắt / Biểu Tượng',
      instruction: 'Nối thao tác quản lý lớp với phím tắt hoặc biểu tượng tương ứng:',
      matchingPairs: [
        { id: 'ly1', left: 'Tạo lớp mới (New Layer)', right: 'Shift + Ctrl + N' },
        { id: 'ly2', left: 'Bật / Tắt ẩn hiện lớp', right: 'Biểu tượng Con Mắt' },
        { id: 'ly3', left: 'Công cụ chèn văn bản Text Tool', right: 'Phím T' },
        { id: 'ly4', left: 'Điều chỉnh độ trong suốt', right: 'Thanh trượt Opacity' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Nguyên lý cơ bản nào sau đây mô tả ĐÚNG NHẤT về cách hoạt động của các Lớp (Layers) trong GIMP?',
        options: [
          'Các lớp giống như những tấm kính trong suốt xếp chồng lên nhau, lớp nằm trên sẽ che khuất lớp nằm dưới',
          'Các lớp được xếp nối tiếp nhau thành một hàng ngang',
          'Mỗi lớp là một trang sách lật qua lại',
          'Chỉ được phép tạo tối đa 2 lớp trong một bức ảnh'
        ],
        correctIndex: 0,
        explanation: 'Khái niệm tấm kính trong suốt xếp chồng là cốt lõi của cấu trúc đồ họa Layer.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tổ hợp phím tắt nào trong GIMP dùng để tạo nhanh một Lớp mới (New Layer)?',
        options: ['Shift + Ctrl + N', 'Ctrl + N', 'Alt + N', 'Ctrl + L'],
        correctIndex: 0,
        explanation: 'Shift + Ctrl + N mở hộp thoại tạo New Layer (trong khi Ctrl + N là tạo ảnh mới).',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Khi bạn chèn một dòng chữ bằng công cụ Text Tool (phím T), GIMP sẽ tự động làm điều gì?',
        options: [
          'Tự động tạo ra một Lớp chữ (Text Layer) riêng biệt mang tên dòng chữ đó',
          'Vẽ dính chặt chữ vào ảnh nền không thể sửa được nữa',
          'Xóa toàn bộ các lớp ảnh khác',
          'Tự động tắt phần mềm'
        ],
        correctIndex: 0,
        explanation: 'Text Tool tự động tạo ra một lớp độc lập giúp người dùng dễ dàng đổi font, sửa nội dung chữ bất kỳ lúc nào.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Muốn làm mờ một bức ảnh nền để dòng chữ tiêu đề màu trắng bên trên nổi bật rõ ràng, bạn nên chỉnh thông số nào của Lớp nền?',
        options: [
          'Giảm thanh trượt Opacity (độ mờ đục) của lớp nền xuống khoảng 40% - 60%',
          'Tăng kích thước cọ vẽ',
          'Bấm phím tắt Crop',
          'Xóa hẳn lớp nền đi'
        ],
        correctIndex: 0,
        explanation: 'Giảm Opacity làm giảm độ đậm nét của lớp, tạo hiệu ứng mờ ảo làm nổi bật các lớp chữ phía trên.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Biểu tượng hình Con Mắt bên cạnh mỗi Lớp trong bảng điều khiển Layers có chức năng gì?',
        options: [
          'Tạm thời Ẩn hoặc Hiện hiển thị lớp đó trên khung hình làm việc',
          'Đổi màu bức ảnh thành màu đen trắng',
          'Khóa không cho người khác nhìn trộm màn hình',
          'Kích hoạt camera máy tính'
        ],
        correctIndex: 0,
        explanation: 'Nhấp vào con mắt để ẩn/hiện lớp, rất hữu ích khi cần so sánh chi tiết hoặc giấu bớt các lớp tạm thời.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thiết Kế Banner: Thiệp Chúc Mừng Ngày Nhà Giáo Việt Nam 20/11',
        context: 'Làm thiệp tri ân thầy cô giáo bằng phần mềm đồ họa GIMP.',
        mission: 'Thiết kế bức thiệp đa lớp gồm ít nhất 3 Layer độc lập.',
        steps: [
          'Layer 1 (Background): Chèn bức ảnh bó hoa tươi thắm hoặc bảng đen phấn trắng.',
          'Layer 2 (Họa tiết vẽ): Tạo Layer mới, dùng cọ Paintbrush (P) vẽ một dải ruy băng màu đỏ mềm mại.',
          'Layer 3 (Lời chúc Text): Dùng Text Tool (T) gõ chữ "Tri Ân Thầy Cô 20-11", chọn font chữ thư pháp nghệ thuật.',
          'Tinh chỉnh: Giảm Opacity của hoa xuống 80% để dòng chữ nổi bật, xuất thành `thiep_20_11.png`.'
        ],
        outputRequirement: 'Tệp ảnh thiệp `thiep_20_11.png` hài hòa, bố cục lớp chuẩn xác, lời chúc trang trọng.',
        practicalTip: 'Đặt tên cho từng Layer (ví dụ: "Lop_Nen", "Lop_Hoa", "Lop_Chu") giúp bạn không bao giờ bị nhầm lẫn khi dự án có hàng chục lớp.'
      },
      mindmap: {
        id: 'mm_11_27',
        label: 'CÔNG CỤ VẼ & LỚP (LAYER)',
        color: '#e11d48',
        children: [
          {
            id: 'mm_11_27_1',
            label: 'Quản lý Layer',
            children: [
              { id: 'mm_11_27_1_1', label: 'Tấm kính trong suốt xếp chồng' },
              { id: 'mm_11_27_1_2', label: 'Tạo mới: Shift + Ctrl + N' },
              { id: 'mm_11_27_1_3', label: 'Ẩn/Hiện: Con mắt | Opacity: Độ mờ' }
            ]
          },
          {
            id: 'mm_11_27_2',
            label: 'Công cụ vẽ & Chữ',
            children: [
              { id: 'mm_11_27_2_1', label: 'Paintbrush (P): Cọ vẽ nghệ thuật' },
              { id: 'mm_11_27_2_2', label: 'Eraser (Shift + E): Tẩy xóa nét' },
              { id: 'mm_11_27_2_3', label: 'Text Tool (T): Tự tạo Text Layer' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Layer GIMP 11',
      badgeIcon: 'Layers',
      roleTitle: 'Chuyên Viên Thiết Kế Đồ Họa Đa Lớp',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ linh hồn của đồ họa số - hệ thống Lớp (Layer), tự tin sáng tạo các tác phẩm ghép ảnh nghệ thuật đỉnh cao.',
      skillsUnlocked: ['Tư duy làm việc theo Layer', 'Quản lý Opacity & Thứ tự lớp', 'Sử dụng Paintbrush & Text Tool']
    }
  },

  // Bài 28: Tạo ảnh động
  {
    id: 28,
    code: 'TIN11_B28',
    title: 'Tạo ảnh động',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Ảnh động GIF',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Thổi hồn vào hình ảnh: Tạo hoạt ảnh GIF sống động từ chuỗi các lớp Layer',
      description: 'Khám phá ảo ảnh thị giác của ảnh động: biến mỗi Layer thành một khung hình (Frame), thiết lập thời gian hiển thị tính bằng mili-giây (ms), xem trước hoạt ảnh với Animation Playback và xuất tệp GIF lặp vô tận.',
      accentColor: 'from-pink-600 to-rose-600',
      keyHighlights: ['Nguyên lý khung hình Frame từ Layer', 'Xem trước Filters -> Animation Playback', 'Xuất ảnh GIF lặp vô tận']
    },
    objectives: [
      {
        id: 'obj_11_28_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nguyên lý hoạt ảnh & khung hình (Frame)',
        description: 'Giải thích được nguyên lý hiện tượng lưu ảnh trên võng mạc và cách GIMP ánh xạ mỗi Layer thành một khung hình (Frame) chuyển động theo thời gian.',
        iconName: 'PlayCircle'
      },
      {
        id: 'obj_11_28_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Cài đặt thời gian & xuất ảnh động GIF',
        description: 'Thiết lập được cú pháp thời gian trễ trong tên lớp `(100ms)`, xem trước chuyển động bằng `Filters -> Animation -> Playback` và xuất tệp `.gif` chuẩn.',
        iconName: 'Film'
      },
      {
        id: 'obj_11_28_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy sáng tạo & tính kiên trì',
        description: 'Rèn luyện tính kiên nhẫn khi vẽ từng khung hình chuyển động tỉ mỉ và sáng tạo các nội dung ảnh động vui tươi, nhân văn.',
        iconName: 'Smile'
      }
    ],
    warmup: {
      title: 'Tình huống: Cuốn sổ hoạt hình vẽ tay lật nhanh (Flipbook)',
      scenario: 'Hồi nhỏ bạn từng vẽ một chú người que ở góc các trang vở, mỗi trang chú que cử động tay chân một chút. Khi dùng ngón tay cái lật nhanh các mép trang giấy, chú que bỗng chuyển động chạy nhảy như thật!',
      pollQuestion: 'Phần mềm GIMP biến điều kỳ diệu của cuốn sổ vẽ tay đó thành ảnh động số bằng cách nào?',
      pollOptions: [
        { id: 'p11_28_1', text: 'Xem mỗi Lớp (Layer) như một trang giấy (khung hình) và chiếu lần lượt từng lớp theo thứ tự thời gian', votesPercent: 95, isPopular: true, insight: 'Chính xác! Khi xuất sang định dạng GIF, GIMP sẽ biến các layer từ dưới lên trên thành các khung hình chuyển động liên tục.' },
        { id: 'p11_28_2', text: 'Nhúng một động cơ cơ học vào màn hình', votesPercent: 3, insight: 'Màn hình hiển thị điện tử, không có động cơ cơ học bên trong.' },
        { id: 'p11_28_3', text: 'Chỉ là ảo giác chứ ảnh không chuyển động', votesPercent: 2, insight: 'Đó là ảnh động kỹ thuật số thực sự theo chuẩn định dạng GIF.' }
      ],
      reflection: 'Mỗi bức ảnh động đẹp đẽ đều được tạo nên từ sự kiên trì ghép nối từng khung hình nhỏ bé.'
    },
    knowledge: [
      {
        id: 'tab_11_28_1',
        title: '1. Nguyên lý tạo ảnh động từ các khung hình (Layer)',
        subtitle: 'Ảo ảnh thị giác: Biến các lớp tĩnh thành chuỗi chuyển động liên tục',
        iconName: 'Layers',
        keyPoints: [
          'Nguyên lý hoạt ảnh: Dựa vào hiện tượng lưu ảnh trên võng mạc của mắt người. Khi chuỗi các hình ảnh thay đổi nhanh liên tiếp (từ 10 đến 24 hình/giây), não bộ sẽ ghép chúng thành một chuyển động mượt mà liên tục.',
          'Quy ước trong GIMP:',
          '  - Mỗi Layer đại diện cho một khung hình (Frame).',
          '  - Thứ tự phát: GIMP sẽ phát các khung hình lần lượt từ Layer dưới cùng (đáy bảng) lên dần Layer trên cùng (đỉnh bảng).',
          '  - Tạo chuyển động: Sao chép lớp (Duplicate Layer), dịch chuyển vị trí đối tượng một chút ở lớp mới để tạo bước chuyển tiếp.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Layer 1 (Đáy): Người que đứng yên', desc: 'Khung hình khởi đầu chuyển động' },
            { label: 'Layer 2 (Giữa): Người que co chân', desc: 'Khung hình chuẩn bị nhảy' },
            { label: 'Layer 3 (Đỉnh): Người que bật cao', desc: 'Khung hình đạt đỉnh cú nhảy' }
          ]
        },
        emCanNho: [
          'Mỗi Layer trong GIMP tương ứng với một khung hình (Frame) của ảnh động.',
          'Trật tự phát: Từ lớp dưới cùng lên đến lớp trên cùng.',
          'Nhân bản lớp (Duplicate Layer) rồi dịch chuyển đối tượng để tạo hoạt cảnh.'
        ]
      },
      {
        id: 'tab_11_28_2',
        title: '2. Thiết lập thời gian dừng và xem trước Animation Playback',
        subtitle: 'Kiểm soát tốc độ chuyển động tính bằng mili-giây (ms)',
        iconName: 'PlayCircle',
        keyPoints: [
          'Cú pháp thời gian trễ: Đổi tên Layer đính kèm thời gian dừng trong dấu ngoặc đơn `(thời_gian_ms)`. Ví dụ: `KhungHinh1 (200ms)`.',
          'Quy đổi thời gian: $1000\\text{ ms} = 1\\text{ giây}$. Ví dụ: `(100ms)` là 0.1 giây (10 khung hình/giây rất mượt mà).',
          'Xem trước hoạt ảnh: Vào menu `Filters -> Animation -> Playback...`:',
          '  - Nhấn nút `Play` để chạy thử chuyển động.',
          '  - Điều chỉnh thanh trượt tốc độ (Speed) để xem nhanh/chậm.',
          '  - Phát hiện các khung hình bị giật cục để tinh chỉnh lại.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thời gian ghi sau tên Layer', 'Tốc độ hiển thị', 'Cảm giác thị giác tương ứng'],
          rows: [
            ['(50ms)', '20 khung hình / giây', 'Chuyển động cực nhanh, chớp nhoáng'],
            ['(100ms) - (200ms)', '5 - 10 khung hình / giây', 'Tốc độ tiêu chuẩn, mượt mà vừa mắt cho ảnh GIF'],
            ['(1000ms)', '1 khung hình / giây', 'Dừng lại 1 giây, phù hợp đọc thông điệp chữ']
          ]
        },
        emCanNho: [
          'Ghi `(xxx ms)` sau tên Layer để định thời gian dừng cho từng khung hình.',
          'Dùng `Filters -> Animation -> Playback...` để xem trước chuyển động.',
          '100ms đến 200ms là tốc độ lý tưởng cho hầu hết ảnh động hoạt hình.'
        ]
      },
      {
        id: 'tab_11_28_3',
        title: '3. Xuất tệp ảnh động GIF lặp vô tận (Loop forever)',
        subtitle: 'Đóng gói thành tệp ảnh động tiêu chuẩn chia sẻ khắp Internet',
        iconName: 'Film',
        keyPoints: [
          'Các bước xuất ảnh động chuẩn:',
          '  - Bước 1: Chọn menu `File -> Export As...` (Shift + Ctrl + E).',
          '  - Bước 2: Đặt tên tệp có đuôi mở rộng là `.gif` (ví dụ: `nguoi_que_nhay.gif`).',
          '  - Bước 3: Trong bảng tùy chọn Export Image as GIF, BẮT BUỘC phải tích chọn ô: `As animation` (Nếu không tích ô này, ảnh chỉ xuất ra 1 ảnh tĩnh duy nhất!).',
          '  - Bước 4: Tích chọn ô `Loop forever` (để ảnh động lặp đi lặp lại vô tận không dừng).',
          '  - Bước 5: Bấm nút `Export` để hoàn thành.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'File -> Export As...', desc: 'Chọn định dạng đuôi .gif' },
            { label: 'Tích chọn [x] As animation', desc: 'Kích hoạt chế độ hoạt ảnh nhiều khung hình' },
            { label: 'Tích chọn [x] Loop forever', desc: 'Chuyển động lặp đi lặp lại vô tận' }
          ]
        },
        emCanNho: [
          'BẮT BUỘC phải tích chọn ô `As animation` khi xuất ảnh GIF trong GIMP.',
          'Tích chọn `Loop forever` để hoạt ảnh chuyển động lặp lại liên tục.',
          'Tệp `.gif` xuất ra có thể xem trực tiếp trên mọi trình duyệt web hoặc Zalo.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao Tác Tạo Ảnh Động trong GIMP',
      instruction: 'Nối thao tác với ý nghĩa thực thi:',
      matchingPairs: [
        { id: 'an1', left: 'Filters -> Animation -> Playback', right: 'Mở cửa sổ xem trước chuyển động của chuỗi Layer' },
        { id: 'an2', left: 'Đặt tên layer kèm (200ms)', right: 'Cài đặt thời gian dừng của khung hình đó là 0.2 giây' },
        { id: 'an3', left: 'Tùy chọn [x] As animation', right: 'Lệnh bắt buộc để GIMP xuất các Layer thành ảnh động' },
        { id: 'an4', left: 'Tùy chọn [x] Loop forever', right: 'Giúp ảnh GIF tự động quay vòng lặp đi lặp lại vô tận' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để xem trước chuyển động của chuỗi các lớp ảnh động trong GIMP, bạn truy cập vào menu nào?',
        options: [
          'Filters -> Animation -> Playback...',
          'File -> Save',
          'Edit -> Paste',
          'Colors -> Levels'
        ],
        correctIndex: 0,
        explanation: 'Filters -> Animation -> Playback mở trình phát hoạt cảnh cho phép xem trước tốc độ chuyển động.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Muốn quy định một khung hình (Layer) dừng lại trong khoảng thời gian nửa giây (0.5 giây), bạn viết cú pháp nào vào sau tên của Layer đó?',
        options: ['(500ms)', '(0.5s)', '(500s)', '(50ms)'],
        correctIndex: 0,
        explanation: 'GIMP sử dụng đơn vị mili-giây (ms); 0.5 giây = 500 mili-giây viết dạng `(500ms)`.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi xuất tệp ảnh động định dạng .GIF, tùy chọn nào sau đây BẮT BUỘC phải được tích chọn?',
        options: [
          'As animation (Dưới dạng hoạt ảnh)',
          'As PDF document',
          'Black and White only',
          'Compress to ZIP'
        ],
        correctIndex: 0,
        explanation: 'Nếu không tích chọn "As animation", GIMP sẽ gộp tất cả các lớp thành một bức ảnh tĩnh duy nhất.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Trật tự hiển thị các khung hình (Frames) khi phát ảnh động GIF trong GIMP diễn ra theo thứ tự nào?',
        options: [
          'Phát tuần tự từ Layer dưới cùng lên dần Layer trên cùng trong bảng Layers',
          'Phát từ trên đỉnh xuống đáy',
          'Phát ngẫu nhiên',
          'Chỉ phát Layer đầu tiên'
        ],
        correctIndex: 0,
        explanation: 'Quy ước chuẩn của GIMP là khung hình đầu tiên nằm ở đáy bảng Layer, các khung hình tiếp theo xếp chồng lên trên.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Tùy chọn "Loop forever" trong hộp thoại xuất ảnh GIF mang lại tác dụng gì?',
        options: [
          'Làm cho ảnh động tự động lặp lại liên tục không bao giờ dừng',
          'Làm cho tệp ảnh tự động nhân đôi dung lượng',
          'Khóa ảnh không cho người khác tải về',
          'Phát nhạc kèm theo ảnh'
        ],
        correctIndex: 0,
        explanation: 'Loop forever cài cắm cờ lặp vô tận giúp ảnh chuyển động tuần hoàn liên tục trên website.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Sáng Tạo: Tạo Hoạt Ảnh Đèn Giao Thông Nhấp Nháy (GIF)',
        context: 'Làm tài liệu tuyên truyền an toàn giao thông cho học sinh.',
        mission: 'Thiết kế cột đèn giao thông chuyển màu Đỏ - Vàng - Xanh lặp tuần hoàn.',
        steps: [
          'Khung 1 (Layer đáy): Đèn Đỏ sáng, Đèn Vàng và Xanh tắt. Đặt tên: `Den_Do (1000ms)`.',
          'Khung 2 (Layer giữa): Đèn Vàng sáng, Đèn Đỏ và Xanh tắt. Đặt tên: `Den_Vang (500ms)`.',
          'Khung 3 (Layer đỉnh): Đèn Xanh sáng, Đèn Đỏ và Vàng tắt. Đặt tên: `Den_Xanh (1000ms)`.',
          'Kiểm tra: Vào `Filters -> Animation -> Playback...` xem thử.',
          'Xuất bản: `File -> Export As...` -> `den_giao_thong.gif` (tích chọn `As animation` và `Loop forever`).'
        ],
        outputRequirement: 'Tệp `den_giao_thong.gif` chuyển màu nhịp nhàng, lặp lại vô tận, thời gian chuẩn xác.',
        practicalTip: 'Dùng công cụ Bucket Fill tô màu xám sẫm cho các đèn tắt để tạo hiệu ứng bóng đèn chân thực.'
      },
      mindmap: {
        id: 'mm_11_28',
        label: 'TẠO ẢNH ĐỘNG GIF',
        color: '#db2777',
        children: [
          {
            id: 'mm_11_28_1',
            label: 'Nguyên lý khung hình',
            children: [
              { id: 'mm_11_28_1_1', label: '1 Layer = 1 Frame' },
              { id: 'mm_11_28_1_2', label: 'Phát từ đáy lên đỉnh' },
              { id: 'mm_11_28_1_3', label: 'Cú pháp thời gian: (200ms)' }
            ]
          },
          {
            id: 'mm_11_28_2',
            label: 'Kiểm tra & Xuất bản',
            children: [
              { id: 'mm_11_28_2_1', label: 'Filters -> Animation -> Playback' },
              { id: 'mm_11_28_2_2', label: 'Export as .gif' },
              { id: 'mm_11_28_2_3', label: 'Tích: As animation & Loop forever' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nghệ Sĩ Hoạt Họa GIF 11',
      badgeIcon: 'PlayCircle',
      roleTitle: 'Chuyên Viên Hoạt Họa & Thiết Kế Hoạt Ảnh Số',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững nguyên lý hoạt ảnh và xuất thành công tác phẩm ảnh động GIF đầu tay của mình.',
      skillsUnlocked: ['Tạo khung hình Frame từ Layer', 'Cài đặt thời gian trễ (ms)', 'Xuất ảnh GIF lặp vô tận']
    }
  },

  // Bài 29: Khám phá phần mềm làm phim
  {
    id: 29,
    code: 'TIN11_B29',
    title: 'Khám phá phần mềm làm phim',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Dựng phim số',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bước vào xưởng phim kỹ thuật số: Làm quen với phần mềm biên tập video OpenShot / Shotcut',
      description: 'Khám phá ngôn ngữ điện ảnh số: hiểu khái niệm dự án phim (.osp), khám phá giao diện 4 phân khu chuẩn Hollywood (Project Files, Timeline dòng thời gian, Tracks rãnh đa tầng và Video Preview xem trước).',
      accentColor: 'from-amber-600 to-red-600',
      keyHighlights: ['Khái niệm Dự án phim số', 'Timeline & Các rãnh Tracks', 'Cửa sổ Video Preview thời gian thực']
    },
    objectives: [
      {
        id: 'obj_11_29_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu nguyên lý biên tập phim phi tuyến tính',
        description: 'Giải thích được nguyên lý dựng phim số trên dòng thời gian (Timeline) và phân biệt được tệp dự án phim với tệp video thành phẩm nén MP4.',
        iconName: 'Film'
      },
      {
        id: 'obj_11_29_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện & điều hướng giao diện làm phim',
        description: 'Nhận diện và điều hướng thành thạo 4 khu vực giao diện: Project Files (tài nguyên), Timeline (dòng thời gian), Tracks (các rãnh xếp chồng) và Video Preview (màn hình xem trước).',
        iconName: 'Layout'
      },
      {
        id: 'obj_11_29_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Văn hóa bản quyền âm nhạc & hình ảnh',
        description: 'Có ý thức tìm kiếm và sử dụng các nguồn nhạc, hình ảnh miễn phí bản quyền (No Copyright Sounds / Creative Commons) khi làm video.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Gửi tệp dự án phim (.osp) cho bạn và... bạn mở ra màn hình đen xì!',
      scenario: 'Bạn làm một video kỷ niệm rất công phu và gửi tệp `ky_niem.osp` (dung lượng chỉ 50 KB) cho bạn thân. Bạn ấy hí hửng mở lên thì màn hình đen ngòm và phần mềm báo lỗi: "Thiếu tất cả các tệp video và bài hát gốc!".',
      pollQuestion: 'Tại sao tệp dự án phim (.osp) lại không chứa trực tiếp các đoạn video và bài hát bên trong?',
      pollOptions: [
        { id: 'p11_29_1', text: 'Vì tệp dự án chỉ lưu "đường dẫn liên kết" và các mốc thời gian cắt ghép, chứ không chứa nội dung các tệp video nặng hàng Gigabyte', votesPercent: 95, isPopular: true, insight: 'Chính xác! Tệp dự án chỉ là kịch bản chỉ đạo. Muốn bạn xem được, bạn phải xuất thành phẩm (Export Video) ra tệp .mp4.' },
        { id: 'p11_29_2', text: 'Vì máy tính của bạn thân bị hỏng loa', votesPercent: 3, insight: 'Báo thiếu file media là do cơ chế liên kết đường dẫn của tệp dự án dựng phim.' },
        { id: 'p11_29_3', text: 'Vì gửi qua Zalo làm mất dữ liệu', votesPercent: 2, insight: 'Lý do cốt lõi là sự khác biệt giữa tệp dự án (Project file) và tệp video xuất bản.' }
      ],
      reflection: 'Hiểu đúng bản chất tệp dự án phim giúp bạn không bao giờ gửi nhầm file cho thầy cô hoặc bạn bè.'
    },
    knowledge: [
      {
        id: 'tab_11_29_1',
        title: '1. Khái niệm dự án phim và nguyên lý dựng video số',
        subtitle: 'Bản chất của biên tập phi tuyến tính (Non-Linear Editing - NLE)',
        iconName: 'Film',
        keyPoints: [
          'Dự án phim (Video Project): Là tệp lưu trữ toàn bộ cấu trúc biên tập (thời điểm cắt gọt, hiệu ứng, chữ, âm thanh) nhưng chỉ chứa đường dẫn tham chiếu đến các tệp video, ảnh, nhạc gốc chứ không nhúng trực tiếp dữ liệu thô vào bên trong.',
          'Ví dụ định dạng dự án: OpenShot (`.osp`), Shotcut (`.mlt`), Premiere (`.prproj`).',
          'Lưu ý sống còn: Không được di chuyển, đổi tên hoặc xóa các tệp video/ảnh/nhạc gốc trên máy tính trong quá trình đang dựng phim, nếu không dự án sẽ bị lỗi mất đường dẫn (Missing Media).',
          'Xuất bản (Export Video): Quá trình máy tính tổng hợp (Render) tất cả các lớp hình ảnh, âm thanh thành một tệp video duy nhất chuẩn nén `.mp4` để xem trên mọi thiết bị.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Tệp Dự Án (.osp / .mlt)', 'Tệp Video Thành Phẩm (.mp4)'],
          rows: [
            ['Dung lượng tệp', 'Rất nhẹ (chỉ vài chục Kilobyte)', 'Rất nặng (vài trăm Megabyte đến Gigabyte)'],
            ['Bản chất nội dung', 'Chỉ chứa kịch bản và đường dẫn liên kết', 'Chứa toàn bộ hình ảnh và âm thanh đã hòa trộn'],
            ['Khả năng chỉnh sửa', 'Mở ra chỉnh sửa từng đoạn, từng chữ dễ dàng', 'Đã bị nén cứng thành một khối, rất khó bóc tách'],
            ['Khả năng chia sẻ', 'Chỉ mở được trên máy đã có sẵn các tệp gốc', 'Chia sẻ cho mọi người xem trên điện thoại, TV']
          ]
        },
        emCanNho: [
          'Tệp dự án phim (`.osp`) chỉ chứa đường dẫn liên kết, dung lượng rất nhẹ.',
          'Tuyệt đối không xóa hoặc đổi chỗ các tệp video gốc khi đang dựng phim.',
          'Phải thực hiện `Export Video` ra định dạng `.mp4` để mọi người cùng xem được.'
        ]
      },
      {
        id: 'tab_11_29_2',
        title: '2. Giao diện phần mềm dựng phim: Project Files, Timeline, Tracks, Preview',
        subtitle: 'Bố cục 4 khu vực làm việc chuẩn của xưởng phim số OpenShot',
        iconName: 'Layout',
        keyPoints: [
          '1. Vùng tệp dự án (Project Files - góc trên bên trái): Nơi nhập (Import) và chứa toàn bộ các nguyên liệu video, hình ảnh, âm thanh phục vụ cho bộ phim.',
          '2. Vùng xem trước (Video Preview - góc trên bên phải): Màn hình TV thu nhỏ cho phép xem lại video đang dựng theo thời gian thực kèm các nút Play, Pause, Tua đi/Tua lại.',
          '3. Vùng dòng thời gian (Timeline - góc dưới): Chiều ngang biểu thị thời gian tính bằng Giờ:Phút:Giây:Khung hình. Đầu đọc (Playhead / Con trỏ đỏ) chỉ vị trí thời gian hiện tại.',
          '4. Các rãnh đa tầng (Tracks): Các hàng ngang xếp chồng lên nhau trên Timeline. Nguyên tắc: Rãnh nằm ở trên (Track 5) sẽ che khuất hình ảnh của rãnh nằm ở dưới (Track 4). Rãnh âm thanh có thể đặt ở bất kỳ Track nào.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Project Files (Tài nguyên)', desc: 'Chứa video, hình ảnh logo, tệp nhạc mp3' },
            { label: 'Video Preview (Màn hình xem)', desc: 'Màn hình hiển thị kết quả thời gian thực' },
            { label: 'Timeline & Tracks (Dòng thời gian)', desc: 'Nơi sắp xếp, cắt ghép các phân cảnh phim' }
          ]
        },
        emCanNho: [
          'Giao diện gồm 4 phần: Project Files, Video Preview, Timeline và Tracks.',
          'Con trỏ đỏ (Playhead) chỉ mốc thời gian đang hiển thị trên màn hình Preview.',
          'Quy tắc Track: Track trên che Track dưới (tương tự như Layer trong đồ họa).'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Khu Vực Giao Diện Làm Phim và Nhiệm Vụ',
      instruction: 'Nối khu vực trên giao diện phần mềm dựng phim với vai trò tương ứng:',
      matchingPairs: [
        { id: 'vd1', left: 'Vùng Project Files', right: 'Kho chứa các đoạn video, ảnh chụp và tệp nhạc nhập vào' },
        { id: 'vd2', left: 'Vùng Video Preview', right: 'Màn hình chiếu thử bộ phim theo thời gian thực' },
        { id: 'vd3', left: 'Dòng thời gian Timeline', right: 'Thước đo ngang hiển thị trật tự thời gian diễn ra bộ phim' },
        { id: 'vd4', left: 'Các rãnh Tracks', right: 'Các tầng xếp chồng clip; rãnh trên che rãnh dưới' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tại sao khi gửi tệp dự án phim (.osp) cho người khác mà không đính kèm các tệp video và nhạc gốc, người nhận lại không xem được video?',
        options: [
          'Vì tệp dự án chỉ chứa đường dẫn liên kết đến các tệp nguyên liệu trên máy tính bạn chứ không chứa nội dung video bên trong',
          'Vì phần mềm bị hỏng',
          'Vì người nhận chưa cắm tai nghe',
          'Vì tệp dự án bị nhiễm virus'
        ],
        correctIndex: 0,
        explanation: 'Cơ chế NLE chỉ lưu metadata và đường dẫn tệp để tối ưu tốc độ xử lý.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Trên Timeline của phần mềm làm phim, quy tắc hiển thị giữa các rãnh (Tracks) xếp chồng lên nhau là gì?',
        options: [
          'Đoạn video nằm ở Track phía trên sẽ che khuất hình ảnh của đoạn video nằm ở Track phía dưới',
          'Đoạn video ở Track dưới sẽ che đoạn video ở Track trên',
          'Tất cả các rãnh tự động hòa lẫn màu vào nhau',
          'Chỉ có Track 1 mới phát được hình ảnh'
        ],
        correctIndex: 0,
        explanation: 'Tương tự hệ thống Layer trong đồ họa: Track trên đè lên Track dưới.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Thanh con trỏ màu đỏ (Playhead) di chuyển ngang trên dòng thời gian Timeline có ý nghĩa gì?',
        options: [
          'Chỉ định chính xác vị trí thời gian hiện tại đang được chiếu trên màn hình Video Preview',
          'Báo hiệu máy tính sắp hết pin',
          'Đánh dấu đoạn video bị lỗi',
          'Xóa toàn bộ các video đi qua'
        ],
        correctIndex: 0,
        explanation: 'Playhead là đầu đọc chỉ thời điểm hiện tại của thước đo thời gian.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Định dạng tệp video chuẩn quốc tế phổ biến nhất hiện nay, tương thích trên mọi điện thoại, máy tính và tivi thông minh là gì?',
        options: ['.mp4', '.osp', '.psd', '.exe'],
        correctIndex: 0,
        explanation: 'MP4 (chuẩn nén H.264/AAC) là định dạng video đa phương tiện phổ biến nhất hành tinh.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Hành động nào sau đây cần TUYỆT ĐỐI TRÁNH trong khi bạn đang thực hiện dựng một dự án phim trên máy tính?',
        options: [
          'Đổi tên thư mục chứa các video gốc hoặc xóa bớt các đoạn video gốc trên ổ đĩa',
          'Bấm nút Play để xem thử',
          'Lưu dự án định kỳ bằng Ctrl + S',
          'Kéo dài thanh thước đo Timeline'
        ],
        correctIndex: 0,
        explanation: 'Đổi tên hoặc xóa file gốc sẽ làm đứt gãy đường dẫn liên kết, khiến dự án báo lỗi Missing Media đỏ rực.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Khởi Tạo: Thiết Lập Thư Mục Dự Án Phim "Hành Trình Tri Thức 11"',
        context: 'Chuẩn bị dựng video giới thiệu về các hoạt động trải nghiệm của lớp.',
        mission: 'Tổ chức cấu trúc thư mục làm phim chuyên nghiệp và khởi tạo dự án OpenShot.',
        steps: [
          'Bước 1: Tạo thư mục lớn `DU_AN_PHIM_11` trên ổ D:.',
          'Bước 2: Tạo 4 thư mục con bên trong: `1_Video_Goc`, `2_Hinh_Anh`, `3_Am_Thanh`, `4_Thanh_Pham`.',
          'Bước 3: Mở OpenShot, lưu dự án ngay từ đầu: `File -> Save Project` với tên `Phim_Lop_11.osp` vào thư mục lớn.',
          'Bước 4: Nhập (Import) 3 video ngắn và 1 bài nhạc nền mp3 vào vùng Project Files.'
        ],
        outputRequirement: 'Cấu trúc thư mục ngăn nắp, khoa học, dự án OpenShot đã sẵn sàng biên tập.',
        practicalTip: 'Tổ chức thư mục dự án ngăn nắp ngay từ ngày đầu giúp bạn không bao giờ bị thất lạc file khi dự án kéo dài nhiều tuần.'
      },
      mindmap: {
        id: 'mm_11_29',
        label: 'PHẦN MỀM LÀM PHIM',
        color: '#ea580c',
        children: [
          {
            id: 'mm_11_29_1',
            label: 'Khái niệm cốt lõi',
            children: [
              { id: 'mm_11_29_1_1', label: 'Tệp dự án .osp (Đường dẫn nhẹ)' },
              { id: 'mm_11_29_1_2', label: 'Tệp thành phẩm .mp4 (Render nén)' },
              { id: 'mm_11_29_1_3', label: 'Không xóa/đổi chỗ file gốc' }
            ]
          },
          {
            id: 'mm_11_29_2',
            label: '4 Phân khu giao diện',
            children: [
              { id: 'mm_11_29_2_1', label: 'Project Files: Kho nguyên liệu' },
              { id: 'mm_11_29_2_2', label: 'Video Preview: Màn hình chiếu' },
              { id: 'mm_11_29_2_3', label: 'Timeline & Tracks: Xếp lớp thời gian' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Sản Xuất Phim Khởi Nghiệp 11',
      badgeIcon: 'Film',
      roleTitle: 'Chuyên Viên Quản Trị Dự Án Phim Số',
      congratsMessage: 'Tuyệt vời! Bạn đã bước vào thế giới điện ảnh số, nắm chắc giao diện và nguyên tắc vận hành của phần mềm dựng phim chuyên nghiệp.',
      skillsUnlocked: ['Tổ chức thư mục dự án phim', 'Hiểu bản chất .osp vs .mp4', 'Làm chủ 4 phân khu giao diện làm phim']
    }
  },

  // Bài 30: Biên tập phim
  {
    id: 30,
    code: 'TIN11_B30',
    title: 'Biên tập phim',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Kỹ thuật dựng phim',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Phép màu của người dựng phim: Cắt gọt khung hình, chuyển cảnh mượt mà và phối nhạc đỉnh cao',
      description: 'Thực hành các thao tác biên tập sống còn: Cắt tỉa (Trim), Tách đoạn (Split bằng công cụ Razor Tool), thêm hiệu ứng chuyển cảnh (Transitions), chèn phụ đề tiêu đề và điều chỉnh âm lượng (Fade in / Fade out).',
      accentColor: 'from-amber-600 to-red-600',
      keyHighlights: ['Cắt tỉa & Tách đoạn Razor Tool', 'Chuyển cảnh mượt mà Transitions', 'Hiệu ứng âm thanh Fade in / Fade out']
    },
    objectives: [
      {
        id: 'obj_11_30_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nắm vững quy trình biên tập phim',
        description: 'Trình bày được các bước hoàn thiện một thước phim: sắp xếp cảnh -> cắt gọt chi tiết thừa -> thêm chuyển cảnh -> chèn tiêu đề -> phối âm thanh -> xuất video.',
        iconName: 'Scissors'
      },
      {
        id: 'obj_11_30_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hiện cắt ghép & chuyển cảnh, âm thanh',
        description: 'Sử dụng thành thạo công cụ kéo cắt Razor Tool (C), áp dụng hiệu ứng chuyển cảnh Transitions mềm mại và chỉnh Fade in/out cho nhạc nền.',
        iconName: 'Sliders'
      },
      {
        id: 'obj_11_30_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Nhịp điệu cảm xúc & sự chỉn chu',
        description: 'Rèn luyện cảm quan về nhịp điệu phim (Rhythm), không lạm dụng quá nhiều hiệu ứng chuyển cảnh lòe loẹt làm người xem bị chóng mặt.',
        iconName: 'Heart'
      }
    ],
    warmup: {
      title: 'Tình huống: Video quay bị rung tay 5 giây đầu và kết thúc quá đột ngột',
      scenario: 'Một đoạn video bạn quay cảnh cô giáo bước vào lớp bị rung lắc 5 giây đầu do chưa cầm chắc máy, và ở giây cuối cùng thì bạn vô tình lia máy xuống đất.',
      pollQuestion: 'Thao tác kỹ thuật nào trên Timeline giúp bạn loại bỏ chính xác 5 giây đầu và 2 giây cuối bị lỗi đó?',
      pollOptions: [
        { id: 'p11_30_1', text: 'Kéo mép clip để cắt tỉa (Trim) hoặc dùng công cụ kéo cắt (Razor Tool - phím C) để tách và xóa đoạn thừa', votesPercent: 95, isPopular: true, insight: 'Chính xác! Cắt gọt (Trim & Split) là thao tác căn bản nhất để giữ lại những thước phim đắt giá nhất.' },
        { id: 'p11_30_2', text: 'Quay lại toàn bộ từ đầu', votesPercent: 3, insight: 'Khoảnh khắc tự nhiên không thể quay lại được.' },
        { id: 'p11_30_3', text: 'Để nguyên không sửa', votesPercent: 2, insight: 'Để đoạn rung lắc sẽ làm giảm nghiêm trọng chất lượng của bộ phim.' }
      ],
      reflection: 'Nghệ thuật làm phim không nằm ở lúc bấm máy quay, mà nằm ở bàn tay người biên tập trên bàn dựng.'
    },
    knowledge: [
      {
        id: 'tab_11_30_1',
        title: '1. Cắt gọt và tách đoạn video (Trim, Split)',
        subtitle: 'Loại bỏ chi tiết hỏng, gạn đục khơi trong cho từng cảnh quay',
        iconName: 'Scissors',
        keyPoints: [
          'Kéo mép clip (Trimming): Đặt chuột vào mép đầu hoặc mép cuối của đoạn clip trên Timeline, con trỏ đổi thành mũi tên 2 chiều, kéo vào trong để rút ngắn thời lượng.',
          'Công cụ kéo cắt (Razor Tool - Phím tắt C):',
          '  - Bật biểu tượng chiếc kéo (Razor Tool).',
          '  - Nhấp chuột vào đúng vị trí con trỏ đỏ trên clip để chia 1 clip dài thành 2 clip độc lập.',
          '  - Nhấp chọn đoạn thừa bị hỏng và bấm phím `Delete` để xóa bỏ.',
          'Bắt dính (Snapping - Biểu tượng nam châm): Bật nam châm để các đoạn clip tự động hút dính vào nhau mà không bị hở khoảng đen giữa các cảnh.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thao tác cắt gọt', 'Cách thực hiện', 'Khi nào nên dùng?'],
          rows: [
            ['Kéo mép (Trim)', 'Kéo đầu/cuối clip', 'Cắt bỏ vài giây chuẩn bị ở đầu hoặc thừa ở đuôi'],
            ['Tách đoạn (Split)', 'Razor Tool (Phím C)', 'Cắt đôi clip để chèn một hình ảnh khác vào giữa'],
            ['Xóa đoạn hỏng', 'Chọn đoạn + Phím Delete', 'Loại bỏ đoạn phim bị rung lắc, mờ nét']
          ]
        },
        emCanNho: [
          'Kéo mép clip để cắt tỉa nhanh đầu và đuôi đoạn phim.',
          'Dùng công cụ kéo cắt Razor Tool (C) để chia đôi clip tại vị trí con trỏ đỏ.',
          'Luôn bật tính năng Bắt dính (Nam châm) để các clip nối liền mạch không bị đen.'
        ]
      },
      {
        id: 'tab_11_30_2',
        title: '2. Thêm hiệu ứng chuyển cảnh (Transitions) và chèn tiêu đề',
        subtitle: 'Nối kết các phân cảnh mượt mà và làm rõ thông điệp',
        iconName: 'Sparkles',
        keyPoints: [
          'Hiệu ứng chuyển cảnh (Transitions): Giúp chuyển tiếp từ cảnh quay này sang cảnh quay tiếp theo một cách êm ái thay vì bị giật cục đột ngột.',
          'Cách thêm Transitions trong OpenShot:',
          '  - Mở tab `Transitions`, chọn hiệu ứng mong muốn (như Fade, Wipe, Dissolve).',
          '  - Kéo thả hiệu ứng đặt đè lên vị trí giao nhau giữa 2 clip trên Timeline.',
          'Chèn tiêu đề (Titles): Vào menu `Title -> Title...`, chọn mẫu khung chữ, nhập nội dung, chọn màu chữ và font chữ tiếng Việt, sau đó kéo tệp tiêu đề đặt lên một Track ở phía trên clip video.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Clip Cảnh A', desc: 'Đoạn phim kết thúc cảnh thứ nhất' },
            { label: 'Hiệu ứng Fade (Mờ dần)', desc: 'Cầu nối chuyển cảnh êm ái dài 1 giây' },
            { label: 'Clip Cảnh B', desc: 'Đoạn phim mở đầu cảnh thứ hai' }
          ]
        },
        emCanNho: [
          'Kéo thả hiệu ứng từ tab Transitions đặt vào điểm giao giữa hai clip.',
          'Ưu tiên hiệu ứng mờ dần (Fade / Dissolve) để giữ tính chuyên nghiệp.',
          'Tiêu đề (Title) luôn được đặt ở Track phía trên để hiển thị đè lên video.'
        ]
      },
      {
        id: 'tab_11_30_3',
        title: '3. Biên tập âm thanh (Fade in/out) và xuất tệp video MP4',
        subtitle: 'Hòa âm phối khí và hoàn tất thành phẩm xuất xưởng',
        iconName: 'Volume2',
        keyPoints: [
          'Hiệu ứng Fade Âm thanh:',
          '  - `Fade in` (To dần ở đầu bài): Nhạc nền từ từ to lên nhẹ nhàng khi mở màn.',
          '  - `Fade out` (Nhỏ dần ở cuối bài): Nhạc nền nhỏ dần rồi tắt hẳn khi video kết thúc (tránh bị cụt nhạc đột ngột gây khó chịu).',
          'Điều chỉnh âm lượng (Volume): Chuột phải vào tệp nhạc trên Timeline -> chọn `Volume` -> chỉnh 50% hoặc 30% để tiếng nhạc nền không át tiếng thuyết minh của con người.',
          'Xuất video hoàn chỉnh: Nhấp vào nút tròn đỏ `Export Video` trên thanh công cụ -> Chọn Profile: Web, Target: MP4 (h.264), Quality: Med/High -> Bấm `Export Video`.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thông số xuất video', 'Giá trị khuyên dùng', 'Mục đích tối ưu'],
          rows: [
            ['Định dạng (Format)', 'MP4 (h.264)', 'Xem mượt trên mọi điện thoại, Youtube, TV'],
            ['Độ phân giải (Resolution)', 'FHD 1080p 30fps', 'Hình ảnh sắc nét chuẩn màn hình hiện đại'],
            ['Chất lượng (Quality)', 'Medium / High', 'Cân bằng giữa độ nét và dung lượng tệp vừa phải']
          ]
        },
        emCanNho: [
          'Nhạc nền phải có `Fade in` ở đầu và `Fade out` ở cuối để kết thúc êm tai.',
          'Giảm âm lượng nhạc nền xuống 30-40% nếu có giọng người thuyết minh.',
          'Xuất video chuẩn `MP4 Full HD 1080p` để chia sẻ cho mọi người cùng thưởng thức.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Kỹ Thuật Dựng Phim và Mục Đích',
      instruction: 'Nối kỹ thuật dựng phim với tác dụng của nó:',
      matchingPairs: [
        { id: 'ed1', left: 'Công cụ kéo cắt Razor Tool (C)', right: 'Tách đôi đoạn video tại vị trí con trỏ đỏ để xóa chi tiết thừa' },
        { id: 'ed2', left: 'Hiệu ứng Fade Out âm thanh', right: 'Làm tiếng nhạc nền nhỏ dần rồi tắt êm ái khi hết phim' },
        { id: 'ed3', left: 'Hiệu ứng Transitions', right: 'Tạo bước chuyển tiếp mượt mà êm ái giữa 2 cảnh quay' },
        { id: 'ed4', left: 'Chức năng Export Video', right: 'Tổng hợp mọi lớp hình ảnh âm thanh thành tệp video .mp4' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phím tắt nào trong OpenShot dùng để kích hoạt nhanh công cụ kéo cắt tách đoạn video (Razor Tool)?',
        options: ['Phím C', 'Phím X', 'Phím V', 'Phím B'],
        correctIndex: 0,
        explanation: 'Phím C (Cut / Cleave) kích hoạt nhanh biểu tượng chiếc kéo Razor Tool trên Timeline.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Hiệu ứng "Fade out" đối với tệp âm thanh bài hát ở cuối video có tác dụng gì?',
        options: [
          'Làm âm lượng tiếng nhạc nhỏ dần từ từ rồi tắt hẳn một cách êm ái',
          'Làm bài hát chạy nhanh gấp đôi',
          'Làm biến đổi giọng nói người thành tiếng người máy',
          'Lặp lại bài hát thêm 10 lần'
        ],
        correctIndex: 0,
        explanation: 'Fade out là kỹ thuật làm âm lượng nhỏ dần về 0 để kết thúc video tự nhiên, không bị giật cụt.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tại sao khi lồng nhạc nền cho video có lời thuyết minh của giáo viên hoặc bạn học, ta nên hạ âm lượng (Volume) của bài nhạc xuống khoảng 30% - 40%?',
        options: [
          'Để tiếng nhạc nền không lấn át tiếng người nói, giúp người xem nghe rõ ràng nội dung bài thuyết trình',
          'Để loa máy tính đỡ bị tốn điện',
          'Vì phần mềm không cho phát nhạc to',
          'Để video chạy nhanh hơn'
        ],
        correctIndex: 0,
        explanation: 'Cân bằng âm thanh (Audio Ducking/Mixing) đảm bảo giọng nói chính luôn rõ ràng, nổi bật trên nền nhạc.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Để chèn một dòng chữ tiêu đề "Chào mừng các bạn đến với Lớp 11A1" đè lên trên đoạn video mở đầu, bạn cần đặt đoạn tiêu đề ở rãnh (Track) nào?',
        options: [
          'Đặt ở một Track nằm PHÍA TRÊN đoạn video đó',
          'Đặt ở Track nằm phía dưới đoạn video',
          'Đặt ở ngoài Timeline',
          'Xóa đoạn video đi rồi mới đặt tiêu đề'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc rãnh: Đối tượng ở Track trên sẽ hiển thị đè lên trên đối tượng ở Track dưới.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Khi xuất video để đăng tải lên YouTube hoặc gửi qua Zalo cho cả lớp xem, định dạng xuất bản nào sau đây là TỐI ƯU NHẤT?',
        options: [
          'Định dạng MP4 (chuẩn nén video H.264 và âm thanh AAC)',
          'Định dạng tệp dự án .osp',
          'Định dạng ảnh tĩnh .jpg',
          'Định dạng văn bản .txt'
        ],
        correctIndex: 0,
        explanation: 'MP4 H.264 là chuẩn video toàn cầu nhẹ, nét và tương thích trên 100% các thiết bị số.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Biên Tập Video Clip Giới Thiệu Trường THPT Dài 1 Phút',
        context: 'Làm sản phẩm truyền thông chào đón các em học sinh lớp 10 nhập trường.',
        mission: 'Biên tập trọn vẹn video clip 60 giây gồm tiêu đề, cắt gọt cảnh, nhạc nền và xuất file MP4.',
        steps: [
          'Bước 1: Sắp xếp 4 clip cảnh quay trường (Cổng trường, Sân trường, Lớp học, Thư viện) lên Track 2.',
          'Bước 2: Cắt bỏ các đoạn bị rung tay bằng Razor Tool (C), đảm bảo mỗi cảnh dài 10-15 giây.',
          'Bước 3: Đặt hiệu ứng chuyển cảnh `Fade` giữa các đoạn clip.',
          'Bước 4: Kéo tệp nhạc nền tuổi học trò vào Track 1, chỉnh Volume 40%, thêm Fade in ở đầu và Fade out ở cuối.',
          'Bước 5: Thêm tiêu đề "Ngôi Trường Mến Yêu" trên Track 3 ở 5 giây đầu tiên.',
          'Bước 6: Xuất video thành phẩm: `Gioi_Thieu_Truong.mp4` chuẩn 1080p.'
        ],
        outputRequirement: 'Tệp video `Gioi_Thieu_Truong.mp4` hoàn chỉnh, hình ảnh mượt mà, âm nhạc êm dịu, không lỗi đen hình.',
        practicalTip: 'Đeo tai nghe khi dựng phim để nghe rõ các tiếng ồn tạp âm và điều chỉnh độ cân bằng âm lượng chính xác nhất.'
      },
      mindmap: {
        id: 'mm_11_30',
        label: 'BIÊN TẬP PHIM',
        color: '#ea580c',
        children: [
          {
            id: 'mm_11_30_1',
            label: 'Cắt gọt & Chuyển cảnh',
            children: [
              { id: 'mm_11_30_1_1', label: 'Trim: Kéo mép đầu/cuối clip' },
              { id: 'mm_11_30_1_2', label: 'Razor Tool (C): Tách đôi clip' },
              { id: 'mm_11_30_1_3', label: 'Transitions: Chuyển cảnh êm ái' }
            ]
          },
          {
            id: 'mm_11_30_2',
            label: 'Âm thanh & Xuất bản',
            children: [
              { id: 'mm_11_30_2_1', label: 'Fade in / Fade out âm thanh' },
              { id: 'mm_11_30_2_2', label: 'Giảm âm lượng nhạc nền (30-40%)' },
              { id: 'mm_11_30_2_3', label: 'Export Video: MP4 Full HD' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Đạo Diễn Dựng Phim 11',
      badgeIcon: 'Scissors',
      roleTitle: 'Chuyên Viên Biên Tập & Kỹ Xảo Video Số',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm trọn các kỹ năng dựng phim cốt lõi: cắt gọt, chuyển cảnh, hòa âm và xuất bản video chất lượng cao.',
      skillsUnlocked: ['Tách đoạn bằng Razor Tool', 'Hiệu ứng Transitions & Tiêu đề', 'Kỹ thuật Fade âm thanh & Render MP4']
    }
  },

  // Bài 31: Thực hành tạo phim hoạt hình
  {
    id: 31,
    code: 'TIN11_B31',
    title: 'Thực hành tạo phim hoạt hình',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Dự án Phim hoạt hình',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Đỉnh cao tích hợp đa phương tiện: Tự tay sản xuất bộ phim hoạt hình ngắn hoàn chỉnh',
      description: 'Dự án tổng hợp cuối năm: Kết hợp sức mạnh vẽ nhân vật tách nền của GIMP với kỹ xảo dàn dựng, chuyển cảnh và lồng tiếng của OpenShot để tạo nên một bộ phim hoạt hình ngắn ý nghĩa.',
      accentColor: 'from-amber-600 to-red-600',
      keyHighlights: ['Xây dựng kịch bản phân cảnh Storyboard', 'Vẽ nhân vật tách nền PNG trong GIMP', 'Dàn dựng, lồng tiếng & hòa âm trong OpenShot']
    },
    objectives: [
      {
        id: 'obj_11_31_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình sản xuất phim hoạt hình số',
        description: 'Nắm vững quy trình 3 giai đoạn sản xuất phim: Tiền kỳ (Kịch bản Storyboard) -> Sản xuất (Vẽ đồ họa GIMP) -> Hậu kỳ (Dựng phim, lồng tiếng, xuất video trong OpenShot).',
        iconName: 'Clapperboard'
      },
      {
        id: 'obj_11_31_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tích hợp GIMP và OpenShot hoàn chỉnh',
        description: 'Vẽ và xuất các nhân vật trong suốt (.png) từ GIMP, sau đó đưa vào OpenShot để tạo hoạt cảnh di chuyển, lồng tiếng thoại và phối nhạc thành công.',
        iconName: 'Video'
      },
      {
        id: 'obj_11_31_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Làm việc nhóm & truyền tải thông điệp ý nghĩa',
        description: 'Rèn luyện tinh thần hợp tác nhóm, phân công công việc hiệu quả và lựa chọn đề tài phim mang tính giáo dục, nhân văn (bảo vệ môi trường, tình bạn tuổi học trò).',
        iconName: 'Users'
      }
    ],
    warmup: {
      title: 'Tình huống: Một bộ phim hoạt hình 2 phút cần bao nhiêu công sức?',
      scenario: 'Để làm một bộ phim hoạt hình ngắn dự thi cấp trường, nhóm của bạn có 3 thành viên: Một bạn giỏi viết văn, một bạn vẽ rất đẹp trên máy tính và một bạn rất am hiểu về âm nhạc và phần mềm dựng video.',
      pollQuestion: 'Phương án phân công công việc theo quy trình xưởng phim chuyên nghiệp nào sau đây là HỢP LÝ NHẤT?',
      pollOptions: [
        { id: 'p11_31_1', text: 'Bạn viết văn làm Kịch bản (Storyboard) -> Bạn vẽ thiết kế nhân vật trong GIMP -> Bạn dựng phim lắp ráp cảnh và lồng âm thanh trong OpenShot', votesPercent: 96, isPopular: true, insight: 'Chính xác! Mô hình chuyên môn hóa Tiền kỳ - Đồ họa - Hậu kỳ là bí quyết làm nên thành công của mọi xưởng phim hoạt hình.' },
        { id: 'p11_31_2', text: 'Cả 3 bạn cùng tranh nhau giành lấy chiếc chuột máy tính', votesPercent: 2, insight: 'Tranh giành công cụ chỉ gây mất đoàn kết và lãng phí thời gian.' },
        { id: 'p11_31_3', text: 'Để một bạn làm hết còn 2 bạn đi ngủ', votesPercent: 2, insight: 'Làm việc nhóm đòi hỏi sự chung sức và tinh thần trách nhiệm của mọi thành viên.' }
      ],
      reflection: 'Sự kết hợp ăn ý giữa Kịch bản hay - Hình ảnh đẹp - Âm thanh truyền cảm sẽ tạo nên một tác phẩm hoạt hình lay động lòng người.'
    },
    knowledge: [
      {
        id: 'tab_11_31_1',
        title: '1. Xây dựng kịch bản phân cảnh (Storyboard)',
        subtitle: 'Bản vẽ thiết kế kiến trúc trước khi bắt tay vào dựng phim',
        iconName: 'FileText',
        keyPoints: [
          'Kịch bản phân cảnh (Storyboard): Bản vẽ phác thảo từng khung hình chính của bộ phim kèm theo lời thoại, hành động của nhân vật và thời lượng dự kiến.',
          'Cấu trúc một bảng Storyboard chuẩn:',
          '  - Cảnh số mấy (Scene ID): Ví dụ Cảnh 1 (0:00 - 0:15).',
          '  - Bối cảnh (Background): Phòng học, sân trường, công viên.',
          '  - Hành động nhân vật (Action): Nhân vật bước vào, vẫy tay chào bạn.',
          '  - Lời thoại / Âm thanh (Audio): "Chào An, hôm nay bạn có khỏe không?", tiếng chim hót líu lo.',
          'Lợi ích: Tránh việc vẽ thừa thãi những nhân vật không cần thiết và giúp các thành viên trong nhóm hiểu chung một tầm nhìn.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Phân cảnh', 'Thời lượng', 'Hình ảnh hiển thị', 'Âm thanh & Lời thoại'],
          rows: [
            ['Cảnh 1: Mở màn', '0:00 - 0:10', 'Bình minh sân trường, chú chim chuyền cành', 'Tiếng chim hót, nhạc nền vui tươi (Fade in)'],
            ['Cảnh 2: Gặp gỡ', '0:10 - 0:35', 'Hai bạn học sinh gặp nhau cổng trường', 'Lời chào hỏi, tiếng cười nói giòn giã'],
            ['Cảnh 3: Kết thúc', '0:35 - 1:00', 'Cả nhóm cùng bước vào lớp học, hiện thông điệp', 'Tiếng trống trường vang lên, nhạc Fade out']
          ]
        },
        emCanNho: [
          'Storyboard là kim chỉ nam định hình toàn bộ bộ phim hoạt hình.',
          'Xác định rõ: Hình ảnh, Hành động nhân vật, Lời thoại và Thời lượng.',
          'Lập Storyboard kỹ càng giúp tiết kiệm 80% thời gian dựng phim.'
        ]
      },
      {
        id: 'tab_11_31_2',
        title: '2. Thiết kế nhân vật và bối cảnh trong GIMP',
        subtitle: 'Sản xuất các nguyên liệu đồ họa số tách nền đạt chuẩn',
        iconName: 'Palette',
        keyPoints: [
          'Thiết kế nhân vật:',
          '  - Vẽ các trạng thái biểu cảm khác nhau (vui, buồn, ngạc nhiên) và các tư thế cử động (bước đi, vẫy tay) trên từng Layer riêng.',
          '  - Xóa sạch phông nền xung quanh thành trong suốt (Transparent).',
          '  - Xuất ra định dạng `.png` để khi đưa vào phim không bị viền trắng bao quanh.',
          'Thiết kế bối cảnh (Background): Vẽ hoặc tìm kiếm ảnh nền phong cảnh chất lượng cao (tỉ lệ 16:9, độ phân giải 1920x1080), xuất dưới dạng `.jpg` hoặc `.png`.',
          'Quy tắc đặt tên tài nguyên: Đặt tên gợi nhớ rõ ràng (ví dụ: `nv_nam_cuoi.png`, `nv_nam_vaytay.png`, `nen_san_truong.jpg`).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Vẽ nhân vật trên Layer riêng', desc: 'Sử dụng cọ Paintbrush và bảng màu tươi sáng' },
            { label: 'Tách nền trong suốt', desc: 'Đảm bảo nền dạng ô cờ caro xám trắng' },
            { label: 'Xuất file .PNG chuẩn', desc: 'Lưu vào thư mục tài nguyên của dự án phim' }
          ]
        },
        emCanNho: [
          'Tất cả nhân vật hoạt hình BẮT BUỘC phải xuất định dạng `.png` trong suốt.',
          'Vẽ nhiều tư thế và biểu cảm khác nhau để nhân vật chuyển động sinh động.',
          'Ảnh nền bối cảnh nên chuẩn tỉ lệ màn hình ngang 16:9.'
        ]
      },
      {
        id: 'tab_11_31_3',
        title: '3. Lắp ghép hoạt cảnh trên Timeline, lồng tiếng và hoàn thiện phim',
        subtitle: 'Hậu kỳ đỉnh cao: Thổi hồn chuyển động và âm vang cho tác phẩm',
        iconName: 'Video',
        keyPoints: [
          'Sắp đặt các rãnh Tracks trong OpenShot:',
          '  - Track 1 (Dưới cùng): Tệp nhạc nền và hiệu ứng âm thanh phụ (SFX: tiếng bước chân, tiếng chuông).',
          '  - Track 2: Tệp ghi âm giọng nói lồng tiếng của các nhân vật (Voice-over).',
          '  - Track 3: Bức ảnh bối cảnh nền sân trường (`nen_san_truong.jpg`).',
          '  - Track 4: Nhân vật cử động (`nv_nam_vaytay.png`). Dùng hiệu ứng Transform di chuyển vị trí nhân vật từ trái sang phải.',
          '  - Track 5 (Trên cùng): Tiêu đề tên phim và phụ đề thuyết minh.',
          'Kiểm tra và Render: Xem lại toàn bộ phim trên Video Preview, chỉnh sửa các chỗ lệch giọng và xuất tệp `Phim_Hoat_Hinh_11.mp4`.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tầng rãnh Track', 'Loại tài nguyên bố trí', 'Mục đích hiển thị'],
          rows: [
            ['Track 5 (Trên đỉnh)', 'Tiêu đề chữ & Logo nhóm', 'Hiển thị đè lên trên tất cả mọi thứ'],
            ['Track 4', 'Nhân vật hoạt hình (.png)', 'Chuyển động trên nền cảnh'],
            ['Track 3', 'Hình ảnh bối cảnh (.jpg)', 'Làm phông nền tĩnh phía sau'],
            ['Track 2', 'Tệp ghi âm giọng lồng tiếng', 'Giọng nói nhân vật khớp với hình ảnh'],
            ['Track 1 (Đáy)', 'Nhạc nền du dương (mp3)', 'Tạo không khí cảm xúc cho bộ phim']
          ]
        },
        emCanNho: [
          'Bố trí đa tầng: Nhạc ở Track 1, Nền ở Track 3, Nhân vật ở Track 4, Chữ ở Track 5.',
          'Khớp khẩu hình và hành động nhân vật với tệp ghi âm giọng nói lồng tiếng.',
          'Xuất video MP4 chất lượng cao để nộp bài thu hoạch cuối năm học.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Giai Đoạn Sản Xuất Phim Hoạt Hình',
      instruction: 'Nối giai đoạn sản xuất với công việc cụ thể:',
      matchingPairs: [
        { id: 'anp1', left: 'Giai đoạn Tiền kỳ (Pre-production)', right: 'Viết kịch bản phân cảnh Storyboard và phác thảo lời thoại' },
        { id: 'anp2', left: 'Giai đoạn Sản xuất (Production)', right: 'Dùng GIMP vẽ nhân vật tách nền PNG và bối cảnh' },
        { id: 'anp3', left: 'Giai đoạn Hậu kỳ (Post-production)', right: 'Đưa vào OpenShot lắp ghép Timeline, lồng tiếng và xuất MP4' },
        { id: 'anp4', left: 'Định dạng nhân vật bắt buộc', right: 'Tệp ảnh PNG hỗ trợ kênh trong suốt Transparent' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tại sao các hình ảnh nhân vật hoạt hình vẽ từ GIMP khi đưa sang OpenShot để làm phim BẮT BUỘC phải xuất dưới định dạng .PNG thay vì .JPG?',
        options: [
          'Vì định dạng PNG hỗ trợ nền trong suốt, giúp nhân vật không bị bao quanh bởi một mảng màu trắng vuông đè lên cảnh nền',
          'Vì định dạng PNG có dung lượng nặng hơn',
          'Vì OpenShot không đọc được file JPG',
          'Vì PNG tự động biết nói chuyện'
        ],
        correctIndex: 0,
        explanation: 'Kênh Alpha trong suốt của PNG cho phép nhân vật hòa quyện tự nhiên vào bối cảnh phía sau.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Kịch bản phân cảnh (Storyboard) đóng vai trò gì trong quá trình sản xuất phim hoạt hình?',
        options: [
          'Là bản thiết kế chi tiết từng cảnh quay (hình ảnh, hành động, lời thoại, thời lượng) làm kim chỉ nam định hướng cho toàn đội',
          'Là tấm vé vào cổng rạp chiếu phim',
          'Là hợp đồng mua máy tính',
          'Là bài văn nghị luận xã hội'
        ],
        correctIndex: 0,
        explanation: 'Storyboard giúp trực quan hóa kịch bản thành hình ảnh trước khi bắt tay vào sản xuất thực tế.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Trong OpenShot, nếu đặt nhân vật hoạt hình ở Track 3 và đặt bức ảnh bối cảnh ở Track 4 (nằm phía trên Track 3), điều gì sẽ xảy ra?',
        options: [
          'Bức ảnh bối cảnh sẽ che khuất hoàn toàn nhân vật hoạt hình, làm nhân vật biến mất khỏi màn hình',
          'Nhân vật hoạt hình sẽ bay lên trời',
          'Màn hình máy tính chuyển sang màu xanh',
          'Không có hiện tượng gì, video vẫn xem bình thường'
        ],
        correctIndex: 0,
        explanation: 'Track trên che Track dưới; bối cảnh là ảnh đặc nằm ở Track trên sẽ đè mất nhân vật ở Track dưới.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Khi thực hiện lồng tiếng cho nhân vật hoạt hình, thao tác nào giúp giọng nói của bạn khớp chính xác với cử động mở miệng của nhân vật?',
        options: [
          'Căn chỉnh vị trí đầu clip âm thanh giọng nói trên Timeline trùng khít với mốc thời gian nhân vật bắt đầu xuất hiện và cử động',
          'Nói thật to vào tai nghe',
          'Tua video chạy nhanh gấp 10 lần',
          'Xóa bài hát nền đi'
        ],
        correctIndex: 0,
        explanation: 'Đồng bộ hóa âm thanh và hình ảnh trên Timeline là kỹ năng hậu kỳ then chốt.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Quy trình chuẩn 3 giai đoạn để sản xuất một bộ phim hoạt hình số hoàn chỉnh là gì?',
        options: [
          'Tiền kỳ (Kịch bản Storyboard) -> Sản xuất đồ họa (Vẽ nhân vật GIMP) -> Hậu kỳ (Dựng phim, lồng tiếng OpenShot)',
          'Mua máy tính -> Bật máy tính -> Tắt máy tính',
          'Lồng tiếng -> Xuất phim -> Viết kịch bản sau cùng',
          'Chỉ cần tải video trên mạng về đổi tên'
        ],
        correctIndex: 0,
        explanation: 'Quy trình Tiền kỳ - Sản xuất - Hậu kỳ là chuẩn công nghiệp điện ảnh và hoạt hình toàn cầu.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Đồ Án Tốt Nghiệp Lớp 11: Sản Xuất Phim Hoạt Hình Ngắn "Bảo Vệ Hành Tinh Xanh"',
        context: 'Tham gia cuộc thi Sáng tạo truyền thông số học sinh THPT.',
        mission: 'Sản xuất một bộ phim hoạt hình ngắn 1 phút truyền tải thông điệp không xả rác bừa bãi.',
        steps: [
          'Bước 1 (Tiền kỳ): Lập Storyboard 3 cảnh: Cảnh 1 (Bạn vứt chai nhựa), Cảnh 2 (Trái Đất buồn bã), Cảnh 3 (Hành động nhặt rác bỏ vào thùng).',
          'Bước 2 (GIMP): Vẽ Trái Đất có khuôn mặt và vỏ chai nhựa, xuất tệp PNG trong suốt.',
          'Bước 3 (OpenShot): Bố trí Bối cảnh ở Track 2, Trái Đất ở Track 3, Vỏ chai ở Track 4.',
          'Bước 4: Ghi âm giọng nói lồng tiếng truyền cảm đặt vào Track 1.',
          'Bước 5: Thêm nhạc nền du dương, thêm tiêu đề và xuất tệp `Hanh_Tinh_Xanh.mp4`.'
        ],
        outputRequirement: 'Phim hoạt hình `Hanh_Tinh_Xanh.mp4` thời lượng 60s, âm thanh trong trẻo, hình ảnh đáng yêu, thông điệp sâu sắc.',
        practicalTip: 'Tận dụng các âm thanh đời thực (SFX tiếng chai nhựa rơi "cạch", tiếng chim hót) để bộ phim trở nên vô cùng sống động.'
      },
      mindmap: {
        id: 'mm_11_31',
        label: 'DỰ ÁN PHIM HOẠT HÌNH',
        color: '#b91c1c',
        children: [
          {
            id: 'mm_11_31_1',
            label: '3 Giai đoạn sản xuất',
            children: [
              { id: 'mm_11_31_1_1', label: '1. Tiền kỳ: Kịch bản Storyboard' },
              { id: 'mm_11_31_1_2', label: '2. Sản xuất: Đồ họa GIMP (PNG trong suốt)' },
              { id: 'mm_11_31_1_3', label: '3. Hậu kỳ: Dựng OpenShot & Lồng tiếng' }
            ]
          },
          {
            id: 'mm_11_31_2',
            label: 'Hoàn thiện tác phẩm',
            children: [
              { id: 'mm_11_31_2_1', label: 'Đa tầng Track (Chữ, Nhân vật, Cảnh, Nhạc)' },
              { id: 'mm_11_31_2_2', label: 'Khớp hình với giọng nói lồng tiếng' },
              { id: 'mm_11_31_2_3', label: 'Xuất bản MP4 Full HD' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Làm Phim Hoạt Hình Toàn Năng 11',
      badgeIcon: 'Clapperboard',
      roleTitle: 'Tổng Đạo Diễn Hoạt Hình Kỹ Thuật Số',
      congratsMessage: 'CHÚC MỪNG BẠN! Bạn đã hoàn thành xuất sắc toàn bộ 31 bài học môn Tin học 11 - Định hướng Tin học ứng dụng với hành trang công nghệ số vững vàng!',
      skillsUnlocked: ['Quy trình sản xuất phim Storyboard', 'Tích hợp đồ họa GIMP và OpenShot', 'Xuất bản phim hoạt hình hoàn chỉnh']
    }
  }
];
