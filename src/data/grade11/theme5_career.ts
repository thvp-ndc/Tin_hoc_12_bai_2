import { Lesson } from '../../types/lesson';

export const THEME5_LESSONS_11: Lesson[] = [
  // Bài 16: Công việc quản trị cơ sở dữ liệu
  {
    id: 16,
    code: 'TIN11_B16',
    title: 'Công việc quản trị cơ sở dữ liệu',
    themeId: 5,
    themeName: 'Chủ đề 5: Hướng nghiệp với Tin học',
    topicBadge: 'Hướng nghiệp DBA',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khám phá nghề nghiệp công nghệ đỉnh cao: Người canh gác kho báu dữ liệu',
      description: 'Tìm hiểu vị trí Chuyên viên Quản trị Cơ sở dữ liệu (Database Administrator - DBA): vai trò, nhiệm vụ hàng ngày, kỹ năng công nghệ cần có và cơ hội việc làm rộng mở trong kỷ nguyên dữ liệu lớn (Big Data).',
      accentColor: 'from-amber-500 to-orange-600',
      keyHighlights: ['Nghề DBA (Database Administrator)', 'Nhiệm vụ tối ưu & bảo mật dữ liệu', 'Lộ trình nghề nghiệp & kỹ năng']
    },
    objectives: [
      {
        id: 'obj_11_16_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Vai trò của nghề DBA',
        description: 'Mô tả được công việc của người quản trị CSDL: cài đặt cấu hình DBMS, giám sát hiệu năng, phân quyền bảo mật, sao lưu và xử lý sự cố.',
        iconName: 'Briefcase'
      },
      {
        id: 'obj_11_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định yêu cầu kỹ năng',
        description: 'Chỉ rõ các kiến thức công nghệ (SQL, Hệ điều hành máy chủ, An ninh mạng) và kỹ năng mềm (giải quyết vấn đề, cẩn thận) của một DBA.',
        iconName: 'Award'
      },
      {
        id: 'obj_11_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đạo đức nghề nghiệp dữ liệu',
        description: 'Nhận thức được trách nhiệm bảo mật thông tin tối mật và đạo đức nghề nghiệp khi nắm giữ dữ liệu quan trọng của tổ chức.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Hệ thống ngân hàng bị sập lúc nửa đêm',
      scenario: 'Lúc 2 giờ sáng, máy chủ CSDL của một ngân hàng quốc tế gặp sự cố quá tải do có đợt tấn công từ chối dịch vụ. Ai là người nhận cuộc gọi khẩn cấp để xử lý sự cố, khôi phục giao dịch cho hàng triệu người?',
      pollQuestion: 'Vị trí công nghệ nào chịu trách nhiệm cao nhất về sự sống còn và vận hành ổn định của kho dữ liệu?',
      pollOptions: [
        { id: 'p11_16_1', text: 'Chuyên viên Quản trị Cơ sở dữ liệu (Database Administrator - DBA)', votesPercent: 92, isPopular: true, insight: 'Chính xác! DBA là người chịu trách nhiệm cao nhất về tính sẵn sàng, bảo mật và phục hồi sau sự cố của CSDL.' },
        { id: 'p11_16_2', text: 'Nhân viên thiết kế banner quảng cáo', votesPercent: 3, insight: 'Thiết kế quảng cáo phụ trách mỹ thuật truyền thông, không quản trị máy chủ CSDL.' },
        { id: 'p11_16_3', text: 'Bác bảo vệ cổng cơ quan', votesPercent: 5, insight: 'Bảo vệ phụ trách an ninh vật lý tòa nhà, không vận hành hệ thống phần mềm số.' }
      ],
      reflection: 'Nghề DBA được ví như những "bác sĩ" và "người bảo vệ" ngày đêm đảm bảo dòng chảy dữ liệu của thế giới số luôn thông suốt.'
    },
    knowledge: [
      {
        id: 'tab_11_16_1',
        title: '1. Nhiệm Vụ Hàng Ngày & Kỹ Năng Của Một DBA',
        subtitle: 'Bức tranh toàn cảnh về nghề Quản trị Cơ sở dữ liệu',
        iconName: 'Briefcase',
        keyPoints: [
          'Các nhiệm vụ chính của DBA: Cài đặt và nâng cấp Hệ QTCSDL; Thiết kế và tối ưu hóa hiệu năng truy vấn; Quản lý phân quyền và kiểm soát an ninh dữ liệu; Lập kế hoạch sao lưu (Backup) và phục hồi (Disaster Recovery).',
          'Yêu cầu chuyên môn: Thành thạo ngôn ngữ SQL nâng cao; Hiểu sâu về kiến trúc hệ điều hành máy chủ (Linux Server, Windows Server); Có kiến thức về bảo mật mạng và điện toán đám mây.',
          'Phẩm chất quan trọng: Tính cẩn thận, tỉ mỉ, khả năng chịu áp lực cao và ý thức bảo mật đạo đức nghề nghiệp tuyệt đối.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cài đặt & Cấu hình', desc: 'Triển khai máy chủ CSDL tối ưu' },
            { label: 'Tối ưu & Giám sát', desc: 'Đảm bảo truy vấn nhanh trong tích tắc' },
            { label: 'An ninh & Sao lưu', desc: 'Bảo vệ dữ liệu trước mọi sự cố' }
          ]
        },
        emCanNho: [
          'DBA là chuyên viên chịu trách nhiệm cài đặt, vận hành, bảo mật và sao lưu CSDL.',
          'Kỹ năng then chốt của DBA: SQL chuyên sâu, quản trị máy chủ và tư duy an toàn thông tin.',
          'Đạo đức nghề nghiệp: Giữ bí mật tuyệt đối dữ liệu người dùng và tổ chức.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Nhiệm vụ của DBA và Hành động cụ thể',
      instruction: 'Nối nhiệm vụ của người quản trị CSDL với hành động thực tế tương ứng:',
      matchingPairs: [
        { id: 'dba1', left: 'Giám sát hiệu năng hệ thống', right: 'Theo dõi chỉ số CPU, RAM và tối ưu các câu truy vấn bị chậm' },
        { id: 'dba2', left: 'Quản lý bảo mật truy cập', right: 'Tạo tài khoản mới và cấp quyền truy cập theo đúng vị trí chức vụ' },
        { id: 'dba3', left: 'Sao lưu dữ liệu định kỳ', right: 'Lên lịch tự động sao lưu dữ liệu toàn phần vào 2 giờ sáng mỗi ngày' },
        { id: 'dba4', left: 'Phục hồi sau sự cố (Disaster Recovery)', right: 'Khôi phục dữ liệu nguyên vẹn từ bản sao lưu khi ổ cứng máy chủ bị hỏng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Chữ viết tắt DBA trong ngành công nghệ thông tin là viết tắt của vị trí công việc nào?',
        options: [
          'Database Administrator (Chuyên viên Quản trị Cơ sở dữ liệu)',
          'Digital Business Assistant (Trợ lý kinh doanh số)',
          'Data Base Audio (Âm thanh cơ sở dữ liệu)',
          'Design Big Application (Thiết kế ứng dụng lớn)'
        ],
        correctIndex: 0,
        explanation: 'DBA là chức danh nghề nghiệp quốc tế của người quản trị hệ thống cơ sở dữ liệu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Công việc nào sau đây là một trong những nhiệm vụ QUAN TRỌNG NHẤT của người quản trị CSDL?',
        options: [
          'Thực hiện sao lưu dữ liệu định kỳ và xây dựng phương án phục hồi khi xảy ra thảm họa',
          'Vẽ tranh minh họa cho sách báo',
          'Lắp đặt đường dây điện sinh hoạt cho tòa nhà',
          'Quản lý quầy lễ tân đón khách'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu và sẵn sàng phục hồi dữ liệu là nhiệm vụ sống còn bảo đảm doanh nghiệp không bị phá sản khi mất dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để trở thành một DBA chuyên nghiệp, kỹ năng kỹ thuật nào sau đây là BẮT BUỘC phải thành thạo?',
        options: [
          'Ngôn ngữ truy vấn SQL và nguyên lý hoạt động của các hệ quản trị CSDL',
          'Kỹ năng cắm hoa nghệ thuật',
          'Kỹ năng bơi lội vượt chướng ngại vật',
          'Kỹ năng may vá trang phục'
        ],
        correctIndex: 0,
        explanation: 'SQL và kiến thức Hệ QTCSDL là công cụ làm việc căn bản hàng ngày của một DBA.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Phẩm chất đạo đức nghề nghiệp nào sau đây là tối thượng đối với một người quản trị CSDL?',
        options: [
          'Tuyệt đối bảo mật thông tin, không sao chép hoặc mua bán dữ liệu nhạy cảm của khách hàng vì lợi ích cá nhân',
          'Tự ý chia sẻ số điện thoại của người nổi tiếng lên mạng xã hội để tăng tương tác',
          'Bán danh sách khách hàng cho đối thủ cạnh tranh',
          'Xem lén mật khẩu của đồng nghiệp'
        ],
        correctIndex: 0,
        explanation: 'Vi phạm bảo mật dữ liệu không chỉ trái đạo đức mà còn vi phạm pháp luật hình sự nghiêm trọng.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Cơ hội nghề nghiệp của vị trí Quản trị CSDL (DBA) trong tương lai như thế nào?',
        options: [
          'Rất rộng mở và có mức thu nhập cao do kỷ nguyên Chuyển đổi số và Big Data cần khối lượng dữ liệu khổng lồ',
          'Sẽ biến mất hoàn toàn trong 1 tháng tới',
          'Không ai cần lưu trữ dữ liệu nữa',
          'Chỉ tuyển người dưới 10 tuổi'
        ],
        correctIndex: 0,
        explanation: 'Dữ liệu được coi là "nguồn dầu mỏ mới" của thế giới, khiến nhu cầu nhân lực DBA luôn ở mức cao.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Lập Kế hoạch Phát triển Bản thân Định hướng Nghề DBA',
        context: 'Học sinh lớp 11 tìm hiểu định hướng nghề nghiệp công nghệ thông tin cho tương lai.',
        mission: 'Xây dựng lộ trình học tập để chuẩn bị các kỹ năng nền tảng cho nghề Quản trị CSDL.',
        steps: [
          'Bước 1: Nắm chắc kiến thức CSDL và ngôn ngữ SQL trong chương trình Tin học 11.',
          'Bước 2: Tìm hiểu các chứng chỉ quốc tế uy tín về CSDL (như Oracle Certified Associate, Microsoft Certified: Azure Database Administrator).',
          'Bước 3: Luyện tập cài đặt và quản trị thử nghiệm MySQL trên máy tính cá nhân.'
        ],
        outputRequirement: 'Một bản đồ kế hoạch học tập cá nhân 3 năm tới hướng đến ngành công nghệ dữ liệu.',
        practicalTip: 'Tự học cài đặt Linux và viết các câu lệnh truy vấn SQL từ sớm sẽ là lợi thế vượt trội khi bạn thi vào các trường đại học công nghệ.'
      },
      mindmap: {
        id: 'mm_11_16',
        label: 'NGHỀ QUẢN TRỊ CSDL (DBA)',
        color: '#f59e0b',
        children: [
          {
            id: 'mm_11_16_1',
            label: 'Nhiệm vụ chính',
            children: [
              { id: 'mm_11_16_1_1', label: 'Cài đặt & Cấu hình DBMS' },
              { id: 'mm_11_16_1_2', label: 'Tối ưu hóa hiệu năng' },
              { id: 'mm_11_16_1_3', label: 'Bảo mật & Sao lưu định kỳ' }
            ]
          },
          {
            id: 'mm_11_16_2',
            label: 'Kỹ năng cần có',
            children: [
              { id: 'mm_11_16_2_1', label: 'SQL & Hệ quản trị CSDL' },
              { id: 'mm_11_16_2_2', label: 'Hệ điều hành máy chủ Linux' },
              { id: 'mm_11_16_2_3', label: 'Đạo đức nghề nghiệp số' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Định Hướng DBA 11',
      badgeIcon: 'Briefcase',
      roleTitle: 'Chuyên Viên Định Hướng Nghề Nghiệp Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã khám phá toàn cảnh nghề Quản trị CSDL (DBA) và xây dựng lộ trình nghề nghiệp vững chắc.',
      skillsUnlocked: ['Hiểu vai trò DBA', 'Lộ trình kỹ năng dữ liệu', 'Đạo đức nghề nghiệp DBA']
    }
  }
];
