# Implementation Plan: Embedded Resume PDF Viewer

**Feature Directory**: `specs/008-embedded-resume-pdf`
**Created**: 2026-09-13
**Status**: Ready

---

## Technical Approach Summary

1. **Update `Contact.jsx`**:
   - Embed Google Drive PDF preview iframe in `.resume-box`.

2. **Style in `index.css`**:
   - `.resume-pdf-container`: height 500px, rounded corners, border.
   - `.resume-pdf-iframe`: 100% width and height.

3. **Verification**:
   - `npm run build` compilation check.
