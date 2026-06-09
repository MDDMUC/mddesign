import Link from 'next/link'
import styles from './page.module.css'
import { FluidCanvas } from './FluidCanvas'

export default function Home() {
  return (
    <main className={styles.main}>
      <FluidCanvas className={styles.canvas} />
      <div className={styles.chrome}>
        <span className={`${styles.wordmark} reveal-fade`}>MD_DESIGN</span>
        <Link
          href="/contact"
          className={`${styles.contact} reveal-rise reveal-stagger-2`}
        >
          Contact
        </Link>
        <span className={`${styles.name} reveal-fade reveal-stagger-3`}>
          Martin Drexler
        </span>
        <span className={`${styles.role} reveal-fade reveal-stagger-3`}>
          Design Studio
        </span>
      </div>
    </main>
  )
}
