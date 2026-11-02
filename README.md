# Sajin — Frontend Engineer Portfolio

> High-performance, responsive, and aesthetic portfolio website showcasing 3+ years of production engineering in React, Next.js, and modern web interfaces.

---

## ⚡ Overview

A bespoke digital portfolio crafted with a **Neo-Brutalist & Cyberpunk HUD Terminal** design language. Engineered from scratch with the latest modern web primitives for fluid 60fps animations, accessible micro-interactions, and instant page transitions.

* **Live URL**: [sajin-portfolio.vercel.app](https://sajin-portfolio.vercel.app) *(or your deployed domain)*
* **Developer**: Sajin ([GitHub](https://github.com/saju2468) · [LinkedIn](https://linkedin.com/in/sajinpp77))
* **Email**: [sajinpp77@gmail.com](mailto:sajinpp77@gmail.com)

---

## 🛠️ Tech Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Library**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme inline` design tokens
* **Animations**: [Framer Motion 12](https://www.framer.com/motion/) (Spring physics, dynamic magnetic pull, hover magnification)
* **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/) (Momentum-based virtual scroll)
* **Theming**: [next-themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode via CSS data-theme attributes)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Type Safety**: [TypeScript 5](https://www.typescriptlang.org/)

---

## ✨ Features & Micro-Interactions

* **Terminal Boot Preloader**: Simulated system initialization handshake with dynamic binary stream and progress metrics.
* **Letter Magnification**: Interactive letter-by-letter hover magnification on headline typography.
* **Magnetic Cursor & Interactions**: Custom multi-state cursor (`default`, `hover`, `magnify`) with spring physics and full `prefers-reduced-motion` a11y support.
* **Floating Project Cards**: Mouse-following live preview cards on hover in the Featured Projects section.
* **Capabilities Bento Grid**: Interactive architecture snippet, circular SVG Lighthouse gauges, infinite tech stack marquee, and 3D layered CSS cards.
* **Live Contact Uplink**: Validated contact form connected to Next.js Route Handler (`/api/contact`) with Resend and Webhook integrations.
* **Complete Projects Archive**: Dedicated showcase (`/projects`) detailing 16 real-world commercial client builds across FinTech, Healthcare, E-Commerce, and Luxury brands.
* **Retro CRT & Grid Filter**: Subtle CRT scanlines with RGB subpixel simulation and interactive dot grid background.

---

## 📁 Project Architecture

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Secure route handler for contact form transmissions
│   ├── projects/
│   │   ├── layout.tsx           # Route-specific OpenGraph & SEO metadata
│   │   └── page.tsx             # 16-project interactive commercial archive
│   ├── favicon.ico
│   ├── globals.css              # CRT filters, CSS variables, scanlines, animations
│   ├── layout.tsx               # Root layout, Google fonts, theme provider, Lenis
│   └── page.tsx                 # Main single-page portfolio view
├── components/
│   ├── Button.tsx               # Magnetic button with radial gradient reveal
│   ├── Capabilities.tsx         # Bento grid with Lighthouse metrics & tool marquee
│   ├── Contact.tsx              # Interactive contact terminal with spotlight effect
│   ├── CustomCursor.tsx         # Multi-state physics cursor with a11y fallback
│   ├── FadeIn.tsx               # Viewport scroll trigger animations
│   ├── Footer.tsx               # Real-time telemetry, load timer, and coordinates
│   ├── Header.tsx               # Navigation, theme toggle, and mobile menu drawer
│   ├── Hero.tsx                 # Live photo feed, real-time clock, magnify text
│   ├── Magnetic.tsx             # Spring physics wrapper for magnetic interactions
│   ├── Preloader.tsx            # Sci-Fi boot sequence with binary telemetry
│   ├── SmoothScroll.tsx         # Lenis smooth scroll provider
│   ├── ThemeProvider.tsx        # Next-themes wrapper
│   └── Work.tsx                 # Featured projects with floating thumbnail preview
├── public/
│   ├── assets/                  # High-resolution client project showcases
│   └── sajin.jpg                # Profile portrait
├── .env.example                 # Environment variables reference
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (version 18.18.0 or later)
* npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://gitlab.com/saju2468/portfolio_sajin.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install
```

### Environment Configuration

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure your contact form delivery (optional):

```env
# Optional: Resend API Key for automatic email notifications
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=sajinpp77@gmail.com

# Optional: Discord or Slack Webhook URL
CONTACT_WEBHOOK_URL=
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### Building for Production

```bash
# Type check & build
npm run build

# Start production server
npm run start
```

---

## 📄 License

Created by **Sajin**. All rights reserved.
