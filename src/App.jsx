import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GradientWaves from './components/GradientWaves';

export default function App() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [projectsRes, expRes, skillsRes, achRes] = await Promise.all([
          fetch('/data/projects.json').then((res) => res.json()),
          fetch('/data/experience.json').then((res) => res.json()),
          fetch('/data/skills.json').then((res) => res.json()),
          fetch('/data/achievements.json').then((res) => res.json()),
        ]);

        setProjects(projectsRes);
        setExperience(expRes);
        setSkills(skillsRes);
        setAchievements(achRes);
      } catch (err) {
        console.error('Failed to load portfolio data:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0b0d', color: '#f59e0b', fontFamily: 'Outfit, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ width: '40px', height: '40px', border: '3px solid rgba(245, 158, 11, 0.2)', borderTopColor: '#f59e0b', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Loading Dani Aldrin's Portfolio...</span>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-canvas)' }}>
      {/* Global Fixed Ambient Animated GradientWaves Background carried to all sections */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 0, opacity: 0.45 }}>
        <GradientWaves
          horizonColor="#5227FF"
          waveColor="#FF9FFC"
          crestColor="#FFFFFF"
          speed={0.35}
          amplitude={2.2}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1}
          height={5.5}
          fogDepth={15}
          detail="medium"
          brightness={1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.4}
          grain
          grainIntensity={0.05}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Projects projects={projects} />
          <About />
          <Experience experience={experience} />
          <Skills skills={skills} />
          <Achievements achievements={achievements} />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
