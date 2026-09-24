import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Getting Started — gh0st Docs',
  description: 'Install and configure gh0st — local-first encrypted AI client for xAI/Grok',
};

const prerequisites = [
  { tool: 'Node.js', version: '20+', required: true, install: 'https://nodejs.org' },
  { tool: 'pnpm', version: '9+', required: true, install: 'npm install -g pnpm' },
  { tool: 'Rust', version: '1.75+', required: true, install: 'https://rustup.rs' },
  { tool: 'Xcode', version: '15+', required: false, note: 'For macOS/iOS native builds', install: 'https://developer.apple.com/xcode/' },
  { tool: 'xAI API Key', version: '—', required: true, note: 'From console.x.ai', install: 'https://console.x.ai' },
];

const quickStart = [
  { step: 1, title: 'Clone & Install', command: 'git clone https://github.com/M4G3LL4N0/gh0st.git\ncd gh0st\npnpm install' },
  { step: 2, title: 'Bootstrap', command: './setup.sh\n# or: pnpm setup' },
  { step: 3, title: 'Configure xAI', command: './apps/cli/dist/cli.js doctor --setup' },
  { step: 4, title: 'Start Chatting', command: './apps/cli/dist/cli.js chat' },
];

const commands = [
  { cmd: 'gh0st chat', desc: 'Interactive chat session', flags: '--strict, --model, --agent' },
  { cmd: 'gh0st ask "..."', desc: 'One-shot question', flags: '-m, --model, -a, --agent' },
  { cmd: 'gh0st web', desc: 'Start local browser UI', flags: '--port 1420' },
  { cmd: 'gh0st zdr', desc: 'Verify ZDR status', flags: '--force' },
  { cmd: 'gh0st status', desc: 'Show system status', flags: '--json' },
  { cmd: 'gh0st doctor', desc: 'Diagnostics & setup', flags: '--fix, --setup' },
];

export default function GettingStartedPage() {
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
                Getting Started
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Install, configure, and run gh0st in minutes.
              </p>
            </header>

            {/* Prerequisites */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Prerequisites
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Tool</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Version</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Required</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Notes</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Install</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prerequisites.map((p) => (
                      <tr key={p.tool} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{p.tool}</td>
                        <td className="py-4 font-mono text-neutral-300 dark:text-neutral-700">{p.version}</td>
                        <td className="py-4 text-center">
                          {p.required ? (
                            <svg className="h-5 w-5 text-accent-500 mx-auto" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-neutral-500 mx-auto" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                        </td>
                        <td className="py-4 text-sm text-neutral-500 dark:text-neutral-500">{p.note || '—'}</td>
                        <td className="py-4">
                          <a href={p.install} target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline text-sm font-mono">
                            Link
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Start */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Start (4 Steps)
              </h2>
              <div className="space-y-6">
                {quickStart.map((step) => (
                  <Card key={step.step} padding="lg" className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-500/10 text-accent-500 flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-neutral-100 dark:text-neutral-900 mb-2">{step.title}</h3>
                      <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
{step.command}
                      </pre>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Commands Reference */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                CLI Commands Reference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Command</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Description</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Flags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commands.map((c) => (
                      <tr key={c.cmd} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-mono text-accent-500">{c.cmd}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{c.desc}</td>
                        <td className="py-4 text-sm font-mono text-neutral-500 dark:text-neutral-500">{c.flags}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Next Steps */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <LinkButton href="/docs/cli" variant="primary">
                  <Card className="h-full p-6 text-center hover:border-accent-500/50 transition-colors">
                    <svg className="h-10 w-10 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">CLI Guide</h3>
                    <p className="text-neutral-400 dark:text-neutral-500 text-sm">All 12 commands, flags, and workflows</p>
                  </Card>
                </LinkButton>
                <LinkButton href="/docs/browser" variant="outline">
                  <Card className="h-full p-6 text-center hover:border-accent-500/50 transition-colors">
                    <svg className="h-10 w-10 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Browser UI</h3>
                    <p className="text-neutral-400 dark:text-neutral-500 text-sm">Local web interface guide</p>
                  </Card>
                </LinkButton>
                <LinkButton href="/docs/macos" variant="outline">
                  <Card className="h-full p-6 text-center hover:border-accent-500/50 transition-colors">
                    <svg className="h-10 w-10 text-accent-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">macOS App</h3>
                    <p className="text-neutral-400 dark:text-neutral-500 text-sm">Native app build & usage</p>
                  </Card>
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