import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/images/hero/familycrest.png"
        alt="Martin Drexler crest"
        width={520}
        height={520}
        priority
        className={styles.crest}
        sizes="(max-width: 768px) 70vw, 360px"
      />
      <Link href="/contact" className={styles.button}>
        Contact
      </Link>
    </main>
  )
}
