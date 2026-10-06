import { useEffect, useState } from 'react';
import Reveal from './Reveal.jsx';
import useInView from '../hooks/useInView.js';

// Animated counter: ease-out cubic over 1600ms, starts when scrolled into view.
function StatCounter({ target, suffix, label }) {
  const [ref, inView] = useInView(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(progress < 1 ? Math.floor(eased * target) : target);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div className="stat-card glass">
      <span className="stat-number" ref={ref}>{value}</span>
      <span className="stat-plus">{suffix}</span>
      <p className="stat-label">{label}</p>
    </div>
  );
}

const info = [
  ['Name', 'Mohd Osama'],
  ['Role', 'Full Stack Developer'],
  ['Education', 'B.Tech CSE'],
  ['Location', 'Lucknow, India'],
];

const stats = [
  { target: 3, suffix: '+', label: 'Projects Built' },
  { target: 10, suffix: '+', label: 'Technologies' },
  { target: 4, suffix: '', label: 'Years Learning' },
  { target: 100, suffix: '%', label: 'Dedication' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">Get To Know Me</Reveal>
        <Reveal as="h2" className="section-title">About <span className="gradient-text">Me</span></Reveal>

        <div className="about-grid">
          <Reveal className="about-card glass">
            <p className="about-text">
              I am <strong>Mohd Osama</strong>, a Full Stack Web Developer and a 4th-year Computer
              Science &amp; Engineering student. I enjoy building modern, responsive, and user-friendly
              web applications that solve real-world problems. My journey in tech is driven by curiosity —
              I'm always learning new tools, frameworks, and best practices to sharpen my craft.
            </p>
            <p className="about-text">
              From crafting pixel-perfect interfaces to designing robust backend systems, I like owning
              the full development lifecycle. When I'm not coding, I'm exploring new tech trends or
              collaborating with fellow developers on ideas worth building.
            </p>

            <div className="about-info">
              {info.map(([label, value]) => (
                <div className="info-item" key={label}>
                  <span className="info-label">{label}</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              <i className="fa-solid fa-paper-plane"></i> Let's Talk
            </a>
          </Reveal>

          <Reveal className="stats-grid">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
