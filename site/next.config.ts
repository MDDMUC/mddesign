import { withTamagui } from '@tamagui/next-plugin'
import type { NextConfig } from 'next';

const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui'],
  disableExtraction: true,
  excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
})

const nextConfig: NextConfig = {
  turbopack: {},
  output: 'export', 
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
};

export default tamaguiPlugin(nextConfig);
