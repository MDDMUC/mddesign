const KEY = 'blackwave:events'
const MAX = 500

export type Visit = {
  sid: string
  ref: string
  opened: string
  last: string
  sections: string[]
  clicks: string[]
  reachedEnd: boolean
}

type Kind = 'open' | 'section' | 'click'

type Event = {
  sid: string
  kind: Kind
  id: string
  ref: string
  at: string
}

const SID_RE = /^[a-zA-Z0-9_-]{8,40}$/
const ID_RE = /^[a-zA-Z0-9_.:/#?&=%-]{1,120}$/
const REF_RE = /^[a-zA-Z0-9_-]{0,40}$/

export function visitStoreConfigured(): boolean {
  return Boolean(redis())
}

function redis(): { url: string; token: string } | null {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  if (!url || !token) return null
  return { url: url.replace(/\/$/, ''), token }
}

async function redisCommand(command: (string | number)[]): Promise<unknown> {
  const store = redis()
  if (!store) throw new Error('missing redis')
  const res = await fetch(store.url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${store.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`redis ${res.status}`)
  const data = (await res.json()) as { result?: unknown }
  return data.result
}

export function cleanVisitField(value: unknown, re: RegExp, max: number): string {
  const text = typeof value === 'string' ? value.trim().slice(0, max) : ''
  return re.test(text) ? text : ''
}

export const visitPatterns = { SID_RE, ID_RE, REF_RE }

export async function recordVisit(event: Event): Promise<void> {
  await redisCommand(['LPUSH', KEY, JSON.stringify(event)])
  await redisCommand(['LTRIM', KEY, 0, MAX - 1])
}

export async function listVisits(): Promise<Visit[]> {
  const raw = await redisCommand(['LRANGE', KEY, 0, MAX - 1])
  const rows = Array.isArray(raw) ? raw : []
  const visits = new Map<string, Visit>()
  const events: Event[] = []

  for (const row of rows) {
    if (typeof row !== 'string') continue
    try {
      events.push(JSON.parse(row) as Event)
    } catch {
      continue
    }
  }

  events.sort((a, b) => (a.at < b.at ? -1 : 1))

  for (const event of events) {
    if (!event.sid) continue
    let visit = visits.get(event.sid)
    if (!visit) {
      visit = {
        sid: event.sid,
        ref: event.ref || '',
        opened: event.at,
        last: event.at,
        sections: [],
        clicks: [],
        reachedEnd: false,
      }
      visits.set(event.sid, visit)
    }
    if (event.ref) visit.ref = event.ref
    if (event.at < visit.opened) visit.opened = event.at
    if (event.at > visit.last) visit.last = event.at
    if (event.kind === 'section' && !visit.sections.includes(event.id)) {
      visit.sections.push(event.id)
    }
    if (event.kind === 'click' && !visit.clicks.includes(event.id)) {
      visit.clicks.push(event.id)
    }
    if (event.id === 'together') visit.reachedEnd = true
  }

  return [...visits.values()].sort((a, b) => (a.last < b.last ? 1 : -1))
}
