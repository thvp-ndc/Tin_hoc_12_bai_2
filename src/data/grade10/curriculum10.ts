import { Objective, KnowledgeTab } from '../../types/lesson';

export interface LessonCurriculum10 {
  objectives: Objective[];
  knowledge: KnowledgeTab[];
}

export const GRADE_10_CURRICULUM: Record<number, LessonCurriculum10> = {
  // Bài 1: Thông tin và xử lí thông tin
  1: {
    objectives: [
      {
        id: 'obj_10_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt Thông tin và Dữ liệu',
        description: 'Trình bày được sự khác biệt giữa dữ liệu (data), thông tin (information) và tri thức (knowledge); nêu được các dạng thông tin cơ bản.',
        iconName: 'Info'
      },
      {
        id: 'obj_10_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Mô tả quá trình xử lí thông tin',
        description: 'Mô tả được các bước trong quy trình xử lí thông tin của máy tính: Thu nhận -> Lưu trữ -> Xử lý -> Truyền tải.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_10_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức chọn lọc thông tin xác thực',
        description: 'Hình thành thái độ cẩn trọng, tôn trọng sự thật và biết chọn lọc thông tin đáng tin cậy trong học tập và đời sống.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_1_1',
        title: '1. Thông tin và dữ liệu',
        subtitle: 'Sự chuyển hóa từ dữ liệu thô thành thông tin và tri thức',
        iconName: 'Database',
        keyPoints: [
          'Dữ liệu (Data): Là các số liệu, văn bản, hình ảnh, âm thanh thu thập được từ thế giới khách quan nhưng chưa được đặt vào ngữ cảnh mang ý nghĩa trọn vẹn.',
          'Thông tin (Information): Là dữ liệu đã được xử lý, tổ chức và liên kết để mang lại ý nghĩa rõ ràng cho con người.',
          'Tri thức (Knowledge): Là sự hiểu biết sâu sắc đúc kết từ thông tin giúp con người đưa ra các quyết định hành động đúng đắn.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Cấp độ', 'Bản chất', 'Ví dụ thực tế'],
          rows: [
            ['Dữ liệu (Data)', 'Số liệu thô, tín hiệu vật lý', 'Các con số: 38.5, 39.0, 39.5'],
            ['Thông tin (Information)', 'Dữ liệu có ngữ cảnh, ý nghĩa', 'Bệnh nhân đang bị sốt cao 39°C'],
            ['Tri thức (Knowledge)', 'Hiểu biết để ra quyết định', 'Cho uống thuốc hạ sốt và chườm ấm']
          ]
        },
        emCanNho: [
          'Dữ liệu là đầu vào thô; Thông tin là dữ liệu đã được gán ý nghĩa.',
          'Tri thức là sự hiểu biết từ thông tin giúp con người ra quyết định.',
          'Thông tin có tính độc lập tương đối với phương tiện lưu trữ.'
        ]
      },
      {
        id: 'tab_10_1_2',
        title: '2. Quá trình xử lí thông tin',
        subtitle: 'Bốn giai đoạn luân chuyển thông tin của máy tính',
        iconName: 'Cpu',
        keyPoints: [
          '1. Thu nhận thông tin (Input): Tiếp nhận dữ liệu từ thế giới bên ngoài thông qua các thiết bị ngoại vi (bàn phím, chuột, camera, cảm biến).',
          '2. Lưu trữ thông tin (Storage): Ghi nhớ dữ liệu trên các thiết bị nhớ (RAM, ROM, SSD, HDD) để dùng cho hiện tại hoặc lâu dài.',
          '3. Xử lý thông tin (Processing): Bộ xử lý trung tâm (CPU) thực hiện các phép toán số học và logic để biến đổi dữ liệu thành thông tin hữu ích.',
          '4. Truyền tải / Xuất thông tin (Output): Trả kết quả về cho con người qua màn hình, loa, máy in hoặc gửi qua mạng Internet.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Thu nhận (Input)', desc: 'Bàn phím, chuột, cảm biến, camera' },
            { label: '2. Lưu trữ (Storage)', desc: 'Bộ nhớ trong RAM và bộ nhớ ngoài SSD' },
            { label: '3. Xử lý (Processing)', desc: 'CPU tính toán số học và logic' },
            { label: '4. Truyền tải (Output)', desc: 'Màn hình, máy in, mạng Internet' }
          ]
        },
        emCanNho: [
          'Quy trình xử lí thông tin: Thu nhận -> Lưu trữ -> Xử lý -> Truyền tải.',
          'Mọi hệ thống máy tính từ siêu máy tính đến điện thoại đều tuân theo chu trình 4 khâu này.',
          'Khâu Xử lý (Processing) là nơi tạo ra giá trị mới của thông tin.'
        ]
      },
      {
        id: 'tab_10_1_3',
        title: '3. Vai trò của máy tính trong xử lí thông tin',
        subtitle: 'Công cụ giải phóng sức lao động trí óc của nhân loại',
        iconName: 'Laptop',
        keyPoints: [
          'Tốc độ xử lý siêu việt: Máy tính có thể thực hiện hàng tỷ phép tính mỗi giây (GHz, Teraflops).',
          'Khả năng lưu trữ khổng lồ: Lưu trữ toàn bộ tri thức thư viện nhân loại trong ổ đĩa nhỏ gọn.',
          'Làm việc không mệt mỏi: Hoạt động liên tục 24/7 với độ chính xác tuyệt đối, không bị chi phối bởi cảm xúc hay sự mệt mỏi.',
          'Kết nối toàn cầu: Chia sẻ thông tin xuyên biên giới chỉ trong tích tắc qua mạng Internet.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tốc độ cực cao', desc: 'Hàng tỷ phép tính trong một giây' },
            { label: 'Lưu trữ khổng lồ', desc: 'Hàng Terabyte dữ liệu thu nhỏ trong thẻ nhớ' },
            { label: 'Tự động hóa hoàn hảo', desc: 'Vận hành dây chuyền sản xuất và phân tích số liệu' }
          ]
        },
        emCanNho: [
          'Máy tính là công cụ xử lí thông tin đa năng, nhanh chóng và chính xác nhất.',
          'Máy tính giúp tự động hóa các quy trình quản lý, sản xuất và nghiên cứu khoa học.',
          'Tuy máy tính xử lý nhanh nhưng con người vẫn luôn đóng vai trò quyết định.'
        ]
      }
    ]
  },

  // Bài 2: Vai trò của thiết bị thông minh và tin học đối với xã hội
  2: {
    objectives: [
      {
        id: 'obj_10_2_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm & đặc điểm thiết bị thông minh',
        description: 'Trình bày được định nghĩa thiết bị thông minh (Smart Devices) và nhận diện được các đặc trưng: kết nối Internet, có hệ điều hành, có cảm biến và khả năng tự động xử lý.',
        iconName: 'Smartphone'
      },
      {
        id: 'obj_10_2_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Đánh giá tác động của tin học',
        description: 'Phân tích được những thay đổi sâu sắc của tin học đối với các lĩnh vực: giáo dục trực tuyến, y tế thông minh, giao thông và thương mại điện tử.',
        iconName: 'Globe'
      },
      {
        id: 'obj_10_2_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Trách nhiệm công dân số',
        description: 'Nhận thức được mặt trái của sự phụ thuộc thiết bị thông minh và có thái độ sử dụng công nghệ lành mạnh, cân bằng cuộc sống.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_2_1',
        title: '1. Các thiết bị thông minh',
        subtitle: 'Internet vạn vật (IoT) và các thiết bị số thông minh xung quanh ta',
        iconName: 'Smartphone',
        keyPoints: [
          'Khái niệm: Thiết bị thông minh là thiết bị điện tử có khả năng kết nối mạng, tích hợp bộ vi xử lý và cảm biến để tự động thu nhận dữ liệu, tương tác với môi trường và thực hiện các tác vụ phức tạp.',
          'Các ví dụ tiêu biểu: Điện thoại thông minh (Smartphone), Đồng hồ thông minh (Smartwatch), Robot hút bụi, Nhà thông minh (Smart Home) tự bật tắt đèn và điều hòa.',
          'Đặc điểm then chốt: Có khả năng giao tiếp không dây (Wi-Fi, Bluetooth), thu thập dữ liệu qua cảm biến và có thể điều khiển từ xa qua ứng dụng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cảm biến (Sensors)', desc: 'Đo nhiệt độ, độ ẩm, chuyển động, ánh sáng' },
            { label: 'Vi xử lý thông minh', desc: 'Phân tích dữ liệu và ra lệnh điều khiển' },
            { label: 'Kết nối mạng IoT', desc: 'Đồng bộ dữ liệu đám mây và điều khiển từ xa' }
          ]
        },
        emCanNho: [
          'Thiết bị thông minh có vi xử lý, cảm biến và khả năng kết nối mạng.',
          'IoT (Internet of Things) kết nối vạn vật vào không gian mạng thông minh.',
          'Thiết bị thông minh giúp tối ưu hóa cuộc sống và giải phóng sức lao động.'
        ]
      },
      {
        id: 'tab_10_2_2',
        title: '2. Vai trò của tin học đối với xã hội',
        subtitle: 'Động lực chuyển dịch sang nền kinh tế tri thức và xã hội số',
        iconName: 'Globe',
        keyPoints: [
          'Trong Giáo dục: Học tập trực tuyến (E-learning), kho học liệu mở, thi cử và điểm danh tự động.',
          'Trong Y tế: Bệnh án điện tử, khám chữa bệnh từ xa (Telemedicine), phẫu thuật bằng robot.',
          'Trong Kinh tế & Thương mại: Thanh toán không dùng tiền mặt (QR Code, ví điện tử), sàn thương mại điện tử, dịch vụ đặt xe công nghệ.',
          'Trong Quản lý nhà nước: Chính phủ điện tử, cổng dịch vụ công trực tuyến, căn cước công dân gắn chip (VNeID).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Lĩnh vực', 'Phương thức truyền thống', 'Ứng dụng Tin học hiện đại'],
          rows: [
            ['Hành chính', 'Xếp hàng nộp hồ sơ giấy tờ', 'Cổng dịch vụ công trực tuyến VNeID'],
            ['Thanh toán', 'Dùng tiền mặt trực tiếp', 'Quét mã VietQR, ví điện tử, Mobile Banking'],
            ['Học tập', 'Chỉ học trực tiếp trên lớp', 'Lớp học số, bài giảng tương tác đa nền tảng']
          ]
        },
        emCanNho: [
          'Tin học là động lực chính thúc đẩy cuộc cách mạng công nghiệp lần thứ tư.',
          'Thay đổi căn bản phương thức làm việc, học tập, giao tiếp và quản lý xã hội.',
          'Cần chủ động trau dồi kỹ năng số để trở thành công dân toàn cầu thời đại mới.'
        ]
      }
    ]
  },

  // Bài 3: Một số kiểu dữ liệu và dữ liệu văn bản
  3: {
    objectives: [
      {
        id: 'obj_10_3_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các kiểu dữ liệu trong tin học',
        description: 'Kể tên và phân biệt được các kiểu dữ liệu cơ bản: số nguyên, số thực, ký tự, lôgic và dữ liệu đa phương tiện.',
        iconName: 'Binary'
      },
      {
        id: 'obj_10_3_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Hiểu bảng mã ASCII và Unicode',
        description: 'Giải thích được nguyên lý mã hóa ký tự thành dãy bit; phân biệt bảng mã chuẩn ASCII (8-bit) và bảng mã quốc tế Unicode (UTF-8) hỗ trợ tiếng Việt.',
        iconName: 'Code'
      },
      {
        id: 'obj_10_3_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng chuẩn hóa dữ liệu tiếng Việt',
        description: 'Ý thức sử dụng bảng mã chuẩn Unicode trong soạn thảo văn bản để bảo đảm tính thống nhất và không bị lỗi font chữ.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_3_1',
        title: '1. Một số kiểu dữ liệu trong tin học',
        subtitle: 'Phân loại dữ liệu để máy tính xử lý phù hợp',
        iconName: 'Database',
        keyPoints: [
          'Kiểu dữ liệu số (Numeric): Gồm số nguyên (Integer) như số đếm, tuổi tác; và số thực (Float/Real) như điểm số, chiều cao, số đo.',
          'Kiểu dữ liệu văn bản (Text / String): Ký tự đơn lẻ hoặc chuỗi ký tự (họ tên, địa chỉ).',
          'Kiểu dữ liệu lôgic (Boolean): Chỉ nhận một trong hai giá trị Đúng (True) hoặc Sai (False).',
          'Dữ liệu đa phương tiện (Multimedia): Hình ảnh, âm thanh, video (đều được số hóa thành dãy bit 0 và 1).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Kiểu dữ liệu', 'Ý nghĩa', 'Ví dụ cụ thể'],
          rows: [
            ['Số nguyên (Integer)', 'Số đếm không có phần thập phân', '1, 10, 2026, -5'],
            ['Số thực (Float)', 'Số có phần lẻ thập phân', '8.75, 3.14159, -0.5'],
            ['Xâu ký tự (String)', 'Chuỗi văn bản đặt trong dấu nháy', '\'Nguyễn Văn An\', \'Hà Nội\''],
            ['Lôgic (Boolean)', 'Giá trị chân lý', 'True (Đúng), False (Sai)']
          ]
        },
        emCanNho: [
          'Mỗi kiểu dữ liệu có miền giá trị và các phép toán hợp lệ riêng biệt.',
          'Mọi kiểu dữ liệu khi lưu vào máy tính đều được chuyển đổi thành dãy bit nhị phân.',
          'Chọn đúng kiểu dữ liệu giúp tiết kiệm bộ nhớ và tránh sai sót khi tính toán.'
        ]
      },
      {
        id: 'tab_10_3_2',
        title: '2. Biểu diễn dữ liệu văn bản (Bảng mã ASCII và Unicode)',
        subtitle: 'Biến từng ký tự chữ cái thành các bit 0 và 1',
        iconName: 'Code',
        keyPoints: [
          'Bảng mã ASCII: Bộ mã chuẩn của Mỹ sử dụng 8 bit (1 byte) để mã hóa 256 ký tự (ký tự chữ tiếng Anh, số và dấu hiệu điều khiển). Ký tự \'A\' có mã ASCII thập phân là 65 (nhị phân: `01000001`), \'a\' là 97.',
          'Hạn chế của ASCII: Chỉ có 256 mã nên không thể chứa hết bảng chữ cái có dấu của tiếng Việt, tiếng Trung, tiếng Nhật, tiếng Nga.',
          'Bảng mã Unicode: Bộ mã quốc tế dùng từ 1 đến 4 byte (phổ biến nhất là UTF-8), mã hóa được hơn 1 triệu ký tự của tất cả các ngôn ngữ trên thế giới.',
          'Tiếng Việt trên máy tính: Bắt buộc dùng bảng mã Unicode UTF-8 để hiển thị trọn vẹn mọi nguyên âm có dấu.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Ký tự \'A\'', desc: 'Mã thập phân: 65 -> Mã nhị phân: 01000001 (ASCII)' },
            { label: 'Ký tự \'B\'', desc: 'Mã thập phân: 66 -> Mã nhị phân: 01000010 (ASCII)' },
            { label: 'Ký tự \'Ă\', \'Ê\', \'Ô\'', desc: 'Mã hóa đa byte trong bảng mã quốc tế Unicode UTF-8' }
          ]
        },
        emCanNho: [
          'ASCII dùng 8 bit mã hóa 256 ký tự tiếng Anh cơ bản.',
          'Unicode là chuẩn quốc tế thống nhất mã hóa mọi ngôn ngữ trên toàn cầu.',
          'Luôn chọn bảng mã Unicode và kiểu gõ Telex khi soạn thảo tiếng Việt.'
        ]
      }
    ]
  },

  // Bài 4: Hệ nhị phân và dữ liệu số nguyên
  4: {
    objectives: [
      {
        id: 'obj_10_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của Hệ nhị phân (Binary)',
        description: 'Hiểu được nguyên lý hệ đếm cơ số 2 chỉ gồm hai chữ số 0 và 1, tương ứng với hai trạng thái vật lý đóng/mở của bóng bán dẫn transistor.',
        iconName: 'Binary'
      },
      {
        id: 'obj_10_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Chuyển đổi giữa hệ thập phân và nhị phân',
        description: 'Thực hiện thành thạo việc đổi một số nguyên từ hệ 10 sang hệ 2 (phép chia liên tiếp cho 2 lấy dư) và ngược lại (tính tổng lũy thừa của 2).',
        iconName: 'Calculator'
      },
      {
        id: 'obj_10_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy toán học máy tính',
        description: 'Hình thành tư duy biểu diễn số học chính xác, nhận thức được giới hạn tràn số khi biểu diễn số nguyên trên bộ nhớ máy tính.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_4_1',
        title: '1. Hệ nhị phân và các phép toán cơ bản',
        subtitle: 'Hệ đếm cơ số 2 - Ngôn ngữ gốc của phần cứng máy tính',
        iconName: 'Binary',
        keyPoints: [
          'Hệ nhị phân (Base 2): Chỉ sử dụng 2 chữ số là 0 và 1. Mỗi chữ số nhị phân gọi là một bit (Binary Digit).',
          'Lý do máy tính dùng hệ nhị phân: Rất dễ thực hiện bằng các linh kiện điện tử (mức điện áp cao = 1, mức điện áp thấp = 0; có dòng điện = 1, ngắt mạch = 0).',
          'Các phép toán số học nhị phân: $0+0=0$, $0+1=1$, $1+0=1$, $1+1=10_2$ (viết 0 nhớ 1 sang hàng bên trái).',
          'Quy đổi nhị phân sang thập phân: Nhân từng chữ số với lũy thừa giảm dần của 2. Ví dụ: $1011_2 = 1 \\times 2^3 + 0 \\times 2^2 + 1 \\times 2^1 + 1 \\times 2^0 = 8 + 0 + 2 + 1 = 11_{10}$.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Số Thập phân (Hệ 10)', 'Số Nhị phân (Hệ 2)', 'Cách phân tích lũy thừa'],
          rows: [
            ['0', '0000', '0'],
            ['1', '0001', '2^0 = 1'],
            ['2', '0010', '2^1 = 2'],
            ['5', '0101', '2^2 + 2^0 = 4 + 1 = 5'],
            ['10', '1010', '2^3 + 2^1 = 8 + 2 = 10'],
            ['15', '1111', '2^3 + 2^2 + 2^1 + 2^0 = 8+4+2+1=15']
          ]
        },
        emCanNho: [
          'Hệ nhị phân chỉ dùng 2 ký hiệu 0 và 1; mỗi vị trí có trọng số là lũy thừa của 2.',
          'Đổi từ 10 sang 2: Chia liên tiếp cho 2 và lấy phần dư theo chiều ngược lại.',
          'Đổi từ 2 sang 10: Tính tổng các tích chữ số nhị phân nhân với $2^k$.'
        ]
      },
      {
        id: 'tab_10_4_2',
        title: '2. Biểu diễn số nguyên trong máy tính',
        subtitle: 'Số nguyên không dấu và số nguyên có dấu (Mã bù hai)',
        iconName: 'Cpu',
        keyPoints: [
          'Biểu diễn trong 1 byte (8 bit):',
          '  - Số nguyên không dấu (Unsigned): Biểu diễn các số từ $0$ đến $2^8 - 1 = 255$.',
          '  - Số nguyên có dấu (Signed): Dùng bit ngoài cùng bên trái làm bit dấu ($0$ là dương, $1$ là âm), biểu diễn từ $-128$ đến $+127$.',
          'Mã bù hai (Two\'s Complement): Kỹ thuật biểu diễn số âm bằng cách đảo tất cả các bit của số dương (0 thành 1, 1 thành 0) rồi cộng thêm 1.',
          'Hiện tượng tràn số (Overflow): Xảy ra khi kết quả tính toán vượt quá giới hạn lưu trữ của số lượng bit cấp phát.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1 Byte = 8 Bit', desc: 'Lưu trữ từ 00000000 đến 11111111' },
            { label: 'Bit dấu (Most Significant Bit)', desc: 'Bit 0 ở đầu là số dương, Bit 1 ở đầu là số âm' },
            { label: 'Mã bù hai', desc: 'Quy tắc giúp CPU dùng chung mạch cộng cho cả phép trừ' }
          ]
        },
        emCanNho: [
          '1 Byte gồm 8 bit; số nguyên có thể biểu diễn bằng 1, 2, 4 hoặc 8 byte.',
          'Số âm được biểu diễn dưới dạng mã bù hai trong phần cứng máy tính.',
          'Cần lưu ý giới hạn số lượng bit để tránh lỗi tràn số khi lập trình.'
        ]
      }
    ]
  },

  // Bài 5: Dữ liệu lôgic
  5: {
    objectives: [
      {
        id: 'obj_10_5_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các giá trị & mệnh đề lôgic',
        description: 'Hiểu khái niệm mệnh đề logic chỉ nhận một trong hai chân trị Đúng (True / 1) hoặc Sai (False / 0).',
        iconName: 'ToggleRight'
      },
      {
        id: 'obj_10_5_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hiện các phép toán lôgic AND, OR, NOT',
        description: 'Lập bảng chân trị và tính toán chính xác kết quả của biểu thức logic kết hợp các phép toán VÀ (AND), HOẶC (OR), PHỦ ĐỊNH (NOT).',
        iconName: 'Cpu'
      },
      {
        id: 'obj_10_5_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy phản biện chặt chẽ',
        description: 'Rèn luyện khả năng lập luận logic, phán đoán sự việc dựa trên điều kiện chính xác, không suy diễn cảm tính.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_5_1',
        title: '1. Dữ liệu lôgic và các giá trị True/False',
        subtitle: 'Đại số Boole - Cơ sở của các cổng logic trong vi mạch máy tính',
        iconName: 'ToggleRight',
        keyPoints: [
          'Biến logic: Là biến chỉ nhận một trong hai giá trị Đúng (True - biểu diễn bằng 1) hoặc Sai (False - biểu diễn bằng 0).',
          'Mệnh đề logic: Là câu khẳng định chỉ có thể đúng hoặc sai, không thể vừa đúng vừa sai. Ví dụ: "Hà Nội là thủ đô của Việt Nam" (True); "5 là số chẵn" (False).',
          'Câu không phải mệnh đề logic: Câu hỏi, câu cảm thán, câu cầu khiến ("Hôm nay trời đẹp quá!").'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Câu phát biểu', 'Có phải mệnh đề logic?', 'Giá trị chân lý'],
          rows: [
            ['"Số 10 chia hết cho 2"', 'Là mệnh đề logic', 'True (Đúng)'],
            ['"Mặt trời mọc ở hướng Tây"', 'Là mệnh đề logic', 'False (Sai)'],
            ['"Bạn học bài chưa?"', 'KHÔNG phải mệnh đề logic', 'Không xác định']
          ]
        },
        emCanNho: [
          'Dữ liệu logic chỉ nhận 2 giá trị: True (1) hoặc False (0).',
          'Mệnh đề logic là câu khẳng định mang tính chân lý xác định Đúng hoặc Sai.',
          'Các cổng logic phần cứng (AND gate, OR gate) hoạt động dựa trên đại số Boole.'
        ]
      },
      {
        id: 'tab_10_5_2',
        title: '2. Các phép toán lôgic cơ bản (AND, OR, NOT)',
        subtitle: 'Bảng chân lý của ba phép toán logic nền tảng',
        iconName: 'Sliders',
        keyPoints: [
          '1. Phép toán AND (Phép hội / VÀ): Kết quả chỉ đúng (True) khi CẢ HAI mệnh đề thành phần đều đúng.',
          '2. Phép toán OR (Phép tuyển / HOẶC): Kết quả đúng (True) khi CÓ ÍT NHẤT MỘT trong hai mệnh đề đúng.',
          '3. Phép toán NOT (Phép phủ định): Đảo ngược giá trị chân lý: NOT True = False; NOT False = True.',
          'Ứng dụng: Dùng để xây dựng các điều kiện rẽ nhánh (if) và lặp (while) trong lập trình máy tính.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['A', 'B', 'A AND B (VÀ)', 'A OR B (HOẶC)', 'NOT A (PHỦ ĐỊNH)'],
          rows: [
            ['False (0)', 'False (0)', 'False (0)', 'False (0)', 'True (1)'],
            ['False (0)', 'True (1)', 'False (0)', 'True (1)', 'True (1)'],
            ['True (1)', 'False (0)', 'False (0)', 'True (1)', 'False (0)'],
            ['True (1)', 'True (1)', 'True (1)', 'True (1)', 'False (0)']
          ]
        },
        emCanNho: [
          '`AND`: Đúng khi tất cả cùng đúng.',
          '`OR`: Đúng khi có ít nhất một điều kiện đúng.',
          '`NOT`: Phủ định, đổi đúng thành sai và ngược lại.'
        ]
      }
    ]
  }
};

import { GRADE_10_CURRICULUM_PART2 } from './curriculum10_part2';
import { GRADE_10_CURRICULUM_PART3 } from './curriculum10_part3';
import { GRADE_10_CURRICULUM_PART4 } from './curriculum10_part4';

export const ALL_GRADE_10_CURRICULUM: Record<number, LessonCurriculum10> = {
  ...GRADE_10_CURRICULUM,
  ...GRADE_10_CURRICULUM_PART2,
  ...GRADE_10_CURRICULUM_PART3,
  ...GRADE_10_CURRICULUM_PART4
};

