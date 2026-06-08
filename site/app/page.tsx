import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <picture className="reveal-fade">
        <source
          srcSet="/images/hero/familycrest.webp"
          type="image/webp"
        />
        <img
          src="/images/hero/familycrest.png"
          alt="Martin Drexler crest"
          width={720}
          height={720}
          decoding="async"
          fetchPriority="high"
          className={styles.crest}
        />
      </picture>
      <Link href="/contact" className={`${styles.button} reveal-rise reveal-stagger-3`}>
        Contact
      </Link>
    </main>
  )
}
