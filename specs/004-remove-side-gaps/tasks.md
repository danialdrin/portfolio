# Tasks: Full-Width Layout & Remove Side Gaps

**Feature Directory**: `specs/004-remove-side-gaps`
**Created**: 2026-09-13
**Status**: Ready

---

## Tasks

- [ ] **Task 1: Update CSS Container Variables and Layout Structure (`src/index.css`)**
  - Update `--container-max` to `100%` (or fluid boundary `1760px`) with relative dynamic side padding `clamp(1.5rem, 5vw, 4rem)`.
  - Update `.container` and `.nav-container` to expand full-width across desktop viewports.

- [ ] **Task 2: Refine Section Grids & Content Max-Widths (`src/index.css`)**
  - Update Hero grid (`.hero-container` / `.hero-content`) to balance full-width hero photo and content typography.
  - Update `.projects-grid`, `.skills-grid`, and `.experience-timeline` to re-flow cleanly on wider screen real estate.

- [ ] **Task 3: Production Build & Playwright Automated Testing**
  - Execute `npm run build` to verify clean build.
  - Test responsiveness across 375px, 768px, 1440px, 1920px viewports ensuring 0 horizontal scroll overflow.
