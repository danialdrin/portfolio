import React from 'react';

export default function Contact() {
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
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-tag">Let's Connect</span>
            <h2 className="contact-headline">Have something worth building?</h2>
            <p className="contact-subtext">
              I'm available for engineering internships, UI/UX design projects, and software collaborations. Feel free to reach out anytime!
            </p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span>Email</span>
                  <a href="mailto:danialdrin.d@gmail.com" aria-label="Send email to Dani Aldrin">danialdrin.d@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span>Phone</span>
                  <a href="tel:+918122904068" aria-label="Call Dani Aldrin">+91 8122904068</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-detail-text">
                  <span>Location</span>
                  <p>Kanyakumari, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="hero-social-group">
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

          <iframe
            src="https://drive.google.com/file/d/11o-VDsHmuV7l-zQO0OCcFwwzHnxb9_C4/preview"
            className="resume-pdf-iframe"
            title="Dani Aldrin D - Professional Resume PDF"
            allow="autoplay"
          />
        </div>
      </div>
    </section>
  );
}
