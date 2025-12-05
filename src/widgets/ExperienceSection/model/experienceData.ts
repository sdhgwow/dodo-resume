import type { Experience, Education } from '@/shared/types';

// данные об опыте работы
export const experienceData: Experience[] = [
  {
    company: 'CLOUD SOLUTIONS LLC',
    role: 'Ведущий Frontend разработчик',
    period: 'март 2024 - август 2025',
    location: 'Remote',
    highlight: true,
    achievements: [
      'Единолично реализовал frontend всего продукта MSK.HOST — облачного хостинг-провайдера с нуля до прода',
      'Полный редизайн биллинга и лендинга: мигрировал с legacy на React TS + Vite, разработал кастомный API-клиент с централизованной обработкой ошибок',
      'Оптимизировал Redux store, исправил множественные ререндеры и проблемы производительности',
      'Спроектировал и внедрил FSD-архитектуру в тикет-систему для технической поддержки',
      'Полностью разработал дизайн и frontend тикетницы самостоятельно',
      'Настроил CI/CD pipeline (GitHub Actions + Docker) для всех сервисов',
      '7+ раз признан лучшим сотрудником месяца, единственный получил именную кружку от компании',
    ],
    stack: ['React 18/19', 'TypeScript', 'Vite', 'Redux Toolkit', 'FSD', 'Docker', 'GitHub Actions'],
    projects: [
      {
        name: 'MSK.HOST Billing v2',
        description: 'Личный кабинет облачного хостинга с биллингом',
      },
      {
        name: 'MSK.HOST Landing v2',
        description: 'Редизайн на современный стек',
      },
      {
        name: 'Support Panel v2',
        description: 'Тикет-система для техподдержки',
      },
      {
        name: 'Looking Glass',
        description: 'Сервис проверки соединения до серверов хостинга',
      },
    ],
  },
  {
    company: 'VOLDROP SHOP',
    role: 'Основатель, Fullstack Developer',
    period: 'февраль 2025',
    location: 'Pet Project',
    achievements: [
      'Fullstack магазин обуви за 10 дней: Django + React',
      'Демонстрация full-cycle разработки для курсового проекта',
    ],
    stack: ['React', 'TypeScript', 'Django', 'PostgreSQL'],
  },
  {
    company: 'КП "Лучезарная долина"',
    role: 'Frontend Developer',
    period: '2023',
    location: 'Фриланс',
    achievements: [
      'Разработал лендинг для коттеджного поселка',
    ],
    stack: ['React', 'Адаптивная верстка'],
  },
  {
    company: 'BLACKHUB GAMES',
    role: 'Специалист технической поддержки L1',
    period: 'сентябрь 2022 - февраль 2024',
    location: 'Remote',
    achievements: [
      'Тех.поддержка в высоконагруженном проекте Black Russia',
      'Руководил отделом внутрипродуктного контроля технических областей серверов',
    ],
    stack: ['Техподдержка', 'Управление командой'],
  },
];

// данные об образовании
export const educationData: Education = {
  institution: 'ГУАП ФСПО',
  degree: 'Среднее специальное',
  expectedGraduation: '2028',
  status: 'learning',
};