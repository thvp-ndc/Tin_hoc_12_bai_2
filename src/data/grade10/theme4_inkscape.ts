import { Lesson } from '../../types/lesson';

export const THEME4_INKSCAPE_10: Lesson[] = [
  // Bài 12: Phần mềm thiết kế đồ hoạ
  {
    id: 12,
    code: 'TIN10_B12',
    title: 'Phần mềm thiết kế đồ hoạ',
    themeId: 4,
    themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)',
    topicBadge: 'Đồ họa Vector',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Thế giới hình học vô tận: Phân biệt đồ họa Raster và đồ họa Vector với Inkscape',
      description: 'Tìm hiểu sự khác biệt bản chất giữa ảnh điểm (Raster) và ảnh vectơ (Vector), làm quen với phần mềm thiết kế đồ họa vector nguồn mở Inkscape, giao diện làm việc và các công cụ vẽ hình học cơ bản.',
      accentColor: 'from-violet-600 to-indigo-600',
      keyHighlights: ['Ảnh Raster vs Ảnh Vector', 'Giao diện phần mềm Inkscape', 'Định dạng tệp .svg']
    },
    objectives: [
      {
        id: 'obj_10_12_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt Raster và Vector',
        description: 'Chỉ ra được đặc điểm cốt lõi: Ảnh Raster bị vỡ hạt (răng cưa) khi phóng to, còn ảnh Vector luôn sắc nét tuyệt đối ở mọi kích thước.',
        iconName: 'Maximize2'
      },
      {
        id: 'obj_10_12_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác cơ bản trong Inkscape',
        description: 'Sử dụng được các công cụ vẽ hình chữ nhật, hình tròn/elip, hình sao và công cụ chọn Select Tool (F1).',
        iconName: 'Square'
      },
      {
        id: 'obj_10_12_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức thẩm mỹ thiết kế',
        description: 'Phát triển cảm nhận về hình khối, tỉ lệ và sự cân đối trong thiết kế ấn phẩm truyền thông học đường.',
        iconName: 'Palette'
      }
    ],
    warmup: {
      title: 'Tình huống: Phóng to logo trường để in lên tấm bạt khổng lồ',
      scenario: 'Một bức ảnh logo trường chụp bằng điện thoại (định dạng JPG) khi in lên tờ giấy A4 thì rất nét, nhưng khi phóng to để in lên tấm bạt sân khấu dài 10 mét thì hình bị vỡ nát, mờ căm và đầy những ô vuông răng cưa.',
      pollQuestion: 'Loại đồ họa nào có đặc tính kỳ diệu: phóng to thu nhỏ bao nhiêu lần cũng không bao giờ bị vỡ hình?',
      pollOptions: [
        { id: 'p10_12_1', text: 'Đồ họa Vector (Vector Graphics) như tệp .svg tạo bởi Inkscape', votesPercent: 94, isPopular: true, insight: 'Chính xác! Đồ họa Vector được tạo từ các công thức toán học (điểm, đường, đường cong) nên phóng to vô tận vẫn sắc nét 100%.' },
        { id: 'p10_12_2', text: 'Đồ họa điểm ảnh Bitmap (Raster)', votesPercent: 3, insight: 'Đồ họa điểm ảnh (JPG, PNG) cấu tạo từ các pixel cố định nên phóng to sẽ bị vỡ hạt.' },
        { id: 'p10_12_3', text: 'Chụp lại ảnh bằng điện thoại xịn hơn', votesPercent: 3, insight: 'Ảnh chụp máy ảnh dù độ phân giải cao đến đâu vẫn là Raster và vẫn có giới hạn điểm ảnh.' }
      ],
      reflection: 'Hiểu rõ đồ họa Vector là bước khởi đầu bắt buộc của mọi nhà thiết kế Logo, Banner và ấn phẩm in ấn chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_10_12_1',
        title: '1. So Sánh Đồ Họa Raster & Vector - Phần Mềm Inkscape',
        subtitle: 'Đặc trưng toán học và ứng dụng thực tiễn',
        iconName: 'Shapes',
        keyPoints: [
          'Đồ họa Raster (Điểm ảnh - Bitmap): Cấu tạo từ lưới các điểm ảnh (Pixels). Khi phóng to sẽ thấy các ô vuông răng cưa (vỡ ảnh). Định dạng: JPG, PNG, GIF, BMP. Thích hợp cho ảnh chụp đời thực phong cảnh, chân dung.',
          'Đồ họa Vector: Cấu tạo từ các công thức toán học biểu diễn điểm, đường thẳng, đường cong và hình khối. Khi phóng to thu nhỏ tùy ý hình ảnh vẫn giữ nguyên độ sắc nét tuyệt đối. Định dạng chuẩn quốc tế: `.svg`. Thích hợp cho Logo, Icon, Banner, Phông bạt quảng cáo.',
          'Phần mềm Inkscape: Phần mềm thiết kế đồ họa vector mã nguồn mở miễn phí, chuyên nghiệp hàng đầu thế giới.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Đặc điểm', 'Đồ họa Raster (Bitmap)', 'Đồ họa Vector'],
          rows: [
            ['Cấu tạo', 'Lưới các điểm ảnh (Pixels)', 'Các công thức toán học hình học'],
            ['Khi phóng to', 'Bị vỡ hạt, lộ răng cưa ô vuông', 'Luôn sắc nét tuyệt đối ở mọi kích cỡ'],
            ['Ứng dụng', 'Ảnh chụp điện thoại, máy ảnh, tranh vẽ màu nước', 'Thiết kế Logo, Biểu tượng Icon, Banner, Bản vẽ kỹ thuật'],
            ['Phần mềm tiêu biểu', 'GIMP, Adobe Photoshop', 'Inkscape, Adobe Illustrator'],
            ['Định dạng tệp', '.jpg, .png, .bmp, .gif', '.svg, .ai, .eps']
          ]
        },
        emCanNho: [
          'Ảnh Raster cấu tạo từ pixel (bị vỡ khi phóng to).',
          'Ảnh Vector cấu tạo từ công thức toán học (luôn sắc nét vô hạn).',
          'Inkscape là phần mềm đồ họa vector nguồn mở chuẩn tệp `.svg`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Loại Đồ Họa và Định dạng tệp',
      instruction: 'Nối đặc điểm/định dạng với loại đồ họa tương ứng:',
      matchingPairs: [
        { id: 'v_r1', left: 'Định dạng .svg', right: 'Đồ họa Vector (chuẩn web quốc tế)' },
        { id: 'v_r2', left: 'Định dạng .jpg / .jpeg', right: 'Đồ họa Raster (ảnh chụp nén dung lượng)' },
        { id: 'v_r3', left: 'Thiết kế Logo thương hiệu', right: 'Nên dùng đồ họa Vector để in mọi kích cỡ' },
        { id: 'v_r4', left: 'Chụp ảnh dã ngoại bằng điện thoại', right: 'Tạo ra ảnh Raster gồm hàng triệu điểm ảnh' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Ưu điểm LỚN NHẤT của đồ họa Vector so với đồ họa Raster (điểm ảnh) là gì?',
        options: [
          'Hình ảnh không bao giờ bị vỡ hạt hay giảm chất lượng khi phóng to hoặc thu nhỏ ở bất kỳ kích thước nào',
          'Màu sắc chụp ảnh thật hơn',
          'Không cần dùng máy tính',
          'Dung lượng luôn nặng gấp 100 lần'
        ],
        correctIndex: 0,
        explanation: 'Đồ họa vector dựa trên công thức toán học nên tự tính toán lại độ nét ở mọi tỉ lệ thu phóng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Định dạng tệp đồ họa vector mở chuẩn thế giới được phần mềm Inkscape sử dụng mặc định là gì?',
        options: ['.svg (Scalable Vector Graphics)', '.mp3', '.docx', '.jpg'],
        correctIndex: 0,
        explanation: 'SVG là định dạng chuẩn của tổ chức W3C cho đồ họa vector trên web và in ấn.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Khi cần thiết kế một chiếc LOGO cho trường học để vừa in trên chiếc bút bi nhỏ, vừa in trên tấm bạt sân trường dài 20m, bạn BẮT BUỘC nên chọn loại đồ họa nào?',
        options: ['Đồ họa Vector trong Inkscape', 'Chụp ảnh bằng điện thoại', 'Vẽ trên phần mềm Paint', 'Tải ảnh chất lượng thấp trên mạng'],
        correctIndex: 0,
        explanation: 'Chỉ có đồ họa Vector mới đảm bảo Logo in nhỏ xíu trên bút hay in khổng lồ trên bạt đều sắc nét 100%.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Phím tắt nào trong phần mềm Inkscape dùng để chuyển về công cụ Chọn và Biến đổi đối tượng (Select and transform objects)?',
        options: ['Phím F1 (hoặc phím S)', 'Phím F5', 'Phím Esc', 'Phím Space'],
        correctIndex: 0,
        explanation: 'Phím F1 kích hoạt công cụ Select Tool - công cụ con trỏ chuột đen được sử dụng nhiều nhất.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Phần mềm nào sau đây KHÔNG PHẢI là phần mềm thiết kế đồ họa Vector?',
        options: ['Adobe Photoshop', 'Inkscape', 'Adobe Illustrator', 'CorelDRAW'],
        correctIndex: 0,
        explanation: 'Adobe Photoshop là phần mềm chỉnh sửa ảnh điểm Bitmap (Raster), không phải phần mềm vector chuyên dụng.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Vẽ Hình Khối Cơ Bản trong Inkscape',
        context: 'Làm quen với không gian vẽ hình học vector.',
        mission: 'Vẽ một ngôi nhà đơn giản từ các hình học cơ bản trong Inkscape.',
        steps: [
          'Bước 1: Chọn công cụ hình chữ nhật (F4), vẽ thân nhà hình vuông.',
          'Bước 2: Chọn công cụ hình sao/đa giác (*), vẽ mái nhà hình tam giác (Corners = 3).',
          'Bước 3: Dùng hình chữ nhật vẽ cửa chính và hình tròn (F5) vẽ ô cửa sổ gác mái.',
          'Bước 4: Lưu tệp dự án thành `ngoi_nha.svg`.'
        ],
        outputRequirement: 'Tệp đồ họa vector SVG các hình khối ngay ngắn, chuẩn xác.',
        practicalTip: 'Giữ phím `Ctrl` khi vẽ để tạo hình vuông hoặc hình tròn hoàn hảo tuyệt đối.'
      },
      mindmap: {
        id: 'mm_10_12',
        label: 'ĐỒ HỌA VECTOR INKSCAPE',
        color: '#6366f1',
        children: [
          {
            id: 'mm_10_12_1',
            label: 'Phân loại đồ họa',
            children: [
              { id: 'mm_10_12_1_1', label: 'Raster (Pixel - Vỡ hình)' },
              { id: 'mm_10_12_1_2', label: 'Vector (Toán học - Sắc nét)' }
            ]
          },
          {
            id: 'mm_10_12_2',
            label: 'Inkscape cơ bản',
            children: [
              { id: 'mm_10_12_2_1', label: 'Định dạng chuẩn .svg' },
              { id: 'mm_10_12_2_2', label: 'Select Tool (F1)' },
              { id: 'mm_10_12_2_3', label: 'Hình chữ nhật, tròn, sao' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Thiết Kế Vector Khởi Nghiệp 10',
      badgeIcon: 'Shapes',
      roleTitle: 'Chuyên Viên Đồ Họa Vector Inkscape',
      congratsMessage: 'Tuyệt vời! Bạn đã phân biệt rõ ràng bản chất giữa đồ họa Raster và Vector và sẵn sàng cho các bài thực hành thiết kế biểu tượng.',
      skillsUnlocked: ['Phân biệt Raster vs Vector', 'Sử dụng Inkscape cơ bản', 'Lưu trữ tệp chuẩn .svg']
    }
  },

  // Bài 14: Làm việc với đối tượng đường và văn bản
  {
    id: 14,
    code: 'TIN10_B14',
    title: 'Làm việc với đối tượng đường và văn bản',
    themeId: 4,
    themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)',
    topicBadge: 'Đường cong Bezier & Chữ',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Nét vẽ nghệ thuật: Khám phá đường cong Bézier và uốn văn bản theo quỹ đạo',
      description: 'Làm chủ công cụ vẽ đường cong Bézier (Pen Tool), hiệu chỉnh các điểm nút (Nodes) bằng Node Tool, chèn văn bản nghệ thuật Text Tool và kỹ thuật uốn chữ chạy lượn sóng theo đường cong trong Inkscape.',
      accentColor: 'from-violet-600 to-indigo-600',
      keyHighlights: ['Công cụ đường cong Bézier Tool (B)', 'Hiệu chỉnh điểm nút Node Tool (N)', 'Uốn chữ theo đường dẫn (Put on Path)']
    },
    objectives: [
      {
        id: 'obj_10_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của đường cong Bézier',
        description: 'Hiểu cấu tạo của đường cong vector: Điểm nút (Node), đoạn cong (Segment) và tay nắm tiếp tuyến (Handles) điều chỉnh độ uốn.',
        iconName: 'PenTool'
      },
      {
        id: 'obj_10_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác uốn chữ theo đường cong',
        description: 'Thực hiện được kỹ thuật chọn văn bản và đường dẫn, sau đó sử dụng lệnh `Text -> Put on Path` để tạo hiệu ứng chữ hình tròn quanh huy hiệu.',
        iconName: 'Type'
      },
      {
        id: 'obj_10_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tỉ mỉ và khéo léo',
        description: 'Rèn luyện sự kiên nhẫn khi nắn chỉnh từng tay nắm điểm nút để đường cong đạt độ mềm mại, mượt mà chuẩn mỹ thuật.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Thiết kế chữ uốn lượn hình tròn quanh biểu trưng Huy hiệu Đoàn',
      scenario: 'Bạn cần thiết kế một chiếc huy hiệu Đoàn hình tròn. Dòng chữ "ĐOÀN TNCS HỒ CHÍ MINH" cần phải uốn cong ôm sát theo mép trên của hình tròn.',
      pollQuestion: 'Tính năng chuyên nghiệp nào trong Inkscape giúp dòng chữ tự động uốn lượn bám theo đường tròn hoàn hảo?',
      pollOptions: [
        { id: 'p10_14_1', text: 'Tính năng uốn chữ theo đường dẫn: Text -> Put on Path', votesPercent: 95, isPopular: true, insight: 'Chính xác! Lệnh Put on Path ép dòng văn bản chạy dọc theo bất kỳ đường cong nào bạn vẽ ra.' },
        { id: 'p10_14_2', text: 'Gõ từng chữ cái một rồi xoay thủ công từng chữ', votesPercent: 3, insight: 'Xoay thủ công rất mất thời gian và các chữ cái sẽ bị lệch khoảng cách không đều nhau.' },
        { id: 'p10_14_3', text: 'Vẽ bằng tay', votesPercent: 2, insight: 'Vẽ tay chữ không chuẩn phông chữ đẹp.' }
      ],
      reflection: 'Kỹ thuật uốn chữ theo đường cong là bí quyết để tạo nên các con dấu, huy hiệu và logo hình tròn chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_10_14_1',
        title: '1. Đường Cong Bézier & Kỹ Thuật Uốn Chữ Nghệ Thuật',
        subtitle: 'Bézier Curves (B) và Node Tool (N)',
        iconName: 'PenTool',
        keyPoints: [
          'Công cụ Bézier (Phím B): Nhấp chuột từng điểm để vẽ đoạn thẳng; nhấp và kéo chuột để tạo các đường cong mềm mại.',
          'Công cụ chỉnh điểm nút Node Tool (Phím N): Hiển thị các điểm nút và tay nắm (Handles). Kéo các tay nắm để thay đổi độ võng và hướng của đường cong.',
          'Chuyển hình học thành đường cong: Menu `Path -> Object to Path` (chuyển hình vuông, hình tròn thành các điểm nút tự do).',
          'Uốn chữ theo đường (Put on Path): Chọn cả dòng chữ và đường cong (giữ Shift nhấp chuột) -> Vào menu `Text -> Put on Path`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Vẽ đường tròn', desc: 'Dùng công cụ elip vẽ đường quỹ đạo' },
            { label: '2. Gõ dòng chữ', desc: 'Dùng Text Tool (T) gõ khẩu hiệu' },
            { label: '3. Text -> Put on Path', desc: 'Dòng chữ tự động uốn ôm trọn đường cong' }
          ]
        },
        emCanNho: [
          'Công cụ Bézier (B) dùng để vẽ đường tự do và hình phức tạp.',
          'Công cụ Node Tool (N) dùng để tinh chỉnh các điểm nút và tay nắm tiếp tuyến.',
          'Dùng `Text -> Put on Path` để uốn chữ bám theo đường dẫn.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Công cụ và Thao tác trong Inkscape',
      instruction: 'Nối công cụ/lệnh với thao tác tương ứng:',
      matchingPairs: [
        { id: 'bz1', left: 'Bézier Tool (Phím B)', right: 'Vẽ các đường cong tự do uốn lượn theo ý muốn' },
        { id: 'bz2', left: 'Node Tool (Phím N)', right: 'Hiệu chỉnh vị trí điểm nút và kéo tay nắm độ cong' },
        { id: 'bz3', left: 'Text -> Put on Path', right: 'Uốn cong dòng văn bản bám theo quỹ đạo đường tròn' },
        { id: 'bz4', left: 'Path -> Object to Path', right: 'Biến một hình học cơ bản thành các điểm nút tự do' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Công cụ nào trong Inkscape cho phép bạn vẽ các đường cong mềm mại thông qua các điểm nút và tay nắm điều khiển?',
        options: ['Draw Bezier curves and straight lines (Phím B)', 'Rectangle Tool', 'Eraser Tool', 'Zoom Tool'],
        correctIndex: 0,
        explanation: 'Công cụ Bézier (biểu tượng chiếc bút máy) là công cụ vẽ đường cong cốt lõi của đồ họa vector.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để điều chỉnh độ uốn cong của một đoạn đường vẽ trong Inkscape, bạn sử dụng công cụ nào?',
        options: ['Node Tool (Edit paths by nodes - Phím N)', 'Text Tool', 'Select Tool', 'Gradient Tool'],
        correctIndex: 0,
        explanation: 'Node Tool cho phép chọn từng điểm nút và kéo tay nắm tiếp tuyến để chỉnh hướng và độ cong.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Để uốn một dòng chữ chạy theo viền của một hình tròn, thao tác chuẩn là gì?',
        options: [
          'Chọn đồng thời dòng chữ và hình tròn, sau đó chọn menu Text -> Put on Path',
          'Bấm nút Print',
          'Nhấn phím Delete',
          'Xoay màn hình nghiêng'
        ],
        correctIndex: 0,
        explanation: 'Lệnh Text -> Put on Path liên kết dòng văn bản chạy dọc theo đường cong được chọn.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Sau khi uốn chữ theo đường tròn bằng lệnh Put on Path, nếu bạn xóa hình tròn đi thì dòng chữ sẽ như thế nào?',
        options: [
          'Dòng chữ sẽ lập tức duỗi thẳng trở lại trạng thái ban đầu vì mất đường dẫn tham chiếu',
          'Dòng chữ vẫn giữ nguyên uốn cong',
          'Dòng chữ tự động biến mất',
          'Máy tính bị tắt'
        ],
        correctIndex: 0,
        explanation: 'Dòng chữ phụ thuộc vào đường dẫn. Nếu muốn giấu đường tròn, bạn chỉ cần bỏ màu viền (Stroke = None) của nó.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Mẹo thiết kế: Khi đã uốn chữ theo đường dẫn hoàn hảo và không muốn đường tròn hiển thị, bạn nên làm gì?',
        options: [
          'Chọn hình tròn và thiết lập màu viền (Stroke) thành không màu (None)',
          'Xóa hình tròn',
          'Cắt đôi hình tròn',
          'Tắt máy tính'
        ],
        correctIndex: 0,
        explanation: 'Đặt Stroke thành None giúp đường tròn tàng hình nhưng dòng chữ vẫn giữ nguyên độ uốn cong tuyệt đẹp.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết Kế Logo Huy Hiệu "Lớp 10A1 Tiên Phong"',
        context: 'Lớp 10 cần thiết kế mẫu logo in áo đồng phục lớp có chữ uốn tròn.',
        mission: 'Sử dụng Inkscape thiết kế một huy hiệu tròn có chữ uốn lượn xung quanh.',
        steps: [
          'Bước 1: Vẽ một hình tròn đường kính 100mm làm khung viền huy hiệu.',
          'Bước 2: Gõ dòng chữ: "CHI ĐOÀN 10A1 - ĐOÀN KẾT SÁNG TẠO".',
          'Bước 3: Dùng `Text -> Put on Path` uốn dòng chữ ôm theo mép trên của hình tròn.',
          'Bước 4: Vẽ biểu tượng ngôi sao vàng ở tâm huy hiệu và xuất tệp `logo_10a1.svg`.'
        ],
        outputRequirement: 'Tệp logo vector sắc nét, bố cục tròn cân đối, chữ uốn mượt mà.',
        practicalTip: 'Nếu chữ bị lộn ngược vào trong, hãy dùng lệnh lật ngang hoặc xoay đường tròn 180 độ.'
      },
      mindmap: {
        id: 'mm_10_14',
        label: 'ĐƯỜNG CONG & VĂN BẢN',
        color: '#6366f1',
        children: [
          {
            id: 'mm_10_14_1',
            label: 'Đường cong Bézier',
            children: [
              { id: 'mm_10_14_1_1', label: 'Bézier Tool (Phím B)' },
              { id: 'mm_10_14_1_2', label: 'Node Tool (Phím N)' },
              { id: 'mm_10_14_1_3', label: 'Tay nắm tiếp tuyến (Handles)' }
            ]
          },
          {
            id: 'mm_10_14_2',
            label: 'Văn bản nghệ thuật',
            children: [
              { id: 'mm_10_14_2_1', label: 'Text Tool (Phím T)' },
              { id: 'mm_10_14_2_2', label: 'Text -> Put on Path' },
              { id: 'mm_10_14_2_3', label: 'Ẩn Stroke của đường dẫn' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Nét Vẽ Bézier 10',
      badgeIcon: 'PenTool',
      roleTitle: 'Chuyên Viên Tạo Hình Đồ Họa Vector',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ công cụ đường cong Bézier và kỹ thuật uốn chữ nghệ thuật đỉnh cao trong Inkscape.',
      skillsUnlocked: ['Vẽ đường cong Bézier Tool (B)', 'Hiệu chỉnh điểm nút Node Tool (N)', 'Uốn chữ theo đường cong Put on Path']
    }
  }
];
