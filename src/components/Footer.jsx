import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span>Dani Aldrin</span> • UI/UX Designer & Frontend Developer
          </div>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-copy">
          &copy; 2026 Dani Aldrin. Built with React, Vite, Tailwind & Craft.
        </div>
      </div>
    </footer>
  );
}
