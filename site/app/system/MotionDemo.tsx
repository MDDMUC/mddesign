'use client'

import { useState } from 'react'
import styles from './page.module.css'

const items = [
  { cls: 'reveal-rise', label: 'RISE', note: '12px up + fade. Default body reveal.' },
  { cls: 'reveal-fade', label: 'FADE', note: 'Opacity only. Captions, fineprint, secondary chrome.' },
  { cls: 'reveal-mask', label: 'MASK', note: 'Clip-path bottom→top. Display headlines.' },
  { cls: 'reveal-clip', label: 'CLIP', note: 'Inset wipe from horizontal centre. Images, frames.' },
]

export function MotionDemo() {
  const [key, setKey] = useState(0)
  return (
    <div className={styles.motionDemo}>
      <div className={styles.motionToolbar}>
        <button
          type="button"
          className={`${styles.btn} ${styles.btn_outline}`}
          onClick={() => setKey((k) => k + 1)}
        >
          Replay
        </button>
        <span className={styles.fineprint}>Refresh or click replay to retrigger.</span>
      </div>

      <div key={key} className={styles.motionGrid}>
        {items.map((it) => (
          <div key={it.cls} className={styles.motionCell}>
            <span className={styles.coord}>{it.cls}</span>
            <div className={styles.motionFrame}>
              <span className={`${styles.motionMark} ${styles[it.cls.replace('-', '_')] ?? ''} ${it.cls}`}>
                {it.label}
              </span>
            </div>
            <span className={styles.coordNote}>{it.note}</span>
          </div>
        ))}

        <div className={styles.motionCell}>
          <span className={styles.coord}>reveal-line</span>
          <div className={styles.motionFrame}>
            <div className={`${styles.motionLineTrack} reveal-line`} />
          </div>
          <span className={styles.coordNote}>scaleX from left. Hairlines and dividers.</span>
        </div>

        <div className={styles.motionCell}>
          <span className={styles.coord}>stagger 1 → 5</span>
          <div className={styles.motionFrame}>
            <div className={styles.staggerRow}>
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`${styles.staggerDot} reveal-rise reveal-stagger-${n}`}
                />
              ))}
            </div>
          </div>
          <span className={styles.coordNote}>Children share a class, each takes a stagger delay token.</span>
        </div>
      </div>
    </div>
  )
}
