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
        title: 'Vai trò & trách nhiệm của nghề DBA',
        description: 'Mô tả được vai trò, vị trí và các nhiệm vụ hàng ngày của chuyên viên Quản trị CSDL (DBA): cài đặt, giám sát hiệu năng, phân quyền và sao lưu phục hồi.',
        iconName: 'Briefcase'
      },
      {
        id: 'obj_11_16_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định yêu cầu năng lực & kỹ năng',
        description: 'Chỉ rõ được các kiến thức công nghệ (SQL, Hệ điều hành máy chủ, An ninh mạng) và kỹ năng mềm (giải quyết sự cố, cẩn trọng) cần trau dồi.',
        iconName: 'Award'
      },
      {
        id: 'obj_11_16_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đạo đức nghề nghiệp dữ liệu',
        description: 'Nhận thức sâu sắc về tính bảo mật thông tin, đạo đức số khi nắm giữ dữ liệu nhạy cảm của tổ chức và có định hướng nghề nghiệp đúng đắn.',
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
        title: '1. Vai trò và trách nhiệm của DBA',
        subtitle: 'Người giữ chìa khóa kho báu thông tin của tổ chức',
        iconName: 'Briefcase',
        keyPoints: [
          'Khái niệm: Quản trị viên cơ sở dữ liệu (Database Administrator - viết tắt là DBA) là chuyên gia chịu trách nhiệm về việc cài đặt, cấu hình, nâng cấp, bảo mật, giám sát hiệu năng và khắc phục sự cố cho toàn bộ hệ thống CSDL của tổ chức.',
          'Các trách nhiệm chính hàng ngày:',
          '  - Cài đặt và cấu hình: Lựa chọn phần cứng, cài đặt Hệ QTCSDL tối ưu (MySQL, Oracle, SQL Server).',
          '  - Giám sát hiệu năng (Performance Tuning): Phát hiện các câu truy vấn chạy chậm, đánh chỉ mục (Index) giúp hệ thống phản hồi trong tích tắc.',
          '  - Phân quyền và an toàn: Cấp phát tài khoản, phân quyền truy cập, kiểm tra nhật ký truy cập bất thường.',
          '  - Sao lưu và phục hồi thảm họa: Lập lịch backup tự động và diễn tập phục hồi dữ liệu định kỳ.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cài đặt & Cấu hình', desc: 'Triển khai máy chủ CSDL tối ưu hóa phần cứng' },
            { label: 'Tối ưu & Giám sát', desc: 'Đảm bảo truy vấn nhanh trong tích tắc 24/7' },
            { label: 'An ninh & Sao lưu', desc: 'Phân quyền, băm mật khẩu và phục hồi thảm họa' }
          ]
        },
        emCanNho: [
          'DBA là chuyên viên chịu trách nhiệm cao nhất về sự sống còn của dữ liệu trong tổ chức.',
          'Các nhiệm vụ chính: Cài đặt, tối ưu hiệu năng, bảo mật phân quyền và sao lưu phục hồi.',
          'DBA làm việc liên tục đảm bảo hệ thống dữ liệu hoạt động thông suốt 24/7.'
        ]
      },
      {
        id: 'tab_11_16_2',
        title: '2. Yêu cầu kỹ năng công nghệ và đạo đức nghề nghiệp',
        subtitle: 'Hành trang cần chuẩn bị để trở thành một DBA xuất sắc',
        iconName: 'Award',
        keyPoints: [
          'Kiến thức công nghệ cốt lõi:',
          '  - Thành thạo ngôn ngữ SQL nâng cao và kiến trúc các hệ QTCSDL lớn.',
          '  - Hiểu sâu về hệ điều hành máy chủ (Linux Server, Windows Server) và mạng máy tính.',
          '  - Kiến thức về an toàn thông tin, mật mã học và điện toán đám mây (AWS RDS, Google Cloud SQL).',
          'Kỹ năng mềm cần thiết: Khả năng tư duy logic, kỹ năng giải quyết vấn đề nhanh, tính cẩn thận, tỉ mỉ và chịu được áp lực công việc cao.',
          'Đạo đức nghề nghiệp (Professional Ethics): Tuyệt đối giữ bí mật thông tin người dùng và dữ liệu tài chính của tổ chức, không lợi dụng quyền quản trị tối cao để xem trộm hoặc mua bán dữ liệu trái phép.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nhóm yêu cầu', 'Nội dung chi tiết', 'Tầm quan trọng đối với nghề DBA'],
          rows: [
            ['Kỹ năng công nghệ', 'SQL chuyên sâu, Quản trị Linux, Sao lưu đám mây', 'Nền tảng kỹ thuật để vận hành hệ thống ổn định'],
            ['Kỹ năng mềm', 'Bình tĩnh giải quyết sự cố, cẩn thận từng lệnh gõ', 'Tránh việc gõ nhầm lệnh DROP xóa sạch dữ liệu'],
            ['Đạo đức nghề nghiệp', 'Trung thực, bảo mật tuyệt đối dữ liệu khách hàng', 'Yếu tố sống còn xây dựng uy tín và tuân thủ pháp luật']
          ]
        },
        emCanNho: [
          'Kỹ năng công nghệ then chốt của DBA: SQL nâng cao, quản trị máy chủ và bảo mật đám mây.',
          'Phẩm chất quan trọng nhất là tính cẩn trọng, tỉ mỉ trong từng thao tác kỹ thuật.',
          'Tuân thủ đạo đức nghề nghiệp: Giữ bí mật tuyệt đối dữ liệu của tổ chức và khách hàng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Nhiệm vụ của DBA và Công cụ Thực thi',
      instruction: 'Nối nhiệm vụ của chuyên viên DBA với thao tác tương ứng:',
      matchingPairs: [
        { id: 'dba1', left: 'Giám sát hiệu năng hệ thống', right: 'Theo dõi chỉ số tải CPU, RAM và thời gian phản hồi của truy vấn' },
        { id: 'dba2', left: 'Bảo mật và phân quyền', right: 'Thiết lập các lệnh GRANT/REVOKE và kiểm tra log truy cập' },
        { id: 'dba3', left: 'Phòng chống mất dữ liệu', right: 'Lên lịch tự động xuất file sao lưu .sql dump hàng đêm' },
        { id: 'dba4', left: 'Đạo đức nghề nghiệp DBA', right: 'Tuyệt đối không tiết lộ số dư tài khoản hay bí mật kinh doanh' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Chuyên viên Quản trị Cơ sở dữ liệu (DBA) KHÔNG phụ trách công việc nào sau đây?',
        options: [
          'Vẽ banner hình ảnh quảng cáo tiếp thị sản phẩm',
          'Tối ưu hóa tốc độ của các câu truy vấn SQL chạy chậm',
          'Lập kế hoạch sao lưu và phục hồi dữ liệu khi máy chủ gặp sự cố',
          'Cấp quyền truy cập cho nhân viên mới vào làm việc'
        ],
        correctIndex: 0,
        explanation: 'Thiết kế đồ họa tiếp thị thuộc phòng Marketing, không phải nhiệm vụ kỹ thuật của DBA.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Kiến thức công nghệ nền tảng và quan trọng bậc nhất mà một DBA bắt buộc phải tinh thông là gì?',
        options: [
          'Ngôn ngữ truy vấn dữ liệu SQL và kiến trúc các Hệ quản trị CSDL',
          'Cách may trang phục thời trang',
          'Kỹ thuật trồng cây cảnh',
          'Cách nấu các món ăn truyền thống'
        ],
        correctIndex: 0,
        explanation: 'SQL là ngôn ngữ giao tiếp chính để DBA cấu hình, truy vấn và điều phối mọi CSDL quan hệ.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Tại sao phẩm chất "Cẩn thận, tỉ mỉ" lại được coi là yêu cầu SỐNG CÒN đối với người làm nghề DBA?',
        options: [
          'Vì chỉ một câu lệnh sai lầm (như gõ nhầm DELETE không có WHERE) có thể làm biến mất toàn bộ dữ liệu hàng triệu khách hàng',
          'Vì máy tính sẽ bị cháy nếu gõ sai chính tả',
          'Vì DBA phải tự mình lau chùi bàn phím mỗi ngày',
          'Vì DBA không được phép dùng chuột máy tính'
        ],
        correctIndex: 0,
        explanation: 'DBA nắm quyền root cao nhất; một sai sót nhỏ có thể gây thiệt hại hàng triệu đô la cho doanh nghiệp.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Hành vi nào sau đây vi phạm nghiêm trọng ĐẠO ĐỨC NGHỀ NGHIỆP của một chuyên viên Quản trị CSDL?',
        options: [
          'Lợi dụng quyền quản trị tối cao để sao chép danh sách số điện thoại khách hàng đem bán cho bên ngoài',
          'Thực hiện sao lưu dữ liệu vào 12h đêm',
          'Đổi mật khẩu tài khoản định kỳ',
          'Học thêm các chứng chỉ công nghệ mới'
        ],
        correctIndex: 0,
        explanation: 'Đánh cắp và bán thông tin khách hàng là hành vi vi phạm đạo đức nghề nghiệp và vi phạm pháp luật hình sự.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Xu hướng phát triển nghề nghiệp nào đang mở ra cơ hội việc làm và mức thu nhập rất cao cho các DBA hiện nay?',
        options: [
          'Quản trị CSDL trên nền tảng Điện toán đám mây (Cloud Database) và Dữ liệu lớn (Big Data)',
          'Chuyển sang ghi chép dữ liệu bằng sổ tay bằng bút bi',
          'Chỉ sử dụng máy tính không có màn hình',
          'Ngừng sử dụng CSDL trên toàn cầu'
        ],
        correctIndex: 0,
        explanation: 'Chuyển dịch lên đám mây và xử lý dữ liệu lớn (Big Data/AI) tạo nhu cầu tuyển dụng DBA khổng lồ.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Bản Đồ Kế Hoạch Cá Nhân: Con Đường Trở Thành Chuyên Viên DBA',
        context: 'Định hướng nghề nghiệp tương lai trong lĩnh vực Công nghệ thông tin.',
        mission: 'Xây dựng lộ trình học tập 3 năm THPT để chuẩn bị hành trang theo đuổi nghề DBA.',
        steps: [
          'Năm Lớp 10: Nắm vững tư duy giải thuật với Python và kiến thức hệ điều hành, mạng máy tính.',
          'Năm Lớp 11: Làm chủ ngôn ngữ SQL, thiết kế CSDL quan hệ với MySQL/HeidiSQL, học cách sao lưu an toàn.',
          'Năm Lớp 12: Tìm hiểu về máy chủ web, bảo mật và tìm kiếm các ngành đào tạo Kỹ thuật dữ liệu tại đại học.',
          'Rèn luyện phẩm chất: Tính cẩn thận, tôn trọng bảo mật thông tin cá nhân của bạn bè.'
        ],
        outputRequirement: 'Sơ đồ lộ trình học tập kèm danh sách các kỹ năng cần đạt qua từng năm.',
        practicalTip: 'Tham gia các diễn đàn công nghệ và luyện tập trên các nền tảng SQL online như LeetCode để nâng cao tư duy truy vấn.'
      },
      mindmap: {
        id: 'mm_11_16',
        label: 'NGHỀ QUẢN TRỊ CSDL (DBA)',
        color: '#d97706',
        children: [
          {
            id: 'mm_11_16_1',
            label: 'Nhiệm vụ chính',
            children: [
              { id: 'mm_11_16_1_1', label: 'Cài đặt & cấu hình DBMS' },
              { id: 'mm_11_16_1_2', label: 'Tối ưu hóa hiệu năng truy vấn' },
              { id: 'mm_11_16_1_3', label: 'Bảo mật phân quyền & Sao lưu' }
            ]
          },
          {
            id: 'mm_11_16_2',
            label: 'Yêu cầu năng lực',
            children: [
              { id: 'mm_11_16_2_1', label: 'SQL chuyên sâu & Linux Server' },
              { id: 'mm_11_16_2_2', label: 'Tỉ mỉ, chịu áp lực xử lý sự cố' },
              { id: 'mm_11_16_2_3', label: 'Đạo đức bảo mật dữ liệu tuyệt đối' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'DBA Tương Lai 11',
      badgeIcon: 'Briefcase',
      roleTitle: 'Chuyên Viên Định Hướng Nghề Nghiệp Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã hoàn thành Chủ đề 5: Hướng nghiệp với Tin học và sẵn sàng bước vào chuỗi các bài thực hành CSDL chuyên sâu.',
      skillsUnlocked: ['Hiểu rõ vai trò nghề DBA', 'Lộ trình phát triển kỹ năng CSDL', 'Đạo đức nghề nghiệp dữ liệu số']
    }
  }
];
