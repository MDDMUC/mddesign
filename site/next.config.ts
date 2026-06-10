import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    unoptimized: true,
  },
  experimental: {
    // SYSTEM §14.2 — cross-document View Transitions on /work ↔ /work/[slug].
    // Pairs with @view-transition { navigation: auto } in globals.css.
    viewTransition: true,
  },
}

export default nextConfig
