'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

export function WhyGh0st() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <h2 id="why-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Why gh0st?
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          The architectural difference between hosted AI and local-first private AI.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Typical Hosted AI */}
        <Card variant="outlined" className="h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900">Typical Hosted AI</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">Your conversations stored on provider servers</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Full history retained by default, used for training unless opted out</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">Files uploaded to cloud for processing</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Documents leave your device, stored in provider's object storage</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">API keys stored in provider's systems</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Cloud key management, potential for credential exposure</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">Retention policies opaque and changeable</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">No technical verification — only terms of service promises</p>
              </div>
            </div>
          </div>
        </Card>

        {/* gh0st Architecture */}
        <Card variant="elevated" className="h-full border border-accent-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent-500/10 rounded-lg">
              <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900">gh0st Architecture</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border-l-2 border-accent-500">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">Conversations encrypted on your device</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">AES-256-GCM, keys never leave your vault. Provider sees nothing.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border-l-2 border-accent-500">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">Files processed locally, never uploaded</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Text extraction, chunking, search index all happen on-device</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border-l-2 border-accent-500">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">API keys in Secure Enclave / encrypted vault</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Hardware-backed on macOS/iOS, Argon2id-encrypted file on CLI</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border-l-2 border-accent-500">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center text-accent-500">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <p className="font-medium text-neutral-100 dark:text-neutral-900">ZDR verified at runtime from xAI response</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">Technical proof, not policy promise. Strict mode blocks if unverified.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Insight */}
      <div className="mt-12 p-6 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-xl border border-neutral-800/50 dark:border-neutral-300/50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg text-neutral-300 dark:text-neutral-700 mb-4">
            <strong className="text-neutral-100 dark:text-neutral-900">xAI sees inference content while processing it — this is required for the model to respond.</strong>
          </p>
          <p className="text-neutral-400 dark:text-neutral-500">
            ZDR is about <strong className="text-neutral-100 dark:text-neutral-900">retention after processing</strong>, not invisibility during inference.
            gh0st sends <code className="font-mono bg-neutral-800 dark:bg-neutral-200 px-1.5 py-0.5 rounded text-accent-500">store=false</code> on all requests
            and verifies the <code className="font-mono bg-neutral-800 dark:bg-neutral-200 px-1.5 py-0.5 rounded text-accent-500">x-zero-data-retention: true</code> response header.
          </p>
        </div>
      </div>
    </div>
  );
}