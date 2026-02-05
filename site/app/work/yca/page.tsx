'use client'

import { YStack, XStack, Separator, View } from 'tamagui'
import { CaseStudyLayout, BriefSection } from '@/components/Terminal/CaseStudyLayout'
import { TerminalText } from '@/components/Terminal/Text'
import { TerminalFrame } from '@/components/Terminal/Frame'

export default function YCACaseStudy() {
  return (
    <CaseStudyLayout 
      title="YCA_SITE" 
      subtitle="BRAND_EXPERIENCE_SYNC" 
      metrics="GLOBAL_SYNC // HIGH_IMPACT_VISUALS // WEB3_READY"
    ><BriefSection label="01" title="MISSION_OBJECTIVE"><TerminalText intensity="muted" fontSize="$3">
          Establishing a high-impact digital presence for the Young Champion Ambassador program. The mission required a balance of aggressive visual style and technical stability.
        </TerminalText></BriefSection><Separator borderColor="$stroke" /><BriefSection label="02" title="STRATEGIC_DECRYPTION"><XStack gap="$space.4" flexWrap="wrap">{[
            { val: '4K', label: 'VISUAL_DEFINITION' },
            { val: 'SYNC', label: 'CROSS_NODE_IDENTITY' },
            { val: 'LIVE', label: 'DEPLOYMENT_STATUS' },
          ].map((stat, i) => (
            <TerminalFrame key={i} minWidth={150} padding="$space.4" glow><TerminalText intensity="high" fontSize="$6" textAlign="center">{stat.val}</TerminalText><TerminalText intensity="dim" fontSize="$1" textAlign="center">{stat.label}</TerminalText></TerminalFrame>
          ))}</XStack></BriefSection><Separator borderColor="$stroke" /><BriefSection label="03" title="UI_ARCHITECTURE"><TerminalFrame padding="$space.0" overflow="hidden" variant="chamfered" borderColor="$accent"><View height={300} backgroundColor="rgba(255,176,0,0.1)" justifyContent="center" alignItems="center"><TerminalText intensity="high" fontSize="$2" glow>YCA_EXPERIENCE_OVERVIEW</TerminalText></View></TerminalFrame></BriefSection><XStack justifyContent="flex-end" marginTop="$space.10"><TerminalFrame interactive padding="$space.4" variant="chamfered" borderColor="$accent"><TerminalText intensity="high" glow>REINITIALIZE_MAIN_ARCHIVE &gt;</TerminalText></TerminalFrame></XStack></CaseStudyLayout>
  )
}
