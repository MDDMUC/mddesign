'use client'

import React, { useState, useEffect } from 'react'
import { TerminalText } from './Text'

export const TypewriterText = ({ text, delay = 50, ...props }: { text: string, delay?: number, [key: string]: any }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return <TerminalText {...props}>{currentText}{currentIndex < text.length && <span className="blink">_</span>}</TerminalText>
}
