import Reveal from './Reveal.jsx';

const services = [
  ['fa-solid fa-laptop-code', 'Web Development', 'Building fast, responsive, and scalable websites using modern frontend and backend technologies.'],
  ['fa-solid fa-mobile-screen-button', 'Responsive Design', 'Crafting interfaces that look and work great on every screen — desktop, tablet, and mobile.'],
  ['fa-solid fa-plug', 'API Integration', 'Designing and connecting REST APIs with Node.js & Express to power dynamic web applications.'],
  ['fa-solid fa-database', 'Database Design', "Structuring efficient, reliable databases with MongoDB and MySQL tailored to the application's needs."],
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">What I Offer</Reveal>
        <Reveal as="h2" className="section-title">My <span className="gradient-text">Services</span></Reveal>

        <div className="services-grid">
          {services.map(([icon, title, desc]) => (
            <Reveal className="service-card glass" key={title}>
              <div className="service-icon"><i className={icon}></i></div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
