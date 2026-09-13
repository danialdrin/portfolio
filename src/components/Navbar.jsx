import React, { useState, useEffect } from 'react';
import SpecularButton from './SpecularButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileActive, setMobileActive] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.slice(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo" aria-label="Dani Aldrin - Back to top">
          <div className="logo-badge" title="Dani Aldrin Monogram">
            <svg viewBox="0 0 32 32" width="22" height="22" fill="none" stroke="currentColor">
              <path d="M6 8 H 12 C 17 8 20 11 20 16 C 20 21 17 24 12 24 H 6 V 8 Z" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.5 24 L 25.5 8 L 29.5 24" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23 18.5 H 28" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>
          <span>Dani Aldrin</span>
        </a>

        <ul className={`nav-menu ${mobileActive ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                onClick={() => setMobileActive(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <SpecularButton
            size="sm"
            radius={10}
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
            proximity={200}
            autoAnimate={false}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setMobileActive(false);
            }}
          >
            Let's talk
          </SpecularButton>

          <button
            className={`mobile-toggle ${mobileActive ? 'active' : ''}`}
            onClick={() => setMobileActive(!mobileActive)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileActive}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
