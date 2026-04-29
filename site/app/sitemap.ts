import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const base = 'https://martindrexler.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
