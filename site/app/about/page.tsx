import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../../components/Button/Button'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Martin Drexler - Award-Winning Strategic Design Partner',
  description: 'Strategic design partner with 25+ international design awards including German Brand Award Gold. 15+ years leading design for startups and enterprises across Europe and the US.',
  keywords: ['Martin Drexler', 'design leadership', 'strategic design', 'design awards', 'enterprise design', 'startup design consultant'],
  openGraph: {
    title: 'About Martin Drexler - Award-Winning Strategic Design Partner',
    description: 'Strategic design partner with 25+ international design awards. 15+ years leading design for startups and enterprises.',
    url: 'https://martindrexler.com/about',
    siteName: 'Martin Drexler Design',
    images: [{
      url: '/images/og-about.jpg',
      width: 1200,
      height: 630,
      alt: 'Martin Drexler - About',
    }],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Martin Drexler - Award-Winning Strategic Design Partner',
    description: 'Strategic design partner with 25+ international design awards. 15+ years leading design for startups and enterprises.',
    images: ['/images/og-about.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://martindrexler.com/about',
  },
}

const testimonials = [
  {
    quote: "Martin's strategic design work was instrumental in NASA's competitive positioning. He combines deep user research with exceptional craft, delivering solutions that are both beautiful and functional. His ability to translate complex requirements into intuitive interfaces is unmatched.",
    author: "Ryan Cobb",
    role: "NASA",
    company: "National Aeronautics and Space Administration"
  },
  {
    quote: "Working with Martin elevated our entire design approach. He doesn't just execute—he thinks strategically about the business problem first, then crafts solutions that drive real outcomes. His work on our platform directly contributed to our growth.",
    author: "Dr. Tyler Phillips",
    role: "Former USAF, VP Design",
    company: "JetBlue Technology Ventures"
  },
  {
    quote: "Martin brought a level of strategic thinking and design excellence we hadn't seen before. He quickly understood our complex stakeholder landscape and delivered a brand system that works across every touchpoint. The results speak for themselves.",
    author: "Mark Wright",
    role: "Chief Digital Officer",
    company: "Department of Defense Systems"
  },
  {
    quote: "We needed someone who could think like a business leader and execute like a world-class designer. Martin delivered both. His work helped us modernize our digital presence and better communicate our value to investors and partners.",
    author: "Joe Murray",
    role: "VP Corporate Development",
    company: "Newmont Mining Corporation"
  }
]

const awards = [
  'German Brand Award Gold',
  'German Brand Award',
  'German Brand Award',
  'German Design Award',
  'German Design Award',
  'D&AD Yellow Pencil',
  'Private Equity Wire 2019',
  'Private Equity Wire 2019',
  'Private Equity Wire 2020',
  'Private Equity Wire 2020',
  'Private Equity Wire 2018',
  'Private Equity Wire 2019',
  'Adobe Design Achievement',
  'Adobe UI Showcase',
  'Adobe Xd Showcase',
  'Anton Award',
  'Shop Usability Award',
  'Shop Usability Award',
  'Shop Usability Award',
  'Shop Usability Award',
  'Shop Usability Award',
  'Internet World Business',
  'Internet World Business',
  'Swiss eCommerce Award',
  'Swiss eCommerce Award',
  'ILPA Recognition'
]

const experience = [
  {
    period: '2025 - PRESENT',
    role: 'Co-Founder',
    company: 'GHOSTSignal',
    description: 'Building next-generation design and technology solutions.',
    current: true
  },
  {
    period: '2021 - PRESENT',
    role: 'Partner',
    company: 'Haimish Studio',
    description: 'Strategic design partnership for ambitious companies.',
    current: true
  },
  {
    period: '2016 - PRESENT',
    role: 'Principal Designer',
    company: 'Martin Drexler Design Studio',
    description: 'Independent strategic design consulting for startups and enterprises. Work includes CEPRES (6 awards), Planetarie (acquired), YCA (acquired by IOA), and 50+ other clients.',
    current: false
  },
  {
    period: '2019 - 2021',
    role: 'Creative Director',
    company: 'Young Champion Ambassador & Goodvoice Group',
    description: 'Built global youth leadership program from scratch. Now in 25+ cities, acquired by International Olympic Academy.',
    current: false
  },
  {
    period: '2014 - 2016',
    role: 'Head of Design',
    company: 'Keller Sports',
    description: 'Led complete design transformation. 3 full relaunches, 13 international awards including German Brand Award Gold.',
    current: false
  },
  {
    period: '2012 - 2014',
    role: 'Senior Designer',
    company: 'Various Agencies & Clients',
    description: 'Design consulting for BMW, Red Bull, Peak Performance, and other premium brands.',
    current: false
  }
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* About Hero */}
      <section className={styles.aboutHero}>
        <div className={styles.heroInner}>
          <div className={styles.portraitColumn}>
            <div className={styles.portraitContainer}>
              <Image
                src="/images/portrait-placeholder.svg"
                alt="Martin Drexler - Strategic Design Partner"
                width={400}
                height={500}
                className={styles.portrait}
              />
            </div>
          </div>
          <div className={styles.contentColumn}>
            <div className={styles.pageLabel}>ABOUT</div>
            <h1 className={styles.pageTitle}>About Martin</h1>
            <p className={styles.introduction}>
              I&apos;m a strategic design partner for ambitious companies. With 15+ years leading design for startups and enterprises across Europe and the United States, I combine business strategy with award-winning execution to help companies transform their products, brands, and teams.
            </p>
            <div className={styles.rolesContainer}>
              <div className={styles.roleItem}>
                <span className={styles.roleTitle}>Co-Founder</span>
                <span className={styles.roleCompany}>GHOSTSignal</span>
              </div>
              <div className={styles.roleItem}>
                <span className={styles.roleTitle}>Partner</span>
                <span className={styles.roleCompany}>Haimish Studio</span>
              </div>
            </div>
            <div className={styles.location}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.5a3.5 3.5 0 00-3.5 3.5c0 2.625 3.5 7 3.5 7s3.5-4.375 3.5-7A3.5 3.5 0 007 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="5" r="1" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <span>Munich, Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className={styles.experienceSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeader}>Experience</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineLine} />
            {experience.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={`${styles.timelineDot} ${item.current ? styles.currentDot : ''}`} />
                <div className={styles.dateRange}>{item.period}</div>
                <h3 className={styles.roleTitle}>{item.role}</h3>
                <div className={styles.companyLocation}>{item.company}</div>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Showcase */}
      <section className={styles.awardsSection}>
        <div className={styles.awardsInner}>
          <h2 className={styles.awardsHeader}>25+ International Design Awards</h2>
          <p className={styles.awardsSubheader}>
            Recognition for excellence in design strategy and execution
          </p>
          <div className={styles.awardsGrid}>
            {awards.map((award, index) => (
              <div key={index} className={styles.awardBadge}>
                <div className={styles.badgeImage}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M24 4L28.854 18.854L44 24L28.854 29.146L24 44L19.146 29.146L4 24L19.146 18.854L24 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.badgeLabel}>{award}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyInner}>
          <h2 className={styles.sectionHeader}>How I Work</h2>
          <p className={styles.leadParagraph}>
            Design is business strategy, not decoration.
          </p>
          <p className={styles.bodyParagraph}>
            I believe in measurable outcomes, not just beautiful pixels. Every design decision should tie back to business goals and user needs. The best work happens when strategy and craft are inseparable—when you can think at the executive level and execute at the highest quality.
          </p>
          <p className={styles.bodyParagraph}>
            My approach is collaborative and embedded. I work alongside your team, understand your business deeply, and become an extension of your organization. Whether it&apos;s a 2-month project or a 12-month partnership, I focus on building systems and foundations that scale with your company.
          </p>
          <div className={styles.principlesContainer}>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>01</div>
              <h3 className={styles.principleTitle}>Outcomes Over Output</h3>
              <p className={styles.principleDescription}>
                Every design decision ties to business metrics. I measure success by growth, not deliverables.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>02</div>
              <h3 className={styles.principleTitle}>Systems Thinking</h3>
              <p className={styles.principleDescription}>
                I build scalable foundations, not one-off solutions. Design systems that grow with you.
              </p>
            </div>
            <div className={styles.principleCard}>
              <div className={styles.principleNumber}>03</div>
              <h3 className={styles.principleTitle}>Strategic Partnership</h3>
              <p className={styles.principleDescription}>
                I embed with your team, understand your business, and become an extension of your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsInner}>
          <h2 className={styles.sectionHeader}>What Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <blockquote className={styles.quote}>
                  {testimonial.quote}
                </blockquote>
                <div className={styles.attribution}>
                  <div className={styles.authorName}>{testimonial.author}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                  <div className={styles.authorCompany}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className={styles.personalSection}>
        <div className={styles.personalInner}>
          <div className={styles.personalLabel}>BEYOND WORK</div>
          <p className={styles.personalNote}>
            When I&apos;m not designing, you&apos;ll find me training for my next Ironman or volunteering with Olympic youth programs. I bring the same dedication and discipline to every project I take on.
          </p>
        </div>
      </section>

      {/* About CTA */}
      <section className={styles.aboutCTA}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeadline}>Ready to work together?</h2>
          <p className={styles.ctaSubhead}>
            Let&apos;s discuss how strategic design can help your company grow.
          </p>
          <Button variant="primary" href="/contact">
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  )
}
