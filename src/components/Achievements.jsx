import React from 'react';
import GlareHover from './GlareHover';

function AchievementCard({ ach }) {
  return (
    <GlareHover
      width="350px"
      height="260px"
      background="var(--bg-surface)"
      borderRadius="var(--radius-md)"
      borderColor="var(--border-subtle)"
      glareColor="#ffffff"
      glareOpacity={0}
      glareAngle={-30}
      glareSize={300}
      transitionDuration={800}
      playOnce={false}
      className="achievement-card"
    >
      <div className="achievement-card-content">
        <div className="achievement-top">
          <div className="achievement-trophy">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
            </svg>
          </div>
          <span className="achievement-year">{ach.year}</span>
        </div>
        <h3 className="achievement-title">{ach.title}</h3>
        <p className="achievement-desc">{ach.description}</p>
      </div>
    </GlareHover>
  );
}

export default function Achievements({ achievements }) {
  if (!achievements || achievements.length === 0) return null;

  // Duplicate achievements 3 times to ensure a continuous seamless loop
  const carouselItems = [...achievements, ...achievements, ...achievements];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Milestones</span>
          <h2 className="section-title">Achievements & Certifications</h2>
          <p className="section-description">
            Academic honors, certifications, hackathon selections, and leadership awards.
          </p>
        </div>
      </div>

      <div className="achievements-carousel-wrapper">
        <div className="achievements-track">
          {carouselItems.map((ach, index) => (
            <AchievementCard key={`${ach.title}-${index}`} ach={ach} />
          ))}
        </div>
      </div>
    </section>
  );
}
