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
        title: 'Nhận diện thủ đoạn lừa đảo & mã độc',
        description: 'Trình bày được dấu hiệu nhận biết các hình thức tấn công giả mạo (Phishing), kỹ nghệ thao túng tâm lý (Social Engineering) và cơ chế phá hoại của mã độc tống tiền (Ransomware).',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_11_9_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng phòng vệ & bảo vệ mã OTP',
        description: 'Thực hiện được việc kiểm tra độ tin cậy của đường link URL, bảo mật tuyệt đối mã OTP cá nhân và biết các bước ứng phó khi nghi ngờ tài khoản bị xâm nhập.',
        iconName: 'Lock'
      },
      {
        id: 'obj_11_9_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Cảnh giác & lan tỏa văn hóa an toàn số',
        description: 'Có thái độ tỉnh táo trước các bẫy tâm lý kích động lòng tham/sợ hãi, không phát tán tin giả và có trách nhiệm cảnh báo bảo vệ gia đình, bạn bè.',
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
        title: '1. Nhận diện các hình thức tấn công lừa đảo (Phishing, mạo danh)',
        subtitle: 'Các bẫy tâm lý và kỹ nghệ xã hội Social Engineering',
        iconName: 'ShieldAlert',
        keyPoints: [
          'Tấn công giả mạo (Phishing): Kẻ lừa đảo gửi email, tin nhắn mạo danh ngân hàng, cơ quan công an, tòa án, nhà trường hoặc thương hiệu uy tín. Chúng tạo các website có giao diện giống hệt trang thật nhưng có tên miền sai lệch (ví dụ: `vietcombank-online.xyz` thay vì `vietcombank.com.vn`) nhằm lừa người dùng nhập tên đăng nhập và mật khẩu.',
          'Kỹ nghệ xã hội (Social Engineering): Thủ đoạn thao túng tâm lý nạn nhân dựa trên: (1) Đánh vào lòng tham (trúng thưởng lớn, quà tặng 0 đồng), (2) Đánh vào nỗi sợ hãi (đe dọa bị khóa tài khoản ngân hàng, liên quan đến vụ án ma túy), (3) Đánh vào tình cảm (hack Facebook người thân nhắn tin mượn tiền gấp).',
          'Cách nhận diện đường link lừa đảo: Tên miền chứa ký tự lạ, cố tình sai chính tả (như `faceb00k.com`, `g00gle.com`), hoặc dùng các đuôi tên miền rẻ tiền miễn phí (.xyz, .top, .cc, .info).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Dấu hiệu', 'Trang web / Tin nhắn chính thống', 'Trang web / Tin nhắn lừa đảo Phishing'],
          rows: [
            ['Tên miền (Domain)', 'Đúng thương hiệu, đuôi chuẩn (.vn, .com)', 'Sai chính tả, thêm từ lạ (vcb-nhantien.xyz)'],
            ['Giao thức bảo mật', 'Có ổ khóa xanh HTTPS hợp lệ', 'Cảnh báo bảo mật Certificate không hợp lệ'],
            ['Nội dung thông điệp', 'Trang trọng, không ép buộc thời gian', 'Tạo tâm lý hoảng loạn, hối thúc trong 15 phút'],
            ['Yêu cầu cung cấp', 'Không bao giờ hỏi mật khẩu/OTP', 'Đòi nhập toàn bộ số thẻ, mật khẩu và mã OTP']
          ]
        },
        emCanNho: [
          'Phishing là hình thức lừa đảo mạo danh tổ chức uy tín để đánh cắp tài khoản.',
          'Luôn soi kỹ từng chữ cái trên thanh địa chỉ URL của trình duyệt trước khi đăng nhập.',
          'Cơ quan công an và ngân hàng không bao giờ làm việc qua tin nhắn mạng xã hội hay yêu cầu chuyển tiền.'
        ]
      },
      {
        id: 'tab_11_9_2',
        title: '2. Phòng chống mã độc tống tiền (Ransomware) và bảo vệ OTP',
        subtitle: 'Bảo vệ tài sản số và dữ liệu cá nhân then chốt',
        iconName: 'Lock',
        keyPoints: [
          'Mã độc tống tiền (Ransomware): Mã độc tự động mã hóa toàn bộ dữ liệu (ảnh, tài liệu Word, Excel) trên máy tính nạn nhân bằng các thuật toán quân sự mạnh. Sau đó chúng hiện thông báo đòi tiền chuộc bằng tiền điện tử (Bitcoin) để cung cấp chìa khóa giải mã.',
          'Bảo vệ mã OTP (One-Time Password): Mã xác thực dùng một lần là chốt chặn cuối cùng bảo vệ tài sản ngân hàng. Kẻ gian chỉ cần lấy được mã OTP là tiền trong tài khoản sẽ bị chuyển sạch trong tích tắc. Không chia sẻ mã OTP cho bất kỳ ai, kể cả người tự xưng là nhân viên ngân hàng.',
          'Quy tắc 3 KHÔNG phòng vệ an toàn:',
          '  - KHÔNG bấm vào đường link lạ trong tin nhắn hoặc email không rõ nguồn gốc.',
          '  - KHÔNG tải và mở các tệp đính kèm lạ (.exe, .scr, .zip) từ người lạ.',
          '  - KHÔNG chia sẻ mã xác thực OTP hay mật khẩu cá nhân cho bất kỳ ai dưới bất kỳ hình thức nào.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Nguyên tắc 1: Cảnh giác với link lạ', desc: 'Không nhấp vào link nhận quà, link vay vốn nhanh' },
            { label: 'Nguyên tắc 2: Giữ bí mật mã OTP', desc: 'Mã OTP là của riêng bạn, chia sẻ OTP = Mất tiền' },
            { label: 'Nguyên tắc 3: Sao lưu ngoại tuyến (Offline Backup)', desc: 'Lưu trữ bản sao dữ liệu quan trọng trên ổ cứng rời cất tủ' }
          ]
        },
        emCanNho: [
          'Mã độc Ransomware mã hóa dữ liệu đòi tiền chuộc; phòng bệnh bằng cách sao lưu dữ liệu thường xuyên.',
          'Mã OTP là chìa khóa bí mật tối cao, tuyệt đối không cung cấp cho bất kỳ ai.',
          'Thực hiện nghiêm quy tắc 3 KHÔNG khi tham gia không gian mạng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thủ Đoạn Lừa Đảo và Biện Pháp Ứng Phó',
      instruction: 'Nối chiêu trò lừa đảo với hành động xử lý đúng đắn:',
      matchingPairs: [
        { id: 'sc1', left: 'Nhận tin nhắn Facebook bạn thân mượn tiền gấp', right: 'Gọi điện thoại thoại trực tiếp kiểm tra giọng nói trước khi chuyển' },
        { id: 'sc2', left: 'Tin nhắn mạo danh công an dọa bắt vì liên quan án ma túy', right: 'Bình tĩnh dập máy ngay lập tức vì công an chỉ gửi giấy triệu tập trực tiếp' },
        { id: 'sc3', left: 'Người tự xưng nhân viên ngân hàng xin mã OTP để hủy giao dịch', right: 'Tuyệt đối từ chối và cúp máy vì ngân hàng không bao giờ hỏi OTP' },
        { id: 'sc4', left: 'Email thông báo nhận quà khuyến mãi kèm file nén lạ', right: 'Xóa email ngay lập tức, không giải nén tệp đính kèm' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Khi nhận được một tin nhắn thông báo bạn trúng thưởng ô tô và yêu cầu nhập mã OTP gửi về điện thoại vào một trang web lạ, bạn nên làm gì?',
        options: [
          'Tuyệt đối không nhập mã OTP, xóa tin nhắn và báo cáo số điện thoại lừa đảo',
          'Nhập mã OTP ngay để kịp nhận thưởng',
          'Gửi mã OTP cho bạn cùng lớp cùng xem',
          'Đăng mã OTP lên trang cá nhân Facebook'
        ],
        correctIndex: 0,
        explanation: 'Mã OTP chỉ dùng để xác nhận giao dịch bạn chủ động thực hiện; nhập vào web lạ sẽ bị mất tiền tài khoản.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Mục đích chính của loại mã độc tống tiền (Ransomware) khi lây nhiễm vào máy tính nạn nhân là gì?',
        options: [
          'Mã hóa toàn bộ tệp dữ liệu trên máy tính và đòi nạn nhân trả tiền chuộc để lấy lại chìa khóa giải mã',
          'Làm hỏng chuột máy tính',
          'Tự động tăng dung lượng RAM máy tính',
          'Cài đặt hộ phần mềm học tập'
        ],
        correctIndex: 0,
        explanation: 'Ransomware giữ các tệp tin của người dùng làm con tin bằng cách mã hóa chúng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Thủ đoạn "Kỹ nghệ xã hội" (Social Engineering) của tin tặc thường lợi dụng yếu tố nào của con người để lừa đảo?',
        options: [
          'Lợi dụng tâm lý sợ hãi, lòng tham hoặc sự thiếu hiểu biết của nạn nhân',
          'Lợi dụng tốc độ chạy của máy tính',
          'Lợi dụng thời tiết mưa bão',
          'Lợi dụng thương hiệu của màn hình máy tính'
        ],
        correctIndex: 0,
        explanation: 'Kỹ nghệ xã hội đánh vào tâm lý con người thay vì bẻ khóa kỹ thuật.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Dấu hiệu nào sau đây cho thấy một đường link URL nhiều khả năng là trang web lừa đảo giả mạo (Phishing)?',
        options: [
          'Tên miền bị sai chính tả hoặc chèn thêm các từ lạ như vcb-online-nhanthuong.xyz',
          'Đường link có đuôi tên miền .gov.vn của chính phủ',
          'Trang web có chứng chỉ bảo mật của trường đại học',
          'Trang web hiển thị bài viết của báo Tuổi Trẻ'
        ],
        correctIndex: 0,
        explanation: 'Kẻ xấu thường mua các tên miền rẻ tiền gần giống tên miền thật để đánh lừa người dùng mất cảnh giác.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Biện pháp hiệu quả nhất để không bao giờ bị mất sạch tài liệu học tập khi máy tính không may bị dính mã độc Ransomware là gì?',
        options: [
          'Thường xuyên sao lưu dữ liệu sang ổ cứng di động rời (sau khi sao lưu xong rút cất tủ) hoặc lưu trên đám mây',
          'Tắt màn hình máy tính khi đi ngủ',
          'Dán băng dính che camera laptop',
          'Không bao giờ bật máy tính'
        ],
        correctIndex: 0,
        explanation: 'Bản sao lưu ngoại tuyến (Offline Backup) không thể bị mã độc trên máy tính tấn công tới.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Cẩm Nang Học Đường: "Cẩm Nang Phòng Chống Lừa Đảo Không Gian Mạng"',
        context: 'Nhiều học sinh và phụ huynh trong trường trở thành nạn nhân của các chiêu trò lừa đảo mạo danh.',
        mission: 'Thiết kế một infographic hoặc tờ rơi tóm tắt quy tắc an toàn số cho học sinh toàn trường.',
        steps: [
          'Mục 1: Nhận diện 3 chiêu trò phổ biến nhất (Mạo danh công an, hack Facebook vay tiền, trúng thưởng giả).',
          'Mục 2: Bật mí bí quyết soi tên miền URL giả mạo.',
          'Mục 3: Cảnh báo đỏ về bảo vệ mã bí mật OTP.',
          'Mục 4: Danh bạ khẩn cấp: Đường dây nóng của Cục An toàn thông tin và Công an địa phương.'
        ],
        outputRequirement: 'Ấn phẩm cẩm nang số rõ ràng, ngắn gọn, dễ hiểu để phổ biến trên bảng tin chi đoàn.',
        practicalTip: 'Khắc ghi khẩu hiệu: "Chậm lại 30 giây - Xác minh qua điện thoại - Nói KHÔNG với mã OTP lạ".'
      },
      mindmap: {
        id: 'mm_11_9',
        label: 'GIAO TIẾP AN TOÀN SỐ',
        color: '#10b981',
        children: [
          {
            id: 'mm_11_9_1',
            label: 'Nhận diện mối nguy',
            children: [
              { id: 'mm_11_9_1_1', label: 'Tấn công Phishing giả mạo' },
              { id: 'mm_11_9_1_2', label: 'Mã độc tống tiền Ransomware' },
              { id: 'mm_11_9_1_3', label: 'Kỹ nghệ xã hội thao túng tâm lý' }
            ]
          },
          {
            id: 'mm_11_9_2',
            label: 'Quy tắc phòng vệ',
            children: [
              { id: 'mm_11_9_2_1', label: 'Soi kỹ đường link URL' },
              { id: 'mm_11_9_2_2', label: 'Tuyệt đối giữ bí mật mã OTP' },
              { id: 'mm_11_9_2_3', label: 'Quy tắc 3 KHÔNG' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ An Toàn Mạng 11',
      badgeIcon: 'ShieldAlert',
      roleTitle: 'Chuyên Viên Tuyên Truyền An Toàn Thông Tin',
      congratsMessage: 'Tuyệt vời! Bạn đã trang bị lá chắn kiến thức vững chắc để bảo vệ bản thân và gia đình trước mọi cạm bẫy lừa đảo trên không gian mạng.',
      skillsUnlocked: ['Nhận diện Phishing & Ransomware', 'Kiểm tra tên miền độc hại', 'Bảo vệ mã bí mật OTP']
    }
  }
];
