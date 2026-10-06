import { useState } from 'react';
import useScrollY from '../hooks/useScrollY.js';

const links = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['services', 'Services'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
];

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();

  return (
    <header className={`navbar ${scrollY > 40 ? 'scrolled' : ''}`} id="navbar">
      <nav className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-bracket">&lt;</span>Osama<span className="logo-bracket">/&gt;</span>
        </a>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
          {links.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                data-section={id}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="theme-toggle" id="themeToggle" aria-label="Toggle light and dark theme" onClick={toggleTheme}>
            <i className={`fa-solid ${theme === 'light' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            id="hamburger"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
