'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './SiteNav.module.css'

const links = [
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
] as const

const TOP_THRESHOLD = 24
/** Below this, case studies use the horizontal bar — no gutter for a rail. */
const RAIL_MIN_WIDTH = 720

export function SiteNav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [pill, setPill] = useState(false)
  const [railOk, setRailOk] = useState(false)
  const lastY = useRef(0)

  const isWorkIndex = pathname === '/work'
  const isCaseStudy = pathname.startsWith('/work/')
  const isStudio = pathname === '/studio'
  /* Left vertical rail on case studies + studio (when wide enough). */
  const isRail = (isCaseStudy || isStudio) && railOk

  const layout = isRail ? 'rail' : isWorkIndex ? 'end' : 'bar'
  const route = isWorkIndex || isCaseStudy || isStudio ? 'work' : 'site'

  const isActive = useCallback(
    (href: string) => {
      if (href === '/work') {
        return pathname === '/work' || pathname.startsWith('/work/')
      }
      return pathname === href
    },
    [pathname]
  )

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${RAIL_MIN_WIDTH}px)`)
    const apply = () => setRailOk(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    lastY.current = window.scrollY

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y

      if (y <= TOP_THRESHOLD) {
        setVisible(true)
        setPill(false)
        return
      }

      // Ignore tiny jitter.
      if (Math.abs(delta) < 4) return

      if (delta > 0) {
        setVisible(false)
      } else {
        setVisible(true)
        setPill(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Reset chrome when changing routes (land at top of new page).
  useEffect(() => {
    setVisible(true)
    setPill(window.scrollY > TOP_THRESHOLD)
    lastY.current = window.scrollY
  }, [pathname])

  return (
    <nav
      className={styles.nav}
      aria-label="Primary"
      data-layout={layout}
      data-route={route}
      data-visible={visible ? 'true' : 'false'}
      data-pill={pill ? 'true' : 'false'}
    >
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={styles.link}
          aria-current={isActive(l.href) ? 'page' : undefined}
          tabIndex={visible ? undefined : -1}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  )
}
