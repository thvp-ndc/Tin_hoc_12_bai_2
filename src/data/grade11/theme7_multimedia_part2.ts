import { Lesson } from '../../types/lesson';

export const THEME7_LESSONS_PART2_11: Lesson[] = [
  // Bài 27: Công cụ vẽ và một số ứng dụng
  {
    id: 27,
    code: 'TIN11_B27',
    title: 'Công cụ vẽ và một số ứng dụng',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Vẽ & Lớp (Layer)',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Linh hồn của đồ họa số: Làm chủ hệ thống Lớp (Layer) và Bút vẽ (Brush)',
      description: 'Khám phá khái niệm Lớp ảnh (Layers) xếp chồng lên nhau như những tấm kính trong suốt, công cụ cọ vẽ Paintbrush, tẩy xóa Eraser, chèn chữ Text Tool và kỹ thuật ghép ảnh nghệ thuật không phá hủy ảnh gốc.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Khái niệm Lớp (Layer) xếp chồng', 'Công cụ cọ vẽ Paintbrush & Tẩy Eraser', 'Ghép ảnh nghệ thuật đa lớp']
    },
    objectives: [
      {
        id: 'obj_11_27_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Bản chất của Lớp (Layer)',
        description: 'Hiểu được nguyên lý các lớp ảnh xếp chồng trong suốt, lớp trên che khuất lớp dưới và độ mờ đục (Opacity).',
        iconName: 'Layers'
      },
      {
        id: 'obj_11_27_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thao tác quản lý Layer',
        description: 'Thực hiện tạo lớp mới, đổi thứ tự lớp, ẩn/hiện lớp (biểu tượng con mắt), điều chỉnh Opacity và gộp lớp (Merge Down).',
        iconName: 'Sliders'
      },
      {
        id: 'obj_11_27_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tác phong làm việc chuyên nghiệp',
        description: 'Rèn luyện thói quen luôn vẽ hoặc chèn chi tiết mới trên một Layer riêng biệt để dễ dàng chỉnh sửa mà không làm hỏng hình gốc.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Vẽ râu ria lên ảnh chân dung rồi... không xóa được!',
      scenario: 'Một bạn học sinh mở ảnh chân dung và dùng công cụ cọ vẽ Paintbrush vẽ trực tiếp một chiếc kính râm lên khuôn mặt. Sau đó bạn muốn bỏ chiếc kính đi nhưng lệnh Eraser lại tẩy trắng toát cả khuôn mặt đằng sau!',
      pollQuestion: 'Nguyên tắc thiết kế sống còn nào đã bị bạn ấy bỏ qua khi vẽ thêm chi tiết?',
      pollOptions: [
        { id: 'p11_27_1', text: 'Phải tạo một Lớp mới (New Layer) riêng biệt ở trên rồi mới vẽ chiếc kính lên lớp đó', votesPercent: 94, isPopular: true, insight: 'Chính xác! Làm việc trên Layer riêng giúp bạn có thể xóa, di chuyển hoặc ẩn chiếc kính mà khuôn mặt gốc bên dưới vẫn nguyên vẹn.' },
        { id: 'p11_27_2', text: 'Phải dùng bút dạ quang vẽ lên màn hình máy tính', votesPercent: 3, insight: 'Vẽ lên màn hình vật lý sẽ làm hỏng thiết bị phần cứng.' },
        { id: 'p11_27_3', text: 'Không được phép vẽ kính râm', votesPercent: 3, insight: 'Phần mềm cho phép sáng tạo tự do nếu bạn nắm vững kỹ thuật Layer.' }
      ],
      reflection: 'Tư duy làm việc theo từng Lớp (Layer) là bí quyết phân biệt giữa một người mới tập tành và một nhà thiết kế đồ họa chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_27_1',
        title: '1. Khái Niệm Lớp (Layer) & Các Thao Tác Quản Lý Lớp',
        subtitle: 'Xếp chồng các tấm kính trong suốt để tạo nên bức tranh tổng thể',
        iconName: 'Layers',
        keyPoints: [
          'Khái niệm Layer: Giống như các tấm kính trong suốt đặt chồng lên nhau. Chi tiết vẽ trên lớp trên sẽ che khuất chi tiết ở lớp dưới.',
          'Bảng điều khiển Layers Panel: Hiển thị danh sách các lớp theo thứ tự từ trên xuống dưới.',
          'Biểu tượng Con mắt (Eye): Bật/tắt chế độ hiển thị của lớp mà không cần xóa nó.',
          'Độ mờ đục (Opacity): Điều chỉnh từ 0% (hoàn toàn trong suốt tàng hình) đến 100% (hiển thị rõ nét tuyệt đối).',
          'Tạo lớp mới: Bấm nút `New Layer` ở góc dưới bảng Layers hoặc phím tắt `Ctrl + Shift + N`.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Layer 3: Chữ văn bản (Text)', desc: 'Nằm trên cùng: Tiêu đề poster, slogan' },
            { label: 'Layer 2: Nhân vật (Subject)', desc: 'Nằm giữa: Ảnh người đã tách nền' },
            { label: 'Layer 1: Phông nền (Background)', desc: 'Nằm dưới cùng: Bầu trời, phong cảnh thành phố' }
          ]
        },
        emCanNho: [
          'Layer là các tấm kính trong suốt xếp chồng; lớp trên che khuất lớp dưới.',
          'Luôn tạo Layer mới (`Ctrl + Shift + N`) trước khi vẽ hoặc thêm chi tiết mới.',
          'Dùng `Opacity` để tạo hiệu ứng mờ ảo hòa trộn giữa các lớp.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác Layer và Tác dụng',
      instruction: 'Nối thao tác quản lý lớp trong GIMP với kết quả tương ứng:',
      matchingPairs: [
        { id: 'ly1', left: 'Ctrl + Shift + N', right: 'Tạo một lớp mới (New Layer) trong suốt' },
        { id: 'ly2', left: 'Biểu tượng Con mắt (Eye Icon)', right: 'Ẩn hoặc hiện lớp dữ liệu tương ứng trên bảng vẽ' },
        { id: 'ly3', left: 'Kéo thanh trượt Opacity xuống 50%', right: 'Làm lớp trở nên bán trong suốt, nhìn xuyên thấu lớp bên dưới' },
        { id: 'ly4', left: 'Kéo thả vị trí Layer lên trên cùng', right: 'Đưa đối tượng lên lớp tiền cảnh, che khuất các đối tượng bên dưới' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong các phần mềm đồ họa như GIMP, khái niệm "Lớp" (Layer) được so sánh với hình ảnh thực tế nào sau đây?',
        options: [
          'Những tấm kính trong suốt được vẽ các hình ảnh khác nhau rồi đặt chồng lên nhau',
          'Một trang giấy báo in đen trắng',
          'Một khối đất sét đặc',
          'Một cuộn băng dính đen'
        ],
        correctIndex: 0,
        explanation: 'Layer giống như các tấm kính trong suốt cho phép nhìn xuyên qua những vùng không có nét vẽ.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tổ hợp phím tắt nào trong GIMP dùng để TẠO MỚI MỘT LỚP (New Layer)?',
        options: ['Ctrl + Shift + N', 'Ctrl + N', 'Ctrl + L', 'Ctrl + Alt + Del'],
        correctIndex: 0,
        explanation: 'Ctrl + Shift + N mở hộp thoại tạo lớp mới trong GIMP (Ctrl + N là tạo file ảnh mới).',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Nếu bạn có 2 lớp: Lớp 1 (Nền phong cảnh) và Lớp 2 (Hình chú mèo). Để nhìn thấy chú mèo đứng trước phong cảnh, thứ tự xếp lớp phải như thế nào?',
        options: [
          'Lớp 2 (Chú mèo) phải nằm Ở TRÊN Lớp 1 (Phong cảnh)',
          'Lớp 1 phải nằm ở trên Lớp 2',
          'Đặt hai lớp ngang hàng nhau',
          'Xóa Lớp 2 đi'
        ],
        correctIndex: 0,
        explanation: 'Lớp nằm trên sẽ hiển thị ở phía trước (tiền cảnh), che lớp phía dưới (hậu cảnh).',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Thao tác nhấp chuột vào biểu tượng "Con mắt" ở cạnh tên một Layer trong bảng Layers Panel dùng để làm gì?',
        options: [
          'Ẩn hoặc hiện lớp đó trên bảng vẽ mà không cần xóa nó',
          'Xóa vĩnh viễn lớp đó khỏi máy tính',
          'Khóa chuột máy tính',
          'Phóng to mắt nhân vật trong ảnh'
        ],
        correctIndex: 0,
        explanation: 'Biểu tượng con mắt dùng để chuyển đổi trạng thái hiển thị (Visibility) của lớp.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Tại sao việc chỉnh sửa trên nhiều Layer riêng biệt lại được coi là phương pháp làm việc "Không phá hủy" (Non-destructive editing)?',
        options: [
          'Vì mỗi đối tượng nằm trên một lớp riêng, bạn có thể tự do xóa hoặc sửa lớp đó mà không làm ảnh hưởng hay hư hỏng ảnh gốc bên dưới',
          'Vì phần mềm không tốn điện',
          'Vì màn hình không bị xước',
          'Vì không cần dùng chuột'
        ],
        correctIndex: 0,
        explanation: 'Làm việc theo lớp bảo vệ ảnh gốc luôn nguyên vẹn, dễ dàng quay lại trạng thái ban đầu bất kỳ lúc nào.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Thiết kế Thiệp Chúc Mừng Sinh Nhật Đa Lớp',
        context: 'Tự tay làm một tấm thiệp sinh nhật độc đáo tặng bạn bè bằng GIMP.',
        mission: 'Xây dựng một tệp ảnh gồm ít nhất 3 lớp riêng biệt kết hợp cọ vẽ và chữ.',
        steps: [
          'Lớp 1 (Nền): Tô màu chuyển sắc Gradient từ hồng sang tím pastel.',
          'Lớp 2 (Trang trí): Dùng cọ vẽ Brush vẽ các ngôi sao và quả bóng bay.',
          'Lớp 3 (Văn bản): Dùng Text Tool gõ chữ "Chúc Mừng Sinh Nhật!" với màu vàng kim rực rỡ.',
          'Bước 4: Xuất thành tệp `thiep_sinh_nhat.png` gửi tặng bạn.'
        ],
        outputRequirement: 'Tệp thiệp hoàn chỉnh có bố cục hài hòa và các chi tiết phân lớp rõ ràng.',
        practicalTip: 'Khi gõ chữ bằng Text Tool, GIMP sẽ tự động tạo một Text Layer riêng biệt cho bạn.'
      },
      mindmap: {
        id: 'mm_11_27',
        label: 'VẼ VÀ LỚP (LAYER)',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_27_1',
            label: 'Khái niệm Layer',
            children: [
              { id: 'mm_11_27_1_1', label: 'Tấm kính trong suốt xếp chồng' },
              { id: 'mm_11_27_1_2', label: 'Chỉnh sửa không phá hủy' },
              { id: 'mm_11_27_1_3', label: 'Độ mờ đục Opacity (0-100%)' }
            ]
          },
          {
            id: 'mm_11_27_2',
            label: 'Thao tác quản lý',
            children: [
              { id: 'mm_11_27_2_1', label: 'New Layer (Ctrl+Shift+N)' },
              { id: 'mm_11_27_2_2', label: 'Ẩn/Hiện con mắt (Visibility)' },
              { id: 'mm_11_27_2_3', label: 'Thay đổi thứ tự trên/dưới' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Đồ Họa Đa Lớp 11',
      badgeIcon: 'Layers',
      roleTitle: 'Chuyên Viên Thiết Kế Đồ Họa Layer',
      congratsMessage: 'Tuyệt vời! Bạn đã làm chủ tư duy thiết kế đa lớp (Layers) và kỹ thuật ghép ảnh nghệ thuật không phá hủy.',
      skillsUnlocked: ['Quản lý Layers Panel', 'Tạo New Layer (Ctrl+Shift+N)', 'Hiệu chỉnh Opacity & Blend Mode']
    }
  },

  // Bài 28: Tạo ảnh động
  {
    id: 28,
    code: 'TIN11_B28',
    title: 'Tạo ảnh động',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Ảnh động GIF',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Thổi hồn vào từng khung hình: Kỹ thuật sản xuất ảnh động GIF bằng GIMP',
      description: 'Tìm hiểu nguyên lý thị giác lưu ảnh trên võng mạc, cách biến các lớp (Layers) thành từng khung hình hoạt họa (Frames), điều chỉnh thời gian dừng (Delay) và xuất tệp ảnh động định dạng GIF lặp vô tận.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Mỗi Layer là một khung hình (Frame)', 'Quy định thời gian dừng (ms)', 'Xuất tệp Animated GIF']
    },
    objectives: [
      {
        id: 'obj_11_28_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nguyên lý tạo ảnh động',
        description: 'Giải thích được hiện tượng lưu ảnh trên võng mạc mắt và cách máy tính trình chiếu liên tiếp các khung hình để tạo ảo giác chuyển động.',
        iconName: 'PlayCircle'
      },
      {
        id: 'obj_11_28_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Tạo ảnh GIF trong GIMP',
        description: 'Thiết lập được các khung hình trên từng Layer, cài đặt thời gian trễ (ví dụ: `Frame 1 (250ms)`) và xuất tệp GIF chạy lặp lại.',
        iconName: 'Film'
      },
      {
        id: 'obj_11_28_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Sáng tạo và kiên nhẫn',
        description: 'Tỉ mỉ điều chỉnh từng khung hình nhỏ để chuyển động mượt mà và tối ưu hóa dung lượng tệp nhẹ nhàng khi gửi qua mạng.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Những nhãn dán Sticker động siêu dễ thương trên mạng',
      scenario: 'Hàng ngày khi nhắn tin Zalo hoặc Messenger, bạn thường xuyên gửi các nhãn dán sticker hoạt hình chuyển động vui mắt (ảnh định dạng GIF). Bạn có muốn tự tay tạo ra một ảnh động mang phong cách riêng của mình?',
      pollQuestion: 'Trong phần mềm GIMP, thành phần nào được sử dụng để đóng vai trò là từng khung hình chuyển động?',
      pollOptions: [
        { id: 'p11_28_1', text: 'Mỗi Lớp (Layer) trong danh sách sẽ đóng vai trò là một khung hình (Frame) chuyển động', votesPercent: 93, isPopular: true, insight: 'Chính xác! GIMP sẽ tự động duyệt lần lượt từng Layer từ dưới lên trên để phát hoạt họa chuyển động.' },
        { id: 'p11_28_2', text: 'Mỗi nút bấm trên bàn phím', votesPercent: 3, insight: 'Bàn phím chỉ để nhập liệu ký tự, không tạo khung hình đồ họa.' },
        { id: 'p11_28_3', text: 'Mỗi pixel trên màn hình', votesPercent: 4, insight: 'Pixel là điểm ảnh đơn lẻ, khung hình hoàn chỉnh được tạo từ cả một Layer.' }
      ],
      reflection: 'Tạo ảnh động GIF là cầu nối tuyệt vời đưa bạn từ thế giới ảnh tĩnh sang thế giới điện ảnh và video hoạt hình.'
    },
    knowledge: [
      {
        id: 'tab_11_28_1',
        title: '1. Quy Trình Sản Xuất Ảnh Động GIF Trong GIMP',
        subtitle: 'Biến các Layer thành từng khung hình chuyển động liên tiếp',
        iconName: 'Film',
        keyPoints: [
          'Nguyên lý hoạt động: GIMP xem mỗi Layer là một khung hình (Frame). Thứ tự trình chiếu mặc định là từ lớp dưới cùng lên lớp trên cùng.',
          'Thiết lập thời gian dừng (Frame Delay): Đổi tên Layer theo cú pháp kèm mili-giây, ví dụ: `Khung 1 (200ms)` nghĩa là khung hình dừng lại 0.2 giây trước khi nhảy sang khung tiếp theo.',
          'Xem trước chuyển động: Vào menu `Filters -> Animation -> Playback...` để bấm Play xem thử chuyển động mượt mà trước khi xuất tệp.',
          'Xuất tệp Animated GIF: Vào `File -> Export As...` -> Chọn đuôi `.gif` -> Tích chọn ô **"As animation"** và **"Loop forever"** (lặp vô tận).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Layer 1: Đèn Đỏ (1000ms)', desc: 'Chiếc xe dừng lại trước vạch kẻ' },
            { label: 'Layer 2: Đèn Vàng (500ms)', desc: 'Chuẩn bị khởi động động cơ' },
            { label: 'Layer 3: Đèn Xanh (1000ms)', desc: 'Chiếc xe bắt đầu phóng đi' }
          ]
        },
        emCanNho: [
          'Trong GIMP: Mỗi Layer tương ứng với một khung hình (Frame) của ảnh động.',
          'Xem thử trước chuyển động bằng: `Filters -> Animation -> Playback...`.',
          'Khi Export As đuôi `.gif`, BẮT BUỘC phải tích chọn ô **"As animation"**.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác Tạo ảnh động trong GIMP',
      instruction: 'Nối thao tác sản xuất ảnh động với chức năng tương ứng:',
      matchingPairs: [
        { id: 'gif1', left: 'Filters -> Animation -> Playback', right: 'Mở cửa sổ xem trước (Preview) hoạt ảnh đang chạy thử' },
        { id: 'gif2', left: 'Đặt tên Layer: Frame 1 (500ms)', right: 'Quy định khung hình dừng lại nửa giây (500 mili-giây)' },
        { id: 'gif3', left: 'Tùy chọn "As animation"', right: 'Yêu cầu GIMP xuất tệp GIF dưới dạng ảnh động chứ không phải ảnh tĩnh' },
        { id: 'gif4', left: 'Tùy chọn "Loop forever"', right: 'Cho phép ảnh động tự động lặp lại liên tục không có điểm dừng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Định dạng tệp hình ảnh nào sau đây hỗ trợ hiển thị ảnh chuyển động (ảnh động)?',
        options: ['.gif', '.jpg', '.bmp', '.pdf'],
        correctIndex: 0,
        explanation: 'GIF (Graphics Interchange Format) là định dạng chuẩn quốc tế hỗ trợ lưu nhiều khung hình chuyển động.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Trong phần mềm GIMP, để xem trước ảnh động chạy thử như thế nào trước khi xuất bản, bạn dùng lệnh nào?',
        options: ['Filters -> Animation -> Playback...', 'Tools -> Zoom', 'Colors -> Levels', 'Edit -> Undo'],
        correctIndex: 0,
        explanation: 'Animation Playback mở trình phát cho phép bấm Play, Pause và chỉnh tốc độ xem thử hoạt ảnh.',
        difficulty: 'Nhận biết'
      },
      {
        id: 3,
        question: 'Khi đặt tên cho một Layer là: `Buoc1 (250ms)`, con số 250ms mang ý nghĩa gì?',
        options: [
          'Khung hình đó sẽ hiển thị trong thời gian 250 mili-giây (0.25 giây)',
          'Kích thước ảnh là 250 megabyte',
          'Độ phân giải 250 điểm ảnh',
          'Giá tiền 250 đồng'
        ],
        correctIndex: 0,
        explanation: 'ms là viết tắt của milliseconds (mili-giây), 1000ms = 1 giây.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Khi xuất tệp ảnh động bằng lệnh File -> Export As..., nếu bạn QUÊN không tích chọn ô "As animation", điều gì sẽ xảy ra?',
        options: [
          'Tệp GIF xuất ra sẽ chỉ là một bức ảnh tĩnh bất động (chỉ giữ lại lớp trên cùng)',
          'Máy tính sẽ tắt nguồn',
          'Tệp tự đổi thành video 4K',
          'Phần mềm tự động gõ mã lệnh'
        ],
        correctIndex: 0,
        explanation: 'Nếu không chọn "As animation", GIMP sẽ hợp nhất các lớp thành một ảnh tĩnh duy nhất.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Để ảnh động GIF tự động phát lặp đi lặp lại mãi mãi mà không bị dừng lại ở khung cuối cùng, bạn cần tích chọn mục nào?',
        options: ['Loop forever', 'Play once', 'Stop immediately', 'Mute audio'],
        correctIndex: 0,
        explanation: 'Loop forever giúp ảnh động liên tục tuần hoàn lặp vô tận.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Tạo Ảnh Động "Đèn Giao Thông Chớp Nháy"',
        context: 'Làm tài liệu tuyên truyền an toàn giao thông cho học sinh trường THPT.',
        mission: 'Sản xuất một tệp ảnh động `den_giao_thong.gif` chuyển đổi giữa 3 màu Đỏ, Vàng, Xanh.',
        steps: [
          'Bước 1: Tạo Layer 1: Vẽ cột đèn sáng bóng màu Đỏ, đặt tên `Do (1000ms)`.',
          'Bước 2: Tạo Layer 2: Vẽ cột đèn sáng bóng màu Vàng, đặt tên `Vang (400ms)`.',
          'Bước 3: Tạo Layer 3: Vẽ cột đèn sáng bóng màu Xanh, đặt tên `Xanh (1000ms)`.',
          'Bước 4: Mở Playback chạy thử, sau đó Export thành tệp `den_giao_thong.gif` tích chọn "As animation" và "Loop forever".'
        ],
        outputRequirement: 'Tệp ảnh động GIF nhấp nháy 3 nhịp đèn mượt mà, kích thước tệp nhẹ dưới 200KB.',
        practicalTip: 'Nhân bản (Duplicate Layer) từ Layer 1 rồi chỉ sửa màu bóng đèn sẽ giúp bạn tiết kiệm 80% thời gian vẽ.'
      },
      mindmap: {
        id: 'mm_11_28',
        label: 'TẠO ẢNH ĐỘNG GIF',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_28_1',
            label: 'Nguyên lý khung hình',
            children: [
              { id: 'mm_11_28_1_1', label: 'Mỗi Layer = 1 Frame' },
              { id: 'mm_11_28_1_2', label: 'Độ trễ thời gian (ms)' },
              { id: 'mm_11_28_1_3', label: 'Trình chiếu dưới lên trên' }
            ]
          },
          {
            id: 'mm_11_28_2',
            label: 'Kiểm tra & Xuất bản',
            children: [
              { id: 'mm_11_28_2_1', label: 'Animation Playback' },
              { id: 'mm_11_28_2_2', label: 'Tích chọn As animation' },
              { id: 'mm_11_28_2_3', label: 'Tích chọn Loop forever' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Làm Phim Hoạt Họa GIF 11',
      badgeIcon: 'Film',
      roleTitle: 'Chuyên Viên Sản Xuất Đồ Họa Động',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững nguyên lý hoạt họa và kỹ thuật tạo ảnh động GIF lặp vô tận bằng GIMP.',
      skillsUnlocked: ['Tạo Frame từ Layer', 'Xem trước Animation Playback', 'Xuất bản Animated GIF chuẩn']
    }
  },

  // Bài 29: Khám phá phần mềm làm phim
  {
    id: 29,
    code: 'TIN11_B29',
    title: 'Khám phá phần mềm làm phim',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Phần mềm làm phim',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bước chân vào phòng dựng phim: Khám phá thế giới biên tập video số',
      description: 'Làm quen với giao diện chuẩn của phần mềm biên tập phim (OpenShot / Video Editor), hiểu cấu trúc dự án phim (Project), khu vực quản lý tài nguyên Media (hình ảnh, âm thanh, video clip) và dòng thời gian (Timeline).',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Cấu trúc phần mềm dựng phim', 'Dòng thời gian đa rãnh (Timeline Tracks)', 'Quản lý tài nguyên Project Files']
    },
    objectives: [
      {
        id: 'obj_11_29_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các thành phần của dự án phim',
        description: 'Phân biệt được tài nguyên gốc (Media Files), dòng thời gian (Timeline), rãnh video (Video Track), rãnh âm thanh (Audio Track) và màn hình xem trước (Preview).',
        iconName: 'Clapperboard'
      },
      {
        id: 'obj_11_29_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Khởi tạo dự án và nạp dữ liệu',
        description: 'Tạo được một Project mới, nhập (Import) hình ảnh, video clip, nhạc nền vào phần mềm dựng phim an toàn.',
        iconName: 'FolderPlus'
      },
      {
        id: 'obj_11_29_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tổ chức tài nguyên ngăn nắp',
        description: 'Hình thành thói quen gom toàn bộ hình ảnh, âm thanh, video vào một thư mục dự án duy nhất để tránh bị lỗi mất liên kết tệp (Missing Media).',
        iconName: 'CheckCircle2'
      }
    ],
    warmup: {
      title: 'Tình huống: Mở dự án video lên thì toàn bộ màn hình báo "Missing Media" đỏ lòm!',
      scenario: 'Một bạn học sinh lưu video ở màn hình Desktop, nhạc ở ổ D, ảnh ở thư mục Tải về. Hôm sau chép file dự án `.osp` sang máy tính trường học mở lên thì toàn bộ tài nguyên đều biến mất.',
      pollQuestion: 'Nguyên tắc vàng nào khi bắt đầu làm một dự án video bạn bắt buộc phải tuân thủ?',
      pollOptions: [
        { id: 'p11_29_1', text: 'Tạo một thư mục dự án duy nhất và gom toàn bộ video, ảnh, nhạc cần dùng vào thư mục đó trước khi dựng', votesPercent: 95, isPopular: true, insight: 'Chính xác! File dự án video chỉ lưu đường dẫn liên kết, nếu để file rải rác hoặc đổi vị trí sẽ gây lỗi mất liên kết dữ liệu.' },
        { id: 'p11_29_2', text: 'Không cần gom, cứ để bừa bãi trên máy tính', votesPercent: 2, insight: 'Để bừa bãi sẽ chắc chắn gây lỗi Missing Media khi chuyển máy.' },
        { id: 'p11_29_3', text: 'Xóa bớt video đi cho nhẹ', votesPercent: 3, insight: 'Xóa video gốc sẽ khiến phần mềm không còn dữ liệu để phát.' }
      ],
      reflection: 'Kỹ năng quản lý tài nguyên khoa học là phẩm chất tiên quyết của một nhà làm phim chuyên nghiệp.'
    },
    knowledge: [
      {
        id: 'tab_11_29_1',
        title: '1. Giao Diện & Kiến Trúc Phần Mềm Dựng Phim',
        subtitle: 'Project Files, Timeline, Tracks và Cửa sổ Preview',
        iconName: 'Clapperboard',
        keyPoints: [
          'Khu vực Project Files: Kho chứa toàn bộ tài nguyên đầu vào (video quay thô, ảnh chụp, nhạc nền, hiệu ứng âm thanh).',
          'Dòng thời gian (Timeline): Nơi sắp xếp các đoạn clip theo trình tự thời gian từ trái sang phải (trục thời gian tính bằng giây và phút).',
          'Hệ thống rãnh (Tracks): Cho phép xếp chồng nhiều lớp video và âm thanh. Rãnh trên sẽ đè lên rãnh dưới (tương tự như Layer trong GIMP).',
          'Màn hình xem trước (Preview Window): Cho phép bấm Play/Pause để xem trực tiếp đoạn phim đang được biên tập ở vị trí con trỏ thời gian (Playhead).'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Track 3: Phụ đề & Logo', desc: 'Nằm trên cùng: Chữ hiển thị, nhãn dán' },
            { label: 'Track 2: Đoạn Video chính', desc: 'Nằm giữa: Các cảnh quay diễn biến câu chuyện' },
            { label: 'Track 1: Nhạc nền (Audio)', desc: 'Nằm dưới: Bài hát nền nhẹ nhàng du dương' }
          ]
        },
        emCanNho: [
          'Gom toàn bộ tài nguyên vào một thư mục dự án duy nhất trước khi làm phim.',
          'Timeline sắp xếp video theo thời gian; Tracks xếp chồng hình ảnh/âm thanh theo lớp.',
          'Con trỏ thời gian (Playhead) chỉ vị trí khung hình đang được chiếu ở Preview.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thành phần Phần mềm làm phim',
      instruction: 'Nối các khu vực trên giao diện dựng phim với chức năng tương ứng:',
      matchingPairs: [
        { id: 'vid1', left: 'Khu vực Project Files', right: 'Nơi nhập (Import) và quản lý hình ảnh, video, âm thanh gốc' },
        { id: 'vid2', left: 'Dòng thời gian Timeline', right: 'Trục ngang hiển thị thời gian diễn biến của toàn bộ đoạn phim' },
        { id: 'vid3', left: 'Con trỏ thời gian (Playhead)', right: 'Thanh trượt đứng chỉ đúng giây phút đang được chiếu thử' },
        { id: 'vid4', left: 'Màn hình Video Preview', right: 'Khung hình hiển thị trực quan kết quả của bộ phim' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Trong phần mềm làm phim, khu vực "Timeline" (Dòng thời gian) dùng để làm gì?',
        options: [
          'Sắp xếp các đoạn video, hình ảnh và âm thanh theo thứ tự thời gian xuất hiện từ đầu đến cuối',
          'Xem dự báo thời tiết ngày mai',
          'Tự động tắt máy tính',
          'Đổi mật khẩu tài khoản'
        ],
        correctIndex: 0,
        explanation: 'Timeline là không gian làm việc chính nơi đạo diễn sắp đặt nhịp điệu của các cảnh phim.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Tại sao tệp dự án phim (ví dụ tệp .osp) lại có dung lượng rất nhẹ (chỉ vài Kilobyte) dù bộ phim dài hàng chục phút?',
        options: [
          'Vì tệp dự án chỉ lưu các thông tin chỉ dẫn cắt ghép và đường dẫn tới tệp gốc, chứ không chứa nội dung video gốc bên trong',
          'Vì phần mềm nén siêu cấp vô địch',
          'Vì phim không có màu',
          'Vì phim bị xóa hết'
        ],
        correctIndex: 0,
        explanation: 'Tệp dự án là tệp kịch bản điều khiển liên kết, dữ liệu thật nằm ở các tệp media gốc.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Trên Timeline có nhiều rãnh (Tracks) xếp chồng lên nhau. Nếu Track 2 đặt một hình ảnh logo, còn Track 1 đặt một đoạn video cảnh quay, điều gì sẽ hiển thị?',
        options: [
          'Hình logo ở Track 2 sẽ nổi lên trên và đè lên góc của đoạn video ở Track 1',
          'Đoạn video sẽ che mất logo',
          'Hai track tự động biến mất',
          'Màn hình báo lỗi'
        ],
        correctIndex: 0,
        explanation: 'Quy tắc rãnh Track tương tự Layer: Track có số thứ tự cao hơn (ở trên) sẽ đè lên Track ở dưới.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Hành động nào sau đây sẽ làm hỏng dự án phim và gây lỗi "Missing Media" (Mất tệp)?',
        options: [
          'Xóa hoặc đổi tên hoặc di chuyển tệp video gốc sang thư mục khác sau khi đã đưa vào dự án',
          'Bấm nút Play để xem phim',
          'Kéo dài thời lượng ảnh trên Timeline',
          'Tắt bớt âm thanh'
        ],
        correctIndex: 0,
        explanation: 'Khi đổi vị trí hoặc xóa tệp gốc, phần mềm dựng phim sẽ không thể tìm thấy dữ liệu để phát.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Thao tác đầu tiên cần làm khi bắt đầu biên tập một đoạn video ngắn là gì?',
        options: [
          'Thu thập đầy đủ hình ảnh, video, âm thanh vào 1 thư mục và Import vào Project Files',
          'Xuất video ra tệp MP4 ngay lập tức',
          'Tắt màn hình máy tính',
          'Gõ chữ phụ đề trước'
        ],
        correctIndex: 0,
        explanation: 'Chuẩn bị và nạp tài nguyên đầy đủ là bước tiền kỳ bắt buộc trước khi tiến hành cắt ghép.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Khởi Tạo Dự Án Phim "Kỷ Niệm Mái Trường"',
        context: 'Lớp 11 chuẩn bị làm video ngắn kỷ niệm ngày Nhà giáo Việt Nam 20/11.',
        mission: 'Thiết lập thư mục dự án và nạp các tài nguyên vào phần mềm dựng phim.',
        steps: [
          'Bước 1: Tạo thư mục `Du_An_Video_20_11` trong ổ đĩa máy tính.',
          'Bước 2: Thu thập 5 bức ảnh chụp trường lớp và 1 bài hát nhạc nền vào thư mục đó.',
          'Bước 3: Mở phần mềm làm phim (OpenShot / Clipchamp), tạo dự án mới và Import toàn bộ ảnh, nhạc vào Project Files.',
          'Bước 4: Lưu tệp dự án với tên `Ky_Niem_20_11.osp` vào cùng thư mục.'
        ],
        outputRequirement: 'Dự án phim được khởi tạo hoàn chỉnh, các tài nguyên sẵn sàng trên khay Project Files.',
        practicalTip: 'Đặt tên các tệp ảnh theo thứ tự kịch bản (VD: `01_cong_truong.jpg`, `02_lop_hoc.jpg`) để khi kéo xuống Timeline không bị lộn xộn.'
      },
      mindmap: {
        id: 'mm_11_29',
        label: 'PHẦN MỀM LÀM PHIM',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_29_1',
            label: 'Cấu trúc giao diện',
            children: [
              { id: 'mm_11_29_1_1', label: 'Project Files (Nguồn tài nguyên)' },
              { id: 'mm_11_29_1_2', label: 'Timeline (Dòng thời gian)' },
              { id: 'mm_11_29_1_3', label: 'Preview (Màn hình phát thử)' }
            ]
          },
          {
            id: 'mm_11_29_2',
            label: 'Nguyên tắc quản lý',
            children: [
              { id: 'mm_11_29_2_1', label: 'Thư mục dự án duy nhất' },
              { id: 'mm_11_29_2_2', label: 'Tránh lỗi Missing Media' },
              { id: 'mm_11_29_2_3', label: 'Lưu tệp dự án định kỳ' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Biên Tập Phim Tập Sự 11',
      badgeIcon: 'Clapperboard',
      roleTitle: 'Chuyên Viên Quản Trị Dự Án Video',
      congratsMessage: 'Tuyệt vời! Bạn đã nắm vững cấu trúc phần mềm dựng phim và kỹ năng quản lý tài nguyên video chuẩn.',
      skillsUnlocked: ['Hiểu Timeline & Tracks', 'Quản lý thư mục dự án an toàn', 'Import tài nguyên media']
    }
  },

  // Bài 30: Biên tập phim
  {
    id: 30,
    code: 'TIN11_B30',
    title: 'Biên tập phim',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Kỹ xảo & Biên tập video',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Nghệ thuật cắt ghép hình ảnh: Cắt tỉa, chuyển cảnh, lồng nhạc và xuất video',
      description: 'Làm chủ các thao tác kỹ thuật dựng phim chuyên nghiệp: Cắt gọt đầu đuôi clip, tách đoạn (Split), thêm hiệu ứng chuyển cảnh (Transitions), cân chỉnh âm lượng nhạc nền (Fade in/out), chèn tiêu đề chữ và xuất tệp video chuẩn MP4 Full HD.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Cắt tách video (Split / Trim)', 'Hiệu ứng chuyển cảnh (Transitions)', 'Lồng âm thanh & Xuất file MP4']
    },
    objectives: [
      {
        id: 'obj_11_30_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Các kỹ thuật biên tập video cơ bản',
        description: 'Hiểu rõ các thuật ngữ: Cắt tỉa (Trim), Tách đoạn (Split), Hiệu ứng chuyển cảnh (Transition), Tăng/giảm âm lượng dần (Fade in/Fade out).',
        iconName: 'Scissors'
      },
      {
        id: 'obj_11_30_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Hoàn thiện đoạn video hoàn chỉnh',
        description: 'Cắt bỏ các đoạn quay lỗi, ghép các cảnh mượt mà có hiệu ứng chuyển cảnh, lồng phụ đề và xuất bản ra tệp MP4 chất lượng cao.',
        iconName: 'Film'
      },
      {
        id: 'obj_11_30_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng bản quyền âm nhạc',
        description: 'Lựa chọn các bản nhạc nền miễn phí bản quyền (Royalty-free / YouTube Audio Library) để tránh bị chặn âm thanh khi đăng tải.',
        iconName: 'Music'
      }
    ],
    warmup: {
      title: 'Tình huống: Video quay bị rung và có 10 giây quay nhầm xuống đất',
      scenario: 'Đoạn video quay buổi sinh hoạt câu lạc bộ rất hay, nhưng ở giữa có khoảng 10 giây người quay vô tình cúi xuống làm ống kính chỉ quay vào mũi giày.',
      pollQuestion: 'Thao tác biên tập nào giúp loại bỏ đoạn 10 giây quay hỏng đó một cách sạch sẽ?',
      pollOptions: [
        { id: 'p11_30_1', text: 'Dùng công cụ Cắt/Tách (Split / Razor) cắt ở đầu và cuối đoạn hỏng rồi bấm phím Delete xóa đi', votesPercent: 94, isPopular: true, insight: 'Chính xác! Công cụ Split giúp chia nhỏ clip và xóa bỏ những đoạn lỗi thừa một cách hoàn hảo.' },
        { id: 'p11_30_2', text: 'Dùng băng dính dán lên màn hình để che mũi giày', votesPercent: 2, insight: 'Dán băng dính không sửa được tệp video gốc.' },
        { id: 'p11_30_3', text: 'Tua thật nhanh qua đoạn đó', votesPercent: 4, insight: 'Tua nhanh vẫn để lộ cảnh quay hỏng, làm giảm chất lượng chuyên nghiệp của video.' }
      ],
      reflection: 'Biết cắt bỏ những chi tiết thừa là bí quyết quan trọng nhất để tạo nên một thước phim cuốn hút, hấp dẫn người xem.'
    },
    knowledge: [
      {
        id: 'tab_11_30_1',
        title: '1. Quy Trình Biên Tập & Kỹ Thuật Dựng Video Chuẩn',
        subtitle: 'Cắt ghép, Chuyển cảnh, Xử lý âm thanh và Xuất bản',
        iconName: 'Video',
        keyPoints: [
          'Cắt tách clip (Split): Đưa Playhead đến vị trí cần cắt, nhấp biểu tượng cây kéo (hoặc phím tắt) để chia một clip dài thành hai đoạn độc lập.',
          'Hiệu ứng chuyển cảnh (Transitions): Kéo thả hiệu ứng (như Fade, Dissolve, Wipe) vào giữa hai đoạn clip để cảnh chuyển tiếp mềm mại, không bị giật cục.',
          'Biên tập âm thanh: Sử dụng hiệu ứng `Fade In` (âm lượng to dần lúc đầu) và `Fade Out` (nhỏ dần lúc kết thúc); giảm âm lượng nhạc nền xuống khoảng 20% khi có lời nói thuyết minh.',
          'Xuất video (Export Video): Chọn định dạng phổ biến nhất là `MP4 (H.264)`, độ phân giải Full HD (1920x1080) và tốc độ khung hình 30 fps.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Bước 1: Cắt ghép thô (Rough Cut)', desc: 'Cắt bỏ cảnh hỏng, xếp theo kịch bản' },
            { label: 'Bước 2: Hiệu ứng & Chữ (Finishing)', desc: 'Thêm chuyển cảnh, tiêu đề, nhạc nền' },
            { label: 'Bước 3: Xuất bản (Export Video)', desc: 'Kết xuất tệp MP4 Full HD 1080p sắc nét' }
          ]
        },
        emCanNho: [
          'Dùng công cụ `Split / Razor` để cắt rời các phân đoạn video.',
          'Chèn `Transitions` giữa các cảnh để chuyển tiếp mượt mà.',
          'Xuất video chuẩn định dạng `MP4 (H.264)` độ phân giải Full HD 1080p.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Thao tác Kỹ xảo và Hiệu ứng đạt được',
      instruction: 'Nối thao tác biên tập video với kết quả hiệu ứng tương ứng:',
      matchingPairs: [
        { id: 'fx1', left: 'Cắt tách Split (Razor Tool)', right: 'Chia một đoạn video dài thành các phần nhỏ để xóa bớt đoạn thừa' },
        { id: 'fx2', left: 'Hiệu ứng Fade Out cho âm thanh', right: 'Âm lượng nhạc nền nhỏ dần đều trước khi bài hát kết thúc êm ái' },
        { id: 'fx3', left: 'Hiệu ứng Dissolve Transition', right: 'Cảnh cũ mờ dần và hòa tan từ từ vào cảnh mới' },
        { id: 'fx4', left: 'Export Video MP4 1080p', right: 'Xuất bản ra tệp video hoàn chỉnh chạy mượt trên YouTube, TV' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thao tác nào dùng để chia một đoạn clip dài trên Timeline thành hai đoạn riêng biệt?',
        options: ['Split (Cắt/Tách đoạn)', 'Zoom In', 'Loop Video', 'Save Project'],
        correctIndex: 0,
        explanation: 'Lệnh Split (biểu tượng cây kéo) cắt đôi clip tại vị trí con trỏ thời gian.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Hiệu ứng "Fade In" khi áp dụng cho một đoạn âm thanh nhạc nền có tác dụng gì?',
        options: [
          'Làm cho âm lượng bài hát to dần lên từ từ lúc bắt đầu, tránh làm giật mình người xem',
          'Tắt tiếng hoàn toàn',
          'Làm méo tiếng ca sĩ',
          'Tăng tốc độ bài hát lên 10 lần'
        ],
        correctIndex: 0,
        explanation: 'Fade In làm âm thanh to dần êm ái, mang lại trải nghiệm nghe dễ chịu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Khi chèn hiệu ứng chuyển cảnh (Transitions) vào giữa hai clip, điều gì sẽ xảy ra?',
        options: [
          'Hai cảnh phim sẽ chuyển đổi qua lại mượt mà (như mờ chồng, gạt sang bên) thay vì nhảy cảnh đột ngột',
          'Đoạn video bị xóa mất',
          'Máy tính tự động tắt phần mềm',
          'Video bị đổi sang màu trắng đen'
        ],
        correctIndex: 0,
        explanation: 'Transitions giúp kết nối các phân cảnh điện ảnh một cách nghệ thuật và trơn tru.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Định dạng tệp video nào sau đây được sử dụng phổ biến nhất trên toàn thế giới, tương thích với mọi thiết bị từ điện thoại đến máy tính và TV?',
        options: ['.mp4 (MPEG-4)', '.txt', '.wav', '.html'],
        correctIndex: 0,
        explanation: 'MP4 (chuẩn nén H.264) là định dạng video tiêu chuẩn toàn cầu hiện nay.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Khi lồng một bản nhạc nền vào video có người đang thuyết minh, bạn nên điều chỉnh âm lượng nhạc nền như thế nào?',
        options: [
          'Giảm âm lượng nhạc nền xuống vừa phải (khoảng 15% - 25%) để người nghe nghe rõ lời thuyết minh',
          'Bật nhạc nền to hết cỡ át tiếng người nói',
          'Tắt luôn tiếng người nói',
          'Mở cùng lúc 10 bài hát khác nhau'
        ],
        correctIndex: 0,
        explanation: 'Nhạc nền chỉ đóng vai trò hỗ trợ cảm xúc, không được lấn át giọng nói của nhân vật chính.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thực hành: Sản Xuất Video Giới Thiệu Bản Thân 60 Giây',
        context: 'Làm một video ngắn "Shorts / Reel" giới thiệu sở thích và ước mơ của học sinh lớp 11.',
        mission: 'Biên tập một đoạn video hoàn chỉnh thời lượng đúng 60 giây có chuyển cảnh và nhạc nền.',
        steps: [
          'Bước 1: Ghép 4 đoạn clip quay ngắn: Chào hỏi, Học tập, Thể thao, Ước mơ tương lai.',
          'Bước 2: Cắt gọt đầu đuôi mỗi clip khoảng 15 giây.',
          'Bước 3: Chèn hiệu ứng chuyển cảnh mờ dần (Dissolve) giữa các đoạn.',
          'Bước 4: Lồng một bản nhạc nền sôi động có Fade In đầu và Fade Out cuối video.',
          'Bước 5: Xuất video thành tệp `Gioi_Thieu_Ban_Than.mp4` Full HD.'
        ],
        outputRequirement: 'Tệp video MP4 60 giây chuyển động mượt mà, âm thanh cân đối không bị rè.',
        practicalTip: 'Chọn nhạc nền có tiết tấu phù hợp với nhịp cắt của hình ảnh để video trông chuyên nghiệp như phim điện ảnh.'
      },
      mindmap: {
        id: 'mm_11_30',
        label: 'BIÊN TẬP VIDEO PHIM',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_30_1',
            label: 'Kỹ thuật hình ảnh',
            children: [
              { id: 'mm_11_30_1_1', label: 'Cắt tỉa Trim & Tách Split' },
              { id: 'mm_11_30_1_2', label: 'Hiệu ứng Transitions' },
              { id: 'mm_11_30_1_3', label: 'Chèn phụ đề & Title' }
            ]
          },
          {
            id: 'mm_11_30_2',
            label: 'Xử lý âm thanh & Xuất',
            children: [
              { id: 'mm_11_30_2_1', label: 'Fade In / Fade Out âm thanh' },
              { id: 'mm_11_30_2_2', label: 'Cân bằng âm lượng thoại và nhạc' },
              { id: 'mm_11_30_2_3', label: 'Xuất file MP4 Full HD 1080p' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Đạo Diễn Video Chuyên Nghiệp 11',
      badgeIcon: 'Video',
      roleTitle: 'Chuyên Viên Biên Tập & Dựng Video',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ kỹ thuật cắt ghép, chèn hiệu ứng chuyển cảnh và xuất bản video MP4 chất lượng cao.',
      skillsUnlocked: ['Tách clip bằng Split Tool', 'Chèn Transitions nghệ thuật', 'Xử lý Fade âm thanh & Xuất MP4']
    }
  },

  // Bài 31: Thực hành tạo phim hoạt hình
  {
    id: 31,
    code: 'TIN11_B31',
    title: 'Thực hành tạo phim hoạt hình',
    themeId: 7,
    themeName: 'Chủ đề 7: Phần mềm chỉnh sửa ảnh và làm video',
    topicBadge: 'Dự án Phim hoạt hình',
    grade: 11,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Đỉnh cao sáng tạo học đường: Dự án sản xuất phim hoạt hình ngắn hoàn chỉnh',
      description: 'Dự án thực hành tổng hợp kết nối toàn bộ kỹ năng của Chủ đề 7: Xây dựng kịch bản phân cảnh (Storyboard), thiết kế nhân vật và bối cảnh trong GIMP, làm chuyển động và dựng thành một bộ phim hoạt hình ngắn ý nghĩa.',
      accentColor: 'from-rose-500 to-pink-600',
      keyHighlights: ['Kịch bản phân cảnh (Storyboard)', 'Thiết kế nhân vật trong GIMP', 'Sản xuất phim hoạt hình hoàn chỉnh']
    },
    objectives: [
      {
        id: 'obj_11_31_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình sản xuất phim hoạt hình',
        description: 'Nắm vững 3 giai đoạn: Tiền kỳ (Kịch bản, phân cảnh), Sản xuất (Vẽ nhân vật, bối cảnh, tạo chuyển động) và Hậu kỳ (Dựng phim, lồng tiếng, xuất video).',
        iconName: 'Clapperboard'
      },
      {
        id: 'obj_11_31_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Vận dụng tổng hợp công cụ đồ họa',
        description: 'Kết hợp thành thạo GIMP để vẽ tách nền nhân vật và phần mềm video để ráp nối thành phim hoạt hình có âm thanh sống động.',
        iconName: 'Sparkles'
      },
      {
        id: 'obj_11_31_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tự hào tác phẩm sáng tạo cá nhân',
        description: 'Hình thành niềm tự hào khi tự tay sáng tạo ra một sản phẩm truyền thông số hoàn chỉnh mang thông điệp giáo dục tích cực.',
        iconName: 'Award'
      }
    ],
    warmup: {
      title: 'Tình huống: Biến câu chuyện ngụ ngôn thành phim hoạt hình 2D',
      scenario: 'Nhóm bạn muốn chuyển thể câu chuyện ngụ ngôn "Rùa và Thỏ" thành một đoạn phim hoạt hình ngắn dài 2 phút để chiếu trong buổi chào cờ đầu tuần.',
      pollQuestion: 'Giai đoạn nào quyết định tính mạch lạc và thành công của một bộ phim hoạt hình trước khi bắt tay vào vẽ?',
      pollOptions: [
        { id: 'p11_31_1', text: 'Xây dựng kịch bản chi tiết và vẽ phác thảo phân cảnh (Storyboard)', votesPercent: 94, isPopular: true, insight: 'Chính xác! Storyboard là bản thiết kế kiến trúc của bộ phim, giúp nhóm hình dung rõ từng cảnh quay trước khi tốn công sản xuất.' },
        { id: 'p11_31_2', text: 'Bật máy tính vẽ bừa bãi không cần nghĩ', votesPercent: 3, insight: 'Không có kịch bản sẽ khiến phim bị lộn xộn, cụt ngủn và không truyền tải được thông điệp.' },
        { id: 'p11_31_3', text: 'Chỉ tìm nhạc nền thật hay', votesPercent: 3, insight: 'Nhạc nền chỉ là yếu tố hỗ trợ, nội dung câu chuyện mới là linh hồn của bộ phim.' }
      ],
      reflection: 'Phim hoạt hình là sự kết tinh hoàn mỹ giữa tư duy văn học, nghệ thuật mỹ thuật tạo hình và công nghệ xử lý số.'
    },
    knowledge: [
      {
        id: 'tab_11_31_1',
        title: '1. Quy Trình 3 Giai Đoạn Sản Xuất Phim Hoạt Hình Hoàn Chỉnh',
        subtitle: 'Tiền kỳ -> Sản xuất tài nguyên -> Hậu kỳ dựng phim',
        iconName: 'Clapperboard',
        keyPoints: [
          'Giai đoạn 1: Tiền kỳ (Pre-production): Viết kịch bản lời thoại và vẽ kịch bản phân cảnh (Storyboard) mô tả từng góc máy.',
          'Giai đoạn 2: Sản xuất (Production): Dùng GIMP vẽ nhân vật trên nền trong suốt (PNG), vẽ các tư thế chuyển động (bước đi, nhảy, vẫy tay) và bối cảnh nền.',
          'Giai đoạn 3: Hậu kỳ (Post-production): Đưa toàn bộ tài nguyên vào phần mềm làm phim, sắp xếp các rãnh Tracks, lồng hiệu ứng âm thanh (tiếng bước chân, tiếng gió thổi), ghi âm giọng đọc lồng tiếng và xuất tệp MP4 Full HD.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Giai đoạn 1: Tiền kỳ', desc: 'Kịch bản câu chuyện & Vẽ Storyboard phân cảnh' },
            { label: 'Giai đoạn 2: Sản xuất', desc: 'Vẽ nhân vật, bối cảnh trong suốt trên GIMP' },
            { label: 'Giai đoạn 3: Hậu kỳ', desc: 'Ghép Timeline, lồng tiếng, xuất video MP4' }
          ]
        },
        emCanNho: [
          '3 giai đoạn làm phim: Tiền kỳ (Kịch bản), Sản xuất (Vẽ đồ họa), Hậu kỳ (Dựng phim).',
          'Vẽ nhân vật trên Layer trong suốt bằng GIMP và xuất định dạng PNG.',
          'Lồng tiếng thuyết minh và tiếng động thực tế để phim hoạt hình trở nên sống động.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Giai đoạn Sản xuất Phim Hoạt Hình',
      instruction: 'Nối các công việc cụ thể với giai đoạn tương ứng trong quy trình làm phim:',
      matchingPairs: [
        { id: 'ani1', left: 'Vẽ kịch bản phân cảnh (Storyboard)', right: 'Giai đoạn Tiền kỳ (Lên kế hoạch và định hình góc máy)' },
        { id: 'ani2', left: 'Vẽ nhân vật tách nền trong GIMP', right: 'Giai đoạn Sản xuất (Tạo lập tài nguyên hình ảnh đồ họa)' },
        { id: 'ani3', left: 'Ghi âm giọng lồng tiếng nhân vật', right: 'Giai đoạn Hậu kỳ (Thu thập âm thanh hội thoại)' },
        { id: 'ani4', left: 'Ráp nối trên Timeline và xuất MP4', right: 'Giai đoạn Hậu kỳ (Đóng gói sản phẩm phim thành phẩm)' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Kịch bản phân cảnh (Storyboard) trong quy trình sản xuất phim hoạt hình đóng vai trò là gì?',
        options: [
          'Bản phác thảo gồm các khung tranh nối tiếp nhau minh họa các cảnh quay chính và lời thoại của câu chuyện',
          'Một danh sách các loại máy tính cần mua',
          'Bảng điểm của các diễn viên',
          'Hóa đơn tiền điện phòng máy'
        ],
        correctIndex: 0,
        explanation: 'Storyboard là bản vẽ thiết kế trực quan giúp toàn bộ ê-kíp thống nhất góc máy và diễn biến cảnh phim.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi vẽ các nhân vật hoạt hình trong GIMP để chuẩn bị đưa sang phần mềm dựng video, bạn nên xuất tệp ảnh ở định dạng nào?',
        options: [
          '.png (vì giữ được nền trong suốt, giúp nhân vật dễ dàng di chuyển trên các bối cảnh khác nhau)',
          '.jpg (vì có nền trắng che hết cảnh phía sau)',
          '.txt',
          '.mp3'
        ],
        correctIndex: 0,
        explanation: 'Định dạng PNG trong suốt là bắt buộc để nhân vật không bị vướng viền hộp trắng bao quanh.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để tạo cảm giác một chú thỏ đang chạy từ từ từ trái sang phải màn hình trong video, kỹ thuật nào được áp dụng?',
        options: [
          'Tạo chuyển động dịch chuyển vị trí (Transform / Motion) cho tệp ảnh chú thỏ trên Timeline',
          'Dán mắt sát vào màn hình chạy theo',
          'Cầm màn hình lắc qua lắc lại',
          'Bấm phím Caps Lock'
        ],
        correctIndex: 0,
        explanation: 'Tính năng Animation / Transform cho phép thiết lập điểm đầu và điểm cuối để vật thể tự động lướt qua màn hình.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Yếu tố âm thanh nào sau đây giúp bộ phim hoạt hình trở nên sống động, chân thực và có cảm xúc nhất?',
        options: [
          'Sự kết hợp hài hòa giữa Lời thoại nhân vật, Tiếng động môi trường (Sound FX) và Nhạc nền (Music)',
          'Chỉ cần tiếng nhạc xập xình to hết cỡ',
          'Để im lặng không có bất kỳ âm thanh nào',
          'Tiếng còi báo cháy'
        ],
        correctIndex: 0,
        explanation: 'Âm thanh đa tầng gồm giọng nói, tiếng động hiệu ứng và âm nhạc tạo nên linh hồn cho phim hoạt hình.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: 'Sau khi hoàn thành bộ phim hoạt hình, bước cuối cùng để chia sẻ cho cả lớp cùng xem trên màn hình Smartboard là gì?',
        options: [
          'Xuất video ra tệp định dạng chuẩn MP4 chất lượng Full HD 1080p',
          'Gửi tệp dự án .osp chưa có video gốc',
          'Xóa toàn bộ thư mục dự án',
          'Chụp ảnh màn hình lưu lại'
        ],
        correctIndex: 0,
        explanation: 'Xuất tệp MP4 thành phẩm là bước đóng gói hoàn tất để có thể phát mượt mà trên mọi màn hình máy chiếu và Smartboard.',
        difficulty: 'Nhận biết'
      }
    ],
    application: {
      project: {
        title: 'Dự Án Tổng Hợp: Sản Xuất Phim Hoạt Hình Ngắn "Bảo Vệ Môi Trường"',
        context: 'Chiến dịch truyền thông "Trường học xanh - Không rác thải nhựa" của Đoàn trường THPT.',
        mission: 'Sản xuất một đoạn phim hoạt hình ngắn 90 giây truyền tải thông điệp bỏ rác đúng nơi quy định.',
        steps: [
          'Bước 1: Viết kịch bản ngắn: Bạn học sinh vứt vỏ hộp sữa bừa bãi và chú gấu xanh xuất hiện giải thích.',
          'Bước 2: Dùng GIMP vẽ 2 nhân vật (Bạn học sinh, Chú gấu) và bối cảnh sân trường.',
          'Bước 3: Đưa tài nguyên vào phần mềm làm phim, tạo chuyển động nhân vật bước đi.',
          'Bước 4: Nhóm tự ghi âm giọng nói lồng tiếng cho nhân vật.',
          'Bước 5: Lồng nhạc nền vui tươi và xuất thành video `Hanh_Trinh_Xanh.mp4` hoàn chỉnh.'
        ],
        outputRequirement: 'Một bộ phim hoạt hình ngắn hoàn chỉnh 90 giây có cốt truyện ý nghĩa, hình ảnh ngộ nghĩnh và âm thanh sống động.',
        practicalTip: 'Hãy phân công rõ ràng: một bạn phụ trách kịch bản và âm thanh, hai bạn phụ trách vẽ nhân vật trên GIMP, một bạn phụ trách dựng Timeline!'
      },
      mindmap: {
        id: 'mm_11_31',
        label: 'DỰ ÁN PHIM HOẠT HÌNH',
        color: '#f43f5e',
        children: [
          {
            id: 'mm_11_31_1',
            label: 'Quy trình 3 bước',
            children: [
              { id: 'mm_11_31_1_1', label: 'Tiền kỳ: Kịch bản Storyboard' },
              { id: 'mm_11_31_1_2', label: 'Sản xuất: Vẽ nhân vật PNG' },
              { id: 'mm_11_31_1_3', label: 'Hậu kỳ: Dựng phim & Lồng tiếng' }
            ]
          },
          {
            id: 'mm_11_31_2',
            label: 'Đóng gói sản phẩm',
            children: [
              { id: 'mm_11_31_2_1', label: 'Lời thoại & Sound FX' },
              { id: 'mm_11_31_2_2', label: 'Nhạc nền cảm xúc' },
              { id: 'mm_11_31_2_3', label: 'Xuất file MP4 Full HD' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Sản Xuất Phim Hoạt Hình 11',
      badgeIcon: 'Award',
      roleTitle: 'Đạo Diễn Sản Xuất Hoạt Hình Số',
      congratsMessage: 'CHÚC MỪNG BẠN! Bạn đã xuất sắc hoàn thành trọn bộ 31 bài học SGK Tin học 11 - Định hướng Tin học Ứng dụng!',
      skillsUnlocked: ['Quy trình sản xuất phim hoạt hình', 'Tích hợp GIMP và Video Editor', 'Sáng tạo truyền thông số']
    }
  }
];
