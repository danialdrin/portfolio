# Quickstart & Verification Guide

## Prerequisites
- Node.js & npm environment
- Python 3 with Pillow (`PIL`) library

## Automated Verification Steps

1. **Build Validation**:
   ```bash
   npm run build
   ```
   *Expected Outcome*: Successful build with zero errors and optimized chunk sizes under 500kB.

2. **Sitemap & Robots Validation**:
   ```bash
   cat dist/sitemap.xml
   cat dist/robots.txt
   ```
   *Expected Outcome*: Valid XML sitemap referencing `https://danialdrin.github.io/portfolio/sitemap.xml` and `robots.txt` allowing `/`.

3. **HTML & Metadata Verification**:
   Check `dist/index.html` for:
   - Canonical URL tag
   - Open Graph (`og:title`, `og:description`, `og:image`, `og:url`)
   - Twitter Card tags
   - JSON-LD `<script type="application/ld+json">`
   - Hero image preload link `<link rel="preload" ...>`

4. **Image Format & Compression Audit**:
   Verify WebP images in `assets/projects/` and `assets/profile.webp`.

5. **Heading Hierarchy Verification**:
   Verify exactly one `<h1>` in `Hero.jsx` and valid nested `<h2>` and `<h3>` tags across all sections.

6. **Mobile Responsiveness Verification**:
   Test breakpoints (320px, 375px, 390px, 414px, 768px, 1024px, 1280px) ensuring no horizontal scroll or overflow.
