import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Development — gh0st Docs',
  description: 'Development setup, architecture, and contribution guide for gh0st',
};

const devPrereqs = [
  { tool: 'Node.js', version: '20+', purpose: 'Runtime' },
  { tool: 'pnpm', version: '9+', purpose: 'Package manager' },
  { tool: 'Rust', version: '1.75+', purpose: 'Tauri native' },
  { tool: 'Xcode', version: '15+', purpose: 'macOS/iOS builds' },
];

const devScripts = [
  { cmd: 'pnpm build', desc: 'Build all 9 packages' },
  { cmd: 'pnpm typecheck', desc: 'TypeScript compilation check' },
  { cmd: 'pnpm lint', desc: 'ESLint check' },
  { cmd: 'pnpm test', desc: 'Run all tests (27 security tests)' },
  { cmd: 'pnpm test:security', desc: 'Run security tests only' },
  { cmd: 'pnpm build:client', desc: 'Build browser client' },
  { cmd: 'pnpm build:cli', desc: 'Build CLI' },
  { cmd: 'pnpm build:site', desc: 'Build documentation site' },
  { cmd: 'pnpm mac:build', desc: 'Build macOS .app (ad-hoc)' },
  { cmd: 'pnpm mac:dmg', desc: 'Build macOS DMG installer' },
  { cmd: 'pnpm dev:client', desc: 'Browser dev server' },
  { cmd: 'pnpm mac:dev', desc: 'Tauri dev mode' },
];

const codeStandards = [
  'TypeScript strict mode enabled',
  'ESLint + Prettier for formatting',
  'Conventional commits required',
  'No any types without justification',
  'Security-focused code review required',
  'Tests required for new functionality',
  'Documentation updated with changes',
];

const securityGuidelines = [
  'Never log sensitive data (prompts, keys, vault contents)',
  'Use the crypto abstraction in @gh0st/security',
  'Encrypt all stored sensitive data',
  'Verify ZDR before sensitive requests',
  'No analytics or telemetry without explicit opt-in',
  'Report security issues to security@gh0st.dev',
];

const contribAreas = [
  { title: 'Core', desc: 'Conversation models, storage, encryption' },
  { title: 'xAI Integration', desc: 'Transport, tools, streaming' },
  { title: 'UI', desc: 'Components, accessibility, mobile' },
  { title: 'CLI', desc: 'Commands, UX, output formatting' },
  { title: 'Native', desc: 'Tauri, macOS/iOS specifics' },
  { title: 'Docs', desc: 'Guides, API docs, threat model' },
  { title: 'Testing', desc: 'Unit, integration, security tests' },
];

export default function DevelopmentDocPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Gh0stMark className="h-10 w-10 text-accent-500" />
                <span className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">gh0st</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                Development
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Build, test, and contribute to gh0st
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Prerequisites</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Tool</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Version</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devPrereqs.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{row.tool}</td>
                        <td className="py-4 font-mono text-neutral-300 dark:text-neutral-700">{row.version}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Development Setup</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
# Full setup (checks, installs, builds)
./setup.sh

# Or manually:
pnpm install
pnpm build

# Development servers
pnpm dev:client      # Local browser UI
pnpm mac:dev         # Tauri dev mode (macOS)

# CLI development
cd apps/cli
pnpm dev             # tsx watch mode
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Project Structure</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
gh0st/
├── apps/
│   ├── cli/           # Node.js CLI (12 commands)
│   ├── client/        # React + Vite + Tauri 2
│   │   └── src-tauri/ # Native config (macOS/iOS)
│   └── site/          # Static documentation site
├── packages/
│   ├── core/          # Domain models
│   ├── security/      # Crypto + vault (27 tests)
│   ├── storage/       # File + IndexedDB
│   ├── xai/           # xAI HTTP/WS client
│   ├── files/         # File processing & search
│   └── ui/            # React primitives
├── docs/              # Documentation (18 files)
└── scripts/           # Build/install helpers
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Scripts</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Command</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devScripts.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-mono text-accent-500">{row.cmd}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Code Standards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {codeStandards.map((s, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-300 dark:text-neutral-700">{s}</span>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Security Guidelines</h2>
              <Card padding="lg">
                <ul className="space-y-2 text-neutral-300 dark:text-neutral-700">
                  {securityGuidelines.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Areas for Contribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contribAreas.map((a) => (
                  <Card key={a.title} padding="md" className="flex items-start gap-3">
                    <div className="p-2 bg-accent-500/10 rounded-lg text-accent-500 flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-100 dark:text-neutral-900">{a.title}</h4>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500">{a.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <div className="mt-12 text-center">
              <LinkButton href="https://github.com/M4G3LL4N0/gh0st/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" variant="primary">
                Read Full Contributing Guide
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}