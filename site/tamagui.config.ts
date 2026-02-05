import { createTamagui, createTokens, createFont } from 'tamagui';
import { config as baseConfig } from '@tamagui/config/v3';

const shareTechMono = createFont({
  family: 'var(--font-mono)',
  size: {
    1: 11,
    2: 13,
    3: 15,
    4: 17,
    5: 20,
    6: 24,
    7: 32,
    8: 48,
    9: 64,
  },
  lineHeight: {
    1: 15,
    2: 17,
    3: 19,
    4: 25,
    5: 29,
    6: 33,
    7: 41,
    8: 57,
    9: 73,
  },
  weight: {
    4: '400',
    7: '700',
  },
  letterSpacing: {
    4: 0.7,
  },
});

const tokens = createTokens({
  ...baseConfig.tokens,
  color: {
    ...baseConfig.tokens.color,
    bg: '#1a1b1d',          
    panel: '#232426',       
    card: '#232426',        
    text: '#ffb000',        
    textHighlight: '#ffcc00', 
    textMuted: '#9a8f6d',   
    textDark: '#5c5542',    
    accent: '#ffb000',      
    accent2: '#ffcc00',     
    green: '#88aa55',       
    red: '#cc5555',         
    yellow: '#dbaa3e',      
    cyan: '#56b6c2',        
    stroke: '#3a3b3d',      
    strokeActive: '#ffb000', 
    borderColorHover: '#ffb000',
    navBg: 'rgba(26, 27, 29, 0.85)',
  },
  radius: {
    ...baseConfig.tokens.radius,
    none: 0,
    sm: 2,  
    md: 4,
    lg: 6,
    xl: 8,
  }
});

const tamaguiConfig = createTamagui({
  ...baseConfig,
  tokens,
  fonts: {
    ...baseConfig.fonts,
    heading: shareTechMono,
    body: shareTechMono,
  },
  themes: {
    light: {
      ...tokens.color,
      background: tokens.color.bg,
      color: tokens.color.text,
      borderColor: tokens.color.stroke,
    },
    dark: {
      ...tokens.color,
      background: tokens.color.bg,
      color: tokens.color.text,
      borderColor: tokens.color.stroke,
    },
  },
});

export type TamaguiConfig = typeof tamaguiConfig;
export default tamaguiConfig;
