import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type Body = {
  name?: string
  email?: string
  company?: string
  message?: string
  // Honeypot field — bots fill it, the form hides it from humans.
  company_url?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  if (body.company_url && body.company_url.trim() !== '') {
    // Silently accept bot submissions without sending mail.
    return NextResponse.json({ ok: true })
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const company = (body.company ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    )
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'That email address looks off.' }, { status: 400 })
  }
  if (message.length < 5) {
    return NextResponse.json({ error: 'Message is too short.' }, { status: 400 })
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: 'Message is too long.' }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
    console.error('Contact form: SMTP env vars missing.')
    return NextResponse.json(
      { error: 'Server email is not configured yet. Please email hello@martindrexler.com directly.' },
      { status: 503 },
    )
  }

  const port = Number(SMTP_PORT)
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const subject = `New enquiry from ${name}${company ? ` — ${company}` : ''}`
  const textBody = [
    `From: ${name} <${email}>`,
    company ? `Company: ${company}` : null,
    '',
    message,
    '',
    '—',
    'Sent via the contact form at martindrexler.com/contact',
  ]
    .filter((line): line is string => line !== null)
    .join('\n')

  try {
    await transporter.sendMail({
      from: `Martin Drexler Site <${MAIL_FROM}>`,
      to: MAIL_TO,
      replyTo: `${name} <${email}>`,
      subject,
      text: textBody,
    })
  } catch (err) {
    console.error('Contact form: SMTP send failed', err)
    return NextResponse.json(
      { error: 'Could not send the message. Please try again or email hello@martindrexler.com directly.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
