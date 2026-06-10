'use client'

import { useEffect, useState } from 'react'
import styles from './ChromeStrip.module.css'

type Props = {
  version: string
  commit: string
  buildDate: string
}

export function ChromeStrip({ version, commit, buildDate }: Props) {
  const [progress, setProgress] = useState(0)
  const [shortcut, setShortcut] = useState('Ctrl K')

  useEffect(() => {
    setShortcut(/Mac|iPhone|iPad/i.test(navigator.platform) ? '⌘ K' : 'Ctrl K')
  }, [])

  useEffect(() => {
    let raf = 0
    let ticking = false

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const p = max > 0 ? window.scrollY / max : 0
      setProgress(Math.max(0, Math.min(1, p)))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty('--chrome-h', '36px')
    return () => {
      document.documentElement.style.removeProperty('--chrome-h')
    }
  }, [])

  return (
    <footer className={styles.chrome} aria-label="Site chrome">
      <div className={styles.left}>
        <a href="/colophon" className={styles.wordmark}>
          MD_DESIGN
        </a>
        <span className={styles.sep}>/</span>
        <span>v{version}</span>
        <span className={styles.sep}>·</span>
        <span>{commit}</span>
        <span className={styles.sep}>·</span>
        <span>BUILT {buildDate}</span>
      </div>
      <div className={styles.right}>
        <span className={styles.progress}>{progress.toFixed(3)}</span>
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
      </div>
    </footer>
  )
}
