import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'Young Champion Ambassador — Martin Drexler',
  description:
    'Brand, curriculum, and spatial system for a youth Olympic leadership program. Started with one cohort in Colorado Springs; now in 25+ cities across the US, Europe, and Asia. Acquired by the International Olympic Academy.',
}

const vignettes = [
  {
    heading: 'Five stakeholders, one program',
    body:
      'The YCA program had to convince students, parents, Olympic officials, government, and municipalities simultaneously — each with different motivations and different definitions of success. We built distinct personas for every gatekeeper and shaped messaging, materials, and visual treatment to land on each in turn, anchored by a single brand mark.',
    figure: 'stakeholder-personas',
  },
  {
    heading: 'Curriculum as user experience',
    body:
      'Twelve months, twelve modules — Welcome, Connection, Simplicity, Creativity, Innovation, Resilience, Reflection, Olympic Legacy, Paralympic Story, Placemaking, Capstone, Presentation. Each module\u2019s structure (What / Learn / Take Away) mirrored a digital onboarding flow: predictable rhythm, clear progression, every step earning the next. The curriculum was designed as software, not as a syllabus.',
    figure: 'curriculum-flow',
  },
  {
    heading: 'A flagship space, not a website',
    body:
      'The brand\u2019s first commitment was physical — a dedicated YCA space in Colorado Springs where every cohort began. Wayfinding glyphs (EXPLORE / DISCOVER / UNDERSTAND set vertically on the exterior), graphic system, and the visual identity all extended from the same triangular crest. Web came after.',
    figure: 'flagship-space',
  },
  {
    heading: 'Earn the torch',
    body:
      'The selection mechanic — top-performing ambassadors travel to Athens to carry the official Olympic Torch — turned the program into a destination, not a credential. The reward had to feel rare; the path to it had to feel earned. Both were visible from the application form forward.',
    figure: 'torch-relay',
  },
]

export default function YcaPage() {
  return (
    <main className={styles.main}>
      {/* §1 Header */}
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 07 — 2019–2021
            <br />
            BRAND / UX / PRODUCT / SPATIAL
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-yca' }}
          >
            Young Champion Ambassador
          </h1>
          <p className={styles.subtitle}>
            A youth Olympic leadership program designed as a system — brand, curriculum, space, and app.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Goodvoice Group (Creative Director)</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>Creative Direction · UX · Product · Brand · Spatial</dd>

            <dt className={styles.metaTerm}>Partners</dt>
            <dd className={styles.metaDef}>
              US Olympic &amp; Paralympic Museum · International Olympic Academy
            </dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2019–2021</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>
              Shipped · acquired by IOA · 25+ cities
            </dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverWayfind}`}
        style={{ viewTransitionName: 'work-hero-yca' }}
      >
        <span className={styles.coverVert}>25+ cities</span>
        <p className={styles.coverGiant}>
          Explore
          <br />
          Discover
          <br />
          Understand
        </p>
      </figure>

      {/* §3 Context */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            The Young Champion Ambassador program connects high-performing
            students to the birthplace of the Olympic Movement, then sends
            them back to their cities as ambassadors. Founded by the US
            Olympic &amp; Paralympic Museum as a single Colorado Springs
            cohort, it now runs in 25+ cities across the US, Europe, and
            Asia, and was acquired by the International Olympic Academy.
          </p>
        </div>
      </section>

      {/* §4 Problem */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            A youth program at this scale has to convince five very different
            audiences at once — students, parents, Olympic officials,
            governments, and municipalities — without diluting its identity
            for any of them. The program needed to feel rare to a teenager and
            credible to a ministry of education on the same morning.
          </p>
        </div>
      </section>

      {/* §5 Design decisions */}
      <section className={styles.sectionFull}>
        <h2 className={styles.sectionTitle}>Design decisions</h2>
        <div className={styles.vignettes}>
          {vignettes.map((v, i) => (
            <article key={v.heading} className={styles.vignette}>
              <div className={styles.vignetteText}>
                <h3 className={styles.vignetteHeading}>{v.heading}</h3>
                <p className={styles.vignetteBody}>{v.body}</p>
              </div>
              <div
                className={styles.vignetteFrame}
                data-fig={String(i + 2).padStart(2, '0')}
                data-placeholder={v.figure}
              >
                {v.figure.replace(/-/g, ' ')}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* §6 Outcome */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <div className={styles.sectionBody}>
          <p>
            YCA grew from one Colorado Springs cohort to programs in 25+
            cities across three continents. It was acquired by the
            International Olympic Academy, becoming an official program of
            the institution that custodies the Olympic Movement at its origin
            in Athens. Top-performing ambassadors carry the Olympic Torch in
            Greece.
          </p>
        </div>
      </section>

      {/* §7 Credits */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Direction</dt>
          <dd className={styles.creditDef}>Martin Drexler · Creative Director</dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Goodvoice Group</dd>

          <dt className={styles.creditTerm}>Founding partner</dt>
          <dd className={styles.creditDef}>US Olympic &amp; Paralympic Museum</dd>

          <dt className={styles.creditTerm}>Acquirer</dt>
          <dd className={styles.creditDef}>International Olympic Academy</dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2019–2021 · twelve-month curriculum</dd>
        </dl>
      </section>

      {/* §8 Pager */}
      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/keller-sports">&larr; Keller Sports</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/planetarie">Planetarie &rarr;</Link>
      </nav>
    </main>
  )
}
