import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'CEPRES — Martin Drexler',
  description:
    'Designing the user experience of the world\u2019s leading private market investment platform. Seven iterations, 76 user roles distilled into 7 use-case scenarios, six Private Equity Wire awards.',
}

const vignettes = [
  {
    heading: '76 roles into 7 scenarios',
    body:
      'The platform served 76 distinct user roles — institutional investors, fund managers, data analysts — each needing a different cut of the same dataset. Sorting personas into seven broader use-case scenarios let the dashboard preselect default filters per scenario. Personalization moved to the entry point instead of being deferred to a settings page nobody opens.',
    figure: 'persona-scenarios',
  },
  {
    heading: 'Tier the filters',
    body:
      'PE.Analyzer exposed 125,000 filter options as a flat list — every option on equal footing, paralysis by default. The redesign tiered them: scenario presets at the top, common refinements one step in, the full taxonomy two steps deep. No options were removed; cognitive load was.',
    figure: 'filter-tiering',
  },
  {
    heading: 'Dashboards composed by users',
    body:
      'A seven-persona system fails at scale because real users straddle multiple roles. The dashboard layer let users drag-arrange data widgets per analysis they cared about — branded, persistent, shareable. The interface met institutional users where their existing workflows already lived.',
    figure: 'custom-dashboard',
  },
  {
    heading: 'Seven iterations, gating',
    body:
      'Each version was tested with market experts, fund managers, and real users — not as accessory research but as the gating criterion for shipping. The seventh iteration is what shipped; the first six are why it works.',
    figure: 'iteration-process',
  },
]

export default function CepresPage() {
  return (
    <main className={styles.main}>
      {/* §1 Header — title + mono metadata block */}
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 01 — 2018–2020
            <br />
            UX / UI / PRODUCT / FINTECH
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-cepres' }}
          >
            CEPRES
          </h1>
          <p className={styles.subtitle}>
            The world&rsquo;s leading private market investment platform.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Martin Drexler Design Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>UX · UI · Branding · Product</dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>CEPRES</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2018–2020</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>

            <dt className={styles.metaTerm}>Awards</dt>
            <dd className={styles.metaDef}>
              Private Equity Wire &times;6 · Adobe UI Excellence
            </dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverField}`}
        style={{ viewTransitionName: 'work-hero-cepres' }}
      >
        <p className={styles.coverStat}>
          <strong>76→7</strong>
          <span>user roles distilled into scenarios</span>
        </p>
      </figure>

      {/* §3 Context */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            In the early 2000s, the idea of large-scale data exchange in
            private markets was unfathomable. CEPRES recognized that investors
            needed to look through fund performance into the underlying deal
            and asset performance to make better decisions. The platform began
            by providing institutional investors granular, actionable private
            market data — the kind nobody else was willing to expose.
          </p>
        </div>
      </section>

      {/* §4 Problem */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            PE.Analyzer offered unparalleled access to granular data — and no
            efficient way to filter, analyze, or output what mattered to the
            specific user. The platform was capable; the surface was opaque.
          </p>
        </div>
      </section>

      {/* §5 Design decisions — vignettes nested inside the section so the
          heading owns its content (design-critic 2026-06-10 fix). */}
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
            CEPRES is now the largest private market investment ecosystem on
            record — $45T asset value, 6,000 LPs and GPs, 125,000 PE-backed
            companies, 12,000 funds managed. The company grew from 15
            employees in Munich to 120+ across New York, Singapore, Denver,
            and London during the engagement. ILPA selected CEPRES as its
            best-practice due-diligence partner.
          </p>
        </div>
      </section>

      {/* §7 Credits */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Design</dt>
          <dd className={styles.creditDef}>Martin Drexler</dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Martin Drexler Design Studio</dd>

          <dt className={styles.creditTerm}>Client</dt>
          <dd className={styles.creditDef}>CEPRES in-house product and engineering teams</dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2018–2020 · 7 platform iterations</dd>
        </dl>
      </section>

      {/* §8 Pager */}
      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work">&larr; Index</Link>
        <Link href="/work/keller-sports">Keller Sports &rarr;</Link>
      </nav>
    </main>
  )
}
