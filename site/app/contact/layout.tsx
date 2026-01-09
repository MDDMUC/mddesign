import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Martin Drexler',
  description: 'Get in touch to discuss your design challenges. I work with funded startups and enterprises on strategic design projects.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
