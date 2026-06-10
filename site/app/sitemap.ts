import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const base = 'https://martindrexler.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: `${base}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/work`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/work/cepres`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/keller-sports`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/yca`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/planetarie`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/byte`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/work/space-for-curiosity`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/studio`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
