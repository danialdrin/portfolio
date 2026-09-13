import React from 'react';

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Career Path</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-description">
            My professional journey across design, AI engineering, and web development.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((exp, index) => (
            <div key={exp.company + index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
