# Feature Specification: About Section 2-Column Split & Hero Image Layout

**Feature Directory**: `specs/007-about-section-layout`
**Created**: 2026-09-13
**Status**: Draft
**Input**: User request: "i want a small hero image in the about section devide the section into 2, one for the image and other for the content divide the content section of the about to 2 top and bottom with top fo the text and the bottom for educaiton, leader, focus card" + button hover text color transition (initial white, yellow on hover).

---

## User Scenarios & Testing

### User Story 1 - 2-Column About Section Layout with Hero Image (Priority: P1)

As a portfolio visitor navigating to `#about`, I want to see a 2-column layout where the left column displays a small sleek hero profile image and the right column is divided vertically into top narrative text and bottom info cards (Education, Leadership, Focus Areas), so the section feels visually balanced, scannable, and modern.

**Why this priority**: Directly implements the user's structural layout request for the About section.

**Independent Test**: Navigate to `#about` on desktop and mobile:
1. Verify left side displays a small hero image.
2. Verify right side contains top narrative text followed by bottom info cards (Education, Leadership, Focus Areas).
3. Verify layout collapses gracefully to a single responsive column on smaller viewports.

**Acceptance Scenarios**:
1. **Given** desktop screen size, **When** `#about` renders, **Then** grid displays a 2-column layout (Left: Small Hero Image column; Right: Content column).
2. **Given** the right Content column, **When** rendered, **Then** it is divided into 2 vertical blocks: Top block containing narrative text paragraphs, Bottom block containing Education, Leadership, and Focus Area info cards.
3. **Given** mobile screen size, **When** rendered, **Then** elements stack vertically without overflow.

---

### User Story 2 - Button Hover Text Color Transition (Priority: P2)

As a portfolio visitor hovering over the `SpecularButton` ("View my work"), I want the button text color to transition from initial crisp white (`#ffffff`) to vibrant yellow (`#f59e0b`) on hover, providing instant visual feedback.

**Acceptance Scenarios**:
1. **Given** "View my work" button in initial state, **Then** text and icon render in crisp white (`#ffffff`).
2. **Given** user hovers over "View my work" button, **Then** text and icon smoothly transition to yellow (`#f59e0b`).

---

## Functional Requirements

- **FR-001**: **About Section 2-Column Grid** — Restructure `.about-grid` in `About.jsx` into a 2-column grid (`1.5fr 2.5fr` or `1fr 2fr` on desktop).
- **FR-002**: **Left Column Hero Image** — Add a small hero profile image container (`.about-hero-image`) in the left column with smooth border-radius, subtle shadow/glow, and responsive sizing.
- **FR-003**: **Right Column Vertical Layout** — Structure the right column into two stacked blocks:
  - **Top Block**: Narrative bio text paragraphs.
  - **Bottom Block**: Info cards group containing Education (CGPA 8.41), Leadership & Roles (Team Captain & CSI Executive), and Focus Areas cards.
- **FR-004**: **Specular Button Hover Text Color Transition** — Update `SpecularButton.css` / `Hero.jsx` so "View my work" defaults to `textColor="#ffffff"` and transitions to `#f59e0b` on `:hover`.
