import type { Metadata } from 'next'
import Link from 'next/link'
import { CoverVideo } from '@/components/CoverVideo/CoverVideo'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'Creative Consortium — Martin Drexler',
  description:
    'Brand system, 3D motion, and web for Creative Consortium through Haimish Studio — identity built to move.',
}

const vignettes = [
  {
    heading: 'Brand as a working system',
    body:
      'The deliverable was not a logo lockup alone. Brand statements, a full brand guide (print and digital), gradients, type, and mark ratios were built as one kit — so the identity could survive web, print, and motion without reinterpretation each time.',
    figure: 'brand-guide',
  },
  {
    heading: '3D flag as the hero artifact',
    body:
      'A looping 3D flag animation carried the mark into motion. The flag is the cover for the case: cloth, light, and the logo reading as a physical object rather than a flat SVG. Motion was part of the brand argument, not an afterthought reel.',
    figure: 'flag-3d',
  },
  {
    heading: 'Web and spatial mockups',
    body:
      'Web frames and 3D bench / box mockups tested how the mark sat in product and environment. The same proportions and box ratios from the brand guide carried through so digital and physical stayed one system.',
    figure: 'web-mockups',
  },
  {
    heading: 'Identity that travels',
    body:
      'Downstream work under the Creative Consortium umbrella included vehicle and PPF marketing pieces. The brand system had to hold when the channel shifted from site hero to shop-floor print — same mark, same weight, different substrate.',
    figure: 'extensions',
  },
]

export default function CreativeConsortiumPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 02 — 2022
            <br />
            BRAND / 3D / MOTION / WEB
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-creative-consortium' }}
          >
            Creative Consortium
          </h1>
          <p className={styles.subtitle}>
            A brand system with motion at the center — identity, 3D, and web as
            one stack.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Haimish Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>
              Brand · 3D · Motion · Web · Direction
            </dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>Creative Consortium</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2022</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverMedia}`}
        style={{ viewTransitionName: 'work-hero-creative-consortium' }}
      >
        <CoverVideo
          className={styles.coverMediaVideo}
          webm="/videos/creative-consortium/cover.webm"
          mp4="/videos/creative-consortium/cover.mp4"
        />
      </figure>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            Creative Consortium needed a brand that could live in motion and on
            the web, not only in a static guide. Through Haimish Studio the work
            covered mark, brand system, 3D animation, and web — so the identity
            would read the same whether it was a flag loop or a PDF.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            A new or consolidating brand often freezes at the logo. Creative
            Consortium needed the opposite: a system that could animate, wrap a
            site, and still hold when applied to physical and promotional
            surfaces without redesigning the mark each time.
          </p>
        </div>
      </section>

      <section className={styles.vignettes} aria-labelledby="decisions-heading">
        <h2 id="decisions-heading" className={styles.vignettesTitle}>
          Design decisions
        </h2>
        <ul className={styles.vignetteList}>
          {vignettes.map((v) => (
            <li key={v.figure} className={styles.vignette}>
              <div className={styles.vignetteCopy}>
                <h3 className={styles.vignetteHeading}>{v.heading}</h3>
                <p className={styles.vignetteBody}>{v.body}</p>
              </div>
              <figure
                className={styles.vignetteFigure}
                data-status="placeholder"
              >
                <span className={styles.vignetteFigureLabel}>{v.figure}</span>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <div className={styles.sectionBody}>
          <ul className={styles.credits}>
            <li>Studio — Haimish Studio</li>
            <li>Brand / 3D / motion / web — Martin Drexler</li>
            <li>Client — Creative Consortium</li>
          </ul>
        </div>
      </section>

      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/byte">&larr; byte</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/usa-ultimate">USA Ultimate &rarr;</Link>
      </nav>
    </main>
  )
}
