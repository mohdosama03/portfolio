import Reveal from './Reveal.jsx';

const items = [
  {
    year: 'Ongoing · Final Year',
    title: 'B.Tech in Computer Science & Engineering',
    desc: 'Currently in my 4th year, building a strong foundation in data structures, algorithms, databases, and full-stack web development through coursework and personal projects.',
  },
  {
    year: 'Higher Secondary',
    title: 'Class XII — Science (PCM)',
    desc: 'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics, laying the groundwork for an engineering career.',
  },
  {
    year: 'Secondary',
    title: 'Class X',
    desc: 'Built early interest in computers and problem solving, which later shaped the decision to pursue Computer Science & Engineering.',
  },
];

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">Academic Background</Reveal>
        <Reveal as="h2" className="section-title">My <span className="gradient-text">Education</span></Reveal>

        <div className="timeline">
          {items.map((it) => (
            <Reveal className="timeline-item" key={it.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <span className="timeline-year">{it.year}</span>
                <h3 className="timeline-title">{it.title}</h3>
                <p className="timeline-desc">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
