import { LessonCurriculum10 } from './curriculum10';

export const GRADE_10_CURRICULUM_PART4: Record<number, LessonCurriculum10> = {
  // Bài 26: Hàm trong Python
  26: {
    objectives: [
      {
        id: 'obj_10_26_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm chương trình con & hàm',
        description: 'Hiểu được khái niệm hàm (Function / Subroutine): là một khối lệnh được đặt tên để thực hiện một công việc cụ thể và có thể gọi lại nhiều lần trong chương trình.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_26_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Định nghĩa & gọi thực thi hàm',
        description: 'Định nghĩa được hàm tự tạo bằng từ khóa `def <tên_hàm>():` và gọi thực thi hàm đó tại các vị trí khác nhau.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_26_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy module hóa chương trình',
        description: 'Hình thành tư duy chia nhỏ bài toán lớn thành các chương trình con độc lập để dễ quản lý, dễ kiểm tra và tái sử dụng mã nguồn.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_26_1',
        title: '1. Khái niệm chương trình con và hàm',
        subtitle: 'Chia để trị: Phân rã bài toán phức tạp thành các khối chức năng nhỏ',
        iconName: 'Layers',
        keyPoints: [
          'Vấn đề thực tế: Trong một chương trình lớn, có những đoạn mã phải lặp đi lặp lại nhiều lần (như in tiêu đề, kiểm tra số nguyên tố). Nếu sao chép nhiều lần sẽ làm code dài dòng, khó sửa chữa.',
          'Khái niệm hàm: Là một khối lệnh có tên gọi riêng, thực hiện một nhiệm vụ trọn vẹn, có thể được gọi ra sử dụng ở bất kỳ đâu trong chương trình.',
          'Lợi ích của hàm:',
          '  - Tái sử dụng mã nguồn (Reusability): Viết một lần, dùng nhiều lần.',
          '  - Cấu trúc chương trình sáng sủa, dễ đọc, dễ phát hiện và sửa lỗi.',
          '  - Hỗ trợ làm việc nhóm: Mỗi lập trình viên phụ trách viết một số hàm độc lập.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bài toán lớn phức tạp', desc: 'Hệ thống quản lý học sinh toàn trường' },
            { label: 'Phân rã thành các hàm', desc: 'Ham_Nhap_Diem(), Ham_Tinh_Trung_Binh(), Ham_In_Hoc_Ba()' },
            { label: 'Lắp ráp chương trình chính', desc: 'Gọi tuần tự các hàm theo luồng nghiệp vụ' }
          ]
        },
        emCanNho: [
          'Hàm giúp chia nhỏ chương trình thành các phần độc lập.',
          'Viết một lần, gọi lại dùng nhiều lần giúp tránh lặp mã.',
          'Cải thiện tính rõ ràng và khả năng bảo trì của phần mềm.'
        ]
      },
      {
        id: 'tab_10_26_2',
        title: '2. Cú pháp định nghĩa hàm với từ khóa def',
        subtitle: 'Tự tạo ra các câu lệnh mới cho riêng bạn',
        iconName: 'Code',
        keyPoints: [
          'Cú pháp định nghĩa hàm:',
          '  `def <Tên_hàm>():`',
          '      `<Khối_lệnh_trong_thân_hàm>`',
          'Gọi hàm thực thi: `<Tên_hàm>()`.',
          'Lưu ý quan trọng: Khối lệnh trong thân hàm phải được định nghĩa trước khi có lời gọi hàm; thân hàm bắt buộc phải thụt lề vào trong.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Định nghĩa hàm in lời chào\ndef in_loi_chao():\n    print("=" * 30)\n    print("Chào mừng bạn đến với Tin học 10!")\n    print("=" * 30)\n\n# Gọi hàm 2 lần\nin_loi_chao()\nin_loi_chao()',
          simulatedOutput: '==============================\nChào mừng bạn đến với Tin học 10!\n==============================\n==============================\nChào mừng bạn đến với Tin học 10!\n=============================='
        },
        emCanNho: [
          'Dùng từ khóa `def` để bắt đầu định nghĩa hàm.',
          'Thân hàm bắt buộc phải có dấu `:` và thụt lề.',
          'Định nghĩa hàm trước, gọi hàm sau.'
        ]
      }
    ]
  },

  // Bài 27: Tham số của hàm
  27: {
    objectives: [
      {
        id: 'obj_10_27_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Tham số, đối số & lệnh return',
        description: 'Phân biệt được tham số hình thức (Parameters) trong định nghĩa hàm và đối số thực sự (Arguments) khi gọi hàm; hiểu vai trò của lệnh `return`.',
        iconName: 'ArrowRightCircle'
      },
      {
        id: 'obj_10_27_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết hàm nhận tham số và trả về kết quả',
        description: 'Xây dựng được các hàm tính toán (tính diện tích hình tròn, kiểm tra số chẵn lẻ, tìm số lớn nhất) và sử dụng giá trị trả về trong biểu thức.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_27_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy toán học tổng quát hóa',
        description: 'Rèn luyện khả năng trừu tượng hóa: biến một bài toán cụ thể thành một hàm tổng quát có thể áp dụng cho mọi giá trị đầu vào.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_27_1',
        title: '1. Tham số và đối số của hàm',
        subtitle: 'Truyền nguyên liệu đầu vào cho cỗ máy hàm xử lý',
        iconName: 'ArrowRightCircle',
        keyPoints: [
          'Tham số (Parameters): Là các biến được khai báo bên trong cặp ngoặc đơn khi định nghĩa hàm. Ví dụ: `def tinh_tong(a, b):`.',
          'Đối số (Arguments): Là các giá trị thực tế được truyền vào hàm khi gọi thực thi. Ví dụ: `tinh_tong(15, 25)` (15 và 25 là đối số gán tương ứng cho a và b).',
          'Tham số có giá trị mặc định: Cho phép bỏ qua khi gọi hàm. Ví dụ: `def chao(ten, loi_chao="Xin chào")`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Hàm tính chu vi hình chữ nhật\ndef chu_vi(dai, rong):\n    cv = (dai + rong) * 2\n    print(f"Chu vi HCN ({dai} x {rong}) là: {cv}")\n\n# Gọi hàm với các đối số khác nhau\nchu_vi(10, 5)\nchu_vi(20, 15)',
          simulatedOutput: 'Chu vi HCN (10 x 5) là: 30\nChu vi HCN (20 x 15) là: 70'
        },
        emCanNho: [
          'Tham số khai báo ở định nghĩa hàm; Đối số truyền vào khi gọi hàm.',
          'Thứ tự truyền đối số mặc định khớp theo thứ tự các tham số.',
          'Hàm có thể có một hoặc nhiều tham số cách nhau bởi dấu phẩy.'
        ]
      },
      {
        id: 'tab_10_27_2',
        title: '2. Giá trị trả về của hàm với lệnh return',
        subtitle: 'Gửi kết quả tính toán trở lại cho chương trình chính sử dụng',
        iconName: 'Send',
        keyPoints: [
          'Lệnh `return`: Trả kết quả của hàm về nơi gọi hàm và LẬP TỨC THOÁT KHỎI HÀM (mọi câu lệnh viết sau `return` trong cùng khối lệnh sẽ bị bỏ qua).',
          'Sự khác nhau giữa `print()` và `return`:',
          '  - `print()` chỉ hiển thị kết quả ra màn hình cho mắt người xem, không lưu lại để tính toán tiếp được.',
          '  - `return` đóng gói kết quả để gán vào biến khác hoặc dùng tiếp trong các biểu thức toán học.',
          'Nếu hàm không có lệnh `return`, mặc định hàm trả về giá trị `None`.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# Hàm tính diện tích hình tròn trả về kết quả\ndef dien_tich_tron(r):\n    pi = 3.14159\n    return pi * r * r\n\n# Nhận kết quả trả về vào biến s\ns = dien_tich_tron(5)\nprint("Diện tích hình tròn r=5 là:", round(s, 2))',
          simulatedOutput: 'Diện tích hình tròn r=5 là: 78.54'
        },
        emCanNho: [
          'Lệnh `return` trả kết quả về và kết thúc hàm ngay lập tức.',
          'Dùng kết quả của hàm trả về để gán vào biến hoặc đưa vào biểu thức.',
          'Phân biệt rạch ròi giữa in ra màn hình `print` và trả về kết quả `return`.'
        ]
      }
    ]
  },

  // Bài 28: Phạm vi của biến
  28: {
    objectives: [
      {
        id: 'obj_10_28_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Biến toàn cục & biến cục bộ',
        description: 'Phân biệt được biến toàn cục (Global variable) có phạm vi toàn chương trình và biến cục bộ (Local variable) chỉ tồn tại trong thân hàm.',
        iconName: 'Eye'
      },
      {
        id: 'obj_10_28_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Sử dụng từ khóa global',
        description: 'Sử dụng đúng từ khóa `global` khi muốn thay đổi giá trị của một biến toàn cục từ bên trong thân hàm mà không bị lỗi UnboundLocalError.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_28_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo vệ tính đóng gói dữ liệu',
        description: 'Nhận thức được lợi ích của biến cục bộ trong việc bảo vệ dữ liệu không bị sửa nhầm lẫn giữa các hàm khác nhau trong dự án phần mềm.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_28_1',
        title: '1. Biến toàn cục (Global variable)',
        subtitle: 'Biến công cộng của toàn bộ chương trình',
        iconName: 'Globe',
        keyPoints: [
          'Khái niệm: Biến toàn cục được khai báo ở bên ngoài tất cả các hàm (ở cấp độ cao nhất của tệp mã nguồn).',
          'Phạm vi hoạt động: Có thể được truy cập và đọc giá trị từ bất kỳ vị trí nào trong toàn bộ chương trình (cả trong và ngoài hàm).',
          'Thời gian tồn tại: Tồn tại suốt từ lúc bắt đầu chạy cho đến khi chương trình kết thúc.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: '# x là biến toàn cục\nx = 100\n\ndef in_gia_tri():\n    # Trong hàm vẫn đọc được x toàn cục\n    print("Giá trị x đọc từ trong hàm:", x)\n\nin_gia_tri()\nprint("Giá trị x ngoài hàm:", x)',
          simulatedOutput: 'Giá trị x đọc từ trong hàm: 100\nGiá trị x ngoài hàm: 100'
        },
        emCanNho: [
          'Biến toàn cục khai báo ngoài hàm, có phạm vi sử dụng trong toàn bộ file.',
          'Mọi hàm đều có thể đọc được giá trị của biến toàn cục.',
          'Hạn chế lạm dụng quá nhiều biến toàn cục để tránh xung đột dữ liệu.'
        ]
      },
      {
        id: 'tab_10_28_2',
        title: '2. Biến cục bộ (Local variable) và từ khóa global',
        subtitle: 'Bảo mật nội bộ bên trong phòng thí nghiệm của mỗi hàm',
        iconName: 'Lock',
        keyPoints: [
          'Biến cục bộ (Local variable): Được khai báo và khởi tạo bên trong thân hàm. Chỉ tồn tại khi hàm đang chạy; khi hàm kết thúc, biến cục bộ tự động bị giải phóng khỏi bộ nhớ RAM.',
          'Không thể truy cập biến cục bộ từ bên ngoài hàm (sẽ báo lỗi `NameError: name is not defined`).',
          'Từ khóa `global`: Nếu trong thân hàm bạn muốn THAY ĐỔI giá trị của biến toàn cục, bạn bắt buộc phải khai báo dòng `global <tên_biến>` ở đầu hàm.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'dem = 0   # Biến toàn cục\n\ndef tang_dem():\n    global dem   # Báo cho Python biết ta muốn sửa biến toàn cục dem\n    dem += 1\n\ntang_dem()\ntang_dem()\nprint("Giá trị dem sau 2 lần gọi hàm:", dem)',
          simulatedOutput: 'Giá trị dem sau 2 lần gọi hàm: 2'
        },
        emCanNho: [
          'Biến cục bộ chỉ sống bên trong thân hàm và biến mất khi hàm kết thúc.',
          'Hai hàm khác nhau có thể đặt tên biến cục bộ trùng nhau mà không sợ xung đột.',
          'Dùng từ khóa `global` khi cần thay đổi giá trị biến toàn cục từ trong hàm.'
        ]
      }
    ]
  },

  // Bài 29: Nhận biết lỗi chương trình
  29: {
    objectives: [
      {
        id: 'obj_10_29_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân loại 3 loại lỗi lập trình',
        description: 'Nhận diện và phân biệt được: Lỗi cú pháp (Syntax Error), Lỗi khi thực thi (Runtime Error/Exceptions) và Lỗi ngữ nghĩa (Logic Error).',
        iconName: 'AlertTriangle'
      },
      {
        id: 'obj_10_29_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Đọc thông báo lỗi (Traceback) & khoanh vùng',
        description: 'Đọc hiểu được dòng thông báo lỗi tiếng Anh của Python để xác định chính xác số dòng xảy ra lỗi và nguyên nhân gây lỗi.',
        iconName: 'Search'
      },
      {
        id: 'obj_10_29_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bình tĩnh & kiên nhẫn khi gặp lỗi',
        description: 'Xây dựng tâm lý xem lỗi là người bạn đồng hành trong lập trình, không nản lòng và kiên trì tìm cách khắc phục.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_29_1',
        title: '1. Lỗi cú pháp (Syntax Error)',
        subtitle: 'Vi phạm quy tắc ngữ pháp của ngôn ngữ lập trình',
        iconName: 'AlertOctagon',
        keyPoints: [
          'Khái niệm: Xảy ra khi câu lệnh viết sai quy tắc ngữ pháp của Python (quên dấu hai chấm `:`, mở ngoặc mà không đóng ngoặc, đặt tên biến sai quy cách, thụt lề sai IndentationError).',
          'Đặc điểm: Trình thông dịch phát hiện ra ngay từ khâu dịch trước khi chương trình được chạy. Chương trình sẽ dừng lại ngay và không thực thi bất kỳ dòng lệnh nào.',
          'Dấu hiệu: Báo dòng chữ đỏ `SyntaxError: invalid syntax` kèm dấu mũi tên `^` chỉ vào vị trí viết sai.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Lệnh viết sai cú pháp', 'Nguyên nhân lỗi', 'Cách sửa đúng'],
          rows: [
            ['`if x > 0`', 'Thiếu dấu hai chấm : ở cuối', '`if x > 0:`'],
            ['`print("Xin chào)`', 'Thiếu dấu ngoặc kép đóng chuỗi', '`print("Xin chào")`'],
            ['`2x = 10`', 'Tên biến bắt đầu bằng số', '`x2 = 10`']
          ]
        },
        emCanNho: [
          'Lỗi cú pháp bị chặn ngay trước khi chương trình kịp chạy.',
          'Nhìn vào dấu mũi tên `^` trong thông báo lỗi để tìm vị trí thiếu dấu ngoặc hoặc dấu hai chấm.',
          'Kiểm tra thụt lề cẩn thận khi gặp IndentationError.'
        ]
      },
      {
        id: 'tab_10_29_2',
        title: '2. Lỗi khi thực thi (Runtime Error) và Lỗi ngữ nghĩa (Logic Error)',
        subtitle: 'Lỗi phát sinh trong quá trình chạy và lỗi sai kết quả thuật toán',
        iconName: 'AlertTriangle',
        keyPoints: [
          'Lỗi khi thực thi (Runtime Error / Ngoại lệ): Cú pháp viết đúng, chương trình đang chạy bình thường thì gặp một tình huống vô lý:',
          '  - `ZeroDivisionError`: Chia cho số 0.',
          '  - `ValueError`: Ép kiểu chuỗi chữ sang số (`int("abc")`).',
          '  - `IndexError`: Chỉ số danh sách nằm ngoài giới hạn.',
          'Lỗi ngữ nghĩa / Lỗi logic (Logic Error): Chương trình chạy trơn tru từ đầu đến cuối không báo bất kỳ lỗi nào, nhưng KẾT QUẢ IN RA LẠI BỊ SAI (Ví dụ: Tính diện tích hình chữ nhật lại lấy dài cộng rộng thay vì dài nhân rộng). Đây là loại lỗi khó phát hiện và sửa chữa nhất!'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Loại lỗi', 'Thời điểm phát hiện', 'Mức độ nguy hiểm', 'Ví dụ'],
          rows: [
            ['Lỗi cú pháp (Syntax)', 'Trước khi chạy', 'Dễ sửa nhất', 'Quên dấu `:` sau lệnh if'],
            ['Lỗi thực thi (Runtime)', 'Đang chạy thì sập', 'Trung bình', 'Chia cho số 0, hết bộ nhớ'],
            ['Lỗi logic (Semantic)', 'Chạy êm nhưng sai kết quả', 'Khó phát hiện nhất', 'Viết nhầm dấu + thành dấu *']
          ]
        },
        emCanNho: [
          'Runtime Error làm chương trình bị sập giữa chừng (chia cho 0, ép kiểu sai).',
          'Logic Error là lỗi thuật toán: máy tính chạy đúng lệnh ta viết nhưng lệnh ta viết lại sai logic.',
          'Cần kiểm thử chương trình bằng nhiều bộ dữ liệu để phát hiện lỗi logic.'
        ]
      }
    ]
  },

  // Bài 30: Kiểm thử và gỡ lỗi chương trình
  30: {
    objectives: [
      {
        id: 'obj_10_30_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm kiểm thử & bộ dữ liệu thử (Test cases)',
        description: 'Hiểu mục đích của kiểm thử (Testing): chạy chương trình với các bộ dữ liệu đầu vào đã biết trước kết quả mong đợi để tìm lỗi ẩn giấu.',
        iconName: 'CheckCircle'
      },
      {
        id: 'obj_10_30_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ thuật gỡ lỗi (Debugging)',
        description: 'Sử dụng thành thạo phương pháp in giá trị trung gian bằng lệnh `print()` hoặc công cụ Debugger từng bước để truy vết biến bị sai.',
        iconName: 'Bug'
      },
      {
        id: 'obj_10_30_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong khoa học & nghiêm cẩn',
        description: 'Rèn luyện tính cẩn thận, không vội vàng kết luận chương trình đúng khi mới chỉ thử với 1 trường hợp đơn giản.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_30_1',
        title: '1. Khái niệm kiểm thử và xây dựng bộ dữ liệu thử (Test cases)',
        subtitle: 'Tìm kiếm lỗi ẩn giấu bằng các trường hợp biên và ngoại lệ',
        iconName: 'CheckCircle',
        keyPoints: [
          'Kiểm thử (Software Testing): Là quá trình chạy thử nghiệm chương trình với các bộ dữ liệu mẫu (Test cases) nhằm mục đích phát hiện các lỗi phần mềm tiềm ẩn trước khi bàn giao cho người dùng.',
          'Một Test case chuẩn gồm: Dữ liệu đầu vào (Input) và Kết quả mong đợi (Expected Output).',
          'Ba nhóm dữ liệu thử cần kiểm tra:',
          '  1. Dữ liệu thông thường: Các số bình thường.',
          '  2. Dữ liệu biên (Boundary values): Giá trị nhỏ nhất, lớn nhất, số 0, số âm.',
          '  3. Dữ liệu đặc biệt: Danh sách rỗng, xâu không có ký tự nào.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Test case bài toán tính điểm', 'Dữ liệu Input', 'Kết quả mong đợi', 'Ý nghĩa kiểm thử'],
          rows: [
            ['Test 1: Bình thường', 'diem = 7.5', 'Xếp loại Khá', 'Kiểm tra luồng chạy chuẩn'],
            ['Test 2: Giá trị biên dưới', 'diem = 8.0', 'Xếp loại Giỏi (Chính xác)', 'Kiểm tra dấu >= hay >'],
            ['Test 3: Giá trị bất hợp lý', 'diem = -5 hoặc 15', 'Báo lỗi điểm không hợp lệ', 'Kiểm tra tính toàn vẹn dữ liệu']
          ]
        },
        emCanNho: [
          'Kiểm thử nhằm mục đích chứng minh chương trình có lỗi để sửa.',
          'Luôn chuẩn bị các Test case kiểm tra giá trị biên (0, âm, cực đại).',
          'Chương trình chỉ được coi là hoàn thiện khi vượt qua 100% các Test cases.'
        ]
      },
      {
        id: 'tab_10_30_2',
        title: '2. Các phương pháp gỡ lỗi (Debugging)',
        subtitle: 'Truy vết và tiêu diệt bọ (Bug) trong mã nguồn',
        iconName: 'Bug',
        keyPoints: [
          'Thuật ngữ Debug: Nghĩa đen là "bắt bọ" - quá trình tìm kiếm nguyên nhân và sửa chữa lỗi logic trong chương trình.',
          'Phương pháp 1: Chèn lệnh `print()` trung gian: Đặt các lệnh `print("Biến x tại vòng lặp:", x)` để theo dõi sự biến thiên của biến qua từng bước.',
          'Phương pháp 2: Sử dụng công cụ Debugger chuyên nghiệp trong IDE (VS Code, PyCharm):',
          '  - Đặt điểm dừng (Breakpoint): Tạm dừng chương trình tại dòng nghi ngờ.',
          '  - Chạy từng bước (Step Over / F10): Quan sát giá trị các biến thay đổi trên bảng điều khiển Watch.',
          'Phương pháp 3: Nhờ bạn đọc chéo mã (Rubber Duck Debugging): Giải thích từng dòng code cho bạn nghe để tự nhận ra điểm vô lý.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Khoanh vùng nghi ngờ', desc: 'Dựa vào Test case bị sai để xác định đoạn code lỗi' },
            { label: '2. In biến trung gian', desc: 'Dùng lệnh print(biến) xem giá trị bị sai từ đâu' },
            { label: '3. Sửa mã & Chạy lại', desc: 'Sửa lỗi và kiểm tra lại toàn bộ các Test cases' }
          ]
        },
        emCanNho: [
          'Gỡ lỗi (Debug) là kỹ năng quan trọng nhất của người lập trình.',
          'Chèn `print()` theo dõi giá trị biến là cách debug đơn giản, hiệu quả nhất.',
          'Sau khi sửa lỗi xong, nhớ xóa hoặc chú thích lại các lệnh print debug.'
        ]
      }
    ]
  },

  // Bài 31: Thực hành viết chương trình đơn giản
  31: {
    objectives: [
      {
        id: 'obj_10_31_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình giải bài toán trên máy tính',
        description: 'Nắm vững 4 bước giải bài toán: Xác định bài toán (Input/Output) -> Thiết kế thuật toán -> Viết mã chương trình -> Kiểm thử và hoàn thiện.',
        iconName: 'Workflow'
      },
      {
        id: 'obj_10_31_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Lập trình ứng dụng thực tế',
        description: 'Vận dụng tổng hợp biến, if-else, for/while và danh sách để giải quyết bài toán tính cước taxi, tính tiền điện bậc thang.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_31_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tự tin giải quyết vấn đề đời sống',
        description: 'Tự tin áp dụng lập trình để tự động hóa các công việc tính toán quen thuộc trong gia đình và trường học.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_31_1',
        title: '1. Phân tích bài toán thực tế',
        subtitle: 'Xác định rõ ràng cái đã cho (Input) và cái cần tìm (Output)',
        iconName: 'HelpCircle',
        keyPoints: [
          'Bài toán tính tiền cước Taxi:',
          '  - Giá mở cửa: 10.000đ cho 1 km đầu tiên.',
          '  - Từ km thứ 2 đến km thứ 10: 12.000đ / km.',
          '  - Từ km thứ 11 trở đi: 9.000đ / km.',
          'Xác định Input / Output:',
          '  - Input: Số km di chuyển $d$ (số thực dương).',
          '  - Output: Tổng số tiền cước phải trả (VNĐ).',
          'Phân tích điều kiện rẽ nhánh: $d \\le 1$, $1 < d \\le 10$, và $d > 10$.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Quãng đường d (km)', 'Công thức tính cước phí (VNĐ)'],
          rows: [
            ['$d \\le 1$', '$10.000$'],
            ['$1 < d \\le 10$', '$10.000 + (d - 1) \\times 12.000$'],
            ['$d > 10$', '$10.000 + 9 \\times 12.000 + (d - 10) \\times 9.000$']
          ]
        },
        emCanNho: [
          'Bước đầu tiên luôn là xác định rõ ràng Input và Output.',
          'Chia các mốc giá trị thực tế thành các khoảng điều kiện toán học.',
          'Vẽ sơ đồ khối thuật toán trước khi bắt tay vào gõ mã.'
        ]
      },
      {
        id: 'tab_10_31_2',
        title: '2. Thiết kế thuật toán và viết chương trình hoàn chỉnh',
        subtitle: 'Hiện thực hóa giải thuật bằng mã nguồn Python trong sáng',
        iconName: 'Code',
        keyPoints: [
          'Viết hàm tính tiền cước taxi modular hóa.',
          'Kiểm tra tính hợp lệ của đầu vào: Số km phải lớn hơn 0.',
          'Định dạng số tiền có dấu phân cách hàng nghìn cho dễ đọc.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'def tinh_tien_taxi(km):\n    if km <= 0:\n        return 0\n    elif km <= 1:\n        return 10000\n    elif km <= 10:\n        return 10000 + (km - 1) * 12000\n    else:\n        return 10000 + 9 * 12000 + (km - 10) * 9000\n\n# Chạy thử với quãng đường 15 km\ntien = tinh_tien_taxi(15)\nprint(f"Tiền cước taxi 15 km là: {tien:,} VNĐ")',
          simulatedOutput: 'Tiền cước taxi 15 km là: 163,000 VNĐ'
        },
        emCanNho: [
          'Đóng gói logic tính toán vào trong hàm `def` để dễ tái sử dụng.',
          'Dùng định dạng `{tien:,}` để in số tiền có dấu phẩy hàng nghìn đẹp mắt.',
          'Chạy thử nghiệm với các trường hợp km = 0.5, 5, 15 để kiểm thử.'
        ]
      }
    ]
  },

  // Bài 32: Ôn tập lập trình Python
  32: {
    objectives: [
      {
        id: 'obj_10_32_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hệ thống hóa toàn bộ kiến thức Python 10',
        description: 'Khái quát lại các chủ điểm: Kiểu dữ liệu -> Cấu trúc rẽ nhánh if -> Vòng lặp for/while -> Danh sách List -> Xâu ký tự String -> Hàm def.',
        iconName: 'BookOpen'
      },
      {
        id: 'obj_10_32_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Giải quyết bài toán tổng hợp',
        description: 'Vận dụng tổng hòa các cấu trúc điều khiển và dữ liệu để giải bài toán lọc danh sách, sắp xếp và thống kê điểm số học sinh.',
        iconName: 'Play'
      },
      {
        id: 'obj_10_32_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tự tin bước vào các kỳ thi',
        description: 'Củng cố sự tự tin, tâm lý vững vàng chuẩn bị cho bài kiểm tra cuối học kỳ và các dự án lập trình nâng cao lớp 11.',
        iconName: 'Award'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_32_1',
        title: '1. Tổng kết cấu trúc dữ liệu và giải thuật trong Python',
        subtitle: 'Sơ đồ tư duy toàn bộ chương trình lập trình Tin học 10',
        iconName: 'Layers',
        keyPoints: [
          '1. Kiểu dữ liệu đơn: `int` (nguyên), `float` (thực), `str` (chuỗi), `bool` (lôgic).',
          '2. Cấu trúc rẽ nhánh: `if`, `if-else`, `if-elif-else` (luôn nhớ thụt lề 4 space).',
          '3. Cấu trúc lặp: `for i in range()` (biết trước số lần) và `while` (lặp theo điều kiện).',
          '4. Cấu trúc mảng/danh sách: `List [ ]` (co giãn động, append, remove, sort) và `String " "` (bất biến, split, join).',
          '5. Chương trình con: Hàm `def` với tham số đầu vào và lệnh `return` trả kết quả.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Nền tảng cú pháp', desc: 'Biến, Lệnh gán, Input / Print, Ép kiểu' },
            { label: 'Điều khiển luồng', desc: 'Rẽ nhánh if-elif-else, Vòng lặp for/while' },
            { label: 'Cấu trúc dữ liệu & Hàm', desc: 'Danh sách List, Xâu String, Hàm def' }
          ]
        },
        emCanNho: [
          'Nắm chắc 5 trụ cột: Biến, Điều kiện, Vòng lặp, Danh sách/Xâu, Hàm.',
          'Python hỗ trợ giải toán nhanh nhờ các thư viện phong phú.',
          'Tư duy giải thuật là chìa khóa then chốt của mọi ngôn ngữ lập trình.'
        ]
      },
      {
        id: 'tab_10_32_2',
        title: '2. Luyện tập bài toán tổng hợp',
        subtitle: 'Thực hành quản lý và lọc danh sách học sinh đạt danh hiệu Giỏi',
        iconName: 'Play',
        keyPoints: [
          'Đề bài: Cho danh sách điểm trung bình của một lớp. Hãy tính điểm trung bình cả lớp, đếm số bạn đạt điểm Giỏi ($>= 8.0$) và in ra điểm số cao nhất.',
          'Giải thuật: Dùng hàm `sum()` và `len()` tính trung bình, dùng vòng lặp `for` đếm số học sinh thỏa mãn điều kiện, dùng hàm `max()` lấy điểm cao nhất.'
        ],
        visualType: 'interactive-python',
        visualData: {
          defaultCode: 'diem_lop = [8.5, 9.0, 6.5, 7.0, 9.5, 5.0, 8.0]\n\n# 1. Điểm trung bình cả lớp\ndtb_chung = sum(diem_lop) / len(diem_lop)\n\n# 2. Đếm số bạn giỏi\nso_ban_gioi = sum(1 for d in diem_lop if d >= 8.0)\n\nprint(f"Điểm trung bình cả lớp: {dtb_chung:.2f}")\nprint(f"Số học sinh đạt danh hiệu Giỏi: {so_ban_gioi}")\nprint(f"Điểm cao nhất lớp: {max(diem_lop)}")',
          simulatedOutput: 'Điểm trung bình cả lớp: 7.64\nSố học sinh đạt danh hiệu Giỏi: 4\nĐiểm cao nhất lớp: 9.5'
        },
        emCanNho: [
          'Vận dụng linh hoạt kết hợp vòng lặp `for` với điều kiện `if`.',
          'Tận dụng các hàm tính toán nhanh của Python: `sum()`, `len()`, `max()`, `min()`.',
          'Viết mã sáng sủa, có chú thích giải thích rõ ràng.'
        ]
      }
    ]
  },

  // Bài 33: Nghề thiết kế đồ hoạ máy tính
  33: {
    objectives: [
      {
        id: 'obj_10_33_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Vai trò & các mảng nghề thiết kế đồ họa',
        description: 'Mô tả được công việc của nhà thiết kế đồ họa (Graphic Designer): thiết kế nhận diện thương hiệu, đồ họa quảng cáo, thiết kế giao diện UI/UX và đồ họa hoạt hình 3D.',
        iconName: 'Briefcase'
      },
      {
        id: 'obj_10_33_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định năng lực & công cụ cần trau dồi',
        description: 'Chỉ rõ các phần mềm đồ họa chuyên nghiệp (Photoshop, Illustrator, Inkscape, Blender) và các kỹ năng thẩm mỹ (bố cục, màu sắc, font chữ) cần rèn luyện.',
        iconName: 'PenTool'
      },
      {
        id: 'obj_10_33_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Định hướng nghề nghiệp sáng tạo số',
        description: 'Khám phá tiềm năng của bản thân trong lĩnh vực mỹ thuật số, nuôi dưỡng đam mê sáng tạo và tôn trọng bản quyền tác giả trong thiết kế.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_33_1',
        title: '1. Vai trò và công việc của nghề thiết kế đồ họa',
        subtitle: 'Truyền tải thông điệp bằng nghệ thuật thị giác kỹ thuật số',
        iconName: 'Briefcase',
        keyPoints: [
          'Khái niệm: Thiết kế đồ họa (Graphic Design) là nghệ thuật phối hợp hình ảnh, màu sắc và kiểu chữ để truyền đạt thông điệp, ý tưởng đến người xem một cách ấn tượng, hấp dẫn nhất.',
          'Các lĩnh vực chuyên môn phong phú:',
          '  - Thiết kế nhận diện thương hiệu: Logo, danh thiếp, bảng biển công ty.',
          '  - Thiết kế quảng cáo & tiếp thị: Poster, banner mạng xã hội, tờ rơi, bao bì sản phẩm.',
          '  - Thiết kế giao diện người dùng (UI/UX): Thiết kế giao diện app điện thoại, trang web đẹp mắt, dễ bấm.',
          '  - Thiết kế đồ họa chuyển động & Game: Hoạt hình 2D/3D, kỹ xảo điện ảnh.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Nhận diện thương hiệu', desc: 'Logo, bao bì, cẩm nang phong cách công ty' },
            { label: 'Thiết kế giao diện UI/UX', desc: 'Giao diện ứng dụng di động và website' },
            { label: 'Đồ họa truyền thông', desc: 'Poster, banner quảng cáo mạng xã hội' }
          ]
        },
        emCanNho: [
          'Nhà thiết kế đồ họa kết hợp công nghệ máy tính và cảm quan nghệ thuật.',
          'Nhu cầu tuyển dụng thiết kế đồ họa cực lớn trong kỷ nguyên truyền thông số.',
          'Mỗi ấn phẩm đồ họa đều mang một thông điệp truyền thông cụ thể.'
        ]
      },
      {
        id: 'tab_10_33_2',
        title: '2. Yêu cầu năng lực và cơ hội việc làm',
        subtitle: 'Hành trang cần chuẩn bị để trở thành một Graphic Designer',
        iconName: 'Award',
        keyPoints: [
          'Kiến thức chuyên môn: Nguyên lý thị giác, quy tắc phối màu (Color Theory), phân cấp thông tin và nghệ thuật chữ (Typography).',
          'Kỹ năng công cụ: Thành thạo các phần mềm đồ họa vector (Inkscape, Adobe Illustrator) và đồ họa điểm ảnh (GIMP, Photoshop).',
          'Kỹ năng mềm: Khả năng lắng nghe thấu hiểu ý muốn của khách hàng, tính kiên nhẫn khi sửa đổi thiết kế và tư duy sáng tạo không ngừng.',
          'Cơ hội việc làm: Làm việc tại các công ty quảng cáo, tòa soạn báo chí, studio game, hoặc làm tự do (Freelancer) trên toàn cầu.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nhóm năng lực', 'Kỹ năng cụ thể', 'Tầm quan trọng'],
          rows: [
            ['Tư duy thẩm mỹ', 'Bố cục, quy tắc 1/3, phối màu', 'Yếu tố quyết định vẻ đẹp của ấn phẩm'],
            ['Sử dụng công cụ', 'Inkscape, Illustrator, Photoshop', 'Vũ khí để hiện thực hóa ý tưởng'],
            ['Giao tiếp & Đạo đức', 'Tôn trọng bản quyền, lắng nghe', 'Xây dựng uy tín nghề nghiệp lâu dài']
          ]
        },
        emCanNho: [
          'Thành thạo công cụ đồ họa vector và raster là yêu cầu cơ bản.',
          'Tư duy thẩm mỹ và sự thấu hiểu người dùng mới là yếu tố quyết định đỉnh cao.',
          'Nghề thiết kế cho phép làm việc tự do (Freelancer) với thu nhập linh hoạt.'
        ]
      }
    ]
  },

  // Bài 34: Nghề phát triển phần mềm
  34: {
    objectives: [
      {
        id: 'obj_10_34_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình phát triển phần mềm chuẩn',
        description: 'Trình bày được các giai đoạn trong vòng đời phát triển phần mềm (SDLC): Phân tích yêu cầu -> Thiết kế kiến trúc -> Lập trình (Coding) -> Kiểm thử (Testing) -> Triển khai & Bảo trì.',
        iconName: 'Workflow'
      },
      {
        id: 'obj_10_34_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện các vị trí nghề nghiệp IT',
        description: 'Phân biệt được vai trò của Lập trình viên Front-end (Giao diện), Back-end (Xử lý dữ liệu), Kỹ sư kiểm thử phần mềm (Tester/QA) và Trưởng dự án (Project Manager).',
        iconName: 'Users'
      },
      {
        id: 'obj_10_34_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Định hướng tương lai công nghệ số',
        description: 'Nuôi dưỡng niềm đam mê kỹ thuật lập trình, rèn luyện tinh thần học tập suốt đời để sẵn sàng thích ứng với sự đổi thay của thế giới công nghệ.',
        iconName: 'Compass'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_34_1',
        title: '1. Quy trình phát triển phần mềm và nghề lập trình viên',
        subtitle: 'Từ ý tưởng trên giấy đến sản phẩm phần mềm triệu người dùng',
        iconName: 'Workflow',
        keyPoints: [
          'Khái niệm: Phát triển phần mềm (Software Engineering) là quá trình xây dựng, thiết kế, lập trình, kiểm thử và bảo trì các ứng dụng phần mềm theo phương pháp khoa học.',
          'Vòng đời phát triển phần mềm (SDLC) gồm 5 giai đoạn:',
          '  1. Khảo sát & Phân tích yêu cầu: Tìm hiểu người dùng cần phần mềm làm gì.',
          '  2. Thiết kế hệ thống: Thiết kế giao diện và cơ sở dữ liệu.',
          '  3. Lập trình (Coding): Kỹ sư phần mềm viết mã nguồn theo thiết kế.',
          '  4. Kiểm thử (Testing): Tìm và sửa sạch các lỗi bug trước khi xuất xưởng.',
          '  5. Triển khai & Bảo trì: Cài đặt cho khách hàng và nâng cấp tính năng mới.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Khảo sát yêu cầu', desc: 'Lắng nghe nhu cầu của khách hàng' },
            { label: '2. Lập trình (Coding)', desc: 'Xây dựng mã nguồn bằng Python, Java, C++' },
            { label: '3. Kiểm thử & Vận hành', desc: 'Đảm bảo phần mềm chạy ổn định, an toàn' }
          ]
        },
        emCanNho: [
          'Lập trình chỉ là một khâu trong quy trình phát triển phần mềm toàn diện.',
          'Quy trình chuẩn giúp sản phẩm chất lượng, ít lỗi và đúng tiến độ.',
          'Làm việc nhóm theo phương pháp linh hoạt (Agile/Scrum) là chuẩn mực hiện đại.'
        ]
      },
      {
        id: 'tab_10_34_2',
        title: '2. Các kỹ năng cần thiết và định hướng nghề nghiệp',
        subtitle: 'Chân dung của một Kỹ sư phần mềm tương lai',
        iconName: 'Compass',
        keyPoints: [
          'Các vị trí chuyên môn trong ngành phần mềm:',
          '  - Lập trình viên Front-end: Xây dựng giao diện web/app người dùng nhìn thấy.',
          '  - Lập trình viên Back-end: Xây dựng bộ não máy chủ và cơ sở dữ liệu.',
          '  - Kỹ sư kiểm thử (Tester/QA): Kiểm tra chất lượng và săn tìm lỗi phần mềm.',
          '  - Kỹ sư Trí tuệ nhân tạo (AI Engineer): Huấn luyện các mô hình học máy.',
          'Kỹ năng bắt buộc: Tư duy giải thuật logic, khả năng tự học công nghệ mới liên tục, tiếng Anh chuyên ngành tốt và tinh thần làm việc nhóm gắn kết.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Vị trí công việc', 'Nhiệm vụ chính', 'Công nghệ thường dùng'],
          rows: [
            ['Front-end Developer', 'Làm giao diện web tương tác', 'HTML, CSS, JavaScript, React'],
            ['Back-end Developer', 'Xử lý logic nghiệp vụ và dữ liệu', 'Python, Java, Node.js, SQL'],
            ['Tester / QA', 'Kiểm thử bắt lỗi phần mềm', 'Selenium, Postman, Viết Test case'],
            ['AI / Data Scientist', 'Phân tích dữ liệu lớn và huấn luyện AI', 'Python, PyTorch, TensorFlow']
          ]
        },
        emCanNho: [
          'Ngành phần mềm có nhiều vị trí đa dạng phù hợp với sở trường của từng bạn.',
          'Khả năng tự học và ngoại ngữ tiếng Anh là hai chìa khóa quyết định thành công.',
          'Tư duy giải thuật học từ lớp 10 chính là bệ phóng vững chắc cho tương lai số.'
        ]
      }
    ]
  }
};
