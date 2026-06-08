'use client'

import { useState } from 'react'
import styles from './page.module.css'

const contactMethods = [
  {
    label: 'Email',
    value: 'hello@martindrexler.com',
    href: 'mailto:hello@martindrexler.com',
    note: 'For project inquiries',
  },
  {
    label: 'LinkedIn',
    value: 'Martin Drexler',
    href: 'https://linkedin.com/in/martindrexler',
    note: 'Connect professionally',
  },
]

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    company_url: '', // honeypot
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}))

      if (!res.ok) {
        setFormState('error')
        setErrorMessage(data.error || 'Something went wrong. Try again or email me directly.')
        return
      }

      setFormState('success')
      setFormData({ name: '', email: '', company: '', message: '', company_url: '' })
    } catch {
      setFormState('error')
      setErrorMessage('Network error. Try again or email me directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={`${styles.heroTitle} reveal-mask`}>Let&apos;s work together</h1>
          <p className={`${styles.heroSubtitle} reveal-rise reveal-stagger-2`}>
            Have a project in mind? I&apos;d love to hear about it.
            Send me a message and I&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`${styles.contactSection} reveal-rise reveal-stagger-3`}>
        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formColumn}>
              <h2 className={styles.formTitle}>Send a message</h2>
              <p className={styles.formDescription}>
                Tell me about your project, timeline, and budget. The more details, the better.
              </p>

              {formState === 'success' && (
                <div className={styles.successMessage}>
                  <span>[ OK — MESSAGE SENT ]</span>
                </div>
              )}
              {formState === 'success' && (
                <p className={styles.formDescription}>
                  Thanks. I&apos;ll get back to you within 24 hours.
                </p>
              )}
              {formState === 'error' && (
                <div className={styles.errorMessage}>
                  <span>[ ERROR ] {errorMessage}</span>
                </div>
              )}

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Honeypot — visually hidden, bots fill it */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="company_url">Leave this field empty</label>
                  <input
                    type="text"
                    id="company_url"
                    name="company_url"
                    value={formData.company_url}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>Company (optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Your company"
                    autoComplete="organization"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoColumn}>
              <h3 className={styles.infoTitle}>Other ways to connect</h3>

              <div className={styles.contactMethods}>
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className={styles.contactMethod}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className={styles.methodLabel}>{method.label}</span>
                    <span className={styles.methodValue}>{method.value}</span>
                    <span className={styles.methodNote}>{method.note}</span>
                  </a>
                ))}
              </div>

              <div className={styles.locationInfo}>
                <span className={styles.locationLabel}>Location</span>
                <span className={styles.locationValue}>Munich, Germany</span>
                <span className={styles.locationNote}>Available for remote work worldwide</span>
              </div>

              <div className={styles.availabilityInfo}>
                <span className={styles.availabilityLabel}>Availability</span>
                <span className={styles.availabilityValue}>Currently accepting new projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
