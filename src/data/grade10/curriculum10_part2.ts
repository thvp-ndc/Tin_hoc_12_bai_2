import { LessonCurriculum10 } from './curriculum10';

export const GRADE_10_CURRICULUM_PART2: Record<number, LessonCurriculum10> = {
  // Bài 6: Dữ liệu âm thanh và hình ảnh
  6: {
    objectives: [
      {
        id: 'obj_10_6_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nguyên lý số hóa âm thanh & hình ảnh',
        description: 'Giải thích được nguyên lý số hóa âm thanh (lấy mẫu và lượng tử hóa) và số hóa hình ảnh (điểm ảnh Pixel, độ phân giải, hệ màu RGB).',
        iconName: 'Image'
      },
      {
        id: 'obj_10_6_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tính toán dung lượng tệp âm thanh/ảnh',
        description: 'Thực hiện được phép tính dung lượng của một bức ảnh số (Số điểm ảnh x Số byte/pixel) và tệp âm thanh số cơ bản.',
        iconName: 'Calculator'
      },
      {
        id: 'obj_10_6_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thẩm mỹ công nghệ số',
        description: 'Có cảm thụ đúng đắn về chất lượng âm thanh và hình ảnh kỹ thuật số, biết tối ưu dung lượng tệp khi lưu trữ và truyền tải.',
        iconName: 'Eye'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_6_1',
        title: '1. Số hóa âm thanh',
        subtitle: 'Chuyển đổi sóng âm tương tự (Analog) thành tín hiệu số (Digital)',
        iconName: 'Volume2',
        keyPoints: [
          'Âm thanh tương tự (Analog): Là sóng âm liên tục lan truyền trong không khí.',
          'Quá trình số hóa âm thanh qua 2 khâu:',
          '  - Lấy mẫu (Sampling): Đo biên độ sóng âm tại các thời điểm đều đặn. Tần số lấy mẫu chuẩn CD là $44.1\\text{ kHz}$ (44.100 lần mỗi giây).',
          '  - Lượng tử hóa (Quantization): Chuyển đổi các giá trị biên độ đo được thành các dãy bit nhị phân (thường là 16 bit hoặc 24 bit).',
          'Định dạng âm thanh: Không nén (.WAV), Nén có mất mát (.MP3), Nén không mất mát (.FLAC).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Sóng âm liên tục', desc: 'Tín hiệu Analog từ giọng hát, nhạc cụ' },
            { label: 'Lấy mẫu 44.1 kHz', desc: 'Đo biên độ 44.100 lần trong 1 giây' },
            { label: 'Lượng tử hóa 16 bit', desc: 'Chuyển từng mẫu thành chuỗi bit 0 và 1' }
          ]
        },
        emCanNho: [
          'Số hóa âm thanh gồm 2 bước: Lấy mẫu và Lượng tử hóa.',
          'Tần số lấy mẫu càng cao thì âm thanh tái tạo càng trung thực.',
          'Định dạng MP3 nén nhẹ phổ biến; WAV giữ nguyên chất lượng phòng thu.'
        ]
      },
      {
        id: 'tab_10_6_2',
        title: '2. Số hóa hình ảnh',
        subtitle: 'Ma trận điểm ảnh Pixel và hệ màu cộng RGB',
        iconName: 'Image',
        keyPoints: [
          'Điểm ảnh (Pixel - Picture Element): Phần tử nhỏ nhất cấu thành bức ảnh số kỹ thuật số.',
          'Độ phân giải (Resolution): Tổng số điểm ảnh của bức ảnh (ví dụ: Full HD $1920 \\times 1080 = 2.073.600$ pixels).',
          'Hệ màu RGB: Màu sắc của mỗi pixel được tạo nên từ sự pha trộn của 3 màu cơ bản: Đỏ (Red), Lục (Green), Lam (Blue).',
          'Độ sâu màu (Color Depth): Thường là 24 bit (mỗi màu R, G, B dùng 8 bit, nhận giá trị từ 0 đến 255), tạo ra hơn 16.7 triệu màu sắc rực rỡ.',
          'Công thức tính dung lượng ảnh thô: $\\text{Dung lượng} = \\text{Chiều rộng} \\times \\text{Chiều cao} \\times 3\\text{ bytes}$.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Màu sắc', 'Giá trị R (Red)', 'Giá trị G (Green)', 'Giá trị B (Blue)'],
          rows: [
            ['Đen tuyền', '0', '0', '0'],
            ['Trắng tinh', '255', '255', '255'],
            ['Đỏ cờ', '255', '0', '0'],
            ['Vàng tươi', '255', '255', '0'],
            ['Xanh lá cây', '0', '255', '0']
          ]
        },
        emCanNho: [
          'Bức ảnh số là ma trận các điểm ảnh Pixel mang giá trị màu sắc.',
          'Hệ màu RGB pha trộn Đỏ, Lục, Lam từ 0 đến 255.',
          'Độ phân giải càng cao thì ảnh càng sắc nét nhưng tệp tin càng nặng.'
        ]
      }
    ]
  },

  // Bài 7: Thực hành sử dụng thiết bị số thông dụng
  7: {
    objectives: [
      {
        id: 'obj_10_7_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các cổng kết nối & giao thức truyền dữ liệu',
        description: 'Nhận biết các cổng kết nối vật lý (USB Type-C, Lightning, HDMI) và giao thức không dây (Bluetooth, Wi-Fi Direct, AirDrop).',
        iconName: 'Link'
      },
      {
        id: 'obj_10_7_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kết nối thiết bị & đồng bộ dữ liệu',
        description: 'Thực hiện được việc kết nối điện thoại thông minh với máy tính để sao chép hình ảnh, tài liệu và đồng bộ hóa đám mây.',
        iconName: 'Smartphone'
      },
      {
        id: 'obj_10_7_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo vệ thiết bị & dữ liệu cá nhân',
        description: 'Ý thức rút thiết bị lưu trữ an toàn (Eject USB), cài mật khẩu khóa màn hình và không cắm thiết bị lạ vào máy tính cá nhân.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_7_1',
        title: '1. Khám phá các tính năng của điện thoại thông minh/máy tính bảng',
        subtitle: 'Khai thác tối đa năng lực của thiết bị số cầm tay',
        iconName: 'Smartphone',
        keyPoints: [
          'Hệ điều hành di động: Android (Google) và iOS (Apple) quản lý ứng dụng, cảm ứng đa điểm và bảo mật sinh trắc học (vân tay, FaceID).',
          'Các cảm biến tích hợp: Cảm biến gia tốc (xoay màn hình), cảm biến GPS (định vị bản đồ), cảm biến tiệm cận (tắt màn hình khi áp tai nghe gọi), cảm biến ánh sáng.',
          'Quản lý pin và bộ nhớ: Kiểm tra dung lượng còn trống, dọn dẹp bộ nhớ đệm (Cache) và thiết lập chế độ tiết kiệm pin.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cảm biến GPS', desc: 'Định vị toàn cầu phục vụ bản đồ Google Maps' },
            { label: 'Cảm biến xoay', desc: 'Tự động lật ngang màn hình khi xem video' },
            { label: 'Sinh trắc học', desc: 'Mở khóa bảo mật vân tay và khuôn mặt 3D' }
          ]
        },
        emCanNho: [
          'Điện thoại thông minh là một chiếc máy tính mini đa năng tích hợp nhiều cảm biến.',
          'Thường xuyên cập nhật hệ điều hành để vá lỗi bảo mật.',
          'Quản lý dung lượng bộ nhớ định kỳ để máy luôn mượt mà.'
        ]
      },
      {
        id: 'tab_10_7_2',
        title: '2. Kết nối và chia sẻ dữ liệu với máy tính',
        subtitle: 'Sao chép ảnh, tài liệu qua cáp USB và mạng không dây',
        iconName: 'Share2',
        keyPoints: [
          'Kết nối có dây (Cáp USB Type-C / Lightning): Khi cắm vào máy tính, trên điện thoại chọn chế độ "Truyền tệp (File Transfer / MTP)". Máy tính sẽ nhận diện như một ổ đĩa di động.',
          'Kết nối không dây: Chia sẻ nhanh qua Bluetooth, Wi-Fi Direct, AirDrop hoặc tải lên Google Drive / OneDrive rồi mở trên máy tính.',
          'Nguyên tắc tháo an toàn: Đối với USB hoặc ổ cứng ngoài, luôn nhấp chuột phải chọn `Eject` trước khi rút cáp để tránh hỏng dữ liệu.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Phương thức', 'Ưu điểm', 'Nhược điểm', 'Trường hợp nên dùng'],
          rows: [
            ['Cáp USB', 'Tốc độ cực nhanh, ổn định', 'Cần mang theo dây cáp', 'Chép video nặng hàng GB'],
            ['Đám mây (Drive)', 'Tiện lợi, không cần dây', 'Tốn dung lượng 4G/Wi-Fi', 'Chia sẻ tài liệu văn bản, ảnh'],
            ['Bluetooth', 'Không cần mạng Internet', 'Tốc độ truyền chậm', 'Gửi 1-2 bức ảnh nhỏ']
          ]
        },
        emCanNho: [
          'Chọn chế độ "Truyền tệp" khi cắm điện thoại vào máy tính qua cáp USB.',
          'Luôn chọn lệnh `Eject` an toàn trước khi rút USB khỏi máy tính.',
          'Sử dụng đám mây để đồng bộ ảnh và danh bạ tự động.'
        ]
      }
    ]
  },

  // Bài 8: Mạng máy tính trong cuộc sống hiện đại
  8: {
    objectives: [
      {
        id: 'obj_10_8_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm & phân loại mạng máy tính',
        description: 'Trình bày được định nghĩa mạng máy tính, phân biệt mạng cục bộ (LAN) và mạng diện rộng (WAN); hiểu vai trò của Internet.',
        iconName: 'Network'
      },
      {
        id: 'obj_10_8_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận biết thiết bị mạng & dịch vụ đám mây',
        description: 'Nhận biết được các thiết bị mạng cơ bản (Switch, Router Wi-Fi, Modem) và kể tên được các ứng dụng điện toán đám mây phổ biến.',
        iconName: 'Cloud'
      },
      {
        id: 'obj_10_8_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Sử dụng Internet an toàn & văn minh',
        description: 'Có ý thức bảo vệ mật khẩu Wi-Fi, không truy cập các mạng công cộng thiếu an toàn và chia sẻ thông tin văn minh trên Internet.',
        iconName: 'ShieldCheck'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_8_1',
        title: '1. Mạng máy tính và các thành phần chính',
        subtitle: 'Kết nối các thiết bị số để chia sẻ tài nguyên và dữ liệu',
        iconName: 'Network',
        keyPoints: [
          'Khái niệm: Mạng máy tính là một tập hợp các máy tính và thiết bị được kết nối với nhau bằng các đường truyền vật lý (có dây hoặc không dây) để trao đổi dữ liệu và dùng chung tài nguyên.',
          'Các thành phần cơ bản:',
          '  - Thiết bị đầu cuối: Máy tính, điện thoại, máy in mạng, camera thông minh.',
          '  - Thiết bị kết nối mạng: Cáp mạng (UTP), Bộ chuyển mạch (Switch), Bộ định tuyến (Router), Modem cáp quang.',
          '  - Phần mềm mạng: Hệ điều hành mạng, giao thức truyền thông TCP/IP.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thiết bị đầu cuối', desc: 'Máy tính PC, Laptop, Smartphone, Máy in' },
            { label: 'Thiết bị kết nối', desc: 'Modem cáp quang, Router Wi-Fi, Switch chia cổng' },
            { label: 'Đường truyền', desc: 'Sóng vô tuyến Wi-Fi và cáp xoắn đôi Cat6' }
          ]
        },
        emCanNho: [
          'Mạng máy tính gồm: Thiết bị đầu cuối, thiết bị kết nối và phần mềm mạng.',
          'Lợi ích lớn nhất của mạng là chia sẻ tài nguyên (dữ liệu, máy in, phần mềm).',
          'Giao thức TCP/IP là bộ quy tắc ngôn ngữ chung của mạng máy tính toàn cầu.'
        ]
      },
      {
        id: 'tab_10_8_2',
        title: '2. Phân loại mạng (LAN, WAN) và Internet',
        subtitle: 'Từ mạng phòng máy trường học đến xa lộ thông tin toàn cầu',
        iconName: 'Globe',
        keyPoints: [
          'Mạng cục bộ (LAN - Local Area Network): Kết nối các máy tính trong phạm vi hẹp (phòng học, gia đình, tòa nhà). Tốc độ truyền cao, độ trễ thấp.',
          'Mạng diện rộng (WAN - Wide Area Network): Kết nối các mạng LAN trên phạm vi địa lý rộng lớn (quốc gia, châu lục) bằng đường truyền viễn thông vệ tinh, cáp quang biển.',
          'Internet: Mạng của các mạng (Network of Networks) quy mô toàn cầu, sử dụng bộ giao thức chuẩn TCP/IP, không thuộc quyền sở hữu của bất kỳ cá nhân hay quốc gia đơn lẻ nào.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Mạng cục bộ (LAN)', 'Mạng diện rộng (WAN / Internet)'],
          rows: [
            ['Phạm vi địa lý', 'Hẹp (phòng học, cơ quan, nhà riêng)', 'Rộng lớn (quốc gia, toàn thế giới)'],
            ['Tốc độ truyền dữ liệu', 'Rất cao (100 Mbps - 1 Gbps)', 'Phụ thuộc vào băng thông nhà mạng viễn thông'],
            ['Quản trị & Sở hữu', 'Thuộc một cá nhân hoặc tổ chức', 'Hệ thống mở toàn cầu, không ai sở hữu riêng']
          ]
        },
        emCanNho: [
          'LAN kết nối phạm vi hẹp; WAN kết nối phạm vi rộng lớn.',
          'Internet là mạng diện rộng toàn cầu lớn nhất hành tinh.',
          'Router là thiết bị kết nối mạng LAN gia đình với mạng Internet bên ngoài.'
        ]
      },
      {
        id: 'tab_10_8_3',
        title: '3. Điện toán đám mây và IoT',
        subtitle: 'Xu hướng công nghệ định hình tương lai số',
        iconName: 'Cloud',
        keyPoints: [
          'Điện toán đám mây (Cloud Computing): Cung cấp tài nguyên máy tính (lưu trữ, máy chủ, phần mềm) qua Internet theo nhu cầu. Người dùng không cần mua ổ cứng lớn hay máy chủ đắt tiền (Ví dụ: Google Drive, OneDrive, iCloud).',
          'Internet vạn vật (IoT - Internet of Things): Mạng lưới hàng tỷ thiết bị vật lý trên thế giới được gắn cảm biến và phần mềm để kết nối, trao đổi dữ liệu với nhau qua Internet.',
          'Ứng dụng: Thành phố thông minh (Smart City), Nông nghiệp công nghệ cao tự động tưới tiêu khi đất khô.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Điện toán đám mây', desc: 'Truy cập tài liệu và chạy phần mềm từ mọi nơi' },
            { label: 'Hạ tầng Internet tốc độ cao', desc: 'Cáp quang biển và mạng 5G không dây' },
            { label: 'Internet vạn vật IoT', desc: 'Kết nối camera, xe tự hành, nhà thông minh' }
          ]
        },
        emCanNho: [
          'Điện toán đám mây giúp truy cập dữ liệu mọi lúc, mọi nơi trên mọi thiết bị.',
          'IoT biến mọi đồ vật xung quanh thành các thiết bị số thông minh có thể giao tiếp.',
          'Dữ liệu lớn sinh ra từ IoT được xử lý tập trung trên đám mây.'
        ]
      }
    ]
  },

  // Bài 9: An toàn trong không gian mạng
  9: {
    objectives: [
      {
        id: 'obj_10_9_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nhận diện các loại mã độc & mối đe dọa',
        description: 'Phân biệt được Virus, Sâu máy tính (Worm), Phần mềm gián điệp (Spyware) và các hình thức tấn công lừa đảo trực tuyến.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_10_9_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hiện các biện pháp an toàn số',
        description: 'Tạo mật khẩu mạnh, bật xác thực 2 lớp (2FA), quét virus định kỳ và nhận biết các dấu hiệu của đường link độc hại.',
        iconName: 'Lock'
      },
      {
        id: 'obj_10_9_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức tự giác & đạo đức không gian mạng',
        description: 'Tuân thủ các quy định về an toàn thông tin, không phát tán phần mềm độc hại và có trách nhiệm cảnh báo bảo vệ bạn bè.',
        iconName: 'CheckCircle'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_9_1',
        title: '1. Các nguy cơ trên không gian mạng (Mã độc, Phishing)',
        subtitle: 'Những cạm bẫy vô hình đe dọa dữ liệu và thiết bị số',
        iconName: 'AlertTriangle',
        keyPoints: [
          'Mã độc (Malware): Phần mềm được viết ra với mục đích xấu gây hại cho máy tính:',
          '  - Virus: Tự nhân bản và đính kèm vào các tệp tin khác, phá hủy dữ liệu khi tệp được chạy.',
          '  - Sâu máy tính (Worm): Tự động lây lan qua mạng Internet mà không cần người dùng can thiệp, làm tắc nghẽn mạng.',
          '  - Trojan: Đội lốt phần mềm hữu ích hoặc game miễn phí để đánh lừa người dùng cài đặt, sau đó mở cửa hậu (Backdoor) cho tin tặc.',
          '  - Spyware (Phần mềm gián điệp): Âm thầm theo dõi thao tác bàn phím (Keylogger) để đánh cắp mật khẩu và số thẻ ngân hàng.',
          'Lừa đảo trực tuyến (Phishing): Giả mạo tin nhắn ngân hàng, nhà trường dụ người dùng bấm vào link lạ để cướp tài khoản.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Loại mã độc', 'Đặc điểm lây nhiễm', 'Tác hại nguy hiểm'],
          rows: [
            ['Virus', 'Ký sinh vào tệp tin khác, cần người mở tệp', 'Xóa file, làm hỏng hệ điều hành'],
            ['Sâu (Worm)', 'Tự động lây lan qua mạng Internet', 'Nghẽn băng thông mạng toàn trường'],
            ['Trojan', 'Giả dạng phần mềm sạch/game', 'Mở cửa hậu cho tin tặc xâm nhập'],
            ['Spyware', 'Âm thầm chạy ngầm theo dõi', 'Đánh cắp mật khẩu Facebook, ngân hàng']
          ]
        },
        emCanNho: [
          'Malware gồm Virus, Worm, Trojan, Spyware và Ransomware.',
          'Phishing là thủ đoạn lừa đảo giả mạo đường link phổ biến nhất.',
          'Không bao giờ tải phần mềm không rõ nguồn gốc từ các trang web lậu.'
        ]
      },
      {
        id: 'tab_10_9_2',
        title: '2. Phòng chống mã độc và bảo vệ dữ liệu cá nhân',
        subtitle: 'Xây dựng lá chắn an toàn thông tin nhiều lớp',
        iconName: 'ShieldCheck',
        keyPoints: [
          'Nguyên tắc đặt mật khẩu mạnh: Dài tối thiểu 8-12 ký tự, gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt (@, #, $); không dùng ngày sinh hay số điện thoại.',
          'Xác thực hai yếu tố (2FA): Bật mã xác nhận gửi về điện thoại (OTP) hoặc ứng dụng Google Authenticator.',
          'Cài đặt phần mềm diệt virus chính hãng (Windows Defender, Bkav, Kaspersky) và cập nhật dữ liệu virus thường xuyên.',
          'Thói quen sao lưu dữ liệu (Backup): Định kỳ lưu các tệp quan trọng lên Google Drive hoặc USB cất tủ.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Mật khẩu mạnh + 2FA', desc: 'Bảo vệ cửa ngõ đăng nhập tài khoản' },
            { label: 'Phần mềm diệt virus', desc: 'Quét và diệt mã độc thời gian thực' },
            { label: 'Sao lưu định kỳ', desc: 'Bảo vệ tài liệu trước sự cố hỏng hóc' }
          ]
        },
        emCanNho: [
          'Mật khẩu mạnh kết hợp xác thực 2 bước 2FA là lá chắn tốt nhất.',
          'Bật phần mềm chống virus và cập nhật hệ điều hành định kỳ.',
          'Quy tắc 3 KHÔNG: Không click link lạ - Không mở file lạ - Không đưa mã OTP.'
        ]
      }
    ]
  },

  // Bài 10: Thực hành khai thác tài nguyên trên Internet
  10: {
    objectives: [
      {
        id: 'obj_10_10_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khai thác máy tìm kiếm & từ khóa nâng cao',
        description: 'Hiểu cơ chế hoạt động của máy tìm kiếm (Google) và các toán tử tìm kiếm đặc biệt (dấu ngoặc kép, site:, filetype:).',
        iconName: 'Search'
      },
      {
        id: 'obj_10_10_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tìm kiếm, dịch thuật & đánh giá học liệu',
        description: 'Tìm kiếm chính xác tài liệu học tập theo định dạng (filetype:pdf), sử dụng công cụ dịch thuật trực tuyến và kiểm chứng nguồn gốc thông tin.',
        iconName: 'Globe'
      },
      {
        id: 'obj_10_10_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng nguồn tài liệu học thuật',
        description: 'Hình thành thói quen trích dẫn nguồn tác giả khi sử dụng tài liệu tìm kiếm được trên Internet trong các bài thuyết trình.',
        iconName: 'BookOpen'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_10_1',
        title: '1. Tìm kiếm và đánh giá thông tin trên Internet',
        subtitle: 'Kỹ thuật tìm kiếm chính xác với các toán tử Google nâng cao',
        iconName: 'Search',
        keyPoints: [
          'Tìm kiếm cụm từ chính xác: Đặt từ khóa trong dấu ngoặc kép `" "` (Ví dụ: `"lịch sử Việt Nam thế kỷ 19"`).',
          'Tìm kiếm theo định dạng tệp: Dùng toán tử `filetype:` (Ví dụ: `de thi tin hoc 10 filetype:pdf` chỉ trả về tệp PDF).',
          'Tìm kiếm trên một trang web cụ thể: Dùng toán tử `site:` (Ví dụ: `tuyen sinh site:moet.gov.vn`).',
          'Loại trừ từ khóa không mong muốn: Dùng dấu trừ `-` trước từ cần bỏ (Ví dụ: `bao hoa -o to`).',
          'Đánh giá độ tin cậy: Ưu tiên các trang có tên miền chính thống (.gov.vn, .edu.vn), có thông tin tác giả và ngày xuất bản rõ ràng.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Toán tử tìm kiếm', 'Cú pháp mẫu', 'Kết quả tìm được'],
          rows: [
            ['Dấu ngoặc kép " "', '"quang hợp ở thực vật"', 'Chứa chính xác nguyên văn cụm từ này'],
            ['filetype:', 'tin học 10 filetype:pdf', 'Chỉ tải về các tài liệu định dạng PDF'],
            ['site:', 'học bổng site:hust.edu.vn', 'Chỉ tìm kiếm trong trang của ĐH Bách Khoa'],
            ['Dấu trừ -', 'lập trình python -video', 'Tìm bài viết, loại bỏ các kết quả video']
          ]
        },
        emCanNho: [
          'Sử dụng các toán tử `""`, `site:`, `filetype:` để thu hẹp kết quả tìm kiếm.',
          'Kiểm tra tính chính xác của thông tin bằng cách đối chiếu từ nhiều nguồn.',
          'Ưu tiên các nguồn tin chính thống của cơ quan giáo dục và nhà nước.'
        ]
      },
      {
        id: 'tab_10_10_2',
        title: '2. Khai thác tài nguyên học tập và công cụ dịch thuật',
        subtitle: 'Biến Internet thành người thầy khổng lồ hỗ trợ tự học',
        iconName: 'BookOpen',
        keyPoints: [
          'Kho học liệu mở trực tuyến: Bách khoa toàn thư mở Wikipedia, trang bài giảng số của Bộ GD&ĐT, các khóa học trực tuyến MOOCs (Coursera, edX).',
          'Công cụ dịch thuật trực tuyến (Google Dịch): Dịch văn bản, dịch cả trang web, dịch tài liệu tệp Word/PDF và dịch giọng nói trực tiếp.',
          'Lưu trữ và chia sẻ học liệu: Sử dụng Google Drive, tạo thư mục nhóm môn học để cùng bạn bè đóng góp đề cương ôn thi.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Kho học liệu mở', desc: 'Sách điện tử, bài giảng video, đề thi tham khảo' },
            { label: 'Công cụ dịch thông minh', desc: 'Dịch thuật đa ngôn ngữ hỗ trợ đọc tài liệu nước ngoài' },
            { label: 'Lưu trữ đám mây nhóm', desc: 'Cùng xây dựng thư viện tài liệu của lớp' }
          ]
        },
        emCanNho: [
          'Khai thác các kho học liệu mở phục vụ việc nâng cao kiến thức tự học.',
          'Google Dịch hỗ trợ dịch cả tệp tài liệu và trang web hoàn chỉnh.',
          'Luôn có ý thức chia sẻ tài liệu hữu ích cho cộng đồng học tập.'
        ]
      }
    ]
  },

  // Bài 11: Ứng dụng trên môi trường số. Nghĩa vụ tôn trọng bản quyền
  11: {
    objectives: [
      {
        id: 'obj_10_11_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm bản quyền & sở hữu trí tuệ số',
        description: 'Trình bày được các quy định pháp luật cơ bản về quyền tác giả đối với phần mềm, tác phẩm số và các loại giấy phép Creative Commons.',
        iconName: 'FileCheck'
      },
      {
        id: 'obj_10_11_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Sử dụng tài nguyên hợp pháp & trích dẫn',
        description: 'Tìm kiếm và sử dụng được các tài nguyên miễn phí bản quyền (hình ảnh, âm nhạc công cộng); biết cách trích dẫn nguồn đúng quy cách.',
        iconName: 'CheckSquare'
      },
      {
        id: 'obj_10_11_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đạo đức & văn hóa tôn trọng bản quyền',
        description: 'Nói KHÔNG với việc bẻ khóa phần mềm (Crack), không sao chép tác phẩm của người khác làm của mình và tôn trọng công sức sáng tạo.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_11_1',
        title: '1. Các ứng dụng trên môi trường số',
        subtitle: 'Sự bùng nổ của các nền tảng ứng dụng trực tuyến',
        iconName: 'Globe',
        keyPoints: [
          'Phần mềm chạy trên môi trường số: Ứng dụng Web (Web Apps) và ứng dụng di động (Mobile Apps) không cần cài đặt phức tạp, tự động đồng bộ.',
          'Các nhóm ứng dụng tiêu biểu: Mạng xã hội, Dịch vụ lưu trữ trực tuyến, Công cụ cộng tác thời gian thực (Google Docs, Canva), Họp trực tuyến (Zoom, Google Meet).',
          'Lợi ích: Cho phép nhiều người ở khoảng cách địa lý xa xôi cùng làm việc đồng thời trên một văn bản.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Giao tiếp & Kết nối', desc: 'Mạng xã hội, tin nhắn tức thời, hội nghị truyền hình' },
            { label: 'Cộng tác làm việc số', desc: 'Cùng soạn thảo văn bản, thiết kế đồ họa thời gian thực' },
            { label: 'Dịch vụ công cộng', desc: 'Thanh toán hóa đơn, tra cứu bảo hiểm, nộp hồ sơ' }
          ]
        },
        emCanNho: [
          'Ứng dụng môi trường số thúc đẩy làm việc cộng tác đa nền tảng.',
          'Dữ liệu được lưu trữ tập trung trên máy chủ đám mây an toàn.',
          'Cần cảnh giác bảo vệ tài khoản cá nhân khi sử dụng các ứng dụng mạng.'
        ]
      },
      {
        id: 'tab_10_11_2',
        title: '2. Bản quyền phần mềm và đạo đức trong môi trường số',
        subtitle: 'Tôn trọng quyền tác giả và các chuẩn mực đạo đức công nghệ',
        iconName: 'ShieldCheck',
        keyPoints: [
          'Quyền tác giả (Copyright): Pháp luật bảo vệ quyền của người sáng tạo ra phần mềm, bài viết, hình ảnh, video. Nghiêm cấm sao chép, phân phối hoặc bẻ khóa (Crack) trái phép.',
          'Các loại bản quyền phần mềm:',
          '  - Phần mềm thương mại (Commercial): Phải trả tiền mua giấy phép bản quyền (License) để sử dụng (Windows, Microsoft Office).',
          '  - Phần mềm nguồn mở (Open Source): Miễn phí, cho phép xem và sửa mã nguồn (Linux, Python, GIMP).',
          '  - Giấy phép Creative Commons (CC): Cho phép cộng đồng sử dụng tác phẩm phi thương mại kèm ghi nhận tên tác giả.',
          'Đạo đức số: Không chia sẻ thông tin độc hại, không bôi nhọ người khác trên mạng xã hội và luôn trích dẫn nguồn khi mượn tài liệu.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Loại hình phần mềm', 'Chi phí sử dụng', 'Mã nguồn', 'Ví dụ tiêu biểu'],
          rows: [
            ['Thương mại (Proprietary)', 'Có phí bản quyền', 'Đóng kín, bí mật', 'Microsoft Windows, Photoshop'],
            ['Nguồn mở (FOSS)', 'Miễn phí hoàn toàn', 'Công khai, tự do sửa', 'Hệ điều hành Linux, GIMP, Python'],
            ['Miễn phí dùng thử (Shareware)', 'Miễn phí một thời gian', 'Đóng kín', 'WinRAR, IDM dùng thử 30 ngày']
          ]
        },
        emCanNho: [
          'Bẻ khóa (Crack) phần mềm là hành vi vi phạm pháp luật sở hữu trí tuệ.',
          'Ưu tiên sử dụng phần mềm nguồn mở miễn phí hợp pháp (FOSS).',
          'Luôn trích dẫn tên tác giả và đường dẫn nguồn khi sử dụng tài liệu của người khác.'
        ]
      }
    ]
  },

  // Bài 12: Phần mềm thiết kế đồ hoạ
  12: {
    objectives: [
      {
        id: 'obj_10_12_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt đồ họa Raster và đồ họa Vector',
        description: 'Trình bày được sự khác biệt căn bản giữa đồ họa điểm ảnh (Raster/Bitmap) và đồ họa véc-tơ (Vector); giải thích tại sao ảnh vector không bị vỡ hạt khi phóng to.',
        iconName: 'Shapes'
      },
      {
        id: 'obj_10_12_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Làm quen giao diện & công cụ vẽ Inkscape',
        description: 'Nhận biết các khu vực làm việc của phần mềm Inkscape; sử dụng thành thạo các công cụ tạo hình học cơ bản: hình chữ nhật, hình elip, hình sao.',
        iconName: 'PenTool'
      },
      {
        id: 'obj_10_12_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy hình khối thẩm mỹ',
        description: 'Hình thành hứng thú với thiết kế đồ họa số, rèn luyện tính kiên nhẫn và khả năng quan sát hình khối trong tự nhiên.',
        iconName: 'Eye'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_12_1',
        title: '1. Đồ họa Raster và đồ họa Vector',
        subtitle: 'Hai trường phái biểu diễn hình ảnh kỹ thuật số',
        iconName: 'Layers',
        keyPoints: [
          'Đồ họa điểm ảnh (Raster / Bitmap): Bức ảnh được tạo thành từ lưới các điểm ảnh (Pixel) có màu sắc cụ thể. Nhược điểm: Khi phóng to ảnh sẽ bị vỡ hạt (Pixelated), răng cưa. Định dạng: JPG, PNG, GIF.',
          'Đồ họa véc-tơ (Vector): Hình ảnh được mô tả bằng các công thức toán học (điểm tọa độ, đoạn thẳng, đường cong, màu sắc). Ưu điểm vượt trội: Phóng to thu nhỏ tùy ý mà hình vẽ vẫn luôn mịn màng, sắc nét tuyệt đối. Định dạng: SVG, AI, EPS.',
          'Ứng dụng Vector: Thiết kế Logo, huy hiệu, biểu tượng, biển quảng cáo tấm lớn ngoài trời.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí so sánh', 'Đồ họa Raster (Điểm ảnh)', 'Đồ họa Vector (Hình học véc-tơ)'],
          rows: [
            ['Cấu tạo bức ảnh', 'Lưới các điểm ảnh Pixel cố định', 'Công thức toán học hình học'],
            ['Khi phóng to kích thước', 'Bị vỡ hình, mờ nhòe, lộ răng cưa', 'Luôn sắc nét tuyệt đối ở mọi kích thước'],
            ['Dung lượng tệp tin', 'Nặng dần khi độ phân giải cao', 'Rất nhẹ vì chỉ lưu công thức toán'],
            ['Ứng dụng tiêu biểu', 'Ảnh chụp máy ảnh chân dung, phong cảnh', 'Thiết kế Logo, Banner, Icon, Phông bạt']
          ]
        },
        emCanNho: [
          'Raster gồm các pixel, phóng to bị vỡ hạt (JPG, PNG).',
          'Vector dựa trên công thức toán học, phóng to không vỡ hạt (SVG).',
          'Inkscape là phần mềm thiết kế đồ họa vector nguồn mở chuyên nghiệp.'
        ]
      },
      {
        id: 'tab_10_12_2',
        title: '2. Giao diện phần mềm Inkscape và công cụ vẽ cơ bản',
        subtitle: 'Bố cục xưởng vẽ vector và các khối hình học nền tảng',
        iconName: 'PenTool',
        keyPoints: [
          'Giao diện Inkscape:',
          '  - Hộp công cụ (Toolbox bên trái): Chứa công cụ chọn (Select Tool - S), vẽ hình chữ nhật (R), elip (E), đa giác/ngôi sao (*).',
          '  - Bảng màu (Color Palette bên dưới): Bấm chọn để đổi màu đối tượng.',
          '  - Vùng vẽ (Canvas ở giữa): Trang giấy trắng để tạo tác phẩm.',
          'Các công cụ hình học cơ bản:',
          '  - Select and Transform (F1 / S): Chọn, di chuyển, co giãn và xoay đối tượng.',
          '  - Rectangle (R): Vẽ hình chữ nhật, hình vuông (giữ phím `Ctrl` khi vẽ để có hình vuông hoàn hảo).',
          '  - Circles, Ellipses (E): Vẽ hình elip, hình tròn (giữ `Ctrl` để vẽ hình tròn).',
          '  - Stars and Polygons (*): Vẽ ngôi sao nhiều cánh hoặc đa giác đều.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Select Tool (F1)', desc: 'Chọn, phóng to, thu nhỏ và xoay hình' },
            { label: 'Rectangle & Circle', desc: 'Vẽ hình học cơ bản, giữ Ctrl để có hình vuông/tròn' },
            { label: 'Bảng màu Palette', desc: 'Nhấp chuột trái chọn màu tô Fill tức thì' }
          ]
        },
        emCanNho: [
          'Giữ phím `Ctrl` khi vẽ để tạo hình vuông hoặc hình tròn chuẩn mực.',
          'Dùng Select Tool (phím S hoặc F1) để chọn và co giãn đối tượng.',
          'Tệp dự án vector Inkscape có phần mở rộng mặc định là `.svg`.'
        ]
      }
    ]
  },

  // Bài 13: Bổ sung các đối tượng đồ hoạ
  13: {
    objectives: [
      {
        id: 'obj_10_13_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Màu tô (Fill) và Màu viền (Stroke)',
        description: 'Hiểu khái niệm màu tô bên trong (Fill) và đường viền bao quanh (Stroke) của đối tượng đồ họa vector.',
        iconName: 'Palette'
      },
      {
        id: 'obj_10_13_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhóm đối tượng & sắp xếp thứ tự lớp',
        description: 'Thực hiện được thao tác nhóm các hình (Group - Ctrl+G), rã nhóm (Ungroup - Shift+Ctrl+G) và thay đổi thứ tự trên/dưới của các hình vẽ.',
        iconName: 'Layers'
      },
      {
        id: 'obj_10_13_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tính tỉ mỉ và hài hòa màu sắc',
        description: 'Rèn luyện khả năng phối màu hài hòa, có gu thẩm mỹ và tính kiên nhẫn khi sắp xếp các lớp hình phức tạp.',
        iconName: 'Eye'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_13_1',
        title: '1. Thiết lập màu tô (Fill) và màu viền (Stroke)',
        subtitle: 'Trang điểm cho hình khối bằng bảng điều khiển Fill and Stroke',
        iconName: 'Palette',
        keyPoints: [
          'Mở bảng điều khiển: Nhấn tổ hợp phím `Shift + Ctrl + F` hoặc vào menu `Object -> Fill and Stroke...`.',
          'Màu tô (Fill): Tô màu cho phần ruột bên trong hình học. Có thể chọn tô đơn sắc (Flat color), tô chuyển sắc (Linear/Radial Gradient) hoặc không tô (No paint - dấu X).',
          'Màu viền (Stroke paint): Tô màu cho đường nét bao quanh đối tượng (Giữ phím `Shift` + nhấp vào bảng màu dưới đáy để đổi màu viền nhanh).',
          'Độ dày viền (Stroke style): Điều chỉnh độ dày nét vẽ (Width) và kiểu nét (nét liền, nét đứt, bo góc).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thuộc tính', 'Thao tác chuột nhanh', 'Ý nghĩa thẩm mỹ'],
          rows: [
            ['Màu tô (Fill)', 'Nhấp chuột TRÁI vào bảng màu', 'Tô màu toàn bộ diện tích bên trong'],
            ['Màu viền (Stroke)', 'Giữ Shift + Nhấp chuột TRÁI', 'Đổi màu đường viền bao quanh hình'],
            ['Bỏ màu (None)', 'Nhấp vào ô dấu [X] màu đỏ', 'Làm cho phần ruột hoặc viền trong suốt']
          ]
        },
        emCanNho: [
          '`Fill` là màu ruột bên trong; `Stroke` là đường viền bao quanh.',
          'Mở bảng Fill and Stroke bằng phím tắt `Shift + Ctrl + F`.',
          'Giữ `Shift` khi nhấp màu để gán nhanh màu cho viền Stroke.'
        ]
      },
      {
        id: 'tab_10_13_2',
        title: '2. Thao tác nhóm (Group) và thứ tự lớp đối tượng',
        subtitle: 'Gắn kết các chi tiết và quản lý trật tự hiển thị trên dưới',
        iconName: 'Layers',
        keyPoints: [
          'Nhóm đối tượng (Group - `Ctrl + G`): Kết hợp nhiều hình vẽ riêng rẽ thành một khối thống nhất để di chuyển hoặc phóng to đồng thời mà không bị xô lệch vị trí.',
          'Rã nhóm (Ungroup - `Shift + Ctrl + G`): Tách khối trở lại thành các hình độc lập.',
          'Thứ tự lớp hiển thị (Z-Order):',
          '  - Đưa lên đỉnh trên cùng: Phím `Home` (Raise to Top).',
          '  - Nâng lên một lớp: Phím `Page Up`.',
          '  - Hạ xuống một lớp: Phím `Page Down`.',
          '  - Hạ xuống đáy dưới cùng: Phím `End` (Lower to Bottom).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Group (Ctrl + G)', desc: 'Gắn kết các hình thành một đối tượng duy nhất' },
            { label: 'Thứ tự hiển thị', desc: 'Hình tạo sau mặc định nằm đè lên hình tạo trước' },
            { label: 'Phím Home / End', desc: 'Đưa đối tượng lên đỉnh trên cùng hoặc xuống đáy' }
          ]
        },
        emCanNho: [
          'Nhóm các đối tượng bằng `Ctrl + G`; rã nhóm bằng `Shift + Ctrl + G`.',
          'Dùng phím `Home` đưa hình lên đỉnh, phím `End` đưa hình xuống đáy.',
          'Nhóm đối tượng giúp bố cục bản vẽ luôn gọn gàng và chuẩn xác.'
        ]
      }
    ]
  },

  // Bài 14: Làm việc với đối tượng đường và văn bản
  14: {
    objectives: [
      {
        id: 'obj_10_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Đường cong Bezier và điểm neo (Nodes)',
        description: 'Hiểu được cấu tạo của đường cong Bezier: gồm các điểm neo (Nodes) và tay nắm điều khiển (Handles) xác định độ uốn cong.',
        iconName: 'PenTool'
      },
      {
        id: 'obj_10_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Vẽ Bezier & uốn văn bản theo đường dẫn',
        description: 'Sử dụng thành thạo Pen Tool (B) để vẽ đường cong tự do, chỉnh nút bằng Node Tool (N) và đặt dòng chữ uốn cong theo đường dẫn (Put on Path).',
        iconName: 'Type'
      },
      {
        id: 'obj_10_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Sáng tạo kiểu chữ nghệ thuật',
        description: 'Khám phá sự uyển chuyển của đường cong và nghệ thuật sắp đặt chữ (Typography) trong thiết kế logo, ấn phẩm truyền thông.',
        iconName: 'Sparkles'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_14_1',
        title: '1. Công cụ vẽ đường cong Bezier',
        subtitle: 'Vũ khí tối thượng vẽ mọi đường cong mượt mà trong đồ họa vector',
        iconName: 'PenTool',
        keyPoints: [
          'Bút vẽ Bezier (Bezier Tool / Pen - Phím B): Dùng để vẽ các đoạn thẳng gấp khúc hoặc đường cong uốn lượn.',
          'Cách vẽ đường cong: Nhấp chuột tạo điểm neo rồi kéo giữ chuột để kéo dài tay nắm điều hướng (Handle) tạo độ cong mềm mại.',
          'Công cụ chỉnh sửa điểm neo (Node Tool - Phím N):',
          '  - Di chuyển các điểm neo (Nodes) để định hình lại hình dáng.',
          '  - Xoay hoặc kéo dài tay nắm (Handles) để tăng/giảm độ cong của cung tròn.',
          '  - Biến điểm neo góc nhọn thành điểm neo cong trơn mượt mà.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Điểm neo (Node)', desc: 'Cố định vị trí của đường cong' },
            { label: 'Tay nắm (Handle)', desc: 'Kéo dài để tăng độ cong, xoay để đổi hướng cong' },
            { label: 'Node Tool (N)', desc: 'Thêm, xóa và tinh chỉnh độ trơn mượt của nét vẽ' }
          ]
        },
        emCanNho: [
          'Dùng Bezier Tool (phím B) để vẽ đường cong tự do.',
          'Dùng Node Tool (phím N) để tinh chỉnh các điểm neo và tay nắm.',
          'Đóng kín đường cong để có thể tô màu Fill bên trong.'
        ]
      },
      {
        id: 'tab_10_14_2',
        title: '2. Chèn và uốn văn bản theo đường cong',
        subtitle: 'Tạo kiểu chữ nghệ thuật uốn lượn theo hình khối',
        iconName: 'Type',
        keyPoints: [
          'Chèn văn bản (Text Tool - Phím T): Nhấp chuột lên trang vẽ để gõ chữ, chọn font hỗ trợ Unicode, cỡ chữ và màu sắc.',
          'Uốn chữ theo đường cong (Put on Path):',
          '  - Bước 1: Vẽ một đường cong (hoặc hình tròn) làm đường dẫn hướng.',
          '  - Bước 2: Gõ dòng chữ cần uốn cong.',
          '  - Bước 3: Dùng Select Tool chọn CẢ dòng chữ VÀ đường cong đó.',
          '  - Bước 4: Vào menu `Text -> Put on Path` -> Dòng chữ sẽ tự động uốn lượn uốn cong mềm mại bám theo hình dáng của đường dẫn.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thao tác chữ nghệ thuật', 'Menu lệnh thực hiện', 'Kết quả thị giác'],
          rows: [
            ['Uốn chữ theo hình', 'Text -> Put on Path', 'Dòng chữ uốn lượn theo vòng tròn hoặc sóng lượn'],
            ['Bỏ uốn chữ', 'Text -> Remove from Path', 'Dòng chữ trở lại thành hàng ngang bình thường'],
            ['Biến chữ thành hình véc-tơ', 'Path -> Object to Path', 'Chữ biến thành đường nét có thể bẻ cong từng nét']
          ]
        },
        emCanNho: [
          'Chọn đồng thời khối văn bản và đường cong trước khi lệnh `Text -> Put on Path`.',
          'Nếu muốn ẩn đường dẫn phụ trợ, chọn đường dẫn và đặt `Stroke: No paint`.',
          'Chữ uốn cong thường xuất hiện trên các con dấu tròn và logo thương hiệu.'
        ]
      }
    ]
  },

  // Bài 15: Hoàn thiện hình ảnh đồ hoạ
  15: {
    objectives: [
      {
        id: 'obj_10_15_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình thiết kế biểu trưng (Logo)',
        description: 'Hiểu được các nguyên tắc thiết kế logo: tính cô đọng, dễ nhớ, mang biểu tượng thông điệp và chuẩn màu sắc nhận diện.',
        iconName: 'Award'
      },
      {
        id: 'obj_10_15_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Vận dụng phép toán hình học & xuất ảnh',
        description: 'Sử dụng thành thạo các phép toán Boole trên đường dẫn (Union, Difference, Intersection) để tạo hình phức tạp và xuất tệp ảnh PNG/SVG đạt chuẩn.',
        iconName: 'Download'
      },
      {
        id: 'obj_10_15_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tự hào về sản phẩm sáng tạo cá nhân',
        description: 'Tự tin hoàn thành một tác phẩm đồ họa hoàn chỉnh mang dấu ấn cá nhân hoặc lớp học, có ý thức tôn trọng bản quyền thiết kế.',
        iconName: 'Heart'
      }
    ],
    knowledge: [
      {
        id: 'tab_10_15_1',
        title: '1. Các phép toán đường dẫn (Boolean Path Operations)',
        subtitle: 'Hợp nhất, cắt gọt và giao nhau để tạo nên biểu trưng độc đáo',
        iconName: 'Shapes',
        keyPoints: [
          'Các phép toán trong menu `Path`:',
          '  - `Union` (Hợp - `Ctrl + +`): Gộp 2 hình giao nhau thành một hình thống nhất duy nhất.',
          '  - `Difference` (Hiệu / Cắt - `Ctrl + -`): Lấy hình nằm trên cắt khoét bỏ một phần của hình nằm dưới (Ví dụ: Vẽ vầng trăng khuyết bằng cách lấy hình tròn này cắt hình tròn kia).',
          '  - `Intersection` (Giao - `Ctrl + *`): Chỉ giữ lại phần chung nhau giữa 2 hình.',
          '  - `Exclusion` (Loại trừ - `Ctrl + ^`): Giữ lại phần riêng, khoét rỗng phần chung nhau.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Phép toán Path', 'Phím tắt', 'Kết quả tạo hình'],
          rows: [
            ['Union (Hợp)', 'Ctrl + +', 'Gộp nhiều hình dính liền thành 1 khối duy nhất'],
            ['Difference (Cắt)', 'Ctrl + -', 'Hình trên đục lỗ khoét hình dưới (Tạo trăng khuyết)'],
            ['Intersection (Giao)', 'Ctrl + *', 'Chỉ giữ lại phần giao thoa chung giữa 2 hình']
          ]
        },
        emCanNho: [
          'Dùng `Path -> Difference` để khoét lỗ hoặc tạo hình trăng khuyết nhanh chóng.',
          'Dùng `Path -> Union` để hàn gắn các khối hình học thành một thể thống nhất.',
          'Các phép toán Path là nền tảng để tạo nên những logo chuyên nghiệp.'
        ]
      },
      {
        id: 'tab_10_15_2',
        title: '2. Thiết kế logo hoàn chỉnh và xuất sản phẩm (PNG, SVG)',
        subtitle: 'Đóng gói sản phẩm xuất xưởng phục vụ in ấn và truyền thông',
        iconName: 'Download',
        keyPoints: [
          'Các bước thiết kế logo: Phác thảo ý tưởng -> Tạo các hình khối cơ bản -> Dùng phép toán Path cắt gọt -> Tô màu nhận diện -> Chèn chữ uốn cong tên thương hiệu -> Nhóm lại (Ctrl + G).',
          'Lưu tệp dự án: `File -> Save As...` lưu thành tệp `.svg` để mở ra chỉnh sửa vector bất kỳ lúc nào.',
          'Xuất ảnh thành phẩm: `File -> Export PNG Image...` (`Shift + Ctrl + E`):',
          '  - Chọn vùng xuất: `Page` (toàn trang) hoặc `Selection` (chỉ xuất riêng hình logo đang chọn).',
          '  - Cài đặt độ phân giải DPI: Đặt 300 DPI nếu để in ấn trên áo, mũ; đặt 96 DPI nếu để đăng web.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thiết kế & Tô màu', desc: 'Hoàn thiện bố cục logo và phối màu nhận diện' },
            { label: 'Lưu dự án SVG', desc: 'Bảo tồn mã nguồn vector để co giãn không vỡ' },
            { label: 'Xuất ảnh PNG trong suốt', desc: 'File ảnh tách nền sẵn sàng in áo đồng phục lớp' }
          ]
        },
        emCanNho: [
          'Lưu bản gốc bằng tệp `.svg` để không bao giờ bị mất dữ liệu vector.',
          'Xuất ảnh `.png` tách nền bằng lệnh `Export PNG Image` (Shift + Ctrl + E).',
          'Đặt 300 DPI để bản in trên áo đồng phục hoặc poster đạt độ nét cao nhất.'
        ]
      }
    ]
  }
};
