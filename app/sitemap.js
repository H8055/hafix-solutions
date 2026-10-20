import { works } from '@/lib/content';

const base = 'https://www.hafixsolution.com';

export default function sitemap() {
  const now = new Date();
  const routes = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/works`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];
  const projects = works.map((w) => ({
    url: `${base}/works/${w.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }));
  return [...routes, ...projects];
}
