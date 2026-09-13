# Quickstart Validation Guide: Portfolio Redesign

## Testing & Verification Steps

### 1. Local HTTP Server Setup
Run a local HTTP server from the workspace root:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000/` in Google Chrome, Mozilla Firefox, or Safari.

### 2. Runtime Verification Checklist
- [ ] Verify page loads without console errors.
- [ ] Verify `data/projects.json`, `data/experience.json`, `data/skills.json`, `data/achievements.json` load dynamically.
- [ ] Verify all 14 projects (12 existing + InternArea + SkillPassport) render with images and badges.
- [ ] Verify smooth navigation scroll to all section anchors (`#work`, `#about`, `#experience`, `#skills`, `#playground`, `#contact`).
- [ ] Verify mobile menu opens, closes, and locks body scroll appropriately.
- [ ] Verify all external links include `target="_blank" rel="noopener noreferrer"`.
- [ ] Verify resume view and download buttons trigger correctly without broken 404 links.
- [ ] Verify `@media (prefers-reduced-motion)` disables excessive animations.
