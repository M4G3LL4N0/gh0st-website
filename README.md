# gh0st Website

Official website for gh0st — local-first private AI with a current encrypted CLI workflow and early native clients.

## Development

```bash
# Install dependencies
pnpm install

# Development server
pnpm dev

# Type check
pnpm typecheck

# Lint
pnpm lint

# Production build
pnpm build

# Preview production build
pnpm start
```

## Deployment

This is a Next.js static export configured for Vercel deployment.

```bash
# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── security/          # Security page
│   ├── privacy/           # Privacy page
│   ├── download/          # Download page
│   ├── docs/              # Documentation pages
│   ├── faq/               # FAQ page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── not-found.tsx      # 404 page
│   └── sitemap.ts         # Sitemap generation
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Homepage sections
│   └── demo/              # Interactive demo
├── styles/
│   └── globals.css        # Global styles
└── public/
    ├── robots.txt
    ├── favicon.svg
    └── gh0st-mark.svg
```

## Tech Stack

- Next.js 14 (App Router, Static Export)
- React 18
- TypeScript
- Tailwind CSS
- pnpm

## Design Principles

- Dark mode default
- Neutral color palette
- Minimal motion (respects prefers-reduced-motion)
- Accessible by default
- No analytics, no tracking
- Fast static generation

## License

MIT License — see [LICENSE](LICENSE) for details.