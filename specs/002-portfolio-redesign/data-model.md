# Data Model: Portfolio Content Schemas

## 1. Project Entity (`data/projects.json`)

```json
[
  {
    "id": "string",
    "title": "string",
    "tagline": "string",
    "description": "string",
    "image": "string",
    "featured": "boolean",
    "category": "case-study | experiment",
    "techStack": ["string"],
    "githubLink": "string | null",
    "demoLink": "string | null"
  }
]
```

### Validation & Rules:
- `title`: Non-empty string.
- `description`: Detailed description of purpose, implementation, and features.
- `image`: URL or relative path (`assets/projects/...`). Must fall back gracefully if image fails to load.
- `featured`: `true` for major case studies (AI Study Buddy, HireSync, FinTech Dashboard, Recipes Book, Math with Gesture, RMKCET Website, InternArea, SkillPassport).
- `category`: `"case-study"` for main showcase, `"experiment"` for playground items (Music Player, Picture Gallery, Video Player, Stopwatch, Fake URL Detector, Encryption App).
- `githubLink` / `demoLink`: Valid URLs or `null`. Must render with `target="_blank" rel="noopener noreferrer"`.

---

## 2. Experience Entity (`data/experience.json`)

```json
[
  {
    "company": "string",
    "role": "string",
    "duration": "string",
    "location": "string",
    "description": "string",
    "highlights": ["string"]
  }
]
```

---

## 3. Skill Category Entity (`data/skills.json`)

```json
[
  {
    "title": "string",
    "icon": "string",
    "skills": ["string"]
  }
]
```

### Validation & Rules:
- No fake skill percentages or progress bars. Skills are grouped visually as pill tags under clean category headers.

---

## 4. Achievement Entity (`data/achievements.json`)

```json
[
  {
    "title": "string",
    "year": "string | number",
    "description": "string",
    "category": "academic | hackathon | certification | leadership"
  }
]
```
