import { Lesson } from '../types/lesson';

export const LESSONS_DATA: Lesson[] = [
  // ==================== CHỦ ĐỀ 1 ====================
  {
    id: 1,
    code: 'BAI_01',
    title: 'Làm quen với Trí tuệ nhân tạo (AI)',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính & Xã hội tri thức',
    topicBadge: 'AI & Khoa học máy tính',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khám phá kỷ nguyên trí tuệ nhân tạo và máy học hiện đại',
      description: 'Tìm hiểu nguồn gốc, định nghĩa chuẩn mực, đặc trưng cốt lõi của Trí tuệ nhân tạo (AI) và cách phân biệt AI với các chương trình tự động hóa truyền thống.',
      accentColor: 'from-blue-600 to-cyan-500',
      keyHighlights: ['Mô phỏng trí tuệ người', 'Khả năng tự học từ dữ liệu', 'Phân biệt AI hẹp và AI tổng quát']
    },
    objectives: [
      {
        id: 'obj_1_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu bản chất & Định nghĩa AI',
        description: 'Trình bày được khái niệm Trí tuệ nhân tạo (AI) là khả năng của máy móc mô phỏng các hoạt động trí tuệ của con người.',
        iconName: 'Brain'
      },
      {
        id: 'obj_1_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện & Phân biệt AI',
        description: 'Phân biệt được hệ thống có ứng dụng AI với các phần mềm tự động hóa theo quy tắc cứng (Rule-based) thông thường.',
        iconName: 'Cpu'
      },
      {
        id: 'obj_1_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tư duy công nghệ thời đại số',
        description: 'Có thái độ chủ động tìm hiểu công nghệ mới, nhận thức đúng đắn về vai trò của AI như một công cụ hỗ trợ con người.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: 'Tình huống: Trợ lý thông minh tại trường học',
      scenario: 'Bạn Minh lớp 12 muốn xây dựng một hệ thống điểm danh tự động và gợi ý lộ trình ôn thi tốt nghiệp THPT. Minh băn khoăn: Liệu một chiếc máy tính có thể thực sự "học" và "suy nghĩ" như con người không?',
      pollQuestion: 'Theo bạn, đặc điểm quan trọng nhất giúp một cỗ máy được coi là có "Trí tuệ nhân tạo (AI)" là gì?',
      pollOptions: [
        { id: 'p1', text: 'Có khả năng tự học từ dữ liệu và tự thích nghi khi gặp dữ liệu mới', votesPercent: 68, isPopular: true, insight: 'Chính xác! Khả năng tự học (Machine Learning) và thích nghi chính là linh hồn của AI hiện đại.' },
        { id: 'p2', text: 'Chạy các thuật toán tính toán số học với tốc độ hàng tỷ phép tính/giây', votesPercent: 12, insight: 'Tốc độ tính toán siêu nhanh chỉ là siêu máy tính tự động hóa, chưa phải đặc trưng của AI.' },
        { id: 'p3', text: 'Được lập trình sẵn hàng triệu câu lệnh logic IF-THEN cố định', votesPercent: 20, insight: 'Hệ chuyên gia cứng (Rule-based) không thể tự thích nghi khi gặp trường hợp ngoài quy tắc.' }
      ],
      reflection: 'Trí tuệ nhân tạo không đơn thuần là một chiếc máy tính chạy nhanh hay nhớ nhiều dữ liệu, mà là khả năng học hỏi từ kinh nghiệm và giải quyết các bài toán chưa từng gặp.'
    },
    knowledge: [
      {
        id: 'tab_1_1',
        title: '1. Khái niệm Trí tuệ nhân tạo',
        subtitle: 'AI là gì và lịch sử hình thành',
        iconName: 'BookOpen',
        keyPoints: [
          'Trí tuệ nhân tạo (Artificial Intelligence - AI) là ngành khoa học máy tính nghiên cứu cách làm cho máy móc có được năng lực trí tuệ của con người.',
          'Các năng lực trí tuệ bao gồm: Học tập (Learning), Suy luận (Reasoning), Tự điều chỉnh (Self-correction), Hiểu ngôn ngữ tự nhiên (NLP) và Nhận thức thị giác (Computer Vision).',
          'Thuật ngữ AI ra đời chính thức tại hội thảo Dartmouth năm 1956 do John McCarthy và các cộng sự khởi xướng.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Dữ liệu đầu vào (Data)', desc: 'Hình ảnh, văn bản, âm thanh, số liệu thực tế' },
            { label: 'Mô hình học máy (ML/DL)', desc: 'Trích xuất đặc trưng và tìm quy luật ẩn' },
            { label: 'Trí tuệ nhân tạo (AI Output)', desc: 'Dự đoán, sáng tạo, ra quyết định thông minh' }
          ]
        },
        emCanNho: [
          'AI là ngành khoa học tạo ra các máy móc có khả năng mô phỏng hoạt động trí tuệ của con người.',
          'Các đặc trưng cốt lõi của AI: Khả năng học hỏi từ dữ liệu, khả năng suy luận và tự thích nghi.',
          'Phép thử Turing (Turing Test) là thước đo kinh điển để đánh giá trí thông minh của máy móc.'
        ]
      },
      {
        id: 'tab_1_2',
        title: '2. Phân loại AI: AI hẹp vs AI tổng quát',
        subtitle: 'Cấp độ phát triển của trí tuệ nhân tạo',
        iconName: 'Layers',
        keyPoints: [
          'AI hẹp (Narrow/Weak AI): Chuyên xử lý một tác vụ cụ thể vượt trội (Nhận diện khuôn mặt, chơi cờ vua, ChatGPT tạo văn bản). Toàn bộ AI hiện nay đều là AI hẹp.',
          'AI tổng quát (General AI / AGI): Có khả năng hiểu, học và tư duy toàn diện như con người ở bất kỳ lĩnh vực nào (Hiện vẫn là mục tiêu nghiên cứu tương lai).',
          'Siêu trí tuệ (Super AI): Vượt xa trí tuệ của toàn thể nhân loại trong mọi lĩnh vực sáng tạo và khoa học.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Tiêu chí', 'Phần mềm truyền thống', 'Trí tuệ nhân tạo (AI)'],
          rows: [
            ['Cách thức hoạt động', 'Theo quy tắc logic cứng định sẵn (If-Else)', 'Học quy luật từ tập dữ liệu lớn'],
            ['Khả năng thích nghi', 'Không thể xử lý tình huống ngoài lệnh', 'Tự điều chỉnh và nâng cao độ chính xác'],
            ['Ví dụ thực tế', 'Phần mềm tính lương, máy tính bỏ túi', 'Xe tự hành Tesla, Google Dịch, FaceID']
          ]
        },
        emCanNho: [
          'AI hiện tại là AI hẹp (Narrow AI), chuyên giải quyết xuất sắc từng bài toán riêng biệt.',
          'Khác với phần mềm thông thường chạy theo code cứng, AI học các mẫu hình từ dữ liệu huấn luyện.',
          'Mục tiêu tương lai của các nhà khoa học là tiến tới AI tổng quát (AGI).'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Thử thách: Phân loại Hệ thống AI & Tự động hoá',
      instruction: 'Hãy kéo các ứng dụng/phần mềm vào đúng nhóm tương ứng bên dưới:',
      categories: [
        { id: 'ai_tech', title: 'Ứng dụng Trí tuệ nhân tạo (AI)', color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300' },
        { id: 'rule_tech', title: 'Phần mềm Tự động hoá truyền thống', color: 'border-blue-500 bg-blue-950/40 text-blue-300' }
      ],
      dragItems: [
        { id: 'item_1', text: 'Xe ô tô tự lái nhận diện biển báo và người đi bộ', category: 'ai_tech', explanation: 'Sử dụng thị giác máy tính và học sâu để nhận thức môi trường.' },
        { id: 'item_2', text: 'Máy bay không người lái tự tránh chướng ngại vật', category: 'ai_tech', explanation: 'Hệ thống cảm biến kết hợp AI phân tích không gian thời gian thực.' },
        { id: 'item_3', text: 'Bảng tính Excel tự động tính tổng hàm SUM()', category: 'rule_tech', explanation: 'Chỉ thực thi phép cộng số học theo công thức lập trình sẵn.' },
        { id: 'item_4', text: 'Đèn giao thông chuyển màu theo chu kỳ 30 giây', category: 'rule_tech', explanation: 'Tự động hóa theo bộ đếm thời gian cố định, không có khả năng học.' },
        { id: 'item_5', text: 'Hệ thống mở khoá khuôn mặt FaceID 3D trên smartphone', category: 'ai_tech', explanation: 'Sử dụng mạng nơ-ron nhận dạng đặc trưng sinh trắc học.' },
        { id: 'item_6', text: 'Đồng hồ báo thức reo chuông lúc 6 giờ sáng', category: 'rule_tech', explanation: 'Chỉ so sánh giờ hiện tại với giờ đặt trước theo quy tắc.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thuật ngữ "Trí tuệ nhân tạo" (Artificial Intelligence - AI) được chính thức đưa ra tại hội thảo khoa học nào?',
        options: ['Hội thảo Dartmouth (1956)', 'Hội nghị Geneva (1970)', 'Hội thảo Turing London (1950)', 'Hội nghị Silicon Valley (1980)'],
        correctIndex: 0,
        explanation: 'Thuật ngữ AI được nhà khoa học máy tính John McCarthy và cộng sự chính thức đề xuất tại hội thảo trường Dartmouth năm 1956.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Điểm khác biệt căn bản nhất giữa hệ thống AI và phần mềm máy tính truyền thống là gì?',
        options: [
          'Hệ thống AI có khả năng học từ dữ liệu và tự thích ứng khi gặp bài toán mới',
          'Hệ thống AI không cần dùng điện năng để hoạt động',
          'Hệ thống AI chỉ chạy được trên điện thoại di động',
          'Phần mềm truyền thống có dung lượng bộ nhớ lớn hơn AI'
        ],
        correctIndex: 0,
        explanation: 'Khả năng học từ dữ liệu (Learning) và tự thích ứng (Adaptation) là điểm khác biệt cốt lõi nhất giữa AI và phần mềm thuần quy tắc.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Tất cả các hệ thống AI ứng dụng thực tế hiện nay (như ChatGPT, FaceID, xe tự lái) thuộc cấp độ nào?',
        options: ['AI hẹp (Narrow AI)', 'AI tổng quát (General AI)', 'Siêu trí tuệ (Super AI)', 'AI vô hạn'],
        correctIndex: 0,
        explanation: 'Toàn bộ công nghệ AI hiện đại thuộc nhóm AI hẹp (Narrow AI), tức được thiết kế và huấn luyện chuyên sâu cho các tác vụ cụ thể.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Phép thử Turing (Turing Test) do Alan Turing đề xuất nhằm mục đích gì?',
        options: [
          'Đánh giá xem máy móc có hành vi trí tuệ tương đương con người hay không',
          'Đo tốc độ xử lý của vi xử lý CPU',
          'Kiểm tra tốc độ đường truyền Internet',
          'Kiểm tra xem máy tính có bị nhiễm virus hay không'
        ],
        correctIndex: 0,
        explanation: 'Phép thử Turing là bài kiểm tra kinh điển xem một người phỏng vấn có thể phân biệt được câu trả lời của máy móc với con người hay không.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Ứng dụng nào sau đây KHÔNG PHẢI là ứng dụng của Trí tuệ nhân tạo?',
        options: [
          'Chuyển đổi số thành chữ trên trang tính bằng hàm đếm cơ bản',
          'Nhận dạng giọng nói tiếng Việt thành văn bản trên điện thoại',
          'Gợi ý video bài giảng phù hợp dựa trên sở thích học tập của học sinh',
          'Hệ thống y tế hỗ trợ bác sĩ chẩn đoán khối u từ ảnh chụp X-quang'
        ],
        correctIndex: 0,
        explanation: 'Hàm đếm cơ bản trên bảng tính chỉ thực thi thuật toán số học cố định, không có đặc trưng của AI.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Dự án Mini: Khảo sát và Đề xuất Ứng dụng AI Hỗ trợ Học sinh Lớp 12',
        context: 'Năm học lớp 12 là thời điểm quan trọng chuẩn bị cho kỳ thi tốt nghiệp THPT và hướng nghiệp đại học. Học sinh cần những giải pháp tối ưu thời gian học tập.',
        mission: 'Hãy chọn 1 môn học và lập kế hoạch sử dụng 1 công cụ AI (như ChatGPT, Gemini, Quizlet AI) để tối ưu việc tự học môn đó một cách an toàn, hiệu quả.',
        steps: [
          'Bước 1: Xác định điểm khó khăn nhất trong môn học (VD: Ghi nhớ từ vựng Tiếng Anh, giải bài toán cực trị, ôn lịch sử).',
          'Bước 2: Soạn 3 câu lệnh (Prompts) chuẩn để yêu cầu AI tạo bảng tóm tắt kiến thức hoặc tạo câu hỏi trắc nghiệm tự luyện.',
          'Bước 3: Kiểm chứng lại độ chính xác thông qua đối chiếu với Sách giáo khoa chuẩn GDPT 2018.'
        ],
        outputRequirement: 'Một bản kế hoạch ngắn gồm 3 câu lệnh Prompt kèm ví dụ kết quả đối chứng với SGK.',
        practicalTip: 'Luôn nhớ: AI chỉ là trợ lý đắc lực hỗ trợ gợi ý, bạn phải luôn là người chịu trách nhiệm kiểm tra tính chính xác cuối cùng!'
      },
      mindmap: {
        id: 'mm_1',
        label: 'TRÍ TUỆ NHÂN TẠO (AI)',
        color: '#2563eb',
        children: [
          {
            id: 'mm_1_1',
            label: 'Khái niệm & Bản chất',
            badge: 'Khoa học máy tính',
            children: [
              { id: 'mm_1_1_1', label: 'Mô phỏng trí tuệ con người' },
              { id: 'mm_1_1_2', label: 'Hội thảo Dartmouth (1956)' },
              { id: 'mm_1_1_3', label: 'Phép thử Turing Test' }
            ]
          },
          {
            id: 'mm_1_2',
            label: 'Đặc trưng cốt lõi',
            badge: 'Năng lực AI',
            children: [
              { id: 'mm_1_2_1', label: 'Tự học từ dữ liệu (ML)' },
              { id: 'mm_1_2_2', label: 'Suy luận logic & Dự đoán' },
              { id: 'mm_1_2_3', label: 'Tự điều chỉnh & Thích nghi' }
            ]
          },
          {
            id: 'mm_1_3',
            label: 'Phân loại AI',
            badge: 'Cấp độ phát triển',
            children: [
              { id: 'mm_1_3_1', label: 'AI Hẹp (Narrow AI) - Hiện tại' },
              { id: 'mm_1_3_2', label: 'AI Tổng quát (AGI) - Tương lai' },
              { id: 'mm_1_3_3', label: 'Siêu AI (Super AI)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Tiên Phong AI 12',
      badgeIcon: 'BrainCircuit',
      roleTitle: 'Chuyên Viên Nhập Môn Trí Tuệ Nhân Tạo',
      congratsMessage: 'Xuất sắc! Bạn đã làm chủ các khái niệm nền tảng về Trí tuệ nhân tạo theo chuẩn SGK Tin học 12 GDPT 2018.',
      skillsUnlocked: ['Tư duy công nghệ AI', 'Phân biệt AI vs Tự động hóa', 'Hiểu phép thử Turing']
    }
  },

  // ==================== BÀI 2 ====================
  {
    id: 2,
    code: 'BAI_02',
    title: 'Trí tuệ nhân tạo trong khoa học và đời sống',
    themeId: 1,
    themeName: 'Chủ đề 1: Máy tính & Xã hội tri thức',
    topicBadge: 'AI & Khoa học máy tính',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Ứng dụng đột phá của AI trong các lĩnh vực và những vấn đề đạo đức số',
      description: 'Khám phá các thành tựu của AI trong Y học, Giao thông, Giáo dục, Sản xuất và nhận diện những thách thức về bản quyền, bảo mật thông tin và đạo đức khi sử dụng AI.',
      accentColor: 'from-indigo-600 to-purple-600',
      keyHighlights: ['AI trong Y tế & Xe tự hành', 'Generative AI & ChatGPT', 'Đạo đức & Trách nhiệm số']
    },
    objectives: [
      {
        id: 'obj_2_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu các lĩnh vực ứng dụng AI',
        description: 'Trình bày được các thành tựu tiêu biểu của AI trong y học, giao thông, tài chính, giáo dục và sản xuất nông nghiệp.',
        iconName: 'Activity'
      },
      {
        id: 'obj_2_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Đánh giá tác động xã hội của AI',
        description: 'Phân tích được cả mặt tích cực lẫn thách thức (nguy cơ việc làm, thông tin sai lệch Deepfake) do AI mang lại.',
        iconName: 'Scale'
      },
      {
        id: 'obj_2_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tuân thủ đạo đức khi dùng AI',
        description: 'Có ý thức sử dụng AI trung thực, không đạo văn, tôn trọng bản quyền và bảo mật dữ liệu cá nhân.',
        iconName: 'ShieldAlert'
      }
    ],
    warmup: {
      title: 'Tình huống: Bản tin video Deepfake giả mạo',
      scenario: 'Một đoạn video lan truyền trên mạng xã hội quay cảnh một phát ngôn viên nổi tiếng kêu gọi đầu tư tài chính, nhưng thực chất giọng nói và khẩu hình miệng hoàn toàn được tạo bằng công nghệ Generative AI (Deepfake).',
      pollQuestion: 'Theo bạn, khi tiếp cận thông tin trên không gian mạng thời đại AI tạo sinh, hành động quan trọng nhất là gì?',
      pollOptions: [
        { id: 'p2_1', text: 'Luôn kiểm chứng chéo (Fact-check) từ các nguồn báo chí chính thống', votesPercent: 78, isPopular: true, insight: 'Chính xác! Kiểm chứng chéo nguồn gốc thông tin là kỹ năng số sống còn của công dân số.' },
        { id: 'p2_2', text: 'Tin ngay nếu hình ảnh và âm thanh trong video trông rất chân thực', votesPercent: 6, insight: 'Deepfake hiện nay có thể tạo hình ảnh chân thực 99%, không thể chỉ dựa vào mắt nhìn.' },
        { id: 'p2_3', text: 'Chia sẻ ngay cho bạn bè để mọi người cùng cảnh giác', votesPercent: 16, insight: 'Chia sẻ khi chưa kiểm chứng dễ vô tình tiếp tay lan truyền tin giả (Fake News).' }
      ],
      reflection: 'AI là con dao hai lưỡi: mang lại năng suất khổng lồ nhưng đòi hỏi người dùng phải có tư duy phản biện và đạo đức công nghệ vững vàng.'
    },
    knowledge: [
      {
        id: 'tab_2_1',
        title: '1. Ứng dụng AI trong các lĩnh vực',
        subtitle: 'Thành tựu AI thúc đẩy đời sống & khoa học',
        iconName: 'Sparkles',
        keyPoints: [
          'Y tế & Chăm sóc sức khỏe: Hỗ trợ chẩn đoán sớm ung thư từ ảnh cộng hưởng từ MRI, nghiên cứu cấu trúc protein để chế tạo vaccine mới.',
          'Giao thông thông minh: Xe tự hành nhận diện làn đường, camera AI điều tiết đèn tín hiệu giảm ùn tắc giao thông đô thị.',
          'Tài chính & Ngân hàng: Phát hiện gian lận giao dịch thẻ tín dụng trong mili-giây, chatbot chăm sóc khách hàng 24/7.',
          'Giáo dục: Cá nhân hóa lộ trình học tập, chấm điểm tự động và gia sư ảo thông minh.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Y tế thông minh', desc: 'Chẩn đoán X-quang, MRI, phát hiện ung thư sớm' },
            { label: 'Giao thông tự hành', desc: 'Xe tự lái Tesla, Waymo, camera điều tiết giao thông' },
            { label: 'AI Tạo sinh (GenAI)', desc: 'ChatGPT, Midjourney, Claude tạo văn bản & hình ảnh' }
          ]
        },
        emCanNho: [
          'AI đã được ứng dụng sâu rộng trong hầu hết các lĩnh vực: Y tế, Giao thông, Giáo dục, Nông nghiệp, Tài chính.',
          'AI tạo sinh (Generative AI) mở ra khả năng tự động tạo lập nội dung, văn bản, mã nguồn và tác phẩm nghệ thuật.',
          'Sử dụng AI giúp tăng năng suất lao động và giải quyết các bài toán khoa học phức tạp của nhân loại.'
        ]
      },
      {
        id: 'tab_2_2',
        title: '2. Thách thức & Đạo đức Trí tuệ nhân tạo',
        subtitle: 'Sử dụng AI có trách nhiệm và an toàn',
        iconName: 'Shield',
        keyPoints: [
          'Vấn đề bản quyền & Sở hữu trí tuệ: Tranh chấp dữ liệu huấn luyện khi AI sao chép phong cách của các tác giả/họa sĩ.',
          'Thông tin sai lệch (Ảo giác AI - Hallucination) & Deepfake: Nguy cơ lan truyền tin giả mạo hình ảnh, giọng nói tinh vi.',
          'Bảo vệ quyền riêng tư: Thu thập trái phép dữ liệu người dùng để huấn luyện mô hình.',
          'Nguy cơ thay thế việc làm: Yêu cầu người lao động phải nâng cao năng lực làm chủ công nghệ mới.'
        ],
        visualType: 'comparison-table',
        visualData: {
          headers: ['Nên làm (Do)', 'Không nên làm (Don\'t)'],
          rows: [
            ['Dùng AI như trợ lý gợi ý ý tưởng và dàn ý', 'Sao chép 100% bài làm của AI và nộp như bài của mình'],
            ['Kiểm chứng lại mọi số liệu AI đưa ra bằng SGK chuẩn', 'Tin tưởng tuyệt đối số liệu do Chatbot cung cấp'],
            ['Bảo mật thông tin cá nhân khi tương tác với chatbot', 'Nhập mật khẩu, CCCD, thông tin bí mật vào AI công cộng']
          ]
        },
        emCanNho: [
          'AI có thể đưa ra thông tin không chính xác (Hiện tượng ảo giác AI - Hallucination).',
          'Luôn tuân thủ quy định về sở hữu trí tuệ và đạo đức học đường khi sử dụng AI.',
          'Không chia sẻ dữ liệu nhạy cảm hoặc danh tính cá nhân lên các nền tảng AI công cộng.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp: Lĩnh vực Ứng dụng & Giải pháp AI',
      instruction: 'Hãy nối chính xác lĩnh vực thực tế với giải pháp AI tương ứng:',
      matchingPairs: [
        { id: 'p_1', left: 'Y tế & Chẩn đoán hình ảnh', right: 'Phát hiện sớm khối u từ ảnh chụp X-quang & CT Scan' },
        { id: 'p_2', left: 'Giao thông đô thị', right: 'Hệ thống đèn tín hiệu tự điều chỉnh theo mật độ xe cộ' },
        { id: 'p_3', left: 'Giáo dục hiện đại', right: 'Gia sư ảo cá nhân hóa bài tập theo năng lực học sinh' },
        { id: 'p_4', left: 'Tài chính - Ngân hàng', right: 'Phát hiện giao dịch quẹt thẻ bất thường để chặn lừa đảo' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Hiện tượng mô hình ngôn ngữ lớn (như ChatGPT) tự bịa ra thông tin sai lệch nhưng diễn đạt rất tự tin gọi là gì?',
        options: ['Hiện tượng ảo giác AI (Hallucination)', 'Lỗi tràn bộ nhớ RAM', 'Virus tin học', 'Lỗi xung đột phần cứng'],
        correctIndex: 0,
        explanation: 'Hiện tượng ảo giác AI (Hallucination) là khi AI tự sinh ra các thông tin sai lệch hoặc không có thực nhưng với giọng văn rất thuyết phục.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 2,
        question: 'Khi sử dụng AI để hỗ trợ làm bài tập nghiên cứu môn Tin học, hành vi nào sau đây thể hiện ĐẠO ĐỨC HỌC ĐƯỜNG đúng đắn?',
        options: [
          'Dùng AI để tham khảo ý tưởng, sau đó tự viết lại và trích dẫn nguồn công cụ AI đã dùng',
          'Sao chép toàn bộ văn bản AI tạo ra và ký tên mình',
          'Nhờ AI làm hộ bài kiểm tra trực tuyến',
          'Chụp ảnh đề thi mật của nhà trường tải lên AI giải'
        ],
        correctIndex: 0,
        explanation: 'Sử dụng AI có đạo đức là dùng làm công cụ tham khảo, tự tư duy tổng hợp và minh bạch việc sử dụng công cụ.',
        difficulty: 'Vận dụng'
      },
      {
        id: 3,
        question: 'Công nghệ tạo video, hình ảnh, âm thanh giả mạo người thật với độ chân thực cực cao bằng AI gọi là gì?',
        options: ['Deepfake', 'Firewall', 'Bluetooth', 'Blockchain'],
        correctIndex: 0,
        explanation: 'Deepfake là kỹ thuật sử dụng trí tuệ nhân tạo (học sâu) để ghép mặt, giả mạo giọng nói của người thật vào video/âm thanh.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Trong nông nghiệp thông minh, AI kết hợp với máy bay không người lái (Drone) thường được dùng để làm gì?',
        options: [
          'Phân tích ảnh cây trồng để nhận diện sâu bệnh và phun thuốc đúng vị trí',
          'Thay thế hoàn toàn ánh sáng mặt trời',
          'Lập trình cho cây tự lớn nhanh gấp 10 lần',
          'Tự động thu hoạch mà không cần đất trồng'
        ],
        correctIndex: 0,
        explanation: 'Drone AI chụp ảnh quang phổ và nhận diện vùng cây nhiễm bệnh để phun chính xác, tiết kiệm chi phí và bảo vệ môi trường.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Biện pháp nào sau đây giúp học sinh phòng tránh rủi ro khi dùng các ứng dụng AI công cộng?',
        options: [
          'Không nhập mật khẩu cá nhân, số CCCD, hình ảnh riêng tư vào ứng dụng',
          'Không bao giờ dùng Internet',
          'Tắt màn hình máy tính liên tục',
          'Chỉ sử dụng máy tính sau 12 giờ đêm'
        ],
        correctIndex: 0,
        explanation: 'Không nhập dữ liệu nhạy cảm hay thông tin định danh cá nhân vào các mô hình AI để tránh nguy cơ rò rỉ dữ liệu.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Xây dựng "Bộ Quy tắc Ứng xử với AI" cho Lớp học',
        context: 'Nhiều bạn học sinh trong lớp đang sử dụng AI để giải bài tập nhưng chưa biết cách sử dụng có trách nhiệm và trung thực.',
        mission: 'Thiết kế một bản infographic 5 quy tắc vàng khi sử dụng AI trong học tập dành cho học sinh lớp 12.',
        steps: [
          'Quy tắc 1: Trung thực học thuật (Không nộp bài do AI viết 100%).',
          'Quy tắc 2: Tinh thần phản biện & Kiểm chứng nguồn gốc.',
          'Quy tắc 3: Bảo mật thông tin cá nhân học sinh.',
          'Quy tắc 4: Tôn trọng quyền tác giả và sở hữu trí tuệ.',
          'Quy tắc 5: Sử dụng AI để phát triển tư duy chứ không lười suy nghĩ.'
        ],
        outputRequirement: 'Tóm tắt 5 quy tắc dưới dạng khẩu hiệu ngắn gọn, dễ nhớ.',
        practicalTip: 'Hãy chia sẻ bộ quy tắc này lên bảng tin của lớp hoặc nhóm học tập Zalo của bạn!'
      },
      mindmap: {
        id: 'mm_2',
        label: 'AI TRONG ĐỜI SỐNG & ĐẠO ĐỨC',
        color: '#8b5cf6',
        children: [
          {
            id: 'mm_2_1',
            label: 'Ứng dụng Đột phá',
            badge: 'Thực tiễn',
            children: [
              { id: 'mm_2_1_1', label: 'Y tế: Chẩn đoán ung thư, MRI' },
              { id: 'mm_2_1_2', label: 'Giao thông: Xe tự hành, camera AI' },
              { id: 'mm_2_1_3', label: 'Giáo dục & AI tạo sinh' }
            ]
          },
          {
            id: 'mm_2_2',
            label: 'Thách thức & Rủi ro',
            badge: 'Cảnh báo',
            children: [
              { id: 'mm_2_2_1', label: 'Hiện tượng ảo giác AI (Hallucination)' },
              { id: 'mm_2_2_2', label: 'Deepfake & Lừa đảo số' },
              { id: 'mm_2_2_3', label: 'Bảo mật dữ liệu cá nhân' }
            ]
          },
          {
            id: 'mm_2_3',
            label: 'Đạo đức & Trách nhiệm',
            badge: 'Nguyên tắc',
            children: [
              { id: 'mm_2_3_1', label: 'Trung thực học thuật' },
              { id: 'mm_2_3_2', label: 'Kiểm chứng chéo thông tin' },
              { id: 'mm_2_3_3', label: 'Tôn trọng bản quyền tác giả' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Hiệp Sĩ Đạo Đức AI 12',
      badgeIcon: 'ShieldCheck',
      roleTitle: 'Chuyên Viên Ứng Dụng AI Văn Minh',
      congratsMessage: 'Chúc mừng bạn! Bạn đã nắm vững các ứng dụng thực tế và chuẩn mực đạo đức quan trọng khi làm chủ AI.',
      skillsUnlocked: ['Nhận diện Deepfake & Fake News', 'Ứng dụng AI thực tiễn', 'Đạo đức công nghệ số']
    }
  },

  // ==================== CHỦ ĐỀ 2 ====================
  {
    id: 3,
    code: 'BAI_03',
    title: 'Một số thiết bị mạng thông dụng',
    themeId: 2,
    themeName: 'Chủ đề 2: Mạng máy tính & Internet',
    topicBadge: 'Mạng & Hạ tầng số',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Khám phá trái tim hạ tầng Internet: Switch, Router, Access Point và Modem',
      description: 'Hiểu rõ chức năng, nguyên lý hoạt động và cách kết nối các thiết bị mạng phần cứng cơ bản trong mạng cục bộ LAN và mạng Internet toàn cầu.',
      accentColor: 'from-cyan-600 to-blue-600',
      keyHighlights: ['Switch chuyển mạch LAN', 'Router định tuyến gói tin', 'Access Point phát Wi-Fi']
    },
    objectives: [
      {
        id: 'obj_3_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Chức năng các thiết bị mạng',
        description: 'Trình bày được vai trò của Modem, Router (Bộ định tuyến), Switch (Bộ chuyển mạch) và Access Point (Điểm truy cập không dây).',
        iconName: 'Server'
      },
      {
        id: 'obj_3_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích sơ đồ mạng LAN',
        description: 'Đọc hiểu sơ đồ kết nối mạng phòng máy trường học và lựa chọn thiết bị mạng phù hợp cho hộ gia đình.',
        iconName: 'Network'
      },
      {
        id: 'obj_3_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức bảo vệ hạ tầng mạng',
        description: 'Có ý thức sử dụng và bảo quản đúng cách các thiết bị mạng và cáp mạng trong phòng thực hành.',
        iconName: 'Shield'
      }
    ],
    warmup: {
      title: 'Tình huống: Phòng máy tính trường học mất kết nối',
      scenario: 'Phòng thực hành Tin học có 40 máy tính. Đột nhiên tất cả máy tính trong phòng đều không vào được Internet, nhưng các máy vẫn có thể in tài liệu qua máy in chung trong phòng.',
      pollQuestion: 'Thiết bị nào sau đây nhiều khả năng đang gặp sự cố nhất?',
      pollOptions: [
        { id: 'p3_1', text: 'Modem hoặc Router kết nối ra nhà cung cấp dịch vụ Internet (ISP)', votesPercent: 74, isPopular: true, insight: 'Chính xác! Các máy vẫn liên lạc nội bộ được qua Switch, chứng tỏ chỉ mất đường truyền ra Internet qua Modem/Router.' },
        { id: 'p3_2', text: 'Bộ chuyển mạch Switch chính của phòng máy bị cháy nguồn', votesPercent: 18, insight: 'Nếu Switch hỏng thì các máy sẽ mất kết nối cả mạng nội bộ và không in được.' },
        { id: 'p3_3', text: 'Toàn bộ 40 card mạng máy tính bị hỏng cùng một giây', votesPercent: 8, insight: 'Khả năng 40 máy hỏng card mạng cùng lúc là gần như bằng 0.' }
      ],
      reflection: 'Hiểu rõ vai trò của từng thiết bị mạng giúp ta chẩn đoán và khắc phục sự cố kết nối nhanh chóng và chính xác.'
    },
    knowledge: [
      {
        id: 'tab_3_1',
        title: '1. Chức năng các thiết bị mạng cơ bản',
        subtitle: 'Switch, Router, Access Point và Modem',
        iconName: 'HardDrive',
        keyPoints: [
          'Switch (Bộ chuyển mạch): Kết nối các thiết bị trong cùng một mạng cục bộ (LAN) bằng địa chỉ vật lý MAC. Chuyển tiếp khung dữ liệu chính xác tới cổng đích.',
          'Router (Bộ định tuyến): Kết nối các mạng khác nhau (như mạng LAN gia đình với mạng Internet toàn cầu) và tìm đường đi tối ưu cho gói tin dựa trên địa chỉ IP.',
          'Modem: Điều chế và giải điều chế tín hiệu (chuyển đổi giữa tín hiệu quang/tương tự từ nhà mạng ISP sang tín hiệu số cho máy tính).',
          'Access Point (AP): Điểm truy cập không dây, phát sóng Wi-Fi để các thiết bị di động kết nối vào mạng LAN có dây.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Internet (ISP)', desc: 'Đường truyền cáp quang quốc tế' },
            { label: 'Modem / Router', desc: 'Nhận tín hiệu & định tuyến IP' },
            { label: 'Switch & Access Point', desc: 'Phân phối mạng cho PC và Wi-Fi' }
          ]
        },
        emCanNho: [
          'Switch dùng để kết nối các máy tính trong cùng một mạng LAN (theo địa chỉ MAC).',
          'Router dùng để kết nối các mạng khác nhau và định tuyến gói tin qua Internet (theo địa chỉ IP).',
          'Access Point có nhiệm vụ thu/phát sóng Wi-Fi mở rộng vùng phủ sóng mạng không dây.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại vai trò thiết bị mạng',
      instruction: 'Hãy xếp các thiết bị mạng vào đúng chức năng chính của nó:',
      categories: [
        { id: 'lan_dev', title: 'Thiết bị Kết nối Nội bộ (LAN)', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
        { id: 'wan_dev', title: 'Thiết bị Định tuyến & Kết nối Internet', color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300' }
      ],
      dragItems: [
        { id: 'sw_1', text: 'Switch 24 cổng phòng thực hành', category: 'lan_dev', explanation: 'Kết nối mạng có dây nội bộ tốc độ cao.' },
        { id: 'ap_1', text: 'Access Point phát Wi-Fi hành lang', category: 'lan_dev', explanation: 'Mở rộng sóng mạng không dây cho mạng LAN.' },
        { id: 'rt_1', text: 'Router định tuyến cáp quang của ISP', category: 'wan_dev', explanation: 'Định tuyến gói tin giữa mạng trường học và Internet.' },
        { id: 'md_1', text: 'Modem chuyển đổi tín hiệu quang', category: 'wan_dev', explanation: 'Chuyển đổi tín hiệu đường truyền nhà mạng.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thiết bị mạng nào có chức năng chính là chuyển tiếp các gói tin giữa các mạng khác nhau dựa vào địa chỉ IP?',
        options: ['Router (Bộ định tuyến)', 'Switch (Bộ chuyển mạch)', 'Hub (Bộ tập trung)', 'Card mạng (NIC)'],
        correctIndex: 0,
        explanation: 'Router làm việc ở tầng Mạng (Network layer), có nhiệm vụ tìm đường đi và định tuyến gói tin giữa các mạng khác nhau theo địa chỉ IP.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Để kết nối 30 máy tính để bàn có dây trong một phòng học thành mạng LAN nội bộ, thiết bị trung tâm quan trọng nhất là gì?',
        options: ['Bộ chuyển mạch (Switch)', 'Bàn phím không dây', 'Bộ sạc điện thoại thoại', 'Máy in laser'],
        correctIndex: 0,
        explanation: 'Switch là thiết bị trung tâm dùng để kết nối nhiều máy tính có dây trong mạng cục bộ LAN.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Thiết bị Access Point (AP) đóng vai trò gì trong hệ thống mạng trường học?',
        options: [
          'Thu phát tín hiệu sóng Wi-Fi cho các thiết bị di động kết nối vào mạng LAN',
          'Tự động sao lưu dữ liệu của giáo viên vào đĩa mềm',
          'Lọc bụi bẩn trong phòng máy',
          'Tăng độ phân giải màn hình máy tính'
        ],
        correctIndex: 0,
        explanation: 'Access Point có chức năng chính là phát sóng không dây (Wi-Fi) để điện thoại, laptop kết nối vào mạng.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Cáp mạng xoắn đôi phổ biến dùng đầu cắm chuẩn nào sau đây?',
        options: ['Đầu cắm RJ45', 'Đầu cắm HDMI', 'Đầu cắm USB Type-C', 'Đầu cắm VGA'],
        correctIndex: 0,
        explanation: 'Cáp mạng xoắn đôi (UTP/STP) dùng trong mạng LAN tiêu chuẩn sử dụng đầu bấm RJ45 (8 chân).',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Điểm khác biệt chính giữa Switch và Hub trong truyền dữ liệu mạng LAN là gì?',
        options: [
          'Switch gửi dữ liệu chính xác đến cổng đích, còn Hub gửi phát tán dữ liệu đến tất cả các cổng',
          'Hub có tốc độ nhanh hơn Switch gấp 100 lần',
          'Switch không cần cắm điện vẫn hoạt động được',
          'Hub có khả năng kết nối trực tiếp ra vệ tinh'
        ],
        correctIndex: 0,
        explanation: 'Switch thông minh hơn Hub vì nó lưu bảng địa chỉ MAC và chỉ chuyển dữ liệu đến đúng cổng của máy nhận, tránh xung đột mạng.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Thiết kế Sơ đồ Mạng Gia đình Thông minh',
        context: 'Gia đình bạn có 2 tầng, cần kết nối 4 điện thoại, 2 smart TV, 2 laptop và 1 camera an ninh.',
        mission: 'Vẽ sơ đồ bố trí thiết bị (Modem, Router, Switch phụ, Access Point phụ) để đảm bảo mọi vị trí trong nhà đều có sóng Wi-Fi khỏe.',
        steps: [
          'Xác định vị trí đặt Modem quang tại tầng 1.',
          'Kéo 1 dây mạng LAN lên tầng 2 nối vào Access Point phụ.',
          'Cấu hình tên mạng Wi-Fi (SSID) đồng bộ để các thiết bị tự chuyển vùng mượt mà.'
        ],
        outputRequirement: 'Một bản vẽ sơ đồ mạng dạng khối đơn giản trên giấy hoặc máy tính.',
        practicalTip: 'Không nên đặt Access Point gần lò vi sóng hoặc tường bê tông dày vì sẽ làm suy giảm sóng Wi-Fi.'
      },
      mindmap: {
        id: 'mm_3',
        label: 'THIẾT BỊ MẠNG THÔNG DỤNG',
        color: '#06b6d4',
        children: [
          {
            id: 'mm_3_1',
            label: 'Kết nối Nội bộ (LAN)',
            children: [
              { id: 'mm_3_1_1', label: 'Switch (Chuyển mạch)' },
              { id: 'mm_3_1_2', label: 'Access Point (Phát Wi-Fi)' },
              { id: 'mm_3_1_3', label: 'Cáp mạng RJ45' }
            ]
          },
          {
            id: 'mm_3_2',
            label: 'Kết nối Liên mạng (WAN)',
            children: [
              { id: 'mm_3_2_1', label: 'Router (Định tuyến IP)' },
              { id: 'mm_3_2_2', label: 'Modem quang (Chuyển đổi tín hiệu)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Kỹ Sư Mạng LAN 12',
      badgeIcon: 'Network',
      roleTitle: 'Chuyên Viên Thiết Kế Hạ Tầng Mạng',
      congratsMessage: 'Tuyệt vời! Bạn đã am hiểu cấu trúc và vai trò các thiết bị mạng cốt lõi của thế giới số.',
      skillsUnlocked: ['Phân biệt Switch & Router', 'Thiết kế mạng LAN', 'Khắc phục lỗi mạng cơ bản']
    }
  },

  // ==================== BÀI 4 ====================
  {
    id: 4,
    code: 'BAI_04',
    title: 'Giao thức mạng',
    themeId: 2,
    themeName: 'Chủ đề 2: Mạng máy tính & Internet',
    topicBadge: 'Mạng & Hạ tầng số',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Bộ quy tắc truyền thông toàn cầu: Bộ giao thức TCP/IP và địa chỉ IP',
      description: 'Khám phá ngôn ngữ chung của Internet: Cách dữ liệu được đóng gói thành các gói tin (Packets), vận chuyển tin cậy qua TCP/IP và định danh bằng địa chỉ IPv4/IPv6.',
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Mô hình TCP/IP 4 tầng', 'Giao thức TCP vs UDP', 'Địa chỉ IPv4 & IPv6']
    },
    objectives: [
      {
        id: 'obj_4_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Hiểu khái niệm Giao thức mạng',
        description: 'Trình bày được vai trò của bộ giao thức TCP/IP, chức năng phân tầng và cấu trúc gói tin dữ liệu.',
        iconName: 'Layers'
      },
      {
        id: 'obj_4_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Phân tích địa chỉ IP & Cổng (Port)',
        description: 'Đọc hiểu cấu trúc địa chỉ IPv4 (dạng thập phân có dấu chấm) và nhận biết các cổng dịch vụ tiêu chuẩn (HTTP: 80, HTTPS: 443).',
        iconName: 'Hash'
      },
      {
        id: 'obj_4_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tôn trọng quy chuẩn công nghệ',
        description: 'Hiểu được tầm quan trọng của việc tuân thủ các chuẩn quốc tế mở trong kết nối liên lạc toàn cầu.',
        iconName: 'Globe'
      }
    ],
    warmup: {
      title: 'Tình huống: Gửi một bức thư điện tử qua Internet',
      scenario: 'Khi bạn gửi một bức ảnh dung lượng 5MB từ Việt Nam sang một người bạn ở Mỹ, bức ảnh đó không đi nguyên một khối mà được máy tính chia nhỏ thành hàng ngàn mẩu nhỏ mang số thứ tự.',
      pollQuestion: 'Giao thức nào chịu trách nhiệm đảm bảo các mẩu nhỏ dữ liệu được truyền đi đầy đủ và ghép lại chính xác theo đúng thứ tự ban đầu?',
      pollOptions: [
        { id: 'p4_1', text: 'Giao thức TCP (Transmission Control Protocol)', votesPercent: 82, isPopular: true, insight: 'Chính xác! TCP chịu trách nhiệm kiểm tra lỗi, gửi lại gói tin bị mất và ghép đúng thứ tự.' },
        { id: 'p4_2', text: 'Giao thức HTTP truyền trang web', votesPercent: 12, insight: 'HTTP là giao thức tầng ứng dụng, chạy phía trên giao thức TCP.' },
        { id: 'p4_3', text: 'Phần mềm xem ảnh Paint', votesPercent: 6, insight: 'Paint chỉ là ứng dụng đồ họa trên máy tính người dùng.' }
      ],
      reflection: 'Giao thức mạng chính là ngôn ngữ và luật giao thông giúp hàng tỷ máy tính trên toàn thế giới hiểu và trao đổi dữ liệu thông suốt với nhau.'
    },
    knowledge: [
      {
        id: 'tab_4_1',
        title: '1. Khái niệm Giao thức mạng & Bộ giao thức TCP/IP',
        subtitle: 'Bộ quy tắc chuẩn hóa truyền thông Internet',
        iconName: 'Cpu',
        keyPoints: [
          'Giao thức mạng (Network Protocol): Là tập hợp các quy tắc và quy ước chuẩn hóa để các thiết bị mạng trao đổi thông tin với nhau.',
          'Bộ giao thức TCP/IP gồm 4 tầng chính: Tầng Ứng dụng (Application), Tầng Giao vận (Transport), Tầng Mạng/Internet (Network), Tầng Liên kết dữ liệu / Vật lý (Link).',
          'IP (Internet Protocol): Chịu trách nhiệm định địa chỉ (IP Address) và chuyển phát các gói tin từ máy gửi đến máy nhận.',
          'TCP (Transmission Control Protocol): Chịu trách nhiệm thiết lập kết nối tin cậy, phân chia dữ liệu thành gói tin và sắp xếp lại đúng thứ tự.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tầng Ứng dụng (Application)', desc: 'HTTP, HTTPS, DNS, FTP, SMTP' },
            { label: 'Tầng Giao vận (Transport)', desc: 'TCP (tin cậy), UDP (tốc độ cao)' },
            { label: 'Tầng Mạng (Internet)', desc: 'Giao thức IP (IPv4, IPv6), ICMP' },
            { label: 'Tầng Truy nhập mạng (Link)', desc: 'Ethernet, Wi-Fi, Cáp quang vật lý' }
          ]
        },
        emCanNho: [
          'Giao thức mạng là tập hợp quy tắc quy định khuôn dạng và cách thức trao đổi thông tin.',
          'TCP/IP là bộ giao thức nền tảng của mạng Internet toàn cầu.',
          'Địa chỉ IP định danh từng thiết bị trên mạng; Cổng (Port) định danh tiến trình ứng dụng nhận dữ liệu.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: 'Ghép cặp Giao thức & Ứng dụng tương ứng',
      instruction: 'Nối tên giao thức với dịch vụ tương ứng trên Internet:',
      matchingPairs: [
        { id: 'm4_1', left: 'HTTPS (Cổng 443)', right: 'Truyền tải trang web an toàn có mã hóa SSL/TLS' },
        { id: 'm4_2', left: 'DNS (Domain Name System)', right: 'Phân giải tên miền (google.com) thành địa chỉ IP' },
        { id: 'm4_3', left: 'SMTP', right: 'Giao thức gửi thư điện tử (Email)' },
        { id: 'm4_4', left: 'FTP', right: 'Giao thức truyền tệp tin qua mạng' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Bộ giao thức nền tảng của mạng Internet toàn cầu hiện nay là gì?',
        options: ['TCP/IP', 'OSI/ISO', 'HTTP/HTML', 'Bluetooth/NFC'],
        correctIndex: 0,
        explanation: 'TCP/IP là bộ giao thức chuẩn được sử dụng làm nền tảng cho toàn bộ hoạt động của mạng Internet toàn cầu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Địa chỉ IPv4 bao gồm bao nhiêu bit và thường được biểu diễn dưới dạng nào?',
        options: [
          '32 bit, gồm 4 nhóm số thập phân cách nhau bởi dấu chấm (ví dụ: 192.168.1.1)',
          '128 bit, gồm 8 nhóm số thập lục phân',
          '64 bit, gồm 6 nhóm số nhị phân',
          '16 bit, gồm 2 nhóm ký tự chữ cái'
        ],
        correctIndex: 0,
        explanation: 'Địa chỉ IPv4 có độ dài 32 bit, chia làm 4 byte (octet), mỗi octet từ 0 đến 255 cách nhau bằng dấu chấm.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Dịch vụ DNS (Domain Name System) thực hiện chức năng nào sau đây?',
        options: [
          'Chuyển đổi tên miền dễ nhớ (ví dụ: nxbgd.vn) sang địa chỉ IP dạng số của máy chủ',
          'Tăng tốc độ quạt làm mát của máy tính',
          'Quét sạch bụi bẩn trên dây cáp mạng',
          'Mã hóa bàn phím'
        ],
        correctIndex: 0,
        explanation: 'Hệ thống DNS đóng vai trò như danh bạ điện thoại Internet, giúp máy tính biết được địa chỉ IP tương ứng với tên miền người dùng gõ vào.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Giao thức nào sau đây được sử dụng để truyền tải nội dung trang web an toàn và có mã hóa dữ liệu?',
        options: ['HTTPS', 'HTTP không bảo mật', 'Telnet', 'FTP'],
        correctIndex: 0,
        explanation: 'HTTPS (Hypertext Transfer Protocol Secure) sử dụng chứng chỉ SSL/TLS để mã hóa đường truyền web, bảo vệ mật khẩu và thông tin cá nhân.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Lý do chính khiến thế giới đang chuyển dịch từ địa chỉ IPv4 sang địa chỉ IPv6 là gì?',
        options: [
          'Không gian địa chỉ IPv4 (khoảng 4,3 tỷ địa chỉ) đã bị cạn kiệt do số lượng thiết bị số tăng vọt',
          'IPv4 làm hỏng màn hình máy tính',
          'IPv6 không cần dùng dây điện',
          'IPv4 chỉ dùng được ở châu Mỹ'
        ],
        correctIndex: 0,
        explanation: 'IPv4 chỉ có khoảng 4,3 tỷ địa chỉ nên đã cạn kiệt. IPv6 với 128 bit cung cấp không gian địa chỉ khổng lồ đáp ứng kỷ nguyên IoT.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Tra cứu Địa chỉ IP và Kiểm tra Kết nối Mạng bằng Dòng lệnh',
        context: 'Khi máy tính bị mất mạng hoặc cần chia sẻ máy in, ta cần biết địa chỉ IP của máy tính mình trong mạng LAN.',
        mission: 'Sử dụng công cụ dòng lệnh (Command Prompt / PowerShell trên Windows) để tra cứu địa chỉ IP và kiểm tra kết nối tới máy chủ DNS của Google.',
        steps: [
          'Bước 1: Mở Command Prompt (gõ cmd trong ô tìm kiếm Windows).',
          'Bước 2: Gõ lệnh `ipconfig` và nhấn Enter để xem địa chỉ IPv4 Address và Default Gateway.',
          'Bước 3: Gõ lệnh `ping 8.8.8.8` để kiểm tra độ trễ (Latency) kết nối ra Internet.'
        ],
        outputRequirement: 'Ghi lại địa chỉ IPv4 của máy và thời gian phản hồi (time=...ms) của lệnh ping.',
        practicalTip: 'Nếu lệnh ping báo "Request timed out", có nghĩa là đường truyền mạng của bạn đang bị đứt quãng hoặc bị tường lửa chặn.'
      },
      mindmap: {
        id: 'mm_4',
        label: 'GIAO THỨC MẠNG & TCP/IP',
        color: '#2563eb',
        children: [
          {
            id: 'mm_4_1',
            label: 'Mô hình 4 Tầng TCP/IP',
            children: [
              { id: 'mm_4_1_1', label: 'Tầng Ứng dụng (HTTP/HTTPS/DNS)' },
              { id: 'mm_4_1_2', label: 'Tầng Giao vận (TCP tin cậy / UDP nhanh)' },
              { id: 'mm_4_1_3', label: 'Tầng Mạng (Giao thức IP)' },
              { id: 'mm_4_1_4', label: 'Tầng Liên kết mạng' }
            ]
          },
          {
            id: 'mm_4_2',
            label: 'Địa chỉ IP',
            children: [
              { id: 'mm_4_2_1', label: 'IPv4: 32 bit (192.168.1.1)' },
              { id: 'mm_4_2_2', label: 'IPv6: 128 bit (không gian mở rộng)' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Chuyên Gia Giao Thức Mạng 12',
      badgeIcon: 'Layers',
      roleTitle: 'Kiểm Soát Viên Giao Thức TCP/IP',
      congratsMessage: 'Xuất sắc! Bạn đã giải mã thành công ngôn ngữ bí mật vận hành mạng Internet toàn cầu.',
      skillsUnlocked: ['Hiểu mô hình TCP/IP', 'Phân tích IPv4 & IPv6', 'Tra cứu lệnh ipconfig & ping']
    }
  },

  // ==================== BÀI 5 ====================
  {
    id: 5,
    code: 'BAI_05',
    title: 'Thực hành chia sẻ tài nguyên trên mạng',
    themeId: 2,
    themeName: 'Chủ đề 2: Mạng máy tính & Internet',
    topicBadge: 'Mạng & Hạ tầng số',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Làm chủ kỹ năng chia sẻ tệp tin, thư mục và máy in trong mạng cục bộ LAN',
      description: 'Thực hành thiết lập quyền chia sẻ tệp (Read, Write), quản lý người dùng truy cập và kết nối máy in dùng chung trong mạng trường học và gia đình.',
      accentColor: 'from-emerald-600 to-cyan-600',
      keyHighlights: ['Chia sẻ thư mục LAN', 'Phân quyền Read/Write', 'Dùng chung máy in mạng']
    },
    objectives: [
      {
        id: 'obj_5_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Quy trình chia sẻ tài nguyên mạng',
        description: 'Nêu được các bước thiết lập môi trường chia sẻ (nới lỏng hạn chế an ninh mạng cục bộ, bật Network Discovery và File Sharing).',
        iconName: 'FolderSync'
      },
      {
        id: 'obj_5_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Thực hành phân quyền thư mục',
        description: 'Thực hiện chia sẻ một thư mục dữ liệu với quyền Chỉ đọc (Read) hoặc Đầy đủ quyền (Read/Write) cho các máy tính khác trong mạng LAN.',
        iconName: 'Users'
      },
      {
        id: 'obj_5_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Bảo mật dữ liệu khi chia sẻ',
        description: 'Có ý thức không chia sẻ các thư mục chứa dữ liệu cá nhân nhạy cảm và biết cách hủy chia sẻ (Stop Sharing) khi không còn nhu cầu.',
        iconName: 'Lock'
      }
    ],
    warmup: {
      title: 'Tình huống: Làm bài tập nhóm tại phòng máy Tin học',
      scenario: 'Nhóm của Lan gồm 4 bạn cần tập hợp 4 file Word vào máy của nhóm trưởng để in ấn. Lan không có USB và phòng máy không có Internet.',
      pollQuestion: 'Cách giải quyết nào nhanh chóng, chuyên nghiệp và tiết kiệm thời gian nhất trong mạng LAN phòng máy?',
      pollOptions: [
        { id: 'p5_1', text: 'Nhóm trưởng tạo một thư mục chung trên máy mình và bật tính năng Share (Read/Write) trong mạng LAN', votesPercent: 86, isPopular: true, insight: 'Chính xác! Mạng LAN cho phép các máy truyền dữ liệu trực tiếp với tốc độ gigabit mà không cần Internet hay USB.' },
        { id: 'p5_2', text: 'Chép từng từ ngữ ra giấy rồi bạn nhóm trưởng gõ lại bằng tay', votesPercent: 4, insight: 'Mất rất nhiều thời gian và dễ gõ sai chính tả.' },
        { id: 'p5_3', text: 'Chờ đến tuần sau khi có mạng Internet mới nộp bài', votesPercent: 10, insight: 'Không tận dụng được sức mạnh của mạng nội bộ có sẵn.' }
      ],
      reflection: 'Chia sẻ tài nguyên qua mạng LAN là kỹ năng thực hành thiết thực nhất trong môi trường công sở và học đường.'
    },
    knowledge: [
      {
        id: 'tab_5_1',
        title: '1. Quy trình các bước chia sẻ thư mục trong Windows',
        subtitle: 'Thao tác phân quyền an toàn',
        iconName: 'Folder',
        keyPoints: [
          'Bước 1: Bật tính năng phát hiện mạng (Turn on network discovery) và chia sẻ tệp/máy in (File and printer sharing) trong mục Advanced sharing settings.',
          'Bước 2: Nhấp chuột phải vào thư mục cần chia sẻ -> Chọn Properties -> Thẻ Sharing -> Nút Advanced Sharing.',
          'Bước 3: Tích chọn "Share this folder" -> Bấm nút Permissions để phân quyền (Read: chỉ xem/tải về; Change/Full Control: cho phép sửa và xóa).',
          'Bước 4: Trên máy tính khác trong mạng LAN, mở File Explorer gõ đường dẫn `\\\\<Tên_Máy_Chủ>` hoặc `\\\\<Địa_Chỉ_IP>` để truy cập.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: '1. Bật Network Discovery', desc: 'Cho phép máy tính nhìn thấy nhau trong LAN' },
            { label: '2. Phân quyền thư mục', desc: 'Chọn người dùng (Everyone) & Quyền (Read/Write)' },
            { label: '3. Truy cập từ máy khác', desc: 'Gõ cú pháp \\\\Ten_May hoặc \\\\Dia_Chi_IP' }
          ]
        },
        emCanNho: [
          'Để chia sẻ thư mục, phải bật Network discovery và File sharing trong Windows Settings.',
          'Cần cân nhắc kỹ quyền cấp cho người khác: Quyền Read (Chỉ đọc) an toàn hơn quyền Change/Full Control.',
          'Đường dẫn mạng nội bộ trong hệ điều hành Windows luôn bắt đầu bằng hai dấu gạch chéo ngược `\\\\`.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Sắp xếp thứ tự các bước chia sẻ tài nguyên',
      instruction: 'Kéo các bước vào đúng giai đoạn thực hiện:',
      categories: [
        { id: 'step_prepare', title: 'Giai đoạn 1: Chuẩn bị & Thiết lập môi trường', color: 'border-blue-500 bg-blue-950/40 text-blue-300' },
        { id: 'step_action', title: 'Giai đoạn 2: Phân quyền & Truy cập từ xa', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' }
      ],
      dragItems: [
        { id: 's_1', text: 'Bật Network Discovery trong Control Panel', category: 'step_prepare', explanation: 'Kích hoạt môi trường chia sẻ trên hệ điều hành.' },
        { id: 's_2', text: 'Kết nối các máy tính vào cùng một thiết bị Switch', category: 'step_prepare', explanation: 'Thiết lập kết nối vật lý mạng LAN.' },
        { id: 's_3', text: 'Nhấp chuột phải chọn Properties -> Sharing -> Permissions', category: 'step_action', explanation: 'Phân quyền truy cập thư mục.' },
        { id: 's_4', text: 'Trên máy khách gõ \\\\192.168.1.10 để mở thư mục chung', category: 'step_action', explanation: 'Truy cập tài nguyên đã chia sẻ từ máy tính khác.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Để máy tính trong mạng LAN có thể nhìn thấy và tìm kiếm được các máy tính khác, ta cần bật tùy chọn nào trong Windows?',
        options: ['Turn on network discovery', 'Turn off firewall completely', 'Delete all network adapters', 'Format C drive'],
        correctIndex: 0,
        explanation: 'Network discovery (Tính năng khám phá mạng) cho phép máy tính tìm thấy và hiển thị các thiết bị khác đang hoạt động trong cùng mạng LAN.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi chia sẻ một thư mục chứa tài liệu học tập và chỉ muốn bạn bè đọc được chứ không được sửa hay xóa nhầm bài, ta nên cấp quyền nào?',
        options: ['Read (Chỉ đọc)', 'Full Control (Toàn quyền kiểm soát)', 'Change (Cho phép chỉnh sửa)', 'Deny Access'],
        correctIndex: 0,
        explanation: 'Quyền Read chỉ cho phép người dùng mở xem và sao chép tệp tin về máy của họ mà không thể chỉnh sửa hay xóa tệp gốc.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Cú pháp chuẩn để truy cập vào máy tính có tên "MAYCHU_01" trong mạng nội bộ từ cửa sổ Run hoặc File Explorer là gì?',
        options: ['\\\\MAYCHU_01', '//MAYCHU_01', 'http://MAYCHU_01', 'ftp::MAYCHU_01'],
        correctIndex: 0,
        explanation: 'Đường dẫn UNC (Universal Naming Convention) trong Windows luôn sử dụng hai dấu gạch chéo ngược `\\\\`.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Muốn dừng không chia sẻ một thư mục đã share trước đó nữa, thao tác đúng là gì?',
        options: [
          'Vào Properties -> thẻ Sharing -> Advanced Sharing -> Bỏ dấu tích ở mục "Share this folder"',
          'Ném màn hình máy tính ra ngoài cửa sổ',
          'Rút cáp điện của tòa nhà',
          'Đổi tên người dùng Windows'
        ],
        correctIndex: 0,
        explanation: 'Bỏ chọn "Share this folder" trong thẻ Sharing sẽ lập tức khóa truy cập mạng tới thư mục đó mà không làm mất dữ liệu.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 5,
        question: 'Để chia sẻ một chiếc máy in đang cắm trực tiếp vào máy tính A cho máy tính B cùng in được, điều kiện tiên quyết là gì?',
        options: [
          'Cả hai máy tính phải cùng kết nối vào mạng LAN và máy tính A phải đang bật nguồn',
          'Máy in phải được đặt ở trên nóc nhà',
          'Máy B phải cài đặt phần mềm Photoshop',
          'Máy A phải tháo hết ram ra'
        ],
        correctIndex: 0,
        explanation: 'Khi chia sẻ máy in qua máy tính chủ (A), máy tính A phải bật nguồn và hoạt động trên cùng mạng LAN với máy B.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Thiết lập Thư mục "Kho Học Liệu Lớp 12" Dùng chung trong Phòng Tin học',
        context: 'Lớp cần một nơi lưu trữ chung để các bạn nộp bài tập thực hành Tin học vào cuối mỗi tiết học.',
        mission: 'Thiết lập thư mục `Nop_Bai_Tap` trên máy số 01 với quyền Read/Write cho tài khoản nhóm lớp và kiểm tra từ máy số 02.',
        steps: [
          'Tạo thư mục `C:\\Nop_Bai_Tap` trên máy số 01.',
          'Phân quyền Share cho nhóm `Everyone` với quyền `Change` và `Read`.',
          'Từ máy số 02, mở Run gõ `\\\\192.168.1.1` để tạo thử 1 tệp tin văn bản nộp bài.'
        ],
        outputRequirement: 'Tệp tin văn bản được tạo thành công từ xa trên thư mục máy chủ.',
        practicalTip: 'Sau khi kiểm tra kết thúc tiết thực hành, nhớ nhắc giáo viên hủy quyền Write để tránh các bạn khác sửa đè bài của nhau.'
      },
      mindmap: {
        id: 'mm_5',
        label: 'CHIA SẺ TÀI NGUYÊN MẠNG',
        color: '#10b981',
        children: [
          {
            id: 'mm_5_1',
            label: 'Chuẩn bị Hệ thống',
            children: [
              { id: 'mm_5_1_1', label: 'Bật Network Discovery' },
              { id: 'mm_5_1_2', label: 'Bật File and Printer Sharing' }
            ]
          },
          {
            id: 'mm_5_2',
            label: 'Phân quyền Thư mục',
            children: [
              { id: 'mm_5_2_1', label: 'Read: Chỉ đọc dữ liệu' },
              { id: 'mm_5_2_2', label: 'Change/Write: Sửa và ghi mới' },
              { id: 'mm_5_2_3', label: 'Stop Sharing: Hủy chia sẻ' }
            ]
          },
          {
            id: 'mm_5_3',
            label: 'Chia sẻ Máy in (Printer)',
            children: [
              { id: 'mm_5_3_1', label: 'Share this printer' },
              { id: 'mm_5_3_2', label: 'Kết nối qua đường dẫn LAN' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Bậc Thầy Quản Trị Tài Nguyên LAN 12',
      badgeIcon: 'FolderSync',
      roleTitle: 'Chuyên Viên Quản Trị Mạng Cục Bộ',
      congratsMessage: 'Chúc mừng bạn! Bạn đã thành thạo kỹ năng chia sẻ và bảo mật tài nguyên mạng LAN chuẩn xác.',
      skillsUnlocked: ['Bật Network Discovery', 'Phân quyền Read/Write', 'Chia sẻ máy in mạng']
    }
  },

  // ==================== CHỦ ĐỀ 3 ====================
  {
    id: 6,
    code: 'BAI_06',
    title: 'Giao tiếp và ứng xử trong không gian mạng',
    themeId: 3,
    themeName: 'Chủ đề 3: Đạo đức, Pháp luật & Văn hoá số',
    topicBadge: 'Đạo đức & Văn hoá số',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Trở thành công dân số văn minh, trách nhiệm và an toàn trên môi trường số',
      description: 'Học tập các quy tắc ứng xử chuẩn mực (Netiquette), nhận diện các hành vi vi phạm pháp luật trên không gian mạng (Luật An ninh mạng) và bảo vệ danh tính số của bản thân.',
      accentColor: 'from-emerald-600 to-teal-600',
      keyHighlights: ['Quy tắc Netiquette', 'Luật An ninh mạng 2018', 'Phòng chống bạo lực mạng']
    },
    objectives: [
      {
        id: 'obj_6_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Nắm vững quy tắc Netiquette',
        description: 'Trình bày được các chuẩn mực văn hoá ứng xử, quy tắc tôn trọng và giao tiếp lịch sự trên mạng xã hội và email.',
        iconName: 'MessageSquare'
      },
      {
        id: 'obj_6_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Nhận diện rủi ro & Lừa đảo số',
        description: 'Nhận biết các hành vi bạo lực mạng (Cyberbullying), tin giả (Fake News) và các thủ đoạn lừa đảo trực tuyến phổ biến.',
        iconName: 'AlertTriangle'
      },
      {
        id: 'obj_6_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Tuân thủ Luật An ninh mạng',
        description: 'Tự giác chấp hành các quy định pháp luật Việt Nam về an ninh mạng, không xúc phạm danh dự người khác và bảo vệ thông tin riêng tư.',
        iconName: 'ShieldCheck'
      }
    ],
    warmup: {
      title: 'Tình huống: Một bình luận tiêu cực trong nhóm học tập',
      scenario: 'Trong nhóm Zalo của lớp, một bạn học sinh đăng bài xin ý kiến về bài thuyết trình. Một thành viên khác đã dùng những từ ngữ miệt thị, chế giễu ngoại hình và xúc phạm nặng nề bạn đó.',
      pollQuestion: 'Hành động nào thể hiện đúng tinh thần văn hoá ứng xử của một công dân số chuẩn mực?',
      pollOptions: [
        { id: 'p6_1', text: 'Nhắc nhở lịch sự về nội quy nhóm, báo cáo quản trị viên (Admin) và an ủi, hỗ trợ bạn bị bắt nạt', votesPercent: 88, isPopular: true, insight: 'Chính xác! Cần kiên quyết phản đối bạo lực mạng và bảo vệ bạn bè bằng cách hành xử văn minh, đúng quy trình.' },
        { id: 'p6_2', text: 'Dùng từ ngữ cay cú hơn để chửi bới lại người kia cho bõ tức', votesPercent: 4, insight: 'Đáp trả bằng bạo lực chỉ làm căng thẳng leo thang và vi phạm quy tắc ứng xử.' },
        { id: 'p6_3', text: 'Thả biểu tượng cười cợt và chụp màn hình gửi sang các nhóm khác để chế giễu', votesPercent: 8, insight: 'Hành vi này tiếp tay cho bạo lực mạng và có thể vi phạm pháp luật về xúc phạm danh dự nhân phẩm.' }
      ],
      reflection: 'Phía sau mỗi màn hình đại diện là một con người thật. Hãy luôn giao tiếp trên mạng với sự tôn trọng như khi nói chuyện trực tiếp.'
    },
    knowledge: [
      {
        id: 'tab_6_1',
        title: '1. Quy tắc ứng xử trên mạng (Netiquette) & Luật An ninh mạng',
        subtitle: 'Chuẩn mực đạo đức và hành lang pháp lý',
        iconName: 'BookOpen',
        keyPoints: [
          'Quy tắc vàng Netiquette: Luôn nhớ người ở đầu bên kia cũng là con người; Tôn trọng thời gian và băng thông của người khác; Giữ gìn hình ảnh bản thân trong sáng.',
          'Bảo vệ quyền riêng tư: Không tự ý đăng ảnh, thông tin cá nhân, điểm số hay tin nhắn riêng tư của người khác khi chưa được phép.',
          'Luật An ninh mạng Việt Nam nghiêm cấm: Xúc phạm danh dự, uy tín của tổ chức/cá nhân; Tuyên truyền thông tin sai sự thật; Đăng tải nội dung đồi trụy hoặc kích động bạo lực.'
        ],
        visualType: 'infographic',
        visualData: {
          nodes: [
            { label: 'Tôn trọng & Lịch sự', desc: 'Không viết hoa toàn bộ (hành vi la hét), dùng từ chuẩn mực' },
            { label: 'Bảo mật danh tính', desc: 'Không công khai CCCD, địa chỉ nhà, mật khẩu trên mạng' },
            { label: 'Tuân thủ pháp luật', desc: 'Chịu trách nhiệm trước pháp luật về mọi phát ngôn số' }
          ]
        },
        emCanNho: [
          'Giao tiếp trên không gian mạng cần tuân thủ bộ quy tắc Netiquette và các chuẩn mực đạo đức xã hội.',
          'Mọi hành vi vu khống, xúc phạm danh dự, tung tin giả mạo đều bị xử lý nghiêm theo Luật An ninh mạng.',
          'Không chia sẻ các thông tin cá nhân nhạy cảm để phòng tránh nguy cơ lừa đảo và đánh cắp danh tính số.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Phân loại Hành vi Văn minh & Hành vi Vi phạm',
      instruction: 'Hãy xếp các hành vi vào đúng nhóm tương ứng:',
      categories: [
        { id: 'good_act', title: 'Hành vi Văn minh & Đúng Pháp luật', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300' },
        { id: 'bad_act', title: 'Hành vi Bạo lực mạng & Vi phạm', color: 'border-rose-500 bg-rose-950/40 text-rose-300' }
      ],
      dragItems: [
        { id: 'a_1', text: 'Kiểm chứng nguồn tin chính thống trước khi bấm nút Share', category: 'good_act', explanation: 'Ngăn ngừa lan truyền tin giả.' },
        { id: 'a_2', text: 'Đăng số điện thoại và địa chỉ nhà bạn cùng lớp lên mạng để trêu đùa', category: 'bad_act', explanation: 'Vi phạm quyền riêng tư và bảo vệ dữ liệu cá nhân.' },
        { id: 'a_3', text: 'Gửi email có tiêu đề rõ ràng, lời chào và cảm ơn lịch sự', category: 'good_act', explanation: 'Thể hiện văn hoá giao tiếp chuyên nghiệp.' },
        { id: 'a_4', text: 'Tạo tài khoản ảo để vào trang cá nhân người khác bình luận thóa mạ', category: 'bad_act', explanation: 'Hành vi bạo lực mạng (Cyberbullying).' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Thuật ngữ "Netiquette" (Văn hoá ứng xử mạng) được ghép từ hai từ tiếng Anh nào?',
        options: ['Net (Mạng) và Etiquette (Nghi thức/Quy tắc ứng xử)', 'Network và Ticket', 'Internet và Quiet', 'Net và Security'],
        correctIndex: 0,
        explanation: 'Netiquette là từ ghép giữa Network (Mạng) và Etiquette (Phép lịch sự, nghi thức ứng xử).',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Khi gửi email cho thầy cô giáo hoặc đối tác, việc viết toàn bộ nội dung bức thư bằng CHỮ HOA IN ĐẬM bị coi là hành vi gì?',
        options: [
          'Hành vi thô lỗ, tương đương với việc "quát tháo/la hét" vào mặt người nhận',
          'Hành vi thể hiện sự tôn trọng tuyệt đối',
          'Cách viết chuẩn quốc tế',
          'Cách viết giúp email gửi nhanh hơn'
        ],
        correctIndex: 0,
        explanation: 'Trong quy ước Netiquette quốc tế, viết hoa toàn bộ câu chữ (ALL CAPS) tượng trưng cho hành vi quát tháo và thiếu tôn trọng người đọc.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Hành vi nào sau đây là hành vi bị NGHIÊM CẤM theo Luật An ninh mạng của Việt Nam?',
        options: [
          'Đưa thông tin sai sự thật gây hoang mang dư luận hoặc xúc phạm nhân phẩm người khác',
          'Tìm kiếm tài liệu học tập trên Cổng thông tin của Bộ Giáo dục',
          'Đổi ảnh đại diện trang cá nhân',
          'Gửi email chúc mừng sinh nhật bạn bè'
        ],
        correctIndex: 0,
        explanation: 'Điều 8 Luật An ninh mạng nghiêm cấm đưa thông tin sai sự thật, xúc phạm danh dự, uy tín của tổ chức, cá nhân.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 4,
        question: 'Dấu chân kỹ thuật số (Digital Footprint) của một người là gì?',
        options: [
          'Toàn bộ lịch sử các hoạt động, bài đăng, bình luận, tương tác mà người đó để lại trên Internet',
          'Dấu vết ngón chân in trên bàn phím máy tính',
          'Bụi bẩn bám trên chuột máy tính',
          'Kích thước của màn hình điện thoại'
        ],
        correctIndex: 0,
        explanation: 'Dấu chân số là toàn bộ dữ liệu ghi nhận hoạt động của bạn trên môi trường mạng, tồn tại lâu dài và ảnh hưởng đến uy tín cá nhân.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Khi nhận được một đường link lạ hứa hẹn tặng quà 500k từ tài khoản mạng xã hội của một người quen, bạn nên làm gì đầu tiên?',
        options: [
          'Gọi điện thoại trực tiếp cho người quen đó để xác nhận xem tài khoản của họ có bị hack không',
          'Bấm vào ngay và điền mật khẩu ngân hàng',
          'Chuyển tiếp cho 50 bạn khác để nhận thêm quà',
          'Nhập mã OTP ngân hàng để lấy tiền'
        ],
        correctIndex: 0,
        explanation: 'Kẻ xấu thường hack tài khoản người quen để gửi link phishing lừa đảo. Cần xác thực qua kênh khác trước khi tương tác.',
        difficulty: 'Vận dụng'
      }
    ],
    application: {
      project: {
        title: 'Xây dựng "Cẩm Nang Bảo Vệ Danh Tính Số & Dấu Chân Kỹ Thuật Số"',
        context: 'Nhiều nhà tuyển dụng và trường đại học hiện nay xem xét dấu chân số (lịch sử mạng xã hội) của ứng viên trước khi xét tuyển.',
        mission: 'Thực hiện rà soát lại trang cá nhân của bạn và lập danh sách 3 việc cần làm để dọn dẹp và bảo vệ hình ảnh trực tuyến tích cực.',
        steps: [
          'Bước 1: Tìm kiếm tên đầy đủ của chính mình trên Google để xem kết quả xuất hiện.',
          'Bước 2: Bật tính năng xác thực 2 lớp (2FA) cho toàn bộ tài khoản mạng xã hội và email.',
          'Bước 3: Thiết lập quyền riêng tư cho các bài đăng cá nhân, gỡ bỏ các bài đăng tiêu cực trong quá khứ.'
        ],
        outputRequirement: 'Một bản checklist 3 hành động bảo vệ danh tính số đã hoàn thành.',
        practicalTip: 'Hãy luôn tư duy trước khi bấm nút Đăng (THINK before posting: Is it True, Helpful, Inspiring, Necessary, Kind?).'
      },
      mindmap: {
        id: 'mm_6',
        label: 'VĂN HOÁ ỨNG XỬ SỐ & LUẬT AN NINH MẠNG',
        color: '#10b981',
        children: [
          {
            id: 'mm_6_1',
            label: 'Quy tắc Netiquette',
            children: [
              { id: 'mm_6_1_1', label: 'Tôn trọng người khác' },
              { id: 'mm_6_1_2', label: 'Lời lẽ chuẩn mực, không viết hoa toàn bộ' },
              { id: 'mm_6_1_3', label: 'Bảo vệ quyền riêng tư người khác' }
            ]
          },
          {
            id: 'mm_6_2',
            label: 'Pháp luật An ninh mạng',
            children: [
              { id: 'mm_6_2_1', label: 'Nghiêm cấm xúc phạm danh dự' },
              { id: 'mm_6_2_2', label: 'Cấm tung tin giả Fake News' },
              { id: 'mm_6_2_3', label: 'Xử lý nghiêm hành vi lừa đảo số' }
            ]
          },
          {
            id: 'mm_6_3',
            label: 'Bảo vệ bản thân',
            children: [
              { id: 'mm_6_3_1', label: 'Bảo mật 2FA (Xác thực 2 lớp)' },
              { id: 'mm_6_3_2', label: 'Quản lý dấu chân kỹ thuật số' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Công Dân Số Tiêu Biểu 12',
      badgeIcon: 'ShieldCheck',
      roleTitle: 'Đại Sứ Văn Hoá Số Văn Minh',
      congratsMessage: 'Chúc mừng bạn! Bạn đã trang bị đầy đủ kiến thức pháp luật và văn hoá để tự tin toả sáng trong môi trường số.',
      skillsUnlocked: ['Tuân thủ Netiquette', 'Phòng chống lừa đảo Phishing', 'Bảo vệ dấu chân số']
    }
  },

  // ==================== CHỦ ĐỀ 4: THIẾT KẾ TRANG WEB VỚI HTML VÀ CSS ====================
  // BÀI 7: HTML và cấu trúc trang web
  {
    id: 7,
    code: 'BAI_07',
    title: 'HTML và cấu trúc trang web',
    themeId: 4,
    themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS',
    topicBadge: 'Lập trình Web HTML5',
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: 'Xương sống của mọi trang web: Ngôn ngữ đánh dấu siêu văn bản HTML5',
      description: 'Làm quen với cú pháp thẻ HTML, các phần tử cốt lõi, thuộc tính và cấu trúc tiêu chuẩn gồm DOCTYPE, html, head và body.',
      accentColor: 'from-orange-600 to-amber-500',
      keyHighlights: ['Cấu trúc chuẩn HTML5', 'Cặp thẻ đóng mở và thẻ rỗng', 'Thẻ tiêu đề và tiêu đề trang']
    },
    objectives: [
      {
        id: 'obj_7_1',
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: 'Cấu trúc tài liệu HTML5',
        description: 'Trình bày được vai trò của thẻ `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<body>` và khái niệm siêu văn bản.',
        iconName: 'FileCode'
      },
      {
        id: 'obj_7_2',
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Soạn thảo trang web đầu tiên',
        description: 'Tạo được một tệp tin `index.html` có cấu trúc chuẩn và hiển thị được trên trình duyệt web.',
        iconName: 'Code'
      },
      {
        id: 'obj_7_3',
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Thói quen lập trình chuẩn mực',
        description: 'Hình thành thói quen viết mã thụt lề rõ ràng, luôn đóng cặp thẻ và sử dụng bảng mã chuẩn UTF-8 tiếng Việt.',
        iconName: 'CheckCircle'
      }
    ],
    warmup: {
      title: 'Tình huống: Bí mật đằng sau một trang web đẹp',
      scenario: 'Khi bạn lướt web xem tin tức hay học trực tuyến, bạn chỉ thấy chữ và hình ảnh đẹp mắt. Nhưng khi nhấn phím F12 (hoặc Ctrl+U) trên bàn phím, điều gì thực sự ẩn chứa bên dưới?',
      pollQuestion: 'Ngôn ngữ nền tảng đóng vai trò "bộ khung xương" cấu trúc cho toàn bộ nội dung của trang web là gì?',
      pollOptions: [
        { id: 'p7_1', text: 'HTML (HyperText Markup Language)', votesPercent: 92, isPopular: true, insight: 'Chính xác! HTML định nghĩa toàn bộ cấu trúc và các phần tử hiển thị của trang web.' },
        { id: 'p7_2', text: 'Phần mềm Microsoft Word', votesPercent: 4, insight: 'Word dùng để soạn thảo tài liệu văn phòng, không phải ngôn ngữ xây dựng web.' },
        { id: 'p7_3', text: 'Hệ điều hành Windows', votesPercent: 4, insight: 'Hệ điều hành quản lý phần cứng máy tính.' }
      ],
      reflection: 'Mỗi trang web trên thế giới dù đơn giản hay phức tạp như Facebook, Google đều được xây dựng từ những viên gạch cơ bản của ngôn ngữ HTML.'
    },
    knowledge: [
      {
        id: 'tab_7_1',
        title: '1. Cấu trúc chuẩn của một tài liệu HTML5',
        subtitle: 'Các thẻ xương sống bắt buộc',
        iconName: 'Code2',
        keyPoints: [
          '`<!DOCTYPE html>`: Khai báo tài liệu tuân theo tiêu chuẩn HTML5 mới nhất.',
          '`<html> ... </html>`: Phần tử gốc bao bọc toàn bộ mã nguồn của trang web.',
          '`<head> ... </head>`: Chứa thông tin mô tả về trang web (Metadata, tiêu đề tab `<title>`, mã ký tự `<meta charset="UTF-8">`).',
          '`<body> ... </body>`: Chứa toàn bộ nội dung hiển thị trực tiếp cho người dùng nhìn thấy (tiêu đề, văn bản, ảnh, liên kết).'
        ],
        visualType: 'interactive-code',
        visualData: {
          defaultCode: `<!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8">
    <title>Trang Web Lớp 12</title>
  </head>
  <body>
    <h1>Chào mừng đến với Tin học 12!</h1>
    <p>Học thiết kế Web chuẩn GDPT 2018 thật thú vị.</p>
  </body>
</html>`
        },
        emCanNho: [
          'HTML là ngôn ngữ đánh dấu siêu văn bản, xây dựng bộ khung cho trang web.',
          'Cấu trúc trang web chuẩn luôn có hai phần chính: `<head>` (chứa tiêu đề, khai báo) và `<body>` (chứa nội dung hiển thị).',
          'Thẻ HTML thường đi theo cặp `<thẻ>...</thẻ>` gồm thẻ mở và thẻ đóng có dấu gạch chéo `/`.'
        ]
      }
    ],
    miniGame: {
      type: 'drag-drop',
      title: 'Sắp xếp cấu trúc lồng nhau của cây thẻ HTML',
      instruction: 'Xếp các thẻ HTML vào đúng vị trí từ ngoài vào trong:',
      categories: [
        { id: 'head_sec', title: 'Nằm trong khối thẻ <head>', color: 'border-amber-500 bg-amber-950/40 text-amber-300' },
        { id: 'body_sec', title: 'Nằm trong khối thẻ <body>', color: 'border-orange-500 bg-orange-950/40 text-orange-300' }
      ],
      dragItems: [
        { id: 't_1', text: '<title>Tiêu đề tab trình duyệt</title>', category: 'head_sec', explanation: 'Chứa tiêu đề trang web.' },
        { id: 't_2', text: '<meta charset="UTF-8">', category: 'head_sec', explanation: 'Khai báo bảng mã tiếng Việt.' },
        { id: 't_3', text: '<h1>Tiêu đề bài viết chính</h1>', category: 'body_sec', explanation: 'Nội dung hiển thị trên trang.' },
        { id: 't_4', text: '<p>Đoạn văn giới thiệu bản thân</p>', category: 'body_sec', explanation: 'Đoạn văn nội dung trong trang.' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: 'Phần mở rộng mặc định của một tệp tin mã nguồn trang web HTML là gì?',
        options: ['.html (hoặc .htm)', '.docx', '.exe', '.mp3'],
        correctIndex: 0,
        explanation: 'Tệp tin trang web HTML luôn có phần đuôi mở rộng là `.html` hoặc `.htm`.',
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: 'Nội dung nằm trong cặp thẻ nào sau đây sẽ được hiển thị trực tiếp trên cửa sổ màn hình của trình duyệt web?',
        options: ['<body> ... </body>', '<head> ... </head>', '<meta> ... </meta>', '<title> ... </title>'],
        correctIndex: 0,
        explanation: 'Thẻ `<body>` chứa toàn bộ nội dung trực quan hiển thị cho người dùng xem.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: 'Để trang web hiển thị đúng tiếng Việt có dấu mà không bị lỗi font (ký tự lạ), ta cần đặt thẻ nào vào trong phần `<head>`?',
        options: ['<meta charset="UTF-8">', '<font vietnamese="true">', '<vietnam lang="true">', '<p tiengviet="1">'],
        correctIndex: 0,
        explanation: 'Thẻ `<meta charset="UTF-8">` khai báo chuẩn mã hóa ký tự Unicode UTF-8 toàn cầu, hỗ trợ đầy đủ tiếng Việt có dấu.',
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: 'Thẻ nào sau đây là thẻ đóng hợp lệ của thẻ đoạn văn `<p>`?',
        options: ['</p>', '<p/>', '<close p>', '<?p>'],
        correctIndex: 0,
        explanation: 'Thẻ đóng trong HTML luôn có cấu trúc dấu gạch chéo trước tên thẻ: `</tên_thẻ>`.',
        difficulty: 'Nhận biết'
      },
      {
        id: 5,
        question: 'Đoạn mã nào sau đây thể hiện cấu trúc chuẩn tối thiểu của một trang HTML5?',
        options: [
          '<!DOCTYPE html><html><head><title>A</title></head><body>B</body></html>',
          '<start><head><title>A</title></head></start>',
          '<html><body><h1>Xin chào</h1></body>',
          '<doctype><page></page></doctype>'
        ],
        correctIndex: 0,
        explanation: 'HTML5 chuẩn luôn bắt đầu bằng `<!DOCTYPE html>`, bao bọc bởi thẻ `<html>` gồm hai phần `<head>` và `<body>`.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: 'Tạo Trang Web "Xin Chào Thế Giới" Đầu Tiên',
        context: 'Bắt đầu hành trình trở thành nhà phát triển Web chuyên nghiệp với tệp tin index.html cá nhân.',
        mission: 'Soạn thảo tệp tin `index.html` giới thiệu họ tên, lớp và sở thích cá nhân bằng Notepad hoặc VS Code.',
        steps: [
          'Mở phần mềm soạn thảo (Notepad / VS Code).',
          'Nhập bộ khung HTML5 đầy đủ kèm `<meta charset="UTF-8">`.',
          'Trong thẻ `<body>`, thêm tiêu đề `<h1>` tên của bạn và đoạn văn `<p>` giới thiệu ước mơ tương lai.',
          'Lưu tệp với tên `index.html` (chọn Save as type: All Files) và nhấp đúp để mở trên trình duyệt Google Chrome/Edge.'
        ],
        outputRequirement: 'Trang web hiển thị tiêu đề và đoạn văn tiếng Việt có dấu chuẩn đẹp mắt trên trình duyệt.',
        practicalTip: 'Luôn nhớ lưu tệp với phần đuôi `.html` chứ không lưu dạng `.txt` mặc định của Notepad.'
      },
      mindmap: {
        id: 'mm_7',
        label: 'CẤU TRÚC TRANG WEB HTML',
        color: '#f97316',
        children: [
          {
            id: 'mm_7_1',
            label: 'Khai báo chuẩn',
            children: [
              { id: 'mm_7_1_1', label: '<!DOCTYPE html>' },
              { id: 'mm_7_1_2', label: '<html lang="vi">' }
            ]
          },
          {
            id: 'mm_7_2',
            label: 'Phần đầu <head>',
            children: [
              { id: 'mm_7_2_1', label: '<meta charset="UTF-8">' },
              { id: 'mm_7_2_2', label: '<title>Tiêu đề tab' }
            ]
          },
          {
            id: 'mm_7_3',
            label: 'Phần thân <body>',
            children: [
              { id: 'mm_7_3_1', label: '<h1> đến <h6>' },
              { id: 'mm_7_3_2', label: '<p> Đoạn văn' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: 'Nhà Lập Trình HTML 12',
      badgeIcon: 'FileCode',
      roleTitle: 'Kỹ Thuật Viên Xây Dựng Cấu Trúc Web',
      congratsMessage: 'Tuyệt vời! Bạn đã viết thành công trang web đầu tiên và làm chủ cấu trúc tài liệu HTML5.',
      skillsUnlocked: ['Cấu trúc chuẩn HTML5', 'Soạn thảo index.html', 'Khai báo UTF-8 tiếng Việt']
    }
  }
];

import { ALL_GRADE_12_CURRICULUM } from './grade12/curriculum12';

// Helper to generate template lesson data for the remaining lessons to ensure all 28 lessons are fully defined with rich valid interactive structures
export function getLessonById(id: number): Lesson {
  const existing = LESSONS_DATA.find(l => l.id === id);
  const curriculum = ALL_GRADE_12_CURRICULUM[id];

  if (existing) {
    if (curriculum) {
      return {
        ...existing,
        objectives: curriculum.objectives,
        knowledge: curriculum.knowledge
      };
    }
    return existing;
  }

  // Rich fallback / dynamic generator for remaining lessons (8 to 28)
  const template = generateLessonTemplate(id);
  if (curriculum) {
    return {
      ...template,
      objectives: curriculum.objectives,
      knowledge: curriculum.knowledge
    };
  }
  return template;
}

const LESSON_TITLES: Record<number, { title: string; themeId: number; themeName: string; badge: string; desc: string }> = {

  8: { title: 'Định dạng văn bản', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'HTML Văn bản', desc: 'Các thẻ định dạng tiêu đề h1-h6, đoạn văn p, in đậm strong, in nghiêng em, ngắt dòng br và đường kẻ ngang hr.' },
  9: { title: 'Tạo danh sách, bảng', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'HTML Bảng biểu', desc: 'Tạo danh sách có thứ tự ol, không thứ tự ul, danh sách mô tả dl và cấu trúc bảng table, tr, th, td.' },
  10: { title: 'Tạo liên kết', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'HTML Liên kết', desc: 'Sử dụng thẻ siêu liên kết a với thuộc tính href, liên kết nội bộ, liên kết ngoài và liên kết neo anchor.' },
  11: { title: 'Chèn tệp tin đa phương tiện và khung nội tuyến vào trang web', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'Đa phương tiện', desc: 'Nhúng hình ảnh img, âm thanh audio, video và khung nội tuyến iframe để nhúng YouTube hoặc bản đồ.' },
  12: { title: 'Tạo biểu mẫu', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'HTML Biểu mẫu', desc: 'Xây dựng form thu thập dữ liệu người dùng với các trường input text, password, radio, checkbox, textarea và nút submit.' },
  13: { title: 'Khái niệm, vai trò của CSS', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'CSS Cơ bản', desc: 'Tìm hiểu ngôn ngữ định dạng CSS, cú pháp Selector và Declaration, các cách nhúng Inline, Internal và External CSS.' },
  14: { title: 'Định dạng văn bản bằng CSS', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'CSS Typography', desc: 'Thiết lập phông chữ font-family, cỡ chữ font-size, độ đậm font-weight, căn lề text-align và khoảng cách dòng line-height.' },
  15: { title: 'Tạo màu cho chữ và nền', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'CSS Màu sắc', desc: 'Sử dụng các hệ màu Hex (#rrggbb), RGB, HSL và thiết lập thuộc tính color cho chữ, background-color cho nền.' },
  16: { title: 'Định dạng khung', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'CSS Box Model', desc: 'Làm chủ mô hình hộp Box Model gồm Margin (lề ngoài), Border (viền), Padding (đệm trong) và Content.' },
  17: { title: 'Các mức ưu tiên của bộ chọn', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'CSS Nâng cao', desc: 'Quy tắc thứ bậc ưu tiên tính trọng số bộ chọn (ID > Class > Tag), lớp giả pseudo-class :hover, :active và từ khóa !important.' },
  18: { title: 'Thực hành tổng hợp thiết kế trang web', themeId: 4, themeName: 'Chủ đề 4: Thiết kế Web với HTML & CSS', badge: 'Dự án Web', desc: 'Phối hợp toàn diện HTML5 và CSS để xây dựng một website hoàn chỉnh giới thiệu câu lạc bộ trường học.' },
  19: { title: 'Dịch vụ sửa chữa và bảo trì máy tính', themeId: 5, themeName: 'Chủ đề 5: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp IT', desc: 'Tìm hiểu công việc kỹ thuật viên bảo trì phần cứng, chẩn đoán lỗi hỏng hóc máy tính và các kỹ năng nghề nghiệp.' },
  20: { title: 'Nhóm nghề quản trị thuộc ngành Công nghệ thông tin', themeId: 5, themeName: 'Chủ đề 5: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp IT', desc: 'Khám phá vai trò của chuyên viên Quản trị Mạng (Network Admin), Quản trị Cơ sở Dữ liệu (DBA) và Quản trị Hệ thống.' },
  21: { title: 'Hội thảo hướng nghiệp', themeId: 5, themeName: 'Chủ đề 5: Hướng nghiệp với Tin học', badge: 'Hướng nghiệp IT', desc: 'Lập kế hoạch chọn ngành nghề CNTT phù hợp với năng lực bản thân, chuẩn bị hành trang tuyển sinh đại học số.' },
  22: { title: 'Thực hành kết nối các thiết bị số', themeId: 6, themeName: 'Chủ đề 6: Thực hành Thiết bị số', badge: 'Kỹ năng số', desc: 'Thực hành kết nối máy tính với Smartphone qua cáp dữ liệu USB/Bluetooth, kết nối máy chiếu qua cổng HDMI và máy in Wi-Fi.' },
  23: { title: 'Chuẩn bị xây dựng trang web', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Web Development', desc: 'Quy trình lập kế hoạch website, xác định đối tượng người dùng, thiết kế sơ đồ trang Sitemap và phác thảo Wireframe.' },
  24: { title: 'Xây dựng phần đầu trang web', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Web Development', desc: 'Thiết kế phần Header, chèn Logo nhận diện, thiết lập Banner chính và thanh điều hướng chính cho website.' },
  25: { title: 'Xây dựng phần thân và chân trang web', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Web Development', desc: 'Bố cục phần Content dạng khối bài viết, thẻ sản phẩm Card UI và thiết kế Footer chứa thông tin liên hệ, bản quyền.' },
  26: { title: 'Liên kết và thanh điều hướng', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Web Development', desc: 'Tạo menu phân cấp, thanh điều hướng ghim cố định (Sticky Navigation) và liên kết liên trang mượt mà.' },
  27: { title: 'Biểu mẫu trên trang web', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Web Development', desc: 'Nhúng biểu mẫu liên hệ, form đăng ký sự kiện và kết nối bảng tính tự động thu thập thông tin người dùng.' },
  28: { title: 'Thực hành tổng hợp xây dựng trang web', themeId: 7, themeName: 'Chủ đề 7: Xây dựng Web với Công cụ số', badge: 'Dự án Xuất bản', desc: 'Hoàn thiện, tối ưu hiển thị đa thiết bị (Responsive), kiểm thử liên kết và xuất bản website chính thức lên Internet.' }
};

function generateLessonTemplate(id: number): Lesson {
  const meta = LESSON_TITLES[id] || {
    title: `Bài ${id}: Nội dung Tin học 12 chuẩn GDPT 2018`,
    themeId: 4,
    themeName: 'Chủ đề chuẩn SGK Tin học 12',
    badge: 'Tin học 12 Ứng dụng',
    desc: 'Học tập và thực hành tương tác theo chuẩn chương trình Tin học 12 GDPT 2018.'
  };

  return {
    id,
    code: `BAI_${id.toString().padStart(2, '0')}`,
    title: meta.title,
    themeId: meta.themeId,
    themeName: meta.themeName,
    topicBadge: meta.badge,
    grade: 12,
    estimatedMinutes: 45,
    xpTotal: 250,
    hero: {
      tagline: `Chinh phục chuẩn kiến thức và kỹ năng thực hành ${meta.title}`,
      description: meta.desc,
      accentColor: 'from-blue-600 to-indigo-600',
      keyHighlights: ['Bám sát chuẩn SGK GDPT 2018', 'Trải nghiệm trực quan & tương tác', 'Thực hành ứng dụng thực tế']
    },
    objectives: [
      {
        id: `obj_${id}_1`,
        category: 'knowledge',
        categoryName: 'Kiến thức cốt lõi',
        title: `Nắm vững lý thuyết ${meta.title}`,
        description: `Hiểu rõ các khái niệm, cú pháp và quy tắc kỹ thuật chuẩn được trình bày trong ${meta.title}.`,
        iconName: 'BookOpen'
      },
      {
        id: `obj_${id}_2`,
        category: 'skill',
        categoryName: 'Kỹ năng & Năng lực',
        title: 'Kỹ năng thực hành & Áp dụng',
        description: 'Vận dụng kiến thức bài học để giải quyết bài toán thực hành trên máy tính và tình huống thực tế.',
        iconName: 'Wrench'
      },
      {
        id: `obj_${id}_3`,
        category: 'attitude',
        categoryName: 'Phẩm chất & Đạo đức',
        title: 'Ý thức tự học & Sáng tạo số',
        description: 'Chủ động tìm hiểu, sáng tạo sản phẩm số có giá trị và tuân thủ các quy tắc an toàn thông tin.',
        iconName: 'Sparkles'
      }
    ],
    warmup: {
      title: `Tình huống khởi động: ${meta.title}`,
      scenario: `Trong quá trình phát triển sản phẩm công nghệ thực tế, chúng ta thường gặp tình huống cần ứng dụng giải pháp của ${meta.title} để giải quyết vấn đề hiệu quả nhất.`,
      pollQuestion: `Theo bạn, yếu tố quan trọng nhất cần nắm vững khi học ${meta.title} là gì?`,
      pollOptions: [
        { id: `p_${id}_1`, text: 'Hiểu bản chất nguyên lý và áp dụng thực hành thường xuyên', votesPercent: 85, isPopular: true, insight: 'Chính xác! Học đi đôi với hành là phương pháp học Tin học hiệu quả nhất.' },
        { id: `p_${id}_2`, text: 'Học thuộc lòng từng câu chữ mà không cần thao tác máy tính', votesPercent: 5, insight: 'Học vẹt không thể phát triển năng lực ứng dụng công nghệ.' },
        { id: `p_${id}_3`, text: 'Chỉ cần tìm kiếm code trên mạng sao chép về', votesPercent: 10, insight: 'Sao chép mà không hiểu sẽ không sửa được lỗi khi có sự cố.' }
      ],
      reflection: `Thực hành trực tiếp và thấu hiểu nguyên lý sẽ giúp bạn làm chủ hoàn toàn kiến thức ${meta.title}.`
    },
    knowledge: [
      {
        id: `tab_${id}_1`,
        title: `1. Nội dung trọng tâm ${meta.title}`,
        subtitle: 'Kiến thức chuẩn SGK GDPT 2018',
        iconName: 'Code',
        keyPoints: [
          `Nắm vững các thuật ngữ và khái niệm then chốt trong ${meta.title}.`,
          'Áp dụng quy trình kỹ thuật chuẩn xác theo từng bước thực hành.',
          'Kết hợp linh hoạt với các bài học trước để tạo nên sản phẩm hoàn chỉnh.'
        ],
        visualType: id >= 7 && id <= 18 ? 'interactive-code' : 'infographic',
        visualData: id >= 7 && id <= 18 ? {
          defaultCode: `<!-- Mã nguồn thực hành cho ${meta.title} -->
<div class="card">
  <h2>${meta.title}</h2>
  <p>Thực hành lập trình tương tác Tin học 12.</p>
</div>`
        } : {
          nodes: [
            { label: 'Bước 1: Phân tích yêu cầu', desc: 'Xác định mục tiêu của bài toán' },
            { label: 'Bước 2: Thiết lập & Viết mã', desc: 'Thực thi các lệnh theo chuẩn SGK' },
            { label: 'Bước 3: Kiểm thử & Hoàn thiện', desc: 'Chạy thử nghiệm và sửa lỗi' }
          ]
        },
        emCanNho: [
          `Nắm vững quy tắc và cú pháp cốt lõi của ${meta.title}.`,
          'Luôn kiểm tra và tối ưu sản phẩm trên môi trường thực tế.',
          'Ghi nhớ các lưu ý quan trọng để tránh lỗi sai phổ biến.'
        ]
      }
    ],
    miniGame: {
      type: 'matching',
      title: `Thử thách ghép cặp thuật ngữ: ${meta.title}`,
      instruction: 'Hãy ghép đúng thuật ngữ với chức năng tương ứng:',
      matchingPairs: [
        { id: `pair_${id}_1`, left: 'Khái niệm chuẩn', right: 'Định nghĩa chính xác theo SGK GDPT 2018' },
        { id: `pair_${id}_2`, left: 'Quy trình thực hiện', right: 'Các bước thao tác logic và an toàn' },
        { id: `pair_${id}_3`, left: 'Ứng dụng thực tiễn', right: 'Giải quyết vấn đề học tập và đời sống' }
      ]
    },
    assessment: [
      {
        id: 1,
        question: `Mục tiêu trọng tâm của bài học "${meta.title}" là gì?`,
        options: [
          `Nắm vững kiến thức và kỹ năng thực hành chuẩn của ${meta.title}`,
          'Chỉ để giải trí không cần ghi nhớ',
          'Tắt màn hình máy tính',
          'Không có ý nghĩa gì'
        ],
        correctIndex: 0,
        explanation: `Bài học giúp học sinh trang bị đầy đủ năng lực lý thuyết và thực hành theo chương trình GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 2,
        question: `Khi thực hành nội dung của "${meta.title}", thói quen nào sau đây là chuẩn mực nhất?`,
        options: [
          'Thao tác cẩn thận, tuân thủ quy trình và lưu bài thường xuyên',
          'Xóa hết dữ liệu của bạn bên cạnh',
          'Rút cáp điện đột ngột',
          'Không bao giờ kiểm tra lại kết quả'
        ],
        correctIndex: 0,
        explanation: 'Thao tác đúng quy trình và lưu bài giúp bảo vệ dữ liệu và rèn luyện tác phong chuyên nghiệp.',
        difficulty: 'Thông hiểu'
      },
      {
        id: 3,
        question: `Nội dung của "${meta.title}" thuộc nhóm kiến thức nào trong SGK Tin học 12?`,
        options: [meta.themeName, 'Toán học cổ đại', 'Địa lý thế giới', 'Âm nhạc dân gian'],
        correctIndex: 0,
        explanation: `Bài học nằm trong ${meta.themeName} của chương trình Tin học 12 GDPT 2018.`,
        difficulty: 'Nhận biết'
      },
      {
        id: 4,
        question: `Kỹ năng thu được từ "${meta.title}" giúp học sinh giải quyết vấn đề gì?`,
        options: [
          'Nâng cao năng lực ứng dụng công nghệ thông tin và phát triển sản phẩm số',
          'Làm hỏng hệ điều hành máy tính',
          'Giảm tốc độ gõ phím',
          'Quên hết kiến thức đã học'
        ],
        correctIndex: 0,
        explanation: 'Kỹ năng tin học ứng dụng giúp học sinh chủ động sáng tạo và làm chủ công nghệ trong học tập và công việc.',
        difficulty: 'Vận dụng'
      },
      {
        id: 5,
        question: `Để tự đánh giá mức độ hiểu bài sau khi học xong "${meta.title}", bạn nên làm gì?`,
        options: [
          'Làm bài kiểm tra tự đánh giá và hoàn thành bài tập vận dụng thực tế',
          'Đóng sách và không bao giờ xem lại',
          'Xem video ca nhạc',
          'Xóa hết ghi chú'
        ],
        correctIndex: 0,
        explanation: 'Làm bài kiểm tra và dự án vận dụng là cách tốt nhất để củng cố kiến thức lâu dài.',
        difficulty: 'Thông hiểu'
      }
    ],
    application: {
      project: {
        title: `Dự án Vận dụng Thực tế: ${meta.title}`,
        context: 'Áp dụng kiến thức đã học vào dự án học tập thực tế của học sinh lớp 12.',
        mission: `Hoàn thành bài tập thực hành ứng dụng kiến thức của ${meta.title} để nâng cao năng lực Tin học.`,
        steps: [
          'Bước 1: Xem lại khung kiến thức và các ví dụ mẫu.',
          'Bước 2: Mở môi trường thực hành và thao tác từng bước.',
          'Bước 3: Đánh giá kết quả và chia sẻ sản phẩm với thầy cô, bạn bè.'
        ],
        outputRequirement: 'Sản phẩm thực hành hoàn chỉnh đạt chuẩn kỹ thuật.',
        practicalTip: 'Đừng ngại thử nghiệm các ý tưởng mới để trang web hoặc sản phẩm của bạn trở nên độc đáo hơn!'
      },
      mindmap: {
        id: `mm_${id}`,
        label: meta.title.toUpperCase(),
        color: '#2563eb',
        children: [
          {
            id: `mm_${id}_1`,
            label: 'Kiến thức cốt lõi',
            children: [
              { id: `mm_${id}_1_1`, label: 'Khái niệm & Cú pháp chuẩn' },
              { id: `mm_${id}_1_2`, label: 'Nguyên lý hoạt động' }
            ]
          },
          {
            id: `mm_${id}_2`,
            label: 'Kỹ năng thực hành',
            children: [
              { id: `mm_${id}_2_1`, label: 'Thao tác từng bước' },
              { id: `mm_${id}_2_2`, label: 'Kiểm thử & Sửa lỗi' }
            ]
          },
          {
            id: `mm_${id}_3`,
            label: 'Vận dụng thực tiễn',
            children: [
              { id: `mm_${id}_3_1`, label: 'Dự án học đường' },
              { id: `mm_${id}_3_2`, label: 'Định hướng nghề nghiệp' }
            ]
          }
        ]
      }
    },
    completion: {
      badgeName: `Chuyên Gia ${meta.badge}`,
      badgeIcon: 'Award',
      roleTitle: `Nhà Thực Hành Tin Học 12 - ${meta.badge}`,
      congratsMessage: `Tuyệt vời! Bạn đã hoàn thành xuất sắc ${meta.title} theo chuẩn SGK Tin học 12 GDPT 2018.`,
      skillsUnlocked: [`Làm chủ ${meta.title}`, 'Tư duy công nghệ ứng dụng', 'Kỹ năng thực hành thực chiến']
    }
  };
}
