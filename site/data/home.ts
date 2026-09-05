export type NewsItem = {
  date: string
  title: string
  body: string
  href?: string
  cta?: string
}

export type Referral = {
  quote: string
  name: string
  role: string
}

export type FooterLink = {
  label: string
  blurb: string
  href: string
}

/** BRIEF §3 positioning — verbatim on /studio; lightly reused on / competence. */
export const positioningLede =
  'Designer working across UI/UX, brand, and product systems. Selected work has scaled a $45T fintech platform (CEPRES), rebuilt a €100m commerce business (Keller Sports), and shaped the visual identity of the Young Champion Ambassador program (Olympic Movement, 25+ cities). 25+ international design awards including D&AD Yellow Pencil, German Brand Award Gold, and Red Dot. Has taught design as business strategy at the University of Denver and the World Trade Center Denver.'

/** H1 primary line — rendered bold + uppercase in the hero. */
export const heroTitlePrimary = ['Designer', 'UI', 'UX'] as const

/** H1 secondary line — practice pillars, separated by middots. */
export const heroTitleSecondary = ['brand', 'product', 'systems'] as const

export const heroPositioning =
  'Brands with depth demand more than decoration. As a graphic designer I focus on corporate designs and digital products (UI/UX/AI) – from strategy to execution. Recognized by Germany’s most prestigious design juries and trusted by world-leading brands.'

export const availabilityLabel = 'Accepting projects'

export type ClientLogo = {
  name: string
  src: string
  /** Intrinsic width hint for next/image layout. */
  width: number
  height: number
  /** Display scale relative to the default strip height. */
  scale?: 'lg' | 'xl' | 'xxl'
}

/** Homepage client strip — Wikimedia SVGs + local lockups. */
export const clientBanner: ClientLogo[] = [
  {
    name: 'CEPRES',
    src: '/images/clients/cepres.png',
    width: 400,
    height: 95,
  },
  {
    name: 'U.S. Space Force',
    src: '/images/clients/space-force.svg',
    width: 142,
    height: 164,
    scale: 'xl',
  },
  {
    name: 'U.S. Air Force',
    src: '/images/clients/us-air-force.svg',
    width: 519,
    height: 409,
    scale: 'xl',
  },
  {
    name: 'USA Wrestling',
    src: '/images/clients/usa-wrestling.png',
    width: 220,
    height: 72,
  },
  {
    name: 'USA Ultimate',
    src: '/images/clients/usa-ultimate.svg',
    width: 179,
    height: 101,
    scale: 'xxl',
  },
  {
    name: 'U.S. Olympic & Paralympic Museum',
    src: '/images/clients/usopm-full-black.png',
    width: 470,
    height: 88,
    scale: 'lg',
  },
  {
    name: 'Planetarie',
    src: '/images/clients/planetarie.png',
    width: 600,
    height: 140,
  },
  {
    name: 'byte',
    src: '/images/clients/byte.svg',
    width: 108,
    height: 40,
  },
]

export const news: NewsItem[] = [
  {
    date: '09 ’26',
    title: 'Availability',
    body: 'Capacity for new projects — brief work, full engagements, and teaching. Remote and on-site.',
    href: '/contact',
    cta: 'Let’s talk',
  },
]

/** Publishable quotes only — leave empty until Martin supplies them. */
export const referrals: Referral[] = []

export const pillars = [
  'UI / UX',
  'Brand systems',
  'Product design',
] as const

export const services = [
  'Interface systems',
  'Design systems',
  'Brand identity',
  'Packaging',
  'Product strategy',
  'Prototypes',
] as const

export const competenceBody =
  'I design digital and brand systems for product-led companies — fintech platforms, commerce rebuilds, Olympic programs, CPG launches. The practice sits at the overlap of UX precision and brand fluency; teaching design as business strategy is how that overlap stays defensible.'

/** Real essay posts only — homepage section mounts when this is non-empty. */
export const essays: { title: string; deck: string; href: string }[] = []

export const connectLede =
  'Brief work, full engagements, teaching, or notes — write any time. I reply within twenty-four hours.'

export const footerLinks: FooterLink[] = [
  {
    label: 'Work',
    blurb: 'Selected case studies, 2014–2023.',
    href: '/work',
  },
  {
    label: 'Studio',
    blurb: 'Practice, teaching, clients, recognition.',
    href: '/studio',
  },
  {
    label: 'Contact',
    blurb: 'hello@martindrexler.com',
    href: '/contact',
  },
]
