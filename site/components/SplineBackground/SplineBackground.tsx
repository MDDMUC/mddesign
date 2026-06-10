'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './SplineBackground.module.css'

// Dynamic import disables SSR — Spline runs in the browser only.
// Avoids the async-client-component conflict from the `/next` build entry.
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

type Props = {
  scene: string
}

/* Minimum wall-clock time from page mount before Spline is allowed to fade
   in. Set to overlap with the tail of the type choreography (~2.9s) so the
   scene emerges alongside the last text settling rather than waiting for it
   to fully finish. */
const MIN_REVEAL_DELAY = 1500

export function SplineBackground({ scene }: Props) {
  const [shouldMount, setShouldMount] = useState(false)
  const [splineReady, setSplineReady] = useState(false)
  const [minDelayElapsed, setMinDelayElapsed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile gate — Spline + WebGL is too performance-intensive on phones and
  // can crash low-end devices. Skip the scene entirely on small viewports.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px)')
    const handler = () => setIsMobile(mq.matches)
    handler()
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Defer Spline mount one tick so the container is fully measured before
  // Spline initialises its WebGL context.
  useEffect(() => {
    if (isMobile) return
    const t = window.setTimeout(() => setShouldMount(true), 0)
    return () => window.clearTimeout(t)
  }, [isMobile])

  // Independent minimum-delay timer. Tied to page mount, not to onLoad.
  // Even if Spline finishes loading instantly, we don't reveal until this fires.
  useEffect(() => {
    if (isMobile) return
    const t = window.setTimeout(() => setMinDelayElapsed(true), MIN_REVEAL_DELAY)
    return () => window.clearTimeout(t)
  }, [isMobile])

  // Reveal only when both conditions are satisfied: scene loaded + settled,
  // AND minimum delay since mount has passed.
  useEffect(() => {
    if (splineReady && minDelayElapsed) {
      setLoaded(true)
    }
  }, [splineReady, minDelayElapsed])

  const handleLoad = () => {
    // 300ms after Spline reports loaded — covers internal ResizeObserver +
    // camera measurement. After this, splineReady is true; whether the scene
    // actually appears depends on whether minDelayElapsed has also fired.
    window.setTimeout(() => {
      setSplineReady(true)
    }, 300)
  }

  if (isMobile) return null

  return (
    <div
      className={styles.canvas}
      data-loaded={loaded ? 'true' : 'false'}
      aria-hidden="true"
    >
      {shouldMount && (
        <Spline
          scene={scene}
          onLoad={handleLoad}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </div>
  )
}
