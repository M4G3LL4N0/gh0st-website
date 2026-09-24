import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button, LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

const releaseUrl = 'https://github.com/M4G3LL4N0/gh0st/releases/tag/v1.0.0-rc.1';
const macosDmgUrl = 'https://github.com/M4G3LL4N0/gh0st/releases/download/v1.0.0-rc.1/gh0st_1.0.0-rc.1_aarch64.dmg';
const dmgSha256 = 'cc6e9cb35d6b6908e4791fe3b815c0355487dd3d70c25c3f898250e46491cb19';

export const metadata: Metadata = {
  title: 'Download — gh0st',
  description: 'Download the early gh0st v1.0.0-rc.1 macOS Apple Silicon release, or build the CLI and browser UI from source.',
};

const platforms = [
  {
    id: 'macos',
    name: 'macOS (Apple Silicon)',
    status: 'v1.0.0-rc.1 available',
    statusColor: 'accent',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    requirements: 'macOS 13+, Apple Silicon (M1/M2/M3)',
    features: [
      'Native Tauri shell',
      'DMG installer (3.3 MB) with SHA-256 checksums',
      'Global shortcut (⌘⇧G)',
      'Menu bar & system tray',
      'Local conversation UI',
      'xAI Responses API integration',
      'File picker integration',
      'Window hide/show controls',
    ],
    buildFromSource: [
      'git clone https://github.com/M4G3LL4N0/gh0st.git',
      'cd gh0st',
      'pnpm install',
      'pnpm mac:build',
      'pnpm mac:dmg',
    ],
    cta: {
      label: 'Download DMG',
      href: macosDmgUrl,
      variant: 'primary' as const,
    },
  },
  {
    id: 'cli',
    name: 'CLI (Cross-platform)',
    status: 'Available now',
    statusColor: 'accent',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    requirements: 'Node.js 20+, pnpm 9+',
    features: [
      '12 commands (chat, ask, web, zdr, ...)',
      'File-based encrypted storage',
      'Interactive chat with Markdown',
      'One-shot questions',
      'Local web UI server',
      'ZDR verification',
      'Agent management',
      'Encrypted backup/restore',
    ],
    buildFromSource: [
      'git clone https://github.com/M4G3LL4N0/gh0st.git',
      'cd gh0st',
      'pnpm install',
      'pnpm build:cli',
      './apps/cli/dist/cli.js --help',
    ],
    cta: {
      label: 'CLI Documentation',
      href: '/docs/cli',
      variant: 'outline' as const,
    },
  },
  {
    id: 'browser',
    name: 'Browser (Local)',
    status: 'Via CLI',
    statusColor: 'blue',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    requirements: 'Node.js 20+, any modern browser',
    features: [
      'Full chat interface through the local gh0st web server',
      'Streaming responses',
      'File drag & drop',
      'Agent selector & tools',
      'Privacy Inspector',
      'Local browser UI foundation',
      'Dark/Light mode',
      'Responsive design',
    ],
    buildFromSource: [
      'git clone https://github.com/M4G3LL4N0/gh0st.git',
      'cd gh0st',
      'pnpm install',
      'pnpm build:client',
      'gh0st web',
    ],
    cta: {
      label: 'Browser Guide',
      href: '/docs/browser',
      variant: 'outline' as const,
    },
  },
  {
    id: 'ios',
    name: 'iOS',
    status: 'In development',
    statusColor: 'neutral',
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    requirements: 'iOS 16+, Xcode 15+, Apple Developer Program (device)',
    features: [
      'Safe areas & Dynamic Island',
      'Keyboard avoidance',
      'Touch targets & gestures',
      'Dark/Light & reduced motion',
      'Background privacy blur',
      'Planned encrypted local vault',
      'Planned biometric unlock',
      'Simulator build pending tooling',
    ],
    buildFromSource: [
      'Requires: Homebrew, xcodegen, cocoapods',
      'cd apps/client/src-tauri',
      'cargo tauri ios init',
      'pnpm ios:build',
      'pnpm ios:dev',
    ],
    cta: {
      label: 'iOS Status',
      href: '/docs/macos',
      variant: 'ghost' as const,
    },
  },
];

const verification = [
  `Download <code>gh0st_1.0.0-rc.1_aarch64.dmg</code> from <a class="text-accent-500 hover:underline" href="${releaseUrl}" target="_blank" rel="noopener noreferrer">GitHub Releases</a>`,
  'Run: <code>shasum -a 256 gh0st_1.0.0-rc.1_aarch64.dmg</code>',
  `Compare with <code>SHA256SUMS.txt</code> from the release. Expected SHA-256: <code>${dmgSha256}</code>`,
  'Verify the ad-hoc signature: <code>codesign --verify --deep --strict gh0st.app</code>',
];

export default function DownloadPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <header className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gh0stMark className="h-10 w-10 text-accent-500" />
                <span className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">gh0st</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                Download gh0st
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
                Download the verified macOS Apple Silicon release, or build the CLI and browser UI from source.
              </p>
              <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
                <strong>Early release candidate:</strong> the macOS client is a native shell. Settings/API-key entry, native encrypted persistence, biometric unlock, and auto-lock are not wired yet; use the CLI for the current encrypted workflow.
              </p>
            </header>

            {/* Platform Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {platforms.map((platform) => (
                <Card key={platform.id} className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-neutral-900 dark:bg-neutral-100 rounded-xl">
                      <span className={`text-${platform.statusColor === 'accent' ? 'accent' : platform.statusColor === 'blue' ? 'blue' : 'neutral'}-500`}>
                        {platform.icon}
                      </span>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      platform.statusColor === 'accent'
                        ? 'bg-accent-500/20 text-accent-500'
                        : platform.statusColor === 'blue'
                        ? 'bg-blue-500/20 text-blue-500'
                        : 'bg-neutral-700/50 text-neutral-400'
                    }`}>
                      {platform.status}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-1">{platform.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-500">{platform.requirements}</p>
                  </div>

                  <ul className="flex-1 space-y-2 text-sm text-neutral-400 dark:text-neutral-600 mb-6" role="list">
                    {platform.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-neutral-800 dark:border-neutral-200 pt-4 mb-4">
                    <h4 className="font-medium text-neutral-100 dark:text-neutral-900 mb-2 text-sm">Build from Source</h4>
                    <pre className="font-mono text-xs text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-3 rounded-lg overflow-x-auto">
{platform.buildFromSource.join('\n')}
                    </pre>
                  </div>

                  <LinkButton
                    href={platform.cta.href}
                    variant={platform.cta.variant}
                    className="w-full"
                  >
                    {platform.cta.label}
                  </LinkButton>
                </Card>
              ))}
            </div>

            {/* Verification */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 text-center">
                Verify Your Download
              </h2>
              <Card className="max-w-3xl mx-auto">
                <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">
                  SHA-256 Checksum Verification
                </h3>
                <ol className="space-y-4 text-neutral-300 dark:text-neutral-700">
                  {verification.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center text-sm font-medium">{i + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: step }} />
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
                  <strong>Note:</strong> This build is ad-hoc signed (identity <code className="font-mono">"-"</code>) and is not notarized. macOS may require approval in Privacy & Security on first launch. Developer ID signing and notarization require Apple Developer Program enrollment. The native client’s encrypted vault, biometric unlock, auto-lock, and Settings/API-key entry are not wired in this release candidate.
                </p>
              </Card>
            </section>

            {/* Release Info */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 text-center">
                Release Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <Card padding="lg" className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Latest Release</h3>
                  <p className="text-3xl font-bold text-accent-500 mb-2">v1.0.0-rc.1</p>
                  <p className="text-neutral-500 dark:text-neutral-500">Public prerelease · Apple Silicon</p>
                  <LinkButton
                    href={macosDmgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="mt-4"
                  >
                    Download DMG
                  </LinkButton>
                  <a
                    href={releaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-3 text-sm text-accent-500 hover:underline"
                  >
                    View release details
                  </a>
                </Card>
                <Card padding="lg" className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Changelog</h3>
                  <p className="text-neutral-400 dark:text-neutral-500 mb-4">See what's new in each version</p>
                  <LinkButton
                    href="https://github.com/M4G3LL4N0/gh0st/blob/main/CHANGELOG.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="mt-4"
                  >
                    View Changelog
                  </LinkButton>
                </Card>
                <Card padding="lg" className="text-center">
                  <h3 className="text-lg font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Source Code</h3>
                  <p className="text-neutral-400 dark:text-neutral-500 mb-4">MIT licensed, build yourself</p>
                  <a
                    href="https://github.com/M4G3LL4N0/gh0st"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="mt-4">
                      GitHub Repository
                    </Button>
                  </a>
                </Card>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                Ready to get started?
              </h2>
              <p className="text-neutral-400 dark:text-neutral-500 mb-8 max-w-xl mx-auto">
                Download the public macOS prerelease, or clone the repo to build the CLI and browser UI from source.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://github.com/M4G3LL4N0/gh0st"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </Button>
                </a>
                <LinkButton href="/docs/getting-started" size="lg" variant="outline">
                  Getting Started Guide
                </LinkButton>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}