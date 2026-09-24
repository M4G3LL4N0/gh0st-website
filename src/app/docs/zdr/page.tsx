import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'ZDR Verification — gh0st Docs',
  description: 'Zero Data Retention verification in gh0st — runtime header checking, strict mode, and account requirements',
};

const verificationSteps = [
  { step: 1, title: 'Preflight Request', desc: 'gh0st sends harmless test request with store:false to xAI Responses API' },
  { step: 2, title: 'Header Check', desc: 'xAI responds with x-zero-data-retention: true if ZDR active for your team' },
  { step: 3, title: 'Cache Result', desc: 'Verification cached for 30 minutes to avoid repeated checks' },
  { step: 4, title: 'Strict Mode Gate', desc: 'If ZDR unverified, strict mode blocks sensitive requests until verified' },
];

const storeVsZdr = [
  { aspect: 'What it is', store: 'Request parameter sent to xAI', zdr: 'xAI team-level retention policy' },
  { aspect: 'Control', store: 'gh0st sends on every request', zdr: 'Configured in xAI console' },
  { aspect: 'Verification', store: 'Sent automatically by gh0st', zdr: 'Checked via x-zero-data-retention header' },
  { aspect: 'Scope', store: 'Per-request', zdr: 'Account/team-wide' },
  { aspect: 'Guarantee', store: 'Asks xAI not to persist response', zdr: 'xAI commits to no retention' },
];

const privacyModes = [
  { name: 'Strict (default)', zdr: 'Required', behavior: 'Blocks sensitive requests until ZDR verified' },
  { name: 'Extended', zdr: 'Optional', behavior: 'Allows MCP/tools with explicit consent' },
];

export default function ZDRDocPage() {
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
                ZDR Verification
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Zero Data Retention — runtime verification of xAI data retention policy
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">What is ZDR?</h2>
              <Card padding="lg">
                <p className="text-neutral-300 dark:text-neutral-700 mb-4">
                  <strong>Zero Data Retention (ZDR)</strong> means xAI does not persist your conversation data after inference completes.
                  gh0st <strong>verifies</strong> this at runtime — it does not assume every xAI account has ZDR enabled.
                </p>
                <p className="text-neutral-300 dark:text-neutral-700">
                  ZDR is enabled at the <strong>xAI team/account level</strong>. You must have ZDR enabled in your xAI console for verification to succeed.
                </p>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">How Verification Works</h2>
              <div className="space-y-4">
                {verificationSteps.map((s) => (
                  <Card key={s.step} padding="md" className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center font-bold">{s.step}</span>
                    <div>
                      <h4 className="font-semibold text-neutral-100 dark:text-neutral-900">{s.title}</h4>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-0.5">{s.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">store=false vs ZDR</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Aspect</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">store=false</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">ZDR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {storeVsZdr.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{row.aspect}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.store}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.zdr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Privacy Modes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {privacyModes.map((m) => (
                  <Card key={m.name} padding="lg">
                    <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-3">{m.name}</h3>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">ZDR Required</dt>
                        <dd className="font-mono text-accent-500">{m.zdr}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Behavior</dt>
                        <dd className="text-neutral-300 dark:text-neutral-700">{m.behavior}</dd>
                      </div>
                    </dl>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">CLI Commands</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
gh0st zdr              # Verify ZDR status
gh0st zdr --force      # Force fresh verification (bypass cache)
gh0st doctor           # Includes ZDR check in diagnostics
                </pre>
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