'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'

export default function ThemePage() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const copyToClipboard = (text: string, token: string) => {
    navigator.clipboard.writeText(text)
    setCopiedToken(token)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  // Color tokens data
  const colorTokens = [
    {
      category: 'Background Colors',
      colors: [
        { name: 'Black', hex: '#000000', var: '--bg-black', usage: 'Primary dark background' },
        { name: 'Dark', hex: '#010101', var: '--bg-dark', usage: 'Slightly lighter black' },
        { name: 'Charcoal 1', hex: '#2f3234', var: '--bg-charcoal-1', usage: 'Dark gray surface' },
        { name: 'Charcoal 2', hex: '#565654', var: '--bg-charcoal-2', usage: 'Medium gray surface' },
        { name: 'Olive', hex: '#505544', var: '--bg-olive', usage: 'Olive accent background' },
        { name: 'Gray Dark', hex: '#6c6e6b', var: '--bg-gray-dark', usage: 'Dark gray' },
        { name: 'Gray Light', hex: '#b0b0a9', var: '--bg-gray-light', usage: 'Light gray' },
        { name: 'Tan', hex: '#bdad96', var: '--bg-tan', usage: 'Tan accent' },
        { name: 'Cream', hex: '#f1f0ea', var: '--bg-cream', usage: 'Primary light background' },
        { name: 'White', hex: '#ffffff', var: '--bg-white', usage: 'Pure white' },
        { name: 'Accent Green', hex: '#dff140', var: '--bg-accent-green', usage: 'Neon yellow-green accent' },
      ]
    },
    {
      category: 'Text Colors',
      colors: [
        { name: 'Black', hex: '#010101', var: '--text-black', usage: 'Text on light backgrounds' },
        { name: 'Charcoal', hex: '#2f3234', var: '--text-charcoal', usage: 'Dark gray text' },
        { name: 'Gray', hex: '#b0b0a9', var: '--text-gray', usage: 'Muted text' },
        { name: 'Cream', hex: '#f1f0ea', var: '--text-cream', usage: 'Cream text on dark' },
        { name: 'White', hex: '#ffffff', var: '--text-white', usage: 'Text on dark backgrounds' },
        { name: 'Accent Green', hex: '#dff140', var: '--text-accent-green', usage: 'Accent text color' },
        { name: 'Error Red', hex: '#ff3535', var: '--text-error-red', usage: 'Error messages' },
      ]
    },
    {
      category: 'Border Colors',
      colors: [
        { name: 'Black', hex: '#010101', var: '--border-black', usage: 'Dark borders' },
        { name: 'White', hex: '#ffffff', var: '--border-white', usage: 'Light borders' },
        { name: 'Gray', hex: '#b0b0a9', var: '--border-gray', usage: 'Subtle borders' },
      ]
    }
  ]

  // Typography samples
  const typographyScale = [
    { name: 'Display', size: '5rem', lineHeight: '105%', letterSpacing: '-0.1rem', var: '--text-display' },
    { name: 'H1', size: '4rem', lineHeight: '105%', letterSpacing: '-0.08rem', var: '--text-h1' },
    { name: 'H2', size: '3.5rem', lineHeight: '110%', letterSpacing: '-0.07rem', var: '--text-h2' },
    { name: 'H3', size: '2.5rem', lineHeight: '115%', letterSpacing: '-0.05rem', var: '--text-h3' },
    { name: 'H4', size: '2rem', lineHeight: '115%', letterSpacing: '-0.02rem', var: '--text-h4' },
    { name: 'H5', size: '1.5rem', lineHeight: '115%', letterSpacing: '-0.015rem', var: '--text-h5' },
    { name: 'H6', size: '1.25rem', lineHeight: '115%', letterSpacing: '-0.013rem', var: '--text-h6' },
    { name: 'Body', size: '1.05rem', lineHeight: '120%', letterSpacing: '-0.009rem', var: '--text-body' },
    { name: 'Body Small', size: '0.938rem', lineHeight: '120%', letterSpacing: '-0.009rem', var: '--text-body-sm' },
    { name: 'Caption', size: '0.75rem', lineHeight: '120%', letterSpacing: '-0.009rem', var: '--text-caption' },
  ]

  // Spacing tokens
  const spacingTokens = [
    { name: 'Space 1', value: '0.25rem', var: '--space-1', px: '4px' },
    { name: 'Space 2', value: '0.5rem', var: '--space-2', px: '8px' },
    { name: 'Space 3', value: '0.75rem', var: '--space-3', px: '12px' },
    { name: 'Space 4', value: '1rem', var: '--space-4', px: '16px' },
    { name: 'Space 5', value: '1.5rem', var: '--space-5', px: '24px' },
    { name: 'Space 6', value: '2rem', var: '--space-6', px: '32px' },
    { name: 'Space 7', value: '3rem', var: '--space-7', px: '48px' },
    { name: 'Space 8', value: '4rem', var: '--space-8', px: '64px' },
    { name: 'Space 9', value: '6rem', var: '--space-9', px: '96px' },
    { name: 'Space 10', value: '8rem', var: '--space-10', px: '128px' },
  ]

  // Design tokens reference
  const designTokens = [
    { category: 'Colors', token: '--bg-black', value: '#000000', usage: 'Primary dark background' },
    { category: 'Colors', token: '--bg-cream', value: '#f1f0ea', usage: 'Primary light background' },
    { category: 'Colors', token: '--accent-primary', value: '#dff140', usage: 'Neon yellow-green accent' },
    { category: 'Typography', token: '--font-body', value: 'Helvetica Neue, Helvetica, Arial, sans-serif', usage: 'Body text font' },
    { category: 'Typography', token: '--text-h1', value: '4rem', usage: 'H1 font size' },
    { category: 'Typography', token: '--text-body', value: '1.05rem', usage: 'Body font size' },
    { category: 'Spacing', token: '--space-4', value: '1rem', usage: 'Base spacing unit' },
    { category: 'Spacing', token: '--space-8', value: '4rem', usage: 'Large spacing unit' },
    { category: 'Layout', token: '--container-xl', value: '1440px', usage: 'Max container width' },
    { category: 'Layout', token: '--grid-columns', value: 'repeat(12, 1fr)', usage: '12-column grid' },
    { category: 'Transitions', token: '--duration-normal', value: '300ms', usage: 'Normal animation duration' },
    { category: 'Transitions', token: '--ease-out', value: 'ease-out', usage: 'Ease-out timing function' },
  ]

  return (
    <main className={styles.main}>
      {/* Page Header */}
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Design System</h1>
          <p className={styles.subtitle}>
            Complete visual language and component library for Martin Drexler's portfolio.
            Inspired by Anduril Lattice Command & Control aesthetic.
          </p>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Color Palette</h2>
          <p className={styles.sectionDescription}>
            Our color system is built on high contrast with black and cream as primary backgrounds,
            accented with neon yellow-green for interactive elements.
          </p>

          {colorTokens.map((category) => (
            <div key={category.category} className={styles.colorCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.colorGrid}>
                {category.colors.map((color) => (
                  <div key={color.var} className={styles.colorCard}>
                    <div
                      className={styles.colorSwatch}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`${color.name} color swatch`}
                    />
                    <div className={styles.colorInfo}>
                      <div className={styles.colorName}>{color.name}</div>
                      <div className={styles.colorHex}>{color.hex}</div>
                      <button
                        className={styles.colorVar}
                        onClick={() => copyToClipboard(color.var, color.var)}
                        title="Click to copy"
                      >
                        {copiedToken === color.var ? 'Copied!' : color.var}
                      </button>
                      <div className={styles.colorUsage}>{color.usage}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Typography</h2>
          <p className={styles.sectionDescription}>
            Helvetica Neue is used throughout for a clean, modern, and technical aesthetic.
            All text uses weight 400 (regular) with tight letter spacing for precision.
          </p>

          <div className={styles.typographyList}>
            {typographyScale.map((type) => (
              <div key={type.name} className={styles.typographyItem}>
                <div className={styles.typographyLabel}>
                  <div className={styles.typographyName}>{type.name}</div>
                  <div className={styles.typographySpecs}>
                    {type.size} / {type.lineHeight} / {type.letterSpacing}
                  </div>
                  <button
                    className={styles.tokenButton}
                    onClick={() => copyToClipboard(type.var, type.var)}
                    title="Click to copy"
                  >
                    {copiedToken === type.var ? 'Copied!' : type.var}
                  </button>
                </div>
                <div
                  className={styles.typographySample}
                  style={{
                    fontSize: type.size,
                    lineHeight: type.lineHeight,
                    letterSpacing: type.letterSpacing,
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Spacing Scale</h2>
          <p className={styles.sectionDescription}>
            Consistent spacing system based on a 4px base unit (0.25rem).
            Use these tokens for padding, margin, and gap values.
          </p>

          <div className={styles.spacingList}>
            {spacingTokens.map((space) => (
              <div key={space.var} className={styles.spacingItem}>
                <div className={styles.spacingInfo}>
                  <div className={styles.spacingName}>{space.name}</div>
                  <div className={styles.spacingValue}>{space.value} ({space.px})</div>
                  <button
                    className={styles.tokenButton}
                    onClick={() => copyToClipboard(space.var, space.var)}
                    title="Click to copy"
                  >
                    {copiedToken === space.var ? 'Copied!' : space.var}
                  </button>
                </div>
                <div
                  className={styles.spacingBar}
                  style={{ width: space.value }}
                  aria-label={`Spacing bar showing ${space.value}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Components</h2>

          {/* Buttons */}
          <div className={styles.componentGroup}>
            <h3 className={styles.componentTitle}>Buttons</h3>

            <div className={styles.componentDemo}>
              <div className={styles.demoLabel}>Primary Button</div>
              <div className={styles.buttonShowcase}>
                <button className={styles.buttonPrimary}>Default State</button>
                <button className={styles.buttonPrimary} disabled>Disabled State</button>
              </div>
              <pre className={styles.codeBlock}>
{`<button className="button-primary">
  Click me
</button>`}
              </pre>
            </div>

            <div className={styles.componentDemo}>
              <div className={styles.demoLabel}>Secondary Button</div>
              <div className={styles.buttonShowcase}>
                <button className={styles.buttonSecondary}>Default State</button>
                <button className={styles.buttonSecondary} disabled>Disabled State</button>
              </div>
              <pre className={styles.codeBlock}>
{`<button className="button-secondary">
  Click me
</button>`}
              </pre>
            </div>
          </div>

          {/* Form Inputs */}
          <div className={styles.componentGroup}>
            <h3 className={styles.componentTitle}>Form Inputs</h3>

            <div className={styles.componentDemo}>
              <div className={styles.demoLabel}>Text Input</div>
              <input
                type="text"
                placeholder="Enter your name"
                className={styles.textInput}
              />
              <input
                type="text"
                placeholder="Disabled state"
                className={styles.textInput}
                disabled
              />
              <pre className={styles.codeBlock}>
{`<input
  type="text"
  placeholder="Enter your name"
  className="text-input"
/>`}
              </pre>
            </div>

            <div className={styles.componentDemo}>
              <div className={styles.demoLabel}>Textarea</div>
              <textarea
                placeholder="Enter your message"
                className={styles.textarea}
                rows={4}
              />
              <pre className={styles.codeBlock}>
{`<textarea
  placeholder="Enter your message"
  className="textarea"
  rows={4}
/>`}
              </pre>
            </div>
          </div>

          {/* Cards */}
          <div className={styles.componentGroup}>
            <h3 className={styles.componentTitle}>Cards</h3>

            <div className={styles.componentDemo}>
              <div className={styles.demoLabel}>Service Card</div>
              <div className={styles.cardExample}>
                <div className={styles.cardLabel}>Service</div>
                <div className={styles.cardTitle}>Product Design</div>
                <div className={styles.cardDescription}>
                  End-to-end product design from concept to launch, including UX research,
                  interaction design, and visual design.
                </div>
              </div>
              <pre className={styles.codeBlock}>
{`<div className="card">
  <div className="card-label">Service</div>
  <h3 className="card-title">Product Design</h3>
  <p className="card-description">...</p>
</div>`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens Table */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Design Tokens Reference</h2>
          <p className={styles.sectionDescription}>
            Core design tokens used throughout the system.
            Click any token to copy to clipboard.
          </p>

          <div className={styles.tokenTable}>
            <div className={styles.tokenRow}>
              <div className={styles.tokenHeader}>Category</div>
              <div className={styles.tokenHeader}>Token</div>
              <div className={styles.tokenHeader}>Value</div>
              <div className={styles.tokenHeader}>Usage</div>
            </div>
            {designTokens.map((token, idx) => (
              <div key={idx} className={styles.tokenRow}>
                <div className={styles.tokenCell}>{token.category}</div>
                <button
                  className={styles.tokenCellButton}
                  onClick={() => copyToClipboard(token.token, token.token)}
                  title="Click to copy"
                >
                  {copiedToken === token.token ? 'Copied!' : token.token}
                </button>
                <div className={styles.tokenCell}>{token.value}</div>
                <div className={styles.tokenCell}>{token.usage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Grid System</h2>
          <p className={styles.sectionDescription}>
            12-column grid system with 1.25rem column gap and 1.125rem row gap.
            All layouts use this grid for consistency.
          </p>

          <div className={styles.gridDemo}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className={styles.gridColumn}>
                <div className={styles.gridColumnInner}>{i + 1}</div>
              </div>
            ))}
          </div>

          <div className={styles.gridExamples}>
            <div className={styles.gridExample}>
              <div className={styles.exampleLabel}>2-Column Layout</div>
              <div className={styles.gridDemoExample}>
                <div className={styles.gridCol6}>Column 1 (6 cols)</div>
                <div className={styles.gridCol6}>Column 2 (6 cols)</div>
              </div>
            </div>

            <div className={styles.gridExample}>
              <div className={styles.exampleLabel}>3-Column Layout</div>
              <div className={styles.gridDemoExample}>
                <div className={styles.gridCol4}>Column 1 (4 cols)</div>
                <div className={styles.gridCol4}>Column 2 (4 cols)</div>
                <div className={styles.gridCol4}>Column 3 (4 cols)</div>
              </div>
            </div>

            <div className={styles.gridExample}>
              <div className={styles.exampleLabel}>Asymmetric Layout (5-7)</div>
              <div className={styles.gridDemoExample}>
                <div className={styles.gridCol5}>Sidebar (5 cols)</div>
                <div className={styles.gridCol7}>Main Content (7 cols)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
