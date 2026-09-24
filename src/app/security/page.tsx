import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Security — gh0st',
  description: 'Security architecture, threat model, cryptography, and vulnerability reporting for gh0st — local-first encrypted AI client.',
};

const cryptoPrimitives = [
  { name: 'AES-256-GCM', use: 'Content encryption', detail: 'Web Crypto API (browser) / Ring (native)', status: 'Implemented' },
  { name: 'HKDF-SHA-256', use: 'Key derivation', detail: 'Purpose-separated subkeys from master', status: 'Implemented' },
  { name: 'Argon2id', use: 'Passphrase KDF', detail: '64MB memory, 3 iterations, 4 parallel', status: 'Implemented' },
  { name: 'ChaCha20-Poly1305', use: 'Alternative cipher', detail: 'Available via Ring for native builds', status: 'Available' },
];

const unprotected = [
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

const vaultOps = [
  { operation: 'Lock', trigger: 'Manual / Timer / Background / Screen lock' },
  { operation: 'Unlock', trigger: 'Passphrase / Face ID / Touch ID / Secure Enclave' },
  { operation: 'Rotate keys', trigger: 'Automatic on config change / passphrase change' },
  { operation: 'Wipe', trigger: 'Explicit <code>gh0st wipe --force</code>' },
];

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <header className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Gh0stMark className="h-10 w-10 text-accent-500" />
                <span className="text-3xl font-bold text-neutral-100 dark:text-neutral-900">gh0st</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
                Security Architecture
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
                Technical details on encryption, threat model, and security boundaries.
                No marketing fluff — just the architecture.
              </p>
            </header>

            {/* Vulnerability Reporting */}
            <Card variant="outlined" className="mb-12 p-6 border-accent-500/30 bg-accent-500/5">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent-500/10 rounded-lg text-accent-500 flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-neutral-100 dark:text-neutral-900 mb-2">
                    Found a Security Issue?
                  </h2>
                  <p className="text-neutral-400 dark:text-neutral-500 mb-4">
                    We take security seriously. Please report vulnerabilities privately:
                  </p>
                  <ul className="space-y-2 text-neutral-400 dark:text-neutral-500">
                    <li>✉️ Email <a href="mailto:security@gh0st.dev" className="text-accent-500 hover:underline font-mono">security@gh0st.dev</a></li>
                    <li>🔒 Use <a href="https://github.com/M4G3LL4N0/gh0st/security/advisories" target="_blank" rel="noopener noreferrer" className="text-accent-500 hover:underline">GitHub Private Vulnerability Reporting</a></li>
                    <li>📋 Include steps to reproduce if possible</li>
                    <li>⏱️ Allow 90 days for remediation before public disclosure</li>
                  </ul>
                  <p className="mt-4 text-sm text-neutral-500">
                    We acknowledge receipt within 48 hours and provide a timeline for fix.
                  </p>
                </div>
              </div>
            </Card>

            {/* Cryptographic Primitives */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Cryptographic Primitives
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Primitive</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Purpose</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Implementation</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cryptoPrimitives.map((p) => (
                      <tr key={p.name} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-mono font-medium text-neutral-100 dark:text-neutral-900">{p.name}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{p.use}</td>
                        <td className="py-4 text-sm text-neutral-500 dark:text-neutral-500">{p.detail}</td>
                        <td className="py-4">
                          <span className="px-2 py-0.5 rounded text-xs font-medium bg-accent-500/20 text-accent-500">{p.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Key Architecture */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Key Architecture
              </h2>
              <div className="space-y-4">
                <Card>
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-3">Master Key Derivation</h3>
                  <pre className="font-mono text-sm text-neutral-400 dark:text-neutral-600 bg-neutral-950 dark:bg-neutral-100 p-4 rounded-lg overflow-x-auto">
User Passphrase
     │
     ▼
Argon2id (64MB, 3 iter, 4 parallel)
     │
     ▼
Master Key (256-bit)
     │
     ├── HKDF → Conversations Key
     ├── HKDF → Attachments Key
     ├── HKDF → Agents Key
     ├── HKDF → Preferences Key
     ├── HKDF → MCP Credentials Key
     └── HKDF → Export Key
                  </pre>
                </Card>

                <Card>
                  <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-3">Encryption Properties</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Algorithm</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">AES-256-GCM</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Key derivation</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">HKDF-SHA-256</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Passphrase KDF</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">Argon2id (64MB, 3i, 4p)</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Nonce</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">12-byte random per encryption</dd>
                      </div>
                    </dl>
                    <dl className="space-y-2">
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Versioning</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">v1 in ciphertext header</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Integrity</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">AEAD authentication tag</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Tamper detection</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">AEAD tag verification</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-neutral-500 dark:text-neutral-500">Key wipe</dt>
                        <dd className="font-mono text-neutral-100 dark:text-neutral-900">Zeroize on lock (native)</dd>
                      </div>
                    </dl>
                  </div>
                </Card>
              </div>
            </section>

            {/* Vault Operations */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Vault Operations
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Operation</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Trigger</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vaultOps.map((op) => (
                      <tr key={op.operation} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{op.operation}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{op.trigger}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Threat Model */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Threat Model — What We Protect Against (and What We Don't)
              </h2>
              <p className="text-neutral-400 dark:text-neutral-500 mb-6 max-w-2xl">
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
            </section>

            {/* What gh0st does NOT protect against */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                What gh0st Does NOT Protect Against
              </h2>
              <p className="text-neutral-400 dark:text-neutral-500 mb-6 max-w-2xl">
                This honesty is important. These are outside gh0st's control regardless of encryption strength.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unprotected.map((item, i) => (
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
            </section>

            {/* Related Documents */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6 flex items-center gap-2">
                <svg className="h-6 w-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Related Documents
              </h2>
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
        </section>
      </main>
      <Footer />
    </>
  );
}