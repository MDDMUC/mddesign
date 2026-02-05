'use client'

import { YStack, XStack, Separator, View } from 'tamagui'
import { TerminalFrame, FrameDecoration } from '@/components/Terminal/Frame'
import { TerminalText } from '@/components/Terminal/Text'
import { TypewriterText } from '@/components/Terminal/Typewriter'
import { motion } from 'framer-motion'

const resources = [
  { group: 'DESIGN_SYSTEMS', items: ['ANDURIL_LATTICE_V2', 'SHADOW_TRADER_TOKENS', 'GRID_PROTOCOLS'] },
  { group: 'RESEARCH_INTEL', items: ['USER_BEHAVIOR_REPORT_2025', 'FUTURE_OF_TERMINAL_UI', 'BLOCKCHAIN_INTERFACES'] },
  { group: 'TOOLS_SCRIPTS', items: ['IMAGE_PROCESSOR_V1', 'GLITCH_GENERATOR', 'SYNC_UTILITY'] },
]

export default function ResourcesPage() {
  return (
    <YStack flex={1} padding="$space.4" gap="$space.4"><TerminalFrame flex={1} padding="$space.6"><FrameDecoration /><YStack gap="$space.6" flex={1}><XStack justifyContent="space-between" alignItems="center"><TypewriterText text="CENTRAL_INTELLIGENCE_HUB" fontSize="$4" intensity="high" /><TerminalText intensity="muted" fontSize="$1">PROTOCOL: READ_ONLY_ACCESS</TerminalText></XStack><Separator borderColor="$stroke" /><XStack gap="$space.6" flex={1} $sm={{ flexDirection: 'column' }}>{resources.map((g, i) => (
              <YStack key={g.group} flex={1} gap="$space.4"><TypewriterText text={`[${g.group}]`} intensity="high" fontSize="$2" delay={120} /><Separator borderColor="$stroke" /><YStack gap="$space.2">{g.items.map((item, j) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 + j * 0.1 }}
                    ><XStack padding="$space.3" borderWidth={1} borderColor="$stroke" backgroundColor="rgba(255,176,0,0.03)" hoverStyle={{ borderColor: '$accent', backgroundColor: 'rgba(255,176,0,0.1)' }} justifyContent="space-between" alignItems="center" cursor="pointer"><XStack gap="$space.2" alignItems="center"><View width={6} height={6} backgroundColor="$accent" /><TerminalText fontSize="$1">{item}</TerminalText></XStack><TerminalText fontSize="$1" intensity="dim">DL_0.1MB</TerminalText></XStack></motion.div>
                  ))}</YStack></YStack>
            ))}</XStack></YStack><YStack gap="$space.2" marginTop="$space.6"><Separator borderColor="$stroke" /><XStack justifyContent="space-between"><TerminalText fontSize="$1" intensity="dim">DREXLER_CORP_INFRASTRUCTURE</TerminalText><TerminalText fontSize="$1" intensity="dim" className="blink">READY_FOR_SYNC_&gt;</TerminalText></XStack></YStack></TerminalFrame></YStack>
  )
}
