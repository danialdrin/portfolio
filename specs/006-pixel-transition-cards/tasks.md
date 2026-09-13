# Tasks: Fluent 2-Stage Pixel Wiping Transition

**Feature Directory**: `specs/006-pixel-transition-cards`
**Created**: 2026-09-13
**Status**: Ready

---

## Tasks

- [ ] **Task 1: Update PixelTransition.jsx GSAP Animation Timing**
  - Implement 2-stage pixel wipe using `gsap.delayedCall(animationStepDuration, ...)`.
  - Ensure content swap occurs strictly at the peak of pixel grid coverage.

- [ ] **Task 2: Refine Card Markup & Event Handling (`Projects.jsx`)**
  - Maintain clean cover (`firstContent`) and detail (`secondContent`) layouts.
  - Verify action button clicks open links without immediately re-flipping the card.

- [ ] **Task 3: Production Build & Playwright Verification**
  - Run `npm run build`.
  - Run Playwright test script to verify fluent timing and 0 mobile scroll overflow.
