import { Lesson } from '../../types/lesson';

export const THEME2_LESSONS_11: Lesson[] = [
  // Bài 6: Lưu trữ và chia sẻ tập tin trên Internet
  {
    id: 6,
    code: 'TIN11_B06',
    title: 'Lưu trữ và chia sẻ tập tin trên Internet',
    themeId: 2,
    themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    topicBadge: 'Lưu trữ đám mây',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kho dữ liệu số không giới hạn: Khám phá công nghệ Điện toán Đám mây',
      description: 'Tìm hiểu lợi ích của việc lưu trữ dữ liệu trực tuyến trên Google Drive, Microsoft OneDrive, Dropbox; cách phân quyền chia sẻ an toàn và làm việc nhóm theo thời gian thực.',
      accentColor: 'from-blue-600 to-cyan-500',
      keyHighlights: ['Google Drive & OneDrive', 'Phân quyền Xem / Nhận xét / Chỉnh sửa', 'Đồng bộ hóa dữ liệu tự động']
    },
    objectives: [
      {
        id: 'obj_11_6_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Ưu thế của lưu trữ đám mây',
        description: 'Trình bày được lợi ích của lưu trữ trực tuyến: truy cập mọi lúc mọi nơi, sao lưu an toàn, không lo hỏng ổ cứng vật lý.',
        iconName: 'Cloud'
      },
      {
        id: 'obj_11_6_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết lập quyền truy cập tệp',
        description: 'Phân biệt và áp dụng đúng các cấp độ chia sẻ tệp: Người xem (Viewer), Người nhận xét (Commenter) và Người chỉnh sửa (Editor).',
        iconName: 'Share2'
      },
      {
        id: 'obj_11_6_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo vệ quyền riêng tư dữ liệu',
        description: 'Cẩn trọng khi chia sẻ liên kết công khai và ý thức bảo vệ tài liệu cá nhân nhạy cảm trên môi trường số.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Quên mang ổ USB chứa bài thuyết trình',
      scenario: 'Nhóm của bạn đến lớp để báo cáo dự án thì phát hiện bạn nhóm trưởng để quên ổ USB ở nhà. Thời gian bắt đầu buổi học chỉ còn 5 phút.',
      pollQuestion: 'Cách lưu trữ tài liệu nào giúp bạn mở được bài tập ngay lập tức trên máy tính trường học mà không cần USB?',
      pollOptions: [
        { id: 'p11_6_1', text: 'Lưu tệp trên đám mây (Google Drive / OneDrive) và đăng nhập tài khoản để mở', votesPercent: 93, isPopular: true, insight: 'Chính xác! Lưu trữ đám mây giúp bạn truy cập dữ liệu từ bất kỳ thiết bị nào có kết nối Internet.' },
        { id: 'p11_6_2', text: 'Chạy bộ về nhà lấy USB', votesPercent: 3, insight: 'Chạy về nhà sẽ làm bạn bị muộn giờ học và không kịp buổi báo cáo.' },
        { id: 'p11_6_3', text: 'Vẽ lại toàn bộ bài báo cáo lên bảng đen', votesPercent: 4, insight: 'Không đủ thời gian để tái tạo lại toàn bộ nội dung trong 5 phút.' }
      ],
      reflection: 'Lưu trữ đám mây là thói quen làm việc khoa học của công dân số hiện đại.'
    },
    knowledge: [
      {
        id: 'tab_11_6_1',
        title: '1. Khái niệm Lưu trữ Đám mây & Phân quyền Chia sẻ',
        subtitle: 'Cộng tác trực tuyến an toàn và hiệu quả',
        iconName: 'CloudRain',
        keyPoints: [
          'Dịch vụ lưu trữ đám mây (Cloud Storage): Dữ liệu được lưu trữ trên các máy chủ từ xa của nhà cung cấp (Google, Microsoft) và quản lý qua mạng Internet.',
          'Các mức phân quyền chia sẻ tệp: "Người xem" (Viewer - chỉ đọc, không sửa), "Người nhận xét" (Commenter - đóng góp ý kiến), "Người chỉnh sửa" (Editor - toàn quyền sửa và xóa nội dung).',
          'Nguyên tắc an toàn: Hạn chế chia sẻ ở chế độ "Bất kỳ ai có đường liên kết đều có thể chỉnh sửa" đối với tài liệu quan trọng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cấp độ 1: Người xem (Viewer)', desc: 'Chỉ được đọc tài liệu, không được thay đổi' },
            { label: 'Cấp độ 2: Người nhận xét (Commenter)', desc: 'Được gắn ghi chú góp ý ở lề văn bản' },
            { label: 'Cấp độ 3: Người chỉnh sửa (Editor)', desc: 'Toàn quyền thêm, sửa, xóa nội dung tệp' }
          ]
        },
        emCanNho: [
          'Lưu trữ đám mây giúp truy cập dữ liệu mọi lúc mọi nơi và tự động đồng bộ.',
          '3 cấp độ quyền chia sẻ chính: Người xem (Viewer), Người nhận xét (Commenter), Người chỉnh sửa (Editor).',
          'Luôn kiểm tra kỹ quyền hạn trước khi gửi link tài liệu cho người khác.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Quyền hạn chia sẻ tệp Đám mây',
      instruction: 'Nối đúng cấp độ phân quyền với quyền hạn tương ứng:',
      matchingPairs: [
        { id: 'p1', left: 'Người xem (Viewer)', right: 'Chỉ đọc và tải xuống tài liệu, không được gõ thêm chữ' },
        { id: 'p2', left: 'Người nhận xét (Commenter)', right: 'Được tạo ghi chú góp ý nhưng không làm hỏng văn bản gốc' },
        { id: 'p3', left: 'Người chỉnh sửa (Editor)', right: 'Toàn quyền sửa đổi, định dạng và xóa nội dung tài liệu' },
        { id: 'p4', left: 'Chủ sở hữu (Owner)', right: 'Quyền cao nhất: chuyển nhượng quyền hoặc xóa vĩnh viễn tệp' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Dịch vụ nào sau đây KHÔNG PHẢI là dịch vụ lưu trữ đám mây trực tuyến?',
        options: ['Google Maps', 'Google Drive', 'Microsoft OneDrive', 'Dropbox'],
        correctIndex: 0,
        explanation: 'Google Maps là dịch vụ bản đồ số định vị, không phải kho lưu trữ tệp đám mây.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi gửi bài tập cho giáo viên chấm điểm xem trước, bạn nên cấp quyền chia sẻ nào là an toàn nhất?',
        options: ['Người xem (Viewer) hoặc Người nhận xét (Commenter)', 'Toàn quyền quản trị viên máy chủ', 'Người chỉnh sửa tự do xóa bài', 'Không cấp quyền gì'],
        correctIndex: 0,
        explanation: 'Quyền Viewer/Commenter giúp giáo viên đọc bài và ghi nhận xét mà tránh bị chỉnh sửa nhầm nội dung.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Lợi ích nào sau đây là lớn nhất khi cả nhóm cùng làm bài trên Google Docs qua đám mây?',
        options: [
          'Nhiều người có thể cùng vào soạn thảo đồng thời và theo dõi chỉnh sửa trong thời gian thực',
          'Máy tính không cần kết nối mạng',
          'Tự động làm bài thi hộ học sinh',
          'Xóa hết bài tập của các nhóm khác'
        ],
        correctIndex: 0,
        explanation: 'Khả năng cộng tác thời gian thực (Real-time collaboration) là điểm mạnh vượt trội của đám mây.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Để khôi phục lại một phiên bản bài viết cũ đã lỡ bị bạn cùng nhóm xóa mất trên Google Drive, ta sử dụng tính năng gì?',
        options: ['Lịch sử phiên bản (Version History)', 'Xóa luôn tài khoản', 'Cài lại hệ điều hành', 'Bấm phím F5 liên tục'],
        correctIndex: 0,
        explanation: 'Version History lưu lại từng mốc thời gian chỉnh sửa, cho phép xem lại và khôi phục bản cũ bất kỳ lúc nào.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Nguy cơ nào có thể xảy ra nếu bạn để chế độ chia sẻ tệp là "Bất kỳ ai có đường liên kết đều có thể chỉnh sửa"?',
        options: [
          'Người lạ có link có thể vô tình hoặc cố ý chỉnh sửa, xóa sạch nội dung bài làm của bạn',
          'Máy tính bị cháy nguồn',
          'Màn hình tự đổi màu xanh',
          'Không có nguy cơ gì'
        ],
        correctIndex: 0,
        explanation: 'Cấp quyền sửa công khai cho bất kỳ ai có link tiềm ẩn rủi ro bị phá hoại hoặc lộ thông tin.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Dự án: Thiết lập Thư mục Dự án Học tập Nhóm trên Đám mây',
        context: 'Tổ chức không gian lưu trữ trực tuyến cho nhóm 4 bạn cùng học tập môn Tin học 11.',
        mission: 'Tạo thư mục trên Google Drive và cấu hình chia sẻ phân quyền khoa học.',
        steps: [
          'Bước 1: Tạo thư mục mang tên "Nhom_Tin_Hoc_11" trên Google Drive.',
          'Bước 2: Tạo 3 thư mục con: "Tai_Lieu_Tham_Khao", "Bai_Lam_Thao_Luan", "San_Pham_Nop".',
          'Bước 3: Mời 3 bạn cùng nhóm với quyền Editor, và lấy link chia sẻ chế độ Viewer gửi cho giáo viên.'
        ],
        outputRequirement: 'Đường liên kết Google Drive được cấu hình phân quyền chuẩn xác.',
        practicalTip: 'Đặt tên tệp tin không dấu, có gạch dưới ngăn cách (VD: `Bai_tap_nhom_1.docx`) để tránh lỗi đường dẫn.'
      },
      mindmap: {
        id: 'mm_11_6',
        label: 'LƯU TRỮ ĐÁM MÂY',
        color: '#0284c7',
        children: [
          {
            id: 'mm_11_6_1',
            label: 'Dịch vụ phổ biến',
            children: [
              { id: 'mm_11_6_1_1', label: 'Google Drive' },
              { id: 'mm_11_6_1_2', label: 'Microsoft OneDrive' },
              { id: 'mm_11_6_1_3', label: 'Dropbox / iCloud' }
            ]
          },
          {
            id: 'mm_11_6_2',
            label: 'Cấp độ phân quyền',
            children: [
              { id: 'mm_11_6_2_1', label: 'Viewer (Chỉ xem)' },
              { id: 'mm_11_6_2_2', label: 'Commenter (Nhận xét)' },
              { id: 'mm_11_6_2_3', label: 'Editor (Chỉnh sửa)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Điện Toán Đám Mây 11',
      badgeIcon: 'Cloud',
      roleTitle: 'Cộng Tác Viên Đám Mây Chuyên Nghiệp',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ kỹ năng lưu trữ, chia sẻ và cộng tác thời gian thực trên đám mây.',
      skillsUnlocked: ['Quản lý Google Drive / OneDrive', 'Phân quyền tệp an toàn', 'Làm việc nhóm trực tuyến']
    }
  },

  // Bài 7: Thực hành tìm kiếm thông tin trên Internet
  {
    id: 7,
    code: 'TIN11_B07',
    title: 'Thực hành tìm kiếm thông tin trên Internet',
    themeId: 2,
    themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    topicBadge: 'Tìm kiếm nâng cao',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kỹ năng vàng thời đại số: Trở thành bậc thầy tra cứu thông tin chính xác',
      description: 'Làm chủ các toán tử tìm kiếm chuyên nghiệp của Google: dấu ngoặc kép (" "), toán tử site:, filetype:, dấu trừ (-) loại trừ từ khóa và tìm kiếm theo khoảng thời gian.',
      accentColor: 'from-blue-600 to-cyan-500',
      keyHighlights: ['Toán tử "cụm từ chính xác"', 'Lọc định dạng filetype:pdf', 'Tìm trong trang site:edu.vn']
    },
    objectives: [
      {
        id: 'obj_11_7_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp các toán tử tìm kiếm',
        description: 'Giải thích được ý nghĩa và tác dụng của các toán tử: dấu ngoặc kép, dấu trừ (-), site:, filetype:, OR.',
        iconName: 'Search'
      },
      {
        id: 'obj_11_7_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Truy vấn tài liệu học tập chính xác',
        description: 'Tìm kiếm nhanh các tài liệu định dạng PDF, PowerPoint từ các nguồn cổng thông tin giáo dục chính thống (.edu.vn / .gov.vn).',
        iconName: 'Filter'
      },
      {
        id: 'obj_11_7_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Kỹ năng thẩm định độ tin cậy',
        description: 'Biết kiểm chứng độ tin cậy của thông tin trên mạng trước khi trích dẫn và sử dụng trong bài làm.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tìm tài liệu ôn thi bị ngập trong tin tức quảng cáo',
      scenario: 'Bạn cần tìm đề thi thử môn Tin học 11 định dạng tệp PDF từ các trường chuyên để in ra làm. Nhưng khi gõ "de thi tin hoc 11", kết quả trả về hàng triệu bài viết quảng cáo khóa học bán sách.',
      pollQuestion: 'Cú pháp tìm kiếm chuẩn nào giúp bạn chỉ nhận đúng các tệp PDF tài liệu từ trang giáo dục?',
      pollOptions: [
        { id: 'p11_7_1', text: '"Tin học 11" filetype:pdf site:edu.vn', votesPercent: 91, isPopular: true, insight: 'Chính xác! filetype:pdf lọc đúng file PDF tải được, và site:edu.vn lọc các nguồn uy tín từ ngành giáo dục.' },
        { id: 'p11_7_2', text: 'Gõ: "Xin hãy cho tôi xin đề thi PDF cảm ơn nhiều"', votesPercent: 4, insight: 'Công cụ tìm kiếm không hoạt động theo cách trò chuyện lịch sự như vậy.' },
        { id: 'p11_7_3', text: 'Bấm bừa vào liên kết đầu tiên có chữ QC', votesPercent: 5, insight: 'Liên kết có chữ QC (Quảng cáo) thường dẫn đến trang bán hàng, không phải tài liệu bạn cần.' }
      ],
      reflection: 'Thành thạo toán tử tìm kiếm giúp bạn tiết kiệm hàng giờ đồng hồ mò mẫm vô ích trên Internet.'
    },
    knowledge: [
      {
        id: 'tab_11_7_1',
        title: '1. Bảng Toán Tử Tìm Kiếm Nâng Cao Google',
        subtitle: 'Khai thác tối đa sức mạnh của cỗ máy tìm kiếm',
        iconName: 'Filter',
        keyPoints: [
          'Dấu ngoặc kép `"cụm từ"`: Tìm kiếm chính xác từng từ và đúng thứ tự các từ trong ngoặc.',
          'Toán tử `filetype:đuôi_tệp`: Chỉ hiển thị kết quả có định dạng tệp mong muốn (filetype:pdf, filetype:pptx, filetype:xlsx).',
          'Toán tử `site:tên_miền`: Chỉ tìm kiếm thông tin bên trong một website hoặc tên miền cụ thể (site:moet.gov.vn, site:edu.vn).',
          'Dấu trừ `-từ_khóa`: Loại bỏ các kết quả có chứa từ khóa không mong muốn (VD: virus máy tính -sinh học).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Toán tử', 'Ví dụ tìm kiếm', 'Tác dụng kết quả'],
          rows: [
            ['"..." (Ngoặc kép)', '"Tin học 11 Kết nối tri thức"', 'Tìm chính xác cả cụm từ, không bị tách rời'],
            ['filetype:', 'giao an tin 11 filetype:docx', 'Chỉ trả về các tệp Word để tải về chỉnh sửa'],
            ['site:', 'tuyen sinh 2026 site:edu.vn', 'Chỉ tìm trong các trang web giáo dục Việt Nam'],
            ['- (Dấu trừ)', 'hệ điều hành -windows', 'Tìm thông tin hệ điều hành nhưng loại trừ Windows']
          ]
        },
        emCanNho: [
          'Dùng ngoặc kép `"..."` để tìm chính xác cụm từ nguyên vẹn.',
          'Dùng `filetype:pdf/docx/pptx` để tìm trực tiếp tệp tài liệu cần tải.',
          'Dùng `site:ten_mien` để giới hạn tìm kiếm trong các nguồn tin uy tín.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Cú pháp tìm kiếm và Nhu cầu thực tế',
      instruction: 'Nối nhu cầu tìm kiếm với cú pháp toán tử tương ứng:',
      matchingPairs: [
        { id: 's1', left: 'Cần tìm bài giảng slide môn Tin 11', right: 'tin hoc 11 filetype:pptx' },
        { id: 's2', left: 'Cần tra cứu quy chế thi của Bộ GD&ĐT', right: 'quy che thi tot nghiep site:moet.gov.vn' },
        { id: 's3', left: 'Tìm bài viết về Virus máy tính (loại bỏ virus y học)', right: 'virus may tinh -corona -y_te' },
        { id: 's4', left: 'Tìm chính xác câu trích dẫn văn học', right: '"Học vấn không có quê hương nhưng người học phải có tổ quốc"' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để tìm kiếm tài liệu dạng tệp trình chiếu PowerPoint về môn Tin học, cú pháp nào sau đây ĐÚNG?',
        options: ['tin hoc 11 filetype:pptx', 'tin hoc 11 type=powerpoint', 'tin hoc 11 tim slide', 'tin hoc 11 show:ppt'],
        correctIndex: 0,
        explanation: 'filetype:pptx là toán tử chuẩn để lọc các tệp trình chiếu PowerPoint.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Cú pháp: "an toan mang" site:gov.vn có ý nghĩa gì?',
        options: [
          'Tìm chính xác cụm từ "an toan mang" chỉ bên trong các trang web thuộc cơ quan chính phủ Việt Nam (.gov.vn)',
          'Tìm trên tất cả các trang web thương mại điện tử',
          'Xóa trang web gov.vn',
          'Không tìm thấy gì'
        ],
        correctIndex: 0,
        explanation: 'site:gov.vn giới hạn phạm vi tìm kiếm trong tên miền của các cơ quan nhà nước.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi tìm kiếm: laptop mỏng nhẹ -gaming, kết quả trả về sẽ như thế nào?',
        options: [
          'Tìm các laptop mỏng nhẹ nhưng loại trừ hoàn toàn những bài viết có chứa từ khóa "gaming"',
          'Chỉ tìm các laptop chơi game cấu hình khủng',
          'Mua laptop gaming giá rẻ',
          'Lỗi cú pháp không chạy được'
        ],
        correctIndex: 0,
        explanation: 'Dấu trừ (-) đặt sát từ khóa có tác dụng loại trừ các kết quả chứa từ đó.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Dấu hiệu nào sau đây cho thấy một nguồn thông tin trên Internet có ĐỘ TIN CẬY CAO?',
        options: [
          'Thuộc các trang web chính thức của bộ ban ngành, viện nghiên cứu, trường đại học (.gov, .edu) có tác giả rõ ràng',
          'Được chia sẻ bởi tài khoản ẩn danh trên diễn đàn mạng',
          'Bài viết có tiêu đề giật gân, câu like',
          'Trang web có nhiều banner quảng cáo cá độ'
        ],
        correctIndex: 0,
        explanation: 'Nguồn tin từ các tổ chức uy tín có đuôi tên miền .gov, .edu và tác giả chuyên môn có độ tin cậy cao nhất.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Toán tử tìm kiếm OR (in hoa) giữa hai từ khóa có tác dụng gì?',
        options: [
          'Tìm kết quả có chứa từ khóa thứ nhất HOẶC từ khóa thứ hai (hoặc cả hai)',
          'Bắt buộc cả hai từ phải xuất hiện',
          'Xóa cả hai từ',
          'Dịch từ khóa sang tiếng Anh'
        ],
        correctIndex: 0,
        explanation: 'Toán tử logic OR mở rộng phạm vi tìm kiếm khi một trong các điều kiện thỏa mãn.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Thu thập Tài liệu Ôn tập Cơ sở Dữ liệu',
        context: 'Học sinh cần chuẩn bị tài liệu ôn tập lý thuyết CSDL chuẩn bị cho bài thi giữa kỳ.',
        mission: 'Sử dụng các toán tử tìm kiếm để thu thập 3 tài liệu chất lượng cao.',
        steps: [
          'Bước 1: Soạn cú pháp tìm sách bài tập CSDL PDF: `"co so du lieu" filetype:pdf site:edu.vn`.',
          'Bước 2: Tìm slide giới thiệu SQL: `ngon ngu sql filetype:pptx`.',
          'Bước 3: Đánh giá tác giả, năm ban hành và lưu tệp vào thư mục học tập.'
        ],
        outputRequirement: 'Danh sách 3 liên kết tài liệu thu thập được kèm ghi chú đánh giá độ tin cậy.',
        practicalTip: 'Khi tìm văn bản quy phạm pháp luật, luôn gõ thêm năm gần nhất (ví dụ: `thong tu 2024 site:moet.gov.vn`) để tránh đọc văn bản cũ đã hết hiệu lực.'
      },
      mindmap: {
        id: 'mm_11_7',
        label: 'TÌM KIẾM NÂNG CAO',
        color: '#0284c7',
        children: [
          {
            id: 'mm_11_7_1',
            label: 'Toán tử từ khóa',
            children: [
              { id: 'mm_11_7_1_1', label: '" " Cụm từ chính xác' },
              { id: 'mm_11_7_1_2', label: '- Loại trừ từ khóa' },
              { id: 'mm_11_7_1_3', label: 'OR Tìm kiếm linh hoạt' }
            ]
          },
          {
            id: 'mm_11_7_2',
            label: 'Toán tử phạm vi',
            children: [
              { id: 'mm_11_7_2_1', label: 'filetype: (pdf, pptx, docx)' },
              { id: 'mm_11_7_2_2', label: 'site: (.edu.vn, .gov.vn)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Tra Cứu Số 11',
      badgeIcon: 'Search',
      roleTitle: 'Chuyên Viên Khai Thác Thông Tin Nâng Cao',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm trọn các toán tử tìm kiếm chuyên nghiệp giúp tra cứu tài liệu nhanh và chính xác.',
      skillsUnlocked: ['Cú pháp filetype & site', 'Toán tử ngoặc kép & loại trừ', 'Kỹ năng thẩm định tin tức']
    }
  },

  // Bài 8: Thực hành nâng cao sử dụng thư điện tử và mạng xã hội
  {
    id: 8,
    code: 'TIN11_B08',
    title: 'Thực hành nâng cao sử dụng thư điện tử và mạng xã hội',
    themeId: 2,
    themeName: 'Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin',
    topicBadge: 'Email & Mạng xã hội',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Giao tiếp số văn minh, chuyên nghiệp và bảo mật thông tin',
      description: 'Nắm vững quy tắc viết thư điện tử chuẩn mực (tiêu đề, kính gửi, CC, BCC, chữ ký số tự động) và các biện pháp bảo vệ danh tính, quyền riêng tư trên các nền tảng mạng xã hội.',
      accentColor: 'from-blue-600 to-cyan-500',
      keyHighlights: ['Phân biệt CC và BCC', 'Chữ ký email chuyên nghiệp', 'Thiết lập quyền riêng tư mạng xã hội']
    },
    objectives: [
      {
        id: 'obj_11_8_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cấu trúc thư điện tử chuẩn mực',
        description: 'Hiểu rõ các thành phần của email chuyên nghiệp: To, Cc (Carbon Copy), Bcc (Blind Carbon Copy), Tiêu đề (Subject) và Chữ ký (Signature).',
        iconName: 'Mail'
      },
      {
        id: 'obj_11_8_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Soạn thảo & Bảo mật tài khoản',
        description: 'Soạn một bức thư xin phép/nộp bài chuẩn nghi thức và thiết lập tính năng xác thực hai yếu tố (2FA) cho tài khoản mạng xã hội.',
        iconName: 'Send'
      },
      {
        id: 'obj_11_8_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Văn hóa giao tiếp mạng văn minh',
        description: 'Ứng xử lịch sự, không phát tán thư rác (Spam) và bảo vệ dữ liệu cá nhân của bản thân và bạn bè trên không gian mạng.',
        iconName: 'HeartHandshake'
      }
    ],
    warmup: {
      title: 'Tình huống: Gửi thư nộp bài cho Thầy giáo',
      scenario: 'Một bạn học sinh gửi email nộp bài tập lớn cho thầy giáo: Tiêu đề bỏ trống, nội dung chỉ có 1 file đính kèm mang tên "untitled.docx" và không có lời chào hay họ tên người gửi.',
      pollQuestion: 'Bức email trên thiếu sót điều gì nghiêm trọng nhất trong văn hóa giao tiếp công nghệ?',
      pollOptions: [
        { id: 'p11_8_1', text: 'Thiếu tiêu đề rõ ràng, thiếu lời chào thưa kính gửi và không nêu rõ họ tên học sinh', votesPercent: 94, isPopular: true, insight: 'Chính xác! Thư không tiêu đề rất dễ bị bộ lọc tự động ném vào hòm thư rác (Spam) và thể hiện thái độ thiếu tôn trọng.' },
        { id: 'p11_8_2', text: 'Thiếu chèn bài hát yêu thích vào thư', votesPercent: 3, insight: 'Email học tập công việc không chèn file nhạc gây phiền hà.' },
        { id: 'p11_8_3', text: 'Thiếu biểu tượng cảm xúc mặt cười', votesPercent: 3, insight: 'Thư gửi thầy cô cần sự trang trọng, không nên lạm dụng icon nhí nhố.' }
      ],
      reflection: 'Kỹ năng soạn email chuyên nghiệp là hành trang không thể thiếu khi bạn bước vào giảng đường đại học và môi trường doanh nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_8_1',
        title: '1. Quy Chuẩn Soạn Email Chuyên Nghiệp (CC & BCC)',
        subtitle: 'Các trường thông tin cốt lõi trong giao tiếp thư tín điện tử',
        iconName: 'MailCheck',
        keyPoints: [
          'Trường To (Đến): Địa chỉ người nhận chính có trách nhiệm xử lý nội dung thư.',
          'Trường CC (Carbon Copy): Gửi đồng kính gửi cho những người liên quan để theo dõi thông tin (tất cả mọi người đều nhìn thấy danh sách email của nhau).',
          'Trường BCC (Blind Carbon Copy): Gửi bản sao ẩn danh, những người nhận trong danh sách To và CC KHÔNG nhìn thấy địa chỉ của người nhận trong BCC (bảo vệ quyền riêng tư khi gửi đồng loạt).',
          'Tiêu đề thư (Subject): Ngắn gọn, súc tích, tóm tắt nội dung (VD: `[11A1] Nộp bài tập Tin học tuần 5 - Nguyễn Văn An`).',
          'Chữ ký thư (Signature): Tự động hiển thị ở cuối thư gồm: Họ tên, Trường lớp, Số điện thoại liên hệ.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Trường gửi', 'Mục đích sử dụng', 'Người khác có thấy email không?'],
          rows: [
            ['To (Đến)', 'Người nhận trực tiếp chịu trách nhiệm', 'Có, ai cũng thấy'],
            ['CC (Bản sao)', 'Người cùng theo dõi tiến độ công việc', 'Có, ai cũng thấy'],
            ['BCC (Bản sao ẩn)', 'Gửi thông báo số lượng lớn, bảo vệ danh tính', 'KHÔNG, hoàn toàn ẩn danh']
          ]
        },
        emCanNho: [
          'Dùng `CC` khi muốn người khác cùng theo dõi thông tin công khai.',
          'Dùng `BCC` khi gửi thư cho nhiều người nhưng cần bảo mật địa chỉ email của nhau.',
          'Email chuyên nghiệp luôn có Tiêu đề rõ ràng, Lời chào thưa, Nội dung chỉn chu và Chữ ký cuối thư.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thành phần Email và Chức năng',
      instruction: 'Nối các thành phần trong cửa sổ soạn email với mục đích chuẩn:',
      matchingPairs: [
        { id: 'e1', left: 'Trường CC', right: 'Đồng gửi thông tin công khai cho người cùng theo dõi' },
        { id: 'e2', left: 'Trường BCC', right: 'Gửi bản sao ẩn danh, bảo vệ quyền riêng tư của người nhận' },
        { id: 'e3', left: 'Dòng Tiêu đề (Subject)', right: 'Tóm tắt nội dung ngắn gọn giúp người nhận nắm bắt ngay' },
        { id: 'e4', left: 'Chữ ký thư (Signature)', right: 'Tự động chèn thông tin cá nhân và liên hệ ở cuối thư' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Khi cần gửi thư thông báo cho 50 phụ huynh trong lớp nhưng KHÔNG MUỐN các phụ huynh nhìn thấy địa chỉ email của nhau, bạn nên đặt danh sách email vào trường nào?',
        options: ['Trường BCC', 'Trường CC', 'Trường To', 'Dòng tiêu đề Subject'],
        correctIndex: 0,
        explanation: 'Trường BCC (Blind Carbon Copy) giấu kín toàn bộ địa chỉ email của những người nhận trong danh sách đó.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Tiêu đề thư (Subject) nào sau đây là chuyên nghiệp và rõ ràng nhất khi nộp bài tập?',
        options: [
          '[Tin học 11] Nộp bài tập thực hành số 2 - Lê Thị Mai - Lớp 11A3',
          'Nộp bài nè thầy ơi',
          'Thư không có tiêu đề',
          'Help me please khẩn cấp'
        ],
        correctIndex: 0,
        explanation: 'Tiêu đề có cấu trúc gồm môn học, tên bài, họ tên và lớp giúp giáo viên phân loại bài nhanh chóng.',
        difficulty: 'Vận dụng'
      },
      {
        id: 3,
        question: 'Để bảo vệ an toàn cho tài khoản mạng xã hội trước nguy cơ bị kẻ xấu chiếm đoạt (hack), biện pháp nào sau đây HIỆU QUẢ NHẤT?',
        options: [
          'Kích hoạt tính năng xác thực hai yếu tố (2FA) qua ứng dụng xác thực hoặc tin nhắn SMS',
          'Đặt mật khẩu là ngày sinh nhật hoặc 123456 cho dễ nhớ',
          'Đăng nhập tài khoản trên máy tính quán net rồi không đăng xuất',
          'Chia sẻ mật khẩu cho tất cả bạn thân cùng dùng chung'
        ],
        correctIndex: 0,
        explanation: 'Xác thực 2 yếu tố (2FA) đòi hỏi mã xác thực động ngay cả khi kẻ gian biết mật khẩu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Hành vi nào sau đây là VI PHẠM đạo đức và quy tắc ứng xử trên mạng xã hội?',
        options: [
          'Đăng tải hình ảnh và thông tin bí mật đời tư của người khác khi chưa được sự đồng ý',
          'Thả cảm xúc biểu tượng cho bài viết của bạn bè',
          'Chia sẻ bài báo khoa học từ trang báo uy tín',
          'Gắn thẻ bạn bè vào bài thảo luận học tập'
        ],
        correctIndex: 0,
        explanation: 'Tự ý phát tán thông tin đời tư cá nhân vi phạm nghiêm trọng Luật An ninh mạng và quyền riêng tư.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Chức năng "Báo cáo" (Report / Phản hồi vi phạm) trên mạng xã hội dùng để làm gì?',
        options: [
          'Báo cáo các nội dung độc hại, lừa đảo, bắt nạt trực tuyến hoặc thông tin sai sự thật cho quản trị viên xử lý',
          'Xóa tài khoản của chính mình',
          'Tăng lượt người theo dõi nhanh chóng',
          'Gửi quà sinh nhật cho bạn bè'
        ],
        correctIndex: 0,
        explanation: 'Báo cáo vi phạm giúp cộng đồng chung tay xây dựng môi trường mạng trong sạch và an toàn.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Thiết lập Chữ Ký Chuyên Nghiệp & Soạn Thư Mẫu',
        context: 'Xây dựng tác phong giao tiếp số chuyên nghiệp cho học sinh THPT.',
        mission: 'Cài đặt chữ ký tự động trong hộp thư Gmail/Outlook và soạn thảo một bức thư mẫu.',
        steps: [
          'Bước 1: Mở Cài đặt Gmail -> Thẻ Chung -> Mục Chữ ký (Signature).',
          'Bước 2: Tạo chữ ký gồm: Họ và tên, Học sinh lớp, Trường THPT, Số điện thoại và câu châm ngôn học tập.',
          'Bước 3: Bấm Soạn thư gửi cho bạn bên cạnh để kiểm tra độ hiển thị của chữ ký.'
        ],
        outputRequirement: 'Ảnh chụp bức thư điện tử hiển thị đầy đủ tiêu đề chuẩn mực và chữ ký tự động đẹp mắt.',
        practicalTip: 'Không nên dùng quá nhiều màu sắc sặc sỡ trong chữ ký, chỉ nên dùng màu chữ tối giản, trang nhã.'
      },
      mindmap: {
        id: 'mm_11_8',
        label: 'EMAIL & MẠNG XÃ HỘI',
        color: '#0284c7',
        children: [
          {
            id: 'mm_11_8_1',
            label: 'Cấu trúc Email chuẩn',
            children: [
              { id: 'mm_11_8_1_1', label: 'To (Người nhận chính)' },
              { id: 'mm_11_8_1_2', label: 'CC (Bản sao công khai)' },
              { id: 'mm_11_8_1_3', label: 'BCC (Bản sao ẩn danh)' },
              { id: 'mm_11_8_1_4', label: 'Subject & Signature' }
            ]
          },
          {
            id: 'mm_11_8_2',
            label: 'An toàn mạng xã hội',
            children: [
              { id: 'mm_11_8_2_1', label: 'Xác thực 2 yếu tố 2FA' },
              { id: 'mm_11_8_2_2', label: 'Quyền riêng tư bài đăng' },
              { id: 'mm_11_8_2_3', label: 'Ứng xử mạng văn minh' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Công Dân Số Văn Minh 11',
      badgeIcon: 'MailCheck',
      roleTitle: 'Chuyên Viên Giao Tiếp Kỹ Thuật Số',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững các chuẩn mực giao tiếp email chuyên nghiệp và bảo vệ an toàn trên mạng xã hội.',
      skillsUnlocked: ['Phân biệt To/CC/BCC', 'Tạo chữ ký Signature', 'Bảo mật 2FA mạng xã hội']
    }
  }
];
