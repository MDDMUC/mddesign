import React from 'react'

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization Schema for homepage
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martin Drexler',
    url: 'https://martindrexler.com',
    jobTitle: 'Strategic Design Partner',
    description: 'Award-winning strategic design partner for ambitious companies',
    image: 'https://martindrexler.com/images/portrait.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Munich',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://www.linkedin.com/in/martindrexler',
      'https://twitter.com/martindrexler',
    ],
    knowsAbout: [
      'Strategic Design',
      'Product Design',
      'Brand Systems',
      'Design Leadership',
      'UX Design',
      'Enterprise Design',
    ],
    award: [
      'German Brand Award Gold',
      'German Design Award',
      'D&AD Yellow Pencil',
      'Private Equity Wire Awards',
      'Adobe Design Achievement',
    ],
  }

  return <StructuredData data={schema} />
}

// Article Schema for case studies
export function ArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  url: string
  imageUrl: string
  datePublished?: string
  dateModified?: string
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: 'Martin Drexler',
      url: 'https://martindrexler.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Martin Drexler',
      url: 'https://martindrexler.com',
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
  }

  return <StructuredData data={schema} />
}

// Breadcrumb Schema
export function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <StructuredData data={schema} />
}

// Service Schema for services page
export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Strategic Design Services',
    provider: {
      '@type': 'Person',
      name: 'Martin Drexler',
      url: 'https://martindrexler.com',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategic Leadership',
            description:
              'Embedded Head of Design services for building teams, processes, and design culture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Design',
            description:
              'Transform complex products from research through launch with systematic UX and polished interfaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Systems',
            description:
              'Create cohesive brand identities that scale across every touchpoint and channel',
          },
        },
      ],
    },
  }

  return <StructuredData data={schema} />
}
