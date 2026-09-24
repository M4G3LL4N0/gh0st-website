import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Privacy — gh0st',
  description: 'Privacy policy and data handling for gh0st — local-first AI with a current encrypted CLI workflow, no cloud, no analytics, and no tracking.',
};

const dataOnDevice = [
  'Conversations and messages',
  'Attachments and files',
  'Agents and preferences',
  'CLI encrypted continuation state',
  'CLI vault-encrypted API keys',
  'Local search index',
];

const dataToXAI = [
  'Message content (encrypted in transit via HTTPS)',
  'Optional: file content you explicitly attach',
  'Optional: tool results from web search, X search, code execution',
];

const thirdPartyServices = [
  { service: 'xAI API', purpose: 'AI inference', data: 'Message content, attachments, tool calls', zdr: 'Covered by ZDR when verified' },
  { service: 'External MCP', purpose: 'User-enabled tools', data: 'Only what you explicitly route', zdr: 'NOT covered by xAI ZDR' },
];

const privacyModes = [
  { mode: 'Strict (default)', zdr: 'Required', description: 'Blocks sensitive requests until ZDR verified' },
  { mode: 'Extended', zdr: 'Optional', description: 'Allows MCP and tools with explicit consent' },
];

const yourRights = [
  { right: 'Access', detail: 'CLI data is in ~/.gh0st/ (encrypted); native client path is still being wired' },
  { right: 'Portability', detail: 'CLI encrypted export/import between devices' },
  { right: 'Deletion', detail: '<code>gh0st wipe</code> removes all local data' },
  { right: 'Control', detail: 'Toggle tools, agents, privacy modes per conversation' },
];

const noTracking = [
  'Who you are',
  'What you chat about',
  'How often you use gh0st',
  'Which model you prefer',
  'Whether you use strict mode',
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <header className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gh0stMark className="h-10 w-10 text-accent-500" />
                <span className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">gh0st</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
                No legalese. The CLI provides the current encrypted workflow; native macOS and browser vault integration remains pending in this release candidate.
              </p>
            </header>

            {/* Core Principle */}
            <Card variant="elevated" className="mb-12 p-8 border-accent-500/30">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                  gh0st collects no personal data by default.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-neutral-950 dark:bg-neutral-100 rounded-lg">
                    <p className="text-3xl font-bold text-accent-500">0</p>
                    <p className="text-neutral-500 dark:text-neutral-500">Analytics events</p>
                  </div>
                  <div className="p-4 bg-neutral-950 dark:bg-neutral-100 rounded-lg">
                    <p className="text-3xl font-bold text-accent-500">0</p>
                    <p className="text-neutral-500 dark:text-neutral-500">Tracking pixels</p>
                  </div>
                  <div className="p-4 bg-neutral-950 dark:bg-neutral-100 rounded-lg">
                    <p className="text-3xl font-bold text-accent-500">0</p>
                    <p className="text-neutral-500 dark:text-neutral-500">Ad SDKs</p>
                  </div>
                </div>
                <p className="mt-6 text-neutral-400 dark:text-neutral-500 max-w-xl mx-auto">
                  No gh0st account required. No hosted database. No cloud service.
                  Your data never touches our infrastructure.
                </p>
              </div>
            </Card>

            {/* What Stays On Your Device */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                What Stays On Your Device (CLI Encrypted; Native Integration Pending)
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dataOnDevice.map((item, i) => (
                  <Card key={i} padding="md" className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-100 dark:text-neutral-900">{item}</span>
                  </Card>
                ))}
              </div>
            </section>

            {/* What Goes to xAI */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                What Goes to xAI (Only When You Send a Message)
              </h2>
              <div className="space-y-4">
                {dataToXAI.map((item, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3 border-l-2 border-blue-500">
                    <svg className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span className="text-neutral-300 dark:text-neutral-700">{item}</span>
                  </Card>
                ))}
              </div>
              <Card variant="outlined" className="mt-4 p-4 border-accent-500/30 bg-accent-500/5">
                <p className="text-neutral-300 dark:text-neutral-700">
                  <strong className="font-mono text-accent-500">Strict mode</strong> sends <code className="font-mono bg-neutral-800 dark:bg-neutral-200 px-1.5 py-0.5 rounded">store:false</code> and verifies the ZDR header before sending sensitive content.
                </p>
              </Card>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Third-Party Services
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Service</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Purpose</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Data Sent</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">ZDR Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thirdPartyServices.map((s, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{s.service}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{s.purpose}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{s.data}</td>
                        <td className="py-4">
                          {s.zdr.includes('NOT') ? (
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-500/20 text-red-500">{s.zdr}</span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/20 text-accent-500">{s.zdr}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Card variant="outlined" className="mt-4 p-4 border-orange-500/30 bg-orange-500/5">
                <p className="text-neutral-300 dark:text-neutral-700">
                  <strong>Data intentionally sent to MCP is governed by that provider's policies and is outside xAI ZDR.</strong>
                  gh0st shows destinations before use. No silent data exfiltration.
                </p>
              </Card>
            </section>

            {/* Privacy Modes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Privacy Modes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privacyModes.map((mode) => (
                  <Card key={mode.mode} padding="lg" className="h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/20 text-accent-500">{mode.mode}</span>
                    </div>
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">ZDR Required</dt>
                        <dd className="font-mono text-accent-500">{mode.zdr}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Behavior</dt>
                        <dd className="text-neutral-300 dark:text-neutral-700">{mode.description}</dd>
                      </div>
                    </dl>
                  </Card>
                ))}
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your Rights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {yourRights.map((right) => (
                  <Card key={right.right} padding="md" className="flex items-start gap-3">
                    <div className="p-2 bg-accent-500/10 rounded-lg text-accent-500 flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <dt className="font-semibold text-neutral-100 dark:text-neutral-900">{right.right}</dt>
                      <dd className="text-sm text-neutral-400 dark:text-neutral-500 mt-1" dangerouslySetInnerHTML={{ __html: right.detail }} />
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* No Tracking */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                No Tracking
              </h2>
              <p className="text-neutral-400 dark:text-neutral-500 mb-6 max-w-xl">
                We don't know any of the following because we don't collect it:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {noTracking.map((item, i) => (
                  <Card key={i} padding="md" className="text-center bg-neutral-950/50 dark:bg-neutral-200/50">
                    <svg className="h-8 w-8 text-red-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-2 2l2 2m-2-2h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-neutral-300 dark:text-neutral-700">{item}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Website Specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                This Website
              </h2>
              <div className="space-y-4">
                <Card padding="md" className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <dt className="font-semibold text-neutral-100 dark:text-neutral-900">No API key collection</dt>
                    <dd className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">This website never asks for or receives your xAI API key</dd>
                  </div>
                </Card>
                <Card padding="md" className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <dt className="font-semibold text-neutral-100 dark:text-neutral-900">No hosted AI endpoint</dt>
                    <dd className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">This is an informational site only — no chat backend runs here</dd>
                  </div>
                </Card>
                <Card padding="md" className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <dt className="font-semibold text-neutral-100 dark:text-neutral-900">No analytics</dt>
                    <dd className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">No Google Analytics, no Plausible, no custom tracking</dd>
                  </div>
                </Card>
                <Card padding="md" className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <dt className="font-semibold text-neutral-100 dark:text-neutral-900">No cookies requiring consent</dt>
                    <dd className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">No cookie banner because we don't set non-essential cookies</dd>
                  </div>
                </Card>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </h2>
              <Card padding="lg" className="max-w-xl">
                <dl className="space-y-4 text-neutral-300 dark:text-neutral-700">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <dt className="font-medium">Privacy questions</dt>
                      <dd><a href="mailto:privacy@gh0st.dev" className="text-accent-500 hover:underline font-mono">privacy@gh0st.dev</a></dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <dt className="font-medium">Security vulnerabilities</dt>
                      <dd><a href="mailto:security@gh0st.dev" className="text-accent-500 hover:underline font-mono">security@gh0st.dev</a></dd>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h12M8 12l-5 5M8 12l-5-5" />
                    </svg>
                    <div>
                      <dt className="font-medium">General questions</dt>
                      <dd><a href="https://github.com/M4G3LL4N0/gh0st/discussions" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">GitHub Discussions</a></dd>
                    </div>
                  </div>
                </dl>
              </Card>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}