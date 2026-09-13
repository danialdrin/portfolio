# Research & Architectural Decisions

## Technical Context Analysis

### 1. Application Architecture & Routing
- **Framework**: React 19 + Vite 6 Single Page Application (SPA).
- **Structure**: Single indexable landing page with anchor sections (`#home`, `#projects`, `#about`, `#experience`, `#skills`, `#achievements`, `#contact`).
- **Decision**: Optimize the static HTML metadata in `index.html` as the primary entry point, enhanced by dynamic React structured data if needed. Use canonical URL `https://danialdrin.github.io/portfolio/` as the default production target with explicit fallback configuration.

### 2. Image Payload Optimization
- **Current State**: Heavy PNG files (`college-rework.png`: 2.3MB, `fakeurldetector.png`: 1.0MB, `picturegallery.png`: 1.0MB, `stopwatch.png`: 778KB, `profile.png`: 551KB). Total image payload > 6.5MB.
- **Decision**: Convert all project and profile images to lossy/near-lossless WebP using Python Pillow library (`PIL`), target quality 82-88%. Update `projects.json` and `Hero.jsx`/`About.jsx` to use `.webp`.
- **Expected Outcome**: Total image payload reduced by ~85% (from 6.5MB to < 900KB).

### 3. Core Web Vitals Optimization
- **LCP (Largest Contentful Paint)**: Hero profile image is the primary visual element above the fold.
  - Decision: Add `<link rel="preload" as="image" href="assets/profile.webp" type="image/webp" fetchpriority="high">` in `<head>` and `fetchpriority="high"` on `<img>`.
- **CLS (Cumulative Layout Shift)**: Unsized images can cause layout reflows during image loading.
  - Decision: Specify explicit `width`, `height`, and `aspect-ratio` on hero and project image containers. Ensure `display: swap` on Google Fonts links (`Inter`, `Outfit`).
- **INP / Bundle Size (Interaction to Next Paint)**: Single 517KB JavaScript chunk contains React, Framer-Motion, GSAP, Three.js, and OGL.
  - Decision: Configure `vite.config.js` `rollupOptions.output.manualChunks` to split heavy 3D/animation libraries (`three`, `ogl`, `gsap`, `framer-motion`) into separate cached vendor chunks.

### 4. Structured Data (JSON-LD)
- **Decision**: Embed Google-compliant Schema.org JSON-LD scripts for:
  - `Person`: Dani Aldrin (UI/UX Designer & Frontend Developer, RMKCET student, social links, location).
  - `WebSite`: Dani Aldrin Developer Portfolio.
  - `ProfilePage`: Main entity pointing to `Person`.
  - `ItemList` / `CreativeWork`: Featured full-stack projects.

### 5. Semantic HTML & Heading Hierarchy
- **Heading Inspection**:
  - `h1`: Single `h1` in `Hero.jsx` (`Dani Aldrin`).
  - `h2`: Section titles in `Projects`, `About`, `Experience`, `Skills`, `Achievements`, `Contact`.
  - `h3`: Subsections & card titles in `Projects`, `Experience`, `Skills`, `Achievements`.
  - `h4`: In `About.jsx` (Education, Leadership, Focus Areas).
  - Decision: Refactor `About.jsx` `<h4>` tags to `<h3>` to ensure clean `h1` -> `h2` -> `h3` hierarchy without skipped heading levels.
