import React from 'react'
import styles from './ZionContainer.module.css'

export interface ZionContainerProps {
  children: React.ReactNode
  variant?: 'default' | 'panel' | 'card' | 'callout'
  chamfer?: 'small' | 'medium' | 'large' | 'xlarge'
  border?: boolean
  className?: string
  as?: 'div' | 'section' | 'article' | 'aside'
}

/**
 * ZionContainer - Container component with chamfered corners
 *
 * Variants:
 * - default: Basic container with padding
 * - panel: Floating panel with background
 * - card: Card style with border and padding
 * - callout: Highlighted callout box
 *
 * Chamfer sizes:
 * - small (4px): Form inputs, subtle elements
 * - medium (8px): Standard buttons, cards, containers (default)
 * - large (12px): Callout panels, featured sections
 * - xlarge (16px): Hero sections, major panels
 */
export default function ZionContainer({
  children,
  variant = 'default',
  chamfer = 'medium',
  border = true,
  className = '',
  as: Component = 'div',
}: ZionContainerProps) {
  // If no border, use simple structure
  if (!border) {
    const classNames = [
      styles.container,
      styles[`chamfer-${chamfer}`],
      styles[variant],
      styles.noBorder,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return <Component className={classNames}>{children}</Component>
  }

  // With border, use nested div structure
  const outerClassNames = [
    styles.container,
    styles[`chamfer-${chamfer}`],
    styles[`${variant}Outer`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const innerClassNames = [
    styles.inner,
    styles[variant],
    styles[`chamfer-${chamfer}-inner`],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={outerClassNames}>
      <div className={innerClassNames}>{children}</div>
    </Component>
  )
}
