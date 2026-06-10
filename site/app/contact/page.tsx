'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

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

      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({}))

      if (!res.ok) {
        setFormState('error')
        setErrorMessage(
          data.error || 'Something went wrong. Try again or email directly.'
        )
        return
      }

      setFormState('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        company_url: '',
      })
    } catch {
      setFormState('error')
      setErrorMessage('Network error. Try again or email directly.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const submitting = formState === 'submitting'
  const success = formState === 'success'

  return (
    <main className={styles.main}>
      {/* Header — 7/5 split matching /studio and case studies. */}
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Start a conversation</h1>
          <p className={styles.lede}>
            Brief work, full engagements, teaching, or notes — write any time.
            I reply within twenty-four hours.
          </p>
        </div>
        <aside className={styles.meta}>
          <dl className={styles.metaList}>
            <dt className={styles.metaTerm}>Email</dt>
            <dd className={styles.metaDef}>
              <a href="mailto:hello@martindrexler.com">
                hello@martindrexler.com
              </a>
            </dd>

            <dt className={styles.metaTerm}>LinkedIn</dt>
            <dd className={styles.metaDef}>
              <a
                href="https://linkedin.com/in/martindrexler"
                target="_blank"
                rel="noopener noreferrer"
              >
                Martin Drexler
              </a>
            </dd>

            <dt className={styles.metaTerm}>Based</dt>
            <dd className={styles.metaDef}>Munich · Colorado Springs</dd>

            <dt className={styles.metaTerm}>Response</dt>
            <dd className={styles.metaDef}>Within 24h</dd>

            <dt className={styles.metaTerm}>Status</dt>
            <dd className={styles.metaDef}>Accepting projects</dd>
          </dl>
        </aside>
      </header>

      {/* Form section — 5/7 split, body in the wider column. */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Send a message</h2>
        <div className={styles.formBody}>
          {success ? (
            <div className={styles.successPanel}>
              <p className={styles.successLabel}>[ MESSAGE RECEIVED ]</p>
              <p className={styles.successCopy}>
                Thanks for writing. Reply within 24 hours, often sooner.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {/* Honeypot — visually hidden, bots fill it. */}
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

              <div className={styles.fieldGrid}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="name"
                    disabled={submitting}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                    autoComplete="email"
                    disabled={submitting}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="company" className={styles.label}>
                  Company <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={styles.input}
                  autoComplete="organization"
                  disabled={submitting}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className={styles.textarea}
                  disabled={submitting}
                />
              </div>

              {formState === 'error' && (
                <p className={styles.errorLine}>
                  [ ERROR ] {errorMessage}
                </p>
              )}

              <button
                type="submit"
                className={styles.submit}
                disabled={submitting}
              >
                {submitting ? '[ SENDING ]' : 'Send message →'}
              </button>
            </form>
          )}
        </div>
      </section>

      <nav className={styles.pager} aria-label="Page navigation">
        <Link href="/studio">&larr; Studio</Link>
        <Link href="/work">Work &rarr;</Link>
      </nav>
    </main>
  )
}
