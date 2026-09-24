import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Privacy — gh0st Docs',
  description: 'Privacy model, data handling, and ZDR verification in gh0st',
};

const privacyPrinciples = [
  { title: 'No gh0st Cloud', desc: 'No backend server sees your conversations. No account required. No hosted database.' },
  { title: 'Encrypted at Rest (CLI)', desc: 'AES-256-GCM with per-purpose derived keys in the CLI. Native client vault integration is pending.' },
  { title: 'ZDR Enforced', desc: 'Strict mode sends store:false and verifies x-zero-data-retention header.' },
  { title: 'Minimal Metadata', desc: 'No analytics. No telemetry by default. No crash reporting. No tracking pixels.' },
  { title: 'Explicit Tool Boundaries', desc: 'External tools (web, X, code, MCP) are opt-in. Destinations shown before use.' },
  { title: 'Portable Encrypted Export (CLI)', desc: 'Full state export encrypted with your passphrase. Native client integration is pending.' },
];

const noTracking = [
  'Who you are',
  'What you chat about',
  'How often you use gh0st',
  'Which model you prefer',
  'Whether you use strict mode',
  'Your API key (stays local)',
  'File contents (stay local)',
  'Search queries (local only)',
];

const websitePrivacy = [
  { title: 'No API key collection', desc: 'This website never asks for or receives your xAI API key' },
  { title: 'No hosted AI endpoint', desc: 'This is an informational site only — no chat backend runs here' },
  { title: 'No analytics', desc: 'No Google Analytics, no Plausible, no custom tracking' },
  { title: 'No cookies requiring consent', desc: 'No cookie banner because we don\'t set non-essential cookies' },
];

export default function PrivacyDocPage() {
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
                Privacy Model
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Local-first architecture. No gh0st cloud. Verifiable xAI ZDR in the CLI/client modules. Native vault wiring remains pending.
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Core Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privacyPrinciples.map((p) => (
                  <Card key={p.title} padding="lg" className="flex items-start gap-3">
                    <div className="p-2 bg-accent-500/10 rounded-lg text-accent-500 flex-shrink-0">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-1">{p.title}</h3>
                      <p className="text-neutral-400 dark:text-neutral-500">{p.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Data Flow</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
YOUR DEVICE                          XAI / GROK
┌─────────────────────┐               ┌─────────────────────┐
│ CLI encrypted convos│               │ Inference           │
│ CLI encrypted files │  ──────────►  │ Web Search          │
│ Agents & prefs      │  store:false  │ X Search            │
│ Local memory        │               │ Code Execution      │
│ CLI credentials     │               │ store:false sent    │
└─────────────────────┘               │ ZDR header checked  │
                                      └─────────────────────┘
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">What We Don't Collect</h2>
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

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">This Website</h2>
              <div className="space-y-4">
                {websitePrivacy.map((p) => (
                  <Card key={p.title} padding="md" className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <dt className="font-semibold text-neutral-100 dark:text-neutral-900">{p.title}</dt>
                      <dd className="text-sm text-neutral-500 dark:text-neutral-500 mt-0.5">{p.desc}</dd>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Contact</h2>
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

            <div className="mt-12 text-center">
              <LinkButton href="/docs/getting-started" variant="outline">
                ← Back to Getting Started
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}