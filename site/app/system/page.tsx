import type { Metadata } from 'next'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'System — Martin Drexler',
  description: 'Design system reference. Internal.',
  robots: { index: false, follow: false },
}

const inkRamp = [
  { token: '--ink', value: '#000000', use: 'hairlines, display' },
  { token: '--ink-80', value: '#1a1a1a', use: 'body text' },
  { token: '--ink-70', value: '#404040', use: 'secondary, label' },
  { token: '--ink-50', value: '#737373', use: 'placeholder, mute' },
  { token: '--ink-30', value: '#b3b3b3', use: 'disabled, subtle rule' },
  { token: '--ink-15', value: '#d9d9d9', use: 'faint divider' },
  { token: '--ink-05', value: '#f2f2f2', use: 'hover surface' },
  { token: '--bg', value: '#ffffff', use: 'page surface' },
]

const typeScale = [
  { token: '--text-6xl', px: 96, sample: 'Monumental' },
  { token: '--text-5xl', px: 72, sample: 'Hero display' },
  { token: '--text-4xl', px: 48, sample: 'Display' },
  { token: '--text-3xl', px: 36, sample: 'h1 small' },
  { token: '--text-2xl', px: 28, sample: 'h2 — Section heading' },
  { token: '--text-xl', px: 22, sample: 'Subheading' },
  { token: '--text-lg', px: 18, sample: 'Editorial body — long-form reading sized for breath.' },
  { token: '--text-base', px: 16, sample: 'Body — default copy. Used throughout the site at 16px on a 1.55 leading.' },
  { token: '--text-sm', px: 14, sample: 'Secondary body — used for form descriptions and notes.' },
  { token: '--text-xs', px: 12, sample: 'MONO LABEL · TRACKED CAPS' },
  { token: '--text-2xs', px: 11, sample: 'MICRO CHROME' },
]

const spaceScale = [
  { token: '--space-1', px: 4 },
  { token: '--space-2', px: 8 },
  { token: '--space-3', px: 12 },
  { token: '--space-4', px: 16 },
  { token: '--space-5', px: 24 },
  { token: '--space-6', px: 32 },
  { token: '--space-7', px: 48 },
  { token: '--space-8', px: 64 },
  { token: '--space-9', px: 96 },
  { token: '--space-10', px: 128 },
  { token: '--space-11', px: 192 },
]

export default function SystemPage() {
  return (
    <div className={styles.page}>
      <header className={styles.rail}>
        <span className={styles.brand}>MD</span>
        <nav className={styles.railNav}>
          <span className={styles.coord}>00 — SYSTEM</span>
          <span className={styles.coord}>v2 / 2026.06.08</span>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.titleSection}>
          <span className={styles.coord}>00 — DESIGN SYSTEM</span>
          <h1 className={styles.title}>
            Zion v2<span className={styles.cursor} aria-hidden="true" />
          </h1>
          <p className={styles.lede}>
            Pure white field, ink hairlines, no chroma. Inter for content, IBM Plex Mono for the
            system&apos;s voice. This page is the reference — every primitive in one place.
          </p>
        </section>

        <Divider id="01" label="FOUNDATIONS" />

        <Block label="Colour ramp">
          <div className={styles.swatchGrid}>
            {inkRamp.map((s) => (
              <div key={s.token} className={styles.swatch}>
                <div
                  className={styles.swatchChip}
                  style={{ background: `var(${s.token})` }}
                />
                <div className={styles.swatchMeta}>
                  <span className={styles.swatchToken}>{s.token}</span>
                  <span className={styles.swatchValue}>{s.value}</span>
                  <span className={styles.swatchUse}>{s.use}</span>
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Type scale">
          <div className={styles.typeStack}>
            {typeScale.map((t) => (
              <div key={t.token} className={styles.typeRow}>
                <div className={styles.typeMeta}>
                  <span className={styles.coord}>{t.token}</span>
                  <span className={styles.coordMute}>{t.px}px</span>
                </div>
                <div
                  className={t.token.includes('xs') || t.token.includes('2xs') ? styles.typeSampleMono : styles.typeSample}
                  style={{ fontSize: `var(${t.token})` }}
                >
                  {t.sample}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Type pairing">
          <div className={styles.pairing}>
            <div>
              <span className={styles.coord}>01 — DISPLAY / BODY</span>
              <h3 className={styles.pairingTitle}>Inter, the workhorse.</h3>
              <p className={styles.pairingBody}>
                Inter handles every editorial moment: hero, headlines, body. Negative tracking
                tightens it at scale; the leading opens up for long-form. The system has no
                serif and no script — restraint is the typographic position.
              </p>
            </div>
            <div>
              <span className={styles.coord}>02 — DATA / CHROME</span>
              <h3 className={styles.pairingMonoTitle}>IBM Plex Mono</h3>
              <p className={styles.pairingMonoBody}>
                MONO IS THE VOICE OF THE SYSTEM — COORDS, IDS, LABELS,
                STATUS LINES, BUTTON LABELS. ALWAYS TRACKED, OFTEN UPPERCASE.
                NEVER USED FOR LONG-FORM READING.
              </p>
            </div>
          </div>
        </Block>

        <Block label="Space">
          <div className={styles.spaceStack}>
            {spaceScale.map((s) => (
              <div key={s.token} className={styles.spaceRow}>
                <span className={styles.coord}>{s.token}</span>
                <span className={styles.coordMute}>{s.px}px</span>
                <div className={styles.spaceBar} style={{ width: `${s.px}px` }} />
              </div>
            ))}
          </div>
        </Block>

        <Block label="Rules">
          <div className={styles.ruleStack}>
            <div className={styles.ruleRow}>
              <span className={styles.coord}>--rule</span>
              <div className={styles.ruleDefault} />
            </div>
            <div className={styles.ruleRow}>
              <span className={styles.coord}>--rule-mute</span>
              <div className={styles.ruleMute} />
            </div>
            <div className={styles.ruleRow}>
              <span className={styles.coord}>--rule-faint</span>
              <div className={styles.ruleFaint} />
            </div>
          </div>
        </Block>

        <Divider id="02" label="COMPONENTS" />

        <Block label="Buttons — three variants × four states">
          <div className={styles.matrix}>
            <div className={styles.matrixHead}>
              <span />
              <span className={styles.coord}>IDLE</span>
              <span className={styles.coord}>HOVER</span>
              <span className={styles.coord}>FOCUS</span>
              <span className={styles.coord}>DISABLED</span>
            </div>
            {(['outline', 'solid', 'ghost'] as const).map((variant) => (
              <div key={variant} className={styles.matrixRow}>
                <span className={styles.coord}>{variant.toUpperCase()}</span>
                <button className={`${styles.btn} ${styles[`btn_${variant}`]}`} type="button">Send</button>
                <button className={`${styles.btn} ${styles[`btn_${variant}`]}`} data-state="hover" type="button">Send</button>
                <button className={`${styles.btn} ${styles[`btn_${variant}`]}`} data-state="focus" type="button">Send</button>
                <button className={`${styles.btn} ${styles[`btn_${variant}`]}`} disabled type="button">Send</button>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Fields — input, textarea, with states">
          <div className={styles.fieldGrid}>
            <FieldDemo label="IDLE" state="idle" />
            <FieldDemo label="FOCUS" state="focus" />
            <FieldDemo label="ERROR" state="error" />
            <FieldDemo label="DISABLED" state="disabled" />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel}>MESSAGE</label>
            <textarea
              className={styles.field}
              rows={4}
              placeholder="Tell me about your project..."
              defaultValue=""
            />
          </div>
        </Block>

        <Block label="Links">
          <div className={styles.linkStack}>
            <p>
              Inline links sit in body copy with a faint underline that{' '}
              <a className={styles.linkInline} href="#">darkens on hover</a> — the colour stays,
              the underline shifts.
            </p>
            <p>
              <a className={styles.linkStandalone} href="#">Standalone link →</a>
            </p>
            <p>
              <a className={styles.linkStandalone} data-state="hover" href="#">Same, on hover</a>
            </p>
          </div>
        </Block>

        <Block label="Dividers">
          <div className={styles.dividerStack}>
            <div>
              <span className={styles.coord}>PLAIN</span>
              <div className={styles.divPlain} />
            </div>
            <div>
              <span className={styles.coord}>LABELLED</span>
              <div className={styles.divLabelled}>
                <span className={styles.divLabel}>03 — PROCESS</span>
              </div>
            </div>
          </div>
        </Block>

        <Block label="Coord label — formats">
          <ul className={styles.coordList}>
            <li><span className={styles.coord}>01 — INDEX</span><span className={styles.coordNote}>section identifier</span></li>
            <li><span className={styles.coord}>04 / 06</span><span className={styles.coordNote}>counter</span></li>
            <li><span className={styles.coord}>HOME / WORK / KELLER</span><span className={styles.coordNote}>breadcrumb</span></li>
            <li><span className={styles.coord}>2026</span><span className={styles.coordNote}>date stamp</span></li>
            <li><span className={styles.coord}>MUC / 48.137 N 11.575 E</span><span className={styles.coordNote}>coordinate</span></li>
          </ul>
        </Block>

        <Block label="Frame">
          <div className={styles.frame}>
            <span className={styles.frameLabel}>FIG. 01 — FRAME WITH SECTION ID</span>
            <p className={styles.frameBody}>
              A bordered region for grouped content. The mono identifier sits on the top rule,
              padded with white-space so the line appears to break for it. No shadow, no radius.
            </p>
          </div>
        </Block>

        <Block label="Status line">
          <div className={styles.statusStack}>
            <span className={styles.statusIdle}>[ AVAILABLE ]</span>
            <span className={styles.statusActive}>[ SENDING ]</span>
            <span className={styles.statusActive}>[ OK — MESSAGE RECEIVED ]</span>
          </div>
        </Block>

        <Block label="Cursor">
          <p className={styles.cursorDemo}>
            Live state communicator<span className={styles.cursor} aria-hidden="true" />
          </p>
          <p className={styles.fineprint}>Blinks at 1.2s. Reduced-motion turns it solid.</p>
        </Block>

        <Divider id="03" label="PATTERNS" />

        <Block label="Section identifier in context">
          <div className={styles.sectionDemo}>
            <span className={styles.sectionDemoId}>02 — ROLE</span>
            <div className={styles.sectionDemoRule} />
            <h3 className={styles.sectionDemoTitle}>Identity systems, editorial, brand.</h3>
            <p className={styles.sectionDemoBody}>
              The identifier orients the visitor without a sticky nav. Numbered, dashed, in mono,
              left-aligned to the column. Used at the top of every long-form section.
            </p>
          </div>
        </Block>

        <Block label="Asymmetric two-up (7 + 5)">
          <div className={styles.twoUp}>
            <div className={styles.twoUpContent}>
              <span className={styles.coord}>01 — CONTEXT</span>
              <h3 className={styles.twoUpTitle}>The case-study layout favours asymmetry.</h3>
              <p className={styles.twoUpBody}>
                Seven columns of content, five of meta. Symmetric splits read as templated;
                the 7/5 (or 8/4) division gives the page a rhythm. Reading column never
                exceeds 65 characters; meta column carries dates, role, deliverables.
              </p>
            </div>
            <aside className={styles.twoUpMeta}>
              <dl className={styles.metaList}>
                <div className={styles.metaRow}>
                  <dt className={styles.coord}>ROLE</dt>
                  <dd className={styles.metaValue}>Brand identity, art direction</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.coord}>YEAR</dt>
                  <dd className={styles.metaValue}>2025</dd>
                </div>
                <div className={styles.metaRow}>
                  <dt className={styles.coord}>DELIVER</dt>
                  <dd className={styles.metaValue}>Wordmark, system, print collateral</dd>
                </div>
              </dl>
            </aside>
          </div>
        </Block>

        <Divider id="04" label="ANTI-PATTERNS" />

        <Block label="What the design-critic will reject">
          <ul className={styles.antiList}>
            <li>Border-radius anywhere. Sharp corners only.</li>
            <li>Box-shadow on any element. Hairlines do the work.</li>
            <li>Greys outside the documented ramp.</li>
            <li>Lucide / Heroicons / any third-party icon set.</li>
            <li>Coloured CTAs. Ink-on-white or white-on-ink, nothing else.</li>
            <li>Centered hero with grey subhead — the templated-landing-page signature.</li>
            <li>Glass / backdrop-blur cards.</li>
            <li>Scroll-triggered fade-ins, parallax, looping animations (cursor excepted).</li>
            <li>Three-column &ldquo;what I do&rdquo; grid. If three things matter, write three sentences.</li>
          </ul>
        </Block>
      </main>

      <footer className={styles.footRail}>
        <span className={styles.coord}>00 / 06 — END OF SYSTEM</span>
        <span className={styles.coord}>MARTINDREXLER.COM</span>
      </footer>
    </div>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className={styles.block}>
      <h2 className={styles.blockLabel}>{label}</h2>
      <div className={styles.blockBody}>{children}</div>
    </section>
  )
}

function Divider({ id, label }: { id: string; label: string }) {
  return (
    <div className={styles.bigDivider}>
      <span className={styles.bigDividerLabel}>
        {id} — {label}
      </span>
    </div>
  )
}

function FieldDemo({ label, state }: { label: string; state: 'idle' | 'focus' | 'error' | 'disabled' }) {
  return (
    <div className={styles.fieldGroup}>
      <label className={styles.fieldLabel}>{label}</label>
      <input
        className={styles.field}
        data-state={state}
        defaultValue={state === 'error' ? 'broken@example' : ''}
        placeholder="your@email.com"
        disabled={state === 'disabled'}
        type="text"
      />
      {state === 'error' && <span className={styles.fieldError}>[ERROR] INVALID EMAIL</span>}
    </div>
  )
}
