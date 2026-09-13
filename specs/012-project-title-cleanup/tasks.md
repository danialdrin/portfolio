# Tasks: Project Title Clean Up

**Feature Directory**: `specs/012-project-title-cleanup`
**Feature Name**: Project Title Clean Up
**Created**: 2026-09-13
**Status**: Completed

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: File inspection

- [X] T001 Inspect `skillpassport` entry in `public/data/projects.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Data structure verification

- [X] T002 Verify JSON schema validity in `public/data/projects.json`

---

## Phase 3: User Story 1 - Clean Project Card Title (Priority: P1) 🎯 MVP

**Goal**: Remove "AI-Powered Student Skill Intelligence Platform — " from the featured project card title in `public/data/projects.json`.

**Independent Test**: Load `#projects` in browser, verify Skill Passport card heading displays "Digital Skill Passport".

### Implementation for User Story 1

- [X] T003 [US1] Update `title` of `skillpassport` project object to `"Digital Skill Passport"` in `public/data/projects.json`

**Checkpoint**: Project card title displays concise "Digital Skill Passport" heading.

---

## Phase 4: Polish & Cross-Cutting Concerns

**Purpose**: Build verification

- [X] T004 Run `npm run build` to confirm clean Vite build compilation

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1).
- **User Story 1 (Phase 3)**: Depends on Foundational (Phase 2).
- **Polish (Phase 4)**: Depends on User Story 1 (Phase 3).

### User Story Dependencies

- **User Story 1 (P1)**: Independent title clean up.

---

## Implementation Strategy

### MVP First (User Story 1 Only)
1. Complete Phase 1 & Phase 2.
2. Complete Phase 3 (User Story 1).
3. Test project card title in browser.
