import Reveal from './Reveal.jsx';
import { siteConfig } from '../data/siteConfig.js';

const contactItems = (cfg) => [
  {
    tag: 'a',
    href: `mailto:${cfg.email}`,
    icon: 'fa-solid fa-envelope',
    label: 'Email Me',
    value: cfg.email,
    color: '#6366f1',
  },
  {
    tag: 'a',
    href: cfg.phoneHref,
    icon: 'fa-solid fa-phone',
    label: 'Call Me',
    value: cfg.phone,
    color: '#14b8a6',
  },
  {
    tag: 'div',
    icon: 'fa-solid fa-location-dot',
    label: 'Based In',
    value: cfg.location,
    color: '#f59e0b',
  },
];

export default function Contact() {
  const items = contactItems(siteConfig);

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal as="p" className="section-eyebrow">Get In Touch</Reveal>
        <Reveal as="h2" className="section-title">
          Contact <span className="gradient-text">Me</span>
        </Reveal>

        <Reveal as="p" className="contact-lead">
          Have a project in mind, an internship opportunity, or just want to say hi?
          Feel free to reach out — I'd love to hear from you.
        </Reveal>

        <div className="contact-row">
          {items.map(({ tag: Tag, href, icon, label, value, color }) => (
            <Reveal
              key={label}
              as={Tag}
              {...(href ? { href } : {})}
              className={`contact-card glass${Tag === 'a' ? ' contact-card--link' : ''}`}
            >
              <span className="contact-card__icon" style={{ '--card-color': color }}>
                <i className={icon}></i>
              </span>
              <span className="contact-card__label">{label}</span>
              <span className="contact-card__value">{value}</span>
              {Tag === 'a' && (
                <span className="contact-card__cta">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </span>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="contact-socials-row">
          <p className="contact-socials-label">Find me on</p>
          <div className="contact-socials-links">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="contact-social-pill"
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="contact-social-pill"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
