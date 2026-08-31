import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'Planetarie — Martin Drexler',
  description:
    'Building a USDA-organic CBDa brand from positioning to patent to acquisition. Brand, packaging, product, and content for a women-owned wellness company; acquired by Tanasi.',
}

const vignettes = [
  {
    heading: 'Values before logo',
    body:
      'Before any visual work we ran sessions to distill the internal values and culture — who Planetarie was, why it existed, and who it was speaking to. Every later decision (the mark, the type, the packaging materials, the photography) traced back to those sessions. Branding from the inside out, in the literal sense.',
    figure: 'values-sessions',
  },
  {
    heading: 'Med-tech, not headshop',
    body:
      'The CBD category in 2020 still carried the cannabis-counterculture aesthetic that kept serious investors and consumers away. Visual positioning ran adjacent to trusted med-tech — clean type, restrained palette, organic-product framing — underwritten by science (a patent-pending water-only extraction) and endorsements from athletes and physicians.',
    figure: 'visual-positioning',
  },
  {
    heading: 'Packaging as proof',
    body:
      'Packaging carried the values the copy claimed: USDA organic certification, the water-extraction process printed on the box, materials chosen for environmental neutrality. Each tincture, softgel, and topical reinforced the same story; nothing on the package asked the buyer to take the brand\u2019s word for it.',
    figure: 'packaging-system',
  },
  {
    heading: 'Endorsement as legitimacy',
    body:
      'The category\u2019s adoption problem was credibility, not awareness. Olympic athletes and medical practitioners came in at launch as the credibility layer — featured across the site, packaging, and editorial. Trusted faces beat market positioning every time.',
    figure: 'endorsement-faces',
  },
]

export default function PlanetariePage() {
  return (
    <main className={styles.main}>
      {/* §1 Header */}
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 04 — 2020–2022
            <br />
            BRAND / PRODUCT / PACKAGING / CPG
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-planetarie' }}
          >
            Planetarie
          </h1>
          <p className={styles.subtitle}>
            From values session to USDA-organic launch to acquisition by Tanasi — a CBDa brand built to outweigh a category\u2019s stigma.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Goodvoice Group (Creative Director)</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>Creative Direction · Brand · Product · Packaging · Content</dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>Planetarie (founder: Stacy Cason)</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2020–2022</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped · patent-pending · acquired by Tanasi</dd>

            <dt className={styles.metaTerm}>Awards</dt>
            <dd className={styles.metaDef}>
              CO Cup — Best Tincture (Winner) · Best Topical (3rd)
            </dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverPack}`}
        style={{ viewTransitionName: 'work-hero-planetarie' }}
      >
        <div className={styles.coverBox}>
          <strong>CBDa</strong>
          <span>water-only extraction</span>
        </div>
        <p className={styles.coverNote}>
          USDA-organic. Patent-pending. Built from the values session out.
        </p>
      </figure>

      {/* §3 Context */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            Planetarie is a women-owned, Colorado-based wellness company
            producing USDA-organic CBDa products. The founder, a healthcare
            entrepreneur with a clinical background, had developed a one-of-a-kind
            patent-pending process to extract CBDa from hemp using only water —
            no chemicals, no waste, the molecule preserved in its raw form.
            The science was sound; the category was a minefield.
          </p>
        </div>
      </section>

      {/* §4 Problem */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            CBD in 2020 still inherited the cannabis-counterculture aesthetic
            that kept serious investors and consumers away. The category was
            crowded with a few large players, adoption was slow, and public
            education was effectively zero. A new entrant needed to feel
            credible to a clinician, an Olympic athlete, and a sceptical
            consumer — and to do it without saying "premium" once.
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
            Planetarie won Best Tincture at the Colorado Cup, third place for
            Best Topical, and earned its USDA organic certification. Patent
            filed; products established as a non-addictive pain-relief
            alternative. The company was acquired by Tanasi.
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

          <dt className={styles.creditTerm}>Client</dt>
          <dd className={styles.creditDef}>Stacy Cason · CEO &amp; founder</dd>

          <dt className={styles.creditTerm}>Acquirer</dt>
          <dd className={styles.creditDef}>Tanasi</dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2020–2022</dd>
        </dl>

        <blockquote
          style={{
            marginTop: 'var(--space-7)',
            paddingTop: 'var(--space-5)',
            borderTop: 'var(--rule-faint)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-lg)',
            lineHeight: 'var(--leading-snug)',
            color: 'var(--ink)',
            fontStyle: 'italic',
            maxWidth: '40rem',
          }}
        >
          "Instead of a one-size-fits-most template, what I found with this team
          was a truly customized and effective group of creative talent. They
          absolutely nailed the brand voice, image, and all of the accoutrements
          to accompany the exact vision we had for our company. I am certain
          that this company would not be where we are today without the creative
          genius of the team."
          <cite
            style={{
              display: 'block',
              marginTop: 'var(--space-3)',
              fontStyle: 'normal',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--ink-60)',
            }}
          >
            — Stacy Cason · CEO &amp; founder, Planetarie
          </cite>
        </blockquote>
      </section>

      {/* §8 Pager */}
      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/yca">&larr; YCA</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/byte">byte &rarr;</Link>
      </nav>
    </main>
  )
}
