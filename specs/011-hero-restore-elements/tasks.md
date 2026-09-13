# Tasks: Hero Section Layout Restoration & Giant White Name Integration

**Feature Directory**: `specs/011-hero-restore-elements`
**Feature Name**: Hero Section Layout Restoration & Giant White Name Integration
**Created**: 2026-09-13
**Status**: Completed

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: File inspection and layout preparation

- [X] T001 Inspect Hero component and styling in `src/components/Hero.jsx` and `src/index.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Refine CSS spacing rules for giant white name display alongside bio & CTA blocks

- [X] T002 Refine `.hero-name-giant` margin and font size rules in `src/index.css`

---

## Phase 3: User Story 1 - Full Hero Section Restoration with Giant White Name (Priority: P1) 🎯 MVP

**Goal**: Keep "HELLO, I'M", giant white "Dani Aldrin" name, and `TextType` roles line while restoring bio paragraph, location pill, SpecularButton CTAs, and social link icons.

**Independent Test**: Load `#home` in browser, verify "HELLO, I'M", giant white name, and roles line are displayed alongside bio text, location badge, "View my work" / "Let's talk" buttons, and social links.

### Implementation for User Story 1

- [X] T003 [P] [US1] Restore bio paragraph text, location badge container, CTA buttons group, and social links row in `src/components/Hero.jsx`
- [X] T004 [P] [US1] Retain greeting tag ("HELLO, I'M"), giant white name title (`.hero-name-giant`), and dynamic `TextType` roles component in `src/components/Hero.jsx`
- [X] T005 [US1] Re-import `SpecularButton` and define `socialLinks` array in `src/components/Hero.jsx`

**Checkpoint**: Hero section displays complete original layout enhanced with giant white name title and roles line.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Responsive validation and build check

- [X] T006 [P] Verify responsive spacing for CTA buttons and social links in `src/index.css`
- [X] T007 Run `npm run build` to confirm clean Vite build compilation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2).
- **Polish (Phase 4)**: Depends on User Story 1 (Phase 3).

### User Story Dependencies

- **User Story 1 (P1)**: Independent hero layout restoration.

### Parallel Opportunities

- `T003` and `T004` can run in parallel while updating `Hero.jsx`.
- `T006` (CSS polish) can run in parallel with build verification (`T007`).

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (User Story 1).
3. Test complete Hero section in browser.

### Incremental Delivery
1. Re-import `SpecularButton` and restore `socialLinks` array in `Hero.jsx`.
2. Add back bio, location badge, CTA buttons, and social icons while keeping giant white name title.
3. Validate visual alignment and responsive scaling.
