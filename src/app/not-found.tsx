'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Gh0stMark } from '@/components/ui/Gh0stMark';
import { LinkButton, Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16 min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          <Gh0stMark className="h-16 w-16 mx-auto mb-6 text-accent-500/50" aria-hidden="true" />
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
            Nothing here.
          </h1>
          <p className="text-lg text-neutral-400 dark:text-neutral-500 mb-8">
            gh0st left no trace. The page you're looking for doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LinkButton href="/" variant="primary">
              Go Home
            </LinkButton>
            <a href="https://github.com/M4G3LL4N0/gh0st" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}