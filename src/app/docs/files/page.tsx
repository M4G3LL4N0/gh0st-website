import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { LinkButton } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export const metadata: Metadata = {
  title: 'Files & Local Search — gh0st Docs',
  description: 'File attachment, local extraction, encrypted storage, and lexical search in gh0st',
};

const fileFormats = [
  { type: 'Text', exts: '.txt, .md, .json, .csv, .js, .ts, .py, .html, .css, .xml, .yaml', proc: 'Full text extraction' },
  { type: 'PDF', exts: '.pdf', proc: 'Text extraction via pdf-parse' },
  { type: 'Documents', exts: '.docx', proc: 'Text extraction via mammoth' },
  { type: 'Images', exts: '.png, .jpg, .webp, .gif', proc: 'Base64 for multimodal' },
];

const processingSteps = [
  'File read locally (no upload)',
  'Text extracted (where applicable)',
  'Encrypted with AES-256-GCM',
  'Stored in encrypted vault',
  'Chunked for retrieval (1000 tokens, 200 overlap)',
  'Lexical search index built locally',
];

const filePrivacy = [
  { aspect: 'At rest', protection: 'AES-256-GCM encrypted' },
  { aspect: 'In transit', protection: 'TLS 1.3 to xAI only' },
  { aspect: 'Search index', protection: 'Local only, encrypted' },
  { aspect: 'xAI transmission', protection: 'Only selected chunks sent' },
];

export default function FilesDocPage() {
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
                Files & Local Search
              </h1>
              <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl">
                Local-first file processing, encrypted storage, and lexical retrieval
              </p>
            </header>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Supported Formats</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left" role="table">
                  <thead>
                    <tr className="border-b border-neutral-800 dark:border-neutral-200">
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Type</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Extensions</th>
                      <th className="pb-3 font-semibold text-neutral-100 dark:text-neutral-900">Processing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fileFormats.map((row, i) => (
                      <tr key={i} className="border-b border-neutral-800/50 dark:border-neutral-300/50">
                        <td className="py-4 font-medium text-neutral-100 dark:text-neutral-900">{row.type}</td>
                        <td className="py-4 font-mono text-sm text-neutral-300 dark:text-neutral-700">{row.exts}</td>
                        <td className="py-4 text-neutral-300 dark:text-neutral-700">{row.proc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Processing Pipeline</h2>
              <div className="space-y-4">
                {processingSteps.map((step, i) => (
                  <Card key={i} padding="md" className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center font-bold">{i + 1}</span>
                    <span className="text-neutral-300 dark:text-neutral-700">{step}</span>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">File Privacy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filePrivacy.map((p) => (
                  <Card key={p.aspect} padding="md" className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <dt className="font-medium text-neutral-100 dark:text-neutral-900">{p.aspect}</dt>
                      <dd className="text-sm text-neutral-400 dark:text-neutral-500">{p.protection}</dd>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 mb-6">Lexical Search</h2>
              <Card padding="lg">
                <ul className="space-y-3 text-neutral-300 dark:text-neutral-700">
                  <li>• Token-based inverted index built locally</li>
                  <li>• No vector database, no embeddings, no external service</li>
                  <li>• Search never leaves your device</li>
                  <li>• Chunk retrieval: 1000 tokens, 200 overlap</li>
                  <li>• Encrypted index stored in vault</li>
                </ul>
              </Card>
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