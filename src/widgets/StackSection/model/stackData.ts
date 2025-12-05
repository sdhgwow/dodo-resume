import type { TechStackItem } from '@/shared/types';

// данные о стеке технологий, сгруппированные по уровням владения
export const techStack: TechStackItem[] = [
  { name: 'React', level: 95, icon: '/assets/icons/react.svg', category: 'expert' },
  { name: 'TypeScript', level: 90, icon: '/assets/icons/typescript.svg', category: 'expert' },
  { name: 'Redux Toolkit', level: 90, icon: '/assets/icons/redux.svg', category: 'expert' },
  { name: 'Vite', level: 85, icon: '/assets/icons/vite.svg', category: 'expert' },
  { name: 'HTML', level: 88, icon: '/assets/icons/html.svg', category: 'expert' },
  { name: 'CSS/SCSS/BEM', level: 88, icon: '/assets/icons/css.svg', category: 'expert' },
  { name: 'Figma', level: 90, icon: '/assets/icons/figma.svg', category: 'expert' },
  { name: 'Git', level: 85, icon: '/assets/icons/git.svg', category: 'expert' },
  { name: 'Webpack', level: 75, icon: '/assets/icons/webpack.svg', category: 'expert' },
  { name: 'FSD Architecture', level: 85, icon: '/assets/icons/fsd.svg', category: 'advanced' },
  { name: 'Docker', level: 75, icon: '/assets/icons/docker.svg', category: 'advanced' },
  { name: 'CI/CD (GitHub Actions)', level: 80, icon: '/assets/icons/github-actions.svg', category: 'advanced' },
  { name: 'PostgreSQL / MySQL', level: 70, icon: '/assets/icons/postgresql.svg', category: 'advanced' },
  { name: 'Node.js / Express', level: 65, icon: '/assets/icons/nodejs.svg', category: 'familiar' },
  { name: 'Django / FastAPI', level: 70, icon: '/assets/icons/django.svg', category: 'familiar' },
  { name: 'Jest / React Testing Library', level: 60, icon: '/assets/icons/jest.svg', category: 'familiar' },
];

// группировка стека по категориям для фильтрации
export const stackByCategory = {
  expert: techStack.filter(item => item.category === 'expert'),
  advanced: techStack.filter(item => item.category === 'advanced'),
  familiar: techStack.filter(item => item.category === 'familiar'),
};

// получение человекочитаемого названия категории
export const getCategoryLabel = (category: TechStackItem['category']): string => {
  const labels: Record<TechStackItem['category'], string> = {
    expert: 'Эксперт',
    advanced: 'Продвинутый',
    familiar: 'Знаком',
  };
  return labels[category];
};

// получение цвета для категории уровня владения
export const getCategoryColor = (category: TechStackItem['category']): string => {
  const colors: Record<TechStackItem['category'], string> = {
    expert: 'var(--color-accent)',
    advanced: 'var(--color-purple)',
    familiar: 'var(--color-yellow)',
  };
  return colors[category];
};