import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setTimeout(() => setHidden(true), 500);
    let t;
    if (document.readyState === 'complete') t = hide();
    else window.addEventListener('load', () => { t = hide(); }, { once: true });
    const fallback = setTimeout(() => setHidden(true), 2500); // same fallback as original
    return () => {
      clearTimeout(t);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`} id="preloader">
      <div className="preloader-code">
        <span>&lt;</span>
        <span className="preloader-name">Osama</span>
        <span>/&gt;</span>
      </div>
    </div>
  );
}
