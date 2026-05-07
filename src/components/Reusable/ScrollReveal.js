import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ScrollReveal — slides in from below on enter, slides out upward on leave.
 *
 * Props:
 *   duration  — animation duration in seconds (default: 0.8)
 *   delay     — animation delay in seconds (default: 0)
 *   start     — ScrollTrigger start position (default: "top 92%")
 *   className — forwarded to the wrapper div
 */
export default function ScrollReveal({
  children,
  className = '',
  duration = 0.8,
  delay = 0.1,
  start = 'top 50%',
}) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    // Set initial hidden state
    gsap.set(el, { y: 60, opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      end: 'bottom 5%',
      onEnter: () =>
        gsap.to(el, { y: 0, opacity: 1, duration, delay, ease: 'power3.out' }),
      onLeave: () =>
        gsap.to(el, { y: -120, opacity: 0, duration: duration * 0.75, ease: 'power3.in' }),
      onEnterBack: () =>
        gsap.to(el, { y: 0, opacity: 1, duration, ease: 'power3.out' }),
      onLeaveBack: () =>
        gsap.to(el, { y: 120, opacity: 0, duration: duration * 0.75, ease: 'power3.in' }),
    });

    return () => st.kill();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
