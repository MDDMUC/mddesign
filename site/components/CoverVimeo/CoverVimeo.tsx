'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '@/app/page.module.css'

type CoverVimeoProps = {
  /** Numeric Vimeo video id, e.g. `"1151639550"`. */
  id: string
  className?: string
  /** Start playback at this offset in seconds (hash `#t=`). */
  startAt?: number
  /** Tile mode: gray poster until the parent link is hovered or focused. */
  playOnHover?: boolean
}

/**
 * Muted looping Vimeo background embed for case covers.
 * Skips the iframe under prefers-reduced-motion.
 */
export function CoverVimeo({
  id,
  className,
  startAt,
  playOnHover = false,
}: CoverVimeoProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [active, setActive] = useState(false)
  const [poster, setPoster] = useState<string | null>(null)
  const rootRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (!playOnHover) return
    const ac = new AbortController()
    fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(`https://vimeo.com/${id}`)}`,
      { signal: ac.signal },
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((data: { thumbnail_url?: string } | null) => {
        if (data?.thumbnail_url) setPoster(data.thumbnail_url)
      })
      .catch(() => {})
    return () => ac.abort()
  }, [id, playOnHover])

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
  }, [playOnHover, poster])

  if (reduceMotion && !playOnHover) return null
  if (playOnHover && (reduceMotion || !active)) {
    const frame = `${className ?? styles.coverVideo} ${styles.coverStill}`
    return (
      <span ref={rootRef} style={{ display: 'contents' }}>
        {poster ? (
          <img className={frame} src={poster} alt="" />
        ) : (
          <span className={frame} />
        )}
      </span>
    )
  }

  const t =
    startAt != null && startAt > 0 ? `#t=${Math.floor(startAt)}s` : ''
  const src = `https://player.vimeo.com/video/${id}?background=1&autoplay=1&loop=1&byline=0&title=0&portrait=0&muted=1&quality=1080p&transparent=0${t}`

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
