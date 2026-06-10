import type { Metadata } from 'next'
import Link from 'next/link'
import pkg from '../../package.json'
import styles from './page.module.css'

const version = pkg.version
const commit = (process.env.VERCEL_GIT_COMMIT_SHA ?? 'dev0000').slice(0, 7)
const buildDate = new Date().toISOString().slice(0, 10)

export const metadata: Metadata = {
  title: 'Colophon — Martin Drexler',
  description: 'How the site is built.',
  robots: { index: false, follow: false },
}

export default function ColophonPage() {
  return (
    <main className={styles.main}>
      <p className={styles.title}>Colophon</p>
      <dl className={styles.table}>
        <dt className={styles.term}>Stack</dt>
        <dd className={styles.def}>Next.js 16 · React 19 · TypeScript</dd>

        <dt className={styles.term}>Hosting</dt>
        <dd className={styles.def}>Vercel (site/ root)</dd>

        <dt className={styles.term}>Type</dt>
        <dd className={styles.def}>
          Inter (variable, opsz axis) · IBM Plex Mono — both via <code>next/font</code>
        </dd>

        <dt className={styles.term}>Motion</dt>
        <dd className={styles.def}>80 / 160 / 240 / 400ms · cubic-bezier(0.2, 0, 0, 1)</dd>

        <dt className={styles.term}>Rendering</dt>
        <dd className={styles.def}>WebGL2 fluid simulation on <Link href="/">/</Link> (no Three.js)</dd>

        <dt className={styles.term}>Transitions</dt>
        <dd className={styles.def}>View Transitions API (cross-document, navigation: auto)</dd>

        <dt className={styles.term}>Design</dt>
        <dd className={styles.def}>Zion v2 — pure white field, ink hairlines, no chroma, no radius</dd>

        <dt className={styles.term}>Access</dt>
        <dd className={styles.def}>WCAG AA · prefers-reduced-motion respected</dd>

        <dt className={styles.term}>Version</dt>
        <dd className={styles.def}>
          v{version} · {commit} · built {buildDate}
        </dd>

        <dt className={styles.term}>Contact</dt>
        <dd className={styles.def}>
          <a href="mailto:hello@martindrexler.com">hello@martindrexler.com</a>
        </dd>
      </dl>
      <p className={styles.foot}>
        Site by Martin Drexler. Words © {new Date().getFullYear()}.
      </p>
    </main>
  )
}
