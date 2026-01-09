import React from 'react'
import styles from './page.module.css'
import Button from '../../components/Button/Button'
import { ServiceSchema, BreadcrumbSchema } from '@/components/StructuredData/StructuredData'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design Services - Strategic Leadership, Product Design & Brand Systems',
  description: 'Strategic Leadership, Product Design, and Brand Systems for ambitious companies. Partner with funded startups and enterprises at critical inflection points.',
  keywords: ['design services', 'strategic leadership', 'product design', 'brand systems', 'design consulting', 'startup design', 'enterprise design'],
  openGraph: {
    title: 'Design Services - Strategic Leadership, Product Design & Brand Systems',
    description: 'Strategic Leadership, Product Design, and Brand Systems for ambitious companies at critical inflection points.',
    url: 'https://martindrexler.com/services',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-services.jpg',
      width: 1200,
      height: 630,
      alt: 'Martin Drexler Design Services',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Services - Strategic Leadership, Product Design & Brand Systems',
    description: 'Strategic Leadership, Product Design, and Brand Systems for ambitious companies at critical inflection points.',
    images: ['/images/og-services.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/services',
  },
}

const services = [
  {
    number: '01',
    title: 'Strategic Leadership',
    engagement: {
      duration: '6-12 months',
      investment: '$20-40K/month retainer'
    },
    description: 'Act as your embedded Head of Design, building teams, processes, and design culture from the inside. I work alongside your leadership to define design strategy, hire and mentor designers, establish design operations, and ensure design has a seat at the executive table. This is for companies who need senior design leadership but aren\'t ready for a full-time executive hire.',
    whoItsFor: [
      'Funded startups scaling from seed to Series B',
      'Enterprises launching new product lines',
      'Companies without senior design leadership'
    ],
    whatYouGet: [
      'Design strategy and roadmap',
      'Team building and hiring support',
      'Design operations and processes',
      'Executive stakeholder alignment',
      'Hands-on design leadership',
      'Design system foundations'
    ],
    example: {
      name: 'Keller Sports',
      description: 'Head of Design, 2 years',
      link: '/work/keller-sports'
    }
  },
  {
    number: '02',
    title: 'Product Design',
    engagement: {
      duration: '2-6 months',
      investment: 'Project or retainer basis'
    },
    description: 'Transform complex products from research through launch with systematic UX and polished interfaces. I specialize in enterprise software, data-heavy applications, and products that require deep strategic thinking. Every design decision ties back to user needs and business goals.',
    whoItsFor: [
      'B2B SaaS companies with complex products',
      'Fintech and data platforms',
      'Companies redesigning core products'
    ],
    whatYouGet: [
      'User research and insights',
      'Information architecture',
      'UX strategy and flows',
      'UI design and prototypes',
      'Design system components',
      'Developer handoff documentation'
    ],
    example: {
      name: 'CEPRES',
      description: '6 awards, $45T platform',
      link: '/work/cepres'
    }
  },
  {
    number: '03',
    title: 'Brand Systems',
    engagement: {
      duration: '2-4 months',
      investment: 'Project basis'
    },
    description: 'Create cohesive brand identities that scale across every touchpoint and channel. I build brand systems, not just logos—complete visual languages with guidelines, templates, and components that grow with your company. From strategy through execution, every element reinforces your market position.',
    whoItsFor: [
      'Startups defining their identity',
      'Companies rebranding or repositioning',
      'Organizations scaling their brand'
    ],
    whatYouGet: [
      'Brand strategy and positioning',
      'Visual identity system',
      'Logo and mark design',
      'Typography and color systems',
      'Brand guidelines documentation',
      'Template systems and assets'
    ],
    example: {
      name: 'YCA Program',
      description: 'Built from scratch, acquired by IOA',
      link: '/work/yca'
    }
  }
]

const processSteps = [
  {
    number: '1',
    title: 'Discovery',
    description: 'Understand your business, users, and goals through research and stakeholder interviews.'
  },
  {
    number: '2',
    title: 'Strategy',
    description: 'Define the approach, prioritize opportunities, and align on success metrics.'
  },
  {
    number: '3',
    title: 'Design',
    description: 'Create solutions through iterative design, testing, and refinement.'
  },
  {
    number: '4',
    title: 'Build',
    description: 'Partner with engineering to bring designs to life with precision.'
  },
  {
    number: '5',
    title: 'Measure',
    description: 'Track outcomes, gather feedback, and optimize for continuous improvement.'
  }
]

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://martindrexler.com' },
          { name: 'Services', url: 'https://martindrexler.com/services' },
        ]}
      />
      <div className={styles.page}>
      {/* Services Hero */}
      <section className={styles.servicesHero}>
        <div className={styles.heroInner}>
          <div className={styles.pageLabel}>SERVICES</div>
          <h1 className={styles.pageTitle}>How I Can Help</h1>
          <p className={styles.introduction}>
            I partner with ambitious companies at critical inflection points—launches, pivots, scale-ups, and transformations. Whether you need strategic leadership, product design, or brand systems, I bring the same rigor and craft to every engagement.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`${styles.serviceSection} ${index % 2 === 0 ? styles.altBackground : ''}`}
        >
          <div className={styles.serviceInner}>
            <div className={styles.serviceLeft}>
              <div className={styles.iconContainer}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  {index === 0 && (
                    <path d="M16 8v8l6 6M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                  {index === 1 && (
                    <path d="M4 8h24M4 16h24M4 24h24M8 4v24M24 4v24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                  {index === 2 && (
                    <path d="M16 4l4 8h8l-6 6 2 8-8-4-8 4 2-8-6-6h8l4-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  )}
                </svg>
              </div>
              <div className={styles.serviceNumber}>{service.number}</div>
              <h2 className={styles.serviceTitle}>{service.title}</h2>
              <div className={styles.engagementDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Duration:</span>
                  <span className={styles.detailValue}>{service.engagement.duration}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Investment:</span>
                  <span className={styles.detailValue}>{service.engagement.investment}</span>
                </div>
              </div>
            </div>

            <div className={styles.serviceRight}>
              <p className={styles.serviceDescription}>{service.description}</p>

              <div className={styles.subsection}>
                <div className={styles.subsectionLabel}>WHO IT&apos;S FOR</div>
                <div className={styles.listContainer}>
                  {service.whoItsFor.map((item, i) => (
                    <div key={i} className={styles.listItem}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.subsection}>
                <div className={styles.subsectionLabel}>WHAT YOU GET</div>
                <div className={styles.listContainer}>
                  {service.whatYouGet.map((item, i) => (
                    <div key={i} className={styles.listItem}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {service.example && (
                <a href={service.example.link} className={styles.exampleLink}>
                  <div className={styles.exampleThumbnail}>
                    <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                      <rect x="1" y="1" width="58" height="38" stroke="currentColor" strokeWidth="1.5"/>
                      <rect x="12" y="10" width="36" height="6" fill="currentColor" opacity="0.3"/>
                      <rect x="12" y="20" width="28" height="4" fill="currentColor" opacity="0.2"/>
                    </svg>
                  </div>
                  <div className={styles.exampleText}>
                    <div className={styles.exampleLabel}>SEE THIS IN ACTION</div>
                    <div className={styles.exampleName}>{service.example.name}</div>
                    <div className={styles.exampleDescription}>{service.example.description}</div>
                  </div>
                  <svg className={styles.exampleArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Process Timeline */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <h2 className={styles.sectionHeader}>How We Work Together</h2>
          <div className={styles.processTimeline}>
            <div className={styles.timelineLine} />
            {processSteps.map((step, index) => (
              <div key={index} className={styles.processStep}>
                <div className={styles.stepNumber}>
                  <span>{step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className={styles.servicesCTA}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>Ready to start?</h2>
          <p className={styles.ctaSubhead}>
            Every engagement starts with a conversation. Let&apos;s discuss your challenges and see if we&apos;re a good fit.
          </p>
          <Button variant="primary" href="/contact">
            Schedule a Call
          </Button>
          <p className={styles.ctaAlternative}>
            or email hello@martindrexler.com
          </p>
        </div>
      </section>
      </div>
    </>
  )
}
