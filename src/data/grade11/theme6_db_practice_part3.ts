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
        description: 'Giải thích được sự khác nhau giữa RESTRICT (chặn thao tác nếu còn dữ liệu con), CASCADE (cập nhật/xóa đồng thời dữ liệu con) và SET NULL.',
        iconName: 'ShieldAlert'
      },
      {
        id: 'obj_11_22_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khai báo CASCADE / RESTRICT trong SQL',
        description: 'Thực hiện được câu lệnh khai báo khóa ngoại có kèm `ON UPDATE CASCADE ON DELETE RESTRICT` an toàn.',
        iconName: 'Code'
      },
      {
        id: 'obj_11_22_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo vệ dữ liệu phụ thuộc',
        description: 'Cẩn trọng tối đa trước khi xóa một bản ghi cha (như xóa một danh mục sách, xóa một lớp học) để tránh mất mát dữ liệu con liên quan.',
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
        title: '1. Các Hành Vi Tham Chiếu Khi Xóa / Sửa Bản Ghi Cha',
        subtitle: 'RESTRICT, CASCADE, SET NULL',
        iconName: 'GitBranch',
        keyPoints: [
          '`RESTRICT / NO ACTION` (Mặc định): Chặn đứng thao tác xóa/sửa bản ghi ở bảng cha nếu bản ghi đó đang được tham chiếu bởi ít nhất một bản ghi ở bảng con.',
          '`CASCADE`: Thao tác liên hoàn. Nếu sửa khóa chính ở bảng cha, khóa ngoài ở bảng con tự động sửa theo. Nếu xóa bản ghi cha, TẤT CẢ các bản ghi con liên quan tự động bị xóa theo.',
          '`SET NULL`: Nếu xóa bản ghi cha, khóa ngoài ở bảng con tự động chuyển thành giá trị NULL (vô chủ).',
          'Khuyến nghị thực tế: Luôn dùng `ON UPDATE CASCADE` (để tự đồng bộ khi đổi mã) và `ON DELETE RESTRICT` (để chống xóa nhầm).'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- Khai báo khóa ngoại với hành vi an toàn:\nALTER TABLE HOC_SINH\nADD CONSTRAINT fk_hocsinh_lop\nFOREIGN KEY (MaLop) REFERENCES LOP(MaLop)\nON UPDATE CASCADE\nON DELETE RESTRICT;'
        },
        emCanNho: [
          '`RESTRICT`: Chặn xóa bản ghi cha nếu còn bản ghi con đang tham chiếu (an toàn nhất).',
          '`CASCADE`: Xóa/Sửa bản ghi cha thì tự động xóa/sửa luôn các bản ghi con tương ứng.',
          'Nên thiết lập: `ON UPDATE CASCADE` và `ON DELETE RESTRICT` cho các bảng quan trọng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Hành vi Tham chiếu và Tác động',
      instruction: 'Nối từ khóa hành vi tham chiếu với kết quả tương ứng khi xóa bản ghi cha:',
      matchingPairs: [
        { id: 'ref1', left: 'ON DELETE RESTRICT', right: 'Báo lỗi và chặn không cho xóa bản ghi cha nếu còn dữ liệu con' },
        { id: 'ref2', left: 'ON DELETE CASCADE', right: 'Tự động xóa sạch toàn bộ các bản ghi con có liên quan' },
        { id: 'ref3', left: 'ON UPDATE CASCADE', right: 'Khi đổi mã lớp ở bảng cha, mã lớp của học sinh tự động đổi theo' },
        { id: 'ref4', left: 'ON DELETE SET NULL', right: 'Giữ lại bản ghi con nhưng gán giá trị khóa ngoài về rỗng (NULL)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong cơ sở dữ liệu quản lý học sinh, hành vi nào sau đây là AN TOÀN NHẤT khi thiết lập cho sự kiện xóa một Lớp học (ON DELETE)?',
        options: [
          'RESTRICT (Chặn xóa nếu trong lớp vẫn còn danh sách học sinh)',
          'CASCADE (Xóa luôn cả 40 học sinh khi xóa lớp)',
          'Tắt toàn bộ kiểm tra khóa ngoài',
          'Xóa luôn cơ sở dữ liệu'
        ],
        correctIndex: 0,
        explanation: 'RESTRICT bảo vệ dữ liệu học sinh không bao giờ bị xóa oan uổng khi người dùng vô tình bấm xóa lớp.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Tùy chọn `ON UPDATE CASCADE` mang lại lợi ích gì cho hệ thống?',
        options: [
          'Khi mã lớp trong bảng LOP thay đổi (ví dụ đổi từ 11A thành 11A1), mã lớp của tất cả học sinh trong bảng HOC_SINH tự động cập nhật đồng bộ theo',
          'Tự động tăng gấp đôi số lượng học sinh',
          'Xóa toàn bộ điểm số',
          'Khóa máy tính lại'
        ],
        correctIndex: 0,
        explanation: 'ON UPDATE CASCADE đảm bảo tính nhất quán dữ liệu tự động mà không cần phải đi sửa thủ công từng học sinh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trong tình huống một Hóa đơn có nhiều Chi tiết đơn hàng, nếu khách hàng hủy đơn và xóa Hóa đơn, các Chi tiết đơn hàng bên trong nên được thiết lập hành vi gì?',
        options: ['ON DELETE CASCADE (Xóa hóa đơn thì các dòng chi tiết tự động xóa theo)', 'ON DELETE RESTRICT', 'Bắt khách hàng đền tiền', 'Không làm gì'],
        correctIndex: 0,
        explanation: 'Chi tiết đơn hàng chỉ có ý nghĩa khi đi liền với Hóa đơn, khi xóa Hóa đơn thì xóa luôn chi tiết là hoàn toàn hợp lý (CASCADE).',
        difficulty: 'Vận dụng'
      },
      {
        id: 4,
        question: 'Lỗi "Cannot delete or update a parent row: a foreign key constraint fails" xuất hiện khi nào?',
        options: [
          'Khi bạn cố gắng xóa một bản ghi cha đang được cài đặt quy tắc RESTRICT và đang có bản ghi con tham chiếu tới nó',
          'Khi máy tính bị mất điện',
          'Khi bạn nhập đúng mật khẩu',
          'Khi bàn phím bị kẹt phím'
        ],
        correctIndex: 0,
        explanation: 'Đây là thông báo lỗi kinh điển bảo vệ dữ liệu của MySQL khi cơ chế RESTRICT kích hoạt.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Muốn xóa thành công một bản ghi cha khi đang ở chế độ RESTRICT, bạn bắt buộc phải làm thao tác nào trước?',
        options: [
          'Chuyển các bản ghi con sang bản ghi cha khác, hoặc xóa các bản ghi con trước',
          'Tắt máy chủ CSDL',
          'Xóa toàn bộ CSDL',
          'Đổi tên máy tính'
        ],
        correctIndex: 0,
        explanation: 'Giải phóng toàn bộ các ràng buộc con trước thì bản ghi cha mới có thể được xóa an toàn.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Thử Nghiệm Ràng Buộc Tham Chiếu RESTRICT & CASCADE',
        context: 'Kiểm chứng hành vi của Hệ QTCSDL khi thao tác xóa trên bảng cha.',
        mission: 'Tạo hai bảng thử nghiệm và ghi nhận phản ứng của MySQL.',
        steps: [
          'Bước 1: Tạo bảng `KHOA` (bảng cha) và `NGANH` (bảng con có khóa ngoại ON DELETE RESTRICT).',
          'Bước 2: Thêm 1 khoa và 2 ngành trực thuộc.',
          'Bước 3: Chạy lệnh xóa Khoa và chụp lại thông báo lỗi vi phạm tham chiếu của MySQL.',
          'Bước 4: Thử thay đổi cấu hình sang ON DELETE CASCADE và quan sát kết quả.'
        ],
        outputRequirement: 'Báo cáo so sánh sự khác biệt thực tế giữa RESTRICT và CASCADE.',
        practicalTip: 'Hiểu rõ thông báo lỗi khóa ngoài sẽ giúp bạn tự tin giải quyết mọi khúc mắc trong các dự án CSDL sau này.'
      },
      mindmap: {
        id: 'mm_11_22',
        label: 'CẬP NHẬT BẢNG THAM CHIẾU',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_22_1',
            label: 'Các chế độ chính',
            children: [
              { id: 'mm_11_22_1_1', label: 'RESTRICT (Chặn thao tác)' },
              { id: 'mm_11_22_1_2', label: 'CASCADE (Tự động liên hoàn)' },
              { id: 'mm_11_22_1_3', label: 'SET NULL (Gán giá trị rỗng)' }
            ]
          },
          {
            id: 'mm_11_22_2',
            label: 'Nguyên tắc an toàn',
            children: [
              { id: 'mm_11_22_2_1', label: 'ON UPDATE CASCADE' },
              { id: 'mm_11_22_2_2', label: 'ON DELETE RESTRICT' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Viên Toàn Vẹn Tham Chiếu 11',
      badgeIcon: 'GitBranch',
      roleTitle: 'Chuyên Viên Kiểm Soát Ràng Buộc Dữ Liệu',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững cơ chế kiểm soát dây chuyền CASCADE và RESTRICT trong CSDL.',
      skillsUnlocked: ['Hiểu sâu RESTRICT vs CASCADE', 'Bảo vệ dữ liệu phụ thuộc', 'Xử lý lỗi Foreign Key Constraint']
    }
  },

  // Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng
  {
    id: 23,
    code: 'TIN11_B23',
    title: 'Thực hành truy xuất dữ liệu qua liên kết các bảng',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Liên kết bảng JOIN',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Kết hợp sức mạnh đa bảng: Khám phá phép nối INNER JOIN và LEFT JOIN',
      description: 'Làm chủ kỹ thuật trích xuất thông tin tổng hợp từ nhiều bảng dữ liệu khác nhau bằng mệnh đề JOIN (INNER JOIN, LEFT JOIN) kết hợp điều kiện so khớp ON, phục vụ các bài toán báo cáo thống kê phức tạp.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Phép nối INNER JOIN', 'Mệnh đề so khớp ON', 'Truy xuất báo cáo tổng hợp']
    },
    objectives: [
      {
        id: 'obj_11_23_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của phép nối bảng JOIN',
        description: 'Hiểu được nguyên lý so khớp các bản ghi giữa bảng A và bảng B dựa trên điều kiện `A.KhoaChinh = B.KhoaNgoai`.',
        iconName: 'GitMerge'
      },
      {
        id: 'obj_11_23_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Viết câu lệnh INNER JOIN thành thạo',
        description: 'Viết được câu truy vấn lấy Họ tên học sinh cùng Tên lớp học từ 2 bảng riêng biệt bằng mệnh đề `INNER JOIN ... ON ...`.',
        iconName: 'Play'
      },
      {
        id: 'obj_11_23_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy liên kết dữ liệu đa chiều',
        description: 'Hình thành khả năng phân tích và tổng hợp thông tin từ nhiều nguồn dữ liệu độc lập để đưa ra bức tranh toàn cảnh.',
        iconName: 'Eye'
      }
    ],
    warmup: {
      title: 'Tình huống: Bảng Học sinh chỉ có "Mã lớp", muốn in ra "Tên lớp" thì làm sao?',
      scenario: 'Trong bảng `HOC_SINH` chỉ lưu cột `MaLop` (ví dụ: "L01"). Tên lớp chi tiết ("Lớp 11A1 Chuyên Tin") và tên Giáo viên chủ nhiệm lại nằm ở bảng `LOP`. Ban Giám hiệu yêu cầu in danh sách gồm: Họ tên học sinh, Tên lớp đầy đủ và Tên Giáo viên chủ nhiệm.',
      pollQuestion: 'Phép toán nào trong ngôn ngữ SQL cho phép ghép nối thông tin từ cả hai bảng lại với nhau?',
      pollOptions: [
        { id: 'p11_23_1', text: 'Mệnh đề INNER JOIN kết hợp điều kiện ON (HOC_SINH.MaLop = LOP.MaLop)', votesPercent: 94, isPopular: true, insight: 'Chính xác! Phép JOIN so khớp cột khóa ngoại và khóa chính để tạo ra bảng kết quả tổng hợp hoàn chỉnh.' },
        { id: 'p11_23_2', text: 'Ngồi gõ tay từng tên lớp vào bảng học sinh', votesPercent: 3, insight: 'Gõ thủ công lãng phí thời gian và vi phạm nguyên tắc chống dư thừa dữ liệu.' },
        { id: 'p11_23_3', text: 'Ghép hai màn hình máy tính lại với nhau', votesPercent: 3, insight: 'Ghép màn hình vật lý không liên quan đến xử lý logic dữ liệu trong CSDL.' }
      ],
      reflection: 'Phép JOIN là đỉnh cao của ngôn ngữ SQL, biến các bảng dữ liệu rời rạc thành kho tri thức tổng hợp mạnh mẽ.'
    },
    knowledge: [
      {
        id: 'tab_11_23_1',
        title: '1. Cú Pháp & Nguyên Lý Hoạt Động của INNER JOIN',
        subtitle: 'Ghép nối các dòng dữ liệu thỏa mãn điều kiện so khớp',
        iconName: 'Layers',
        keyPoints: [
          'Cú pháp chuẩn: `SELECT BangA.Cot1, BangB.Cot2 FROM BangA INNER JOIN BangB ON BangA.KhoaChinh = BangB.KhoaNgoai WHERE <DieuKien>;`',
          'Nguyên lý INNER JOIN: Chỉ giữ lại những dòng dữ liệu có sự trùng khớp giá trị giữa 2 bảng theo điều kiện ở mệnh đề `ON`.',
          'Định danh rõ nguồn gốc: Khi các bảng có tên cột trùng nhau (như cùng có cột `MaLop`), bắt buộc phải viết tiền tố tên bảng phía trước: `HOC_SINH.MaLop` hoặc sử dụng bí danh (Alias: `hs.MaLop`).',
          'Mở rộng: Có thể nối 3 hoặc nhiều bảng cùng lúc bằng cách lặp lại các mệnh đề `JOIN ... ON ...`.'
        ],
        visualType: 'interactive-sql',
        visualData: {
          defaultSql: '-- Truy vấn lấy Họ tên học sinh kèm Tên lớp đầy đủ:\nSELECT \n  HOC_SINH.MaHS,\n  HOC_SINH.HoTen,\n  LOP.TenLop,\n  LOP.GiaoVienChuNhiem\nFROM HOC_SINH\nINNER JOIN LOP ON HOC_SINH.MaLop = LOP.MaLop\nORDER BY LOP.TenLop ASC, HOC_SINH.HoTen ASC;'
        },
        emCanNho: [
          'Cú pháp: `SELECT ... FROM BangA INNER JOIN BangB ON BangA.Khoa = BangB.Khoa`.',
          'Mệnh đề `ON` dùng để xác định cặp thuộc tính liên kết giữa hai bảng.',
          'Dùng `TenBang.TenCot` để tránh nhầm lẫn khi hai bảng có cột trùng tên.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thành phần trong câu truy vấn JOIN',
      instruction: 'Nối các từ khóa trong câu lệnh nối bảng với vai trò tương ứng:',
      matchingPairs: [
        { id: 'j1', left: 'SELECT hs.HoTen, lop.TenLop', right: 'Chỉ định các cột cần hiển thị từ cả hai bảng' },
        { id: 'j2', left: 'FROM HOC_SINH hs', right: 'Chỉ định bảng nguồn thứ nhất và đặt bí danh ngắn là hs' },
        { id: 'j3', left: 'INNER JOIN LOP lop', right: 'Nối với bảng nguồn thứ hai và đặt bí danh là lop' },
        { id: 'j4', left: 'ON hs.MaLop = lop.MaLop', right: 'Điều kiện so khớp khóa ngoại MaLop của học sinh với khóa chính của lớp' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Mục đích cốt lõi của mệnh đề `INNER JOIN` trong câu lệnh SQL là gì?',
        options: [
          'Kết hợp các dòng từ hai hay nhiều bảng dựa trên một cột chung có giá trị so khớp tương ứng',
          'Xóa toàn bộ các bảng trong CSDL',
          'Tạo mật khẩu cho người dùng',
          'Tắt máy chủ CSDL'
        ],
        correctIndex: 0,
        explanation: 'INNER JOIN dùng để kết nối và tổng hợp thông tin từ nhiều bảng dữ liệu quan hệ.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Trong câu lệnh JOIN, mệnh đề `ON` có vai trò gì?',
        options: [
          'Xác định điều kiện so khớp liên kết giữa hai bảng (thường là so sánh Khóa chính = Khóa ngoài)',
          'Bật máy tính lên',
          'Sắp xếp dữ liệu từ A đến Z',
          'Đếm tổng số bản ghi'
        ],
        correctIndex: 0,
        explanation: 'Mệnh đề ON chỉ định chuẩn quy tắc so sánh để ghép cặp hai dòng dữ liệu của hai bảng.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Nếu hai bảng `HOC_SINH` và `LOP` đều có chung một cột mang tên `MaLop`, làm thế nào để SQL không bị lỗi nhầm lẫn (Ambiguous Column)?',
        options: [
          'Ghi rõ tên bảng phía trước tên cột, ví dụ: `HOC_SINH.MaLop` hoặc `LOP.MaLop`',
          'Xóa cột MaLop ở một trong hai bảng',
          'Đổi tên một bảng thành tên khác',
          'Bỏ không dùng cột MaLop nữa'
        ],
        correctIndex: 0,
        explanation: 'Cú pháp `TenBang.TenCot` giúp phân biệt chính xác cột dữ liệu thuộc bảng nào.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Giả sử bảng `HOC_SINH` có 100 học sinh, trong đó có 2 bạn chưa được xếp lớp (`MaLop` mang giá trị NULL). Khi thực hiện `INNER JOIN` với bảng `LOP`, kết quả trả về bao nhiêu học sinh?',
        options: [
          '98 học sinh (vì 2 bạn có MaLop là NULL không so khớp được với bất kỳ lớp nào trong bảng LOP)',
          '100 học sinh',
          '102 học sinh',
          '0 học sinh'
        ],
        correctIndex: 0,
        explanation: 'INNER JOIN chỉ lấy những bản ghi có sự trùng khớp ở cả 2 bảng, các dòng NULL sẽ bị loại bỏ.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Để viết ngắn gọn câu lệnh JOIN phức tạp, kỹ thuật nào sau đây thường được các lập trình viên sử dụng?',
        options: [
          'Đặt bí danh (Alias) cho tên bảng, ví dụ: `FROM HOC_SINH hs INNER JOIN LOP l ON hs.MaLop = l.MaLop`',
          'Viết hoa toàn bộ câu lệnh',
          'Xóa hết dấu cách',
          'Không dùng dấu chấm phẩy'
        ],
        correctIndex: 0,
        explanation: 'Bí danh bảng (Table Alias) giúp câu lệnh SQL ngắn gọn, sáng sủa và dễ đọc hơn rất nhiều.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Truy Xuất Báo Cáo Mượn Trả Sách Thư Viện',
        context: 'Cán bộ thư viện cần in phiếu mượn sách có đầy đủ Họ tên người mượn và Tên cuốn sách.',
        mission: 'Viết câu truy vấn JOIN liên kết 3 bảng: `HOC_SINH`, `PHIEU_MUON` và `SACH`.',
        steps: [
          'Bước 1: Nối bảng `PHIEU_MUON` với bảng `HOC_SINH` qua `MaHS`.',
          'Bước 2: Tiếp tục nối với bảng `SACH` qua `MaSach`.',
          'Bước 3: Chọn các cột: `HoTen`, `TenSach`, `NgayMuon`, `NgayPhaiTra` và lọc những phiếu chưa trả.'
        ],
        outputRequirement: 'Một câu lệnh SQL nối 3 bảng hoàn chỉnh và kết quả bảng báo cáo mượn sách.',
        practicalTip: 'Khi nối 3 bảng, bạn chỉ cần viết 2 lần mệnh đề `INNER JOIN ... ON ...` liên tiếp nhau.'
      },
      mindmap: {
        id: 'mm_11_23',
        label: 'LIÊN KẾT BẢNG JOIN',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_23_1',
            label: 'Nguyên tắc nối',
            children: [
              { id: 'mm_11_23_1_1', label: 'So khớp Khóa chính = Khóa ngoài' },
              { id: 'mm_11_23_1_2', label: 'Mệnh đề ON bắt buộc' },
              { id: 'mm_11_23_1_3', label: 'Dùng bí danh (Alias) bảng' }
            ]
          },
          {
            id: 'mm_11_23_2',
            label: 'Ứng dụng thực tế',
            children: [
              { id: 'mm_11_23_2_1', label: 'Báo cáo điểm học sinh' },
              { id: 'mm_11_23_2_2', label: 'Hóa đơn chi tiết bán hàng' },
              { id: 'mm_11_23_2_3', label: 'Phiếu mượn sách thư viện' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Nối Bảng JOIN 11',
      badgeIcon: 'GitMerge',
      roleTitle: 'Chuyên Viên Phân Tích Dữ Liệu Đa Bảng',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ câu lệnh INNER JOIN liên kết nhiều bảng để trích xuất báo cáo tổng hợp.',
      skillsUnlocked: ['Viết câu lệnh INNER JOIN', 'Sử dụng mệnh đề ON và Alias', 'Nối 3 bảng dữ liệu liên hoàn']
    }
  },

  // Bài 24: Thực hành sao lưu dữ liệu
  {
    id: 24,
    code: 'TIN11_B24',
    title: 'Thực hành sao lưu dữ liệu',
    themeId: 6,
    themeName: 'Chủ đề 6: Thực hành tạo và khai thác cơ sở dữ liệu',
    topicBadge: 'Sao lưu & Phục hồi',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Phao cứu sinh số: Kỹ thuật Xuất bản sao lưu (Export) và Phục hồi (Import) CSDL',
      description: 'Làm chủ quy trình xuất tệp sao lưu dữ liệu (.sql dump) trong HeidiSQL / MySQL, lập chiến lược sao lưu định kỳ và các bước phục hồi lại toàn bộ cấu trúc và dữ liệu sau sự cố hỏng hóc phần cứng.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Xuất tệp sao lưu SQL Dump (.sql)', 'Phục hồi dữ liệu Import', 'Chiến lược sao lưu dự phòng']
    },
    objectives: [
      {
        id: 'obj_11_24_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của tệp sao lưu SQL Dump',
        description: 'Hiểu rằng tệp sao lưu `.sql` thực chất là một tập hợp các câu lệnh SQL (CREATE TABLE, INSERT INTO) dùng để tái tạo lại toàn bộ dữ liệu.',
        iconName: 'Archive'
      },
      {
        id: 'obj_11_24_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác Export và Import thành thạo',
        description: 'Thực hiện xuất tệp sao lưu CSDL ra máy tính và nhập phục hồi thành công trên một máy tính hoặc máy chủ khác.',
        iconName: 'DownloadCloud'
      },
      {
        id: 'obj_11_24_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thói quen sao lưu thường xuyên',
        description: 'Hình thành phản xạ sao lưu dữ liệu trước khi thực hiện các thay đổi lớn hoặc trước khi cài lại hệ điều hành.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Máy chủ phòng máy bị sét đánh cháy ổ cứng',
      scenario: 'Một trận giông sét làm chập điện và cháy ổ cứng máy chủ lưu trữ toàn bộ điểm số học kỳ của học sinh. Rất may, thầy phụ trách phòng máy đã xuất một file `backup_diem_2026.sql` lưu trên Google Drive vào chiều hôm trước.',
      pollQuestion: 'Thầy phụ trách cần làm gì trên máy tính mới để đưa hệ thống hoạt động trở lại bình thường?',
      pollOptions: [
        { id: 'p11_24_1', text: 'Tải file .sql về, mở phần mềm quản trị CSDL và chạy lệnh Import (Phục hồi) tệp script đó', votesPercent: 95, isPopular: true, insight: 'Chính xác! Tệp SQL Dump sẽ tự động chạy lại toàn bộ lệnh tạo bảng và bơm lại 100% dữ liệu nguyên vẹn.' },
        { id: 'p11_24_2', text: 'Ngồi nhập lại điểm số của 3000 học sinh từ đầu', votesPercent: 2, insight: 'Nhập lại từ đầu tốn hàng tháng trời và dễ xảy ra sai sót.' },
        { id: 'p11_24_3', text: 'Cho tất cả học sinh nghỉ học', votesPercent: 3, insight: 'Sao lưu dữ liệu chính là để đảm bảo hoạt động giáo dục không bị gián đoạn.' }
      ],
      reflection: 'Sao lưu dữ liệu là sự bảo hiểm sinh mệnh cho mọi hệ thống công nghệ thông tin.'
    },
    knowledge: [
      {
        id: 'tab_11_24_1',
        title: '1. Quy Trình Xuất (Export) & Nhập (Import) CSDL trong HeidiSQL',
        subtitle: 'Bảo vệ dữ liệu bằng tệp script SQL hoàn chỉnh',
        iconName: 'FileArchive',
        keyPoints: [
          'Tệp sao lưu `.sql` (SQL Dump): Chứa mã nguồn DDL (tạo cấu trúc bảng) và DML (các lệnh INSERT INTO phục hồi dữ liệu).',
          'Quy trình Xuất (Export): Nhấp chuột phải vào CSDL -> Chọn "Export database as SQL" -> Chọn thư mục lưu -> Bấm Export.',
          'Quy trình Nhập (Import / Restore): Vào menu File -> Chọn "Run SQL file..." (hoặc mở tệp .sql trong tab Query) -> Bấm F9 để thực thi toàn bộ script.',
          'Nguyên tắc 3-2-1 trong sao lưu: Có ít nhất 3 bản sao, trên 2 loại phương tiện khác nhau, và ít nhất 1 bản lưu ngoài địa điểm (trên đám mây).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bước 1: Export (Xuất)', desc: 'Tạo tệp backup_dulieu.sql an toàn' },
            { label: 'Bước 2: Cất giữ an toàn', desc: 'Lưu trên Google Drive hoặc ổ cứng ngoài' },
            { label: 'Bước 3: Import (Phục hồi)', desc: 'Tái tạo lại CSDL nguyên vẹn chỉ trong vài giây' }
          ]
        },
        emCanNho: [
          'Tệp sao lưu `.sql` chứa toàn bộ câu lệnh tái tạo cấu trúc và dữ liệu.',
          'Dùng tính năng `Export database as SQL` để sao lưu trong HeidiSQL.',
          'Dùng `Run SQL file...` (F9) để phục hồi lại CSDL khi gặp sự cố.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác Sao lưu và Phục hồi',
      instruction: 'Nối các thao tác với mục đích thực hiện trong bảo trì dữ liệu:',
      matchingPairs: [
        { id: 'bk1', left: 'Export database as SQL', right: 'Xuất toàn bộ CSDL thành tệp kịch bản script .sql để cất giữ' },
        { id: 'bk2', left: 'Run SQL file (Import)', right: 'Chạy tệp sao lưu .sql để phục hồi lại dữ liệu lên máy chủ mới' },
        { id: 'bk3', left: 'Quy tắc sao lưu 3-2-1', right: 'Chiến lược giữ 3 bản sao trên 2 phương tiện và 1 bản trên đám mây' },
        { id: 'bk4', left: 'Sao lưu định kỳ tự động', right: 'Lên lịch hệ thống tự động backup mỗi đêm mà không cần bấm tay' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Tệp sao lưu cơ sở dữ liệu thường có phần mở rộng mặc định là gì?',
        options: ['.sql', '.mp3', '.exe', '.jpg'],
        correctIndex: 0,
        explanation: 'Tệp sao lưu CSDL MySQL là tệp văn bản mã nguồn SQL thuần túy mang đuôi mở rộng `.sql`.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Bản chất thực sự bên trong của một tệp sao lưu `backup.sql` là gì?',
        options: [
          'Là tập hợp các câu lệnh SQL (CREATE TABLE, INSERT INTO) dùng để tái tạo lại toàn bộ bảng và dữ liệu',
          'Là một video ghi lại quá trình làm việc của học sinh',
          'Là một bài hát ru ngủ',
          'Là một bức ảnh chụp màn hình máy tính'
        ],
        correctIndex: 0,
        explanation: 'Tệp SQL dump chứa chuỗi lệnh tái tạo cấu trúc và dữ liệu khi được chạy lại.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Thời điểm nào sau đây BẮT BUỘC bạn nên thực hiện sao lưu CSDL ngay lập tức?',
        options: [
          'Trước khi nâng cấp hệ thống, trước khi sửa đổi cấu trúc lớn hoặc định kỳ cuối mỗi ngày làm việc',
          'Khi đang chơi game giải trí',
          'Khi máy tính đang tắt nguồn',
          'Không bao giờ cần sao lưu'
        ],
        correctIndex: 0,
        explanation: 'Sao lưu trước khi thay đổi lớn đảm bảo bạn có điểm phục hồi an toàn nếu thao tác bị lỗi.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Quy tắc sao lưu dữ liệu "3-2-1" kinh điển khuyến nghị điều gì?',
        options: [
          'Có ít nhất 3 bản sao lưu, lưu trên 2 loại thiết bị lưu trữ khác nhau, và có 1 bản cất giữ ở nơi khác (đám mây)',
          'Đếm từ 3 đến 1 rồi rút phích cắm điện',
          'Lưu 3 tệp vào cùng 1 thư mục',
          'Chia sẻ mật khẩu cho 3 người bạn'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc 3-2-1 là tiêu chuẩn vàng quốc tế về an toàn dữ liệu và phòng chống thảm họa.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Để phục hồi lại CSDL từ tệp `backup.sql` trong phần mềm HeidiSQL, bạn sử dụng thao tác nào?',
        options: [
          'Vào menu File -> Chọn "Run SQL file..." và chọn tệp backup.sql cần phục hồi',
          'Xóa phần mềm HeidiSQL đi cài lại',
          'Đổi tên tệp thành backup.docx',
          'Kéo tệp vào thùng rác Recycle Bin'
        ],
        correctIndex: 0,
        explanation: 'Run SQL file sẽ đọc và thực thi tuần tự các câu lệnh trong tệp để tái tạo dữ liệu.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Sao Lưu & Chuyển Giao CSDL sang Máy tính Khác',
        context: 'Bạn cần mang toàn bộ CSDL bài tập thực hành từ phòng máy trường về nhà học tập.',
        mission: 'Xuất file SQL dump của CSDL `quan_ly_hoc_sinh` và thử nghiệm phục hồi.',
        steps: [
          'Bước 1: Trong HeidiSQL, nhấp chuột phải vào `quan_ly_hoc_sinh` -> Chọn "Export database as SQL".',
          'Bước 2: Chọn lưu thành tệp `backup_qlhs_2026.sql` và lưu lên Google Drive cá nhân.',
          'Bước 3: Mở một máy tính khác, tạo CSDL mới và Import tệp `backup_qlhs_2026.sql`.',
          'Bước 4: Kiểm tra lại các bảng và dữ liệu đã được phục hồi đầy đủ 100%.'
        ],
        outputRequirement: 'Tệp sao lưu `.sql` hoạt động tốt và phục hồi trơn tru không bị lỗi.',
        practicalTip: 'Khi xuất tệp, nhớ tích chọn cả 2 mục: "Structure" (Cấu trúc bảng) và "Data" (Dữ liệu bản ghi).'
      },
      mindmap: {
        id: 'mm_11_24',
        label: 'SAO LƯU DỮ LIỆU CSDL',
        color: '#0891b2',
        children: [
          {
            id: 'mm_11_24_1',
            label: 'Xuất sao lưu (Export)',
            children: [
              { id: 'mm_11_24_1_1', label: 'Tệp kịch bản .sql dump' },
              { id: 'mm_11_24_1_2', label: 'Bao gồm Cấu trúc & Dữ liệu' },
              { id: 'mm_11_24_1_3', label: 'Quy tắc 3-2-1 an toàn' }
            ]
          },
          {
            id: 'mm_11_24_2',
            label: 'Phục hồi (Import)',
            children: [
              { id: 'mm_11_24_2_1', label: 'Menu File -> Run SQL file' },
              { id: 'mm_11_24_2_2', label: 'Tái tạo nguyên vẹn CSDL' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Sao Lưu Dữ Liệu 11',
      badgeIcon: 'Archive',
      roleTitle: 'Chuyên Viên Quản Trị & Phục Hồi Dữ Liệu',
      congratsMessage: 'Xuất sắc! Bạn đã hoàn thành toàn bộ chuỗi bài thực hành CSDL và nắm chắc phao cứu sinh sao lưu dữ liệu.',
      skillsUnlocked: ['Xuất tệp SQL Dump (.sql)', 'Phục hồi CSDL bằng Import', 'Áp dụng quy tắc sao lưu 3-2-1']
    }
  }
];
