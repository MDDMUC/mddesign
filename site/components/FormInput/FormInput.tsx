import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import styles from './FormInput.module.css'

interface BaseInputProps {
  label: string
  id: string
  error?: string
  success?: boolean
  required?: boolean
}

interface TextInputProps extends BaseInputProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  type?: 'text' | 'email' | 'tel' | 'url'
}

interface TextareaProps extends BaseInputProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'> {
  type: 'textarea'
  maxLength?: number
  showCharCount?: boolean
}

type FormInputProps = TextInputProps | TextareaProps

export default function FormInput(props: FormInputProps) {
  const { label, id, error, success, required, type = 'text', ...rest } = props

  const inputClasses = [
    styles.input,
    error && styles.error,
    success && styles.success,
  ]
    .filter(Boolean)
    .join(' ')

  const renderInput = () => {
    if (type === 'textarea') {
      const { maxLength, showCharCount, value, id: _id, ...textareaRest } = rest as TextareaProps
      const currentLength = typeof value === 'string' ? value.length : 0

      return (
        <div className={styles.textareaWrapper}>
          <textarea
            id={id}
            className={inputClasses}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-required={required}
            maxLength={maxLength}
            {...textareaRest}
          />
          {showCharCount && maxLength && (
            <div className={styles.charCount}>
              {currentLength}/{maxLength}
            </div>
          )}
        </div>
      )
    }

    const { id: _id, ...inputRest } = rest as InputHTMLAttributes<HTMLInputElement>

    return (
      <input
        id={id}
        type={type}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required={required}
        {...inputRest}
      />
    )
  }

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      {renderInput()}
      {error && (
        <div className={styles.errorMessage} id={`${id}-error`} role="alert">
          <svg
            className={styles.errorIcon}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13A6 6 0 107 1a6 6 0 000 12zM7 4v3M7 9.5v.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  )
}
