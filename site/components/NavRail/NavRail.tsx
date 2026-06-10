'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavRail.module.css'

type LinkItem = { href: string; label: string }

const links: LinkItem[] = [
  { href: '/work', label: 'Work' },
  { href: '/studio', label: 'Studio' },
  { href: '/contact', label: 'Contact' },
]

export function NavRail() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [shortcut, setShortcut] = useState('Ctrl K')

  useEffect(() => {
    setShortcut(/Mac|iPhone|iPad/i.test(navigator.platform) ? '⌘ K' : 'Ctrl K')
  }, [])

  // Close overlay on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock background scroll while overlay open.
  useEffect(() => {
    if (!open) return
    const orig = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = orig
    }
  }, [open])

  // ESC closes the overlay.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = useCallback(
    (href: string) => {
      if (href === '/work') {
        return pathname === '/work' || pathname.startsWith('/work/')
      }
      return pathname === href
    },
    [pathname]
  )

  const openCommandMenu = () => {
    setOpen(false)
    // Give the overlay close a tick before the palette opens to avoid a stacked-modal flash.
    window.setTimeout(() => {
      document.dispatchEvent(new CustomEvent('command-menu:toggle'))
    }, 80)
  }

  return (
    <>
      <header className={styles.rail} aria-label="Site navigation">
        <Link href="/" className={styles.wordmark}>
          MDDS
        </Link>
        <span className={styles.spacer} aria-hidden="true" />
        <nav className={styles.links} aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.link}
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <span className={styles.divider} aria-hidden="true" />
        <button
          type="button"
          className={styles.kbd}
          onClick={() =>
            document.dispatchEvent(new CustomEvent('command-menu:toggle'))
          }
          aria-label="Open command menu"
        >
          {shortcut}
        </button>
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav-overlay"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      {open && (
        <div
          id="mobile-nav-overlay"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className={styles.overlayNav} aria-label="Mobile primary">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={styles.overlayLink}
                aria-current={isActive(l.href) ? 'page' : undefined}
              >
                {l.label}
              </Link>
            ))}
            <button
              type="button"
              className={styles.overlaySearch}
              onClick={openCommandMenu}
            >
              Search →
            </button>
          </nav>
        </div>
      )}
    </>
  )
}
