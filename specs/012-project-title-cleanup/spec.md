# Feature Specification: Project Title Clean Up

**Feature Directory**: `specs/012-project-title-cleanup`
**Created**: 2026-09-13
**Status**: Draft
**Input**: Remove "AI-Powered Student Skill Intelligence Platform — " from the skillpassport project card title in `public/data/projects.json`.

---

## User Scenarios & Testing

### User Story 1 - Clean Project Card Title (Priority: P1)

As a portfolio visitor reviewing the Projects section, I want the featured Skill Passport project card to display a concise title ("Digital Skill Passport"), so the title looks clean, readable, and well-balanced on the project card.

**Why this priority**: Fulfills the user's explicit request to trim the long prefix from the featured project card title.

**Independent Test**:
1. Navigate to `#projects`.
2. Locate the featured Skill Passport project card.
3. Verify the card title displays "Digital Skill Passport" without the "AI-Powered Student Skill Intelligence Platform — " prefix.

**Acceptance Scenarios**:
1. **Given** `public/data/projects.json`, **When** loaded, **Then** `skillpassport` project object has `"title": "Digital Skill Passport"`.
2. **Given** Projects section render in browser, **Then** card heading renders crisp "Digital Skill Passport".

---

## Functional Requirements

- **FR-001**: **Title Update** — Update `public/data/projects.json` for item `id: "skillpassport"` from `"AI-Powered Student Skill Intelligence Platform — Digital Skill Passport"` to `"Digital Skill Passport"`.
