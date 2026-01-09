import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Back to Home
          </Link>
          <Link href="/work" className={styles.secondaryButton}>
            View Work
          </Link>
        </div>
        <div className={styles.helpfulLinks}>
          <h2 className={styles.helpfulTitle}>You might be looking for:</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/about">About Martin</Link>
            </li>
            <li>
              <Link href="/services">Services & How I Work</Link>
            </li>
            <li>
              <Link href="/work">Portfolio & Case Studies</Link>
            </li>
            <li>
              <Link href="/contact">Get in Touch</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
