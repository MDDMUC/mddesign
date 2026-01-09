import React from 'react'
import styles from './ZionBox.module.css'

export interface ZionBoxProps {
  children: React.ReactNode
  chamfer?: 'none' | 'small' | 'medium' | 'large' | 'xlarge'
  border?: boolean
  borderWeight?: 'hairline' | 'thin' | 'medium'
  background?: 'transparent' | 'primary' | 'alt-1' | 'alt-2' | 'tinted'
  padding?: 'none' | 'small' | 'medium' | 'large'
  className?: string
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'nav'
  onClick?: () => void
  role?: string
  'aria-label'?: string
}

/**
 * ZionBox - Reusable div component with chamfered styling
 *
 * A flexible container that can be used for any layout element with optional
 * chamfered corners, borders, backgrounds, and padding.
 *
 * Chamfer options:
 * - none: No chamfering (sharp corners)
 * - small (4px): Form inputs, subtle elements
 * - medium (8px): Standard containers (default)
 * - large (12px): Featured sections
 * - xlarge (16px): Hero sections
 *
 * Background options:
 * - transparent: No background (default)
 * - primary: White surface
 * - alt-1: Light gray surface
 * - alt-2: Medium gray surface
 * - tinted: Blue-tinted surface
 */
export default function ZionBox({
  children,
  chamfer = 'none',
  border = false,
  borderWeight = 'thin',
  background = 'transparent',
  padding = 'none',
  className = '',
  as: Component = 'div',
  onClick,
  role,
  'aria-label': ariaLabel,
}: ZionBoxProps) {
  // If no border or no chamfer, use simple structure
  if (!border || chamfer === 'none') {
    const classNames = [
      styles.box,
      chamfer !== 'none' && styles[`chamfer-${chamfer}`],
      background !== 'transparent' && styles[`bg-${background}`],
      padding !== 'none' && styles[`padding-${padding}`],
      onClick && styles.clickable,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <Component
        className={classNames}
        onClick={onClick}
        role={role}
        aria-label={ariaLabel}
      >
        {children}
      </Component>
    )
  }

  // With border and chamfer, use nested div structure
  const outerClassNames = [
    styles.box,
    styles[`chamfer-${chamfer}`],
    border && styles[`border-${borderWeight}-outer`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const innerClassNames = [
    styles.inner,
    styles[`chamfer-${chamfer}-inner`],
    border && styles[`border-${borderWeight}-inner`],
    background !== 'transparent' && styles[`bg-${background}`],
    padding !== 'none' && styles[`padding-${padding}`],
    onClick && styles.clickable,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component
      className={outerClassNames}
      onClick={onClick}
      role={role}
      aria-label={ariaLabel}
    >
      <div className={innerClassNames}>{children}</div>
    </Component>
  )
}
