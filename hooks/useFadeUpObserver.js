// hooks/useFadeUpObserver.js
import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all `.fade-up` elements
 * and adds the `.visible` class when they scroll into view.
 * Call this once inside the root layout or page.
 */
export default function useFadeUpObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
