import { useEffect, useRef } from 'react';

export default function MouseTrail() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const dotPosition = useRef({ x: 0, y: 0 });
  const outlinePosition = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;
    if (!cursorDot || !cursorOutline) return;

    const handleMouseMove = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
      
      // Immediately update dot position (clientX/Y already accounts for viewport, not scroll)
      dotPosition.current = { x: e.clientX, y: e.clientY };
      cursorDot.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      cursorDot.style.opacity = '1';
      cursorOutline.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursorDot.style.opacity = '0';
      cursorOutline.style.opacity = '0';
    };

    // Smooth animation for the outline with spring-like effect
    const animate = () => {
      const dx = targetPosition.current.x - outlinePosition.current.x;
      const dy = targetPosition.current.y - outlinePosition.current.y;
      
      // Spring physics - slower, smoother follow
      outlinePosition.current.x += dx * 0.15;
      outlinePosition.current.y += dy * 0.15;
      
      cursorOutline.style.transform = `translate3d(${outlinePosition.current.x - 20}px, ${outlinePosition.current.y - 20}px, 0)`;
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      {/* Cursor Dot (fast) */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed opacity-0 mix-blend-difference"
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: 'white',
          borderRadius: '50%',
          left: '0',
          top: '0',
          transition: 'opacity 0.3s ease',
          zIndex: 9999,
        }}
      />

      {/* Cursor Outline (slow, follows with delay) */}
      <div
        ref={cursorOutlineRef}
        className="pointer-events-none fixed opacity-0 mix-blend-difference"
        style={{
          width: '40px',
          height: '40px',
          border: '2px solid white',
          borderRadius: '50%',
          left: '0',
          top: '0',
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease',
          zIndex: 9999,
        }}
      />
    </>
  );
}