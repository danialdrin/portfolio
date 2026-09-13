import React, { useState } from 'react';
import GlareHover from './GlareHover';
import PixelTransition from './PixelTransition';

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = projects.filter((p) => p.category === 'case-study' || p.featured === true);
  const experiments = projects.filter((p) => p.category === 'experiment' && !p.featured);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'case-studies') return project.category === 'case-study' || project.featured;
    if (activeFilter === 'experiments') return project.category === 'experiment' && !project.featured;
    return true;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Projects & Experiments</h2>
          <p className="section-description">
            A unified showcase of deep-dive full-stack case studies, AI document assistants, and creative web utilities.
          </p>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            <button
              className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              onClick={() => setActiveFilter('all')}
            >
              All Work ({projects.length})
            </button>
            <button
              className={`btn ${activeFilter === 'case-studies' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              onClick={() => setActiveFilter('case-studies')}
            >
              Case Studies ({caseStudies.length})
            </button>
            <button
              className={`btn ${activeFilter === 'experiments' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
              onClick={() => setActiveFilter('experiments')}
            >
              Experiments ({experiments.length})
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <GlareHover
              key={project.id || project.title}
              width="100%"
              height="380px"
              background="var(--bg-surface)"
              borderRadius="var(--radius-lg)"
              borderColor="var(--border-subtle)"
              glareColor="#ffffff"
              glareOpacity={0.25}
              glareAngle={-30}
              glareSize={300}
              transitionDuration={800}
            >
              <PixelTransition
                gridSize={8}
                pixelColor="#f59e0b"
                animationStepDuration={0.4}
                once={false}
                firstContent={
                  <div className="project-card-cover" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0.75rem', position: 'relative' }}>
                    <div className="project-media" style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '210px' }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <div style={{ padding: '1rem 0.5rem 0.5rem 0.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                      <div>
                        <div className="project-tagline">{project.tagline || (project.category === 'case-study' ? 'Case Study' : 'Experiment')}</div>
                        <h3 className="project-title" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-amber)', fontWeight: '600' }}>
                        <span>Click to reveal details</span>
                        <span>⚡ Inspect →</span>
                      </div>
                    </div>
                  </div>
                }
                secondContent={
                  <div className="project-card-details" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '1.5rem', background: 'var(--bg-surface)', position: 'relative', overflowY: 'auto' }}>
                    <div className="project-tagline">{project.tagline || (project.category === 'case-study' ? 'Case Study' : 'Experiment')}</div>
                    <h3 className="project-title" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                    <p className="project-desc" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6', flexGrow: 1 }}>
                      {project.description}
                    </p>

                    <div className="project-tags" style={{ marginBottom: '1.25rem' }}>
                      {project.techStack?.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-footer" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Repository</span>
                            <svg viewBox="0 0 24 24" width="14" height="14">
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                          </a>
                        )}
                        {project.demoLink && (
                          <a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link-btn"
                            style={{ color: 'var(--accent-amber)' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>Live Demo</span>
                            <svg viewBox="0 0 24 24" width="14" height="14">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                          </a>
                        )}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Click to flip back</span>
                    </div>
                  </div>
                }
              />
            </GlareHover>
          ))}
        </div>
      </div>
    </section>
  );
}
