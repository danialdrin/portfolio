# Implementation Plan: Full-Width Layout & Remove Side Gaps

**Feature Directory**: `specs/004-remove-side-gaps`
**Created**: 2026-09-13
**Status**: Ready

---

## Technical Approach Summary

1. **CSS Variable & Global Layout Update (`src/index.css`)**:
   - Update `--container-max` from fixed `1240px` to a fluid max width (e.g. `100%` or max boundary like `1760px`) with dynamic relative inline padding `padding: 0 clamp(1.5rem, 5vw, 4rem)`.
   - Update `.nav-container` to span full width with matching fluid inline padding.
   - Update main grid containers (Hero grid, Projects grid, Skills grid, Experience timeline) to comfortably fill the expanded width while maintaining content hierarchy and legibility.

2. **Component Alignment**:
   - Verify `Navbar.jsx`, `Home.jsx` (Hero), `Projects.jsx`, `About.jsx`, `Experience.jsx`, `Skills.jsx`, `Achievements.jsx`, `Contact.jsx`, and `Footer.jsx` expand seamlessly edge-to-edge.

3. **Verification**:
   - Test build with `npm run build`.
   - Execute Playwright responsiveness & scroll overflow checks across 375px, 768px, 1440px, 1920px viewports.

---

## File Changes Plan

- `[MODIFY]` [src/index.css](file:///media/SharedMemory/project/gtihub%20project/portfolio/src/index.css) — Update `--container-max`, `.container`, `.nav-container`, and grid container rules to expand full-width with fluid edge padding.
