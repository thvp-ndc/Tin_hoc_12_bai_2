import { Lesson } from '../../types/lesson';

export const THEME6_LESSONS_PART3_11: Lesson[] = [
  // Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu
  {
    id: 22,
    code: 'TIN11_B22',
    title: 'Thực hành cập nhật bảng dữ liệu có tham chiếu',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Ràng buộc tham chiếu',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kiểm soát tính toàn vẹn dây chuyền: Quy tắc ON DELETE CASCADE và RESTRICT',
      description: 'Tìm hiểu quy tắc cập nhật và xóa an toàn trên các bảng có liên kết khóa ngoài: điều gì xảy ra khi xóa một Lớp học mà vẫn còn học sinh bên trong; cách thiết lập hành vi tự động cập nhật liên hoàn (CASCADE) hoặc chặn xóa (RESTRICT).',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Quy tắc ON DELETE RESTRICT (Chặn xóa)', 'Quy tắc ON DELETE CASCADE (Xóa liên hoàn)', 'Toàn vẹn quan hệ']
    },
    objectives: [
      {
        id: 'obj_11_22_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các hành vi ràng buộc tham chiếu',
        description: 'Giải thích được sự khác nhau giữa các hành vi tham chiếu: RESTRICT (chặn thao tác nếu còn dữ liệu con phụ thuộc), CASCADE (thao tác liên hoàn) và SET NULL.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_11_22_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khai báo CASCADE & RESTRICT trong SQL',
        description: 'Cấu hình được tùy chọn `ON UPDATE CASCADE ON DELETE RESTRICT` khi định nghĩa khóa ngoài để bảo vệ dữ liệu phụ thuộc không bị xóa nhầm.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_22_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo vệ dữ liệu phụ thuộc',
        description: 'Cẩn trọng tối đa trước khi xóa một bản ghi cha (như xóa một danh mục sách, xóa một lớp học) để tránh làm mất mát dữ liệu con liên quan.',
        iconName: 'AlertTriangle'
      }
    ],
    warmup: {
      title: 'Tình huống: Xóa một Lớp học thì học sinh đi về đâu?',
      scenario: 'Thầy quản trị CSDL muốn xóa lớp "11A1" trong bảng `LOP`. Tuy nhiên, trong bảng `HOC_SINH` đang có 40 bạn học sinh thuộc lớp 11A1.',
      pollQuestion: 'Hệ thống CSDL mặc định sẽ xử lý như thế nào để bảo vệ quyền lợi của 40 học sinh này?',
      pollOptions: [
        { id: 'p11_22_1', text: 'Chặn thao tác xóa (RESTRICT) và báo lỗi: "Không thể xóa lớp vì vẫn còn học sinh đang theo học"', votesPercent: 93, isPopular: true, insight: 'Chính xác! Cơ chế RESTRICT mặc định ngăn chặn việc tạo ra các "bản ghi mồ côi" không có nơi phụ thuộc.' },
        { id: 'p11_22_2', text: 'Tự động xóa luôn 40 học sinh khỏi trường', votesPercent: 4, insight: 'Hành vi này chỉ xảy ra nếu bạn cố tình cấu hình ON DELETE CASCADE, rất nguy hiểm trong thực tế quản lý học sinh.' },
        { id: 'p11_22_3', text: 'Cho 40 học sinh nghỉ học vô thời hạn', votesPercent: 3, insight: 'Hệ CSDL chỉ quản lý logic dữ liệu số, không quyết định chính sách học vụ.' }
      ],
      reflection: 'Lựa chọn đúng giữa RESTRICT và CASCADE là ranh giới giữa một hệ thống CSDL an toàn và một thảm họa xóa nhầm dữ liệu.'
    },
    knowledge: [
      {
        id: 'tab_11_22_1',
        title: '1. Ràng buộc tham chiếu khi xóa/sửa bản ghi cha',
        subtitle: 'Bản chất của tính toàn vẹn tham chiếu Referential Integrity',
        iconName: 'GitBranch',
        keyPoints: [
          'Vấn đề: Khi hai bảng đã liên kết qua khóa ngoài, nếu người dùng sửa đổi khóa chính ở bảng cha hoặc xóa bỏ bản ghi cha thì các bản ghi con đang tham chiếu tới sẽ bị ảnh hưởng trực tiếp.',
          'Ví dụ: Nếu đổi mã lớp `11A1` thành `11A_Chuyen`, nếu không có cơ chế đồng bộ thì 40 học sinh sẽ bị mất thông tin lớp.',
          'Nếu xóa hẳn lớp `11A1`, các học sinh sẽ trở thành các bản ghi mồ côi (Orphan Records) trỏ vào một mã lớp không hề tồn tại trong CSDL.',
          'Vì vậy, Hệ QTCSDL cung cấp các quy tắc xử lý hành vi tham chiếu tự động.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bản ghi cha bị sửa/xóa', desc: 'Thao tác UPDATE MaLop hoặc DELETE lớp' },
            { label: 'Kiểm tra khóa ngoài FK', desc: 'Hệ QTCSDL kiểm tra xem có học sinh nào thuộc lớp này không' },
            { label: 'Kích hoạt hành vi quy định', desc: 'Chặn đứng (RESTRICT) hoặc Cập nhật theo (CASCADE)' }
          ]
        },
        emCanNho: [
          'Toàn vẹn tham chiếu đảm bảo không bao giờ sinh ra dữ liệu mồ côi.',
          'Mọi thay đổi trên bản ghi cha đều được Hệ QTCSDL kiểm soát chặt chẽ.',
          'Cần cân nhắc kỹ hậu quả trước khi sửa đổi hoặc xóa bản ghi cha.'
        ]
      },
      {
        id: 'tab_11_22_2',
        title: '2. Quy tắc ON DELETE RESTRICT và ON DELETE CASCADE',
        subtitle: 'Chặn đứng an toàn hay tự động xóa dây chuyền liên hoàn',
        iconName: 'ShieldAlert',
        keyPoints: [
          '1. `RESTRICT / NO ACTION` (Mặc định): Chặn đứng hoàn toàn thao tác xóa hoặc sửa ở bảng cha nếu vẫn còn ít nhất một bản ghi con đang tham chiếu tới. Muốn xóa bảng cha, bắt buộc người dùng phải xóa hoặc chuyển toàn bộ bản ghi con sang chỗ khác trước.',
          '2. `CASCADE`: Thao tác liên hoàn tự động. Nếu sửa khóa chính ở bảng cha, khóa ngoài ở bảng con tự động sửa theo. Nếu xóa bản ghi cha, TẤT CẢ bản ghi con liên quan tự động bị xóa sổ theo.',
          '3. `SET NULL`: Tự động gán giá trị khóa ngoài ở bảng con thành NULL khi bản ghi cha bị xóa.',
          'Cú pháp khuyên dùng chuẩn doanh nghiệp:',
          '  `FOREIGN KEY (MaLop) REFERENCES LOP_HOC(MaLop)`',
          '  `ON UPDATE CASCADE`',
          '  `ON DELETE RESTRICT;`'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Quy tắc tham chiếu', 'Hành vi khi XÓA bản ghi cha', 'Hành vi khi SỬA khóa chính cha', 'Trường hợp nên dùng'],
          rows: [
            ['RESTRICT (Mặc định)', 'Báo lỗi, chặn không cho xóa', 'Báo lỗi, chặn không cho sửa', 'Bảo vệ dữ liệu học sinh, đơn hàng'],
            ['CASCADE', 'Tự động xóa luôn mọi dữ liệu con', 'Tự động sửa theo đồng bộ', 'Xóa bài viết thì xóa các bình luận theo'],
            ['SET NULL', 'Khóa ngoài ở bản con biến thành NULL', 'Tự động gán NULL', 'Nhân viên nghỉ việc thì người quản lý = NULL']
          ]
        },
        emCanNho: [
          '`ON DELETE RESTRICT`: Chặn xóa an toàn, bảo vệ dữ liệu phụ thuộc.',
          '`ON UPDATE CASCADE`: Tự động cập nhật đồng bộ khóa ngoài khi khóa chính đổi mã.',
          'Cực kỳ cẩn trọng khi dùng `ON DELETE CASCADE` vì có thể xóa sạch dữ liệu liên đới.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Hành Vi Tham Chiếu và Hậu Quả',
      instruction: 'Nối tùy chọn tham chiếu với phản ứng tương ứng của hệ thống:',
      matchingPairs: [
        { id: 'rc1', left: 'Tùy chọn ON DELETE RESTRICT', right: 'Báo lỗi ngăn chặn không cho xóa lớp học khi vẫn còn học sinh' },
        { id: 'rc2', left: 'Tùy chọn ON DELETE CASCADE', right: 'Xóa bài đăng Facebook đồng thời tự động xóa sạch mọi bình luận bên dưới' },
        { id: 'rc3', left: 'Tùy chọn ON UPDATE CASCADE', right: 'Đổi mã khoa từ CNTT sang IT thì mã khoa của sinh viên tự động đổi theo' },
        { id: 'rc4', left: 'Tùy chọn ON DELETE SET NULL', right: 'Khi danh mục bị xóa thì trường danh mục của sản phẩm chuyển thành để trống' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tùy chọn nào sau đây sẽ TỰ ĐỘNG XÓA toàn bộ các bản ghi con ở bảng phụ thuộc khi bản ghi cha tương ứng bị xóa?',
        options: ['ON DELETE CASCADE', 'ON DELETE RESTRICT', 'ON DELETE SET NULL', 'ON DELETE NO ACTION'],
        correctIndex: 0,
        explanation: 'CASCADE (thác nước liên hoàn) sẽ tự động xóa sạch các bản ghi con phụ thuộc.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Hành vi mặc định của MySQL khi bạn không khai báo tùy chọn ON DELETE là gì?',
        options: [
          'RESTRICT: Chặn không cho xóa bản ghi cha nếu đang có bản ghi con tham chiếu',
          'CASCADE: Xóa luôn bản ghi con',
          'Tự động tắt máy tính',
          'Tự động chuyển bản ghi con sang bảng khác'
        ],
        correctIndex: 0,
        explanation: 'RESTRICT là cơ chế mặc định an toàn nhất ngăn chặn việc làm mất mát dữ liệu ngoài ý muốn.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong hệ thống quản lý học sinh, tùy chọn nào sau đây là AN TOÀN NHẤT cho mối quan hệ giữa LOP và HOC_SINH?',
        options: [
          'ON UPDATE CASCADE ON DELETE RESTRICT',
          'ON DELETE CASCADE (xóa lớp xóa luôn học sinh)',
          'Không dùng khóa ngoài',
          'ON DELETE SET NULL'
        ],
        correctIndex: 0,
        explanation: 'ON UPDATE CASCADE giúp đổi tên lớp thì học sinh cập nhật theo, ON DELETE RESTRICT ngăn xóa nhầm học sinh.',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Khi bạn chạy lệnh xóa một khách hàng và nhận được thông báo lỗi: `Cannot delete or update a parent row: a foreign key constraint fails`, bạn cần làm gì?',
        options: [
          'Kiểm tra và xóa các đơn hàng của khách hàng đó ở bảng con trước, sau đó mới xóa khách hàng',
          'Đập máy tính',
          'Cố gắng gõ lệnh xóa lại 100 lần',
          'Xóa toàn bộ CSDL'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc toàn vẹn tham chiếu đòi hỏi giải phóng liên kết ở bảng con trước khi xóa bản ghi cha.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Tùy chọn `ON DELETE SET NULL` yêu cầu cột Khóa ngoài ở bảng con phải thỏa mãn điều kiện gì?',
        options: [
          'Cột Khóa ngoài phải cho phép nhận giá trị NULL (không có ràng buộc NOT NULL)',
          'Cột Khóa ngoài bắt buộc phải có NOT NULL',
          'Cột Khóa ngoài phải là số âm',
          'Cột Khóa ngoài phải là chữ in hoa'
        ],
        correctIndex: 0,
        explanation: 'Nếu cột có ràng buộc NOT NULL thì không thể gán giá trị NULL khi bản ghi cha bị xóa.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Cấu Hình Toàn Vẹn Tham Chiếu Cho Hệ Thống Bài Viết & Bình Luận',
        context: 'Xây dựng diễn đàn học tập trực tuyến.',
        mission: 'Thiết lập bảng BAI_VIET và BINH_LUAN sao cho khi xóa bài viết, các bình luận của bài đó tự động biến mất.',
        steps: [
          'Bước 1: Tạo bảng cha `BAI_VIET (MaBV INT PRIMARY KEY, TieuDe VARCHAR(200), NoiDung TEXT)`.',
          'Bước 2: Tạo bảng con `BINH_LUAN (MaBL INT PRIMARY KEY, NoiDungBL TEXT, MaBV INT)`.',
          'Bước 3: Khai báo khóa ngoài: `FOREIGN KEY (MaBV) REFERENCES BAI_VIET(MaBV) ON DELETE CASCADE`.',
          'Bước 4: Chèn thử 1 bài viết và 3 bình luận. Thử xóa bài viết và kiểm tra bảng bình luận.'
        ],
        outputRequirement: 'Script SQL hoàn chỉnh kèm kết quả thực nghiệm chứng minh 3 bình luận đã tự động bị xóa.',
        practicalTip: 'Đối với các dữ liệu phụ thuộc hoàn toàn (như bình luận của bài viết), ON DELETE CASCADE là lựa chọn tuyệt vời.'
      },
      mindmap: {
        id: 'mm_11_22',
        label: 'RÀNG BUỘC THAM CHIẾU',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_22_1',
            label: 'Các hành vi chính',
            children: [
              { id: 'mm_11_22_1_1', label: 'RESTRICT: Chặn xóa an toàn' },
              { id: 'mm_11_22_1_2', label: 'CASCADE: Xóa/sửa liên hoàn' },
              { id: 'mm_11_22_1_3', label: 'SET NULL: Gán rỗng vô chủ' }
            ]
          },
          {
            id: 'mm_11_22_2',
            label: 'Cấu hình khuyên dùng',
            children: [
              { id: 'mm_11_22_2_1', label: 'ON UPDATE CASCADE (Đồng bộ)' },
              { id: 'mm_11_22_2_2', label: 'ON DELETE RESTRICT (Chống mất mát)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Toàn Vẹn Dữ Liệu 11',
      badgeIcon: 'ShieldAlert',
      roleTitle: 'Chuyên Viên Kiểm Soát Ràng Buộc Tham Chiếu',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững các hành vi tham chiếu dây chuyền, kiểm soát an toàn tối đa cho hệ thống cơ sở dữ liệu.',
      skillsUnlocked: ['Hiểu bản chất RESTRICT & CASCADE', 'Cấu hình ON UPDATE / ON DELETE', 'Xử lý lỗi Foreign Key Constraint']
    }
  },

  // Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng
  {
    id: 23,
    code: 'TIN11_B23',
    title: 'Thực hành truy xuất dữ liệu qua liên kết các bảng',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Phép nối INNER JOIN',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kết nối các mảnh ghép thông tin: Phép nối bảng thần kỳ INNER JOIN trong SQL',
      description: 'Luyện tập kỹ thuật truy vấn dữ liệu phân tán ở nhiều bảng khác nhau: cú pháp INNER JOIN kết nối bảng cha và bảng con qua mệnh đề ON, sử dụng bí danh Alias và lọc dữ liệu đa bảng.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Cú pháp INNER JOIN ... ON ...', 'Bí danh bảng (Table Alias)', 'Truy vấn kết xuất báo cáo đa bảng']
    },
    objectives: [
      {
        id: 'obj_11_23_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu nguyên lý so khớp INNER JOIN',
        description: 'Giải thích được nguyên lý so khớp dữ liệu giữa khóa chính của bảng cha và khóa ngoài của bảng con thông qua mệnh đề `ON`.',
        iconName: 'Link2'
      },
      {
        id: 'obj_11_23_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết câu lệnh truy vấn đa bảng chuẩn',
        description: 'Viết và thực thi thành thạo câu lệnh `SELECT ... FROM BangA INNER JOIN BangB ON BangA.Khoa = BangB.Khoa WHERE ...` kèm sử dụng bí danh Alias.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_23_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy liên kết hệ thống đa chiều',
        description: 'Phát triển tư duy phân tích tổng hợp, nhìn nhận dữ liệu trong một bức tranh tổng thể kết nối logic thay vì các thông tin rời rạc.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Tên học sinh ở một bảng, Tên lớp ở bảng khác',
      scenario: 'Bảng `HOC_SINH` chỉ lưu `MaLop` (ví dụ: "L01"). Bảng `LOP_HOC` mới lưu `TenLop` (ví dụ: "Lớp 11A1 Chuyên Tin"). Khi in giấy khen cho học sinh, bạn cần hiển thị đầy đủ: "Nguyễn Văn An - Lớp 11A1 Chuyên Tin".',
      pollQuestion: 'Phép toán liên kết bảng nào trong SQL giúp bạn gộp các cột từ 2 bảng khác nhau thành một bảng kết quả duy nhất dựa trên trường chung MaLop?',
      pollOptions: [
        { id: 'p11_23_1', text: 'Phép nối bảng INNER JOIN với điều kiện so khớp ON HOC_SINH.MaLop = LOP_HOC.MaLop', votesPercent: 95, isPopular: true, insight: 'Chính xác! INNER JOIN kết nối các hàng của hai bảng lại với nhau khi giá trị ở cột liên kết bằng nhau.' },
        { id: 'p11_23_2', text: 'Dùng lệnh COPY PASTE thủ công bằng tay', votesPercent: 3, insight: 'Thao tác tay không thể áp dụng cho cơ sở dữ liệu hàng triệu học sinh.' },
        { id: 'p11_23_3', text: 'Lệnh gộp file ZIP', votesPercent: 2, insight: 'ZIP chỉ nén file trên đĩa, không thực hiện được phép kết nối bảng quan hệ SQL.' }
      ],
      reflection: 'Phép nối JOIN là chìa khóa mở toang sức mạnh của cơ sở dữ liệu quan hệ, cho phép tái hợp các thông tin đã được chuẩn hóa phân tán.'
    },
    knowledge: [
      {
        id: 'tab_11_23_1',
        title: '1. Phép nối bảng INNER JOIN và điều kiện ON',
        subtitle: 'Nguyên lý so khớp khóa chính và khóa ngoài để hợp nhất dữ liệu',
        iconName: 'Link2',
        keyPoints: [
          'Khái niệm: INNER JOIN là phép nối trả về các hàng dữ liệu khi có sự trùng khớp giá trị giữa hai bảng dựa trên điều kiện nối chỉ định sau từ khóa `ON`.',
          'Cú pháp chuẩn:',
          '  `SELECT BangA.Cot1, BangB.Cot2`',
          '  `FROM BangA`',
          '  `INNER JOIN BangB ON BangA.CotChung = BangB.CotChung`',
          '  `WHERE <Dieu_Kien_Loc>;`',
          'Xử lý trùng tên cột: Khi hai bảng có cùng tên cột (như `MaLop`), bắt buộc phải ghi rõ tiền tố `TenBang.TenCot` (ví dụ: `HOC_SINH.MaLop`) để tránh lỗi nhập nhằng (Ambiguous Column).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bảng HOC_SINH', desc: 'Chứa: MaHS, HoTen, MaLop' },
            { label: 'Cầu nối INNER JOIN ON', desc: 'So khớp: HOC_SINH.MaLop = LOP_HOC.MaLop' },
            { label: 'Bảng LOP_HOC', desc: 'Chứa: MaLop, TenLop, GiaoVienCN' }
          ]
        },
        emCanNho: [
          'INNER JOIN kết nối các dòng có giá trị so khớp bằng nhau giữa 2 bảng.',
          'Mệnh đề `ON` xác định điều kiện nối (thường là Khóa chính = Khóa ngoài).',
          'Dùng `TenBang.TenCot` để chỉ định chính xác cột khi hai bảng trùng tên cột.'
        ]
      },
      {
        id: 'tab_11_23_2',
        title: '2. Sử dụng bí danh (Alias) và truy vấn đa bảng',
        subtitle: 'Viết câu lệnh SQL ngắn gọn, sáng sủa và kết nối nhiều hơn 2 bảng',
        iconName: 'Code',
        keyPoints: [
          'Bí danh bảng (Table Alias): Đặt tên viết tắt ngắn gọn cho bảng ngay sau tên bảng trong mệnh đề FROM / JOIN để không phải gõ lại tên bảng dài dòng.',
          'Ví dụ đặt bí danh `hs` cho `HOC_SINH` và `l` cho `LOP_HOC`:',
          '  `SELECT hs.MaHS, hs.HoTen, l.TenLop`',
          '  `FROM HOC_SINH AS hs`',
          '  `INNER JOIN LOP_HOC AS l ON hs.MaLop = l.MaLop;`',
          'Nối nhiều hơn 2 bảng: Có thể viết liên tiếp các mệnh đề INNER JOIN để kết nối 3, 4 bảng dữ liệu (ví dụ: Học sinh nối với Điểm, Điểm nối với Môn học).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          initialSql: 'SELECT hs.MaHS, hs.HoTen, l.TenLop, hs.DiemTB\nFROM HOC_SINH hs\nINNER JOIN LOP_HOC l ON hs.MaLop = l.MaLop\nWHERE hs.DiemTB >= 8.0\nORDER BY hs.DiemTB DESC;'
        },
        emCanNho: [
          'Bí danh bảng (Alias) giúp câu lệnh SQL ngắn gọn, dễ đọc và chuyên nghiệp hơn.',
          'Từ khóa `AS` có thể lược bỏ (ví dụ: `FROM HOC_SINH hs`).',
          'Có thể liên kết nối nhiều bảng liên tiếp bằng nhiều mệnh đề INNER JOIN.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Mệnh đề Truy Vấn Đa Bảng và Chức Năng',
      instruction: 'Nối thành phần câu truy vấn JOIN với vai trò của nó:',
      matchingPairs: [
        { id: 'j1', left: 'INNER JOIN LOP_HOC l', right: 'Chỉ định bảng thứ hai tham gia liên kết kèm bí danh l' },
        { id: 'j2', left: 'ON hs.MaLop = l.MaLop', right: 'Xác lập điều kiện so khớp khóa ngoại và khóa chính giữa hai bảng' },
        { id: 'j3', left: 'SELECT hs.HoTen, l.TenLop', right: 'Lấy đồng thời cột tên từ bảng học sinh và cột tên lớp từ bảng lớp' },
        { id: 'j4', left: 'FROM HOC_SINH hs', right: 'Chỉ định bảng gốc bắt đầu truy xuất kèm bí danh hs' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong câu lệnh INNER JOIN, mệnh đề nào bắt buộc phải có để xác định điều kiện so khớp giữa hai bảng?',
        options: ['ON', 'WHERE', 'USING', 'WITH'],
        correctIndex: 0,
        explanation: 'Mệnh đề ON chỉ định biểu thức so khớp (ví dụ: ON BangA.ID = BangB.ID).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Nếu cả hai bảng HOC_SINH và LOP_HOC đều có cột mang tên `MaLop`, làm sao để chỉ thị lấy cột MaLop của bảng HOC_SINH mà không bị báo lỗi nhập nhằng (Ambiguous)?',
        options: [
          'Viết rõ: HOC_SINH.MaLop',
          'Viết MaLop_1',
          'Viết hoa chữ MALOP',
          'Không thể lấy được'
        ],
        correctIndex: 0,
        explanation: 'Thêm tiền tố tên bảng (HOC_SINH.MaLop) phân định rõ nguồn gốc cột dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Mục đích của việc sử dụng "Bí danh" (Alias) trong câu lệnh truy vấn đa bảng là gì?',
        options: [
          'Giúp viết tên bảng ngắn gọn hơn (ví dụ: HOC_SINH viết thành hs) làm câu lệnh sáng sủa, dễ đọc',
          'Để giấu tên bảng không cho ai biết',
          'Làm cho câu lệnh chạy nhanh gấp 100 lần',
          'Để máy tính tự động dịch sang tiếng Pháp'
        ],
        correctIndex: 0,
        explanation: 'Bí danh là tên đại diện tạm thời ngắn gọn giúp lập trình viên viết code nhanh và rõ ràng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Một học sinh chưa được phân vào lớp nào (MaLop mang giá trị NULL). Khi thực hiện câu lệnh INNER JOIN giữa HOC_SINH và LOP_HOC, học sinh này có xuất hiện trong bảng kết quả không?',
        options: [
          'Không xuất hiện, vì INNER JOIN chỉ lấy các hàng có sự khớp bằng nhau giữa hai bảng',
          'Có xuất hiện với tên lớp để trống',
          'Có xuất hiện và máy tự gán vào lớp 11A1',
          'Câu lệnh bị dừng lại báo lỗi'
        ],
        correctIndex: 0,
        explanation: 'INNER JOIN chỉ trả về các hàng thỏa mãn điều kiện nối; giá trị NULL không khớp nên bị loại trừ.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Để kết nối 3 bảng: HOC_SINH, KET_QUA_HOC_TAP và MON_HOC, bạn cần sử dụng bao nhiêu mệnh đề INNER JOIN trong câu lệnh?',
        options: ['2 mệnh đề INNER JOIN', '1 mệnh đề INNER JOIN', '3 mệnh đề INNER JOIN', 'Không cần mệnh đề nào'],
        correctIndex: 0,
        explanation: 'Quy tắc: Để nối N bảng cần tối thiểu (N - 1) phép nối JOIN.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Báo Cáo Điểm Thi Đa Bảng: In Bảng Điểm Chi Tiết Môn Học',
        context: 'Phần mềm quản lý học tập cần in phiếu điểm học kỳ cho từng học sinh.',
        mission: 'Viết câu lệnh SQL kết nối 3 bảng HOC_SINH, BANG_DIEM và MON_HOC.',
        steps: [
          'Bước 1: Chọn các cột cần in: `hs.HoTen, mh.TenMon, bd.DiemGiuaKy, bd.DiemCuoiKy`.',
          'Bước 2: Nối bảng 1: `FROM HOC_SINH hs INNER JOIN BANG_DIEM bd ON hs.MaHS = bd.MaHS`.',
          'Bước 3: Nối bảng 2: `INNER JOIN MON_HOC mh ON bd.MaMon = mh.MaMon`.',
          'Bước 4: Thêm điều kiện: `WHERE hs.MaHS = \'HS001\';`.'
        ],
        outputRequirement: 'Câu lệnh truy vấn 3 bảng hoàn chỉnh và kết quả hiển thị bảng điểm đầy đủ tên môn.',
        practicalTip: 'Viết mỗi mệnh đề JOIN trên một dòng riêng biệt và thụt lề vào trong để code luôn rõ ràng, chuẩn chuyên nghiệp.'
      },
      mindmap: {
        id: 'mm_11_23',
        label: 'TRUY VẤN NỐI BẢNG JOIN',
        color: '#2563eb',
        children: [
          {
            id: 'mm_11_23_1',
            label: 'Cú pháp INNER JOIN',
            children: [
              { id: 'mm_11_23_1_1', label: 'FROM BangA INNER JOIN BangB' },
              { id: 'mm_11_23_1_2', label: 'Mệnh đề ON so khớp khóa' },
              { id: 'mm_11_23_1_3', label: 'Tiền tố TenBang.TenCot' }
            ]
          },
          {
            id: 'mm_11_23_2',
            label: 'Tối ưu hóa',
            children: [
              { id: 'mm_11_23_2_1', label: 'Bí danh bảng (Alias: hs, l)' },
              { id: 'mm_11_23_2_2', label: 'Nối liên tiếp 3 bảng' },
              { id: 'mm_11_23_2_3', label: 'Kết hợp điều kiện lọc WHERE' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Nối Bảng SQL 11',
      badgeIcon: 'Link2',
      roleTitle: 'Chuyên Viên Truy Vấn Dữ Liệu Phức Hợp',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ vũ khí tối thượng INNER JOIN, tự tin trích xuất báo cáo từ nhiều bảng dữ liệu quan hệ liên kết.',
      skillsUnlocked: ['Cú pháp INNER JOIN ... ON ...', 'Sử dụng bí danh Alias', 'Truy vấn liên kết 3 bảng phức hợp']
    }
  },

  // Bài 24: Thực hành sao lưu dữ liệu
  {
    id: 24,
    code: 'TIN11_B24',
    title: 'Thực hành sao lưu dữ liệu',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Sao lưu & Phục hồi CSDL',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Lá chắn bảo vệ kho báu: Xuất tệp SQL Dump và phục hồi dữ liệu sau thảm họa',
      description: 'Luyện tập kỹ năng sống còn của người quản trị CSDL: Xuất toàn bộ cấu trúc và dữ liệu ra tệp sao lưu .sql (Export database as SQL dump) và thao tác nhập phục hồi dữ liệu nguyên vẹn (Import).',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Xuất tệp sao lưu SQL dump (.sql)', 'Phục hồi CSDL (Import / Restore)', 'Quy tắc sao lưu an toàn 3-2-1']
    },
    objectives: [
      {
        id: 'obj_11_24_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu bản chất tệp sao lưu .sql dump',
        description: 'Giải thích được bản chất của tệp sao lưu `.sql dump`: là tệp văn bản thuần chứa tập hợp các câu lệnh SQL (CREATE TABLE, INSERT INTO) để tái tạo lại toàn bộ dữ liệu.',
        iconName: 'FileText'
      },
      {
        id: 'obj_11_24_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hiện xuất và nhập CSDL trên HeidiSQL',
        description: 'Thực hiện thành thạo thao tác Export database ra tệp `.sql` và thao tác Import (Run SQL file) để phục hồi toàn bộ CSDL trên máy chủ khác.',
        iconName: 'DownloadCloud'
      },
      {
        id: 'obj_11_24_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thói quen sao lưu dữ liệu định kỳ',
        description: 'Hình thành ý thức kỷ luật tự giác: luôn sao lưu dữ liệu trước khi thực hiện các thay đổi lớn và lưu trữ bản sao lưu an toàn theo quy tắc 3-2-1.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Máy chủ bị sét đánh cháy sạch ổ cứng',
      scenario: 'Một sự cố chập điện nghiêm trọng xảy ra khiến toàn bộ ổ cứng máy chủ của công ty bị hỏng vật lý hoàn toàn. May mắn thay, người quản trị CSDL đã có thói quen xuất tệp sao lưu `.sql` lúc 23h00 đêm hôm trước và lưu trên một ổ cứng di động cất trong két sắt.',
      pollQuestion: 'Bằng cách nào người quản trị có thể khôi phục lại toàn bộ dữ liệu của công ty trên một chiếc máy chủ mới tinh?',
      pollOptions: [
        { id: 'p11_24_1', text: 'Chạy tệp sao lưu .sql (Import / Restore) để máy chủ tự động thực thi lại các lệnh tạo bảng và chèn lại toàn bộ dữ liệu', votesPercent: 96, isPopular: true, insight: 'Chính xác! Tệp .sql dump chứa toàn bộ mã nguồn tái sinh CSDL về trạng thái nguyên vẹn trong vài phút.' },
        { id: 'p11_24_2', text: 'Ngồi gõ lại bằng tay từng bản ghi từ đầu', votesPercent: 2, insight: 'Gõ tay hàng triệu bản ghi sẽ mất hàng năm trời và không khả thi.' },
        { id: 'p11_24_3', text: 'Bó tay không cứu được', votesPercent: 2, insight: 'Đã có bản sao lưu .sql an toàn thì việc phục hồi là hoàn toàn trong tầm tay.' }
      ],
      reflection: 'Có hai loại người dùng máy tính: người đã từng mất dữ liệu và người thường xuyên sao lưu dữ liệu.'
    },
    knowledge: [
      {
        id: 'tab_11_24_1',
        title: '1. Quy trình xuất bản sao lưu CSDL (.sql dump)',
        subtitle: 'Đóng gói toàn bộ cấu trúc và dữ liệu thành tệp văn bản tái sinh',
        iconName: 'UploadCloud',
        keyPoints: [
          'Bản chất SQL Dump: Không phải tệp nhị phân phức tạp, mà là một tệp văn bản (Text file) đuôi `.sql` chứa các câu lệnh `DROP TABLE`, `CREATE TABLE` (tái tạo khung) và hàng ngàn câu lệnh `INSERT INTO` (nạp lại dữ liệu).',
          'Các bước xuất sao lưu trên phần mềm HeidiSQL:',
          '  - Bước 1: Nhấp chuột phải vào tên Cơ sở dữ liệu cần sao lưu ở cây bên trái.',
          '  - Bước 2: Chọn mục `Export database as SQL dump`.',
          '  - Bước 3: Tại mục Database chọn `Create`, tại Table chọn `Create`, tại Data chọn `Insert`.',
          '  - Bước 4: Chọn vị trí lưu tệp (File name) và nhấn nút `Export`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Chuột phải vào CSDL', desc: 'Chọn Export database as SQL dump' },
            { label: '2. Tùy chọn cấu trúc & Dữ liệu', desc: 'Tích chọn Create Table và Insert Data' },
            { label: '3. Xuất tệp .sql', desc: 'Lưu tệp an toàn ra ổ đĩa hoặc đám mây' }
          ]
        },
        emCanNho: [
          'Tệp sao lưu `.sql` chứa các câu lệnh tạo bảng và chèn dữ liệu.',
          'Có thể chọn sao lưu chỉ cấu trúc (Schema only) hoặc cả cấu trúc lẫn dữ liệu (Data & Structure).',
          'Đặt tên tệp sao lưu kèm ngày giờ xuất (ví dụ: `backup_ql_hocsinh_2026_09_02.sql`).'
        ]
      },
      {
        id: 'tab_11_24_2',
        title: '2. Nhập và phục hồi dữ liệu từ tệp sao lưu',
        subtitle: 'Quy trình hồi sinh hệ thống từ tệp SQL script dự phòng',
        iconName: 'DownloadCloud',
        keyPoints: [
          'Khái niệm: Nhập dữ liệu (Import / Restore) là quá trình đọc tệp `.sql` sao lưu và thực thi tuần tự các câu lệnh bên trong để tái tạo lại toàn bộ các bảng và bản ghi trên một máy chủ mới.',
          'Các bước phục hồi dữ liệu trong HeidiSQL:',
          '  - Bước 1: Mở phần mềm HeidiSQL và kết nối tới máy chủ.',
          '  - Bước 2: Vào menu `File -> Load SQL file...` (hoặc bấm phím tắt `Ctrl + O`).',
          '  - Bước 3: Tìm chọn tệp sao lưu `.sql` đã lưu trước đó.',
          '  - Bước 4: Nhấn nút Run (F9) hoặc chọn "Run file directly" để máy chủ tự động nạp dữ liệu.',
          'Quy tắc an toàn 3-2-1: Giữ 3 bản sao dữ liệu, lưu trên 2 loại thiết bị khác nhau, và có ít nhất 1 bản sao lưu ở địa điểm bên ngoài (Off-site / Cloud).'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Bước thao tác', 'Hành động cụ thể trên HeidiSQL', 'Mục đích đạt được'],
          rows: [
            ['1. Mở tệp sao lưu', 'File -> Load SQL file (Ctrl + O)', 'Nạp tệp script sao lưu vào vùng nhớ'],
            ['2. Thực thi kịch bản', 'Bấm phím F9 hoặc Run script', 'Máy chủ tự động chạy lại lệnh tạo bảng và chèn dữ liệu'],
            ['3. Kiểm tra kết quả', 'Nhấn F5 làm mới cây CSDL', 'Xác nhận toàn bộ các bảng và dữ liệu đã hiển thị nguyên vẹn']
          ]
        },
        emCanNho: [
          'Dùng `File -> Load SQL file` để mở tệp sao lưu `.sql`.',
          'Nhấn phím `F9` để chạy script phục hồi toàn bộ cơ sở dữ liệu.',
          'Áp dụng quy tắc 3-2-1 để bảo vệ dữ liệu trường học và tổ chức vĩnh viễn an toàn.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao Tác Sao Lưu & Phục Hồi trong HeidiSQL',
      instruction: 'Nối thao tác với mục đích thực hiện:',
      matchingPairs: [
        { id: 'bk1', left: 'Export database as SQL dump', right: 'Xuất toàn bộ bảng và dữ liệu ra tệp văn bản script .sql' },
        { id: 'bk2', left: 'File -> Load SQL file (Ctrl + O)', right: 'Mở tệp script sao lưu để chuẩn bị nạp phục hồi vào CSDL' },
        { id: 'bk3', left: 'Quy tắc sao lưu 3-2-1', right: '3 bản sao, trên 2 loại thiết bị, 1 bản lưu ở nơi khác hoặc đám mây' },
        { id: 'bk4', left: 'Tùy chọn Data: Insert trong Export', right: 'Đảm bảo tệp sao lưu chứa đầy đủ tất cả các hàng dữ liệu thực tế' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tệp sao lưu cơ sở dữ liệu dạng "SQL Dump" xuất ra từ HeidiSQL/MySQL có phần mở rộng mặc định là gì?',
        options: ['.sql', '.docx', '.mp3', '.exe'],
        correctIndex: 0,
        explanation: 'Tệp sao lưu CSDL luôn mang phần đuôi mở rộng là .sql chứa các câu lệnh SQL tái tạo dữ liệu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Bản chất bên trong của một tệp sao lưu `.sql` thực chất là gì?',
        options: [
          'Là một tệp văn bản thuần chứa tập hợp các câu lệnh SQL (CREATE TABLE, INSERT INTO) có thể mở đọc bằng Notepad',
          'Là một bức ảnh chụp màn hình máy tính',
          'Là một đoạn video quay lại quá trình gõ phím',
          'Là một phần mềm độc hại'
        ],
        correctIndex: 0,
        explanation: 'SQL dump là tệp script văn bản chứa toàn bộ câu lệnh DDL và DML tái sinh CSDL.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để phục hồi cơ sở dữ liệu từ một tệp sao lưu `.sql` trên máy tính mới bằng HeidiSQL, bạn thực hiện thao tác nào?',
        options: [
          'Vào menu File -> chọn "Load SQL file..." rồi nhấn phím F9 để thực thi',
          'Kéo tệp .sql vứt vào thùng rác Recycle Bin',
          'Đổi đuôi tệp thành .mp4 để xem phim',
          'Tắt mạng Internet'
        ],
        correctIndex: 0,
        explanation: 'Load SQL file nạp kịch bản vào tab truy vấn và phím F9 thực thi toàn bộ kịch bản phục hồi.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Quy tắc sao lưu dữ liệu kinh điển "3-2-1" khuyên chúng ta điều gì?',
        options: [
          'Lưu ít nhất 3 bản sao dữ liệu, trên 2 loại thiết bị lưu trữ khác nhau, và có 1 bản lưu ở nơi khác (hoặc trên đám mây)',
          'Chỉ được dùng máy tính trong 3 giờ, nghỉ 2 giờ, ngủ 1 giờ',
          'Mỗi tuần chỉ sao lưu vào ngày 3 tháng 2',
          'Mỗi ngày gõ 3 câu lệnh SQL'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc 3-2-1 là tiêu chuẩn vàng của an ninh dữ liệu chống lại thảm họa phần cứng và thiên tai.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Tại sao khi đặt tên cho tệp sao lưu CSDL, người ta luôn đính kèm ngày tháng năm xuất tệp (ví dụ: `backup_truonghoc_2026_09_02.sql`)?',
        options: [
          'Để dễ dàng nhận biết bản sao lưu nào là mới nhất và có thể khôi phục chính xác về thời điểm mong muốn',
          'Để máy tính không bị nhầm lẫn với file nhạc',
          'Vì phần mềm bắt buộc tên phải có số',
          'Để tệp có dung lượng nhẹ hơn'
        ],
        correctIndex: 0,
        explanation: 'Gắn mốc thời gian (Timestamp) giúp kiểm soát phiên bản và chọn đúng bản sao lưu khi có sự cố.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực Hành: Diễn Tập Sao Lưu & Di Chuyển CSDL Sang Máy Tính Bạn Cùng Bàn',
        context: 'Chia sẻ toàn bộ CSDL thư viện bạn đã dày công thiết kế cho bạn học cùng bàn.',
        mission: 'Xuất tệp SQL dump, copy qua USB hoặc Google Drive sang máy bạn và nhập thành công.',
        steps: [
          'Bước 1: Trên máy bạn: Dùng HeidiSQL xuất CSDL `thu_vien` thành tệp `thu_vien_backup.sql`.',
          'Bước 2: Gửi tệp `thu_vien_backup.sql` qua Google Drive cho bạn cùng bàn.',
          'Bước 3: Trên máy bạn cùng bàn: Mở HeidiSQL -> `File -> Load SQL file` -> Mở tệp vừa tải về.',
          'Bước 4: Nhấn `F9` chạy script và nhấn `F5` kiểm tra xem toàn bộ các bảng và dữ liệu đã xuất hiện nguyên vẹn chưa.'
        ],
        outputRequirement: 'Máy tính thứ hai hiển thị đầy đủ CSDL và dữ liệu giống hệt máy tính ban đầu.',
        practicalTip: 'Trong cửa sổ Export của HeidiSQL, luôn đảm bảo mục Database chọn `Create` để script tự động tạo CSDL trên máy mới.'
      },
      mindmap: {
        id: 'mm_11_24',
        label: 'SAO LƯU & PHỤC HỒI',
        color: '#059669',
        children: [
          {
            id: 'mm_11_24_1',
            label: 'Xuất sao lưu (Export)',
            children: [
              { id: 'mm_11_24_1_1', label: 'Export as SQL dump' },
              { id: 'mm_11_24_1_2', label: 'Cấu trúc Table: Create' },
              { id: 'mm_11_24_1_3', label: 'Dữ liệu Data: Insert' }
            ]
          },
          {
            id: 'mm_11_24_2',
            label: 'Nhập phục hồi (Import)',
            children: [
              { id: 'mm_11_24_2_1', label: 'File -> Load SQL file (Ctrl+O)' },
              { id: 'mm_11_24_2_2', label: 'Phím F9 thực thi script' },
              { id: 'mm_11_24_2_3', label: 'Quy tắc an toàn 3-2-1' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Sao Lưu CSDL 11',
      badgeIcon: 'DownloadCloud',
      roleTitle: 'Chuyên Viên Phục Hồi Dữ Liệu Sau Thảm Họa',
      congratsMessage: 'Tuyệt vời! Bạn đã hoàn thành xuất sắc toàn bộ Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu với trọn bộ kỹ năng từ thiết kế, lập trình SQL đến sao lưu an toàn.',
      skillsUnlocked: ['Xuất tệp SQL Dump', 'Phục hồi CSDL bằng Load SQL file', 'Chiến lược sao lưu 3-2-1']
    }
  }
];
