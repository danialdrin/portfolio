import React from 'react';
import TiltedCard from './TiltedCard';
import BorderGlow from './BorderGlow';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Designing with Intention, Building with Craft</h2>
        </div>

        <div className="about-container-grid">
          {/* LEFT COLUMN: Interactive TiltedCard Hero Image */}
          <div className="about-hero-image-wrapper">
            <TiltedCard
              imageSrc="assets/profile.webp"
              altText="Dani Aldrin D - Full Stack Developer Profile"
              captionText="Dani Aldrin D"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={16}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="about-tilted-name-overlay">
                  <h3 className="about-tilted-name">Dani Aldrin D</h3>
                </div>
              }
            />
          </div>

          {/* RIGHT COLUMN: Content (Divided into Top Narrative & Bottom Cards) */}
          <div className="about-content-column">
            {/* TOP BLOCK: Narrative Bio */}
            <div className="about-narrative-top">
              <p>
                I'm a <strong>Computer Science Engineering student</strong> at <strong>RMK College of Engineering and Technology | Tiruvallur</strong> (2023 – 2027) with a CGPA of <strong>8.41</strong>. Focused on building user-focused web applications and AI-powered solutions with a strong interest in frontend development, backend integration, and UI/UX.
              </p>
              <p>
                I specialize in developing practical projects and AI-based tools, passionate about solving real-world problems and turning ideas into useful, well-designed digital products.
              </p>
              <p>
                Beyond coursework, I served as Team Captain during my UI/UX internship at UpTo Skills and actively lead student technical initiatives as an executive member of the <strong>Computer Society of India (CSI)</strong>.
              </p>
            </div>

            {/* BOTTOM BLOCK: Education, Leadership & Focus Cards */}
            <div className="about-cards-bottom">
              {/* Education Card */}
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={16}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="info-card">
                  <div className="info-card-body">
                    <h3>Education</h3>
                    <p>B.E. Computer Science Engineering</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      RMK College of Engineering and Technology | Tiruvallur • 2023–2027
                    </p>
                    <div className="info-card-meta">CGPA: 8.41</div>
                  </div>
                </div>
              </BorderGlow>

              {/* Leadership Card */}
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={16}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="info-card">
                  <div className="info-card-body">
                    <h3>Leadership & Roles</h3>
                    <p>Team Captain (UpTo Skills) • CSI Executive Member</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Coordinated UI/UX teams & organized TechDays events
                    </p>
                  </div>
                </div>
              </BorderGlow>

              {/* Core Focus Card */}
              <BorderGlow
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={16}
                glowRadius={30}
                glowIntensity={1}
                coneSpread={25}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
              >
                <div className="info-card">
                  <div className="info-card-body">
                    <h3>Focus Areas</h3>
                    <p>Full Stack Development • AI-Powered Web Applications • UI/UX Design</p>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

