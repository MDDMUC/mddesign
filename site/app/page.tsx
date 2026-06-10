import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { SplineBackground } from '@/components/SplineBackground/SplineBackground'

const SPLINE_SCENE =
  'https://prod.spline.design/w7niHJ3fC5Yow7TV/scene.splinecode'

export const metadata: Metadata = {
  title: 'Martin Drexler — Designer · UI/UX, brand, product systems',
  description:
    'Designer working across UI/UX, brand, and product systems. Selected work has scaled a $45T fintech platform (CEPRES), rebuilt a €100m commerce business (Keller Sports), and shaped the Olympic Movement Young Champion Ambassador program. 25+ international design awards.',
}

export default function Home() {
  return (
    <main className={styles.main}>
      <SplineBackground scene={SPLINE_SCENE} />

      {/* Header — fills the upper portion of the viewport. Title stack
          sits above the full-viewport Spline scene that's centered behind it. */}
      <header className={styles.hero}>
        <p className={styles.eyebrow}>
          <span className="reveal-fade reveal-stagger-1">Munich,</span>{' '}
          <span className="reveal-fade reveal-stagger-2">Colorado Springs,</span>{' '}
          <span className="reveal-fade reveal-stagger-3">Philadelphia</span>
        </p>
        <h1 className={styles.title}>
          <span className="reveal-line-wrap">
            <span
              className={`${styles.titleBold} reveal-h1-bold reveal-stagger-3`}
            >
              Martin Drexler
            </span>
          </span>
          <span className="reveal-line-wrap">
            <span
              className={`${styles.titleLight} reveal-h1-light reveal-stagger-4`}
            >
              Design Studio
            </span>
          </span>
        </h1>
        <img
          src="/images/hero/awards-horizontal-black.png"
          alt="Awards including German Brand Award Gold, D&AD Yellow Pencil, Red Dot, and more"
          width={800}
          height={90}
          className={`${styles.awards} reveal-fade reveal-stagger-6`}
        />
      </header>

      {/* Positioning paragraph — verbatim from design/BRIEF.md §3. */}
      <section className={`${styles.positioning} reveal-rise reveal-stagger-7`}>
        <p>
          Designer working across UI/UX, brand, and product systems. Selected
          work has scaled a $45T fintech platform (CEPRES), rebuilt a €100m
          commerce business (Keller Sports), and shaped the visual identity
          of the Young Champion Ambassador program (Olympic Movement, 25+
          cities). 25+ international design awards including D&amp;AD Yellow
          Pencil, German Brand Award Gold, and Red Dot. Has taught design as
          business strategy at the University of Denver and the World Trade
          Center Denver.
        </p>
      </section>

      {/* Closing rail — one quiet exit into the work. The whole section
          animates as a single block (like the positioning section above). */}
      <nav
        className={`${styles.exit} reveal-rise reveal-stagger-8`}
        aria-label="Continue"
      >
        <Link href="/work" className={styles.exitLink}>
          WORK →
        </Link>
        <Link href="/studio" className={styles.exitLink}>
          ABOUT →
        </Link>
        <Link href="/contact" className={styles.exitLink}>
          CONTACT →
        </Link>
      </nav>
    </main>
  )
}
