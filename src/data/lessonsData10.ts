import { Lesson } from '../types/lesson';

export const LESSONS_DATA_10: Lesson[] = [
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
        title: '1. Dữ liệu, Thông tin và Tri thức',
        subtitle: 'Bản chất các tầng bậc thông tin trong kỷ nguyên số',
        iconName: 'BookOpen',
        keyPoints: [
          'Dữ liệu (Data): Là các số liệu, ký hiệu, hình ảnh hoặc âm thanh thô thu nhận được từ thế giới khách quan.',
          'Thông tin (Information): Là dữ liệu đã được xử lý, sắp xếp theo ngữ cảnh để mang lại ý nghĩa cho người tiếp nhận.',
          'Tri thức (Knowledge): Là sự hiểu biết, kinh nghiệm đúc kết từ thông tin để con người đưa ra quyết định hoặc hành động cụ thể.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Dữ liệu thô (Data)', desc: 'Con số 39.5°C' },
            { label: '2. Thông tin (Info)', desc: 'Bệnh nhân đang bị sốt cao' },
            { label: '3. Tri thức (Knowledge)', desc: 'Cần uống thuốc hạ sốt và đi khám' }
          ]
        },
        emCanNho: [
          'Dữ liệu là nguồn gốc thô, thông tin là dữ liệu có ý nghĩa, tri thức là hiểu biết để hành động.',
          'Quy trình xử lý thông tin: Thu nhận -> Lưu trữ -> Biến đổi/Xử lý -> Truyền tải.',
          'Máy tính là công cụ xử lý thông tin nhanh chóng, chính xác và hiệu quả nhất hiện nay.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Dữ liệu - Thông tin - Tri thức',
      instruction: 'Hãy xếp các ví dụ vào đúng tầng cấp bậc của nó:',
      categories: [
        { id: 'cat_data', title: 'Dữ liệu thô (Data)', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
        { id: 'cat_info', title: 'Thông tin có ý nghĩa (Info)', color: 'border-blue-500 bg-blue-950/40 text-blue-300' }
      ],
      dragItems: [
        { id: 'd_1', text: 'Dãy số ghi nhận từ cảm biến: 25, 27, 30, 32', category: 'cat_data', explanation: 'Chỉ là các con số thô chưa qua phân tích.' },
        { id: 'd_2', text: 'Bản đồ dự báo bão nhiệt đới đang tiến vào Biển Đông', category: 'cat_info', explanation: 'Dữ liệu khí tượng đã được phân tích thành thông tin cảnh báo.' },
        { id: 'd_3', text: 'Bức ảnh chụp vệ tinh quang phổ hồng ngoại', category: 'cat_data', explanation: 'Tệp hình ảnh thô từ vệ tinh.' },
        { id: 'd_4', text: 'Bảng xếp hạng học lực học sinh học kỳ 1 của lớp 10A', category: 'cat_info', explanation: 'Điểm số thô đã được tổng hợp thành thông tin xếp loại.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Dữ liệu (Data) trong tin học được hiểu là gì?',
        options: [
          'Các số liệu, ký hiệu, hình ảnh, âm thanh thô thu nhận được từ thế giới khách quan',
          'Một bức tranh vẽ trên tường',
          'Sự hiểu biết sâu sắc của các nhà bác học',
          'Thời gian tính bằng giây'
        ],
        correctIndex: 0,
        explanation: 'Dữ liệu là dạng biểu diễn thô của thông tin, được thu thập và lưu trữ để xử lý.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Một máy tính thực hiện chu trình xử lý thông tin theo thứ tự nào sau đây?',
        options: [
          'Thu nhận thông tin -> Lưu trữ -> Xử lý -> Xuất/Truyền tải thông tin',
          'Xử lý -> Thu nhận -> Lưu trữ -> Xóa',
          'In tài liệu -> Nhập dữ liệu -> Tắt máy',
          'Xuất thông tin -> Lưu trữ -> Thu nhận'
        ],
        correctIndex: 0,
        explanation: 'Chu trình xử lý thông tin chuẩn gồm 4 bước: Input (Thu nhận) -> Storage (Lưu trữ) -> Process (Xử lý) -> Output (Truyền tải).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Ví dụ nào sau đây thể hiện rõ nhất khái niệm "Tri thức" (Knowledge)?',
        options: [
          'Bác sĩ dựa vào kết quả xét nghiệm máu (thông tin) để kê đơn thuốc điều trị phù hợp cho bệnh nhân',
          'Dãy số: 120, 80 trên màn hình máy đo huyết áp',
          'Tờ giấy trắng tinh chưa viết gì',
          'Dây cáp mạng cắm vào máy tính'
        ],
        correctIndex: 0,
        explanation: 'Tri thức là sự hiểu biết và áp dụng thông tin để đưa ra quyết định hành động chuyên môn chính xác.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Thiết bị nào sau đây đóng vai trò thu nhận thông tin (Input) vào máy tính?',
        options: ['Bàn phím, chuột, máy quét (Scanner), micro', 'Màn hình máy tính', 'Máy in màu laser', 'Loa âm thanh'],
        correctIndex: 0,
        explanation: 'Bàn phím, chuột, máy quét và micro là các thiết bị vào (Input devices) chuyển thông tin từ người dùng vào máy tính.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Điểm khác biệt quan trọng nhất giữa máy tính điện tử và con người trong xử lý thông tin là gì?',
        options: [
          'Máy tính xử lý với tốc độ cực nhanh, lưu trữ khổng lồ và không mệt mỏi nhưng chỉ làm theo chương trình chỉ dẫn',
          'Máy tính có cảm xúc vui buồn như người',
          'Máy tính có thể tự sinh ra khi cắm điện',
          'Con người tính toán hàng tỷ phép tính mỗi giây nhanh hơn máy tính'
        ],
        correctIndex: 0,
        explanation: 'Máy tính vượt trội con người về tốc độ và dung lượng nhớ, nhưng không có tư duy sáng tạo độc lập mà phải tuân theo tập lệnh của con người.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Khảo sát và Lập Sơ đồ Xử lý Dữ liệu Học tập Lớp 10',
        context: 'Lớp 10 cần xây dựng quy trình thu thập điểm danh và thông báo kế hoạch học tập hàng tuần cho 40 bạn trong lớp.',
        mission: 'Vẽ sơ đồ luồng dữ liệu từ lúc bạn lớp trưởng thu thập thông tin điểm danh đến lúc gửi báo cáo cho giáo viên chủ nhiệm.',
        steps: [
          'Bước 1: Xác định đầu vào (Input): Danh sách bạn vắng/có mặt.',
          'Bước 2: Xử lý (Process): Nhập vào bảng tính Google Sheets để tính tỷ lệ chuyên cần.',
          'Bước 3: Đầu ra (Output): Gửi bảng báo cáo tóm tắt qua nhóm Zalo lớp.'
        ],
        outputRequirement: 'Một bản sơ đồ luồng dữ liệu đơn giản gồm 3 khối: Đầu vào -> Xử lý -> Đầu ra.',
        practicalTip: 'Tự động hóa bằng biểu mẫu trực tuyến (Google Form) sẽ giúp bước thu thập dữ liệu nhanh và chính xác gấp 5 lần.'
      },
      mindmap: {
        id: 'mm_10_1',
        label: 'THÔNG TIN VÀ XỬ LÝ THÔNG TIN',
        color: '#059669',
        children: [
          {
            id: 'mm_10_1_1',
            label: 'Các cấp độ',
            children: [
              { id: 'mm_10_1_1_1', label: 'Dữ liệu thô (Data)' },
              { id: 'mm_10_1_1_2', label: 'Thông tin có nghĩa (Info)' },
              { id: 'mm_10_1_1_3', label: 'Tri thức hành động (Knowledge)' }
            ]
          },
          {
            id: 'mm_10_1_2',
            label: 'Chu trình xử lý',
            children: [
              { id: 'mm_10_1_2_1', label: 'Thu nhận (Input)' },
              { id: 'mm_10_1_2_2', label: 'Lưu trữ (Storage)' },
              { id: 'mm_10_1_2_3', label: 'Biến đổi (Process)' },
              { id: 'mm_10_1_2_4', label: 'Truyền tải (Output)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Khám Phá Dữ Liệu 10',
      badgeIcon: 'Info',
      roleTitle: 'Chuyên Viên Nhập Môn Khoa Học Dữ Liệu',
      congratsMessage: 'Chúc mừng bạn! Bạn đã hoàn thành bài mở đầu nền tảng môn Tin học 10 GDPT 2018.',
      skillsUnlocked: ['Phân biệt Dữ liệu - Thông tin - Tri thức', 'Sơ đồ chu trình xử lý', 'Tư duy công nghệ số']
    }
  },

  // Bài 16: Ngôn ngữ lập trình bậc cao và Python (Mở đầu Lập trình Python)
  {
    id: 16,
    code: 'TIN10_B16',
    title: 'Ngôn ngữ lập trình bậc cao và Python',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Lập trình Python',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bước chân vào thế giới lập trình hiện đại với ngôn ngữ Python trong sáng và mạnh mẽ',
      description: 'Tìm hiểu khái niệm ngôn ngữ máy, hợp ngữ, ngôn ngữ bậc cao và cách viết các câu lệnh Python đầu tiên ở cả chế độ gõ trực tiếp (Interactive Mode) và tệp kịch bản (Script Mode).',
      accentColor: 'from-amber-500 to-orange-600',
      keyHighlights: ['Ngôn ngữ bậc cao vs Ngôn ngữ máy', 'Chế độ tương tác & Chế độ kịch bản', 'Lệnh in print() trong Python']
    },
    objectives: [
      {
        id: 'obj_10_16_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu ngôn ngữ lập trình bậc cao',
        description: 'Trình bày được khái niệm ngôn ngữ lập trình bậc cao, chương trình dịch (thông dịch / biên dịch) và đặc điểm nổi bật của Python.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Soạn thảo & Chạy lệnh Python',
        description: 'Thực hiện được câu lệnh in văn bản `print("Xin chào!")` và các phép toán số học cơ bản trong môi trường Python.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Niềm say mê tư duy lập trình',
        description: 'Hình thành niềm hứng thú với tư duy giải quyết vấn đề bằng thuật toán và tính kiên nhẫn khi sửa lỗi lập trình.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Giao tiếp với cỗ máy tính',
      scenario: 'Máy tính thực chất chỉ hiểu được các tín hiệu nhị phân gồm các số 0 và 1 (ngôn ngữ máy). Nếu con người phải viết hàng triệu số 0 và 1 để ra lệnh cho máy tính thì sẽ vô cùng khó khăn.',
      pollQuestion: 'Để lập trình viên viết mã nguồn gần gũi với ngôn ngữ tự nhiên của con người (tiếng Anh), người ta đã sáng tạo ra cái gì?',
      pollOptions: [
        { id: 'p10_16_1', text: 'Ngôn ngữ lập trình bậc cao (như Python, C++, Java)', votesPercent: 92, isPopular: true, insight: 'Chính xác! Ngôn ngữ bậc cao dùng từ khóa tiếng Anh dễ hiểu, sau đó chương trình dịch sẽ dịch sang mã máy 0 và 1 cho máy tính hiểu.' },
        { id: 'p10_16_2', text: 'Thẻ cào điện thoại', votesPercent: 3, insight: 'Thẻ cào dùng để nạp cước viễn thông.' },
        { id: 'p10_16_3', text: 'Cáp sạc USB', votesPercent: 5, insight: 'Cáp sạc chỉ truyền điện và dữ liệu vật lý.' }
      ],
      reflection: 'Python là ngôn ngữ lập trình bậc cao phổ biến nhất thế giới hiện nay nhờ cú pháp ngắn gọn, dễ học và ứng dụng rộng khắp từ trí tuệ nhân tạo đến phát triển web.'
    },
    knowledge: [
      {
        id: 'tab_10_16_1',
        title: '1. Khái niệm Ngôn ngữ bậc cao & Giới thiệu Python',
        subtitle: 'Cú pháp trong sáng và chế độ làm việc',
        iconName: 'Code2',
        keyPoints: [
          'Ngôn ngữ lập trình bậc cao: Dùng các từ khóa tiếng Anh gần gũi với con người (như print, if, for, input), độc lập với phần cứng cụ thể.',
          'Python là ngôn ngữ thông dịch (Interpreter): Chương trình dịch đọc và thực thi từng dòng lệnh một cách trực tiếp.',
          'Hai chế độ làm việc: Chế độ tương tác (Interactive Mode với dấu nhắc `>>>`) dùng để thử nghiệm nhanh từng lệnh; Chế độ soạn thảo kịch bản (Script Mode lưu tệp `.py`) dùng để lưu toàn bộ chương trình.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Câu lệnh Python đầu tiên của bạn\nprint("Xin chào các bạn học sinh Lớp 10!")\nprint("2024 + 2 = ", 2024 + 2)\nprint("Chúc bạn học giỏi Tin học GDPT 2018!")',
          simulatedOutput: 'Xin chào các bạn học sinh Lớp 10!\n2024 + 2 = 2026\nChúc bạn học giỏi Tin học GDPT 2018!'
        },
        emCanNho: [
          'Python là ngôn ngữ lập trình bậc cao, cú pháp ngắn gọn, trực quan và dễ học.',
          'Lệnh `print()` dùng để in thông điệp hoặc giá trị biểu thức ra màn hình.',
          'Chương trình Python hoàn chỉnh được lưu dưới dạng tệp có phần mở rộng `.py`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp câu lệnh Python và Kết quả hiển thị',
      instruction: 'Nối câu lệnh Python với kết quả hiển thị tương ứng trên màn hình:',
      matchingPairs: [
        { id: 'py_1', left: 'print("Chào Lớp 10")', right: 'Chào Lớp 10' },
        { id: 'py_2', left: 'print(10 + 20)', right: '30' },
        { id: 'py_3', left: 'print(2 ** 3)', right: '8 (Phép tính lũy thừa 2 mũ 3)' },
        { id: 'py_4', left: 'print("A" * 3)', right: 'AAA (Nhân chuỗi ký tự 3 lần)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phần mở rộng mặc định của một tệp mã nguồn chương trình Python là gì?',
        options: ['.py', '.docx', '.html', '.java'],
        correctIndex: 0,
        explanation: 'Tệp mã nguồn Python luôn có phần đuôi mở rộng là `.py` (ví dụ: `bai1.py`).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để in dòng chữ "Tin học 10" ra màn hình, câu lệnh Python nào sau đây viết ĐÚNG cú pháp?',
        options: ['print("Tin học 10")', 'echo "Tin học 10"', 'write("Tin học 10")', 'display "Tin học 10"'],
        correctIndex: 0,
        explanation: 'Trong Python, hàm `print()` được dùng để xuất dữ liệu ra màn hình chuẩn.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Dấu nhắc lệnh mặc định trong chế độ tương tác (Interactive Shell) của phần mềm IDLE Python là ký hiệu nào?',
        options: ['>>>', '$$$', '###', ':::'],
        correctIndex: 0,
        explanation: 'Dấu nhắc ba dấu lớn `>>>` là dấu hiệu báo Python đang sẵn sàng nhận lệnh tương tác trực tiếp.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Kết quả in ra màn hình khi thực hiện lệnh: print(15 // 4) trong Python là bao nhiêu?',
        options: ['3 (Phép chia lấy phần nguyên)', '3.75', '4', '1'],
        correctIndex: 0,
        explanation: 'Toán tử `//` trong Python thực hiện phép chia lấy phần nguyên: 15 chia 4 được 3 dư 3.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Tại sao Python được gọi là ngôn ngữ thông dịch (Interpreted Language)?',
        options: [
          'Vì chương trình dịch của Python đọc và thi hành trực tiếp từng dòng lệnh mà không cần biên dịch toàn bộ mã sang mã máy trước',
          'Vì Python có thể tự nói chuyện bằng tiếng Việt',
          'Vì Python không cần sử dụng bộ nhớ RAM',
          'Vì Python chỉ chạy được trên điện thoại'
        ],
        correctIndex: 0,
        explanation: 'Trình thông dịch (Interpreter) dịch và thực thi từng lệnh một cách tuần tự, giúp dễ dàng kiểm tra và gỡ lỗi.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình Python: "Tấm Thẻ Giới Thiệu Bản Thân"',
        context: 'Làm quen với lập trình bằng việc viết chương trình đầu tiên in ra thông tin hồ sơ học sinh lớp 10.',
        mission: 'Viết một tệp script `gioithieu.py` in ra Họ tên, Lớp, Trường và Sở thích cá nhân của bạn trên các dòng riêng biệt.',
        steps: [
          'Bước 1: Mở Python IDLE hoặc VS Code, tạo tệp mới `gioithieu.py`.',
          'Bước 2: Sử dụng 4 câu lệnh `print()` để in từng dòng thông tin.',
          'Bước 3: Nhấn phím F5 để chạy chương trình và chiêm ngưỡng kết quả trên cửa sổ Output.'
        ],
        outputRequirement: 'Chương trình chạy không bị lỗi cú pháp, hiển thị đầy đủ thông tin giới thiệu.',
        practicalTip: 'Đừng quên đặt chuỗi ký tự bên trong cặp dấu ngoặc kép `""` hoặc ngoặc đơn `\'\'`.'
      },
      mindmap: {
        id: 'mm_10_16',
        label: 'LÀM QUEN VỚI LẬP TRÌNH PYTHON',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_16_1',
            label: 'Đặc điểm Python',
            children: [
              { id: 'mm_10_16_1_1', label: 'Ngôn ngữ bậc cao' },
              { id: 'mm_10_16_1_2', label: 'Thông dịch (Interpreter)' },
              { id: 'mm_10_16_1_3', label: 'Cú pháp trong sáng, dễ học' }
            ]
          },
          {
            id: 'mm_10_16_2',
            label: 'Chế độ làm việc',
            children: [
              { id: 'mm_10_16_2_1', label: 'Tương tác (>>>)' },
              { id: 'mm_10_16_2_2', label: 'Kịch bản (.py)' }
            ]
          },
          {
            id: 'mm_10_16_3',
            label: 'Lệnh in print()',
            children: [
              { id: 'mm_10_16_3_1', label: 'In chuỗi văn bản' },
              { id: 'mm_10_16_3_2', label: 'In biểu thức toán học' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Tân Binh Lập Trình Python 10',
      badgeIcon: 'Code2',
      roleTitle: 'Lập Trình Viên Python Khởi Nghiệp',
      congratsMessage: 'Tuyệt vời! Bạn đã viết thành công chương trình Python đầu tiên và bước vào thế giới lập trình chuyên nghiệp.',
      skillsUnlocked: ['Sử dụng lệnh print()', 'Phân biệt Interpreter vs Compiler', 'Tạo tệp script .py']
    }
  }
];

// Full 34 lessons of Grade 10 from taphuan.nxbgd.vn
export const LESSON_TITLES_10: Record<number, { title: string; themeId: number; themeName: string; badge: string; desc: string }> = {
  1: { title: 'Thông tin và xử lí thông tin', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thông tin & Dữ liệu', desc: 'Dữ liệu, thông tin, tri thức và quy trình thu nhận, xử lý, truyền tải thông tin của máy tính.' },
  2: { title: 'Vai trò của thiết bị thông minh và tin học đối với xã hội', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thiết bị thông minh', desc: 'Sự phổ biến của điện thoại thông minh, IoT, máy tính bảng và tác động của tin học tới đời sống xã hội.' },
  3: { title: 'Một số kiểu dữ liệu và dữ liệu văn bản', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Dữ liệu văn bản', desc: 'Các kiểu dữ liệu trong tin học, bảng mã chuẩn ASCII và bảng mã quốc tế Unicode tiếng Việt UTF-8.' },
  4: { title: 'Hệ nhị phân và dữ liệu số nguyên', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Hệ nhị phân', desc: 'Quy tắc biểu diễn số nguyên trong hệ nhị phân (Binary Base 2), chuyển đổi giữa hệ 10 và hệ 2.' },
  5: { title: 'Dữ liệu lôgic', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Logic học', desc: 'Các giá trị logic True/False và các phép toán logic cơ bản: AND (VÀ), OR (HOẶC), NOT (PHỦ ĐỊNH).' },
  6: { title: 'Dữ liệu âm thanh và hình ảnh', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Âm thanh & Ảnh số', desc: 'Số hóa âm thanh (tần số lấy mẫu) và số hóa hình ảnh (điểm ảnh Pixel, độ phân giải, hệ màu RGB).' },
  7: { title: 'Thực hành sử dụng thiết bị số thông dụng', themeId: 1, themeName: 'Chủ đề 1: Máy tính và xã hội tri thức', badge: 'Thực hành thiết bị số', desc: 'Kết nối và khai thác các tính năng của điện thoại thông minh, máy tính bảng và thiết bị lưu trữ ngoài.' },
  8: { title: 'Mạng máy tính trong cuộc sống hiện đại', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'Mạng máy tính', desc: 'Mạng cục bộ (LAN), mạng diện rộng (WAN), dịch vụ Internet và điện toán đám mây trong kỷ nguyên số.' },
  9: { title: 'An toàn trong không gian mạng', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'An toàn mạng', desc: 'Nhận biết mã độc (Virus, Trojan, Worm), lừa đảo qua mạng và các biện pháp bảo vệ mật khẩu an toàn.' },
  10: { title: 'Thực hành khai thác tài nguyên trên Internet', themeId: 2, themeName: 'Chủ đề 2: Mạng máy tính và Internet', badge: 'Tài nguyên Internet', desc: 'Kỹ năng tìm kiếm thông tin bằng Google, dịch thuật trực tuyến và khai thác học liệu số phục vụ tự học.' },
  11: { title: 'Ứng dụng trên môi trường số. Nghĩa vụ tôn trọng bản quyền', themeId: 3, themeName: 'Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số', badge: 'Bản quyền số', desc: 'Quy định về sở hữu trí tuệ, bản quyền tác giả phần mềm, giấy phép Creative Commons và đạo đức số.' },
  12: { title: 'Phần mềm thiết kế đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Đồ hoạ Vector', desc: 'Khái niệm đồ họa Raster vs Vector, giao diện phần mềm Inkscape và các công cụ vẽ hình học cơ bản.' },
  13: { title: 'Bổ sung các đối tượng đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Vẽ đối tượng', desc: 'Thao tác với màu tô (Fill), màu viền (Stroke), nhóm đối tượng (Group) và sắp xếp thứ tự các lớp hình.' },
  14: { title: 'Làm việc với đối tượng đường và văn bản', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Đường cong Bezier', desc: 'Vẽ và uốn cong đường viền bằng công cụ Bezier, chèn chữ nghệ thuật và uốn văn bản theo đường cong.' },
  15: { title: 'Hoàn thiện hình ảnh đồ hoạ', themeId: 4, themeName: 'Chủ đề 4: Ứng dụng tin học (Đồ họa Inkscape)', badge: 'Dự án Logo/Banner', desc: 'Dự án thực hành thiết kế một huy hiệu Logo hoặc Poster cổ động hoàn chỉnh và xuất tệp ảnh PNG/SVG.' },
  16: { title: 'Ngôn ngữ lập trình bậc cao và Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Nhập môn Python', desc: 'Khái niệm ngôn ngữ lập trình bậc cao, trình thông dịch Python và câu lệnh in print() đầu tiên.' },
  17: { title: 'Biến và lệnh gán', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Biến & Lệnh gán', desc: 'Quy tắc đặt tên biến, lệnh gán giá trị (=) và các kiểu dữ liệu cơ bản trong Python (int, float, str, bool).' },
  18: { title: 'Các lệnh vào ra đơn giản', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Lệnh vào ra input/print', desc: 'Nhập dữ liệu từ bàn phím bằng hàm input(), ép kiểu dữ liệu int()/float() và định dạng in ra màn hình.' },
  19: { title: 'Câu lệnh điều kiện If', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Rẽ nhánh if-else', desc: 'Cú pháp cấu trúc rẽ nhánh if, if-else, if-elif-else và quy tắc thụt lề (Indentation) bắt buộc trong Python.' },
  20: { title: 'Câu lệnh lặp For', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Vòng lặp for', desc: 'Cú pháp vòng lặp for kết hợp hàm sinh dãy số range(start, stop, step) để lặp với số lần biết trước.' },
  21: { title: 'Câu lệnh lặp While', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Vòng lặp while', desc: 'Vòng lặp với số lần chưa biết trước while <điều kiện>, tránh lỗi lặp vô hạn và lệnh ngắt break.' },
  22: { title: 'Kiểu dữ liệu danh sách', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Danh sách List', desc: 'Khái niệm kiểu dữ liệu danh sách (List), chỉ số phần tử (bắt đầu từ 0) và truy cập phần tử trong mảng.' },
  23: { title: 'Một số lệnh làm việc với dữ liệu danh sách', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phương thức List', desc: 'Các phương thức thông dụng: append() thêm phần tử, remove() xóa, len() độ dài, sort() sắp xếp.' },
  24: { title: 'Xâu kí tự', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Xâu ký tự String', desc: 'Kiểu dữ liệu xâu ký tự (String), phép ghép xâu (+), phép nhân xâu (*) và truy cập từng ký tự theo chỉ số.' },
  25: { title: 'Một số lệnh làm việc với xâu kí tự', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Hàm xử lý xâu', desc: 'Các phương thức xử lý xâu: split() tách từ, join() nối từ, find() tìm kiếm và replace() thay thế từ.' },
  26: { title: 'Hàm trong Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Hàm def', desc: 'Khái niệm chương trình con, cách định nghĩa hàm với từ khóa def và lợi ích của hàm trong tái sử dụng mã.' },
  27: { title: 'Tham số của hàm', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Tham số & Return', desc: 'Truyền đối số vào hàm, giá trị mặc định của tham số và trả về kết quả tính toán với lệnh return.' },
  28: { title: 'Phạm vi của biến', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phạm vi biến', desc: 'Phân biệt biến toàn cục (Global variable) và biến cục bộ (Local variable) trong và ngoài thân hàm.' },
  29: { title: 'Nhận biết lỗi chương trình', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Phân loại lỗi', desc: 'Nhận biết 3 loại lỗi chính: Lỗi cú pháp (Syntax Error), Lỗi khi thực thi (Runtime Error) và Lỗi ngữ nghĩa (Logic Error).' },
  30: { title: 'Kiểm thử và gỡ lỗi chương trình', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Kiểm thử & Debug', desc: 'Phương pháp xây dựng bộ dữ liệu thử nghiệm (Test cases) và kỹ thuật gỡ lỗi debug bằng print hoặc breakpoint.' },
  31: { title: 'Thực hành viết chương trình đơn giản', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Dự án Lập trình', desc: 'Vận dụng tổng hợp các kiến thức Python để giải quyết bài toán tính tiền điện thoại, quản lý điểm học sinh.' },
  32: { title: 'Ôn tập lập trình Python', themeId: 5, themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính', badge: 'Tổng ôn Python', desc: 'Hệ thống hóa toàn bộ cấu trúc dữ liệu và giải thuật trong chương trình Tin học 10 chuẩn bị cho kiểm tra.' },
  33: { title: 'Nghề thiết kế đồ hoạ máy tính', themeId: 6, themeName: 'Chủ đề 6: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp Graphic Design', desc: 'Tìm hiểu công việc của chuyên viên thiết kế đồ họa (Graphic Designer), cơ hội việc làm và các kỹ năng cần trau dồi.' },
  34: { title: 'Nghề phát triển phần mềm', themeId: 6, themeName: 'Chủ đề 6: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp Lập trình viên', desc: 'Khám phá nghề Kỹ sư phần mềm (Software Engineer): quy trình làm việc Agile, vai trò và triển vọng phát triển nghề nghiệp.' }
};

export function getLesson10ById(id: number): Lesson {
  const existing = LESSONS_DATA_10.find(l => l.id === id);
  if (existing) return existing;

  const meta = LESSON_TITLES_10[id] || {
    title: `Bài ${id}: Tin học 10 chuẩn GDPT 2018`,
    themeId: 1,
    themeName: 'Chủ đề chuẩn SGK Tin học 10',
    badge: 'Tin học 10',
    desc: 'Học tập và thực hành theo chuẩn SGK Tin học 10 (taphuan.nxbgd.vn).'
  };

  return {
    id,
    code: `TIN10_B${id.toString().padStart(2, '0')}`,
    title: meta.title,
    themeId: meta.themeId,
    themeName: meta.themeName,
    topicBadge: meta.badge,
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: `Chinh phục chuẩn kiến thức và kỹ năng: ${meta.title}`,
      description: meta.desc,
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Chuẩn SGK GDPT 2018 taphuan.nxbgd.vn', 'Trải nghiệm học tập tương tác', 'Thực hành ứng dụng thực tế']
    },
    objectives: [
      {
        id: `obj_10_${id}_1`,
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: `Nắm vững lý thuyết ${meta.title}`,
        description: `Hiểu rõ các khái niệm, quy tắc và cú pháp chuẩn được trình bày trong ${meta.title}.`,
        iconName: 'BookOpen'
      },
      {
        id: `obj_10_${id}_2`,
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng thực hành & Thuật toán',
        description: 'Vận dụng kiến thức để giải quyết bài toán trên máy tính hoặc viết chương trình Python.',
        iconName: 'Code'
      },
      {
        id: `obj_10_${id}_3`,
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy logic & Ý thức tự học',
        description: 'Phát triển năng lực tư duy logic, tính kiên trì và thói quen giải quyết vấn đề khoa học.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: `Tình huống khởi động: ${meta.title}`,
      scenario: `Trong quá trình học tập và áp dụng máy tính, tình huống gắn liền với ${meta.title} sẽ giúp ta thấu hiểu rõ nét giá trị của công nghệ.`,
      pollQuestion: `Theo bạn, phương pháp học tập hiệu quả nhất với ${meta.title} là gì?`,
      pollOptions: [
        { id: `p10_${id}_1`, text: 'Hiểu bản chất nguyên lý và tự tay gõ mã / thực hành máy tính', votesPercent: 89, isPopular: true, insight: 'Chính xác! Lập trình và Tin học bắt buộc phải tự tay thực hành mới thành thạo.' },
        { id: `p10_${id}_2`, text: 'Chỉ đọc sách mà không bao giờ mở máy tính', votesPercent: 4, insight: 'Đọc suông không thể hình thành kỹ năng thao tác.' },
        { id: `p10_${id}_3`, text: 'Nhờ bạn làm hộ bài', votesPercent: 7, insight: 'Nhờ người khác sẽ làm mất cơ hội tự phát triển tư duy của bản thân.' }
      ],
      reflection: `Thực hành đều đặn với ${meta.title} sẽ giúp bạn phát triển tư duy giải quyết vấn đề xuất sắc.`
    },
    knowledge: [
      {
        id: `tab_10_${id}_1`,
        title: `1. Nội dung trọng tâm ${meta.title}`,
        subtitle: 'Kiến thức chuẩn SGK Tin học 10 taphuan.nxbgd.vn',
        iconName: 'Code2',
        keyPoints: [
          `Nắm vững các thuật ngữ và định nghĩa then chốt trong ${meta.title}.`,
          'Thực hiện đúng cú pháp và quy trình thao tác theo từng bước.',
          'Kết hợp kiểm thử để đảm bảo kết quả chính xác không có lỗi.'
        ],
        visualType: id >= 16 && id <= 32 ? 'interactive-python' : 'infographic',
        visualData: id >= 16 && id <= 32 ? {
          defaultCode: `# Thực hành lập trình Python cho ${meta.title}\nprint("Xin chào! Đang chạy ${meta.title}")\nx = 10\ny = 20\nprint("Kết quả x + y =", x + y)`,
          simulatedOutput: `Xin chào! Đang chạy ${meta.title}\nKết quả x + y = 30`
        } : {
          nodes: [
            { label: 'Bước 1: Khái niệm', desc: 'Xác định định nghĩa cốt lõi' },
            { label: 'Bước 2: Cú pháp / Thao tác', desc: 'Thực thi các lệnh theo chuẩn' },
            { label: 'Bước 3: Đánh giá', desc: 'Kiểm tra và củng cố kiến thức' }
          ]
        },
        emCanNho: [
          `Nắm vững bản chất và quy tắc cốt lõi của ${meta.title}.`,
          'Luôn chạy thử nghiệm và kiểm tra lỗi cẩn thận.',
          'Ghi nhớ các trường hợp đặc biệt để tránh mắc lỗi cú pháp.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: `Thử thách ghép cặp thuật ngữ: ${meta.title}`,
      instruction: 'Nối đúng khái niệm với chức năng hoặc cú pháp tương ứng:',
      matchingPairs: [
        { id: `pair_10_${id}_1`, left: 'Thuật ngữ cốt lõi', right: 'Định nghĩa chính xác theo chuẩn taphuan.nxbgd.vn' },
        { id: `pair_10_${id}_2`, left: 'Cú pháp / Quy tắc', right: 'Quy tắc lập trình và thao tác máy tính chuẩn mực' },
        { id: `pair_10_${id}_3`, left: 'Ứng dụng thực tế', right: 'Giải quyết bài toán học tập và đời sống' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: `Mục tiêu cơ bản nhất khi học bài "${meta.title}" là gì?`,
        options: [
          `Nắm vững kiến thức và kỹ năng thực hành chuẩn của ${meta.title}`,
          'Chỉ để xem video giải trí',
          'Tắt máy tính',
          'Không có mục tiêu nào'
        ],
        correctIndex: 0,
        explanation: 'Bài học giúp học sinh trang bị đầy đủ năng lực lý thuyết và thực hành theo chương trình GDPT 2018.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: `Khi thực hành nội dung của "${meta.title}", thói quen nào sau đây giúp viết mã hoặc thao tác ít lỗi nhất?`,
        options: [
          'Đọc kỹ đề bài, viết mã cẩn thận và kiểm thử từng bước',
          'Gõ thật nhanh không cần nhìn màn hình',
          'Rút nguồn điện đột ngột',
          'Không bao giờ lưu bài'
        ],
        correctIndex: 0,
        explanation: 'Cẩn thận, chú ý cú pháp và kiểm thử từng bước giúp phát hiện lỗi sớm và sửa chữa dễ dàng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: `Nội dung của bài học "${meta.title}" thuộc chủ đề nào trong SGK Tin học 10?`,
        options: [meta.themeName, 'Địa lý kinh tế', 'Hóa học hữu cơ', 'Âm nhạc cổ điển'],
        correctIndex: 0,
        explanation: `Nội dung bài học nằm trong ${meta.themeName} của SGK Tin học 10 GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: `Kỹ năng đạt được từ "${meta.title}" giúp học sinh phát triển năng lực gì?`,
        options: [
          'Năng lực tư duy giải quyết vấn đề và năng lực ứng dụng công nghệ thông tin',
          'Năng lực làm hỏng máy vi tính',
          'Tăng thời gian chơi game',
          'Quên hết các lệnh đã học'
        ],
        correctIndex: 0,
        explanation: 'Kỹ năng tin học và tư duy máy tính giúp học sinh làm chủ tương lai trong thời đại số.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: `Để tự đánh giá mức độ hiểu bài sau khi học xong "${meta.title}", học sinh nên làm gì?`,
        options: [
          'Làm bài kiểm tra tự đánh giá và hoàn thành bài tập vận dụng thực tế',
          'Đóng sách lại và không bao giờ ôn lại',
          'Xóa toàn bộ tệp bài làm',
          'Tắt màn hình ngay'
        ],
        correctIndex: 0,
        explanation: 'Làm bài tự đánh giá và dự án vận dụng là phương pháp tốt nhất để ghi nhớ sâu kiến thức.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: `Dự án Vận dụng Thực tế: ${meta.title}`,
        context: 'Ứng dụng kiến thức đã học vào dự án học tập thực tế của học sinh lớp 10.',
        mission: `Hoàn thành bài tập thực hành áp dụng kiến thức của ${meta.title} để nâng cao năng lực Tin học.`,
        steps: [
          'Bước 1: Đọc lại kiến thức cốt lõi và các ví dụ mẫu.',
          'Bước 2: Mở môi trường thực hành và thao tác từng bước.',
          'Bước 3: Đánh giá kết quả và chia sẻ sản phẩm với thầy cô, bạn bè.'
        ],
        outputRequirement: 'Sản phẩm thực hành hoàn chỉnh đạt chuẩn kỹ thuật theo yêu cầu.',
        practicalTip: 'Hãy thử nghiệm các trường hợp dữ liệu khác nhau để kiểm tra độ tin cậy của sản phẩm!'
      },
      mindmap: {
        id: `mm_10_${id}`,
        label: meta.title.toUpperCase(),
        color: '#059669',
        children: [
          {
            id: `mm_10_${id}_1`,
            label: 'Kiến thức cốt lõi',
            children: [
              { id: `mm_10_${id}_1_1`, label: 'Khái niệm & Cú pháp' },
              { id: `mm_10_${id}_1_2`, label: 'Nguyên lý hoạt động' }
            ]
          },
          {
            id: `mm_10_${id}_2`,
            label: 'Kỹ năng thực hành',
            children: [
              { id: `mm_10_${id}_2_1`, label: 'Thao tác từng bước' },
              { id: `mm_10_${id}_2_2`, label: 'Kiểm thử & Gỡ lỗi' }
            ]
          },
          {
            id: `mm_10_${id}_3`,
            label: 'Vận dụng thực tiễn',
            children: [
              { id: `mm_10_${id}_3_1`, label: 'Dự án học đường' },
              { id: `mm_10_${id}_3_2`, label: 'Định hướng nghề nghiệp' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: `Chuyên Gia ${meta.badge}`,
      badgeIcon: 'Award',
      roleTitle: `Nhà Thực Hành Tin Học 10 - ${meta.badge}`,
      congratsMessage: `Tuyệt vời! Bạn đã hoàn thành xuất sắc ${meta.title} theo chuẩn SGK Tin học 10 GDPT 2018.`,
      skillsUnlocked: [`Làm chủ ${meta.title}`, 'Tư duy logic & Thuật toán', 'Kỹ năng thực chiến']
    }
  };
}
