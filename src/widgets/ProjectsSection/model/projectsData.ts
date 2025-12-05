export interface ProjectShowcase {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  image?: string; // путь к скриншоту
  color: string; // акцентный цвет проекта
}

// данные о проектах для портфолио
export const showcaseProjects: ProjectShowcase[] = [
  {
    title: 'MSK.HOST Billing v2',
    company: 'CLOUD SOLUTIONS LLC',
    period: '2024',
    description: 'Полный редизайн и рефакторинг личного кабинета облачного хостинга. Мигрировал с legacy React на современный стек с TypeScript и FSD-архитектурой.',
    achievements: [
      'Разработал кастомный API-клиент с централизованной обработкой ошибок',
      'Оптимизировал Redux store, устранил ререндеры',
      'Реализовал адаптивный дизайн и улучшил UX',
      'Настроил CI/CD с автоматическим деплоем',
    ],
    stack: ['React 18', 'TypeScript', 'Vite', 'Redux Toolkit', 'SCSS', 'Docker'],
    metrics: [
      { label: 'Время загрузки', value: '-40%' },
      { label: 'Bundle size', value: '-35%' },
      { label: 'Удовлетворенность', value: '+80%' },
    ],
    image: '/assets/msk_billing.png',
    color: '#FF6900',
  },
  {
    title: 'MSK.HOST Landing v2',
    company: 'CLOUD SOLUTIONS LLC',
    period: '2024',
    description: 'Полный редизайн лендинга облачного хостинга. Современный дизайн с улучшенной конверсией и оптимизированной производительностью.',
    achievements: [
      'Создал современный адаптивный дизайн с улучшенным UX',
      'Оптимизировал производительность и скорость загрузки',
      'Реализовал интерактивные элементы и анимации',
      'Улучшил SEO и структуру контента',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'SCSS', 'BEM'],
    metrics: [
      { label: 'Конверсия', value: '+35%' },
      { label: 'Время загрузки', value: '-45%' },
    ],
    image: '/assets/msk_landing.png',
    color: '#6A5AE0',
  },
  {
    title: 'VOLDROP SHOP',
    company: 'Pet Project',
    period: '2025',
    description: 'Fullstack магазин обуви за 10 дней. Демонстрация полного цикла разработки от идеи до деплоя.',
    achievements: [
      'Backend на Django с REST API',
      'Frontend на React с FSD-архитектурой',
      'Интеграция платежной системы',
      'Админ-панель для управления каталогом',
    ],
    stack: ['React', 'TypeScript', 'Django', 'PostgreSQL', 'FSD', 'Docker', 'WebSocket'],
    metrics: [
      { label: 'Время разработки', value: '10 дней' },
      { label: 'API endpoints', value: '15+' },
    ],
    image: '/assets/voldrop_shop.png',
    color: '#DF1717',
  },
];

// получение проектов по компании
export const getProjectsByCompany = (company: string) => {
  return showcaseProjects.filter(p => p.company === company);
};

// получение главного проекта (первый в списке)
export const getFeaturedProject = () => {
  return showcaseProjects[0]; // MSK.HOST как главный проект
};