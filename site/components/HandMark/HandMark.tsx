import styles from './HandMark.module.css'

type Variant = 'underline' | 'circle' | 'arrow' | 'bracket-left' | 'bracket-right' | 'asterisk'

type Props = {
  variant: Variant
  className?: string
  /** Color override; defaults to currentColor (use parent's color: var(--accent)). */
  color?: string
}

/**
 * Inline SVG hand-drawn marks. One mark per visual unit, max.
 * Lines are intentionally imperfect — never perfectly straight or circular.
 *
 * Use sparingly: a single underline on a hero word, a circle around one key
 * stat, a bracket pulling out a callout. Never as repeated decoration.
 */
export default function HandMark({ variant, className, color }: Props) {
  const stroke = color ?? 'currentColor'
  const cls = [styles.root, styles[variant], className].filter(Boolean).join(' ')

  switch (variant) {
    case 'underline':
      return (
        <svg className={cls} viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M3 8 Q 35 3, 70 6 T 140 5 Q 165 7, 197 4"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'circle':
      return (
        <svg className={cls} viewBox="0 0 120 80" aria-hidden="true">
          <path
            d="M58 6 C 28 8, 8 22, 10 42 C 12 62, 40 74, 64 73 C 90 72, 112 60, 110 38 C 108 18, 88 6, 60 5"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'arrow':
      return (
        <svg className={cls} viewBox="0 0 80 24" aria-hidden="true">
          <path
            d="M3 12 Q 25 8, 70 12"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M58 4 L 72 12 L 58 21"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'bracket-left':
      return (
        <svg className={cls} viewBox="0 0 16 100" aria-hidden="true">
          <path
            d="M14 3 Q 4 5, 3 18 L 3 82 Q 4 95, 14 97"
            fill="none"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'bracket-right':
      return (
        <svg className={cls} viewBox="0 0 16 100" aria-hidden="true">
          <path
            d="M2 3 Q 12 5, 13 18 L 13 82 Q 12 95, 2 97"
            fill="none"
            stroke={stroke}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'asterisk':
      return (
        <svg className={cls} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4 L 12 20" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 8 L 19 16" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 16 L 19 8" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
  }
}
