import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Studio — Martin Drexler',
  description:
    'Senior designer working across UI/UX, brand, and product systems. 25+ international design awards. Teaching design as business strategy at the University of Denver.',
}

/** Award index. Count is how many times the mark is shown. Marks are
 *  cut from the homepage awards strip; rows without a source mark
 *  stay type-only. */
const awards: {
  year: string
  name: string
  count: number
  mark?: string
  w?: number
  h?: number
  /** More than one distinct mark on a single row. */
  marks?: { src: string; w: number; h: number }[]
}[] = [
  {
    year: '2018–2020',
    name: 'Private Equity Wire',
    count: 6,
    mark: '/images/awards/pe-wire.png',
    w: 107,
    h: 96,
  },
  {
    year: '2018–2020',
    name: 'Adobe UI Excellence Showcase',
    count: 1,
    mark: '/images/awards/adobe-ui.png',
    w: 60,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'Shop Usability Award',
    count: 5,
    mark: '/images/awards/shop-usability.png',
    w: 96,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'Internet World Business Shop Award',
    count: 2,
    mark: '/images/awards/iwb.png',
    w: 98,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'Swiss eCommerce Award',
    count: 2,
    mark: '/images/awards/swiss-ecommerce.png',
    w: 96,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'German Brand Award',
    count: 1,
    mark: '/images/awards/german-brand.png',
    w: 53,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'German Design Award',
    count: 2,
    mark: '/images/awards/german-design.png',
    w: 76,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'Anton Award',
    count: 1,
    mark: '/images/awards/anton.png',
    w: 99,
    h: 96,
  },
  {
    year: '2014–2016',
    name: 'Adobe UI · Adobe Xd Showcase',
    count: 1,
    marks: [
      { src: '/images/awards/adobe-ui.png', w: 60, h: 96 },
      { src: '/images/awards/adobe-xd.png', w: 60, h: 96 },
    ],
  },
  {
    year: '2020',
    name: 'CO Cup — Best Tincture · Best Topical (3rd)',
    count: 1,
  },
  {
    year: '—',
    name: 'D&AD Yellow Pencil',
    count: 1,
    mark: '/images/awards/yellow-pencil.png',
    w: 62,
    h: 96,
  },
  {
    year: '—',
    name: 'Red Dot Design Award',
    count: 1,
  },
  {
    year: '—',
    name: 'German Digital Innovation Award',
    count: 1,
  },
]

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

/** Career-station mosaic — sharp teaching / studio masters only.
 *  Soft Portfolio26 plate crops deferred until native masters exist. */
const stations = [
  {
    src: '/images/studio/collage/talk-martin.jpg',
    alt: 'Martin speaking at a design event',
    span: 'talk' as const,
  },
  {
    src: '/images/studio/collage/bw-01.jpg',
    alt: 'Teaching at the whiteboard, University of Denver',
    span: 'bw01' as const,
  },
  {
    src: '/images/studio/collage/bw-02.jpg',
    alt: 'Presenting design frameworks to students',
    span: 'bw02' as const,
  },
  {
    src: '/images/studio/collage/classroom.jpg',
    alt: 'Design strategy classroom session',
    span: 'class' as const,
  },
  {
    src: '/images/studio/collage/whiteboard.jpg',
    alt: 'Whiteboard session — design as business strategy',
    span: 'board' as const,
  },
  {
    src: '/images/studio/collage/studio-exterior.jpg',
    alt: 'Haimish Studio exterior',
    span: 'ext' as const,
  },
]

const spanClass: Record<(typeof stations)[number]['span'], string> = {
  talk: styles.spanTalk,
  bw01: styles.spanBw01,
  bw02: styles.spanBw02,
  class: styles.spanClass,
  board: styles.spanBoard,
  ext: styles.spanExt,
}

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
            Designer working across brand, UI/UX, and product systems.
            Selected work has scaled a $65T+ fintech platform (CEPRES), rebuilt
            a global e-commerce business (Keller Sports), and shaped the visual
            identity of the Young Champion Ambassador program (Olympic
            Movement, 25+ cities). 25+ international design awards including
            D&amp;AD Yellow Pencil, German Brand Award Gold, and Red Dot. Has
            taught design as business strategy at the University of Denver and
            the World Trade Center Denver.
          </p>
        </div>
        <aside className={`${styles.meta} reveal-rise reveal-stagger-6`}>
          <div className={styles.portrait}>
            <Image
              className={styles.portraitImg}
              src="/images/hero/martin-portrait-upright.jpg"
              alt="Martin Drexler"
              width={1445}
              height={1800}
              sizes="(max-width: 900px) 100vw, 28vw"
              priority
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

      {/* Career stations — asymmetric mosaic under the first fold. */}
      <section
        className={`${styles.collageSection} reveal-rise reveal-stagger-7`}
        aria-label="Career stations"
      >
        <h2 className={styles.collageLabel}>Stations</h2>
        <div className={styles.collage}>
          {stations.map((shot) => (
            <figure
              key={shot.src}
              className={`${styles.collageCell} ${spanClass[shot.span]}`}
            >
              <Image
                className={styles.collageImg}
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 520px) 50vw, (max-width: 900px) 50vw, 42vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section
        className={`${styles.section} reveal-rise reveal-stagger-8`}
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
        className={`${styles.section} reveal-rise reveal-stagger-9`}
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
        className={`${styles.section} reveal-rise`}
        style={{ animationDelay: '1300ms' }}
      >
        <h2 className={styles.sectionTitle}>Clients</h2>
        <div className={styles.body}>
          <p>
            Selected clients across fifteen years: BMW, Red Bull, Peak
            Performance, the US Space Force, the US Air Force, USA Wrestling,
            USA Ultimate, the US Olympic &amp; Paralympic Museum, the
            International Olympic Academy, CEPRES, Keller Sports, Planetarie
            (acquired by Tanasi), and byte.
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

      {/* Credentials index — year, award, repeated mark. No client names. */}
      <section
        className={`${styles.awardsSection} reveal-rise`}
        style={{ animationDelay: '1600ms' }}
      >
        <h2 className={styles.sectionTitle}>Index</h2>
        <dl className={styles.awards}>
          {awards.map((award) => (
            <div key={award.name} className={styles.awardRow}>
              <dt className={styles.awardYear}>{award.year}</dt>
              <dd className={styles.awardName}>{award.name}</dd>
              {award.mark || award.marks ? (
                <dd
                  className={styles.awardMarks}
                  role="img"
                  aria-label={
                    award.count > 1
                      ? `${award.name}, ${award.count}`
                      : award.name
                  }
                >
                  {(award.marks ??
                    Array.from({ length: award.count }, () => ({
                      src: award.mark!,
                      w: award.w!,
                      h: award.h!,
                    }))
                  ).map((icon, i) => (
                    <img
                      key={`${icon.src}-${i}`}
                      src={icon.src}
                      alt=""
                      width={icon.w}
                      height={icon.h}
                    />
                  ))}
                </dd>
              ) : null}
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
