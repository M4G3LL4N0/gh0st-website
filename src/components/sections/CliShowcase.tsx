'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';

const terminalCommands = [
  {
    prompt: '$ gh0st doctor',
    output: [
      'GH0ST DOCTOR',
      '',
      'CLI          ✓ installed (v1.0.0-rc.1)',
      'Node.js      ✓ v20.18.0',
      'pnpm         ✓ 9.0.0',
      'Rust         ✓ 1.79.0',
      '',
      'Vault        ✓ encrypted (AES-256-GCM)',
      'Storage      ✓ ~/.gh0st/storage/ accessible',
      'xAI          ✓ connected (api.x.ai)',
      'store=false  ✓ configured',
      'ZDR          ✓ verified (cached 2m ago)',
      '',
      'All checks passed. Ready to chat.',
    ],
  },
  {
    prompt: '$ gh0st chat',
    output: [
      'gh0st > Starting interactive session…',
      'gh0st > Model: grok-3 | Agent: General | Tools: Web, Code',
      'gh0st > Type /help for commands, /exit to quit',
      '',
      'You: What is the difference between store=false and ZDR?',
      '',
      'gh0st: [Web Search] Searching for xAI Responses API documentation…',
      'gh0st: store=false is a request parameter asking xAI not to persist',
      '       the response object. ZDR (Zero Data Retention) is an xAI',
      '       team-level policy verified by the x-zero-data-retention',
      '       response header. gh0st sends store=false and checks the header.',
      '',
      'You: /exit',
      'gh0st > Session saved. Goodbye!',
    ],
  },
  {
    prompt: '$ gh0st ask "Explain Argon2id in one sentence"',
    output: [
      'Argon2id is a memory-hard key derivation function combining',
      'Argon2i (side-channel resistance) and Argon2d (GPU resistance),',
      'used by gh0st with 64MB memory, 3 iterations, 4 parallelism',
      'to derive encryption keys from your passphrase.',
    ],
  },
  {
    prompt: '$ gh0st zdr',
    output: [
      'ZDR VERIFICATION',
      '',
      'Status:      VERIFIED ✓',
      'Header:      x-zero-data-retention: true',
      'Checked:     2 minutes ago',
      'Expires:     28 minutes (30-min cache)',
      'Team:        Enterprise ZDR enabled',
      '',
      'Strict mode: ACTIVE — sensitive requests allowed',
    ],
  },
  {
    prompt: '$ gh0st agents --create',
    output: [
      'CREATE NEW AGENT',
      '',
      'Name: Security Auditor',
      'Icon: 🛡️',
      'Description: Reviews code for security vulnerabilities',
      'Instructions: You are a security expert. Analyze code for',
      '  OWASP Top 10, crypto misuse, injection flaws, and',
      '  supply chain risks. Be thorough but practical.',
      'Model: grok-3',
      'Reasoning: high',
      'Tools: Code Execution, Web Search',
      '',
      'Agent created. ID: agent_sec_audit_01',
    ],
  },
];

const allCommands = [
  { cmd: 'gh0st chat', desc: 'Interactive chat session', flags: '--strict, --model, --agent' },
  { cmd: 'gh0st ask', desc: 'One-shot question', flags: '-m, --model, -a, --agent' },
  { cmd: 'gh0st web', desc: 'Start local browser UI', flags: '--port, --host' },
  { cmd: 'gh0st status', desc: 'Show system status', flags: '--json' },
  { cmd: 'gh0st zdr', desc: 'Verify ZDR status', flags: '--force' },
  { cmd: 'gh0st agents', desc: 'Manage agents', flags: '--create, --list, --delete' },
  { cmd: 'gh0st chats', desc: 'List conversations', flags: '--all, --search' },
  { cmd: 'gh0st export', desc: 'Export encrypted backup', flags: '-o, --output, --plaintext' },
  { cmd: 'gh0st import', desc: 'Import backup', flags: '--force' },
  { cmd: 'gh0st lock', desc: 'Lock vault', flags: '' },
  { cmd: 'gh0st wipe', desc: 'Secure delete all data', flags: '--force' },
  { cmd: 'gh0st doctor', desc: 'Diagnostics & setup', flags: '--fix, --setup' },
];

export function CliShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedOutput, setTypedOutput] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [promptTyped, setPromptTyped] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      setTyping(true);
      setPromptTyped(false);
      setTypedOutput([]);

      const cmd = terminalCommands[currentIndex];

      await new Promise((r) => setTimeout(r, 500));
      setPromptTyped(true);
      await new Promise((r) => setTimeout(r, 300));

      for (const line of cmd.output) {
        setTypedOutput((prev) => [...prev, line]);
        await new Promise((r) => setTimeout(r, line.length > 50 ? 80 : 40));
      }

      setTyping(false);
      await new Promise((r) => setTimeout(r, 3000));

      setCurrentIndex((prev) => (prev + 1) % terminalCommands.length);
    };

    runAnimation();
  }, [currentIndex]);

  const cmd = terminalCommands[currentIndex];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 id="cli-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          CLI Showcase
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          Real commands. Real output. This animation demonstrates the actual gh0st CLI.
        </p>
      </div>

      <Card className="max-w-3xl mx-auto bg-neutral-950 border-neutral-800 dark:border-neutral-200">
        <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 dark:bg-neutral-100 border-b border-neutral-800 dark:border-neutral-200">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-neutral-500 font-mono">~/.local/bin/gh0st</span>
        </div>

        <div className="p-6 font-mono text-sm overflow-x-auto">
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-accent-500">gh0st</span>
              <span className="text-neutral-500">&gt;</span>
              <span className={`${promptTyped ? 'animate-pulse' : 'invisible'} bg-neutral-300 dark:bg-neutral-700`}>_</span>
              <span className={`${!promptTyped ? 'invisible' : ''}`}>{cmd.prompt}</span>
            </div>

            <div className="ml-6 space-y-1">
              {typedOutput.map((line, i) => (
                <div key={i} className="text-neutral-300 dark:text-neutral-700 whitespace-pre">
                  {line}
                </div>
              ))}
              {typing && (
                <div className="text-neutral-300 dark:text-neutral-700">
                  <span className="animate-pulse">█</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 py-3 bg-neutral-900/50 dark:bg-neutral-100/50 border-t border-neutral-800 dark:border-neutral-200 flex items-center justify-between">
          <div className="flex gap-1">
            {terminalCommands.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? 'bg-accent-500 w-6'
                    : 'bg-neutral-600 dark:bg-neutral-400 hover:bg-neutral-500 dark:hover:bg-neutral-500'
                }`}
                aria-label={`Command ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-xs text-neutral-500 font-mono">
            Demo — {currentIndex + 1}/{terminalCommands.length}
          </span>
        </div>
      </Card>

      <div className="mt-12">
        <h3 className="text-2xl font-bold text-neutral-100 dark:text-neutral-900 text-center mb-8">
          All 12 Commands
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {allCommands.map((c) => (
            <Card key={c.cmd} padding="md" className="bg-neutral-950/50 dark:bg-neutral-200/50">
              <code className="font-mono text-accent-500 text-sm">{c.cmd}</code>
              <p className="text-sm text-neutral-400 dark:text-neutral-600 mt-1">{c.desc}</p>
              {c.flags && (
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 font-mono">{c.flags}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}