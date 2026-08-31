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

      <p className={styles.places}>
        <span className="reveal-fade reveal-stagger-1">Munich</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className="reveal-fade reveal-stagger-2">Colorado Springs</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className="reveal-fade reveal-stagger-3">Philadelphia</span>
      </p>

      <div className={styles.titling}>
        <h1 className={styles.title}>
          <span className="reveal-line-wrap">
            <span className={styles.name}>Martin Drexler</span>
          </span>
          <span className="reveal-line-wrap">
            <span className={styles.studio}>Design Studio</span>
          </span>
        </h1>
        <Link
          href="/work"
          className={`${styles.into} reveal-fade reveal-stagger-6`}
        >
          Work
        </Link>
      </div>
    </main>
  )
}
