// ========================================
// GLOBAL STATE
// ========================================
const portfolioState = {
  heroSocialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/danialdrin",
      icon: "fab fa-github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dani-aldrin-m13/",
      icon: "fab fa-linkedin",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/dani-aldrin-m13/",
      icon: "fas fa-code",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/danialdrin_d",
      icon: "fab fa-hackerrank",
    },
  ],
};

function renderHeroSocialLinks() {
  const heroSocial = document.getElementById("hero-social");
  if (!heroSocial) return;

  heroSocial.innerHTML = portfolioState.heroSocialLinks
    .map(
      (social) => `
        <a href="${social.url}" target="_blank" rel="noopener" class="social-link" title="${social.name}">
          <i class="${social.icon}"></i>
        </a>
      `,
    )
    .join("");
}

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  initializeApp();
});

async function initializeApp() {
  // Fetch and load data
  try {
    const [skills, projects, experience, achievements] = await Promise.all([
      fetch("data/skills.json").then((res) => res.json()),
      fetch("data/projects.json").then((res) => res.json()),
      fetch("data/experience.json").then((res) => res.json()),
      fetch("data/achievements.json").then((res) => res.json()),
    ]);

    renderSkills(skills);
    renderProjects(projects);
    renderExperience(experience);
    renderAchievements(achievements);
  } catch (error) {
    console.error("Error loading portfolio data:", error);
  }

  // Initialize all features
  handleLoadingScreen();
  initializeNavigation();
  renderHeroSocialLinks();
  initializeTypingEffect();
  initializeScrollAnimations();
  initializeSkillBars();

  initializeResumeViewer();
  initializeBackToTop();
  initializeAOS();
}

function renderSkills(skills) {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (category, index) => `
        <div class="skill-category-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="skill-category-header">
                <div class="skill-category-icon">
                    <ion-icon name="${category.icon}"></ion-icon>
                    <i class="fas fa-${category.icon.replace("-outline", "")}"></i>
                </div>
                <h3>${category.title}</h3>
            </div>
            <div class="skill-tags">
                ${category.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
            </div>
        </div>
    `,
    )
    .join("");

  // If ion-icon failed or to support FontAwesome fallbacks
  // The skills.json uses ionicons like 'code-slash-outline'
  // I've added a fallback <i> with fas fa- names
}

function renderProjects(projects) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  // Store all projects for the "View All" functionality
  container.setAttribute("data-total-projects", projects.length);

  // Generate all project cards
  const allProjectsHtml = projects
    .map((project, index) => {
      const delay = (index % 3) * 100;

      // Convert GitHub blob URLs to raw content URLs
      let imageUrl = project.image;
      if (imageUrl.includes("github.com") && imageUrl.includes("/blob/")) {
        imageUrl = imageUrl
          .replace("github.com", "raw.githubusercontent.com")
          .replace("/blob/", "/");
      }

      let linksHtml = "";
      if (project.demoLink) {
        linksHtml += `<a href="${project.demoLink}" class="project-link" target="_blank" title="Live Demo"><i class="fas fa-external-link-alt"></i></a>`;
      }
      if (project.githubLink) {
        linksHtml += `<a href="${project.githubLink}" class="project-link" target="_blank" title="View Source"><i class="fab fa-github"></i></a>`;
      }

      const tagsHtml = project.techStack
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("");

      return `
        <div class="project-card" data-project-index="${index}" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="project-image">
                <img src="${imageUrl}" alt="${project.title}">
                <div class="project-overlay">
                    <div class="project-links">
                        ${linksHtml}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${tagsHtml}
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </div>
        `;
    })
    .join("");

  container.innerHTML = allProjectsHtml;

  // Add "View All Projects" button if there are more than 6 projects
  if (projects.length > 6) {
    const viewAllBtn = document.createElement("button");
    viewAllBtn.id = "view-all-projects-btn";
    viewAllBtn.className = "btn btn-primary view-all-btn";
    viewAllBtn.textContent = "View All Projects";
    viewAllBtn.setAttribute("data-expanded", "false");

    // Insert button after the projects grid, inside the container
    container.parentElement.appendChild(viewAllBtn);

    // Initialize button functionality
    initializeViewAllProjects(projects.length);
  }
}

function initializeViewAllProjects(totalProjects) {
  const viewAllBtn = document.getElementById("view-all-projects-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const projectsSection = document.getElementById("projects");

  if (!viewAllBtn) return;

  // Hide cards beyond the first 6
  projectCards.forEach((card, index) => {
    if (index >= 6) {
      card.classList.add("hidden-project");
    }
  });

  // Calculate hidden projects count
  const hiddenCount = totalProjects - 6;

  // Set initial button text with hidden project count
  viewAllBtn.textContent = `View All Projects (${hiddenCount})`;

  viewAllBtn.addEventListener("click", () => {
    const isExpanded = viewAllBtn.getAttribute("data-expanded") === "true";

    if (isExpanded) {
      // Collapse
      projectCards.forEach((card, index) => {
        if (index >= 6) {
          card.classList.add("hidden-project");
        }
      });
      viewAllBtn.textContent = `View All Projects (${hiddenCount})`;
      viewAllBtn.setAttribute("data-expanded", "false");

      // Scroll to projects section
      if (projectsSection) {
        const offsetTop = projectsSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      // Expand
      projectCards.forEach((card) => {
        card.classList.remove("hidden-project");
      });
      viewAllBtn.textContent = "Show Less";
      viewAllBtn.setAttribute("data-expanded", "true");

      // Smooth scroll to button
      setTimeout(() => {
        viewAllBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  });
}

function renderExperience(experience) {
  const container = document.getElementById("experience-container");
  if (!container) return;

  container.innerHTML = experience
    .map(
      (exp, index) => `
        <div class="experience-item" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
            <div class="experience-marker"></div>
            <div class="experience-content">
                <div class="experience-header">
                    <h3>${exp.role}</h3>
                    <span class="experience-duration">${exp.duration}</span>
                </div>
                <h4 class="experience-company">${exp.company}</h4>
                <p class="experience-description">${exp.description}</p>
            </div>
        </div>
    `,
    )
    .join("");
}

function renderAchievements(achievements) {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  container.innerHTML = achievements
    .map(
      (ach, index) => `
        <div class="achievement-card" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="achievement-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <span class="achievement-year">${ach.year}</span>
            <h3>${ach.title}</h3>
            <p>${ach.description}</p>
        </div>
        </div>
    `,
    )
    .join("");

  // Clone cards for seamless infinite scroll
  const cards = container.querySelectorAll(".achievement-card");
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    container.appendChild(clone);
  });

  // Initialize auto-scroll after rendering
  initializeAchievementsAutoScroll();
}

function initializeAchievementsAutoScroll() {
  const container = document.getElementById("achievements-container");
  if (!container) return;

  // Use native scroll-snap with subtle auto-scroll via timer
  let autoScrollInterval = null;
  let isAutoScrolling = true;

  // Get card width for smooth scrolling
  const cards = container.querySelectorAll(".achievement-card");
  if (cards.length === 0) return;

  const cardWidth = cards[0].offsetWidth;
  const gap = 32; // 2rem gap from CSS
  const cardWithGap = cardWidth + gap;
  const originalCardsCount = cards.length / 2; // Half are clones

  // Auto-scroll function with optimized performance
  function autoScroll() {
    if (!isAutoScrolling) return;

    const maxScroll = container.scrollWidth / 2;
    let currentScroll = container.scrollLeft;
    let nextScroll = currentScroll + 2; // Smooth increment

    // Seamless looping
    if (nextScroll >= maxScroll) {
      container.scrollLeft = 0;
    } else {
      container.scrollLeft = nextScroll;
    }
  }

  // Start auto-scroll every 30ms for smooth motion
  autoScrollInterval = setInterval(autoScroll, 30);

  // Pause on mouse enter
  container.addEventListener("mouseenter", () => {
    isAutoScrolling = false;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
  });

  // Resume on mouse leave
  container.addEventListener("mouseleave", () => {
    isAutoScrolling = true;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 30);
  });

  // Pause on touch
  container.addEventListener("touchstart", () => {
    isAutoScrolling = false;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
  });

  container.addEventListener("touchend", () => {
    isAutoScrolling = true;
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(autoScroll, 30);
  });
}

// ========================================
// LOADING SCREEN
// ========================================
function handleLoadingScreen() {
  // GSAP Overlay Animation
  // Wait for window load to ensure everything is ready
  if (document.readyState === "complete") {
    startLoaderAnimation();
  } else {
    window.addEventListener("load", startLoaderAnimation);
  }
}

function startLoaderAnimation() {
  if (typeof gsap !== "undefined") {
    gsap.to(".first", {
      duration: 1.5,
      delay: 0.2,
      top: "-100%",
      ease: "expo.inOut",
    });
    gsap.to(".second", {
      duration: 1.5,
      delay: 0.4,
      top: "-100%",
      ease: "expo.inOut",
    });
    gsap.to(".third", {
      duration: 1.5,
      delay: 0.6,
      top: "-100%",
      ease: "expo.inOut",
    });
  }
}

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    mobileToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
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

  // Smooth scroll for nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// ========================================
// TYPING EFFECT
// ========================================
function initializeTypingEffect() {
  const typedTextElement = document.getElementById("typed-text");
  const cursorElement = document.querySelector(".cursor");
  const texts = [
    "Front-End Developer",
    "UI/UX Designer",
    "Python Developer",
    "Game Developer",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const fullText = currentText;

    // Determine current displayed text
    if (isDeleting) {
      typedTextElement.textContent = fullText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextElement.textContent = fullText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Base typing speed logic
    let typeSpeed = isDeleting ? 40 : 80;

    // Add random variance to make it look "human"
    typeSpeed += Math.random() * 40;

    // If word is complete
    if (!isDeleting && charIndex === fullText.length) {
      // Pause at the end of the word
      typeSpeed = 2000;
      isDeleting = true;
      if (cursorElement)
        cursorElement.style.animation = "blink 1s step-end infinite";
    }
    // If deletion is complete
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      // Short pause before starting next word
      typeSpeed = 500;
    }
    // While typing, stop the cursor from blinking for a better effect
    else {
      if (cursorElement && !isDeleting) {
        cursorElement.style.animation = "none";
        cursorElement.style.opacity = "1";
      }
    }

    setTimeout(type, typeSpeed);
  }

  // Start typing effect
  if (typedTextElement) {
    setTimeout(type, 1000);
  }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll("[data-aos]");
  animatedElements.forEach((el) => observer.observe(el));
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
function initializeSkillBars() {
  const skillBars = document.querySelectorAll(".skill-fill");

  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        const progress = skillBar.getAttribute("data-progress");

        // Animate the skill bar
        setTimeout(() => {
          skillBar.style.width = progress + "%";
        }, 200);

        observer.unobserve(skillBar);
      }
    });
  }, observerOptions);

  skillBars.forEach((bar) => observer.observe(bar));
}

// ========================================
// RESUME VIEWER
// ========================================
function initializeResumeViewer() {
  const resumeIframe = document.getElementById("resume-iframe");
  const downloadBtn = document.getElementById("download-resume-btn");

  // Configure your resume URL here
  // Tips for hosting:
  // 1. GitHub: Upload PDF to GitHub and use:
  //    https://github.com/[username]/[repo]/raw/main/resume.pdf
  // 2. Google Drive: Use Google Drive Viewer:
  //    https://drive.google.com/viewerng/viewer?url=[PDF_URL]&embedded=true
  // 3. Other options: Dropbox, OneDrive, etc.

  const resumeURL =
    "https://drive.google.com/viewerng/viewer?url=https://drive.google.com/uc?id=11o-VDsHmuV7l-zQO0OCcFwwzHnxb9_C4&export=download&embedded=true";

  if (resumeIframe) {
    resumeIframe.src = resumeURL;
  }

  // Handle download button
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      // Replace with your actual PDF download URL
      const downloadURL =
        "https://drive.google.com/uc?id=11o-VDsHmuV7l-zQO0OCcFwwzHnxb9_C4&export=download";
      const link = document.createElement("a");
      link.href = downloadURL;
      link.download = "Dani_Aldrin_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
        <span>${message}</span>
    `;

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#3b82f6"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Add notification animations
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initializeBackToTop() {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ========================================
// AOS INITIALIZATION
// ========================================
function initializeAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true,
      offset: 100,
      delay: 100,
    });
  }
}

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".gradient-orb");

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========================================
// SMOOTH SCROLL FOR ALL LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // Skip if it's just "#"
    if (href === "#") {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ========================================
// CURSOR EFFECT (OPTIONAL)
// ========================================
function initializeCursorEffect() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.2s ease;
        display: none;
    `;
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.display = "block";
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Scale cursor on hover
  const hoverElements = document.querySelectorAll("a, button, .project-card");
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
    });
  });
}

// Uncomment to enable custom cursor
// initializeCursorEffect();

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log(
  "%c👋 Hello Developer!",
  "color: #00d4ff; font-size: 24px; font-weight: bold;",
);
console.log(
  "%cLooking at the code? I like your style! 🚀",
  "color: #667eea; font-size: 16px;",
);
console.log(
  "%cFeel free to reach out if you want to collaborate!",
  "color: #10b981; font-size: 14px;",
);
