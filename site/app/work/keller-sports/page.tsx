import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CoverVideo } from '@/components/CoverVideo/CoverVideo'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'Keller Sports — Martin Drexler',
  description:
    'Two years as Head of Design rebuilding a €100m sports commerce business — identity through checkout, in-house photography, three shop relaunches.',
}

const vignettes = [
  {
    heading: 'Three full shop relaunches',
    body:
      'In two years the shop shipped three complete relaunches — responsive desktop and mobile layouts, backend and CMS rebuilt from scratch, marketing shifted toward social and Keller Sports Pros. Each launch’s data trained the next iteration of the commerce surface.',
    pair: true,
    images: [
      {
        src: '/images/work/keller-sports/shop-ui-list.jpg',
        alt: 'Keller Sports mobile product listing — filters and footwear grid',
        width: 273,
        height: 748,
      },
      {
        src: '/images/work/keller-sports/shop-ui-pdp.jpg',
        alt: 'Keller Sports mobile product detail — Nike React Element 55',
        width: 277,
        height: 748,
      },
    ],
  },
  {
    heading: 'Own the imagery',
    body:
      'Differentiation against larger sports retailers was visual, not pricing. An in-house photography studio and creative department owned product shots, athlete content, and video end-to-end — so the brand’s visual language was captured, not licensed.',
    images: [
      {
        src: '/images/work/keller-sports/lifestyle-track.jpg',
        alt: 'Athlete on a track wearing Keller Sports kit under stadium lights',
        width: 784,
        height: 412,
      },
    ],
  },
  {
    heading: 'Packaging as brand',
    body:
      'Premium positioning had to survive the unboxing. Packaging carried the same identity system as the shop and photography — mark, materials, and hierarchy locked so the parcel read as Keller Sports before anything was opened.',
    images: [
      {
        src: '/images/work/keller-sports/packaging.jpg',
        alt: 'Keller Sports branded shipping box with black wordmark',
        width: 393,
        height: 321,
      },
    ],
  },
  {
    heading: 'Brand and product, one team',
    body:
      'Head of Design covered identity, photography, packaging, UI, and content under one mast. Working directly with the CEO, Head of Product, and engineering kept brand decisions and checkout flows in the same review cycle.',
    images: [
      {
        src: '/images/work/keller-sports/brand-collage.jpg',
        alt: 'Keller Sports brand system collage — logo, product photography, and campaign imagery',
        width: 1012,
        height: 869,
      },
    ],
  },
]

export default function KellerSportsPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 06 — 2014–2016
            <br />
            COMMERCE / UI / BRAND / PRODUCT
          </p>
          <h1
            className={`${styles.title} ${styles.titleBrand}`}
            style={{ viewTransitionName: 'work-title-keller-sports' }}
          >
            <span className={styles.titleBrandInner}>Keller Sports</span>
          </h1>
          <p className={styles.subtitle}>
            Two years rebuilding a €100m sports commerce business as Head of
            Design — identity through checkout.
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
        className={`${styles.cover} ${styles.coverMediaFit}`}
        style={{ viewTransitionName: 'work-hero-keller-sports' }}
      >
        <CoverVideo
          className={styles.coverMediaFitVideo}
          webm="/videos/keller-sports/pegasus.webm"
          mp4="/videos/keller-sports/pegasus.mp4"
        />
      </figure>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            When new investors joined Keller Sports, the company could finally
            shift strategic direction and make fundamental changes. The Head of
            Design brief: position the business as the best advisor and curator
            for premium sports products and experiences — then make every
            surface of the shop reflect that, top of funnel through checkout
            and unboxing.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            Shop UI and UX had never been addressed in a focused, iterative
            way. The mobile experience was not built for small devices and
            converted poorly. Brand and product experience had drifted apart.
          </p>
        </div>
      </section>

      <section className={styles.sectionFull}>
        <h2 className={styles.sectionTitle}>Design decisions</h2>
        <div className={styles.vignettes}>
          {vignettes.map((v) => (
            <article
              key={v.heading}
              className={`${styles.vignette} ${styles.vignetteWithMedia}`}
            >
              <div className={styles.vignetteText}>
                <h3 className={styles.vignetteHeading}>{v.heading}</h3>
                <p className={styles.vignetteBody}>{v.body}</p>
              </div>
              <figure
                className={`${styles.vignetteFrameLive}${
                  v.pair ? ` ${styles.vignetteFramePair}` : ''
                }`}
              >
                {v.images.map((img) => (
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes={
                      v.pair
                        ? '(max-width: 900px) 50vw, 28vw'
                        : '(max-width: 900px) 100vw, 58vw'
                    }
                  />
                ))}
              </figure>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <div className={styles.sectionBody}>
          <p>
            Adidas adopted the global product photography process developed at
            Keller Sports. The commerce business was later acquired and left
            the market.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Design</dt>
          <dd className={styles.creditDef}>Martin Drexler · Head of Design</dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Keller Sports (in-house)</dd>

          <dt className={styles.creditTerm}>Partners</dt>
          <dd className={styles.creditDef}>
            CEO · Head of Product · Engineering · Photography team
          </dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2014–2016 · 3 shop relaunches</dd>
        </dl>
      </section>

      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work/cepres">&larr; CEPRES</Link>
        <Link href="/work">Index</Link>
        <Link href="/work/yca">YCA &rarr;</Link>
      </nav>
    </main>
  )
}
