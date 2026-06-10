import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'byte — Martin Drexler',
  description:
    'Product and packaging system for a direct-to-consumer oral-care kit. Medical precision, consumer warmth — sized to survive a year of bathroom-cabinet reuse.',
}

const vignettes = [
  {
    heading: 'One kit, six functions',
    body:
      'The hygiene kit contained six distinct products — Tongue Scraper, Rinse, Floss, Test, Refresh, pH Kit — each with its own use cycle and its own visual identity within the system. Each pouch and bottle read as part of the same family while making clear at-a-glance which was which. Six labels, one alphabet.',
    figure: 'kit-family',
  },
  {
    heading: 'Black box, white interior',
    body:
      'The outer mailer was pure matte black with negative-space typography; inside, full-bleed white with the wordmark deployed at oversized scale. The reveal sequence (open → see brand → see products) was choreographed by material contrast more than copy.',
    figure: 'unbox-reveal',
  },
  {
    heading: 'Medical, not clinical',
    body:
      'Product photography and 3D renderings treated each piece as a museum object — soft lighting, neutral backgrounds, clean shadows. The goal was "trusted medical device" without the cold institutional palette of healthcare. Form was clinical; staging was warm.',
    figure: 'product-renderings',
  },
  {
    heading: 'Welcome card as moment',
    body:
      'Every box included a hand-styled welcome card — "Open to keep things going" / "Simply bravo" / "You made it all the way" — sized to read as a personal note, printed on card stock that survives a year of bathroom-cabinet reuse. Subscription retention is a design problem before it\u2019s a marketing one.',
    figure: 'welcome-card',
  },
]

export default function BytePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 05 — 2022
            <br />
            PRODUCT / PACKAGING / 3D / CONSUMER
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-byte' }}
          >
            byte
          </h1>
          <p className={styles.subtitle}>
            A six-product oral-care kit designed to feel medical without being clinical — and to survive a year on the shelf.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Haimish Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>Product Design · Packaging · 3D · Direction</dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>byte</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2022</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>
          </dl>
        </aside>
      </header>

      <figure className={styles.hero}>
        <div
          className={styles.heroFrame}
          data-fig="01"
          data-status="placeholder"
          data-placeholder="byte-kit-hero"
          aria-label="byte oral-care kit hero"
        >
          Take this journey to the next level · kit hero
        </div>
      </figure>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            byte is a US direct-to-consumer dental brand best known for its
            clear aligners. The hygiene kit was an adjacent product — six
            physical objects, packaged together, intended to anchor a
            subscription that otherwise mostly arrives in mailers. Its
            packaging is the brand\u2019s most physical touchpoint with the
            customer.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            The kit had to bridge two contradictory tones at once: medical
            (precise, certified, trustworthy) and consumer (warm, inviting,
            anti-clinical). The same box would meet a first-time customer at
            the front door and live in a bathroom cabinet for a year.
          </p>
        </div>
      </section>

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

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <div className={styles.sectionBody}>
          <p>
            The kit shipped as the subscription product\u2019s physical
            anchor. byte remains one of the recognizable direct-to-consumer
            dental brands in the US market.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Design</dt>
          <dd className={styles.creditDef}>Martin Drexler</dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Haimish Studio</dd>

          <dt className={styles.creditTerm}>Client</dt>
          <dd className={styles.creditDef}>byte</dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2022</dd>
        </dl>
      </section>

      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/planetarie">&larr; Planetarie</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/space-for-curiosity">Space for Curiosity &rarr;</Link>
      </nav>
    </main>
  )
}
