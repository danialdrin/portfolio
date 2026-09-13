# Implementation Tasks: Dani Aldrin Portfolio Redesign

**Feature**: `002-portfolio-redesign`
**Spec File**: [spec.md](file:///media/SharedMemory/project/gtihub%20project/portfolio/specs/002-portfolio-redesign/spec.md)
**Plan File**: [plan.md](file:///media/SharedMemory/project/gtihub%20project/portfolio/specs/002-portfolio-redesign/plan.md)

---

## Phase 1: Setup & Cleanup (Foundation)

- [x] [T001] Archive/remove legacy unused root `data.json` to establish `data/*.json` as single source of truth (`data.json`)
- [x] [T002] Audit and update `data/projects.json` to include InternArea and SkillPassport records with correct titles, descriptions, tech stack, images, and links (`data/projects.json`)
- [x] [T003] Audit and standardize social links across hero state, static footer, and contact section in `js/main.js` and `index.html` (`js/main.js`, `index.html`)

---

## Phase 2: Design Tokens & CSS Framework (Styles)

- [x] [T004] Implement new warm dark color palette, CSS variables, typography scales, container layout utilities, and reset rules in `css/styles.css` (`css/styles.css`)
- [x] [T005] Build responsive grid system, card surfaces, border styles, and button component utilities in `css/styles.css` (`css/styles.css`)
- [x] [T006] Implement tactile micro-interaction styles, hover state animations, and `@media (prefers-reduced-motion)` overrides in `css/styles.css` (`css/styles.css`)

---

## Phase 3: Core HTML & Structure (User Stories 1-4)

- [x] [T007] [US1] Rebuild semantic HTML structure in `index.html` with clean navbar, human hero section, selected work container, playground container, about section, experience timeline, skills grid, achievements grid, contact/resume section, and footer (`index.html`)
- [x] [T008] [US1] Remove unnecessary CDN dependencies (AOS, GSAP overlay loader, Font Awesome, Ionicons) and integrate Google Fonts (`Outfit` & `Inter`) (`index.html`)

---

## Phase 4: JavaScript Architecture & Dynamic Rendering (Implementation)

- [x] [T009] [P] [US1] Implement core data fetcher (`initializeApp`), HTML escaping helper, and section rendering triggers in `js/main.js` (`js/main.js`)
- [x] [T010] [P] [US2] Implement Selected Work & Playground renderers in `js/main.js` separating major case studies from experimental utilities (`js/main.js`)
- [x] [T011] [P] [US3] Implement Experience timeline, Skills (categorized, no fake bars), and Achievements list renderers in `js/main.js` (`js/main.js`)
- [x] [T012] [P] [US4] Implement Navigation controller (scroll highlight, mobile drawer toggle, smooth scroll) and Resume action handler in `js/main.js` (`js/main.js`)
- [x] [T013] [P] [US1] Implement lightweight `IntersectionObserver` scroll reveal animation system in `js/main.js` (`js/main.js`)

---

## Phase 5: Polish, Accessibility & Verification

- [x] [T014] Ensure all external links include `target="_blank" rel="noopener noreferrer"` and add visible keyboard focus indicators across all interactive elements (`index.html`, `js/main.js`, `css/styles.css`)
- [x] [T015] Conduct responsive viewport tests (1440px, 1024px, 768px, 480px, 375px) and verify zero horizontal scrolling (`css/styles.css`)
- [x] [T016] Run local HTTP server validation and verify 100% functional requirements against quickstart guide (`specs/002-portfolio-redesign/quickstart.md`)
