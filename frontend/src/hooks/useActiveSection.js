import { useEffect, useState } from 'react';

// Scroll-spy: same logic as the original (scrollY + 140 inside a section).
export default function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const update = () => {
      const pos = window.scrollY + 140;
      let current = '';
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && pos >= section.offsetTop && pos < section.offsetTop + section.offsetHeight) {
          current = id;
        }
      });
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return active;
}
