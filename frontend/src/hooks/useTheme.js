import { useCallback, useEffect, useState } from 'react';

const THEME_KEY = 'osama-portfolio-theme'; // same key as the original site

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => getStoredTheme() || 'dark');

  useEffect(() => {
    const html = document.documentElement;
    if (theme === 'light') html.setAttribute('data-theme', 'light');
    else html.removeAttribute('data-theme');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* storage unavailable: ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
    []
  );

  return { theme, toggleTheme };
}
