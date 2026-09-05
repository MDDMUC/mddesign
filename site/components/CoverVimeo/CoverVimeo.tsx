'use client'

import { useEffect, useState } from 'react'
import styles from '@/app/page.module.css'

type CoverVimeoProps = {
  /** Numeric Vimeo video id, e.g. `"1151639550"`. */
  id: string
  className?: string
}

/**
 * Muted looping Vimeo background embed for case covers.
 * Skips the iframe under prefers-reduced-motion.
 */
export function CoverVimeo({ id, className }: CoverVimeoProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  if (reduceMotion) return null

  const src = `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=1080p&transparent=0`

  return (
    <iframe
      className={className ?? styles.coverVideo}
      src={src}
      title=""
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
      aria-hidden
    />
  )
}
