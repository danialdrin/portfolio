# Feature Specification: Fluent 2-Stage Pixel Wiping Transition for Project Cards

**Feature Branch**: `006-pixel-transition-cards`
**Created**: 2026-09-13
**Status**: Draft
**Input**: User feedback: "as of now the project card click that is the pixel transition animation is switching the things imediately when in click instead of the transition happending first the flip is happening firrst then the pixel animation is starting so make the rethum fluent"

---

## User Scenarios & Testing

### User Story 1 - Fluent Pixel Wipe Content Swap (Priority: P1)

As a portfolio visitor clicking a project card in `#projects`, I want the pixel blocks to stagger across the card surface first to cover the content completely, THEN have the underlying view swap cleanly behind the pixel cover, and FINALLY have the pixels stagger away to reveal the new content, ensuring a rhythmically fluent transition without instant visual jarring.

**Why this priority**: Corrects the timing sequence so the pixel animation functions as a true wipe transition rather than an instantaneous content swap with trailing pixels.

**Independent Test**: Click any project card and observe that the card content remains unchanged while pixels fill the grid, flips cleanly at the peak of pixel coverage, and reveals the new view as pixels disperse.

**Acceptance Scenarios**:
1. **Given** a project card in cover state, **When** clicked, **Then** pixel blocks fill the grid over `animationStepDuration` seconds while cover content remains visible under pixels.
2. **Given** the card is 100% covered by pixel blocks, **When** `animationStepDuration` is reached, **Then** the content swaps to `secondContent` behind the pixel veil.
3. **Given** `secondContent` is set, **When** pixels stagger away, **Then** the detailed project view is revealed smoothly.
4. **Given** a card in detail state, **When** clicked again to flip back, **Then** the exact same fluent 2-stage pixel wipe sequence executes in reverse.

---

## Requirements

### Functional Requirements

- **FR-001**: Fluent 2-Stage GSAP Pixel Wipe — Update `animatePixels` in `PixelTransition.jsx` to use `gsap.delayedCall(animationStepDuration, ...)` so `activeEl.style.display` swaps precisely at the peak of pixel grid coverage.
- **FR-002**: Click-Triggered Flow — Maintain click-only interaction for cards, preventing hover events from triggering pixel wipes.
- **FR-003**: Seamless Pointer Events & Interactivity — Ensure links inside `secondContent` (Repository & Live Demo) remain interactive (`pointer-events: auto`) after the reveal transition completes.
- **FR-004**: Responsive Aspect Ratio & Grid Sizing — Set `gridSize={8}` (or `10`), `animationStepDuration={0.35}`, and `pixelColor="var(--accent-amber)"` for crisp, performant rendering across desktop and mobile.
