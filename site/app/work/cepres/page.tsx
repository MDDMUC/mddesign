import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'CEPRES Case Study',
  description: 'Complete redesign of the leading private equity analytics platform serving 1,200+ institutional investors globally. 6 international design awards.',
}

export default function CepresPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.category}>FinTech Platform</span>
          <h1 className={styles.title}>CEPRES</h1>
          <p className={styles.subtitle}>
            Complete redesign of the leading private equity analytics platform serving 1,200+ institutional investors globally.
          </p>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>6</span>
              <span className={styles.metricLabel}>Design Awards</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>1,200+</span>
              <span className={styles.metricLabel}>Institutional Investors</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>12TB+</span>
              <span className={styles.metricLabel}>Data Visualized</span>
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
              CEPRES is the world&apos;s largest private capital investment analytics platform. They needed a complete redesign of their complex data visualization and analytics interface to better serve institutional investors managing billions in private equity assets.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p className={styles.paragraph}>
              We conducted extensive user research with portfolio managers and analysts to understand their workflows. The redesign focused on simplifying complex data interactions while maintaining the depth of analysis capabilities that power users required.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Results</h2>
            <p className={styles.paragraph}>
              The new platform received 6 international design awards including recognition from Private Equity Wire and German Design Award. User satisfaction scores increased significantly, and the platform now serves as the industry standard for private capital analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className={styles.navigation}>
        <div className={styles.navContainer}>
          <Link href="/work" className={styles.backLink}>
            &larr; Back to Work
          </Link>
          <Link href="/work/keller-sports" className={styles.nextLink}>
            Next: Keller Sports &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
