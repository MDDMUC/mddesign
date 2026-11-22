import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { listVisits, visitStoreConfigured, type Visit } from '@/lib/blackwave-visits'
import styles from './page.module.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blackwave visits',
  robots: { index: false, follow: false },
}

async function unlock(formData: FormData) {
  'use server'
  const expected = process.env.BLACKWAVE_READ_KEY
  const key = String(formData.get('key') ?? '')
  if (!expected || key !== expected) {
    redirect('/blackwave/visits?error=1')
  }
  const jar = await cookies()
  jar.set('bw_read', key, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/blackwave/visits',
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect('/blackwave/visits')
}

function when(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Berlin',
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}

function VisitList({ visits }: { visits: Visit[] }) {
  if (visits.length === 0) {
    return <p className={styles.empty}>No one has opened the page yet.</p>
  }
  return (
    <ol className={styles.list}>
      {visits.map((visit) => (
        <li key={visit.sid} className={styles.row}>
          <div className={styles.who}>
            <span className={styles.ref}>{visit.ref || 'Unmarked link'}</span>
            <span className={styles.time}>
              {when(visit.opened)}
              {visit.last !== visit.opened ? ` – ${when(visit.last)}` : ''}
            </span>
          </div>
          <p className={styles.meta}>
            {visit.reachedEnd ? 'Reached the end' : `${visit.sections.length} chapters`}
            <span aria-hidden="true"> · </span>
            {visit.sid.slice(-6)}
          </p>
          <p className={styles.path}>
            {visit.sections.length > 0 ? visit.sections.join(' · ') : 'Opened, no chapter yet'}
          </p>
          {visit.clicks.length > 0 ? (
            <p className={styles.clicks}>Clicked {visit.clicks.join(' · ')}</p>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export default async function BlackwaveVisitsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const query = await searchParams
  const jar = await cookies()
  const key = process.env.BLACKWAVE_READ_KEY
  const open = Boolean(key) && jar.get('bw_read')?.value === key

  let visits: Visit[] = []
  let readError = ''
  if (open && visitStoreConfigured()) {
    try {
      visits = await listVisits()
    } catch {
      readError = 'The visit list could not be read.'
    }
  }

  return (
    <main className={styles.main}>
      <p className={styles.kicker}>Blackwave</p>
      <h1 className={styles.title}>Visits</h1>
      <p className={styles.lede}>
        Each row is one browser session on the application. Send a marked link
        such as /blackwave?ref=name to tell one recipient from another.
      </p>

      {!key || !visitStoreConfigured() ? (
        <p className={styles.note}>
          The visit store is not connected yet. The Redis URL, token, and
          BLACKWAVE_READ_KEY need to be set, then the site redeployed.
        </p>
      ) : null}

      {key && !open ? (
        <form className={styles.form} action={unlock}>
          <label className={styles.label} htmlFor="key">
            Read key
          </label>
          <input className={styles.input} id="key" name="key" type="password" required />
          <button className={styles.button} type="submit">
            Open
          </button>
          {query.error ? <p className={styles.error}>That key does not match.</p> : null}
        </form>
      ) : null}

      {open && readError ? <p className={styles.note}>{readError}</p> : null}
      {open && !readError && visitStoreConfigured() ? <VisitList visits={visits} /> : null}
    </main>
  )
}
