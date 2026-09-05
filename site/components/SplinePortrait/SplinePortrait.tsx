'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import type { Application } from '@splinetool/runtime'
import styles from './SplinePortrait.module.css'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

type Props = {
  scene: string
  ariaLabel?: string
}

function hideSplineWatermark(app: Application) {
  try {
    const pipeline = (app as unknown as { _renderer?: { pipeline?: { setWatermark?: (v: null) => void } } })
      ._renderer?.pipeline
    pipeline?.setWatermark?.(null)
  } catch {
    // Runtime internals may change; fail silent.
  }
}

export function SplinePortrait({ scene, ariaLabel }: Props) {
  const [shouldMount, setShouldMount] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mobile gate — Spline + WebGL is too performance-intensive on phones
  // and can crash low-end devices. Skip the scene entirely on small viewports.
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

  const handleLoad = (app: Application) => {
    hideSplineWatermark(app)
    // Brief settle window before fading in — covers Spline's ResizeObserver
    // pass + first render frame.
    window.setTimeout(() => {
      hideSplineWatermark(app)
      setLoaded(true)
    }, 300)
  }

  if (isMobile) return null

  return (
    <div
      className={styles.canvas}
      data-loaded={loaded ? 'true' : 'false'}
      aria-label={ariaLabel}
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
