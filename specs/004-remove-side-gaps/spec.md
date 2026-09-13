# Feature Specification: Full-Width Layout & Remove Side Gaps

**Feature Branch**: `004-remove-side-gaps`
**Created**: 2026-09-13
**Status**: Draft
**Input**: User description: "there is a huge gap in both the side i want it removed completedly"

---

## User Scenarios & Testing

### User Story 1 - Full-Width Edge-to-Edge Layout Experience (Priority: P1)

As a portfolio visitor on any screen size (desktop, ultra-wide monitors, laptop, tablet), I want the portfolio layout (including Navbar, Hero, Projects, About, Experience, Skills, Achievements, Contact, and Footer) to utilize the full width of the browser viewport without artificial, cramped 1240px container restrictions or huge empty side gutters, so that the experience feels expansive, immersive, and visually impactful.

**Why this priority**: Eliminates massive dead black space on both sides of wide screens, making full use of display real estate for high-density presentation of design work, skills, and experience.

**Independent Test**: Resize browser window to wide dimensions (>1400px, 1920px, 2560px) and verify that container layout expands edge-to-edge with comfortable relative padding (e.g. `clamp(1.5rem, 4vw, 4rem)`), removing the fixed 1240px max-width boundary.

**Acceptance Scenarios**:
1. **Given** a high-resolution display (e.g., 1920x1080 or ultra-wide), **When** opening the portfolio, **Then** content sections and header navbar expand fluidly to fill the available width without huge 300px+ black margins on the left and right.
2. **Given** the Navbar, **When** viewed on wide viewports, **Then** logo and navigation links span comfortably across the full header with proportional padding.
3. **Given** section cards and grids (Hero, Projects, Skills, Experience), **When** container width expands, **Then** grid layouts re-flow cleanly with balanced padding and zero unexpected horizontal scrollbars.

---

### User Story 2 - Consistent Responsive Padding Across Viewports (Priority: P2)

As a visitor switching between small laptops and large monitors, I want balanced horizontal padding at screen edges (e.g., 2rem–4rem padding) so content never touches absolute screen bezels while eliminating huge side empty gaps.

**Why this priority**: Ensures optimal legibility and aesthetic spacing across ultra-wide monitors and standard laptops alike without hardcoded pixel caps.

**Independent Test**: Inspect `.container` and `.nav-container` styles in browser developer tools across 1280px, 1600px, 1920px, and 2560px screen widths.

**Acceptance Scenarios**:
1. **Given** any screen resolution, **When** scrolling through the site, **Then** side padding remains fluidly scaled (`clamp()`) and centered.
2. **Given** section containers, **When** max-width constraint is removed or increased to full-screen fluid boundaries (e.g., `100%` or `1800px` max fluid boundary with fluid inline padding), **Then** content occupies the screen seamlessly.

---

## Requirements

### Functional Requirements

- **FR-001**: Remove Fixed Container Max-Width — Update CSS variable `--container-max` or `.container` rule to allow full-width fluid layouts (e.g., `width: 100%`, max-width extended to full screen or fluid max e.g. `100%` / `1760px` with generous relative inline padding `clamp(1.5rem, 5vw, 4rem)`).
- **FR-002**: Fluid Navbar Spacing — Update `.nav-container` to span full width with matching fluid inline padding so header aligns seamlessly with section content.
- **FR-003**: Hero & Grid Layout Optimization — Adapt hero section grid and project card grids to fill the expanded screen width gracefully without over-stretching text line lengths (maintaining standard readable line-height and max text block widths).
- **FR-004**: Zero Horizontal Overflow — Ensure all responsive breakpoints (mobile, tablet, desktop, ultra-wide) remain 100% free of horizontal scroll overflow.

---

## Success Criteria

- **SC-001**: Side gutters on screen widths >1400px are reduced from >300px down to fluid responsive edge padding (`2rem–4rem`).
- **SC-002**: 100% of portfolio sections (Header, Hero, Projects, About, Experience, Skills, Achievements, Contact, Footer) render seamlessly edge-to-edge.
- **SC-003**: Playwright automated testing confirms zero horizontal scroll overflow across all test viewports.
