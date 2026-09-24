'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button, LinkButton } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Gh0stMark } from '@/components/ui/Gh0stMark';
import { PrivacyVisualization } from '@/components/sections/PrivacyVisualization';
import { InteractiveDemo } from '@/components/demo/InteractiveDemo';
import { WhyGh0st } from '@/components/sections/WhyGh0st';
import { PrivacyArchitecture } from '@/components/sections/PrivacyArchitecture';
import { Features } from '@/components/sections/Features';
import { Platforms } from '@/components/sections/Platforms';
import { CliShowcase } from '@/components/sections/CliShowcase';
import { OpenSource } from '@/components/sections/OpenSource';
import { FAQ } from '@/components/sections/FAQ';

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        {/* HERO */}
        <section
          className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-500/5 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="relative mx-auto max-w-7xl w-full py-20 sm:py-32">
            <div className="text-center space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 dark:bg-neutral-200/50 border border-neutral-700/50 dark:border-neutral-300/50 text-neutral-300 dark:text-neutral-700 text-sm font-medium animate-slide-up animate-delay-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500" />
                </span>
                Local-first • Encrypted • ZDR-aware • Open source
              </div>

              {/* Main Headline */}
              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-100 dark:text-neutral-900 animate-slide-up animate-delay-200 text-balance"
              >
                gh0st
                <br />
                <span className="text-accent-500">Private AI</span>
                {' '}
                that keeps the
                <br />
                <span className="text-accent-500">workspace yours.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-neutral-400 dark:text-neutral-600 max-w-3xl mx-auto animate-slide-up animate-delay-300 text-balance leading-relaxed">
                Your conversations, files, and agents stay under your control.
                Grok handles inference. gh0st handles everything that should remain yours.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-400">
                <LinkButton
                  href="/download"
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download for macOS
                  </span>
                </LinkButton>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      View on GitHub
                    </span>
                  </Button>
                </a>
              </div>

              {/* Platform badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-500 animate-fade-in animate-delay-500">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  CLI — Available
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Browser — Local
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  macOS — From source
                </span>
                <span className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  iOS — In development
                </span>
              </div>
            </div>

            {/* Privacy Visualization */}
            {mounted && (
              <div className="mt-20 animate-fade-in animate-delay-500">
                <PrivacyVisualization />
              </div>
            )}
          </div>
        </section>

        {/* INTERACTIVE PRODUCT DEMO */}
        <section
          id="demo"
          className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-950/50 dark:bg-neutral-100/50"
          aria-labelledby="demo-heading"
        >
          <div className="mx-auto max-w-7xl">
            <InteractiveDemo />
          </div>
        </section>

        {/* WHY GH0ST */}
        <section id="why" aria-labelledby="why-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <WhyGh0st />
          </div>
        </section>

        {/* PRIVACY ARCHITECTURE */}
        <section id="privacy-arch" aria-labelledby="privacy-arch-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-neutral-950/50 dark:bg-neutral-100/50">
            <PrivacyArchitecture />
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" aria-labelledby="features-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <Features />
          </div>
        </section>

        {/* PLATFORMS */}
        <section id="platforms" aria-labelledby="platforms-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-neutral-950/50 dark:bg-neutral-100/50">
            <Platforms />
          </div>
        </section>

        {/* CLI SHOWCASE */}
        <section id="cli" aria-labelledby="cli-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <CliShowcase />
          </div>
        </section>

        {/* OPEN SOURCE */}
        <section id="open-source" aria-labelledby="open-source-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-neutral-950/50 dark:bg-neutral-100/50">
            <OpenSource />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <FAQ />
          </div>
        </section>

        {/* DOWNLOAD CTA */}
        <section
          id="download"
          className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center bg-neutral-900 dark:bg-neutral-100"
          aria-labelledby="download-heading"
        >
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 id="download-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900">
              Ready to run gh0st?
            </h2>
            <p className="text-lg text-neutral-400 dark:text-neutral-600">
              Choose your platform. Source builds work today. Public binaries coming with the first release.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton href="/download" size="lg" variant="primary">
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  View Download Options
                </span>
              </LinkButton>
              <a
                href="https://github.com/M4G3LL4N0/gh0st"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline">
                  <span className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Build from Source
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}