import type { Metadata } from 'next'
import { DM_Sans, JetBrains_Mono } from 'next/font/google'
import '../styles/globals.css'

// Font: DM Sans (headings and body)
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-heading',
  display: 'swap',
})

// Font: JetBrains Mono (technical labels and data)
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Martin Drexler - Strategic Design Partner',
  description: 'Award-winning strategic design partner for ambitious companies. I help funded startups and enterprises transform their products, brands, and teams.',
  keywords: ['strategic design', 'product design', 'brand systems', 'design leadership', 'UX design'],
  authors: [{ name: 'Martin Drexler' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Martin Drexler - Strategic Design Partner',
    description: 'Award-winning strategic design partner for ambitious companies.',
    siteName: 'Martin Drexler Design',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetBrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
