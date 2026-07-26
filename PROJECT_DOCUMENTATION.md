# HichamClips — Project Documentation

## Overview

**HichamClips** is a conversion-focused landing page for a short-form video editing subscription service targeting streamers and content creators. The service offers fixed monthly pricing for consistent, high-retention clips delivered within 24-48 hours.

**Live URL**: Deployed on Vercel (SPA routing configured via `vercel.json`)

---

## Tech Stack

### Core Framework
- **React 18.3.1** with **TypeScript 5.8.3**
- **Vite 5.4.19** (SWC plugin for fast HMR)
- **React Router DOM 6.30.1** (client-side routing)

### UI & Styling
- **Tailwind CSS 3.4.17** with CSS variables design system
- **shadcn/ui** components (Radix UI primitives + class-variance-authority)
- **Lucide React** icons
- **Space Grotesk** (display) + **Inter** (body) fonts via Google Fonts

### State & Data
- **TanStack React Query 5.83.0** (server state)
- **React Hook Form 7.61.1** + **Zod 3.25.76** (forms/validation)
- **next-themes 0.3.0** (dark mode support)

### Payments & Integrations
- **PayPal SDK** (subscriptions via PayPal Buttons)
- **n8n webhook** (payment confirmation → Google Sheets + Discord)
- **Vercel Analytics** (privacy-friendly analytics)

### Development Tools
- **ESLint 9.32.0** + TypeScript ESLint
- **Vitest 3.2.4** + Testing Library (unit tests)
- **PostCSS** + Autoprefixer

---

## Project Structure

```
src/
├── App.tsx                 # App shell: providers, routing, analytics
├── main.tsx                # Entry point
├── index.css               # Global styles, design tokens, CSS variables
├── vite-env.d.ts           # Vite type declarations
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── hooks/
│   ├── use-toast.ts        # Custom toast system (shadcn pattern)
│   └── use-mobile.tsx      # Mobile detection hook
├── components/
│   ├── ui/                 # shadcn/ui base components (40+ components)
│   ├── ClipCard.tsx        # Video clip preview card with hover preview
│   ├── VideoModal.tsx      # Modal for full video playback (YouTube + raw MP4)
│   ├── TestimonialsSection.tsx # 3D carousel testimonials
│   ├── PayPalButton.tsx    # PayPal subscription button integration
│   └── sonner.tsx          # Sonner toaster wrapper with theme support
├── pages/
│   ├── Index.tsx           # Main landing page (all sections)
│   ├── ThankYou.tsx        # Post-payment confirmation page
│   └── NotFound.tsx        # 404 page with error logging
└── assets/
    ├── creators/           # Creator profile images + info
    └── dlou-thumb.png      # D-LOU clip thumbnail
```

---

## Design System (src/index.css)

### Color Palette (HSL CSS Variables)
| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `220 15% 6%` | Deep dark base |
| `--foreground` | `0 0% 98%` | Primary text |
| `--card` | `220 14% 9%` | Card backgrounds |
| `--primary` | `76 100% 55%` | **Brand yellow/gold** (CTA, accents) |
| `--primary-foreground` | `220 20% 6%` | Text on primary |
| `--border` | `220 12% 16%` | Borders, dividers |
| `--ring` | `76 100% 55%` | Focus rings |
| `--muted` | `220 12% 12%` | Subtle backgrounds |
| `--muted-foreground` | `220 8% 65%` | Secondary text |

### Custom Utilities
- `.bg-glow` — Radial gradient glow from primary color
- `.shadow-cta` — Primary-colored CTA shadow (0 10px 40px -10px)
- `.shadow-card-dark` — Dark card elevation shadow
- `.text-balance` — `text-wrap: balance`
- `.animate-marquee` / `.animate-marquee-fast` — Horizontal scroll animations

### Typography
- **Display**: Space Grotesk (400-700) — headings, numbers
- **Body**: Inter (400-600) — UI text, paragraphs
- Letter-spacing: `-0.02em` on headings

### Border Radius
- `--radius: 0.75rem` (12px) base
- `lg: var(--radius)`, `md: calc(var(--radius) - 2px)`, `sm: calc(var(--radius) - 4px)`

---

## Page Architecture (Index.tsx)

### Section Breakdown

| Section | ID | Purpose |
|---------|----|---------|
| **Nav** | — | Fixed header, logo, links, CTA |
| **Hero** | — | Headline, dual CTA (pricing + Discord) |
| **Work/Clips** | `#work` | 4-column clip showcase (ClipCard) |
| **How It Works** | `#how-it-works` | 3-step process |
| **Benefits** | `#benefits` | 6 benefit cards with icons |
| **Testimonials** | `#feedback` | 3D carousel (TestimonialsSection) |
| **Pricing** | `#pricing` | 3 tiers: Trial ($15), Starter ($150/mo), Pro ($300/mo) |
| **FAQ** | `#faq` | 7 accordion-style questions |
| **Contact/CTA** | `#contact` | Final CTA, Discord link, email copy, privacy note |
| **Footer** | — | Logo, copyright |

### Data Structures

**Clips** (4 items):
```typescript
{
  thumbnail: string;      // YouTube maxresdefault.jpg or local
  title: string;          // Creator name
  metric: string;         // "301K", "Viral"
  metricLabel: string;    // Badge label
  videoUrl: string;       // YouTube Shorts URL or local MP4
}
```

**Benefits** (6 items): Icon + title pairs

**FAQs** (7 items): Question/answer pairs using native `<details>`

---

## Components Deep Dive

### ClipCard (`src/components/ClipCard.tsx`)
- **Hover preview**: Auto-plays muted video on hover (MP4) or shows play button (YouTube)
- **Click behavior**: Opens `VideoModal` for full playback
- **Badge system**: Dual badges (creator name + metric)
- **Aspect ratio**: 9:16 (vertical short-form)

### VideoModal (`src/components/VideoModal.tsx`)
- **Radix Dialog** portal with backdrop blur
- **YouTube**: Extracts video ID → embeds via `youtube-nocookie.com` with autoplay
- **Raw MP4**: Native `<video controls autoPlay>`
- **Responsive**: Max-width 350px mobile, md:max-w-md

### TestimonialsSection (`src/components/TestimonialsSection.tsx`)
- **3D carousel**: CSS transform-based (translateX + scale)
- **5 slides** with auto-advance (5s interval)
- **Dot navigation** + click-to-navigate
- **Smooth transitions**: `cubic-bezier(0.4, 0, 0.2, 1)` 650ms

### PayPalButton (`src/components/PayPalButton.tsx`)
- **Lazy SDK load**: Single global promise, loads `paypal.com/sdk/js` with client ID
- **Subscription creation**: `actions.subscription.create({ plan_id })`
- **Webhook payload** on approve:
  ```json
  {
    "subscriptionID": "I-XXXXXX...",
    "planId": "P-2B857842VL922020CNHXHFPY",
    "planName": "Starter Short-form Editing Plan",
    "amount": "$150/month",
    "email": "user@example.com",
    "name": "John Doe",
    "date": "2026-07-21T...",
    "status": "Active"
  }
  ```
- **n8n webhook**: `POST https://n8n.srv1269197.hstgr.cloud/webhook/paypal-hichamclips`
- **Redirect**: `/thank-you` on success

### PayPal Plans (configured in Index.tsx)
| Plan | Plan ID | Price | Delivery | Features |
|------|---------|-------|----------|----------|
| Trial | Direct link | $15 one-time | 24-48h | 1 clip, no commitment |
| Starter | `P-2B857842VL922020CNHXHFPY` | $150/mo | 48-72h | 1 active, unlimited, pause |
| Pro | `P-4HA70235CK889102BNHXGEKQ` | $300/mo | 24-48h | 1 active, unlimited, pause |

---

## Routing & Navigation

**Routes** (`src/App.tsx`):
- `/` → `Index` (landing page)
- `/thank-you` → `ThankYou` (post-payment)
- `*` → `NotFound` (404 with console error logging)

**Navigation**: Anchor links to sections (`#pricing`, `#work`, etc.) with smooth scroll via `html { scroll-behavior: smooth }`

---

## Payment Flow

```
User clicks Subscribe (PayPalButton)
    ↓
PayPal SDK loads → Subscription UI renders
    ↓
User approves on PayPal
    ↓
onApprove callback fires
    ↓
1. POST to n8n webhook (subscription data)
2. window.location.href = "/thank-you"
    ↓
ThankYou page: Confirmation + Discord join + Next steps
```

**n8n Workflow** (`paypal_wf.json`):
- Webhook receives payload
- Appends to Google Sheets (ID: `1k-KOOcdV2MB_L1Jjsft96LoYtaXExDIt_LJpQdC0nio`)
- Sends Discord notification (configured in n8n)

---

## Creator Profiles (Marketing Assets)

**8 creators** in `src/assets/creators/` with profile images and metadata in `creator_info.txt`:

| # | Name | Platform | Handle | Notable |
|---|------|----------|--------|---------|
| 1 | AlarmingAmber | TikTok | @alarmingamber | 1M followers |
| 2 | PERF | YouTube | @PERF88 | DMZ/ARC Raiders |
| 3 | HitboTC | YouTube | @HitboTC | Sea of Thieves |
| 4 | MyelinGames | YouTube | @MyelinGames | Aussie humor |
| 5 | sacred_toao | Twitch | sacred_toao | Daily 9PM UK |
| 6 | GirlyBella | Twitch | girlybella | Competitive |
| 7 | SnowyFPS | Twitch | snowyfps | Just Chilling |
| 8 | ChikenAU | Twitch | chikenau | FPS Wizard |

---

## Configuration Files

### `vite.config.ts`
- Port 8080, host `::` (all interfaces)
- `@` alias → `./src`
- Dedupe: React, React Query, React DOM
- `lovable-tagger` in dev (component tagging)

### `tailwind.config.ts`
- Dark mode: `class` strategy
- Content paths: `./src/**/*.{ts,tsx}` + pages/components/app
- CSS variables enabled, baseColor: slate
- Plugin: `tailwindcss-animate`

### `tsconfig.json` (project references)
- References: `tsconfig.app.json`, `tsconfig.node.json`
- Paths: `@/*` → `./src/*`
- Relaxed checks (noImplicitAny: false, strictNullChecks: false)

### `vercel.json`
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
SPA fallback for client-side routing.

### `components.json` (shadcn/ui)
- Style: default, TSX, CSS variables
- Aliases configured for `@/components`, `@/lib/utils`, `@/components/ui`, `@/hooks`

---

## Scripts (package.json)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server (port 8080) |
| `npm run build` | Production build |
| `npm run build:dev` | Development mode build |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build |
| `npm run test` | Run Vitest once |
| `npm run test:watch` | Vitest watch mode |

---

## Deployment

**Platform**: Vercel
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites via `vercel.json`
- Analytics: `@vercel/analytics/react` (auto-enabled)

**Assets in `dist/`**:
- `index.html` (entry)
- `assets/index-[hash].js` (bundled JS)
- `assets/index-[hash].css` (bundled CSS)
- `logo.png`, `favicon.png`, `editor-image.png`
- `videos/d-lou-clip.mp4` (local video asset)

---

## Key Implementation Details

### Toast System
Two implementations coexist:
1. **Custom** (`use-toast.ts`) — shadcn pattern, reducer-based, single toast limit
2. **Sonner** (`sonner.tsx`) — wrapped with `next-themes` for dark mode sync

### Responsive Breakpoints
- Mobile-first: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1400px`
- Container max-width: 1400px (2xl)

### Accessibility
- Semantic HTML (`<nav>`, `<section>`, `<details>`)
- Focus rings (`ring-1 ring-primary/30`)
- ARIA labels on icon buttons
- `sr-only` for close button text
- Reduced motion via `prefers-reduced-motion` (Tailwind default)

### Performance
- Lazy image loading (`loading="lazy"`)
- Video preload: `poster` attribute for MP4 clips
- YouTube embeds via `youtube-nocookie.com` (privacy)
- Code splitting via React Router (route-level)

---

## Environment & Secrets

**PayPal Client ID** (in `PayPalButton.tsx`):
```
AYzmQMN-n1eeYlCCI_Efimk9Ti6UE8APgKZ67MmpBTo6vjG80glMRdW6MjxLiqNE7F1ZJ0qwiZROLGBo
```

**n8n Webhook URL** (in `PayPalButton.tsx`):
```
https://n8n.srv1269197.hstgr.cloud/webhook/paypal-hichamclips
```

**Discord Invite**: `https://discord.gg/NZe7EznF5M`

**Contact Email**: `hichamediting00@gmail.com`

---

## Testing

**Setup** (`src/test/setup.ts`): Testing Library + jest-dom
**Example** (`src/test/example.test.ts`): Basic Vitest config test

Run: `npm run test` or `npm run test:watch`

---

## Future Enhancement Opportunities

1. **CMS Integration** — Move clip data, testimonials, FAQs to headless CMS
2. **A/B Testing** — Hero variants, pricing table layouts
3. **Authentication** — Client portal for subscription management
4. **Webhook Security** — Verify PayPal/n8n signatures
5. **Email Automation** — Post-purchase sequences via Resend/SendGrid
6. **Analytics Events** — Track CTA clicks, scroll depth, pricing interactions
7. **SEO** — Add structured data (JSON-LD) for Product/Service
8. **i18n** — Multi-language support for global creators

---

## Maintenance Notes

- **PayPal Plans**: Update Plan IDs in `Index.tsx` if recreated
- **n8n Workflow**: Keep `paypal_wf.json` synced with n8n instance
- **Creator Assets**: Add new profiles to `src/assets/creators/` + update `creator_info.txt`
- **Dependencies**: Regular `npm audit` + update Radix UI/shadcn components
- **Fonts**: Self-host Space Grotesk/Inter for performance if needed

---

*Documentation generated from source code analysis — July 2026*