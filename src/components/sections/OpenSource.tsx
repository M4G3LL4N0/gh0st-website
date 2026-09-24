'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button, LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

const repoStats = [
  { label: 'License', value: 'MIT', color: 'accent' },
  { label: 'Packages', value: '9', color: 'blue' },
  { label: 'Security Tests', value: '27 passing', color: 'green' },
  { label: 'Languages', value: 'TypeScript + Rust', color: 'purple' },
];

const communityLinks = [
  {
    title: 'Issues',
    description: 'Bug reports & feature requests',
    href: 'https://github.com/M4G3LL4N0/gh0st/issues',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Discussions',
    description: 'Questions, ideas, show & tell',
    href: 'https://github.com/M4G3LL4N0/gh0st/discussions',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h12M8 12l-5 5M8 12l-5-5" />
      </svg>
    ),
  },
  {
    title: 'Security',
    description: 'Private vulnerability reporting',
    href: 'https://github.com/M4G3LL4N0/gh0st/security/advisories',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Contributing',
    description: 'Development guidelines',
    href: 'https://github.com/M4G3LL4N0/gh0st/blob/main/CONTRIBUTING.md',
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const architectureDiagram = `gh0st/
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
└── scripts/           # Build/install helpers`;

export function OpenSource() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Gh0stMark className="h-10 w-10 text-accent-500" />
          <span className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">gh0st</span>
        </div>
        <h2 id="open-source-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Open Source — MIT Licensed
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          No hidden code. No telemetry. No accounts. Just a privacy-first AI client you can audit, modify, and self-host.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {repoStats.map((stat) => (
          <Card key={stat.label} padding="lg" className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-sm font-medium">
              <span className={`text-${stat.color}-500`}>●</span>
              <span className="text-neutral-400 dark:text-neutral-600">{stat.label}</span>
            </div>
            <p className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">{stat.value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="h-full">
          <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-4 flex items-center gap-2">
            <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Project Structure
          </h3>
          <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
{architectureDiagram}
          </pre>
        </Card>

        <Card className="h-full">
          <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-4 flex items-center gap-2">
            <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Community & Governance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border border-neutral-800/50 dark:border-neutral-300/50 hover:border-accent-500/30 transition-colors"
              >
                <div className="p-2 bg-accent-500/10 rounded-lg text-accent-500">
                  {link.icon}
                </div>
                <div>
                  <p className="font-medium text-neutral-100 dark:text-neutral-900">{link.title}</p>
                  <p className="text-sm text-neutral-400 dark:text-neutral-500">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card variant="outlined" className="text-center p-8">
          <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Star the Repository</h3>
          <p className="text-neutral-400 dark:text-neutral-500 mb-6">Show support and help others discover gh0st</p>
          <a
            href="https://github.com/M4G3LL4N0/gh0st"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Repository
            </Button>
          </a>
        </Card>

        <Card variant="outlined" className="text-center p-8">
          <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Read the Docs</h3>
          <p className="text-neutral-400 dark:text-neutral-500 mb-6">Complete guides for CLI, macOS, browser, files, agents, privacy, and development</p>
          <LinkButton href="/docs/getting-started" variant="primary" size="lg">
            Documentation
          </LinkButton>
        </Card>

        <Card variant="elevated" className="text-center p-8 border border-accent-500/30">
          <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Contribute</h3>
          <p className="text-neutral-400 dark:text-neutral-500 mb-6">Security-focused contributions welcome. See CONTRIBUTING.md</p>
          <a
            href="https://github.com/M4G3LL4N0/gh0st/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" size="lg">
              Contribution Guide
            </Button>
          </a>
        </Card>
      </div>

      <div className="text-center p-6 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-xl border border-neutral-800/50 dark:border-neutral-300/50">
        <p className="text-sm text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto">
          All GitHub links point to <code className="font-mono bg-neutral-800 dark:bg-neutral-200 px-1.5 py-0.5 rounded">https://github.com/M4G3LL4N0/gh0st</code>.
          No fake star counts. No fabricated metrics. The repository speaks for itself.
        </p>
      </div>
    </div>
  );
}