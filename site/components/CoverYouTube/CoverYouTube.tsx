'use client'

import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css'

type CoverYouTubeProps = {
  /** YouTube video id, e.g. `"rqn2og2qVUw"`. */
  id: string
  className?: string
}

/**
 * Muted looping YouTube background embed for case covers.
 * Skips the iframe under prefers-reduced-motion.
 */
export function CoverYouTube({ id, className }: CoverYouTubeProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  if (reduceMotion) return null

  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    loop: '1',
    playlist: id,
    playsinline: '1',
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    /* Force captions off for muted cover loops. */
    cc_load_policy: '0',
    disablekb: '1',
    fs: '0',
  })
  const src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`

  return (
    <iframe
      className={className ?? styles.coverVideo}
      src={src}
      title=""
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      loading="lazy"
      aria-hidden
    />
  )
}
