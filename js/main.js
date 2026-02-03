// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize all features
    handleLoadingScreen();
    initializeNavigation();
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeSkillBars();

    initializeContactForm();
    initializeBackToTop();
    initializeAOS();
}

// ========================================
// LOADING SCREEN
// ========================================
function handleLoadingScreen() {
    // GSAP Overlay Animation
    // Wait for window load to ensure everything is ready
    if (document.readyState === 'complete') {
        startLoaderAnimation();
    } else {
        window.addEventListener('load', startLoaderAnimation);
    }
}

function startLoaderAnimation() {
    if (typeof gsap !== 'undefined') {
        gsap.to(".first", { duration: 1.5, delay: 0.2, top: "-100%", ease: "expo.inOut" });
        gsap.to(".second", { duration: 1.5, delay: 0.4, top: "-100%", ease: "expo.inOut" });
        gsap.to(".third", { duration: 1.5, delay: 0.6, top: "-100%", ease: "expo.inOut" });
    }
}

// ========================================
// NAVIGATION
// ========================================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    });
}



// ========================================
// TYPING EFFECT
// ========================================
function initializeTypingEffect() {
    const typedTextElement = document.getElementById('typed-text');
    const cursorElement = document.querySelector('.cursor');
    const texts = [
        'Front-End Developer',
        'UI/UX Designer',
        'Python Developer',
        'Game Developer'
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
            if (cursorElement) cursorElement.style.animation = 'blink 1s step-end infinite';
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
                cursorElement.style.animation = 'none';
                cursorElement.style.opacity = '1';
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
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(el => observer.observe(el));
}

// ========================================
// SKILL BARS ANIMATION
// ========================================
function initializeSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const progress = skillBar.getAttribute('data-progress');

                // Animate the skill bar
                setTimeout(() => {
                    skillBar.style.width = progress + '%';
                }, 200);

                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
}



// ========================================
// CONTACT FORM
// ========================================
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

            // Reset form
            contactForm.reset();

            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
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
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add notification animations
const style = document.createElement('style');
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
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// AOS INITIALIZATION
// ========================================
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out',
            once: true,
            offset: 100,
            delay: 100
        });
    }
}

// ========================================
// PARALLAX EFFECT
// ========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');

    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========================================
// SMOOTH SCROLL FOR ALL LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// CURSOR EFFECT (OPTIONAL)
// ========================================
function initializeCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
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

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });

    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Uncomment to enable custom cursor
// initializeCursorEffect();

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c👋 Hello Developer!', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cLooking at the code? I like your style! 🚀', 'color: #667eea; font-size: 16px;');
console.log('%cFeel free to reach out if you want to collaborate!', 'color: #10b981; font-size: 14px;');
