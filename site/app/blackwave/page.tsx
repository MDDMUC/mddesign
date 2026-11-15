import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blackwave — Martin Drexler',
  description: 'A one-scroll application for Senior Brand Designer, Space Hardware.',
  robots: { index: false, follow: false },
}

export default function BlackwavePage() {
  return (
    <iframe
      src="/blackwave-static/explode.html"
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
