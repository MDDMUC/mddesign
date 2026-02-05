'use client'

import { XStack, Separator } from 'tamagui'
import Link from 'next/link'
import { TerminalText } from '../Terminal/Text'

export default function Navigation() {
  return (
    <XStack justifyContent="space-between" alignItems="center" padding="$space.4" paddingHorizontal="$space.8" borderBottomWidth={1} borderColor="$stroke" backgroundColor="$navBg" position="sticky" top={0} zIndex={1000}><XStack alignItems="center" gap="$space.4"><Link href="/" style={{ textDecoration: 'none' }}><XStack alignItems="center" gap="$space.2" padding="$space.2" borderWidth={1} borderColor="$accent"><TerminalText intensity="high" glow>{'\u25B2'} MD_DSGN</TerminalText></XStack></Link><Separator vertical borderColor="$stroke" height={20} /><TerminalText intensity="muted" fontSize="$1">AUTH_LEVEL: ADMIN</TerminalText></XStack><XStack gap="$space.6" alignItems="center">{[
          { label: 'WORK', href: '/work' },
          { label: 'CONTACT', href: '/contact' },
          { label: 'RESOURCES', href: '/resources' },
        ].map((item) => <Link key={item.href} href={item.href} style={{ textDecoration: 'none' }}><XStack padding="$space.2" hoverStyle={{ backgroundColor: 'rgba(255, 176, 0, 0.1)' }}><TerminalText fontSize="$2" hoverStyle={{ color: '$textHighlight' }}>{item.label}</TerminalText></XStack></Link>)}<XStack paddingHorizontal="$space.4" paddingVertical="$space.1" backgroundColor="$accent" borderRadius="$none"><TerminalText color="#000" fontSize="$2" fontWeight="700">HIRE_ME</TerminalText></XStack></XStack></XStack>
  )
}
