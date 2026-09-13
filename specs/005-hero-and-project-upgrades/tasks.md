# Tasks: Hero Upgrades & Uniform 3-Column Glare Projects Grid

**Feature Directory**: `specs/005-hero-and-project-upgrades`
**Created**: 2026-09-13
**Status**: Ready

---

## Tasks

- [ ] **Task 1: Add React Bits UI Components**
  - Add `src/components/GlareHover.jsx` and `src/components/GlareHover.css` using provided component source.
  - Install/Add `GradientWaves`, `SpecularButton`, and `Dock` components.

- [ ] **Task 2: Hero Section Refinements (`Home.jsx` & `index.css`)**
  - Remove "Available for Internship & Full-time" meta item from `Home.jsx`.
  - Add bottom gradient blur overlay to `.hero-image-frame`.
  - Add `<GradientWaves />` ambient background.
  - Apply `<SpecularButton />` to "Let's talk" CTA button.
  - Replace social links group with interactive `<Dock />` component.

- [ ] **Task 3: Projects Grid Uniformity & GlareHover Integration (`Projects.jsx` & `index.css`)**
  - Change `.projects-grid` layout to uniform 3-column grid (`repeat(3, 1fr)`).
  - Wrap project cards in `<GlareHover />` component.

- [ ] **Task 4: Build Verification & Playwright Automated Audit**
  - Run `npm run build` to ensure clean build.
  - Run Playwright test script to verify rendering and 0 horizontal scroll overflow.
