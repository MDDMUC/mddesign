import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '../cepres/page.module.css'

export const metadata: Metadata = {
  title: 'Keller Sports Case Study',
  description: 'Led design transformation across 3 full relaunches for Europe\'s leading premium sports retailer. German Brand Award Gold.',
}

export default function KellerSportsPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.category}>E-Commerce</span>
          <h1 className={styles.title}>Keller Sports</h1>
          <p className={styles.subtitle}>
            Led design transformation across 3 full relaunches for Europe&apos;s leading premium sports retailer.
          </p>
          <div className={styles.metrics}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>13</span>
              <span className={styles.metricLabel}>Design Awards</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>8.1M</span>
              <span className={styles.metricLabel}>Active Users</span>
            </div>
            <div className={styles.metric}>
              <span className={styles.metricValue}>3</span>
              <span className={styles.metricLabel}>Full Relaunches</span>
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
              Keller Sports needed to transform their digital presence to compete with major players in the premium sports retail space. The challenge was maintaining their premium positioning while improving conversion rates and user experience across mobile and desktop.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Approach</h2>
            <p className={styles.paragraph}>
              We implemented a modular design system that allowed for rapid deployment of marketing campaigns while maintaining core performance metrics. Mobile-first design ensured optimal experience across all devices.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>The Results</h2>
            <p className={styles.paragraph}>
              The redesign earned the German Brand Award Gold and 12 additional international awards. The platform now serves 8.1 million active users with significantly improved engagement and conversion metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className={styles.navigation}>
        <div className={styles.navContainer}>
          <Link href="/work/cepres" className={styles.backLink}>
            &larr; Previous: CEPRES
          </Link>
          <Link href="/work/yca" className={styles.nextLink}>
            Next: YCA &rarr;
          </Link>
        </div>
      </section>
    </div>
  )
}
