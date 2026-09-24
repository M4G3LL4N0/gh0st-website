'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  asChild?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:focus-visible:ring-offset-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300 active:bg-neutral-900 dark:active:bg-neutral-100',
    secondary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
    outline: 'border border-neutral-700 dark:border-neutral-300 bg-transparent hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50',
    ghost: 'bg-transparent hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

type LinkButtonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export function LinkButton({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: LinkButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 dark:focus-visible:ring-offset-neutral-50';

  const variants = {
    primary: 'bg-neutral-800 dark:bg-neutral-200 text-neutral-100 dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-300',
    secondary: 'bg-accent-600 text-white hover:bg-accent-700',
    outline: 'border border-neutral-700 dark:border-neutral-300 bg-transparent hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50',
    ghost: 'bg-transparent hover:bg-neutral-800/50 dark:hover:bg-neutral-200/50',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}