import { YStack, styled, View } from 'tamagui'

export const TerminalFrame = styled(YStack, {
  name: 'TerminalFrame',
  borderWidth: 1,
  borderColor: '$stroke',
  position: 'relative',
  padding: '$space.4',
  backgroundColor: 'rgba(35, 36, 38, 0.4)',

  variants: {
    variant: {
      chamfered: {
        className: 'chamfer',
      },
    },
    glow: {
      true: {
        borderColor: '$accent',
        boxShadow: '0 0 10px rgba(255, 176, 0, 0.15)',
      }
    },
    interactive: {
      true: {
        hoverStyle: {
          borderColor: '$accent',
          boxShadow: '0 0 15px rgba(255, 176, 0, 0.3)',
        }
      }
    }
  } as const
})

export const FrameDecoration = () => (
  <><View position="absolute" top={-1} left={-1} width={10} height={10} borderTopWidth={2} borderLeftWidth={2} borderColor="$accent" /><View position="absolute" top={-1} right={-1} width={10} height={10} borderTopWidth={2} borderRightWidth={2} borderColor="$accent" /><View position="absolute" bottom={-1} left={-1} width={10} height={10} borderBottomWidth={2} borderLeftWidth={2} borderColor="$accent" /><View position="absolute" bottom={-1} right={-1} width={10} height={10} borderBottomWidth={2} borderRightWidth={2} borderColor="$accent" /></>
)
