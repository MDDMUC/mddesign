import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { SplinePortrait } from '@/components/SplinePortrait/SplinePortrait'

export const metadata: Metadata = {
  title: 'Studio — Martin Drexler',
  description:
    'Senior designer working across UI/UX, brand, and product systems. 25+ international design awards. Teaching design as business strategy at the University of Denver.',
}

const teaching = [
  {
    years: '2020–2022',
    institution: 'Daniels College of Business, University of Denver',
    thesis:
      'The importance of design and design frameworks as vital business strategy.',
  },
  {
    years: '2020–2022',
    institution: 'World Trade Center Denver',
    thesis: 'Design-driven companies and design as a business metric.',
  },
]

export default function StudioPage() {
  return (
    <main className={styles.main}>
      {/* Header — 7/5 split mirrors the case-study header. Title + positioning
          paragraph live in the wider track; mono meta block on the right. */}
      <header className={styles.header}>
        <div>
          <p className={`${styles.eyebrow} reveal-fade reveal-stagger-1`}>
            Studio
          </p>
          <h1 className={styles.title}>
            <span className="reveal-line-wrap">
              <span className="reveal-h1-medium reveal-stagger-3">
                Martin Drexler
              </span>
            </span>
          </h1>
          {/* Positioning paragraph — verbatim from design/BRIEF.md §3. */}
          <p
            className={`${styles.headerLede} reveal-rise reveal-stagger-5`}
          >
            Designer working across UI/UX, brand, and product systems.
            Selected work has scaled a $45T fintech platform (CEPRES), rebuilt
            a €100m commerce business (Keller Sports), and shaped the visual
            identity of the Young Champion Ambassador program (Olympic
            Movement, 25+ cities). 25+ international design awards including
            D&amp;AD Yellow Pencil, German Brand Award Gold, and Red Dot. Has
            taught design as business strategy at the University of Denver and
            the World Trade Center Denver.
          </p>
        </div>
        <aside className={`${styles.meta} reveal-rise reveal-stagger-6`}>
          <div className={styles.portrait}>
            <SplinePortrait
              scene="https://prod.spline.design/u-PUnfI6smdVUTTd/scene.splinecode"
              ariaLabel="Martin Drexler portrait"
            />
          </div>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Accepting projects</dd>

            <dt className={styles.metaTerm}>Based</dt>
            <dd className={styles.metaDef}>Munich · Colorado Springs</dd>

            <dt className={styles.metaTerm}>Contact</dt>
            <dd className={styles.metaDef}>
              <a href="mailto:hello@martindrexler.com">hello@martindrexler.com</a>
            </dd>
          </dl>
        </aside>
      </header>

      <section
        className={`${styles.section} reveal-rise reveal-stagger-7`}
      >
        <h2 className={styles.sectionTitle}>Practice</h2>
        <div className={styles.body}>
          <p>
            Martin Drexler Design Studio is the freelance practice. Larger
            collaborative engagements ship through Haimish Studio in Colorado
            Springs, where Martin is founding partner. Past in-house tenure at
            Keller Sports (Munich, Head of Design 2014–16) and Goodvoice Group
            (Colorado Springs, Creative Director 2019–21).
          </p>
        </div>
      </section>

      <section
        className={`${styles.section} reveal-rise reveal-stagger-8`}
      >
        <h2 className={styles.sectionTitle}>Teaching</h2>
        <dl className={styles.teaching}>
          {teaching.map((t) => (
            <div key={t.institution} className={styles.teachingRow}>
              <dt className={styles.teachingYear}>{t.years}</dt>
              <dd className={styles.teachingDef}>
                <span className={styles.teachingInstitution}>
                  {t.institution}
                </span>
                <span className={styles.teachingThesis}>{t.thesis}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className={`${styles.section} reveal-rise reveal-stagger-9`}
      >
        <h2 className={styles.sectionTitle}>Clients</h2>
        <div className={styles.body}>
          <p>
            Selected clients across fifteen years: BMW, Red Bull, Peak
            Performance, the US Space Force, the US Air Force, USA Wrestling,
            the US Olympic &amp; Paralympic Museum, the International Olympic
            Academy, CEPRES, Keller Sports, Planetarie (acquired by Tanasi),
            and byte.
          </p>
        </div>
      </section>

      <section
        className={`${styles.section} reveal-rise`}
        style={{ animationDelay: '1400ms' }}
      >
        <h2 className={styles.sectionTitle}>Recognition</h2>
        <div className={styles.body}>
          <p>
            25+ international design awards. Headlines include the
            D&amp;AD Yellow Pencil, the German Brand Award in Gold, the Red
            Dot Design Award, the German Digital Innovation Award, two German
            Design Awards, the Anton Award, six Private Equity Wire Awards,
            five Shop Usability Awards, two Internet World Business Shop
            Awards, and two Swiss eCommerce Awards.
          </p>
        </div>
      </section>

      {/* Credentials index — Plex Mono, year · award · project. Full-width.
          Pattern: Pentagram-style prose above + factual list below. */}
      <section
        className={`${styles.awardsSection} reveal-rise`}
        style={{ animationDelay: '1600ms' }}
      >
        <h2 className={styles.sectionTitle}>Index</h2>
        <dl className={styles.awards}>
          {[
            ['2018–2020', 'Private Equity Wire — Best of category × 6', 'CEPRES'],
            ['2018–2020', 'Adobe UI Excellence Showcase', 'CEPRES'],
            ['2014–2016', 'Shop Usability Award × 5', 'Keller Sports'],
            ['2014–2016', 'Internet World Business Shop Award × 2', 'Keller Sports'],
            ['2014–2016', 'Swiss eCommerce Award × 2', 'Keller Sports'],
            ['2014–2016', 'German Brand Award', 'Keller Sports'],
            ['2014–2016', 'German Design Award × 2', 'Keller Sports'],
            ['2014–2016', 'Anton Award', 'Keller Sports'],
            ['2014–2016', 'Adobe UI · Adobe Xd Showcase', 'Keller Sports'],
            ['2020', 'CO Cup — Best Tincture · Best Topical (3rd)', 'Planetarie'],
            ['—', 'D&AD Yellow Pencil', 'Project under NDA'],
            ['—', 'Red Dot Design Award', 'Project under NDA'],
            ['—', 'German Digital Innovation Award', 'Project under NDA'],
          ].map(([year, award, project], i) => (
            <div key={i} className={styles.awardRow}>
              <dt className={styles.awardYear}>{year}</dt>
              <dd className={styles.awardName}>{award}</dd>
              <dd className={styles.awardProject}>{project}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav
        className={`${styles.pager} reveal-rise`}
        aria-label="Page navigation"
        style={{ animationDelay: '1800ms' }}
      >
        <Link href="/work">&larr; Work</Link>
        <Link href="/contact">Contact &rarr;</Link>
      </nav>
    </main>
  )
}
