import Link from 'next/link'
import styles from './page.module.css'

const projects = [
  {
    id: '01',
    title: 'CEPRES',
    category: 'FinTech Platform',
    year: '2023',
    href: '/work/cepres',
  },
  {
    id: '02',
    title: 'Keller Sports',
    category: 'E-Commerce',
    year: '2022',
    href: '/work/keller-sports',
  },
  {
    id: '03',
    title: 'YCA',
    category: 'Brand & Digital',
    year: '2021',
    href: '/work/yca',
  },
]

const capabilities = [
  { id: '01', label: 'Strategy' },
  { id: '02', label: 'Product' },
  { id: '03', label: 'Brand' },
  { id: '04', label: 'Systems' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          {/* Geometric Frame */}
          <div className={styles.heroFrame}>
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />

            <div className={styles.heroContent}>
              <span className={styles.heroLabel}>Strategic Design</span>
              <h1 className={styles.heroTitle}>
                Design that drives<br />
                business growth
              </h1>
              <p className={styles.heroSubtitle}>
                I partner with ambitious companies to transform
                their products, brands, and teams through strategic design.
              </p>

              <div className={styles.heroCta}>
                <Link href="/work" className={styles.ctaButton}>
                  View Work
                </Link>
                <Link href="/contact" className={styles.ctaLink}>
                  Start a Project
                </Link>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className={styles.statusBar}>
            <span className={styles.statusItem}>Munich, Germany</span>
            <span className={styles.statusDivider} />
            <span className={styles.statusItem}>Available for Projects</span>
            <span className={styles.statusDivider} />
            <span className={styles.statusItem}>15+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIndex}>01</span>
            <h2 className={styles.sectionTitle}>Selected Work</h2>
          </div>

          <div className={styles.projectList}>
            {projects.map((project) => (
              <Link key={project.id} href={project.href} className={styles.projectRow}>
                <span className={styles.projectIndex}>{project.id}</span>
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectCategory}>{project.category}</span>
                <span className={styles.projectYear}>{project.year}</span>
                <span className={styles.projectArrow}>→</span>
              </Link>
            ))}
          </div>

          <div className={styles.sectionFooter}>
            <Link href="/work" className={styles.viewAllLink}>
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className={styles.capabilities}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionIndex}>02</span>
            <h2 className={styles.sectionTitle}>Capabilities</h2>
          </div>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <div key={cap.id} className={styles.capabilityCard}>
                <span className={styles.capabilityIndex}>{cap.id}</span>
                <span className={styles.capabilityLabel}>{cap.label}</span>
              </div>
            ))}
          </div>

          <p className={styles.capabilitiesText}>
            I help companies transform their products, brands, and teams
            through strategic design. My approach combines business strategy
            with exceptional craft to deliver measurable outcomes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactFrame}>
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />

            <div className={styles.contactContent}>
              <span className={styles.contactLabel}>03</span>
              <h2 className={styles.contactTitle}>
                Ready to work together?
              </h2>
              <Link href="/contact" className={styles.ctaButton}>
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
