import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static exports for deployment
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
