import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Agents — gh0st Docs',
  description: 'Built-in and custom agents in gh0st — local AI profiles with tools, models, and instructions',
};

const builtInAgents = [
  { name: 'General', icon: '✨', desc: 'Balanced assistant for everyday tasks', tools: ['Web', 'X', 'Code'], model: 'grok-3', reasoning: 'medium' },
  { name: 'Researcher', icon: '🔍', desc: 'Deep research with multi-step investigation', tools: ['Web', 'X', 'Deep Research'], model: 'grok-3', reasoning: 'high' },
  { name: 'Coder', icon: '💻', desc: 'Software development specialist', tools: ['Code', 'Web'], model: 'grok-3', reasoning: 'high' },
  { name: 'Analyst', icon: '📊', desc: 'Data analysis and synthesis', tools: ['Code', 'Web'], model: 'grok-3', reasoning: 'medium' },
];

const agentSettings = [
  { setting: 'Name', desc: 'Display name in selector' },
  { setting: 'Icon', desc: 'Emoji or Lucide icon name' },
  { setting: 'Description', desc: 'Shown in agent selector' },
  { setting: 'Instructions', desc: 'System prompt / behavior definition' },
  { setting: 'Model', desc: 'grok-3, grok-3-mini, grok-2' },
  { setting: 'Reasoning', desc: 'low / medium / high effort' },
  { setting: 'Tools', desc: 'Web, X, Code, MCP, Deep Research' },
  { setting: 'Files', desc: 'Attached file IDs for context' },
  { setting: 'MCP Servers', desc: 'Server IDs for external tools' },
];

export default function AgentsDocPage() {
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
                Agents
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Local reusable AI profiles with tools, models, and custom instructions
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Built-in Agents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {builtInAgents.map((agent) => (
                  <Card key={agent.name} padding="lg">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{agent.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900">{agent.name}</h3>
                        <p className="text-neutral-400 dark:text-neutral-500">{agent.desc}</p>
                      </div>
                    </div>
                    <dl className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Model</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">{agent.model}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Reasoning</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">{agent.reasoning}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Tools</dt>
                        <dd className="text-neutral-300 dark:text-neutral-700">{agent.tools.join(', ')}</dd>
                      </div>
                    </dl>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Creating Custom Agents</h2>
              <Card padding="lg">
                <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
gh0st agents --create
# Prompts for: name, icon, description, instructions, model, tools
                </pre>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Agent Configuration</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agentSettings.map((s) => (
                  <Card key={s.setting} padding="md" className="flex items-start gap-3">
                    <dt className="font-medium text-neutral-100 dark:text-neutral-900 min-w-[120px]">{s.setting}</dt>
                    <dd className="text-sm text-neutral-400 dark:text-neutral-500">{s.desc}</dd>
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