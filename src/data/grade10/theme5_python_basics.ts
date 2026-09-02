import { Lesson } from '../../types/lesson';

export const THEME5_PYTHON_BASICS_10: Lesson[] = [
  // Bài 16: Ngôn ngữ lập trình bậc cao và Python
  {
    id: 16,
    code: 'TIN10_B16',
    title: 'Ngôn ngữ lập trình bậc cao và Python',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Nhập môn Python',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bước chân vào thế giới lập trình: Khám phá ngôn ngữ Python thanh lịch và mạnh mẽ',
      description: 'Tìm hiểu ngôn ngữ lập trình bậc cao, sự khác biệt giữa trình biên dịch và trình thông dịch, cách viết câu lệnh in màn hình đầu tiên `print("Xin chào Python!")` và trải nghiệm chế độ tương tác.',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Ngôn ngữ bậc cao vs Ngôn ngữ máy', 'Trình thông dịch Python', 'Hàm print("Hello World") đầu tiên']
    },
    objectives: [
      {
        id: 'obj_10_16_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm ngôn ngữ lập trình',
        description: 'Trình bày được vai trò của ngôn ngữ lập trình bậc cao và lý do Python trở thành ngôn ngữ phổ biến nhất thế giới trong kỷ nguyên AI.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết và thực thi lệnh Python',
        description: 'Sử dụng được môi trường soạn thảo IDLE để viết chương trình đơn giản, in thông báo ra màn hình bằng lệnh `print()`.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Hứng thú và kiên nhẫn',
        description: 'Hình thành sự hào hứng khi nhìn thấy máy tính thực thi đúng dòng lệnh đầu tiên do chính tay mình viết ra.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Làm sao để con người ra lệnh cho máy tính?',
      scenario: 'Máy tính chỉ hiểu các dòng điện 0 và 1 của ngôn ngữ máy. Nếu bắt con người phải ngồi gõ hàng triệu số 0 và 1 để viết phần mềm thì vô cùng khó khăn.',
      pollQuestion: 'Phát minh nào giúp con người có thể viết lệnh bằng các từ tiếng Anh gần gũi như "print", "if", "for" để điều khiển máy tính?',
      pollOptions: [
        { id: 'p10_16_1', text: 'Ngôn ngữ lập trình bậc cao (High-level Programming Language) như Python, C++, Java', votesPercent: 93, isPopular: true, insight: 'Chính xác! Ngôn ngữ bậc cao gần gũi với ngôn ngữ tự nhiên của con người, sau đó được chương trình dịch chuyển thành ngôn ngữ máy.' },
        { id: 'p10_16_2', text: 'Nói trực tiếp bằng giọng nói qua micro', votesPercent: 3, insight: 'Để micro hiểu giọng nói cũng phải nhờ phần mềm được lập trình bằng ngôn ngữ bậc cao.' },
        { id: 'p10_16_3', text: 'Cầm chuột bấm liên tục', votesPercent: 4, insight: 'Bấm chuột chỉ tương tác với giao diện đã được lập trình sẵn.' }
      ],
      reflection: 'Python là ngôn ngữ lập trình trong sáng, dễ học và là bệ phóng hoàn hảo cho mọi học sinh THPT bước vào thế giới trí tuệ nhân tạo.'
    },
    knowledge: [
      {
        id: 'tab_10_16_1',
        title: '1. Môi Trường Làm Việc Của Python & Lệnh In print()',
        subtitle: 'Chế độ tương tác (Shell) và Chế độ soạn thảo (Script)',
        iconName: 'Terminal',
        keyPoints: [
          'Ngôn ngữ bậc cao: Gần với ngôn ngữ tự nhiên (tiếng Anh) và toán học, độc lập với phần cứng máy tính.',
          'Python là ngôn ngữ thông dịch (Interpreter): Dịch và thực thi từng câu lệnh một, giúp kiểm tra lỗi nhanh chóng.',
          'Hai chế độ làm việc: Chế độ tương tác (dấu nhắc `>>>` gõ lệnh chạy ngay) và Chế độ soạn thảo (viết toàn bộ file `.py` rồi bấm F5 để chạy).',
          'Lệnh in màn hình: `print("Nội dung cần in")`. Chuỗi văn bản đặt trong dấu ngoặc kép hoặc nháy đơn.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Câu lệnh Python đầu tiên của bạn\nprint("Xin chào các bạn học sinh Lớp 10!")\nprint("Chào mừng bạn đến với ngôn ngữ lập trình Python!")\nprint("2026 + 4 =", 2026 + 4)'
        },
        emCanNho: [
          'Python là ngôn ngữ lập trình bậc cao, thông dịch, dễ học và mạnh mẽ.',
          'Tệp chương trình Python có phần mở rộng là `.py`.',
          'Lệnh `print(...)` dùng để in dữ liệu hoặc kết quả tính toán ra màn hình.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu lệnh Python và Kết quả hiển thị',
      instruction: 'Nối câu lệnh Python với kết quả in ra màn hình tương ứng:',
      matchingPairs: [
        { id: 'py1', left: 'print("Tin học 10")', right: 'In ra dòng chữ: Tin học 10' },
        { id: 'py2', left: 'print(10 + 20)', right: 'In ra kết quả tính toán số học: 30' },
        { id: 'py3', left: 'print("10 + 20")', right: 'In ra nguyên văn chuỗi ký tự: 10 + 20' },
        { id: 'py4', left: 'print("Điểm:", 9.5)', right: 'In ra nhiều giá trị cách nhau dấu cách: Điểm: 9.5' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tệp mã nguồn chương trình viết bằng ngôn ngữ Python có phần mở rộng mặc định là gì?',
        options: ['.py', '.cpp', '.java', '.docx'],
        correctIndex: 0,
        explanation: 'Tệp chương trình Python luôn mang đuôi mở rộng `.py` (ví dụ: `bai1.py`).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để in dòng chữ "Xin chào Việt Nam" ra màn hình, câu lệnh Python nào sau đây là ĐÚNG cú pháp?',
        options: ['print("Xin chào Việt Nam")', 'echo "Xin chào Việt Nam"', 'cout << "Xin chào Việt Nam"', 'write("Xin chào Việt Nam")'],
        correctIndex: 0,
        explanation: 'print() là hàm in dữ liệu chuẩn của Python.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Kết quả khi thực thi câu lệnh `print(5 * 6)` trong Python là gì?',
        options: ['30', '5 * 6', '"30"', 'Báo lỗi'],
        correctIndex: 0,
        explanation: 'Khi không đặt trong dấu nháy kép, Python sẽ tính toán biểu thức số học 5 nhân 6 bằng 30.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Python thuộc loại ngôn ngữ nào sau đây?',
        options: [
          'Ngôn ngữ lập trình bậc cao thông dịch',
          'Ngôn ngữ máy thuần túy',
          'Hợp ngữ chỉ dùng mã nhị phân',
          'Ngôn ngữ phần cứng'
        ],
        correctIndex: 0,
        explanation: 'Python là ngôn ngữ bậc cao sử dụng trình thông dịch (Interpreter) dịch từng dòng lệnh khi chạy.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Trong môi trường Python IDLE, phím tắt nào dùng để CHẠY (Run Module) tệp chương trình đang soạn thảo?',
        options: ['Phím F5', 'Phím F1', 'Phím F12', 'Phím Esc'],
        correctIndex: 0,
        explanation: 'Bấm F5 trong cửa sổ soạn thảo IDLE để chạy chương trình và xem kết quả bên cửa sổ Shell.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình: Tấm Danh Thiếp Lập Trình Viên',
        context: 'Viết chương trình Python đầu tiên giới thiệu về bản thân.',
        mission: 'Soạn một tệp `danh_thiep.py` in ra thông tin cá nhân đóng khung đẹp mắt.',
        steps: [
          'Dòng 1: `print("==================================")`',
          'Dòng 2: `print("Họ và tên: Nguyễn Văn An")`',
          'Dòng 3: `print("Lớp: 10A1 - Trường THPT Chuyên")`',
          'Dòng 4: `print("Ước mơ: Trở thành Kỹ sư Trí tuệ nhân tạo")`',
          'Dòng 5: `print("==================================")`'
        ],
        outputRequirement: 'Chương trình chạy trơn tru, hiển thị khung thông tin cân đối, bắt mắt.',
        practicalTip: 'Dùng lệnh `print("*" * 35)` để in nhanh một đường kẻ gồm 35 dấu sao.'
      },
      mindmap: {
        id: 'mm_10_16',
        label: 'NHẬP MÔN PYTHON',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_16_1',
            label: 'Đặc trưng Python',
            children: [
              { id: 'mm_10_16_1_1', label: 'Ngôn ngữ bậc cao thông dịch' },
              { id: 'mm_10_16_1_2', label: 'Cú pháp trong sáng, dễ đọc' },
              { id: 'mm_10_16_1_3', label: 'Tệp mã nguồn đuôi .py' }
            ]
          },
          {
            id: 'mm_10_16_2',
            label: 'Lệnh in cơ bản',
            children: [
              { id: 'mm_10_16_2_1', label: 'print("Chuỗi ký tự")' },
              { id: 'mm_10_16_2_2', label: 'print(Biểu thức số)' },
              { id: 'mm_10_16_2_3', label: 'Phím F5 để chạy lệnh' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Lập Trình Viên Python Khởi Nghiệp 10',
      badgeIcon: 'Code',
      roleTitle: 'Chuyên Viên Lập Trình Python Căn Bản',
      congratsMessage: 'Tuyệt vời! Bạn đã viết thành công dòng mã Python đầu tiên và bước vào thế giới lập trình đỉnh cao.',
      skillsUnlocked: ['Viết câu lệnh print()', 'Chạy mã với phím F5', 'Hiểu cơ chế thông dịch Python']
    }
  },

  // Bài 17: Biến và lệnh gán
  {
    id: 17,
    code: 'TIN10_B17',
    title: 'Biến và lệnh gán',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Biến & Lệnh gán',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Chiếc hộp lưu trữ thông minh: Khám phá Biến, Kiểu dữ liệu và Phép gán',
      description: 'Tìm hiểu khái niệm Biến (Variable) như những chiếc hộp có dán nhãn để lưu trữ dữ liệu, cú pháp lệnh gán dấu bằng (`=`), quy tắc đặt tên biến chuẩn xác và 4 kiểu dữ liệu cơ bản: int, float, str, bool.',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Quy tắc đặt tên biến chuẩn', 'Toán tử gán giá trị (=)', '4 kiểu dữ liệu: int, float, str, bool']
    },
    objectives: [
      {
        id: 'obj_10_17_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu bản chất của Biến',
        description: 'Trình bày được định nghĩa biến là tên định danh trỏ đến vùng nhớ lưu trữ giá trị và giá trị của biến có thể thay đổi trong quá trình chạy.',
        iconName: 'Box'
      },
      {
        id: 'obj_10_17_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khai báo biến và nhận biết kiểu dữ liệu',
        description: 'Sử dụng thành thạo lệnh gán để lưu trữ số nguyên (int), số thực (float), xâu ký tự (str), logic (bool) và kiểm tra bằng hàm `type()`.',
        iconName: 'CheckSquare'
      },
      {
        id: 'obj_10_17_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Quy ước đặt tên khoa học',
        description: 'Rèn luyện thói quen đặt tên biến có ý nghĩa gợi nhớ (như `dien_tich`, `ho_ten`) thay vì đặt tên tùy tiện khó hiểu.',
        iconName: 'Tag'
      }
    ],
    warmup: {
      title: 'Tình huống: Đặt tên cho những chiếc hộp đựng đồ',
      scenario: 'Bạn có 3 chiếc hộp: 1 hộp đựng điểm toán, 1 hộp đựng tên học sinh, 1 hộp đựng trạng thái đã nộp bài hay chưa. Trong lập trình, các chiếc hộp này được gọi là gì?',
      pollQuestion: 'Thành phần nào trong ngôn ngữ lập trình dùng để lưu trữ dữ liệu có thể thay đổi được trong bộ nhớ?',
      pollOptions: [
        { id: 'p10_17_1', text: 'Biến (Variable)', votesPercent: 94, isPopular: true, insight: 'Chính xác! Biến là vùng nhớ có tên dùng để lưu trữ giá trị dữ liệu và có thể cập nhật linh hoạt.' },
        { id: 'p10_17_2', text: 'Dây cáp mạng', votesPercent: 3, insight: 'Dây mạng truyền tín hiệu, không phải vùng nhớ trong code.' },
        { id: 'p10_17_3', text: 'Nút nguồn máy tính', votesPercent: 3, insight: 'Nút nguồn dùng để bật tắt thiết bị.' }
      ],
      reflection: 'Biến là khái niệm trung tâm của mọi ngôn ngữ lập trình, giúp lưu giữ trạng thái và kết quả tính toán.'
    },
    knowledge: [
      {
        id: 'tab_10_17_1',
        title: '1. Quy Tắc Đặt Tên Biến & Các Kiểu Dữ Liệu Cơ Bản',
        subtitle: 'Cú pháp lệnh gán: <Tên_Biến> = <Giá_Trị>',
        iconName: 'Code2',
        keyPoints: [
          'Quy tắc đặt tên biến trong Python:',
          '- Chỉ gồm chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới (`_`).',
          '- KHÔNG ĐƯỢC bắt đầu bằng chữ số (VD: `1diem` là sai; `diem1` là đúng).',
          '- Phân biệt chữ hoa và chữ thường (`diem` khác với `Diem`).',
          '- KHÔNG ĐƯỢC trùng với các từ khóa dành riêng của Python (như `if`, `for`, `while`, `def`, `class`).',
          '4 kiểu dữ liệu cơ bản:',
          '- `int`: Số nguyên (VD: `tuoi = 16`).',
          '- `float`: Số thực dấu phẩy động (VD: `diem = 8.75`).',
          '- `str`: Xâu ký tự trong nháy kép/đơn (VD: `ten = "Lê Bảo"`).',
          '- `bool`: Kiểu logic chỉ nhận `True` hoặc `False`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Khai báo các biến và kiểu dữ liệu\nho_ten = "Trần Minh Quân"\ntuoi = 16\ndiem_toan = 9.25\nda_nop_bai = True\n\nprint("Họ tên:", ho_ten, "| Kiểu:", type(ho_ten))\nprint("Tuổi:", tuoi, "| Kiểu:", type(tuoi))\nprint("Điểm toán:", diem_toan, "| Kiểu:", type(diem_toan))\nprint("Đã nộp bài:", da_nop_bai, "| Kiểu:", type(da_nop_bai))'
        },
        emCanNho: [
          'Cú pháp lệnh gán: `<tên_biến> = <giá_trị>`.',
          'Tên biến không bắt đầu bằng số, không chứa dấu cách và không trùng từ khóa.',
          '4 kiểu dữ liệu cốt lõi: `int` (số nguyên), `float` (số thực), `str` (xâu), `bool` (logic).'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Giá trị và Kiểu dữ liệu Python',
      instruction: 'Nối giá trị với kiểu dữ liệu chuẩn xác của Python:',
      matchingPairs: [
        { id: 'v1', left: '2026', right: 'Kiểu số nguyên (int)' },
        { id: 'v2', left: '3.14159', right: 'Kiểu số thực (float)' },
        { id: 'v3', left: '"Học lập trình Python"', right: 'Kiểu xâu ký tự (str)' },
        { id: 'v4', left: 'True', right: 'Kiểu logic đúng sai (bool)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tên biến nào sau đây là HỢP LỆ trong ngôn ngữ lập trình Python?',
        options: ['diem_tin_hoc', '2ban_hoc', 'tong-tien', 'class'],
        correctIndex: 0,
        explanation: '`diem_tin_hoc` đúng quy tắc. `2ban_hoc` bắt đầu bằng số (sai), `tong-tien` chứa dấu trừ (sai), `class` trùng từ khóa (sai).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Trong câu lệnh Python: `x = 15`, dấu bằng (`=`) đóng vai trò là toán tử gì?',
        options: ['Toán tử gán (lưu giá trị 15 vào vùng nhớ của biến x)', 'Toán tử so sánh bằng', 'Phép nhân', 'Phép chia'],
        correctIndex: 0,
        explanation: 'Trong lập trình, dấu một bằng (=) là phép gán, còn hai dấu bằng (==) mới là phép so sánh bằng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hàm nào trong Python dùng để kiểm tra kiểu dữ liệu của một biến hoặc giá trị?',
        options: ['type()', 'check()', 'datatype()', 'show()'],
        correctIndex: 0,
        explanation: 'Hàm type(x) trả về kiểu dữ liệu của đối tượng x (ví dụ: `<class \'int\'>`).',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Sau khi thực hiện đoạn mã sau:\na = 5\nb = 3\na = a + b\nGiá trị cuối cùng của biến a là bao nhiêu?',
        options: ['8', '5', '3', '15'],
        correctIndex: 0,
        explanation: 'Vế phải tính 5 + 3 = 8 rồi gán đè lại vào biến a, do đó a nhận giá trị 8.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Biến `trang_thai = False` thuộc kiểu dữ liệu nào sau đây?',
        options: ['bool (Boolean)', 'int', 'float', 'str'],
        correctIndex: 0,
        explanation: 'True và False là hai giá trị đặc trưng duy nhất của kiểu dữ liệu logic bool.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình: Tính Chu Vi và Diện Tích Hình Chữ Nhật',
        context: 'Lập trình tính toán hình học cơ bản ứng dụng biến số.',
        mission: 'Khai báo chiều dài, chiều rộng và tính toán chu vi, diện tích.',
        steps: [
          'Bước 1: Khai báo `chieu_dai = 15.5` và `chieu_rong = 8.0`.',
          'Bước 2: Tính chu vi: `chu_vi = (chieu_dai + chieu_rong) * 2`.',
          'Bước 3: Tính diện tích: `dien_tich = chieu_dai * chieu_rong`.',
          'Bước 4: In kết quả ra màn hình có kèm chú thích rõ ràng.'
        ],
        outputRequirement: 'Chương trình tính toán chính xác và in kết quả đẹp mắt.',
        practicalTip: 'Trong Python, phép nhân dùng dấu sao (`*`), phép chia dùng dấu gạch chéo (`/`).'
      },
      mindmap: {
        id: 'mm_10_17',
        label: 'BIẾN VÀ LỆNH GÁN',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_17_1',
            label: 'Quy tắc đặt tên',
            children: [
              { id: 'mm_10_17_1_1', label: 'Không bắt đầu bằng số' },
              { id: 'mm_10_17_1_2', label: 'Chỉ chứa chữ cái, số, gạch dưới' },
              { id: 'mm_10_17_1_3', label: 'Không trùng từ khóa (if, for...)' }
            ]
          },
          {
            id: 'mm_10_17_2',
            label: 'Kiểu dữ liệu cơ bản',
            children: [
              { id: 'mm_10_17_2_1', label: 'int (Số nguyên)' },
              { id: 'mm_10_17_2_2', label: 'float (Số thực)' },
              { id: 'mm_10_17_2_3', label: 'str (Xâu ký tự)' },
              { id: 'mm_10_17_2_4', label: 'bool (True / False)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Quản Trị Biến Số 10',
      badgeIcon: 'Box',
      roleTitle: 'Chuyên Viên Xử Lý Biến & Dữ Liệu Python',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững cách đặt tên biến chuẩn xác và phân biệt các kiểu dữ liệu cốt lõi trong Python.',
      skillsUnlocked: ['Quy tắc đặt tên biến chuẩn', 'Lệnh gán giá trị', 'Nhận diện int, float, str, bool']
    }
  },

  // Bài 18: Các lệnh vào ra đơn giản
  {
    id: 18,
    code: 'TIN10_B18',
    title: 'Các lệnh vào ra đơn giản',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Nhập xuất input/print',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Tương tác hai chiều: Nhập dữ liệu từ bàn phím và định dạng xuất kết quả',
      description: 'Học cách nhận thông tin từ người dùng bằng hàm `input()`, tầm quan trọng của việc ép kiểu dữ liệu bằng `int()` và `float()`, cùng kỹ thuật in đẹp mắt với f-string.',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Hàm nhập input()', 'Ép kiểu int() và float()', 'Định dạng in f-string chuyên nghiệp']
    },
    objectives: [
      {
        id: 'obj_10_18_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của hàm input()',
        description: 'Ghi nhớ nguyên tắc: Hàm `input()` luôn trả về giá trị ở dạng Xâu ký tự (str), kể cả khi người dùng gõ số.',
        iconName: 'Keyboard'
      },
      {
        id: 'obj_10_18_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Ép kiểu dữ liệu và định dạng xuất',
        description: 'Thực hiện ép kiểu `int(input())` để tính toán số học và sử dụng `f"{bien}"` để in chuỗi kết quả rõ ràng.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_18_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Trải nghiệm người dùng thân thiện',
        description: 'Luôn đưa lời nhắc hướng dẫn rõ ràng trong câu lệnh input (ví dụ: `input("Nhập tuổi của bạn: ")`) để người dùng dễ thao tác.',
        iconName: 'UserCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Phép cộng 10 + 20 lại ra kết quả... 1020!',
      scenario: 'Một bạn học sinh viết chương trình tính tổng 2 số:\n`a = input("Nhập a: ")`\n`b = input("Nhập b: ")`\n`print("Tổng là:", a + b)`\nKhi nhập a = 10, b = 20, màn hình in ra: "Tổng là: 1020"!',
      pollQuestion: 'Tại sao máy tính lại ghép hai số thành "1020" thay vì cộng thành 30?',
      pollOptions: [
        { id: 'p10_18_1', text: 'Vì hàm input() luôn trả về chuỗi văn bản (str), dấu cộng (+) với chuỗi sẽ nối hai chữ lại với nhau', votesPercent: 95, isPopular: true, insight: 'Chính xác! Cần phải ép kiểu thành số nguyên bằng int(input()) thì máy tính mới thực hiện phép cộng số học.' },
        { id: 'p10_18_2', text: 'Vì máy tính bị hỏng vi xử lý', votesPercent: 2, insight: 'Máy tính hoạt động hoàn toàn chính xác theo quy tắc xử lý chuỗi ký tự.' },
        { id: 'p10_18_3', text: 'Vì số 10 và 20 là số xấu', votesPercent: 3, insight: 'Máy tính không có khái niệm số đẹp hay số xấu.' }
      ],
      reflection: 'Ép kiểu dữ liệu (Type Casting) là bài học vỡ lòng quan trọng nhất khi xử lý dữ liệu nhập từ bàn phím.'
    },
    knowledge: [
      {
        id: 'tab_10_18_1',
        title: '1. Cú Pháp Hàm input() & Kỹ Thuật Ép Kiểu',
        subtitle: 'Chuyển đổi chuỗi thành số nguyên và số thực',
        iconName: 'Keyboard',
        keyPoints: [
          'Hàm `input(prompt)`: Dừng chương trình chờ người dùng gõ từ bàn phím và bấm Enter. Giá trị nhận được LUÔN LUÔN LÀ KIỂU XÂU KÝ TỰ (`str`).',
          'Ép kiểu số nguyên: `a = int(input("Nhập số nguyên: "))`.',
          'Ép kiểu số thực: `x = float(input("Nhập số thực: "))`.',
          'In định dạng f-string hiện đại: `print(f"Học sinh {ten} đạt điểm {diem}")` (đặt chữ `f` trước dấu ngoặc kép và đặt tên biến trong cặp ngoặc nhọn `{}`).'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Nhập dữ liệu và ép kiểu an toàn\nten = "Thanh Trúc"\nnam_sinh = 2008\nnam_hien_tai = 2026\n\ntuoi = nam_hien_tai - nam_sinh\nprint(f"Xin chào bạn {ten}!")\nprint(f"Năm nay bạn {tuoi} tuổi, đang học Lớp 10.")'
        },
        emCanNho: [
          '`input()` luôn trả về kiểu xâu `str`.',
          'Muốn tính toán số học bắt buộc phải ép kiểu: `int(input())` hoặc `float(input())`.',
          'Dùng `f"..."` để chèn biến vào chuỗi in nhanh chóng và chuyên nghiệp.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Câu lệnh Nhập và Mục đích',
      instruction: 'Nối câu lệnh Python với mục đích sử dụng chuẩn xác:',
      matchingPairs: [
        { id: 'in1', left: 'ho_ten = input("Nhập tên: ")', right: 'Nhập chuỗi họ tên văn bản (giữ nguyên kiểu str)' },
        { id: 'in2', left: 'tuoi = int(input("Nhập tuổi: "))', right: 'Nhập số tuổi và ép thành kiểu số nguyên int' },
        { id: 'in3', left: 'diem = float(input("Nhập điểm: "))', right: 'Nhập điểm số và ép thành kiểu số thực float' },
        { id: 'in4', left: 'print(f"Xin chào {ten}")', right: 'Định dạng in chuỗi kết hợp biến bằng f-string' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Giá trị trả về của hàm `input()` trong Python luôn thuộc kiểu dữ liệu nào?',
        options: ['str (Xâu ký tự)', 'int (Số nguyên)', 'float (Số thực)', 'bool (Logic)'],
        correctIndex: 0,
        explanation: 'Hàm input() luôn đọc dữ liệu vào dưới dạng chuỗi văn bản ký tự (str).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để nhập một số thực từ bàn phím và lưu vào biến `x` để tính toán, câu lệnh nào sau đây là CHUẨN XÁC?',
        options: ['x = float(input())', 'x = input(float)', 'x = str(input())', 'x = print()'],
        correctIndex: 0,
        explanation: 'Bao bọc float() bên ngoài input() sẽ ép xâu ký tự thành số thực.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Cú pháp in f-string nào sau đây viết ĐÚNG để hiển thị: "Bạn An có 5 cái kẹo"?',
        options: [
          'print(f"Bạn {ten} có {so_keo} cái kẹo")',
          'print("Bạn {ten} có {so_keo} cái kẹo")',
          'print(f Bạn ten có so_keo cái kẹo)',
          'echo Bạn An có 5 cái kẹo'
        ],
        correctIndex: 0,
        explanation: 'f-string bắt đầu bằng ký tự f trước nháy kép và bao biến trong cặp ngoặc nhọn {}.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Nếu người dùng nhập vào chữ "abc" khi chạy lệnh `x = int(input())`, điều gì sẽ xảy ra?',
        options: [
          'Chương trình báo lỗi ValueError vì không thể đổi chữ cái thành số nguyên',
          'Biến x tự động bằng 0',
          'Máy tính tự tắt',
          'Chương trình vẫn chạy bình thường'
        ],
        correctIndex: 0,
        explanation: 'ValueError xảy ra khi cố gắng ép một chuỗi không phải chữ số thành kiểu int.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Mục đích của việc đưa chuỗi thông báo vào trong hàm input: `input("Vui lòng nhập họ tên: ")` là gì?',
        options: [
          'Hiển thị lời nhắc hướng dẫn để người dùng biết cần phải gõ thông tin gì',
          'Tự động gõ tên hộ người dùng',
          'Tắt âm bàn phím',
          'Làm đẹp màu chữ'
        ],
        correctIndex: 0,
        explanation: 'Lời nhắc Prompt giúp giao diện dòng lệnh thân thiện và rõ ràng với người dùng.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình: Máy Tính Tiền Trà Sữa Tự Động',
        context: 'Lập trình ứng dụng thanh toán hóa đơn cho quán trà sữa trường học.',
        mission: 'Nhập số ly trà sữa và đơn giá, tính tổng tiền và in hóa đơn đẹp.',
        steps: [
          'Bước 1: Nhập số ly: `so_ly = int(input("Nhập số ly trà sữa: "))`.',
          'Bước 2: Đơn giá cố định: `don_gia = 25000`.',
          'Bước 3: Tính tổng tiền: `tong_tien = so_ly * don_gia`.',
          'Bước 4: In hóa đơn f-string: `print(f"HÓA ĐƠN: {so_ly} ly x {don_gia:,}đ = {tong_tien:,} VNĐ")`.'
        ],
        outputRequirement: 'Chương trình nhận số liệu đầu vào và in hóa đơn tính tiền chuẩn xác.',
        practicalTip: 'Trong f-string, cú pháp `{tong_tien:,}` sẽ tự động định dạng dấu phẩy phân cách hàng nghìn (ví dụ 100,000) rất đẹp mắt.'
      },
      mindmap: {
        id: 'mm_10_18',
        label: 'LỆNH VÀO RA INPUT/PRINT',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_18_1',
            label: 'Nhập dữ liệu',
            children: [
              { id: 'mm_10_18_1_1', label: 'input() trả về kiểu str' },
              { id: 'mm_10_18_1_2', label: 'Ép kiểu int(input())' },
              { id: 'mm_10_18_1_3', label: 'Ép kiểu float(input())' }
            ]
          },
          {
            id: 'mm_10_18_2',
            label: 'Xuất dữ liệu',
            children: [
              { id: 'mm_10_18_2_1', label: 'print() có nhiều đối số' },
              { id: 'mm_10_18_2_2', label: 'f-string chuyên nghiệp' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Nhập Xuất Python 10',
      badgeIcon: 'Keyboard',
      roleTitle: 'Chuyên Viên Xử Lý Giao Tiếp Người Dùng',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ tương tác hai chiều với hàm input() và kỹ thuật ép kiểu an toàn.',
      skillsUnlocked: ['Thành thạo input()', 'Ép kiểu dữ liệu int() & float()', 'Định dạng in f-string hiện đại']
    }
  }
];
