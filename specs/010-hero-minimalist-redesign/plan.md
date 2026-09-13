# Implementation Plan: Minimalist Hero Section Redesign

**Feature Directory**: `specs/010-hero-minimalist-redesign`
**Created**: 2026-09-13
**Status**: Draft

## Tech Stack & Dependencies

- **Framework**: React 18+
- **Components**: `TextType.jsx`
- **Styling**: Vanilla CSS in `src/index.css` (Typography: Inter/System font stack, `clamp()` responsive scaling, solid `#ffffff` color).

## Target Files

- `[MODIFY] src/components/Hero.jsx`
- `[MODIFY] src/index.css`

## Architecture & Design

1. `Hero.jsx`:
   - Simplify JSX tree under `.hero-content`.
   - Top tag: `HELLO, I'M`.
   - Main title `<h1>`: `Dani Aldrin` in solid white (`#ffffff`).
   - Roles container: `TextType` component with animated roles array.
2. `index.css`:
   - Add `.hero-name-giant` style with `font-size: clamp(3.5rem, 8vw, 6rem)`, `color: #ffffff`, `letter-spacing: -0.03em`, `line-height: 1.05`.
   - Update `.hero-content` spacing for clean vertical layout.
