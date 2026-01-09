import React from 'react'
import Link from 'next/link'
import styles from './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'default' | 'small' | 'large'
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
      {loading && (
        <span className={styles.spinner} aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle
              cx="8"
              cy="8"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="28"
              strokeDashoffset="7"
            />
          </svg>
        </span>
      )}
    </>
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames}
      aria-busy={loading}
    >
      {content}
    </button>
  )
}
