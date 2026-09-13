# Tasks: Minimalist Hero Section Redesign

**Feature Directory**: `specs/010-hero-minimalist-redesign`
**Feature Name**: Minimalist Hero Section Redesign
**Created**: 2026-09-13
**Status**: Completed

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: File inspection and layout preparation

- [X] T001 Inspect existing Hero component structure in `src/components/Hero.jsx` and `src/index.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core CSS typography classes for giant white name display

- [X] T002 Implement `.hero-name-giant` CSS rules with `#ffffff` text color and responsive clamp font sizing in `src/index.css`

---

## Phase 3: User Story 1 - Minimalist Hero Content Structure (Priority: P1) 🎯 MVP

**Goal**: Streamline the Hero section to render strictly "HELLO, I'M", a giant white "Dani Aldrin" name title, and the animated roles typing line. Remove all extra bio text, CTA buttons, location badges, and social icon links.

**Independent Test**: Load `#home` in browser, verify only "HELLO, I'M", giant white "Dani Aldrin", and animated roles line appear in the content area without extra elements.

### Implementation for User Story 1

- [X] T003 [P] [US1] Restructure Hero section to display greeting tag, giant name title, and `TextType` roles component in `src/components/Hero.jsx`
- [X] T004 [P] [US1] Remove bio paragraph, location meta badge, SpecularButton CTAs, and social links bar from `src/components/Hero.jsx`
- [X] T005 [US1] Apply `.hero-name-giant` class with `#ffffff` color to the main name heading in `src/components/Hero.jsx`

**Checkpoint**: Hero section displays clean minimalist structure with giant white name and roles line.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Mobile responsiveness and build validation

- [X] T006 [P] Adjust hero spacing and mobile layout breakpoints in `src/index.css`
- [X] T007 Run `npm run build` to verify clean Vite build compilation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2).
- **Polish (Phase 4)**: Depends on User Story 1 (Phase 3).

### User Story Dependencies

- **User Story 1 (P1)**: Independent hero section redesign.

### Parallel Opportunities

- `T003` and `T004` can run in parallel while modifying `Hero.jsx`.
- `T006` (CSS polish) can run in parallel with build verification (`T007`).

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (User Story 1).
3. Test minimal Hero section in browser.

### Incremental Delivery
1. Add `.hero-name-giant` CSS rule in `index.css`.
2. Strip extra elements and update `Hero.jsx`.
3. Verify visual alignment and responsive scaling.
