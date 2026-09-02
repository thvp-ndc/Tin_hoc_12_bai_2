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
        title: 'Hiểu bài toán quản lý & các công việc',
        description: 'Nêu được bài toán quản lý thực tế và các công việc thường gặp: tạo lập hồ sơ, cập nhật dữ liệu và khai thác thông tin phục vụ điều hành.',
        iconName: 'Database'
      },
      {
        id: 'obj_11_10_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích bất cập của lưu trữ tệp rời rạc',
        description: 'Chỉ ra được những hạn chế của phương pháp lưu trữ dữ liệu rời rạc (tệp phẳng): dư thừa dữ liệu (Redundancy) và không nhất quán dữ liệu (Inconsistency).',
        iconName: 'AlertTriangle'
      },
      {
        id: 'obj_11_10_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy tổ chức dữ liệu chuẩn hóa',
        description: 'Hình thành nhận thức về tầm quan trọng của việc chuẩn hóa và quản lý tập trung dữ liệu trong mọi tổ chức kinh tế - xã hội thời đại số.',
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
        title: '1. Bài toán quản lý trong thực tế',
        subtitle: 'Sự hiện diện của dữ liệu quản lý trong mọi lĩnh vực đời sống',
        iconName: 'FileText',
        keyPoints: [
          'Khái niệm: Bất kỳ tổ chức nào (trường học, bệnh viện, thư viện, doanh nghiệp) đều cần quản lý thông tin về các đối tượng thuộc phạm vi hoạt động của mình.',
          'Các đối tượng quản lý quen thuộc:',
          '  - Trường học: Quản lý học sinh, giáo viên, điểm số, học bạ, thời khóa biểu.',
          '  - Thư viện: Quản lý sách, độc giả, phiếu mượn/trả sách.',
          '  - Bệnh viện: Quản lý bệnh nhân, hồ sơ bệnh án, bác sĩ, phòng điều trị, viện phí.',
          '  - Cửa hàng tiện lợi: Quản lý mặt hàng, tồn kho, hóa đơn bán hàng, khách hàng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Thực thể Quản lý', desc: 'Con người, hàng hóa, tài chính, sự kiện' },
            { label: 'Hồ sơ Dữ liệu', desc: 'Các thuộc tính: Mã, Tên, Ngày sinh, Số lượng, Giá' },
            { label: 'Mục tiêu Quản trị', desc: 'Ra quyết định chính xác, phục vụ kịp thời' }
          ]
        },
        emCanNho: [
          'Bài toán quản lý xuất hiện trong mọi hoạt động kinh tế, xã hội và giáo dục.',
          'Mỗi đối tượng quản lý đều có các thuộc tính thông tin cần thu thập và theo dõi.',
          'Quản lý dữ liệu tốt là nền tảng để cơ quan, doanh nghiệp hoạt động hiệu quả.'
        ]
      },
      {
        id: 'tab_11_10_2',
        title: '2. Các công việc quản lý thông tin thường gặp',
        subtitle: 'Ba nhóm thao tác cơ bản: Tạo lập, Cập nhật và Khai thác',
        iconName: 'ListChecks',
        keyPoints: [
          'Nhóm 1: Tạo lập hồ sơ (Create): Thu thập và ghi nhận thông tin ban đầu của đối tượng (ví dụ: tiếp nhận học sinh mới vào trường và tạo hồ sơ).',
          'Nhóm 2: Cập nhật dữ liệu (Update):',
          '  - Bổ sung (Insert): Thêm bản ghi học sinh mới chuyển đến.',
          '  - Chỉnh sửa (Modify): Cập nhật địa chỉ nhà, số điện thoại mới.',
          '  - Xóa bỏ (Delete): Xóa học sinh đã chuyển trường hoặc tốt nghiệp.',
          'Nhóm 3: Khai thác thông tin (Retrieve): Tìm kiếm hồ sơ, sắp xếp danh sách, lọc dữ liệu theo điều kiện và kết xuất báo cáo thống kê.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nhóm công việc', 'Hành động cụ thể', 'Ví dụ trong trường học'],
          rows: [
            ['Tạo lập hồ sơ', 'Thu nhận dữ liệu ban đầu', 'Nhập danh sách học sinh trúng tuyển vào lớp 10'],
            ['Cập nhật dữ liệu', 'Thêm mới, chỉnh sửa, xóa bỏ', 'Sửa lại điểm số bị chấm nhầm, xóa hồ sơ đã chuyển đi'],
            ['Khai thác thông tin', 'Tìm kiếm, lọc, lập báo cáo', 'In danh sách học sinh đạt danh hiệu Học sinh Giỏi']
          ]
        },
        emCanNho: [
          '3 nhóm công việc quản lý: Tạo lập hồ sơ, Cập nhật dữ liệu, Khai thác thông tin.',
          'Cập nhật bao gồm: Bổ sung thông tin, Sửa đổi thông tin và Xóa bỏ thông tin lỗi thời.',
          'Khai thác thông tin là mục đích cuối cùng phục vụ công tác ra quyết định.'
        ]
      },
      {
        id: 'tab_11_10_3',
        title: '3. Bất cập của việc lưu trữ dữ liệu rời rạc (tệp phẳng)',
        subtitle: 'Tại sao việc quản lý bằng các tệp Word, Excel riêng lẻ lại bộc lộ hạn chế lớn?',
        iconName: 'AlertTriangle',
        keyPoints: [
          'Lưu trữ tệp phẳng (File-based): Mỗi phòng ban lưu trữ dữ liệu trong các tệp Word/Excel riêng lẻ trên máy tính của mình.',
          'Các bất cập nghiêm trọng:',
          '  - Dư thừa dữ liệu (Data Redundancy): Cùng một thông tin học sinh bị gõ lặp lại ở phòng Đào tạo, Đoàn thanh niên, Y tế, gây lãng phí dung lượng nhớ.',
          '  - Không nhất quán dữ liệu (Data Inconsistency): Học sinh đổi số điện thoại chỉ báo cho giáo viên chủ nhiệm, trong khi sổ Đoàn vẫn lưu số cũ, dẫn đến mâu thuẫn dữ liệu.',
          '  - Khó khăn trong chia sẻ đồng thời: Khi một người đang mở tệp, người khác không thể vào chỉnh sửa.',
          '  - Kém an toàn, khó phân quyền bảo mật chi tiết.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Lưu trữ tệp rời rạc (Word, Excel)', 'Cơ sở dữ liệu tập trung (Database)'],
          rows: [
            ['Dư thừa dữ liệu', 'Rất nhiều, cùng thông tin lưu ở nhiều file', 'Tối thiểu, dữ liệu lưu tập trung một nơi duy nhất'],
            ['Tính nhất quán', 'Dễ mâu thuẫn, sai lệch thông tin', 'Luôn đồng bộ và nhất quán tức thì'],
            ['Chia sẻ đồng thời', 'Rất khó khăn, dễ bị khóa tệp (file lock)', 'Hàng ngàn người truy cập đồng thời trơn tru'],
            ['Bảo mật & Phân quyền', 'Chỉ khóa được cả tệp, không phân quyền sâu', 'Phân quyền chi tiết từng bảng, từng cột, từng hàng']
          ]
        },
        emCanNho: [
          'Lưu trữ tệp rời rạc gây dư thừa dữ liệu và không nhất quán thông tin.',
          'Khó chia sẻ đồng thời và không đảm bảo an toàn bảo mật.',
          'Cơ sở dữ liệu ra đời nhằm giải quyết triệt để các bất cập của việc lưu trữ tệp phẳng.'
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
        explanation: 'Không nhất quán là hiện tượng mâu thuẫn dữ liệu giữa các tệp lưu trữ riêng lẻ do không được đồng bộ.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Lưu trữ dữ liệu phân tán trên các tệp Excel rời rạc dẫn đến nhược điểm nghiêm trọng nào sau đây?',
        options: [
          'Dư thừa dữ liệu và khó kiểm soát tính nhất quán của thông tin',
          'Máy tính tự động phát nổ',
          'Tất cả học sinh đều bị điểm 0',
          'Màn hình máy tính chuyển sang màu hồng'
        ],
        correctIndex: 0,
        explanation: 'Dư thừa dữ liệu làm tốn bộ nhớ và khi sửa một nơi thì các nơi khác bị sai lệch, không nhất quán.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Thao tác nào sau đây thuộc nhóm công việc "Cập nhật dữ liệu"?',
        options: [
          'Bổ sung hồ sơ học sinh mới, sửa số điện thoại khi đổi số và xóa bản ghi đã chuyển trường',
          'In danh sách học sinh ra giấy khen',
          'Vẽ sơ đồ tư duy môn học',
          'Tắt màn hình máy tính'
        ],
        correctIndex: 0,
        explanation: 'Cập nhật dữ liệu bao gồm 3 hành vi cơ bản: Thêm mới (Insert), Chỉnh sửa (Update) và Xóa bỏ (Delete).',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Để giải quyết triệt để vấn đề dư thừa và không nhất quán dữ liệu trong các cơ quan, giải pháp công nghệ tiêu chuẩn hiện đại là gì?',
        options: [
          'Xây dựng hệ thống Cơ sở dữ liệu (Database) tập trung có phần mềm quản trị chuyên dụng',
          'Mua thêm thật nhiều giấy trắng để ghi chép tay',
          'Mỗi nhân viên tự lưu một bản sao trên USB cá nhân',
          'Xóa hết dữ liệu cũ không lưu trữ nữa'
        ],
        correctIndex: 0,
        explanation: 'Cơ sở dữ liệu tập trung đảm bảo dữ liệu chỉ lưu một nơi duy nhất, luôn nhất quán và phân quyền an toàn.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Khảo Sát & Lập Sơ Đồ Quản Lý Thư Viện Trường Học',
        context: 'Thư viện trường hiện đang quản lý mượn trả sách bằng sổ tay ghi chép.',
        mission: 'Xác định các thực thể dữ liệu cần quản lý và chỉ rõ 3 nhóm công việc quản lý tương ứng.',
        steps: [
          'Xác định 3 đối tượng cần quản lý: Sách, Độc giả (học sinh), Phiếu mượn trả.',
          'Mô tả các thao tác Tạo lập: Nhập danh mục sách mới mua về thư viện.',
          'Mô tả thao tác Cập nhật: Đánh dấu sách đã được trả, ghi chú sách bị hỏng.',
          'Mô tả thao tác Khai thác: Báo cáo danh sách các bạn học sinh đang mượn sách quá hạn.'
        ],
        outputRequirement: 'Bản phân tích sơ đồ luồng dữ liệu thư viện 3 nhóm công việc rõ ràng.',
        practicalTip: 'Việc tách riêng bảng Sách và bảng Độc giả sẽ giúp tránh phải gõ lại tên sách nhiều lần khi học sinh mượn.'
      },
      mindmap: {
        id: 'mm_11_10',
        label: 'BÀI TOÁN QUẢN LÝ DỮ LIỆU',
        color: '#4f46e5',
        children: [
          {
            id: 'mm_11_10_1',
            label: 'Công việc quản lý',
            children: [
              { id: 'mm_11_10_1_1', label: '1. Tạo lập hồ sơ ban đầu' },
              { id: 'mm_11_10_1_2', label: '2. Cập nhật (Thêm, Sửa, Xóa)' },
              { id: 'mm_11_10_1_3', label: '3. Khai thác (Tìm kiếm, Báo cáo)' }
            ]
          },
          {
            id: 'mm_11_10_2',
            label: 'Bất cập tệp phẳng',
            children: [
              { id: 'mm_11_10_2_1', label: 'Dư thừa dữ liệu (Redundancy)' },
              { id: 'mm_11_10_2_2', label: 'Không nhất quán (Inconsistency)' },
              { id: 'mm_11_10_2_3', label: 'Khó chia sẻ & Kém an toàn' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Phân Tích Dữ Liệu 11',
      badgeIcon: 'Database',
      roleTitle: 'Chuyên Viên Phân Tích Nhu Cầu Quản Trị Dữ Liệu',
      congratsMessage: 'Xuất sắc! Bạn đã hiểu rõ bài toán quản lý và sự cần thiết tất yếu của việc chuyển dịch sang Hệ cơ sở dữ liệu tập trung.',
      skillsUnlocked: ['Phân loại 3 nhóm công việc quản lý', 'Nhận diện dư thừa & không nhất quán', 'Tư duy thiết kế CSDL']
    }
  },

  // Bài 11: Cơ sở dữ liệu
  {
    id: 11,
    code: 'TIN11_B11',
    title: 'Cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Đặc trưng CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kho báu thông tin có cấu trúc: Nền tảng của các ứng dụng chuyển đổi số',
      description: 'Tìm hiểu định nghĩa chuẩn mực của Cơ sở dữ liệu (Database), các đặc trưng then chốt: tính toàn vẹn, tính nhất quán, tính độc lập dữ liệu và khả năng chia sẻ dùng chung an toàn.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Định nghĩa Cơ sở dữ liệu', 'Tính toàn vẹn & Nhất quán', 'Tính độc lập dữ liệu']
    },
    objectives: [
      {
        id: 'obj_11_11_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm & đặc trưng cơ sở dữ liệu',
        description: 'Trình bày được định nghĩa cơ sở dữ liệu (Database) và giải thích được các đặc trưng cốt lõi: tính toàn vẹn, tính nhất quán và tính độc lập dữ liệu.',
        iconName: 'Server'
      },
      {
        id: 'obj_11_11_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích các ràng buộc toàn vẹn dữ liệu',
        description: 'Xác định và giải thích được các ràng buộc dữ liệu trong đời sống: miền giá trị điểm số từ 0 đến 10, ngày sinh phải hợp lệ, mã định danh không được trùng.',
        iconName: 'CheckCircle2'
      },
      {
        id: 'obj_11_11_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng quy chuẩn dữ liệu chính xác',
        description: 'Hình thành tác phong cẩn trọng, tôn trọng các nguyên tắc logic và tính toàn vẹn của dữ liệu trong quá trình số hóa thông tin.',
        iconName: 'Shield'
      }
    ],
    warmup: {
      title: 'Tình huống: Nhập điểm thi "15" trên thang điểm 10',
      scenario: 'Một giáo viên khi nhập điểm thi học kỳ cho học sinh lỡ tay gõ phím số "15". Nếu dùng sổ giấy, số 15 vẫn nằm đó gây sai lệch kết quả xếp loại. Nhưng trong phần mềm CSDL trường học, hệ thống lập tức báo chuông đỏ: "Giá trị điểm phải nằm trong khoảng từ 0 đến 10!".',
      pollQuestion: 'Đặc tính kỳ diệu nào của Cơ sở dữ liệu đã ngăn chặn giáo viên nhập số điểm vô lý này?',
      pollOptions: [
        { id: 'p11_11_1', text: 'Tính toàn vẹn dữ liệu (Data Integrity) thông qua các quy tắc ràng buộc miền giá trị', votesPercent: 94, isPopular: true, insight: 'Chính xác! Tính toàn vẹn thiết lập các quy tắc logic tự động ngăn chặn dữ liệu sai lệch ngay từ khâu nhập liệu.' },
        { id: 'p11_11_2', text: 'Do máy tính tự động đoán ý giáo viên', votesPercent: 3, insight: 'Máy tính không đoán mò, mà kiểm tra theo các ràng buộc (Constraints) được cài đặt trong CSDL.' },
        { id: 'p11_11_3', text: 'Do máy tính bị đơ', votesPercent: 3, insight: 'Máy tính hoạt động chuẩn xác theo thiết kế CSDL.' }
      ],
      reflection: 'Tính toàn vẹn dữ liệu đảm bảo mọi thông tin được lưu trữ trong CSDL luôn phản ánh đúng sự thật và tuân thủ các quy luật đời sống.'
    },
    knowledge: [
      {
        id: 'tab_11_11_1',
        title: '1. Khái niệm cơ sở dữ liệu (Database)',
        subtitle: 'Định nghĩa khoa học và vai trò làm nền tảng số',
        iconName: 'Database',
        keyPoints: [
          'Khái niệm: Cơ sở dữ liệu (Database - viết tắt là CSDL) là một tập hợp các dữ liệu có liên quan với nhau, được tổ chức lưu trữ có cấu trúc trên các thiết bị nhớ máy tính nhằm phục vụ nhu cầu khai thác thông tin của nhiều người sử dụng đồng thời.',
          'Các yếu tố cấu thành định nghĩa:',
          '  - Có liên quan với nhau: Dữ liệu mô tả một hệ thống thực thể cụ thể (ví dụ: toàn bộ dữ liệu quản lý học sinh trường THPT).',
          '  - Có cấu trúc: Tổ chức theo quy chuẩn toán học logic (bảng, trường, bản ghi), không phải văn bản thô vô tổ chức.',
          '  - Lưu trữ trên máy tính: Đảm bảo tốc độ truy xuất hàng triệu bản ghi trong mili-giây.',
          '  - Chia sẻ dùng chung: Cho phép nhiều người, nhiều phần mềm cùng truy cập đồng thời an toàn.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tập hợp dữ liệu có cấu trúc', desc: 'Sắp xếp theo quy chuẩn logic chặt chẽ' },
            { label: 'Lưu trữ trên thiết bị nhớ', desc: 'Ổ cứng SSD, máy chủ dữ liệu Server' },
            { label: 'Chia sẻ dùng chung', desc: 'Phục vụ hàng ngàn người dùng và ứng dụng đồng thời' }
          ]
        },
        emCanNho: [
          'CSDL là tập hợp dữ liệu có liên quan, được tổ chức có cấu trúc trên thiết bị nhớ máy tính.',
          'Dữ liệu được lưu trữ tập trung nhằm phục vụ nhu cầu khai thác dùng chung của nhiều người.',
          'CSDL là trái tim của mọi ứng dụng phần mềm trong chuyển đổi số hiện đại.'
        ]
      },
      {
        id: 'tab_11_11_2',
        title: '2. Các đặc trưng cơ bản của CSDL (Toàn vẹn, nhất quán, độc lập)',
        subtitle: 'Ba trụ cột bảo chứng chất lượng của một hệ thống dữ liệu số',
        iconName: 'ShieldCheck',
        keyPoints: [
          '1. Tính toàn vẹn dữ liệu (Data Integrity): Dữ liệu lưu trữ phải luôn đúng đắn, phản ánh chính xác thực tế khách quan thông qua các quy tắc ràng buộc (ví dụ: Điểm $\in [0, 10]$, Ngày sinh phải nhỏ hơn ngày hiện tại, Mã học sinh không được trùng nhau).',
          '2. Tính nhất quán dữ liệu (Data Consistency): Mọi người dùng và ứng dụng khi truy xuất cùng một mục dữ liệu tại cùng một thời điểm đều nhận được giá trị giống hệt nhau, không có sự mâu thuẫn hay sai lệch.',
          '3. Tính độc lập dữ liệu (Data Independence):',
          '  - Độc lập vật lý: Thay đổi phần cứng, thay ổ cứng mới hay di chuyển vị trí lưu trữ trên đĩa không làm ảnh hưởng đến cấu trúc logic của CSDL.',
          '  - Độc lập logic: Thay đổi, bổ sung thêm một bảng hoặc một cột dữ liệu mới không làm các chương trình ứng dụng cũ đang chạy bị lỗi hay phải viết lại mã nguồn.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Đặc trưng', 'Ý nghĩa cốt lõi', 'Ví dụ bảo đảm trong thực tế'],
          rows: [
            ['Tính toàn vẹn (Integrity)', 'Dữ liệu luôn đúng đắn, không vi phạm quy tắc logic', 'Không cho phép nhập điểm số âm hoặc vượt quá 10'],
            ['Tính nhất quán (Consistency)', 'Dữ liệu không mâu thuẫn giữa các nơi truy cập', 'Khi học sinh đổi tên, mọi nơi tra cứu đều thấy tên mới'],
            ['Tính độc lập (Independence)', 'Tách biệt giữa cách lưu trữ vật lý và chương trình ứng dụng', 'Nâng cấp từ HDD sang SSD thì phần mềm quản lý vẫn chạy bình thường']
          ]
        },
        emCanNho: [
          'Tính toàn vẹn: Dữ liệu luôn đúng đắn, tuân thủ các quy tắc ràng buộc nghiệp vụ.',
          'Tính nhất quán: Dữ liệu không bị mâu thuẫn, luôn đồng bộ trên toàn hệ thống.',
          'Tính độc lập: Tách biệt cấu trúc dữ liệu khỏi chương trình ứng dụng và phần cứng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Đặc trưng CSDL và Tình huống Minh họa',
      instruction: 'Nối đặc trưng của CSDL với tình huống thực tế tương ứng:',
      matchingPairs: [
        { id: 'cs1', left: 'Tính toàn vẹn (Integrity)', right: 'Hệ thống báo lỗi khi nhập ngày sinh 30/02 không tồn tại' },
        { id: 'cs2', left: 'Tính nhất quán (Consistency)', right: 'Cả giáo viên và phụ huynh đều thấy số điểm 9.0 giống hệt nhau' },
        { id: 'cs3', left: 'Tính độc lập vật lý', right: 'Thay ổ cứng máy chủ mới không làm phần mềm quản lý bị lỗi' },
        { id: 'cs4', left: 'Tính độc lập logic', right: 'Thêm cột Số điện thoại phụ huynh không làm hỏng chức năng tính điểm' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phát biểu nào sau đây định nghĩa ĐÚNG NHẤT về Cơ sở dữ liệu (Database)?',
        options: [
          'Là một tập hợp các dữ liệu có liên quan với nhau, được tổ chức lưu trữ có cấu trúc trên máy tính nhằm phục vụ chia sẻ dùng chung',
          'Là một phần mềm nghe nhạc trực tuyến',
          'Là chiếc màn hình hiển thị số liệu',
          'Là quyển sổ tay ghi chép bằng bút mực'
        ],
        correctIndex: 0,
        explanation: 'Định nghĩa chuẩn của CSDL nhấn mạnh tính liên quan, có cấu trúc, lưu trữ trên máy tính và chia sẻ dùng chung.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Ràng buộc quy định: "Mỗi học sinh chỉ có một Mã định danh duy nhất không được trùng lặp" thể hiện đặc trưng nào của CSDL?',
        options: ['Tính toàn vẹn dữ liệu (Data Integrity)', 'Tính độc lập vật lý', 'Tính bảo mật thông tin', 'Tính thẩm mỹ giao diện'],
        correctIndex: 0,
        explanation: 'Tính toàn vẹn dữ liệu đảm bảo tính duy nhất và tính hợp lệ của các thực thể trong thế giới thực.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tính độc lập dữ liệu (Data Independence) trong CSDL mang lại lợi ích gì cho các lập trình viên?',
        options: [
          'Khi nâng cấp phần cứng hoặc thay đổi cách lưu trữ vật lý, các chương trình ứng dụng không cần phải viết lại mã nguồn',
          'Lập trình viên không cần phải lập trình nữa',
          'Máy tính tự động viết code thay người',
          'Không cần cắm điện máy tính vẫn chạy'
        ],
        correctIndex: 0,
        explanation: 'Tính độc lập giúp phân tách tầng ứng dụng khỏi tầng lưu trữ dữ liệu vật lý.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Ví dụ nào sau đây vi phạm TÍNH TOÀN VẸN của cơ sở dữ liệu quản lý học sinh?',
        options: [
          'Bản ghi có Điểm trung bình môn là 12.5 trên thang điểm 10',
          'Bản ghi có Họ tên là Nguyễn Văn An',
          'Bản ghi có Lớp là 11A1',
          'Bản ghi có Ngày sinh là 15/08/2008'
        ],
        correctIndex: 0,
        explanation: 'Thang điểm chuẩn chỉ từ 0 đến 10, điểm 12.5 vi phạm ràng buộc miền giá trị của thuộc tính.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Điều gì xảy ra nếu hệ thống CSDL của ngân hàng KHÔNG đảm bảo được TÍNH NHẤT QUÁN dữ liệu?',
        options: [
          'Khách hàng rút tiền ở cây ATM số dư bị trừ nhưng tra cứu trên app điện thoại số tiền vẫn giữ nguyên, gây thất thoát tài chính',
          'Máy ATM tự động phát nhạc',
          'Màn hình điện thoại bị vỡ',
          'Ngân hàng phải đóng cửa vĩnh viễn trong 1 giây'
        ],
        correctIndex: 0,
        explanation: 'Không nhất quán gây mâu thuẫn số liệu nghiêm trọng giữa các kênh giao dịch đồng thời.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết Lập Các Ràng Buộc Toàn Vẹn Cho CSDL Hồ Sơ Học Sinh',
        context: 'Xây dựng quy chuẩn nhập liệu cho hệ thống quản lý học sinh khối 11.',
        mission: 'Đề xuất 4 ràng buộc toàn vẹn bắt buộc phải có khi thiết kế bảng HOC_SINH.',
        steps: [
          'Ràng buộc 1: MaHS (Mã học sinh) là chuỗi 8 ký tự duy nhất, bắt buộc phải có (NOT NULL).',
          'Ràng buộc 2: NgaySinh phải đảm bảo học sinh vào lớp 11 có độ tuổi từ 15 đến 18 tuổi.',
          'Ràng buộc 3: DiemTB phải là số thực nằm trong đoạn từ 0.0 đến 10.0.',
          'Ràng buộc 4: GioiTinh chỉ nhận một trong hai giá trị "Nam" hoặc "Nữ".'
        ],
        outputRequirement: 'Bảng đặc tả 4 quy tắc ràng buộc toàn vẹn kèm lý do bảo vệ dữ liệu.',
        practicalTip: 'Càng định nghĩa chặt chẽ các ràng buộc từ đầu thì dữ liệu trong CSDL càng sạch và không bao giờ bị lỗi rác.'
      },
      mindmap: {
        id: 'mm_11_11',
        label: 'CƠ SỞ DỮ LIỆU',
        color: '#2563eb',
        children: [
          {
            id: 'mm_11_11_1',
            label: 'Định nghĩa cốt lõi',
            children: [
              { id: 'mm_11_11_1_1', label: 'Dữ liệu có liên quan' },
              { id: 'mm_11_11_1_2', label: 'Tổ chức có cấu trúc' },
              { id: 'mm_11_11_1_3', label: 'Chia sẻ dùng chung' }
            ]
          },
          {
            id: 'mm_11_11_2',
            label: '3 Đặc trưng then chốt',
            children: [
              { id: 'mm_11_11_2_1', label: 'Toàn vẹn (Integrity): Luôn đúng đắn' },
              { id: 'mm_11_11_2_2', label: 'Nhất quán (Consistency): Không mâu thuẫn' },
              { id: 'mm_11_11_2_3', label: 'Độc lập (Independence): Vật lý & Logic' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kiến Trúc Sư CSDL 11',
      badgeIcon: 'Server',
      roleTitle: 'Chuyên Viên Thiết Kế Cơ Sở Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững khái niệm và 3 đặc trưng cốt lõi của CSDL, sẵn sàng khám phá Hệ quản trị CSDL ở bài học tiếp theo.',
      skillsUnlocked: ['Định nghĩa chuẩn CSDL', 'Hiểu tính toàn vẹn, nhất quán', 'Phân tích ràng buộc dữ liệu']
    }
  },

  // Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu
  {
    id: 12,
    code: 'TIN11_B12',
    title: 'Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Hệ QTCSDL (DBMS)',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Cỗ máy điều phối dữ liệu khổng lồ: Phân biệt CSDL, Hệ QTCSDL và Hệ CSDL',
      description: 'Làm rõ sự khác biệt giữa dữ liệu tĩnh (CSDL) và phần mềm điều khiển (DBMS); khám phá kiến trúc phân tầng của Hệ CSDL và các hệ quản trị danh tiếng thế giới: MySQL, Microsoft SQL Server, Oracle.',
      accentColor: 'from-violet-600 to-indigo-600',
      keyHighlights: ['DBMS vs Database', 'Kiến trúc Hệ CSDL', 'Các hệ QTCSDL thông dụng']
    },
    objectives: [
      {
        id: 'obj_11_12_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Phân biệt CSDL & Hệ quản trị CSDL',
        description: 'Phân biệt được sự khác nhau giữa Cơ sở dữ liệu (Database) và Hệ quản trị cơ sở dữ liệu (DBMS), trình bày được kiến trúc của một Hệ cơ sở dữ liệu hoàn chỉnh.',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_12_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận biết & phân loại các phần mềm DBMS',
        description: 'Kể tên và phân loại được các phần mềm Hệ quản trị CSDL phổ biến: phần mềm nguồn mở (MySQL, PostgreSQL) và thương mại (Oracle, SQL Server, Microsoft Access).',
        iconName: 'Server'
      },
      {
        id: 'obj_11_12_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Đánh giá vai trò cỗ máy DBMS',
        description: 'Ý thức được vai trò trọng yếu của DBMS trong việc bảo đảm an toàn, toàn vẹn dữ liệu và kiểm soát truy cập đồng thời của hàng triệu người dùng.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Sách trong thư viện và Bác thủ thư',
      scenario: 'Một thư viện có 50.000 cuốn sách được xếp trên các kệ gỗ ngăn nắp. Khi bạn bước vào mượn sách, bạn không thể tự ý trèo lên kệ lục tung mọi thứ mà cần nhờ Bác thủ thư tra cứu mã số, ghi sổ mượn và lấy sách trao cho bạn.',
      pollQuestion: 'Trong phép so sánh này, 50.000 cuốn sách đóng vai trò là gì, và Bác thủ thư đóng vai trò là gì?',
      pollOptions: [
        { id: 'p11_12_1', text: '50.000 cuốn sách là "Cơ sở dữ liệu (CSDL)", còn Bác thủ thư là "Hệ quản trị CSDL (DBMS)"', votesPercent: 95, isPopular: true, insight: 'Chính xác! CSDL là nơi chứa dữ liệu, còn DBMS là cỗ máy phần mềm điều khiển, tìm kiếm, bảo vệ và phân phối dữ liệu đó.' },
        { id: 'p11_12_2', text: 'Bác thủ thư là CSDL, còn sách là DBMS', votesPercent: 3, insight: 'Bị đảo lộn khái niệm: con người/phần mềm quản trị đóng vai trò điều hành.' },
        { id: 'p11_12_3', text: 'Cả hai đều là máy tính', votesPercent: 2, insight: 'Sách là tài nguyên dữ liệu, thủ thư là chủ thể điều phối.' }
      ],
      reflection: 'Phân biệt rạch ròi giữa dữ liệu được lưu trữ (CSDL) và phần mềm điều khiển dữ liệu (DBMS) là nền tảng cốt lõi của môn học.'
    },
    knowledge: [
      {
        id: 'tab_11_12_1',
        title: '1. Khái niệm và chức năng của Hệ quản trị CSDL (DBMS)',
        subtitle: 'Database Management System - Cỗ máy quản lý dữ liệu chuyên nghiệp',
        iconName: 'Cpu',
        keyPoints: [
          'Khái niệm: Hệ quản trị cơ sở dữ liệu (Database Management System - DBMS) là phần mềm chuyên dụng cung cấp môi trường để người dùng và các ứng dụng có thể tạo lập, lưu trữ, cập nhật và khai thác dữ liệu từ CSDL một cách an toàn và hiệu quả.',
          'Các chức năng cơ bản của DBMS:',
          '  - Cung cấp ngôn ngữ định nghĩa dữ liệu (DDL): Cho phép tạo, sửa đổi cấu trúc các bảng.',
          '  - Cung cấp ngôn ngữ thao tác dữ liệu (DML): Cho phép thêm, sửa, xóa và truy vấn dữ liệu.',
          '  - Quản lý giao dịch và điều khiển đồng thời: Đảm bảo khi hàng ngàn người cùng rút tiền hoặc mua vé concert cùng một giây thì dữ liệu không bị xung đột.',
          '  - Kiểm soát bảo mật và phục hồi dữ liệu: Phân quyền tài khoản và tự động khôi phục khi mất điện đột ngột.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Người dùng & Ứng dụng', desc: 'Gửi câu hỏi / yêu cầu truy vấn dữ liệu' },
            { label: 'Hệ QTCSDL (DBMS)', desc: 'Xác thực bảo mật, tối ưu câu lệnh, điều phối truy xuất' },
            { label: 'Cơ sở dữ liệu (CSDL)', desc: 'Các tệp dữ liệu lưu trữ vật lý trên ổ đĩa SSD' }
          ]
        },
        emCanNho: [
          'CSDL là tập hợp dữ liệu; Hệ QTCSDL (DBMS) là phần mềm quản lý, khai thác dữ liệu đó.',
          'DBMS cung cấp các ngôn ngữ: Định nghĩa dữ liệu (DDL) và Thao tác dữ liệu (DML).',
          'DBMS đảm bảo kiểm soát truy cập đồng thời, an toàn bảo mật và phục hồi sự cố.'
        ]
      },
      {
        id: 'tab_11_12_2',
        title: '2. Kiến trúc của một Hệ cơ sở dữ liệu hoàn chỉnh',
        subtitle: 'Hệ CSDL = CSDL + Hệ QTCSDL + Phần mềm ứng dụng + Con người',
        iconName: 'Layers',
        keyPoints: [
          'Khái niệm: Hệ cơ sở dữ liệu (Database System) là một hệ thống tổng thể bao gồm 4 thành phần gắn kết chặt chẽ với nhau:',
          '  1. Cơ sở dữ liệu (Database): Kho dữ liệu được tổ chức có cấu trúc.',
          '  2. Hệ quản trị CSDL (DBMS): Phần mềm điều phối và quản lý.',
          '  3. Phần mềm ứng dụng (Application Software): Giao diện thân thiện để người dùng tương tác (ví dụ: Ứng dụng VnEdu, App Mobile Banking, Website bán hàng).',
          '  4. Con người (Users): Gồm người quản trị CSDL (DBA), người lập trình ứng dụng và người dùng đầu cuối (End-users).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thành phần', 'Bản chất', 'Ví dụ cụ thể trong hệ thống VnEdu'],
          rows: [
            ['1. CSDL (Database)', 'Nơi lưu trữ dữ liệu học sinh, điểm số', 'Tập hợp các bảng HOC_SINH, DIEM_SO trên máy chủ'],
            ['2. Hệ QTCSDL (DBMS)', 'Phần mềm lõi quản lý dữ liệu', 'Hệ quản trị CSDL MySQL / Oracle'],
            ['3. Phần mềm ứng dụng', 'Giao diện web/app người dùng nhìn thấy', 'Trang web vnedu.vn, App điện thoại "VnEdu Tra cứu điểm"'],
            ['4. Con người', 'Người vận hành và người dùng', 'Giáo viên nhập điểm, Học sinh xem kết quả, Kỹ sư DBA quản trị']
          ]
        },
        emCanNho: [
          'Hệ CSDL gồm 4 thành phần: CSDL, Hệ QTCSDL, Phần mềm ứng dụng và Con người.',
          'Người dùng thường tương tác với CSDL gián tiếp thông qua Phần mềm ứng dụng.',
          'Người quản trị CSDL (DBA) chịu trách nhiệm cao nhất về hiệu năng và an toàn của hệ thống.'
        ]
      },
      {
        id: 'tab_11_12_3',
        title: '3. Một số hệ QTCSDL thông dụng trên thế giới',
        subtitle: 'Từ phần mềm máy tính cá nhân đến hệ thống máy chủ doanh nghiệp',
        iconName: 'Server',
        keyPoints: [
          '1. MySQL: Hệ QTCSDL quan hệ mã nguồn mở phổ biến nhất thế giới, được sử dụng rộng rãi trên web (Facebook, YouTube, WordPress). Rất nhẹ, nhanh và miễn phí.',
          '2. Microsoft SQL Server: Sản phẩm thương mại mạnh mẽ của Microsoft, tối ưu cho môi trường doanh nghiệp lớn và tích hợp sâu với Windows Server.',
          '3. Oracle Database: Hệ QTCSDL thương mại hàng đầu thế giới về hiệu năng xử lý các giao dịch khổng lồ của các ngân hàng lớn và tập đoàn đa quốc gia.',
          '4. Microsoft Access: Hệ QTCSDL cá nhân nhỏ gọn, dễ dùng, chạy trên máy tính đơn lẻ, phù hợp cho học tập và quản lý quy mô gia đình.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tên Hệ QTCSDL', 'Mô hình bản quyền', 'Quy mô ứng dụng tiêu biểu'],
          rows: [
            ['MySQL', 'Mã nguồn mở (FOSS)', 'Ứng dụng Web, Mạng xã hội, Thương mại điện tử'],
            ['MS SQL Server', 'Thương mại độc quyền', 'Hệ thống tài chính, Doanh nghiệp lớn, Bệnh viện'],
            ['Oracle', 'Thương mại cao cấp', 'Hệ thống Ngân hàng toàn cầu, Viễn thông, Hàng không'],
            ['MS Access', 'Thương mại cá nhân', 'Cá nhân, Cửa hàng nhỏ, Học sinh tập làm quen']
          ]
        },
        emCanNho: [
          'MySQL là hệ QTCSDL nguồn mở phổ biến nhất cho các ứng dụng web.',
          'SQL Server và Oracle là các hệ thống thương mại cấp doanh nghiệp xử lý giao dịch lớn.',
          'Microsoft Access phù hợp cho máy tính cá nhân và quản lý quy mô nhỏ.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thành phần trong Hệ Cơ sở dữ liệu',
      instruction: 'Nối thành phần với bản chất của nó trong một Hệ CSDL:',
      matchingPairs: [
        { id: 'db1', left: 'Cơ sở dữ liệu (CSDL)', right: 'Kho dữ liệu có cấu trúc lưu trữ trên thiết bị nhớ' },
        { id: 'db2', left: 'Hệ QTCSDL (DBMS)', right: 'Phần mềm lõi quản lý, điều phối việc truy xuất dữ liệu' },
        { id: 'db3', left: 'Phần mềm ứng dụng', right: 'Giao diện web/app thân thiện để người dùng thao tác nghiệp vụ' },
        { id: 'db4', left: 'Người quản trị CSDL (DBA)', right: 'Chuyên gia chịu trách nhiệm vận hành, phân quyền và sao lưu CSDL' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa CSDL và Hệ quản trị CSDL (DBMS)?',
        options: [
          'CSDL là tập hợp dữ liệu được lưu trữ, còn DBMS là phần mềm dùng để quản lý và điều phối việc khai thác CSDL đó',
          'CSDL là phần mềm, còn DBMS là dữ liệu',
          'CSDL và DBMS là một từ đồng nghĩa hoàn toàn giống nhau',
          'CSDL là phần cứng máy tính, còn DBMS là dây mạng'
        ],
        correctIndex: 0,
        explanation: 'CSDL là kho chứa dữ liệu; DBMS là chương trình phần mềm quản lý kho dữ liệu đó.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Một "Hệ cơ sở dữ liệu" (Database System) hoàn chỉnh bao gồm 4 thành phần nào?',
        options: [
          'Cơ sở dữ liệu, Hệ quản trị CSDL, Phần mềm ứng dụng và Con người',
          'Bàn phím, Chuột, Màn hình và Vỏ case',
          'Hệ điều hành, Trình duyệt, Game và Dây sạc',
          'Chỉ có CSDL và máy tính'
        ],
        correctIndex: 0,
        explanation: 'Hệ CSDL là chỉnh thể gồm: CSDL + DBMS + Ứng dụng + Con người (DBA, lập trình viên, người dùng).',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Hệ quản trị CSDL mã nguồn mở phổ biến nhất thế giới được sử dụng rộng rãi trên các trang web và ứng dụng Internet là gì?',
        options: ['MySQL', 'Microsoft Paint', 'Adobe Photoshop', 'Calculator'],
        correctIndex: 0,
        explanation: 'MySQL là hệ QTCSDL nguồn mở cực kỳ nổi tiếng, là thành phần chữ M trong bộ ngăn xếp LAMP/WAMP.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Chức năng "Kiểm soát điều khiển đồng thời" của Hệ QTCSDL phát huy tác dụng sống còn trong tình huống nào?',
        options: [
          'Hàng ngàn người cùng đồng thời đặt mua vé một trận bóng đá lúc 9h00 sáng mà không bị bán trùng 1 ghế cho 2 người',
          'Khi máy tính bị mất điện',
          'Khi người dùng muốn tắt màn hình',
          'Khi bàn phím máy tính bị kẹt phím'
        ],
        correctIndex: 0,
        explanation: 'Khóa dữ liệu (Locking) và quản lý giao dịch của DBMS đảm bảo tính đúng đắn khi nhiều người dùng truy cập cùng lúc.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Người chịu trách nhiệm cao nhất về việc đảm bảo CSDL hoạt động an toàn, phân quyền tài khoản và phục hồi sau sự cố được gọi là ai?',
        options: [
          'Người quản trị cơ sở dữ liệu (Database Administrator - DBA)',
          'Học sinh trực nhật',
          'Người bán máy tính',
          'Thợ sửa máy in'
        ],
        correctIndex: 0,
        explanation: 'DBA là chức danh chuyên gia quản lý toàn bộ vòng đời và sự an toàn của hệ thống cơ sở dữ liệu.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Phân Tích 4 Thành Phần Hệ CSDL Ứng Dụng Đặt Xe Công Nghệ (Grab / Be)',
        context: 'Ứng dụng đặt xe công nghệ phục vụ hàng triệu cuốc xe mỗi ngày.',
        mission: 'Xác định rõ 4 thành phần của Hệ CSDL trong hệ thống đặt xe này.',
        steps: [
          '1. CSDL (Database): Bảng Tài xế, Khách hàng, Chuyến đi, Tọa độ GPS, Lịch sử thanh toán.',
          '2. Hệ QTCSDL (DBMS): Hệ quản trị CSDL phân tán tốc độ cao (MySQL, PostgreSQL, MongoDB).',
          '3. Phần mềm ứng dụng: App Grab trên điện thoại của Khách hàng và App trên máy Tài xế.',
          '4. Con người: Khách hàng đặt xe, Tài xế nhận cuốc, Kỹ sư DBA giám sát máy chủ máy bay.'
        ],
        outputRequirement: 'Sơ đồ khối 4 thành phần kèm giải thích luồng dữ liệu đặt xe.',
        practicalTip: 'Khi hàng ngàn khách cùng đặt xe một lúc, DBMS đảm bảo mỗi cuốc xe chỉ được gán cho duy nhất 1 tài xế gần nhất.'
      },
      mindmap: {
        id: 'mm_11_12',
        label: 'HỆ QUẢN TRỊ CSDL',
        color: '#7c3aed',
        children: [
          {
            id: 'mm_11_12_1',
            label: 'Khái niệm & Chức năng',
            children: [
              { id: 'mm_11_12_1_1', label: 'DBMS: Phần mềm quản lý CSDL' },
              { id: 'mm_11_12_1_2', label: 'Ngôn ngữ DDL (Cấu trúc) & DML (Dữ liệu)' },
              { id: 'mm_11_12_1_3', label: 'Kiểm soát đồng thời & Bảo mật' }
            ]
          },
          {
            id: 'mm_11_12_2',
            label: 'Kiến trúc Hệ CSDL',
            children: [
              { id: 'mm_11_12_2_1', label: '1. CSDL (Kho dữ liệu)' },
              { id: 'mm_11_12_2_2', label: '2. Hệ QTCSDL (DBMS lõi)' },
              { id: 'mm_11_12_2_3', label: '3. Phần mềm ứng dụng (Giao diện)' },
              { id: 'mm_11_12_2_4', label: '4. Con người (DBA, Lập trình viên, User)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Hệ CSDL 11',
      badgeIcon: 'Layers',
      roleTitle: 'Chuyên Viên Phân Tích Hệ Thống Thông Tin',
      congratsMessage: 'Tuyệt vời! Bạn đã phân biệt rõ ràng CSDL và DBMS, nắm trọn cấu trúc 4 thành phần của một Hệ cơ sở dữ liệu chuyên nghiệp.',
      skillsUnlocked: ['Phân biệt CSDL vs DBMS', 'Kiến trúc 4 thành phần Hệ CSDL', 'Phân loại các DBMS nổi tiếng']
    }
  },

  // Bài 13: Cơ sở dữ liệu quan hệ
  {
    id: 13,
    code: 'TIN11_B13',
    title: 'Cơ sở dữ liệu quan hệ',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'Mô hình quan hệ',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Vẻ đẹp toán học bảng biểu: Khám phá mô hình CSDL quan hệ kinh điển của E. F. Codd',
      description: 'Làm chủ các khái niệm nền tảng: Bảng dữ liệu (Quan hệ), Cột (Thuộc tính), Hàng (Bản ghi / Bộ), Khóa chính (Primary Key) định danh duy nhất và Khóa ngoài (Foreign Key) kết nối các thực thể.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Mô hình dữ liệu quan hệ', 'Khóa chính Primary Key', 'Khóa ngoài & Mối liên kết']
    },
    objectives: [
      {
        id: 'obj_11_13_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Khái niệm trong mô hình quan hệ',
        description: 'Trình bày được các khái niệm: Bảng (Quan hệ), Cột (Thuộc tính / Trường), Hàng (Bản ghi / Bộ) và vai trò của Khóa chính (Primary Key).',
        iconName: 'Table'
      },
      {
        id: 'obj_11_13_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Xác định khóa chính & khóa ngoài',
        description: 'Chỉ định đúng trường khóa chính định danh duy nhất cho từng bảng và nhận diện được khóa ngoài thiết lập mối liên kết giữa các bảng.',
        iconName: 'Key'
      },
      {
        id: 'obj_11_13_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy mô hình hóa chuẩn xác',
        description: 'Hình thành tư duy cấu trúc logic, không cho phép dữ liệu trùng lặp và đảm bảo tính toàn vẹn tham chiếu giữa các thực thể.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Hai bạn học sinh trùng cả Họ và Tên trong cùng một lớp',
      scenario: 'Lớp 11A1 có hai bạn cùng tên là "Nguyễn Văn Nam", cùng sinh năm 2008 và cùng học lực Giỏi. Khi giáo viên nhập điểm thi vào hệ thống, làm sao để phần mềm không bao giờ bị ghi nhầm điểm của bạn này sang bạn kia?',
      pollQuestion: 'Giải pháp kỹ thuật bắt buộc trong Cơ sở dữ liệu quan hệ để phân biệt hai bản ghi có nội dung giống nhau là gì?',
      pollOptions: [
        { id: 'p11_13_1', text: 'Cấp cho mỗi bạn một "Mã định danh học sinh" (MaHS) duy nhất làm Khóa chính (Primary Key)', votesPercent: 96, isPopular: true, insight: 'Chính xác! Khóa chính (Primary Key) đảm bảo mỗi hàng trong bảng luôn được định danh độc nhất, không bao giờ nhầm lẫn.' },
        { id: 'p11_13_2', text: 'Đổi tên một bạn thành tên khác', votesPercent: 2, insight: 'Tên khai sinh của học sinh không thể tùy tiện thay đổi.' },
        { id: 'p11_13_3', text: 'Ghi thêm biệt danh vào sau tên', votesPercent: 2, insight: 'Biệt danh không phải quy chuẩn dữ liệu chính thức.' }
      ],
      reflection: 'Khóa chính là chiếc mỏ neo định danh duy nhất cho từng bản ghi trong thế giới Cơ sở dữ liệu quan hệ.'
    },
    knowledge: [
      {
        id: 'tab_11_13_1',
        title: '1. Mô hình dữ liệu quan hệ (Bảng, Cột/Trường, Hàng/Bản ghi)',
        subtitle: 'Cấu trúc ma trận hàng và cột chuẩn mực do E. F. Codd sáng lập',
        iconName: 'Table',
        keyPoints: [
          'Mô hình quan hệ (Relational Model): Dữ liệu được tổ chức dưới dạng các bảng 2 chiều (gọi là Quan hệ - Relation).',
          'Các thành phần cấu trúc của Bảng:',
          '  - Bảng (Table / Relation): Mỗi bảng đại diện cho một thực thể độc lập (ví dụ: Bảng `HOC_SINH`, Bảng `MON_HOC`).',
          '  - Cột (Column / Field / Attribute - Thuộc tính): Mỗi cột mô tả một đặc trưng của đối tượng (ví dụ: `MaHS`, `HoTen`, `NgaySinh`). Tất cả các giá trị trong một cột phải có cùng kiểu dữ liệu.',
          '  - Hàng (Row / Record / Tuple - Bộ dữ liệu / Bản ghi): Mỗi hàng chứa thông tin trọn vẹn về một đối tượng cụ thể duy nhất.',
          'Nguyên tắc bảng quan hệ: Không có hai hàng giống hệt nhau 100%; thứ tự của các hàng và các cột không có ý nghĩa toán học.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Thuật ngữ đời thường', 'Thuật ngữ Cơ sở dữ liệu', 'Thuật ngữ Toán học quan hệ'],
          rows: [
            ['Bảng dữ liệu', 'Bảng (Table)', 'Quan hệ (Relation)'],
            ['Cột dữ liệu', 'Trường (Field)', 'Thuộc tính (Attribute)'],
            ['Hàng dữ liệu', 'Bản ghi (Record)', 'Bộ dữ liệu (Tuple)'],
            ['Tiêu đề bảng', 'Cấu trúc bảng (Schema)', 'Lược đồ quan hệ']
          ]
        },
        emCanNho: [
          'CSDL quan hệ tổ chức dữ liệu dưới dạng các bảng hai chiều gồm hàng và cột.',
          'Cột (Trường) là các thuộc tính; Hàng (Bản ghi) là thông tin của một đối tượng cụ thể.',
          'Các giá trị trong cùng một cột phải có cùng kiểu dữ liệu (Data Type).'
        ]
      },
      {
        id: 'tab_11_13_2',
        title: '2. Khóa chính (Primary Key) và tính duy nhất',
        subtitle: 'Định danh độc nhất cho từng bản ghi dữ liệu',
        iconName: 'Key',
        keyPoints: [
          'Khái niệm: Khóa chính (Primary Key - PK) là một hoặc một nhóm trường dùng để phân biệt duy nhất từng bản ghi (hàng) trong bảng.',
          'Hai quy tắc bất di bất dịch của Khóa chính:',
          '  1. Tính duy nhất (Unique): Không bao giờ được phép có hai hàng chứa cùng một giá trị khóa chính.',
          '  2. Không được để rỗng (NOT NULL): Giá trị khóa chính luôn phải được điền, không được để trống.',
          'Ví dụ thực tế: Số Căn cước công dân (CCCD), Mã số định danh học sinh (MaHS), Mã số sách (MaSach), Mã biển số xe.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Trường MaHS: "HS001"', desc: 'Định danh duy nhất bạn Nguyễn Văn An' },
            { label: 'Trường MaHS: "HS002"', desc: 'Định danh duy nhất bạn Trần Thị Mai' },
            { label: 'Ràng buộc Primary Key', desc: 'Từ chối tuyệt đối nếu ai đó nhập trùng "HS001"' }
          ]
        },
        emCanNho: [
          'Khóa chính (Primary Key) phân biệt duy nhất từng bản ghi trong bảng.',
          'Giá trị khóa chính không được trùng lặp và không bao giờ được để rỗng (NOT NULL).',
          'Mỗi bảng trong CSDL quan hệ luôn cần có một khóa chính xác định.'
        ]
      },
      {
        id: 'tab_11_13_3',
        title: '3. Khóa ngoài và liên kết giữa các bảng',
        subtitle: 'Kết nối dữ liệu đa bảng, xóa bỏ dư thừa thông tin',
        iconName: 'Link',
        keyPoints: [
          'Khái niệm: Khóa ngoài (Foreign Key - FK) là một trường ở bảng này (bảng con) tham chiếu trực tiếp đến Khóa chính của bảng khác (bảng cha).',
          'Tác dụng của Khóa ngoài:',
          '  - Thiết lập mối liên kết logic giữa các bảng với nhau.',
          '  - Đảm bảo tính toàn vẹn tham chiếu (Referential Integrity): Không thể nhập một bản ghi điểm số cho một Mã học sinh chưa hề tồn tại trong bảng Học sinh.',
          'Ví dụ: Bảng `KET_QUA_HOC_TAP` có trường `MaHS` đóng vai trò là Khóa ngoài tham chiếu tới trường `MaHS` là Khóa chính của bảng `HOC_SINH`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bảng HOC_SINH (Bảng cha)', desc: 'Khóa chính: [MaHS], HoTen, NgaySinh' },
            { label: 'Liên kết Khóa ngoài (FK)', desc: 'MaHS trong bảng Điểm tham chiếu tới MaHS bảng Học sinh' },
            { label: 'Bảng DIEM_SO (Bảng con)', desc: 'Khóa chính: [MaDiem], Khóa ngoài: (MaHS), MaMon, Diem' }
          ]
        },
        emCanNho: [
          'Khóa ngoài (Foreign Key) tham chiếu đến khóa chính của bảng khác để liên kết dữ liệu.',
          'Khóa ngoài ngăn chặn việc tạo ra các dữ liệu "mồ côi" không có nguồn gốc tham chiếu.',
          'Liên kết bảng giúp loại bỏ triệt để dư thừa dữ liệu mà vẫn bảo đảm đầy đủ thông tin.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Khái niệm Mô hình Quan hệ và Định nghĩa',
      instruction: 'Nối khái niệm CSDL quan hệ với định nghĩa chính xác:',
      matchingPairs: [
        { id: 'rel1', left: 'Khóa chính (Primary Key)', right: 'Trường định danh duy nhất cho từng hàng, không được trùng, không rỗng' },
        { id: 'rel2', left: 'Khóa ngoài (Foreign Key)', right: 'Trường ở bảng con tham chiếu đến khóa chính ở bảng cha để kết nối' },
        { id: 'rel3', left: 'Bản ghi (Record / Tuple)', right: 'Một hàng dữ liệu chứa đầy đủ thông tin về một đối tượng cụ thể' },
        { id: 'rel4', left: 'Trường (Field / Attribute)', right: 'Một cột dữ liệu mô tả một đặc trưng có cùng kiểu dữ liệu' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong mô hình cơ sở dữ liệu quan hệ, dữ liệu được tổ chức dưới dạng cấu trúc nào?',
        options: [
          'Các bảng hai chiều gồm các hàng (bản ghi) và các cột (thuộc tính)',
          'Một bức tranh vẽ trên giấy',
          'Một danh sách nhạc MP3',
          'Các dòng lệnh văn bản không có tiêu đề'
        ],
        correctIndex: 0,
        explanation: 'Mô hình quan hệ do E.F.Codd phát minh biểu diễn toàn bộ dữ liệu dưới dạng các bảng 2 chiều.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khóa chính (Primary Key) của một bảng dữ liệu BẮT BUỘC phải thỏa mãn hai điều kiện nào sau đây?',
        options: [
          'Các giá trị không được trùng nhau (duy nhất) và không được để trống (NOT NULL)',
          'Phải là số chẵn và viết bằng chữ màu đỏ',
          'Phải dài trên 50 ký tự',
          'Phải thay đổi sau mỗi 5 phút'
        ],
        correctIndex: 0,
        explanation: 'Tính duy nhất và tính bắt buộc có giá trị (NOT NULL) là hai nguyên lý nền tảng của khóa chính.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong bảng HOC_SINH gồm các trường: MaHS, HoTen, NgaySinh, QueQuan, trường nào sau đây NÊN ĐƯỢC CHỌN làm Khóa chính?',
        options: ['MaHS (Mã học sinh)', 'HoTen (vì có thể trùng nhau)', 'QueQuan (vì nhiều bạn cùng quê)', 'NgaySinh'],
        correctIndex: 0,
        explanation: 'Chỉ có MaHS là mã định danh duy nhất được nhà trường cấp riêng cho từng bạn, không bao giờ trùng nhau.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Vai trò cốt lõi của Khóa ngoài (Foreign Key) trong cơ sở dữ liệu quan hệ là gì?',
        options: [
          'Thiết lập mối liên kết giữa các bảng và bảo đảm tính toàn vẹn tham chiếu dữ liệu',
          'Khóa màn hình máy tính',
          'Tăng tốc độ gõ bàn phím',
          'Đổi màu giao diện phần mềm'
        ],
        correctIndex: 0,
        explanation: 'Khóa ngoài liên kết bảng con với bảng cha, ngăn chặn nhập mã tham chiếu không tồn tại.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Hiện tượng gì sẽ xảy ra nếu bạn cố gắng nhập một bản ghi điểm số với MaHS = "HS999" vào bảng Điểm, trong khi bảng HOC_SINH chưa hề có học sinh nào mang mã "HS999"?',
        options: [
          'Hệ QTCSDL sẽ từ chối lệnh thêm và báo lỗi vi phạm ràng buộc khóa ngoài (Foreign Key Constraint Fail)',
          'Hệ thống tự động tạo ra một học sinh mới',
          'Máy tính bị tắt nguồn',
          'Không có lỗi gì xảy ra'
        ],
        correctIndex: 0,
        explanation: 'Ràng buộc toàn vẹn tham chiếu của khóa ngoài bảo vệ CSDL không bị sinh ra các dữ liệu rác không rõ nguồn gốc.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết Kế Lược Đồ Bảng Cho Hệ Thống Bán Hàng Trực Tuyến',
        context: 'Xây dựng cấu trúc CSDL quản lý đơn hàng cho một cửa hàng sách online.',
        mission: 'Thiết kế 2 bảng KHACH_HANG và DON_HANG, chỉ rõ khóa chính và khóa ngoài.',
        steps: [
          'Bảng 1: KHACH_HANG (MaKH, HoTen, SoDienThoai, DiaChi) -> Khóa chính: MaKH.',
          'Bảng 2: DON_HANG (MaDH, NgayDat, TongTien, MaKH) -> Khóa chính: MaDH.',
          'Chỉ ra Khóa ngoài: Trường MaKH trong bảng DON_HANG là khóa ngoài tham chiếu tới MaKH của bảng KHACH_HANG.',
          'Giải thích ý nghĩa: Một khách hàng có thể đặt nhiều đơn hàng khác nhau (Quan hệ 1 - Nhiều).'
        ],
        outputRequirement: 'Sơ đồ liên kết ERD giữa 2 bảng với đường nối khóa chính - khóa ngoài.',
        practicalTip: 'Khóa ngoài ở bảng con luôn phải cùng kiểu dữ liệu (ví dụ cùng là INT hoặc VARCHAR) với khóa chính ở bảng cha.'
      },
      mindmap: {
        id: 'mm_11_13',
        label: 'CSDL QUAN HỆ',
        color: '#2563eb',
        children: [
          {
            id: 'mm_11_13_1',
            label: 'Cấu trúc ma trận',
            children: [
              { id: 'mm_11_13_1_1', label: 'Bảng (Quan hệ - Relation)' },
              { id: 'mm_11_13_1_2', label: 'Cột (Thuộc tính - Attribute)' },
              { id: 'mm_11_13_1_3', label: 'Hàng (Bản ghi - Tuple)' }
            ]
          },
          {
            id: 'mm_11_13_2',
            label: 'Khóa & Liên kết',
            children: [
              { id: 'mm_11_13_2_1', label: 'Khóa chính (PK): Duy nhất, NOT NULL' },
              { id: 'mm_11_13_2_2', label: 'Khóa ngoài (FK): Tham chiếu bảng cha' },
              { id: 'mm_11_13_2_3', label: 'Toàn vẹn tham chiếu' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Quan Hệ Dữ Liệu 11',
      badgeIcon: 'Table',
      roleTitle: 'Chuyên Viên Mô Hình Hóa Dữ Liệu Quan Hệ',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ các khái niệm Bảng, Khóa chính và Khóa ngoài - sẵn sàng bước vào ngôn ngữ truy vấn dữ liệu SQL!',
      skillsUnlocked: ['Hiểu mô hình CSDL quan hệ', 'Xác định khóa chính Primary Key', 'Thiết lập khóa ngoài Foreign Key']
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
      tagline: 'Tiếng nói của dữ liệu: Khám phá ngôn ngữ chuẩn quốc tế giao tiếp với mọi CSDL',
      description: 'Làm quen với ngôn ngữ SQL (Structured Query Language), các nhóm lệnh DDL, DML, DQL và luyện viết câu lệnh truy vấn dữ liệu kinh điển SELECT ... FROM ... WHERE ... ORDER BY trong sandbox tương tác.',
      accentColor: 'from-blue-600 to-cyan-500',
      keyHighlights: ['Ngôn ngữ SQL chuẩn hóa', 'Cú pháp câu lệnh SELECT', 'Interactive SQL Sandbox']
    },
    objectives: [
      {
        id: 'obj_11_14_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu vai trò & các nhóm lệnh SQL',
        description: 'Trình bày được vai trò của SQL trong CSDL quan hệ và phân biệt được các nhóm lệnh chính: DDL (định nghĩa dữ liệu), DML (thao tác dữ liệu) và DQL (truy vấn dữ liệu).',
        iconName: 'Code'
      },
      {
        id: 'obj_11_14_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết câu lệnh truy vấn SELECT chuẩn',
        description: 'Viết và thực thi thành thạo câu lệnh truy vấn dữ liệu có điều kiện lọc và sắp xếp bằng cú pháp `SELECT ... FROM ... WHERE ... ORDER BY` trên môi trường thực hành.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_14_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy truy xuất dữ liệu tối ưu',
        description: 'Hình thành thói quen chỉ truy vấn các cột cần thiết (thay vì lạm dụng SELECT *) để tiết kiệm băng thông và tài nguyên máy chủ.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Làm sao để "nói chuyện" với Cơ sở dữ liệu?',
      scenario: 'Cơ sở dữ liệu chứa hàng triệu bản ghi học sinh. Để bảo máy tính: "Hãy cho tôi danh sách các học sinh Lớp 11A1 có điểm trung bình từ 8.0 trở lên và xếp điểm từ cao xuống thấp", chúng ta dùng ngôn ngữ nào?',
      pollQuestion: 'Ngôn ngữ tiêu chuẩn quốc tế được sinh ra để con người ra lệnh truy vấn cho máy chủ CSDL là gì?',
      pollOptions: [
        { id: 'p11_14_1', text: 'Ngôn ngữ truy vấn có cấu trúc SQL (Structured Query Language)', votesPercent: 95, isPopular: true, insight: 'Chính xác! SQL là ngôn ngữ chuẩn mực ANSI/ISO được hỗ trợ bởi tất cả các hệ QTCSDL lớn trên thế giới.' },
        { id: 'p11_14_2', text: 'Ngôn ngữ Tiếng Việt gõ có dấu', votesPercent: 3, insight: 'Máy chủ CSDL không hiểu ngôn ngữ tự nhiên trực tiếp nếu không qua trình biên dịch SQL.' },
        { id: 'p11_14_3', text: 'Mã nhị phân 0 và 1', votesPercent: 2, insight: 'Con người không thể nhớ nổi hàng triệu bit nhị phân để truy vấn dữ liệu hàng ngày.' }
      ],
      reflection: 'SQL là kỹ năng công nghệ số 1 được các nhà tuyển dụng IT và khoa học dữ liệu tìm kiếm nhiều nhất trên thế giới.'
    },
    knowledge: [
      {
        id: 'tab_11_14_1',
        title: '1. Giới thiệu ngôn ngữ SQL và các nhóm lệnh',
        subtitle: 'Ngôn ngữ chuẩn quốc tế cho cơ sở dữ liệu quan hệ',
        iconName: 'Code',
        keyPoints: [
          'SQL (Structured Query Language): Ngôn ngữ truy vấn mang tính khai báo (Declarative) - người dùng chỉ cần chỉ ra "Dữ liệu nào tôi muốn lấy" thay vì phải lập trình từng bước cách lấy dữ liệu.',
          'Các nhóm lệnh chính trong SQL:',
          '  - DDL (Data Definition Language - Định nghĩa dữ liệu): Các lệnh tạo lập, thay đổi cấu trúc bảng (`CREATE`, `ALTER`, `DROP`).',
          '  - DML (Data Manipulation Language - Thao tác dữ liệu): Các lệnh thêm, sửa, xóa bản ghi (`INSERT`, `UPDATE`, `DELETE`).',
          '  - DQL (Data Query Language - Truy vấn dữ liệu): Lệnh trích xuất thông tin phục vụ người dùng (`SELECT`).',
          '  - DCL (Data Control Language - Điều khiển dữ liệu): Phân quyền bảo mật (`GRANT`, `REVOKE`).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nhóm lệnh SQL', 'Từ khóa tiêu biểu', 'Mục đích sử dụng'],
          rows: [
            ['DQL (Truy vấn dữ liệu)', 'SELECT ... FROM ... WHERE', 'Tìm kiếm, lọc và trích xuất dữ liệu từ bảng'],
            ['DML (Thao tác dữ liệu)', 'INSERT INTO, UPDATE, DELETE', 'Thêm bản ghi mới, sửa đổi hoặc xóa dữ liệu'],
            ['DDL (Định nghĩa cấu trúc)', 'CREATE, ALTER, DROP', 'Tạo mới bảng, sửa đổi cột hoặc xóa hẳn một bảng'],
            ['DCL (Phân quyền bảo mật)', 'GRANT, REVOKE', 'Cấp hoặc thu hồi quyền truy cập của người dùng']
          ]
        },
        emCanNho: [
          'SQL là ngôn ngữ chuẩn quốc tế để giao tiếp với các hệ CSDL quan hệ.',
          'Gồm 4 nhóm lệnh chính: DQL (Truy vấn), DML (Thao tác), DDL (Định nghĩa), DCL (Phân quyền).',
          'SQL là ngôn ngữ khai báo: ta chỉ cần nói ta muốn dữ liệu gì, máy tính tự tối ưu cách lấy.'
        ]
      },
      {
        id: 'tab_11_14_2',
        title: '2. Cú pháp câu lệnh truy vấn SELECT ... FROM ... WHERE ... ORDER BY',
        subtitle: 'Bộ tứ quyền lực trích xuất thông tin có điều kiện và sắp xếp',
        iconName: 'Play',
        keyPoints: [
          'Cú pháp chuẩn của câu truy vấn dữ liệu:',
          '  `SELECT <Danh sách các cột cần lấy>`',
          '  `FROM <Tên bảng chứa dữ liệu>`',
          '  `WHERE <Điều kiện lọc dữ liệu>`',
          '  `ORDER BY <Tên cột cần sắp xếp> [ASC | DESC];`',
          'Giải thích các mệnh đề:',
          '  - `SELECT *`: Lấy tất cả các cột trong bảng.',
          '  - `SELECT MaHS, HoTen`: Chỉ lấy 2 cột MaHS và HoTen (tối ưu bộ nhớ).',
          '  - `WHERE DiemTB >= 8.0 AND Lop = \'11A1\'`: Điều kiện lọc kết hợp toán tử logic.',
          '  - `ORDER BY DiemTB DESC`: Sắp xếp theo điểm trung bình giảm dần (DESC: lớn về bé; ASC: bé đến lớn mặc định).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'SELECT MaHS, HoTen, Lop, DiemTB\nFROM HOC_SINH\nWHERE DiemTB >= 8.5\nORDER BY DiemTB DESC;'
        },
        emCanNho: [
          'Cấu trúc cơ bản: SELECT (chọn cột) -> FROM (chọn bảng) -> WHERE (lọc hàng) -> ORDER BY (sắp xếp).',
          'Dùng `WHERE` với các toán tử so sánh (=, >, <, >=, <=, <>) và toán tử logic (AND, OR, NOT).',
          'Mệnh đề `ORDER BY` dùng `DESC` để sắp xếp giảm dần, `ASC` để sắp xếp tăng dần.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Mệnh đề SQL và Chức năng Tương ứng',
      instruction: 'Nối mệnh đề câu lệnh SQL với chức năng đúng:',
      matchingPairs: [
        { id: 'sql1', left: 'SELECT HoTen, DiemTB', right: 'Chỉ định các cột thông tin cần hiển thị kết quả' },
        { id: 'sql2', left: 'FROM HOC_SINH', right: 'Chỉ định bảng dữ liệu gốc cần truy xuất' },
        { id: 'sql3', left: 'WHERE DiemTB >= 8.0', right: 'Thiết lập điều kiện lọc các bản ghi thỏa mãn' },
        { id: 'sql4', left: 'ORDER BY DiemTB DESC', right: 'Sắp xếp danh sách kết quả theo điểm từ cao xuống thấp' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong câu lệnh SQL, mệnh đề nào sau đây dùng để lọc các hàng thỏa mãn điều kiện nhất định?',
        options: ['WHERE', 'FROM', 'SELECT', 'ORDER BY'],
        correctIndex: 0,
        explanation: 'Mệnh đề WHERE lọc và chỉ giữ lại những hàng dữ liệu thỏa mãn điều kiện logic.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để lấy TẤT CẢ các cột dữ liệu trong bảng HOC_SINH, ký hiệu nào sau đây được sử dụng ngay sau từ khóa SELECT?',
        options: ['Dấu sao (*)', 'Dấu cộng (+)', 'Dấu chấm hỏi (?)', 'Dấu thăng (#)'],
        correctIndex: 0,
        explanation: 'Cú pháp SELECT * đại diện cho việc trích xuất toàn bộ tất cả các cột có trong bảng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Câu lệnh SQL nào sau đây viết ĐÚNG CÚ PHÁP để tìm các học sinh có điểm trung bình từ 8.0 trở lên trong bảng HOC_SINH?',
        options: [
          'SELECT * FROM HOC_SINH WHERE DiemTB >= 8.0;',
          'FIND HOC_SINH WITH DiemTB >= 8.0;',
          'GET ALL FROM DiemTB >= 8.0 WHERE HOC_SINH;',
          'SELECT WHERE DiemTB >= 8.0 FROM *;'
        ],
        correctIndex: 0,
        explanation: 'Thứ tự chuẩn là: SELECT (cột) FROM (bảng) WHERE (điều kiện); kết thúc bằng dấu chấm phẩy.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Muốn danh sách học sinh được sắp xếp theo Ngày sinh từ người lớn tuổi nhất đến người nhỏ tuổi nhất (Ngày sinh tăng dần), bạn sử dụng từ khóa nào sau ORDER BY NgaySinh?',
        options: ['ASC (Ascending - Tăng dần)', 'DESC (Descending)', 'UP', 'DOWN'],
        correctIndex: 0,
        explanation: 'ASC sắp xếp tăng dần theo giá trị (từ bé đến lớn, ngày xa xưa đến ngày gần đây).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Điều gì xảy ra nếu bạn thực hiện một câu truy vấn SELECT trên bảng có 10 triệu bản ghi nhưng quên viết mệnh đề WHERE?',
        options: [
          'Máy chủ sẽ quét và tải toàn bộ 10 triệu bản ghi ra màn hình, gây nghẽn mạng và đơ hệ thống',
          'Máy chủ tự động tắt',
          'Không có dữ liệu nào được trả về',
          'Máy tính tự động xóa bảng'
        ],
        correctIndex: 0,
        explanation: 'Không có WHERE nghĩa là lấy toàn bộ bảng (Full Table Scan), gây lãng phí bộ nhớ và CPU nghiêm trọng.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Truy Vấn Quản Trị: Lọc Danh Sách Học Bổng Học Kỳ 1',
        context: 'Trường học trao 20 suất học bổng cho học sinh có điểm cao nhất.',
        mission: 'Viết câu lệnh SQL truy vấn danh sách học sinh đạt tiêu chuẩn nhận học bổng.',
        steps: [
          'Yêu cầu 1: Chỉ lấy các cột: `MaHS`, `HoTen`, `Lop`, `DiemTB`.',
          'Yêu cầu 2: Chỉ xét những bạn có hạnh kiểm Tốt (`HanhKiem = \'Tot\'`) và `DiemTB >= 9.0`.',
          'Yêu cầu 3: Sắp xếp theo điểm trung bình giảm dần (`ORDER BY DiemTB DESC`).',
          'Cú pháp hoàn chỉnh: `SELECT MaHS, HoTen, Lop, DiemTB FROM HOC_SINH WHERE HanhKiem = \'Tot\' AND DiemTB >= 9.0 ORDER BY DiemTB DESC;`'
        ],
        outputRequirement: 'Câu lệnh SQL chính xác và kết quả bảng dữ liệu được lọc trơn tru.',
        practicalTip: 'Chuỗi văn bản trong SQL luôn phải đặt bên trong dấu nháy đơn, ví dụ: `\'Tot\'`.'
      },
      mindmap: {
        id: 'mm_11_14',
        label: 'NGÔN NGỮ SQL',
        color: '#0284c7',
        children: [
          {
            id: 'mm_11_14_1',
            label: 'Phân loại nhóm lệnh',
            children: [
              { id: 'mm_11_14_1_1', label: 'DQL: SELECT (Truy vấn)' },
              { id: 'mm_11_14_1_2', label: 'DML: INSERT, UPDATE, DELETE' },
              { id: 'mm_11_14_1_3', label: 'DDL: CREATE, ALTER, DROP' }
            ]
          },
          {
            id: 'mm_11_14_2',
            label: 'Cú pháp SELECT chuẩn',
            children: [
              { id: 'mm_11_14_2_1', label: 'SELECT (Danh sách cột)' },
              { id: 'mm_11_14_2_2', label: 'FROM (Tên bảng)' },
              { id: 'mm_11_14_2_3', label: 'WHERE (Điều kiện lọc)' },
              { id: 'mm_11_14_2_4', label: 'ORDER BY (ASC / DESC)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ Truy Vấn SQL 11',
      badgeIcon: 'Code',
      roleTitle: 'Chuyên Viên Truy Vấn Dữ Liệu SQL',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ câu lệnh SELECT và bắt đầu tự tay truy vấn thông tin trên cơ sở dữ liệu chuyên nghiệp.',
      skillsUnlocked: ['Phân biệt các nhóm lệnh SQL', 'Cú pháp SELECT FROM WHERE', 'Sắp xếp dữ liệu ORDER BY']
    }
  },

  // Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu
  {
    id: 15,
    code: 'TIN11_B15',
    title: 'Bảo mật và an toàn hệ cơ sở dữ liệu',
    themeId: 4,
    themeName: 'Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu',
    topicBadge: 'An toàn CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Pháo đài dữ liệu số: Bảo vệ tài sản tri thức trước nguy cơ rò rỉ và tấn công mạng',
      description: 'Khám phá 3 trụ cột an toàn thông tin CIA (Bí mật, Toàn vẹn, Sẵn sàng); kỹ thuật phân quyền người dùng với lệnh GRANT/REVOKE, mã hóa dữ liệu nhạy cảm và chiến lược sao lưu phục hồi dữ liệu định kỳ.',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Mô hình an toàn CIA', 'Phân quyền GRANT / REVOKE', 'Mã hóa & Sao lưu dự phòng']
    },
    objectives: [
      {
        id: 'obj_11_15_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các nguyên tắc an toàn CSDL',
        description: 'Trình bày được 3 mục tiêu an toàn thông tin (Bí mật - Confidentiality, Toàn vẹn - Integrity, Sẵn sàng - Availability) và các nguy cơ mất an toàn CSDL.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_11_15_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thiết kế phân quyền & kế hoạch sao lưu',
        description: 'Thiết kế được ma trận phân quyền tài khoản (phân quyền xem, sửa theo vai trò người dùng bằng GRANT/REVOKE) và xây dựng được lịch sao lưu phục hồi dữ liệu.',
        iconName: 'Lock'
      },
      {
        id: 'obj_11_15_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức tuân thủ pháp luật an ninh mạng',
        description: 'Có thái độ nghiêm túc bảo vệ dữ liệu bí mật cá nhân, tuân thủ Luật An ninh mạng và kiên quyết không đánh cắp hoặc phát tán dữ liệu người khác.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Dữ liệu điểm thi bị lộ trước ngày công bố',
      scenario: 'Một tuần trước kỳ thi tốt nghiệp THPT, danh sách đề thi và đáp án chính thức bị rao bán trên mạng xã hội do một máy tính của phòng Khảo thí bị tin tặc xâm nhập qua tài khoản dùng chung có mật khẩu mặc định "admin123".',
      pollQuestion: 'Nguyên tắc an toàn dữ liệu cơ bản nào đã bị vi phạm nghiêm trọng trong tình huống này?',
      pollOptions: [
        { id: 'p11_15_1', text: 'Tính bảo mật (Confidentiality) bị phá vỡ do mật khẩu yếu và không phân quyền chặt chẽ', votesPercent: 94, isPopular: true, insight: 'Chính xác! Tính bảo mật đòi hỏi thông tin chỉ được phép truy cập bởi những người được cấp quyền hợp lệ.' },
        { id: 'p11_15_2', text: 'Do máy tính để bàn bị bụi bẩn', votesPercent: 3, insight: 'Bụi bẩn vật lý không làm lộ dữ liệu mật ra ngoài mạng.' },
        { id: 'p11_15_3', text: 'Do đường truyền cáp quang bị ẩm', votesPercent: 3, insight: 'Đường truyền ẩm không gây rò rỉ mật khẩu quản trị.' }
      ],
      reflection: 'Dữ liệu là tài sản quý giá nhất của tổ chức; mất dữ liệu hoặc lộ thông tin mật có thể gây thiệt hại khôn lường về uy tín và pháp lý.'
    },
    knowledge: [
      {
        id: 'tab_11_15_1',
        title: '1. Các nguyên tắc an toàn CSDL (Bí mật, toàn vẹn, sẵn sàng)',
        subtitle: 'Tam giác an toàn thông tin kinh điển CIA Triad',
        iconName: 'Shield',
        keyPoints: [
          'Mô hình tam giác bảo mật CIA:',
          '  - Tính bí mật (Confidentiality): Đảm bảo thông tin chỉ được tiếp cận bởi những người hoặc tiến trình được cấp quyền hợp lệ. Ngăn chặn việc xem trộm số dư tài khoản, mật khẩu.',
          '  - Tính toàn vẹn (Integrity): Đảm bảo dữ liệu không bị sửa đổi trái phép, không bị giả mạo hoặc làm sai lệch trong quá trình lưu trữ và truyền tải.',
          '  - Tính sẵn sàng (Availability): Đảm bảo hệ thống luôn hoạt động trơn tru, sẵn sàng phục vụ người dùng hợp pháp bất kỳ lúc nào cần truy cập.',
          'Các mối đe dọa an toàn CSDL: Tấn công tiêm mã độc SQL (SQL Injection), phần mềm gián điệp đánh cắp tài khoản quản trị, nhân viên nội bộ bán dữ liệu và thảm họa thiên tai hỏng hóc máy chủ.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Tính Bí Mật (Confidentiality)', desc: 'Chỉ người được cấp quyền mới được xem' },
            { label: '2. Tính Toàn Vẹn (Integrity)', desc: 'Dữ liệu không bị chỉnh sửa trái phép' },
            { label: '3. Tính Sẵn Sàng (Availability)', desc: 'Hệ thống luôn chạy 24/7 không bị sập' }
          ]
        },
        emCanNho: [
          '3 nguyên tắc an toàn CSDL (CIA): Tính bí mật, Tính toàn vẹn và Tính sẵn sàng.',
          'Bí mật: Không bị xem trộm; Toàn vẹn: Không bị sửa bậy; Sẵn sàng: Không bị sập hệ thống.',
          'Bảo mật CSDL kết hợp cả biện pháp kỹ thuật phần mềm và quy chế con người.'
        ]
      },
      {
        id: 'tab_11_15_2',
        title: '2. Xác thực và phân quyền truy cập (GRANT, REVOKE)',
        subtitle: 'Cấp quyền đúng người, đúng việc theo nguyên tắc đặc quyền tối thiểu',
        iconName: 'UserCheck',
        keyPoints: [
          'Xác thực người dùng (Authentication): Xác minh danh tính qua Tên đăng nhập (Username), Mật khẩu (Password), Vân tay hoặc mã OTP.',
          'Phân quyền người dùng (Authorization): Giới hạn những hành vi cụ thể mà tài khoản đó được phép làm trên CSDL:',
          '  - Quyền SELECT: Chỉ được xem dữ liệu.',
          '  - Quyền INSERT/UPDATE: Được phép thêm mới hoặc chỉnh sửa dữ liệu.',
          '  - Quyền DELETE/DROP: Quyền cực kỳ nguy hiểm, chỉ cấp cho người quản trị cấp cao.',
          'Lệnh quản trị quyền trong SQL:',
          '  - `GRANT <Quyền> ON <Bảng> TO <Người_dùng>;`: Cấp quyền truy cập.',
          '  - `REVOKE <Quyền> ON <Bảng> FROM <Người_dùng>;`: Thu hồi quyền đã cấp.',
          'Nguyên tắc đặc quyền tối thiểu (Least Privilege): Chỉ cấp vừa đủ các quyền cần thiết để người dùng hoàn thành công việc, không cấp thừa quyền.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Vai trò người dùng', 'Quyền được cấp trên bảng DIEM', 'Lệnh SQL tương ứng'],
          rows: [
            ['Học sinh / Phụ huynh', 'Chỉ được xem điểm cá nhân (SELECT)', 'GRANT SELECT ON DIEM TO hocsinh;'],
            ['Giáo viên bộ môn', 'Được xem và nhập sửa điểm môn mình dạy', 'GRANT SELECT, UPDATE ON DIEM TO giaovien;'],
            ['Người quản trị (DBA)', 'Toàn quyền cấu hình, xóa bảng', 'GRANT ALL PRIVILEGES ON *.* TO admin;']
          ]
        },
        emCanNho: [
          'Xác thực nhận diện danh tính; Phân quyền kiểm soát hành vi được phép làm.',
          'Dùng lệnh `GRANT` để cấp quyền và `REVOKE` để thu hồi quyền truy cập.',
          'Áp dụng nguyên tắc đặc quyền tối thiểu để giảm thiểu tối đa rủi ro bảo mật.'
        ]
      },
      {
        id: 'tab_11_15_3',
        title: '3. Mã hóa dữ liệu và sao lưu phục hồi',
        subtitle: 'Lớp khiên mã hóa và phao cứu sinh sao lưu định kỳ',
        iconName: 'Lock',
        keyPoints: [
          'Mã hóa dữ liệu (Encryption): Chuyển đổi dữ liệu từ dạng đọc được (Plaintext) sang dạng mật mã xáo trộn vô nghĩa (Ciphertext). Kẻ xấu dù có lấy trộm được tệp CSDL cũng không thể đọc được nếu không có chìa khóa giải mã. Áp dụng bắt buộc cho: Mật khẩu (băm một chiều Bcrypt/SHA-256), Số thẻ tín dụng, Số CCCD.',
          'Sao lưu dữ liệu định kỳ (Data Backup):',
          '  - Sao lưu toàn phần (Full Backup): Sao chép toàn bộ CSDL tại một thời điểm.',
          '  - Sao lưu vi sai (Differential) hoặc Gia tăng (Incremental): Chỉ sao lưu phần dữ liệu mới thay đổi kể từ lần sao lưu trước để tiết kiệm dung lượng.',
          'Phục hồi dữ liệu (Data Recovery): Khôi phục lại trạng thái CSDL nguyên vẹn từ các bản sao lưu sau khi gặp sự cố phần cứng, cháy nổ hoặc bị mã độc tấn công.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Dữ liệu gốc: "123456"', desc: 'Mật khẩu người dùng nhập vào' },
            { label: 'Thuật toán băm mã hóa', desc: 'Mã hóa một chiều không thể dịch ngược' },
            { label: 'Lưu trong CSDL: "e10adc3949ba59abbe56e057f20f883e"', desc: 'Kẻ trộm vào xem cũng không biết mật khẩu thật' }
          ]
        },
        emCanNho: [
          'Mã hóa dữ liệu biến thông tin nhạy cảm thành mật mã, chống lộ lọt khi bị đánh cắp.',
          'Mật khẩu người dùng phải luôn được băm mã hóa (Hash) một chiều trước khi lưu vào CSDL.',
          'Thực hiện sao lưu dữ liệu định kỳ (Backup) là phao cứu sinh bắt buộc của mọi hệ thống CSDL.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Trụ cột An toàn Thông tin và Hành vi Vi phạm',
      instruction: 'Nối trụ cột an toàn với hành vi vi phạm tương ứng:',
      matchingPairs: [
        { id: 'sec1', left: 'Vi phạm Tính Bí Mật (Confidentiality)', right: 'Tin tặc đánh cắp danh sách số điện thoại và số dư tài khoản khách hàng' },
        { id: 'sec2', left: 'Vi phạm Tính Toàn Vẹn (Integrity)', right: 'Học sinh sửa điểm từ 5.0 thành 10.0 trong cơ sở dữ liệu nhà trường' },
        { id: 'sec3', left: 'Vi phạm Tính Sẵn Sàng (Availability)', right: 'Tin tặc tấn công từ chối dịch vụ (DDoS) làm sập cổng xem điểm thi' },
        { id: 'sec4', left: 'Biện pháp Sao Lưu Dự Phòng (Backup)', right: 'Khôi phục lại dữ liệu nguyên vẹn sau khi máy chủ bị cháy ổ cứng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Ba trụ cột then chốt trong mô hình an toàn thông tin CSDL (CIA Triad) là gì?',
        options: [
          'Tính bí mật (Confidentiality), Tính toàn vẹn (Integrity) và Tính sẵn sàng (Availability)',
          'Tốc độ cao, Giá rẻ và Màn hình đẹp',
          'Chuột quang, Bàn phím cơ và Tai nghe',
          'Chỉ cần bí mật, không cần toàn vẹn'
        ],
        correctIndex: 0,
        explanation: 'Tam giác CIA là tiêu chuẩn vàng của an toàn thông tin toàn cầu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Câu lệnh SQL nào sau đây được dùng để CẤP QUYỀN truy cập dữ liệu cho một người dùng?',
        options: ['GRANT', 'REVOKE', 'GIVE', 'ALLOW'],
        correctIndex: 0,
        explanation: 'Lệnh GRANT trong nhóm DCL dùng để cấp quyền thao tác trên bảng cho tài khoản.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Tại sao trong các hệ thống CSDL chuẩn chuyên nghiệp, mật khẩu người dùng KHÔNG BAO GIỜ được lưu trữ dưới dạng chữ viết thông thường (Plaintext)?',
        options: [
          'Để nếu kẻ xấu hoặc nhân viên quản trị có vào xem CSDL cũng không thể biết được mật khẩu thật của người dùng',
          'Vì máy tính không biết đọc chữ cái',
          'Vì mật khẩu thường quá dài',
          'Để máy tính chạy nhanh hơn'
        ],
        correctIndex: 0,
        explanation: 'Mã hóa băm mật khẩu một chiều bảo vệ tài khoản người dùng ngay cả khi tệp CSDL bị rò rỉ ra ngoài.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Nguyên tắc "Đặc quyền tối thiểu" (Least Privilege) trong phân quyền CSDL có nghĩa là gì?',
        options: [
          'Chỉ cấp cho người dùng những quyền tối thiểu vừa đủ để làm việc, không cấp thừa quyền dư thừa',
          'Không cho ai dùng máy tính',
          'Cấp quyền toàn quyền Admin cho tất cả nhân viên',
          'Mỗi người chỉ được dùng 5 phút mỗi ngày'
        ],
        correctIndex: 0,
        explanation: 'Đặc quyền tối thiểu giúp hạn chế rủi ro phá hoại hoặc thao tác nhầm khi tài khoản bị xâm nhập.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Hành động nào sau đây là giải pháp tốt nhất để phòng chống việc mất sạch dữ liệu khi máy chủ bị sét đánh hỏng hoàn toàn ổ cứng vật lý?',
        options: [
          'Lập lịch tự động sao lưu dữ liệu (Backup) hàng ngày và lưu bản sao lưu ở một địa điểm vật lý khác hoặc trên đám mây',
          'Bọc nilon quanh case máy tính',
          'Tắt điều hòa phòng máy',
          'Cài đặt hình nền màu đen'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu phân tán ngoại vi (Off-site Backup) đảm bảo dữ liệu luôn hồi sinh sau mọi thảm họa vật lý.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết Kế Ma Trận Phân Quyền An Toàn Cho Hệ Thống Sổ Điểm Điện Tử',
        context: 'Trường học triển khai phần mềm quản lý điểm trực tuyến cho 100 giáo viên và 2000 học sinh.',
        mission: 'Thiết lập bảng phân quyền chi tiết cho 3 nhóm đối tượng: Học sinh, Giáo viên và Ban giám hiệu.',
        steps: [
          '1. Nhóm Học sinh: Quyền `SELECT` trên bảng `DIEM` (chỉ xem bản ghi của chính mình). Tuyệt đối không có quyền `UPDATE`, `INSERT`, `DELETE`.',
          '2. Nhóm Giáo viên bộ môn: Quyền `SELECT`, `UPDATE`, `INSERT` điểm của môn mình phụ trách. Không có quyền xóa bảng `DROP TABLE`.',
          '3. Nhóm Ban giám hiệu: Quyền `SELECT` toàn trường, duyệt khóa sổ điểm cuối kỳ.',
          '4. Viết lệnh mẫu: `GRANT SELECT ON DIEM_11 TO \'hocsinh\';`'
        ],
        outputRequirement: 'Ma trận phân quyền dạng bảng chữ X rõ ràng kèm lệnh GRANT tương ứng.',
        practicalTip: 'Không bao giờ dùng tài khoản `root` hoặc `sa` để kết nối ứng dụng web thường ngày.'
      },
      mindmap: {
        id: 'mm_11_15',
        label: 'AN TOÀN CSDL',
        color: '#059669',
        children: [
          {
            id: 'mm_11_15_1',
            label: 'Mô hình CIA',
            children: [
              { id: 'mm_11_15_1_1', label: 'Bí mật (Confidentiality)' },
              { id: 'mm_11_15_1_2', label: 'Toàn vẹn (Integrity)' },
              { id: 'mm_11_15_1_3', label: 'Sẵn sàng (Availability)' }
            ]
          },
          {
            id: 'mm_11_15_2',
            label: 'Giải pháp kỹ thuật',
            children: [
              { id: 'mm_11_15_2_1', label: 'Xác thực & Lệnh GRANT / REVOKE' },
              { id: 'mm_11_15_2_2', label: 'Mã hóa băm mật khẩu một chiều' },
              { id: 'mm_11_15_2_3', label: 'Chiến lược sao lưu định kỳ Backup' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Vệ Sĩ Dữ Liệu 11',
      badgeIcon: 'ShieldCheck',
      roleTitle: 'Chuyên Viên An Toàn & Bảo Mật Cơ Sở Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã hoàn thành xuất sắc toàn bộ Chủ đề 4: Giới thiệu các hệ cơ sở dữ liệu và làm chủ các nguyên tắc an toàn thông tin tối thượng.',
      skillsUnlocked: ['Mô hình an toàn CIA Triad', 'Lệnh phân quyền GRANT & REVOKE', 'Mã hóa và sao lưu phục hồi CSDL']
    }
  }
];
