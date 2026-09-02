import { Objective, KnowledgeTab } from '../../types/lesson';

export interface LessonCurriculum12 {
  objectives: Objective[];
  knowledge: KnowledgeTab[];
}

export const GRADE_12_CURRICULUM: Record<number, LessonCurriculum12> = {
  // Bài 1: Làm quen với Trí tuệ nhân tạo (AI)
  1: {
    objectives: [
      {
        id: 'obj_12_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm & phân loại AI',
        description: 'Trình bày được định nghĩa Trí tuệ nhân tạo (AI), phân biệt được AI hẹp (Narrow AI) và AI tổng quát (AGI); nêu được các đặc trưng cốt lõi của AI.',
        iconName: 'Brain'
      },
      {
        id: 'obj_12_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện ứng dụng AI trong đời sống',
        description: 'Nhận diện và phân biệt được phần mềm có ứng dụng AI (học từ dữ liệu, nhận diện hình ảnh, giọng nói) với phần mềm tự động hóa theo quy tắc cứng (Rule-based).',
        iconName: 'Cpu'
      },
      {
        id: 'obj_12_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy công nghệ thời đại số',
        description: 'Có thái độ chủ động đón nhận công nghệ AI như một trợ lý đắc lực, đồng thời ý thức được tính minh bạch và trách nhiệm khi sử dụng AI.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_1_1',
        title: '1. Khái niệm Trí tuệ nhân tạo',
        subtitle: 'Định nghĩa khoa học và lịch sử hình thành AI',
        iconName: 'BookOpen',
        keyPoints: [
          'Trí tuệ nhân tạo (Artificial Intelligence - AI): Ngành khoa học máy tính nghiên cứu cách làm cho máy móc có được năng lực trí tuệ của con người (học tập, suy luận, tự thích nghi, hiểu ngôn ngữ và nhận thức thị giác).',
          'Lịch sử: Ra đời chính thức tại hội thảo Dartmouth năm 1956 do John McCarthy và các nhà khoa học khởi xướng.',
          'Phép thử Turing (Turing Test): Thước đo kinh điển do Alan Turing đề xuất năm 1950 để đánh giá trí thông minh của máy tính so với con người.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thu nhận dữ liệu', desc: 'Hình ảnh, văn bản, âm thanh từ môi trường' },
            { label: 'Học máy (Machine Learning)', desc: 'Huấn luyện mô hình tìm kiếm quy luật' },
            { label: 'Ra quyết định AI', desc: 'Dự đoán, phân loại, sáng tạo nội dung' }
          ]
        },
        emCanNho: [
          'AI là ngành khoa học tạo ra máy móc mô phỏng trí tuệ con người.',
          'Năm 1956 tại hội thảo Dartmouth thuật ngữ AI chính thức ra đời.',
          'Cốt lõi của AI hiện đại là khả năng tự học hỏi từ dữ liệu lớn.'
        ]
      },
      {
        id: 'tab_12_1_2',
        title: '2. Phân loại AI (AI hẹp và AI tổng quát)',
        subtitle: 'Các cấp độ phát triển của trí tuệ nhân tạo',
        iconName: 'Layers',
        keyPoints: [
          'AI hẹp (Narrow / Weak AI): Được thiết kế và huấn luyện để giải quyết xuất sắc một tác vụ cụ thể duy nhất (Ví dụ: FaceID nhận diện khuôn mặt, AlphaGo chơi cờ vây, Siri nhận diện giọng nói). Toàn bộ AI hiện nay đều thuộc AI hẹp.',
          'AI tổng quát (General AI / AGI): Có khả năng hiểu, học hỏi và tư duy toàn diện như con người ở bất kỳ lĩnh vực nào (Hiện vẫn đang là mục tiêu nghiên cứu tương lai).',
          'Siêu trí tuệ nhân tạo (Super AI): Trí thông minh vượt xa toàn bộ nhân loại trong mọi lĩnh vực khoa học và nghệ thuật.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Phần mềm truyền thống', 'Trí tuệ nhân tạo (AI hẹp)'],
          rows: [
            ['Cách thức hoạt động', 'Theo thuật toán và quy tắc cứng If-Else', 'Học các mẫu hình ẩn từ tập dữ liệu lớn'],
            ['Khả năng thích ứng', 'Chỉ chạy đúng lệnh, gặp ngoại lệ là lỗi', 'Tự điều chỉnh và nâng cao độ chính xác'],
            ['Ví dụ thực tế', 'Bảng tính Excel, máy tính bỏ túi', 'Xe tự lái Tesla, ChatGPT, Google Dịch']
          ]
        },
        emCanNho: [
          'Tất cả hệ thống AI đang tồn tại hiện nay đều là AI hẹp (Narrow AI).',
          'AI tổng quát (AGI) là mục tiêu hướng đến trong tương lai.',
          'AI khác phần mềm thường ở khả năng tự học và thích ứng với dữ liệu mới.'
        ]
      },
      {
        id: 'tab_12_1_3',
        title: '3. Đặc trưng của AI và các ứng dụng tiêu biểu',
        subtitle: 'Khả năng tự học, suy luận và hiện diện trong mọi ngành nghề',
        iconName: 'Cpu',
        keyPoints: [
          'Ba đặc trưng cốt lõi của AI: (1) Khả năng học từ dữ liệu (Learning), (2) Khả năng suy luận logic (Reasoning), (3) Khả năng tự điều chỉnh và hành động hợp lý.',
          'Các ứng dụng nổi bật:',
          '  - Y tế: Hỗ trợ bác sĩ chẩn đoán khối u từ ảnh chụp MRI, giải mã bộ gen.',
          '  - Giao thông: Xe ô tô tự lái nhận diện làn đường và chướng ngại vật.',
          '  - Giáo dục: Hệ thống gia sư ảo cá nhân hóa lộ trình học cho từng học sinh.',
          '  - Tài chính: Phát hiện gian lận thẻ tín dụng trong mili-giây.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Học sâu & Thị giác máy', desc: 'Chẩn đoán y tế và xe tự hành an toàn' },
            { label: 'Xử lý ngôn ngữ tự nhiên', desc: 'Trợ lý ảo và dịch thuật thời gian thực' },
            { label: 'Hệ thống gợi ý', desc: 'Cá nhân hóa nội dung học tập và giải trí' }
          ]
        },
        emCanNho: [
          'Đặc trưng AI: Học từ dữ liệu, suy luận và tự điều chỉnh hành vi.',
          'AI đang làm thay đổi sâu sắc y tế, giáo dục, tài chính và giao thông.',
          'Con người cần làm chủ và định hướng AI phục vụ các mục tiêu nhân văn.'
        ]
      }
    ]
  },

  // Bài 2: Khái niệm và quá trình phát triển của mạng máy tính
  2: {
    objectives: [
      {
        id: 'obj_12_2_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm & lịch sử mạng máy tính',
        description: 'Trình bày được định nghĩa mạng máy tính, các mốc son lịch sử phát triển từ mạng ARPANET (1969) đến mạng Internet toàn cầu.',
        iconName: 'Network'
      },
      {
        id: 'obj_12_2_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân biệt thiết bị mạng & địa chỉ IP',
        description: 'Phân biệt được vai trò của Switch, Router, Access Point và hiểu cấu trúc địa chỉ IPv4 (32-bit) và IPv6 (128-bit).',
        iconName: 'Cpu'
      },
      {
        id: 'obj_12_2_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo vệ hạ tầng kết nối',
        description: 'Hình thành nhận thức về tầm quan trọng sống còn của hạ tầng mạng đối với an ninh quốc gia và sự phát triển kinh tế xã hội.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_2_1',
        title: '1. Khái niệm và quá trình phát triển của mạng máy tính',
        subtitle: 'Từ 4 nút mạng ARPANET ban đầu đến hàng chục tỷ thiết bị kết nối',
        iconName: 'Network',
        keyPoints: [
          'Khái niệm: Mạng máy tính là một tập hợp các máy tính và thiết bị được liên kết với nhau bằng đường truyền vật lý, tuân theo các giao thức truyền thông để chia sẻ dữ liệu và tài nguyên.',
          'Lịch sử phát triển:',
          '  - 1969: Mạng ARPANET của Bộ Quốc phòng Mỹ ra đời, kết nối 4 trường đại học đầu tiên - tiền thân của Internet.',
          '  - 1983: Giao thức TCP/IP chính thức trở thành chuẩn kết nối của ARPANET.',
          '  - 1991: Tim Berners-Lee phát minh dịch vụ World Wide Web (WWW), mở ra kỷ nguyên Internet đại chúng.',
          '  - 1997: Việt Nam chính thức hòa mạng Internet toàn cầu.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1969: ARPANET', desc: 'Mạng chuyển mạch gói đầu tiên kết nối 4 nút' },
            { label: '1983: TCP/IP', desc: 'Chuẩn hóa giao thức truyền thông toàn cầu' },
            { label: '1991: World Wide Web', desc: 'Trang web đầu tiên và giao thức HTTP ra đời' },
            { label: '1997: Việt Nam kết nối', desc: 'Việt Nam chính thức gia nhập xa lộ thông tin' }
          ]
        },
        emCanNho: [
          'ARPANET (1969) là tiền thân của mạng Internet ngày nay.',
          'Bộ giao thức TCP/IP là nền tảng kết nối của toàn bộ mạng Internet.',
          'Việt Nam chính thức kết nối Internet vào năm 1997.'
        ]
      },
      {
        id: 'tab_12_2_2',
        title: '2. Các thiết bị mạng thông dụng (Switch, Router, Access Point)',
        subtitle: 'Những trạm trung chuyển điều phối dòng dữ liệu số',
        iconName: 'Server',
        keyPoints: [
          'Bộ chuyển mạch (Switch): Thiết bị hoạt động ở Tầng liên kết dữ liệu (Data Link), kết nối nhiều máy tính trong cùng một mạng LAN dựa vào địa chỉ vật lý MAC.',
          'Bộ định tuyến (Router): Thiết bị hoạt động ở Tầng mạng (Network), có nhiệm vụ tìm đường đi tối ưu (Routing) để chuyển tiếp các gói tin giữa các mạng khác nhau dựa vào địa chỉ logic IP.',
          'Điểm truy cập không dây (Access Point - AP): Thu phát sóng vô tuyến Wi-Fi để kết nối các thiết bị di động vào mạng LAN có dây.',
          'Modem (Modulator/Demodulator): Chuyển đổi tín hiệu quang/tương tự từ nhà cung cấp mạng thành tín hiệu số cho máy tính.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thiết bị mạng', 'Tầng hoạt động', 'Địa chỉ sử dụng', 'Nhiệm vụ chính'],
          rows: [
            ['Switch', 'Tầng 2 (Data Link)', 'Địa chỉ MAC vật lý', 'Kết nối các máy trong cùng mạng LAN nội bộ'],
            ['Router', 'Tầng 3 (Network)', 'Địa chỉ IP logic', 'Định tuyến gói tin kết nối LAN ra Internet'],
            ['Access Point', 'Tầng 1 & 2', 'Sóng vô tuyến Wi-Fi', 'Mở rộng kết nối không dây cho các máy di động']
          ]
        },
        emCanNho: [
          'Switch kết nối nội bộ trong mạng LAN bằng địa chỉ MAC.',
          'Router kết nối các mạng khác nhau ra Internet bằng địa chỉ IP.',
          'Access Point phát sóng Wi-Fi cho các thiết bị không dây.'
        ]
      },
      {
        id: 'tab_12_2_3',
        title: '3. Giao thức mạng và địa chỉ IP',
        subtitle: 'Ngôn ngữ giao tiếp chung và số nhà định danh trên Internet',
        iconName: 'Link',
        keyPoints: [
          'Giao thức mạng (Protocol): Tập hợp các quy tắc và định dạng chuẩn để các thiết bị mạng có thể hiểu và trao đổi thông tin với nhau (TCP, IP, HTTP, HTTPS, FTP).',
          'Địa chỉ IPv4: Gồm 32 bit, chia thành 4 nhóm số thập phân cách nhau bởi dấu chấm, từ 0 đến 255 (Ví dụ: `192.168.1.1`). Tổng số khoảng 4.3 tỷ địa chỉ (đã cạn kiệt).',
          'Địa chỉ IPv6: Gồm 128 bit biểu diễn dưới dạng 8 nhóm số thập lục phân (Hex), cung cấp không gian địa chỉ gần như vô tận ($3.4 \\times 10^{38}$ địa chỉ) cho kỷ nguyên IoT.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Địa chỉ IPv4', 'Địa chỉ IPv6'],
          rows: [
            ['Độ dài địa chỉ', '32 bit (4 byte)', '128 bit (16 byte)'],
            ['Cách viết biểu diễn', '4 số thập phân (192.168.1.1)', '8 cụm Hex (2001:0db8:85a3::8a2e:0370:7334)'],
            ['Số lượng địa chỉ', 'Khoảng 4.3 tỷ (Đã cạn kiệt)', 'Hàng tỷ tỷ tỷ địa chỉ (Vô tận)']
          ]
        },
        emCanNho: [
          'Giao thức mạng là bộ quy tắc chuẩn điều phối việc truyền thông tin.',
          'IPv4 có độ dài 32 bit, IPv6 có độ dài 128 bit.',
          'Mỗi thiết bị khi tham gia vào mạng đều phải có một địa chỉ IP duy nhất.'
        ]
      }
    ]
  },

  // Bài 3: Thiết bị mạng
  3: {
    objectives: [
      {
        id: 'obj_12_3_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Chức năng chuyên sâu của Switch & Router',
        description: 'Trình bày chi tiết cơ chế hoạt động của Switch (bảng chuyển tiếp MAC) và Router (bảng định tuyến Routing Table).',
        iconName: 'Server'
      },
      {
        id: 'obj_12_3_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích sơ đồ kết nối mạng LAN',
        description: 'Đọc và phân tích được sơ đồ kết nối mạng LAN trường học: modem cáp quang -> router định tuyến -> switch chia tầng -> access point và máy tính.',
        iconName: 'Network'
      },
      {
        id: 'obj_12_3_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức quản trị mạng khoa học',
        description: 'Nhận thức được vai trò của việc quy hoạch địa chỉ IP và sơ đồ mạng khoa học giúp mạng hoạt động thông suốt, dễ sửa chữa.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_3_1',
        title: '1. Khái niệm và chức năng của Switch',
        subtitle: 'Trái tim kết nối của mạng nội bộ LAN',
        iconName: 'Server',
        keyPoints: [
          'Nguyên lý hoạt động của Switch: Switch duy trì một Bảng địa chỉ MAC (MAC Address Table). Khi nhận gói tin từ cổng số 1 gửi đến máy B, Switch tra cứu xem máy B cắm ở cổng nào và chỉ chuyển tiếp gói tin đến đúng cổng đó (thay vì phát tán bừa bãi như Hub ngày xưa).',
          'Ưu điểm vượt trội: Giảm thiểu xung đột tín hiệu (Collision Domain riêng biệt cho từng cổng), tăng băng thông truyền tải và bảo mật dữ liệu tốt hơn trong mạng nội bộ.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Nhận khung dữ liệu Frame', desc: 'Đọc địa chỉ MAC nguồn và MAC đích' },
            { label: 'Học địa chỉ MAC', desc: 'Ghi nhớ cổng cắm của máy gửi vào bảng MAC' },
            { label: 'Chuyển mạch chính xác', desc: 'Đẩy khung tin đến duy nhất cổng của máy nhận' }
          ]
        },
        emCanNho: [
          'Switch hoạt động ở Tầng 2, chuyển tiếp dữ liệu dựa vào bảng địa chỉ MAC.',
          'Switch giúp loại bỏ xung đột đường truyền và tăng tốc độ mạng LAN.',
          'Mỗi cổng của Switch tạo thành một miền xung đột độc lập.'
        ]
      },
      {
        id: 'tab_12_3_2',
        title: '2. Khái niệm và chức năng của Router',
        subtitle: 'Người chỉ đường dẫn lối trên xa lộ Internet',
        iconName: 'Share2',
        keyPoints: [
          'Chức năng cốt lõi của Router: Kết nối hai hoặc nhiều mạng máy tính khác nhau (ví dụ mạng gia đình 192.168.1.0 với mạng Internet toàn cầu).',
          'Định tuyến gói tin (Routing): Dựa vào Bảng định tuyến (Routing Table) và các thuật toán tìm đường ngắn nhất, Router quyết định chặng tiếp theo (Next Hop) mà gói tin cần đi qua.',
          'Dịch vụ NAT (Network Address Translation): Cho phép hàng trăm thiết bị dùng chung 1 địa chỉ IP công cộng (Public IP) duy nhất để tiết kiệm IPv4.',
          'Dịch vụ cấp IP tự động (DHCP Server): Tự động gán địa chỉ IP cho điện thoại, laptop ngay khi vừa kết nối Wi-Fi.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tính năng Router', 'Cơ chế hoạt động', 'Lợi ích thực tế'],
          rows: [
            ['Định tuyến (Routing)', 'Tìm đường đi tối ưu theo địa chỉ IP', 'Gói tin gửi đến máy chủ Mỹ trong 30ms'],
            ['NAT', 'Dịch IP nội bộ sang IP công cộng', 'Cả nhà 20 thiết bị cùng lướt web trơn tru'],
            ['DHCP Server', 'Tự động cấp phát IP', 'Không phải gõ cài đặt IP thủ công bằng tay']
          ]
        },
        emCanNho: [
          'Router hoạt động ở Tầng 3, định tuyến gói tin dựa vào địa chỉ IP.',
          'Router tích hợp dịch vụ NAT và cấp phát IP tự động DHCP.',
          'Router là cửa ngõ duy nhất kết nối mạng LAN nội bộ ra Internet.'
        ]
      },
      {
        id: 'tab_12_3_3',
        title: '3. Phân biệt vai trò của Switch và Router trong mạng LAN/WAN',
        subtitle: 'Sự phối hợp nhịp nhàng tạo nên kiến trúc mạng hoàn chỉnh',
        iconName: 'Network',
        keyPoints: [
          'So sánh vai trò:',
          '  - Switch kết nối các máy tính TRONG CÙNG một mạng LAN (Nội bộ).',
          '  - Router kết nối các MẠNG KHÁC NHAU với nhau (Liên mạng / Internet).',
          'Mô hình mạng trường học chuẩn: Đường cáp quang -> Modem/Router chính -> Switch trung tâm -> Các Switch tầng -> Các phòng máy tính và Access Point Wi-Fi.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Đặc điểm', 'Bộ chuyển mạch Switch', 'Bộ định tuyến Router'],
          rows: [
            ['Phạm vi kết nối', 'Nội bộ cùng mạng LAN', 'Giữa các mạng khác nhau (LAN - WAN)'],
            ['Tầng mô hình OSI', 'Tầng 2 (Data Link Layer)', 'Tầng 3 (Network Layer)'],
            ['Địa chỉ xử lý', 'Địa chỉ MAC (48 bit)', 'Địa chỉ IP (32/128 bit)'],
            ['Thiết bị phổ biến', 'Switch 24/48 cổng chia mạng', 'Router Wi-Fi gia đình, Router Cisco']
          ]
        },
        emCanNho: [
          'Switch quản lý giao tiếp nội bộ; Router quản lý giao tiếp ra ngoài mạng.',
          'Mạng hoàn chỉnh luôn cần sự phối hợp của cả Switch và Router.',
          'Router gia đình hiện nay thường tích hợp sẵn 1 Router + 1 Switch 4 cổng + 1 Access Point Wi-Fi.'
        ]
      }
    ]
  },

  // Bài 4: Thực hành kết nối và thiết lập mạng
  4: {
    objectives: [
      {
        id: 'obj_12_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các thông số mạng TCP/IP',
        description: 'Giải thích được ý nghĩa của IP Address, Subnet Mask, Default Gateway và DNS Server khi cấu hình card mạng.',
        iconName: 'Sliders'
      },
      {
        id: 'obj_12_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Cấu hình IP tĩnh & lệnh ping, ipconfig',
        description: 'Thực hiện đặt địa chỉ IP tĩnh trên Windows; sử dụng thành thạo các câu lệnh mạng trong Command Prompt: `ipconfig /all` và `ping <ip>` để chẩn đoán sự cố.',
        iconName: 'Terminal'
      },
      {
        id: 'obj_12_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn trọng thao tác mạng',
        description: 'Tuân thủ quy hoạch dải mạng của phòng máy, không đặt trùng địa chỉ IP gây xung đột mạng (IP Conflict) cho người khác.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_4_1',
        title: '1. Quy trình kết nối máy tính với thiết bị mạng',
        subtitle: 'Kết nối cáp mạng có dây RJ45 và bắt sóng Wi-Fi an toàn',
        iconName: 'Link',
        keyPoints: [
          'Kết nối có dây: Cắm đầu cáp mạng RJ45 vào cổng mạng (Ethernet/LAN) trên thùng máy tính và Switch. Đèn LED xanh nhấp nháy báo hiệu có tín hiệu kết nối vật lý.',
          'Kết nối không dây: Nhấp vào biểu tượng Wi-Fi trên thanh Taskbar, chọn tên mạng (SSID), nhập mật khẩu bảo mật (WPA2/WPA3) và kết nối.',
          'Chế độ nhận IP tự động (Obtain an IP address automatically): Máy tính tự gửi yêu cầu xin IP tới máy chủ DHCP của Router.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Kết nối vật lý', desc: 'Cắm cáp RJ45 nghe tiếng "tách" hoặc chọn SSID Wi-Fi' },
            { label: '2. Yêu cầu DHCP', desc: 'Máy tính xin cấp IP từ Router tự động' },
            { label: '3. Hoàn tất kết nối', desc: 'Biểu tượng mạng quả địa cầu biến thành hình máy tính có mạng' }
          ]
        },
        emCanNho: [
          'Kiểm tra đèn cổng mạng RJ45 nhấp nháy khi cắm cáp có dây.',
          'Chọn chuẩn bảo mật WPA2 hoặc WPA3 khi kết nối Wi-Fi.',
          'Mặc định nên để chế độ nhận IP tự động DHCP.'
        ]
      },
      {
        id: 'tab_12_4_2',
        title: '2. Cấu hình địa chỉ IP và kiểm tra kết nối mạng (lệnh ping, ipconfig)',
        subtitle: 'Các công cụ chẩn đoán mạng kinh điển trong Command Prompt',
        iconName: 'Terminal',
        keyPoints: [
          'Bốn thông số cấu hình mạng IP tĩnh:',
          '  - `IP address`: Địa chỉ riêng của máy (VD: `192.168.1.50`).',
          '  - `Subnet mask`: Mặt nạ mạng xác định phần mạng và phần máy (VD: `255.255.255.0`).',
          '  - `Default gateway`: Địa chỉ của cổng ra Router (VD: `192.168.1.1`).',
          '  - `DNS server`: Máy chủ phân giải tên miền (VD: `8.8.8.8` của Google).',
          'Lệnh `ipconfig` (hoặc `ipconfig /all`): Xem toàn bộ thông số mạng, card mạng và địa chỉ MAC.',
          'Lệnh `ping <Địa_chỉ>`: Gửi các gói tin thử nghiệm ICMP để kiểm tra thông mạng. Nếu trả lời `Reply from ... time=15ms` là thông mạng; nếu báo `Request timed out` là đứt mạng.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Lệnh Command Prompt', 'Cú pháp mẫu', 'Mục đích chẩn đoán'],
          rows: [
            ['ipconfig', '`ipconfig`', 'Xem địa chỉ IP, Subnet Mask và Gateway của máy'],
            ['ipconfig /all', '`ipconfig /all`', 'Xem chi tiết cả địa chỉ MAC vật lý và máy chủ DNS'],
            ['ping', '`ping 192.168.1.1`', 'Kiểm tra xem máy tính có thông tới Router hay không'],
            ['ping ra Internet', '`ping 8.8.8.8`', 'Kiểm tra đường truyền Internet cáp quang có hoạt động']
          ]
        },
        emCanNho: [
          'Lệnh `ipconfig` dùng để tra cứu địa chỉ IP hiện tại của máy tính.',
          'Lệnh `ping` gửi gói tin kiểm tra kết nối thông mạng và đo độ trễ.',
          'Default Gateway chính là địa chỉ IP của Router trong mạng LAN.'
        ]
      }
    ]
  },

  // Bài 5: Thực hành chia sẻ tài nguyên trên mạng
  5: {
    objectives: [
      {
        id: 'obj_12_5_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nguyên lý chia sẻ tài nguyên mạng LAN',
        description: 'Hiểu cơ chế chia sẻ tệp tin và dùng chung máy in qua mạng cục bộ; phân biệt quyền chỉ đọc (Read) và toàn quyền chỉnh sửa (Read/Write).',
        iconName: 'Share2'
      },
      {
        id: 'obj_12_5_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết lập thư mục dùng chung & chia sẻ máy in',
        description: 'Thực hiện được việc bật Network Discovery, chia sẻ một thư mục cho mạng nội bộ và kết nối in tài liệu từ máy in của máy khác.',
        iconName: 'FolderShared'
      },
      {
        id: 'obj_12_5_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo mật thư mục chia sẻ',
        description: 'Cẩn trọng phân quyền truy cập, không chia sẻ toàn bộ ổ đĩa hệ thống C: và đặt mật khẩu bảo vệ tài nguyên quan trọng.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_5_1',
        title: '1. Khái niệm và các hình thức chia sẻ tài nguyên',
        subtitle: 'Khai thác tối đa lợi ích kết nối của mạng máy tính',
        iconName: 'Share2',
        keyPoints: [
          'Lợi ích: Cho phép các máy tính trong phòng làm việc cùng xem, sao chép tài liệu mà không cần cắm rút USB; nhiều máy cùng in tài liệu trên 1 máy in duy nhất để tiết kiệm chi phí mua sắm thiết bị.',
          'Điều kiện tiên quyết trên Windows:',
          '  - Các máy tính phải cắm chung trong cùng một mạng LAN (cùng dải IP).',
          '  - Bật tính năng `Network Discovery` và `File and printer sharing` trong Network and Sharing Center.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Máy tính chia sẻ (Server)', desc: 'Chứa thư mục tài liệu hoặc cắm dây máy in' },
            { label: 'Đường truyền mạng LAN', desc: 'Truyền tải tệp tin và lệnh in qua dây mạng/Wi-Fi' },
            { label: 'Các máy tính truy cập (Client)', desc: 'Mở thư mục lấy file và gửi tài liệu in' }
          ]
        },
        emCanNho: [
          'Chia sẻ tài nguyên giúp tiết kiệm chi phí và tăng hiệu quả cộng tác.',
          'Bật Network Discovery để các máy tính nhìn thấy nhau trong mạng LAN.',
          'Đặt mật khẩu bảo vệ thư mục chia sẻ để tránh người lạ xem trộm.'
        ]
      },
      {
        id: 'tab_12_5_2',
        title: '2. Thiết lập chia sẻ thư mục và máy in trong mạng cục bộ',
        subtitle: 'Quy trình phân quyền Read, Write và kết nối máy in từ xa',
        iconName: 'Printer',
        keyPoints: [
          'Các bước chia sẻ thư mục:',
          '  - Bước 1: Nhấp chuột phải vào thư mục cần chia sẻ -> chọn `Properties` -> chọn thẻ `Sharing`.',
          '  - Bước 2: Bấm nút `Share...`, chọn nhóm người dùng (ví dụ: `Everyone`).',
          '  - Bước 3: Phân quyền `Read` (chỉ được xem và tải về) hoặc `Read/Write` (cho phép sửa và xóa file).',
          '  - Bước 4: Nhấn nút `Share` để hoàn thành.',
          'Truy cập thư mục chia sẻ từ máy khác: Nhấn `Windows + R`, gõ `\\\\<Địa_chỉ_IP_máy_chủ>` (Ví dụ: `\\\\192.168.1.10`).',
          'Chia sẻ máy in: Vào `Printers & Scanners` -> chọn máy in -> `Printer properties` -> thẻ `Sharing` -> tích chọn `Share this printer`.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Mức phân quyền', 'Quyền hạn của người truy cập', 'Mức độ an toàn'],
          rows: [
            ['Chỉ đọc (Read)', 'Chỉ mở đọc và tải bản sao về máy mình', 'Rất an toàn, chống bị xóa nhầm dữ liệu'],
            ['Đọc/Ghi (Read/Write)', 'Được phép tạo mới, chỉnh sửa và xóa sạch file', 'Chỉ cấp cho người đáng tin cậy trong nhóm'],
            ['Cấm truy cập', 'Không nhìn thấy hoặc bị báo lỗi Access Denied', 'Bảo vệ tài liệu tuyệt mật của cơ quan']
          ]
        },
        emCanNho: [
          'Quyền `Read` chỉ cho xem; quyền `Read/Write` cho phép sửa và xóa.',
          'Truy cập máy chia sẻ bằng cú pháp `\\\\<Địa_chỉ_IP>` trong hộp thoại Run.',
          'Sau khi chia sẻ xong, luôn kiểm tra lại phân quyền để đảm bảo an toàn.'
        ]
      }
    ]
  }
};

import { GRADE_12_CURRICULUM_PART2 } from './curriculum12_part2';
import { GRADE_12_CURRICULUM_PART3 } from './curriculum12_part3';
import { GRADE_12_CURRICULUM_PART4 } from './curriculum12_part4';

export const ALL_GRADE_12_CURRICULUM: Record<number, LessonCurriculum12> = {
  ...GRADE_12_CURRICULUM,
  ...GRADE_12_CURRICULUM_PART2,
  ...GRADE_12_CURRICULUM_PART3,
  ...GRADE_12_CURRICULUM_PART4
};

