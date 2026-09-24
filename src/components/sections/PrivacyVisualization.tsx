'use client';

import React, { useEffect, useState } from 'react';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

interface DeviceContent {
  label: string;
  icon: React.ReactNode;
  encrypted: boolean;
}

const deviceContents: DeviceContent[] = [
  { label: 'Conversations', icon: <MessageIcon />, encrypted: true },
  { label: 'Files', icon: <FileIcon />, encrypted: true },
  { label: 'Agents', icon: <AgentIcon />, encrypted: true },
  { label: 'Vault', icon: <VaultIcon />, encrypted: true },
];

function MessageIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h12M8 12l-5 5M8 12l-5-5" />
    </svg>
  );
}

function FileIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  );
}

function AgentIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function VaultIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function XAILogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function PacketIcon({ className = 'h-3 w-3' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1" y="3" width="14" height="10" rx="2" />
      <path d="M4 8h8M4 11h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PrivacyVisualization() {
  const [animationPhase, setAnimationPhase] = useState(0);
  const [zdrVerified, setZdrVerified] = useState(false);

  useEffect(() => {
    const phases = [0, 1, 2, 3, 4];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % phases.length;
      setAnimationPhase(phases[index]);
    }, 5000);

    // Simulate ZDR verification after first cycle
    const zdrTimeout = setTimeout(() => setZdrVerified(true), 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(zdrTimeout);
    };
  }, []);

  return (
    <div className="relative mx-auto max-w-5xl" role="img" aria-label="Privacy architecture visualization showing encrypted local data flowing to xAI with ZDR verification">
      <div className="relative">
        {/* Device */}
        <div className="relative mb-8">
          <div className="relative mx-auto max-w-md">
            {/* Device frame */}
            <div className="relative rounded-2xl bg-neutral-900 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 p-6 shadow-elevated">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">~/gh0st</span>
              </div>

              {/* Vault indicator */}
              <div className="flex items-center gap-3 p-4 bg-neutral-950 dark:bg-neutral-200 rounded-xl border border-neutral-800 dark:border-neutral-300 mb-4">
                <div className="flex items-center gap-2 p-2 bg-accent-500/10 rounded-lg">
                  <VaultIcon className="h-5 w-5 text-accent-500" />
                  <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">Local Vault</span>
                </div>
                <span className="flex-1 text-xs text-neutral-500 dark:text-neutral-500 font-mono">AES-256-GCM + Argon2id</span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-500 text-xs font-medium">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent-500" />
                  </span>
                  Unlocked
                </span>
              </div>

              {/* Device contents */}
              <div className="space-y-3" role="list" aria-label="Encrypted local data">
                {deviceContents.map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border border-neutral-800/50 dark:border-neutral-300/50 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
                  >
                    <div className="flex items-center gap-2 p-2 bg-neutral-800/50 dark:bg-neutral-300/50 rounded-lg">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">{item.label}</span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-500 text-xs font-medium">
                          <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-subtle" />
                          Encrypted
                        </span>
                        <span className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">local</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Device label */}
            <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-500 font-medium">Your Device</p>
          </div>
        </div>

        {/* Inference flow */}
        <div className="relative flex items-center justify-center min-h-[180px]">
          {/* Encrypted packet path */}
          <div className="relative flex items-center justify-center">
            <svg
              className="absolute w-full h-1 pointer-events-none"
              viewBox="0 0 400 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                </marker>
              </defs>
              <path
                d="M20 1 Q200 1 380 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                className="text-neutral-700 dark:text-neutral-300"
              />
            </svg>

            {/* Moving encrypted packet */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                animation: animationPhase >= 1 && animationPhase <= 3 ? 'packetMove 4s ease-in-out infinite' : 'none',
              }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-500/10 border border-accent-500/30 rounded-lg text-accent-500 text-xs font-mono animate-encrypt">
                <span className="h-2 w-2 rounded bg-accent-500 animate-pulse-subtle" />
                <span>store: false</span>
                <PacketIcon />
              </div>
            </div>
          </div>

          {/* xAI/Grok */}
          <div className="relative mt-12">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-2xl bg-neutral-900 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 p-6 shadow-elevated">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 p-2 bg-neutral-800 dark:bg-neutral-200 rounded-lg">
                    <XAILogo />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">xAI / Grok</span>
                    <p className="text-xs text-neutral-500 dark:text-neutral-500">Inference processor</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border border-neutral-800/50 dark:border-neutral-300/50">
                    <div className="flex items-center gap-2 p-2 bg-blue-500/10 rounded-lg">
                      <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">Inference</span>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">Prompts, tool calls, code</p>
                    </div>
                    <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-500">Processes</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border border-neutral-800/50 dark:border-neutral-300/50">
                    <div className="flex items-center gap-2 p-2 bg-purple-500/10 rounded-lg">
                      <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">Web / X Search</span>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">Optional tool calls</p>
                    </div>
                    <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-500">When enabled</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-lg border border-neutral-800/50 dark:border-neutral-300/50">
                    <div className="flex items-center gap-2 p-2 bg-orange-500/10 rounded-lg">
                      <svg className="h-4 w-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-neutral-100 dark:text-neutral-900">Code Execution</span>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">Sandboxed Python/JS</p>
                    </div>
                    <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-500">When enabled</span>
                  </div>
                </div>
              </div>

              {/* ZDR Verification badge */}
              <div
                className={`mt-4 p-4 rounded-xl text-center transition-all duration-500 ${
                  zdrVerified
                    ? 'bg-accent-500/10 border border-accent-500/30'
                    : 'bg-neutral-800/50 border border-neutral-700/50'
                }`}
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  {zdrVerified ? (
                    <>
                      <svg className="h-5 w-5 text-accent-500 animate-pulse-subtle" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-accent-500">ZDR verification available</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-5 w-5 text-neutral-500 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500">Verifying ZDR…</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 max-w-xs mx-auto">
                  {zdrVerified
                    ? 'Conceptual response: x-zero-data-retention: true'
                    : 'Checking xAI response header for ZDR confirmation…'}
                </p>
                <p className="text-[10px] text-neutral-600 dark:text-neutral-400 mt-1 font-mono">
                  DEMO MODE — Not your actual xAI account status
                </p>
              </div>

              <p className="mt-4 text-center text-sm text-neutral-500 dark:text-neutral-500 font-medium">xAI / Grok</p>
            </div>
          </div>

          {/* Return path */}
          <div className="relative flex items-center justify-center">
            <svg
              className="absolute w-full h-1 pointer-events-none"
              viewBox="0 0 400 2"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M380 1 Q200 1 20 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="8 8"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
                className="text-neutral-700 dark:text-neutral-300 opacity-50"
              />
            </svg>
          </div>
        </div>

        {/* Key principles */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-xl border border-neutral-800/50 dark:border-neutral-300/50">
            <div className="flex items-center justify-center gap-2 mb-2 text-accent-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">Local-First</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">All app state encrypted on your device</p>
          </div>
          <div className="p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-xl border border-neutral-800/50 dark:border-neutral-300/50">
            <div className="flex items-center justify-center gap-2 mb-2 text-accent-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-sm font-semibold">store=false</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">xAI asked not to persist response objects</p>
          </div>
          <div className="p-4 bg-neutral-950/50 dark:bg-neutral-200/50 rounded-xl border border-neutral-800/50 dark:border-neutral-300/50">
            <div className="flex items-center justify-center gap-2 mb-2 text-accent-500">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">ZDR Verified</span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">Runtime check of x-zero-data-retention header</p>
          </div>
        </div>
      </div>
    </div>
  );
}