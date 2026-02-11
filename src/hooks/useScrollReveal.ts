import { useEffect } from 'react';

const REVEAL_POINT = 150;

function runReveal(): void {
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach((_, index) => {
    const revealTop = reveals[index].getBoundingClientRect().top;
    if (revealTop < windowHeight - REVEAL_POINT) {
      reveals[index].classList.add('active');
    } else {
      reveals[index].classList.remove('active');
    }
  });
}

/**
 * Single scroll listener for .reveal elements. Throttled with requestAnimationFrame.
 * Call once in a parent (e.g. App or Container) so the whole app shares one listener.
 */
export function useScrollReveal(): void {
  useEffect(() => {
    let ticking = false;
    const onScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          runReveal();
          ticking = false;
        });
        ticking = true;
      }
    };
    runReveal();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
