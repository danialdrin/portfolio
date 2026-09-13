# Feature Specification: Unified Projects Section Merge

**Feature Directory**: `specs/003-projects-section-merge`
**Created**: 2026-09-13
**Status**: Draft

---

## User Scenarios & Testing

### User Story 1 - Single Unified Projects Showcase (Priority: P1)

As a portfolio visitor or recruiter, I want to explore all of Dani's work (featured case studies and creative web experiments) inside a single, unified "Projects" section so that I can easily discover all 14 projects without needing separate "Work" and "Playground" sections.

**Independent Test**: Navigate to the navigation bar, click "Projects" or scroll to `#projects`, and verify that all case studies and creative experiments are displayed in a cohesive, unified section with interactive category filter tabs ("All", "Case Studies", "Experiments").

**Acceptance Scenarios**:
1. **Given** the portfolio loaded, **When** a user clicks "Projects" in the navigation bar, **Then** the page smooth-scrolls to the unified `#projects` section.
2. **Given** the `#projects` section is displayed, **When** the user scans the section, **Then** featured case studies (e.g. InternArea, SkillPassport, AI Study Buddy, HireSync, FinTech Dashboard) and web experiments (e.g. Music Player, Stopwatch, Video Player) are presented with clear visual indicators.
3. **Given** the filter tabs ("All", "Case Studies", "Experiments"), **When** selected, **Then** the grid seamlessly filters the projects list.

---

## Requirements

### Functional Requirements

- **FR-001**: Single Unified Section — Replace separate `#work` and `#playground` sections with one comprehensive `#projects` section titled "Projects".
- **FR-002**: Updated Navigation — Update navigation links in `Navbar.jsx` and `Footer.jsx` to feature a single "Projects" link pointing to `#projects`.
- **FR-003**: Interactive Category Filtering — Provide pill tabs ("All", "Case Studies", "Experiments") allowing visitors to filter the 14 projects by category.
- **FR-004**: Integrated Showcase Components — Embed the `CircularGallery` component within the Projects section as an interactive visual carousel alongside the card grid.
- **FR-005**: Responsive Layout — Ensure the unified Projects section grid renders cleanly across desktop (2-column/3-column grid), tablet, and mobile (1-column) with zero horizontal overflow.

---

## Success Criteria

- **SC-001**: 100% of the 14 project records from `data/projects.json` remain accessible within the single `#projects` section.
- **SC-002**: Filter tabs ("All", "Case Studies", "Experiments") instantly update the rendered cards with zero page reload or broken layouts.
- **SC-003**: Playwright automated tests pass with 0px horizontal scroll overflow across all viewports.
