'use client'

import React, { useState } from 'react'
import styles from './page.module.css'
import FormInput from '../../components/FormInput/FormInput'
import Button from '../../components/Button/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))

    // Clear error when user starts typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Reset previous status
    setSubmitStatus('idle')
    setErrorMessage('')

    // Validate form
    const newErrors = {
      name: '',
      email: '',
      company: '',
      message: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please enter your company or role'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide more details (at least 20 characters)'
    }

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      setErrors(newErrors)
      return
    }

    // Form is valid, submit to Web3Forms
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const formDataToSend = new FormData(form)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })

        // Reset success state after 10 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 10000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.page}>
      {/* Contact Hero */}
      <section className={styles.contactHero}>
        <div className={styles.heroInner}>
          <div className={styles.pageLabel}>CONTACT</div>
          <h1 className={styles.pageTitle}>Let&apos;s Work Together</h1>
          <p className={styles.introduction}>
            Whether you&apos;re scaling after a funding round or transforming an established product, I&apos;d love to hear what you&apos;re working on. Every engagement starts with a conversation about your challenges and goals.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.contactForm}>
        <div className={styles.formInner}>
          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Send a Message</h2>
            <p className={styles.formDescription}>
              Tell me about your project and I&apos;ll get back to you within 24 hours.
            </p>

            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Thank you! Your message has been sent. I&apos;ll be in touch soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className={styles.errorMessage}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6v5M10 14v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''} />
              <input type="hidden" name="subject" value="New Contact Form Submission - martindrexler.com" />
              <input type="hidden" name="from_name" value="Martin Drexler Portfolio" />
              <input type="hidden" name="redirect" value="false" />
              <FormInput
                label="Your Name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                placeholder="John Smith"
              />

              <FormInput
                label="Email Address"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                placeholder="john@company.com"
              />

              <FormInput
                label="Company / Role"
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                error={errors.company}
                required
                placeholder="Acme Inc, CEO"
              />

              <FormInput
                label="Tell me about your project"
                id="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
                rows={6}
                maxLength={1000}
                showCharCount
                placeholder="What are you working on? What challenges are you facing? What are your goals?"
              />

              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className={styles.alternativesColumn}>
            <h3 className={styles.alternativesTitle}>Other Ways to Connect</h3>

            <div className={styles.alternativeCard}>
              <div className={styles.alternativeIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.alternativeContent}>
                <div className={styles.alternativeLabel}>Email Directly</div>
                <a href="mailto:hello@martindrexler.com" className={styles.alternativeValue}>
                  hello@martindrexler.com
                </a>
              </div>
            </div>

            <div className={styles.alternativeCard}>
              <div className={styles.alternativeIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className={styles.alternativeContent}>
                <div className={styles.alternativeLabel}>Schedule a Call</div>
                <a href="https://calendly.com/martindrexler" className={styles.alternativeValue} target="_blank" rel="noopener noreferrer">
                  Book 30-minute intro call
                </a>
                <p className={styles.alternativeNote}>
                  Pick a time that works for you
                </p>
              </div>
            </div>

            <div className={styles.alternativeCard}>
              <div className={styles.alternativeIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className={styles.alternativeContent}>
                <div className={styles.alternativeLabel}>Response Time</div>
                <div className={styles.alternativeValue}>Within 24 hours</div>
                <p className={styles.alternativeNote}>
                  Usually same day
                </p>
              </div>
            </div>

            <div className={styles.locationInfo}>
              <div className={styles.locationIcon}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2a4 4 0 00-4 4c0 3 4 8 4 8s4-5 4-8a4 4 0 00-4-4z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className={styles.locationLabel}>Based in</div>
                <div className={styles.locationValue}>Munich, Germany</div>
                <div className={styles.locationNote}>Working with clients globally</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
