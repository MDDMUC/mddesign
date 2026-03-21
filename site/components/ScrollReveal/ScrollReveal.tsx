'use client'

import { ReactNode, CSSProperties } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import styles from './ScrollReveal.module.css'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  delay?: number
  duration?: number
  distance?: number
  className?: string
  style?: CSSProperties
  threshold?: number
}

/**
 * ScrollReveal - Elegant fade and slide animations on scroll
 *
 * Wraps content with scroll-triggered reveal animation
 * Subtle, refined motion for Zion aesthetic
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 20,
  className = '',
  style = {},
  threshold = 0.1,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold })

  const getTransform = () => {
    if (direction === 'none') return 'translate(0, 0)'

    const transforms: Record<string, string> = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
    }
    return transforms[direction]
  }

  const animationStyle: CSSProperties = {
    ...style,
    '--reveal-delay': `${delay}ms`,
    '--reveal-duration': `${duration}ms`,
    '--reveal-transform': getTransform(),
  } as CSSProperties

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  )
}

/**
 * ScrollRevealGroup - For staggered child animations
 */
interface ScrollRevealGroupProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function ScrollRevealGroup({
  children,
  staggerDelay = 100,
  className = '',
}: ScrollRevealGroupProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.05 })

  return (
    <div
      ref={ref}
      className={`${styles.revealGroup} ${isVisible ? styles.groupVisible : ''} ${className}`}
      style={{ '--stagger-delay': `${staggerDelay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
