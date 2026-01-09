import type { Metadata } from 'next'
import Hero from '@/components/homepage/Hero/Hero'
import Proof from '@/components/homepage/Proof/Proof'
import Services from '@/components/homepage/Services/Services'
import FeaturedWork from '@/components/homepage/FeaturedWork/FeaturedWork'
import AboutTeaser from '@/components/homepage/AboutTeaser/AboutTeaser'
import ContactCTA from '@/components/homepage/ContactCTA/ContactCTA'
import { OrganizationSchema, BreadcrumbSchema } from '@/components/StructuredData/StructuredData'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Martin Drexler - Strategic Design Partner for Ambitious Companies',
  description: 'Award-winning strategic design partner for funded startups and enterprises. I help companies transform their products, brands, and teams through strategic design leadership.',
  keywords: ['strategic design', 'product design', 'brand systems', 'design leadership', 'UX design', 'enterprise design', 'startup design'],
  openGraph: {
    title: 'Martin Drexler - Strategic Design Partner for Ambitious Companies',
    description: 'Award-winning strategic design partner for funded startups and enterprises. I help companies transform their products, brands, and teams.',
    url: 'https://martindrexler.com',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Martin Drexler - Strategic Design Partner',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Martin Drexler - Strategic Design Partner',
    description: 'Award-winning strategic design partner for funded startups and enterprises.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com',
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <BreadcrumbSchema
        items={[{ name: 'Home', url: 'https://martindrexler.com' }]}
      />
      <main id="main-content" className={styles.main}>
        <Hero />
        <Proof />
        <Services />
        <FeaturedWork />
        <AboutTeaser />
        <ContactCTA />
      </main>
    </>
  )
}
