# Implementation Plan: Hero Upgrades & Uniform 3-Column Glare Projects Grid

**Feature Directory**: `specs/005-hero-and-project-upgrades`
**Created**: 2026-09-13
**Status**: Ready

---

## Technical Approach Summary

1. **React Bits & UI Components Setup**:
   - Create or install required React Bits components:
     - `src/components/GradientWaves.jsx` and `GradientWaves.css` (or install via `npx shadcn@latest add @react-bits/GradientWaves-JS-CSS`)
     - `src/components/SpecularButton.jsx` and `SpecularButton.css` (or install via `npx shadcn@latest add @react-bits/SpecularButton-JS-CSS`)
     - `src/components/Dock.jsx` and `Dock.css` (or install via `npx shadcn@latest add @react-bits/Dock-JS-CSS`)
     - `src/components/GlareHover.jsx` and `GlareHover.css` (using provided source code)

2. **Hero Section Modifications (`Home.jsx` & `Navbar.jsx`)**:
   - Remove "Available for Internship & Full-time" badge item.
   - Update `.hero-image-frame` to remove default background and apply bottom gradient blur mask/overlay.
   - Integrate `<GradientWaves />` canvas into the background.
   - Update "Let's talk" CTA button to use `<SpecularButton />`.
   - Update `.hero-social-group` to render `<Dock />` with social media items.

3. **Projects Section Grid & Glare Hover (`Projects.jsx` & `index.css`)**:
   - Update `.projects-grid` to `grid-template-columns: repeat(3, 1fr);` with uniform card layout across desktop viewports.
   - Wrap each project card inside `<GlareHover />` with configured glare color, opacity, and transition duration.

4. **Verification**:
   - Test build with `npm run build`.
   - Perform Playwright automated testing across desktop and mobile viewports.
