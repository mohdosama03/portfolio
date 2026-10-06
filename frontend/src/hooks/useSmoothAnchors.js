import { useEffect } from 'react';

// Original behaviour: every <a href="#section"> scrolls smoothly.
// One delegated listener covers links in every component.
export default function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest && e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
