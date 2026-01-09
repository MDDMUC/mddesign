import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import '../styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://martindrexler.com'),
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
