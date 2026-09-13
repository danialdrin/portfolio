# Dani Aldrin Portfolio: Project Documentation

## 1. Project Overview

This repository contains a single-page personal portfolio for Dani Aldrin, presented as a front-end developer and UI/UX designer. It is a static HTML, CSS, and JavaScript site with JSON-backed content for skills, projects, experience, and achievements.

The page is designed to be opened as a static website or served by any simple web server. It has no package manager manifest, build configuration, backend, or local API.

## 2. Repository Structure

```text
portfolio/
|-- index.html                 Main single-page document and static profile content
|-- css/
|   `-- styles.css             Design tokens, layout, components, animations, responsive rules
|-- js/
|   `-- main.js                Data loading, rendering, interaction, animation initialization
|-- data/
|   |-- skills.json            Skill category data used at runtime
|   |-- projects.json          Project cards used at runtime
|   |-- experience.json        Experience timeline data used at runtime
|   `-- achievements.json      Achievement carousel data used at runtime
|-- data.json                  Legacy/alternate aggregate content model; not fetched by main.js
|-- assets/
|   |-- favicon.svg            Browser favicon
|   |-- profile.png            Hero profile image
|   `-- projects/              Local project thumbnails
`-- .specify/                   Speckit templates and project governance files
```

## 3. Runtime Architecture

### Application flow

1. The browser parses `index.html`.
2. External styles and libraries are loaded:
   - Google Fonts: Inter and Poppins
   - Font Awesome 6.5.1
   - AOS 2.3.1
   - GSAP 3.12.2
   - Ionicons 7.1.0
3. `DOMContentLoaded` calls `initializeApp()` in `js/main.js`.
4. `initializeApp()` requests four JSON files in parallel:
   - `data/skills.json`
   - `data/projects.json`
   - `data/experience.json`
   - `data/achievements.json`
5. The returned data is rendered into the corresponding placeholder elements.
6. Navigation, loading transitions, typing text, scroll behavior, resume viewer, back-to-top behavior, AOS, and achievement auto-scroll are initialized.

There is no bundling or transpilation step. Browser support must therefore include modern DOM APIs, `fetch`, `IntersectionObserver`, template literals, and `async`/`await`.

### Main runtime selectors

| Selector                      | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| `#skills-grid`                | Receives skill category cards                           |
| `#projects-container`         | Receives project cards and the optional View All button |
| `#experience-container`       | Receives experience timeline items                      |
| `#achievements-container`     | Receives achievement cards and cloned carousel cards    |
| `#hero-social`                | Receives generated social links                         |
| `#resume-iframe`              | Displays the externally hosted resume viewer            |
| `#download-resume-btn`        | Starts the externally hosted resume download            |
| `#mobile-toggle`, `#nav-menu` | Controls mobile navigation                              |
| `#back-to-top`                | Scrolls to the top of the page                          |

## 4. Page Structure

The page in `index.html` contains these sections in order:

1. **Navigation**: Logo, anchor links, and mobile menu toggle.
2. **Home / Hero**: Greeting, name, rotating role text, introduction, project/resume actions, social links, and profile image.
3. **About**: Biography plus education, leadership, and focus-area cards.
4. **Skills**: Empty `#skills-grid` placeholder populated from JSON.
5. **Projects**: Empty `#projects-container` placeholder populated from JSON.
6. **Experience**: Empty `#experience-container` placeholder populated from JSON.
7. **Achievements**: Empty `#achievements-container` placeholder populated from JSON.
8. **Contact / Resume**: Contact details, resume links, social links, and embedded resume viewer.
9. **Footer**: Site links, copyright text, and decorative attribution.
10. **Back to top**: Fixed action button.

The page also defines a hidden SVG clip path named `roundedHexagon` and three fixed loader panels named `.first`, `.second`, and `.third`.

## 5. Frontend Implementation

### `index.html`

`index.html` is the semantic shell. Static profile copy, contact information, navigation, and section headings are written directly in HTML. Dynamic sections contain comments marking where JavaScript injects content.

External resources are referenced directly from CDNs. The final custom script is `js/main.js`.

### `css/styles.css`

The stylesheet is organized around:

- CSS custom properties for colors, gradients, typography, spacing, radii, transitions, shadows, and z-index values.
- Global reset and base typography.
- Loader and navigation styles.
- Hero layout, gradient orbs, buttons, social links, and profile image treatment.
- Shared section headers.
- About cards.
- Skills cards and tags.
- Achievement cards and horizontal scrolling.
- Project cards, overlays, tags, and the View All action.
- Experience timeline.
- Resume/contact layout.
- Footer and back-to-top control.
- Responsive breakpoints at approximately 1024px, 900px, 768px, and 480px.

The default visual direction is a dark theme using cyan, violet, blue, pink, and warm gradients. The primary fonts are Inter for body text and Poppins for headings.

### `js/main.js`

The script contains these behavior groups:

- **State and social rendering**: Defines hero social links and renders them into `#hero-social`.
- **Data loading**: Fetches the four active JSON files with `Promise.all`.
- **Skills rendering**: Creates one category card per item in `skills.json`.
- **Project rendering**: Creates project cards, converts GitHub blob image URLs to raw URLs, renders technology tags and links, and adds a View All button when there are more than six projects.
- **Experience rendering**: Creates timeline entries from `experience.json`.
- **Achievement rendering**: Creates achievement cards, duplicates them for continuous scrolling, and starts automatic horizontal scrolling.
- **Loading screen**: Uses GSAP to move the three overlay panels upward after the window loads.
- **Navigation**: Handles navbar scroll state, mobile menu toggling, active section highlighting, and smooth anchor scrolling.
- **Typing effect**: Cycles through Front-End Developer, UI/UX Designer, Python Developer, and Game Developer.
- **Intersection animations**: Adds `visible` classes to elements carrying `data-aos`.
- **Resume viewer**: Points the iframe and download action at a Google Drive-hosted resume.
- **Notifications**: Provides a `showNotification()` helper and injects its animation styles. No current page action calls this helper.
- **Back to top**: Shows the button after 500px of scroll and returns to the top on click.
- **AOS initialization**: Starts AOS when the external library is available.
- **Parallax**: Moves `.gradient-orb` elements on scroll.
- **Optional cursor effect**: Defines but does not enable a custom cursor.
- **Image lazy loading**: Supports images using `data-src`; current rendered images use `src`, so this path is currently inactive.

## 6. Active Data Contracts

The following files are the source of content rendered by the current application.

### `data/skills.json`

Top-level type: array.

```json
{
  "title": "string",
  "icon": "ionicon-name",
  "skills": ["string"]
}
```

Current categories include Programming, Frontend & Design, Game Development, Databases, Tools, Automation, Core Strengths, and Soft Skills.

The renderer uses `title`, `icon`, and `skills`. It renders both an Ionicons element and a Font Awesome fallback element.

### `data/projects.json`

Top-level type: array.

```json
{
  "title": "string",
  "description": "string",
  "image": "absolute-or-relative-image-url",
  "techStack": ["string"],
  "githubLink": "string-or-null",
  "demoLink": "string-or-null"
}
```

There are currently 12 project records, including AI Study Buddy, HireSync, FinTech Dashboard, Recipes Book, Math with Gesture, Fake URL Detector, Encryption Application, RMKCET College Website, Music Player, Picture Gallery, Custom Video Player, and Aesthetic Stopwatch Timer.

`main.js` expects `techStack`, `githubLink`, and `demoLink`. Project links open in a new tab. Project images are rendered with the project title as their `alt` text.

### `data/experience.json`

Top-level type: array.

```json
{
  "company": "string",
  "role": "string",
  "duration": "string",
  "description": "string"
}
```

There are currently three records: UpTo Skills, Edunet Foundation (IBM), and CodeAlpha.

The renderer uses all four fields. Unlike the aggregate `data.json` model, this active model does not contain a `location` field.

### `data/achievements.json`

Top-level type: array.

```json
{
  "title": "string",
  "year": "string-or-number",
  "description": "string"
}
```

There are currently seven achievement records. Each rendered card receives a trophy icon, year, title, and description.

## 7. Alternate Data Model

`data.json` is not read by `js/main.js`. It contains aggregate `skills`, `projects`, and `experience` collections using a different schema:

- Skills use `technical` and `nonTechnical` groups.
- Projects use `category`, `image`, `links.external`, `links.github`, `tags`, and `description`.
- Experience uses `role`, `company`, `duration`, `location`, and `description`.
- It does not contain achievements.

This file appears to be an older or alternate content model. It should either be removed, migrated to the active schema, or explicitly documented as archival data to avoid editing the wrong source.

## 8. Asset Inventory

### General assets

- `assets/favicon.svg`: SVG favicon referenced by the document head.
- `assets/profile.png`: Hero profile image referenced by the static HTML.

### Project assets

Local thumbnails currently present include:

- `college-rework.png`
- `encryptionapp.png`
- `fakeurldetector.png`
- `fintech.jpeg`
- `hiresync.png`
- `internarea.png`
- `mathwithgesture.jpg`
- `musicplayer.png`
- `picturegallery.png`
- `recipes-book.jpeg`
- `skillPassport.png`
- `stopwatch.png`
- `studybuddy.png`
- `videoplayer.png`

The active `data/projects.json` uses raw GitHub URLs for all project images, so the local project thumbnails are not required for those rendered cards unless the data is changed to local paths.

## 9. External Services and Dependencies

| Dependency or service     | Use                                   |
| ------------------------- | ------------------------------------- |
| Google Fonts              | Inter and Poppins typography          |
| Font Awesome CDN          | Social, utility, and decorative icons |
| AOS CDN                   | Scroll reveal animations              |
| GSAP CDN                  | Loader panel animation                |
| Ionicons CDN              | Skill category icons                  |
| Google Drive              | Resume iframe and download URL        |
| GitHub raw content        | Project images                        |
| Vercel and Streamlit URLs | Project demos in project data         |

The page depends on network access for fonts, icon libraries, animation libraries, resume content, project images, and project demo links. Without a network connection, the local shell and local image assets remain available but some visual and content features may be incomplete.

## 10. Known Inconsistencies and Maintenance Risks

1. **Speckit artifacts are not configured**: The repository contains Speckit templates and a constitution template, but no feature directory, `spec.md`, `plan.md`, or `tasks.md`.
2. **`data.json` is disconnected**: The runtime reads `data/*.json`, not the root-level aggregate file.
3. **Legacy asset names do not match current assets**: Several paths in `data.json` such as `assets/projects/music.png`, `video.png`, `fackurl.png`, and `jumpy.png` do not match the current local filenames.
4. **Achievement markup has an extra closing `div`**: `renderAchievements()` emits an additional `</div>` after each achievement card. Browsers repair malformed HTML, but the generated markup should be corrected if this section is maintained.
5. **Resume action is externally hosted**: The resume iframe and download URL depend on a specific Google Drive identifier and may fail if the file permissions or URL changes.
6. **Resume placeholder link**: The hero action labeled `View My Resume` points to `#contact`, while the actual resume viewer is in the contact section.
7. **Social links are inconsistent**: Hero social data and static resume social links use different LinkedIn and LeetCode URLs.
8. **Skill bar code is currently unused**: `initializeSkillBars()` searches for `.skill-fill`, but the active skill renderer creates skill tags and no skill-fill elements.
9. **Contact form styles have no corresponding form**: CSS includes `.contact-form` styles, but `index.html` does not currently include a contact form.
10. **Project card content is injected as HTML**: JSON values are interpolated into `innerHTML`. This is acceptable for trusted repository-controlled data, but user-supplied or remotely editable content would require escaping or DOM-based rendering.
11. **External links should consistently include `rel="noopener noreferrer"`**: Generated hero links include `noopener`, while several static links only use `target="_blank"`.
12. **No local automated test suite is present**: There is no package manifest, test runner, lint configuration, or build command in the repository.

## 11. Running the Portfolio

Because `main.js` uses `fetch`, opening `index.html` directly with a `file://` URL may be blocked by browser cross-origin rules. Use a local HTTP server from the repository root instead.

Example with Python:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/` in a browser.

A production deployment can use any static hosting provider that serves the repository root and preserves the relative paths to `css/`, `js/`, `data/`, and `assets/`.

## 12. Verification Checklist

- Confirm all four files under `data/` return valid JSON.
- Open the site through HTTP rather than a local `file://` URL.
- Confirm skills, projects, experience, and achievements render after page load.
- Confirm the mobile menu opens and closes.
- Confirm navigation anchors account for the fixed navbar offset.
- Confirm the project View All button appears and collapses correctly when more than six projects exist.
- Confirm the resume iframe and download action still have access to the external Google Drive file.
- Check the browser console for failed CDN, image, JSON, or resume requests.
- Check the page at desktop, tablet, and mobile widths.
- Validate generated achievement markup after addressing the extra closing element.

## 13. Source of Truth

For current browser behavior, treat these files as authoritative:

- Structure and static copy: `index.html`
- Behavior and dynamic rendering: `js/main.js`
- Visual design and responsive layout: `css/styles.css`
- Runtime skills: `data/skills.json`
- Runtime projects: `data/projects.json`
- Runtime experience: `data/experience.json`
- Runtime achievements: `data/achievements.json`

Treat `data.json` as a separate legacy or migration candidate until its relationship to the active `data/` files is decided.
