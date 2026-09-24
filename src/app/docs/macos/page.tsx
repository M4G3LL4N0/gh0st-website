import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'macOS App — gh0st Docs',
  description: 'Build and run the early gh0st native macOS shell via Tauri 2 — ad-hoc signed, with current limitations documented',
};

const macFeatures = [
  { title: 'Native Window', desc: 'Tauri window with macOS integration' },
  { title: 'Menu Bar', desc: 'Show, lock, and quit actions' },
  { title: 'System Tray', desc: 'Background operation with quick actions' },
  { title: 'Global Shortcut', desc: '⌘⇧G to show/hide from anywhere' },
  { title: 'File Picker', desc: 'File selection through the local web UI' },
  { title: 'Dark/Light Controls', desc: 'Theme controls in the client UI' },
  { title: 'Local Conversation UI', desc: 'Chat, model selector, agents, and tools surface' },
  { title: 'xAI API Integration', desc: 'Responses API client with store=false support' },
  { title: 'Ad-hoc Distribution', desc: 'Apple Silicon app and DMG with published checksums' },
  { title: 'Window State', desc: 'Window state plugin and hide/show behavior' },
];

const macIssues = [
  { issue: '"App is damaged"', fix: 'xattr -cr gh0st.app' },
  { issue: '"Cannot be opened"', fix: 'Right-click → Open' },
  { issue: '"Codesign failed"', fix: 'Use pnpm mac:build (ad-hoc identity "-")' },
  { issue: '"Notarization failed"', fix: 'Requires Apple Developer Program enrollment' },
  { issue: 'Gatekeeper blocks the app', fix: 'Right-click → Open, then allow in Privacy & Security' },
];

export default function MacOSDocPage() {
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
                macOS Native App
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Early Tauri 2 native shell with menu bar, global shortcuts, and a local conversation UI. The native encrypted vault, biometric unlock, auto-lock, and Settings/API-key entry are not wired in this release candidate.
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Build from Source</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
# Prerequisites: Xcode 15+, Rust, Node.js 20+, pnpm 9+

git clone https://github.com/M4G3LL4N0/gh0st.git
cd gh0st
pnpm install
pnpm mac:build    # Creates .app (ad-hoc signed)
pnpm mac:dmg      # Creates .dmg installer (3.3 MB)
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Install</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card padding="lg">
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Via Install Script</h3>
                  <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
./scripts/mac-install.sh
# Installs to ~/Applications
# Prompts before overwrite
                  </pre>
                </Card>
                <Card padding="lg">
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Via DMG</h3>
                  <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
open gh0st_1.0.0-rc.1_aarch64.dmg
# Drag gh0st.app to Applications
# First run: right-click → Open (ad-hoc signed)
                  </pre>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {macFeatures.map((f, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-neutral-100 dark:text-neutral-900">{f.title}</h4>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500">{f.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Current Release-Candidate Limitations</h2>
              <Card padding="lg" className="border-l-2 border-accent-500">
                <ul className="space-y-2 text-sm text-neutral-300 dark:text-neutral-700">
                  <li>• Settings/API-key entry is not wired in the native client.</li>
                  <li>• Native encrypted persistence, biometric unlock, and auto-lock are not wired yet.</li>
                  <li>• The browser client uses a local-storage path that is not connected to the encrypted vault.</li>
                  <li>• Use the CLI for the current encrypted workflow; iOS remains in development.</li>
                </ul>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Signing & Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card padding="lg" className="border-l-2 border-accent-500">
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-3">Current: Ad-hoc Signed</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 dark:text-neutral-600">
                    <li>✓ Runs on any macOS 13+ Apple Silicon</li>
                    <li>✓ No Apple Developer account needed</li>
                    <li>⚠ First run: right-click → Open</li>
                    <li>⚠ Gatekeeper prompt required</li>
                    <li>✗ Not notarized</li>
                  </ul>
                </Card>
                <Card padding="lg" className="border-l-2 border-blue-500">
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-3">Future: Notarized</h3>
                  <ul className="space-y-2 text-sm text-neutral-400 dark:text-neutral-600">
                    <li>Requires Apple Developer Program ($99/yr)</li>
                    <li>Developer ID Application certificate</li>
                    <li>Notarization via xcrun notarytool</li>
                    <li>Staple ticket to DMG</li>
                    <li>Zero friction install</li>
                  </ul>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Troubleshooting</h2>
              <div className="space-y-4">
                {macIssues.map((item, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <code className="px-2 py-1 bg-neutral-800 dark:bg-neutral-200 rounded text-sm font-mono text-red-500 flex-shrink-0">{item.issue}</code>
                    <span className="text-neutral-400 dark:text-neutral-500">{item.fix}</span>
                  </Card>
                ))}
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