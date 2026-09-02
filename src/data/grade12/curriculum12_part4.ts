import { LessonCurriculum12 } from './curriculum12';

export const GRADE_12_CURRICULUM_PART4: Record<number, LessonCurriculum12> = {
  // Bài 21: Bản quyền và sở hữu trí tuệ trong thời đại số
  21: {
    objectives: [
      {
        id: 'obj_12_21_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm sở hữu trí tuệ số & giấy phép CC',
        description: 'Hiểu quyền tác giả đối với phần mềm, tác phẩm số; phân biệt 4 điều kiện cốt lõi của giấy phép Creative Commons: BY (ghi công), NC (phi thương mại), ND (không phái sinh), SA (chia sẻ tương tự).',
        iconName: 'FileCheck'
      },
      {
        id: 'obj_12_21_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tìm kiếm & sử dụng tài nguyên mở hợp pháp',
        description: 'Tìm kiếm và khai thác các nguồn tài nguyên ảnh, âm nhạc miễn phí có giấy phép CC (Unsplash, Pixabay, Wikimedia); biết cách ghi nguồn trích dẫn đúng quy chuẩn.',
        iconName: 'Search'
      },
      {
        id: 'obj_12_21_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Văn hóa tôn trọng tài sản trí tuệ',
        description: 'Tự giác tôn trọng công sức lao động sáng tạo của tác giả khác, nói không với đạo văn, sao chép mã nguồn lén lút.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_21_1',
        title: '1. Khái niệm bản quyền và sở hữu trí tuệ số',
        subtitle: 'Bảo vệ thành quả lao động sáng tạo trong môi trường số',
        iconName: 'FileCheck',
        keyPoints: [
          'Sở hữu trí tuệ (Intellectual Property): Quyền của tác giả đối với các sáng tạo trí tuệ của mình (phần mềm, bài hát, tranh vẽ, video, bài viết).',
          'Quyền tác giả (Copyright - ký hiệu ©): Tự động phát sinh ngay khi tác phẩm được sáng tạo và thể hiện dưới hình thức vật chất nhất định mà không cần đăng ký.',
          'Các hành vi xâm phạm bản quyền trên mạng:',
          '  - Tải phim lậu, tải nhạc không trả phí bản quyền.',
          '  - Sao chép toàn bộ bài viết, hình ảnh của người khác lên trang web mình mà không xin phép.',
          '  - Dùng phần mềm bẻ khóa (Crack) hoặc chia sẻ mã bản quyền lậu.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Loại tác phẩm số', 'Hình thức bảo hộ bản quyền', 'Hành vi vi phạm điển hình'],
          rows: [
            ['Mã nguồn phần mềm', 'Bảo hộ như tác phẩm văn học', 'Sao chép mã độc quyền, phân phối bản crack'],
            ['Hình ảnh, video', 'Bảo hộ quyền tác giả nghệ thuật', 'Tải ảnh đóng dấu watermark về xóa logo đăng lại'],
            ['Bài viết, tài liệu', 'Bảo hộ quyền tác giả văn bản', 'Đạo văn, sao chép nguyên văn không dẫn nguồn']
          ]
        },
        emCanNho: [
          'Quyền tác giả tự động được pháp luật bảo hộ ngay khi tác phẩm ra đời.',
          'Sử dụng phần mềm bẻ khóa tiềm ẩn nguy cơ nhiễm mã độc tống tiền cực cao.',
          'Luôn xin phép tác giả hoặc mua giấy phép khi sử dụng cho mục đích thương mại.'
        ]
      },
      {
        id: 'tab_12_21_2',
        title: '2. Giấy phép Creative Commons và tôn trọng quyền tác giả',
        subtitle: 'Cầu nối chia sẻ tri thức mở văn minh của nhân loại',
        iconName: 'Share2',
        keyPoints: [
          'Giấy phép Creative Commons (CC): Hệ thống giấy phép mở cho phép tác giả tuyên bố công khai những quyền nào họ giữ lại và những quyền nào họ cho phép cộng đồng tự do sử dụng.',
          'Bốn biểu tượng điều kiện cốt lõi của CC:',
          '  - `BY` (Attribution - Ghi công): Phải ghi rõ tên tác giả gốc.',
          '  - `NC` (NonCommercial - Phi thương mại): Chỉ được dùng miễn phí, không được đem bán kiếm tiền.',
          '  - `ND` (NoDerivatives - Không phái sinh): Phải giữ nguyên vẹn tác phẩm, không được cắt ghép, chế biến.',
          '  - `SA` (ShareAlike - Chia sẻ tương tự): Tác phẩm mới tạo ra cũng phải phát hành dưới cùng loại giấy phép này.',
          'Quy tắc trích dẫn chuẩn TASL: Title (Tiêu đề), Author (Tác giả), Source (Nguồn dẫn link), License (Tên loại giấy phép CC).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'CC BY', desc: 'Tự do nhất: Cho phép dùng mọi mục đích, chỉ cần ghi tên tác giả' },
            { label: 'CC BY-NC', desc: 'Được dùng và chia sẻ miễn phí, cấm bán kiếm lời' },
            { label: 'CC0 (Public Domain)', desc: 'Tác giả từ bỏ toàn bộ bản quyền, hiến tặng cho nhân loại' }
          ]
        },
        emCanNho: [
          'Creative Commons (CC) là chuẩn giấy phép tài nguyên mở toàn cầu.',
          'Điều kiện `BY` bắt buộc phải ghi nhận tên tác giả gốc.',
          'Ưu tiên tìm ảnh và âm thanh có giấy phép CC0 hoặc CC BY cho dự án học tập.'
        ]
      }
    ]
  },

  // Bài 22: Nhận diện và phòng tránh lừa đảo trên không gian mạng
  22: {
    objectives: [
      {
        id: 'obj_12_22_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các kịch bản lừa đảo công nghệ cao',
        description: 'Chỉ ra được các thủ đoạn lừa đảo tinh vi: giả mạo công an/viện kiểm sát gọi điện đe dọa, hack tài khoản nhắn tin vay tiền, giả mạo website ngân hàng (Phishing), lừa đảo việc làm online.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_12_22_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng tự vệ số & bảo vệ tài khoản',
        description: 'Áp dụng nguyên tắc "3 Không": Không tin, Không làm theo, Không chuyển tiền; biết kiểm tra tên miền trang web chính chủ và cài đặt bảo vệ tài khoản ngân hàng.',
        iconName: 'Lock'
      },
      {
        id: 'obj_12_22_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tỉnh táo & tinh thần tương trợ',
        description: 'Luôn giữ bình tĩnh trước mọi thông báo trúng thưởng hoặc đe dọa; chủ động tuyên truyền, cảnh báo bảo vệ người lớn tuổi trong gia đình.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_22_1',
        title: '1. Nhận diện các hình thức lừa đảo tài chính qua mạng',
        subtitle: 'Vạch trần các bẫy tâm lý tinh vi của tội phạm mạng',
        iconName: 'AlertTriangle',
        keyPoints: [
          'Thao túng tâm lý (Social Engineering): Kẻ lừa đảo không tấn công vào phần cứng máy tính mà tấn công trực tiếp vào điểm yếu tâm lý của con người (sự sợ hãi, lòng tham, sự cả tin, sự vội vã).',
          'Các kịch bản lừa đảo kinh điển:',
          '  1. Giả danh cơ quan công an, tòa án gọi điện dọa bắt giữ vì liên quan đến đường dây rửa tiền, yêu cầu chuyển tiền vào "tài khoản an toàn" để chứng minh trong sạch.',
          '  2. Chiếm quyền Zalo/Facebook rồi nhắn tin cho người thân mượn tiền gấp vì tai nạn hoặc viện phí.',
          '  3. Mồi chài việc nhẹ lương cao: Tuyển cộng tác viên làm nhiệm vụ chốt đơn ảo Shopee nhận hoa hồng, nạp tiền thật nhận tiền ảo.',
          '  4. Công nghệ Deepfake: Giả giọng nói và khuôn mặt của người thân gọi video call vài giây chập chờn để tạo niềm tin chuyển tiền.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thủ đoạn lừa đảo', 'Dấu hiệu nhận biết đặc trưng', 'Hành động ứng phó chuẩn'],
          rows: [
            ['Giả danh công an dọa bắt', 'Gọi qua điện thoại/Zalo, ép chuyển tiền', 'Cúp máy ngay! Công an không bao giờ làm việc qua điện thoại'],
            ['Nhờ chuyển tiền gấp', 'Tin nhắn từ Facebook bạn bè, tài khoản lạ', 'Gọi điện thoại trực tiếp bằng số di động để xác minh'],
            ['Đường link lạ ngân hàng', 'Tên miền sai chính tả (vietcomrbank.xyz)', 'Tuyệt đối không nhấp vào, không nhập OTP']
          ]
        },
        emCanNho: [
          'Công an, Viện kiểm sát KHÔNG BAO GIỜ làm việc hay yêu cầu chuyển tiền qua điện thoại.',
          'Khi nhận tin nhắn vay tiền từ bạn bè, BẮT BUỘC phải gọi điện thoại trực tiếp xác thực.',
          'Cảnh giác với video call chất lượng kém, cử động đơ cứng (công nghệ Deepfake).'
        ]
      },
      {
        id: 'tab_12_22_2',
        title: '2. Kỹ năng tự bảo vệ tài khoản số và dữ liệu cá nhân',
        subtitle: 'Xây dựng bức tường lửa cá nhân phòng chống lừa đảo',
        iconName: 'ShieldCheck',
        keyPoints: [
          'Nguyên tắc "3 KHÔNG":',
          '  1. KHÔNG tin bất kỳ cuộc gọi lạ nào yêu cầu cung cấp thông tin tài khoản hay chuyển tiền.',
          '  2. KHÔNG làm theo hướng dẫn cài đặt các ứng dụng lạ từ file `.apk` ngoài kho ứng dụng chính thức.',
          '  3. KHÔNG chia sẻ mã xác thực OTP, mật khẩu hay mã thẻ ngân hàng cho bất kỳ ai (kể cả nhân viên ngân hàng).',
          'Bảo vệ tài khoản đa tầng:',
          '  - Bật xác thực hai yếu tố (2FA) bằng ứng dụng tạo mã (Google Authenticator) thay cho SMS OTP.',
          '  - Khóa tính năng thanh toán trực tuyến quốc tế khi không có nhu cầu sử dụng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Nguyên tắc 3 KHÔNG', desc: 'Không tin - Không làm theo - Không chuyển tiền' },
            { label: 'Bảo mật OTP & Mật khẩu', desc: 'Mã OTP là chìa khóa két sắt cá nhân, không cung cấp cho ai' },
            { label: 'Cài app từ nguồn uy tín', desc: 'Chỉ cài đặt từ Google Play Store và Apple App Store' }
          ]
        },
        emCanNho: [
          'Mã OTP là chìa khóa tài chính cá nhân: Tuyệt đối không đọc cho bất kỳ ai.',
          'Không bao giờ cài ứng dụng qua đường link lạ hoặc file APK trôi nổi.',
          'Bình tĩnh xác minh trước mọi yêu cầu chuyển tiền khẩn cấp.'
        ]
      }
    ]
  },

  // Bài 23: Nhóm nghề phát triển phần mềm và ứng dụng web
  23: {
    objectives: [
      {
        id: 'obj_12_23_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bức tranh nghề Lập trình viên & Web',
        description: 'Trình bày được vai trò của Lập trình viên Front-end (HTML/CSS/JS), Back-end (Python/Node/Java/C#), Full-stack và Kỹ sư ứng dụng di động.',
        iconName: 'Briefcase'
      },
      {
        id: 'obj_12_23_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định lộ trình học tập & công nghệ',
        description: 'Vẽ được lộ trình học tập từ kiến thức nền tảng THPT (thuật toán, HTML/CSS, tư duy logic) đến các công nghệ chuyên sâu và kỹ năng làm việc nhóm.',
        iconName: 'Compass'
      },
      {
        id: 'obj_12_23_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đam mê sáng tạo sản phẩm công nghệ',
        description: 'Hình thành niềm đam mê giải quyết bài toán cuộc sống bằng phần mềm, có tinh thần kiên trì học hỏi công nghệ mới suốt đời.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_23_1',
        title: '1. Nhóm nghề phát triển phần mềm và ứng dụng web',
        subtitle: 'Những kiến trúc sư kiến tạo nên thế giới số',
        iconName: 'Code',
        keyPoints: [
          'Vị trí việc làm phong phú:',
          '  - Front-end Developer: Chuyên gia xây dựng giao diện tương tác người dùng mượt mà bằng HTML, CSS, JavaScript, React, Vue.',
          '  - Back-end Developer: Kỹ sư xây dựng hệ thống máy chủ, xử lý dữ liệu và logic nghiệp vụ bằng Python, Java, NodeJS, SQL.',
          '  - Full-stack Developer: Thành thạo cả hai mảng Front-end và Back-end.',
          '  - Mobile App Developer: Lập trình ứng dụng di động cho iOS (Swift) và Android (Kotlin, Flutter).',
          'Triển vọng thị trường: Nhu cầu nhân lực phần mềm luôn dẫn đầu thị trường lao động trong nước và quốc tế với mức lương hấp dẫn.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Vị trí chuyên môn', 'Trọng tâm công việc', 'Ngôn ngữ & Công cụ chính'],
          rows: [
            ['Front-end Developer', 'Giao diện web, hiệu ứng người dùng', 'HTML5, CSS3, JavaScript, React'],
            ['Back-end Developer', 'Xử lý dữ liệu máy chủ, bảo mật API', 'Python, Java, Go, MySQL, MongoDB'],
            ['Mobile Developer', 'Ứng dụng chạy trên điện thoại', 'Flutter, React Native, Swift, Kotlin']
          ]
        },
        emCanNho: [
          'Front-end xây dựng phần nhìn thấy; Back-end xây dựng bộ não xử lý dữ liệu.',
          'Nhu cầu nhân lực phát triển phần mềm liên tục tăng trưởng mạnh mẽ.',
          'Khả năng giải quyết vấn đề và tự học là phẩm chất hàng đầu của lập trình viên.'
        ]
      },
      {
        id: 'tab_12_23_2',
        title: '2. Yêu cầu năng lực và cơ hội việc làm',
        subtitle: 'Chuẩn bị hành trang trở thành Kỹ sư phần mềm toàn cầu',
        iconName: 'Award',
        keyPoints: [
          'Năng lực kỹ thuật cốt lõi: Tư duy thuật toán vững chắc, cấu trúc dữ liệu và giải thuật, nguyên lý lập trình hướng đối tượng (OOP), quản lý phiên bản Git/GitHub.',
          'Kỹ năng mềm thiết yếu: Tiếng Anh chuyên ngành (đọc tài liệu công nghệ), khả năng làm việc nhóm theo mô hình Scrum/Agile, kỹ năng trình bày ý tưởng.',
          'Môi trường làm việc: Các tập đoàn công nghệ lớn, công ty gia công phần mềm xuất khẩu (Outsourcing), công ty sản phẩm (Product), hoặc làm việc từ xa (Remote) cho các công ty nước ngoài.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tư duy thuật toán', desc: 'Nền tảng vững chắc học từ Tin học 10 & 11' },
            { label: 'Kỹ năng công nghệ Web', desc: 'Thực hành HTML, CSS, JavaScript từ lớp 12' },
            { label: 'Ngoại ngữ & Kỹ năng mềm', desc: 'Chìa khóa vươn ra thị trường lao động quốc tế' }
          ]
        },
        emCanNho: [
          'Tư duy giải thuật và cấu trúc dữ liệu là gốc rễ bền vững nhất.',
          'Thành thạo Git/GitHub để quản lý mã nguồn và cộng tác nhóm.',
          'Tiếng Anh tốt giúp tiếp cận tài liệu công nghệ mới nhất của thế giới.'
        ]
      }
    ]
  },

  // Bài 24: Nhóm nghề quản trị mạng và an toàn thông tin
  24: {
    objectives: [
      {
        id: 'obj_12_24_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Chân dung Chuyên gia Quản trị mạng & An toàn số',
        description: 'Mô tả được công việc của Kỹ sư quản trị mạng (Network Administrator) và Chuyên gia an toàn thông tin / An ninh mạng (Cyber Security Specialist).',
        iconName: 'ShieldCheck'
      },
      {
        id: 'obj_12_24_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận biết các chứng chỉ quốc tế uy tín',
        description: 'Nhận biết các chứng chỉ nghề nghiệp quốc tế tiêu chuẩn trong ngành: Cisco CCNA, CCNP, CompTIA Security+, CEH (Certified Ethical Hacker).',
        iconName: 'Award'
      },
      {
        id: 'obj_12_24_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đạo đức nghề nghiệp Hacker mũ trắng',
        description: 'Nuôi dưỡng lý tưởng bảo vệ an ninh quốc gia trên không gian mạng, kiên định với đạo đức nghề nghiệp, bảo mật dữ liệu khách hàng.',
        iconName: 'ShieldAlert'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_24_1',
        title: '1. Nhóm nghề quản trị mạng và an toàn thông tin',
        subtitle: 'Những người hùng thầm lặng bảo vệ huyết mạch số quốc gia',
        iconName: 'Server',
        keyPoints: [
          'Kỹ sư quản trị mạng (Network Administrator): Thiết kế, lắp đặt, cấu hình và duy trì hệ thống mạng nội bộ và kết nối Internet của cơ quan, trường học, bệnh viện luôn hoạt động 24/7 ổn định, không gián đoạn.',
          'Chuyên gia An toàn thông tin (Cyber Security Analyst):',
          '  - Kiểm thử xâm nhập (Penetration Tester / Ethical Hacker): Giả lập các đòn tấn công của tin tặc để tìm ra lỗ hổng bảo mật của hệ thống và vá lỗi.',
          '  - Giám sát an ninh mạng (SOC Analyst): Theo dõi cảnh báo an ninh thời gian thực và xử lý sự cố rò rỉ dữ liệu hoặc mã độc tấn công.',
          'Tầm quan trọng chiến lược: An toàn thông tin là vấn đề sống còn liên quan mật thiết đến chủ quyền số quốc gia.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Quản trị mạng', desc: 'Vận hành hệ thống máy chủ, Switch, Router thông suốt' },
            { label: 'Phòng thủ an ninh', desc: 'Thiết lập Tường lửa, hệ thống chống xâm nhập IDS/IPS' },
            { label: 'Kiểm thử lỗ hổng', desc: 'Săn tìm lỗi bảo mật để vá trước khi tin tặc tấn công' }
          ]
        },
        emCanNho: [
          'Quản trị mạng đảm bảo kết nối liên tục; An toàn thông tin đảm bảo dữ liệu không bị đánh cắp.',
          'Hacker mũ trắng (Ethical Hacker) dùng kỹ năng bảo mật để bảo vệ xã hội.',
          'Đây là ngành nghề có nhu cầu tuyển dụng cấp thiết với thu nhập rất cao.'
        ]
      },
      {
        id: 'tab_12_24_2',
        title: '2. Kỹ năng cần thiết và môi trường làm việc',
        subtitle: 'Chứng chỉ quốc tế và phẩm chất cần có của chiến sĩ an ninh mạng',
        iconName: 'Award',
        keyPoints: [
          'Kiến thức chuyên sâu: Mô hình mạng OSI và TCP/IP, cấu hình thiết bị phần cứng mạng (Cisco, Mikrotik), quản trị hệ điều hành máy chủ Linux (Ubuntu Server, RedHat) và mật mã học.',
          'Các chứng chỉ quốc tế danh giá:',
          '  - Quản trị mạng: Cisco CCNA (Cisco Certified Network Associate), CCNP.',
          '  - An toàn thông tin: CompTIA Security+, CEH (Certified Ethical Hacker), CISSP.',
          'Phẩm chất quan trọng: Tính kỷ luật tuyệt đối, tính cẩn trọng bảo mật thông tin và tinh thần phản ứng nhanh trước các sự cố bất ngờ.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Chứng chỉ quốc tế', 'Đơn vị cấp', 'Giá trị nghề nghiệp'],
          rows: [
            ['Cisco CCNA', 'Cisco Systems (Mỹ)', 'Chuẩn mực toàn cầu cho kỹ sư thiết kế và vận hành mạng'],
            ['CompTIA Security+', 'CompTIA', 'Chứng chỉ nền tảng bắt buộc về bảo mật thông tin'],
            ['CEH (Ethical Hacker)', 'EC-Council', 'Chứng chỉ thực hành tấn công và phòng thủ mạng']
          ]
        },
        emCanNho: [
          'Linux và hiểu sâu giao thức TCP/IP là hai vũ khí bắt buộc.',
          'Các chứng chỉ quốc tế CCNA, Security+ mở rộng cơ hội việc làm toàn cầu.',
          'Đạo đức nghề nghiệp là phẩm chất tối thượng của chuyên gia an ninh mạng.'
        ]
      }
    ]
  },

  // Bài 25: Nhóm nghề thiết kế đồ họa và đa phương tiện số
  25: {
    objectives: [
      {
        id: 'obj_12_25_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các chuyên ngành Đồ họa & Đa phương tiện',
        description: 'Hiểu các nhánh nghề nghiệp: Thiết kế nhận diện thương hiệu, Thiết kế trải nghiệm người dùng (UI/UX Design), Dựng phim kỹ xảo (Video Editor) và Kỹ sư âm thanh số.',
        iconName: 'Sparkles'
      },
      {
        id: 'obj_12_25_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xây dựng Portfolio hồ sơ năng lực',
        description: 'Biết cách tổng hợp các tác phẩm đồ họa, video đã thực hành tại trường phổ thông thành một bộ hồ sơ năng lực (Portfolio) trực tuyến trên Behance hoặc website cá nhân.',
        iconName: 'Folder'
      },
      {
        id: 'obj_12_25_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đam mê cái đẹp & phong cách cá nhân',
        description: 'Nuôi dưỡng năng lực cảm thụ nghệ thuật, định hình phong cách cá nhân độc đáo và tôn trọng quyền sở hữu tác phẩm của đồng nghiệp.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_25_1',
        title: '1. Nhóm nghề thiết kế đồ họa và đa phương tiện số',
        subtitle: 'Sự giao thoa tuyệt mỹ giữa công nghệ số và cảm xúc nghệ thuật',
        iconName: 'Image',
        keyPoints: [
          'Thiết kế giao diện và trải nghiệm người dùng (UI/UX Designer):',
          '  - UI (User Interface): Thiết kế nút bấm, màu sắc, font chữ của ứng dụng cho đẹp mắt.',
          '  - UX (User Experience): Nghiên cứu hành vi người dùng để bố trí luồng thao tác thuận tiện, trực quan, không gây nhầm lẫn.',
          'Biên tập video & kỹ xảo truyền thông (Video Editor / Motion Graphics): Dựng phim quảng cáo, video ngắn TikTok/YouTube, làm kỹ xảo hoạt hình 2D/3D.',
          'Công cụ thực hành: Figma, Adobe Premiere, After Effects, Photoshop, Blender.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nghề nghiệp', 'Sản phẩm đầu ra', 'Công cụ ưa chuộng'],
          rows: [
            ['UI/UX Designer', 'Mô hình giao diện app di động và website', 'Figma, Adobe XD'],
            ['Motion Designer', 'Hoạt hình 2D, đồ họa chuyển động quảng cáo', 'After Effects, Blender'],
            ['Video Editor', 'Phim ngắn, MV ca nhạc, phóng sự truyền hình', 'Premiere Pro, DaVinci Resolve']
          ]
        },
        emCanNho: [
          'UI là phần nhìn thấy đẹp mắt; UX là trải nghiệm bấm vào tiện lợi.',
          'Figma hiện là công cụ thiết kế UI/UX số 1 thế giới.',
          'Nghề đa phương tiện mở ra cơ hội làm việc tại các agency quảng cáo hàng đầu.'
        ]
      },
      {
        id: 'tab_12_25_2',
        title: '2. Con đường học tập và phát triển nghề nghiệp',
        subtitle: 'Hồ sơ Portfolio: Tấm vé vàng chinh phục nhà tuyển dụng',
        iconName: 'Compass',
        keyPoints: [
          'Khác biệt then chốt của ngành sáng tạo: Nhà tuyển dụng đồ họa ít khi quan tâm đến bằng cấp giấy tờ mà đánh giá trực tiếp qua Portfolio (bộ sưu tập các dự án thực tế đã làm).',
          'Các bước xây dựng Portfolio thời học sinh:',
          '  - Dự án thiết kế logo cho trường hoặc câu lạc bộ.',
          '  - Video clip hoạt hình ngắn hoặc phim kỷ yếu lớp.',
          '  - Giao diện trang web đã lập trình trong bài học Tin học 12.',
          'Các cơ sở đào tạo uy tín: Các trường Đại học Mỹ thuật công nghiệp, Kiến trúc, Học viện Bưu chính Viễn thông (ngành Công nghệ đa phương tiện), Đại học FPT.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Rèn luyện công cụ', desc: 'Thành thạo Inkscape, GIMP, Figma từ THPT' },
            { label: '2. Xây dựng Portfolio', desc: 'Đăng tải các tác phẩm lên trang web cá nhân' },
            { label: '3. Cơ hội việc làm', desc: 'Làm việc linh hoạt tại studio, công ty game hoặc freelancer' }
          ]
        },
        emCanNho: [
          'Hồ sơ Portfolio quan trọng hơn bằng cấp trong lĩnh vực thiết kế.',
          'Tận dụng các bài tập thực hành trên lớp để làm giàu cho Portfolio cá nhân.',
          'Chủ động học hỏi các xu hướng thiết kế giao diện mới nhất trên thế giới.'
        ]
      }
    ]
  },

  // Bài 26: Nhóm nghề phân tích dữ liệu và trí tuệ nhân tạo
  26: {
    objectives: [
      {
        id: 'obj_12_26_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nghề Phân tích dữ liệu & Kỹ sư AI',
        description: 'Hiểu vai trò của Nhà phân tích dữ liệu (Data Analyst), Nhà khoa học dữ liệu (Data Scientist) và Kỹ sư Trí tuệ nhân tạo (AI/ML Engineer) trong thời đại Big Data.',
        iconName: 'Brain'
      },
      {
        id: 'obj_12_26_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện kỹ năng toán học & công nghệ',
        description: 'Chỉ rõ các môn học bổ trợ then chốt: Toán xác suất thống kê, Đại số tuyến tính, ngôn ngữ lập trình Python và thư viện học máy (Pandas, Scikit-learn).',
        iconName: 'Cpu'
      },
      {
        id: 'obj_12_26_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy dựa trên dữ liệu (Data-driven)',
        description: 'Hình thành thói quen ra quyết định dựa trên số liệu thực chứng khoa học thay vì phỏng đoán cảm tính; ý thức bảo vệ đạo đức dữ liệu.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_26_1',
        title: '1. Nhóm nghề phân tích dữ liệu và trí tuệ nhân tạo',
        subtitle: 'Khai thác mỏ vàng dữ liệu số để kiến tạo tương lai',
        iconName: 'Database',
        keyPoints: [
          'Dữ liệu là dầu mỏ của thế kỷ 21: Mọi tổ chức, doanh nghiệp đều cần thu thập và phân tích dữ liệu để tối ưu hóa hoạt động.',
          'Các vị trí chuyên môn đỉnh cao:',
          '  - Data Analyst (Nhà phân tích dữ liệu): Thu thập, làm sạch và vẽ biểu đồ trực quan hóa dữ liệu (Dashboard) giúp ban giám đốc nhìn thấy xu hướng kinh doanh.',
          '  - Data Scientist (Nhà khoa học dữ liệu): Xây dựng các mô hình toán học dự báo xu hướng tương lai.',
          '  - AI / Machine Learning Engineer (Kỹ sư AI): Huấn luyện các mạng nơ-ron học sâu xử lý hình ảnh, xử lý ngôn ngữ tự nhiên và xe tự hành.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nghề nghiệp', 'Câu hỏi trọng tâm cần trả lời', 'Công cụ sử dụng'],
          rows: [
            ['Data Analyst', '"Điều gì đã xảy ra trong tháng qua?"', 'SQL, Excel nâng cao, PowerBI, Tableau'],
            ['Data Scientist', '"Điều gì sẽ có khả năng xảy ra tiếp theo?"', 'Python, R, Thống kê toán, Pandas'],
            ['AI Engineer', '"Làm sao để máy tính tự động hóa tác vụ này?"', 'Python, PyTorch, TensorFlow, GPU Cloud']
          ]
        },
        emCanNho: [
          'Data Analyst trả lời quá khứ; Data Scientist dự báo tương lai; AI Engineer tự động hóa.',
          'Python là ngôn ngữ số 1 áp đảo toàn bộ lĩnh vực Khoa học dữ liệu và AI.',
          'Tư duy dựa trên số liệu giúp loại bỏ các quyết định sai lầm cảm tính.'
        ]
      },
      {
        id: 'tab_12_26_2',
        title: '2. Xu hướng nghề nghiệp trong kỷ nguyên Big Data/AI',
        subtitle: 'Hành trang bước vào ngành nghề hấp dẫn nhất thế kỷ 21',
        iconName: 'TrendingUp',
        keyPoints: [
          'Nền tảng học thuật vững chắc: Môn Toán THPT (đặc biệt là Xác suất thống kê, Đạo hàm, Ma trận) đóng vai trò nền tảng quyết định sự hiểu biết thuật toán học máy.',
          'Kỹ năng công nghệ: Lập trình Python thành thạo, truy vấn cơ sở dữ liệu SQL giỏi, hiểu các thuật toán phân loại và hồi quy.',
          'Đạo đức AI (AI Ethics): Nhận thức về sự thiên vị dữ liệu (Bias), tôn trọng quyền riêng tư của người dùng và tính minh bạch trong các quyết định do thuật toán đưa ra.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Toán học & Thống kê', desc: 'Bản chất logic của mọi mô hình học máy' },
            { label: 'Kỹ năng lập trình Python', desc: 'Thư viện Pandas, Numpy, Scikit-learn, PyTorch' },
            { label: 'Đạo đức trí tuệ nhân tạo', desc: 'Đảm bảo thuật toán công bằng và bảo mật dữ liệu' }
          ]
        },
        emCanNho: [
          'Toán học THPT là bệ phóng quan trọng nhất cho ngành Khoa học dữ liệu và AI.',
          'Học tốt Python và SQL từ sớm để có lợi thế cạnh tranh vượt bậc.',
          'Luôn tuân thủ các quy chuẩn đạo đức khi xử lý dữ liệu của người dùng.'
        ]
      }
    ]
  },

  // Bài 27: Hướng nghiệp và kế hoạch học tập cá nhân
  27: {
    objectives: [
      {
        id: 'obj_12_27_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hệ thống ngành đào tạo CNTT tại các trường ĐH',
        description: 'Nắm rõ các mã ngành tuyển sinh: Khoa học máy tính, Kỹ thuật phần mềm, Hệ thống thông tin, Mạng máy tính & Truyền thông, An toàn thông tin, Trí tuệ nhân tạo.',
        iconName: 'Compass'
      },
      {
        id: 'obj_12_27_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Lập kế hoạch phát triển bản thân (IDP)',
        description: 'Xây dựng được bản kế hoạch học tập cá nhân 4 năm đại học (chọn ngành, chọn trường, mục tiêu ngoại ngữ IELTS, dự án thực tập) phù hợp với năng lực bản thân.',
        iconName: 'Workflow'
      },
      {
        id: 'obj_12_27_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Chủ động định đoạt tương lai',
        description: 'Có thái độ tự tin, tự giác chịu trách nhiệm với sự lựa chọn nghề nghiệp tương lai, không thụ động phụ thuộc vào gia đình.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_27_1',
        title: '1. Lập kế hoạch học tập cá nhân định hướng nghề nghiệp CNTT',
        subtitle: 'Bản đồ chiến lược biến ước mơ trở thành hiện thực',
        iconName: 'Compass',
        keyPoints: [
          'Mô hình đánh giá bản thân (Ikigai): Giao điểm của 4 vòng tròn: Điều bạn yêu thích + Điều bạn giỏi + Điều xã hội cần + Điều mang lại thu nhập cho bạn.',
          'Các bước lập kế hoạch học tập cá nhân (Individual Development Plan - IDP):',
          '  - Bước 1: Đánh giá điểm mạnh/yếu qua kết quả học tập môn Tin học, Toán, Tiếng Anh THPT.',
          '  - Bước 2: Chọn nhánh nghề nghiệp mục tiêu (Lập trình web, An ninh mạng, Đồ họa hay AI).',
          '  - Bước 3: Đặt mục tiêu điểm số kỳ thi tốt nghiệp THPT và xét tuyển đại học.',
          '  - Bước 4: Lên lịch trình bổ sung kỹ năng ngoại ngữ và dự án thực tế.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thấu hiểu bản thân', desc: 'Khám phá năng khiếu logic và sở thích công nghệ' },
            { label: 'Xác định mục tiêu nghề', desc: 'Chọn ngành đào tạo phù hợp tại trường đại học' },
            { label: 'Hành động kiên trì', desc: 'Ôn thi tốt nghiệp, trau dồi tiếng Anh và dự án cá nhân' }
          ]
        },
        emCanNho: [
          'Áp dụng mô hình Ikigai để lựa chọn nghề nghiệp phù hợp nhất với bản thân.',
          'Lập kế hoạch học tập chi tiết từng năm giúp bạn luôn chủ động.',
          'Tiếng Anh và kỹ năng tự học là hành trang quan trọng nhất.'
        ]
      },
      {
        id: 'tab_12_27_2',
        title: '2. Tìm kiếm thông tin tuyển sinh và cơ hội thực tập',
        subtitle: 'Khai thác các kênh thông tin chính thống để lựa chọn bến đỗ',
        iconName: 'BookOpen',
        keyPoints: [
          'Phân biệt các chuyên ngành đào tạo đại học phổ biến:',
          '  - Khoa học máy tính (Computer Science): Đậm tính nghiên cứu, thuật toán cốt lõi.',
          '  - Kỹ thuật phần mềm (Software Engineering): Đậm tính ứng dụng, quy trình xây dựng phần mềm.',
          '  - Hệ thống thông tin (Information Systems): Kết hợp CNTT với quản trị kinh doanh.',
          '  - An toàn thông tin (Cyber Security): Phòng thủ và bảo mật mạng.',
          'Kênh tìm kiếm thông tin: Cổng thông tin tuyển sinh của Bộ GD&ĐT, đề án tuyển sinh các trường ĐH, ngày hội tư vấn hướng nghiệp.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Ngành đào tạo', 'Trọng tâm kiến thức', 'Trường đào tạo tiêu biểu'],
          rows: [
            ['Kỹ thuật phần mềm', 'Lập trình ứng dụng web, app, game', 'ĐH Bách Khoa, ĐHQG, ĐH FPT'],
            ['Khoa học máy tính', 'Thuật toán chuyên sâu, học máy, AI', 'ĐH Bách Khoa, ĐH Khoa học Tự nhiên'],
            ['An toàn thông tin', 'Bảo mật mạng, mật mã học', 'Học viện Kỹ thuật Mật mã, Học viện ANND']
          ]
        },
        emCanNho: [
          'Tìm hiểu kỹ chuẩn đầu ra và chương trình đào tạo của từng ngành.',
          'Theo dõi đề án tuyển sinh chính thức từ trang web của các trường đại học.',
          'Tìm kiếm cơ hội thực tập sớm từ năm thứ 2, thứ 3 đại học.'
        ]
      }
    ]
  },

  // Bài 28: Dự án: Tạo trang web cho trường học
  28: {
    objectives: [
      {
        id: 'obj_12_28_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Tổng kết năng lực Tin học ứng dụng THPT',
        description: 'Hệ thống hóa toàn bộ kiến thức và kỹ năng đã tích lũy trong 3 năm THPT: từ đồ họa Inkscape/GIMP, lập trình Python, CSDL SQL đến thiết kế Web HTML/CSS.',
        iconName: 'Award'
      },
      {
        id: 'obj_12_28_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hiện dự án công nghệ số hoàn chỉnh',
        description: 'Hợp tác nhóm xây dựng website hoàn chỉnh cho trường THPT hoặc câu lạc bộ gồm ít nhất 4 trang con, có hình ảnh tối ưu, form liên hệ và xuất bản online.',
        iconName: 'Play'
      },
      {
        id: 'obj_12_28_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tự hào năng lực công dân số',
        description: 'Tự hào về sản phẩm công nghệ hoàn chỉnh do chính mình làm ra, sẵn sàng tự tin bước vào giảng đường đại học và kỷ nguyên số.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_12_28_1',
        title: '1. Tổng kết kiến thức Tin học ứng dụng THPT',
        subtitle: 'Bức tranh toàn cảnh hành trình chinh phục công nghệ 3 năm cấp Ba',
        iconName: 'Layers',
        keyPoints: [
          'Lớp 10: Xử lý thông tin, Hệ nhị phân, Thiết kế đồ họa vector Inkscape và Nhập môn Lập trình Python (Cú pháp, Rẽ nhánh, Vòng lặp, Danh sách, Hàm).',
          'Lớp 11 (Ứng dụng): Hệ điều hành, Mạng cục bộ, Cơ sở dữ liệu quan hệ và Ngôn ngữ truy vấn SQL, Phần mềm chỉnh sửa ảnh GIMP và làm phim OpenShot.',
          'Lớp 12 (Ứng dụng): Trí tuệ nhân tạo (AI), Hạ tầng thiết bị mạng (Switch, Router, IP), Thiết kế & Xuất bản Website (HTML5, CSS3, Responsive), Đạo đức số & Định hướng nghề nghiệp.',
          'Năng lực chung hình thành: Tư duy giải thuật logic, kỹ năng số thực chiến và khả năng thích ứng linh hoạt với công nghệ mới.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Lớp 10: Nền tảng', desc: 'Tư duy thuật toán, Python cơ bản và Đồ họa Vector' },
            { label: 'Lớp 11: Ứng dụng', desc: 'Hệ quản trị CSDL SQL, Xử lý ảnh GIMP và Dựng phim' },
            { label: 'Lớp 12: Chuyên nghiệp', desc: 'Thiết kế Web Responsive, Quản trị mạng, AI và Hướng nghiệp' }
          ]
        },
        emCanNho: [
          'Chương trình Tin học THPT trang bị bộ công cụ số hoàn chỉnh cho tương lai.',
          'Kết hợp hài hòa giữa kiến thức lý thuyết khoa học và kỹ năng thực hành.',
          'Tự tin làm chủ công nghệ để kiến tạo tương lai số.'
        ]
      },
      {
        id: 'tab_12_28_2',
        title: '2. Thực hiện dự án công nghệ số tổng hợp',
        subtitle: 'Kiệt tác tốt nghiệp môn Tin học của học sinh lớp 12',
        iconName: 'Award',
        keyPoints: [
          'Yêu cầu dự án website trường học:',
          '  1. Cấu trúc gồm tối thiểu 4 trang: Trang chủ (`index.html`), Giới thiệu (`gioithieu.html`), Hoạt động (`hoatdong.html`), Liên hệ (`lienhe.html`).',
          '  2. Giao diện thiết kế bằng CSS Responsive: Hiển thị đẹp mắt trên cả máy tính và điện thoại di động.',
          '  3. Đa phương tiện phong phú: Có ảnh hoạt động, video nhúng YouTube và bản đồ trường Google Maps.',
          '  4. Biểu mẫu tương tác: Có Form cho phép học sinh hoặc phụ huynh gửi thư góp ý.',
          '  5. Xuất bản trực tuyến: Triển khai thành công lên GitHub Pages và trình bày báo cáo sản phẩm trước lớp.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí đánh giá', 'Yêu cầu kỹ thuật', 'Điểm tối đa'],
          rows: [
            ['Cấu trúc & Mã nguồn', 'HTML5 ngữ nghĩa, CSS gọn gàng, đúng chuẩn W3C', '25%'],
            ['Tính thẩm mỹ & Responsive', 'Phối màu hài hòa, hiển thị tốt trên Mobile', '25%'],
            ['Nội dung & Đa phương tiện', 'Bài viết chỉn chu, ảnh nét, video mượt mà', '25%'],
            ['Xuất bản & Báo cáo', 'Chạy online trên GitHub Pages, thuyết trình tự tin', '25%']
          ]
        },
        emCanNho: [
          'Dự án website là tổng hợp tinh hoa kiến thức của cả năm học lớp 12.',
          'Phân công nhiệm vụ cụ thể và phối hợp nhóm nhịp nhàng qua Git.',
          'Tự tin xuất bản sản phẩm công nghệ thực thụ của chính mình lên Internet!'
        ]
      }
    ]
  }
};
