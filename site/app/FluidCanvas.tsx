'use client'

import { useEffect, useRef } from 'react'
import { createFluid, type FluidController } from './fluid'

type Props = {
  className?: string
}

export function FluidCanvas({ className }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return

    // Respect prefers-reduced-motion: don't even boot the sim.
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return

    let controller: FluidController | null = null
    try {
      controller = createFluid(canvas)
    } catch (err) {
      console.warn('[lab/fluid] sim init failed', err)
      return
    }
    if (!controller) return

    const onResize = () => controller!.resize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      controller!.dispose()
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
