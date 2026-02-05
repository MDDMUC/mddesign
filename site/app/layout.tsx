import type { Metadata } from 'next'
import { Share_Tech_Mono } from 'next/font/google'
import { Providers } from './providers'
import Navigation from '@/components/Navigation'
import '../styles/globals.css'

const shareTechMono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://martindrexler.com'),
  title: 'Martin Drexler - Strategic Design Partner',
  description: 'Award-winning strategic design partner for ambitious companies.',
  authors: [{ name: 'Martin Drexler' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={shareTechMono.variable}>
      <body style={{ background: '#1a1b1d', margin: 0, padding: 0, height: '100vh', overflow: 'hidden' }}>
        <Providers><div className="scanlines" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 9999 }} /><div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}><Navigation /><main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>{children}</main></div></Providers>
      </body>
    </html>
  )
}
