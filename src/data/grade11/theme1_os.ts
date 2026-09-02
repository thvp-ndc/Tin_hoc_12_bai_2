import { Lesson } from '../../types/lesson';

export const THEME1_LESSONS_11: Lesson[] = [
  // Bài 1: Hệ điều hành
  {
    id: 1,
    code: 'TIN11_B01',
    title: 'Hệ điều hành',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Hệ điều hành',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Linh hồn quản phối toàn bộ tài nguyên phần cứng và phần mềm',
      description: 'Tìm hiểu định nghĩa, lịch sử phát triển giao diện người dùng (từ dòng lệnh CLI đến đồ họa GUI và cảm ứng) cùng các chức năng cốt lõi của hệ điều hành máy tính và di động.',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Quản lý bộ nhớ RAM & CPU', 'Giao diện đồ họa GUI', 'Hệ điều hành PC vs Di động']
    },
    objectives: [
      {
        id: 'obj_11_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm, lịch sử & chức năng hệ điều hành',
        description: 'Trình bày được khái niệm, lịch sử phát triển và các chức năng chính của hệ điều hành: quản lý tài nguyên và cung cấp giao diện người dùng.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_11_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân loại hệ điều hành máy tính và di động',
        description: 'Phân biệt được đặc điểm của hệ điều hành cho máy tính cá nhân (Windows, Linux, macOS) và thiết bị di động (Android, iOS).',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền hệ điều hành',
        description: 'Hình thành ý thức sử dụng hệ điều hành có bản quyền hợp pháp và chủ động cập nhật bản vá bảo mật thường xuyên.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Chiếc máy tính mới tinh chưa có Hệ điều hành',
      scenario: 'Một bạn học sinh vừa tự lắp ráp một case máy tính với cấu hình mạnh mẽ. Khi bật nút nguồn, màn hình chỉ hiện vài dòng chữ trắng trên nền đen rồi dừng lại, không thể mở trình duyệt hay soạn thảo văn bản.',
      pollQuestion: 'Thiết bị này đang thiếu thành phần quyết định nào để người dùng có thể sử dụng được phần cứng?',
      pollOptions: [
        { id: 'p11_1_1', text: 'Hệ điều hành (như Windows 11 hoặc Ubuntu Linux)', votesPercent: 91, isPopular: true, insight: 'Chính xác! Hệ điều hành là phần mềm nền tảng bắt buộc phải có để điều phối phần cứng và chạy các ứng dụng.' },
        { id: 'p11_1_2', text: 'Một chiếc bàn phím cơ đắt tiền hơn', votesPercent: 3, insight: 'Bàn phím cơ chỉ là thiết bị ngoại vi, không giải quyết được vấn đề khởi động hệ thống.' },
        { id: 'p11_1_3', text: 'Dây cáp mạng Internet', votesPercent: 6, insight: 'Internet chỉ cung cấp kết nối mạng, máy tính vẫn cần hệ điều hành để chạy.' }
      ],
      reflection: 'Không có hệ điều hành, máy tính chỉ là một khối linh kiện điện tử vô tri không thể tương tác với con người.'
    },
    knowledge: [
      {
        id: 'tab_11_1_1',
        title: '1. Khái niệm hệ điều hành',
        subtitle: 'Cầu nối giữa người dùng, phần mềm ứng dụng và phần cứng',
        iconName: 'Server',
        keyPoints: [
          'Hệ điều hành (Operating System - OS) là tập hợp các chương trình quản lý, điều phối tài nguyên phần cứng và cung cấp môi trường chạy các phần mềm ứng dụng.',
          'Hệ điều hành đóng vai trò trung gian giữa người dùng và phần cứng máy tính.',
          'Không có hệ điều hành, người dùng không thể giao tiếp và điều khiển các thiết bị phần cứng của máy tính.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng & Ứng dụng', desc: 'Word, Excel, Trình duyệt, Game' },
            { label: 'Hệ điều hành (OS)', desc: 'Windows, macOS, Linux, Android, iOS' },
            { label: 'Phần cứng (Hardware)', desc: 'CPU, RAM, Ổ cứng, Bàn phím, Màn hình' }
          ]
        },
        emCanNho: [
          'Hệ điều hành là phần mềm hệ thống quản lý toàn bộ tài nguyên phần cứng và phần mềm.',
          'Hệ điều hành là môi trường trung gian kết nối người dùng với phần cứng máy tính.',
          'Mọi máy tính và thiết bị thông minh đều cần có hệ điều hành để hoạt động.'
        ]
      },
      {
        id: 'tab_11_1_2',
        title: '2. Lịch sử phát triển của hệ điều hành',
        subtitle: 'Từ giao diện dòng lệnh CLI đến giao diện đồ họa GUI và cảm ứng',
        iconName: 'Clock',
        keyPoints: [
          'Thế hệ đầu: Máy tính chưa có hệ điều hành, người dùng phải nạp chương trình bằng thẻ đục lỗ.',
          'Giao diện dòng lệnh (CLI - Command Line Interface): Người dùng giao tiếp bằng cách gõ các câu lệnh văn bản (tiêu biểu là MS-DOS). Đòi hỏi phải nhớ câu lệnh chính xác.',
          'Giao diện đồ họa (GUI - Graphical User Interface): Người dùng thao tác qua cửa sổ, biểu tượng (Icon), con trỏ chuột và bảng chọn (Menu). Ra mắt từ Macintosh (1984) và Windows 95.',
          'Giao diện cảm ứng (Touch UI): Tương tác trực tiếp bằng ngón tay trên màn hình cảm ứng di động (iOS, Android).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thời kỳ', 'Loại giao diện', 'Cách tương tác', 'Đại diện tiêu biểu'],
          rows: [
            ['Những năm 1980', 'Dòng lệnh (CLI)', 'Gõ lệnh văn bản từ bàn phím', 'MS-DOS, Unix'],
            ['Những năm 1990 - 2000', 'Đồ họa (GUI)', 'Dùng chuột nhấp icon, menu, cửa sổ', 'Windows 95, Windows XP, macOS'],
            ['Từ 2007 đến nay', 'Cảm ứng & Giọng nói', 'Chạm vuốt đa điểm, trợ lý ảo AI', 'iOS, Android, Windows 11']
          ]
        },
        emCanNho: [
          'Lịch sử hệ điều hành phát triển từ dòng lệnh (CLI) sang đồ họa (GUI) và cảm ứng đa điểm.',
          'Giao diện đồ họa GUI giúp máy tính trở nên thân thiện và phổ cập đến toàn nhân loại.',
          'Hiện nay giao diện cảm ứng và điều khiển bằng giọng nói, cử chỉ đang chiếm ưu thế trên thiết bị số.'
        ]
      },
      {
        id: 'tab_11_1_3',
        title: '3. Một số chức năng cơ bản của hệ điều hành',
        subtitle: 'Bốn nhóm nhiệm vụ cốt lõi điều hành hệ thống máy tính',
        iconName: 'Cpu',
        keyPoints: [
          'Quản lý bộ nhớ (Memory Management): Phân phối và giải phóng bộ nhớ RAM cho các chương trình đang chạy.',
          'Quản lý bộ xử lý (CPU Scheduling): Điều phối thời gian hoạt động của CPU giữa các tiến trình để chạy đa nhiệm mượt mà.',
          'Quản lý thiết bị ngoại vi: Cung cấp trình điều khiển (Driver) để nhận diện và điều khiển chuột, bàn phím, máy in, ổ cứng.',
          'Quản lý tệp tin (File System): Tổ chức lưu trữ dữ liệu dạng cây thư mục và bảo mật tệp.',
          'Cung cấp giao diện người dùng: Cho phép người dùng ra lệnh và nhận thông báo kết quả.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Quản lý CPU & RAM', desc: 'Phân bổ tài nguyên đa nhiệm tối ưu' },
            { label: 'Quản lý Tệp & Ổ đĩa', desc: 'Cây thư mục và phân quyền bảo mật' },
            { label: 'Quản lý Ngoại vi', desc: 'Driver giao tiếp bàn phím, màn hình, máy in' }
          ]
        },
        emCanNho: [
          'Hệ điều hành quản lý bộ xử lý CPU, bộ nhớ RAM, thiết bị ngoại vi và hệ thống tệp tin.',
          'Hệ điều hành đảm bảo các ứng dụng chạy độc lập, không xâm lấn dữ liệu của nhau.',
          'Cung cấp môi trường giao tiếp thuận tiện, an toàn cho người dùng.'
        ]
      },
      {
        id: 'tab_11_1_4',
        title: '4. Hệ điều hành cho thiết bị di động',
        subtitle: 'Tối ưu hóa cho màn hình cảm ứng, pin và kết nối không dây',
        iconName: 'Smartphone',
        keyPoints: [
          'Đặc điểm HĐH di động: Tiết kiệm năng lượng tối đa, tối ưu hóa giao diện cảm ứng đa điểm, tích hợp sẵn định vị GPS, camera, cảm biến xoay và kết nối 4G/5G, Wi-Fi, Bluetooth.',
          'Google Android: Hệ điều hành mã nguồn mở dựa trên nhân Linux, được tùy biến bởi nhiều hãng sản xuất (Samsung, Xiaomi, Oppo).',
          'Apple iOS: Hệ điều hành mã nguồn đóng độc quyền dành riêng cho iPhone, nổi tiếng về tính mượt mà và bảo mật cao.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Đặc điểm', 'Hệ điều hành PC (Windows, macOS)', 'Hệ điều hành Di động (Android, iOS)'],
          rows: [
            ['Thiết bị', 'Máy tính để bàn, Laptop', 'Điện thoại thông minh, Máy tính bảng'],
            ['Tương tác chính', 'Chuột, Bàn phím cơ', 'Màn hình cảm ứng chạm vuốt đa điểm'],
            ['Nguồn điện', 'Cắm sạc liên tục hoặc pin lớn', 'Pin di động giới hạn (cần tiết kiệm tối đa)'],
            ['Cảm biến tích hợp', 'Ít cảm biến', 'Rất nhiều (GPS, Gia tốc kế, Con quay hồi chuyển, Vân tay)']
          ]
        },
        emCanNho: [
          'HĐH di động được thiết kế chuyên biệt cho màn hình cảm ứng và tiết kiệm pin.',
          'Android (mã nguồn mở) và iOS (độc quyền) là hai HĐH di động thống trị thế giới.',
          'Tích hợp sâu các dịch vụ đám mây, kho ứng dụng và cảm biến định vị.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Hệ điều hành Máy tính và Di động',
      instruction: 'Kéo thả các hệ điều hành vào đúng nhóm thiết bị tương ứng:',
      categories: [
        { id: 'cat_pc', title: 'Hệ điều hành cho Máy tính (PC/Laptop)', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
        { id: 'cat_mobile', title: 'Hệ điều hành cho Thiết bị di động', color: 'border-purple-500 bg-purple-950/40 text-purple-300' }
      ],
      dragItems: [
        { id: 'd1', text: 'Microsoft Windows 11', category: 'cat_pc', explanation: 'Hệ điều hành chiếm thị phần lớn nhất trên máy tính cá nhân.' },
        { id: 'd2', text: 'Google Android 14', category: 'cat_mobile', explanation: 'Hệ điều hành di động mã nguồn mở phổ biến nhất thế giới.' },
        { id: 'd3', text: 'Apple macOS Sonoma', category: 'cat_pc', explanation: 'Hệ điều hành tối ưu độc quyền trên dòng máy tính Apple Mac.' },
        { id: 'd4', text: 'Apple iOS 17', category: 'cat_mobile', explanation: 'Hệ điều hành đóng mượt mà cho iPhone.' },
        { id: 'd5', text: 'Ubuntu Linux Desktop', category: 'cat_pc', explanation: 'Bản phân phối Linux mã nguồn mở mạnh mẽ và an toàn.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Chức năng nào sau đây KHÔNG thuộc nhiệm vụ chính của hệ điều hành?',
        options: [
          'Tự động viết một bài văn nghị luận xã hội thay học sinh',
          'Quản lý và cấp phát bộ nhớ RAM cho các ứng dụng đang chạy',
          'Tổ chức lưu trữ và bảo vệ các tệp tin trên ổ đĩa',
          'Cung cấp giao diện trực quan cho người dùng tương tác với thiết bị'
        ],
        correctIndex: 0,
        explanation: 'Viết văn là chức năng của ứng dụng AI hoặc người dùng, không phải nhiệm vụ hệ thống của HĐH.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Giao diện đồ họa người dùng (GUI) có ưu điểm vượt trội nào so với giao diện dòng lệnh (CLI)?',
        options: [
          'Người dùng thao tác trực quan qua biểu tượng, cửa sổ và chuột mà không cần ghi nhớ câu lệnh phức tạp',
          'Chạy không tốn pin máy tính',
          'Không bao giờ bị lỗi phần mềm',
          'Chỉ dành cho các kỹ sư lập trình'
        ],
        correctIndex: 0,
        explanation: 'GUI giúp đại đa số người dùng phổ thông dễ dàng tiếp cận và điều khiển máy tính.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hai hệ điều hành phổ biến nhất trên điện thoại thông minh hiện nay là gì?',
        options: ['Android và iOS', 'Windows và Linux', 'macOS và Unix', 'MS-DOS và Symbian'],
        correctIndex: 0,
        explanation: 'Android và iOS chiếm hơn 99% thị phần hệ điều hành di động toàn cầu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Khi bạn mở cùng lúc 10 tab Chrome và một ứng dụng Word, bộ phận nào của Hệ điều hành đảm nhận việc chia sẻ thời gian tính toán để không bị giật lag?',
        options: ['Quản lý bộ xử lý (CPU Scheduling)', 'Bộ tản nhiệt máy tính', 'Bàn phím cơ', 'Dây cắm nguồn điện'],
        correctIndex: 0,
        explanation: 'Cơ chế lập lịch CPU (CPU Scheduling) phân chia luân phiên các lát thời gian cho từng tiến trình.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Đặc trưng nào sau đây là yêu cầu QUAN TRỌNG NHẤT đối với hệ điều hành thiết bị di động so với máy tính?',
        options: [
          'Tối ưu hóa tiết kiệm pin và hỗ trợ thao tác cảm ứng đa điểm',
          'Phải kết nối chuột có dây',
          'Kích thước màn hình bắt buộc phải trên 30 inch',
          'Không được phép kết nối Internet'
        ],
        correctIndex: 0,
        explanation: 'Do chạy bằng pin và tương tác bằng ngón tay, HĐH di động tối ưu năng lượng và thao tác cảm ứng.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Báo Cáo: So Sánh Trải Nghiệm Người Dùng Trên Windows 11 và Android',
        context: 'Trường học chuẩn bị trang bị máy tính bảng và laptop cho học sinh học trực tuyến.',
        mission: 'Lập bảng phân tích ưu và nhược điểm của giao diện Windows so với giao diện cảm ứng Android khi làm bài tập về nhà.',
        steps: [
          'Bước 1: Liệt kê các thao tác thường dùng: Soạn văn bản, xem video bài giảng, gửi bài tập qua Zalo/Drive.',
          'Bước 2: So sánh tốc độ thao tác: Bàn phím chuột máy tính vs Bàn phím ảo cảm ứng trên di động.',
          'Bước 3: Đưa ra đề xuất: Hoạt động nào nên dùng máy tính, hoạt động nào dùng điện thoại thông minh.'
        ],
        outputRequirement: 'Một báo cáo so sánh ngắn gọn kèm biểu đồ đánh giá mức độ tiện lợi.',
        practicalTip: 'Đối với nhập liệu dài (soạn thảo báo cáo), bàn phím vật lý trên PC luôn mang lại hiệu suất vượt trội gấp 3 lần.'
      },
      mindmap: {
        id: 'mm_11_1',
        label: 'HỆ ĐIỀU HÀNH',
        color: '#8b5cf6',
        children: [
          {
            id: 'mm_11_1_1',
            label: 'Khái niệm & Vai trò',
            children: [
              { id: 'mm_11_1_1_1', label: 'Cầu nối Người - Phần cứng' },
              { id: 'mm_11_1_1_2', label: 'Quản lý tài nguyên hệ thống' }
            ]
          },
          {
            id: 'mm_11_1_2',
            label: 'Chức năng cốt lõi',
            children: [
              { id: 'mm_11_1_2_1', label: 'Quản lý CPU & RAM' },
              { id: 'mm_11_1_2_2', label: 'Quản lý Thiết bị & Tệp tin' },
              { id: 'mm_11_1_2_3', label: 'Giao diện đồ họa (GUI)' }
            ]
          },
          {
            id: 'mm_11_1_3',
            label: 'Phân loại thiết bị',
            children: [
              { id: 'mm_11_1_3_1', label: 'Máy tính: Windows, macOS, Linux' },
              { id: 'mm_11_1_3_2', label: 'Di động: Android, iOS' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Điều Hành Hệ Thống 11',
      badgeIcon: 'Server',
      roleTitle: 'Chuyên Viên Phân Tích Hệ Điều Hành',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm trọn khái niệm nền tảng về Hệ điều hành và sẵn sàng bước vào bài thực hành sử dụng Task Manager.',
      skillsUnlocked: ['Hiểu bản chất Hệ điều hành', 'Phân biệt GUI vs CLI', 'Phân loại HĐH PC vs Di động']
    }
  },

  // Bài 2: Thực hành sử dụng hệ điều hành
  {
    id: 2,
    code: 'TIN11_B02',
    title: 'Thực hành sử dụng hệ điều hành',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Kỹ năng HĐH',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Làm chủ công cụ điều hành: Tùy biến môi trường và kiểm soát tiến trình',
      description: 'Luyện tập các kỹ năng thực tế: quản lý tài khoản người dùng, thiết lập giao diện Windows Settings và theo dõi tài nguyên với Task Manager.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Tùy biến Windows Settings', 'Quản lý tài khoản User', 'Giám sát CPU/RAM với Task Manager']
    },
    objectives: [
      {
        id: 'obj_11_2_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cơ chế phân quyền tài khoản & tiến trình',
        description: 'Hiểu được vai trò của tài khoản quản trị (Administrator) so với tài khoản người dùng tiêu chuẩn (Standard User) và cơ chế hoạt động của tiến trình hệ thống.',
        iconName: 'UserCheck'
      },
      {
        id: 'obj_11_2_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác cấu hình & sử dụng Task Manager',
        description: 'Thực hiện được việc tùy chỉnh môi trường làm việc trong Windows Settings và sử dụng tiện ích Task Manager để kiểm tra mức sử dụng CPU/RAM, đóng ứng dụng bị treo (End Task).',
        iconName: 'Activity'
      },
      {
        id: 'obj_11_2_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo mật & thao tác an toàn',
        description: 'Có thói quen thiết lập mật khẩu an toàn cho tài khoản cá nhân và không tùy tiện tắt các tiến trình quan trọng của hệ thống.',
        iconName: 'ShieldAlert'
      }
    ],
    warmup: {
      title: 'Tình huống: Ứng dụng "Not Responding" và đơ màn hình',
      scenario: 'Bạn đang làm bài tập trên máy tính thì phần mềm bị đơ, hiện dòng chữ "Not Responding". Chuột nhấp vào dấu X màu đỏ không tắt được, quạt máy tính kêu to bất thường.',
      pollQuestion: 'Công cụ quyền lực nào trong Windows giúp bạn xem ứng dụng nào đang chiếm hết CPU và ép đóng nó ngay lập tức?',
      pollOptions: [
        { id: 'p11_2_1', text: 'Trình quản lý tác vụ Task Manager (Ctrl + Shift + Esc)', votesPercent: 93, isPopular: true, insight: 'Chính xác! Task Manager liệt kê mọi tiến trình đang chạy và cho phép cưỡng chế dừng ứng dụng bằng End Task.' },
        { id: 'p11_2_2', text: 'Rút dây nguồn máy tính ra cắm lại', votesPercent: 4, insight: 'Rút điện đột ngột rất dễ làm hỏng ổ cứng SSD và mất dữ liệu chưa kịp lưu.' },
        { id: 'p11_2_3', text: 'Đập mạnh vào bàn phím', votesPercent: 3, insight: 'Đập máy có thể gây hỏng hóc vật lý linh kiện.' }
      ],
      reflection: 'Thành thạo Task Manager là kỹ năng cứu cánh số một giúp bạn xử lý các sự cố treo máy tính hàng ngày.'
    },
    knowledge: [
      {
        id: 'tab_11_2_1',
        title: '1. Tùy chỉnh môi trường và quản lý tài khoản người dùng',
        subtitle: 'Cá nhân hóa và bảo mật đa người dùng trên một máy tính',
        iconName: 'Settings',
        keyPoints: [
          'Windows Settings: Trung tâm tùy biến độ phân giải màn hình, hình nền, âm thanh, mạng và cập nhật hệ thống.',
          'Hai loại tài khoản cơ bản:',
          '  - Administrator (Quản trị viên): Toàn quyền cài đặt phần mềm, thay đổi cấu hình sâu và can thiệp file hệ thống.',
          '  - Standard User (Người dùng tiêu chuẩn): Chỉ được chạy ứng dụng và lưu tài liệu cá nhân, không thể tự ý cài phần mềm lạ.',
          'Bảo mật tài khoản: Luôn cài đặt mật khẩu (Password) hoặc mã PIN/Vân tay (Windows Hello) cho tài khoản.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Quyền hạn', 'Tài khoản Administrator', 'Tài khoản Standard User'],
          rows: [
            ['Cài đặt phần mềm mới', 'Toàn quyền cho phép', 'Cần mật khẩu quản trị phê duyệt'],
            ['Chỉnh sửa file hệ thống', 'Có quyền can thiệp', 'Bị từ chối truy cập'],
            ['Tạo thêm người dùng mới', 'Được phép tạo', 'Không được phép'],
            ['Ứng dụng thực tế', 'Dành cho chủ máy tính, kỹ thuật viên', 'Dành cho học sinh, nhân viên văn phòng']
          ]
        },
        emCanNho: [
          'Windows Settings giúp cá nhân hóa môi trường làm việc và quản lý thiết bị.',
          'Tài khoản Administrator có toàn quyền; tài khoản Standard User bị giới hạn để an toàn.',
          'Đặt mật khẩu mạnh cho tài khoản bảo vệ dữ liệu riêng tư khi dùng chung máy tính.'
        ]
      },
      {
        id: 'tab_11_2_2',
        title: '2. Quản lý ứng dụng và tiến trình với Task Manager',
        subtitle: 'Giám sát tài nguyên phần cứng thời gian thực và xử lý sự cố treo máy',
        iconName: 'Activity',
        keyPoints: [
          'Cách mở Task Manager: Nhấn tổ hợp phím `Ctrl + Shift + Esc` hoặc nhấp chuột phải vào Taskbar chọn `Task Manager`.',
          'Thẻ Processes (Tiến trình): Hiển thị danh sách các ứng dụng (Apps) và tiến trình nền (Background processes) cùng tỷ lệ % CPU, RAM, Disk, Network đang tiêu thụ.',
          'Thẻ Performance (Hiệu năng): Biểu đồ nhịp tim thời gian thực của CPU, Memory, Ổ cứng SSD/HDD và Card đồ họa GPU.',
          'Xử lý ứng dụng bị đơ: Nhấp chuột vào ứng dụng bị Not Responding -> Nhấn nút `End task` để đóng cưỡng bức an toàn.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Ctrl + Shift + Esc', desc: 'Mở cửa sổ Task Manager' },
            { label: '2. Kiểm tra cột CPU/RAM', desc: 'Tìm ứng dụng đang ngốn trên 90% tài nguyên' },
            { label: '3. Nhấn End Task', desc: 'Cưỡng chế đóng ứng dụng bị treo, giải phóng RAM' }
          ]
        },
        emCanNho: [
          'Tổ hợp phím tắt mở nhanh Task Manager: `Ctrl + Shift + Esc`.',
          'Thẻ Processes cho biết ứng dụng nào đang chiếm dụng nhiều CPU và RAM nhất.',
          'Dùng `End task` để tắt ứng dụng bị treo (Not Responding) mà không cần khởi động lại máy.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác và Công cụ trong Hệ điều hành',
      instruction: 'Nối thao tác quản trị với công cụ thực hiện tương ứng:',
      matchingPairs: [
        { id: 'm1', left: 'Mở nhanh Task Manager', right: 'Tổ hợp phím Ctrl + Shift + Esc' },
        { id: 'm2', left: 'Cưỡng bức đóng ứng dụng bị treo', right: 'Nút End task trong thẻ Processes' },
        { id: 'm3', left: 'Đổi hình nền Desktop và độ phân giải', right: 'Windows Settings -> Personalization' },
        { id: 'm4', left: 'Xem biểu đồ tải của CPU và RAM', right: 'Thẻ Performance trong Task Manager' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tổ hợp phím tắt nhanh nhất để mở trực tiếp cửa sổ Task Manager trong Windows là gì?',
        options: ['Ctrl + Shift + Esc', 'Ctrl + Alt + Delete', 'Alt + F4', 'Windows + R'],
        correctIndex: 0,
        explanation: 'Ctrl + Shift + Esc mở thẳng Task Manager ngay lập tức mà không qua màn hình chờ trung gian.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi một ứng dụng bị đơ (Not Responding) không thể tắt bằng nút X, bạn nên làm gì trong Task Manager?',
        options: [
          'Chọn ứng dụng đó trong thẻ Processes và nhấn nút "End task"',
          'Tắt màn hình máy tính',
          'Rút dây mạng Internet',
          'Nhấn phím Enter liên tục'
        ],
        correctIndex: 0,
        explanation: 'Lệnh End task yêu cầu hệ điều hành hủy ngay tiến trình đang bị lỗi, giải phóng tài nguyên.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tại sao trong phòng máy tính trường học, giáo viên thường chỉ cấp tài khoản loại "Standard User" cho học sinh?',
        options: [
          'Để ngăn chặn học sinh tự ý cài đặt phần mềm lạ, game hoặc xóa nhầm các tệp tin hệ thống quan trọng',
          'Vì tài khoản Standard User chạy máy tính nhanh hơn',
          'Vì tài khoản Administrator tốn tiền mua hơn',
          'Để học sinh không thể gõ văn bản'
        ],
        correctIndex: 0,
        explanation: 'Standard User giúp bảo vệ hệ thống không bị lây nhiễm mã độc do cài phần mềm tùy tiện.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Trong thẻ Performance của Task Manager, thông số "Memory" hiển thị điều gì?',
        options: [
          'Dung lượng bộ nhớ RAM đang được hệ thống và các phần mềm sử dụng',
          'Dung lượng còn trống của thẻ nhớ điện thoại',
          'Tốc độ quay của quạt tản nhiệt',
          'Số lượng chữ đã soạn trong Word'
        ],
        correctIndex: 0,
        explanation: 'Memory trong Task Manager đại diện cho bộ nhớ truy xuất ngẫu nhiên RAM.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Hành động nào sau đây khi sử dụng máy tính được coi là ĐẢM BẢO AN TOÀN hệ thống?',
        options: [
          'Khóa màn hình máy tính (Windows + L) khi rời khỏi bàn làm việc',
          'Dùng chung một mật khẩu 123456 cho mọi tài khoản',
          'Tắt hết các tiến trình có chữ System trong Task Manager',
          'Rút nguồn điện đột ngột mỗi khi tắt máy'
        ],
        correctIndex: 0,
        explanation: 'Khóa màn hình (Win + L) ngăn chặn người khác truy cập trái phép khi bạn tạm vắng mặt.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Chẩn Đoán Tình Trạng Sức Khỏe Máy Tính Trường Học',
        context: 'Máy tính phòng thực hành có hiện tượng quạt kêu to và mở ứng dụng chậm chạp.',
        mission: 'Sử dụng Task Manager để điều tra nguyên nhân và lập báo cáo chẩn đoán.',
        steps: [
          'Bước 1: Bấm `Ctrl + Shift + Esc` mở Task Manager, bấm vào cột `CPU` để sắp xếp từ cao xuống thấp.',
          'Bước 2: Ghi lại tên 3 ứng dụng đang tiêu tốn nhiều CPU và RAM nhất.',
          'Bước 3: Chuyển sang thẻ `Performance`, kiểm tra xem % RAM có bị vượt quá 90% không.',
          'Bước 4: Sử dụng `End task` đóng các phần mềm chạy ngầm không cần thiết.'
        ],
        outputRequirement: 'Ảnh chụp màn hình Task Manager trước và sau khi tối ưu kèm kết luận.',
        practicalTip: 'Nếu Memory liên tục ở mức 95-100%, máy tính đang bị thiếu RAM và cần nâng cấp thêm thanh RAM mới.'
      },
      mindmap: {
        id: 'mm_11_2',
        label: 'THỰC HÀNH HỆ ĐIỀU HÀNH',
        color: '#3b82f6',
        children: [
          {
            id: 'mm_11_2_1',
            label: 'Cài đặt hệ thống',
            children: [
              { id: 'mm_11_2_1_1', label: 'Windows Settings' },
              { id: 'mm_11_2_1_2', label: 'Tài khoản Administrator vs Standard' }
            ]
          },
          {
            id: 'mm_11_2_2',
            label: 'Task Manager (Ctrl+Shift+Esc)',
            children: [
              { id: 'mm_11_2_2_1', label: 'Thẻ Processes: Giám sát tài nguyên' },
              { id: 'mm_11_2_2_2', label: 'Thẻ Performance: Biểu đồ CPU, RAM' },
              { id: 'mm_11_2_2_3', label: 'Nút End task: Đóng ứng dụng treo' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bác Sĩ Máy Tính 11',
      badgeIcon: 'Activity',
      roleTitle: 'Chuyên Viên Quản Trị Hệ Thống Thực Hành',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ Task Manager và các công cụ quản trị hệ thống để bảo vệ chiếc máy tính luôn chạy mượt mà.',
      skillsUnlocked: ['Phím tắt Ctrl+Shift+Esc', 'Xử lý treo máy với End Task', 'Phân quyền tài khoản User']
    }
  },

  // Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet
  {
    id: 3,
    code: 'TIN11_B03',
    title: 'Phần mềm nguồn mở và phần mềm chạy trên Internet',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Nguồn mở & SaaS',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Văn hóa chia sẻ tri thức số: Sức mạnh mã nguồn mở FOSS và ứng dụng đám mây SaaS',
      description: 'Phân biệt phần mềm thương mại độc quyền và phần mềm nguồn mở, các giấy phép tự do GPL, cùng xu hướng chuyển dịch mạnh mẽ sang các ứng dụng chạy trên Internet (SaaS) không cần cài đặt.',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Mã nguồn đóng vs Mã nguồn mở', 'Giấy phép GNU GPL', 'Phần mềm dịch vụ đám mây (SaaS)']
    },
    objectives: [
      {
        id: 'obj_11_3_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất phần mềm nguồn mở & SaaS',
        description: 'Phân biệt được phần mềm thương mại nguồn đóng độc quyền với phần mềm nguồn mở (FOSS), hiểu được mô hình phần mềm dịch vụ chạy trên Internet (SaaS).',
        iconName: 'Code'
      },
      {
        id: 'obj_11_3_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Lựa chọn & khai thác phần mềm hợp lý',
        description: 'Lựa chọn và khai thác hiệu quả các giải pháp phần mềm nguồn mở (LibreOffice, GIMP, Inkscape) và ứng dụng đám mây (Google Docs, Canva) phục vụ học tập.',
        iconName: 'Cloud'
      },
      {
        id: 'obj_11_3_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền & đạo đức số',
        description: 'Có ý thức tôn trọng quyền tác giả, tuân thủ các điều khoản giấy phép mã nguồn mở (GNU GPL, MIT) và kiên quyết không dùng phần mềm bẻ khóa (crack).',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tải phần mềm "bẻ khóa" (Crack) trên mạng',
      scenario: 'Để tiết kiệm chi phí mua bản quyền bộ phần mềm văn phòng vài triệu đồng, một bạn học sinh tìm cách tải bản "crack" trôi nổi trên diễn đàn mạng. Sau khi cài đặt, máy tính bị dính mã độc tống tiền, toàn bộ ảnh kỷ niệm bị mã hóa đòi tiền chuộc.',
      pollQuestion: 'Giải pháp hợp pháp, an toàn và hoàn toàn miễn phí mà học sinh nên lựa chọn thay thế là gì?',
      pollOptions: [
        { id: 'p11_3_1', text: 'Sử dụng phần mềm nguồn mở (như LibreOffice) hoặc ứng dụng đám mây (Google Docs)', votesPercent: 94, isPopular: true, insight: 'Chính xác! Phần mềm nguồn mở và ứng dụng đám mây hoàn toàn miễn phí, hợp pháp 100% và an toàn tuyệt đối.' },
        { id: 'p11_3_2', text: 'Tiếp tục tìm trang web crack khác kín đáo hơn', votesPercent: 3, insight: 'Gần 90% tệp crack trên mạng đều chứa mã độc gián điệp đánh cắp tài khoản ngân hàng.' },
        { id: 'p11_3_3', text: 'Không dùng máy tính nữa', votesPercent: 3, insight: 'Không thể từ bỏ công nghệ trong thời đại chuyển đổi số.' }
      ],
      reflection: 'Phần mềm nguồn mở mở ra cơ hội bình đẳng tiếp cận công nghệ cho mọi học sinh mà không phải vi phạm pháp luật bản quyền.'
    },
    knowledge: [
      {
        id: 'tab_11_3_1',
        title: '1. Phần mềm thương mại và phần mềm nguồn mở (FOSS)',
        subtitle: 'Bản quyền đóng kín và văn hóa tự do chia sẻ tri thức',
        iconName: 'Lock',
        keyPoints: [
          'Phần mềm thương mại (Commercial Software): Được phát triển vì mục đích lợi nhuận, giấu kín mã nguồn (nguồn đóng). Người dùng phải trả tiền mua bản quyền sử dụng (License) và không được phép sao chép, chỉnh sửa. Ví dụ: Microsoft Office, Adobe Photoshop, Windows.',
          'Phần mềm nguồn mở (Free and Open Source Software - FOSS): Công khai toàn bộ mã nguồn lập trình. Người dùng được tự do: (1) Sử dụng cho mọi mục đích, (2) Nghiên cứu cách hoạt động, (3) Chỉnh sửa cải tiến, (4) Phân phối lại cho cộng đồng.',
          'Giấy phép nguồn mở phổ biến: GNU GPL (buộc các bản cải tiến cũng phải mở mã nguồn), MIT License, Apache License.',
          'Các ví dụ nguồn mở tiêu biểu: Hệ điều hành Linux, bộ văn phòng LibreOffice, đồ họa GIMP, Inkscape, máy chủ web Apache, hệ quản trị MySQL.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Phần mềm thương mại nguồn đóng', 'Phần mềm nguồn mở (FOSS)'],
          rows: [
            ['Mã nguồn (Source code)', 'Bí mật tuyệt đối, khóa kín', 'Công khai miễn phí cho toàn thế giới'],
            ['Chi phí sử dụng', 'Phải mua giấy phép bản quyền', 'Hầu hết miễn phí sử dụng'],
            ['Quyền chỉnh sửa', 'Nghiêm cấm người dùng can thiệp', 'Khuyến khích lập trình viên cải tiến'],
            ['Tính phụ thuộc', 'Phụ thuộc hoàn toàn vào công ty phát hành', 'Độc lập, cộng đồng toàn cầu cùng duy trì']
          ]
        },
        emCanNho: [
          'Phần mềm nguồn đóng giấu mã nguồn, phải trả phí bản quyền sử dụng.',
          'Phần mềm nguồn mở công khai mã nguồn, người dùng có 4 quyền tự do cơ bản.',
          'Phần mềm nguồn mở tuân thủ các giấy phép quốc tế như GNU GPL, MIT.'
        ]
      },
      {
        id: 'tab_11_3_2',
        title: '2. Phần mềm chạy trên Internet và điện toán đám mây (SaaS)',
        subtitle: 'Xu hướng ứng dụng không cần cài đặt (Software as a Service)',
        iconName: 'Cloud',
        keyPoints: [
          'Khái niệm: Phần mềm chạy trên Internet (SaaS) là phần mềm được lưu trữ và thực thi trên máy chủ đám mây, người dùng chỉ cần trình duyệt web và kết nối Internet để sử dụng mà không cần cài đặt lên máy tính cá nhân.',
          'Ưu điểm vượt trội: (1) Không chiếm dung lượng ổ cứng, (2) Tự động cập nhật phiên bản mới nhất, (3) Dễ dàng làm việc nhóm đồng thời thời gian thực, (4) Dữ liệu đồng bộ mọi lúc mọi nơi trên cả điện thoại và máy tính.',
          'Các ví dụ quen thuộc: Google Docs/Sheets/Slides, Canva, Office 365 Online, Figma.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Máy tính người dùng', desc: 'Chỉ cần Trình duyệt web (Chrome, Edge)' },
            { label: 'Mạng Internet', desc: 'Truyền tải dữ liệu mã hóa an toàn' },
            { label: 'Máy chủ Đám mây (Cloud)', desc: 'Xử lý tính toán, lưu trữ tệp tin tự động' }
          ]
        },
        emCanNho: [
          'Phần mềm chạy trên Internet (SaaS) không cần cài đặt lên máy tính cá nhân.',
          'Hỗ trợ cộng tác làm việc nhóm theo thời gian thực vượt trội.',
          'Dữ liệu được lưu trữ an toàn trên đám mây, truy cập được từ mọi thiết bị số.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Phần mềm Nguồn Đóng, Nguồn Mở và Ứng Dụng Web',
      instruction: 'Kéo thả các phần mềm vào đúng nhóm bản chất của chúng:',
      categories: [
        { id: 'cat_close', title: 'Phần mềm Nguồn Đóng Thương Mại', color: 'border-amber-500 bg-amber-950/40 text-amber-300' },
        { id: 'cat_open', title: 'Phần mềm Mã Nguồn Mở (FOSS)', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' }
      ],
      dragItems: [
        { id: 'f1', text: 'Hệ điều hành Microsoft Windows 11', category: 'cat_close', explanation: 'Sản phẩm thương mại nguồn đóng độc quyền của Microsoft.' },
        { id: 'f2', text: 'Bộ ứng dụng văn phòng LibreOffice', category: 'cat_open', explanation: 'Dự án nguồn mở hoàn toàn miễn phí thay thế Microsoft Office.' },
        { id: 'f3', text: 'Hệ điều hành nhân Linux (Ubuntu, Debian)', category: 'cat_open', explanation: 'Biểu tượng vĩ đại nhất của phong trào mã nguồn mở thế giới.' },
        { id: 'f4', text: 'Phần mềm đồ họa Adobe Photoshop', category: 'cat_close', explanation: 'Phần mềm độc quyền trả phí định kỳ đắt đỏ.' },
        { id: 'f5', text: 'Phần mềm chỉnh sửa ảnh GIMP', category: 'cat_open', explanation: 'Phần mềm đồ họa vector và bitmap nguồn mở chuẩn FOSS.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Đặc điểm cốt lõi nào sau đây phân biệt phần mềm nguồn mở (Open Source) với phần mềm nguồn đóng thương mại?',
        options: [
          'Mã nguồn lập trình được công khai để mọi người tự do nghiên cứu, chỉnh sửa và phân phối lại',
          'Phần mềm nguồn mở không bao giờ có lỗi',
          'Phần mềm nguồn mở chỉ chạy được trên điện thoại',
          'Phần mềm nguồn mở không cần dùng điện'
        ],
        correctIndex: 0,
        explanation: 'Tính công khai và tự do của mã nguồn (Source code) là bản chất định nghĩa phần mềm nguồn mở.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Phần mềm nào sau đây là một phần mềm mã nguồn mở nổi tiếng thế giới?',
        options: ['Hệ điều hành Linux', 'Microsoft Word', 'Adobe Illustrator', 'Apple iOS'],
        correctIndex: 0,
        explanation: 'Linux là hệ điều hành mã nguồn mở được phát triển bởi Linus Torvalds và cộng đồng toàn cầu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Ưu điểm LỚN NHẤT khi sử dụng các phần mềm chạy trên Internet (SaaS) như Google Docs hay Canva là gì?',
        options: [
          'Không cần cài đặt, không tốn ổ cứng và nhiều người có thể cùng chỉnh sửa một tài liệu theo thời gian thực',
          'Không cần có kết nối mạng Internet vẫn dùng bình thường',
          'Máy tính cũ từ 50 năm trước cũng chạy được',
          'Tự động làm bài thi hộ học sinh'
        ],
        correctIndex: 0,
        explanation: 'SaaS chạy trên nền web máy chủ đám mây, tối ưu khả năng cộng tác nhóm mọi lúc mọi nơi.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Giấy phép công cộng phổ biến nhất trong thế giới mã nguồn mở là gì?',
        options: ['GNU GPL (General Public License)', 'Giấy phép lái xe máy', 'Bản quyền độc quyền Microsoft EULA', 'Hợp đồng bảo hiểm'],
        correctIndex: 0,
        explanation: 'GNU GPL bảo đảm phần mềm và các sản phẩm phái sinh từ nó luôn giữ nguyên tính tự do nguồn mở.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Tại sao việc tải và sử dụng các phần mềm bẻ khóa (crack) lại cực kỳ NGUY HIỂM?',
        options: [
          'Các tệp crack thường bị tin tặc chèn sẵn virus gián điệp để đánh cắp mật khẩu, tống tiền và vi phạm pháp luật bản quyền',
          'Vì phần mềm crack sẽ làm hỏng bàn phím',
          'Vì tệp crack làm máy tính phát ra tiếng ồn',
          'Vì phần mềm crack chỉ có tiếng nước ngoài'
        ],
        correctIndex: 0,
        explanation: 'Crack là con đường số 1 lây nhiễm mã độc nguy hiểm và là hành vi xâm phạm quyền sở hữu trí tuệ.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Chuyển Đổi Số Học Đường: Xây Dựng Bộ Công Cụ Học Tập Miễn Phí 0 Đồng',
        context: 'Lớp học phát động phong trào sử dụng phần mềm hợp pháp, nói không với phần mềm lậu crack.',
        mission: 'Tìm kiếm và lập danh mục các phần mềm nguồn mở hoặc ứng dụng đám mây thay thế hoàn toàn các phần mềm thương mại đắt đỏ.',
        steps: [
          'Văn phòng: Thay Microsoft Office bằng LibreOffice hoặc Google Docs.',
          'Đồ họa ảnh: Thay Adobe Photoshop bằng GIMP (gimp.org).',
          'Đồ họa vector: Thay Adobe Illustrator bằng Inkscape (inkscape.org).',
          'Làm phim: Thay Adobe Premiere bằng CapCut Web hoặc Shotcut (shotcut.org).'
        ],
        outputRequirement: 'Bảng tổng hợp phần mềm thay thế kèm link tải trang chủ chính thống.',
        practicalTip: 'Sử dụng phần mềm nguồn mở giúp học sinh tự tin trình bày sản phẩm mà không sợ vi phạm bản quyền quốc tế.'
      },
      mindmap: {
        id: 'mm_11_3',
        label: 'PHẦN MỀM NGUỒN MỞ & ĐÁM MÂY',
        color: '#059669',
        children: [
          {
            id: 'mm_11_3_1',
            label: 'Phần mềm nguồn mở (FOSS)',
            children: [
              { id: 'mm_11_3_1_1', label: 'Công khai mã nguồn tự do' },
              { id: 'mm_11_3_1_2', label: 'Giấy phép GNU GPL, MIT' },
              { id: 'mm_11_3_1_3', label: 'Linux, LibreOffice, GIMP' }
            ]
          },
          {
            id: 'mm_11_3_2',
            label: 'Ứng dụng Internet (SaaS)',
            children: [
              { id: 'mm_11_3_2_1', label: 'Không cần cài đặt ổ cứng' },
              { id: 'mm_11_3_2_2', label: 'Cộng tác nhóm thời gian thực' },
              { id: 'mm_11_3_2_3', label: 'Google Docs, Canva, Figma' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ Nguồn Mở 11',
      badgeIcon: 'Code',
      roleTitle: 'Đại Sứ Công Nghệ Nguồn Mở & Đám Mây',
      congratsMessage: 'Tuyệt vời! Bạn đã thấu hiểu triết lý nhân văn của phần mềm nguồn mở và sẵn sàng khai thác các giải pháp đám mây văn minh.',
      skillsUnlocked: ['Phân biệt FOSS vs Nguồn đóng', 'Hiểu giấy phép GNU GPL', 'Ứng dụng đám mây SaaS']
    }
  },

  // Bài 4: Bên trong máy tính
  {
    id: 4,
    code: 'TIN11_B04',
    title: 'Bên trong máy tính',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Phần cứng máy tính',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khám phá trái tim điện tử: Giải mã kiến trúc Von Neumann và các linh kiện phần cứng',
      description: 'Mở thùng máy tính để tìm hiểu cấu tạo và nguyên lý hoạt động của bộ vi xử lý CPU, bộ nhớ trong RAM/ROM, bộ nhớ ngoài SSD/HDD và bo mạch chủ Mainboard kết nối toàn hệ thống.',
      accentColor: 'from-amber-600 to-orange-600',
      keyHighlights: ['Kiến trúc Von Neumann', 'Bộ ba CPU - RAM - SSD', 'Bo mạch chủ và Bus hệ thống']
    },
    objectives: [
      {
        id: 'obj_11_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Kiến trúc Von Neumann & chức năng linh kiện',
        description: 'Trình bày được nguyên lý kiến trúc máy tính Von Neumann và chức năng của các thành phần chính: CPU, RAM, ROM, các loại bộ nhớ ngoài và bo mạch chủ.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_11_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện & đánh giá thông số phần cứng',
        description: 'Đọc hiểu được các thông số kỹ thuật cơ bản của máy tính (Xung nhịp CPU GHz, dung lượng RAM GB, chuẩn ổ cứng SSD NVMe) khi chọn mua thiết bị.',
        iconName: 'Search'
      },
      {
        id: 'obj_11_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo quản & sử dụng phần cứng đúng cách',
        description: 'Hình thành thói quen sử dụng máy tính nơi khô ráo, thoáng mát và có ý thức giữ gìn vệ sinh các thiết bị điện tử.',
        iconName: 'Shield'
      }
    ],
    warmup: {
      title: 'Tình huống: Nâng cấp máy tính chơi game và học tập',
      scenario: 'Một chiếc máy tính bật ứng dụng rất chậm, mỗi lần mở máy phải đợi mất 5 phút. Bạn của bạn khuyên nên nâng cấp ổ cứng từ HDD truyền thống sang ổ thể rắn SSD NVMe.',
      pollQuestion: 'Tại sao thay ổ SSD lại làm máy tính khởi động nhanh gấp 10 lần so với ổ HDD?',
      pollOptions: [
        { id: 'p11_4_1', text: 'Ổ SSD dùng chip nhớ bán dẫn thể rắn (Flash) không có phiến đĩa quay cơ học nên tốc độ đọc ghi dữ liệu cực nhanh', votesPercent: 92, isPopular: true, insight: 'Chính xác! SSD đọc ghi điện tử thuần túy với tốc độ hàng nghìn MB/s, vượt trội hoàn toàn so với đầu kim cơ học của HDD.' },
        { id: 'p11_4_2', text: 'Vì ổ SSD nhẹ hơn nên máy tính chạy bay hơn', votesPercent: 4, insight: 'Trọng lượng vật lý nhẹ không làm tăng tốc độ xử lý bit dữ liệu.' },
        { id: 'p11_4_3', text: 'Vì ổ SSD dùng nhiều điện hơn', votesPercent: 4, insight: 'SSD thực chất tiết kiệm điện và mát hơn HDD rất nhiều.' }
      ],
      reflection: 'Hiểu rõ các linh kiện bên trong máy tính giúp bạn trở thành người tiêu dùng thông thái, tự tin chọn mua hoặc nâng cấp thiết bị hiệu quả.'
    },
    knowledge: [
      {
        id: 'tab_11_4_1',
        title: '1. Kiến trúc máy tính Von Neumann',
        subtitle: 'Nguyên lý nền tảng của mọi máy tính điện tử hiện đại',
        iconName: 'Cpu',
        keyPoints: [
          'Kiến trúc Von Neumann (do nhà toán học John von Neumann đề xuất năm 1945) xác lập cấu trúc kinh điển gồm 4 khối:',
          '  1. Bộ xử lý trung tâm (CPU): Điều khiển và thực hiện các phép tính.',
          '  2. Bộ nhớ (Memory): Gồm bộ nhớ trong lưu chương trình đang chạy và dữ liệu.',
          '  3. Thiết bị Vào/Ra (Input/Output Devices): Bàn phím, chuột, màn hình, máy in.',
          '  4. Đường truyền (Bus hệ thống): Kết nối các khối lại với nhau.',
          'Nguyên lý lưu trữ chương trình: Chương trình được nạp vào bộ nhớ dưới dạng mã nhị phân và được CPU thực hiện tuần tự từng lệnh.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thiết bị vào (Input)', desc: 'Bàn phím, Chuột, Máy quét' },
            { label: 'CPU + Bộ nhớ trong (RAM/ROM)', desc: 'Xử lý tính toán và điều phối tuần tự' },
            { label: 'Thiết bị ra (Output)', desc: 'Màn hình, Máy in, Loa' }
          ]
        },
        emCanNho: [
          'Kiến trúc Von Neumann là nền tảng của mọi máy tính kỹ thuật số hiện nay.',
          'Gồm 4 khối: Bộ xử lý CPU, Bộ nhớ, Thiết bị vào/ra và Bus kết nối.',
          'Dữ liệu và chương trình cùng được lưu trữ trong bộ nhớ dưới dạng mã nhị phân.'
        ]
      },
      {
        id: 'tab_11_4_2',
        title: '2. Các thành phần chính bên trong máy tính',
        subtitle: 'CPU, RAM, ROM, Ổ cứng lưu trữ và Bo mạch chủ',
        iconName: 'Layers',
        keyPoints: [
          'CPU (Central Processing Unit): Bộ não của máy tính, gồm Khối tính toán số học/logic (ALU), Khối điều khiển (CU) và các Thanh ghi (Registers). Tốc độ đo bằng GHz.',
          'RAM (Random Access Memory): Bộ nhớ truy xuất ngẫu nhiên, tốc độ siêu nhanh nhưng là bộ nhớ khả biến (mất sạch dữ liệu khi ngắt điện).',
          'ROM (Read Only Memory): Bộ nhớ chỉ đọc, lưu sẵn chương trình khởi động máy tính (BIOS/UEFI), không bị mất khi tắt nguồn.',
          'Bộ nhớ ngoài (SSD / HDD): Lưu trữ lâu dài hệ điều hành, phần mềm và tệp tin (SSD nhanh gấp 5-10 lần HDD).',
          'Bo mạch chủ (Mainboard): Bảng mạch in lớn nhất chứa socket CPU, khe cắm RAM, khe PCIe và các mạch dẫn liên kết toàn bộ linh kiện.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Linh kiện', 'Loại bộ nhớ', 'Đặc tính mất điện', 'Tốc độ truy xuất', 'Dung lượng tiêu biểu'],
          rows: [
            ['RAM', 'Bộ nhớ trong', 'Mất dữ liệu khi tắt nguồn', 'Cực nhanh (hàng chục GB/s)', '8GB - 32GB'],
            ['ROM', 'Bộ nhớ trong', 'Không mất dữ liệu (lưu BIOS)', 'Nhanh', 'vài MB'],
            ['SSD / HDD', 'Bộ nhớ ngoài', 'Không mất dữ liệu (lưu trữ lâu dài)', 'Trung bình (500MB/s - 7000MB/s)', '256GB - 2TB']
          ]
        },
        emCanNho: [
          'CPU là bộ não xử lý; RAM là bàn làm việc tạm thời (mất điện là mất dữ liệu).',
          'Ổ cứng SSD/HDD là tủ kho lưu trữ tài liệu lâu dài không sợ mất khi tắt điện.',
          'Bo mạch chủ Mainboard là xương sống kết nối toàn bộ linh kiện máy tính.'
        ]
      },
      {
        id: 'tab_11_4_3',
        title: '3. Cổng kết nối và các bus truyền dữ liệu',
        subtitle: 'Đường cao tốc vận chuyển tín hiệu điện tử',
        iconName: 'GitCommit',
        keyPoints: [
          'Bus hệ thống: Là tập hợp các đường dây dẫn điện tử truyền thông tin giữa CPU, RAM và các thiết bị:',
          '  - Bus dữ liệu (Data Bus): Truyền các bit dữ liệu.',
          '  - Bus địa chỉ (Address Bus): Xác định vị trí ô nhớ cần truy xuất.',
          '  - Bus điều khiển (Control Bus): Truyền các tín hiệu đọc/ghi/đồng bộ nhịp.',
          'Các cổng giao tiếp ngoài phổ biến: Cổng USB (USB-A, USB Type-C tốc độ cao), cổng xuất hình ảnh HDMI, DisplayPort, cổng mạng LAN RJ-45 và jack âm thanh 3.5mm.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Data Bus', desc: 'Đường truyền dữ liệu 64-bit hai chiều' },
            { label: 'Address Bus', desc: 'Chỉ định địa chỉ ô nhớ trong RAM' },
            { label: 'Control Bus', desc: 'Phát tín hiệu Read/Write nhịp đồng hồ' }
          ]
        },
        emCanNho: [
          'Bus là hệ thống dây dẫn truyền dữ liệu, địa chỉ và tín hiệu điều khiển giữa các khối.',
          'Bus càng rộng và tần số càng cao thì máy tính truyền dữ liệu càng nhanh.',
          'Các cổng kết nối hiện đại như USB-C, HDMI giúp truyền tải âm thanh, hình ảnh tốc độ cao.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Linh Kiện và Vai Trò Cốt Lõi',
      instruction: 'Nối linh kiện phần cứng với vai trò chuẩn xác:',
      matchingPairs: [
        { id: 'hw1', left: 'Bộ vi xử lý CPU', right: 'Thực hiện các phép tính số học/logic và điều khiển toàn máy' },
        { id: 'hw2', left: 'Bộ nhớ RAM', right: 'Lưu trữ tạm thời chương trình đang chạy, mất dữ liệu khi tắt nguồn' },
        { id: 'hw3', left: 'Ổ cứng SSD', right: 'Lưu trữ lâu dài hệ điều hành và dữ liệu, không mất khi ngắt điện' },
        { id: 'hw4', left: 'Bo mạch chủ (Mainboard)', right: 'Bảng mạch nền tảng gắn kết và cấp điện cho mọi linh kiện' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Theo kiến trúc máy tính kinh điển Von Neumann, các lệnh và dữ liệu được nạp vào đâu để CPU thực hiện tuần tự?',
        options: ['Bộ nhớ (Memory)', 'Bàn phím cơ', 'Màn hình máy tính', 'Loa âm thanh'],
        correctIndex: 0,
        explanation: 'Nguyên lý Von Neumann quy định chương trình và dữ liệu cùng được lưu trong bộ nhớ dưới dạng mã nhị phân.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Hiện tượng gì sẽ xảy ra với dữ liệu đang lưu trong bộ nhớ RAM khi bạn đột ngột tắt nguồn điện máy tính?',
        options: [
          'Toàn bộ dữ liệu trong RAM sẽ bị biến mất hoàn toàn',
          'Dữ liệu vẫn được giữ nguyên vĩnh viễn',
          'Dữ liệu tự động bay lên Google Drive',
          'Dữ liệu tự động in ra giấy'
        ],
        correctIndex: 0,
        explanation: 'RAM là bộ nhớ khả biến (Volatile Memory), cần có nguồn điện duy trì các transistor tích điện.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Bộ phận nào được coi là "bộ não" thực thi mọi phép toán số học và điều khiển các hoạt động của máy tính?',
        options: ['CPU (Central Processing Unit)', 'Chuột quang', 'Vỏ case kim loại', 'Quạt tản nhiệt'],
        correctIndex: 0,
        explanation: 'CPU là bộ vi xử lý trung tâm điều phối và tính toán toàn bộ lệnh chương trình.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Ổ thể rắn SSD có ưu điểm vượt trội nào so với ổ cứng cơ học HDD truyền thống?',
        options: [
          'Tốc độ đọc ghi dữ liệu nhanh hơn gấp 5 - 10 lần, chống sốc tốt và không gây tiếng ồn cơ học',
          'SSD có thể dùng làm gương soi',
          'SSD không bao giờ bị hỏng',
          'SSD nặng hơn HDD gấp 10 lần'
        ],
        correctIndex: 0,
        explanation: 'SSD sử dụng chip nhớ flash không có phiến đĩa quay nên tốc độ cực nhanh và bền bỉ khi di chuyển.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Hệ thống các đường dây dẫn điện tử chuyên dùng để vận chuyển dữ liệu giữa CPU, RAM và các thiết bị ngoại vi được gọi là gì?',
        options: ['Bus hệ thống (System Bus)', 'Dây thừng', 'Cáp truyền hình', 'Ống dẫn nước'],
        correctIndex: 0,
        explanation: 'Bus là mạng lưới đường truyền tín hiệu điện tử đồng bộ hóa hoạt động của toàn bộ linh kiện.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Tư Vấn Cấu Hình: Lắp Ráp Máy Tính Học Tập & Đồ Họa Phù Hợp Tài Chính',
        context: 'Gia đình dự định đầu tư một bộ máy tính để bạn học Tin học 11, học đồ họa GIMP và dựng video.',
        mission: 'Lựa chọn các linh kiện phần cứng tương thích và giải thích lý do lựa chọn.',
        steps: [
          'Chọn CPU: Tối thiểu 6 nhân 12 luồng (Intel Core i5 hoặc AMD Ryzen 5).',
          'Chọn RAM: Tối thiểu 16GB Dual Channel để chạy mượt ứng dụng đồ họa.',
          'Chọn Ổ cứng: SSD 512GB chuẩn M.2 NVMe tốc độ cao để khởi động máy trong 10 giây.',
          'Chọn Nguồn (PSU) và Mainboard tương thích với socket của CPU.'
        ],
        outputRequirement: 'Bảng báo giá cấu hình chi tiết kèm tổng chi phí dự kiến.',
        practicalTip: 'Luôn ưu tiên cấu hình 2 thanh RAM 8GB (Dual Channel) thay vì 1 thanh 16GB để băng thông bộ nhớ tăng gấp đôi.'
      },
      mindmap: {
        id: 'mm_11_4',
        label: 'BÊN TRONG MÁY TÍNH',
        color: '#d97706',
        children: [
          {
            id: 'mm_11_4_1',
            label: 'Kiến trúc Von Neumann',
            children: [
              { id: 'mm_11_4_1_1', label: 'CPU xử lý lệnh' },
              { id: 'mm_11_4_1_2', label: 'Bộ nhớ nhị phân' },
              { id: 'mm_11_4_1_3', label: 'Thiết bị Vào / Ra' }
            ]
          },
          {
            id: 'mm_11_4_2',
            label: 'Linh kiện cốt lõi',
            children: [
              { id: 'mm_11_4_2_1', label: 'CPU: Bộ não tính toán' },
              { id: 'mm_11_4_2_2', label: 'RAM: Tạm thời (mất điện mất)' },
              { id: 'mm_11_4_2_3', label: 'SSD: Lưu trữ lâu dài' },
              { id: 'mm_11_4_2_4', label: 'Mainboard & Bus hệ thống' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kỹ Sư Phần Cứng 11',
      badgeIcon: 'Cpu',
      roleTitle: 'Chuyên Viên Kiến Trúc Phần Cứng Máy Tính',
      congratsMessage: 'Tuyệt vời! Bạn đã mở toang cánh cửa phần cứng, thấu hiểu kiến trúc Von Neumann và sẵn sàng kết nối các thiết bị ngoại vi.',
      skillsUnlocked: ['Kiến trúc máy tính Von Neumann', 'Đọc thông số CPU / RAM / SSD', 'Hiểu chức năng Mainboard & Bus']
    }
  },

  // Bài 5: Kết nối máy tính với các thiết bị số
  {
    id: 5,
    code: 'TIN11_B05',
    title: 'Kết nối máy tính với các thiết bị số',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Kết nối thiết bị số',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Mở rộng không gian làm việc: Làm chủ các chuẩn kết nối ngoại vi có dây và không dây',
      description: 'Thực hành kết nối máy tính với máy chiếu, màn hình phụ qua cổng HDMI/VGA, kết nối máy in văn phòng và truyền tệp tin không dây qua Bluetooth/Wi-Fi Direct.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Cổng xuất hình HDMI vs VGA', 'Chế độ hiển thị Duplicate & Extend', 'Kết nối máy in & Bluetooth']
    },
    objectives: [
      {
        id: 'obj_11_5_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các chuẩn giao tiếp vật lý & không dây',
        description: 'Nêu được đặc điểm của các chuẩn kết nối vật lý (HDMI, VGA, USB) và chuẩn kết nối không dây (Bluetooth, Wi-Fi Direct).',
        iconName: 'Tv'
      },
      {
        id: 'obj_11_5_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác kết nối máy chiếu & máy in',
        description: 'Thực hiện được việc kết nối máy tính với máy chiếu/màn hình phụ bằng tổ hợp phím `Windows + P` (chọn Duplicate hoặc Extend) và kết nối máy in in tài liệu thành công.',
        iconName: 'Printer'
      },
      {
        id: 'obj_11_5_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thao tác kỹ thuật chuẩn xác',
        description: 'Thực hiện đúng quy tắc an toàn điện tử: cắm/rút cáp thẳng chân tiếp xúc, ngắt kết nối an toàn (Eject) tránh hỏng thiết bị số.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Buổi thuyết trình trước toàn trường',
      scenario: 'Bạn được phân công chiếu bài thuyết trình của nhóm lên màn hình máy chiếu hội trường. Khi cắm cáp HDMI từ laptop vào máy chiếu, màn hình hội trường vẫn báo "No Signal" màu xanh lè.',
      pollQuestion: 'Phím tắt kỳ diệu nào trong Windows giúp bạn kích hoạt việc truyền tín hiệu hình ảnh lên máy chiếu ngay lập tức?',
      pollOptions: [
        { id: 'p11_5_1', text: 'Tổ hợp phím Windows + P (Project)', votesPercent: 93, isPopular: true, insight: 'Chính xác! Windows + P mở menu chọn chế độ hiển thị: Duplicate (nhân bản), Extend (mở rộng không gian) hoặc Second screen only.' },
        { id: 'p11_5_2', text: 'Nhấn phím F5 liên tục', votesPercent: 4, insight: 'F5 chỉ dùng để làm mới trang (Refresh).' },
        { id: 'p11_5_3', text: 'Tắt nguồn máy chiếu đi bật lại', votesPercent: 3, insight: 'Nếu máy tính chưa bật chế độ xuất tín hiệu thì máy chiếu bật lại vẫn báo No Signal.' }
      ],
      reflection: 'Làm chủ kỹ năng kết nối thiết bị số giúp bạn luôn tự tin, làm chủ mọi buổi báo cáo dự án học đường và thuyết trình chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_5_1',
        title: '1. Kết nối màn hình phụ, máy chiếu qua HDMI/VGA',
        subtitle: 'Mở rộng không gian làm việc và trình chiếu',
        iconName: 'Tv',
        keyPoints: [
          'Chuẩn VGA (Video Graphics Array): Cổng màu xanh dương có 15 chân kim, truyền tín hiệu hình ảnh tương tự (Analog), không truyền được âm thanh.',
          'Chuẩn HDMI (High-Definition Multimedia Interface): Cổng dẹt hiện đại truyền đồng thời cả hình ảnh kỹ thuật số độ nét cao (Full HD, 4K) và âm thanh đa kênh chỉ qua một sợi cáp duy nhất.',
          'Tổ hợp phím trình chiếu `Windows + P` cung cấp 4 chế độ:',
          '  - PC screen only: Chỉ hiển thị trên màn hình laptop.',
          '  - Duplicate: Sao chép y hệt màn hình laptop lên máy chiếu (thích hợp thuyết trình).',
          '  - Extend: Mở rộng màn hình thành 2 không gian làm việc độc lập (thích hợp làm việc đa nhiệm).',
          '  - Second screen only: Tắt màn hình laptop, chỉ hiển thị trên màn hình phụ.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Đặc điểm', 'Cổng VGA (Cũ)', 'Cổng HDMI (Hiện đại)'],
          rows: [
            ['Tín hiệu truyền', 'Tương tự (Analog)', 'Kỹ thuật số (Digital)'],
            ['Truyền âm thanh', 'Không truyền được âm thanh (cần cáp riêng)', 'Truyền đồng thời cả hình ảnh và âm thanh'],
            ['Độ phân giải tối đa', 'Thường giới hạn Full HD', 'Hỗ trợ 4K, 8K siêu sắc nét'],
            ['Hình dạng cổng', 'Hình thang 15 chân có 2 ốc vặn', 'Dẹt nhỏ gọn, cắm nhanh chóng']
          ]
        },
        emCanNho: [
          'HDMI truyền cả hình ảnh số và âm thanh qua 1 sợi cáp; VGA chỉ truyền hình ảnh.',
          'Dùng phím tắt `Windows + P` để chuyển đổi chế độ hiển thị màn hình ngoài.',
          'Chế độ Duplicate dùng cho thuyết trình; Extend dùng để mở rộng thêm màn hình làm việc.'
        ]
      },
      {
        id: 'tab_11_5_2',
        title: '2. Kết nối máy in và truyền dữ liệu Bluetooth/USB',
        subtitle: 'In ấn văn phòng và trao đổi tệp tin không dây tiện lợi',
        iconName: 'Printer',
        keyPoints: [
          'Kết nối máy in: Cắm cáp USB hoặc kết nối chung mạng Wi-Fi/LAN -> Vào `Settings -> Bluetooth & devices -> Printers & scanners` -> Chọn `Add device` để hệ điều hành tự động cài đặt Driver máy in.',
          'Kết nối Bluetooth: Bật Bluetooth trên cả máy tính và thiết bị (Tai nghe, chuột, điện thoại) -> Ghép đôi (Pairing) bằng mã xác thực -> Truyền gửi tệp tin không dây an toàn.',
          'Ngắt kết nối an toàn (Safely Remove Hardware and Eject Media): Luôn nhấp biểu tượng USB dưới thanh Taskbar chọn Eject trước khi rút USB ra khỏi máy tính để tránh lỗi tệp tin.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Cắm cáp / Bật Bluetooth', desc: 'Kết nối vật lý hoặc sóng không dây' },
            { label: '2. Cài đặt Driver', desc: 'Hệ điều hành nhận diện và nạp trình điều khiển' },
            { label: '3. In ấn & Truyền tệp', desc: 'Sử dụng lệnh Print hoặc Send files qua Bluetooth' }
          ]
        },
        emCanNho: [
          'Máy in cần có trình điều khiển (Driver) phù hợp để hệ điều hành gửi lệnh in.',
          'Bluetooth hỗ trợ kết nối không dây tầm ngắn cho tai nghe, chuột và truyền file.',
          'Luôn sử dụng tính năng "Eject" an toàn trước khi rút ổ đĩa USB ra khỏi máy.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Chế độ Hiển thị Windows + P và Tình huống Sử dụng',
      instruction: 'Nối chế độ Project với nhu cầu thực tế phù hợp:',
      matchingPairs: [
        { id: 'p_dup', left: 'Chế độ Duplicate', right: 'Thuyết trình trên máy chiếu để người nghe thấy đúng những gì bạn thấy' },
        { id: 'p_ext', left: 'Chế độ Extend', right: 'Một màn hình mở tài liệu Word, màn hình kia mở YouTube nghe nhạc' },
        { id: 'p_sec', left: 'Chế độ Second screen only', right: 'Gấp nắp laptop lại và chỉ sử dụng màn hình cong 27 inch' },
        { id: 'p_hdmi', left: 'Cáp kết nối HDMI', right: 'Truyền đồng thời cả hình ảnh sắc nét và âm thanh ra loa TV/máy chiếu' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tổ hợp phím nào trong hệ điều hành Windows dùng để mở menu tùy chọn xuất hình ảnh ra máy chiếu hoặc màn hình phụ?',
        options: ['Windows + P', 'Windows + D', 'Windows + L', 'Ctrl + Alt + Del'],
        correctIndex: 0,
        explanation: 'Windows + P (Project) mở nhanh bảng điều khiển các chế độ hiển thị đa màn hình.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Điểm ưu việt lớn nhất của cổng HDMI so với cổng VGA cũ là gì?',
        options: [
          'HDMI truyền đồng thời cả tín hiệu hình ảnh kỹ thuật số độ nét cao và âm thanh chỉ qua 1 sợi cáp',
          'HDMI làm máy tính chạy mát hơn',
          'HDMI không cần dùng dây dẫn',
          'HDMI chỉ dùng cho máy giặt'
        ],
        correctIndex: 0,
        explanation: 'HDMI mang cả audio và video số, trong khi VGA chỉ mang video tương tự và chất lượng thấp hơn.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi bạn muốn vừa xem video bài giảng trên màn hình lớn, vừa mở phần mềm soạn bài tập trên màn hình laptop độc lập, bạn nên chọn chế độ nào trong Windows + P?',
        options: ['Extend (Mở rộng)', 'Duplicate (Nhân bản)', 'PC screen only', 'Second screen only'],
        correctIndex: 0,
        explanation: 'Chế độ Extend tạo thành một không gian làm việc kép rộng lớn cho phép kéo thả cửa sổ giữa 2 màn hình.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Tại sao trước khi rút ổ đĩa USB ra khỏi máy tính, bạn luôn nên thực hiện thao tác "Safely Remove Hardware and Eject Media"?',
        options: [
          'Để đảm bảo hệ điều hành đã ghi xong toàn bộ dữ liệu tạm thời vào USB, tránh làm hỏng hoặc mất file',
          'Để USB không bị nóng',
          'Để máy tính tự động diệt virus',
          'Để bàn phím không bị khóa'
        ],
        correctIndex: 0,
        explanation: 'Eject đảm bảo cơ chế bộ đệm ghi (Write-caching) đã hoàn tất việc lưu file trước khi ngắt kết nối vật lý.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Để kết nối một tai nghe không dây hoặc chuột không dây tầm ngắn với máy tính xách tay, công nghệ truyền thông nào được sử dụng phổ biến nhất?',
        options: ['Sóng Bluetooth', 'Cáp quang biển', 'Sóng truyền hình vệ tinh', 'Tia hồng ngoại xa'],
        correctIndex: 0,
        explanation: 'Bluetooth là chuẩn kết nối không dây tầm ngắn (dưới 10m) tiết kiệm điện năng cho thiết bị cá nhân.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thiết Lập Không Gian Học Tập Hai Màn Hình (Dual Monitors Setup)',
        context: 'Nâng cao năng suất học tập trực tuyến bằng việc gắn thêm màn hình phụ cho laptop.',
        mission: 'Kết nối laptop với màn hình ngoài qua cáp HDMI và thiết lập chế độ Extend.',
        steps: [
          'Bước 1: Cắm một đầu cáp HDMI vào cổng laptop, đầu còn lại cắm vào màn hình phụ.',
          'Bước 2: Bấm tổ hợp phím `Windows + P`, chọn chế độ `Extend`.',
          'Bước 3: Mở `Display settings`, kéo thả vị trí ảo màn hình 1 và 2 cho đúng với vị trí đặt màn hình thực tế trên bàn.',
          'Bước 4: Kéo thử một cửa sổ từ màn hình laptop sang màn hình phụ mượt mà.'
        ],
        outputRequirement: 'Ảnh chụp không gian bàn học 2 màn hình đang hoạt động hiệu quả.',
        practicalTip: 'Đặt màn hình lớn hơn làm màn hình chính (Main Display) để thanh Taskbar hiển thị đầy đủ icon làm việc.'
      },
      mindmap: {
        id: 'mm_11_5',
        label: 'KẾT NỐI THIẾT BỊ SỐ',
        color: '#0284c7',
        children: [
          {
            id: 'mm_11_5_1',
            label: 'Kết nối xuất hình ảnh',
            children: [
              { id: 'mm_11_5_1_1', label: 'HDMI (Hình ảnh + Âm thanh)' },
              { id: 'mm_11_5_1_2', label: 'VGA (Chỉ hình ảnh tương tự)' },
              { id: 'mm_11_5_1_3', label: 'Windows + P (Duplicate, Extend)' }
            ]
          },
          {
            id: 'mm_11_5_2',
            label: 'Thiết bị ngoại vi & Không dây',
            children: [
              { id: 'mm_11_5_2_1', label: 'Máy in (Cài đặt Driver)' },
              { id: 'mm_11_5_2_2', label: 'Bluetooth (Tai nghe, Chuột)' },
              { id: 'mm_11_5_2_3', label: 'Eject an toàn thiết bị USB' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Kết Nối Số 11',
      badgeIcon: 'Tv',
      roleTitle: 'Chuyên Viên Tích Hợp Thiết Bị Ngoại Vi',
      congratsMessage: 'Tuyệt vời! Bạn đã hoàn thành toàn bộ Chủ đề 1 Lớp 11 và làm chủ kỹ năng kết nối các thiết bị số chuyên nghiệp.',
      skillsUnlocked: ['Phím tắt Windows + P', 'Phân biệt HDMI vs VGA', 'Ghép nối Bluetooth & Eject USB']
    }
  }
];
