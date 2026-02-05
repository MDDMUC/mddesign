'use client'

import { YStack, XStack, Separator, View } from 'tamagui'
import { CaseStudyLayout, BriefSection } from '@/components/Terminal/CaseStudyLayout'
import { TerminalText } from '@/components/Terminal/Text'
import { TerminalFrame } from '@/components/Terminal/Frame'

export default function KellerSportsCaseStudy() {
  return (
    <CaseStudyLayout 
      title="KELLER_SPORTS" 
      subtitle="ECOMMERCE_ENGINE_OPTIMIZATION" 
      metrics="8.1M_USERS // MOBILE_FIRST // RETAIL_TECH"
    ><BriefSection label="01" title="MISSION_OBJECTIVE"><TerminalText intensity="muted" fontSize="$3">
          Optimization of one of Europe's largest premium sports retailers. The objective was to synchronize complex inventory data with a high-performance user interface.
        </TerminalText><TerminalFrame flex={1} padding="$space.4" variant="chamfered" marginTop="$space.4"><TerminalText intensity="high" fontSize="$1">CORE_PROTOCOL_UPGRADE</TerminalText><Separator borderColor="$stroke" marginVertical="$space.2" /><YStack gap="$space.1">{['8.1M_ACTIVE_USERS_TRACKED', 'REAL_TIME_INVENTORY_SYNC', 'LATENCY_REDUCTION_CRITICAL'].map(item => (
                <TerminalText key={item} fontSize="$1" intensity="dim">_ {item}</TerminalText>
              ))}</YStack></TerminalFrame></BriefSection><Separator borderColor="$stroke" /><BriefSection label="02" title="STRATEGIC_DECRYPTION"><TerminalText intensity="muted" fontSize="$3">
          Implemented a modular design system that allowed for rapid deployment of marketing campaigns while maintaining core performance metrics.
        </TerminalText><XStack gap="$space.4" flexWrap="wrap">{[
            { val: '-40%', label: 'LOAD_TIME_REDUCTION' },
            { val: '24/7', label: 'UPTIME_PROTOCOL' },
            { val: 'V.2.0', label: 'ENGINE_VERSION' },
          ].map((stat, i) => (
            <TerminalFrame key={i} minWidth={150} padding="$space.4" glow><TerminalText intensity="high" fontSize="$6" textAlign="center">{stat.val}</TerminalText><TerminalText intensity="dim" fontSize="$1" textAlign="center">{stat.label}</TerminalText></TerminalFrame>
          ))}</XStack></BriefSection><Separator borderColor="$stroke" /><BriefSection label="03" title="UI_ARCHITECTURE"><TerminalFrame padding="$space.0" overflow="hidden" variant="chamfered" borderColor="$accent"><View height={300} backgroundColor="rgba(255,176,0,0.1)" justifyContent="center" alignItems="center"><TerminalText intensity="high" fontSize="$2" glow>ECOMMERCE_GRID_RENDER</TerminalText></View></TerminalFrame></BriefSection><XStack justifyContent="flex-end" marginTop="$space.10"><TerminalFrame interactive padding="$space.4" variant="chamfered" borderColor="$accent"><TerminalText intensity="high" glow>INITIALIZE_NEXT_INTEL_BRIEF &gt;</TerminalText></TerminalFrame></XStack></CaseStudyLayout>
  )
}
