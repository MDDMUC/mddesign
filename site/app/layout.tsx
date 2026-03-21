import type { Metadata } from 'next'
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://martindrexler.com'),
  title: {
    default: 'Martin Drexler - Strategic Design Partner',
    template: '%s | Martin Drexler'
  },
  description: 'Award-winning strategic design partner for ambitious companies. 15+ years leading design for startups and enterprises across Europe and the US.',
  authors: [{ name: 'Martin Drexler' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://martindrexler.com',
    siteName: 'Martin Drexler Design',
    title: 'Martin Drexler - Strategic Design Partner',
    description: 'Award-winning strategic design partner for ambitious companies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Drexler - Strategic Design Partner',
    description: 'Award-winning strategic design partner for ambitious companies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
