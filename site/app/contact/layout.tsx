import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Get in Touch About Your Strategic Design Project',
  description: 'Ready to transform your product, brand, or team? Contact Martin Drexler to discuss your strategic design challenges. Work with funded startups and enterprises.',
  keywords: ['contact', 'hire designer', 'design consultation', 'strategic design partner', 'design project inquiry'],
  openGraph: {
    title: 'Contact - Get in Touch About Your Strategic Design Project',
    description: 'Ready to transform your product, brand, or team? Contact Martin Drexler to discuss your strategic design challenges.',
    url: 'https://martindrexler.com/contact',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-contact.jpg',
      width: 1200,
      height: 630,
      alt: 'Contact Martin Drexler',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - Get in Touch About Your Strategic Design Project',
    description: 'Ready to transform your product, brand, or team? Contact Martin Drexler to discuss your strategic design challenges.',
    images: ['/images/og-contact.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
