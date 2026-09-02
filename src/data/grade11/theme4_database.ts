import { Lesson } from '../../types/lesson';

export const THEME4_LESSONS_11: Lesson[] = [
  // Bài 10: Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí
  {
    id: 10,
    code: 'TIN11_B10',
    title: 'Lưu trữ dữ liệu và khai thác thông tin phục vụ quản lí',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Quản lý dữ liệu',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Từ dữ liệu phân tán đến hệ thống thông tin quản lý tập trung',
      description: 'Khám phá bài toán quản lý thực tế (quản lý học sinh, quản lý thư viện, quản lý bệnh viện), các bất cập của việc lưu trữ thủ công hoặc trên tệp phẳng (File-based), và sự cần thiết của Cơ sở dữ liệu.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Bài toán quản lý thực tiễn', 'Nhược điểm của tệp phẳng', 'Khái niệm hệ thống thông tin']
    },
    objectives: [
      {
        id: 'obj_11_10_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu bài toán quản lý trong đời sống',
        description: 'Chỉ ra được các công việc quản lý quen thuộc: tạo lập hồ sơ, cập nhật dữ liệu và khai thác thông tin báo cáo.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_10_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích bất cập lưu trữ tệp rời rạc',
        description: 'Chỉ rõ hiện tượng dư thừa dữ liệu (Data Redundancy) và không nhất quán dữ liệu (Data Inconsistency) khi dùng tệp văn bản đơn lẻ.',
        iconName: 'AlertTriangle'
      },
      {
        id: 'obj_11_10_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tổ chức dữ liệu khoa học',
        description: 'Hình thành nhận thức về tầm quan trọng của việc chuẩn hóa và bảo mật dữ liệu quản lý trong cơ quan, trường học.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Quản lý điểm của 3000 học sinh trên sổ giấy',
      scenario: 'Một trường THPT có 3000 học sinh. Cuối năm học, thầy Hiệu trưởng yêu cầu: "Trong vòng 30 phút, hãy lập danh sách tất cả học sinh Khối 11 có điểm Tin học và Tiếng Anh từ 8.5 trở lên, xếp theo thứ tự giảm dần".',
      pollQuestion: 'Nếu sử dụng sổ sách ghi chép bằng giấy truyền thống, việc này có khả thi không?',
      pollOptions: [
        { id: 'p11_10_1', text: 'Hoàn toàn bất khả thi, phải mất nhiều ngày lật tìm thủ công từng trang sổ', votesPercent: 92, isPopular: true, insight: 'Chính xác! Lưu trữ thủ công không thể đáp ứng nhu cầu tìm kiếm, thống kê và báo cáo tức thì của thời đại số.' },
        { id: 'p11_10_2', text: 'Chỉ mất 5 giây lật sổ là xong', votesPercent: 3, insight: 'Lật 3000 trang sổ thủ công bằng mắt người không thể làm trong 5 giây.' },
        { id: 'p11_10_3', text: 'Không cần làm báo cáo', votesPercent: 5, insight: 'Báo cáo quản lý là yêu cầu bắt buộc của mọi tổ chức giáo dục.' }
      ],
      reflection: 'Bài toán quản lý với khối lượng dữ liệu khổng lồ chính là động lực khai sinh ra ngành Cơ sở dữ liệu hiện đại.'
    },
    knowledge: [
      {
        id: 'tab_11_10_1',
        title: '1. Bài Toán Quản Lý & Nhược Điểm của Tệp Phẳng',
        subtitle: 'Sự cần thiết của hệ thống quản lý cơ sở dữ liệu tập trung',
        iconName: 'Table',
        keyPoints: [
          'Các thao tác quản lý cơ bản: Tạo lập dữ liệu mới, Cập nhật dữ liệu (chỉnh sửa, bổ sung, xóa bỏ) và Khai thác thông tin (tìm kiếm, sắp xếp, kết xuất báo cáo thống kê).',
          'Nhược điểm lớn của việc lưu trữ trên các tệp rời rạc (như Word, Excel riêng lẻ):',
          '- Dư thừa dữ liệu (Data Redundancy): Cùng một thông tin học sinh bị gõ lặp lại ở nhiều file khác nhau.',
          '- Không nhất quán dữ liệu (Data Inconsistency): Sửa số điện thoại ở file này nhưng quên sửa ở file kia.',
          '- Khó chia sẻ đồng thời và khó đảm bảo an toàn, phân quyền bảo mật.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Thu thập & Tạo lập', desc: 'Nhập hồ sơ học sinh, giáo viên, điểm số' },
            { label: '2. Cập nhật thường xuyên', desc: 'Sửa thông tin khi có thay đổi, xóa bản ghi cũ' },
            { label: '3. Khai thác báo cáo', desc: 'Tìm kiếm, lọc danh sách, in bảng tổng kết' }
          ]
        },
        emCanNho: [
          'Các công việc quản lý chính: Tạo lập hồ sơ, Cập nhật dữ liệu, Khai thác thông tin.',
          'Lưu trữ tệp rời rạc gây dư thừa dữ liệu và không nhất quán thông tin.',
          'Hệ CSDL ra đời để lưu trữ tập trung, chia sẻ dùng chung và đảm bảo tính toàn vẹn dữ liệu.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Nhược điểm Tệp phẳng và Hậu quả',
      instruction: 'Nối nhược điểm của quản lý tệp rời rạc với hệ quả tương ứng:',
      matchingPairs: [
        { id: 'f1', left: 'Dư thừa dữ liệu (Redundancy)', right: 'Tốn dung lượng nhớ và lãng phí công sức nhập liệu lặp lại' },
        { id: 'f2', left: 'Không nhất quán dữ liệu', right: 'Cùng một học sinh nhưng các phòng ban lưu địa chỉ khác nhau' },
        { id: 'f3', left: 'Khó chia sẻ dùng chung', right: 'Khi một người đang mở file thì người khác bị khóa không vào được' },
        { id: 'f4', left: 'Kém an toàn bảo mật', right: 'Khó phân quyền chi tiết cho từng cột dữ liệu nhạy cảm' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Công việc nào sau đây thuộc nhóm thao tác "Khai thác thông tin" trong bài toán quản lý?',
        options: [
          'Tìm kiếm danh sách học sinh đạt giải học sinh giỏi và xuất báo cáo khen thưởng',
          'Nhập tên học sinh mới chuyển đến vào sổ',
          'Sửa lại ngày sinh của học sinh do bị ghi nhầm',
          'Xóa tên học sinh đã tốt nghiệp'
        ],
        correctIndex: 0,
        explanation: 'Tìm kiếm, sắp xếp, lọc dữ liệu và kết xuất báo cáo là các thao tác khai thác thông tin.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Hiện tượng "Không nhất quán dữ liệu" (Data Inconsistency) xảy ra khi nào?',
        options: [
          'Khi cùng một thông tin thực tế nhưng lại hiển thị các giá trị mâu thuẫn nhau ở các nơi lưu trữ khác nhau',
          'Khi tất cả các máy tính cùng hiển thị một con số giống hệt nhau',
          'Khi máy tính bị mất kết nối mạng',
          'Khi phần mềm chạy quá nhanh'
        ],
        correctIndex: 0,
        explanation: 'Không nhất quán xảy ra khi sửa dữ liệu ở một file mà không đồng bộ ở các file còn lại, gây sai lệch thông tin.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Thao tác nào sau đây thuộc nhóm "Cập nhật dữ liệu"?',
        options: ['Sửa đổi số điện thoại của phụ huynh học sinh khi có thay đổi', 'In danh sách bảng điểm', 'Xem thời khóa biểu', 'Đếm số lượng học sinh trong trường'],
        correctIndex: 0,
        explanation: 'Cập nhật dữ liệu bao gồm: thêm mới bản ghi, sửa đổi dữ liệu và xóa dữ liệu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Mục đích cốt lõi của việc chuyển đổi từ sổ sách giấy sang hệ thống cơ sở dữ liệu số là gì?',
        options: [
          'Giúp tìm kiếm tức thì, chia sẻ dữ liệu dùng chung, loại bỏ dư thừa và tăng năng suất quản lý',
          'Để máy tính nhanh bị hỏng',
          'Để không ai có thể đọc được dữ liệu',
          'Để tốn tiền mua máy tính'
        ],
        correctIndex: 0,
        explanation: 'Hệ thống CSDL giúp tối ưu hóa thời gian xử lý và đảm bảo dữ liệu luôn chính xác, nhất quán.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Một hệ thống thông tin quản lý trong bệnh viện cần lưu trữ đối tượng nào sau đây?',
        options: ['Bệnh nhân, bác sĩ, bệnh án, thuốc và lịch khám', 'Thời tiết ngoài trời', 'Danh sách bài hát karaoke', 'Giá vàng thế giới'],
        correctIndex: 0,
        explanation: 'Hệ thống quản lý bệnh viện phục vụ công tác điều trị, quản lý hồ sơ bệnh án và lịch trực y tế.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Khảo sát: Bài toán Quản lý Thư viện Trường THPT',
        context: 'Phân tích các đối tượng và quy trình quản lý sách và mượn trả tại thư viện trường.',
        mission: 'Xác định các thông tin cần quản lý và các thao tác cập nhật, khai thác cơ bản.',
        steps: [
          'Bước 1: Liệt kê các đối tượng cần quản lý: Bạn đọc (Học sinh/Giáo viên), Sách, Phiếu mượn trả.',
          'Bước 2: Nêu 3 thao tác cập nhật thường xuyên (Thêm sách mới, Ghi nhận mượn, Ghi nhận trả).',
          'Bước 3: Nêu 2 câu hỏi khai thác thông tin mà thủ thư cần tra cứu hàng tuần.'
        ],
        outputRequirement: 'Bản mô tả bài toán quản lý thư viện trường học ngắn gọn, khoa học.',
        practicalTip: 'Mỗi cuốn sách cần có một "Mã sách" duy nhất để phân biệt, không thể chỉ quản lý bằng tên sách vì có thể có nhiều cuốn cùng tên.'
      },
      mindmap: {
        id: 'mm_11_10',
        label: 'QUẢN LÝ DỮ LIỆU',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_10_1',
            label: 'Nhiệm vụ quản lý',
            children: [
              { id: 'mm_11_10_1_1', label: 'Tạo lập hồ sơ ban đầu' },
              { id: 'mm_11_10_1_2', label: 'Cập nhật (Thêm/Sửa/Xóa)' },
              { id: 'mm_11_10_1_3', label: 'Khai thác (Tìm/Lọc/Báo cáo)' }
            ]
          },
          {
            id: 'mm_11_10_2',
            label: 'Hạn chế của tệp phẳng',
            children: [
              { id: 'mm_11_10_2_1', label: 'Dư thừa dữ liệu' },
              { id: 'mm_11_10_2_2', label: 'Không nhất quán' },
              { id: 'mm_11_10_2_3', label: 'Khó phân quyền bảo mật' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Phân Tích Quản Lý 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Phân Tích Bài Toán Quản Lý',
      congratsMessage: 'Tuyệt vời! Bạn đã hiểu rõ bản chất bài toán quản lý và lý do cần có hệ thống CSDL tập trung.',
      skillsUnlocked: ['Phân tích bài toán quản lý', 'Nhận diện dư thừa & không nhất quán', 'Tư duy tổ chức dữ liệu']
    }
  },

  // Bài 11: Cơ sở dữ liệu
  {
    id: 11,
    code: 'TIN11_B11',
    title: 'Cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Cơ sở dữ liệu',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khái niệm nền tảng: Bộ sưu tập dữ liệu có cấu trúc phục vụ thời đại số',
      description: 'Định nghĩa khoa học về Cơ sở dữ liệu (Database), các đặc tính then chốt: tính toàn vẹn, tính độc lập dữ liệu, tính nhất quán và khả năng chia sẻ đồng thời nhiều người dùng.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Định nghĩa Cơ sở dữ liệu', 'Tính toàn vẹn & Nhất quán', 'Tính độc lập dữ liệu']
    },
    objectives: [
      {
        id: 'obj_11_11_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm Cơ sở dữ liệu (CSDL)',
        description: 'Phát biểu được định nghĩa CSDL là tập hợp các dữ liệu có liên quan với nhau, được tổ chức có cấu trúc và lưu trữ trên bộ nhớ máy tính.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_11_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích các đặc trưng của CSDL',
        description: 'Giải thích được các đặc tính cơ bản: tính độc lập dữ liệu (logic/vật lý), tính toàn vẹn dữ liệu, tính không dư thừa và tính bảo mật.',
        iconName: 'CheckCircle2'
      },
      {
        id: 'obj_11_11_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo vệ tính đúng đắn của dữ liệu',
        description: 'Tôn trọng các ràng buộc dữ liệu (ví dụ: điểm số phải từ 0 đến 10, ngày sinh phải hợp lệ).',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Đặt vé máy bay trực tuyến cùng một lúc',
      scenario: 'Chuyến bay chỉ còn đúng 1 chiếc ghế trống duy nhất. Cùng lúc đó, tại Hà Nội và TP.HCM có 2 hành khách đang cùng bấm nút "Xác nhận đặt vé" trên ứng dụng điện thoại.',
      pollQuestion: 'Hệ thống Cơ sở dữ liệu xử lý tình huống này như thế nào để không bị bán trùng 1 ghế cho 2 người?',
      pollOptions: [
        { id: 'p11_11_1', text: 'Sử dụng cơ chế khóa giao dịch (Transaction Lock), chỉ người bấm trước micro-giây mua được, người kia nhận thông báo hết vé', votesPercent: 91, isPopular: true, insight: 'Chính xác! Tính toàn vẹn và nhất quán của CSDL đảm bảo xử lý đồng thời an toàn tuyệt đối.' },
        { id: 'p11_11_2', text: 'Bán vé cho cả 2 người rồi cho 2 người ngồi chung 1 ghế', votesPercent: 4, insight: 'Hàng không không bao giờ cho phép 2 hành khách ngồi chung một ghế.' },
        { id: 'p11_11_3', text: 'Tắt máy chủ không bán cho ai', votesPercent: 5, insight: 'Hệ thống bán vé phục vụ hàng triệu người liên tục 24/7.' }
      ],
      reflection: 'Khả năng kiểm soát truy cập đồng thời và duy trì tính toàn vẹn là sức mạnh vượt trội của Cơ sở dữ liệu.'
    },
    knowledge: [
      {
        id: 'tab_11_11_1',
        title: '1. Khái Niệm & Các Đặc Trưng của Cơ Sở Dữ Liệu',
        subtitle: 'Tập hợp dữ liệu có cấu trúc và có mối liên hệ logic',
        iconName: 'Layers',
        keyPoints: [
          'Định nghĩa: Cơ sở dữ liệu (Database - CSDL) là một tập hợp các dữ liệu có liên quan với nhau, được tổ chức có cấu trúc và được lưu trữ trên các thiết bị nhớ của máy tính nhằm đáp ứng nhu cầu khai thác của nhiều người dùng.',
          'Các đặc trưng căn bản của CSDL:',
          '- Tính không dư thừa: Giảm thiểu tối đa việc lặp lại thông tin.',
          '- Tính toàn vẹn (Integrity): Dữ liệu phải luôn thỏa mãn các quy tắc logic (ràng buộc miền giá trị, ràng buộc liên thuộc tính).',
          '- Tính nhất quán (Consistency): Dữ liệu luôn đồng nhất và đúng đắn sau mọi giao dịch.',
          '- Tính độc lập dữ liệu: Thay đổi cách lưu trữ vật lý không làm thay đổi các chương trình ứng dụng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tính toàn vẹn', desc: 'Điểm số từ 0 - 10, ngày sinh không được ở tương lai' },
            { label: 'Tính nhất quán', desc: 'Dữ liệu không mâu thuẫn giữa các bảng quan hệ' },
            { label: 'Tính độc lập', desc: 'Tách bạch giữa lưu trữ vật lý và logic ứng dụng' }
          ]
        },
        emCanNho: [
          'CSDL là tập hợp dữ liệu có cấu trúc, có mối liên hệ và được lưu trữ trên máy tính.',
          'CSDL đảm bảo tính toàn vẹn, tính nhất quán và khả năng dùng chung cho nhiều người.',
          'Ràng buộc toàn vẹn giúp loại bỏ dữ liệu sai lệch hoặc vô lý ngay khi nhập.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Ràng buộc toàn vẹn và Ví dụ kiểm tra',
      instruction: 'Nối tên loại ràng buộc toàn vẹn với ví dụ thực tế kiểm tra dữ liệu:',
      matchingPairs: [
        { id: 'b1', left: 'Ràng buộc miền giá trị', right: 'Điểm kiểm tra phải là số thực nằm trong đoạn [0, 10]' },
        { id: 'b2', left: 'Ràng buộc tính duy nhất', right: 'Số Căn cước công dân (CCCD) của mỗi người không được trùng nhau' },
        { id: 'b3', left: 'Ràng buộc logic liên thuộc tính', right: 'Ngày tốt nghiệp bắt buộc phải diễn ra SAU ngày nhập học' },
        { id: 'b4', left: 'Ràng buộc không được để trống (Not Null)', right: 'Mã số học sinh và Họ tên là thông tin bắt buộc phải nhập' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Cơ sở dữ liệu (CSDL) trong tin học được định nghĩa là gì?',
        options: [
          'Tập hợp các dữ liệu có liên quan với nhau, được tổ chức có cấu trúc và lưu trữ trên bộ nhớ máy tính để nhiều người dùng chung',
          'Một trang sách in trên giấy bóng',
          'Một chiếc đĩa DVD ca nhạc',
          'Dây cáp cắm nguồn điện'
        ],
        correctIndex: 0,
        explanation: 'CSDL là tập hợp dữ liệu có cấu trúc, có quan hệ logic và lưu trữ điện tử phục vụ khai thác chung.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Quy tắc: "Mỗi công dân Việt Nam chỉ có MỘT số Căn cước công dân duy nhất và không ai được trùng ai" thể hiện tính chất nào của CSDL?',
        options: ['Ràng buộc tính duy nhất (Unique / Khoá)', 'Tính chia sẻ mạng', 'Tính dễ đổi màu', 'Tính ngẫu nhiên'],
        correctIndex: 0,
        explanation: 'Ràng buộc duy nhất đảm bảo mỗi cá nhân/thực thể được phân biệt chính xác trong CSDL.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tại sao CSDL cần phải có "Tính độc lập dữ liệu"?',
        options: [
          'Để khi thay đổi cấu trúc lưu trữ trên ổ cứng thì không phải viết lại toàn bộ các chương trình ứng dụng',
          'Để máy tính có thể tự bay được',
          'Để không ai đọc được dữ liệu',
          'Để người dùng không cần bật màn hình'
        ],
        correctIndex: 0,
        explanation: 'Tính độc lập dữ liệu giúp tiết kiệm chi phí bảo trì và nâng cấp hệ thống phần mềm.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Dữ liệu nào sau đây là KHÔNG HỢP LỆ nếu áp dụng ràng buộc toàn vẹn cho trường "Tháng sinh"?',
        options: ['Tháng 13', 'Tháng 1', 'Tháng 6', 'Tháng 12'],
        correctIndex: 0,
        explanation: 'Một năm chỉ có 12 tháng, giá trị 13 vi phạm ràng buộc miền giá trị của tháng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Hệ thống CSDL phục vụ ứng dụng ngân hàng phải đảm bảo yêu cầu nào khắt khe nhất?',
        options: [
          'Tính an toàn, bảo mật và toàn vẹn giao dịch tài chính tuyệt đối 24/7',
          'Giao diện phải có nhiều hoạt hình vui nhộn',
          'Mỗi ngày tự đổi số dư tài khoản của khách hàng',
          'Không cho phép rút tiền'
        ],
        correctIndex: 0,
        explanation: 'CSDL ngân hàng đòi hỏi độ tin cậy và bảo mật cấp cao nhất để bảo vệ tài sản của khách hàng.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết kế Ràng buộc Toàn vẹn cho Bảng Quản lý Điểm',
        context: 'Lập danh sách các quy tắc kiểm tra tính đúng đắn khi nhập điểm kiểm tra của trường.',
        mission: 'Xác định ít nhất 3 ràng buộc toàn vẹn cho bảng `DIEM_SO`.',
        steps: [
          'Quy tắc 1 (Miền giá trị): Điểm số phải >= 0 và <= 10.',
          'Quy tắc 2 (Kiểu dữ liệu): Điểm số là số thực (Float) có tối đa 1 chữ số thập phân.',
          'Quy tắc 3 (Ràng buộc tham chiếu): Mã học sinh trong bảng điểm bắt buộc phải tồn tại trong bảng `HOC_SINH`.'
        ],
        outputRequirement: 'Bảng đặc tả các ràng buộc toàn vẹn bằng lời văn logic rõ ràng.',
        practicalTip: 'Cài đặt ràng buộc chặt chẽ ngay từ đầu sẽ giúp hệ thống ngăn chặn 99% lỗi do con người gõ nhầm.'
      },
      mindmap: {
        id: 'mm_11_11',
        label: 'CƠ SỞ DỮ LIỆU',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_11_1',
            label: 'Đặc trưng cốt lõi',
            children: [
              { id: 'mm_11_11_1_1', label: 'Cấu trúc & Mối quan hệ' },
              { id: 'mm_11_11_1_2', label: 'Lưu trữ trên máy tính' },
              { id: 'mm_11_11_1_3', label: 'Chia sẻ nhiều người dùng' }
            ]
          },
          {
            id: 'mm_11_11_2',
            label: 'Các tính chất',
            children: [
              { id: 'mm_11_11_2_1', label: 'Tính toàn vẹn (Integrity)' },
              { id: 'mm_11_11_2_2', label: 'Tính nhất quán (Consistency)' },
              { id: 'mm_11_11_2_3', label: 'Tính độc lập dữ liệu' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kiến Trúc Sư CSDL 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Thiết Kế Dữ Liệu Toàn Vẹn',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ các khái niệm và đặc tính cốt lõi của Cơ sở dữ liệu.',
      skillsUnlocked: ['Định nghĩa CSDL chuẩn', 'Thiết lập ràng buộc toàn vẹn', 'Phân tích tính nhất quán']
    }
  },

  // Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu
  {
    id: 12,
    code: 'TIN11_B12',
    title: 'Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Hệ QT CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Phần mềm trung tâm: Hệ quản trị cơ sở dữ liệu (DBMS) và Kiến trúc Hệ CSDL',
      description: 'Phân biệt CSDL (Dữ liệu) và Hệ quản trị CSDL (Phần mềm quản lý như MySQL, SQL Server, Oracle, Access); kiến trúc phân tầng của một Hệ CSDL hoàn chỉnh.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Phân biệt CSDL vs Hệ QTCSDL (DBMS)', 'Các hệ DBMS phổ biến', 'Kiến trúc Hệ cơ sở dữ liệu']
    },
    objectives: [
      {
        id: 'obj_11_12_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt CSDL và Hệ QT CSDL',
        description: 'Trình bày được sự khác nhau giữa CSDL (dữ liệu lưu trữ) và Hệ quản trị CSDL (phần mềm điều khiển CSDL).',
        iconName: 'Server'
      },
      {
        id: 'obj_11_12_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện các phần mềm DBMS',
        description: 'Kể tên và nhận biết được các hệ quản trị CSDL thông dụng trên thế giới: MySQL, Microsoft SQL Server, Oracle, PostgreSQL, Microsoft Access.',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_12_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Hiểu cấu trúc hệ thống',
        description: 'Nắm được vai trò tương hỗ giữa người dùng, phần mềm ứng dụng, hệ QTCSDL và hệ điều hành.',
        iconName: 'Network'
      }
    ],
    warmup: {
      title: 'Tình huống: Phân biệt "Tủ sách" và "Người quản thủ thư"',
      scenario: 'Một bạn học sinh thắc mắc: "Cơ sở dữ liệu (CSDL) và Hệ quản trị cơ sở dữ liệu (Hệ QT CSDL) có phải là một không?".',
      pollQuestion: 'Hình ảnh so sánh nào dưới đây giúp phân biệt rõ nét và chính xác nhất hai khái niệm này?',
      pollOptions: [
        { id: 'p11_12_1', text: 'CSDL là "Các cuốn sách được lưu", còn Hệ QTCSDL là "Phần mềm thủ thư quản lý, sắp xếp và cho mượn sách"', votesPercent: 93, isPopular: true, insight: 'Chính xác! CSDL là kho dữ liệu tĩnh, còn Hệ QT CSDL (DBMS) là phần mềm thông minh tương tác với dữ liệu đó.' },
        { id: 'p11_12_2', text: 'Hai khái niệm này hoàn toàn giống hệt nhau', votesPercent: 3, insight: 'Sai lầm phổ biến: Một bên là Dữ liệu (Database), một bên là Phần mềm quản trị (DBMS).' },
        { id: 'p11_12_3', text: 'CSDL là chuột máy tính, Hệ QTCSDL là bàn phím', votesPercent: 4, insight: 'Chuột và bàn phím là thiết bị ngoại vi phần cứng, không liên quan đến phần mềm CSDL.' }
      ],
      reflection: 'Phân biệt rạch ròi giữa Dữ liệu và Phần mềm quản trị là bước đầu tiên để hiểu kiến trúc phần mềm chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_12_1',
        title: '1. Khái Niệm Hệ Quản Trị CSDL (DBMS) & Kiến Trúc Hệ CSDL',
        subtitle: 'Cầu nối giữa ứng dụng và kho dữ liệu vật lý',
        iconName: 'Server',
        keyPoints: [
          'Hệ quản trị CSDL (Database Management System - DBMS): Là phần mềm cung cấp môi trường để tạo lập, lưu trữ, cập nhật, tìm kiếm và kiểm soát an toàn cho CSDL.',
          'Các chức năng chính của DBMS: Cung cấp ngôn ngữ định nghĩa dữ liệu (DDL), ngôn ngữ thao tác dữ liệu (DML), kiểm soát an toàn bảo mật, sao lưu và phục hồi.',
          'Hệ cơ sở dữ liệu (Database System): Bao gồm CSDL + Hệ QTCSDL + Các phần mềm ứng dụng + Người dùng + Phần cứng máy tính.',
          'Các DBMS nổi tiếng: MySQL (nguồn mở phổ biến nhất), Microsoft SQL Server (doanh nghiệp), Oracle (hệ thống lớn ngân hàng), PostgreSQL, Microsoft Access (cá nhân/học tập).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng & Ứng dụng', desc: 'Web học tập, App ngân hàng, Báo cáo viên' },
            { label: 'Hệ QT CSDL (DBMS)', desc: 'MySQL, SQL Server, Oracle (Xử lý truy vấn SQL)' },
            { label: 'Kho CSDL (Database)', desc: 'Các tệp dữ liệu vật lý lưu trên ổ cứng SSD' }
          ]
        },
        emCanNho: [
          'CSDL là tập hợp dữ liệu; Hệ QTCSDL (DBMS) là phần mềm để quản lý CSDL đó.',
          'Hệ CSDL = CSDL + Hệ QTCSDL + Phần mềm ứng dụng + Con người + Phần cứng.',
          'Các hệ QTCSDL tiêu biểu: MySQL, SQL Server, Oracle, PostgreSQL, MS Access.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Phần mềm DBMS và Đặc trưng',
      instruction: 'Nối tên Hệ QTCSDL với đặc trưng tương ứng:',
      matchingPairs: [
        { id: 'db1', left: 'MySQL', right: 'Hệ QTCSDL quan hệ mã nguồn mở phổ biến nhất cho website' },
        { id: 'db2', left: 'Microsoft SQL Server', right: 'Hệ QTCSDL mạnh mẽ của hãng Microsoft dùng cho doanh nghiệp' },
        { id: 'db3', left: 'Oracle Database', right: 'Hệ QTCSDL thương mại cao cấp dùng cho ngân hàng và viễn thông' },
        { id: 'db4', left: 'Microsoft Access', right: 'Hệ QTCSDL gọn nhẹ, dễ học, tích hợp sẵn trong bộ Microsoft Office' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phần mềm nào sau đây là một Hệ quản trị cơ sở dữ liệu (DBMS)?',
        options: ['MySQL', 'Photoshop', 'Windows Media Player', 'WinRAR'],
        correctIndex: 0,
        explanation: 'MySQL là một trong những hệ quản trị CSDL quan hệ phổ biến nhất thế giới.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Sự khác biệt cốt lõi giữa CSDL (Database) và Hệ quản trị CSDL (DBMS) là gì?',
        options: [
          'CSDL là tập hợp dữ liệu được lưu trữ, còn Hệ QTCSDL là phần mềm dùng để tương tác và quản trị dữ liệu đó',
          'CSDL là phần cứng, còn Hệ QTCSDL là màn hình máy tính',
          'Không có sự khác biệt nào',
          'Hệ QTCSDL chỉ dùng để vẽ tranh'
        ],
        correctIndex: 0,
        explanation: 'CSDL là kho dữ liệu (Data), còn DBMS là công cụ phần mềm điều khiển kho dữ liệu đó.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Một "Hệ cơ sở dữ liệu" hoàn chỉnh bao gồm những thành phần nào?',
        options: [
          'CSDL, Hệ quản trị CSDL, Phần mềm ứng dụng, Con người và Phần cứng máy tính',
          'Chỉ bao gồm một chiếc ổ cứng máy tính',
          'Chỉ bao gồm một tệp Word',
          'Chỉ bao gồm dây cáp mạng'
        ],
        correctIndex: 0,
        explanation: 'Hệ CSDL là một chỉnh thể hoàn chỉnh gồm dữ liệu, phần mềm quản lý, ứng dụng, con người và phần cứng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Chức năng "Ngôn ngữ định nghĩa dữ liệu" (DDL) của Hệ QTCSDL cho phép người dùng làm gì?',
        options: [
          'Khai báo cấu trúc các bảng, kiểu dữ liệu các trường và các ràng buộc toàn vẹn',
          'Gửi email cho bạn bè',
          'Nghe nhạc trực tuyến',
          'Chơi game 3D'
        ],
        correctIndex: 0,
        explanation: 'DDL (Data Definition Language) dùng để tạo lập cấu trúc CSDL và các bảng (lệnh CREATE TABLE, ALTER TABLE).',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Khi nhiều người dùng cùng truy cập và cập nhật CSDL cùng một lúc, Hệ QTCSDL đóng vai trò gì?',
        options: [
          'Điều phối và kiểm soát truy cập đồng thời để dữ liệu không bị xung đột, sai lệch',
          'Tự động tắt máy tính của tất cả mọi người',
          'Xóa toàn bộ dữ liệu để giải phóng ram',
          'Làm đơ hệ thống'
        ],
        correctIndex: 0,
        explanation: 'Khả năng kiểm soát đồng thời (Concurrency Control) giúp các giao dịch diễn ra an toàn, chính xác.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Khảo sát: Lựa chọn Hệ QTCSDL cho một Cửa hàng Trực tuyến',
        context: 'Một shop thời trang muốn xây dựng website bán hàng trực tuyến có giỏ hàng và quản lý kho hàng.',
        mission: 'So sánh và đề xuất Hệ QTCSDL phù hợp giữa MySQL và Microsoft Access.',
        steps: [
          'Bước 1: Phân tích ưu/nhược điểm của Microsoft Access (gọn nhẹ, nhưng chỉ hợp máy đơn lẻ ít người dùng).',
          'Bước 2: Phân tích ưu điểm của MySQL (nguồn mở, miễn phí, hỗ trợ hàng nghìn người truy cập cùng lúc qua Web).',
          'Bước 3: Đưa ra quyết định lựa chọn MySQL và giải thích lý do.'
        ],
        outputRequirement: 'Văn bản đề xuất lựa chọn công nghệ Hệ QTCSDL cho dự án web.',
        practicalTip: 'Đối với các hệ thống Web và App di động nhiều người dùng, luôn ưu tiên các hệ quản trị CSDL máy khách - máy chủ (Client/Server) như MySQL hoặc PostgreSQL.'
      },
      mindmap: {
        id: 'mm_11_12',
        label: 'HỆ QUẢN TRỊ CSDL (DBMS)',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_12_1',
            label: 'Vai trò & Chức năng',
            children: [
              { id: 'mm_11_12_1_1', label: 'Định nghĩa dữ liệu (DDL)' },
              { id: 'mm_11_12_1_2', label: 'Thao tác dữ liệu (DML)' },
              { id: 'mm_11_12_1_3', label: 'Kiểm soát an toàn & bảo mật' }
            ]
          },
          {
            id: 'mm_11_12_2',
            label: 'Các phần mềm phổ biến',
            children: [
              { id: 'mm_11_12_2_1', label: 'MySQL / PostgreSQL' },
              { id: 'mm_11_12_2_2', label: 'Microsoft SQL Server' },
              { id: 'mm_11_12_2_3', label: 'Oracle Database' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy DBMS 11',
      badgeIcon: 'Server',
      roleTitle: 'Chuyên Viên Quản Trị Phần Mềm Cơ Sở Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã phân biệt rõ ràng CSDL và Hệ QTCSDL cũng như cấu trúc của Hệ CSDL.',
      skillsUnlocked: ['Phân biệt CSDL vs DBMS', 'Nhận diện các phần mềm DBMS', 'Hiểu kiến trúc Hệ CSDL']
    }
  },

  // Bài 13: Cơ sở dữ liệu quan hệ
  {
    id: 13,
    code: 'TIN11_B13',
    title: 'Cơ sở dữ liệu quan hệ',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'CSDL Quan hệ',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Mô hình dữ liệu thành công nhất lịch sử: Bảng, Thuộc tính và Khoá chính',
      description: 'Làm quen với Mô hình quan hệ (Relational Model): Bảng (Table), Cột (Trường / Thuộc tính), Hàng (Bản ghi / Bộ), Khoá chính (Primary Key) và mối liên kết quan hệ giữa các bảng.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Mô hình dữ liệu quan hệ', 'Bản ghi (Hàng) & Trường (Cột)', 'Khoá chính (Primary Key)']
    },
    objectives: [
      {
        id: 'obj_11_13_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các khái niệm cơ bản CSDL quan hệ',
        description: 'Định nghĩa được quan hệ (bảng), thuộc tính (cột/trường), bộ (hàng/bản ghi) và miền giá trị của thuộc tính.',
        iconName: 'Table'
      },
      {
        id: 'obj_11_13_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định Khoá chính (Primary Key)',
        description: 'Chỉ định được trường khoá chính phù hợp cho từng bảng để định danh duy nhất mỗi bản ghi (như MaHS, MaSach, SoCCCD).',
        iconName: 'Key'
      },
      {
        id: 'obj_11_13_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy mô hình hóa logic',
        description: 'Phát triển tư duy trừu tượng hóa các thực thể đời sống thành các bảng dữ liệu chuẩn hóa khoa học.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Hai học sinh trùng cả Họ và Tên trong cùng một lớp',
      scenario: 'Lớp 11A1 có hai bạn cùng tên là "Nguyễn Văn Nam" và cùng sinh năm 2008. Khi nhập điểm vào hệ thống, làm sao để phần mềm không bao giờ ghi nhầm điểm của bạn này sang bạn kia?',
      pollQuestion: 'Hệ CSDL quan hệ dùng giải pháp kỹ thuật nào để phân biệt tuyệt đối hai người này?',
      pollOptions: [
        { id: 'p11_13_1', text: 'Cấp cho mỗi bạn một "Mã học sinh" (MaHS) duy nhất làm Khóa chính (Primary Key)', votesPercent: 94, isPopular: true, insight: 'Chính xác! Khóa chính (như HS01, HS02) là định danh duy nhất, đảm bảo không bao giờ bị trùng lặp.' },
        { id: 'p11_13_2', text: 'Bắt một trong hai bạn phải đổi tên', votesPercent: 2, insight: 'Tên khai sinh của công dân không thể tùy tiện ép đổi.' },
        { id: 'p11_13_3', text: 'Cộng gộp điểm của hai bạn chia đôi', votesPercent: 4, insight: 'Cộng chia đôi sẽ vi phạm nghiêm trọng tính chính xác và công bằng trong học tập.' }
      ],
      reflection: 'Khóa chính (Primary Key) là trụ cột định danh sống còn của mọi bảng dữ liệu trong CSDL quan hệ.'
    },
    knowledge: [
      {
        id: 'tab_11_13_1',
        title: '1. Cấu Trúc Bảng Dữ Liệu & Khóa Chính trong Mô Hình Quan Hệ',
        subtitle: 'Bảng (Table), Trường (Field), Bản ghi (Record), Khoá (Key)',
        iconName: 'Table2',
        keyPoints: [
          'Bảng (Table / Quan hệ): Mỗi bảng biểu diễn thông tin về một đối tượng quản lý (Học sinh, Môn học, Giáo viên).',
          'Trường (Field / Cột / Thuộc tính): Mỗi cột mô tả một đặc trưng của đối tượng (Mã HS, Họ tên, Ngày sinh, Giới tính). Mỗi trường có một kiểu dữ liệu xác định.',
          'Bản ghi (Record / Hàng / Bộ): Mỗi dòng chứa toàn bộ thông tin của MỘT đối tượng cụ thể.',
          'Khoá chính (Primary Key): Là một hoặc một tập hợp thuộc tính mà giá trị của nó phân biệt duy nhất từng bản ghi trong bảng (không trùng lặp và không được để trống - Not Null).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Cột (Trường / Field)', desc: 'Thuộc tính: MaHS, HoTen, NgaySinh, DiemTin' },
            { label: 'Hàng (Bản ghi / Record)', desc: '1 học sinh: [HS01, Nguyễn Văn An, 15/08/2008, 9.0]' },
            { label: 'Khoá chính (Primary Key)', desc: 'MaHS: Đảm bảo không bao giờ có 2 học sinh cùng mã' }
          ]
        },
        emCanNho: [
          'Trong CSDL quan hệ: Bảng = Quan hệ; Cột = Trường/Thuộc tính; Hàng = Bản ghi/Bộ.',
          'Khoá chính (Primary Key) dùng để phân biệt duy nhất từng bản ghi trong bảng.',
          'Giá trị của khoá chính không được trùng lặp và không bao giờ được để trống (Not Null).'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Khái niệm Mô hình Quan hệ',
      instruction: 'Nối thuật ngữ CSDL quan hệ với khái niệm tương đương trong bảng:',
      matchingPairs: [
        { id: 'r1', left: 'Quan hệ (Relation)', right: 'Bảng dữ liệu hai chiều (Table)' },
        { id: 'r2', left: 'Thuộc tính (Attribute)', right: 'Cột của bảng (Field/Trường)' },
        { id: 'r3', left: 'Bộ (Tuple)', right: 'Hàng của bảng (Record/Bản ghi)' },
        { id: 'r4', left: 'Khoá chính (Primary Key)', right: 'Trường định danh duy nhất phân biệt từng hàng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong mô hình cơ sở dữ liệu quan hệ, một "Bản ghi" (Record) tương ứng với thành phần nào của bảng?',
        options: ['Một hàng (dòng) của bảng', 'Một cột của bảng', 'Tên của bảng', 'Màu sắc của bảng'],
        correctIndex: 0,
        explanation: 'Mỗi hàng (dòng) trong bảng chứa thông tin của một đối tượng cụ thể, gọi là một bản ghi (bộ).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Điều kiện BẮT BUỘC đối với giá trị của trường được chọn làm Khoá chính (Primary Key) là gì?',
        options: [
          'Không được trùng lặp giữa các bản ghi và không được để trống (Not Null)',
          'Phải luôn là chữ in hoa',
          'Phải là số chẵn',
          'Phải có màu đỏ'
        ],
        correctIndex: 0,
        explanation: 'Khóa chính dùng để định danh duy nhất nên bắt buộc phải duy nhất và không được phép để rỗng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong bảng `HOC_SINH` gồm các cột: `MaHS`, `HoTen`, `NgaySinh`, `DiaChi`. Cột nào thích hợp nhất để làm Khoá chính?',
        options: ['MaHS (Mã học sinh)', 'HoTen (Họ tên)', 'NgaySinh (Ngày sinh)', 'DiaChi (Địa chỉ)'],
        correctIndex: 0,
        explanation: 'Họ tên, ngày sinh và địa chỉ đều có thể bị trùng nhau, chỉ có MaHS là được cấp phát duy nhất cho mỗi em.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Một bảng dữ liệu trong CSDL quan hệ có bao nhiêu khoá chính?',
        options: ['Chỉ có duy nhất 1 khoá chính (khoá chính có thể gồm 1 hoặc nhiều trường gộp lại)', 'Có 10 khoá chính', 'Không được phép có khoá chính', 'Bao nhiêu cũng được'],
        correctIndex: 0,
        explanation: 'Mỗi bảng quan hệ chỉ có duy nhất 1 khóa chính (Primary Key), dù khóa đó có thể là khóa đơn hoặc khóa phức hợp.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Mối liên kết giữa các bảng trong CSDL quan hệ được thiết lập thông qua yếu tố nào?',
        options: [
          'Thông qua mối quan hệ giữa Khoá chính của bảng này và Khoá ngoài (Foreign Key) của bảng kia',
          'Bằng cách dán băng dính máy tính',
          'Bằng dây cáp USB',
          'Tự động nối ngẫu nhiên'
        ],
        correctIndex: 0,
        explanation: 'Liên kết bảng được thiết lập dựa trên sự tương ứng giữa khóa chính và khóa ngoài.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thiết kế Bảng Quản lý Xe Đạp gửi tại Trường học',
        context: 'Nhà trường cần quản lý việc gửi xe đạp/xe điện của học sinh.',
        mission: 'Xác định các trường (thuộc tính) và chọn Khoá chính cho bảng `VE_XE`.',
        steps: [
          'Bước 1: Xác định các cột: `MaVeXe`, `BienSoXe`, `LoaiXe`, `MaHS_ChuXe`, `NgayGui`.',
          'Bước 2: Chọn `MaVeXe` làm Khoá chính.',
          'Bước 3: Giải thích vì sao không thể chọn `LoaiXe` làm khoá chính.'
        ],
        outputRequirement: 'Bảng cấu trúc dữ liệu gồm Tên trường, Kiểu dữ liệu và chỉ định Khoá chính.',
        practicalTip: 'Tên trường nên viết hoa không dấu, ngăn cách bằng dấu gạch dưới (VD: `Ma_Ve_Xe`) để chuẩn hóa khi đưa vào SQL.'
      },
      mindmap: {
        id: 'mm_11_13',
        label: 'CSDL QUAN HỆ',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_13_1',
            label: 'Cấu trúc thành phần',
            children: [
              { id: 'mm_11_13_1_1', label: 'Bảng (Quan hệ)' },
              { id: 'mm_11_13_1_2', label: 'Trường (Cột / Thuộc tính)' },
              { id: 'mm_11_13_1_3', label: 'Bản ghi (Hàng / Bộ)' }
            ]
          },
          {
            id: 'mm_11_13_2',
            label: 'Khoá & Ràng buộc',
            children: [
              { id: 'mm_11_13_2_1', label: 'Khoá chính (Primary Key)' },
              { id: 'mm_11_13_2_2', label: 'Tính duy nhất & Not Null' },
              { id: 'mm_11_13_2_3', label: 'Liên kết khoá ngoài' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Mô Hình Quan Hệ 11',
      badgeIcon: 'Table',
      roleTitle: 'Chuyên Viên Chuẩn Hóa CSDL Quan Hệ',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ cấu trúc bảng, bản ghi, trường và khoá chính trong mô hình quan hệ.',
      skillsUnlocked: ['Xác định Khoá chính', 'Phân biệt Bảng/Trường/Bản ghi', 'Chuẩn hóa cấu trúc CSDL']
    }
  },

  // Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc
  {
    id: 14,
    code: 'TIN11_B14',
    title: 'SQL – Ngôn ngữ truy vấn có cấu trúc',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Ngôn ngữ SQL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Chiếc chìa khóa vạn năng trích xuất tri thức từ kho dữ liệu số',
      description: 'Làm quen với ngôn ngữ tiêu chuẩn quốc tế SQL: viết các câu truy vấn SELECT, lọc dữ liệu với WHERE, sắp xếp kết quả với ORDER BY để khai thác thông tin chính xác từ hàng triệu bản ghi.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Mệnh đề SELECT & FROM', 'Lọc điều kiện WHERE', 'Sắp xếp ORDER BY (ASC/DESC)']
    },
    objectives: [
      {
        id: 'obj_11_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cú pháp câu lệnh truy vấn SQL',
        description: 'Trình bày được vai trò của SQL và cú pháp câu lệnh truy vấn cơ bản: SELECT <cột> FROM <bảng> WHERE <điều kiện>.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết câu lệnh SQL truy xuất dữ liệu',
        description: 'Tự viết được các câu truy vấn để tìm kiếm học sinh theo lớp, tính điểm trung bình hoặc lọc danh sách sản phẩm.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo mật và toàn vẹn dữ liệu',
        description: 'Ý thức cẩn trọng khi thực thi các câu lệnh thay đổi dữ liệu và tuân thủ an toàn thông tin.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Tìm kiếm học sinh giỏi trong 3000 em',
      scenario: 'Thầy Tổng phụ trách cần tìm danh sách tất cả học sinh Khối 11 đạt điểm tổng kết môn Tin học từ 9.0 trở lên. Nếu tìm thủ công bằng mắt sẽ mất nhiều ngày.',
      pollQuestion: 'Ngôn ngữ tiêu chuẩn nào được toàn thế giới sử dụng để máy tính trích xuất dữ liệu trong chớp mắt?',
      pollOptions: [
        { id: 'p11_14_1', text: 'SQL (Structured Query Language)', votesPercent: 91, isPopular: true, insight: 'Chính xác! SQL là ngôn ngữ tiêu chuẩn quốc tế để truy vấn và thao tác trên cơ sở dữ liệu quan hệ.' },
        { id: 'p11_14_2', text: 'HTML', votesPercent: 5, insight: 'HTML chỉ dùng để định dạng hiển thị trang web.' },
        { id: 'p11_14_3', text: 'Photoshop', votesPercent: 4, insight: 'Photoshop dùng để xử lý hình ảnh raster.' }
      ],
      reflection: 'SQL là kỹ năng công nghệ được săn đón hàng đầu trong mọi lĩnh vực phân tích dữ liệu, trí tuệ nhân tạo và lập trình phần mềm.'
    },
    knowledge: [
      {
        id: 'tab_11_14_1',
        title: '1. Cú Pháp Câu Lệnh Truy Vấn SELECT',
        subtitle: 'Trích xuất dữ liệu có điều kiện từ các bảng',
        iconName: 'Code2',
        keyPoints: [
          'Cú pháp chuẩn: `SELECT <Danh sách cột> FROM <Tên bảng> WHERE <Điều kiện lọc> ORDER BY <Cột sắp xếp> [ASC|DESC];`',
          '`SELECT *`: Chọn tất cả các cột dữ liệu trong bảng.',
          'Mệnh đề `WHERE`: Sử dụng các phép so sánh (=, >, <, >=, <=, <>) và toán tử logic (AND, OR, NOT) để lọc dữ liệu chính xác.',
          'Mệnh đề `ORDER BY`: Sắp xếp kết quả tăng dần (ASC - mặc định) hoặc giảm dần (DESC).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: 'SELECT HoTen, Lop, DiemTin FROM HOC_SINH WHERE DiemTin >= 8.5 ORDER BY DiemTin DESC;',
          sampleTable: {
            columns: ['MaHS', 'HoTen', 'Lop', 'DiemTin'],
            rows: [
              ['HS01', 'Nguyễn Văn An', '11A1', '9.5'],
              ['HS04', 'Phạm Minh Đức', '11A3', '9.0'],
              ['HS02', 'Trần Thị Bình', '11A2', '8.8'],
              ['HS03', 'Lê Hoàng Cúc', '11A1', '7.5']
            ]
          }
        },
        emCanNho: [
          'SQL là ngôn ngữ truy vấn có cấu trúc chuẩn mực trong giao tiếp với CSDL quan hệ.',
          'Cú pháp cơ bản: `SELECT <cột> FROM <bảng> WHERE <điều kiện> ORDER BY <cột> [ASC/DESC]`.',
          'Ký tự `*` đại diện cho việc lấy tất cả các cột của bảng dữ liệu.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Từ khóa SQL và Chức năng',
      instruction: 'Nối từ khóa câu lệnh SQL với chức năng tương ứng:',
      matchingPairs: [
        { id: 'sql_1', left: 'SELECT HoTen, Lop', right: 'Chỉ định các cột dữ liệu cần lấy ra' },
        { id: 'sql_2', left: 'FROM HOC_SINH', right: 'Chỉ định bảng nguồn chứa dữ liệu' },
        { id: 'sql_3', left: 'WHERE DiemTin >= 8.0', right: 'Điều kiện lọc chỉ lấy học sinh đạt từ 8 điểm trở lên' },
        { id: 'sql_4', left: 'ORDER BY DiemTin DESC', right: 'Sắp xếp điểm số giảm dần từ cao xuống thấp' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Từ viết tắt SQL là viết tắt của cụm từ tiếng Anh nào?',
        options: ['Structured Query Language', 'Simple Question Language', 'Standard Quality List', 'System Quick Link'],
        correctIndex: 0,
        explanation: 'SQL là viết tắt của Structured Query Language (Ngôn ngữ truy vấn có cấu trúc).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để lấy TẤT CẢ các cột và tất cả các dòng từ bảng `NHAN_VIEN`, câu lệnh SQL nào ĐÚNG?',
        options: ['SELECT * FROM NHAN_VIEN;', 'GET ALL FROM NHAN_VIEN;', 'FIND TABLE NHAN_VIEN;', 'FETCH ALL IN NHAN_VIEN;'],
        correctIndex: 0,
        explanation: 'Dấu sao (*) trong mệnh đề SELECT mang ý nghĩa lấy toàn bộ các trường (cột) dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Muốn sắp xếp danh sách kết quả theo thứ tự từ CAO XUỐNG THẤP (giảm dần), ta dùng từ khóa nào sau ORDER BY?',
        options: ['DESC', 'ASC', 'DOWN', 'TOP'],
        correctIndex: 0,
        explanation: 'DESC (Descending) sắp xếp giảm dần, còn ASC (Ascending) sắp xếp tăng dần.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Trong câu lệnh SQL: SELECT * FROM SAN_PHAM WHERE GiaTien < 50000; Mệnh đề WHERE có vai trò gì?',
        options: [
          'Lọc ra những sản phẩm có giá tiền nhỏ hơn 50,000 đồng',
          'Xóa toàn bộ sản phẩm khỏi kho',
          'Tăng giá sản phẩm lên 50,000 đồng',
          'Đổi tên sản phẩm'
        ],
        correctIndex: 0,
        explanation: 'Mệnh đề WHERE áp dụng điều kiện lọc logic, chỉ các bản ghi thỏa mãn điều kiện mới được trả về.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Muốn tìm học sinh thuộc lớp "11A1" VÀ có điểm môn Tin lớn hơn hoặc bằng 8.0, toán tử logic nào được sử dụng trong WHERE?',
        options: ['AND', 'OR', 'NOT', 'XOR'],
        correctIndex: 0,
        explanation: 'Toán tử AND yêu cầu cả hai điều kiện cùng phải đúng (Lop = \'11A1\' AND DiemTin >= 8.0).',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Viết Câu lệnh SQL Quản lý Thư viện Trường học',
        context: 'Cơ sở dữ liệu thư viện có bảng `SACH` gồm các trường: `MaSach`, `TenSach`, `TacGia`, `NamXuatBan`, `SoLuong`.',
        mission: 'Soạn thảo 3 câu truy vấn SQL đáp ứng các yêu cầu tìm kiếm của cán bộ thư viện.',
        steps: [
          'Câu 1: Lấy danh sách toàn bộ sách xuất bản từ năm 2020 trở lại đây: `SELECT * FROM SACH WHERE NamXuatBan >= 2020;`.',
          'Câu 2: Tìm những cuốn sách của tác giả "Nguyễn Nhật Ánh": `SELECT TenSach, SoLuong FROM SACH WHERE TacGia = \'Nguyễn Nhật Ánh\';`.',
          'Câu 3: Sắp xếp toàn bộ sách theo số lượng tồn kho giảm dần: `SELECT * FROM SACH ORDER BY SoLuong DESC;`.'
        ],
        outputRequirement: 'Viết đúng 3 câu lệnh SQL có dấu chấm phẩy kết thúc chuẩn cú pháp.',
        practicalTip: 'Chuỗi ký tự trong SQL luôn được đặt trong cặp dấu nháy đơn hoặc nháy kép (VD: \'Nguyễn Nhật Ánh\').'
      },
      mindmap: {
        id: 'mm_11_14',
        label: 'NGÔN NGỮ TRUY VẤN SQL',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_14_1',
            label: 'Cấu trúc câu lệnh',
            children: [
              { id: 'mm_11_14_1_1', label: 'SELECT <cột>' },
              { id: 'mm_11_14_1_2', label: 'FROM <bảng>' }
            ]
          },
          {
            id: 'mm_11_14_2',
            label: 'Mệnh đề lọc WHERE',
            children: [
              { id: 'mm_11_14_2_1', label: 'Toán tử so sánh (=, >, <)' },
              { id: 'mm_11_14_2_2', label: 'Toán tử logic (AND, OR, NOT)' }
            ]
          },
          {
            id: 'mm_11_14_3',
            label: 'Sắp xếp ORDER BY',
            children: [
              { id: 'mm_11_14_3_1', label: 'ASC (Tăng dần)' },
              { id: 'mm_11_14_3_2', label: 'DESC (Giảm dần)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Truy Vấn SQL 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Khai Thác Cơ Sở Dữ Liệu',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ câu lệnh truy vấn SQL để khai thác dữ liệu lớn hiệu quả.',
      skillsUnlocked: ['Viết câu lệnh SELECT', 'Lọc điều kiện với WHERE', 'Sắp xếp kết quả với ORDER BY']
    }
  },

  // Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu
  {
    id: 15,
    code: 'TIN11_B15',
    title: 'Bảo mật và an toàn hệ cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Bảo mật CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Lá chắn thép bảo vệ tài sản số quý giá của tổ chức',
      description: 'Tìm hiểu các giải pháp bảo vệ dữ liệu: xác thực người dùng (Authentication), phân quyền truy cập chi tiết (Authorization), mã hóa dữ liệu nhạy cảm và cơ chế sao lưu (Backup) phục hồi sau sự cố.',
      accentColor: 'from-indigo-600 to-blue-600',
      keyHighlights: ['Xác thực & Phân quyền', 'Mã hóa dữ liệu nhạy cảm', 'Chiến lược sao lưu dự phòng']
    },
    objectives: [
      {
        id: 'obj_11_15_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các nguyên tắc bảo mật CSDL',
        description: 'Trình bày được 3 mục tiêu cốt lõi của an toàn thông tin: Tính bí mật (Confidentiality), Tính toàn vẹn (Integrity) và Tính sẵn sàng (Availability).',
        iconName: 'ShieldCheck'
      },
      {
        id: 'obj_11_15_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân quyền tài khoản người dùng',
        description: 'Hiểu cơ chế cấp quyền (GRANT) và thu hồi quyền (REVOKE) cho từng nhóm người dùng: Quản trị viên, Nhân viên, Khách hàng.',
        iconName: 'UserCheck'
      },
      {
        id: 'obj_11_15_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tuân thủ pháp luật về dữ liệu cá nhân',
        description: 'Ý thức chấp hành nghiêm chỉnh Nghị định bảo vệ dữ liệu cá nhân và đạo đức bảo vệ thông tin người dùng.',
        iconName: 'Lock'
      }
    ],
    warmup: {
      title: 'Tình huống: Rò rỉ thông tin cá nhân của hàng triệu khách hàng',
      scenario: 'Một trang web thương mại điện tử bị tin tặc tấn công do không mã hóa mật khẩu và phân quyền quản trị lỏng lẻo. Toàn bộ số điện thoại, địa chỉ và mật khẩu của khách hàng bị rao bán trên mạng.',
      pollQuestion: 'Biện pháp kỹ thuật nào trong Hệ QTCSDL giúp bảo vệ mật khẩu ngay cả khi tin tặc lấy được tệp CSDL?',
      pollOptions: [
        { id: 'p11_15_1', text: 'Mã hóa một chiều (Băm - Hashing) mật khẩu trước khi lưu vào CSDL', votesPercent: 93, isPopular: true, insight: 'Chính xác! Mã hóa băm biến mật khẩu thành chuỗi ký tự ngẫu nhiên không thể dịch ngược, bảo vệ người dùng an toàn.' },
        { id: 'p11_15_2', text: 'Viết mật khẩu ra tờ giấy dán lên màn hình', votesPercent: 3, insight: 'Dán mật khẩu lên màn hình vi phạm an ninh nghiêm trọng.' },
        { id: 'p11_15_3', text: 'Không đặt mật khẩu cho ai cả', votesPercent: 4, insight: 'Không đặt mật khẩu khiến bất kỳ ai cũng có thể vào phá hoại hệ thống.' }
      ],
      reflection: 'Bảo mật CSDL là trách nhiệm pháp lý và đạo đức bắt buộc của mọi kỹ sư công nghệ thông tin.'
    },
    knowledge: [
      {
        id: 'tab_11_15_1',
        title: '1. Các Biện Pháp An Toàn & Bảo Mật CSDL',
        subtitle: 'Xác thực, phân quyền, mã hóa và sao lưu dữ liệu',
        iconName: 'ShieldAlert',
        keyPoints: [
          'Xác thực người dùng (Authentication): Nhận diện người đăng nhập thông qua tên tài khoản, mật khẩu mạnh, mã OTP hoặc sinh trắc học.',
          'Phân quyền truy cập (Authorization): Mỗi tài khoản chỉ được xem/sửa những dữ liệu phù hợp với vai trò của mình (nguyên tắc đặc quyền tối thiểu).',
          'Mã hóa dữ liệu (Encryption): Mã hóa dữ liệu khi lưu trữ (Data at rest) và khi truyền trên đường truyền mạng (Data in transit - SSL/TLS).',
          'Sao lưu định kỳ (Backup & Recovery): Lưu trữ các bản sao dự phòng ra nơi an toàn để phục hồi dữ liệu khi ổ cứng bị cháy nổ hoặc nhiễm virus.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Lớp 1: Xác thực (Ai đang vào?)', desc: 'Tên đăng nhập, mật khẩu phức tạp, OTP' },
            { label: 'Lớp 2: Phân quyền (Được làm gì?)', desc: 'Chỉ đọc, được sửa hay toàn quyền quản trị' },
            { label: 'Lớp 3: Sao lưu (Nếu gặp sự cố?)', desc: 'Phục hồi dữ liệu từ bản backup gần nhất' }
          ]
        },
        emCanNho: [
          '3 trụ cột an toàn CSDL: Tính bí mật, tính toàn vẹn và tính sẵn sàng.',
          'Phân quyền chặt chẽ: Chỉ cấp quyền vừa đủ cho từng vị trí công việc.',
          'Luôn mã hóa dữ liệu nhạy cảm và thực hiện sao lưu dự phòng định kỳ.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Giải pháp Bảo mật và Mục đích',
      instruction: 'Nối biện pháp bảo mật CSDL với mục tiêu bảo vệ tương ứng:',
      matchingPairs: [
        { id: 'sec1', left: 'Phân quyền truy cập (GRANT/REVOKE)', right: 'Ngăn nhân viên sửa nhầm hoặc xem lén dữ liệu ngoài thẩm quyền' },
        { id: 'sec2', left: 'Mã hóa dữ liệu (Encryption)', right: 'Biến dữ liệu thành mã bí mật, kẻ trộm lấy được cũng không đọc được' },
        { id: 'sec3', left: 'Sao lưu dự phòng (Backup)', right: 'Đảm bảo khôi phục lại dữ liệu nguyên vẹn khi máy chủ gặp sự cố' },
        { id: 'sec4', left: 'Ghi nhật ký hệ thống (Audit Log)', right: 'Lưu lại vết tích ai đã truy cập, sửa hoặc xóa dữ liệu lúc mấy giờ' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Nguyên tắc "Đặc quyền tối thiểu" trong phân quyền bảo mật CSDL có nghĩa là gì?',
        options: [
          'Chỉ cấp cho người dùng những quyền hạn vừa đủ để họ thực hiện công việc của mình, không cấp thừa quyền',
          'Cho tất cả mọi người quyền Quản trị viên cao nhất',
          'Cấm tất cả mọi người sử dụng CSDL',
          'Chỉ cho phép giám đốc sử dụng máy tính'
        ],
        correctIndex: 0,
        explanation: 'Đặc quyền tối thiểu giúp hạn chế tối đa rủi ro nếu một tài khoản bị lộ lọt hoặc thao tác nhầm.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Trong trường học, tài khoản của một bạn HỌC SINH khi đăng nhập vào CSDL quản lý điểm của trường nên được cấp quyền gì?',
        options: [
          'Chỉ được xem điểm của chính mình (Quyền SELECT)',
          'Được sửa toàn bộ điểm số của cả lớp thành 10 (Quyền UPDATE)',
          'Được xóa danh mục môn học (Quyền DROP)',
          'Được tạo thêm lớp học mới'
        ],
        correctIndex: 0,
        explanation: 'Học sinh chỉ được cấp quyền xem điểm của mình để đảm bảo tính toàn vẹn dữ liệu.',
        difficulty: 'Vận dụng'
      },
      {
        id: 3,
        question: 'Nhật ký hệ thống (Audit Log) của Hệ QTCSDL có tác dụng gì quan trọng nhất?',
        options: [
          'Ghi lại lịch sử chi tiết mọi thao tác (Ai đã truy cập, sửa, xóa bản ghi nào vào thời gian nào) để truy cứu trách nhiệm khi có sự cố',
          'Lưu các bài thơ hay của nhân viên',
          'Tự động tăng lương cho lập trình viên',
          'Làm đẹp giao diện'
        ],
        correctIndex: 0,
        explanation: 'Nhật ký hệ thống là bằng chứng điều tra số giúp phát hiện gian lận và sự cố bảo mật.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Tại sao cần sao lưu dữ liệu CSDL ra ổ cứng bên ngoài hoặc máy chủ ở vị trí địa lý khác?',
        options: [
          'Để phòng ngừa sự cố thảm họa (cháy nổ, ngập lụt, sét đánh) làm hư hỏng toàn bộ máy chủ chính',
          'Để máy chủ chính chạy nhẹ hơn',
          'Để nhân viên có việc làm thêm',
          'Không có lý do gì'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu ngoài địa điểm (Offsite / Cloud Backup) là nguyên tắc sống còn chống thảm họa phần cứng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Lệnh SQL nào sau đây dùng để THU HỒI quyền truy cập dữ liệu của một tài khoản người dùng?',
        options: ['REVOKE', 'GRANT', 'SELECT', 'DELETE'],
        correctIndex: 0,
        explanation: 'Lệnh REVOKE dùng để thu hồi quyền, còn lệnh GRANT dùng để cấp quyền.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thiết kế Ma trận Phân quyền cho Ứng dụng Sổ Liên Lạc Điện Tử',
        context: 'Xây dựng ma trận phân quyền cho 3 nhóm người dùng: Giáo viên chủ nhiệm, Phụ huynh và Học sinh.',
        mission: 'Xác định quyền hạn (Xem, Thêm, Sửa, Xóa) cho từng đối tượng trên bảng `DIEM_SO` và `HANH_KIEM`.',
        steps: [
          'Bước 1: Giáo viên chủ nhiệm: Quyền Xem, Thêm, Sửa điểm và hạnh kiểm của lớp mình.',
          'Bước 2: Phụ huynh: Chỉ có quyền Xem điểm và nhận xét hạnh kiểm của con em mình.',
          'Bước 3: Học sinh: Chỉ có quyền Xem điểm của chính mình.'
        ],
        outputRequirement: 'Một bảng ma trận phân quyền rõ ràng, khoa học.',
        practicalTip: 'Ma trận phân quyền chặt chẽ là cơ sở để các lập trình viên backend viết mã bảo mật cho ứng dụng.'
      },
      mindmap: {
        id: 'mm_11_15',
        label: 'BẢO MẬT CƠ SỞ DỮ LIỆU',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_15_1',
            label: 'Kiểm soát truy cập',
            children: [
              { id: 'mm_11_15_1_1', label: 'Xác thực tài khoản & 2FA' },
              { id: 'mm_11_15_1_2', label: 'Phân quyền GRANT / REVOKE' },
              { id: 'mm_11_15_1_3', label: 'Ghi nhật ký Audit Log' }
            ]
          },
          {
            id: 'mm_11_15_2',
            label: 'Bảo vệ dữ liệu',
            children: [
              { id: 'mm_11_15_2_1', label: 'Mã hóa khi lưu & truyền' },
              { id: 'mm_11_15_2_2', label: 'Sao lưu định kỳ (Backup)' },
              { id: 'mm_11_15_2_3', label: 'Kế hoạch phục hồi sự cố' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia An Toàn Dữ Liệu 11',
      badgeIcon: 'ShieldCheck',
      roleTitle: 'Chuyên Viên Bảo Mật Cơ Sở Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững các nguyên tắc phân quyền, mã hóa và bảo vệ an toàn cho CSDL.',
      skillsUnlocked: ['Thiết kế ma trận phân quyền', 'Hiểu lệnh GRANT/REVOKE', 'Chiến lược sao lưu dự phòng']
    }
  }
];
