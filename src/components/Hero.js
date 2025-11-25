// src/components/Hero.js
import React, { useLayoutEffect, useRef } from 'react';
import './Hero.css';
import { gsap } from 'gsap';

import Slider01 from '../assets/Slider01.jpg';
import Slider02 from '../assets/Slider02.jpg';
import Slider03 from '../assets/Slider03.jpg';
import Slider04 from '../assets/Slider04.jpg';
import Slider05 from '../assets/Slider05.jpg';
import Slider06 from '../assets/Slider06.jpg';

function Hero() {
  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);

  // tune as needed
  const SPEED_SECONDS_PER_REV = 200;
  const RADIUS_PX = 300;

  const circularImages = [
    { id: 1, src: Slider01, alt: 'Creator 1' },
    { id: 2, src: Slider02, alt: 'Creator 2' },
    { id: 3, src: Slider03, alt: 'Creator 3' },
    { id: 4, src: Slider04, alt: 'Creator 4' },
    { id: 5, src: Slider05, alt: 'Creator 5' },
    { id: 6, src: Slider06, alt: 'Creator 6' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const boxes = boxesRef.current.filter(Boolean);
      const keepers = boxes.map((box) => box.querySelector('.img-keeper'));
      const angles = boxes.map((box) => Number(box.dataset.angle) || 0);

      gsap.set(keepers, { rotate: (i) => -angles[i] });

      const spin = gsap.to(wrapper, {
        rotation: 360,
        repeat: -1,
        ease: 'none',
        duration: SPEED_SECONDS_PER_REV,
        transformOrigin: '50% 50%',
      });

      spin.eventCallback('onUpdate', () => {
        const r = gsap.getProperty(wrapper, 'rotation');
        for (let i = 0; i < keepers.length; i++) {
          gsap.set(keepers[i], { rotate: -(r + angles[i]) });
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-section circular-slider-hero">
      <div className="overlay"></div>

      {/* your original text/button styles remain on these classes */}
      <div className="hero-content circular-content">
        <h1>Catalina <br></br>Mejia Martinez</h1>
        <p>Site under construction.</p>
        <a className="hero-button" href="https://cmmvisual.webflow.io/"> Go to Main Page
        </a>

      </div>

      {/* ring behind content; no impact on your existing styles */}
      <div className="circular-slider-container" aria-hidden="true">
        <div className="circular-images-wrapper" ref={wrapperRef}>
          {circularImages.map((img, index) => {
            const angle = index * (360 / circularImages.length);
            return (
              <div
                key={img.id}
                className="circular-image-box"
                data-angle={angle}
                ref={(el) => (boxesRef.current[index] = el)}
                style={{
                  transform: `rotate(${angle}deg) translate(${RADIUS_PX}px)`,
                }}
              >
                <div className="img-keeper">
                  <img src={img.src} alt={img.alt} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
