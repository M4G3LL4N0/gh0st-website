import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Troubleshooting — gh0st Docs',
  description: 'Common issues and solutions for gh0st CLI, browser, and macOS app',
};

const commonIssues = [
  { issue: '"No xAI API key"', solution: 'Run gh0st doctor --setup to configure your key', category: 'Config' },
  { issue: '"ZDR not verified"', solution: 'Check your xAI account has ZDR enabled in console.x.ai', category: 'Privacy' },
  { issue: '"Vault locked"', solution: 'Run gh0st doctor --setup to unlock with passphrase', category: 'Vault' },
  { issue: '"IndexedDB failed"', solution: 'Browser only; CLI uses file storage in ~/.gh0st/storage/', category: 'Storage' },
  { issue: '"App won\'t open"', solution: 'Right-click app → Open (ad-hoc signed macOS)', category: 'macOS' },
  { issue: '"Build fails"', solution: 'Run pnpm doctor to check prerequisites', category: 'Build' },
  { issue: '"Connection refused"', solution: 'Check internet, xAI API status, and API key validity', category: 'Network' },
  { issue: '"Permission denied"', solution: 'Check file permissions on ~/.gh0st/ and storage directories', category: 'Permissions' },
];

const macIssues = [
  { issue: '"App is damaged"', fix: 'xattr -cr gh0st.app' },
  { issue: '"Cannot be opened"', fix: 'Right-click → Open' },
  { issue: '"Codesign failed"', fix: 'Use pnpm mac:build (ad-hoc identity "-")' },
  { issue: '"Notarization failed"', fix: 'Requires Apple Developer Program enrollment' },
];

const logLocations = [
  { loc: '~/.gh0st/logs/', content: 'CLI logs' },
  { loc: 'Console.app', content: 'macOS app logs' },
  { loc: 'Browser DevTools', content: 'Web client logs' },
];

export default function TroubleshootingDocPage() {
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
                Troubleshooting
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Common issues and solutions
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Common Issues</h2>
              <div className="space-y-4">
                {commonIssues.map((item, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/20 text-accent-500">{item.category}</span>
                    <code className="px-2 py-1 bg-neutral-800 dark:bg-neutral-200 rounded text-sm font-mono text-red-500 flex-shrink-0">{item.issue}</code>
                    <span className="text-neutral-400 dark:text-neutral-500">{item.solution}</span>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">CLI Debugging</h2>
              <Card padding="lg">
                <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Debug Commands</h3>
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
# Verbose output
DEBUG=gh0st:* gh0st chat

# Check config
cat ~/.gh0st/config.json

# Reset vault
gh0st lock
gh0st doctor --setup

# Check storage
ls -la ~/.gh0st/storage/
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">macOS App Issues</h2>
              <div className="space-y-4">
                {macIssues.map((item, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <code className="px-2 py-1 bg-neutral-800 dark:bg-neutral-200 rounded text-sm font-mono text-red-500 flex-shrink-0">{item.issue}</code>
                    <span className="text-neutral-400 dark:text-neutral-500">{item.fix}</span>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Log Locations</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Location</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Contents</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logLocations.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-mono text-neutral-100 dark:text-neutral-900">{row.loc}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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