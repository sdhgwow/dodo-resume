export const dodoPalette = {
    // основные цвета
    dark: '#303030',
    darkAlt: '#553F3F',
    orange: '#FF6900',
    white: '#FFFFFF',
    
    // акцентные цвета
    purple: '#6A5AE0',
    purpleDark: '#9F27FE',
    red: '#DF1717',
    redBright: '#FF3C00',
    orangeBright: '#FF5601',
    yellow: '#FFB423',
    green: '#A0C800',
    pink: '#FFB8D1',
    beige: '#F3ECE4',
    beigeAlt: '#FFF0DF',
  } as const;
  
  export const semanticColors = {
    primary: dodoPalette.orange,
    background: {
      light: dodoPalette.white,
      dark: dodoPalette.dark,
    },
    text: {
      primary: dodoPalette.dark,
      secondary: dodoPalette.darkAlt,
      inverse: dodoPalette.white,
    },
    accent: {
      purple: dodoPalette.purple,
      red: dodoPalette.red,
      yellow: dodoPalette.yellow,
      pink: dodoPalette.pink,
    },
    surface: {
      light: dodoPalette.beige,
      lighter: dodoPalette.beigeAlt,
    },
  } as const;
  
export const cssVars = {
    light: {
      '--color-bg-primary': dodoPalette.white,
      '--color-bg-secondary': dodoPalette.beige,
      '--color-text-primary': dodoPalette.dark,
      '--color-text-secondary': dodoPalette.darkAlt,
      '--color-accent': dodoPalette.orange,
      '--color-purple': dodoPalette.purple,
      '--color-red': dodoPalette.red,
      '--color-yellow': dodoPalette.yellow,
      '--color-pink': dodoPalette.pink,
    },
    dark: {
      '--color-bg-primary': dodoPalette.dark,
      '--color-bg-secondary': dodoPalette.darkAlt,
      '--color-text-primary': dodoPalette.white,
      '--color-text-secondary': dodoPalette.beige,
      '--color-accent': dodoPalette.orange,
      '--color-purple': dodoPalette.purple,
      '--color-red': dodoPalette.red,
      '--color-yellow': dodoPalette.yellow,
      '--color-pink': dodoPalette.pink,
    },
  } as const;