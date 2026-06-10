'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './CommandMenu.module.css'

type Item = {
  label: string
  shortcut: string
  href?: string
  action?: () => void | Promise<void>
}

const EMAIL = 'hello@martindrexler.com'

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [active, setActive] = useState(0)
  const [emailCopied, setEmailCopied] = useState(false)
  const itemsRef = useRef<(HTMLLIElement | null)[]>([])

  const close = useCallback(() => {
    setClosing(true)
    window.setTimeout(() => {
      setOpen(false)
      setClosing(false)
      setActive(0)
    }, 80)
  }, [])

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1600)
    } catch {
      // Clipboard rejected — silently skip; user can still see the email.
    }
  }, [])

  const items: Item[] = [
    { label: 'Go to Work', shortcut: 'G W', href: '/work' },
    { label: 'Go to Studio', shortcut: 'G S', href: '/studio' },
    { label: 'Go to Contact', shortcut: 'G C', href: '/contact' },
    { label: 'Open Colophon', shortcut: '', href: '/colophon' },
    {
      label: emailCopied ? '[ EMAIL COPIED ]' : 'Copy email address',
      shortcut: '@',
      action: copyEmail,
    },
  ]

  const activate = useCallback(
    (item: Item) => {
      if (item.href) {
        router.push(item.href)
        close()
      } else if (item.action) {
        void item.action()
        // Don't close — let the user see the [COPIED] state inline.
      }
    },
    [router, close]
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => {
          if (o) {
            close()
            return o
          }
          return true
        })
        return
      }

      if (!open) return

      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          close()
          break
        case 'ArrowDown':
          e.preventDefault()
          setActive((a) => (a + 1) % items.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setActive((a) => (a - 1 + items.length) % items.length)
          break
        case 'Home':
          e.preventDefault()
          setActive(0)
          break
        case 'End':
          e.preventDefault()
          setActive(items.length - 1)
          break
        case 'Enter':
          e.preventDefault()
          activate(items[active]!)
          break
      }
    }

    const onToggle = () => {
      setOpen((o) => {
        if (o) {
          close()
          return o
        }
        return true
      })
    }

    document.addEventListener('keydown', onKey)
    document.addEventListener('command-menu:toggle', onToggle)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('command-menu:toggle', onToggle)
    }
  }, [open, active, activate, close, items])

  // Lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  // Scroll active item into view (useful for narrow viewports).
  useEffect(() => {
    if (!open) return
    itemsRef.current[active]?.scrollIntoView({ block: 'nearest' })
  }, [open, active])

  if (!open) return null

  return (
    <div
      className={`${styles.backdrop} ${closing ? styles.backdropClosing : ''}`}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
    >
      <div
        className={`${styles.sheet} ${closing ? styles.sheetClosing : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <span className={styles.label}>Command</span>
          <span className={styles.hint}>ESC</span>
        </div>
        <ul className={styles.list} role="listbox" aria-label="Commands">
          {items.map((item, i) => (
            <li
              key={item.label}
              ref={(el) => {
                itemsRef.current[i] = el
              }}
              className={`${styles.item} ${i === active ? styles.itemActive : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => activate(item)}
              role="option"
              aria-selected={i === active}
            >
              <span className={styles.itemLabel}>{item.label}</span>
              <span className={styles.itemShortcut}>{item.shortcut}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
