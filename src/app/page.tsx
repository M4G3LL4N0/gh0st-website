'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, LinkButton } from '@/components/ui/Button';

function VaultPanel() {
  const rows = [
    ['conversations', 'on device'],
    ['files', 'on device'],
    ['agents', 'on device'],
    ['inference', 'xAI · store=false'],
  ];
  return (
    <figure className="rounded-xl border border-neutral-800 bg-neutral-950 p-5 text-neutral-100" aria-label="What stays local">
      <figcaption className="font-mono text-[11px] tracking-[0.16em] uppercase text-neutral-500">
        ~/gh0st vault
      </figcaption>
      <ul className="mt-4 divide-y divide-neutral-800 font-mono text-sm">
        {rows.map(([name, where]) => (
          <li key={name} className="flex items-center justify-between gap-4 py-3">
            <span>{name}</span>
            <span className="text-accent-500">{where}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-neutral-950 pt-16 text-neutral-100">
        <section
          className="px-4 sm:px-6 lg:px-8 pt-24 pb-16"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent-500">
                Local vault · xAI inference · store=false
              </p>
              <h1
                id="hero-heading"
                className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100 dark:text-neutral-900 text-balance"
              >
                Talk to Grok. Keep the workspace on your machine.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-neutral-400 dark:text-neutral-600 leading-relaxed">
                gh0st encrypts conversations, files, and agents locally. The CLI is the working product.
                The macOS app is an early release candidate. The browser UI is local. iOS is not ready.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://github.com/M4G3LL4N0/gh0st" className="w-full sm:w-auto">
                  <Button size="lg" variant="primary" className="w-full sm:w-auto">
                    Install the CLI
                  </Button>
                </a>
                <LinkButton href="/download" size="lg" variant="outline" className="w-full sm:w-auto">
                  macOS rc download
                </LinkButton>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Inference goes to xAI with <code>store=false</code>. Zero Data Retention applies only when your xAI team has it enabled.
              </p>
            </div>
            <VaultPanel />
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 pb-20" aria-label="What is actually ready">
          <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 lg:grid-cols-3">
            <a href="/docs/cli" className="bg-neutral-950 p-6 hover:bg-neutral-900">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-500">Ready</p>
              <h2 className="mt-3 text-xl text-neutral-100">CLI</h2>
              <p className="mt-2 text-sm text-neutral-400">Chat, files, agents, and the encrypted vault. This is the product.</p>
            </a>
            <a href="/download" className="bg-neutral-950 p-6 hover:bg-neutral-900">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Early</p>
              <h2 className="mt-3 text-xl text-neutral-100">macOS and browser</h2>
              <p className="mt-2 text-sm text-neutral-400">v1.0.0-rc.1 is an early shell. It is ad-hoc signed and not notarized.</p>
            </a>
            <a href="/security" className="bg-neutral-950 p-6 hover:bg-neutral-900">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Conditional</p>
              <h2 className="mt-3 text-xl text-neutral-100">ZDR</h2>
              <p className="mt-2 text-sm text-neutral-400">gh0st sends store=false and checks the header. It cannot grant ZDR by itself.</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
