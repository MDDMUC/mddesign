'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/app/page.module.css'

type CoverYouTubeProps = {
  /** YouTube video id, e.g. `"rqn2og2qVUw"`. */
  id: string
  className?: string
  /** Tile mode: gray poster until the parent link is hovered or focused. */
  playOnHover?: boolean
}

/**
 * Muted looping YouTube background embed for case covers.
 * Skips the iframe under prefers-reduced-motion.
 */
export function CoverYouTube({
  id,
  className,
  playOnHover = false,
}: CoverYouTubeProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [active, setActive] = useState(false)
  const rootRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!playOnHover) return
    const host = rootRef.current?.closest('a')
    if (!host) return
    const on = () => setActive(true)
    const off = () => setActive(false)
    host.addEventListener('mouseenter', on)
    host.addEventListener('mouseleave', off)
    host.addEventListener('focus', on)
    host.addEventListener('blur', off)
    return () => {
      host.removeEventListener('mouseenter', on)
      host.removeEventListener('mouseleave', off)
      host.removeEventListener('focus', on)
      host.removeEventListener('blur', off)
    }
  }, [playOnHover])

  if (reduceMotion && !playOnHover) return null
  if (playOnHover && (reduceMotion || !active)) {
    return (
      <img
        ref={rootRef}
        className={`${className ?? styles.coverVideo} ${styles.coverStill}`}
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
      />
    )
  }

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
