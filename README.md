# Saif Ali Bakkar — Portfolio Website

A modern, production-ready React portfolio built with Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design

- **Theme:** Cyberpunk-minimal dark UI with cyan/purple gradient accents
- **Fonts:** Syne (headings) · Outfit (body) · JetBrains Mono (code)
- **Animations:** Framer Motion scroll reveals, typing effect, hover physics
- **Responsive:** Mobile-first, works on all screen sizes

## 🛠 Tech Stack

| Tool | Purpose |
|---|---|
| React 18 + Vite | Framework & build tool |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Icons | Icon library |

## 📁 Project Structure

```
saif-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.jsx        # Animated intro screen
│   │   ├── Navbar.jsx        # Sticky nav with mobile drawer
│   │   ├── Hero.jsx          # Typing animation + CTA
│   │   ├── About.jsx         # Summary + info grid
│   │   ├── Skills.jsx        # Icon grid with progress bars
│   │   ├── Experience.jsx    # Timeline + education
│   │   ├── Projects.jsx      # Project cards with links
│   │   ├── Achievements.jsx  # Achievement stat cards
│   │   ├── Contact.jsx       # Form + social links
│   │   └── Footer.jsx        # Footer with nav + socials
│   ├── hooks/
│   │   ├── useTheme.js       # Dark/light mode (localStorage)
│   │   └── useTypingEffect.js # Typing animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → Runs at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## ☁️ Deploy to Vercel (Free)

```bash
# Option A: Vercel CLI
npm install -g vercel
vercel

# Option B: GitHub → Vercel dashboard
# 1. Push to GitHub
# 2. Import repo at vercel.com
# 3. Set build command: npm run build
# 4. Set output directory: dist
# 5. Deploy ✓
```

## 🎛 Customization

### Update personal info
Edit the data inside each component directly — all content is plain JS objects at the top of each file.

### Change colors
Edit `tailwind.config.js` → `theme.extend.colors.cyber`  
Edit `src/index.css` → `:root` CSS variables

### Add a project
In `Projects.jsx`, add an entry to the `projects` array:
```js
{
  id: '04',
  title: 'Your Project',
  tagline: 'Short description',
  description: 'Longer description...',
  tech: ['React', 'Node.js'],
  accentColor: '#00d4ff',
  features: ['Feature 1', 'Feature 2'],
  github: 'https://github.com/...',
  live: 'https://...',
  featured: true,
}
```

## 📬 Contact Form

The contact form uses a simulated API call. To hook it up to a real backend:

**Option A — EmailJS (free, no backend needed):**
```bash
npm install @emailjs/browser
```
Replace the `handleSubmit` function in `Contact.jsx`.

**Option B — Formspree:**
Change the form action to `https://formspree.io/f/YOUR_FORM_ID` and use a standard POST.

## ✅ Features Checklist

- [x] Animated loading screen
- [x] Sticky navbar with active section tracking
- [x] Mobile hamburger drawer
- [x] Dark / Light mode toggle (persisted)
- [x] Typing animation in Hero
- [x] Scroll-triggered animations (Framer Motion)
- [x] Skills with animated progress bars
- [x] Experience timeline
- [x] Project cards with live + GitHub links
- [x] Achievements grid
- [x] Contact form with validation + success state
- [x] Fully responsive (mobile-first)
- [x] Custom scrollbar
- [x] SEO meta tags

---

Built with ❤️ for Saif Ali Bakkar's job search journey.
