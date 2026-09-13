import React from 'react';

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Toolkit</span>
          <h2 className="section-title">Skills & Capabilities</h2>
          <p className="section-description">
            Technologies, frameworks, and design tools I use to build digital solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>

              <div className="skill-pill-group">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
