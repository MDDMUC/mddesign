import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../cepres/page.module.css'

export const metadata: Metadata = {
  title: 'YCA Case Study',
  description: 'Built global youth leadership program from scratch. Brand identity, digital platform, and event design. Acquired by International Olympic Academy.',
}

export default function YCAPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.category}>Brand & Digital</span>
          <h1 className={styles.title}>Young Champion Ambassador</h1>
          <p className={styles.subtitle}>
            Built global youth leadership program from scratch. Brand identity, digital platform, and event design.
          </p>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>25+</span>
              <span className={styles.metricLabel}>Cities Worldwide</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>IOA</span>
              <span className={styles.metricLabel}>Acquired By</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>Global</span>
              <span className={styles.metricLabel}>Reach</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Challenge</h2>
            <p className={styles.paragraph}>
              Young Champion Ambassador needed a complete brand identity and digital platform to establish a global youth leadership program. The challenge was creating a visual language that would resonate with young athletes while maintaining Olympic credibility.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p className={styles.paragraph}>
              We developed a comprehensive brand system including visual identity, digital platform, and event design. The design balanced youthful energy with the prestige and values of Olympic athletic achievement.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Results</h2>
            <p className={styles.paragraph}>
              The program expanded to 25+ cities worldwide and was ultimately acquired by the International Olympic Academy. The brand system successfully scaled across multiple touchpoints and cultural contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className={styles.navigation}>
        <div className={styles.navContainer}>
          <Link href="/work/keller-sports" className={styles.backLink}>
            &larr; Previous: Keller Sports
          </Link>
          <Link href="/work" className={styles.nextLink}>
            All Work &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
