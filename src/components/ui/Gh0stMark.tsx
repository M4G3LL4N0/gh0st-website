'use client';

import React from 'react';

export function Gh0stMark({
  className = '',
  'aria-label': ariaLabel = 'gh0st logo',
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
      role="img"
      aria-label={ariaLabel}
    >
      <circle
        cx="16"
        cy="16"
        r="15"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.15"
        strokeDasharray="4 4"
      />
      <g transform="translate(16, 16)">
        <circle
          cx="0"
          cy="0"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <ellipse
          cx="0"
          cy="-0.5"
          rx="4.5"
          ry="5.5"
          fill="currentColor"
          opacity="0.1"
        >
          <animate
            attributeName="opacity"
            values="0;0.15;0"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <circle
          cx="-3"
          cy="-2"
          r="0.8"
          fill="currentColor"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        <circle
          cx="3"
          cy="-2"
          r="0.8"
          fill="currentColor"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.6;0.3"
            dur="4s"
            repeatCount="indefinite"
            begin="2s"
          />
        </circle>
      </g>
    </svg>
  );
}