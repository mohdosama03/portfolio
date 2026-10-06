import { useMemo } from 'react';
import Preloader from './components/Preloader.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Services from './components/Services.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import useTheme from './hooks/useTheme.js';
import useActiveSection from './hooks/useActiveSection.js';
import useSmoothAnchors from './hooks/useSmoothAnchors.js';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'education', 'services', 'achievements', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const ids = useMemo(() => SECTION_IDS, []);
  const activeSection = useActiveSection(ids);
  useSmoothAnchors();

  return (
    <>
      <ScrollProgress />
      <Preloader />
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Services />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
