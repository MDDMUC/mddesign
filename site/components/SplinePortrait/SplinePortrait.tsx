'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './SplinePortrait.module.css'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
})

type Props = {
  scene: string
  ariaLabel?: string
}

export function SplinePortrait({ scene, ariaLabel }: Props) {
  const [shouldMount, setShouldMount] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Defer Spline mount one tick so the container is fully measured before
  // Spline initialises its WebGL context.
  useEffect(() => {
    const t = window.setTimeout(() => setShouldMount(true), 0)
    return () => window.clearTimeout(t)
  }, [])

  const handleLoad = () => {
    // Brief settle window before fading in — covers Spline's ResizeObserver
    // pass + first render frame.
    window.setTimeout(() => {
      setLoaded(true)
    }, 300)
  }

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
