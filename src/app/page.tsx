'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { LinkButton } from '@/components/ui/Button';
import { PrivacyVisualization } from '@/components/sections/PrivacyVisualization';
import { CliShowcase } from '@/components/sections/CliShowcase';

function Boundary() {
  const gates = [
    { k: '01', name: 'Vault', detail: 'Conversations, files, and agents stay encrypted on this machine.' },
    { k: '02', name: 'store=false', detail: 'The prompt leaves only as an inference request with storage turned off.' },
    { k: '03', name: 'Header', detail: 'gh0st reads x-zero-data-retention. Missing header, strict mode stops.' },
  ];
  return (
    <ol className="grid gap-3" aria-label="Where a prompt is allowed to go">
      {gates.map((gate) => (
        <li key={gate.k} className="grid grid-cols-[auto_1fr] gap-4 border-l-2 border-accent-500/70 py-3 pl-4">
          <span className="font-mono text-xs text-accent-500">{gate.k}</span>
          <div>
            <p className="font-mono text-sm text-neutral-100">{gate.name}</p>
            <p className="mt-1 text-sm text-neutral-400">{gate.detail}</p>
          </div>
        </li>
      ))}
    </ol>
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
                className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-[#f5f5f5] text-balance"
              >
                Talk to Grok. Keep the workspace on your machine.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-neutral-400 dark:text-neutral-600 leading-relaxed">
                gh0st encrypts conversations, files, and agents locally. The CLI is the working product.
                The macOS app is an early release candidate. The browser UI is local. iOS is not ready.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/M4G3LL4N0/gh0st"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-accent-500 px-6 py-3 text-base font-medium text-neutral-950 sm:w-auto"
                >
                  Install the CLI
                </a>
                <LinkButton href="/download" size="lg" variant="outline" className="w-full sm:w-auto">
                  macOS rc download
                </LinkButton>
              </div>
              <p className="mt-4 text-sm text-neutral-500">
                Inference goes to xAI with <code>store=false</code>. Zero Data Retention applies only when your xAI team has it enabled.
              </p>
            </div>
            <Boundary />
          </div>
        </section>

        <section className="px-4 pb-8 sm:px-6 lg:px-8" aria-label="Privacy boundary">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">Where a prompt is allowed to go</h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-400">
              The workspace stays on this machine. Inference is a request with storage turned off. The response header is the check.
            </p>
            <div className="mt-8">
              <PrivacyVisualization />
            </div>
          </div>
        </section>

        <CliShowcase />

        <section className="px-4 pb-20 sm:px-6 lg:px-8" aria-label="What to run">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">The working path</h2>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-black p-4 font-mono text-sm text-neutral-200"><code>{`git clone https://github.com/M4G3LL4N0/gh0st.git
cd gh0st
pnpm install && pnpm build
./apps/cli/dist/cli.js doctor`}</code></pre>
              <p className="mt-3 text-sm text-neutral-400">
                <a className="text-accent-500" href="/docs/cli">CLI docs</a> are the product.
                The <a className="text-accent-500" href="/download">macOS rc</a> is an early, unnotarized shell.
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">What gh0st will not pretend</h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                <li>It does not grant Zero Data Retention. Your xAI team does, and the response header is the check.</li>
                <li>It does not ship a finished iOS app.</li>
                <li>The browser UI stays on your machine. It is not a hosted chat.</li>
              </ul>
              <p className="mt-4 text-sm">
                <a className="text-accent-500" href="/security">Security notes</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
