import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

/** Official AF Recruiting upload — U.S. Air Force: Space for Curiosity */
const FILM_YOUTUBE_ID = 'rqn2og2qVUw'
const FILM_YOUTUBE_URL = `https://www.youtube.com/watch?v=${FILM_YOUTUBE_ID}`

export const metadata: Metadata = {
  title: 'Space for Curiosity — Martin Drexler',
  description:
    'U.S. Air Force Lt Col Blair Thompson is curious about space. His wonderment about the giant void above our heads led to algorithms used by SpaceX and NASA.',
}

const vignettes = [
  {
    heading: 'Curiosity as the thesis',
    body:
      'The series\u2019 organizing principle: every subject talks about what they are personally curious about, and the institutional work emerges from that curiosity — not the reverse. Lt Col Thompson\u2019s relationship to "the giant void above our heads" preceded, and made legible, his work on the algorithms SpaceX and NASA depend on.',
    figure: 'curiosity-thesis',
  },
  {
    heading: 'Personal frame, institutional scale',
    body:
      'Each piece opens on the subject\u2019s home or office, in their own words, before any uniform or facility appears. The framing shifts only when their work demands it — moving from kitchen table to cockpit to mission control as the story earns each setting. The transition is the point.',
    figure: 'frame-progression',
  },
  {
    heading: 'Documentary cadence, no score',
    body:
      'Sound design ran sparse — room tone, hand sounds, occasional aircraft. No swelling strings, no patriotic music bed. The pieces paced at 3–5 minutes each, edited like documentary, not like commercial. Restraint signalled credibility.',
    figure: 'sound-cadence',
  },
  {
    heading: 'Recruit by belonging, not by ask',
    body:
      'No call-to-action ever appears on screen. Each piece ends with the subject still talking. The institutional logos appear only in the credits. The brand argument is made by the company kept, not by the framing.',
    figure: 'no-cta',
  },
]

export default function SpaceForCuriosityPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>
            CASE 01 — 2023
            <br />
            BRAND / CONTENT / FILM
          </p>
          <h1
            className={styles.title}
            style={{ viewTransitionName: 'work-title-space-for-curiosity' }}
          >
            Space for Curiosity
          </h1>
          <p className={styles.subtitle}>
            U.S. Air Force Lt Col Blair Thompson is curious. Curious about
            space. His wonderment about the giant void above our heads has
            led to algorithms used by SpaceX and NASA.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Studio</dt>
            <dd className={styles.metaDef}>Haimish Studio</dd>

            <dt className={styles.metaTerm}>Role</dt>
            <dd className={styles.metaDef}>Creative Direction · Brand · Film</dd>

            <dt className={styles.metaTerm}>Client</dt>
            <dd className={styles.metaDef}>US Space Force · US Air Force</dd>

            <dt className={styles.metaTerm}>Year</dt>
            <dd className={styles.metaDef}>2023</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Shipped</dd>
          </dl>
        </aside>
      </header>

      <figure
        className={`${styles.cover} ${styles.coverFilm}`}
        style={{ viewTransitionName: 'work-hero-space-for-curiosity' }}
      >
        <iframe
          className={styles.coverFilmIframe}
          src={`https://www.youtube-nocookie.com/embed/${FILM_YOUTUBE_ID}?rel=0&modestbranding=1&cc_load_policy=0`}
          title="U.S. Air Force: Space for Curiosity"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </figure>
      <p className={styles.filmCredit}>
        Film ·{' '}
        <a href={FILM_YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
        {' · '}Video by Master Sgt. Mari Moxley · Reserve National Security
        Space Institute
      </p>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Context</h2>
        <div className={styles.sectionBody}>
          <p className="lede">
            U.S. Air Force Lt Col Blair Thompson is curious about space. His
            wonderment about the giant void above our heads led to algorithms
            used by SpaceX and NASA. Now that curiosity is reaching the next
            generation of space pioneers. &ldquo;Space for Curiosity&rdquo; is
            the brand-film series developed with the US Space Force and US Air
            Force around that thesis — institutional capability as the visible
            end of personal curiosity.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Problem</h2>
        <div className={styles.sectionBody}>
          <p>
            Defense and space recruitment has a stamp problem —
            institutional, hierarchical, removed from civilian life. The
            series needed to communicate scale and capability without
            inheriting the cold recruitment-poster aesthetic. The work had
            to read as documentary, not as marketing.
          </p>
        </div>
      </section>

      <section className={styles.sectionFull}>
        <h2 className={styles.sectionTitle}>Design decisions</h2>
        <div className={styles.vignettes}>
          {vignettes.map((v, i) => (
            <article key={v.heading} className={styles.vignette}>
              <div className={styles.vignetteText}>
                <h3 className={styles.vignetteHeading}>{v.heading}</h3>
                <p className={styles.vignetteBody}>{v.body}</p>
              </div>
              <div
                className={styles.vignetteFrame}
                data-fig={String(i + 2).padStart(2, '0')}
                data-placeholder={v.figure}
              >
                {v.figure.replace(/-/g, ' ')}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Outcome</h2>
        <div className={styles.sectionBody}>
          <p>
            The series shipped as a multi-piece campaign deployed through
            official Space Force and Air Force channels and used for
            external communications.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Credits</h2>
        <dl className={styles.credits}>
          <dt className={styles.creditTerm}>Direction</dt>
          <dd className={styles.creditDef}>Martin Drexler · Creative Direction</dd>

          <dt className={styles.creditTerm}>Video</dt>
          <dd className={styles.creditDef}>
            Master Sgt. Mari Moxley · Reserve National Security Space Institute
          </dd>

          <dt className={styles.creditTerm}>Studio</dt>
          <dd className={styles.creditDef}>Haimish Studio</dd>

          <dt className={styles.creditTerm}>Client</dt>
          <dd className={styles.creditDef}>US Space Force · US Air Force</dd>

          <dt className={styles.creditTerm}>Film</dt>
          <dd className={styles.creditDef}>
            <a href={FILM_YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
              youtube.com/watch?v={FILM_YOUTUBE_ID}
            </a>
          </dd>

          <dt className={styles.creditTerm}>Duration</dt>
          <dd className={styles.creditDef}>2023</dd>
        </dl>
      </section>

      <nav className={styles.pager} aria-label="Case study navigation">
        <Link href="/work">&larr; Index</Link>
        <Link href="/work/byte">byte &rarr;</Link>
      </nav>
    </main>
  )
}
