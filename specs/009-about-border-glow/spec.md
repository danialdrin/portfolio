# Feature Specification: BorderGlow Integration for About Cards

**Feature Directory**: `specs/009-about-border-glow`
**Created**: 2026-09-13
**Status**: Draft
**Input**: Add a border glow to the about cards (Education, Leadership, Focus) using React Bits `<BorderGlow />` component.

---

## User Scenarios & Testing

### User Story 1 - React Bits BorderGlow Component Creation (Priority: P1)

As a developer, I want a reusable `<BorderGlow />` React component with corresponding `BorderGlow.css` copied from React Bits so that interactive edge-proximity mesh-gradient glow effects can be wrapped around elements in the application.

**Why this priority**: Required foundation for applying border glows to any card component.

**Independent Test**:
1. Import `BorderGlow` into a component.
2. Render content inside `<BorderGlow>`.
3. Verify cursor proximity to card edges triggers dynamic mesh-gradient border and HSL outer glow effects.

**Acceptance Scenarios**:
1. **Given** `BorderGlow.jsx` and `BorderGlow.css` in `src/components/`, **When** imported and rendered, **Then** mouse/pointer movement calculates edge proximity (`--edge-proximity`) and cursor angle (`--cursor-angle`) on the container style properties.
2. **Given** default or custom props (`glowColor`, `backgroundColor`, `borderRadius`, `glowRadius`, `glowIntensity`, `coneSpread`, `colors`, `fillOpacity`, `animated`), **Then** proper CSS custom properties are calculated dynamically via `buildGlowVars` and `buildGradientVars`.

---

### User Story 2 - Wrap About Section Cards (Education, Leadership, Focus) in BorderGlow (Priority: P2)

As a portfolio visitor exploring the About section, I want the Education, Leadership & Roles, and Focus Areas cards to react dynamically with an edge-proximity border glow when my cursor hovers near their boundaries, making the cards feel interactive and premium.

**Why this priority**: Directly delivers the requested UI enhancement for the About section cards.

**Independent Test**:
1. Scroll down to `#about` section.
2. Move cursor near the edges of the Education, Leadership, or Focus card.
3. Observe multi-color mesh gradient border glow and smooth glow fade-out when moving away.

**Acceptance Scenarios**:
1. **Given** the 3 info cards in `About.jsx` (Education, Leadership, Focus), **When** rendered on screen, **Then** each card is wrapped in a `<BorderGlow>` instance.
2. **Given** dark portfolio theme styling, **When** cards are hovered, **Then** glow colors harmonize with theme accent colors (e.g. purple/pink/cyan gradient colors `['#c084fc', '#f472b6', '#38bdf8']` or theme-matched palette and dark background `#120f17` / `var(--bg-card)`).
3. **Given** mobile or touch viewports, **Then** layout remains fully responsive without breaking grid flow or adding horizontal overflow.

---

## Functional Requirements

- **FR-001**: **Component File Creation** — Create `src/components/BorderGlow.jsx` with the exact component logic supplied in the prompt (handles HSL glow vars, radial gradient mesh placement, ease animations, mouse/pointer tracking).
- **FR-002**: **CSS File Creation** — Create `src/components/BorderGlow.css` with pseudo-element layered styling (`::before` mesh border, `::after` edge fill, `.edge-light` outer glow, `.border-glow-inner` container).
- **FR-003**: **About Cards Integration** — Update `src/components/About.jsx` to wrap the Education, Leadership & Roles, and Focus Areas cards inside `<BorderGlow>` with appropriate props (`borderRadius`, `backgroundColor`, `colors`, `glowColor`).
- **FR-004**: **CSS Layout Harmonization** — Adjust `src/index.css` or `BorderGlow.css` if necessary so `.about-cards-bottom` grid handles outer glow padding cleanly without overflow clipping.
