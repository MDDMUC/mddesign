import Link from 'next/link'
import styles from './AboutTeaser.module.css'

export default function AboutTeaser() {
  return (
    <section className={styles.aboutTeaser}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.portraitPlaceholder}>
            MD
          </div>
        </div>

        <div className={styles.textBlock}>
          <p className={styles.label}>ABOUT</p>
          <h2 className={styles.headline}>Martin Drexler</h2>
          <p className={styles.body}>
            I'm a strategic design leader with 15+ years shaping digital products and brand systems
            for ambitious companies. From founding award-winning studios to leading in-house teams
            at scale, I bring both the craft of an independent designer and the systematic thinking
            of a seasoned executive.
          </p>
          <Link href="/about" className={styles.link}>
            More about me
            <svg className={styles.arrow} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
