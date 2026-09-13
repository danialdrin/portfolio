# Feature Specification: Hero Section Layout Restoration & Giant White Name Integration

**Feature Directory**: `specs/011-hero-restore-elements`
**Created**: 2026-09-13
**Status**: Draft
**Input**: Restore bio text, location badge, CTA buttons, and social links in Hero section while retaining the "HELLO, I'M" tag, giant white "Dani Aldrin" name title, and roles typewriter line.

---

## User Scenarios & Testing

### User Story 1 - Full Hero Section Restoration with Giant White Name (Priority: P1)

As a portfolio visitor, I want to see a rich Hero section containing the giant white "Dani Aldrin" name title and roles line alongside the bio paragraph, location pill, SpecularButton CTAs ("View my work", "Let's talk"), and social media links, so the hero is both striking and feature-complete.

**Why this priority**: Fulfills the user's explicit request to keep all hero elements while preserving the giant white name and roles formatting.

**Independent Test**:
1. Open `#home` section.
2. Verify greeting displays "HELLO, I'M".
3. Verify name "Dani Aldrin" renders in giant white typography.
4. Verify dynamic roles typewriter line cycles.
5. Verify bio paragraph, location badge, CTA buttons, and social media icon row are present and functional.

**Acceptance Scenarios**:
1. **Given** Hero section load, **When** rendered, **Then** text heading displays "HELLO, I'M" followed by giant white "Dani Aldrin" (`.hero-name-giant`).
2. **Given** roles typing line, **When** rendered, **Then** `TextType` component cycles through technical roles.
3. **Given** Hero content block, **When** viewed, **Then** bio description, location badge ("Kanyakumari, Tamil Nadu"), SpecularButton CTAs ("View my work", "Let's talk"), and social media icon row are all visible.

---

## Functional Requirements

- **FR-001**: **Giant White Name & Greeting** — Maintain top greeting tag ("HELLO, I'M") and main `<h1>` with `.hero-name-giant` style (white text color `#ffffff`).
- **FR-002**: **Roles Typewriter Line** — Maintain `TextType` component cycling through `['UI/UX Designer', 'Frontend Developer', 'Game Developer', 'Backend Developer', 'Full Stack Developer']`.
- **FR-003**: **Bio Paragraph Restoration** — Restore bio paragraph text describing Computer Science Engineering background and passion for web/AI apps.
- **FR-004**: **Location Meta Pill Restoration** — Restore location badge (`Kanyakumari, Tamil Nadu`).
- **FR-005**: **SpecularButton CTAs Restoration** — Restore "View my work" and "Let's talk" interactive SpecularButtons.
- **FR-006**: **Social Media Links Restoration** — Restore GitHub, LinkedIn, LeetCode, and HackerRank social link icons.
