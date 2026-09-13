# Research & Technical Architecture: Portfolio Redesign

## 1. Design Direction & Visual System

- **Aesthetic Persona**: Warm human editorial meets modern digital engineering. Moving away from generic dark cyan/pink neon gradients to a refined dark warm canvas:
  - **Background**: `#0c0d0e` (rich dark canvas) / `#141518` (card surface) / `#1e2024` (subtle border/hover surface).
  - **Accents**: Warm amber tone (`#f59e0b`), warm cream (`#f3f4f6`), subtle emerald highlight (`#10b981`).
  - **Typography**: `Outfit` / `Inter` for crisp body structure, paired with `Newsreader` / `Playfair Display` or `Outfit` display typography for human editorial warmth.
  - **Texture & Spacing**: Generous section padding (`clamp(4rem, 8vw, 8rem)`), subtle borders (`1px solid rgba(255,255,255,0.08)`), micro-shadows, and zero heavy glow or floating 3D blobs.

- **Design References**:
  - Emil Kowalski's tactile UI details: subtle hover lifts, fast responsive springs (180ms ease-out), micro-interactions on links/buttons.
  - Apple design principles: physical-feeling transitions, fluid responsive grid adaptivity, focus states, reduced-motion accessibility.

---

## 2. Technical Stack & Dependencies Audit

- **Core Architecture**:
  - Vanilla HTML5 + Vanilla CSS3 (CSS Variables, Grid, Flexbox, Container Queries) + Modular Vanilla JavaScript (ES6+).
  - **Zero Build Step**: Native ES Modules / Vanilla JS script execution so the site runs instantly via any static web server (`python3 -m http.server`).

- **Dependency Optimization**:
  - **Remove**: AOS library (replaced with lightweight `IntersectionObserver` in ~25 lines of CSS + JS).
  - **Remove**: Heavy GSAP loader overlays (replaced with clean immediate rendering or subtle initial reveal).
  - **Remove**: Font Awesome CDN (replaced with clean inline SVG icons / Feather/Lucide SVG icons for zero external rendering delay).
  - **Retain**: Google Fonts (`Inter` + `Outfit`) loaded with `font-display: swap` and preconnect.

---

## 3. Data Model & Architecture Decisions

- **Single Source of Truth**:
  - Retain and expand `data/projects.json`, `data/experience.json`, `data/skills.json`, `data/achievements.json`.
  - Add InternArea & SkillPassport projects into `data/projects.json` with local fallback image references.
  - Archive/remove unused root `data.json`.
  - Add safe HTML rendering (DOM nodes or HTML escaping helper `escapeHtml()`).

---

## 4. Motion & Micro-Interactions Strategy

- **Core Curve**: `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Emil spring curve).
- **Duration**: 180ms - 250ms for UI controls; 350ms for section reveals.
- **Interactions**:
  - Hero Profile Card: Subtle 3D tilt or smooth scale on hover.
  - Project Cards: Smooth image transform (`scale(1.025)`), badge reveal, line arrow move (`translateX(4px)`).
  - Navigation: Active scroll marker slide, responsive mobile sheet transition.
  - Accessibility: Full `@media (prefers-reduced-motion: reduce)` support that disables movement while preserving fade transitions.
