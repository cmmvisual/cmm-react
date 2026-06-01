import './Hero.css';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/Videos/CMM-Background-Loop.mp4';

function HeroVideo() {
  return (
    <div className="hero-section circular-slider-hero">
      <video
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
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="overlay" style={{ zIndex: 1 }}></div>

      <div className="hero-content circular-content" style={{ zIndex: 2 }}>
        <h1>Art Direction & Motion Design</h1>
        <p>Catalina Mejia Martinez</p>
        <Link className="hero-button" to="/contact">
          Jetzt Kontaktieren
        </Link>
      </div>
    </div>
  );
}

export default HeroVideo;
