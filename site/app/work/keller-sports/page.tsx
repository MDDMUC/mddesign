import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'Keller Sports — Martin Drexler',
  description:
    'Two years as Head of Design rebuilding a €100m sports commerce business. Identity through checkout, in-house photography studio, three full shop relaunches, 13 international awards.',
}

const vignettes = [
  {
    heading: 'Three full shop relaunches',
    body:
      'Two years of in-house tenure made every iteration testable in production. Three complete shop relaunches shipped — responsive desktop and mobile layouts, a backend and CMS rebuilt from scratch, content architecture that put curated stories alongside product catalogues. Each launch\u2019s data trained the next.',
    figure: 'shop-relaunches',
  },
  {
    heading: 'Premium positioning by photograph',
    body:
      'Differentiation against larger sports retailers was visual, not pricing. We built an in-house photography studio and creative department to own the brand\u2019s visual language end-to-end — product shots, athlete content, video. Adidas later changed their global product photography based on the processes developed here.',
    figure: 'photography-studio',
  },
  {
    heading: 'Mobile-first commerce',
    body:
      'The mobile experience converted poorly because it had been adapted, not designed. The responsive rebuild treated mobile as the primary surface — checkout flows, product detail pages, and search were reworked from the phone up. Conversion followed.',
    figure: 'mobile-checkout',
  },
  {
    heading: 'Brand and product, one team',
    body:
      'In-house Head of Design covered identity, photography, packaging, UI, and content strategy under one mast. Working directly with the CEO, Head of Product, and engineering shortened the loop between brand decisions and shipped product — the visual identity and the checkout flow were never more than one design review apart.',
    figure: 'team-structure',
  },
]

export default function KellerSportsPage() {
  return (
    <main className={styles.main}>
      {/* §1 Header */}
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 06 — 2014–2016
            <br />
            COMMERCE / UI / BRAND / PRODUCT
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-keller-sports' }}
          >
            Keller Sports
          </h1>
          <p className={styles.subtitle}>
            Two years rebuilding a €100m sports commerce business as Head of Design — identity through checkout.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Keller Sports (Head of Design)</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>
              Head of Design · UI/UX · Brand · Photography · Content
            </dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>Keller Sports (in-house)</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2014–2016</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped · later acquired</dd>

            <dt className={styles.metaTerm}>Awards</dt>
            <dd className={styles.metaDef}>13 international awards (2014–16)</dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverStrip}`}
        style={{ viewTransitionName: 'work-hero-keller-sports' }}
      >
        <p className={styles.coverStat}>
          <strong>€100m</strong>
          <span>commerce, identity through checkout</span>
        </p>
        <p className={styles.coverFacts}>
          13 awards · 3 shop relaunches · in-house photography studio
        </p>
      </figure>

      {/* §3 Context */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            New investors had just joined Keller Sports, opening the door to a
            full strategic and visual reset. The brief on day one of the Head
            of Design role: position the business as the best advisor and
            curator for premium sports products, then make every surface of
            the shop reflect that positioning — top of funnel to checkout to
            unboxing.
          </p>
        </div>
      </section>

      {/* §4 Problem */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            UI and UX of the shop had never been addressed in a focused,
            iterative manner. The mobile experience was an afterthought of the
            desktop site and converted poorly. The brand and the product
            experience had drifted apart.
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
            Thirteen international awards across brand, shop usability, and
            user experience. Adobe selected the UI and Xd work for its
            showcase. Most notably, Adidas adopted the global product
            photography process developed at Keller Sports. The business was
            later acquired.
          </p>
        </div>
      </section>

      {/* §7 Credits */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Design</dt>
          <dd className={styles.creditDef}>Martin Drexler · Head of Design</dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Keller Sports (in-house)</dd>

          <dt className={styles.creditTerm}>Partners</dt>
          <dd className={styles.creditDef}>CEO · Head of Product · Engineering · Photography team</dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2014–2016 · 3 shop relaunches</dd>
        </dl>
      </section>

      {/* §8 Pager */}
      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/cepres">&larr; CEPRES</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/yca">YCA &rarr;</Link>
      </nav>
    </main>
  )
}
