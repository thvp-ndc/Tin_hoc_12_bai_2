import { Lesson } from '../../types/lesson';

export const THEME5_CONTROL_FLOW_10: Lesson[] = [
  // Bài 19: Câu lệnh điều kiện If
  {
    id: 19,
    code: 'TIN10_B19',
    title: 'Câu lệnh điều kiện If',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Rẽ nhánh if-else',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bộ não ra quyết định: Khám phá cấu trúc rẽ nhánh if, if-else và if-elif-else',
      description: 'Học cách điều khiển máy tính tự động đưa ra quyết định thông minh dựa trên điều kiện đúng/sai, làm chủ quy tắc thụt đầu dòng (Indentation) kinh điển của Python và các toán tử so sánh (==, !=, >, <, >=, <=).',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Cấu trúc rẽ nhánh if - elif - else', 'Quy tắc thụt lề Indentation', 'Toán tử so sánh & logic and/or']
    },
    objectives: [
      {
        id: 'obj_10_19_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp cấu trúc rẽ nhánh',
        description: 'Trình bày được dạng thiếu (`if`), dạng đủ (`if - else`) và dạng đa nhánh (`if - elif - else`) trong Python.',
        iconName: 'GitBranch'
      },
      {
        id: 'obj_10_19_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết biểu thức điều kiện chính xác',
        description: 'Áp dụng thụt lề 4 dấu cách cho khối lệnh con và sử dụng đúng toán tử so sánh (==, !=, and, or) không bị lỗi cú pháp.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_19_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy xét duyệt trường hợp',
        description: 'Hình thành tư duy bao quát mọi khả năng của bài toán (ví dụ: điểm hợp lệ từ 0 đến 10, điểm âm thì báo lỗi).',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Đèn tín hiệu giao thông thông minh',
      scenario: 'Một chiếc xe tự hành gắn camera quét thấy đèn tín hiệu giao thông. Nếu đèn màu Đỏ, xe phải dừng lại; nếu đèn màu Xanh, xe được tiếp tục đi; nếu đèn màu Vàng, xe giảm tốc độ.',
      pollQuestion: 'Cấu trúc lập trình nào giúp máy tính xử lý các tình huống "NẾU... THÌ... NẾU KHÔNG THÌ..." như trên?',
      pollOptions: [
        { id: 'p10_19_1', text: 'Cấu trúc rẽ nhánh điều kiện (if - elif - else)', votesPercent: 95, isPopular: true, insight: 'Chính xác! Lệnh if kiểm tra biểu thức điều kiện, nếu đúng sẽ thực thi khối lệnh tương ứng.' },
        { id: 'p10_19_2', text: 'Chỉ dùng lệnh print', votesPercent: 2, insight: 'print chỉ in chữ, không kiểm tra được điều kiện logic.' },
        { id: 'p10_19_3', text: 'Chỉ dùng phép cộng', votesPercent: 3, insight: 'Phép cộng số học không đưa ra được quyết định rẽ nhánh logic.' }
      ],
      reflection: 'Cấu trúc điều kiện if mang lại cho máy tính khả năng "suy nghĩ" và lựa chọn hành vi như con người.'
    },
    knowledge: [
      {
        id: 'tab_10_19_1',
        title: '1. Cú Pháp Rẽ Nhánh & Quy Tắc Thụt Lề (Indentation)',
        subtitle: 'Dấu hai chấm (:) và thụt đầu dòng bắt buộc trong Python',
        iconName: 'GitBranch',
        keyPoints: [
          'Dạng thiếu: `if <điều_kiện>: \n    <khối_lệnh>`',
          'Dạng đủ: `if <điều_kiện>: \n    <lệnh_khi_đúng>\nelse:\n    <lệnh_khi_sai>`',
          'Dạng đa nhánh: `if <đk_1>: ... elif <đk_2>: ... else: ...`',
          'Quy tắc thụt lề (Indentation): Các câu lệnh thuộc thân của if/else BẮT BUỘC phải thụt lề vào trong (thường là 4 dấu cách hoặc 1 phím Tab). Python dùng thụt lề thay cho cặp ngoặc nhọn `{}`.',
          'Toán tử so sánh: `==` (bằng), `!=` (khác), `>`, `<`, `>=`, `<=`. Toán tử logic: `and`, `or`, `not`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Xếp loại học lực theo điểm trung bình\ndiem = 8.5\n\nif diem >= 8.0:\n    print(f"Điểm {diem}: Học sinh Giỏi! Xuất sắc!")\nelif diem >= 6.5:\n    print(f"Điểm {diem}: Học sinh Khá.")\nelif diem >= 5.0:\n    print(f"Điểm {diem}: Học sinh Trung bình.")\nelse:\n    print(f"Điểm {diem}: Cần cố gắng nhiều hơn.")'
        },
        emCanNho: [
          'Sau mệnh đề `if`, `elif`, `else` bắt buộc phải có dấu hai chấm (`:`).',
          'Khối lệnh con bên trong bắt buộc phải được thụt lề (Indentation).',
          'So sánh bằng dùng `==` (hai dấu bằng), khác nhau dùng `!=`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Toán tử Logic và Ý nghĩa trong Python',
      instruction: 'Nối toán tử điều kiện với ý nghĩa chuẩn:',
      matchingPairs: [
        { id: 'op1', left: 'x == 10', right: 'Kiểm tra biến x có BẰNG 10 hay không' },
        { id: 'op2', left: 'x != 0', right: 'Kiểm tra biến x có KHÁC 0 hay không' },
        { id: 'op3', left: 'a > 0 and b > 0', right: 'Đúng khi CẢ HAI số a và b đều dương' },
        { id: 'op4', left: 'diem >= 5 or da_thi_lai', right: 'Đúng khi THỎA MÃN ÍT NHẤT MỘT trong hai điều kiện' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để kiểm tra xem hai giá trị có BẰNG NHAU hay không trong biểu thức điều kiện của Python, ta dùng toán tử nào?',
        options: ['== (hai dấu bằng)', '= (một dấu bằng)', '=== (ba dấu bằng)', 'equal'],
        correctIndex: 0,
        explanation: 'Trong Python, `==` là phép so sánh bằng, còn `=` là phép gán giá trị.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Ký tự nào BẮT BUỘC phải xuất hiện ở cuối dòng chứa câu lệnh `if <điều_kiện>`?',
        options: ['Dấu hai chấm ( : )', 'Dấu chấm phẩy ( ; )', 'Dấu chấm ( . )', 'Dấu ngoặc đơn ( )'],
        correctIndex: 0,
        explanation: 'Dấu hai chấm báo hiệu kết thúc biểu thức điều kiện và bắt đầu khối lệnh thụt lề.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Điều gì sẽ xảy ra nếu bạn không thụt đầu dòng các câu lệnh nằm bên trong thân lệnh `if`?',
        options: [
          'Python báo lỗi cú pháp IndentationError (lỗi thụt lề) và dừng chương trình',
          'Chương trình vẫn chạy bình thường',
          'Máy tính tự động thụt lề giúp bạn',
          'Biến đổi màu'
        ],
        correctIndex: 0,
        explanation: 'Thụt lề là cú pháp bắt buộc của Python để phân định phạm vi khối mã lệnh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Cho đoạn mã sau:\nx = 7\nif x % 2 == 0:\n    print("Chẵn")\nelse:\n    print("Lẻ")\nKết quả in ra màn hình là gì?',
        options: ['Lẻ', 'Chẵn', '7', 'Báo lỗi'],
        correctIndex: 0,
        explanation: '7 chia 2 dư 1 (7 % 2 = 1 khác 0), điều kiện sai nên nhảy vào nhánh else in ra "Lẻ".',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Biểu thức nào sau đây kiểm tra một năm `n` có phải là năm nhuận (chia hết cho 400 HOẶC (chia hết cho 4 và không chia hết cho 100))?',
        options: [
          'n % 400 == 0 or (n % 4 == 0 and n % 100 != 0)',
          'n % 4 == 0',
          'n % 100 == 0',
          'n == 2024'
        ],
        correctIndex: 0,
        explanation: 'Đây là quy tắc chuẩn xác để kiểm tra năm nhuận dương lịch.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình: Kiểm Tra Tính Hợp Lệ Của Tam Giác',
        context: 'Lập trình giải bài toán hình học kiểm tra điều kiện 3 cạnh tam giác.',
        mission: 'Nhập 3 số a, b, c và kiểm tra xem có tạo thành 3 cạnh của một tam giác hay không.',
        steps: [
          'Bước 1: Nhập 3 số thực a, b, c từ bàn phím.',
          'Bước 2: Điều kiện tam giác: `a + b > c and a + c > b and b + c > a`.',
          'Bước 3: Nếu thỏa mãn in ra: "Ba số a, b, c tạo thành một tam giác".',
          'Bước 4: Ngược lại in ra: "Không thể tạo thành tam giác".'
        ],
        outputRequirement: 'Chương trình xét duyệt chính xác định lý bất đẳng thức tam giác.',
        practicalTip: 'Nếu 3 cạnh thỏa mãn tam giác và có thêm `a == b == c`, bạn có thể in bổ sung "Đây là tam giác đều!".'
      },
      mindmap: {
        id: 'mm_10_19',
        label: 'CÂU LỆNH ĐIỀU KIỆN IF',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_19_1',
            label: 'Các dạng cấu trúc',
            children: [
              { id: 'mm_10_19_1_1', label: 'Dạng thiếu: if' },
              { id: 'mm_10_19_1_2', label: 'Dạng đủ: if - else' },
              { id: 'mm_10_19_1_3', label: 'Đa nhánh: if - elif - else' }
            ]
          },
          {
            id: 'mm_10_19_2',
            label: 'Quy tắc bắt buộc',
            children: [
              { id: 'mm_10_19_2_1', label: 'Dấu hai chấm (:) cuối dòng' },
              { id: 'mm_10_19_2_2', label: 'Thụt lề Indentation 4 spaces' },
              { id: 'mm_10_19_2_3', label: 'Toán tử so sánh == và !=' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Rẽ Nhánh Logic 10',
      badgeIcon: 'GitBranch',
      roleTitle: 'Chuyên Viên Cấu Trúc Điều Khiển Python',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ câu lệnh điều kiện if-elif-else và quy tắc thụt lề chuẩn mực trong Python.',
      skillsUnlocked: ['Viết cấu trúc if-elif-else', 'Tuân thủ thụt lề Indentation', 'Kết hợp toán tử and/or logic']
    }
  },

  // Bài 20: Câu lệnh lặp For
  {
    id: 20,
    code: 'TIN10_B20',
    title: 'Câu lệnh lặp For',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Vòng lặp For',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Sức mạnh tự động hóa: Lặp lại công việc hàng triệu lần trong tích tắc',
      description: 'Tìm hiểu cấu trúc lặp với số lần biết trước `for in range()`, các tham số của hàm `range(start, stop, step)` và ứng dụng vòng lặp để tính tổng dãy số, in bảng cửu chương tự động.',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Cú pháp for in range()', 'Hàm sinh dãy số range(start, stop, step)', 'Tính tổng dồn dãy số']
    },
    objectives: [
      {
        id: 'obj_10_20_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp vòng lặp For',
        description: 'Nắm vững cấu trúc `for <biến> in range(...):` và quy tắc sinh dãy số của hàm range.',
        iconName: 'Repeat'
      },
      {
        id: 'obj_10_20_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Vận dụng hàm range() linh hoạt',
        description: 'Sử dụng thành thạo range(n), range(start, stop) và range(start, stop, step) để duyệt số chẵn, số lẻ hoặc đếm lùi.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_20_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tối ưu hóa sức lao động',
        description: 'Hiểu được ưu thế vượt trội của máy tính trong việc giải phóng con người khỏi những công việc tính toán lặp đi lặp lại nhàm chán.',
        iconName: 'Cpu'
      }
    ],
    warmup: {
      title: 'Tình huống: Tính tổng các số từ 1 đến 1000 trong 1 giây',
      scenario: 'Thầy giáo yêu cầu tính tổng $S = 1 + 2 + 3 + ... + 1000$. Nếu ngồi bấm máy tính bỏ túi thủ công từng phép cộng sẽ mất 30 phút và rất dễ bấm nhầm.',
      pollQuestion: 'Đoạn mã Python ngắn gọn nào sau đây giúp máy tính tính tổng 1000 số trên chỉ trong 1 phần triệu giây?',
      pollOptions: [
        { id: 'p10_20_1', text: 'Dùng vòng lặp: for i in range(1, 1001): tong += i', votesPercent: 94, isPopular: true, insight: 'Chính xác! Vòng lặp for lặp lại phép cộng 1000 lần trong chớp mắt với độ chính xác tuyệt đối.' },
        { id: 'p10_20_2', text: 'Gõ 1000 dòng print', votesPercent: 3, insight: 'Gõ 1000 dòng lệnh sẽ mất hàng giờ gõ phím.' },
        { id: 'p10_20_3', text: 'Tắt máy tính', votesPercent: 3, insight: 'Vòng lặp sinh ra chính là để tự động hóa các thao tác lặp lại này.' }
      ],
      reflection: 'Vòng lặp là vũ khí siêu việt nhất của máy tính giúp nhân loại giải quyết các bài toán khổng lồ trong khoa học và đời sống.'
    },
    knowledge: [
      {
        id: 'tab_10_20_1',
        title: '1. Cú Pháp Vòng Lặp For & Hàm range()',
        subtitle: 'Duyệt tuần tự qua một dãy giá trị xác định',
        iconName: 'Repeat',
        keyPoints: [
          'Cú pháp: `for <biến_chạy> in range(start, stop, step):\n    <khối_lệnh>`',
          'Đặc điểm hàm `range()`: Luôn dừng lại TRƯỚC giá trị `stop` (giá trị thực tế duyệt là từ `start` đến `stop - 1`).',
          '3 cách gọi hàm range():',
          '- `range(5)`: Sinh dãy: 0, 1, 2, 3, 4 (mặc định bắt đầu từ 0).',
          '- `range(1, 6)`: Sinh dãy: 1, 2, 3, 4, 5.',
          '- `range(1, 10, 2)`: Bước nhảy 2, sinh dãy số lẻ: 1, 3, 5, 7, 9.',
          '- Đếm lùi: `range(10, 0, -1)` sinh dãy giảm dần: 10, 9, 8, ..., 1.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# In bảng cửu chương 7 tự động\nso = 7\nprint(f"--- BẢNG CỬU CHƯƠNG {so} ---")\nfor i in range(1, 11):\n    tich = so * i\n    print(f"{so} x {i:2d} = {tich:2d}")'
        },
        emCanNho: [
          'Vòng lặp `for` dùng khi biết trước số lần lặp.',
          '`range(start, stop)` sinh các số từ `start` đến `stop - 1`.',
          'Các câu lệnh trong thân vòng lặp bắt buộc phải được thụt lề.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Lệnh range() và Dãy số sinh ra',
      instruction: 'Nối hàm range với dãy giá trị sinh ra tương ứng:',
      matchingPairs: [
        { id: 'rg1', left: 'range(4)', right: 'Dãy gồm: 0, 1, 2, 3' },
        { id: 'rg2', left: 'range(1, 5)', right: 'Dãy gồm: 1, 2, 3, 4' },
        { id: 'rg3', left: 'range(2, 9, 2)', right: 'Dãy số chẵn: 2, 4, 6, 8' },
        { id: 'rg4', left: 'range(5, 0, -1)', right: 'Dãy đếm lùi: 5, 4, 3, 2, 1' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Lệnh `range(1, 6)` trong Python sẽ sinh ra dãy các số nguyên nào?',
        options: ['1, 2, 3, 4, 5', '1, 2, 3, 4, 5, 6', '0, 1, 2, 3, 4, 5', '2, 3, 4, 5'],
        correctIndex: 0,
        explanation: 'range(start, stop) dừng lại ở stop - 1, nên range(1, 6) sinh từ 1 đến 5.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Đoạn mã sau sẽ in dòng chữ "Hello" bao nhiêu lần ra màn hình?\nfor i in range(5):\n    print("Hello")',
        options: ['5 lần', '4 lần', '6 lần', 'Vô hạn lần'],
        correctIndex: 0,
        explanation: 'range(5) lặp đúng 5 lần với các giá trị i = 0, 1, 2, 3, 4.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để sinh dãy số lẻ từ 1 đến 15, hàm range nào sau đây là ĐÚNG?',
        options: ['range(1, 16, 2)', 'range(1, 15)', 'range(0, 15, 2)', 'range(1, 15, 1)'],
        correctIndex: 0,
        explanation: 'range(1, 16, 2) bắt đầu từ 1, kết thúc trước 16 và bước nhảy là 2.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Giá trị của biến `tong` sau khi chạy đoạn mã sau là bao nhiêu?\ntong = 0\nfor i in range(1, 4):\n    tong = tong + i',
        options: ['6', '3', '10', '0'],
        correctIndex: 0,
        explanation: 'i lần lượt nhận giá trị 1, 2, 3. tong = 0 + 1 + 2 + 3 = 6.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Muốn biến chạy `i` đếm ngược từ 10 về 1, tham số thứ 3 (step) trong hàm range() phải là số mấy?',
        options: ['-1', '0', '1', '2'],
        correctIndex: 0,
        explanation: 'Bước nhảy âm (step = -1) cho phép duyệt lùi từ giá trị lớn về giá trị nhỏ.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình: Máy Đếm Ngược Phóng Tên Lửa Vũ Trụ',
        context: 'Lập trình hiệu ứng đếm ngược thời gian từ 10 về 0 trước khi phóng tàu vũ trụ.',
        mission: 'Sử dụng vòng lặp for đếm lùi và in thông điệp phóng tàu.',
        steps: [
          'Bước 1: Sử dụng `for i in range(10, 0, -1): print(f"Đếm ngược: {i}...")`.',
          'Bước 2: Sau khi kết thúc vòng lặp, in dòng chữ rực rỡ: `print("🚀 PHÓNG TÀU VŨ TRỤ THÀNH CÔNG!")`.'
        ],
        outputRequirement: 'Chương trình chạy đếm lùi tuần tự từ 10 về 1 và in câu chúc mừng.',
        practicalTip: 'Có thể import thư viện `time` và dùng `time.sleep(1)` để mỗi nhịp đếm dừng đúng 1 giây như đồng hồ thật.'
      },
      mindmap: {
        id: 'mm_10_20',
        label: 'VÒNG LẶP FOR',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_20_1',
            label: 'Cú pháp',
            children: [
              { id: 'mm_10_20_1_1', label: 'for <biến> in range()' },
              { id: 'mm_10_20_1_2', label: 'Dấu hai chấm (:)' },
              { id: 'mm_10_20_1_3', label: 'Thụt lề khối lệnh' }
            ]
          },
          {
            id: 'mm_10_20_2',
            label: 'Các dạng range',
            children: [
              { id: 'mm_10_20_2_1', label: 'range(n): 0 đến n-1' },
              { id: 'mm_10_20_2_2', label: 'range(start, stop)' },
              { id: 'mm_10_20_2_3', label: 'range(start, stop, step)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Vòng Lặp For 10',
      badgeIcon: 'Repeat',
      roleTitle: 'Chuyên Viên Tự Động Hóa Vòng Lặp',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ vòng lặp for và hàm sinh dãy số range() để tự động hóa tính toán.',
      skillsUnlocked: ['Thành thạo for in range()', 'Sử dụng step đếm lùi & nhảy số', 'Thuật toán tính tổng dồn']
    }
  },

  // Bài 21: Câu lệnh lặp While
  {
    id: 21,
    code: 'TIN10_B21',
    title: 'Câu lệnh lặp While',
    themeId: 5,
    themeName: 'Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính',
    topicBadge: 'Vòng lặp While',
    grade: 10,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Lặp lại có điều kiện: Khi số lần lặp chưa biết trước',
      description: 'Khám phá vòng lặp `while <điều kiện>:`, cơ chế lặp chừng nào điều kiện còn đúng, cách phòng tránh lỗi lặp vô hạn (Infinite Loop) và câu lệnh ngắt vòng lặp khẩn cấp `break`.',
      accentColor: 'from-amber-500 to-emerald-600',
      keyHighlights: ['Cú pháp while điều kiện', 'Nguyên nhân & Cách tránh lặp vô hạn', 'Lệnh ngắt break']
    },
    objectives: [
      {
        id: 'obj_10_21_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của vòng lặp While',
        description: 'Phân biệt được khi nào dùng vòng lặp `for` (biết trước số lần) và khi nào dùng `while` (lặp theo điều kiện dừng chưa biết trước).',
        iconName: 'RefreshCw'
      },
      {
        id: 'obj_10_21_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kiểm soát bước cập nhật điều kiện',
        description: 'Luôn viết câu lệnh thay đổi biến điều kiện (ví dụ `i += 1`) trong thân vòng lặp để tránh làm treo máy do lặp vô hạn.',
        iconName: 'AlertTriangle'
      },
      {
        id: 'obj_10_21_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Kiên trì và cẩn thận',
        description: 'Hình thành phản xạ kiểm tra kỹ điều kiện dừng trước khi cho chương trình chạy thử nghiệm.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Bắt buộc người dùng nhập đúng mật khẩu mới cho vào',
      scenario: 'Chương trình yêu cầu nhập mã PIN. Bạn không thể biết trước người dùng sẽ bấm sai mấy lần (có thể 1 lần đúng ngay, có thể bấm sai 5 lần).',
      pollQuestion: 'Vòng lặp nào là lựa chọn hoàn hảo nhất cho bài toán lặp với số lần chưa biết trước này?',
      pollOptions: [
        { id: 'p10_21_1', text: 'Vòng lặp while: Chừng nào mật khẩu còn sai thì tiếp tục bắt nhập lại', votesPercent: 93, isPopular: true, insight: 'Chính xác! Vòng lặp while kiểm tra điều kiện trước mỗi vòng lặp, lặp lại cho đến khi mật khẩu đúng mới dừng.' },
        { id: 'p10_21_2', text: 'Chỉ dùng một lệnh if duy nhất', votesPercent: 4, insight: 'Lệnh if chỉ kiểm tra 1 lần rồi kết thúc, không thể bắt nhập lại liên tục.' },
        { id: 'p10_21_3', text: 'Tắt máy tính', votesPercent: 3, insight: 'Lập trình viên cần dùng đúng cấu trúc lặp while để giải quyết bài toán.' }
      ],
      reflection: 'Vòng lặp while giúp phần mềm phản ứng linh hoạt với mọi hành vi ngẫu nhiên của người dùng.'
    },
    knowledge: [
      {
        id: 'tab_10_21_1',
        title: '1. Cú Pháp Vòng Lặp While & Lỗi Lặp Vô Hạn',
        subtitle: 'Lặp lại chừng nào điều kiện kiểm tra còn mang giá trị True',
        iconName: 'RefreshCw',
        keyPoints: [
          'Cú pháp chuẩn: `while <điều_kiện>:\n    <khối_lệnh>`',
          'Nguyên lý hoạt động: Trước mỗi vòng, máy tính kiểm tra `<điều_kiện>`. Nếu đúng (`True`), thực hiện khối lệnh. Nếu sai (`False`), vòng lặp lập tức kết thúc.',
          'Nguyên nhân lỗi lặp vô hạn (Infinite Loop): Trong thân vòng lặp quên không cập nhật biến điều kiện, khiến điều kiện mãi mãi là `True`. Máy tính bị treo chạy không có điểm dừng.',
          'Lệnh `break`: Lập tức thoát khỏi vòng lặp ngay tại thời điểm gọi lệnh mà không cần đợi hết điều kiện.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Ví dụ vòng lặp while tính tổng các số nhỏ hơn 10\ntong = 0\ni = 1\n\nwhile i <= 5:\n    tong += i\n    print(f"Bước {i}: Cộng thêm {i} -> Tổng hiện tại = {tong}")\n    i += 1  # BƯỚC QUAN TRỌNG: Tăng i để tránh lặp vô hạn!\n\nprint("KẾT THÚC VÒNG LẶP. Tổng cuối cùng là:", tong)'
        },
        emCanNho: [
          '`while` lặp chừng nào điều kiện còn đúng (`True`).',
          'BẮT BUỘC phải có câu lệnh làm thay đổi biến điều kiện trong thân vòng lặp để tránh lặp vô hạn.',
          'Dùng lệnh `break` để thoát khẩn cấp khỏi vòng lặp khi gặp điều kiện đặc biệt.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Khái niệm Vòng lặp While',
      instruction: 'Nối thuật ngữ vòng lặp while với ý nghĩa tương ứng:',
      matchingPairs: [
        { id: 'wh1', left: 'while <điều_kiện>:', right: 'Kiểm tra điều kiện trước, đúng thì chạy, sai thì dừng' },
        { id: 'wh2', left: 'Lỗi lặp vô hạn (Infinite Loop)', right: 'Xảy ra khi điều kiện luôn luôn True, chương trình chạy mãi mãi' },
        { id: 'wh3', left: 'Lệnh break', right: 'Thoát khỏi vòng lặp ngay lập tức' },
        { id: 'wh4', left: 'Thao tác i = i + 1', right: 'Cập nhật biến đếm để đưa vòng lặp tiến dần về điểm dừng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Vòng lặp `while` trong Python thường được ưu tiên sử dụng trong trường hợp nào?',
        options: [
          'Khi số lần lặp chưa biết trước và phụ thuộc vào một điều kiện cụ thể trong khi chạy',
          'Khi biết chắc chắn số lần lặp cụ thể từ đầu',
          'Khi không muốn lặp lại thao tác nào',
          'Khi chương trình không có biến'
        ],
        correctIndex: 0,
        explanation: 'While dùng cho bài toán lặp chưa biết trước số lần; For dùng khi đã biết trước số lần lặp.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Đoạn mã sau sẽ in số mấy ra màn hình?\nx = 1\nwhile x < 4:\n    x = x + 1\nprint(x)',
        options: ['4', '3', '1', '5'],
        correctIndex: 0,
        explanation: 'Vòng lặp chạy khi x=1, x=2, x=3. Khi x tăng lên 4 thì 4 < 4 là False, vòng lặp dừng và in ra x = 4.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Nguyên nhân phổ biến nhất dẫn đến hiện tượng "Lặp vô hạn" (chương trình chạy mãi không dừng) là gì?',
        options: [
          'Quên không cập nhật giá trị của biến điều kiện bên trong thân vòng lặp',
          'Bàn phím bị hết pin',
          'Đặt tên biến quá dài',
          'Dùng máy tính cấu hình quá mạnh'
        ],
        correctIndex: 0,
        explanation: 'Nếu biến điều kiện không thay đổi, biểu thức so sánh luôn luôn là True dẫn đến lặp mãi mãi.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Để ngắt và thoát ra khỏi một chương trình Python đang bị kẹt trong vòng lặp vô hạn trên bàn phím, bạn bấm tổ hợp phím nào?',
        options: ['Ctrl + C', 'Ctrl + A', 'Ctrl + V', 'Alt + F4'],
        correctIndex: 0,
        explanation: 'Ctrl + C gửi tín hiệu KeyboardInterrupt dừng khẩn cấp chương trình đang chạy trong Terminal/Shell.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Câu lệnh nào dùng để THOÁT NGAY LẬP TỨC khỏi vòng lặp mà không cần đợi kiểm tra lại điều kiện ở đầu vòng?',
        options: ['break', 'continue', 'pass', 'stop'],
        correctIndex: 0,
        explanation: 'Lệnh break ngắt vòng lặp hiện tại và chuyển điều khiển sang câu lệnh sau vòng lặp.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Chương Trình Trò Chơi: Đoán Số Bí Mật May Mắn',
        context: 'Lập trình mini game đoán số ngẫu nhiên từ 1 đến 100 ứng dụng vòng lặp while.',
        mission: 'Cho người chơi đoán số liên tục cho đến khi đoán đúng số bí mật thì dừng.',
        steps: [
          'Bước 1: Đặt số bí mật: `so_bi_mat = 68`.',
          'Bước 2: Dùng `while True:` để lặp vô hạn lần đoán.',
          'Bước 3: Nhập số đoán: nếu đoán nhỏ hơn, in "Số bí mật lớn hơn!"; nếu lớn hơn, in "Số bí mật nhỏ hơn!".',
          'Bước 4: Nếu đoán đúng, in "CHÚC MỪNG BẠN ĐÃ ĐOÁN ĐÚNG!" và gọi lệnh `break` để kết thúc game.'
        ],
        outputRequirement: 'Trò chơi tương tác mượt mà, phản hồi đúng/sai thông minh và dừng chuẩn xác.',
        practicalTip: 'Đếm thêm một biến `so_lan_doan += 1` để khi thắng in ra: "Bạn đã chiến thắng sau X lần đoán!".'
      },
      mindmap: {
        id: 'mm_10_21',
        label: 'VÒNG LẶP WHILE',
        color: '#d97706',
        children: [
          {
            id: 'mm_10_21_1',
            label: 'Cơ chế hoạt động',
            children: [
              { id: 'mm_10_21_1_1', label: 'while <điều_kiện>:' },
              { id: 'mm_10_21_1_2', label: 'Lặp khi điều kiện True' },
              { id: 'mm_10_21_1_3', label: 'Dừng khi điều kiện False' }
            ]
          },
          {
            id: 'mm_10_21_2',
            label: 'Lưu ý an toàn',
            children: [
              { id: 'mm_10_21_2_1', label: 'Cập nhật biến điều kiện' },
              { id: 'mm_10_21_2_2', label: 'Tránh lặp vô hạn' },
              { id: 'mm_10_21_2_3', label: 'Lệnh ngắt break' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Vòng Lặp While 10',
      badgeIcon: 'RefreshCw',
      roleTitle: 'Chuyên Viên Kiểm Soát Lặp Không Giới Hạn',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ vòng lặp while và hoàn tất trọn vẹn bộ ba cấu trúc điều khiển (Tuần tự, Rẽ nhánh If, Lặp For/While).',
      skillsUnlocked: ['Viết vòng lặp while an toàn', 'Kiểm soát bước cập nhật điều kiện', 'Sử dụng lệnh ngắt break']
    }
  }
];
