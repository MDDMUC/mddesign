import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

export const metadata: Metadata = {
  title: 'byte — Martin Drexler',
  description:
    'Product and packaging system for a direct-to-consumer oral-care kit. Medical precision, consumer warmth — sized to survive a year of bathroom-cabinet reuse.',
}

type CaseImage = {
  src: string
  alt: string
  width: number
  height: number
}

type Vignette = {
  heading: string
  body: string
  /** Two matching landscape stills side-by-side. */
  pair?: boolean
  images: CaseImage[]
}

const vignettes: Vignette[] = [
  {
    heading: 'One kit, six functions',
    body:
      'The hygiene kit contained six distinct products — Tongue Scraper, Rinse, Floss, Test, Refresh, pH Kit — each with its own use cycle and its own visual identity within the system. Each pouch and bottle read as part of the same family while making clear at-a-glance which was which. Six labels, one alphabet.',
    pair: true,
    images: [
      {
        src: '/images/work/byte/kit-marble.jpg',
        alt: 'byte oral-care products lined up on marble — tongue scraper, floss, and rinse bottles',
        width: 1800,
        height: 1350,
      },
      {
        src: '/images/work/byte/kit-wood.jpg',
        alt: 'byte kit products on wood — tongue scraper, floss, and rinse bottles',
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    heading: 'Same lineup, softer ground',
    body:
      'A third surface test — linen instead of stone or timber — checked whether the matte black bottles and white scraper still read as one kit when the stage warmed up. The objects stayed clinical; the ground did the consumer work.',
    images: [
      {
        src: '/images/work/byte/kit-fabric.jpg',
        alt: 'byte kit products on fabric — tongue scraper, floss, and rinse bottles',
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    heading: 'Black box, white interior',
    body:
      'The outer mailer was pure matte black with negative-space typography; inside, full-bleed white with the wordmark deployed at oversized scale. Closed, the shell is a quiet block. Open (hero), the reveal is the brand.',
    pair: true,
    images: [
      {
        src: '/images/work/byte/box-closed-window.jpg',
        alt: 'Closed black healthy habits box with circular window showing the white interior',
        width: 1800,
        height: 1350,
      },
      {
        src: '/images/work/byte/box-closed-wood.jpg',
        alt: 'Closed black healthy habits box casting a soft shadow on wood',
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    heading: 'Window as preview',
    body:
      'A circular die-cut let the white interior and a foil edge show before the lid lifted — enough to promise contents without spoiling the oversized wordmark waiting inside.',
    images: [
      {
        src: '/images/work/byte/box-products-portrait.jpg',
        alt: 'Black healthy habits box with circular window beside arranged foil packs and bottles',
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    heading: 'Medical, not clinical',
    body:
      'Product photography treated each piece as a museum object — soft lighting, neutral grounds, clean shadows. The goal was trusted medical device without the cold institutional palette of healthcare. Form stayed clinical; staging stayed warm.',
    pair: true,
    images: [
      {
        src: '/images/work/byte/flat-foil-bottles.jpg',
        alt: 'Flat lay of byte foil packs, rinse bottles, and tongue scraper on white',
        width: 1800,
        height: 1080,
      },
      {
        src: '/images/work/byte/flat-bottles-scraper.jpg',
        alt: 'Flat lay of byte bottles, tongue scraper, and floss on white',
        width: 1800,
        height: 1080,
      },
    ],
  },
  {
    heading: 'Foil and bottle, one kit',
    body:
      'Secondary stills locked pack architecture: foil sachets for single-use steps, rigid bottles for daily rinse, scraper as the hard silhouette that ties the set together on a white field.',
    pair: true,
    images: [
      {
        src: '/images/work/byte/flat-bottles-angle.jpg',
        alt: 'Angled flat lay of byte bottles, tongue scraper, and floss',
        width: 1800,
        height: 1080,
      },
      {
        src: '/images/work/byte/flat-foil-spread.jpg',
        alt: 'Spread flat lay of byte foil packs and bottles with tongue scraper',
        width: 1800,
        height: 1080,
      },
    ],
  },
  {
    heading: 'Lives in the bathroom',
    body:
      'The same object had to read as a gift at the door and as furniture on a vanity. A sink-side frame tested the black shell against tile and towel light — proof it could sit next to everyday objects without looking like a clinic sample.',
    images: [
      {
        src: '/images/work/byte/box-bathroom.jpg',
        alt: 'Black healthy habits box on a bathroom vanity beside a sink',
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    heading: 'Physical production',
    body:
      'Labels, foils, and bottles were assembled as a real kit — not a deck of renders. Process shots kept the system honest: the same mark language had to survive hand application, pack count, and a year on the shelf.',
    images: [
      {
        src: '/images/work/byte/process-labeling.jpg',
        alt: 'Hands applying byte labels to foil packs on a studio worktable',
        width: 2000,
        height: 1414,
      },
    ],
  },
]

export default function BytePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 02 — 2022
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
            A six-product oral-care kit designed to feel medical without being
            clinical — and to survive a year on the shelf.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Haimish Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>
              Product Design · Packaging · 3D · Direction
            </dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>byte</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2022</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverPhoto}`}
        style={{ viewTransitionName: 'work-hero-byte' }}
      >
        <Image
          src="/images/work/byte/hero-open-box.jpg"
          alt="Open black healthy habits box showing oversized white byte wordmark and oral-care products inside"
          width={2000}
          height={1500}
          className={styles.coverPhotoImg}
          priority
          fetchPriority="high"
        />
      </figure>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            byte is a US direct-to-consumer dental brand best known for its
            clear aligners. The hygiene kit was an adjacent product — six
            physical objects, packaged together, intended to anchor a
            subscription that otherwise mostly arrives in mailers. Its
            packaging is the brand&rsquo;s most physical touchpoint with the
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
                        ? '(max-width: 900px) 100vw, 29vw'
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
            The kit shipped as the subscription&rsquo;s physical anchor — six
            labeled products in a black mailer with a white interior reveal,
            built to hold up in a bathroom cabinet for a full year of reuse.
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
        <Link href="/work/space-for-curiosity">
          &larr; Space for Curiosity
        </Link>
        <Link href="/work">Index</Link>
        <Link href="/work/creative-consortium">
          Creative Consortium &rarr;
        </Link>
      </nav>
    </main>
  )
}
