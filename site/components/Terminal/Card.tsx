import { YStack, styled } from 'tamagui'

export const TerminalCard = styled(YStack, {
  name: 'TerminalCard',
  backgroundColor: '$card',
  borderWidth: 1,
  borderColor: '$stroke',
  padding: '$space.4',
  position: 'relative',

  variants: {
    interactive: {
      true: {
        hoverStyle: {
          borderColor: '$accent',
          boxShadow: '0 0 10px rgba(255, 176, 0, 0.2)',
        }
      }
    }
  } as const
})
