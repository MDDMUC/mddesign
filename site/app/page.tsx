import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'
import { CoverVideo } from '@/components/CoverVideo/CoverVideo'
import { CoverVimeo } from '@/components/CoverVimeo/CoverVimeo'
import { SplineBackground } from '@/components/SplineBackground/SplineBackground'
import { featuredWork, workItems } from '@/data/work'
import {
  clientBanner,
  competenceBody,
  connectLede,
  essays,
  footerLinks,
  heroPositioning,
  heroTitlePrimary,
  heroTitleSecondary,
  news,
  pillars,
  positioningLede,
  referrals,
  services,
} from '@/data/home'

const SPLINE_SCENE =
  'https://prod.spline.design/2VP4ii8nltELLL1I/scene.splinecode'

const coverClass: Record<(typeof workItems)[number]['coverVariant'], string> = {
  field: styles.coverField,
  strip: styles.coverStrip,
  pack: styles.coverPack,
  object: styles.coverObject,
  letterbox: styles.coverLetterbox,
  wayfind: styles.coverWayfind,
}

export const metadata: Metadata = {
  title: 'Martin Drexler — Designer · UI/UX, brand, product systems',
  description:
    'Designer working across UI/UX, brand, and product systems. Selected work has scaled a $45T fintech platform (CEPRES), rebuilt a €100m commerce business (Keller Sports), and shaped the Olympic Movement Young Champion Ambassador program. 25+ international design awards.',
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* 1 — Hero over full-bleed Spline (original scene presentation) */}
      <section className={styles.hero} aria-label="Introduction">
        <SplineBackground scene={SPLINE_SCENE} />

        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <h1 className={styles.heroTitle}>
              <span className="reveal-line-wrap">
                <span className={styles.heroTitlePrimary}>
                  {heroTitlePrimary.map((word, i) => (
                    <span key={word}>
                      {i > 0 ? (
                        <span className={styles.heroDot} aria-hidden="true">
                          ·
                        </span>
                      ) : null}
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="reveal-line-wrap">
                <span className={styles.heroTitleSecondary}>
                  {heroTitleSecondary.map((word, i) => (
                    <span key={word}>
                      {i > 0 ? (
                        <span className={styles.heroDot} aria-hidden="true">
                          ·
                        </span>
                      ) : null}
                      {word}
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <p
              className={`${styles.heroPositioning} reveal-fade reveal-stagger-3`}
            >
              {heroPositioning}
            </p>

            <div
              className={`${styles.awardsBanner} reveal-fade reveal-stagger-4`}
            >
              <Image
                src="/images/hero/awards-horizontal-black.png"
                alt="International design awards including D&AD, German Brand Award, Red Dot, and others"
                width={800}
                height={90}
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1b — Client logo marquee */}
      <section
        className={styles.clientBanner}
        aria-label="Selected clients"
      >
        <div className={styles.clientMarquee}>
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className={styles.clientList}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clientBanner.map((client) => (
                <li
                  key={`${copy}-${client.name}`}
                  className={
                    client.scale === 'xxl'
                      ? `${styles.clientItem} ${styles.clientItemXxl}`
                      : client.scale === 'xl'
                        ? `${styles.clientItem} ${styles.clientItemXl}`
                        : client.scale === 'lg'
                          ? `${styles.clientItem} ${styles.clientItemLg}`
                          : styles.clientItem
                  }
                >
                  <Image
                    src={client.src}
                    alt={copy === 0 ? client.name : ''}
                    width={client.width}
                    height={client.height}
                    className={styles.clientLogo}
                    unoptimized={client.src.endsWith('.svg')}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* 2 — Featured projects: multi-column media + copy cards */}
      <section id="work" className={styles.band} aria-labelledby="work-heading">
        <div className={styles.bandInnerWide}>
          <header className={styles.bandHeader}>
            <h2 id="work-heading" className={styles.bandTitle}>
              Selected work
            </h2>
            <Link href="/work" className={styles.bandMore}>
              Full ledger
            </Link>
          </header>

          <ul className={styles.projectGrid}>
            {featuredWork.map((item) => (
              <li key={item.slug} className={styles.projectCard}>
                <Link
                  href={`/work/${item.slug}`}
                  className={styles.projectMediaLink}
                  aria-label={`${item.title} case study`}
                >
                  <div
                    className={`${styles.projectMedia} ${coverClass[item.coverVariant]}${item.coverVideo ? ` ${styles.projectMediaVideo}` : ''}`}
                  >
                    {item.coverVideo?.vimeo ? (
                      <CoverVimeo id={item.coverVideo.vimeo} />
                    ) : item.coverVideo?.webm && item.coverVideo.mp4 ? (
                      <CoverVideo
                        webm={item.coverVideo.webm}
                        mp4={item.coverVideo.mp4}
                      />
                    ) : (
                      <p className={styles.coverStat}>
                        <strong>{item.coverStat}</strong>
                        <span>{item.coverLabel}</span>
                      </p>
                    )}
                  </div>
                </Link>

                <h3 className={styles.projectName}>
                  <Link
                    href={`/work/${item.slug}`}
                    className={styles.projectNameLink}
                  >
                    {item.title}
                  </Link>
                </h3>

                <p className={styles.projectPromise}>{item.promise}</p>
                <p className={styles.projectBody}>{item.descriptor}</p>

                <Link href={`/work/${item.slug}`} className={styles.projectCta}>
                  Case study
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Latest News */}
      <section
        id="news"
        className={styles.band}
        aria-labelledby="news-heading"
      >
        <div className={styles.bandInner}>
          <h2 id="news-heading" className={styles.bandTitle}>
            Latest news
          </h2>
          <ul className={styles.newsList}>
            {news.map((item) => (
              <li key={item.title} className={styles.newsItem}>
                <p className={styles.newsDate}>{item.date}</p>
                <div>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsBody}>{item.body}</p>
                  {item.href && item.cta ? (
                    <Link href={item.href} className={styles.inlineCta}>
                      {item.cta}
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — Referrals (omit until real quotes exist) */}
      {referrals.length > 0 ? (
        <section
          id="referrals"
          className={styles.band}
          aria-labelledby="referrals-heading"
        >
          <div className={styles.bandInner}>
            <header className={styles.bandHeader}>
              <h2 id="referrals-heading" className={styles.bandTitle}>
                Referrals
              </h2>
              <Link href="/studio" className={styles.bandMore}>
                About Martin
              </Link>
            </header>

            <ul className={styles.referralList}>
              {referrals.map((r) => (
                <li key={r.name} className={styles.referral}>
                  <blockquote className={styles.quote}>
                    <p>{r.quote}</p>
                  </blockquote>
                  <p className={styles.quoteMeta}>
                    <span className={styles.quoteName}>{r.name}</span>
                    <span className={styles.quoteRole}>{r.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* 5 — Core Competence */}
      <section
        id="competence"
        className={styles.band}
        aria-labelledby="competence-heading"
      >
        <div className={styles.bandInner}>
          <h2 id="competence-heading" className={styles.bandTitle}>
            Core competence
          </h2>

          <ul className={styles.pillars} aria-label="Practice pillars">
            {pillars.map((p) => (
              <li key={p} className={styles.pillar}>
                {p}
              </li>
            ))}
          </ul>

          <p className={styles.competenceLede}>{positioningLede}</p>
          <p className={styles.competenceBody}>{competenceBody}</p>

          <p className={styles.services} aria-label="Services">
            {services.map((s, i) => (
              <span key={s}>
                {i > 0 ? (
                  <span className={styles.servicesSep} aria-hidden="true">
                    ·
                  </span>
                ) : null}
                {s}
              </span>
            ))}
          </p>

          <Link href="/studio" className={styles.inlineCta}>
            Studio
          </Link>
        </div>
      </section>

      {/* 6 — Latest Essays (omit until writing exists) */}
      {essays.length > 0 ? (
        <section
          id="essays"
          className={styles.band}
          aria-labelledby="essays-heading"
        >
          <div className={styles.bandInner}>
            <h2 id="essays-heading" className={styles.bandTitle}>
              Latest essays
            </h2>
            <ul className={styles.essayList}>
              {essays.map((e) => (
                <li key={e.href} className={styles.essay}>
                  <h3 className={styles.essayTitle}>
                    <Link href={e.href} className={styles.projectNameLink}>
                      {e.title}
                    </Link>
                  </h3>
                  <p className={styles.essayDeck}>{e.deck}</p>
                  <Link href={e.href} className={styles.inlineCta}>
                    Read more
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {/* 7 — Let’s Connect */}
      <section
        id="connect"
        className={styles.band}
        aria-labelledby="connect-heading"
      >
        <div className={styles.bandInner}>
          <h2 id="connect-heading" className={styles.bandTitle}>
            Let’s connect
          </h2>
          <p className={styles.connectLede}>{connectLede}</p>
          <p className={styles.connectActions}>
            <a
              href="mailto:hello@martindrexler.com"
              className={styles.connectMail}
            >
              hello@martindrexler.com
            </a>
            <Link href="/contact" className={styles.inlineCta}>
              Write me
            </Link>
          </p>
        </div>
      </section>

      {/* 8 — Footer map */}
      <nav className={styles.footerMap} aria-label="Site map">
        <div className={styles.bandInner}>
          <ul className={styles.footerList}>
            {footerLinks.map((link) => (
              <li key={link.label} className={styles.footerItem}>
                <h2 className={styles.footerLabel}>{link.label}</h2>
                <p className={styles.footerBlurb}>{link.blurb}</p>
                <Link href={link.href} className={styles.footerMore}>
                  More
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  )
}
