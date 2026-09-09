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

function NavLinks({
  active,
  inert,
}: {
  active: (href: string) => boolean
  inert?: boolean
}) {
  return (
    <>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={styles.link}
          aria-current={active(l.href) ? 'page' : undefined}
          tabIndex={inert ? -1 : undefined}
        >
          {l.label}
        </Link>
      ))}
    </>
  )
}

function blurHomeRailFocus() {
  if (!(document.activeElement instanceof HTMLElement)) return
  const rail = document.querySelector('nav[data-layout="rail"][data-page="home"]')
  if (rail?.contains(document.activeElement)) {
    document.activeElement.blur()
  }
}

export function SiteNav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [visible, setVisible] = useState(true)
  const [pill, setPill] = useState(false)
  const [railOk, setRailOk] = useState(false)
  /** Homepage left rail: only after logos, and only while scrolling up. */
  const [homeRailVisible, setHomeRailVisible] = useState(false)
  const lastY = useRef(0)

  const isWorkIndex = pathname === '/work'
  const isCaseStudy = pathname.startsWith('/work/')
  const isStudio = pathname === '/studio'
  /* Left vertical rail on case studies + studio (when wide enough). */
  const isRail = (isCaseStudy || isStudio) && railOk

  const layout = isRail ? 'rail' : isWorkIndex ? 'end' : 'bar'
  const route = isWorkIndex || isCaseStudy || isStudio ? 'work' : 'site'
  const showNav = visible

  const isActive = useCallback(
    (href: string) => {
      if (href === '/work') {
        return pathname === '/work' || pathname.startsWith('/work/')
      }
      return pathname === href
    },
    [pathname],
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

    const logosThreshold = () => {
      const el = document.getElementById('clients')
      if (!el) return Number.POSITIVE_INFINITY
      return el.getBoundingClientRect().bottom + window.scrollY
    }

    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y

      if (isHome) {
        /* Hero owns the horizontal links (absolute in .hero).
           Left rail only past logos + scroll up. */
        const pastLogos = y > logosThreshold()
        if (!pastLogos || !railOk) {
          setHomeRailVisible((was) => {
            if (was) blurHomeRailFocus()
            return false
          })
          return
        }
        if (Math.abs(delta) < 4) return
        if (delta > 0) {
          setHomeRailVisible((was) => {
            if (was) blurHomeRailFocus()
            return false
          })
        } else {
          setHomeRailVisible(true)
        }
        return
      }

      if (y <= TOP_THRESHOLD) {
        setVisible(true)
        setPill(false)
        return
      }

      if (Math.abs(delta) < 4) return

      if (delta > 0) {
        setVisible(false)
      } else {
        setVisible(true)
        setPill(true)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome, railOk])

  // Reset chrome when changing routes (land at top of new page).
  useEffect(() => {
    setVisible(true)
    setPill(window.scrollY > TOP_THRESHOLD)
    setHomeRailVisible(false)
    lastY.current = window.scrollY
  }, [pathname])

  /* Homepage: only the scroll-up left rail (hero bar lives in page.tsx). */
  if (isHome) {
    if (!railOk) return null

    return (
      <nav
        className={styles.nav}
        aria-label={homeRailVisible ? 'Primary' : undefined}
        data-layout="rail"
        data-route="work"
        data-page="home"
        data-visible={homeRailVisible ? 'true' : 'false'}
        data-pill="false"
        aria-hidden={homeRailVisible ? undefined : true}
      >
        <NavLinks active={isActive} inert={!homeRailVisible} />
      </nav>
    )
  }

  return (
    <nav
      className={styles.nav}
      aria-label="Primary"
      data-layout={layout}
      data-route={route}
      data-visible={showNav ? 'true' : 'false'}
      data-pill={pill ? 'true' : 'false'}
    >
      <NavLinks active={isActive} inert={!showNav} />
    </nav>
  )
}
