import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work — Martin Drexler',
  description:
    'Selected case studies from a fifteen-year design practice in UI/UX, brand, and product systems.',
}

type Item = {
  index: string
  slug: string | null
  title: string
  descriptor: string
  tags: string
  studio: string
  date: string
  status: 'shipped' | 'upcoming'
}

const items: Item[] = [
  {
    index: '01',
    slug: 'cepres',
    title: 'CEPRES',
    descriptor:
      'Designing the user experience of the world\u2019s leading private market investment platform.',
    tags: 'UX / UI / PRODUCT / FINTECH',
    studio: 'Martin Drexler Design Studio',
    date: '2018–2020',
    status: 'shipped',
  },
  {
    index: '02',
    slug: 'keller-sports',
    title: 'Keller Sports',
    descriptor:
      'Two years rebuilding a €100m sports commerce business as Head of Design — identity through checkout.',
    tags: 'COMMERCE / UI / BRAND / PRODUCT',
    studio: 'Keller Sports (Head of Design)',
    date: '2014–2016',
    status: 'shipped',
  },
  {
    index: '03',
    slug: 'yca',
    title: 'Young Champion Ambassador',
    descriptor:
      'Brand, curriculum, and spatial system for an Olympic Movement program now running in 25+ cities.',
    tags: 'BRAND / UX / PRODUCT / SPATIAL',
    studio: 'Goodvoice Group (Creative Director)',
    date: '2019–2021',
    status: 'shipped',
  },
  {
    index: '04',
    slug: 'planetarie',
    title: 'Planetarie',
    descriptor:
      'A patent-pending CBDa brand from positioning to packaging. Acquired by Tanasi.',
    tags: 'BRAND / PRODUCT / PACKAGING / CPG',
    studio: 'Goodvoice Group (Creative Director)',
    date: '2020–2022',
    status: 'shipped',
  },
  {
    index: '05',
    slug: 'byte',
    title: 'byte',
    descriptor:
      'Product and packaging system for a recognizable consumer dental brand.',
    tags: 'PRODUCT / PACKAGING / 3D / CONSUMER',
    studio: 'Haimish Studio',
    date: '2022',
    status: 'shipped',
  },
  {
    index: '06',
    slug: 'space-for-curiosity',
    title: 'Space for Curiosity',
    descriptor:
      'Brand narrative and film for the US Space Force and US Air Force.',
    tags: 'BRAND / CONTENT / FILM',
    studio: 'Haimish Studio',
    date: '2023',
    status: 'shipped',
  },
]

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span className="reveal-line-wrap">
          <span className="reveal-h1-medium reveal-stagger-3">Work</span>
        </span>
      </h1>

      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLink = item.slug !== null
          const titleStyle = isLink
            ? {
                viewTransitionName: `work-title-${item.slug}`,
              }
            : undefined

          return (
            <li
              key={item.index}
              className={`${styles.row} reveal-rise`}
              style={{ animationDelay: `${700 + i * 120}ms` }}
            >
              <span className={styles.index}>Case {item.index}</span>
              <div className={styles.body}>
                <span className={styles.tags}>{item.tags}</span>
                <h2
                  className={
                    isLink
                      ? styles.projectTitle
                      : `${styles.projectTitle} ${styles.projectMuted}`
                  }
                  style={titleStyle}
                >
                  {isLink ? (
                    <Link
                      href={`/work/${item.slug}`}
                      className={styles.projectLink}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h2>
                <p className={styles.descriptor}>{item.descriptor}</p>
                <span className={styles.studio}>{item.studio}</span>
              </div>
              <div
                className={styles.logoCell}
                aria-label={`${item.title} logo`}
              >
                <div className={styles.logoPlaceholder}>LOGO</div>
              </div>
            </li>
          )
        })}
      </ol>

      <p
        className={`${styles.foot} reveal-fade`}
        style={{ animationDelay: '1500ms' }}
      >
        Fifteen years across UI/UX, brand, and product design · 25+ international awards
      </p>
    </main>
  )
}
