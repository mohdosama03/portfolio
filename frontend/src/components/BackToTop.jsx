import useScrollY from '../hooks/useScrollY.js';

export default function BackToTop() {
  const scrollY = useScrollY();
  return (
    <button
      className={`back-to-top ${scrollY > 480 ? 'show' : ''}`}
      id="backToTop"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
