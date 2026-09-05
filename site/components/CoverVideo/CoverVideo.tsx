'use client'

import { useEffect, useRef } from 'react'
import styles from '@/app/page.module.css'

type CoverVideoProps = {
  /** Prefer WebM for Chrome/Firefox/Android; MP4 is Safari/iOS fallback. */
  webm: string
  mp4: string
  className?: string
}

/** Muted case-cover loop. Pauses under prefers-reduced-motion. */
export function CoverVideo({ webm, mp4, className }: CoverVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      if (mq.matches) {
        el.pause()
        el.removeAttribute('autoplay')
      } else {
        void el.play().catch(() => {
          /* autoplay may be blocked; ignore */
        })
      }
    }

    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  return (
    <video
      ref={ref}
      className={className ?? styles.coverVideo}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  )
}
