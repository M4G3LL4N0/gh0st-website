import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — gh0st',
  description: 'Frequently asked questions about gh0st privacy, xAI inference, ZDR, files, agents, CLI, browser, and iOS.',
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
}
