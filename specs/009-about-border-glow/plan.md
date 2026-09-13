# Implementation Plan: BorderGlow Integration for About Cards

**Feature Directory**: `specs/009-about-border-glow`
**Created**: 2026-09-13
**Status**: Draft

## Tech Stack & Dependencies

- **Framework**: React 18+ (Hooks: `useRef`, `useCallback`, `useEffect`)
- **Styling**: Vanilla CSS with CSS Custom Properties, HSL color space, conic gradients, mask-image, and mix-blend-mode.
- **Dependencies**: Native browser APIs (`requestAnimationFrame`, `getBoundingClientRect`, `onPointerMove`). No external packages required.

## Target Files

- `[NEW] src/components/BorderGlow.jsx`
- `[NEW] src/components/BorderGlow.css`
- `[MODIFY] src/components/About.jsx`
- `[MODIFY] src/index.css`

## Architecture & Design

1. `BorderGlow.jsx`:
   - Accepts props: `children`, `className`, `edgeSensitivity`, `glowColor`, `backgroundColor`, `borderRadius`, `glowRadius`, `glowIntensity`, `coneSpread`, `animated`, `colors`, `fillOpacity`.
   - Attaches `onPointerMove` listener calculating cursor distance to element border and cursor angle relative to center.
   - Sets CSS variables `--edge-proximity` and `--cursor-angle` on the container node dynamically.
2. `BorderGlow.css`:
   - Uses `isolation: isolate` and `position: relative`.
   - Pseudo-element `::before` for conic-masked multi-color mesh gradient border.
   - Pseudo-element `::after` for soft-light background glow near edges.
   - Inner `.edge-light` element for multi-stop `box-shadow` outer aura.
3. `About.jsx`:
   - Imports `BorderGlow` component.
   - Wraps Education, Leadership, and Focus Area cards inside `<BorderGlow>` with customized props matching portfolio aesthetics.
