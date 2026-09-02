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
        title: 'Bản chất và chức năng hệ điều hành',
        description: 'Trình bày được vai trò trung gian và các chức năng chính: quản lý tệp, quản lý thiết bị, quản lý tiến trình và cung cấp giao diện.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_11_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân loại các hệ điều hành',
        description: 'So sánh được đặc điểm của hệ điều hành cho máy tính cá nhân (Windows, Linux, macOS) và thiết bị di động (Android, iOS).',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền hệ điều hành',
        description: 'Hình thành ý thức sử dụng hệ điều hành có bản quyền hợp pháp và cập nhật bản vá bảo mật thường xuyên.',
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
        title: '1. Khái niệm và Vai trò của Hệ điều hành',
        subtitle: 'Cầu nối giữa người dùng, phần mềm ứng dụng và phần cứng',
        iconName: 'Server',
        keyPoints: [
          'Hệ điều hành (Operating System - OS) là tập hợp các chương trình quản lý, điều phối tài nguyên phần cứng và cung cấp môi trường chạy các phần mềm ứng dụng.',
          'Các chức năng cơ bản: Quản lý bộ nhớ (RAM), quản lý bộ vi xử lý (CPU Schedule), quản lý thiết bị ngoại vi, quản lý hệ thống tệp tin (File System) và cung cấp giao diện người dùng.',
          'Lịch sử giao diện: Từ giao diện dòng lệnh CLI (MS-DOS) đến giao diện đồ họa GUI (Windows 95 -> 11, macOS) và giao diện cảm ứng đa điểm (Touch UI trên Android, iOS).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng & Ứng dụng', desc: 'Word, Excel, Chrome, Photoshop' },
            { label: 'Hệ điều hành (OS)', desc: 'Windows, Linux, macOS, Android, iOS' },
            { label: 'Phần cứng (Hardware)', desc: 'CPU, RAM, Ổ đĩa SSD, GPU, Màn hình, Chuột' }
          ]
        },
        emCanNho: [
          'Hệ điều hành là môi trường trung gian điều khiển toàn bộ tài nguyên phần cứng máy tính.',
          'Hệ điều hành cung cấp giao diện đồ họa trực quan (GUI) giúp con người dễ dàng sử dụng thiết bị.',
          'Các hệ điều hành phổ biến: Máy tính (Windows, Linux, macOS), Di động (Android, iOS).'
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
        explanation: 'Viết bài văn là nhiệm vụ của con người hoặc phần mềm chuyên biệt, không phải chức năng quản lý tài nguyên của hệ điều hành.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Giao diện dòng lệnh (Command Line Interface) có chữ viết tắt là gì?',
        options: ['CLI', 'GUI', 'API', 'CPU'],
        correctIndex: 0,
        explanation: 'CLI là viết tắt của Command Line Interface (Giao diện dòng lệnh).',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hệ điều hành di động Android được phát triển dựa trên nền tảng nhân (Kernel) của hệ điều hành nào?',
        options: ['Linux', 'MS-DOS', 'Windows NT', 'macOS'],
        correctIndex: 0,
        explanation: 'Android được Google phát triển dựa trên nền tảng nhân mã nguồn mở Linux.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Hệ điều hành mã nguồn mở Linux có ưu điểm nổi bật nào so với các hệ điều hành thương mại?',
        options: [
          'Mã nguồn công khai, miễn phí, tính bảo mật cao và người dùng có quyền tự do chỉnh sửa',
          'Chỉ cài đặt được trên máy tính của hãng Apple',
          'Không thể kết nối Internet',
          'Không hỗ trợ đa nhiệm'
        ],
        correctIndex: 0,
        explanation: 'Linux là hệ điều hành nguồn mở miễn phí, cho phép cộng đồng phát triển kiểm tra mã nguồn và tùy biến linh hoạt.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Hành động nào sau đây là thói quen sử dụng hệ điều hành an toàn và bền vững nhất?',
        options: [
          'Thường xuyên cài đặt các bản vá bảo mật chính thức và sao lưu tệp định kỳ',
          'Tắt toàn bộ phần mềm chống virus và tường lửa để máy chạy nhanh hơn',
          'Tải và kích hoạt các phần mềm bẻ khóa trôi nổi trên mạng',
          'Tắt máy bằng cách rút phích cắm điện trực tiếp'
        ],
        correctIndex: 0,
        explanation: 'Cập nhật bản vá bảo mật và sao lưu dữ liệu là biện pháp phòng chống mã độc và sự cố hàng đầu.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Khảo sát và Tối ưu hóa Hệ điều hành Máy tính',
        context: 'Sau một thời gian học tập, máy tính phòng máy hoặc máy tính cá nhân bị chậm khi khởi động.',
        mission: 'Sử dụng công cụ quản trị của hệ điều hành để kiểm tra và tối ưu hiệu suất.',
        steps: [
          'Bước 1: Mở Task Manager (Ctrl + Shift + Esc) và xem thông số CPU, RAM, Disk.',
          'Bước 2: Vào tab Startup Apps để vô hiệu hóa (Disable) các ứng dụng tự khởi động không cần thiết.',
          'Bước 3: Sử dụng công cụ Disk Cleanup để dọn dẹp các tệp tạm thời (Temporary Files).'
        ],
        outputRequirement: 'Bảng ghi nhận dung lượng RAM và thời gian khởi động trước và sau khi tối ưu.',
        practicalTip: 'Không vô hiệu hóa các tiến trình có chữ "System" hoặc "Windows Explorer" trong Task Manager.'
      },
      mindmap: {
        id: 'mm_11_1',
        label: 'HỆ ĐIỀU HÀNH',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_1_1',
            label: 'Chức năng cơ bản',
            children: [
              { id: 'mm_11_1_1_1', label: 'Quản lý CPU & RAM' },
              { id: 'mm_11_1_1_2', label: 'Quản lý tệp & thư mục' },
              { id: 'mm_11_1_1_3', label: 'Giao diện người dùng' }
            ]
          },
          {
            id: 'mm_11_1_2',
            label: 'Phân loại',
            children: [
              { id: 'mm_11_1_2_1', label: 'Máy tính: Windows, Linux, macOS' },
              { id: 'mm_11_1_2_2', label: 'Di động: Android, iOS' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Viên Hệ Điều Hành 11',
      badgeIcon: 'Cpu',
      roleTitle: 'Quản Trị Viên Hệ Điều Hành Cơ Bản',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ lý thuyết và thực hành Hệ điều hành theo chuẩn SGK Tin học 11 GDPT 2018.',
      skillsUnlocked: ['Hiểu kiến trúc OS', 'Quản lý tiến trình Task Manager', 'Tối ưu hóa hệ thống máy tính']
    }
  },

  // Bài 2: Thực hành sử dụng hệ điều hành
  {
    id: 2,
    code: 'TIN11_B02',
    title: 'Thực hành sử dụng hệ điều hành',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Thực hành OS',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Làm chủ các công cụ quản trị hệ thống và kiểm soát tiến trình',
      description: 'Thực hành thiết lập cá nhân hóa giao diện, quản lý tài khoản người dùng, giám sát tài nguyên qua Task Manager và xử lý sự cố ứng dụng bị treo.',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Giám sát hiệu suất với Task Manager', 'Quản lý User Accounts', 'Tắt ứng dụng bị treo (End Task)']
    },
    objectives: [
      {
        id: 'obj_11_2_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các tiện ích hệ thống',
        description: 'Nắm rõ vai trò của Task Manager, Settings, Control Panel và các tiện ích dọn dẹp hệ thống.',
        iconName: 'Wrench'
      },
      {
        id: 'obj_11_2_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác xử lý sự cố tiến trình',
        description: 'Biết cách đọc biểu đồ tài nguyên CPU/RAM, xác định phần mềm gây đơ máy và buộc dừng bằng End Task an toàn.',
        iconName: 'Activity'
      },
      {
        id: 'obj_11_2_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn trọng khi quản trị hệ thống',
        description: 'Có ý thức sao lưu dữ liệu trước khi thay đổi cài đặt hệ thống và bảo vệ mật khẩu tài khoản máy tính.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Phần mềm đang dùng bị đơ (Not Responding)',
      scenario: 'Bạn đang chỉnh sửa một file tài liệu thì phần mềm bị đơ, con trỏ chuột quay tròn và xuất hiện dòng chữ "(Not Responding)". Bấm dấu [X] đỏ góc trên không tắt được.',
      pollQuestion: 'Phím tắt thần thánh nào giúp mở công cụ quản lý tiến trình để đóng ứng dụng bị treo một cách chuyên nghiệp?',
      pollOptions: [
        { id: 'p11_2_1', text: 'Ctrl + Shift + Esc (hoặc Ctrl + Alt + Delete)', votesPercent: 88, isPopular: true, insight: 'Chính xác! Phím tắt này mở trực tiếp trình quản lý tiến trình Task Manager của Windows.' },
        { id: 'p11_2_2', text: 'Rút ngay phích cắm điện máy tính', votesPercent: 5, insight: 'Rút điện đột ngột có thể làm hỏng ổ cứng và mất dữ liệu chưa kịp lưu.' },
        { id: 'p11_2_3', text: 'Bấm liên tục chuột trái vào màn hình', votesPercent: 7, insight: 'Bấm liên tục sẽ làm nghẽn hàng đợi xử lý của hệ điều hành, khiến máy càng đơ thêm.' }
      ],
      reflection: 'Sử dụng Task Manager là kỹ năng cứu nguy căn bản của mọi người dùng máy tính chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_2_1',
        title: '1. Giám sát Hiệu suất với Task Manager',
        subtitle: 'Quản lý CPU, Bộ nhớ RAM và các tiến trình nền',
        iconName: 'Activity',
        keyPoints: [
          'Thẻ Processes: Hiển thị danh sách tất cả các ứng dụng (Apps) và tiến trình chạy ngầm (Background Processes) cùng mức tiêu hao tài nguyên.',
          'Thẻ Performance: Biểu đồ thời gian thực về mức độ sử dụng CPU, RAM, Ổ đĩa (SSD/HDD) và Mạng (Wi-Fi/Ethernet).',
          'Thao tác "End Task": Cho phép buộc dừng ngay lập tức một ứng dụng bị lỗi, giải phóng tài nguyên cho hệ thống.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bước 1: Mở Task Manager', desc: 'Nhấn Ctrl + Shift + Esc' },
            { label: 'Bước 2: Tìm ứng dụng treo', desc: 'Kiểm tra cột CPU / Memory' },
            { label: 'Bước 3: Nhấn End Task', desc: 'Buộc dừng ứng dụng an toàn' }
          ]
        },
        emCanNho: [
          'Task Manager là công cụ giám sát tiến trình và hiệu năng tài nguyên máy tính.',
          'Tổ hợp phím tắt nhanh để mở Task Manager: `Ctrl + Shift + Esc`.',
          'Dùng `End Task` để tắt ứng dụng bị treo một cách an toàn mà không cần khởi động lại máy.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác và Ý nghĩa trong Task Manager',
      instruction: 'Nối thao tác quản trị với mục đích sử dụng tương ứng:',
      matchingPairs: [
        { id: 'm1', left: 'Ctrl + Shift + Esc', right: 'Mở nhanh công cụ Task Manager' },
        { id: 'm2', left: 'Thẻ Performance', right: 'Xem biểu đồ nhịp tim sử dụng CPU, RAM, Disk' },
        { id: 'm3', left: 'Nút End Task', right: 'Buộc đóng tiến trình hoặc phần mềm bị treo' },
        { id: 'm4', left: 'Thẻ Startup apps', right: 'Bật/tắt các ứng dụng tự khởi động cùng Windows' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tổ hợp phím tắt nào sau đây mở TRỰC TIẾP cửa sổ Task Manager trong Windows?',
        options: ['Ctrl + Shift + Esc', 'Ctrl + C', 'Alt + F4', 'Windows + D'],
        correctIndex: 0,
        explanation: 'Ctrl + Shift + Esc là tổ hợp phím mở trực tiếp Task Manager mà không cần qua màn hình trung gian.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Trong thẻ Performance của Task Manager, thông số "Memory" cho biết điều gì?',
        options: [
          'Dung lượng bộ nhớ truy cập ngẫu nhiên (RAM) đang được sử dụng',
          'Dung lượng còn trống của pin laptop',
          'Tốc độ quạt tản nhiệt của thùng máy',
          'Độ phân giải của màn hình'
        ],
        correctIndex: 0,
        explanation: 'Memory thể hiện mức tiêu thụ bộ nhớ RAM vật lý của toàn bộ hệ thống.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để giảm thời gian khởi động máy tính Windows, ta nên thiết lập điều gì trong Task Manager?',
        options: [
          'Vào thẻ Startup apps và chuyển trạng thái các phần mềm không thiết yếu thành "Disabled"',
          'Xóa vĩnh viễn thư mục Windows',
          'Tắt màn hình ngay khi vừa bấm nút nguồn',
          'Rút dây chuột'
        ],
        correctIndex: 0,
        explanation: 'Vô hiệu hóa (Disable) các ứng dụng khởi động cùng Windows giúp hệ điều hành tải nhanh hơn rất nhiều.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Khi một ứng dụng có trạng thái "Not Responding" trong Task Manager, điều đó có nghĩa là gì?',
        options: [
          'Ứng dụng đang bị lỗi treo và tạm thời ngừng phản hồi tín hiệu từ hệ điều hành',
          'Ứng dụng đã hoàn thành xong nhiệm vụ xuất sắc',
          'Ứng dụng yêu cầu người dùng nạp tiền',
          'Máy tính sắp nổ'
        ],
        correctIndex: 0,
        explanation: 'Not Responding báo hiệu tiến trình ứng dụng đang bị nghẽn logic hoặc lỗi vòng lặp vô hạn.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Tiện ích nào có sẵn trong Windows dùng để quét và giải phóng dung lượng rác trên ổ đĩa?',
        options: ['Disk Cleanup', 'Calculator', 'Paint 3D', 'Notepad'],
        correctIndex: 0,
        explanation: 'Disk Cleanup là công cụ chính thức dọn dẹp các tệp tạm (temporary files) và tệp rác hệ thống an toàn.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Bài thực hành: Khảo sát tài nguyên hệ thống phòng thực hành',
        context: 'Thực hiện bài kiểm tra hiệu năng định kỳ cho máy tính học tập.',
        mission: 'Ghi lại báo cáo cấu hình và mức độ sử dụng tài nguyên của máy tính bạn đang ngồi.',
        steps: [
          'Bước 1: Mở Task Manager, chuyển sang thẻ Performance.',
          'Bước 2: Ghi nhận tên bộ vi xử lý (CPU), tổng dung lượng RAM và loại ổ đĩa (SSD hay HDD).',
          'Bước 3: Ghi lại mức tiêu thụ RAM khi mở 5 tab trình duyệt web.'
        ],
        outputRequirement: 'Một phiếu khảo sát thông số cấu hình và nhận xét khả năng đáp ứng học tập.',
        practicalTip: 'So sánh tốc độ đọc/ghi giữa ổ cứng SSD và HDD để hiểu tại sao máy dùng SSD khởi động nhanh hơn.'
      },
      mindmap: {
        id: 'mm_11_2',
        label: 'THỰC HÀNH HỆ ĐIỀU HÀNH',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_2_1',
            label: 'Task Manager',
            children: [
              { id: 'mm_11_2_1_1', label: 'Quản lý Processes' },
              { id: 'mm_11_2_1_2', label: 'Theo dõi Performance' },
              { id: 'mm_11_2_1_3', label: 'Quản lý Startup Apps' }
            ]
          },
          {
            id: 'mm_11_2_2',
            label: 'Xử lý sự cố',
            children: [
              { id: 'mm_11_2_2_1', label: 'Đóng app treo với End Task' },
              { id: 'mm_11_2_2_2', label: 'Dọn dẹp rác Disk Cleanup' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Tinh Chỉnh OS 11',
      badgeIcon: 'Activity',
      roleTitle: 'Chuyên Viên Quản Trị Hệ Thống Thực Hành',
      congratsMessage: 'Tuyệt vời! Bạn đã thành thạo kỹ năng quản lý tiến trình và tối ưu hóa hệ thống máy tính.',
      skillsUnlocked: ['Sử dụng Task Manager', 'Tắt app treo End Task', 'Quản lý khởi động Startup']
    }
  },

  // Bài 3: Phần mềm nguồn mở và phần mềm chạy trên Internet
  {
    id: 3,
    code: 'TIN11_B03',
    title: 'Phần mềm nguồn mở và phần mềm chạy trên Internet',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính và xã hội tri thức',
    topicBadge: 'Phần mềm nguồn mở',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Sức mạnh của tự do công nghệ và điện toán đám mây SaaS',
      description: 'Phân biệt phần mềm thương mại độc quyền, phần mềm nguồn mở FOSS (giấy phép GPL), phần mềm miễn phí và các ứng dụng chạy trực tiếp trên nền tảng đám mây.',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Phần mềm mã nguồn mở (FOSS)', 'Giấy phép công cộng GPL', 'Phần mềm dịch vụ (SaaS)']
    },
    objectives: [
      {
        id: 'obj_11_3_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt nguồn đóng và nguồn mở',
        description: 'Trình bày được sự khác nhau giữa phần mềm nguồn đóng (thương mại độc quyền) và phần mềm nguồn mở (FOSS).',
        iconName: 'FileCode'
      },
      {
        id: 'obj_11_3_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện các giấy phép mở',
        description: 'Nhận biết được ý nghĩa của giấy phép GNU GPL và các giải pháp phần mềm chạy trực tiếp trên Internet (SaaS).',
        iconName: 'Globe'
      },
      {
        id: 'obj_11_3_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền tác giả',
        description: 'Có thái độ tôn trọng quyền tác giả và lựa chọn giải pháp phần mềm hợp pháp trong học tập và công việc.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Cần phần mềm văn phòng nhưng không có kinh phí mua bản quyền',
      scenario: 'Một trường THPT vùng khó khăn cần trang bị phần mềm soạn thảo văn bản và bảng tính cho 40 máy tính nhưng kinh phí mua bản quyền Microsoft Office có giới hạn.',
      pollQuestion: 'Giải pháp nào vừa hợp pháp, vừa tiết kiệm 100% kinh phí và đáp ứng đầy đủ tính năng văn phòng?',
      pollOptions: [
        { id: 'p11_3_1', text: 'Sử dụng bộ ứng dụng nguồn mở LibreOffice hoặc Google Docs chạy trên web', votesPercent: 92, isPopular: true, insight: 'Chính xác! Phần mềm nguồn mở LibreOffice và Google Docs hoàn toàn miễn phí, hợp pháp và đầy đủ tính năng.' },
        { id: 'p11_3_2', text: 'Tải phần mềm lậu bẻ khóa (crack) từ các trang web lạ', votesPercent: 4, insight: 'Bẻ khóa vi phạm bản quyền nghiêm trọng và có nguy cơ cao lây nhiễm mã độc tống tiền.' },
        { id: 'p11_3_3', text: 'Không dạy thực hành tin học nữa', votesPercent: 4, insight: 'Thực hành là bắt buộc trong chương trình GDPT 2018.' }
      ],
      reflection: 'Phần mềm nguồn mở và ứng dụng trên Internet mang lại cơ hội bình đẳng tiếp cận công nghệ cho mọi người.'
    },
    knowledge: [
      {
        id: 'tab_11_3_1',
        title: '1. Phân loại Phần mềm theo Bản quyền & Mã nguồn',
        subtitle: 'Thương mại độc quyền vs Nguồn mở tự do',
        iconName: 'Layers',
        keyPoints: [
          'Phần mềm nguồn đóng (Proprietary Software): Nhà sản xuất giữ kín mã nguồn (như Microsoft Windows, Photoshop). Người dùng chỉ được cấp quyền sử dụng.',
          'Phần mềm nguồn mở (Free and Open Source Software - FOSS): Mã nguồn được công khai. Người dùng có 4 quyền tự do cơ bản: Chạy, nghiên cứu mã, sửa đổi và phân phối lại.',
          'Giấy phép GNU GPL: Yêu cầu bất kỳ sản phẩm phái sinh nào phát triển từ mã nguồn mở cũng phải tiếp tục được chia sẻ dưới dạng mã nguồn mở.',
          'Phần mềm chạy trên Internet (SaaS): Không cần cài đặt lên máy tính, truy cập trực tiếp qua trình duyệt web (Google Docs, Canva, Figma).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Phần mềm nguồn đóng', 'Phần mềm nguồn mở (FOSS)', 'Phần mềm Web (SaaS)'],
          rows: [
            ['Mã nguồn', 'Bảo mật tuyệt đối, giữ kín', 'Công khai minh bạch', 'Chạy trên máy chủ đám mây'],
            ['Chi phí', 'Thường trả phí bản quyền cao', 'Miễn phí tải và sử dụng', 'Miễn phí hoặc thuê bao'],
            ['Khả năng tùy biến', 'Không thể sửa đổi', 'Tự do chỉnh sửa mã nguồn', 'Tùy biến theo tính năng cung cấp'],
            ['Ví dụ tiêu biểu', 'MS Office, macOS, Corel', 'LibreOffice, Linux, GIMP', 'Google Sheets, Canva, Figma']
          ]
        },
        emCanNho: [
          'Phần mềm nguồn mở (FOSS) công khai mã nguồn, cho phép tự do nghiên cứu, sửa đổi và phân phối.',
          'Giấy phép GNU GPL bảo đảm tính tự do liên tục cho các phần mềm mã nguồn mở.',
          'Phần mềm SaaS hoạt động trực tiếp trên trình duyệt Internet mà không cần cài đặt cục bộ.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Phần mềm Nguồn đóng và Nguồn mở',
      instruction: 'Phân loại các phần mềm sau vào đúng nhóm bản quyền:',
      categories: [
        { id: 'closed_src', title: 'Phần mềm Nguồn đóng (Thương mại)', color: 'border-amber-500 bg-amber-950/40 text-amber-300' },
        { id: 'open_src', title: 'Phần mềm Mã nguồn mở (FOSS)', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' }
      ],
      dragItems: [
        { id: 's1', text: 'Hệ điều hành Ubuntu Linux', category: 'open_src', explanation: 'Hệ điều hành mã nguồn mở cộng đồng lớn nhất thế giới.' },
        { id: 's2', text: 'Microsoft Office 365', category: 'closed_src', explanation: 'Bộ ứng dụng văn phòng thương mại nguồn đóng của Microsoft.' },
        { id: 's3', text: 'Phần mềm đồ họa GIMP', category: 'open_src', explanation: 'Công cụ chỉnh sửa ảnh nguồn mở thay thế Photoshop.' },
        { id: 's4', text: 'Adobe Photoshop', category: 'closed_src', explanation: 'Phần mềm thương mại nguồn đóng chuyên nghiệp của Adobe.' },
        { id: 's5', text: 'Trình duyệt web Mozilla Firefox', category: 'open_src', explanation: 'Trình duyệt web mã nguồn mở bảo vệ quyền riêng tư.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Đặc điểm quan trọng nhất của phần mềm mã nguồn mở (FOSS) là gì?',
        options: [
          'Mã nguồn được công khai, cho phép người dùng tự do nghiên cứu, sửa đổi và phân phối lại',
          'Mã nguồn bị khóa chặt bằng mật khẩu',
          'Bắt buộc người dùng phải trả phí hàng tháng',
          'Chỉ chạy được trên điện thoại cũ'
        ],
        correctIndex: 0,
        explanation: 'FOSS trao quyền tự do sử dụng, nghiên cứu, cải tiến và chia sẻ mã nguồn cho cộng đồng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Giấy phép GNU GPL áp dụng cho phần mềm nguồn mở có điều khoản cốt lõi nào sau đây?',
        options: [
          'Phần mềm phái sinh được tạo ra từ mã nguồn GPL cũng bắt buộc phải công khai mã nguồn theo chuẩn GPL',
          'Cấm tất cả mọi người sử dụng phần mềm',
          'Yêu cầu nộp tiền cho nhà sáng lập',
          'Không cho phép cài đặt lên máy tính Linux'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc "Copyleft" của GPL đảm bảo phần mềm mở luôn giữ tính mở cho các thế hệ phái sinh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Ứng dụng nào sau đây là ví dụ điển hình của mô hình "Phần mềm chạy trên Internet" (SaaS)?',
        options: ['Google Docs', 'Notepad trên máy tính', 'Paint cài đặt sẵn', 'BIOS máy tính'],
        correctIndex: 0,
        explanation: 'Google Docs chạy hoàn toàn trên đám mây thông qua trình duyệt web mà không cần cài đặt phần mềm lên máy.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Tại sao việc tải và sử dụng các phần mềm "bẻ khóa" (Crack/Keygen) lại tiềm ẩn rủi ro lớn?',
        options: [
          'Các tệp bẻ khóa thường bị tin tặc cài cắm mã độc gián điệp, Trojan hoặc Ransomware tống tiền',
          'Vì phần mềm bẻ khóa làm máy tính nhẹ hơn',
          'Vì phần mềm bẻ khóa tự động dọn rác',
          'Vì phần mềm bẻ khóa hợp pháp'
        ],
        correctIndex: 0,
        explanation: 'Tệp crack là phương thức phổ biến nhất để hacker phát tán virus và chiếm đoạt dữ liệu tài khoản.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Lợi ích kinh tế lớn nhất khi một cơ quan hoặc trường học chuyển đổi sang dùng phần mềm nguồn mở là gì?',
        options: [
          'Tiết kiệm tối đa chi phí bản quyền và không phụ thuộc vào một nhà cung cấp duy nhất',
          'Không cần dùng màn hình máy tính',
          'Máy tính không cần cắm điện',
          'Tự động tăng tốc độ đường truyền mạng lên 100 lần'
        ],
        correctIndex: 0,
        explanation: 'Phần mềm nguồn mở giúp tiết kiệm ngân sách mua bản quyền và tăng tính tự chủ công nghệ.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Dự án: Xây dựng Bộ công cụ Học tập Nguồn Mở & Đám Mây',
        context: 'Lập danh mục các phần mềm miễn phí và hợp pháp thay thế các phần mềm trả phí cho học sinh lớp 11.',
        mission: 'Thiết lập danh sách các công cụ tương đương để học tập môn Tin học suốt năm học.',
        steps: [
          'Bước 1: Tìm công cụ nguồn mở thay thế MS Office (Gợi ý: LibreOffice hoặc Google Workspace).',
          'Bước 2: Tìm công cụ thay thế Photoshop (Gợi ý: GIMP hoặc Photopea).',
          'Bước 3: Tìm công cụ dựng video thay thế Premiere (Gợi ý: OpenShot hoặc Clipchamp).'
        ],
        outputRequirement: 'Một bảng đối chiếu phần mềm thương mại và phần mềm nguồn mở/đám mây tương đương.',
        practicalTip: 'Khai thác tối đa các công cụ đám mây giúp bạn có thể học tập trên mọi thiết bị mà không lo mất tệp.'
      },
      mindmap: {
        id: 'mm_11_3',
        label: 'PHẦN MỀM NGUỒN MỞ & ĐÁM MÂY',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_3_1',
            label: 'Nguồn mở (FOSS)',
            children: [
              { id: 'mm_11_3_1_1', label: 'Tự do nghiên cứu mã nguồn' },
              { id: 'mm_11_3_1_2', label: 'Giấy phép GNU GPL' },
              { id: 'mm_11_3_1_3', label: 'Ví dụ: Linux, LibreOffice, GIMP' }
            ]
          },
          {
            id: 'mm_11_3_2',
            label: 'Đám mây (SaaS)',
            children: [
              { id: 'mm_11_3_2_1', label: 'Chạy trực tiếp trên Web' },
              { id: 'mm_11_3_2_2', label: 'Cộng tác thời gian thực' },
              { id: 'mm_11_3_2_3', label: 'Ví dụ: Google Docs, Canva' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ Nguồn Mở 11',
      badgeIcon: 'Globe',
      roleTitle: 'Đại Sứ Công Nghệ Tự Do & Nguồn Mở',
      congratsMessage: 'Tuyệt vời! Bạn đã thấu hiểu sức mạnh của phong trào mã nguồn mở và ứng dụng đám mây trong kỷ nguyên số.',
      skillsUnlocked: ['Phân biệt FOSS vs Nguồn đóng', 'Hiểu giấy phép GPL', 'Ứng dụng công nghệ đám mây SaaS']
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
      tagline: 'Khám phá trái tim vi xử lý và cấu trúc kiến trúc phần cứng',
      description: 'Khám phá kiến trúc Von Neumann kinh điển, chức năng của CPU (ALU, CU, Registers), phân biệt bộ nhớ trong (RAM, ROM) và bộ nhớ ngoài (SSD, HDD).',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Kiến trúc Von Neumann', 'Bộ não vi xử lý CPU', 'Bộ nhớ RAM vs Ổ đĩa SSD']
    },
    objectives: [
      {
        id: 'obj_11_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Kiến trúc máy tính Von Neumann',
        description: 'Trình bày được các khối chức năng chính: Bộ xử lý trung tâm (CPU), Bộ nhớ (Memory), Thiết bị vào/ra (I/O) và Bus liên kết.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_11_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Đọc hiểu thông số phần cứng',
        description: 'Đọc và giải thích được các thông số kỹ thuật cơ bản khi chọn mua máy tính: tốc độ CPU (GHz), dung lượng RAM (GB), chuẩn ổ cứng (NVMe SSD).',
        iconName: 'HardDrive'
      },
      {
        id: 'obj_11_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo quản và sử dụng thiết bị bền bỉ',
        description: 'Hình thành thói quen vệ sinh, tản nhiệt tốt và bảo vệ linh kiện phần cứng máy tính tránh ẩm mốc, quá nhiệt.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Tư vấn nâng cấp máy tính chạy giật lag',
      scenario: 'Chiếc máy tính của bạn khi mở cùng lúc 15 tab trình duyệt và ứng dụng học trực tuyến Zoom thì bị giật lag nghiêm trọng. Kiểm tra Task Manager thấy thanh Memory luôn ở mức 98%.',
      pollQuestion: 'Linh kiện phần cứng nào cần được ưu tiên nâng cấp để giải quyết dứt điểm tình trạng này?',
      pollOptions: [
        { id: 'p11_4_1', text: 'Nâng cấp thêm dung lượng bộ nhớ trong RAM (từ 4GB lên 8GB hoặc 16GB)', votesPercent: 90, isPopular: true, insight: 'Chính xác! Thiếu hụt RAM khiến máy tính phải dùng ổ đĩa làm bộ nhớ ảo, gây giật lag nghiêm trọng.' },
        { id: 'p11_4_2', text: 'Thay vỏ thùng máy (Case) có đèn LED nhiều màu hơn', votesPercent: 4, insight: 'Đèn LED chỉ có tác dụng trang trí, không ảnh hưởng đến dung lượng RAM xử lý.' },
        { id: 'p11_4_3', text: 'Mua thêm bàn di chuột kích thước lớn', votesPercent: 6, insight: 'Bàn di chuột không giải quyết được vấn đề quá tải bộ nhớ RAM.' }
      ],
      reflection: 'Hiểu rõ chức năng của từng linh kiện bên trong máy tính giúp bạn trở thành người tiêu dùng công nghệ thông thái.'
    },
    knowledge: [
      {
        id: 'tab_11_4_1',
        title: '1. Kiến trúc Von Neumann & Các Khối Linh Kiện',
        subtitle: 'Nguyên lý hoạt động của máy tính điện tử hiện đại',
        iconName: 'Cpu',
        keyPoints: [
          'Kiến trúc Von Neumann: Gồm Bộ xử lý trung tâm (CPU), Bộ nhớ (RAM/ROM), Thiết bị Vào/Ra (I/O) và hệ thống đường truyền tín hiệu (Bus).',
          'CPU (Central Processing Unit): "Bộ não" máy tính, gồm Khối tính toán số học/logic (ALU), Khối điều khiển (CU) và các thanh ghi (Registers).',
          'RAM (Random Access Memory): Bộ nhớ truy cập ngẫu nhiên, lưu dữ liệu tạm thời khi máy đang chạy, mất dữ liệu khi mất điện (Volatile).',
          'ROM (Read Only Memory): Bộ nhớ chỉ đọc, lưu chương trình khởi động máy tính cơ bản (BIOS/UEFI), không mất dữ liệu khi tắt máy.',
          'Bộ nhớ ngoài (SSD / HDD): Lưu trữ dữ liệu lâu dài và bền vững.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Thiết bị Vào (Input)', desc: 'Bàn phím, Chuột, Microphone, Scanner' },
            { label: '2. Khối Xử lý & Nhớ (CPU & RAM)', desc: 'CU, ALU, Registers, Bộ nhớ RAM chính' },
            { label: '3. Thiết bị Ra (Output)', desc: 'Màn hình, Loa, Máy in' }
          ]
        },
        emCanNho: [
          'Kiến trúc Von Neumann là nền tảng của mọi máy tính điện tử hiện nay.',
          'CPU gồm ALU (tính toán), CU (điều khiển) và Registers (thanh ghi nhớ siêu nhanh).',
          'RAM là bộ nhớ tạm thời (mất khi tắt điện); SSD/HDD là bộ nhớ lưu trữ lâu dài.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Linh kiện phần cứng và Vai trò',
      instruction: 'Nối linh kiện bên trong máy tính với chức năng cốt lõi của nó:',
      matchingPairs: [
        { id: 'hw1', left: 'Bộ xử lý trung tâm (CPU)', right: 'Bộ não tính toán logic và điều phối mọi lệnh' },
        { id: 'hw2', left: 'Bộ nhớ RAM', right: 'Lưu dữ liệu tạm thời của các phần mềm đang chạy' },
        { id: 'hw3', left: 'Ổ cứng SSD NVMe', right: 'Lưu trữ hệ điều hành và dữ liệu lâu dài với tốc độ cao' },
        { id: 'hw4', left: 'Bo mạch chủ (Motherboard)', right: 'Bản mạch chính kết nối toàn bộ các linh kiện với nhau' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thành phần nào sau đây được coi là "bộ não" thực hiện tính toán và điều khiển của máy tính?',
        options: ['Bộ vi xử lý trung tâm (CPU)', 'Thùng máy (Case)', 'Cáp nguồn điện', 'Bàn phím'],
        correctIndex: 0,
        explanation: 'CPU (Central Processing Unit) là linh kiện cốt lõi xử lý mọi chỉ thị và dữ liệu trong máy tính.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Đặc điểm nào sau đây là sự khác biệt then chốt giữa bộ nhớ RAM và ổ đĩa SSD?',
        options: [
          'RAM bị mất toàn bộ dữ liệu khi mất nguồn điện, còn SSD lưu trữ dữ liệu bền vững ngay cả khi tắt máy',
          'RAM lưu dữ liệu vĩnh viễn không bao giờ xóa được',
          'SSD chỉ dùng để nối mạng',
          'RAM có dung lượng lớn hơn SSD hàng nghìn lần'
        ],
        correctIndex: 0,
        explanation: 'RAM là bộ nhớ khả biến (volatile), cần có điện để duy trì trạng thái dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong CPU, khối chức năng nào chịu trách nhiệm thực hiện các phép tính số học (+, -, *, /) và phép so sánh logic?',
        options: ['ALU (Arithmetic Logic Unit)', 'CU (Control Unit)', 'ROM', 'Cổng HDMI'],
        correctIndex: 0,
        explanation: 'ALU (Arithmetic Logic Unit) là khối chuyên trách các phép tính số học và logic.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Khi đọc thông số một chiếc laptop: "Intel Core i5 13400, RAM 16GB, SSD 512GB NVMe", con số "16GB" thể hiện điều gì?',
        options: [
          'Dung lượng bộ nhớ truy cập ngẫu nhiên (RAM)',
          'Tốc độ quay của quạt gió',
          'Độ lớn của màn hình đo theo inch',
          'Thời gian bảo hành của hãng'
        ],
        correctIndex: 0,
        explanation: '16GB là chỉ số dung lượng bộ nhớ RAM của máy tính.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Hệ số Bus trong kiến trúc máy tính có chức năng gì?',
        options: [
          'Là các đường dẫn truyền tín hiệu điện tử kết nối dữ liệu giữa CPU, Bộ nhớ và các thiết bị ngoại vi',
          'Dùng để nghe nhạc mp3',
          'Dùng để sạc pin cho chuột',
          'Dùng để in màu'
        ],
        correctIndex: 0,
        explanation: 'Hệ thống Bus là các kênh truyền tải dữ liệu và địa chỉ giữa các linh kiện trong máy tính.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Dự án: Xây dựng Cấu hình Máy tính Học tập & Thiết kế Đồ họa',
        context: 'Học sinh lớp 11 cần tư vấn mua một bộ máy tính để học tập Tin học ứng dụng (chạy tốt CSDL và GIMP).',
        mission: 'Lựa chọn các linh kiện phần cứng tương thích trong tầm giá hợp lý.',
        steps: [
          'Bước 1: Chọn CPU (tối thiểu 4 nhân 8 luồng để xử lý đa nhiệm).',
          'Bước 2: Chọn RAM (tối thiểu 8GB hoặc khuyến nghị 16GB để mở nhiều ứng dụng).',
          'Bước 3: Chọn ổ cứng SSD (tối thiểu 256GB hoặc 512GB chuẩn NVMe).',
          'Bước 4: Chọn Bo mạch chủ và Nguồn máy tính công suất thực phù hợp.'
        ],
        outputRequirement: 'Bảng báo giá chi tiết cấu hình linh kiện và lý do lựa chọn từng món.',
        practicalTip: 'Ưu tiên đầu tư ổ cứng SSD thay vì HDD vì tốc độ SSD giúp máy khởi động và mở phần mềm nhanh gấp 5 - 10 lần.'
      },
      mindmap: {
        id: 'mm_11_4',
        label: 'BÊN TRONG MÁY TÍNH',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_4_1',
            label: 'Bộ xử lý CPU',
            children: [
              { id: 'mm_11_4_1_1', label: 'Khối tính toán ALU' },
              { id: 'mm_11_4_1_2', label: 'Khối điều khiển CU' },
              { id: 'mm_11_4_1_3', label: 'Thanh ghi Registers' }
            ]
          },
          {
            id: 'mm_11_4_2',
            label: 'Hệ thống bộ nhớ',
            children: [
              { id: 'mm_11_4_2_1', label: 'RAM (Khả biến, tốc độ cao)' },
              { id: 'mm_11_4_2_2', label: 'ROM (Chỉ đọc, giữ BIOS)' },
              { id: 'mm_11_4_2_3', label: 'SSD/HDD (Lưu trữ lâu dài)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kiến Trúc Sư Phần Cứng 11',
      badgeIcon: 'HardDrive',
      roleTitle: 'Chuyên Viên Phân Tích Phần Cứng Máy Tính',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững kiến trúc phần cứng bên trong máy tính theo chuẩn SGK Tin học 11 GDPT 2018.',
      skillsUnlocked: ['Đọc thông số CPU/RAM/SSD', 'Hiểu kiến trúc Von Neumann', 'Tư vấn cấu hình máy tính']
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
      tagline: 'Mở rộng không gian số: Kết nối màn hình phụ, máy chiếu và thiết bị thông minh',
      description: 'Tìm hiểu các chuẩn cổng giao tiếp vật lý (HDMI, DisplayPort, VGA, USB Type-C) và công nghệ kết nối không dây (Bluetooth, Wi-Fi Direct) để kết nối máy tính với máy chiếu, máy in và smartphone.',
      accentColor: 'from-purple-600 to-indigo-600',
      keyHighlights: ['Cổng HDMI vs VGA', 'Chuẩn kết nối USB-C', 'Kết nối không dây Bluetooth']
    },
    objectives: [
      {
        id: 'obj_11_5_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nhận biết các chuẩn cổng kết nối',
        description: 'Phân biệt được hình dạng và đặc tính truyền dẫn của các cổng: HDMI, VGA, DisplayPort, USB Type-A, USB Type-C, Jack 3.5mm.',
        iconName: 'Cable'
      },
      {
        id: 'obj_11_5_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác kết nối máy chiếu & Thiết bị di động',
        description: 'Thực hiện được việc xuất hình ảnh ra máy chiếu (phím tắt Win + P) và truyền tệp tin qua Bluetooth hoặc cáp USB an toàn.',
        iconName: 'Cast'
      },
      {
        id: 'obj_11_5_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cẩn thận khi thao tác thiết bị',
        description: 'Có thói quen cắm đúng chiều chân cắm, ngắt kết nối an toàn (Eject USB) để bảo vệ mạch điện tử của thiết bị.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Báo cáo thuyết trình trước lớp học',
      scenario: 'Nhóm của bạn được phân công thuyết trình bằng PowerPoint. Khi cắm dây nối từ máy chiếu vào laptop, màn hình máy chiếu vẫn báo "No Signal" (Không có tín hiệu).',
      pollQuestion: 'Phím tắt nhanh nào trên Windows giúp lựa chọn chế độ xuất hình ảnh (Duplicate / Extend) ra máy chiếu?',
      pollOptions: [
        { id: 'p11_5_1', text: 'Phím Windows + P', votesPercent: 89, isPopular: true, insight: 'Chính xác! Windows + P mở menu chọn chế độ hiển thị Project màn hình máy chiếu.' },
        { id: 'p11_5_2', text: 'Phím Ctrl + Z', votesPercent: 5, insight: 'Ctrl + Z dùng để hoàn tác (Undo) thao tác vừa làm.' },
        { id: 'p11_5_3', text: 'Tắt màn hình laptop đi', votesPercent: 6, insight: 'Tắt màn hình có thể khiến máy tính chuyển vào chế độ Sleep (ngủ).' }
      ],
      reflection: 'Thành thạo kỹ năng kết nối thiết bị ngoại vi giúp bạn tự tin làm chủ mọi buổi thuyết trình và hội thảo công nghệ.'
    },
    knowledge: [
      {
        id: 'tab_11_5_1',
        title: '1. Các Cổng Giao Tiếp Hình Ảnh & Dữ Liệu Phổ Biến',
        subtitle: 'HDMI, VGA, USB-C và Bluetooth',
        iconName: 'Cable',
        keyPoints: [
          'HDMI (High-Definition Multimedia Interface): Chuẩn số truyền đồng thời cả hình ảnh độ nét cao và âm thanh vòm trên một sợi cáp duy nhất.',
          'VGA (Video Graphics Array): Cổng truyền hình ảnh tương tự (Analog) truyền thống màu xanh dương có 15 chân, chỉ truyền hình ảnh, không truyền âm thanh.',
          'USB Type-C: Chuẩn kết nối hiện đại cắm được cả hai mặt, truyền dữ liệu siêu nhanh, truyền hình ảnh và hỗ trợ sạc công suất lớn.',
          'Bluetooth: Công nghệ truyền thông không dây tầm ngắn (khoảng 10 mét), dùng kết nối tai nghe, chuột không dây, bàn phím và điện thoại.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Chuẩn kết nối', 'Loại tín hiệu', 'Truyền âm thanh?', 'Ứng dụng chính'],
          rows: [
            ['HDMI', 'Tín hiệu số (Digital)', 'Có (hình + tiếng)', 'Màn hình TV, Máy chiếu hiện đại, PC'],
            ['VGA', 'Tín hiệu tương tự (Analog)', 'Không (chỉ hình)', 'Máy chiếu đời cũ, màn hình CRT/LCD'],
            ['USB Type-C', 'Số đa năng tốc độ cao', 'Có', 'Laptop mỏng nhẹ, smartphone hiện đại'],
            ['Bluetooth', 'Sóng vô tuyến không dây', 'Có', 'Tai nghe, Chuột không dây, Loa bluetooth']
          ]
        },
        emCanNho: [
          'Cổng HDMI truyền cả hình ảnh độ phân giải cao và âm thanh.',
          'Cổng VGA chỉ truyền tín hiệu hình ảnh dạng tương tự (Analog).',
          'Tổ hợp phím tắt trình chiếu màn hình trên Windows: `Windows + P`.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép nối Cổng giao tiếp và Đặc điểm',
      instruction: 'Nối tên chuẩn cổng kết nối với tính năng tương ứng:',
      matchingPairs: [
        { id: 'c1', left: 'Cổng HDMI', right: 'Truyền đồng thời cả hình ảnh HD và âm thanh' },
        { id: 'c2', left: 'Cổng VGA (15 chân xanh)', right: 'Chỉ truyền hình ảnh dạng tín hiệu tương tự' },
        { id: 'c3', left: 'Cổng USB Type-C', right: 'Đầu cắm đối xứng 2 chiều, truyền dữ liệu & sạc nhanh' },
        { id: 'c4', left: 'Kết nối Bluetooth', right: 'Truyền thông không dây tầm ngắn cho tai nghe, chuột' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Điểm khác biệt lớn nhất giữa cổng HDMI và cổng VGA là gì?',
        options: [
          'HDMI là chuẩn số truyền cả hình ảnh và âm thanh, trong khi VGA chỉ truyền tín hiệu hình ảnh',
          'VGA truyền nhanh hơn HDMI 100 lần',
          'HDMI chỉ dùng cho máy giặt',
          'VGA là cổng không dây'
        ],
        correctIndex: 0,
        explanation: 'HDMI là chuẩn kỹ thuật số hiện đại tích hợp cả kênh hình ảnh và âm thanh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Để chuyển đổi nhanh các chế độ hiển thị màn hình (Duplicate / Extend) khi cắm máy chiếu trong Windows, ta dùng phím tắt nào?',
        options: ['Phím Windows + P', 'Phím Windows + L', 'Phím Ctrl + P', 'Phím Alt + Tab'],
        correctIndex: 0,
        explanation: 'Windows + P (Project) dùng để chọn chế độ xuất hình ra màn hình phụ hoặc máy chiếu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Chế độ hiển thị "Extend" (Mở rộng màn hình) mang lại lợi ích gì cho người thuyết trình?',
        options: [
          'Màn hình máy chiếu chiếu bài thuyết trình, còn màn hình laptop để người thuyết trình xem ghi chú riêng',
          'Màn hình sẽ tắt hẳn không hiển thị gì',
          'Làm chữ phóng to gấp 10 lần',
          'Máy tính tự động in tài liệu'
        ],
        correctIndex: 0,
        explanation: 'Extend biến màn hình ngoài thành không gian làm việc thứ hai độc lập với màn hình chính.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Chuẩn kết nối USB Type-C có ưu điểm thiết kế nổi bật nào so với chuẩn USB Type-A truyền thống?',
        options: [
          'Thiết kế chân cắm đối xứng, có thể cắm theo bất kỳ chiều nào mà không sợ cắm ngược',
          'Chân cắm hình tròn như que tăm',
          'Chỉ dùng được một lần rồi bỏ',
          'Không thể truyền dữ liệu'
        ],
        correctIndex: 0,
        explanation: 'USB Type-C có thiết kế đảo ngược (reversible) giúp người dùng cắm thuận tiện không lo ngược chiều.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Trước khi rút ổ nhớ USB ra khỏi máy tính, thao tác nào giúp đảm bảo không bị lỗi dữ liệu trên USB?',
        options: [
          'Nhấp chuột phải vào biểu tượng USB trên thanh tác vụ và chọn "Eject" (Ngắt kết nối an toàn)',
          'Giật mạnh ổ USB ra thật nhanh',
          'Tắt màn hình máy tính',
          'Bấm nút Restart máy tính'
        ],
        correctIndex: 0,
        explanation: 'Thao tác Eject đảm bảo toàn bộ dữ liệu đang ghi trong bộ đệm được hoàn tất trước khi ngắt nguồn điện.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Thiết lập Hệ thống Hai Màn Hình Đa Nhiệm',
        context: 'Khi làm việc với cơ sở dữ liệu và thiết kế đồ họa, việc có thêm một màn hình phụ giúp tăng năng suất gấp đôi.',
        mission: 'Kết nối máy tính với màn hình thứ hai và cấu hình chế độ Extend.',
        steps: [
          'Bước 1: Cắm cáp HDMI giữa máy tính và màn hình phụ.',
          'Bước 2: Bấm Windows + P và chọn chế độ "Extend".',
          'Bước 3: Mở một bên là tệp lý thuyết SGK, một bên là phần mềm thực hành để thao tác song song.'
        ],
        outputRequirement: 'Ảnh chụp màn hình hiển thị hai ứng dụng chạy song song trên hai không gian làm việc.',
        practicalTip: 'Trong Windows Display Settings, bạn có thể kéo thả để sắp xếp vị trí tương đối giữa hai màn hình trái - phải đúng với thực tế.'
      },
      mindmap: {
        id: 'mm_11_5',
        label: 'KẾT NỐI THIẾT BỊ SỐ',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_5_1',
            label: 'Kết nối có dây',
            children: [
              { id: 'mm_11_5_1_1', label: 'HDMI (Hình + Tiếng HD)' },
              { id: 'mm_11_5_1_2', label: 'VGA (Tương tự, chỉ hình)' },
              { id: 'mm_11_5_1_3', label: 'USB Type-C (Đa năng, sạc)' }
            ]
          },
          {
            id: 'mm_11_5_2',
            label: 'Kết nối không dây',
            children: [
              { id: 'mm_11_5_2_1', label: 'Bluetooth (Tầm ngắn)' },
              { id: 'mm_11_5_2_2', label: 'Wi-Fi Direct / Miracast' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Kết Nối Thiết Bị 11',
      badgeIcon: 'Cast',
      roleTitle: 'Chuyên Viên Tích Hợp Thiết Bị Ngoại Vi',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững các chuẩn kết nối phần cứng và kỹ năng trình chiếu chuyên nghiệp.',
      skillsUnlocked: ['Xuất máy chiếu Windows + P', 'Phân biệt HDMI / VGA / USB-C', 'Ngắt thiết bị Eject an toàn']
    }
  }
];
