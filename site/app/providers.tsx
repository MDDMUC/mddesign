'use client'

import { TamaguiProvider, Theme } from 'tamagui'
import config from '../tamagui.config'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TamaguiProvider config={config} defaultTheme="dark">
      <Theme name="dark">
        {children}
      </Theme>
    </TamaguiProvider>
  )
}
