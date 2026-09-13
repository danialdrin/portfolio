# Feature Specification: 3-Split Column Curtain Overlay Reveal

## Overview
Implement a single-screen 3-column split overlay curtain animation on page load/reload. The initial loading overlay covers the viewport as 1 screen divided into 3 equal vertical split columns (`.overlay.first`, `.overlay.second`, `.overlay.third`). On page reveal, the 3 column panels slide upward off the top of the screen sequentially one after the other (left → middle → right), uncovering the main portfolio content underneath.

## User Requirements & Scenarios

### User Scenario
- **Given** a user opens or reloads the portfolio website (`npm run dev` or production build)
- **When** the page initializes, a full-screen dark container appears divided into 3 vertical split panels side-by-side (`width: 33.333%` each).
- **Then** panel 1 (`.first`, left slice) slides up to `translateY(-100%)`, followed by panel 2 (`.second`, middle slice), followed by panel 3 (`.third`, right slice) **one after the other**.
- **After** all 3 splits complete their upward exit, the main portfolio site is fully visible and interactive.

## Functional Requirements
1. **HTML Structure**:
   ```html
   <div class="overlay-loader-wrapper">
     <div class="overlay first"></div>
     <div class="overlay second"></div>
     <div class="overlay third"></div>
   </div>
   ```
2. **Layout**:
   - Single fixed full-screen wrapper (`inset: 0`, `z-index: 999999`, `display: flex`, `flex-direction: row`).
   - `.overlay`: `flex: 1` (or `width: 33.333%`, `height: 100%`).
3. **Staggered Upward Movement**:
   - `.overlay.first` (left 1/3) animates up first (`animation-delay: 0.15s`).
   - `.overlay.second` (middle 1/3) animates up second (`animation-delay: 0.35s`).
   - `.overlay.third` (right 1/3) animates up third (`animation-delay: 0.55s`).
4. **Theme Aesthetics**:
   - Dark theme canvas (`#0a0b0d` / `#120F17`) with subtle amber/purple vertical division borders and gradient highlights.
5. **Accessibility**:
   - Bypass or fade smoothly for users with `prefers-reduced-motion: reduce`.

## Success Criteria
- [x] Single screen divided into 3 side-by-side column splits covering 100% viewport.
- [x] Staggered upward slide-out (`translateY(-100%)`) one after the other.
- [x] Content uncovers cleanly without blocking mouse/touch interactions.
