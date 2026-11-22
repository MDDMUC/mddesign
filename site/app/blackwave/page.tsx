import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blackwave — Martin Drexler',
  description: 'A one-scroll application for Senior Brand Designer, Space Hardware.',
  robots: { index: false, follow: false },
}

type Search = Record<string, string | string[] | undefined>

export default async function BlackwavePage({
  searchParams,
}: {
  searchParams: Promise<Search>
}) {
  const query = await searchParams
  const raw = typeof query.ref === 'string' ? query.ref : ''
  const ref = raw.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40)
  const src = ref
    ? `/blackwave-static/index.html?ref=${encodeURIComponent(ref)}`
    : '/blackwave-static/index.html'

  return (
    <iframe
      src={src}
      title="Blackwave application"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        border: 0,
        zIndex: 80,
        background: '#010101',
      }}
    />
  )
}
