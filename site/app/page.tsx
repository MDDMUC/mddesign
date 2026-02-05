'use client'

import { YStack, XStack, Separator, View } from 'tamagui'
import { TerminalFrame, FrameDecoration } from '@/components/Terminal/Frame'
import { TerminalText } from '@/components/Terminal/Text'
import { TypewriterText } from '@/components/Terminal/Typewriter'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const projects = [
  { id: 'PROJECT_01', title: 'CEPRES', status: 'DECRYPTED', type: 'FinTech Interface' },
  { id: 'PROJECT_02', title: 'KELLER', status: 'STABLE', type: 'E-Commerce Engine' },
  { id: 'PROJECT_03', title: 'YCA_SITE', status: 'ACTIVE', type: 'Brand Experience' },
]

export default function Home() {
  const [booting, setBooting] = useState(true)
  const [coords, setCoords] = useState({ x: 40.7128, y: 74.0060 })

  useEffect(() => {
    const timer = setTimeout(() => setBooting(false), 2000)
    const interval = setInterval(() => {
      setCoords({
        x: 40.7128 + (Math.random() - 0.5) * 0.01,
        y: 74.0060 + (Math.random() - 0.5) * 0.01
      })
    }, 100)
    return () => { clearTimeout(timer); clearInterval(interval); }
  }, [])

  return (
    <YStack flex={1} backgroundColor="$bg" position="relative" overflow="hidden"><AnimatePresence>{booting && (
          <motion.div
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, backgroundColor: '#1a1b1d', zIndex: 10000,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 10
            }}
          ><TypewriterText intensity="high" className="blink" text="INITIALIZING_BOOT_SEQUENCE..." /><TerminalText intensity="muted" fontSize="$1">KERNEL_LOADING_0xFF721</TerminalText><View width={200} height={2} backgroundColor="$stroke"><motion.div 
                initial={{ width: 0 }} 
                animate={{ width: '100%' }} 
                transition={{ duration: 1.5 }}
                style={{ height: '100%', backgroundColor: '#ffb000' }} 
              /></View></motion.div>
        )}</AnimatePresence><XStack flex={1} padding="$space.4" gap="$space.4"><YStack width={200} gap="$space.4" $md={{ display: 'none' }}><TerminalFrame flex={1} padding="$space.3"><FrameDecoration /><YStack gap="$space.2"><TerminalText fontSize="$1" intensity="dim">COORD_TRACKER</TerminalText><Separator borderColor="$stroke" /><TerminalText fontSize="$1" intensity="high">LAT: {coords.x.toFixed(4)}</TerminalText><TerminalText fontSize="$1" intensity="high">LON: {coords.y.toFixed(4)}</TerminalText></YStack><YStack flex={1} justifyContent="flex-end"><TerminalText fontSize="$1" intensity="dim">SIGNAL: ESTABLISHED</TerminalText></YStack></TerminalFrame><TerminalFrame height={150} padding="$space.3"><FrameDecoration /><TerminalText fontSize="$1" intensity="dim">MEM_USAGE</TerminalText><View flex={1} justifyContent="center" alignItems="center"><TerminalText fontSize="$6" glow>94%</TerminalText></View></TerminalFrame></YStack><YStack flex={1} gap="$space.4"><TerminalFrame padding="$space.8" glow><FrameDecoration /><YStack gap="$space.2" alignItems="center"><TypewriterText intensity="muted" fontSize="$1" letterSpacing={10} text="STRATEGIC DESIGN PARTNER" delay={100} /><TypewriterText fontSize="$9" fontWeight="700" glow style={{ fontSize: 'min(8vw, 80px)' }} text="MARTIN DREXLER" delay={80} /><XStack gap="$space.4" alignItems="center"><Separator width={50} borderColor="$accent" /><TerminalText intensity="high" className="glitch-text">IDENTITY_001_AUTHORIZED</TerminalText><Separator width={50} borderColor="$accent" /></XStack></YStack></TerminalFrame><XStack gap="$space.4" flexWrap="wrap">{projects.map((p, i) => (
              <TerminalFrame key={p.id} flex={1} minWidth={280} interactive padding="$space.0" overflow="hidden" variant="chamfered"><motion.div whileHover={{ scale: 1.02 }} style={{ padding: 24, height: '100%' }}><YStack gap="$space.4"><XStack justifyContent="space-between" alignItems="center"><TerminalText intensity="dim" fontSize="$1">{p.id}</TerminalText><TerminalText color="$green" fontSize="$1">[{p.status}]</TerminalText></XStack><Separator borderColor="$stroke" /><YStack><TerminalText fontSize="$5" glow>{p.title}</TerminalText><TerminalText intensity="muted" fontSize="$2">{p.type}</TerminalText></YStack><View height={100} backgroundColor="rgba(255,176,0,0.05)" borderWidth={1} borderStyle="dashed" borderColor="$stroke" justifyContent="center" alignItems="center"><TerminalText intensity="dim" fontSize="$1">ENCRYPTED_PREVIEW_DATA</TerminalText></View><XStack justifyContent="space-between" alignItems="center"><TerminalText fontSize="$1" intensity="muted">REV_2026.01</TerminalText><View paddingHorizontal="$space.2" paddingVertical="$space.1" backgroundColor="$accent"><TerminalText color="#000" fontSize="$1" fontWeight="700">OPEN_FILE</TerminalText></View></XStack></YStack></motion.div></TerminalFrame>
            ))}</XStack></YStack><YStack width={60} gap="$space.4" alignItems="center" $sm={{ display: 'none' }}><View flex={1} width={1} backgroundColor="$stroke" /><TerminalText style={{ writingMode: 'vertical-rl' }} intensity="dim" fontSize="$1">ACCESS_LOG_2026</TerminalText><View flex={1} width={1} backgroundColor="$stroke" /></YStack></XStack><XStack position="absolute" bottom={10} left={20} gap="$space.4"><TerminalText fontSize="$1" intensity="dim">©2026_DREXLER_CORE</TerminalText><TerminalText fontSize="$1" intensity="dim">SECURE_CONNECTION</TerminalText></XStack></YStack>
  )
}
