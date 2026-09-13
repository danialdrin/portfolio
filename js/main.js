// ==========================================================================
// DANI ALDRIN PORTFOLIO — MAIN APPLICATION LOGIC
// ==========================================================================

const portfolioState = {
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/danialdrin",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dani-aldrin-d-aa1068295/",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/dani-aldrin-m13/",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.416.942 1.374 1.374 0 0 0 .416.961l5.352 5.352c.26.26.611.406.97.406.36 0 .71-.146.97-.406a1.374 1.374 0 0 0 0-1.931L9.89 6.741l4.553-4.553A1.374 1.374 0 0 0 13.483 0zm-6.04 12.352a1.374 1.374 0 0 0-.97.406l-5.352 5.352a1.374 1.374 0 0 0 0 1.931l5.352 5.352c.26.26.611.406.97.406.36 0 .71-.146.97-.406a1.374 1.374 0 0 0 0-1.931l-4.382-4.382 4.382-4.382a1.374 1.374 0 0 0 0-1.941 1.374 1.374 0 0 0-.97-.406z"/></svg>`
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/danialdrin_d",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm5.4 16.5h-2.1v-4.2h-6.6v4.2H6.6V7.5h2.1v4.2h6.6V7.5h2.1v9z"/></svg>`
    }
  ]
};

// Safety HTML Escaper
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

async function initializeApp() {
  renderSocialLinks();
  initializeNavigation();
  initializeScrollReveals();

  try {
    const [projects, experience, skills, achievements] = await Promise.all([
      fetch("data/projects.json").then((res) => res.json()),
      fetch("data/experience.json").then((res) => res.json()),
      fetch("data/skills.json").then((res) => res.json()),
      fetch("data/achievements.json").then((res) => res.json()),
    ]);

    renderProjects(projects);
    renderExperience(experience);
    renderSkills(skills);
    renderAchievements(achievements);

    // Re-trigger scroll reveal for dynamically injected elements
    setTimeout(() => {
      initializeScrollReveals();
    }, 100);
  } catch (error) {
    console.error("Error loading portfolio data:", error);
  }
}

// Render Social Icon Links
function renderSocialLinks() {
  const containers = [
    document.getElementById("hero-social"),
    document.getElementById("contact-social")
  ];

  const html = portfolioState.socialLinks
    .map(
      (social) => `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${social.name}" aria-label="${social.name}">
          ${social.iconSvg}
        </a>
      `
    )
    .join("");

  containers.forEach(container => {
    if (container) container.innerHTML = html;
  });
}

// Render Projects (Selected Work + Playground)
function renderProjects(projects) {
  const selectedContainer = document.getElementById("projects-container");
  const playgroundContainer = document.getElementById("playground-container");

  if (!selectedContainer || !playgroundContainer) return;

  const caseStudies = projects.filter((p) => p.category === "case-study" || p.featured === true);
  const experiments = projects.filter((p) => p.category === "experiment" && !p.featured);

  // Render Selected Work Case Studies
  selectedContainer.innerHTML = caseStudies
    .map((project, index) => {
      const isHero = index === 0; // First case study gets hero layout
      const tagsHtml = project.techStack
        .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
        .join("");

      let linksHtml = "";
      if (project.githubLink) {
        linksHtml += `
          <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
            <span>Repository</span>
            <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none"/></svg>
          </a>
        `;
      }
      if (project.demoLink) {
        linksHtml += `
          <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="project-link-btn" style="color:var(--accent-amber);">
            <span>Live Demo</span>
            <svg viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" fill="none"/></svg>
          </a>
        `;
      }

      return `
        <article class="project-card ${isHero ? 'featured-hero' : ''} reveal">
          <div class="project-media">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy" />
          </div>
          <div class="project-body">
            <div class="project-tagline">${escapeHtml(project.tagline || 'Case Study')}</div>
            <h3 class="project-title">${escapeHtml(project.title)}</h3>
            <p class="project-desc">${escapeHtml(project.description)}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-footer">${linksHtml}</div>
          </div>
        </article>
      `;
    })
    .join("");

  // Render Playground Experiments
  playgroundContainer.innerHTML = experiments
    .map((exp) => {
      const tagsHtml = exp.techStack
        .map((tag) => `<span class="project-tag">${escapeHtml(tag)}</span>`)
        .join("");

      let linksHtml = "";
      if (exp.githubLink) {
        linksHtml += `
          <a href="${exp.githubLink}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
            <span>Code</span>
          </a>
        `;
      }
      if (exp.demoLink) {
        linksHtml += `
          <a href="${exp.demoLink}" target="_blank" rel="noopener noreferrer" class="project-link-btn" style="color:var(--accent-amber);">
            <span>Demo</span>
          </a>
        `;
      }

      return `
        <article class="experiment-card reveal">
          <div class="experiment-header">
            <div class="experiment-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <div style="display:flex; gap:0.5rem;">${linksHtml}</div>
          </div>
          <h3 class="experiment-title">${escapeHtml(exp.title)}</h3>
          <p class="experiment-desc">${escapeHtml(exp.description)}</p>
          <div class="project-tags">${tagsHtml}</div>
        </article>
      `;
    })
    .join("");
}

// Render Experience Timeline
function renderExperience(experience) {
  const container = document.getElementById("experience-container");
  if (!container) return;

  container.innerHTML = experience
    .map((exp) => `
      <div class="timeline-item reveal">
        <div class="timeline-marker"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <h3 class="timeline-role">${escapeHtml(exp.role)}</h3>
            <span class="timeline-duration">${escapeHtml(exp.duration)}</span>
          </div>
          <div class="timeline-company">${escapeHtml(exp.company)}</div>
          <p class="timeline-desc">${escapeHtml(exp.description)}</p>
        </div>
      </div>
    `)
    .join("");
}

// Render Categorized Skills (No fake percentages)
function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((category) => {
      const skillsPills = category.skills
        .map((skill) => `<span class="skill-pill">${escapeHtml(skill)}</span>`)
        .join("");

      return `
        <div class="skill-category-card reveal">
          <div class="skill-category-header">
            <div class="skill-category-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <h3 class="skill-category-title">${escapeHtml(category.title)}</h3>
          </div>
          <div class="skill-pill-group">
            ${skillsPills}
          </div>
        </div>
      `;
    })
    .join("");
}

// Render Achievements
function renderAchievements(achievements) {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  container.innerHTML = achievements
    .map((ach) => `
      <div class="achievement-card reveal">
        <div class="achievement-top">
          <div class="achievement-trophy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
          </div>
          <span class="achievement-year">${escapeHtml(String(ach.year))}</span>
        </div>
        <h3 class="achievement-title">${escapeHtml(ach.title)}</h3>
        <p class="achievement-desc">${escapeHtml(ach.description)}</p>
      </div>
    `)
    .join("");
}

// Navigation Controller
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Navbar scroll background
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile drawer toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.toggle("active");
      mobileToggle.classList.toggle("active");
      mobileToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Close menu on link click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        mobileToggle.classList.remove("active");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Highlight active section on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
}

// Lightweight IntersectionObserver Scroll Reveal
function initializeScrollReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.active)");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}
