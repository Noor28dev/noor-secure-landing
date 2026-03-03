# Noor Secure Landing Page

Production marketing website for **Noor Secure by NOOR** — a decentralised web integrity verification network.

Live at [noor28.com](https://noor28.com)

## Tech Stack

- React 19 + TypeScript
- Tailwind CSS 4 (CSS-first `@theme` tokens)
- Framer Motion 12 (scroll animations, spring counters, SVG animations)
- Lucide React (icons)
- Vite 6
- Deployed to Vercel

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Bundle: ~119KB gzipped (JS + CSS)

## Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, ProblemStatement, HowItWorks, IntegrityScore,
│   │                 # WhyDecentralised, Compliance, Enterprise, Architecture,
│   │                 # CallToAction
│   └── ui/           # ScrollReveal, SectionLabel, AnimatedCounter,
│                     # IntegrityGauge, HeroVisual
├── hooks/            # useAnimatedCounter, useActiveSection, useScrolled
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

Configured for Vercel via `vercel.json`. Push to `main` to deploy.
