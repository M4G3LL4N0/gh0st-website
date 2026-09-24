'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Gh0stMark } from '@/components/ui/Gh0stMark';

const demoScenarios = [
  {
    id: 'research',
    title: 'Research with Web & X Search',
    userMessage: 'What\'s changed in AI privacy this week?',
    tools: [
      { name: 'Web Search', status: 'active', color: 'blue' },
      { name: 'X Search', status: 'active', color: 'purple' },
    ],
    response: 'Based on recent searches, here are the key AI privacy developments this week...',
    citations: [
      'xAI announces ZDR expansion for enterprise teams',
      'New research on local-first AI architectures',
      'EU AI Act implementation timeline updated',
    ],
  },
  {
    id: 'files',
    title: 'File Analysis & Local Retrieval',
    userMessage: 'Analyze this research paper on differential privacy',
    tools: [
      { name: 'File Parser', status: 'active', color: 'green' },
      { name: 'Local Search', status: 'active', color: 'accent' },
    ],
    response: 'I\'ve extracted and analyzed the PDF. The paper introduces a novel composition theorem...',
    filePreview: {
      name: 'diff-privacy-research.pdf',
      size: '2.4 MB',
      pages: 24,
      extracted: '1,847 tokens',
    },
  },
  {
    id: 'agent',
    title: 'Researcher Agent with Deep Research',
    userMessage: 'Research the impact of local-first AI on enterprise adoption',
    tools: [
      { name: 'Deep Research', status: 'active', color: 'orange' },
      { name: 'Web Search', status: 'pending', color: 'blue' },
      { name: 'Code Execution', status: 'pending', color: 'gray' },
    ],
    response: 'Initiating multi-step research. This will take 30-60 seconds...',
    agent: {
      name: 'Researcher',
      icon: '🔍',
      desc: 'Deep research specialist with Web, X, and Deep Research tools',
      model: 'grok-3',
      reasoning: 'high',
    },
  },
];

const privacyInspectorState = {
  vault: { status: 'CLI encrypted · demo', color: 'accent' },
  conversations: { status: 'This device', color: 'accent' },
  files: { status: 'This device', color: 'accent' },
  xaiStore: { status: 'store=false', color: 'accent' },
  zdr: { status: 'VERIFIED — DEMO', color: 'accent' },
  lastChecked: '3 minutes ago',
  telemetry: { status: 'Off', color: 'neutral' },
  analytics: { status: 'None', color: 'neutral' },
  externalMcp: { status: 'None', color: 'neutral' },
  tools: { web: true, x: false, code: true },
};

export function InteractiveDemo() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [typedOutput, setTypedOutput] = useState<string[]>([]);
  const [typing, setTyping] = useState(false);
  const [promptTyped, setPromptTyped] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runAnimation = async () => {
      setTyping(true);
      setPromptTyped(false);
      setTypedOutput([]);

      const cmd = demoScenarios[currentScenario];

      await new Promise((r) => setTimeout(r, 500));
      setPromptTyped(true);
      await new Promise((r) => setTimeout(r, 300));

      for (const line of [cmd.response]) {
        setTypedOutput((prev) => [...prev, line]);
        await new Promise((r) => setTimeout(r, line.length > 50 ? 80 : 40));
      }

      setTyping(false);
      await new Promise((r) => setTimeout(r, 3000));

      setCurrentScenario((prev) => (prev + 1) % demoScenarios.length);
    };

    runAnimation();
  }, [currentScenario]);

  const scenario = demoScenarios[currentScenario];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="text-center mb-12">
        <h2 id="demo-heading" className="text-3xl sm:text-4xl font-bold text-neutral-100 dark:text-neutral-900 mb-4">
          Interactive Product Demo
        </h2>
        <p className="text-lg text-neutral-400 dark:text-neutral-600 max-w-2xl mx-auto">
          This is a simulated gh0st interface. It does not connect to xAI or accept API keys.
          Click through scenarios to see how gh0st works.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col overflow-hidden">
            <div className="flex items-center justify-between border-b border-neutral-800 dark:border-neutral-200 px-6 py-4">
              <div className="flex items-center gap-3">
                <Gh0stMark className="h-7 w-7 text-accent-500" />
                <div>
                  <p className="font-semibold text-neutral-100 dark:text-neutral-900">gh0st</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500">Demo Mode — Not connected</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 dark:text-neutral-500 font-mono">grok-3</span>
                <Button variant="ghost" size="sm">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6" role="log" aria-label="Chat conversation">
              <div className="flex justify-end">
                <div className="max-w-[70%]">
                  <div className="bg-neutral-800 dark:bg-neutral-200 rounded-2xl rounded-tr-sm px-4 py-3">
                    <p className="text-neutral-100 dark:text-neutral-900 whitespace-pre-wrap">{scenario.userMessage}</p>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 text-right">You</p>
                </div>
              </div>

              {scenario.tools && scenario.tools.length > 0 && (
                <div className="flex justify-start">
                  <div className="max-w-[70%]">
                    <div className="bg-neutral-950 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-500 mb-2">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 002.573-1.066c1.543.94 3.31-.826 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Tool Activity</span>
                      </div>
                      <div className="space-y-1">
                        {scenario.tools.map((tool) => (
                          <div key={tool.name} className="flex items-center gap-2 text-sm">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                tool.status === 'active'
                                  ? 'bg-accent-500 animate-pulse-subtle'
                                  : 'bg-neutral-600 dark:bg-neutral-400'
                              }`}
                            />
                            <span className={`text-neutral-300 dark:text-neutral-700 ${
                              tool.status === 'active' ? 'font-medium' : ''
                            }`}>
                              {tool.name}
                            </span>
                            {tool.status === 'active' && (
                              <span className="text-xs text-accent-500 font-mono">running…</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {scenario.agent && (
                <div className="flex justify-start">
                  <div className="max-w-[70%]">
                    <div className="bg-neutral-950 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{scenario.agent.icon}</span>
                        <div>
                          <p className="font-semibold text-neutral-100 dark:text-neutral-900">{scenario.agent.name}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500">{scenario.agent.desc}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-neutral-500 dark:text-neutral-500">
                            <span>Model: <code className="font-mono">{scenario.agent.model}</code></span>
                            <span>Reasoning: <code className="font-mono">{scenario.agent.reasoning}</code></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {scenario.filePreview && (
                <div className="flex justify-start">
                  <div className="max-w-[70%]">
                    <div className="bg-neutral-950 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                          <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-neutral-100 dark:text-neutral-900 truncate">{scenario.filePreview.name}</p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-500">{scenario.filePreview.size} • {scenario.filePreview.pages} pages • {scenario.filePreview.extracted}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-start">
                <div className="max-w-[85%]">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center">
                      <Gh0stMark className="h-5 w-5 text-accent-500" />
                    </div>
                    <div className="bg-neutral-950 dark:bg-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3 border border-neutral-700 dark:border-neutral-300">
                      <p className="text-neutral-100 dark:text-neutral-900 whitespace-pre-wrap">
                        {typing ? scenario.response.substring(0, Math.floor(scenario.response.length * 0.7)) + '▋' : scenario.response}
                      </p>
                      {scenario.citations && (
                        <div className="mt-3 pt-3 border-t border-neutral-700 dark:border-neutral-300">
                          <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium mb-2">Sources</p>
                          <ul className="space-y-1">
                            {scenario.citations.map((citation, i) => (
                              <li key={i} className="text-xs text-neutral-400 dark:text-neutral-600 flex items-center gap-1">
                                <span className="text-accent-500">[{i + 1}]</span>
                                <span>{citation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1 ml-11">gh0st</p>
                </div>
              </div>

              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-neutral-800 dark:border-neutral-200 p-4">
              <div className="flex items-end gap-2">
                <div className="flex-1 relative">
                  <textarea
                    placeholder="Message gh0st…"
                    className="w-full bg-neutral-950 dark:bg-neutral-100 border border-neutral-700 dark:border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-100 dark:text-neutral-900 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent resize-none min-h-[48px] max-h-48"
                    disabled
                    aria-label="Message input (disabled in demo)"
                  />
                </div>
                <Button variant="primary" disabled className="h-10">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </Button>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 text-center">Demo mode — Input disabled</p>
            </div>
          </Card>
        </div>

        <div>
          <Card className="sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-neutral-100 dark:text-neutral-900 flex items-center gap-2">
                <svg className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Privacy Inspector
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-500 font-medium">DEMO</span>
            </div>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Vault</dt>
                <dd className="flex items-center gap-2 font-medium text-neutral-100 dark:text-neutral-900">
                  <span className="h-2 w-2 rounded-full bg-accent-500" />
                  {privacyInspectorState.vault.status}
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Conversation Storage</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.conversations.status}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Files</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.files.status}</dd>
              </div>
              <div className="pt-2 border-t border-neutral-800 dark:border-neutral-200">
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">xAI storage request</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900 font-mono text-accent-500">{privacyInspectorState.xaiStore.status}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">xAI ZDR</dt>
                <dd className="flex items-center gap-2 font-medium">
                  <span className={`h-2 w-2 rounded-full bg-${privacyInspectorState.zdr.color}-500`} />
                  <span className={`text-${privacyInspectorState.zdr.color}-500`}>{privacyInspectorState.zdr.status}</span>
                </dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Last checked</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.lastChecked}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Telemetry</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.telemetry.status}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Analytics</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.analytics.status}</dd>
              </div>
              <div>
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">External MCP</dt>
                <dd className="font-medium text-neutral-100 dark:text-neutral-900">{privacyInspectorState.externalMcp.status}</dd>
              </div>
              <div className="pt-2 border-t border-neutral-800 dark:border-neutral-200">
                <dt className="text-neutral-500 dark:text-neutral-500 mb-1">Tools</dt>
                <dd className="flex flex-wrap gap-1">
                  {Object.entries(privacyInspectorState.tools).map(([tool, enabled]) => (
                    <span
                      key={tool}
                      className={`px-2 py-0.5 rounded text-xs font-mono ${
                        enabled
                          ? 'bg-accent-500/20 text-accent-500'
                          : 'bg-neutral-800/50 text-neutral-500 dark:bg-neutral-300/50 dark:text-neutral-500'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Demo scenarios">
        {demoScenarios.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === currentScenario}
            aria-label={s.title}
            onClick={() => setCurrentScenario(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentScenario
                ? 'bg-accent-500 w-6'
                : 'bg-neutral-600 dark:bg-neutral-400 hover:bg-neutral-500 dark:hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}