# Implementation Plan - Portfolio Technical SEO, Performance & Technical Optimization

## User Review Required
> [!IMPORTANT]
> - **Production Domain Assumption**: Canonical URLs, Open Graph image URLs, and Sitemap directives use `https://danialdrin.github.io/portfolio/` based on the repository name (`danialdrin/portfolio`). If using a custom domain (e.g. `https://danialdrin.dev`), the user can update the single canonical domain setting in `index.html` and `public/sitemap.xml`.
> - **Zero Design Compromises**: All animations, gradient waves, cards, typography, colors, and layout aesthetics are preserved 100%.

## Proposed Changes

### 1. Indexing & SEO Metadata Architecture (`index.html`)
- Add canonical link `<link rel="canonical" href="https://danialdrin.github.io/portfolio/" />`.
- Complete Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`, `og:locale`.
- Complete Twitter card tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
- Add Schema.org JSON-LD structured data (`Person`, `WebSite`, `ProfilePage`).
- Add image preloading for Largest Contentful Paint (`assets/profile.webp`).

### 2. Static SEO & Crawlability Assets (`public/`)
- Create `public/sitemap.xml` with canonical production URLs, priority, and changefreq.
- Create `public/robots.txt` allowing search engine crawling and referencing `sitemap.xml`.

### 3. Image Optimization & Assets Pipeline (`assets/` & `data/projects.json`)
- Convert all raster images (`profile.png`, `college-rework.png`, `fakeurldetector.png`, `picturegallery.png`, `stopwatch.png`, `hiresync.png`, `fintech.jpeg`, etc.) to optimized WebP format.
- Update `data/projects.json` to point to `.webp` assets.
- Update `Hero.jsx` and `About.jsx` to load `assets/profile.webp` with `width`, `height`, and `fetchpriority="high"`.

### 4. Semantic HTML & Accessibility (`src/components/`)
- Refactor `About.jsx`: Change card headings from `<h4>` to `<h3>` under `<h2>`.
- Refactor `Projects.jsx`: Add descriptive `alt` tags and link `aria-label` attributes.
- Refactor `Hero.jsx`, `Contact.jsx`, `Navbar.jsx`, `Footer.jsx`: Enhance accessible names, touch targets, and ARIA labels.

### 5. Performance & Build Bundling (`vite.config.js` & `src/index.css`)
- Configure `vite.config.js` with Rollup `manualChunks` to split `three`, `ogl`, `gsap`, and `framer-motion` into cached vendor chunks.
- Add CSS `prefers-reduced-motion` media queries in `src/index.css` for heavy continuous animations.

### 6. Documentation Deliverables
- `BACKLINK_STRATEGY.md`: Actionable organic backlink guide for developer communities, GitHub, LinkedIn, college portals, and tech blogs.
- `SEO_IMPLEMENTATION_REPORT.md`: Exhaustive report detailing completed agent work, user manual steps, decision points, and validation metrics.

## Verification Plan

### Automated Tests & Build Check
```bash
python3 -c "import PIL; print('Pillow ready')"
npm run build
```
Verify:
1. WebP images generated and referenced cleanly.
2. Build completes with no warnings or errors.
3. Bundle size split into small chunks.
4. Sitemap and robots.txt exported to `dist/`.
