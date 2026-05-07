import { useEffect, useRef } from 'react';
import './BackgroundBlobs.css';

// Each entry: [className, parallax speed (px per scroll-px, negative = opposite direction)]
const BLOBS = [
  ['blob blob-1', 0.05],
  ['blob blob-2', -0.04],
  ['blob blob-3', 0.07],
  ['blob blob-4', -0.06],
  ['blob blob-5', 0.04],
  ['blob blob-6', -0.05],
];

export default function BackgroundBlobs() {
  const wrapperRefs = useRef([]);

  useEffect(() => {
    let rafId;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sy = window.scrollY;
        wrapperRefs.current.forEach((el, i) => {
          if (el) el.style.setProperty('--ty', `${sy * BLOBS[i][1]}px`);
        });
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="blobs-container" aria-hidden="true">
      {BLOBS.map(([cls], i) => (
        <div
          key={i}
          className="blob-parallax"
          ref={(el) => (wrapperRefs.current[i] = el)}
        >
          <div className={cls} />
        </div>
      ))}
    </div>
  );
}
