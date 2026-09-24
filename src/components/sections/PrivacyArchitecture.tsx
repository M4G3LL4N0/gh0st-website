'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';

type TrustItem = {
  label: string;
  detail: string;
  protected: boolean;
  note?: string;
};

type TrustZone = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  icon: React.ReactNode;
  items: TrustItem[];
  warning?: string;
};

const trustZones: TrustZone[] = [
  {
    id: 'device',
    title: 'YOUR DEVICE',
    subtitle: 'Full control, zero trust required',
    color: 'accent',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      { label: 'Conversations', detail: 'CLI encrypted; native client persistence pending', protected: true },
      { label: 'Files & Attachments', detail: 'CLI encrypted; native integration pending', protected: true },
      { label: 'Agents & Preferences', detail: 'CLI encrypted; native integration pending', protected: true },
      { label: 'Local Memory', detail: 'Workspace modules available; native wiring pending', protected: true },
      { label: 'Encrypted Continuation', detail: 'CLI workflow; native wiring pending', protected: true },
      { label: 'Secure Credentials', detail: 'CLI vault; native Keychain / Secure Enclave pending', protected: true },
    ],
  },
  {
    id: 'xai',
    title: 'XAI / GROK',
    subtitle: 'Inference processor — sees what you send',
    color: 'blue',
    icon: (
      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    items: [
      { label: 'Inference', detail: 'Prompts, context, tool calls processed', protected: false, note: 'Required for AI to work' },
      { label: 'Web Search', detail: 'Queries sent when tool enabled', protected: false, note: 'Opt-in per conversation' },
      { label: 'X Search', detail: 'Queries sent when tool enabled', protected: false, note: 'Opt-in per conversation' },
      { label: 'Code Execution', detail: 'Code run in xAI sandbox', protected: false, note: 'Opt-in per conversation' },
      { label: 'Deep Research', detail: 'Multi-step research workflows', protected: false, note: 'Opt-in per conversation' },
      { label: 'store=false', detail: 'Request sent to not persist response', protected: true, note: 'Verified via ZDR header' },
    ],
  },
  {
    id: 'mcp',
    title: 'OPTIONAL EXTERNAL',
    subtitle: 'Separate privacy boundary — you choose',
    color: 'orange',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    items: [
      { label: 'Remote MCP Servers', detail: 'User-configured external tools', protected: false, note: 'NOT covered by xAI ZDR' },
      { label: 'Custom Integrations', detail: 'Any HTTP endpoint you add', protected: false, note: 'Governed by that provider' },
      { label: 'Data Sent', detail: 'Only what you explicitly route', protected: false, note: 'Per-server enable/disable' },
    ],
    warning: 'Data intentionally sent to MCP is governed by that provider\'s policies and is outside xAI ZDR. gh0st shows destinations before use.',
  },
];

const securityProps = [
  { label: 'Encryption', value: 'AES-256-GCM', detail: 'Web Crypto API (browser) / Ring (native)' },
  { label: 'Key Derivation', value: 'HKDF-SHA-256', detail: 'Purpose-separated subkeys from master' },
  { label: 'Passphrase KDF', value: 'Argon2id', detail: '64MB memory, 3 iterations, 4 parallel' },
  { label: 'Nonce', value: '12-byte random', detail: 'Per encryption, never reused' },
  { label: 'Storage', value: 'CLI encrypted', detail: 'Native client integration pending' },
  { label: 'Vault Lock', value: 'CLI manual', detail: 'Native auto-lock integration pending' },
  { label: 'ZDR Check', value: 'Response header', detail: 'x-zero-data-retention: true cached 30min' },
  { label: 'Telemetry', value: 'None by default', detail: 'No analytics, no crash reporting' },
];

const unprotectedThreats = [
  'Fully compromised OS / malware (process memory readable when unlocked)',
  'xAI seeing plaintext during inference (required for model to generate response)',
  'Network metadata — ISP, VPN, DNS traffic analysis reveals usage patterns',
  'Screenshots / shoulder surfing / physical observation',
  'Keyboard / input compromise (keyloggers capture before encryption)',
  'Deliberately shared MCP data (you chose to send it to that provider)',
  'Hardware backdoors / firmware (below software trust boundary)',
  'Rubber-hose cryptanalysis (coercion to reveal passphrase)',
  'Side-channel attacks (timing, power, EM emanations)',
];

const threatModel = [
  { threat: 'Casual filesystem inspection', protected: true, zone: 'Device' },
  { threat: 'Stolen app data directory (locked)', protected: true, zone: 'Device' },
  { threat: 'Accidental plaintext backups', protected: true, zone: 'Device' },
  { threat: 'Provider-side persistence (ZDR)', protected: true, zone: 'xAI', note: 'Verified via response header' },
  { threat: 'Remote gh0st server compromise', protected: true, zone: 'None', note: 'No gh0st server exists' },
  { threat: 'Fully compromised OS / malware', protected: false, zone: 'Device' },
  { threat: 'xAI seeing plaintext during inference', protected: false, zone: 'xAI', note: 'Required for AI to work' },
  { threat: 'Network metadata (ISP/VPN)', protected: false, zone: 'Network' },
  { threat: 'Screenshots / shoulder surfing', protected: false, zone: 'Physical' },
  { threat: 'Deliberately shared MCP data', protected: false, zone: 'MCP', note: 'Outside xAI ZDR' },
];

export function PrivacyArchitecture() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 id="privacy-arch-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Privacy Architecture — Three Trust Zones
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          gh0st makes trust boundaries explicit. Each zone has different guarantees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {trustZones.map((zone) => (
          <Card key={zone.id} className="h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 bg-${zone.color}-500/10 rounded-lg`}>
                {zone.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 dark:text-neutral-900">{zone.title}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">{zone.subtitle}</p>
              </div>
            </div>

            <dl className="space-y-3">
              {zone.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    {item.protected ? (
                      <svg className="h-6 w-6 text-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-neutral-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-neutral-100 dark:text-neutral-900">{item.label}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">{item.detail}</p>
                    {item.note && (
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 mt-0.5 font-mono">{item.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </dl>

            {zone.warning && (
              <div className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg">
                <p className="text-xs text-orange-500 font-medium">{zone.warning}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 text-center mb-8">
          Security Properties — Currently Implemented
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {securityProps.map((prop) => (
            <Card key={prop.label} padding="md" className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-accent-500">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold text-neutral-100 dark:text-neutral-900">{prop.label}</span>
              </div>
              <p className="text-lg font-mono font-semibold text-neutral-100 dark:text-neutral-900">{prop.value}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">{prop.detail}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 text-center mb-8">
          Threat Model — What We Protect Against (and What We Don't)
        </h3>
        <p className="text-center text-neutral-400 dark:text-neutral-500 mb-6 max-w-2xl mx-auto">
          Honest threat modeling means being explicit about boundaries. This table shows the current threat model.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="border-b border-neutral-800 dark:border-neutral-200">
                <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Threat</th>
                <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Protected</th>
                <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Zone</th>
                <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Notes</th>
              </tr>
            </thead>
            <tbody>
              {threatModel.map((t, i) => (
                <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                  <td className="py-4 text-neutral-300 dark:text-neutral-700">{t.threat}</td>
                  <td className="py-4 text-center">
                    {t.protected ? (
                      <svg className="h-5 w-5 text-accent-500 mx-auto" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </td>
                  <td className="py-4">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-neutral-800 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-700">{t.zone}</span>
                  </td>
                  <td className="py-4 text-sm text-neutral-500 dark:text-neutral-500">{t.note || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 text-center mb-8">
          What gh0st Does NOT Protect Against
        </h3>
        <p className="text-center text-neutral-400 dark:text-neutral-500 mb-6 max-w-2xl mx-auto">
          This honesty is important. These are outside gh0st's control regardless of encryption strength.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {unprotectedThreats.map((item, i) => (
            <Card key={i} padding="md" className="bg-neutral-950/50 dark:bg-neutral-200/50">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-neutral-300 dark:text-neutral-700">{item}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <section>
        <h3 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 text-center mb-8">
          Related Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://github.com/M4G3LL4N0/gh0st/blob/main/docs/THREAT_MODEL.md"
            target="_blank"
            rel="noopener noreferrer"
            className="Card p-6 hover:border-accent-500/50 transition-colors"
          >
            <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Threat Model (Full)</h3>
            <p className="text-neutral-400 dark:text-neutral-500">Complete threat model with attack trees, trust boundaries, and mitigations</p>
          </a>
          <a
            href="https://github.com/M4G3LL4N0/gh0st/blob/main/docs/CRYPTOGRAPHY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="Card p-6 hover:border-accent-500/50 transition-colors"
          >
            <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Cryptography (Full)</h3>
            <p className="text-neutral-400 dark:text-neutral-500">Detailed cryptographic design, key management, and implementation notes</p>
          </a>
          <a
            href="https://github.com/M4G3LL4N0/gh0st/blob/main/docs/ZDR.md"
            target="_blank"
            rel="noopener noreferrer"
            className="Card p-6 hover:border-accent-500/50 transition-colors"
          >
            <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">ZDR Verification (Full)</h3>
            <p className="text-neutral-400 dark:text-neutral-500">Zero Data Retention implementation and runtime verification details</p>
          </a>
          <a
            href="https://github.com/M4G3LL4N0/gh0st/blob/main/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="Card p-6 hover:border-accent-500/50 transition-colors"
          >
            <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-2">Security Policy</h3>
            <p className="text-neutral-400 dark:text-neutral-500">Vulnerability disclosure process and supported versions</p>
          </a>
        </div>
      </section>
    </div>
  );
}