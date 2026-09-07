export type WorkItem = {
  index: string
  slug: string
  title: string
  /** One-line promise (case-study subtitle register). */
  promise: string
  /** Distinct evidence paragraph — not a restatement of promise. */
  descriptor: string
  tags: string
  studio: string
  date: string
  /** Type-cover stand-in for homepage media cell (until photography / video). */
  coverStat: string
  coverLabel: string
  coverVariant: 'field' | 'strip' | 'pack' | 'object' | 'letterbox' | 'wayfind'
  /** Optional muted loop for the homepage media cell; replaces coverStat text. */
  coverVideo?: {
    webm?: string
    mp4?: string
    /** Vimeo video id for background embed (alternative to webm/mp4). */
    vimeo?: string
  }
}

export const workItems: WorkItem[] = [
  {
    index: '01',
    slug: 'byte',
    title: 'byte',
    promise:
      'Oral-care packaging that feels medical without being clinical — and to survive a year on the shelf.',
    descriptor:
      'Six-product kit and 3D system through Haimish Studio. Built for recognition in a crowded consumer aisle, not for a pitch deck.',
    tags: 'PRODUCT / PACKAGING / 3D / CONSUMER',
    studio: 'Haimish Studio',
    date: '2022',
    coverStat: '6',
    coverLabel: 'products · one kit system',
    coverVariant: 'object',
    coverVideo: {
      webm: '/videos/byte/cover.webm',
      mp4: '/videos/byte/cover.mp4',
    },
  },
  {
    index: '02',
    slug: 'creative-consortium',
    title: 'Creative Consortium',
    promise:
      'A brand system with motion at the center — identity, 3D, and web as one stack.',
    descriptor:
      'Through Haimish Studio: brand guide, mark, and 3D flag animation for Creative Consortium — a system built to move, not sit still on a PDF.',
    tags: 'BRAND / 3D / MOTION / WEB',
    studio: 'Haimish Studio',
    date: '2022',
    coverStat: '3D',
    coverLabel: 'flag · brand · motion',
    coverVariant: 'object',
    coverVideo: {
      webm: '/videos/creative-consortium/cover.webm',
      mp4: '/videos/creative-consortium/cover.mp4',
    },
  },
  {
    index: '03',
    slug: 'usa-ultimate',
    title: 'USA Ultimate',
    promise:
      'A national governing-body digital system — competition, discovery, and Team USA in one stack.',
    descriptor:
      'Through Haimish Studio: UX and UI for usaultimate.org — home, discovery, college, and Team USA — so the sport’s digital presence matched the scale of its national programs.',
    tags: 'UX / UI / SPORTS / DIGITAL',
    studio: 'Haimish Studio',
    date: '2021–2022',
    coverStat: 'USAU',
    coverLabel: 'web · competition · Team USA',
    coverVariant: 'object',
    coverVideo: {
      vimeo: '1151639550',
    },
  },
  {
    index: '04',
    slug: 'space-for-curiosity',
    title: 'Space for Curiosity',
    promise:
      'Personal curiosity as the route to institutional capability — Space Force and Air Force.',
    descriptor:
      'Brand narrative and film series through Haimish Studio for the US Space Force and US Air Force — curiosity framed as operational advantage.',
    tags: 'BRAND / CONTENT / FILM',
    studio: 'Haimish Studio',
    date: '2023',
    coverStat: 'SF / AF',
    coverLabel: 'brand · film · narrative',
    coverVariant: 'object',
  },
  {
    index: '05',
    slug: 'cepres',
    title: 'CEPRES',
    promise: 'The world’s leading private market investment platform.',
    descriptor:
      'Seven UX iterations distilled 76 user roles into 7 scenarios. The platform now covers $45T AUM across 6,000 LPs and GPs — six Private Equity Wire awards, Adobe UI Excellence.',
    tags: 'UX / UI / PRODUCT / FINTECH',
    studio: 'Martin Drexler Design Studio',
    date: '2018–2020',
    coverStat: '76→7',
    coverLabel: 'user roles distilled into scenarios',
    coverVariant: 'field',
    coverVideo: {
      webm: '/videos/cepres/cover.webm',
      mp4: '/videos/cepres/cover.mp4',
    },
  },
  {
    index: '06',
    slug: 'keller-sports',
    title: 'Keller Sports',
    promise:
      'Rebuilding a €100m sports commerce business — identity through checkout.',
    descriptor:
      'Two years as Head of Design in Munich: three shop relaunches, an in-house photography studio Adidas later adopted, 13 international awards. The business was later acquired.',
    tags: 'COMMERCE / UI / BRAND / PRODUCT',
    studio: 'Keller Sports (Head of Design)',
    date: '2014–2016',
    coverStat: '€100m',
    coverLabel: '13 awards · 3 shop relaunches',
    coverVariant: 'strip',
    coverVideo: {
      webm: '/videos/keller-sports/pegasus.webm',
      mp4: '/videos/keller-sports/pegasus.mp4',
    },
  },
  {
    index: '07',
    slug: 'yca',
    title: 'Young Champion Ambassador',
    promise:
      'A youth Olympic leadership program designed as a system — brand, curriculum, space, and app.',
    descriptor:
      'Creative direction at Goodvoice Group. The program now runs in 25+ cities under the Olympic Movement — brand, curriculum, spatial system, and product as one stack.',
    tags: 'BRAND / UX / PRODUCT / SPATIAL',
    studio: 'Goodvoice Group (Creative Director)',
    date: '2019–2021',
    coverStat: '25+',
    coverLabel: 'cities · Olympic Movement',
    coverVariant: 'wayfind',
  },
  {
    index: '08',
    slug: 'planetarie',
    title: 'planetarie',
    promise:
      'A CBDa brand built to outweigh a category’s stigma — then acquired.',
    descriptor:
      'From values session to USDA-organic launch under Goodvoice. Patent-pending positioning and packaging; acquired by Tanasi.',
    tags: 'BRAND / PRODUCT / PACKAGING / CPG',
    studio: 'Goodvoice Group (Creative Director)',
    date: '2020–2022',
    coverStat: 'CBDa',
    coverLabel: 'acquired by Tanasi',
    coverVariant: 'pack',
    coverVideo: {
      webm: '/videos/planetarie/cover.webm',
      mp4: '/videos/planetarie/cover.mp4',
    },
  },
]

/** Featured homepage grid — selected work ledger. */
export const featuredWork = workItems
