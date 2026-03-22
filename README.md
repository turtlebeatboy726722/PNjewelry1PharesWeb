# P&N Jewelry — OEM Jewelry Manufacturer Website

A production-ready Next.js 14 website for **P&N Jewelry Limited Partnership**, an OEM jewelry manufacturer in Bangkok, Thailand.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (zero-config)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## Project Structure

```
pn-jewelry/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer)
│   ├── globals.css             # Global styles + CSS variables
│   ├── page.tsx                # Homepage (/)
│   ├── about/
│   │   └── page.tsx            # About page (/about)
│   ├── services/
│   │   └── page.tsx            # Services page (/services)
│   ├── products/
│   │   ├── page.tsx            # Products landing (/products)
│   │   ├── rings/page.tsx      # Rings (/products/rings)
│   │   ├── necklaces/page.tsx  # Necklaces (/products/necklaces)
│   │   └── bracelets/page.tsx  # Bracelets (/products/bracelets)
│   ├── why-us/
│   │   └── page.tsx            # Why Choose Us (/why-us)
│   ├── contact/
│   │   └── page.tsx            # Contact page (/contact)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API
│   └── not-found.tsx           # 404 page
│
├── components/
│   ├── Navbar.tsx              # Responsive navigation
│   ├── Footer.tsx              # Site footer
│   ├── SafeImage.tsx           # Image with fallback (no broken images)
│   ├── RevealOnScroll.tsx      # Scroll animation wrapper
│   ├── PageHero.tsx            # Reusable page hero
│   ├── ProductGrid.tsx         # Product image grid
│   └── ContactForm.tsx         # Contact form (API + mailto fallback)
│
├── public/
│   └── images/
│       ├── hero/
│       │   └── hero-bg.jpg
│       ├── factory/
│       │   ├── production/     # production-1.jpg to production-3.jpg
│       │   ├── polishing/      # polishing-1.jpg to polishing-3.jpg
│       │   └── setting/        # setting-1.jpg to setting-3.jpg
│       └── products/
│           ├── rings/          # ring-1.jpg to ring-9.jpg
│           ├── necklaces/      # necklace-1.jpg to necklace-9.jpg
│           └── bracelets/      # bracelet-1.jpg to bracelet-9.jpg
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, about preview, services, products, factory, why us, CTA |
| `/about` | Company story, values, timeline |
| `/services` | Full OEM process + factory sections |
| `/products` | Product category landing |
| `/products/rings` | Rings grid (9 items) |
| `/products/necklaces` | Necklaces grid (9 items) |
| `/products/bracelets` | Bracelets grid (9 items) |
| `/why-us` | Advantages, process, stats |
| `/contact` | Contact form + info |

---

## Adding Real Images

Replace the placeholder files in `public/images/` with your actual product and factory photos:

```
public/images/hero/hero-bg.jpg          ← Hero background (1920×1080)
public/images/factory/production/*.jpg  ← Factory floor photos
public/images/factory/polishing/*.jpg   ← Polishing workshop photos
public/images/factory/setting/*.jpg     ← Stone setting photos
public/images/products/rings/*.jpg      ← Ring product photos (square)
public/images/products/necklaces/*.jpg  ← Necklace product photos (square)
public/images/products/bracelets/*.jpg  ← Bracelet product photos (square)
```

**Recommended sizes:**
- Hero: 1920×1080px
- Factory: 1200×900px (4:3 ratio)
- Products: 800×800px (square)

---

## Contact Form Email Setup

The contact form works immediately (with mailto fallback). To enable real email sending:

1. Copy `.env.local` and fill in your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
```

2. For Gmail: use an [App Password](https://support.google.com/accounts/answer/185833)

3. Add these environment variables in your Vercel dashboard under **Settings → Environment Variables**

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deploys
```

---

## Contact

- **Email**: sale@pnjewelrymfg.com
- **WhatsApp 1**: https://wa.me/66617898877
- **WhatsApp 2**: https://wa.me/66844598284
