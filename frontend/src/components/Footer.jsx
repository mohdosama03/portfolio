import { siteConfig } from '../data/siteConfig.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-bracket">&lt;</span>Osama<span className="logo-bracket">/&gt;</span>
          </a>
          <p>Full Stack Web Developer crafting clean, functional, and modern web experiences.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="hero-socials">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mohd Osama. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
