# Feature Specification: Embedded Interactive Resume PDF Viewer

**Feature Directory**: `specs/008-embedded-resume-pdf`
**Created**: 2026-09-13
**Status**: Draft
**Input**: User request: "i want my resume as pdf to be displayed in that section" (`.resume-box` in `Contact.jsx`).

---

## User Scenarios & Testing

### User Story 1 - Embedded Interactive Resume PDF Viewer (Priority: P1)

As a portfolio visitor reviewing the contact and resume section (`#contact`), I want to view Dani Aldrin's complete professional resume directly embedded inside an interactive PDF viewer frame within `.resume-box`, while still having direct action buttons to download or open the PDF online.

**Why this priority**: Directly fulfills the user's request to display the live resume PDF inside `.resume-box`.

**Independent Test**: Navigate to `#contact`:
1. Verify an embedded iframe PDF viewer renders inside `.resume-box`.
2. Verify the PDF viewer displays the resume pages with scrollable access.
3. Verify "Download Resume PDF" and "View Online" buttons remain fully accessible below/above the viewer.

**Acceptance Scenarios**:
1. **Given** `#contact` section is visible, **When** `.resume-box` renders, **Then** an `<iframe>` PDF viewer frame loads the Google Drive preview PDF.
2. **Given** desktop or mobile screen size, **When** displayed, **Then** the PDF viewer container maintains responsive height (e.g., `height: 480px` or `520px`) with rounded corners and border.
3. **Given** action buttons below the PDF frame, **When** clicked, **Then** download and external view links function without interrupting the embedded frame.

---

## Requirements

### Functional Requirements

- **FR-001**: **Embedded PDF Viewer Frame** — Integrate an `<iframe>` or `<object>` inside `.resume-box` in `Contact.jsx` using `https://drive.google.com/file/d/11o-VDsHmuV7l-zQO0OCcFwwzHnxb9_C4/preview` (or `viewerng/viewer?...&embedded=true`).
- **FR-002**: **Responsive Viewer Container** — Style `.resume-pdf-frame` in `index.css` / `Contact.jsx` with `width: 100%; height: 500px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);`.
- **FR-003**: **Action Buttons & Header** — Retain the header badge, title ("Dani Aldrin D — B.E. Computer Science Engineering"), and action buttons ("Download Resume PDF", "View Online").
