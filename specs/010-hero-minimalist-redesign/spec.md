# Feature Specification: Minimalist Hero Section Redesign

**Feature Directory**: `specs/010-hero-minimalist-redesign`
**Created**: 2026-09-13
**Status**: Draft
**Input**: Simplify Hero section to contain ONLY greeting ("Hello, I'M"), giant white name ("Dani Aldrin"), and animated roles typing line. Remove bio, CTA buttons, location meta, and extra elements.

---

## User Scenarios & Testing

### User Story 1 - Minimalist Hero Content Structure (Priority: P1)

As a portfolio visitor landing on the home page (`#home`), I want to see a clean, uncluttered hero section featuring a sleek "HELLO, I'M" tag, a giant white "Dani Aldrin" title, and the cycling roles typing line, so the main hero message is bold, striking, and immediate.

**Why this priority**: Fulfills the user's explicit request to streamline the hero section to only the greeting, name, and roles line.

**Independent Test**:
1. Open home section (`#home`).
2. Verify greeting displays "HELLO, I'M".
3. Verify name "Dani Aldrin" renders in large white typography.
4. Verify dynamic roles typing animation cycles smoothly below the name.
5. Verify bio text, location badges, CTA buttons, and social icon rows are removed from the hero block.

**Acceptance Scenarios**:
1. **Given** Hero section load, **When** rendered, **Then** text hierarchy presents: 1) "HELLO, I'M", 2) Giant white "Dani Aldrin", 3) Dynamic roles typing line.
2. **Given** name "Dani Aldrin", **Then** font color is crisp solid white (`#ffffff`) with prominent size scale (e.g. `clamp(3.5rem, 8vw, 6rem)`).
3. **Given** extraneous elements (bio paragraph, CTA specular buttons, location meta badge, social links), **Then** they are removed from `Hero.jsx` for maximum visual focus.

---

## Functional Requirements

- **FR-001**: **Hero Layout Simplification** — Update `Hero.jsx` to render strictly the greeting, name heading, and roles typewriter component.
- **FR-002**: **Bigger White Name Typography** — Apply updated CSS classes or inline styles to `.hero-title` / `.hero-name` with `color: #ffffff`, `font-size: clamp(3.5rem, 7.5vw, 6rem)`, `font-weight: 800`, and tight line-height.
- **FR-003**: **Roles Line Integration** — Retain `TextType` component displaying `['UI/UX Designer', 'Frontend Developer', 'Game Developer', 'Backend Developer', 'Full Stack Developer']`.
- **FR-004**: **Element Cleanup** — Remove bio description, CTA buttons, location pill, and social links bar from `Hero.jsx`.
