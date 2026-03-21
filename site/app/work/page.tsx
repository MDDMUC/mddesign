import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected projects showcasing strategic design work for startups and enterprises. Award-winning work for CEPRES, Keller Sports, YCA, and more.',
}

const featuredProjects = [
  {
    id: 'cepres',
    title: 'CEPRES',
    category: 'FinTech Platform',
    description: 'Complete redesign of the leading private equity analytics platform serving 1,200+ institutional investors globally.',
    metrics: '6 International Design Awards',
    href: '/work/cepres',
    featured: true,
  },
  {
    id: 'keller-sports',
    title: 'Keller Sports',
    category: 'E-Commerce',
    description: 'Led design transformation across 3 full relaunches for Europe\'s leading premium sports retailer.',
    metrics: 'German Brand Award Gold',
    href: '/work/keller-sports',
    featured: true,
  },
  {
    id: 'yca',
    title: 'Young Champion Ambassador',
    category: 'Brand & Digital',
    description: 'Built global youth leadership program from scratch. Brand identity, digital platform, and event design.',
    metrics: 'Acquired by IOA · 25+ Cities',
    href: '/work/yca',
    featured: true,
  },
]

const otherProjects = [
  {
    id: 'planetarie',
    title: 'Planetarie',
    category: 'SaaS Platform',
    description: 'Product design for AI-powered sustainability platform.',
    metrics: 'Acquired 2023',
  },
  {
    id: 'ghostsignal',
    title: 'GHOSTSignal',
    category: 'Defense Tech',
    description: 'Co-founder · Design leadership for next-gen defense systems.',
    metrics: 'In Development',
  },
  {
    id: 'haimish',
    title: 'Haimish Studio',
    category: 'Agency',
    description: 'Partner · Strategic design for ambitious companies.',
    metrics: 'Ongoing',
  },
  {
    id: 'nasa',
    title: 'NASA JPL',
    category: 'Research Interface',
    description: 'Data visualization and interface design for mission systems.',
    metrics: 'Confidential',
  },
]

export default function WorkPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Selected Work</h1>
          <p className={styles.heroSubtitle}>
            A collection of strategic design projects for startups and enterprises.
            Each project represents a partnership focused on driving measurable business outcomes.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featured}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Featured Projects</span>
          </div>
          <div className={styles.projectList}>
            {featuredProjects.map((project, index) => (
              <Link key={project.id} href={project.href} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.projectImagePlaceholder}>
                    <span>{project.title}</span>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <span className={styles.projectMetrics}>{project.metrics}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className={styles.other}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Other Projects</span>
          </div>
          <div className={styles.otherGrid}>
            {otherProjects.map((project) => (
              <div key={project.id} className={styles.otherCard}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.otherTitle}>{project.title}</h3>
                <p className={styles.otherDescription}>{project.description}</p>
                <span className={styles.projectMetrics}>{project.metrics}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Have a project in mind?</h2>
          <p className={styles.ctaSubtitle}>
            Let&apos;s discuss how strategic design can help your company achieve its goals.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
