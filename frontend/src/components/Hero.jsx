import Reveal from './Reveal.jsx';
import useTypewriter from '../hooks/useTypewriter.js';
import { siteConfig } from '../data/siteConfig.js';
import profileImg from '../assets/images/profile.jpeg';

const ROLES = [
  'Full Stack Web Developer',
  'Computer Science Student',
  'Problem Solver',
  'MERN Stack Enthusiast',
];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
      </div>

      <div className="container hero-container">
        <Reveal className="hero-text">
          <p className="hero-eyebrow"><span className="eyebrow-dot"></span> Welcome to my portfolio</p>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mohd Osama</span>
          </h1>
          <h2 className="hero-role">
            <span id="typedText">{typed}</span><span className="cursor-blink">|</span>
          </h2>
          <p className="hero-desc">
            I am a passionate Full Stack Developer and a 4th-year Computer Science &amp; Engineering
            student who enjoys building modern, responsive, and user-friendly web applications. I love
            learning new technologies and solving real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-diagram-project"></i> View My Work
            </a>
            <a href={siteConfig.resumePath} download="Mohd_Osama_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fa-solid fa-download"></i> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><i className="fa-solid fa-envelope"></i></a>
          </div>
        </Reveal>

        <Reveal className="hero-photo-wrap">
          <div className="photo-frame">
            <div className="photo-ring"></div>
            <img src={profileImg} alt="Mohd Osama - Full Stack Web Developer" className="photo-img" id="profilePhoto" />
            <span className="photo-badge photo-badge-1"><i className="fa-brands fa-html5"></i></span>
            <span className="photo-badge photo-badge-2"><i className="fa-brands fa-node-js"></i></span>
            <span className="photo-badge photo-badge-3"><i className="fa-brands fa-react"></i></span>
          </div>
          <div className="status-chip"><span className="status-dot"></span> Open to Internships</div>
        </Reveal>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll to About section">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
}
