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

export function SiteNav() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [pill, setPill] = useState(false)
  const lastY = useRef(0)

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
