import { Lesson } from '../../types/lesson';

export const THEME3_LESSONS_11: Lesson[] = [
  // Bài 9: Giao tiếp an toàn trên Internet
  {
    id: 9,
    code: 'TIN11_B09',
    title: 'Giao tiếp an toàn trên Internet',
    themeId: 3,
    themeName: 'Chủ đề 3: Đạo đức, pháp luật và văn hoá trong môi trường số',
    topicBadge: 'An toàn mạng',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Xây dựng lá chắn số: Nhận diện thủ đoạn lừa đảo và bảo vệ bản thân',
      description: 'Tìm hiểu các hình thức tấn công lừa đảo qua mạng (Phishing, mạo danh cơ quan chức năng), các mối nguy hiểm từ mã độc tống tiền (Ransomware), kỹ nghệ xã hội (Social Engineering) và quy tắc bảo vệ dữ liệu cá nhân.',
      accentColor: 'from-emerald-500 to-teal-600',
      keyHighlights: ['Nhận diện tấn công Phishing', 'Phòng chống mã độc Ransomware', 'Bảo vệ dữ liệu cá nhân']
    },
    objectives: [
      {
        id: 'obj_11_9_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nhận diện các hình thức lừa đảo số',
        description: 'Trình bày được các dấu hiệu nhận biết tin nhắn giả mạo ngân hàng, đường link độc hại và thủ đoạn đánh cắp tài khoản.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_11_9_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng phòng vệ và xử lý sự cố',
        description: 'Biết cách kiểm tra tính xác thực của đường link (URL), không cung cấp mã OTP và biết các bước xử lý khi nghi ngờ bị lộ thông tin.',
        iconName: 'Lock'
      },
      {
        id: 'obj_11_9_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cảnh giác và trách nhiệm xã hội',
        description: 'Hình thành thái độ tỉnh táo trước các thông tin kích động, không chia sẻ tin giả và nhắc nhở người thân phòng ngừa lừa đảo.',
        iconName: 'UserCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Tin nhắn trúng thưởng xe máy SH',
      scenario: 'Bạn nhận được tin nhắn SMS từ số lạ: "Chúc mừng bạn đã trúng thưởng xe máy Honda SH trị giá 80 triệu đồng. Vui lòng bấm vào liên kết vn-traothuong2026.xyz và nhập số CCCD cùng mã OTP để nhận giải".',
      pollQuestion: 'Hành động đúng đắn và an toàn nhất bạn cần làm lúc này là gì?',
      pollOptions: [
        { id: 'p11_9_1', text: 'Tuyệt đối KHÔNG bấm vào link, KHÔNG cung cấp mã OTP và báo cáo tin nhắn rác', votesPercent: 96, isPopular: true, insight: 'Chính xác! Đây là chiêu trò lừa đảo mạo danh (Phishing) phổ biến nhằm chiếm đoạt tài khoản ngân hàng và thông tin cá nhân.' },
        { id: 'p11_9_2', text: 'Bấm vào link ngay để nhận quà kẻo hết hạn', votesPercent: 2, insight: 'Bấm vào link độc hại sẽ khiến thiết bị của bạn bị cài mã độc hoặc mất quyền kiểm soát tài khoản.' },
        { id: 'p11_9_3', text: 'Gửi mã OTP cho bạn bè nhờ nhận hộ', votesPercent: 2, insight: 'Mã OTP là mật khẩu dùng một lần bí mật tối cao, cung cấp OTP đồng nghĩa với việc giao toàn bộ tiền cho kẻ gian.' }
      ],
      reflection: 'Nguyên tắc vàng trên Internet: Không có món quà miễn phí nào từ trên trời rơi xuống, và không bao giờ chia sẻ mã OTP cho bất kỳ ai.'
    },
    knowledge: [
      {
        id: 'tab_11_9_1',
        title: '1. Các Thủ Đoạn Tấn Công Phổ Biến & Quy Tắc Phòng Vệ',
        subtitle: 'Cảnh giác trước Phishing, Ransomware và Social Engineering',
        iconName: 'Shield',
        keyPoints: [
          'Tấn công giả mạo (Phishing): Kẻ lừa đảo gửi email hoặc tin nhắn mạo danh ngân hàng, cơ quan công an, trường học dẫn dụ nạn nhân vào trang web giả mạo để chiếm đoạt tên đăng nhập, mật khẩu và mã OTP.',
          'Kỹ nghệ xã hội (Social Engineering): Thủ đoạn thao túng tâm lý (đánh vào lòng tham, sự sợ hãi hoặc lòng trắc ẩn) để ép nạn nhân tự nguyện cung cấp thông tin bí mật.',
          'Mã độc tống tiền (Ransomware): Loại mã độc mã hóa toàn bộ dữ liệu trên máy tính nạn nhân và đòi tiền chuộc để giải mã.',
          'Quy tắc 3 KHÔNG: KHÔNG bấm vào link lạ; KHÔNG cung cấp mật khẩu/mã OTP; KHÔNG chuyển tiền theo yêu cầu của người lạ qua mạng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Quy tắc 1: Kiểm tra URL', desc: 'Nhìn kỹ tên miền chính (VD: vietcombank.com.vn vs vcb-online.xyz)' },
            { label: 'Quy tắc 2: Bảo mật OTP', desc: 'Mã OTP chỉ dùng khi bạn chủ động thực hiện giao dịch' },
            { label: 'Quy tắc 3: Xác minh nguồn tin', desc: 'Gọi điện trực tiếp cho người thân khi nhận tin nhắn vay tiền gấp' }
          ]
        },
        emCanNho: [
          'Mã OTP là chìa khóa bảo mật cá nhân, ngân hàng và cơ quan công an KHÔNG BAO GIỜ yêu cầu bạn cung cấp OTP.',
          'Cảnh giác với các đường link lạ có tên miền đuôi lạ (.xyz, .top, .cc).',
          'Luôn xác minh lại bằng cuộc gọi thoại khi có người thân nhắn tin nhờ chuyển tiền gấp.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Hành vi An toàn và Nguy hiểm trên Mạng',
      instruction: 'Kéo thả các tình huống vào đúng nhóm An toàn hoặc Nguy cơ cao:',
      categories: [
        { id: 'safe', title: 'Hành vi An toàn số', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
        { id: 'danger', title: 'Hành vi Nguy hiểm (Nguy cơ bị hack/lừa)', color: 'border-rose-500 bg-rose-950/40 text-rose-300' }
      ],
      dragItems: [
        { id: 'g1', text: 'Bật xác thực sinh trắc học (vân tay/khuôn mặt) trên ứng dụng ngân hàng', category: 'safe', explanation: 'Tăng cường bảo mật đa lớp an toàn tối đa.' },
        { id: 'g2', text: 'Bấm vào link nhận học bổng từ tin nhắn của một tài khoản Facebook lạ', category: 'danger', explanation: 'Đường link lạ có thể dẫn đến trang lừa đảo Phishing đánh cắp tài khoản.' },
        { id: 'g3', text: 'Gọi điện thoại thoại video xác nhận trước khi chuyển tiền cho bạn bè', category: 'safe', explanation: 'Xác minh người thật, tránh trường hợp tài khoản bạn bè bị hack mạo danh.' },
        { id: 'g4', text: 'Cung cấp mã OTP nhận được qua SMS cho người tự xưng là cán bộ công an', category: 'danger', explanation: 'Cơ quan chức năng không bao giờ yêu cầu công dân đọc mã OTP qua điện thoại.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thuật ngữ "Phishing" trong an toàn thông tin dùng để chỉ hình thức tấn công nào?',
        options: [
          'Hình thức lừa đảo giả mạo các tổ chức uy tín để dụ người dùng cung cấp mật khẩu, mã OTP và thông tin thẻ tín dụng',
          'Phần mềm giúp tăng tốc độ mạng Internet',
          'Trò chơi câu cá giải trí trên điện thoại',
          'Kỹ thuật vẽ hình bằng máy tính'
        ],
        correctIndex: 0,
        explanation: 'Phishing (giả mạo) là phương thức lừa đảo số phổ biến nhất hiện nay nhằm đánh cắp thông tin đăng nhập.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Ngân hàng hoặc các cơ quan công an Việt Nam có bao giờ gọi điện hoặc nhắn tin yêu cầu người dân cung cấp mã OTP không?',
        options: [
          'TUYỆT ĐỐI KHÔNG BAO GIỜ, bất kỳ ai hỏi mã OTP của bạn chắc chắn là kẻ lừa đảo',
          'Có, khi cán bộ muốn kiểm tra tài khoản giúp bạn',
          'Có, nếu cuộc gọi vào ban đêm',
          'Chỉ yêu cầu khi bạn trúng thưởng'
        ],
        correctIndex: 0,
        explanation: 'Mã OTP chỉ thuộc quyền sở hữu của riêng bạn, không có bất kỳ tổ chức hợp pháp nào có quyền đòi hỏi bạn đọc mã này.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi nhận được tin nhắn Messenger từ một người bạn thân với nội dung: "Tớ đang có việc gấp, bạn chuyển khoản cho tớ vay 2 triệu vào số tài khoản này với", bạn nên làm gì đầu tiên?',
        options: [
          'Gọi điện thoại thoại trực tiếp cho bạn (bằng số điện thoại thông thường) để xác nhận có đúng bạn mình đang vay tiền không',
          'Chuyển tiền ngay lập tức vì là bạn thân',
          'Mắng bạn một trận thậm tệ',
          'Gửi thêm mật khẩu tài khoản ngân hàng của mình cho bạn'
        ],
        correctIndex: 0,
        explanation: 'Rất nhiều trường hợp tài khoản mạng xã hội bị tin tặc chiếm quyền điều khiển và nhắn tin lừa đảo hàng loạt bạn bè.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Mã độc tống tiền (Ransomware) gây hại cho máy tính nạn nhân bằng cách nào?',
        options: [
          'Mã hóa toàn bộ các tệp tài liệu quan trọng trên máy và đòi tiền chuộc để cung cấp khóa giải mã',
          'Tự động tăng âm lượng loa máy tính lên mức to nhất',
          'Làm bàn phím máy tính đổi sang màu hồng',
          'Tự động giải bài tập về nhà'
        ],
        correctIndex: 0,
        explanation: 'Ransomware làm tê liệt dữ liệu của người dùng hoặc doanh nghiệp để tống tiền chuộc bằng tiền mã hóa.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Để phòng tránh rủi ro mất mát dữ liệu do mã độc Ransomware gây ra, biện pháp dự phòng quan trọng nhất là gì?',
        options: [
          'Thực hiện sao lưu (Backup) dữ liệu định kỳ ra ổ cứng di động hoặc dịch vụ đám mây an toàn',
          'Không bao giờ tắt máy tính',
          'Cài đặt 10 phần mềm diệt virus cùng lúc',
          'Tắt kết nối Wi-Fi vĩnh viễn'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu dữ liệu định kỳ giúp bạn dễ dàng khôi phục lại hệ thống mà không phải trả tiền chuộc cho tin tặc.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Dự án: Cẩm nang Nhận diện Lừa đảo Số cho Gia đình',
        context: 'Nhiều người lớn tuổi trong gia đình chưa có nhiều kỹ năng công nghệ và dễ trở thành nạn nhân của các cuộc gọi lừa đảo.',
        mission: 'Thiết kế một tờ rơi hoặc bản ghi chú hướng dẫn các quy tắc an toàn số dán tại góc học tập/phòng khách gia đình.',
        steps: [
          'Bước 1: Liệt kê 3 chiêu trò lừa đảo phổ biến nhất hiện nay (Cuộc gọi mạo danh công an, Tin nhắn trúng thưởng, Giả danh con cái cấp cứu).',
          'Bước 2: Ghi rõ quy tắc "Không click link lạ - Không đọc mã OTP - Gọi điện thoại kiểm chứng".',
          'Bước 3: Ghi số điện thoại đường dây nóng an ninh mạng của cơ quan công an để liên hệ khi cần thiết.'
        ],
        outputRequirement: 'Một bản ghi chú hoặc infographic nhỏ tuyên truyền an toàn số cho người thân.',
        practicalTip: 'Giải thích bằng ngôn từ mộc mạc, dễ hiểu để ông bà, cha mẹ dễ ghi nhớ và áp dụng khi gặp tình huống thực tế.'
      },
      mindmap: {
        id: 'mm_11_9',
        label: 'GIAO TIẾP AN TOÀN TRÊN MẠNG',
        color: '#059669',
        children: [
          {
            id: 'mm_11_9_1',
            label: 'Mối đe dọa phổ biến',
            children: [
              { id: 'mm_11_9_1_1', label: 'Tấn công Phishing (Giả mạo)' },
              { id: 'mm_11_9_1_2', label: 'Mã độc tống tiền Ransomware' },
              { id: 'mm_11_9_1_3', label: 'Lừa đảo mạo danh người thân' }
            ]
          },
          {
            id: 'mm_11_9_2',
            label: 'Quy tắc vàng bảo vệ',
            children: [
              { id: 'mm_11_9_2_1', label: 'Bảo mật tuyệt đối mã OTP' },
              { id: 'mm_11_9_2_2', label: 'Xác thực 2 yếu tố (2FA)' },
              { id: 'mm_11_9_2_3', label: 'Kiểm chứng URL và nguồn tin' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ An Ninh Mạng 11',
      badgeIcon: 'ShieldAlert',
      roleTitle: 'Chuyên Viên Phòng Vệ Không Gian Mạng',
      congratsMessage: 'Tuyệt vời! Bạn đã trang bị lá chắn số vững chắc để bảo vệ bản thân và người thân trên môi trường Internet.',
      skillsUnlocked: ['Nhận diện bẫy Phishing', 'Bảo vệ mã OTP', 'Quy tắc 3 Không phòng vệ số']
    }
  }
];
