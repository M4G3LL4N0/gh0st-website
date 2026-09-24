import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gh0st.noaerth.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/security',
    '/privacy',
    '/download',
    '/faq',
    '/docs/getting-started',
    '/docs/cli',
    '/docs/browser',
    '/docs/macos',
    '/docs/files',
    '/docs/agents',
    '/docs/privacy',
    '/docs/zdr',
    '/docs/troubleshooting',
    '/docs/development',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}