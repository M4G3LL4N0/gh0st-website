import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Browser UI — gh0st Docs',
  description: 'Local browser interface guide for gh0st — run gh0st web for the full local chat interface',
};

const browserFeatures = [
  { title: 'Streaming Chat', desc: 'Token-by-token rendering with Markdown and syntax highlighting' },
  { title: 'File Attachments', desc: 'Drag & drop PDF, code, images. Local extraction & search' },
  { title: 'Agent Selector', desc: 'Switch between General, Researcher, Coder, Analyst, or custom' },
  { title: 'Tool Toggles', desc: 'Enable/disable Web Search, X Search, Code Execution, MCP' },
  { title: 'Privacy Inspector', desc: 'Real-time vault state, ZDR status, active tools, MCP destinations' },
  { title: 'Conversation History', desc: 'Sidebar with search, branching, and message actions' },
  { title: 'Settings Panel', desc: 'Theme, model, privacy mode, compact mode, token counts' },
  { title: 'Responsive Design', desc: 'Works on mobile, tablet, desktop. Touch-friendly' },
];

const shortcuts = [
  { key: 'Enter', action: 'Send message' },
  { key: 'Shift+Enter', action: 'New line' },
  { key: '⌘/Ctrl+K', action: 'Focus composer' },
  { key: '⌘/Ctrl+/', action: 'Toggle sidebar' },
  { key: '⌘/Ctrl+Shift+G', action: 'Global shortcut (macOS app)' },
  { key: 'Esc', action: 'Close modals / cancel' },
  { key: '↑/↓ in composer', action: 'History navigation' },
];

export default function BrowserDocPage() {
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
                Browser Interface
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Run a local web UI with full chat capabilities through <code>gh0st web</code>
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Quick Start</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
# Build and start
pnpm build:client
gh0st web

# Or development mode with hot reload
pnpm dev:client
# Opens the local browser UI
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {browserFeatures.map((f, i) => (
                  <Card key={i} padding="md" className="flex items-start gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-neutral-100 dark:text-neutral-900">{f.title}</h4>
                      <p className="text-sm text-neutral-400 dark:text-neutral-500 mt-0.5">{f.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Storage</h2>
              <Card padding="lg">
                <dl className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-500">Backend</dt>
                    <dd className="font-mono text-neutral-100 dark:text-neutral-900">IndexedDB via Dexie</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-500">Encryption</dt>
                    <dd className="font-mono text-neutral-100 dark:text-neutral-900">AES-256-GCM (Web Crypto API)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-500">Key derivation</dt>
                    <dd className="font-mono text-neutral-100 dark:text-neutral-900">Argon2id (WASM)</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-neutral-500 dark:text-neutral-500">Vault lock</dt>
                    <dd className="font-mono text-neutral-100 dark:text-neutral-900">Auto (timer) + Manual</dd>
                  </div>
                </dl>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Keyboard Shortcuts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shortcuts.map((s, i) => (
                  <Card key={i} padding="sm" className="flex items-center justify-between">
                    <kbd className="px-2 py-1 bg-neutral-800 dark:bg-neutral-200 rounded text-sm font-mono text-neutral-100 dark:text-neutral-900">{s.key}</kbd>
                    <span className="text-neutral-400 dark:text-neutral-500">{s.action}</span>
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