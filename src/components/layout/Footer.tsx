import React from 'react';
import Link from 'next/link';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

export function Footer() {
  return (
    <footer
      className="bg-neutral-950 dark:bg-neutral-50 border-t border-neutral-800 dark:border-neutral-200 py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="gh0st home">
              <Gh0stMark className="h-7 w-7 text-neutral-100 dark:text-neutral-900" aria-hidden="true" />
              <span className="text-lg font-semibold text-neutral-100 dark:text-neutral-900">gh0st</span>
            </Link>
            <p className="mt-3 text-sm text-neutral-400 dark:text-neutral-600 leading-relaxed max-w-xs">
              Private AI client. Local-first, xAI-powered, and explicit about what this release supports.
              Built for those who believe privacy is a feature, not a setting.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link
                  href="/docs/getting-started"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Privacy Model
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Issue Tracker
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-100 dark:text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  MIT License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/blob/main/PRIVACY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 dark:text-neutral-600 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                >
                  Security Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-800 dark:border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} gh0st. Released under MIT License.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/M4G3LL4N0/gh0st"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 dark:text-neutral-500 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}