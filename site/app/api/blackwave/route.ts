import { NextResponse } from 'next/server'
import {
  cleanVisitField,
  listVisits,
  recordVisit,
  visitPatterns,
  visitStoreConfigured,
} from '@/lib/blackwave-visits'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function authorized(req: Request): boolean {
  const key = process.env.BLACKWAVE_READ_KEY
  if (!key) return false
  const header = req.headers.get('authorization') ?? ''
  if (header === `Bearer ${key}`) return true
  const url = new URL(req.url)
  return url.searchParams.get('key') === key
}

export async function POST(req: Request) {
  if (!visitStoreConfigured()) {
    return NextResponse.json({ error: 'View store is not configured.' }, { status: 503 })
  }

  let body: { sid?: unknown; kind?: unknown; id?: unknown; ref?: unknown }
  try {
    body = (await req.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 })
  }

  const sid = cleanVisitField(body.sid, visitPatterns.SID_RE, 40)
  const kind = body.kind
  const id = cleanVisitField(body.id, visitPatterns.ID_RE, 120)
  const ref = cleanVisitField(body.ref, visitPatterns.REF_RE, 40)
  if (!sid || (kind !== 'open' && kind !== 'section' && kind !== 'click') || !id) {
    return NextResponse.json({ error: 'Bad event.' }, { status: 400 })
  }

  try {
    await recordVisit({ sid, kind, id, ref, at: new Date().toISOString() })
  } catch {
    return NextResponse.json({ error: 'Could not store the view.' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}

export async function GET(req: Request) {
  if (!process.env.BLACKWAVE_READ_KEY) {
    return NextResponse.json({ error: 'Read key is not configured.' }, { status: 503 })
  }
  if (!authorized(req)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
  }
  if (!visitStoreConfigured()) {
    return NextResponse.json({ error: 'View store is not configured.' }, { status: 503 })
  }

  try {
    const visits = await listVisits()
    return NextResponse.json({ visits })
  } catch {
    return NextResponse.json({ error: 'Could not read views.' }, { status: 502 })
  }
}
