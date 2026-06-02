import { useRef, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import videoDesktop from '../../assets/Videos/CMM-Background-Loop.mp4';
import videoPhone from '../../assets/Videos/CMM-Background-Loop_Phone.mp4';

function HeroVideo() {
  const videoRef = useRef(null);

  // Pick source once at mount — phone video for viewports ≤ 768 px
  const src = window.innerWidth <= 768 ? videoPhone : videoDesktop;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS Safari requires muted set as both a DOM property AND an HTML attribute.
    // React's `muted` JSX prop alone is not enough.
    video.muted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');

    // Trigger playback manually; retry muted if the browser blocks it
    const tryPlay = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }
  }, []);

  return (
    <div className="hero-section circular-slider-hero">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      <div className="overlay" style={{ zIndex: 1 }} />

      <div className="hero-content circular-content" style={{ zIndex: 2 }}>
        <h1>Art Direction & Motion Design</h1>
        <p>Catalina Mejia Martinez</p>
        <Link className="hero-button" to="/contact">
          Anfrage stellen
        </Link>
      </div>
    </div>
  );
}

export default HeroVideo;
