import { Link } from 'react-router-dom';
import './Footer.css';

// Import Images

import SocialInsta from '../assets/Icons/instagram.svg'
import SocialLinkedin from '../assets/Icons/linkedin.svg'

function Footer() {
  return (
    
    <div className='mainContent'>
        <div className='Footer'>
        <div>
            <div className='social-icons'>
                <a href='https://www.instagram.com/cmmvisual/' target="_blank"><img src={SocialInsta}></img></a>
                <a href='https://www.linkedin.com/in/catalina-mejia-martinez/' target="_blank"><img src={SocialLinkedin}></img></a>
            </div>

            <h2>Design für Menschen von Menschen.</h2>
            <p>Lass uns Zusammenarbeiten!</p>
            <a className='kontakt-button' href='mailto:kontakt@cmmvisual.com'>kontakt@cmmvisual.com</a>
        </div>
        
        <div className='datenschutz'>
            <span>© Catalina Mejia Martinez 2026</span>
            <Link to='/impressum'>Impressum</Link>
            <Link to='/datenschutz'>Datenschutz</Link>
        </div>  
    </div>
    </div>
    
    
  );
}

export default Footer;