# Implementation Plan: Dani Aldrin Portfolio Redesign

**Feature**: `002-portfolio-redesign`
**Branch**: `main`
**Created**: 2026-09-13
**Spec File**: [spec.md](file:///media/SharedMemory/project/gtihub%20project/portfolio/specs/002-portfolio-redesign/spec.md)

---

## Technical Context

- **Stack**: HTML5, CSS3 (Vanilla CSS with design tokens), ES6+ JavaScript.
- **Data Layer**: Parallel `fetch()` for `data/projects.json`, `data/experience.json`, `data/skills.json`, `data/achievements.json`.
- **Iconography & Assets**: Clean SVG inline icons, Google Fonts (`Outfit` & `Inter`), local image assets (`assets/profile.png`, `assets/projects/*`).
- **Dependencies Removed**: AOS CSS/JS, GSAP CDN loader, Ionicons CDN, Font Awesome CDN.
- **Browser Targets**: Chrome, Firefox, Safari, Edge (Desktop & Mobile).

---

## Architecture & File Structure

```text
portfolio/
├── index.html                   # Clean semantic HTML5 layout & section structures
├── css/
│   └── styles.css               # Complete design system tokens, typography, grid, responsive rules
├── js/
│   └── main.js                  # Modular data fetching, DOM rendering, scroll observer, mobile menu
├── data/
│   ├── projects.json            # 14 complete project records (12 existing + InternArea + SkillPassport)
│   ├── experience.json          # Experience records
│   ├── skills.json              # Categorized skills (no fake percentages)
│   └── achievements.json        # Achievements records
├── assets/
│   ├── favicon.svg              # SVG favicon
│   ├── profile.png              # Profile image
│   └── projects/                # Project preview images
└── specs/
    └── 002-portfolio-redesign/  # Spec, research, data model, contracts, quickstart, plan, tasks
```

---

## Key Design Principles & Rules

1. **Human & Editorial**: Typography scale with generous whitespace, authentic bio statements, warm dark palette.
2. **Tactile Micro-Interactions**: Smooth 180ms cubic-bezier transitions on hover, focus, and button taps.
3. **No Design Clichés**: No particle backgrounds, no neon glow, no fake skill percentages, no giant gradient blobs.
4. **Data Integrity**: All real project links, GitHub repos, experience descriptions, and education metrics preserved.
5. **Accessibility & Security**: Visible focus outlines, screen-reader aria attributes, `rel="noopener noreferrer"` on all external links, escaping dynamic JSON rendering.
