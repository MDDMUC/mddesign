import type { Metadata } from 'next'
import Link from 'next/link'
import { CoverVideo } from '@/components/CoverVideo/CoverVideo'
import { CoverVimeo } from '@/components/CoverVimeo/CoverVimeo'
import styles from './page.module.css'
import { workItems } from '@/data/work'

export const metadata: Metadata = {
  title: 'Work — Martin Drexler',
  description:
    'Selected case studies from a fifteen-year design practice in UI/UX, brand, and product systems.',
}

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <h1 className={styles.kicker}>Selected 2014–2023</h1>

      <ol className={styles.list}>
        {workItems.map((item) => (
          <li key={item.index} className={styles.row}>
            <Link href={`/work/${item.slug}`} className={styles.link}>
              <span className={styles.index}>{item.index}</span>
              <div className={styles.body}>
                <span className={styles.date}>{item.date}</span>
                <h2
                  className={styles.projectTitle}
                  style={{ viewTransitionName: `work-title-${item.slug}` }}
                >
                  {item.title}
                </h2>
                <p className={styles.descriptor}>{item.descriptor}</p>
                <span className={styles.studio}>{item.studio}</span>
              </div>
              <div className={styles.media}>
                <span className={styles.tags}>{item.tags}</span>
                <div className={styles.cover}>
                  {item.coverVideo?.vimeo ? (
                    <CoverVimeo
                      id={item.coverVideo.vimeo}
                      className={styles.coverMedia}
                    />
                  ) : null}
                  {item.coverVideo?.webm && item.coverVideo.mp4 ? (
                    <CoverVideo
                      webm={item.coverVideo.webm}
                      mp4={item.coverVideo.mp4}
                      className={styles.coverMedia}
                    />
                  ) : null}
                  {/* Always present: shows when there is no video, or when
                      CoverVimeo opts out under prefers-reduced-motion. */}
                  <p className={styles.coverFallback}>
                    <strong>{item.coverStat}</strong>
                    <span>{item.coverLabel}</span>
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}
