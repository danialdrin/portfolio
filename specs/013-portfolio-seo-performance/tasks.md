# Tasks: Remove Hover Glow from Achievement Cards

## Feature Summary
Remove box-shadow glow (`rgba(255, 191, 0, 0.15)`) and glare opacity highlights from `.achievement-card` on hover in `src/index.css` and `src/components/Achievements.jsx`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Audit achievement card hover rules

- [ ] T001 Inspect `.achievement-card:hover` rules in `src/index.css` and `<GlareHover>` properties in `Achievements.jsx`

---

## Phase 2: Foundational (Hover Styling Verification)

**Purpose**: Remove hover glow box-shadow and glare effect

- [ ] T002 Update `.achievement-card:hover` in `src/index.css` to set `box-shadow: none`
- [ ] T003 Update `Achievements.jsx` to set `glareOpacity={0}` on `GlareHover`

---

## Phase 3: User Story 1 - Glowless Achievement Cards on Hover (Priority: P1) 🎯 MVP

**Goal**: Deliver clean achievement cards that move smoothly on hover without producing a yellow/amber glow shadow or glare sweep.

**Independent Test**: Hover over achievement cards in `Achievements.jsx` during `npm run dev` and verify no glow shadow or glare effect appears.

### Implementation for User Story 1

- [ ] T004 [US1] Set `box-shadow: none` on `.achievement-card:hover` in `src/index.css`
- [ ] T005 [US1] Set `glareOpacity={0}` in `src/components/Achievements.jsx`
- [ ] T006 [US1] Test achievement card carousel rendering in `npm run dev`

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Production build checks

- [ ] T007 Run `npm run build` to confirm build completes cleanly
