# Tasks: BorderGlow Integration for About Cards

**Feature Directory**: `specs/009-about-border-glow`
**Feature Name**: BorderGlow Integration for About Cards
**Created**: 2026-09-13
**Status**: Completed

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Component creation and setup

- [X] T001 Create component file structure in `src/components/BorderGlow.jsx` and `src/components/BorderGlow.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core logic helpers and base styling required for BorderGlow component

- [X] T002 Implement helper math and HSL/gradient generator functions in `src/components/BorderGlow.jsx`
- [X] T003 Implement CSS variables, position isolation, and base card rules in `src/components/BorderGlow.css`

---

## Phase 3: User Story 1 - React Bits BorderGlow Component Creation (Priority: P1) 🎯 MVP

**Goal**: Create a standalone, reusable `<BorderGlow />` component that dynamically tracks pointer position and angle to update border glow variables.

**Independent Test**: Render `<BorderGlow>` with sample text and move pointer near card edges to verify dynamic `--edge-proximity` and `--cursor-angle` CSS updates.

### Implementation for User Story 1

- [X] T004 [P] [US1] Implement `BorderGlow` React component with pointer listeners and intro sweep effect in `src/components/BorderGlow.jsx`
- [X] T005 [P] [US1] Implement full mesh-gradient border, background fill, outer glow, and inner container styling in `src/components/BorderGlow.css`

**Checkpoint**: `BorderGlow` component is fully functional and ready for integration.

---

## Phase 4: User Story 2 - Wrap About Section Cards in BorderGlow (Priority: P2)

**Goal**: Wrap Education, Leadership & Roles, and Focus Areas cards in `About.jsx` with `<BorderGlow />` component using customized color palette matching portfolio aesthetics.

**Independent Test**: Navigate to `#about` in browser, hover near edges of Education, Leadership, and Focus cards to verify multi-color mesh gradient and HSL outer glow.

### Implementation for User Story 2

- [X] T006 [P] [US2] Import `BorderGlow` and wrap Education info card in `src/components/About.jsx`
- [X] T007 [P] [US2] Wrap Leadership & Roles info card in `src/components/About.jsx`
- [X] T008 [P] [US2] Wrap Focus Areas info card in `src/components/About.jsx`
- [X] T009 [US2] Adjust `.about-cards-bottom` spacing and overflow behavior in `src/index.css` for outer glow padding

**Checkpoint**: About section cards display reactive border glow effects seamlessly.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Responsive touch handling and visual validation

- [X] T010 [P] Verify touch device fallback and responsive layout constraints in `src/components/BorderGlow.css`
- [X] T011 Verify Vite dev server build and visual performance across all cards in browser

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2).
- **User Story 2 (Phase 4)**: Depends on User Story 1 (Phase 3).
- **Polish (Phase 5)**: Depends on User Story 2 (Phase 4).

### User Story Dependencies

- **User Story 1 (P1)**: Independent component creation.
- **User Story 2 (P2)**: Consumes `<BorderGlow />` created in User Story 1.

### Parallel Opportunities

- `T004` and `T005` can be worked on concurrently (JSX logic vs CSS rules).
- `T006`, `T007`, and `T008` card wrapping in `About.jsx` can be applied together or in parallel.
- `T010` (CSS polish) can run in parallel with general testing (`T011`).

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (User Story 1).
3. Test `<BorderGlow />` component in isolation.

### Incremental Delivery
1. Add `<BorderGlow />` component (`BorderGlow.jsx` + `BorderGlow.css`).
2. Wrap Education, Leadership, and Focus cards in `About.jsx`.
3. Tune CSS spacing in `index.css` so glows do not clip.
