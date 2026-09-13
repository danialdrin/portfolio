import React from 'react';
import TextType from './TextType';
import SpecularButton from './SpecularButton';

export default function Hero() {
  const roles = [
    'UI/UX Designer',
    'Frontend Developer',
    'Game Developer',
    'Backend Developer',
    'Full Stack Developer'
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/danialdrin",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dani-aldrin-m13/",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/dani-aldrin-m13/",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0-.416.942 1.374 1.374 0 0 0 .416.961l5.352 5.352c.26.26.611.406.97.406.36 0 .71-.146.97-.406a1.374 1.374 0 0 0 0-1.931L9.89 6.741l4.553-4.553A1.374 1.374 0 0 0 13.483 0zm-6.04 12.352a1.374 1.374 0 0 0-.97.406l-5.352 5.352a1.374 1.374 0 0 0 0 1.931l5.352 5.352c.26.26.611.406.97.406.36 0 .71-.146.97-.406a1.374 1.374 0 0 0 0-1.931l-4.382-4.382 4.382-4.382a1.374 1.374 0 0 0 0-1.941 1.374 1.374 0 0 0-.97-.406z" />
        </svg>
      )
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/danialdrin_d",
      iconSvg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm5.4 16.5h-2.1v-4.2h-6.6v4.2H6.6V7.5h2.1v4.2h6.6V7.5h2.1v9z" />
        </svg>
      )
    }
  ];

  return (
    <section id="home" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ gridTemplateColumns: '0.9fr 1.1fr' }}>
          {/* LEFT SIDE: Direct Profile Image standing from section bottom */}
          <div className="hero-image-wrapper">
            <img
              src="assets/profile.webp"
              alt="Dani Aldrin - Developer & Designer Profile"
              className="hero-profile-img"
              width="450"
              height="550"
              fetchPriority="high"
            />
          </div>

          {/* RIGHT SIDE: Text Content & TextType Role Line */}
          <div className="hero-content">
            <div style={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: '0.14em', color: 'var(--accent-amber)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>
              Hello, I'M
            </div>

            <h1 className="hero-name-giant">
              Dani Aldrin
            </h1>

            <div className="hero-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: '40px' }}>
              <TextType
                text={roles}
                typingSpeed={90}
                deletingSpeed={50}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-amber-500"
                className="font-bold text-amber-500"
              />
            </div>

            <p className="hero-bio">
              Computer Science Engineering student focused on building user-focused web applications and AI-powered solutions. Experienced in developing practical projects and AI tools with a passion for turning ideas into useful, well-designed products.
            </p>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Kanyakumari, Tamil Nadu</span>
              </div>
            </div>

            <div className="hero-cta-group" style={{ alignItems: 'center', gap: '1.25rem' }}>
              <SpecularButton
                size="lg"
                radius={14}
                tint="#f59e0b"
                tintOpacity={0}
                blur={0}
                textColor="#ffffff"
                lineColor="#f59e0b"
                baseColor="#262626"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                className="specular-button-hover-yellow"
                onClick={() => {
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>View my work</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </SpecularButton>

              <SpecularButton
                size="lg"
                radius={14}
                tint="#ffffff"
                tintOpacity={0}
                blur={0}
                textColor="#ffffff"
                lineColor="#ffffff"
                baseColor="#262626"
                intensity={1}
                shineSize={10}
                shineFade={40}
                thickness={1}
                speed={0.35}
                followMouse
                proximity={250}
                autoAnimate={false}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's talk
              </SpecularButton>
            </div>

            <div className="hero-social-group" style={{ marginTop: '1.5rem', display: 'flex', gap: '0.85rem' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.name}
                  aria-label={social.name}
                >
                  {social.iconSvg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


