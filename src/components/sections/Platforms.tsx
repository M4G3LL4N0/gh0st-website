'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const platforms = [
  {
    id: 'macos',
    name: 'macOS',
    status: 'From source / Public binary coming',
    statusColor: 'accent',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Native window with transparent titlebar',
      'Menu bar integration & system tray',
      'Global shortcut (⌘⇧G)',
      'File drag & drop, native picker',
      'Dark/Light mode sync',
      'Keyboard shortcuts & touchpad gestures',
      'Secure Enclave vault with Face ID/Touch ID',
      'Auto-lock (1/5/15 min / never)',
      'Background privacy blur',
      'Restart persistence',
    ],
    cta: {
      label: 'Build from Source',
      href: '/docs/macos',
      variant: 'outline' as const,
    },
    note: 'Ad-hoc signed. Public DMG with release.',
  },
  {
    id: 'cli',
    name: 'CLI',
    status: 'Available now',
    statusColor: 'accent',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: [
      '12 commands: chat, ask, web, zdr, status, agents, chats, export, import, lock, wipe, doctor',
      'File-based encrypted storage (~/.gh0st/)',
      'Interactive chat with Markdown rendering',
      'One-shot questions: `gh0st ask "..."`',
      'Local web UI: `gh0st web` on port 1420',
      'ZDR verification: `gh0st zdr`',
      'Agent management: `gh0st agents`',
      'Conversation history: `gh0st chats`',
      'Encrypted backup/restore',
      'Vault lock/unlock',
      'Diagnostic doctor with auto-fix',
    ],
    cta: {
      label: 'CLI Documentation',
      href: '/docs/cli',
      variant: 'outline' as const,
    },
    note: 'Install: `pnpm install:cli` → `gh0st --help`',
  },
  {
    id: 'browser',
    name: 'Browser',
    status: 'Local via CLI',
    statusColor: 'blue',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    features: [
      'Full chat interface in browser',
      'Streaming responses with token animation',
      'File drag & drop, paste images',
      'Agent selector & tool toggles',
      'Privacy Inspector sidebar',
      'Markdown + syntax highlighting',
      'Conversation history sidebar',
      'Settings: theme, model, privacy mode',
      'IndexedDB encrypted storage',
      'Works offline after first load',
    ],
    cta: {
      label: 'Browser Guide',
      href: '/docs/browser',
      variant: 'outline' as const,
    },
    note: 'Run `gh0st web` to start the local browser UI',
  },
  {
    id: 'ios',
    name: 'iOS',
    status: 'In development',
    statusColor: 'neutral',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Safe areas & Dynamic Island support',
      'Keyboard avoidance & touch targets',
      'Dark/Light mode & reduced motion',
      'Background privacy (blur on switch)',
      'Secure Enclave vault with Face ID/Touch ID',
      'Native gestures & haptics',
      'Simulator build pending xcodegen/cocoapods',
      'Device build requires Apple Developer Program',
      'TestFlight not yet available',
    ],
    cta: {
      label: 'iOS Status',
      href: '/docs/macos',
      variant: 'ghost' as const,
    },
    note: 'Code complete. Tooling setup in progress.',
  },
];

export function Platforms() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 id="platforms-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Platforms
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          One codebase. Native everywhere it matters. Status reflects what works today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {platforms.map((platform) => (
          <Card key={platform.id} className="h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-neutral-900 dark:bg-neutral-100 rounded-xl text-accent-500">
                {platform.icon}
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  platform.statusColor === 'accent'
                    ? 'bg-accent-500/20 text-accent-500'
                    : platform.statusColor === 'blue'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-neutral-700/50 text-neutral-400'
                }`}
              >
                {platform.status}
              </span>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-1">{platform.name}</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">{platform.note}</p>
            </div>

            <ul className="flex-1 space-y-2 text-sm text-neutral-400 dark:text-neutral-600 mb-6" role="list">
              {platform.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={platform.cta.variant}
              className="w-full"
              asChild
            >
              <a href={platform.cta.href}>{platform.cta.label}</a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}