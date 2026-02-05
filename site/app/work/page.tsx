'use client'

import { YStack, XStack, Separator, View, ScrollView } from 'tamagui'
import { TerminalFrame, FrameDecoration } from '@/components/Terminal/Frame'
import { TerminalText } from '@/components/Terminal/Text'
import { TypewriterText } from '@/components/Terminal/Typewriter'
import { motion } from 'framer-motion'
import Link from 'next/link'

const portfolio = [
  { id: 'ARC_01', title: 'CEPRES', category: 'FINTECH', year: '2024', status: 'COMPLETED', metrics: '12.4TB_DATA' },
  { id: 'ARC_02', title: 'KELLER SPORTS', category: 'ECOMMERCE', year: '2023', status: 'ARCHIVED', metrics: '8.1M_USERS' },
  { id: 'ARC_03', title: 'YCA', category: 'BRANDING', year: '2025', status: 'LIVE', metrics: 'GLOBAL_SYNC' },
]

export default function WorkPage() {
  return (
    <YStack flex={1} padding="$space.4" gap="$space.4"><XStack gap="$space.4" flex={1} $sm={{ flexDirection: 'column' }}><YStack width={300} gap="$space.4" $sm={{ width: '100%' }}><TerminalFrame flex={1} padding="$space.4"><FrameDecoration /><YStack gap="$space.4"><TypewriterText text="ARCHIVE_INDEX" intensity="high" fontSize="$2" delay={100} /><Separator borderColor="$stroke" /><ScrollView><YStack gap="$space.2">{portfolio.map(p => (
                    <motion.div key={p.id} whileHover={{ x: 5 }}><XStack padding="$space.2" gap="$space.2" borderWidth={1} borderColor="transparent" hoverStyle={{ borderColor: '$accent', backgroundColor: 'rgba(255,176,0,0.05)' }}><TerminalText fontSize="$1" intensity="dim">{p.id}</TerminalText><TerminalText fontSize="$1">{p.title}</TerminalText></XStack></motion.div>
                  ))}</YStack></ScrollView></YStack><YStack gap="$space.2" marginTop="$space.4"><Separator borderColor="$stroke" /><TerminalText fontSize="$1" intensity="dim">DB_STATUS: ONLINE</TerminalText><TerminalText fontSize="$1" intensity="dim">ENCRYPTION: AES-256</TerminalText></YStack></TerminalFrame></YStack><YStack flex={1} gap="$space.4"><TerminalFrame flex={1} padding="$space.6"><FrameDecoration /><YStack gap="$space.6"><XStack justifyContent="space-between" alignItems="center"><TypewriterText text="QUERYING_PORTFOLIO_DATABASE..." fontSize="$3" intensity="high" /><TerminalText fontSize="$1" intensity="muted">03_ENTRIES_FOUND</TerminalText></XStack><Separator borderColor="$stroke" /><YStack gap="$space.8">{portfolio.map((p, i) => (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                    ><Link href={`/work/${p.title.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none' }}><TerminalFrame interactive variant="chamfered" padding="$space.0" overflow="hidden"><XStack><View width={150} height={150} backgroundColor="rgba(255,176,0,0.1)" borderRightWidth={1} borderColor="$stroke" justifyContent="center" alignItems="center" $xs={{ display: 'none' }}><TerminalText intensity="dim" fontSize="$1">PREVIEW_NA</TerminalText></View><YStack flex={1} padding="$space.4" gap="$space.2"><XStack justifyContent="space-between"><TerminalText intensity="high" fontSize="$4">{p.title}</TerminalText><TerminalText color="$green" fontSize="$1">[{p.status}]</TerminalText></XStack><XStack gap="$space.4"><TerminalText intensity="muted" fontSize="$1">CAT: {p.category}</TerminalText><TerminalText intensity="muted" fontSize="$1">YEAR: {p.year}</TerminalText><TerminalText intensity="muted" fontSize="$1">METRIC: {p.metrics}</TerminalText></XStack><Separator borderColor="$stroke" marginTop="$space.2" /><XStack justifyContent="flex-end" marginTop="$space.2"><TerminalText fontSize="$1" glow>ACCESS_FULL_INTEL_&gt;</TerminalText></XStack></YStack></XStack></TerminalFrame></Link></motion.div>
                  ))}</YStack></YStack></TerminalFrame></YStack></XStack></YStack>
  )
}
