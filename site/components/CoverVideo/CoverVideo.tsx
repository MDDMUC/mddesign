'use client'

import { useEffect, useRef } from 'react'
import styles from '@/app/page.module.css'

type CoverVideoProps = {
  /** Prefer WebM for Chrome/Firefox/Android; MP4 is Safari/iOS fallback. */
  webm: string
  mp4: string
  className?: string
  /**
   * Tile mode: hold a gray first frame until the parent link is hovered
   * or focused. Case-study heroes leave this off and keep autoplay.
   */
  playOnHover?: boolean
}

/** Muted case-cover loop. Pauses under prefers-reduced-motion. */
export function CoverVideo({
  webm,
  mp4,
  className,
  playOnHover = false,
}: CoverVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!playOnHover) {
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
    }

    const hold = () => {
      el.pause()
      try {
        el.currentTime = 0
      } catch {
        /* metadata not ready yet */
      }
    }
    const play = () => {
      if (mq.matches) return
      void el.play().catch(() => {})
    }
    const host = el.closest('a')
    hold()
    host?.addEventListener('mouseenter', play)
    host?.addEventListener('mouseleave', hold)
    host?.addEventListener('focus', play)
    host?.addEventListener('blur', hold)
    return () => {
      host?.removeEventListener('mouseenter', play)
      host?.removeEventListener('mouseleave', hold)
      host?.removeEventListener('focus', play)
      host?.removeEventListener('blur', hold)
    }
  }, [playOnHover])

  return (
    <video
      ref={ref}
      className={`${className ?? styles.coverVideo}${playOnHover ? ` ${styles.coverStill}` : ''}`}
      autoPlay={!playOnHover}
      muted
      loop
      playsInline
      preload={playOnHover ? 'auto' : 'metadata'}
      aria-hidden
    >
      <source src={webm} type="video/webm" />
      <source src={mp4} type="video/mp4" />
    </video>
  )
}
