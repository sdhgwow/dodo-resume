// персональная информация для резюме
export const PERSONAL_INFO = {
    name: 'Дмитрий Твардовский',
    role: 'Frontend Developer',
    location: 'Санкт-Петербург / Remote',
    bio: 'Строю фронтенд с нуля до прода. Беру на себя ответственность за свои решения, довожу их до ума до того, как их увидят клиенты. По-настоящему владею своим кодом и по полочкам раскидываю, где и что лежит, чтобы разобраться мог любой',
    qualities: ['Self-driven', 'Full-cycle ownership', 'System thinking'],
    
    contacts: {
      github: 'https://github.com/sdhgwow',
      telegram: '@sdhglg',
      vk: 'sdhgwow',
      phone: '8 981 693-29-49',
    },
  } as const;
  
  export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    counter: 2,
  } as const;
  
  export const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  } as const;
  
  export const METRICS = {
    linesOfCode: '150K+',
    projectsShipped: 7,
    cicdPipelines: 5,
    employeeOfMonth: 7,
    refactorsSurvived: '∞',
    yearsOfCoding: new Date().getFullYear() - 2023,
  } as const;