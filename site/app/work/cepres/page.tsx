'use client'

import { YStack, XStack, Separator, View, Image } from 'tamagui'
import { CaseStudyLayout, BriefSection } from '@/components/Terminal/CaseStudyLayout'
import { TerminalText } from '@/components/Terminal/Text'
import { FrameDecoration, TerminalFrame } from '@/components/Terminal/Frame'
import { motion } from 'framer-motion'

export default function CEPRESCaseStudy() {
  return (
    <CaseStudyLayout 
      title="CEPRES" 
      subtitle="PRIVATE_MARKET_INTELLIGENCE" 
      metrics="6_AWARDS // $45T_ASSETS // 6000_USERS"
    ><BriefSection label="01" title="MISSION_OBJECTIVE"><TerminalText intensity="muted" fontSize="$3">
          CEPRES offered unparalleled access to granular private market data but lacked an efficient way to filter, analyze, and output data relevant to specific users. The platform had evolved to serve 76 different user personas, resulting in over 125,000 filtering options.
        </TerminalText><TerminalText intensity="muted" fontSize="$3">
          The fundamental question: How do you create an intuitive dashboard experience when there are 125,000 ways to filter the data?
        </TerminalText><XStack gap="$space.4" marginTop="$space.4"><TerminalFrame flex={1} padding="$space.4" variant="chamfered"><TerminalText intensity="high" fontSize="$1">CRITICAL_CHALLENGES</TerminalText><Separator borderColor="$stroke" marginVertical="$space.2" /><YStack gap="$space.1">{['76_PERSONAS_DETECTED', '125K_FILTER_NODES', 'COGNITIVE_OVERLOAD_CRITICAL', 'HIGH_ADOPTION_BARRIER'].map(item => (
                <TerminalText key={item} fontSize="$1" intensity="dim">_ {item}</TerminalText>
              ))}</YStack></TerminalFrame><View flex={1} backgroundColor="rgba(255,176,0,0.05)" borderWidth={1} borderColor="$stroke" justifyContent="center" alignItems="center" className="chamfer"><TerminalText intensity="dim" fontSize="$1">VISUAL_EVIDENCE_ENCRYPTED</TerminalText></View></XStack></BriefSection><Separator borderColor="$stroke" /><BriefSection label="02" title="STRATEGIC_DECRYPTION"><TerminalText intensity="muted" fontSize="$3">
          The breakthrough came from shifting our thinking from personas to use cases. We consolidated 76 user personas into 7 broader use case scenarios. This wasn't about reducing functionality—it was about organizing complexity around actual mission goals.
        </TerminalText><XStack gap="$space.4" flexWrap="wrap">{[
            { val: '76 -> 7', label: 'PERSONA_COMPRESSION' },
            { val: '2+ YEARS', label: 'ITERATION_DURATION' },
            { val: '7 ITER', label: 'PLATFORM_REBUILDS' },
          ].map((stat, i) => (
            <TerminalFrame key={i} minWidth={150} padding="$space.4" glow><TerminalText intensity="high" fontSize="$6" textAlign="center">{stat.val}</TerminalText><TerminalText intensity="dim" fontSize="$1" textAlign="center">{stat.label}</TerminalText></TerminalFrame>
          ))}</XStack></BriefSection><Separator borderColor="$stroke" /><BriefSection label="03" title="UI_ARCHITECTURE"><TerminalText intensity="muted" fontSize="$3">
          The interface balanced density with clarity. Financial professionals need to see lots of data simultaneously, but that data needs to be scannable and actionable.
        </TerminalText><TerminalFrame padding="$space.0" overflow="hidden" variant="chamfered" borderColor="$accent"><View height={300} backgroundColor="rgba(255,176,0,0.1)" justifyContent="center" alignItems="center"><TerminalText intensity="high" fontSize="$2" glow>SYSTEM_INTERFACE_RENDER_V.01</TerminalText><TerminalText intensity="dim" fontSize="$1">SOURCE: https://placehold.co/1440x900/EAEEF1/626262?text=CEPRES+DASHBOARD</TerminalText></View></TerminalFrame></BriefSection><BriefSection label="04" title="MISSION_IMPACT"><XStack gap="$space.4" flexWrap="wrap">{[
            { label: 'AWARDS_SECURED', val: '06' },
            { label: 'ASSET_VALUE', val: '$45T' },
            { label: 'ACTIVE_AGENTS', val: '6000+' },
            { label: 'TEAM_EXPANSION', val: '120+' },
          ].map((item, i) => (
            <YStack key={i} flex={1} minWidth={120} gap="$space.1"><TerminalText intensity="dim" fontSize="$1">{item.label}</TerminalText><TerminalText intensity="high" fontSize="$5" color="$green">{item.val}</TerminalText><Separator borderColor="$stroke" /></YStack>
          ))}</XStack><TerminalText intensity="muted" fontSize="$3" marginTop="$space.4">
          Redesign transformed a complex but struggling product into the industry's leading platform. Now serving 6,000 partners across 12,000 funds.
        </TerminalText></BriefSection><XStack justifyContent="flex-end" marginTop="$space.10"><TerminalFrame interactive padding="$space.4" variant="chamfered" borderColor="$accent"><TerminalText intensity="high" glow>INITIALIZE_NEXT_INTEL_BRIEF &gt;</TerminalText></TerminalFrame></XStack></CaseStudyLayout>
  )
}
