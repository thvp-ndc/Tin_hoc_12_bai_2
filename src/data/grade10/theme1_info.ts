import { Lesson } from '../../types/lesson';

export const THEME1_LESSONS_10: Lesson[] = [
  // Bài 1: Thông tin và xử lí thông tin
  {
    id: 1,
    code: 'TIN10_B01',
    title: 'Thông tin và xử lí thông tin',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Thông tin & Dữ liệu',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khám phá thế giới số: Từ dữ liệu thô, thông tin đến tri thức nhân loại',
      description: 'Tìm hiểu mối quan hệ mật thiết giữa dữ liệu, thông tin và tri thức, cùng quy trình thu thập, lưu trữ, xử lý và truyền tải thông tin của máy tính hiện đại.',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Phân biệt Dữ liệu vs Thông tin', 'Chu trình xử lý thông tin', 'Thiết bị số trong đời sống']
    },
    objectives: [
      {
        id: 'obj_10_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt Dữ liệu và Thông tin',
        description: 'Trình bày được sự khác biệt và mối liên hệ giữa dữ liệu (data), thông tin (information) và tri thức (knowledge).',
        iconName: 'Info'
      },
      {
        id: 'obj_10_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định các bước xử lý thông tin',
        description: 'Mô tả được các giai đoạn cơ bản trong quy trình xử lý thông tin của máy tính: Thu nhận -> Lưu trữ -> Xử lý -> Truyền tải.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_10_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thái độ tôn trọng thông tin xác thực',
        description: 'Nhận thức được giá trị của thông tin chính xác và có ý thức chọn lọc nguồn tin đáng tin cậy trong học tập.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Bản tin dự báo thời tiết sáng nay',
      scenario: 'Một trạm khí tượng thu thập được các con số: "Nhiệt độ 18°C, Độ ẩm 85%, Gió Đông Bắc cấp 3". Bác nông dân đọc được dự báo: "Hôm nay trời rét đậm, cần che chắn cho mạ non".',
      pollQuestion: 'Các con số "18°C, 85%" đóng vai trò là gì, và lời khuyên che chắn mạ non đóng vai trò là gì?',
      pollOptions: [
        { id: 'p10_1_1', text: 'Con số là "Dữ liệu thô", lời khuyên che chắn mạ non là "Tri thức / Quyết định"', votesPercent: 89, isPopular: true, insight: 'Chính xác! Dữ liệu sau khi xử lý thành thông tin sẽ giúp con người hình thành tri thức để ra quyết định hành động đúng đắn.' },
        { id: 'p10_1_2', text: 'Tất cả đều là dữ liệu vô nghĩa', votesPercent: 4, insight: 'Dữ liệu mang thông tin rất giá trị cho cuộc sống sản xuất.' },
        { id: 'p10_1_3', text: 'Con số là tri thức, còn lời khuyên là dữ liệu', votesPercent: 7, insight: 'Bị đảo ngược khái niệm: con số thô chỉ là dữ liệu, kết luận hành động mới là tri thức.' }
      ],
      reflection: 'Xử lý dữ liệu để tạo ra thông tin hữu ích và chuyển hóa thành tri thức hành động là cốt lõi của ngành Tin học.'
    },
    knowledge: [
      {
        id: 'tab_10_1_1',
        title: '1. Dữ Liệu, Thông Tin và Tri Thức',
        subtitle: 'Bản chất của thông tin trong kỷ nguyên số',
        iconName: 'Database',
        keyPoints: [
          'Dữ liệu (Data): Là các con số, văn bản, hình ảnh, âm thanh... thu thập được từ thế giới khách quan nhưng chưa được xử lý để mang ý nghĩa trọn vẹn.',
          'Thông tin (Information): Là dữ liệu đã được xử lý, tổ chức và đặt vào ngữ cảnh cụ thể để mang lại ý nghĩa cho con người.',
          'Tri thức (Knowledge): Là sự hiểu biết, kinh nghiệm đúc kết được từ thông tin giúp con người ra quyết định và giải quyết vấn đề.',
          'Chu trình xử lý thông tin của máy tính gồm 4 khâu: Thu nhận (Input) -> Lưu trữ (Storage) -> Xử lý (Processing) -> Xuất/Truyền tải (Output).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Dữ liệu thô (Data)', desc: 'Các con số: 38.5, 39.0, 37.2' },
            { label: 'Thông tin (Information)', desc: 'Bệnh nhân đang bị sốt cao 39°C' },
            { label: 'Tri thức (Knowledge)', desc: 'Cần cho bệnh nhân uống thuốc hạ sốt' }
          ]
        },
        emCanNho: [
          'Dữ liệu là đầu vào thô; Thông tin là dữ liệu đã có ý nghĩa; Tri thức là hiểu biết để hành động.',
          '4 bước xử lý thông tin: Thu nhận -> Lưu trữ -> Xử lý -> Xuất/Truyền tải.',
          'Máy tính là công cụ mạnh mẽ nhất giúp con người tự động hóa quá trình xử lý thông tin.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Dữ liệu - Thông tin - Tri thức',
      instruction: 'Nối ví dụ thực tế với tầng khái niệm tương ứng:',
      matchingPairs: [
        { id: 'di1', left: 'Dãy số ghi nhận: "39.5, 40.0, 39.8"', right: 'Dữ liệu thô (Data) đo được từ nhiệt kế' },
        { id: 'di2', left: 'Kết luận: "Bạn An đang bị sốt cao"', right: 'Thông tin (Information) sau khi phân tích dữ liệu' },
        { id: 'di3', left: 'Chỉ định: "Cần uống thuốc hạ sốt và chườm ấm"', right: 'Tri thức (Knowledge) và quyết định y tế' },
        { id: 'di4', left: 'Bộ não của máy tính xử lý phép tính', right: 'Khâu xử lý (Processing) trong chu trình thông tin' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong các phát biểu sau đây, phát biểu nào phân biệt ĐÚNG NHẤT giữa dữ liệu và thông tin?',
        options: [
          'Dữ liệu là các tín hiệu hoặc số liệu chưa xử lý; khi được đặt vào ngữ cảnh có ý nghĩa với con người thì trở thành thông tin',
          'Dữ liệu và thông tin là một, không có sự khác biệt',
          'Thông tin luôn nhỏ hơn dữ liệu',
          'Dữ liệu chỉ xuất hiện trong sách giáo khoa'
        ],
        correctIndex: 0,
        explanation: 'Dữ liệu là nguyên liệu thô; thông tin là sản phẩm có ý nghĩa sau khi dữ liệu được xử lý.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Quy trình xử lý thông tin của một chiếc máy tính gồm 4 giai đoạn theo thứ tự nào sau đây?',
        options: [
          'Thu nhận -> Lưu trữ -> Xử lý -> Truyền tải (Xuất)',
          'Xuất -> Xử lý -> Thu nhận -> Lưu trữ',
          'Lưu trữ -> Xuất -> Thu nhận -> Xử lý',
          'Chỉ có xử lý, không có thu nhận'
        ],
        correctIndex: 0,
        explanation: 'Trình tự chuẩn: Nhập dữ liệu (Input) -> Lưu trữ (Storage) -> Xử lý (CPU) -> Xuất kết quả (Output).',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Khi bạn gõ bàn phím để nhập một bài văn vào máy tính, thao tác này thuộc giai đoạn nào trong quy trình xử lý thông tin?',
        options: ['Giai đoạn Thu nhận thông tin (Input)', 'Giai đoạn Xuất thông tin (Output)', 'Giai đoạn Xóa thông tin', 'Giai đoạn In ấn'],
        correctIndex: 0,
        explanation: 'Gõ bàn phím, di chuột, quét mã vạch là các thao tác thu nhận dữ liệu đầu vào.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Một bác sĩ dựa trên kết quả xét nghiệm máu (thông tin) để đưa ra phác đồ điều trị phù hợp cho bệnh nhân. Hoạt động này thể hiện cấp độ nào?',
        options: ['Cấp độ Tri thức (Knowledge)', 'Cấp độ Dữ liệu thô', 'Cấp độ Vô nghĩa', 'Cấp độ Tự động hóa'],
        correctIndex: 0,
        explanation: 'Sử dụng thông tin kết hợp với chuyên môn để ra quyết định chính xác là cấp độ Tri thức.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Thiết bị nào sau đây vừa có chức năng thu nhận thông tin, vừa có chức năng xuất thông tin?',
        options: ['Màn hình cảm ứng (Touchscreen)', 'Bàn phím cơ', 'Máy in laser', 'Loa máy tính'],
        correctIndex: 0,
        explanation: 'Màn hình cảm ứng vừa hiển thị hình ảnh (Output) vừa nhận lệnh chạm của ngón tay (Input).',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Phân Tích Chu Trình Xử Lý Thông Tin của Hệ Thống Điểm Danh Bằng Khuôn Mặt',
        context: 'Trường học triển khai máy điểm danh tự động bằng nhận diện khuôn mặt tại cổng trường.',
        mission: 'Chỉ rõ 4 khâu trong chu trình xử lý thông tin của máy điểm danh này.',
        steps: [
          'Thu nhận (Input): Camera góc rộng quét và chụp ảnh khuôn mặt học sinh.',
          'Lưu trữ (Storage): Lưu tạm ảnh và đối chiếu với CSDL hồ sơ khuôn mặt học sinh.',
          'Xử lý (Processing): Thuật toán AI so khớp đặc trưng khuôn mặt xác định danh tính.',
          'Truyền tải (Output): Màn hình báo "Điểm danh thành công: Nguyễn Văn An" và gửi tin nhắn về cho phụ huynh.'
        ],
        outputRequirement: 'Bản phân tích chu trình thông tin rõ ràng theo 4 bước.',
        practicalTip: 'Mọi thiết bị thông minh hiện đại (máy chấm công, điện thoại, xe tự hành) đều tuân theo đúng 4 bước cơ bản này.'
      },
      mindmap: {
        id: 'mm_10_1',
        label: 'THÔNG TIN & XỬ LÝ',
        color: '#059669',
        children: [
          {
            id: 'mm_10_1_1',
            label: 'Các cấp độ',
            children: [
              { id: 'mm_10_1_1_1', label: 'Dữ liệu (Data - Thô)' },
              { id: 'mm_10_1_1_2', label: 'Thông tin (Có ý nghĩa)' },
              { id: 'mm_10_1_1_3', label: 'Tri thức (Hành động)' }
            ]
          },
          {
            id: 'mm_10_1_2',
            label: 'Quy trình 4 khâu',
            children: [
              { id: 'mm_10_1_2_1', label: '1. Thu nhận (Input)' },
              { id: 'mm_10_1_2_2', label: '2. Lưu trữ (Storage)' },
              { id: 'mm_10_1_2_3', label: '3. Xử lý (Processing)' },
              { id: 'mm_10_1_2_4', label: '4. Truyền tải (Output)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Khám Phá Thông Tin 10',
      badgeIcon: 'Info',
      roleTitle: 'Chuyên Viên Phân Tích Thông Tin Nhập Môn',
      congratsMessage: 'Tuyệt vời! Bạn đã khởi đầu hành trình Tin học 10 với sự thấu hiểu sâu sắc về Dữ liệu, Thông tin và Tri thức.',
      skillsUnlocked: ['Phân biệt Dữ liệu vs Thông tin vs Tri thức', 'Chu trình xử lý 4 bước', 'Nhận diện thiết bị số']
    }
  },

  // Bài 4: Hệ nhị phân và dữ liệu phi văn bản
  {
    id: 4,
    code: 'TIN10_B04',
    title: 'Hệ nhị phân và dữ liệu phi văn bản',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Hệ nhị phân',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Ngôn ngữ bí mật của máy tính: Thế giới chỉ gồm số 0 và số 1',
      description: 'Tìm hiểu tại sao máy tính chỉ hiểu hệ nhị phân (Binary: 0 và 1), cách chuyển đổi qua lại giữa hệ thập phân và hệ nhị phân, cùng phương thức số hóa hình ảnh, âm thanh thành các dãy bit.',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Hệ đếm nhị phân (0 và 1)', 'Chuyển đổi Thập phân <-> Nhị phân', 'Khái niệm Bit và Byte']
    },
    objectives: [
      {
        id: 'obj_10_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu bản chất của Hệ nhị phân',
        description: 'Giải thích được lý do kỹ thuật máy tính dùng hệ nhị phân: mạch điện tử chỉ có 2 trạng thái đóng (1) và ngắt (0).',
        iconName: 'Binary'
      },
      {
        id: 'obj_10_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Chuyển đổi số nhị phân và thập phân',
        description: 'Chuyển đổi thành thạo một số nguyên dương từ hệ thập phân sang nhị phân (bằng phép chia liên tiếp cho 2) và ngược lại.',
        iconName: 'Calculator'
      },
      {
        id: 'obj_10_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy logic toán học',
        description: 'Phát triển sự thích thú với vẻ đẹp toán học logic làm nền tảng cho toàn bộ nền văn minh công nghệ.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Chiếc công tắc bóng đèn trong phòng',
      scenario: 'Chiếc bóng đèn điện chỉ có đúng 2 trạng thái: Bật sáng hoặc Tắt ngấm. Nếu quy ước Bật là 1, Tắt là 0, bạn có thể dùng 8 chiếc bóng đèn để biểu diễn được bao nhiêu trạng thái khác nhau?',
      pollQuestion: 'Với 8 chiếc bóng đèn (tương đương 1 Byte = 8 Bit), ta có thể biểu diễn được bao nhiêu giá trị?',
      pollOptions: [
        { id: 'p10_4_1', text: '2^8 = 256 giá trị khác nhau (từ 0 đến 255)', votesPercent: 92, isPopular: true, insight: 'Chính xác! Mỗi bit có 2 trạng thái, 8 bit liên tiếp tạo ra 2^8 = 256 tổ hợp mã nhị phân khác nhau.' },
        { id: 'p10_4_2', text: 'Chỉ được 8 giá trị', votesPercent: 4, insight: 'Không phải phép cộng 8, mà là lũy thừa số mũ 2^8.' },
        { id: 'p10_4_3', text: 'Vô số giá trị', votesPercent: 4, insight: 'Số lượng bit cố định sẽ cho ra một số lượng tổ hợp hữu hạn xác định.' }
      ],
      reflection: 'Mọi video 4K sắc nét hay bản nhạc du dương trên máy tính thực chất đều được cấu thành từ hàng tỷ số 0 và 1 tí hon.'
    },
    knowledge: [
      {
        id: 'tab_10_4_1',
        title: '1. Quy Tắc Chuyển Đổi Hệ Thập Phân & Nhị Phân',
        subtitle: 'Cơ sở toán học của phần cứng máy tính số',
        iconName: 'Binary',
        keyPoints: [
          'Bit (Binary digit): Là đơn vị đo thông tin nhỏ nhất, chỉ nhận một trong hai giá trị 0 hoặc 1.',
          '1 Byte = 8 Bit. Bảng quy đổi: 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.',
          'Chuyển Thập phân -> Nhị phân: Chia liên tiếp số đó cho 2 và lấy các số dư theo thứ tự từ dưới lên trên (ngược lại). Ví dụ: 13 chia 2 dư 1, 6 chia 2 dư 0, 3 chia 2 dư 1, 1 chia 2 dư 1 => Số 13 biểu diễn nhị phân là `1101₂`.',
          'Chuyển Nhị phân -> Thập phân: Nhân từng chữ số với lũy thừa của 2 tương ứng theo vị trí từ phải sang trái (bắt đầu từ 2^0). Ví dụ: `1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8 + 4 + 0 + 1 = 13`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Số 13 (Hệ 10)', desc: 'Thập phân quen thuộc' },
            { label: 'Chia liên tiếp cho 2', desc: 'Dư: 1, 0, 1, 1' },
            { label: 'Đọc ngược từ dưới lên', desc: 'Kết quả: 1101 (Hệ 2)' }
          ]
        },
        emCanNho: [
          'Hệ nhị phân chỉ dùng 2 ký tự: 0 và 1.',
          '1 Byte = 8 Bit; 1 KB = 1024 Bytes; 1 MB = 1024 KB; 1 GB = 1024 MB.',
          'Đổi từ hệ 10 sang hệ 2 bằng cách chia liên tiếp cho 2 và lấy số dư ngược chiều.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Số Thập phân và Mã Nhị phân tương ứng',
      instruction: 'Nối số thập phân với biểu diễn nhị phân chính xác:',
      matchingPairs: [
        { id: 'b_1', left: 'Số 5 (Hệ thập phân)', right: '101₂ (4 + 0 + 1)' },
        { id: 'b_2', left: 'Số 9 (Hệ thập phân)', right: '1001₂ (8 + 0 + 0 + 1)' },
        { id: 'b_3', left: 'Số 15 (Hệ thập phân)', right: '1111₂ (8 + 4 + 2 + 1)' },
        { id: 'b_4', left: 'Số 16 (Hệ thập phân)', right: '10000₂ (2⁴ = 16)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Đơn vị đo lượng thông tin nhỏ nhất trong máy tính là gì?',
        options: ['Bit', 'Byte', 'Kilobyte', 'Megabyte'],
        correctIndex: 0,
        explanation: 'Bit là viết tắt của Binary Digit, là đơn vị cơ bản chỉ nhận giá trị 0 hoặc 1.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Một Byte (B) tương đương với bao nhiêu Bit?',
        options: ['8 Bit', '2 Bit', '10 Bit', '16 Bit'],
        correctIndex: 0,
        explanation: 'Quy ước chuẩn quốc tế: 1 Byte luôn gồm đúng 8 Bit.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Số thập phân 10 khi chuyển đổi sang hệ nhị phân sẽ có giá trị là bao nhiêu?',
        options: ['1010₂', '1001₂', '1100₂', '1110₂'],
        correctIndex: 0,
        explanation: '10 = 8 + 2 = 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = 1010₂.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Dãy nhị phân `110₂` tương ứng với số nào trong hệ thập phân quen thuộc của chúng ta?',
        options: ['Số 6', 'Số 3', 'Số 5', 'Số 7'],
        correctIndex: 0,
        explanation: '110₂ = 1×2² + 1×2¹ + 0×2⁰ = 4 + 2 + 0 = 6.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Tại sao các nhà sản xuất máy tính lại chọn hệ nhị phân thay vì hệ thập phân để chế tạo chip vi xử lý?',
        options: [
          'Vì các linh kiện bán dẫn điện tử dễ dàng chế tạo và hoạt động cực kỳ ổn định với 2 trạng thái vật lý (có điện / ngắt điện)',
          'Vì con người chỉ thích số 0 và 1',
          'Vì máy tính không biết đếm đến 10',
          'Vì hệ nhị phân tốn nhiều giấy hơn'
        ],
        correctIndex: 0,
        explanation: 'Trạng thái có dòng điện (1) và không có dòng điện (0) của bóng bán dẫn transistor rất dễ điều khiển và chống nhiễu tuyệt đối.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Mã Hóa Bảng Chữ Cái Tên Mình Sang Mã Nhị Phân ASCII',
        context: 'Tìm hiểu cách máy tính lưu trữ các ký tự văn bản thành dãy số nhị phân.',
        mission: 'Tra bảng mã ASCII và đổi tên của bạn thành chuỗi các số 0 và 1.',
        steps: [
          'Bước 1: Chữ cái "A" trong bảng mã ASCII có mã thập phân là 65.',
          'Bước 2: Đổi 65 sang nhị phân: 65 = 64 + 1 = `01000001₂`.',
          'Bước 3: Chữ cái "N" có mã 78 = 64 + 8 + 4 + 2 = `01001110₂`.',
          'Bước 4: Ghép tên "AN" thành dãy bit: `01000001 01001110`.'
        ],
        outputRequirement: 'Tên của bạn được mã hóa thành các dãy số 0 và 1 nhị phân chuẩn.',
        practicalTip: 'Mỗi ký tự gõ từ bàn phím đều tương ứng với 1 Byte (8 bit) mã hóa trong bộ nhớ máy tính.'
      },
      mindmap: {
        id: 'mm_10_4',
        label: 'HỆ NHỊ PHÂN',
        color: '#059669',
        children: [
          {
            id: 'mm_10_4_1',
            label: 'Khái niệm & Đơn vị',
            children: [
              { id: 'mm_10_4_1_1', label: 'Bit: 0 hoặc 1' },
              { id: 'mm_10_4_1_2', label: '1 Byte = 8 Bit' },
              { id: 'mm_10_4_1_3', label: '1 KB = 1024 Bytes' }
            ]
          },
          {
            id: 'mm_10_4_2',
            label: 'Chuyển đổi cơ số',
            children: [
              { id: 'mm_10_4_2_1', label: 'Hệ 10 sang 2: Chia cho 2' },
              { id: 'mm_10_4_2_2', label: 'Hệ 2 sang 10: Lũy thừa của 2' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Giải Mã Nhị Phân 10',
      badgeIcon: 'Binary',
      roleTitle: 'Chuyên Viên Mã Hóa Nhị Phân Số',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ ngôn ngữ gốc của máy tính - Hệ nhị phân và cách chuyển đổi cơ số.',
      skillsUnlocked: ['Đổi Thập phân sang Nhị phân', 'Đổi Nhị phân sang Thập phân', 'Quy đổi đơn vị Bit, Byte, KB, MB']
    }
  }
];
