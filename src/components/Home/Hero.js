// src/components/Hero.js
import './Hero.css';
import HeroCanvas from './HeroCanvas';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero-section circular-slider-hero">
      <HeroCanvas />
      <div className="overlay"></div>

      <div className="hero-content circular-content">
        <h1>Art Direction & Motion Design</h1>
        <p>Catalina Mejia Martinez</p>
        <Link className="hero-button" to="/contact">
          Jetzt Kontaktieren
        </Link>
      </div>

    </div>
  );
}

export default Hero;
