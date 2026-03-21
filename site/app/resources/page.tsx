import Link from 'next/link'
import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Design resources, insights, and tools from Martin Drexler Design Studio.',
}

const resources = [
  {
    category: 'Design Systems',
    items: [
      { title: 'Design Token Framework', description: 'A comprehensive approach to design tokens' },
      { title: 'Component Library Guide', description: 'Best practices for building scalable UI systems' },
      { title: 'Documentation Standards', description: 'How to document design decisions effectively' },
    ],
  },
  {
    category: 'Strategy',
    items: [
      { title: 'Discovery Workshop Template', description: 'Framework for stakeholder alignment' },
      { title: 'Design Sprint Guide', description: 'Rapid prototyping and validation methods' },
      { title: 'Metrics That Matter', description: 'Measuring design impact on business outcomes' },
    ],
  },
  {
    category: 'Process',
    items: [
      { title: 'Design Review Checklist', description: 'Quality assurance for design deliverables' },
      { title: 'Handoff Best Practices', description: 'Smooth transitions from design to development' },
      { title: 'Feedback Frameworks', description: 'Structured approaches to design critique' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>Resources</h1>
          <p className={styles.heroSubtitle}>
            Design resources, frameworks, and insights developed through years of strategic design work.
          </p>
        </div>
      </section>

      {/* Resources */}
      <section className={styles.resources}>
        <div className={styles.resourcesContainer}>
          {resources.map((group) => (
            <div key={group.category} className={styles.resourceGroup}>
              <h2 className={styles.groupTitle}>{group.category}</h2>
              <div className={styles.resourceList}>
                {group.items.map((item) => (
                  <div key={item.title} className={styles.resourceCard}>
                    <h3 className={styles.resourceTitle}>{item.title}</h3>
                    <p className={styles.resourceDescription}>{item.description}</p>
                    <span className={styles.resourceStatus}>Coming Soon</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Want early access?</h2>
          <p className={styles.ctaSubtitle}>
            Get notified when new resources are available.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
