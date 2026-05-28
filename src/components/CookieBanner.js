import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

const STORAGE_KEY = 'cmm_cookie_consent';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie-Hinweis">
      <p className="cookie-banner__text">
        Diese Website verwendet technisch notwendige Cookies, um den Betrieb der Seite zu gewährleisten.
        Es werden keine Tracking- oder Werbe-Cookies eingesetzt.{' '}
        <Link to="/datenschutz">Mehr erfahren</Link>
      </p>
      <div className="cookie-banner__actions">
        <button className="cookie-btn cookie-btn--decline" onClick={handleDecline}>
          Ablehnen
        </button>
        <button className="cookie-btn cookie-btn--accept" onClick={handleAccept}>
          Akzeptieren
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
