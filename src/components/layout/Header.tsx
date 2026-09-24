'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

const navItems = [
  { href: '#features', label: 'Features' },
  { href: '#privacy', label: 'Privacy' },
  { href: '/docs/getting-started', label: 'Docs' },
  { href: '/security', label: 'Security' },
  { href: '/download', label: 'Download' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/90 dark:bg-neutral-50/90 backdrop-blur-md border-b border-neutral-800 dark:border-neutral-200'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded"
              aria-label="gh0st home"
            >
              <Gh0stMark className="h-8 w-8 text-neutral-100 dark:text-neutral-900" aria-hidden="true" />
              <span className="text-xl font-semibold tracking-tight text-neutral-100 dark:text-neutral-900">
                gh0st
              </span>
              <span className="hidden sm:inline-block text-xs text-neutral-500 font-mono">
                v1.0.0-rc.1
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-neutral-300 dark:text-neutral-700 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/M4G3LL4N0/gh0st"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-300 dark:text-neutral-700 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
              aria-label="GitHub repository"
            >
              GitHub
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/download"
              className="rounded-lg bg-neutral-800 dark:bg-neutral-200 px-4 py-2 text-sm font-medium text-neutral-100 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
            >
              Download
            </Link>
            <a
              href="https://github.com/M4G3LL4N0/gh0st"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-neutral-700 dark:border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-100 dark:text-neutral-900 hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50 transition-colors"
            >
              GitHub
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-neutral-300 dark:text-neutral-700 hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden py-4 border-t border-neutral-800 dark:border-neutral-200 animate-slide-down">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-base font-medium text-neutral-300 dark:text-neutral-700 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://github.com/M4G3LL4N0/gh0st"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-2 text-base font-medium text-neutral-300 dark:text-neutral-700 hover:text-accent-400 dark:hover:text-accent-600 transition-colors"
              >
                GitHub
              </a>
              <div className="pt-2 flex flex-col gap-2">
                <Link
                  href="/download"
                  className="rounded-lg bg-neutral-800 dark:bg-neutral-200 px-4 py-2 text-center text-sm font-medium text-neutral-100 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download
                </Link>
                <a
                  href="https://github.com/M4G3LL4N0/gh0st"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-neutral-700 dark:border-neutral-300 px-4 py-2 text-center text-sm font-medium text-neutral-100 dark:text-neutral-900 hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}