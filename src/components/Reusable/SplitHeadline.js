import { useEffect, useRef } from 'react';
import './SplitHeadline.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitHeadline — splits text into characters and animates them up on scroll.
 *
 * Usage:
 *   <SplitHeadline>Design for Humans</SplitHeadline>
 *   <SplitHeadline tag="h2" delay={0.1}>Leistungen</SplitHeadline>
 *
 * Props:
 *   tag       — HTML tag to render (default: "h1")
 *   className — forwarded to the element
 *   delay     — stagger start delay in seconds (default: 0)
 *   duration  — per-character duration in seconds (default: 0.7)
 *   stagger   — delay between each character (default: 0.03)
 *   start     — ScrollTrigger start (default: "top 85%")
 */
export default function SplitHeadline({
  children,
  tag: Tag = 'h1',
  className = '',
  delay = 0.1,
  duration = 1.2,
  stagger = 0.05,
  start = 'top 85%',
}) {
  const ref = useRef();

  // Split text string into word/char spans
  const buildSpans = (text) =>
    text.split(' ').map((word, wi) => (
      <span key={wi} className="sh-word">
        {word.split('').map((char, ci) => (
          <span key={ci} className="sh-char">{char}</span>
        ))}
        {/* preserve space between words */}
        {'\u00A0'}
      </span>
    ));

  useEffect(() => {
    const el = ref.current;
    const chars = el.querySelectorAll('.sh-char');

    gsap.set(chars, { y: '110%', opacity: 0 });

    const st = ScrollTrigger.create({
      trigger: el,
      start,
      onEnter: () =>
        gsap.to(chars, {
          y: '0%',
          opacity: 1,
          duration,
          delay,
          stagger,
          ease: 'power3.out',
        }),
      onLeave: () =>
        gsap.to(chars, {
          y: '-110%',
          opacity: 0,
          duration: duration * 0.6,
          stagger: stagger * 0.5,
          ease: 'power3.in',
        }),
      onEnterBack: () =>
        gsap.to(chars, {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
        }),
      onLeaveBack: () =>
        gsap.to(chars, {
          y: '110%',
          opacity: 0,
          duration: duration * 0.6,
          stagger: stagger * 0.5,
          ease: 'power3.in',
        }),
    });

    return () => st.kill();
  }, []);

  return (
    <Tag ref={ref} className={`sh-root ${className}`}>
      {typeof children === 'string'
        ? buildSpans(children)
        : children}
    </Tag>
  );
}
