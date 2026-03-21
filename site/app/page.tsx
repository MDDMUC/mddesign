'use client'

import Link from 'next/link'
import ZionBackground from '@/components/ZionBackground'
import ScrollReveal, { ScrollRevealGroup } from '@/components/ScrollReveal'
import styles from './page.module.css'

const projects = [
  {
    id: '01',
    title: 'CEPRES',
    category: 'FinTech Platform',
    year: '2023',
    href: '/work/cepres',
    description: 'Complete redesign of the leading private equity analytics platform',
  },
  {
    id: '02',
    title: 'Keller Sports',
    category: 'E-Commerce',
    year: '2022',
    href: '/work/keller-sports',
    description: 'Design transformation for Europe\'s premium sports retailer',
  },
  {
    id: '03',
    title: 'YCA',
    category: 'Brand & Digital',
    year: '2021',
    href: '/work/yca',
    description: 'Global youth leadership program brand and platform',
  },
]

const capabilities = [
  { id: '01', label: 'Strategy', description: 'Business-aligned design decisions' },
  { id: '02', label: 'Product', description: 'User-centered digital experiences' },
  { id: '03', label: 'Brand', description: 'Distinctive visual identities' },
  { id: '04', label: 'Systems', description: 'Scalable design foundations' },
]

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '25+', label: 'Design Awards' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
]

const principles = [
  {
    id: '01',
    title: 'Outcomes Over Output',
    description: 'Every design decision ties to business metrics. Success is measured by growth, not deliverables.',
  },
  {
    id: '02',
    title: 'Systems Thinking',
    description: 'Building scalable foundations rather than one-off solutions. Design systems that grow with you.',
  },
  {
    id: '03',
    title: 'Strategic Partnership',
    description: 'Deep collaboration with your team, becoming an extension of your organization.',
  },
]

const clients = [
  'NASA JPL',
  'CEPRES',
  'Keller Sports',
  'Newmont Mining',
  'JetBlue Ventures',
  'Department of Defense',
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ===== HERO SECTION ===== */}
      <section className={styles.hero}>
        <ZionBackground />

        <div className={styles.heroContainer}>
          <div className={styles.heroFrame}>
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />

            <div className={styles.heroContent}>
              <ScrollReveal delay={200} duration={1000}>
                <span className={styles.heroLabel}>Strategic Design Partner</span>
              </ScrollReveal>

              <ScrollReveal delay={400} duration={1000}>
                <h1 className={styles.heroTitle}>
                  Design that drives<br />
                  business growth
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={600} duration={1000}>
                <p className={styles.heroSubtitle}>
                  I partner with ambitious companies to transform
                  their products, brands, and teams through strategic design.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={800} duration={1000}>
                <div className={styles.heroCta}>
                  <Link href="/work" className={styles.ctaButton}>
                    View Work
                  </Link>
                  <Link href="/contact" className={styles.ctaLink}>
                    Start a Project
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={1000} duration={1000}>
            <div className={styles.statusBar}>
              <span className={styles.statusItem}>Munich, Germany</span>
              <span className={styles.statusDivider} />
              <span className={styles.statusItem}>Available for Projects</span>
              <span className={styles.statusDivider} />
              <span className={styles.statusItem}>15+ Years Experience</span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={1200} className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll</span>
          <div className={styles.scrollLine} />
        </ScrollReveal>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section className={styles.intro}>
        <div className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.introContent}>
              <span className={styles.introLabel}>About</span>
              <p className={styles.introText}>
                With over 15 years of experience leading design for startups and enterprises
                across Europe and the United States, I combine business strategy with
                exceptional craft to deliver measurable outcomes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup staggerDelay={150} className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section className={styles.projects}>
        <div className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIndex}>01</span>
              <h2 className={styles.sectionTitle}>Selected Work</h2>
            </div>
          </ScrollReveal>

          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 150}>
                <Link href={project.href} className={styles.projectRow}>
                  <span className={styles.projectIndex}>{project.id}</span>
                  <div className={styles.projectInfo}>
                    <span className={styles.projectTitle}>{project.title}</span>
                    <span className={styles.projectDescription}>{project.description}</span>
                  </div>
                  <span className={styles.projectCategory}>{project.category}</span>
                  <span className={styles.projectYear}>{project.year}</span>
                  <span className={styles.projectArrow}>→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={450}>
            <div className={styles.sectionFooter}>
              <Link href="/work" className={styles.viewAllLink}>
                View All Projects →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CAPABILITIES SECTION ===== */}
      <section className={styles.capabilities}>
        <div className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIndex}>02</span>
              <h2 className={styles.sectionTitle}>Capabilities</h2>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup staggerDelay={120} className={styles.capabilitiesGrid}>
            {capabilities.map((cap) => (
              <div key={cap.id} className={styles.capabilityCard}>
                <span className={styles.capabilityIndex}>{cap.id}</span>
                <span className={styles.capabilityLabel}>{cap.label}</span>
                <span className={styles.capabilityDescription}>{cap.description}</span>
              </div>
            ))}
          </ScrollRevealGroup>

          <ScrollReveal delay={500}>
            <p className={styles.capabilitiesText}>
              I help companies transform their products, brands, and teams
              through strategic design. My approach combines business strategy
              with exceptional craft to deliver measurable outcomes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRINCIPLES SECTION ===== */}
      <section className={styles.principles}>
        <div className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionIndex}>03</span>
              <h2 className={styles.sectionTitle}>How I Work</h2>
            </div>
          </ScrollReveal>

          <div className={styles.principlesGrid}>
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.id} delay={index * 150} direction="up">
                <div className={styles.principleCard}>
                  <div className={styles.principleHeader}>
                    <span className={styles.principleIndex}>{principle.id}</span>
                    <div className={styles.principleLine} />
                  </div>
                  <h3 className={styles.principleTitle}>{principle.title}</h3>
                  <p className={styles.principleDescription}>{principle.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS SECTION ===== */}
      <section className={styles.clients}>
        <div className={styles.sectionContainer}>
          <ScrollReveal>
            <div className={styles.clientsHeader}>
              <span className={styles.clientsLabel}>Trusted By</span>
            </div>
          </ScrollReveal>

          <ScrollRevealGroup staggerDelay={100} className={styles.clientsGrid}>
            {clients.map((client) => (
              <div key={client} className={styles.clientItem}>
                <span className={styles.clientName}>{client}</span>
              </div>
            ))}
          </ScrollRevealGroup>
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialContainer}>
          <ScrollReveal duration={1000}>
            <div className={styles.testimonialFrame}>
              <div className={styles.cornerTL} />
              <div className={styles.cornerTR} />
              <div className={styles.cornerBL} />
              <div className={styles.cornerBR} />

              <div className={styles.testimonialContent}>
                <ScrollReveal delay={200}>
                  <blockquote className={styles.testimonialQuote}>
                    &ldquo;Martin&apos;s strategic design work was instrumental in our competitive
                    positioning. He combines deep user research with exceptional craft,
                    delivering solutions that are both beautiful and functional.&rdquo;
                  </blockquote>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <div className={styles.testimonialAuthor}>
                    <span className={styles.authorName}>Ryan Cobb</span>
                    <span className={styles.authorRole}>NASA</span>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className={styles.contact}>
        <div className={styles.contactContainer}>
          <ScrollReveal duration={1000}>
            <div className={styles.contactFrame}>
              <div className={styles.cornerTL} />
              <div className={styles.cornerTR} />
              <div className={styles.cornerBL} />
              <div className={styles.cornerBR} />

              <div className={styles.contactContent}>
                <ScrollReveal delay={200}>
                  <span className={styles.contactLabel}>04</span>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <h2 className={styles.contactTitle}>
                    Ready to work together?
                  </h2>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <p className={styles.contactSubtitle}>
                    Let&apos;s discuss how strategic design can help your company achieve its goals.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <div className={styles.contactCta}>
                    <Link href="/contact" className={styles.ctaButton}>
                      Start a Conversation
                    </Link>
                    <a href="mailto:hello@martindrexler.com" className={styles.ctaLink}>
                      hello@martindrexler.com
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
