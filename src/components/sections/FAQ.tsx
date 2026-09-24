'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const faqs = [
  {
    question: 'Does gh0st hide prompts from xAI?',
    answer: 'No. xAI must process the data you send for inference. gh0st sends your prompts and selected context to xAI\'s Responses API. What gh0st controls is whether that data is retained after processing — we send <code>store=false</code> and verify the <code>x-zero-data-retention</code> response header when ZDR is enabled for your xAI team.',
    category: 'Privacy',
  },
  {
    question: 'Does ZDR mean xAI cannot see my prompt?',
    answer: 'No. ZDR (Zero Data Retention) concerns whether xAI persists your data after inference completes. During inference, xAI necessarily sees the prompt content to generate a response. gh0st enforces <code>store=false</code> on all requests and verifies the ZDR header at runtime. If ZDR is not verified for your team, strict mode blocks sensitive requests.',
    category: 'Privacy',
  },
  {
    question: 'Do I need a gh0st account?',
    answer: 'No. gh0st has no accounts, no cloud service, and no user database. All state lives on your device. You only need an xAI API key for inference.',
    category: 'Account',
  },
  {
    question: 'Do I need an xAI API key?',
    answer: 'Yes, for xAI/Grok inference. Get one from <a href="https://console.x.ai" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">console.x.ai</a>. gh0st never sends your key anywhere except to xAI\'s API endpoint.',
    category: 'Account',
  },
  {
    question: 'Does gh0st store conversations in the cloud?',
    answer: 'The CLI stores conversations, files, agents, and preferences locally with AES-256-GCM encryption. The browser and native clients currently use a local-storage path that is not yet connected to the encrypted vault. gh0st has no backend server or hosted database.',
    category: 'Storage',
  },
  {
    question: 'Does gh0st use Signal Protocol?',
    answer: 'No. gh0st applies Signal-inspired privacy principles (local-first, encrypted, minimal metadata) but uses its own documented encryption architecture: AES-256-GCM with HKDF-SHA-256 key derivation and Argon2id passphrase protection in the CLI. The threat model and cryptography are documented in the repository; native vault integration remains pending.',
    category: 'Crypto',
  },
  {
    question: 'Is iOS available?',
    answer: 'iOS is in development. The code is complete (Swift/Tauri 2), but simulator and device builds require xcodegen and cocoapods (via Homebrew), which are not yet configured in CI. TestFlight distribution will require Apple Developer Program enrollment. Current status: code ready, tooling pending.',
    category: 'Platform',
  },
  {
    question: 'Can I download a macOS app?',
    answer: 'Yes. The <code>v1.0.0-rc.1</code> Apple Silicon DMG is available from the <a href="https://github.com/M4G3LL4N0/gh0st/releases/tag/v1.0.0-rc.1" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">public GitHub Release</a>. Verify the published SHA-256 checksum before installation. This build is ad-hoc signed and not notarized, so macOS may require approval in Privacy & Security. The native client is an early shell; Settings/API-key entry and native vault integration are pending.',
    category: 'Platform',
  },
  {
    question: 'Can I self-host gh0st?',
    answer: 'gh0st is already self-hosted by design. The CLI runs locally. The browser UI runs via <code>gh0st web</code> on your machine. The macOS app is a native binary. There is no separate server component to deploy. You simply build and run the code on your own machines.',
    category: 'Architecture',
  },
  {
    question: 'What encryption does gh0st use?',
    answer: 'AES-256-GCM for content encryption. HKDF-SHA-256 for purpose-separated key derivation (conversations, files, agents, preferences, MCP credentials, export). Argon2id (64MB, 3 iterations, 4 parallel) for passphrase-to-master-key derivation. 12-byte random nonces per encryption. Web Crypto API in browser, Ring in native.',
    category: 'Crypto',
  },
  {
    question: 'How does ZDR verification work?',
    answer: 'gh0st sends a harmless preflight request to xAI\'s Responses API with <code>store=false</code>. It checks the response header <code>x-zero-data-retention</code>. If the header is <code>true</code>, ZDR is verified and cached for 30 minutes. If verification fails or the header is missing, strict mode blocks sensitive requests until verified.',
    category: 'Privacy',
  },
  {
    question: 'What happens if I lose my passphrase?',
    answer: 'Your vault cannot be unlocked without the passphrase. There is no backdoor, no recovery key, and no gh0st cloud to reset it. This is by design — if we could recover it, so could an attacker. Always store your passphrase securely. Use <code>gh0st export --plaintext</code> for a portable backup if you need recovery options.',
    category: 'Security',
  },
  {
    question: 'Can I use gh0st without an xAI key?',
    answer: 'You can explore the UI, manage agents, and use local features (file search, export/import) without an API key. However, any inference (chat, ask, tools) requires a valid xAI API key.',
    category: 'Account',
  },
  {
    question: 'What files can I attach?',
    answer: 'Text: .txt, .md, .json, .csv, .js, .ts, .py, .html, .css, .xml, .yaml. PDF: .pdf (text extraction via pdf-parse). Documents: .docx (via mammoth). Images: .png, .jpg, .webp, .gif (base64 for multimodal). The workspace provides local processing and retrieval modules; native client integration and encrypted attachment persistence are still being wired.',
    category: 'Files',
  },
  {
    question: 'Is there telemetry or analytics?',
    answer: 'No. gh0st collects no analytics, no telemetry, no crash reports, no usage statistics by default. No tracking pixels, no ad SDKs. The only network traffic is to xAI\'s API when you send a message, and to optional MCP servers you explicitly enable.',
    category: 'Privacy',
  },
  {
    question: 'How do I update gh0st?',
    answer: 'For source builds: <code>git pull && pnpm install && pnpm build</code>. For macOS, download the current DMG from the <a href="https://github.com/M4G3LL4N0/gh0st/releases" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">GitHub Releases</a> page and verify its SHA-256 checksum. For CLI: rebuild from source. Auto-updates via Tauri updater will be enabled once release signing keys are configured (not yet available).',
    category: 'Updates',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-center mb-12">
        <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600">
          Honest answers about what gh0st does and doesn\'t do.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} padding="none">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-neutral-950 dark:focus:ring-offset-neutral-50 rounded-xl"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex items-center gap-3 flex-1">
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/20 text-accent-500">
                  {faq.category}
                </span>
                <span className="font-medium text-neutral-100 dark:text-neutral-900 text-base">
                  {faq.question}
                </span>
              </div>
              <svg
                className={`h-5 w-5 text-neutral-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-label={`Answer to: ${faq.question}`}
              className={`${openIndex === index ? 'block' : 'hidden'} px-6 pb-6 border-t border-neutral-800 dark:border-neutral-200 animate-slide-down`}
            >
              <div className="prose prose-invert max-w-none text-neutral-400 dark:text-neutral-600">
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-neutral-500 dark:text-neutral-500 mb-4">
          Didn't find your answer?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/M4G3LL4N0/gh0st/discussions/new?category=q-a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">
              Ask in Discussions
            </Button>
          </a>
          <a
            href="https://github.com/M4G3LL4N0/gh0st/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              Report an Issue
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}