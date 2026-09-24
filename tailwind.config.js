/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  safelist: [
    'bg-accent-500/10',
    'bg-blue-500/10',
    'bg-orange-500/10',
    'text-accent-500',
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-neutral-500',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral palette - no purple AI gradients
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Accent - subtle, technical, not marketing
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Fira Mono',
          'Droid Sans Mono',
          'monospace',
        ],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'encrypt': 'encrypt 1.5s ease-in-out infinite',
        'packet-move': 'packetMove 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        encrypt: {
          '0%, 100%': { filter: 'blur(0px)' },
          '50%': { filter: 'blur(2px)' },
        },
        packetMove: {
          '0%': { transform: 'translateX(0) scale(1)', opacity: '0' },
          '10%': { opacity: '1' },
          '40%': { transform: 'translateX(calc(100% - 2rem)) scale(1)', opacity: '1' },
          '50%': { transform: 'translateX(calc(100% - 2rem)) scale(0.8)', opacity: '0.8' },
          '60%': { transform: 'translateX(calc(100% - 2rem)) scale(1)', opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(0) scale(1)', opacity: '0' },
        },
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
        'elevated': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'inner-glow': 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
      },
    },
  },
  plugins: [],
}