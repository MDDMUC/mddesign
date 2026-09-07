'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './ReturnToTop.module.css'

const JITTER = 4

export function ReturnToTop() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const lastY = useRef(0)
  const pastFold = useRef(false)

  const isHome = pathname === '/'

  useEffect(() => {
    if (!isHome) {
      setVisible(false)
      return
    }

    lastY.current = window.scrollY
    pastFold.current = window.scrollY > window.innerHeight * 0.85

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y
      const fold = window.innerHeight * 0.85

      if (y <= fold) {
        pastFold.current = false
        setVisible(false)
        return
      }

      pastFold.current = true

      if (Math.abs(delta) < JITTER) return

      if (delta > 0) {
        setVisible(false)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  if (!isHome) return null

  const goTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={styles.button}
      data-visible={visible ? 'true' : 'false'}
      onClick={goTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      Return to Top
    </button>
  )
}
