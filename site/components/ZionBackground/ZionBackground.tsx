'use client'

import { useEffect, useRef } from 'react'
import styles from './ZionBackground.module.css'

/**
 * ZionBackground - Matrix Reloaded Zion Control Room Aesthetic
 *
 * Minimalist orbital trajectories with traveling dots
 * Elegant, slow-moving, architectural precision
 */
export default function ZionBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={styles.container} aria-hidden="true">
      {/* Orbital System */}
      <svg
        className={styles.orbitalSystem}
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradient for subtle depth */}
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.15" />
          </linearGradient>

          {/* Dot gradient for glow effect */}
          <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Primary Orbit - Large ellipse */}
        <g className={styles.orbitGroup}>
          <ellipse
            className={styles.orbitPath}
            cx="900"
            cy="400"
            rx="380"
            ry="280"
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="0.5"
          />
          {/* Traveling dot on primary orbit */}
          <circle className={styles.travelingDot1} r="3" fill="#000000">
            <animateMotion
              dur="45s"
              repeatCount="indefinite"
              path="M 900 120 A 380 280 0 1 1 899.99 120"
            />
          </circle>
          {/* Secondary dot - opposite phase */}
          <circle className={styles.travelingDot2} r="2" fill="#000000" opacity="0.5">
            <animateMotion
              dur="45s"
              repeatCount="indefinite"
              begin="-22.5s"
              path="M 900 120 A 380 280 0 1 1 899.99 120"
            />
          </circle>
        </g>

        {/* Secondary Orbit - Medium, tilted */}
        <g className={styles.orbitGroup} style={{ transform: 'rotate(-15deg)', transformOrigin: '750px 350px' }}>
          <ellipse
            className={styles.orbitPath}
            cx="750"
            cy="350"
            rx="250"
            ry="180"
            fill="none"
            stroke="#000000"
            strokeWidth="0.5"
            strokeOpacity="0.1"
          />
          <circle className={styles.travelingDot3} r="2.5" fill="#000000" opacity="0.7">
            <animateMotion
              dur="35s"
              repeatCount="indefinite"
              path="M 750 170 A 250 180 0 1 1 749.99 170"
            />
          </circle>
        </g>

        {/* Tertiary Orbit - Small, inner */}
        <g className={styles.orbitGroup} style={{ transform: 'rotate(8deg)', transformOrigin: '850px 380px' }}>
          <ellipse
            className={styles.orbitPath}
            cx="850"
            cy="380"
            rx="150"
            ry="100"
            fill="none"
            stroke="#000000"
            strokeWidth="0.5"
            strokeOpacity="0.06"
          />
          <circle className={styles.travelingDot4} r="1.5" fill="#000000" opacity="0.4">
            <animateMotion
              dur="25s"
              repeatCount="indefinite"
              begin="-10s"
              path="M 850 280 A 150 100 0 1 1 849.99 280"
            />
          </circle>
        </g>

        {/* Crosshair Element - Top Right */}
        <g className={styles.crosshair} transform="translate(1050, 150)">
          <line x1="-20" y1="0" x2="-8" y2="0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="8" y1="0" x2="20" y2="0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="0" y1="-20" x2="0" y2="-8" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.2" />
          <line x1="0" y1="8" x2="0" y2="20" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.2" />
          <circle cx="0" cy="0" r="4" fill="none" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.15" />
        </g>

        {/* Crosshair Element - Bottom */}
        <g className={styles.crosshair} transform="translate(200, 650)">
          <line x1="-15" y1="0" x2="-6" y2="0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="6" y1="0" x2="15" y2="0" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="0" y1="-15" x2="0" y2="-6" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.15" />
          <line x1="0" y1="6" x2="0" y2="15" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.15" />
          <circle cx="0" cy="0" r="3" fill="none" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.1" />
        </g>

        {/* Arc segment decorations */}
        <path
          className={styles.arcDecoration}
          d="M 100 200 A 80 80 0 0 1 160 140"
          fill="none"
          stroke="#000000"
          strokeWidth="0.5"
          strokeOpacity="0.08"
        />
        <path
          className={styles.arcDecoration}
          d="M 1100 600 A 60 60 0 0 1 1140 660"
          fill="none"
          stroke="#000000"
          strokeWidth="0.5"
          strokeOpacity="0.08"
        />
      </svg>

      {/* Technical Readout - Top Left */}
      <div className={styles.techReadout + ' ' + styles.topLeft}>
        <div className={styles.readoutLine}>
          <span className={styles.readoutLabel}>SYS</span>
          <span className={styles.readoutValue}>ACTIVE</span>
        </div>
        <div className={styles.readoutLine}>
          <span className={styles.readoutLabel}>LOC</span>
          <span className={styles.readoutValue}>48.1351° N</span>
        </div>
      </div>

      {/* Technical Readout - Bottom Right */}
      <div className={styles.techReadout + ' ' + styles.bottomRight}>
        <div className={styles.readoutLine}>
          <span className={styles.readoutValue}>11.5820° E</span>
        </div>
        <div className={styles.readoutLine}>
          <span className={styles.readoutLabel}>STATUS</span>
          <span className={styles.readoutDot} />
        </div>
      </div>

      {/* Corner Brackets */}
      <div className={styles.cornerBracket + ' ' + styles.cornerTopLeft}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 0 20 L 0 0 L 20 0" fill="none" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>
      </div>
      <div className={styles.cornerBracket + ' ' + styles.cornerBottomRight}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <path d="M 20 40 L 40 40 L 40 20" fill="none" stroke="#000000" strokeWidth="0.5" strokeOpacity="0.1" />
        </svg>
      </div>
    </div>
  )
}
