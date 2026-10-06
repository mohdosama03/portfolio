import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { projects } from '../data/projects.js';

const filters = [
  ['all', 'All'],
  ['frontend', 'Frontend'],
  ['fullstack', 'Full Stack'],
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">My Recent Work</Reveal>
        <Reveal as="h2" className="section-title">Featured <span className="gradient-text">Projects</span></Reveal>

        <Reveal className="project-filters">
          {filters.map(([value, label]) => (
            <button
              key={value}
              className={`filter-btn ${filter === value ? 'active' : ''}`}
              data-filter={value}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid">
          {projects.map((p) => (
            <Reveal
              as="article"
              key={p.id}
              className="project-card glass"
              data-category={p.category}
              style={{ display: filter === 'all' || p.category === filter ? '' : 'none' }}
            >
              <div className={`project-thumb ${p.thumbClass}`}>
                <i className={p.icon}></i>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <ul className="project-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="project-tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.liveUrl} className="btn-sm btn-sm-primary" {...(p.liveUrl !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                  <a href={p.sourceUrl} className="btn-sm btn-sm-outline" {...(p.sourceUrl !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}>
                    <i className="fa-brands fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
