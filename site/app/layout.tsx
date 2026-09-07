import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { CommandMenu } from '@/components/CommandMenu/CommandMenu'
import { ReturnToTop } from '@/components/ReturnToTop/ReturnToTop'
import { SiteNav } from '@/components/SiteNav/SiteNav'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-sans-loaded',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://martindrexler.com'),
  title: 'Martin Drexler',
  description: 'Strategic design partner. Get in touch.',
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <SiteNav />
        {children}
        <ReturnToTop />
        <CommandMenu />
      </body>
    </html>
  )
}
