import { LessonCurriculum10 } from './curriculum10';

export const GRADE_10_CURRICULUM_PART3: Record<number, LessonCurriculum10> = {
  // Bài 16: Ngôn ngữ lập trình bậc cao và Python
  16: {
    objectives: [
      {
        id: 'obj_10_16_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm ngôn ngữ bậc cao & Python',
        description: 'Hiểu được khái niệm ngôn ngữ lập trình bậc cao gần gũi với tiếng Anh tự nhiên; vai trò của chương trình dịch và lý do Python được ưa chuộng toàn cầu.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Làm quen môi trường & lệnh print()',
        description: 'Khởi động môi trường Python (IDLE / VS Code), viết và thực thi được câu lệnh in văn bản và kết quả tính toán đầu tiên với hàm `print()`.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Hào hứng bước vào thế giới lập trình',
        description: 'Tạo tâm lý tự tin, xóa bỏ rào cản sợ lập trình và yêu thích việc dùng máy tính để tự động hóa các bài toán.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_16_1',
        title: '1. Khái niệm ngôn ngữ lập trình bậc cao',
        subtitle: 'Cầu nối giữa tư duy con người và phần cứng máy tính',
        iconName: 'BookOpen',
        keyPoints: [
          'Ngôn ngữ máy (Machine Language): Mã nhị phân gồm các số 0 và 1 mà phần cứng CPU trực tiếp hiểu được. Rất khó nhớ, khó viết với con người.',
          'Ngôn ngữ lập trình bậc cao (High-level Language): Sử dụng các từ khóa tiếng Anh tự nhiên và ký hiệu toán học quen thuộc (ví dụ: Python, C++, Java). Dễ đọc, dễ học, dễ bảo trì.',
          'Chương trình dịch (Compiler / Interpreter): Phần mềm dịch mã nguồn viết bằng ngôn ngữ bậc cao sang ngôn ngữ máy để CPU thực thi. Python sử dụng trình thông dịch (Interpreter) chạy từng dòng lệnh tức thì.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Mã nguồn Python', desc: 'print("Xin chào Việt Nam!") - Gần gũi với tiếng Anh' },
            { label: 'Trình thông dịch Python', desc: 'Biên dịch từng dòng lệnh sang mã máy' },
            { label: 'Phần cứng CPU', desc: 'Thực thi các tín hiệu nhị phân 0 và 1' }
          ]
        },
        emCanNho: [
          'Ngôn ngữ bậc cao dùng từ khóa tiếng Anh gần gũi với con người.',
          'Python là ngôn ngữ bậc cao thông dịch, cú pháp trong sáng, cực kỳ phổ biến.',
          'Trình thông dịch Python dịch và thực thi câu lệnh lần lượt theo từng dòng.'
        ]
      },
      {
        id: 'tab_10_16_2',
        title: '2. Môi trường lập trình Python và lệnh print()',
        subtitle: 'Viết câu lệnh đầu tiên "Hello World" trong phòng thí nghiệm Python',
        iconName: 'Play',
        keyPoints: [
          'Hai chế độ làm việc trong Python IDLE:',
          '  - Chế độ tương tác (Interactive Mode): Gõ từng lệnh sau dấu nhắc `>>>` và nhấn Enter để thấy ngay kết quả tức thì.',
          '  - Chế độ soạn thảo kịch bản (Script Mode): Tạo tệp mã nguồn mới (đuôi `.py`), soạn thảo nhiều câu lệnh và nhấn phím `F5` để chạy.',
          'Hàm `print()`: Xuất dữ liệu ra màn hình.',
          '  - In xâu ký tự: Phải đặt trong dấu nháy đơn hoặc nháy kép (ví dụ: `print("Xin chào!")`).',
          '  - In biểu thức toán học: Tự động tính toán kết quả (ví dụ: `print(5 + 3 * 2)` in ra số 11).'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Câu lệnh in đầu tiên\nprint("Xin chào! Tôi đang học Python 10.")\nprint("Kết quả phép tính 2026 * 2 =", 2026 * 2)',
          simulatedOutput: 'Xin chào! Tôi đang học Python 10.\nKết quả phép tính 2026 * 2 = 4052'
        },
        emCanNho: [
          'Hàm `print()` dùng để in văn bản và kết quả tính toán ra màn hình.',
          'Chữ và chuỗi ký tự bắt buộc đặt trong cặp dấu nháy `\' \'` hoặc `" "`.',
          'Tệp mã nguồn Python luôn có phần mở rộng là `.py`, phím `F5` để chạy chương trình.'
        ]
      }
    ]
  },

  // Bài 17: Biến và lệnh gán
  17: {
    objectives: [
      {
        id: 'obj_10_17_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm biến & quy tắc đặt tên',
        description: 'Hiểu được bản chất biến là ô nhớ lưu trữ giá trị; nắm vững các quy tắc đặt tên biến hợp lệ trong Python (không bắt đầu bằng số, không chứa dấu cách, phân biệt hoa thường).',
        iconName: 'Code'
      },
      {
        id: 'obj_10_17_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Sử dụng lệnh gán & các kiểu dữ liệu',
        description: 'Thực hiện thành thạo lệnh gán giá trị với dấu bằng `=`, nhận biết 4 kiểu dữ liệu nền tảng: `int`, `float`, `str`, `bool` và hàm kiểm tra kiểu `type()`.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_17_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong đặt tên khoa học',
        description: 'Hình thành thói quen đặt tên biến có ý nghĩa gợi nhớ (ví dụ `diem_toan` thay vì `x`), dễ đọc và tuân thủ quy ước snake_case.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_17_1',
        title: '1. Khái niệm biến và quy tắc đặt tên biến',
        subtitle: 'Chiếc hộp dán nhãn lưu trữ dữ liệu trong bộ nhớ máy tính',
        iconName: 'Box',
        keyPoints: [
          'Khái niệm: Biến (Variable) là một vùng nhớ được đặt tên dùng để lưu trữ giá trị và giá trị này có thể thay đổi trong quá trình thực hiện chương trình.',
          'Quy tắc đặt tên biến bắt buộc trong Python:',
          '  - Chỉ gồm các chữ cái (a-z, A-Z), chữ số (0-9) và dấu gạch dưới `_`.',
          '  - KHÔNG ĐƯỢC bắt đầu bằng chữ số (Ví dụ: `1diem` là sai; `diem1` là đúng).',
          '  - KHÔNG ĐƯỢC chứa dấu cách hoặc ký tự đặc biệt (@, #, $, %).',
          '  - KHÔNG ĐƯỢC trùng với các từ khóa dành riêng của Python (như `if`, `for`, `while`, `print`).',
          '  - Python PHÂN BIỆT chữ hoa và chữ thường (`Tuoi`, `tuoi`, `TUOI` là 3 biến hoàn toàn khác nhau).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tên biến mẫu', 'Tính hợp lệ', 'Lý do giải thích'],
          rows: [
            ['`ho_va_ten`', 'Hợp lệ', 'Dùng chữ cái và dấu gạch dưới theo chuẩn snake_case'],
            ['`diem_tb_10`', 'Hợp lệ', 'Chữ số nằm ở đuôi, hoàn toàn đúng luật'],
            ['`2ban`', 'KHÔNG hợp lệ', 'Bắt đầu bằng chữ số 2 là vi phạm quy tắc'],
            ['`lop 10a`', 'KHÔNG hợp lệ', 'Chứa dấu cách giữa các từ'],
            ['`for`', 'KHÔNG hợp lệ', 'Trùng với từ khóa vòng lặp for của ngôn ngữ']
          ]
        },
        emCanNho: [
          'Tên biến chỉ gồm chữ, số và `_`; không bắt đầu bằng số; không chứa dấu cách.',
          'Python phân biệt hoa và thường trong tên biến.',
          'Đặt tên biến có ý nghĩa gợi nhớ rõ ràng cho bài toán.'
        ]
      },
      {
        id: 'tab_10_17_2',
        title: '2. Lệnh gán và các kiểu dữ liệu cơ bản trong Python',
        subtitle: 'Nạp giá trị vào biến với dấu bằng = và cơ chế định kiểu động',
        iconName: 'Play',
        keyPoints: [
          'Lệnh gán: Cú pháp `<Tên_biến> = <Biểu_thức_hoặc_giá_trị>`. Dấu `=` là phép gán lấy giá trị bên phải nạp vào ô nhớ của biến bên trái.',
          'Bốn kiểu dữ liệu cơ bản trong Python:',
          '  - `int` (Số nguyên): Ví dụ `so_luong = 15`.',
          '  - `float` (Số thực có phần thập phân): Ví dụ `diem_toan = 9.25`.',
          '  - `str` (Xâu ký tự đặt trong dấu nháy): Ví dụ `ten = "Minh"`.',
          '  - `bool` (Lôgic True hoặc False): Ví dụ `da_qua_mon = True`.',
          'Định kiểu động: Không cần khai báo kiểu dữ liệu trước, Python tự động nhận diện kiểu khi bạn gán giá trị.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Khai báo các biến\nx = 10          # Kiểu int\ny = 3.14        # Kiểu float\nten = "Nam"     # Kiểu str\nco_mat = True   # Kiểu bool\n\nprint("Kiểu của x:", type(x))\nprint("Kiểu của y:", type(y))\nprint("Kiểu của ten:", type(ten))',
          simulatedOutput: "Kiểu của x: <class 'int'>\nKiểu của y: <class 'float'>\nKiểu của ten: <class 'str'>"
        },
        emCanNho: [
          'Cú pháp lệnh gán: `tên_biến = giá_trị`.',
          '4 kiểu dữ liệu cơ bản: `int` (nguyên), `float` (thực), `str` (chuỗi), `bool` (lôgic).',
          'Sử dụng hàm `type(tên_biến)` để kiểm tra kiểu dữ liệu của biến.'
        ]
      }
    ]
  },

  // Bài 18: Các lệnh vào ra đơn giản
  18: {
    objectives: [
      {
        id: 'obj_10_18_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu hàm input() và cơ chế ép kiểu',
        description: 'Biết rằng hàm `input()` luôn trả về giá trị kiểu xâu ký tự (`str`), và nắm được lý do tại sao phải dùng các hàm ép kiểu `int()` hoặc `float()` khi nhập số.',
        iconName: 'LogIn'
      },
      {
        id: 'obj_10_18_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhập dữ liệu & in kết quả định dạng',
        description: 'Viết được chương trình hoàn chỉnh nhập số từ bàn phím, tính toán biểu thức và in ra màn hình kèm thông điệp rõ ràng.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_18_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Giao tiếp người - máy thân thiện',
        description: 'Hình thành thói quen luôn viết câu thông báo nhắc nhở người dùng trước khi nhập liệu để chương trình rõ ràng, dễ dùng.',
        iconName: 'Smile'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_18_1',
        title: '1. Lệnh nhập dữ liệu input() và ép kiểu int()/float()',
        subtitle: 'Thu nhận dữ liệu người dùng gõ từ bàn phím',
        iconName: 'LogIn',
        keyPoints: [
          'Hàm nhập dữ liệu: `bien = input("Lời nhắc: ")`. Khi chạy đến dòng này, chương trình dừng lại đợi người dùng nhập từ bàn phím và nhấn Enter.',
          'QUY TẮC CỐT LÕI: Dữ liệu hàm `input()` nhận về LUÔN LUÔN là một xâu ký tự (kiểu `str`), kể cả khi bạn gõ các chữ số `123`.',
          'Bẫy phép cộng xâu: Nếu bạn nhập `a = input()` là 5 và `b = input()` là 3, thì `a + b` sẽ cho ra `"53"` (nối xâu) chứ không phải `8`!',
          'Hàm ép kiểu số học:',
          '  - Ép sang số nguyên: `n = int(input("Nhập số nguyên: "))`.',
          '  - Ép sang số thực: `x = float(input("Nhập số thực: "))`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Nhập hai số và tính tổng\na = int("15")\nb = int("25")\ntong = a + b\nprint("Tổng của a và b là:", tong)',
          simulatedOutput: 'Tổng của a và b là: 40'
        },
        emCanNho: [
          '`input()` luôn trả về giá trị kiểu chuỗi `str`.',
          'Muốn tính toán số học, BẮT BUỘC phải dùng `int(input())` hoặc `float(input())`.',
          'Viết lời nhắc rõ ràng bên trong dấu ngoặc kép của hàm input.'
        ]
      },
      {
        id: 'tab_10_18_2',
        title: '2. Định dạng in kết quả ra màn hình với print()',
        subtitle: 'Trình bày kết quả đẹp mắt, chuyên nghiệp với dấu phẩy và f-string',
        iconName: 'LogOut',
        keyPoints: [
          'In nhiều mục trên một dòng: Ngăn cách các biến hoặc giá trị bằng dấu phẩy `,` bên trong hàm print (Python sẽ tự động chèn thêm dấu cách giữa các mục). Ví dụ: `print("Họ tên:", ten, "- Tuổi:", tuoi)`.',
          'Định dạng chuỗi hiện đại f-string (Python 3.6+): Đặt chữ `f` trước dấu ngoặc kép và đặt tên biến bên trong cặp ngoặc nhọn `{}`. Ví dụ: `print(f"Học sinh {ten} đạt điểm {diem:.2f}")`.',
          'Tham số tùy chọn của print():',
          '  - `sep`: Ký tự phân cách giữa các mục (mặc định là dấu cách).',
          '  - `end`: Ký tự kết thúc dòng (mặc định là `\\n` xuống dòng mới; đặt `end=" "` để không xuống dòng).'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'ten = "Nguyễn Văn An"\ndiem = 9.375\n# In bằng f-string hiện đại bo 2 chữ số thập phân\nprint(f"Học sinh {ten} đạt điểm tổng kết là: {diem:.2f}")',
          simulatedOutput: 'Học sinh Nguyễn Văn An đạt điểm tổng kết là: 9.38'
        },
        emCanNho: [
          'Dùng dấu phẩy `,` để in nhiều giá trị cùng lúc.',
          'Sử dụng cú pháp `f"... {biến} ..."` để tạo chuỗi định dạng đẹp mắt.',
          'Dùng `end=""` nếu muốn các câu lệnh print tiếp theo in trên cùng một dòng.'
        ]
      }
    ]
  },

  // Bài 19: Câu lệnh điều kiện If
  19: {
    objectives: [
      {
        id: 'obj_10_19_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cấu trúc rẽ nhánh & quy tắc thụt lề',
        description: 'Hiểu nguyên lý rẽ nhánh điều kiện và nắm vững quy tắc thụt lề bắt buộc (Indentation - 4 dấu cách) xác định khối lệnh con trong Python.',
        iconName: 'GitFork'
      },
      {
        id: 'obj_10_19_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết lệnh if, if-else, if-elif-else',
        description: 'Vận dụng thành thạo các dạng rẽ nhánh để giải quyết bài toán phân loại điểm học tập, tìm số lớn nhất giữa các số.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_19_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Kỷ luật trình bày code chuẩn mực',
        description: 'Hình thành thói quen viết mã thụt lề ngay ngắn, không thụt lề tùy tiện gây lỗi IndentationError.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_19_1',
        title: '1. Cấu trúc rẽ nhánh if và if-else',
        subtitle: 'Giúp máy tính biết ra quyết định dựa trên điều kiện đúng/sai',
        iconName: 'GitFork',
        keyPoints: [
          'Cú pháp if dạng thiếu:',
          '  `if <Điều_kiện_lôgic>:`',
          '      `<Khối_lệnh_khi_điều_kiện_Đúng>`',
          'Cú pháp if-else dạng đủ:',
          '  `if <Điều_kiện_lôgic>:`',
          '      `<Khối_lệnh_khi_điều_kiện_Đúng>`',
          '  `else:`',
          '      `<Khối_lệnh_khi_điều_kiện_Sai>`',
          'Dấu hai chấm `:` ở cuối dòng lệnh if và else là bắt buộc.',
          'Các toán tử so sánh: `==` (so sánh bằng), `!=` (khác), `>`, `<`, `>=`, `<=`. (Lưu ý: So sánh bằng phải dùng hai dấu `==`, dấu `=` duy nhất là phép gán!).'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'diem = 8.5\nif diem >= 5.0:\n    print("Chúc mừng bạn đã ĐẠT!")\nelse:\n    print("Bạn cần cố gắng thi lại.")',
          simulatedOutput: 'Chúc mừng bạn đã ĐẠT!'
        },
        emCanNho: [
          'Cuối dòng `if` và `else` bắt buộc phải có dấu hai chấm `:`.',
          'So sánh bằng dùng `==`; khác dùng `!=`.',
          'Các lệnh con bên trong if/else bắt buộc phải thụt lề vào trong.'
        ]
      },
      {
        id: 'tab_10_19_2',
        title: '2. Cấu trúc rẽ nhánh lồng nhau và if-elif-else',
        subtitle: 'Xử lý các bài toán có nhiều trường hợp phân loại đa nhánh',
        iconName: 'ListFilter',
        keyPoints: [
          'Từ khóa `elif` là viết tắt của "else if" (nếu không thì xét tiếp).',
          'Cú pháp đa nhánh:',
          '  `if <Điều_kiện_1>:`',
          '      `<Khối_lệnh_1>`',
          '  `elif <Điều_kiện_2>:`',
          '      `<Khối_lệnh_2>`',
          '  `else:`',
          '      `<Khối_lệnh_mặc_định>`',
          'Cơ chế hoạt động: Python kiểm tra từ trên xuống dưới, điều kiện nào đúng đầu tiên sẽ thực thi khối lệnh của nhánh đó rồi thoát ngay, bỏ qua các nhánh còn lại.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'diem = 8.5\nif diem >= 8.0:\n    print("Xếp loại: Giỏi")\nelif diem >= 6.5:\n    print("Xếp loại: Khá")\nelif diem >= 5.0:\n    print("Xếp loại: Trung bình")\nelse:\n    print("Xếp loại: Chưa đạt")',
          simulatedOutput: 'Xếp loại: Giỏi'
        },
        emCanNho: [
          'Dùng `if-elif-else` khi bài toán có từ 3 trường hợp trở lên.',
          'Chỉ duy nhất một khối lệnh của điều kiện đúng đầu tiên được thực thi.',
          'Nhánh `else` ở cuối cùng là tùy chọn, bắt các trường hợp còn lại.'
        ]
      },
      {
        id: 'tab_10_19_3',
        title: '3. Quy tắc thụt lề (Indentation) trong Python',
        subtitle: 'Quy tắc vàng của cú pháp Python thay thế cho ngoặc nhọn { }',
        iconName: 'Sliders',
        keyPoints: [
          'Khái niệm: Khác với C++ hay Pascal dùng cặp từ khóa `{ }` hoặc `begin...end` để bao khối lệnh, Python sử dụng độ thụt lề thống nhất của các dòng lệnh để phân cấp khối lệnh.',
          'Quy chuẩn thụt lề:',
          '  - Chuẩn mực là thụt vào đúng 4 dấu cách (Space) hoặc 1 phím Tab.',
          '  - Tất cả các câu lệnh nằm trong cùng một khối lệnh con bắt buộc phải có độ thụt lề bằng nhau chằn chặn.',
          'Lỗi cú pháp phổ biến: `IndentationError: unexpected indent` (thụt lề vô lý) hoặc `expected an indented block` (quên thụt lề sau dấu hai chấm).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Dòng lệnh if / else có dấu :', desc: 'Báo hiệu bắt đầu một khối lệnh con mới' },
            { label: 'Thụt lề 4 dấu cách', desc: 'Các câu lệnh con bên trong bắt buộc thụt lề' },
            { label: 'Hết thụt lề (Dedenting)', desc: 'Báo hiệu kết thúc khối lệnh con trở về luồng chính' }
          ]
        },
        emCanNho: [
          'Thụt lề trong Python có ý nghĩa cú pháp bắt buộc.',
          'Luôn dùng phím Tab hoặc 4 dấu cách thống nhất trong toàn bộ file mã nguồn.',
          'Tuyệt đối không pha trộn phím Tab và phím Space trong cùng một khối lệnh.'
        ]
      }
    ]
  },

  // Bài 20: Câu lệnh lặp For
  20: {
    objectives: [
      {
        id: 'obj_10_20_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp vòng lặp for & hàm range()',
        description: 'Hiểu nguyên lý lặp với số lần biết trước của lệnh `for`, và nắm vững 3 tham số của hàm sinh dãy số `range(start, stop, step)`.',
        iconName: 'Repeat'
      },
      {
        id: 'obj_10_20_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Lập trình thuật toán duyệt và tính tổng',
        description: 'Viết được vòng lặp for để duyệt dãy số, tính tổng, tính tích giai thừa và in bảng cửu chương.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_20_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy thuật toán lặp',
        description: 'Cảm nhận được sức mạnh của máy tính khi thực hiện hàng triệu vòng lặp chỉ trong nháy mắt, từ đó phát triển tư duy tối ưu mã nguồn.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_20_1',
        title: '1. Câu lệnh lặp for với số lần biết trước',
        subtitle: 'Tự động hóa các thao tác lặp đi lặp lại nhiều lần',
        iconName: 'Repeat',
        keyPoints: [
          'Khái niệm: Vòng lặp `for` trong Python được dùng để lặp qua từng phần tử của một tập hợp (dãy số, danh sách, xâu ký tự).',
          'Cú pháp cơ bản:',
          '  `for <biến_chạy> in <tập_hợp>:`',
          '      `<khối_lệnh_lặp>`',
          'Cơ chế hoạt động: Ở mỗi vòng lặp, biến chạy sẽ tự động nhận giá trị lần lượt của từng phần tử từ đầu đến cuối tập hợp cho đến khi hết.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# In 5 câu chào liên tiếp\nfor i in range(5):\n    print(f"Lần lặp thứ {i + 1}: Chúc bạn học tốt!")',
          simulatedOutput: 'Lần lặp thứ 1: Chúc bạn học tốt!\nLần lặp thứ 2: Chúc bạn học tốt!\nLần lặp thứ 3: Chúc bạn học tốt!\nLần lặp thứ 4: Chúc bạn học tốt!\nLần lặp thứ 5: Chúc bạn học tốt!'
        },
        emCanNho: [
          'Vòng lặp `for` lặp tuần tự qua các phần tử của một dãy.',
          'Biến chạy tự động cập nhật giá trị sau mỗi bước lặp.',
          'Khối lệnh lặp bắt buộc phải có dấu `:` và thụt lề vào trong.'
        ]
      },
      {
        id: 'tab_10_20_2',
        title: '2. Hàm range(start, stop, step) trong vòng lặp for',
        subtitle: 'Bộ máy sinh dãy số nguyên tự động cực mạnh của Python',
        iconName: 'ListOrdered',
        keyPoints: [
          'Hàm `range(stop)`: Sinh dãy từ $0$ đến $stop - 1$ (Ví dụ: `range(5)` sinh ra $0, 1, 2, 3, 4$).',
          'Hàm `range(start, stop)`: Sinh dãy từ $start$ đến $stop - 1$ (Ví dụ: `range(1, 6)` sinh ra $1, 2, 3, 4, 5$).',
          'Hàm `range(start, stop, step)`: Sinh dãy từ $start$, tăng mỗi bước $step$ cho đến trước $stop$ (Ví dụ: `range(1, 10, 2)` sinh ra các số lẻ $1, 3, 5, 7, 9$).',
          'Đếm lùi (bước âm): `range(10, 0, -1)` sinh dãy đếm ngược $10, 9, 8, ..., 1$.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Cách gọi hàm range', 'Dãy số nguyên được sinh ra', 'Số lượng phần tử'],
          rows: [
            ['`range(4)`', '0, 1, 2, 3', '4 phần tử (bắt đầu từ 0)'],
            ['`range(2, 7)`', '2, 3, 4, 5, 6', '5 phần tử (dừng trước 7)'],
            ['`range(0, 11, 2)`', '0, 2, 4, 6, 8, 10', 'Các số chẵn từ 0 đến 10'],
            ['`range(5, 0, -1)`', '5, 4, 3, 2, 1', 'Đếm lùi giảm dần']
          ]
        },
        emCanNho: [
          'Hàm `range(start, stop)` luôn DỪNG LẠI ở giá trị $stop - 1$.',
          'Nếu bỏ qua start, mặc định bắt đầu từ $0$.',
          'Tham số thứ ba `step` là bước nhảy (có thể là số âm để đếm lùi).'
        ]
      }
    ]
  },

  // Bài 21: Câu lệnh lặp While
  21: {
    objectives: [
      {
        id: 'obj_10_21_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp vòng lặp while & điều kiện dừng',
        description: 'Hiểu nguyên lý lặp với số lần chưa biết trước của lệnh `while <điều_kiện>:`; nhận biết nguyên nhân gây lỗi lặp vô hạn (Infinite loop).',
        iconName: 'RotateCw'
      },
      {
        id: 'obj_10_21_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Điều khiển vòng lặp & lệnh break',
        description: 'Sử dụng lệnh `while` giải quyết bài toán lặp dựa trên điều kiện (nhập mật khẩu cho đến khi đúng, tìm ước chung lớn nhất) và dùng lệnh `break` để thoát lặp.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_21_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn trọng kiểm soát biến điều kiện',
        description: 'Luôn kiểm tra cập nhật biến đếm bên trong thân vòng lặp while để đảm bảo chương trình luôn có điểm dừng an toàn.',
        iconName: 'AlertTriangle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_21_1',
        title: '1. Câu lệnh lặp while với số lần chưa biết trước',
        subtitle: 'Lặp lại công việc chừng nào điều kiện logic vẫn còn Đúng',
        iconName: 'RotateCw',
        keyPoints: [
          'Cú pháp câu lệnh:',
          '  `while <Điều_kiện_lôgic>:`',
          '      `<Khối_lệnh_lặp>`',
          'Cơ chế hoạt động:',
          '  - Bước 1: Kiểm tra điều kiện logic. Nếu Đúng (True) thì thực thi khối lệnh bên trong.',
          '  - Bước 2: Quay lại kiểm tra điều kiện. Quá trình lặp tiếp tục cho đến khi điều kiện trở thành Sai (False) thì vòng lặp kết thúc.',
          'Ví dụ thực tế: Vòng lặp yêu cầu người dùng nhập mật khẩu, lặp chừng nào người dùng nhập sai thì bắt nhập lại.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Đếm từ 1 đến 5 bằng vòng lặp while\ni = 1\nwhile i <= 5:\n    print("Đếm số:", i)\n    i = i + 1   # Cực kỳ quan trọng: tăng biến đếm để có điểm dừng!',
          simulatedOutput: 'Đếm số: 1\nĐếm số: 2\nĐếm số: 3\nĐếm số: 4\nĐếm số: 5'
        },
        emCanNho: [
          'Vòng lặp `while` dùng khi không biết trước chính xác số lần lặp.',
          'Bên trong thân while BẮT BUỘC phải có lệnh làm thay đổi điều kiện lặp.',
          'Nếu điều kiện không bao giờ sai, vòng lặp sẽ chạy mãi mãi làm đơ máy.'
        ]
      },
      {
        id: 'tab_10_21_2',
        title: '2. Vòng lặp vô hạn và lệnh ngắt break',
        subtitle: 'Phanh khẩn cấp dừng vòng lặp tức thì trong trường hợp đặc biệt',
        iconName: 'StopCircle',
        keyPoints: [
          'Lỗi lặp vô hạn (Infinite Loop): Xảy ra khi lập trình viên quên dòng lệnh cập nhật biến điều kiện (như quên `i = i + 1`), làm điều kiện luôn luôn True. Nhấn tổ hợp phím `Ctrl + C` để ngắt chương trình khẩn cấp trong terminal.',
          'Lệnh `break`: Cho phép ngắt và thoát khỏi vòng lặp ngay lập tức dù điều kiện while vẫn đang True.',
          'Kỹ thuật `while True`: Tạo vòng lặp chạy liên tục chờ đợi sự kiện, khi gặp điều kiện thỏa mãn thì gọi lệnh `break` để thoát ra.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Tìm số đầu tiên chia hết cho cả 7 và 11 lớn hơn 100\nn = 101\nwhile True:\n    if n % 7 == 0 and n % 11 == 0:\n        print("Tìm thấy số thỏa mãn:", n)\n        break   # Thoát ngay vòng lặp\n    n += 1',
          simulatedOutput: 'Tìm thấy số thỏa mãn: 154'
        },
        emCanNho: [
          'Lệnh `break` lập tức dừng và nhảy ra ngoài vòng lặp.',
          'Nhấn `Ctrl + C` trên bàn phím để dừng nếu chương trình bị treo lặp vô hạn.',
          'Kỹ thuật `while True:` kết hợp `break` rất tiện lợi cho các bài toán tìm kiếm.'
        ]
      }
    ]
  },

  // Bài 22: Kiểu dữ liệu danh sách
  22: {
    objectives: [
      {
        id: 'obj_10_22_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm kiểu danh sách (List)',
        description: 'Hiểu bản chất kiểu dữ liệu danh sách (List) trong Python: là tập hợp các phần tử có thứ tự, đặt trong cặp ngoặc vuông `[ ]`, có thể chứa nhiều kiểu dữ liệu khác nhau.',
        iconName: 'List'
      },
      {
        id: 'obj_10_22_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khởi tạo & truy cập phần tử theo chỉ số',
        description: 'Tạo được danh sách, truy cập phần tử bằng chỉ số dương (bắt đầu từ 0) và chỉ số âm (từ cuối mảng về trước `[-1]`).',
        iconName: 'Code'
      },
      {
        id: 'obj_10_22_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy mảng & quản lý dữ liệu lớn',
        description: 'Nhận thức được sức mạnh của kiểu danh sách trong việc lưu trữ hàng ngàn thông tin của một tập hợp học sinh hay sản phẩm.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_22_1',
        title: '1. Khái niệm kiểu dữ liệu danh sách (List)',
        subtitle: 'Hộp đồ nghề chứa nhiều giá trị có trật tự trong ngoặc vuông [ ]',
        iconName: 'List',
        keyPoints: [
          'Khái niệm: Danh sách (List) là một tập hợp các phần tử có thứ tự được bao quanh bởi cặp dấu ngoặc vuông `[ ]`, mỗi phần tử cách nhau bởi dấu phẩy `,`.',
          'Tính chất linh hoạt của List trong Python:',
          '  - Có thể chứa các phần tử thuộc các kiểu dữ liệu khác nhau (số nguyên, số thực, chuỗi, boolean) trong cùng một danh sách.',
          '  - Danh sách có thể rỗng: `a = []`.',
          '  - Các phần tử trong danh sách có thể thay đổi giá trị (Mutable).'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Tạo danh sách điểm số và họ tên\nho_ten = ["An", "Bình", "Cường", "Dung"]\ndiem_so = [8.5, 9.0, 7.5, 10.0]\nprint("Danh sách họ tên:", ho_ten)\nprint("Danh sách điểm:", diem_so)',
          simulatedOutput: "Danh sách họ tên: ['An', 'Bình', 'Cường', 'Dung']\nDanh sách điểm: [8.5, 9.0, 7.5, 10.0]"
        },
        emCanNho: [
          'Danh sách trong Python đặt trong cặp ngoặc vuông `[ ]`.',
          'Một danh sách có thể chứa các phần tử thuộc nhiều kiểu dữ liệu khác nhau.',
          'Danh sách là cấu trúc dữ liệu cơ bản và mạnh mẽ nhất của Python.'
        ]
      },
      {
        id: 'tab_10_22_2',
        title: '2. Khởi tạo và truy cập phần tử trong danh sách qua chỉ số',
        subtitle: 'Nguyên tắc chỉ số bắt đầu từ số 0 và chỉ số âm đếm ngược',
        iconName: 'ListOrdered',
        keyPoints: [
          'Quy tắc chỉ số dương (Từ trái sang phải): BẮT ĐẦU TỪ 0. Phần tử đầu tiên là `a[0]`, phần tử thứ hai là `a[1]`, phần tử thứ $N$ là `a[N-1]`.',
          'Quy tắc chỉ số âm (Từ phải sang trái): Phần tử cuối cùng của danh sách có chỉ số là `a[-1]`, phần tử kế cuối là `a[-2]`.',
          'Thay đổi giá trị phần tử: Gán trực tiếp qua chỉ số: `a[0] = 100`.',
          'Lỗi chỉ số vượt quá giới hạn: `IndexError: list index out of range` khi bạn truy cập chỉ số lớn hơn hoặc bằng độ dài danh sách.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Phần tử', 'Giá trị', 'Chỉ số dương (Từ đầu)', 'Chỉ số âm (Từ cuối)'],
          rows: [
            ['Thứ nhất', '\'Táo\'', '`a[0]`', '`a[-4]`'],
            ['Thứ hai', '\'Cam\'', '`a[1]`', '`a[-3]`'],
            ['Thứ ba', '\'Chuối\'', '`a[2]`', '`a[-2]`'],
            ['Thứ tư (Cuối)', '\'Xoài\'', '`a[3]`', '`a[-1]`']
          ]
        },
        emCanNho: [
          'Chỉ số danh sách trong Python luôn bắt đầu từ số 0.',
          'Phần tử cuối cùng luôn có thể truy cập nhanh bằng `a[-1]`.',
          'Tránh truy cập chỉ số vượt quá độ dài danh sách để không bị lỗi IndexError.'
        ]
      }
    ]
  },

  // Bài 23: Một số lệnh làm việc với dữ liệu danh sách
  23: {
    objectives: [
      {
        id: 'obj_10_23_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các phương thức thao tác trên danh sách',
        description: 'Biết chức năng của các hàm và phương thức phổ biến: `len()`, `append()`, `remove()`, `pop()`, `sort()`, `reverse()` và toán tử kiểm tra `in`.',
        iconName: 'Wrench'
      },
      {
        id: 'obj_10_23_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thêm, xóa, sắp xếp danh sách',
        description: 'Viết được chương trình nhập danh sách số từ bàn phím, thêm phần tử mới, xóa phần tử và sắp xếp dãy số tăng dần/giảm dần.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_23_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tối ưu hóa thuật toán',
        description: 'Tận dụng các phương thức có sẵn của Python để viết mã ngắn gọn, hiệu quả thay vì viết thủ công hàng chục dòng lệnh.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_23_1',
        title: '1. Thao tác thêm và xóa phần tử (append, remove, pop)',
        subtitle: 'Chỉnh sửa kích thước danh sách động linh hoạt',
        iconName: 'PlusCircle',
        keyPoints: [
          'Thêm phần tử vào cuối: `danh_sach.append(gia_tri)`. Danh sách sẽ tăng thêm 1 phần tử.',
          'Xóa phần tử theo giá trị: `danh_sach.remove(gia_tri)`. Xóa phần tử đầu tiên xuất hiện có giá trị này (báo lỗi nếu giá trị không có trong danh sách).',
          'Xóa phần tử theo chỉ số: `danh_sach.pop(chi_so)`. Lấy ra và xóa phần tử tại chỉ số đó (mặc định `pop()` xóa phần tử cuối cùng).',
          'Lệnh `clear()`: Xóa sạch toàn bộ phần tử trong danh sách, đưa về danh sách rỗng `[]`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'hoa_qua = ["Táo", "Cam", "Chuối"]\nhoa_qua.append("Xoài")    # Thêm Xoài vào cuối\nhoa_qua.remove("Cam")     # Xóa Cam\nprint("Danh sách sau khi sửa:", hoa_qua)',
          simulatedOutput: "Danh sách sau khi sửa: ['Táo', 'Chuối', 'Xoài']"
        },
        emCanNho: [
          'Dùng `.append(x)` để chèn thêm phần tử $x$ vào cuối danh sách.',
          'Dùng `.remove(x)` để xóa theo giá trị; `.pop(i)` để xóa theo chỉ số.',
          'Danh sách trong Python tự động co giãn kích thước bộ nhớ khi thêm/xóa.'
        ]
      },
      {
        id: 'tab_10_23_2',
        title: '2. Các hàm và phương thức thông dụng (len, sort, in)',
        subtitle: 'Đo độ dài, sắp xếp và kiểm tra sự tồn tại của phần tử',
        iconName: 'Sliders',
        keyPoints: [
          'Độ dài danh sách: Hàm `len(danh_sach)` trả về số lượng phần tử đang có trong danh sách.',
          'Kiểm tra tồn tại: Toán tử `in` và `not in`. Ví dụ `if "Táo" in hoa_qua:` trả về True nếu có quả táo trong giỏ.',
          'Sắp xếp danh sách: Phương thức `danh_sach.sort()` sắp xếp các phần tử tăng dần theo thứ tự số học hoặc từ điển (Đặt `sort(reverse=True)` để xếp giảm dần).',
          'Đảo ngược danh sách: `danh_sach.reverse()` đảo ngược thứ tự các phần tử từ cuối lên đầu.',
          'Hàm `sum(danh_sach)`, `min()`, `max()`: Tính tổng, tìm số nhỏ nhất và lớn nhất trong danh sách số.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'diem = [8, 5, 9, 10, 7]\nprint("Số lượng bài kiểm tra:", len(diem))\nprint("Điểm cao nhất:", max(diem))\nprint("Tổng điểm:", sum(diem))\ndiem.sort()   # Sắp xếp tăng dần\nprint("Điểm sau sắp xếp:", diem)',
          simulatedOutput: 'Số lượng bài kiểm tra: 5\nĐiểm cao nhất: 10\nTổng điểm: 39\nĐiểm sau sắp xếp: [5, 7, 8, 9, 10]'
        },
        emCanNho: [
          'Dùng `len(a)` để đếm số lượng phần tử của danh sách.',
          'Dùng `.sort()` để sắp xếp thứ tự và `.reverse()` để đảo ngược.',
          'Toán tử `in` kiểm tra một phần tử có nằm trong danh sách hay không.'
        ]
      }
    ]
  },

  // Bài 24: Xâu kí tự
  24: {
    objectives: [
      {
        id: 'obj_10_24_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất kiểu xâu ký tự (String)',
        description: 'Hiểu xâu ký tự là dãy các ký tự có thứ tự, đặt trong nháy đơn hoặc nháy kép; nắm được tính bất biến (Immutable) của xâu trong Python.',
        iconName: 'Type'
      },
      {
        id: 'obj_10_24_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phép toán ghép xâu & trích xuất ký tự',
        description: 'Thực hiện được phép ghép xâu `+`, nhân bản xâu `*`, truy cập ký tự qua chỉ số `s[i]` và cắt lát xâu `s[start:stop]`.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_24_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn trọng xử lý văn bản',
        description: 'Ý thức được tầm quan trọng của việc chuẩn hóa họ tên, xử lý văn bản không dấu/có dấu trong các phần mềm quản lý.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_24_1',
        title: '1. Kiểu dữ liệu xâu kí tự (String) và chỉ số',
        subtitle: 'Chuỗi các ký tự chữ cái và cơ chế đánh chỉ số tương tự danh sách',
        iconName: 'Type',
        keyPoints: [
          'Khái niệm: Xâu ký tự (String) là một chuỗi các ký tự được đặt trong cặp dấu nháy đơn \' \' hoặc nháy kép " ".',
          'Đánh chỉ số ký tự: Bắt đầu từ số 0. Ví dụ với xâu `s = "PYTHON"`: `s[0]` là chữ \'P\', `s[1]` là chữ \'Y\', `s[-1]` là chữ \'N\'.',
          'Tính bất biến (Immutable): Không thể thay đổi trực tiếp một ký tự trong xâu qua lệnh gán (Lệnh `s[0] = "J"` sẽ báo lỗi TypeError). Muốn sửa xâu, bắt buộc phải tạo một xâu mới.',
          'Cắt lát xâu (Slicing): `s[start:stop]` trích xuất đoạn xâu con từ vị trí `start` đến `stop - 1`. Ví dụ `"TIN_HOC"[0:3]` cho ra `"TIN"`.'

        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 's = "TIN HỌC 10"\nprint("Ký tự đầu tiên:", s[0])\nprint("Ký tự cuối cùng:", s[-1])\nprint("Độ dài xâu:", len(s))\nprint("Cắt lấy 3 ký tự đầu:", s[0:3])',
          simulatedOutput: 'Ký tự đầu tiên: T\nKý tự cuối cùng: 0\nĐộ dài xâu: 10\nCắt lấy 3 ký tự đầu: TIN'
        },
        emCanNho: [
          'Ký tự trong xâu được đánh chỉ số từ 0 tương tự như danh sách.',
          'Xâu ký tự có tính bất biến, không thể sửa đổi từng ký tự qua phép gán.',
          'Dùng `s[start:stop]` để trích xuất một đoạn xâu con.'
        ]
      },
      {
        id: 'tab_10_24_2',
        title: '2. Các phép toán trên xâu (ghép xâu +, nhân xâu *)',
        subtitle: 'Nối kết và nhân bản văn bản cực kỳ trực quan của Python',
        iconName: 'Sparkles',
        keyPoints: [
          'Phép ghép xâu (Toán tử `+`): Nối hai xâu lại liền nhau thành một xâu dài hơn. Ví dụ: `"Trường" + " " + "THPT"` cho ra `"Trường THPT"`.',
          'Phép nhân xâu (Toán tử `*`): Lặp lại xâu đó nhiều lần với một số nguyên dương. Ví dụ: `"=" * 10` cho ra `"=========="`.',
          'Duyệt từng ký tự trong xâu bằng vòng lặp `for`:',
          '  `for ky_tu in "PYTHON":`',
          '      `print(ky_tu)`'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'ho = "Nguyễn"\nten = "An"\nho_ten = ho + " " + ten\nprint("Họ và tên:", ho_ten)\nprint("-" * 25)   # In đường kẻ ngang 25 dấu gạch',
          simulatedOutput: 'Họ và tên: Nguyễn An\n-------------------------'
        },
        emCanNho: [
          'Toán tử `+` dùng để ghép nối các chuỗi văn bản.',
          'Toán tử `*` dùng để nhân bản chuỗi nhiều lần (rất tiện in đường kẻ).',
          'Có thể dùng vòng lặp `for c in s:` để duyệt qua từng ký tự của xâu.'
        ]
      }
    ]
  },

  // Bài 25: Một số lệnh làm việc với xâu kí tự
  25: {
    objectives: [
      {
        id: 'obj_10_25_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các phương thức xử lý xâu chuẩn',
        description: 'Biết chức năng của các phương thức tách và nối từ (`split()`, `join()`), tìm kiếm (`find()`), thay thế (`replace()`) và biến đổi hoa thường (`lower()`, `upper()`).',
        iconName: 'Sliders'
      },
      {
        id: 'obj_10_25_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tách từ & chuẩn hóa họ tên văn bản',
        description: 'Viết được chương trình tách câu thành các từ riêng biệt, đếm số từ và thay thế từ ngữ trong một đoạn văn bản.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_25_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức làm sạch dữ liệu văn bản',
        description: 'Rèn luyện tính cẩn thận trong việc xử lý dữ liệu đầu vào, loại bỏ dấu cách thừa để văn bản chuẩn chỉ, đẹp mắt.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_25_1',
        title: '1. Các phương thức xử lý xâu (split, join)',
        subtitle: 'Tách câu thành danh sách từ và ghép mảng từ thành câu',
        iconName: 'Scissors',
        keyPoints: [
          'Phương thức `split()`: Tách một xâu dài thành một Danh sách (List) các từ dựa trên ký tự phân cách (mặc định là dấu cách trắng). Ví dụ: `"Tin học 10".split()` cho ra `["Tin", "học", "10"]`. Rất tiện lợi để đếm số từ trong câu.',
          'Phương thức `join()`: Ghép các phần tử trong danh sách thành một xâu hoàn chỉnh, ngăn cách bởi ký tự nối chỉ định. Cú pháp: `"<ký_tự_nối>".join(danh_sach)`. Ví dụ: `"-".join(["A", "B", "C"])` cho ra `"A-B-C"`.',
          'Biến đổi hoa thường: `s.upper()` biến toàn bộ thành chữ hoa; `s.lower()` biến thành chữ thường; `s.title()` viết hoa chữ cái đầu mỗi từ.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'cau = "Học lập trình Python thật là thú vị"\ncac_tu = cau.split()\nprint("Danh sách các từ:", cac_tu)\nprint("Số lượng từ trong câu:", len(cac_tu))\n# Ghép lại bằng dấu gạch dưới\nprint("Ghép lại:", "_".join(cac_tu))',
          simulatedOutput: "Danh sách các từ: ['Học', 'lập', 'trình', 'Python', 'thật', 'là', 'thú', 'vị']\nSố lượng từ trong câu: 8\nGhép lại: Học_lập_trình_Python_thật_là_thú_vị"
        },
        emCanNho: [
          '`s.split()` tách xâu thành danh sách các từ.',
          '`" ".join(list)` nối các từ trong danh sách thành một xâu.',
          'Dùng `s.upper()` và `s.lower()` để đồng bộ chữ hoa chữ thường khi tìm kiếm.'
        ]
      },
      {
        id: 'tab_10_25_2',
        title: '2. Phương thức tìm kiếm và thay thế (find, replace)',
        subtitle: 'Công cụ dò tìm và biên tập văn bản tự động',
        iconName: 'Search',
        keyPoints: [
          'Phương thức `find(sub)`: Tìm kiếm vị trí xuất hiện đầu tiên của xâu con `sub` trong xâu lớn. Trả về chỉ số vị trí tìm thấy (bắt đầu từ 0); nếu không tìm thấy thì trả về số `-1`.',
          'Phương thức `count(sub)`: Đếm số lần xuất hiện của xâu con `sub` trong xâu lớn.',
          'Phương thức `replace(old, new)`: Thay thế tất cả các xâu con `old` bằng xâu mới `new`. Ví dụ: `"Xin chào Lan".replace("Lan", "Mai")` cho ra `"Xin chào Mai"`.',
          'Phương thức `strip()`: Cắt bỏ sạch các dấu cách thừa ở hai đầu xâu văn bản.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'van_ban = "Tôi yêu môn Toán và tôi yêu Tin học"\n# Thay thế chữ Toán bằng Vật lý\nvan_ban_moi = van_ban.replace("Toán", "Vật lý")\nprint(van_ban_moi)\nprint("Số lần xuất hiện từ \'yêu\':", van_ban.count("yêu"))\nprint("Vị trí từ \'Tin\':", van_ban.find("Tin"))',
          simulatedOutput: "Tôi yêu môn Vật lý và tôi yêu Tin học\nSố lần xuất hiện từ 'yêu': 2\nVị trí từ 'Tin': 30"
        },
        emCanNho: [
          '`s.find("từ")` trả về vị trí xuất hiện hoặc -1 nếu không có.',
          '`s.replace("cũ", "mới")` thay thế hàng loạt từ ngữ trong xâu.',
          '`s.strip()` cắt bỏ các khoảng trắng thừa ở hai đầu câu.'
        ]
      }
    ]
  }
};
