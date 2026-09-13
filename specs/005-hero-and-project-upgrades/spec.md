# Feature Specification: Hero Enhancements & Projects Grid Uniformity with React Bits

**Feature Directory**: `specs/005-hero-and-project-upgrades`
**Created**: 2026-09-13
**Status**: Draft
**Input**: User 7-point request: Remove availability text, Hero background blur effect, GradientWaves ambient background, SpecularButton for Let's Talk CTA, Dock component for Hero social icons, 3-card uniform project rows, and GlareHover card effect.

---

## User Scenarios & Testing

### User Story 1 - Hero Section Visual & Interactive Refinements (Priority: P1)

As a portfolio visitor, I want a sleek, modern Hero section without redundant text, featuring a seamless portrait card with a bottom gradient blur fade, interactive Dock component for social media links, and a SpecularButton "Let's Talk" CTA, set against an ambient GradientWaves background.

**Acceptance Scenarios**:
1. **Given** the Hero section, **When** rendered, **Then** "Available for Internship & Full-time" meta text is removed.
2. **Given** the Hero portrait image, **When** displayed, **Then** its container background is clean with a smooth gradient blur fade at the bottom.
3. **Given** the Hero CTA button ("Let's talk"), **When** rendered, **Then** it utilizes the `SpecularButton` component with interactive hover & proximity effects.
4. **Given** the Hero social group, **When** rendered, **Then** it displays an interactive React Bits `Dock` component holding social icons.
5. **Given** the overall portfolio background, **When** viewed, **Then** the ambient `GradientWaves` canvas renders smoothly in the background.

---

### User Story 2 - Uniform 3-Column Projects Grid with GlareHover Cards (Priority: P1)

As a portfolio visitor, I want the Projects section grid to render uniformly with 3 cards per row across desktop viewports, with each project card enhanced by an interactive `<GlareHover />` lighting effect.

**Acceptance Scenarios**:
1. **Given** the `#projects` grid, **When** rendered on desktop viewports, **Then** all project cards are laid out in a uniform 3-column grid (`grid-template-columns: repeat(3, 1fr)`) with equal aspect ratios and height alignment.
2. **Given** any project card, **When** hovered by a visitor, **Then** a dynamic glare light animation (`<GlareHover />`) sweeps smoothly across the card surface.

---

## Requirements

### Functional Requirements

- **FR-001**: Hero Text Removal — Remove "Available for Internship & Full-time" from `Home.jsx`.
- **FR-002**: Hero Portrait Gradient Blur — Remove background fill and add a bottom gradient blur mask/overlay on `.hero-image-frame`.
- **FR-003**: Ambient GradientWaves Background — Integrate `<GradientWaves />` into the portfolio background layout.
- **FR-004**: SpecularButton "Let's Talk" CTA — Integrate `<SpecularButton />` for the "Let's talk" CTA button.
- **FR-005**: Dock Component in Hero Social Group — Integrate `<Dock />` in the Hero section for social media navigation items.
- **FR-006**: Uniform 3-Column Projects Grid — Update `.projects-grid` in `index.css` / `Projects.jsx` to display 3 uniform cards per row without 2-column hero card spans.
- **FR-007**: GlareHover Project Cards — Wrap each project card in `<GlareHover />` with smooth lighting parameters.
