'use client'

import { YStack, XStack, Separator, View, Input, Button, styled } from 'tamagui'
import { TerminalFrame, FrameDecoration } from '@/components/Terminal/Frame'
import { TerminalText } from '@/components/Terminal/Text'
import { TypewriterText } from '@/components/Terminal/Typewriter'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TerminalInput = styled(Input, {
  name: 'TerminalInput',
  backgroundColor: 'rgba(255, 176, 0, 0.05)',
  borderWidth: 0,
  borderBottomWidth: 1,
  borderColor: '$stroke',
  color: '$text',
  fontFamily: '$mono',
  fontSize: '$2',
  borderRadius: 0,
  padding: '$space.2',
  focusStyle: {
    borderColor: '$accent',
    backgroundColor: 'rgba(255, 176, 0, 0.1)',
  }
})

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <YStack flex={1} padding="$space.4" alignItems="center" justifyContent="center"><motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: 800 }}
      ><TerminalFrame padding="$space.8" glow><FrameDecoration /><YStack gap="$space.6">{!sent ? (
            <><YStack gap="$space.2"><TypewriterText text="ESTABLISHING_SECURE_UPLINK..." fontSize="$4" intensity="high" /><TerminalText intensity="muted" fontSize="$1">ENCRYPTION_MODE: END_TO_END_ACTIVE</TerminalText></YStack><Separator borderColor="$stroke" /><YStack gap="$space.4"><YStack gap="$space.1"><TerminalText fontSize="$1" intensity="dim">SENDER_IDENTITY_REQUIRED</TerminalText><TerminalInput placeholder="INPUT_NAME_" /></YStack><YStack gap="$space.1"><TerminalText fontSize="$1" intensity="dim">SIGNAL_DESTINATION</TerminalText><TerminalInput placeholder="INPUT_EMAIL_" /></YStack><YStack gap="$space.1"><TerminalText fontSize="$1" intensity="dim">DATA_PACKET_CONTENT</TerminalText><TerminalInput placeholder="INPUT_MESSAGE_" multiline height={100} /></YStack></YStack><XStack justifyContent="flex-end" marginTop="$space.4"><Button 
                  backgroundColor="$accent" 
                  borderRadius={0} 
                  onPress={() => setSent(true)}
                  hoverStyle={{ opacity: 0.8, scale: 0.98 }}
                ><TerminalText color="#000" fontWeight="700">TRANSMIT_DATA_PACKET</TerminalText></Button></XStack></>
          ) : (
            <YStack alignItems="center" padding="$space.10" gap="$space.4"><View padding="$space.4" borderWidth={2} borderColor="$green" borderRadius={100}><TerminalText color="$green" fontSize="$8" glow>✓</TerminalText></View><TerminalText intensity="high" fontSize="$5" className="glitch-text">TRANSMISSION_SUCCESSFUL</TerminalText><TerminalText intensity="muted" textAlign="center">DATA_PACKET_QUEUED_FOR_DECRYPTION_BY_DREXLER_CORE</TerminalText><Button 
                marginTop="$space.6"
                variant="outlined" 
                borderColor="$stroke"
                onPress={() => setSent(false)}
              ><TerminalText fontSize="$1">REINITIALIZE_UPLINK</TerminalText></Button></YStack>
          )}</YStack></TerminalFrame></motion.div><XStack marginTop="$space.8" gap="$space.10"><YStack gap="$space.2" alignItems="center"><TerminalText fontSize="$1" intensity="dim">LOCATION</TerminalText><TerminalText fontSize="$2">BERLIN_NODE_01</TerminalText></YStack><YStack gap="$space.2" alignItems="center"><TerminalText fontSize="$1" intensity="dim">TIME_ZONE</TerminalText><TerminalText fontSize="$2">UTC+1</TerminalText></YStack><YStack gap="$space.2" alignItems="center"><TerminalText fontSize="$1" intensity="dim">AVAILABILITY</TerminalText><TerminalText color="$green" fontSize="$2">HIGH_BANDWIDTH</TerminalText></YStack></XStack></YStack>
  )
}
