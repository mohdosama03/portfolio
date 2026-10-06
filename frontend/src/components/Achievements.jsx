import Reveal from './Reveal.jsx';

const items = [
  ['fa-solid fa-trophy', 'Full Stack Projects', 'Independently designed and built multiple full-stack applications from scratch.'],
  ['fa-solid fa-certificate', 'Continuous Learner', 'Consistently upskilling through hands-on projects and modern web development practices.'],
  ['fa-solid fa-users', 'Team Collaboration', 'Experience collaborating on academic and personal projects using Git & GitHub workflows.'],
  ['fa-solid fa-lightbulb', 'Problem Solver', 'Enjoys breaking down real-world problems into clean, maintainable code solutions.'],
];

export default function Achievements() {
  return (
    <section className="section section-alt" id="achievements">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">Milestones</Reveal>
        <Reveal as="h2" className="section-title">My <span className="gradient-text">Achievements</span></Reveal>

        <div className="achievements-grid">
          {items.map(([icon, title, desc]) => (
            <Reveal className="achievement-card glass" key={title}>
              <i className={icon}></i>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
