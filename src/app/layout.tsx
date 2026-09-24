export const metadata = {
  metadataBase: new URL('https://gh0st.noaerth.com'),
  title: 'gh0st — Private AI that keeps the workspace yours',
  description: 'Local-first AI for xAI/Grok with a current encrypted CLI workflow, early browser and macOS clients, and runtime ZDR verification.',
  keywords: ['gh0st', 'AI', 'privacy', 'encryption', 'xAI', 'Grok', 'local-first', 'zero-data-retention', 'CLI', 'macOS', 'open-source'],
  authors: [{ name: 'gh0st Contributors' }],
  creator: 'gh0st',
  publisher: 'gh0st',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gh0st.noaerth.com',
    siteName: 'gh0st',
    title: 'gh0st — Private AI that keeps the workspace yours',
    description: 'Local-first AI for xAI/Grok with a current encrypted CLI workflow, early browser and macOS clients, and runtime ZDR verification.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'gh0st — Private AI that keeps the workspace yours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'gh0st — Private AI that keeps the workspace yours',
    description: 'Local-first AI for xAI/Grok with a current encrypted CLI workflow, early browser and macOS clients, and runtime ZDR verification.',
    images: ['/og-image.svg'],
    creator: '@gh0st',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
      </head>
      <body className="min-h-screen bg-neutral-950 dark:bg-neutral-50 text-neutral-100 dark:text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}