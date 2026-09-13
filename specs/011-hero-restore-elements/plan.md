# Implementation Plan: Hero Section Layout Restoration & Giant White Name Integration

**Feature Directory**: `specs/011-hero-restore-elements`
**Created**: 2026-09-13
**Status**: Draft

## Tech Stack & Dependencies

- **Framework**: React 18+
- **Components**: `TextType.jsx`, `SpecularButton.jsx`
- **Styling**: Vanilla CSS in `src/index.css` & `src/components/SpecularButton.css`

## Target Files

- `[MODIFY] src/components/Hero.jsx`
- `[MODIFY] src/index.css`

## Architecture & Design

1. `Hero.jsx`:
   - Keep top tag: `HELLO, I'M`.
   - Keep giant white name title: `<h1 className="hero-name-giant">Dani Aldrin</h1>`.
   - Keep dynamic roles line: `<TextType text={roles} ... />`.
   - Restore bio paragraph `<p className="hero-bio">`.
   - Restore location badge `<div className="hero-meta">`.
   - Restore CTA group `<div className="hero-cta-group">` with `SpecularButton` instances.
   - Restore social links group `<div className="hero-social-group">` with SVG links.
2. `index.css`:
   - Adjust `.hero-name-giant` margin-bottom to fit cleanly with restored bio & CTA elements.
