import { useEffect, useState } from 'react';

// Same timings as the original typing effect (90ms type, 45ms delete,
// 1500ms pause at full word, 400ms pause before next word).
export default function useTypewriter(roles) {
  const [text, setText] = useState('');

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timer;

    const loop = () => {
      const current = roles[roleIndex];
      charIndex += isDeleting ? -1 : 1;
      setText(current.substring(0, charIndex));

      let speed = isDeleting ? 45 : 90;
      if (!isDeleting && charIndex === current.length) {
        speed = 1500;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }
      timer = setTimeout(loop, speed);
    };

    loop();
    return () => clearTimeout(timer); // cleanup (also needed for StrictMode)
  }, [roles]);

  return text;
}
