# ITZFIZZ — Scroll-Driven Hero Animation

A high-performance, cinematic frontend application built for the **Itzfizz Digital Web Development Internship Evaluation Assignment**.

This project showcases a custom-engineered **Scroll-Driven Vehicle Hero Animation** where a vector hypercar transforms, tilts, scales, and glides horizontally in sync with user scroll progress via **GSAP ScrollTrigger**.

---

## 🌟 Key Features

- 🏎️ **Scroll-Driven Animation**: The central visual reacts directly to scroll progress (`scrub: 1`). No autoplay or fixed timers.
- ⚡ **GSAP & ScrollTrigger Integration**: Seamless pinning (`pin: true`) of the hero section for a 2500px scroll runway.
- 📊 **Staggered Animated Statistics**: Metric counters (`58% Digital Reach`, `23% Faster Delivery`, `27% User Engagement`, `40% Business Growth`) enter with GSAP intro timelines.
- 🎨 **Original Visual Assets**: High-resolution custom SVG hypercar artwork with glowing LED headlights, aerodynamic contours, wheel details, and dynamic speed flares.
- 📱 **Fully Responsive Layout**: Built with Tailwind CSS and `gsap.matchMedia()` ensuring smooth transitions across mobile, tablet, and desktop screens without horizontal overflow.
- ♿ **Accessibility Support**: Built-in `prefers-reduced-motion` detection that gracefully scales down intensive animations for accessibility.
- 🚀 **Production-Ready Stack**: Built on React 18, Vite 6, and Tailwind CSS.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture |
| **Vite 6** | Ultra-fast development server & bundler |
| **JavaScript (ES6+)** | Dynamic logic & state management |
| **Tailwind CSS v3** | Utility-first styling & responsive layouts |
| **GSAP (GreenSock)** | Core motion engine |
| **GSAP ScrollTrigger** | Scroll pinning & scrub timeline synchronization |
| **Lucide React** | Lightweight modern icon set |
| **gh-pages** | GitHub Pages automated deployment |

---

## 📂 Project Structure

```
assignment/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed glassmorphic navigation with mobile menu
│   │   ├── Hero.jsx            # Pinned hero section & GSAP ScrollTrigger scrub timeline
│   │   ├── Stats.jsx           # Animated statistics grid cards
│   │   ├── ScrollVisual.jsx    # Custom vector hypercar SVG artwork
│   │   ├── AboutSection.jsx    # "Building Digital Experiences" 2-column showcase
│   │   ├── ServicesSection.jsx # 4 service cards with ScrollTrigger entrance
│   │   └── Footer.jsx          # Minimal agency footer with back-to-top action
│   ├── hooks/
│   │   └── useScrollAnimation.js # GSAP plugin setup & reduced-motion hook
│   ├── App.jsx                 # Main application layout
│   ├── main.jsx                # React root mount
│   └── index.css               # Tailwind imports, grid textures & glass effects
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone <your-repository-url>
cd assignment
npm install
```

### 2. Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build

Build the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🚢 Deployment to GitHub Pages

This project is pre-configured with `gh-pages` and relative base paths (`base: './'`) in `vite.config.js`.

### Deployment Steps:

1. Update `homepage` in `package.json` with your GitHub username:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```
2. Run the deployment script:
   ```bash
   npm run deploy
   ```

This command will automatically run `npm run build` and publish the output to the `gh-pages` branch.

---

## 🎬 GSAP ScrollTrigger Implementation Details

The scroll-driven timeline is created inside `src/components/Hero.jsx` using `gsap.context()` for React safety and cleanup.

```javascript
// Example sequence from Hero.jsx
const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: pinContainerRef.current,
    start: 'top top',
    end: '+=2500', // Pinned runway length
    scrub: 1,      // 1-second smooth scrubbing inertia
    pin: true,     // Pin hero container during scroll
  }
})

scrollTl
  // Phase 1: Entry & center align
  .to(carRef.current, { x: '0vw', rotation: 2, scale: 1.05, duration: 1 })
  // Phase 2: Fade ambient headline
  .to(headlineRef.current, { opacity: 0.15, y: -30, duration: 0.8 }, '<+=0.2')
  // Phase 3: Accelerate to center-right with pitch tilt
  .to(carRef.current, { x: '22vw', rotation: -3, scale: 1.12, duration: 1.2 })
  // Phase 4: Glide to exit side and level out
  .to(carRef.current, { x: '42vw', rotation: 0, scale: 0.95, duration: 1 })
```

---

## 📋 Evaluation Checklist

- [x] Full-screen hero section (~100vh pinned)
- [x] Large letter-spaced `WELCOME ITZFIZZ` headline with GSAP load animation
- [x] 4 animated statistics cards with staggered entrance
- [x] Original vector hypercar visual (no copied assets)
- [x] Scroll-driven movement connected directly to user scroll (using `scrub`)
- [x] Responsive design using Tailwind CSS & `gsap.matchMedia`
- [x] Additional content sections ("Building Digital Experiences" & Core Services)
- [x] GitHub Pages deployment configuration
- [x] Zero console warnings or memory leaks

---

## 👤 Author & Assignment Context

Developed as an evaluation assignment for the **Web Development Internship at Itzfizz Digital**.
Inspired by the interaction concepts of modern digital agencies.
