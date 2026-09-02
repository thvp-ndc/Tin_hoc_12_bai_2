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
        description: 'Trình bày được khái niệm và các lợi ích nổi bật của lưu trữ trực tuyến: truy cập mọi lúc mọi nơi, tự động đồng bộ và sao lưu an toàn.',
        iconName: 'Cloud'
      },
      {
        id: 'obj_11_6_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tổ chức & phân quyền chia sẻ tệp',
        description: 'Thực hiện được việc tải tệp lên, tạo thư mục quản lý và phân quyền chia sẻ chính xác theo 3 cấp độ: Viewer, Commenter, Editor.',
        iconName: 'Share2'
      },
      {
        id: 'obj_11_6_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo vệ quyền riêng tư dữ liệu',
        description: 'Cẩn trọng khi chia sẻ liên kết công khai và có ý thức bảo vệ tài liệu cá nhân, thông tin nhạy cảm trên môi trường số.',
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
        title: '1. Khái niệm và lợi ích của lưu trữ đám mây',
        subtitle: 'Bản chất công nghệ lưu trữ trực tuyến và ưu điểm vượt trội',
        iconName: 'Cloud',
        keyPoints: [
          'Khái niệm lưu trữ đám mây (Cloud Storage): Dữ liệu được lưu trữ trên các hệ thống máy chủ từ xa của nhà cung cấp dịch vụ (Google, Microsoft, Dropbox) và được người dùng truy cập, quản lý thông qua mạng Internet.',
          'Các lợi ích then chốt:',
          '  - Truy cập linh hoạt: Mở và chỉnh sửa dữ liệu mọi lúc, mọi nơi từ máy tính, máy tính bảng hay điện thoại.',
          '  - An toàn dữ liệu: Không lo nguy cơ mất trắng dữ liệu do hỏng ổ cứng vật lý, cháy nổ hay nhiễm virus cục bộ.',
          '  - Tiết kiệm chi phí phần cứng và dung lượng lưu trữ trên thiết bị cá nhân.',
          '  - Hỗ trợ làm việc nhóm và cộng tác đồng thời theo thời gian thực vượt trội.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thiết bị cá nhân', desc: 'PC, Laptop, Smartphone, Tablet' },
            { label: 'Đường truyền Internet', desc: 'Mã hóa SSL/TLS an toàn bảo mật' },
            { label: 'Trung tâm dữ liệu (Data Center)', desc: 'Hàng ngàn máy chủ sao lưu dự phòng liên tục' }
          ]
        },
        emCanNho: [
          'Lưu trữ đám mây là giải pháp lưu dữ liệu trên máy chủ Internet của nhà cung cấp.',
          'Giúp truy cập tài liệu mọi lúc mọi nơi từ bất kỳ thiết bị thông minh nào.',
          'Bảo vệ an toàn dữ liệu khỏi rủi ro hỏng hóc thiết bị phần cứng cá nhân.'
        ]
      },
      {
        id: 'tab_11_6_2',
        title: '2. Quản lý thư mục và đồng bộ dữ liệu',
        subtitle: 'Tổ chức dữ liệu khoa học và cơ chế đồng bộ tự động',
        iconName: 'FolderPlus',
        keyPoints: [
          'Tạo lập và tổ chức cây thư mục: Đặt tên thư mục rõ ràng theo năm học, môn học hoặc dự án (ví dụ: `TinHoc11/BaiTap`).',
          'Tải lên tệp và thư mục: Kéo thả trực tiếp từ máy tính vào giao diện web của Google Drive/OneDrive.',
          'Cơ chế đồng bộ hóa (Sync): Cài đặt ứng dụng Google Drive / OneDrive for Desktop để các thay đổi trên máy tính tự động cập nhật lên đám mây và ngược lại.',
          'Lịch sử phiên bản (Version History): Cho phép xem lại và khôi phục các phiên bản chỉnh sửa cũ của tệp tài liệu trong vòng 30 ngày.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thư mục trên máy tính', desc: 'Sửa file bài tập văn bản' },
            { label: 'Phần mềm đồng bộ Sync', desc: 'Tự động tải bản mới lên đám mây trong 1 giây' },
            { label: 'Đám mây Google Drive', desc: 'Lưu trữ phiên bản mới nhất, xem được trên điện thoại' }
          ]
        },
        emCanNho: [
          'Tổ chức thư mục trên đám mây theo phân cấp khoa học giúp tìm kiếm nhanh chóng.',
          'Ứng dụng đồng bộ tự động cập nhật mọi thay đổi giữa máy tính và đám mây.',
          'Tính năng Lịch sử phiên bản giúp khôi phục dữ liệu khi lỡ tay xóa hoặc sửa nhầm.'
        ]
      },
      {
        id: 'tab_11_6_3',
        title: '3. Thiết lập quyền truy cập (Viewer, Commenter, Editor)',
        subtitle: 'Kiểm soát an toàn chia sẻ tài liệu và cộng tác nhóm',
        iconName: 'Share2',
        keyPoints: [
          'Ba mức phân quyền truy cập tiêu chuẩn:',
          '  - Người xem (Viewer): Chỉ được phép đọc và tải xuống tài liệu, không được thay đổi nội dung.',
          '  - Người nhận xét (Commenter): Được đọc và gắn các ghi chú nhận xét ở lề trang, không sửa trực tiếp vào văn bản.',
          '  - Người chỉnh sửa (Editor): Toàn quyền thêm, xóa, sửa nội dung và chia sẻ tệp cho người khác.',
          'Hai hình thức chia sẻ:',
          '  - Chia sẻ đích danh qua địa chỉ Email (khuyến nghị cho tài liệu mật hoặc nhóm học tập).',
          '  - Chia sẻ qua đường liên kết công khai (bất kỳ ai có liên kết đều truy cập được).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Mức quyền hạn', 'Quyền đọc', 'Quyền ghi chú', 'Quyền sửa nội dung', 'Đối tượng phù hợp'],
          rows: [
            ['Người xem (Viewer)', 'Có', 'Không', 'Không', 'Gửi báo cáo cho giáo viên, tài liệu tham khảo'],
            ['Người nhận xét (Commenter)', 'Có', 'Có', 'Không', 'Nhờ thầy cô hoặc bạn bè chấm và góp ý bài tập'],
            ['Người chỉnh sửa (Editor)', 'Có', 'Có', 'Có', 'Các thành viên trong cùng nhóm dự án học tập']
          ]
        },
        emCanNho: [
          '3 cấp độ chia sẻ: Người xem (Viewer), Người nhận xét (Commenter), Người chỉnh sửa (Editor).',
          'Chỉ cấp quyền Editor cho những người đáng tin cậy cùng làm việc.',
          'Không chia sẻ liên kết công khai có quyền Editor đối với tài liệu quan trọng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Quyền Hạn Đám Mây và Tình Huống Thực Tế',
      instruction: 'Nối mức phân quyền phù hợp với từng tình huống chia sẻ:',
      matchingPairs: [
        { id: 'sh1', left: 'Cấp quyền Người xem (Viewer)', right: 'Gửi bảng tổng kết điểm thi học kỳ cho toàn bộ học sinh lớp xem' },
        { id: 'sh2', left: 'Cấp quyền Người nhận xét (Commenter)', right: 'Gửi bài tiểu luận nhờ cô giáo chấm bài và ghi chú nhận xét sửa lỗi' },
        { id: 'sh3', left: 'Cấp quyền Người chỉnh sửa (Editor)', right: 'Hai bạn cùng nhóm ngồi soạn chung một bài thuyết trình PowerPoint' },
        { id: 'sh4', left: 'Tính năng Lịch sử phiên bản', right: 'Khôi phục lại bài văn trước khi bị bạn bè xóa nhầm' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Khi bạn gửi bài tập báo cáo cho thầy cô giáo chấm điểm, bạn nên thiết lập quyền chia sẻ nào là HỢP LÝ NHẤT?',
        options: [
          'Người xem (Viewer) hoặc Người nhận xét (Commenter)',
          'Người chỉnh sửa (Editor) cho phép xóa hết',
          'Công khai cho toàn thế giới cùng vào sửa',
          'Khóa tài khoản không cho ai mở'
        ],
        correctIndex: 0,
        explanation: 'Quyền Viewer hoặc Commenter đảm bảo bài làm gốc của bạn không bị sửa đổi ngoài ý muốn trong khi thầy cô vẫn đọc và nhận xét được.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Dịch vụ nào sau đây KHÔNG PHẢI là dịch vụ lưu trữ đám mây?',
        options: ['Adobe Photoshop CC', 'Google Drive', 'Microsoft OneDrive', 'Dropbox'],
        correctIndex: 0,
        explanation: 'Adobe Photoshop là phần mềm chỉnh sửa đồ họa, không phải dịch vụ lưu trữ đám mây thuần túy.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Tại sao lưu trữ đám mây lại an toàn hơn so với việc chỉ lưu tệp duy nhất trên một chiếc USB bỏ trong túi quần?',
        options: [
          'Vì USB dễ bị rơi mất, gãy hỏng hoặc dính virus khi cắm máy lạ, trong khi đám mây được sao lưu an toàn tại trung tâm dữ liệu',
          'Vì đám mây không cần điện',
          'Vì lưu trên USB thì bài tập tự động biến mất sau 1 ngày',
          'Vì đám mây có thể cầm trên tay được'
        ],
        correctIndex: 0,
        explanation: 'USB là phần cứng vật lý nhỏ bé rất dễ thất lạc hoặc chập mạch, trong khi đám mây có các bản sao lưu phân tán an toàn.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Nếu vô tình một thành viên trong nhóm xóa mất một đoạn văn quan trọng trong Google Docs, bạn có thể lấy lại bằng cách nào?',
        options: [
          'Mở menu Tệp -> Lịch sử phiên bản (Version history) để khôi phục lại thời điểm trước đó',
          'Xóa luôn tệp tin đi viết lại từ đầu',
          'Đập bàn phím máy tính',
          'Tắt mạng Internet đi bật lại'
        ],
        correctIndex: 0,
        explanation: 'Google Docs tự động lưu từng ký tự gõ theo thời gian thực và cho phép lùi lại lịch sử chỉnh sửa bất kỳ lúc nào.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Nguyên tắc bảo mật quan trọng nhất khi chia sẻ tài liệu học tập qua đường liên kết là gì?',
        options: [
          'Không chia sẻ quyền Editor dưới dạng liên kết công khai cho bất kỳ ai trên mạng',
          'Phải gửi kèm mật khẩu thẻ ngân hàng',
          'Chỉ được chia sẻ vào ban đêm',
          'Không được đặt tên cho tệp'
        ],
        correctIndex: 0,
        explanation: 'Chia sẻ công khai quyền Editor sẽ khiến bất kỳ ai có link đều có thể xóa sạch hoặc chèn nội dung xấu vào tệp của bạn.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Dự Án Học Tập: Thiết Lập Thư Mục Đám Mây Cho Nhóm Học Tập 4 Bạn',
        context: 'Nhóm 4 bạn chuẩn bị làm bài tập lớn môn Tin học 11 cần không gian làm việc chung.',
        mission: 'Khởi tạo thư mục dự án trên Google Drive và phân quyền làm việc nhóm chuẩn mực.',
        steps: [
          'Bước 1: Trưởng nhóm tạo thư mục mang tên `DuAn_Tin11_Nhom1`.',
          'Bước 2: Tạo 3 thư mục con: `TaiLieuThamKhao`, `BaoCaoChinh`, `HinhAnh`.',
          'Bước 3: Chia sẻ thư mục qua email cho 3 bạn thành viên với quyền `Editor`.',
          'Bước 4: Tạo một tệp `KeHoachLamViec.gdoc` và 4 bạn cùng đồng thời vào gõ họ tên, phân công nhiệm vụ.'
        ],
        outputRequirement: 'Liên kết thư mục Google Drive được thiết lập phân quyền an toàn, đúng email thành viên.',
        practicalTip: 'Trưởng nhóm nên tắt tùy chọn "Người chỉnh sửa có thể thay đổi quyền và chia sẻ" trong phần cài đặt nâng cao của thư mục.'
      },
      mindmap: {
        id: 'mm_11_6',
        label: 'LƯU TRỮ ĐÁM MÂY',
        color: '#0ea5e9',
        children: [
          {
            id: 'mm_11_6_1',
            label: 'Lợi ích cốt lõi',
            children: [
              { id: 'mm_11_6_1_1', label: 'Truy cập mọi lúc mọi nơi' },
              { id: 'mm_11_6_1_2', label: 'An toàn dữ liệu, chống mất mát' },
              { id: 'mm_11_6_1_3', label: 'Cộng tác nhóm thời gian thực' }
            ]
          },
          {
            id: 'mm_11_6_2',
            label: 'Phân quyền chia sẻ',
            children: [
              { id: 'mm_11_6_2_1', label: 'Viewer: Chỉ xem' },
              { id: 'mm_11_6_2_2', label: 'Commenter: Nhận xét ở lề' },
              { id: 'mm_11_6_2_3', label: 'Editor: Chỉnh sửa toàn quyền' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Đám Mây 11',
      badgeIcon: 'Cloud',
      roleTitle: 'Chuyên Viên Quản Trị Dữ Liệu Đám Mây',
      congratsMessage: 'Tuyệt vời! Bạn đã thành thạo kỹ năng lưu trữ đám mây và phân quyền an toàn để làm việc nhóm hiệu quả.',
      skillsUnlocked: ['Sử dụng Google Drive / OneDrive', 'Phân quyền Viewer/Commenter/Editor', 'Quản lý lịch sử phiên bản Version History']
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
      tagline: 'Làm chủ mỏ vàng tri thức: Kỹ thuật tra cứu thông tin học tập chính xác tuyệt đối',
      description: 'Khám phá các toán tử tìm kiếm chuyên nghiệp của Google: tìm kiếm cụm từ chính xác `""`, loại trừ từ khóa `-`, lọc theo định dạng tệp `filetype:` và giới hạn tên miền `site:`.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Toán tử tìm kiếm Google', 'Lọc định dạng filetype:pdf', 'Giới hạn tên miền site:edu.vn']
    },
    objectives: [
      {
        id: 'obj_11_7_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nguyên lý toán tử tìm kiếm nâng cao',
        description: 'Giải thích được ý nghĩa và tác dụng của các toán tử tìm kiếm nâng cao trên các công cụ tìm kiếm: dấu ngoặc kép `""`, dấu trừ `-`, `site:`, `filetype:`.',
        iconName: 'Search'
      },
      {
        id: 'obj_11_7_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tra cứu tài nguyên học tập chính xác',
        description: 'Vận dụng phối hợp các toán tử tìm kiếm để tìm nhanh chóng các tài liệu học tập chuẩn xác (tệp PDF, đề thi, slide bài giảng) từ các nguồn chính thống.',
        iconName: 'Filter'
      },
      {
        id: 'obj_11_7_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thẩm định nguồn tin & tôn trọng bản quyền',
        description: 'Có kỹ năng đánh giá độ tin cậy của thông tin số, kiểm chứng tác giả và trích dẫn nguồn gốc tài liệu một cách trung thực, có văn hóa.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tìm tài liệu ôn thi học kỳ bị ngập trong quảng cáo',
      scenario: 'Bạn gõ vào Google: "Đề cương ôn thi Tin học 11". Kết quả trả về hàng triệu trang web chứa quảng cáo bán hàng, khóa học trả phí và các bài viết rác không liên quan.',
      pollQuestion: 'Cú pháp tìm kiếm nào giúp bạn tìm ĐÍCH DANH tệp tài liệu định dạng PDF từ các trường học hoặc cổng giáo dục?',
      pollOptions: [
        { id: 'p11_7_1', text: '"Tin học 11" filetype:pdf site:edu.vn', votesPercent: 95, isPopular: true, insight: 'Chính xác! Cú pháp này yêu cầu Google chỉ trả về tệp PDF từ các tên miền giáo dục .edu.vn.' },
        { id: 'p11_7_2', text: 'Tìm kiếm đề cương Tin 11 xin cảm ơn Google', votesPercent: 3, insight: 'Thêm lời cảm ơn không giúp công cụ tìm kiếm lọc bớt kết quả rác.' },
        { id: 'p11_7_3', text: 'Gõ chữ in hoa toàn bộ kết quả', votesPercent: 2, insight: 'Google không phân biệt chữ hoa hay chữ thường trong từ khóa.' }
      ],
      reflection: 'Sử dụng toán tử tìm kiếm nâng cao giúp bạn tiết kiệm 90% thời gian tra cứu và loại bỏ hoàn toàn các trang web rác.'
    },
    knowledge: [
      {
        id: 'tab_11_7_1',
        title: '1. Toán tử tìm kiếm nâng cao (ngoặc kép, trừ, site, filetype)',
        subtitle: 'Vũ khí tra cứu thông tin chính xác của chuyên gia số',
        iconName: 'Search',
        keyPoints: [
          'Dấu ngoặc kép `"cụm từ"`: Tìm kiếm chính xác từng từ và đúng thứ tự xuất hiện. Ví dụ: `"Hệ điều hành mạng"`.',
          'Dấu trừ `-từ_khóa`: Loại bỏ tất cả các kết quả chứa từ khóa phía sau dấu trừ. Ví dụ: `Tin học 11 -game` (tìm tin học 11 loại trừ các kết quả liên quan đến game).',
          'Toán tử `filetype:định_dạng`: Chỉ tìm kiếm các tệp tin có định dạng cụ thể (pdf, docx, pptx, xlsx). Ví dụ: `Giao án Tin 11 filetype:pptx`.',
          'Toán tử `site:tên_miền`: Chỉ tìm kiếm bên trong một trang web hoặc một đuôi tên miền cụ thể. Ví dụ: `Tuyển sinh 2026 site:moet.gov.vn` hoặc `site:edu.vn`.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Toán tử', 'Cú pháp mẫu', 'Ý nghĩa kết quả'],
          rows: [
            ['Dấu ngoặc kép `""`', '"Chương trình GDPT 2018"', 'Bắt buộc các từ phải đứng cạnh nhau đúng thứ tự'],
            ['Dấu trừ `-`', 'Python cơ bản -youtube', 'Tìm tài liệu Python nhưng loại bỏ kết quả từ trang YouTube'],
            ['`filetype:`', 'De thi Tin hoc 11 filetype:pdf', 'Chỉ tải về các tệp tài liệu định dạng PDF'],
            ['`site:`', 'Huong dan on tap site:edu.vn', 'Chỉ tìm trong các trang web giáo dục Việt Nam (.edu.vn)']
          ]
        },
        emCanNho: [
          'Dấu ngoặc kép `""` tìm cụm từ chính xác tuyệt đối.',
          'Dấu trừ `-` loại trừ kết quả không mong muốn.',
          'Dùng `filetype:pdf` tìm sách/tài liệu; dùng `site:edu.vn` tìm nguồn tin giáo dục tin cậy.'
        ]
      },
      {
        id: 'tab_11_7_2',
        title: '2. Đánh giá độ tin cậy và trích dẫn thông tin số',
        subtitle: 'Bộ lọc thông thái trước ma trận tin giả trên Internet',
        iconName: 'ShieldCheck',
        keyPoints: [
          'Nguyên tắc đánh giá độ tin cậy nguồn tin (Tiêu chí CRAAP):',
          '  - Tính cập nhật (Currency): Ngày đăng bài là khi nào, tài liệu có bị lỗi thời không?',
          '  - Tính phù hợp (Relevance): Nội dung có đúng trọng tâm bài toán cần tìm?',
          '  - Cơ quan tác giả (Authority): Ai viết bài này? Là chuyên gia, trường đại học (.edu) hay trang web cá nhân vô danh?',
          '  - Độ chính xác (Accuracy): Thông tin có dẫn chứng số liệu, có trích dẫn khoa học kiểm chứng được không?',
          '  - Mục đích (Purpose): Bài viết nhằm mục đích cung cấp tri thức hay nhằm quảng cáo bán hàng, định hướng dư luận?',
          'Văn hóa trích dẫn: Khi sử dụng số liệu, hình ảnh, văn bản trong bài tập, bắt buộc phải ghi rõ: Tên tác giả, Tên bài viết, Tên trang web và Ngày truy cập.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Kiểm tra Tác giả & Tên miền', desc: 'Ưu tiên các tên miền .gov.vn, .edu.vn, các tổ chức uy tín' },
            { label: '2. Đối chiếu Đa nguồn', desc: 'So sánh thông tin trên ít nhất 2 nguồn tin độc lập' },
            { label: '3. Trích dẫn Nguồn gốc', desc: 'Ghi rõ link và tác giả ở cuối bài thuyết trình' }
          ]
        },
        emCanNho: [
          'Luôn kiểm tra tác giả, tính cập nhật và mục đích của trang web trước khi tin tưởng.',
          'Ưu tiên tài nguyên từ các cơ quan chính phủ (.gov.vn) và viện trường (.edu.vn).',
          'Luôn trích dẫn nguồn gốc tài liệu để thể hiện sự trung thực trong nghiên cứu khoa học.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Toán tử Tìm kiếm và Mục tiêu Tra cứu',
      instruction: 'Nối câu lệnh tìm kiếm với mục tiêu tương ứng:',
      matchingPairs: [
        { id: 'sr1', left: 'site:taphuan.nxbgd.vn', right: 'Chỉ tìm tài liệu trên cổng tập huấn của NXB Giáo dục' },
        { id: 'sr2', left: 'filetype:pdf', right: 'Chỉ tải các tệp tài liệu sách điện tử hoặc đề thi dạng PDF' },
        { id: 'sr3', left: '"Cơ sở dữ liệu quan hệ"', right: 'Tìm chính xác cụm từ 5 chữ này đứng liền nhau' },
        { id: 'sr4', left: 'Tin học 11 -quangcao', right: 'Tìm kiến thức Tin 11 và loại bỏ các bài viết chứa chữ quangcao' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để tìm kiếm chính xác cụm từ "Hệ cơ sở dữ liệu" mà không bị các từ ngữ đứng rời rạc nhau, bạn sử dụng cú pháp nào?',
        options: ['"Hệ cơ sở dữ liệu"', '[Hệ cơ sở dữ liệu]', 'Hệ + cơ + sở + dữ + liệu', 'find: Hệ cơ sở dữ liệu'],
        correctIndex: 0,
        explanation: 'Cặp dấu ngoặc kép "" yêu cầu Google tìm kiếm đúng nguyên văn thứ tự cụm từ.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Muốn tải slide bài giảng PowerPoint về bài học "Mạng máy tính", cú pháp tìm kiếm nào sau đây là TỐI ƯU NHẤT?',
        options: [
          '"Mạng máy tính" filetype:pptx',
          'Mạng máy tính làm ơn cho xin file',
          'Mạng máy tính download full crack',
          'PPTX Mạng máy tính'
        ],
        correctIndex: 0,
        explanation: 'filetype:pptx giới hạn chỉ trả về các tệp trình chiếu PowerPoint.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tên miền nào sau đây thường có độ tin cậy cao nhất khi tìm kiếm tài liệu học tập và số liệu thống kê tại Việt Nam?',
        options: ['.gov.vn (Cơ quan chính phủ) và .edu.vn (Giáo dục đại học/trường học)', '.xyz', '.biz', '.club'],
        correctIndex: 0,
        explanation: 'Tên miền .gov.vn và .edu.vn được Bộ Thông tin & Truyền thông cấp phép nghiêm ngặt cho các tổ chức nhà nước và giáo dục.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Ý nghĩa của dấu trừ (-) trong câu lệnh tìm kiếm: "virus -corona" là gì?',
        options: [
          'Tìm các kết quả về virus nhưng loại trừ tất cả các trang có nhắc đến từ corona',
          'Lấy từ virus trừ đi từ corona',
          'Tìm virus corona gấp 2 lần',
          'Báo lỗi không tìm được'
        ],
        correctIndex: 0,
        explanation: 'Toán tử dấu trừ loại bỏ triệt để các kết quả chứa từ khóa đi liền ngay sau nó.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Khi sử dụng một đoạn văn hoặc bức ảnh từ trang web khác đưa vào bài báo cáo thuyết trình của nhóm, hành động nào sau đây là ĐÚNG ĐẠO ĐỨC?',
        options: [
          'Ghi rõ tên tác giả hoặc nguồn đường link website tham khảo ở phần tài liệu tham khảo',
          'Tự nhận là do chính mình tự chụp và tự viết',
          'Cắt bỏ chữ ký của tác giả gốc',
          'Bảo bạn bè giữ bí mật'
        ],
        correctIndex: 0,
        explanation: 'Trích dẫn nguồn minh bạch là yêu cầu bắt buộc thể hiện đạo đức học thuật và tôn trọng sở hữu trí tuệ.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Truy Tìm Kho Báu Tri Thức: Thu Thập Tài Liệu Chuyên Đề CSDL',
        context: 'Lớp chuẩn bị bước vào Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu.',
        mission: 'Sử dụng toán tử nâng cao để thu thập bộ tài liệu chuẩn dạng PDF từ nguồn chính thống.',
        steps: [
          'Bước 1: Gõ lệnh: `"Hệ cơ sở dữ liệu" filetype:pdf site:edu.vn` để tìm giáo trình đại học.',
          'Bước 2: Gõ lệnh: `HeidiSQL tutorial filetype:pdf` để tìm hướng dẫn thực hành.',
          'Bước 3: Tải 2 tệp tài liệu hay nhất, ghi chép lại nguồn trích dẫn: Tên tác giả, Đơn vị xuất bản, Link tải.'
        ],
        outputRequirement: 'Thư mục chứa 2 tệp PDF học liệu chuẩn kèm file ghi chú trích dẫn nguồn.',
        practicalTip: 'Kết hợp nhiều toán tử cùng lúc (ví dụ vừa `""` vừa `filetype:` vừa `site:`) sẽ thu hẹp kết quả về dưới 50 trang web tinh túy nhất.'
      },
      mindmap: {
        id: 'mm_11_7',
        label: 'TÌM KIẾM NÂNG CAO',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_7_1',
            label: 'Toán tử cốt lõi',
            children: [
              { id: 'mm_11_7_1_1', label: '"" Cụm từ chính xác' },
              { id: 'mm_11_7_1_2', label: '- Loại trừ từ khóa' },
              { id: 'mm_11_7_1_3', label: 'filetype:pdf, pptx' },
              { id: 'mm_11_7_1_4', label: 'site:edu.vn, gov.vn' }
            ]
          },
          {
            id: 'mm_11_7_2',
            label: 'Đánh giá & Trích dẫn',
            children: [
              { id: 'mm_11_7_2_1', label: 'Tiêu chí CRAAP thẩm định' },
              { id: 'mm_11_7_2_2', label: 'Kiểm tra tên miền tác giả' },
              { id: 'mm_11_7_2_3', label: 'Trích dẫn nguồn trung thực' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Thám Tử Tìm Kiếm Số 11',
      badgeIcon: 'Search',
      roleTitle: 'Chuyên Viên Phân Tích Thông Tin Trực Tuyến',
      congratsMessage: 'Xuất sắc! Bạn đã nắm trọn các toán tử tìm kiếm chuyên nghiệp và phương pháp thẩm định tin tức khoa học.',
      skillsUnlocked: ['Toán tử filetype: & site:', 'Toán tử cụm từ "" và loại trừ -', 'Kỹ năng thẩm định tin giả CRAAP']
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
      tagline: 'Văn hóa giao tiếp thời đại số: Nghi thức email công sở và bảo vệ quyền riêng tư mạng xã hội',
      description: 'Làm chủ quy chuẩn viết thư điện tử chuyên nghiệp: phân biệt To, CC, BCC, tạo chữ ký số (Signature); thiết lập xác thực 2 bước (2FA) và bảo vệ an toàn thông tin cá nhân trên mạng xã hội.',
      accentColor: 'from-indigo-600 to-violet-600',
      keyHighlights: ['Phân biệt To, CC và BCC', 'Chữ ký email chuyên nghiệp', 'Bảo mật 2 lớp 2FA']
    },
    objectives: [
      {
        id: 'obj_11_8_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nghi thức thư điện tử & cơ chế 2FA',
        description: 'Phân biệt được chức năng của các trường người nhận To, CC, BCC trong email và hiểu nguyên lý hoạt động của xác thực hai yếu tố (2FA).',
        iconName: 'Mail'
      },
      {
        id: 'obj_11_8_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Soạn email chuẩn mực & bảo mật tài khoản',
        description: 'Soạn thảo được bức thư điện tử chuẩn nghi thức công sở (có tiêu đề ngắn gọn, nội dung lịch sự, chữ ký Signature) và kích hoạt thành công 2FA trên tài khoản cá nhân.',
        iconName: 'Shield'
      },
      {
        id: 'obj_11_8_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Văn hóa giao tiếp & tôn trọng quyền riêng tư',
        description: 'Ứng xử văn minh trên mạng xã hội, không gửi thư rác (Spam) và có ý thức bảo vệ danh tính, quyền riêng tư của người khác khi chia sẻ ảnh.',
        iconName: 'Heart'
      }
    ],
    warmup: {
      title: 'Tình huống: Gửi email cho 50 bạn nhưng bị lộ toàn bộ danh sách địa chỉ mail',
      scenario: 'Bạn là bí thư chi đoàn gửi thông báo hoạt động cắm trại cho 50 bạn trong khối. Do sơ suất điền toàn bộ 50 địa chỉ vào ô "To", tất cả mọi người đều nhìn thấy địa chỉ email cá nhân của nhau, dẫn đến nhiều bạn bị kẻ xấu gửi thư rác quấy rối.',
      pollQuestion: 'Khi gửi thư cho nhiều người mà muốn BẢO MẬT danh tính, không để người nhận biết bạn đã gửi cho những ai khác, bạn BẮT BUỘC phải dùng ô nào?',
      pollOptions: [
        { id: 'p11_8_1', text: 'Ô BCC (Blind Carbon Copy - Gửi bản sao ẩn danh)', votesPercent: 94, isPopular: true, insight: 'Chính xác! BCC giấu kín toàn bộ danh sách email của những người nhận khác để bảo vệ quyền riêng tư.' },
        { id: 'p11_8_2', text: 'Ô CC (Carbon Copy)', votesPercent: 4, insight: 'CC vẫn hiển thị công khai toàn bộ danh sách email cho tất cả người nhận cùng thấy.' },
        { id: 'p11_8_3', text: 'Ô To (Người nhận chính)', votesPercent: 2, insight: 'To hiển thị công khai toàn bộ danh sách email.' }
      ],
      reflection: 'Phân biệt rành mạch To, CC và BCC là kỹ năng giao tiếp công sở tối thiểu của mọi công dân số chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_8_1',
        title: '1. Soạn thảo thư điện tử chuyên nghiệp (To, CC, BCC, Signature)',
        subtitle: 'Quy chuẩn nghi thức thư từ điện tử trong học tập và công việc',
        iconName: 'Mail',
        keyPoints: [
          'Trường người nhận trong Email:',
          '  - To (Người nhận chính): Người có trách nhiệm trực tiếp đọc, xử lý và phản hồi nội dung bức thư.',
          '  - CC (Carbon Copy - Đồng kính gửi): Những người cần theo dõi, nắm bắt thông tin nhưng không bắt buộc phải trả lời. Mọi người đều thấy địa chỉ email của nhau.',
          '  - BCC (Blind Carbon Copy - Gửi bản sao ẩn): Những người nhận được bản sao nhưng địa chỉ email của họ hoàn toàn được ẩn giấu trước tất cả những người khác trong ô To và CC.',
          'Tiêu đề thư (Subject): Ngắn gọn, súc tích, tóm tắt chính xác nội dung thư (ví dụ: `[11A1] - Nộp bài thu hoạch Tin học 11 - Nguyễn Văn A`). Tuyệt đối không để trống tiêu đề.',
          'Chữ ký thư điện tử (Email Signature): Tự động đính kèm ở cuối mỗi bức thư, bao gồm: Họ tên, Chức vụ/Lớp học, Số điện thoại liên hệ, Trường học/Tổ chức.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Trường', 'Mục đích sử dụng', 'Mức độ công khai danh tính'],
          rows: [
            ['To', 'Người nhận trực tiếp chịu trách nhiệm thực thi', 'Công khai cho tất cả mọi người thấy'],
            ['CC (Carbon Copy)', 'Gửi kèm cho người liên quan để nắm thông tin', 'Công khai cho tất cả mọi người thấy'],
            ['BCC (Blind CC)', 'Gửi cho danh sách đông người, bảo vệ quyền riêng tư', 'Bí mật tuyệt đối, không ai biết danh sách BCC']
          ]
        },
        emCanNho: [
          'To dành cho người xử lý chính; CC dành cho người cùng theo dõi.',
          'BCC dùng khi gửi thư hàng loạt để giấu địa chỉ email người khác, bảo vệ riêng tư.',
          'Luôn viết Tiêu đề thư (Subject) rõ ràng và cài đặt Chữ ký email (Signature) chuyên nghiệp.'
        ]
      },
      {
        id: 'tab_11_8_2',
        title: '2. Thiết lập bảo mật tài khoản và quyền riêng tư (2FA)',
        subtitle: 'Pháo đài bảo vệ tài khoản số trước các cuộc tấn công đánh cắp mật khẩu',
        iconName: 'Shield',
        keyPoints: [
          'Xác thực hai yếu tố (2FA - Two-Factor Authentication): Cơ chế bảo mật yêu cầu 2 bằng chứng xác minh danh tính:',
          '  - Yếu tố 1: Thứ bạn biết (Mật khẩu password).',
          '  - Yếu tố 2: Thứ bạn sở hữu (Mã OTP gửi về điện thoại, ứng dụng Google Authenticator, hoặc khóa bảo mật vật lý USB).',
          'Dù tin tặc có dò được mật khẩu của bạn, chúng vẫn không thể đăng nhập nếu không có mã xác minh yếu tố thứ hai.',
          'Bảo vệ quyền riêng tư trên Mạng xã hội:',
          '  - Không đăng tải công khai căn cước công dân, vé máy bay, vị trí định vị nhà riêng.',
          '  - Thiết lập chế độ hiển thị bài viết "Chỉ bạn bè" thay vì "Công khai" (Public).',
          '  - Cảnh giác trước các ứng dụng vui, bói toán đòi cấp quyền truy cập danh bạ và tin nhắn.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bước 1: Nhập Mật Khẩu', desc: 'Mật khẩu mạnh gồm chữ hoa, số, ký tự đặc biệt' },
            { label: 'Bước 2: Xác thực 2FA', desc: 'Mã số 6 chữ số thay đổi mỗi 30 giây từ ứng dụng xác thực' },
            { label: 'Đăng nhập thành công', desc: 'Tài khoản được bảo vệ tuyệt đối an toàn' }
          ]
        },
        emCanNho: [
          'Luôn kích hoạt xác thực hai bước (2FA) cho email và mạng xã hội.',
          '2FA bảo vệ tài khoản an toàn ngay cả khi mật khẩu bị lộ.',
          'Không chia sẻ thông tin cá nhân nhạy cảm công khai trên mạng xã hội.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Khái niệm Email & Bảo mật với Vai trò',
      instruction: 'Nối khái niệm với vai trò chính xác:',
      matchingPairs: [
        { id: 'em1', left: 'Trường BCC trong Email', right: 'Giấu kín địa chỉ người nhận khi gửi thư cho nhiều người' },
        { id: 'em2', left: 'Chữ ký email (Signature)', right: 'Tự động đính kèm thông tin liên hệ và chức danh ở cuối thư' },
        { id: 'em3', left: 'Xác thực hai bước (2FA)', right: 'Lớp bảo vệ thứ 2 qua mã OTP điện thoại chống mất tài khoản' },
        { id: 'em4', left: 'Trường CC trong Email', right: 'Gửi bản sao công khai cho người liên quan để nắm thông tin' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Khi gửi thư điện tử cho một danh sách 40 bạn cùng lớp, tại sao bạn NÊN đặt các địa chỉ email vào ô BCC thay vì ô To hay CC?',
        options: [
          'Để bảo vệ quyền riêng tư, tránh làm lộ địa chỉ email của các bạn cho những người khác thấy',
          'Vì ô BCC làm email gửi đi nhanh hơn',
          'Vì ô BCC cho phép gửi kèm tệp nặng 100GB',
          'Vì ô To chỉ cho phép gửi tối đa 1 người'
        ],
        correctIndex: 0,
        explanation: 'BCC ẩn danh toàn bộ người nhận với nhau, ngăn ngừa việc rò rỉ thông tin cá nhân và tin nhắn rác.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Thành phần nào sau đây là KHÔNG THỂ THIẾU và bắt buộc phải viết rõ ràng, súc tích khi gửi thư điện tử học tập, công việc?',
        options: [
          'Dòng Tiêu đề thư (Subject)',
          'Một bức ảnh đại diện đẹp',
          'Lời chúc mừng sinh nhật',
          'Icon nhãn dán vui nhộn'
        ],
        correctIndex: 0,
        explanation: 'Tiêu đề thư giúp người nhận biết ngay thư nói về việc gì trước khi quyết định mở đọc.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Xác thực hai yếu tố (2FA) bảo vệ tài khoản của bạn như thế nào khi một kẻ xấu đã biết được mật khẩu của bạn?',
        options: [
          'Kẻ xấu vẫn bị chặn lại vì không có mã xác minh thứ hai gửi về điện thoại di động hoặc ứng dụng xác thực của bạn',
          '2FA sẽ tự động phát chuông báo động ở nhà bạn',
          '2FA sẽ xóa sạch toàn bộ máy tính của kẻ xấu',
          '2FA không có tác dụng gì khi đã lộ mật khẩu'
        ],
        correctIndex: 0,
        explanation: 'Dù biết mật khẩu, kẻ xấu thiếu thiết bị vật lý giữ mã OTP nên hoàn toàn không thể đăng nhập.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Hành vi nào sau đây trên mạng xã hội là TIỀM ẨN NGUY CƠ mất an toàn thông tin cá nhân cao nhất?',
        options: [
          'Chụp ảnh công khai Căn cước công dân hoặc Thẻ lên máy bay (Boarding Pass) đăng lên mạng xã hội',
          'Nhắn tin hỏi thăm bài tập với bạn cùng lớp',
          'Đổi ảnh đại diện chụp phong cảnh',
          'Xem video bài giảng môn Tin học'
        ],
        correctIndex: 0,
        explanation: 'CCCD và vé máy bay chứa mã vạch, số định danh, ngày sinh giúp kẻ xấu mạo danh lừa đảo tài chính.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Một chữ ký email (Email Signature) chuyên nghiệp thường bao gồm những thông tin nào sau đây?',
        options: [
          'Họ và tên, Đơn vị/Lớp học, Số điện thoại liên hệ và Chức danh/Nhiệm vụ',
          'Mật khẩu tài khoản email',
          'Số dư tài khoản ngân hàng',
          'Toàn bộ danh bạ bạn bè'
        ],
        correctIndex: 0,
        explanation: 'Chữ ký email cung cấp danh tính và phương thức liên hệ chính thức cho người đọc.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thiết Lập Bộ Nhận Diện Email & Bật Lá Chắn Bảo Mật 2FA',
        context: 'Học sinh chuẩn bị bước vào giai đoạn nộp hồ sơ xét tuyển và liên lạc học thuật qua email.',
        mission: 'Soạn thảo chữ ký email chuẩn mực trong Gmail và kích hoạt bảo mật 2 lớp 2FA.',
        steps: [
          'Bước 1: Mở Gmail -> Cài đặt (Settings) -> Kéo xuống mục `Chữ ký (Signature)`.',
          'Bước 2: Soạn chữ ký định dạng chuẩn: Họ tên in đậm, Lớp, Trường, Số điện thoại và liên kết trang cá nhân.',
          'Bước 3: Mở Cài đặt tài khoản Google -> Mục `Bảo mật` -> Bật `Xác minh 2 bước (2-Step Verification)`.',
          'Bước 4: Soạn một bức thư thử nghiệm gửi cho giáo viên: Tiêu đề rõ ràng, dùng trường To/CC chuẩn xác.'
        ],
        outputRequirement: 'Ảnh chụp màn hình thông báo "Xác minh 2 bước đang BẬT" và bức thư có chữ ký chuyên nghiệp.',
        practicalTip: 'Tải ứng dụng Google Authenticator trên điện thoại để lấy mã 2FA nhanh chóng ngay cả khi không có sóng di động SMS.'
      },
      mindmap: {
        id: 'mm_11_8',
        label: 'EMAIL & MẠNG XÃ HỘI',
        color: '#6366f1',
        children: [
          {
            id: 'mm_11_8_1',
            label: 'Nghi thức Email',
            children: [
              { id: 'mm_11_8_1_1', label: 'To: Người nhận chính' },
              { id: 'mm_11_8_1_2', label: 'CC: Đồng kính gửi' },
              { id: 'mm_11_8_1_3', label: 'BCC: Ẩn danh bảo mật' },
              { id: 'mm_11_8_1_4', label: 'Tiêu đề & Chữ ký Signature' }
            ]
          },
          {
            id: 'mm_11_8_2',
            label: 'Bảo mật tài khoản',
            children: [
              { id: 'mm_11_8_2_1', label: 'Bật xác thực 2 bước (2FA)' },
              { id: 'mm_11_8_2_2', label: 'Quyền riêng tư mạng xã hội' },
              { id: 'mm_11_8_2_3', label: 'Không lộ thông tin CCCD/Vé' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Sứ Giả Giao Tiếp Số 11',
      badgeIcon: 'Mail',
      roleTitle: 'Chuyên Viên Truyền Thông & An Toàn Danh Tính',
      congratsMessage: 'Tuyệt vời! Bạn đã hoàn thành xuất sắc Chủ đề 2, làm chủ kỹ năng email công sở và trang bị lá chắn 2FA an toàn cho tài khoản cá nhân.',
      skillsUnlocked: ['Phân biệt To, CC, BCC', 'Thiết kế chữ ký email Signature', 'Kích hoạt bảo mật 2 lớp 2FA']
    }
  }
];
