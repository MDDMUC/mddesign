import { Text, styled } from 'tamagui'

export const TerminalText = styled(Text, {
  name: 'TerminalText',
  fontFamily: '$body',
  color: '$text',
  textTransform: 'uppercase',
  letterSpacing: 0.05,
  
  variants: {
    glow: {
      true: {
        textShadowColor: 'rgba(255, 176, 0, 0.7)',
        textShadowRadius: 5,
        textShadowOffset: { width: 0, height: 0 },
      }
    },
    glitch: {
      true: {
        className: 'glitch-text',
      }
    },
    intensity: {
      high: {
        color: '$textHighlight',
      },
      muted: {
        color: '$textMuted',
      },
      dim: {
        color: '$textDark',
      }
    }
  } as const
})
