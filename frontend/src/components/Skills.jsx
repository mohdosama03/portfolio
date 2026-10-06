import { useState, useEffect } from 'react';
import Reveal from './Reveal.jsx';
import useInView from '../hooks/useInView.js';

// Progress bar: the width animates from 0 to `percent` when scrolled into view.
function SkillBar({ name, percent }) {
  const [ref, inView] = useInView(0.4);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) setWidth(percent);
  }, [inView, percent]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-top"><span>{name}</span><span className="skill-percent">{percent}%</span></div>
      <div className="skill-bar-track">
        <div className="skill-bar-fill" ref={ref} style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
}

const frontend = [
  ['HTML5', 95], ['CSS3', 90], ['JavaScript', 85], ['Responsive Design', 90],
];
const backend = [['Node.js', 80], ['Express.js', 78]];
const database = [['MongoDB', 80], ['MySQL', 75]];

const tools = [
  ['fa-brands fa-git-alt', 'Git'],
  ['fa-brands fa-github', 'GitHub'],
  ['fa-solid fa-code', 'VS Code'],
];
const soft = [
  ['fa-solid fa-puzzle-piece', 'Problem Solving'],
  ['fa-solid fa-handshake', 'Teamwork'],
  ['fa-solid fa-comments', 'Communication'],
  ['fa-solid fa-bolt', 'Quick Learning'],
];

const Tags = ({ items }) => (
  <div className="tag-list">
    {items.map(([icon, label]) => (
      <span className="tag" key={label}><i className={icon}></i> {label}</span>
    ))}
  </div>
);

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">What I Work With</Reveal>
        <Reveal as="h2" className="section-title">My <span className="gradient-text">Skills</span></Reveal>

        <div className="skills-grid">
          <Reveal className="skill-category glass">
            <h3 className="skill-cat-title"><i className="fa-solid fa-code"></i> Frontend</h3>
            {frontend.map(([n, p]) => <SkillBar key={n} name={n} percent={p} />)}
          </Reveal>

          <Reveal className="skill-category glass">
            <h3 className="skill-cat-title"><i className="fa-solid fa-server"></i> Backend</h3>
            {backend.map(([n, p]) => <SkillBar key={n} name={n} percent={p} />)}
            <h3 className="skill-cat-title skill-cat-title-spaced"><i className="fa-solid fa-database"></i> Database</h3>
            {database.map(([n, p]) => <SkillBar key={n} name={n} percent={p} />)}
          </Reveal>

          <Reveal className="skill-category glass">
            <h3 className="skill-cat-title"><i className="fa-solid fa-toolbox"></i> Tools</h3>
            <Tags items={tools} />
            <h3 className="skill-cat-title skill-cat-title-spaced"><i className="fa-solid fa-people-group"></i> Soft Skills</h3>
            <Tags items={soft} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
