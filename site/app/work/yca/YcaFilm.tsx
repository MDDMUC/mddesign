'use client'

import { useEffect, useState } from 'react'
import styles from '@/components/CaseStudy/CaseStudy.module.css'

const VIMEO_ID = '444288343'

/** 16:9 Vimeo the visitor starts. No autoplay until the play control. */
export function YcaFilm() {
  const [poster, setPoster] = useState<string | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const ac = new AbortController()
    fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${VIMEO_ID}`)}`,
      { signal: ac.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { thumbnail_url?: string } | null) => {
        if (data?.thumbnail_url) {
          setPoster(data.thumbnail_url.replace(/_\d+x\d+/, '_1280x720'))
        }
      })
      .catch(() => {})
    return () => ac.abort()
  }, [])

  return (
    <figure className={styles.film}>
      {playing ? (
        <iframe
          className={styles.filmMedia}
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
          title="Young Champion Ambassador film"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          {poster ? (
            <img
              className={styles.filmMedia}
              src={poster}
              alt=""
            />
          ) : null}
          <button
            type="button"
            className={styles.filmPlay}
            aria-label="Play the Young Champion Ambassador film"
            onClick={() => setPlaying(true)}
          >
            <span className={styles.filmPlayIcon} aria-hidden>
              <svg viewBox="0 0 12 14" fill="currentColor">
                <path d="M1 1.2v11.6L11 7 1 1.2z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </figure>
  )
}
