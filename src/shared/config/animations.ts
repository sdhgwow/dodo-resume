// константы для анимаций framer-motion
export const ANIMATION_DURATIONS = {
  fast: 0.2,
  normal: 0.3,
  medium: 0.5,
  slow: 0.6,
  typing: 100, // интервал для печатания текста
  cursor: 500, // интервал мигания курсора
} as const;

export const ANIMATION_DELAYS = {
  stagger: 0.05, // задержка между элементами в списке
  card: 0.15, // задержка для карточек
  section: 0.2, // задержка для секций
  header: 0.4, // задержка для заголовков
  footer: 0.6, // задержка для футеров
  long: 0.8, // длинная задержка
} as const;

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInUpLarge: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
} as const;

