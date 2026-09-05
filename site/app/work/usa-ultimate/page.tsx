import type { Metadata } from 'next'
import Link from 'next/link'
import { CoverVimeo } from '@/components/CoverVimeo/CoverVimeo'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'USA Ultimate — Martin Drexler',
  description:
    'UX and UI for usaultimate.org through Haimish Studio — competition, discovery, college, and Team USA in one digital system.',
}

const vignettes = [
  {
    heading: 'One site, many programs',
    body:
      'USA Ultimate runs national championships, college circuits, youth pathways, and Team USA. The site had to surface all of that without forcing every visitor through the same doorway — home for the curious, depth for the competitor, clarity for the parent and coach.',
    figure: 'ia-programs',
  },
  {
    heading: 'Discovery without noise',
    body:
      'Ultimate is still a sport people discover mid-conversation. The Discover experience was built to explain the game, the culture, and the entry points without talking down — photography and type doing the work that a rulebook cannot.',
    figure: 'discover',
  },
  {
    heading: 'Competition as a product',
    body:
      'Schedules, brackets, and results are the product for a large share of the audience. Those surfaces were treated as tools first — scannable, date-forward, and stable under peak championship traffic — not as marketing pages with a scoreboard bolted on.',
    figure: 'competition',
  },
  {
    heading: 'Team USA as a flagship',
    body:
      'Team USA needed a distinct register inside the same system: athletes, kits, and international competition as the emotional peak of the brand, while still linking back to pathways that grow the sport at home.',
    figure: 'team-usa',
  },
]

export default function UsaUltimatePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 03 — 2021–2022
            <br />
            UX / UI / SPORTS / DIGITAL
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-usa-ultimate' }}
          >
            USA Ultimate
          </h1>
          <p className={styles.subtitle}>
            A national governing-body digital system — competition, discovery,
            and Team USA in one stack.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Haimish Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>UX · UI · Digital product</dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>USA Ultimate</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2021–2022</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverMedia}`}
        style={{ viewTransitionName: 'work-hero-usa-ultimate' }}
      >
        <CoverVimeo
          id="1151639550"
          className={styles.coverMediaVideo}
        />
      </figure>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            USA Ultimate is the national governing body for the sport of
            Ultimate in the United States. Through Haimish Studio the work
            focused on usaultimate.org — the public face of competition,
            discovery, college programs, and Team USA — so the digital system
            matched the scale of the organization behind it.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            A governing-body site serves athletes, fans, parents, and partners
            at once. Without a clear hierarchy, championship information fights
            with recruitment and brand storytelling. The redesign had to make
            the sport legible to newcomers while keeping competition tools
            fast for people who already know the game.
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
            <li>UX / UI — Martin Drexler</li>
            <li>Client — USA Ultimate</li>
          </ul>
        </div>
      </section>

      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/creative-consortium">
          &larr; Creative Consortium
        </Link>
        <Link href="/work">Index</Link>
        <Link href="/work/space-for-curiosity">
          Space for Curiosity &rarr;
        </Link>
      </nav>
    </main>
  )
}
