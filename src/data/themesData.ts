import { ThemeGroup } from '../types/lesson';

export const THEME_GROUPS: ThemeGroup[] = [
  {
    id: 1,
    title: 'Chủ đề 1: Máy tính & Xã hội tri thức',
    description: 'Trí tuệ nhân tạo (AI), các đặc trưng, ứng dụng thực tiễn và vấn đề đạo đức công nghệ',
    iconName: 'BrainCircuit',
    color: 'from-blue-600 to-indigo-600',
    lessons: [1, 2]
  },
  {
    id: 2,
    title: 'Chủ đề 2: Mạng máy tính & Internet',
    description: 'Thiết bị mạng thông dụng, giao thức TCP/IP và thực hành chia sẻ tài nguyên mạng LAN',
    iconName: 'Network',
    color: 'from-cyan-500 to-blue-600',
    lessons: [3, 4, 5]
  },
  {
    id: 3,
    title: 'Chủ đề 3: Đạo đức, Pháp luật & Văn hoá số',
    description: 'Ứng xử văn minh trên không gian mạng, bảo vệ quyền riêng tư và an toàn thông tin',
    iconName: 'ShieldCheck',
    color: 'from-emerald-500 to-teal-600',
    lessons: [6]
  },
  {
    id: 4,
    title: 'Chủ đề 4: Thiết kế Web với HTML & CSS',
    description: 'Ngôn ngữ HTML5, định dạng CSS, bố cục Box Model, Flexbox và dự án thiết kế trang web',
    iconName: 'Code2',
    color: 'from-purple-600 to-pink-600',
    lessons: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: 5,
    title: 'Chủ đề 5: Hướng nghiệp với Tin học',
    description: 'Dịch vụ bảo trì phần cứng, nhóm nghề quản trị hệ thống/mạng và hội thảo định hướng CNTT',
    iconName: 'Briefcase',
    color: 'from-amber-500 to-orange-600',
    lessons: [19, 20, 21]
  },
  {
    id: 6,
    title: 'Chủ đề 6: Thực hành Thiết bị số',
    description: 'Kỹ năng kết nối máy tính với điện thoại thông minh, máy in, máy chiếu và thiết bị IoT',
    iconName: 'Smartphone',
    color: 'from-indigo-500 to-blue-500',
    lessons: [22]
  },
  {
    id: 7,
    title: 'Chủ đề 7: Xây dựng Web với Công cụ số',
    description: 'Quy trình phát triển website hiện đại, xây dựng Header, Body, Footer, Form và Navigation',
    iconName: 'Globe',
    color: 'from-rose-500 to-purple-600',
    lessons: [23, 24, 25, 26, 27, 28]
  }
];
