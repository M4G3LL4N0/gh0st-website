import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'CLI Reference — gh0st Docs',
  description: 'Complete CLI command reference for gh0st — 12 commands with flags and examples',
};

const commands = [
  { name: 'chat', desc: 'Start interactive chat session', usage: 'gh0st chat [options]', flags: ['--strict', '-m, --model <name>', '-a, --agent <name>'], examples: ['gh0st chat', 'gh0st chat --strict', 'gh0st chat -m grok-3-mini'] },
  { name: 'ask', desc: 'One-shot question', usage: 'gh0st ask "question" [options]', flags: ['-m, --model <name>', '-a, --agent <name>'], examples: ['gh0st ask "What is Rust?"', 'gh0st ask -m grok-3 "Explain async"'] },
  { name: 'web', desc: 'Start local browser UI server', usage: 'gh0st web [options]', flags: ['--port <number>', '--host <address>'], examples: ['gh0st web', 'gh0st web --port 3000'] },
  { name: 'status', desc: 'Show system status', usage: 'gh0st status [options]', flags: ['--json'], examples: ['gh0st status', 'gh0st status --json'] },
  { name: 'zdr', desc: 'Verify ZDR status', usage: 'gh0st zdr [options]', flags: ['--force'], examples: ['gh0st zdr', 'gh0st zdr --force'] },
  { name: 'agents', desc: 'Manage agents', usage: 'gh0st agents [subcommand]', flags: ['--create', '--list', '--delete <id>', '--show <id>'], examples: ['gh0st agents --list', 'gh0st agents --create'] },
  { name: 'chats', desc: 'List conversations', usage: 'gh0st chats [options]', flags: ['--all', '--search <query>'], examples: ['gh0st chats', 'gh0st chats --all'] },
  { name: 'export', desc: 'Export encrypted backup', usage: 'gh0st export [options]', flags: ['-o, --output <file>', '--plaintext'], examples: ['gh0st export -o backup.gh0st', 'gh0st export --plaintext -o backup.json'] },
  { name: 'import', desc: 'Import backup', usage: 'gh0st import <file> [options]', flags: ['--force'], examples: ['gh0st import backup.gh0st'] },
  { name: 'lock', desc: 'Lock vault', usage: 'gh0st lock', flags: [], examples: ['gh0st lock'] },
  { name: 'wipe', desc: 'Secure delete all data', usage: 'gh0st wipe [options]', flags: ['--force'], examples: ['gh0st wipe --force'] },
  { name: 'doctor', desc: 'Diagnostics & setup', usage: 'gh0st doctor [options]', flags: ['--fix', '--setup'], examples: ['gh0st doctor', 'gh0st doctor --fix', 'gh0st doctor --setup'] },
];

export default function CLIDocPage() {
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
                CLI Reference
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                All 12 commands with flags, options, and examples.
              </p>
            </header>

            <div className="space-y-8">
              {commands.map((cmd) => (
                <Card key={cmd.name} padding="lg">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <code className="text-xl font-mono text-accent-500">gh0st {cmd.name}</code>
                      <p className="text-neutral-400 dark:text-neutral-500 mt-1">{cmd.desc}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-neutral-100 dark:text-neutral-900 mb-2">Usage</h4>
                    <pre className="font-mono text-sm text-neutral-300 dark:text-neutral-700 bg-neutral-950 dark:bg-neutral-100 p-3 rounded-lg overflow-x-auto">
{cmd.usage}
                    </pre>
                  </div>

                  {cmd.flags.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-neutral-100 dark:text-neutral-900 mb-2">Flags</h4>
                      <div className="flex flex-wrap gap-2">
                        {cmd.flags.map((flag) => (
                          <code key={flag} className="px-2 py-1 bg-neutral-800 dark:bg-neutral-200 rounded text-sm font-mono text-neutral-300 dark:text-neutral-700">
                            {flag}
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {cmd.examples.length > 0 && (
                    <div>
                      <h4 className="font-medium text-neutral-100 dark:text-neutral-900 mb-2">Examples</h4>
                      <div className="space-y-1">
                        {cmd.examples.map((ex) => (
                          <pre key={ex} className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-2 rounded overflow-x-auto">
{ex}
                          </pre>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

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