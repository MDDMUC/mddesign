'use client'

import { YStack, XStack, Separator, View, ScrollView } from 'tamagui'
import { TerminalFrame, FrameDecoration } from './Frame'
import { TerminalText } from './Text'
import { TypewriterText } from './Typewriter'
import { motion } from 'framer-motion'
import React from 'react'

export const CaseStudyLayout = ({ 
  title, 
  subtitle, 
  metrics, 
  children 
}: { 
  title: string, 
  subtitle: string, 
  metrics: string, 
  children: React.ReactNode 
}) => {
  return (
    <YStack flex={1} padding="$space.4" gap="$space.4"><XStack gap="$space.4" flex={1} $sm={{ flexDirection: 'column' }}><YStack width={350} gap="$space.4" $sm={{ width: '100%' }}><TerminalFrame padding="$space.4" glow><FrameDecoration /><YStack gap="$space.4"><TypewriterText text="INTEL_BRIEFING" intensity="high" fontSize="$2" delay={100} /><Separator borderColor="$stroke" /><YStack gap="$space.2"><TerminalText fontSize="$1" intensity="dim">SUBJECT_ID</TerminalText><TypewriterText text={title} fontSize="$5" glow delay={80} /></YStack><YStack gap="$space.2"><TerminalText fontSize="$1" intensity="dim">CLASSIFICATION</TerminalText><TerminalText fontSize="$2">{subtitle}</TerminalText></YStack><Separator borderColor="$stroke" /><YStack gap="$space.2"><TerminalText fontSize="$1" intensity="dim">VITAL_STATISTICS</TerminalText><TerminalText fontSize="$1" color="$green">{metrics}</TerminalText></YStack></YStack></TerminalFrame><TerminalFrame flex={1} padding="$space.4" overflow="hidden"><FrameDecoration /><TerminalText fontSize="$1" intensity="dim" marginBottom="$space.2">LIVE_DATA_STREAM</TerminalText><Separator borderColor="$stroke" /><ScrollView><YStack gap="$space.1" paddingVertical="$space.2">{Array.from({ length: 20 }).map((_, i) => (
                    <TerminalText key={i} fontSize="$1" intensity="dim" opacity={0.3}>
                      [SYSTEM_LOG_{1000 + i}]_DECRYPTING_PACKET_0x{Math.floor(Math.random() * 1000000).toString(16)}_SUCCESS
                    </TerminalText>
                  ))}</YStack></ScrollView></TerminalFrame></YStack><YStack flex={1} gap="$space.4"><TerminalFrame flex={1} padding="$space.0" overflow="hidden"><FrameDecoration /><ScrollView contentContainerStyle={{ flexGrow: 1 }}><YStack padding="$space.8" gap="$space.10">{children}</YStack></ScrollView></TerminalFrame></YStack></XStack></YStack>
  )
}

export const BriefSection = ({ label, title, children }: { label: string, title: string, children: React.ReactNode }) => (
  <YStack gap="$space.4"><XStack gap="$space.4" alignItems="center"><TerminalText fontSize="$6" intensity="high" opacity={0.5}>{label}</TerminalText><YStack flex={1} gap="$space.1"><TypewriterText text={title} intensity="high" fontSize="$4" glow delay={60} /><Separator borderColor="$accent" borderBottomWidth={2} width={100} /></YStack></XStack><YStack paddingLeft="$space.10" gap="$space.4">{children}</YStack></YStack>
)
