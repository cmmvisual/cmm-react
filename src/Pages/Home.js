// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Hero from '../components/Home/Hero';
import BackgroundBlobs from '../components/Home/BackgroundBlobs';
import Softwares from '../components/Home/Softwares';
import VimeoEmbed from '../components/Reusable/VimeoEmbed';
import LogoSlider from '../components/Home/LogoSlider';
import MaincontentImage from '../components/Reusable/MaincontentImage';
import TextSectionCenter from '../components/Reusable/TextSectionCenter';
import ScrollReveal from '../components/Reusable/ScrollReveal';
import SplitHeadline from '../components/Reusable/SplitHeadline';
import Footer from '../components/Footer'
import SEO from '../components/SEO';


// LInks Route



// Asset Imports Logos
import Logo01 from '../assets/Logos/Logos_BCC.png';
import Logo02 from '../assets/Logos/Logos_BDR.png';
import Logo03 from '../assets/Logos/Logos_Bundesministerium.png';
import Logo04 from '../assets/Logos/Logos_CSD.png';
import Logo05 from '../assets/Logos/Logos_DRF.png';
import Logo06 from '../assets/Logos/Logos_Fraunhofer.png';
import Logo07 from '../assets/Logos/Logos_Gewobag.png';
import Logo08 from '../assets/Logos/Logos_Igefa.png';
import Logo09 from '../assets/Logos/Logos_Medieninsider.png';
import Logo10 from '../assets/Logos/Logos_Movact.png';
import Logo11 from '../assets/Logos/Logos_Robert Bosch.png';
import Logo12 from '../assets/Logos/Logos_SBB.png';
import Logo13 from '../assets/Logos/Logos_Schufa.png';
import Logo14 from '../assets/Logos/Logos_Simpleshow.png';
import Logo15 from '../assets/Logos/Logos_Technologie-Stiftung.png';

// Asset Imports Diverse
import ProfilePic from '../assets/Images/General/profile-image.jpg';
import refHome01 from '../assets/Images/General/Slider01.jpg';
import refHome02 from '../assets/Refs/General/Schufa-Motion_1080x1080.jpg';
import refHome03 from '../assets/Refs/DRF/DRF-UI-Station-UI_1080x1350.jpg';

// Asset Imports-References
import ClientGewobag from '../assets/Refs/Gewobag/Home-Gewobag_Cover.png';
import ClientDRF from '../assets/Refs/DRF/Home-DRF_Cover.png';
import ClientNevio from '../assets/Refs/Nevio/Home-Gelato_Cover.png'
import ClientMedieninsider from '../assets/Refs/Medieninsider/Home-Medieninsider_Cover.png'
import ClientInteam from '../assets/Refs/Inteam/Home-Inteam_Cover.png'
import ClientJan from '../assets/Refs/Jan/Home-Jan_Cover.png'
import ClientInno from '../assets/Refs/Innovationspreis/Home-Innopreis.png'

// Asset Imports-References
import starLila from '../assets/Images/Brandelements/Star-Lila.svg';
import starGreen from '../assets/Images/Brandelements/Star-Green.svg';


const Home = () => {
  // Logo Arrays
  const logoItems1 = [
    <img src={Logo01} alt="Partner 1" key="l1" />,
    <img src={Logo02} alt="Partner 2" key="l2" />,
    <img src={Logo03} alt="Partner 3" key="l3" />,
    <img src={Logo04} alt="Partner 4" key="l4" />,
    <img src={Logo05} alt="Partner 5" key="l5" />,
  ];

  const logoItems2 = [
    <img src={Logo06} alt="Partner 6" key="l6" />,
    <img src={Logo07} alt="Partner 7" key="l7" />,
    <img src={Logo08} alt="Partner 8" key="l8" />,
    <img src={Logo09} alt="Partner 9" key="l9" />,
    <img src={Logo10} alt="Partner 10" key="l10" />,
  ];

  const logoItems3 = [
    <img src={Logo11} alt="Partner 11" key="l11" />,
    <img src={Logo12} alt="Partner 12" key="l12" />,
    <img src={Logo13} alt="Partner 13" key="l13" />,
    <img src={Logo14} alt="Partner 14" key="l14" />,
    <img src={Logo15} alt="Partner 15" key="l15" />,
  ];

  const profileBio = [
    "Als Art Directorin und Motion Designerin habe ich knapp zehn Jahre Erfahrung im Print- und Digitalbereich. Meine Schwerpunkte liegen in der Eventkommunikation, dem Branding sowie im UI- und Produktdesign.",
    "In Kolumbien geboren und zwischen Mallorca und Berlin aufgewachsen, bin ich an beiden Orten zu Hause. Diese kulturelle Mischung prägt meine Arbeit: lebendig, vielfältig und dynamisch."
  ];

  const profileSkills = [
    "ART DIRECTION", "3D ARTIST", "ILLUSTRATION", 
    "EVENT DESIGN", "BRANDING", "PRODUCT DESIGN", 
    "MOTION GRAPHICS", "INTERACTIVE DESIGN"
  ];

  const leistungenText = [
    "Ich entwickle visuelle Konzepte und Brandings für reale sowie digitale Räume – von Messegrafiken über animierte Einspieler bis hin zu interaktiven Anwendungen.",
    "Gutes Design bedeutet für mich, komplexe Inhalte in dynamische Bilder zu übersetzen, die Emotionen wecken und zur Interaktion anregen."
  ];

  return (
    <>
      <BackgroundBlobs />
       <SEO
        title="Home - My Website"
        description="Welcome to my website homepage"
      />

      <Hero />

      
      
      <div className='logo-slider'>
        <LogoSlider items={logoItems1} direction="left" duration="45s" />
        <LogoSlider items={logoItems2} direction="right" duration="45s" />
        <LogoSlider items={logoItems3} direction="left" duration="45s" />
      </div>

      <main className='mainContent'>
        <div className='max-width'>
          <ScrollReveal>
            <div className='pad-v-200'>

              <img className='star-decotop rotating' src={starLila}></img>
              <img className='star-decobottom rotating' src={starLila}></img>

              <MaincontentImage
                greeting="Hola!"
                name="Catalina Mejia Martinez"
                paragraphs={profileBio}
                skills={profileSkills}
                image={ProfilePic}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className='pad-v-100'>
              <SplitHeadline tag="h2">Showreel</SplitHeadline>
              <VimeoEmbed
                videoId="1090020661"
                privateHash="ca88b1bc84"
                title="My Private Vimeo Video"
              />
            </div>
          </ScrollReveal>


          <ScrollReveal delay={0.05}>
            <div>
              <TextSectionCenter title="Leistungen" paragraphs={leistungenText} />

            <div className='max-width flex img-section pad-v-100'>

              <div className='img-box-cont'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front' style={{ backgroundImage: `url(${refHome01})` }}>
                    <div>
                      <h3 className='text-center'>Art Direction</h3>
                    </div>
                  </div>
                  <div className='flip-card-back'>
                    <div className='flip-card-back-content'>
                      <p>Creative visual strategy and brand identity development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='img-box-cont'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front' style={{ backgroundImage: `url(${refHome02})` }}>
                    <div>
                      <h3 className='text-center'>Motion Design</h3>
                    </div>
                  </div>
                  <div className='flip-card-back'>
                    <div className='flip-card-back-content'>
                      <p>Dynamic animations and engaging visual storytelling</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='img-box-cont'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front' style={{ backgroundImage: `url(${refHome03})` }}>
                    <div>
                      <h3 className='text-center'>Interactive Design</h3>
                    </div>
                  </div>
                  <div className='flip-card-back'>
                    <div className='flip-card-back-content'>
                      <p>Immersive user experiences and innovative interactions</p>
                    </div>
                  </div>
                </div>
              </div>

              

            </div>

          </div>

          </ScrollReveal>
          
          <ScrollReveal>
          
          <div className='flex just-content-center'>
            <div className="badge-wrapper">
              <span className="software-badge">MAIN SOFTWARES</span>
            </div>
          </div>

          <Softwares />

          </ScrollReveal>

          <ScrollReveal>

          <div className='flex just-content-center'>
            <div className="badge-wrapper">
              <span className="software-badge">WEITERE SKILLS</span>
            </div>
          </div>

          <div className='flex just-content-center'>
            <div className='skills-tag-group max-width-700 just-content-center'>
              <span className='skill-tag'>Adobe Express</span>
              <span className='skill-tag'>ChatGPT</span>
              <span className='skill-tag'>Firefly</span>
              <span className='skill-tag'>Runway</span>
              <span className='skill-tag'>Webflow</span>
              <span className='skill-tag'>HTML / CSS</span>
              <span className='skill-tag'>React (Basic)</span>
              <span className='skill-tag'>THree.js (Basic)</span>
            </div>
          </div>

          </ScrollReveal>

          <ScrollReveal>

          <div className='pad-v-100'>

              <TextSectionCenter title="Projektauswahl" 
                paragraphs={[
              "Da viele meiner Arbeiten der Geheimhaltung unterliegen, zeigt diese Auswahl nur einen Bruchteil meines Portfolios. Gerne präsentiere ich Ihnen in einem persönlichen Gespräch weitere, spezifische Referenzen." 
              ]}
              />

              <div className='flex clients-section'>

                 <Link to="/jan-plewka" className='clients-container'>
                  <div>
                    <span className='ref-title'>Jan Plewka</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientJan} alt="Jan Plewka Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/nevio"  className='clients-container'>
                  <div>
                    <span className='ref-title'>Nevio Passaro - Gelato</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientNevio} alt="Nevio Passaro Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/inteam" className='clients-container'>
                  <div>
                    <span className='ref-title'>Inteam Beziehungsbox</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientInteam} alt="Inteam Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/drf" className='clients-container'>
                  <div>
                    <span className='ref-title'>DRF - Welt der Luftretter</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientDRF} alt="DRF - Welt der Luftretter Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/medieninsider" className='clients-container'>
                  <div>
                    <span className='ref-title'>Medieninsider</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientMedieninsider} alt="Medieninsider Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/innovationspreis" className='clients-container'>
                  <div>
                    <span className='ref-title'>Innovationspreis BB</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientInno} alt="Innovationspreis Berlin-Brandenburg Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

                <Link to="/gewobag" className='clients-container'>
                  <div>
                    <span className='ref-title'>Gewobag</span> 
                    <span className="read-more">read more</span>
                  </div>
                  <img src={ClientGewobag} alt="Gewobag Client Cover" className='client-image'/>
                  <img src={starLila} alt="Icon Lila" className='clienticon-lila'/>
                </Link>

              </div>

            </div>
          
        </ScrollReveal>
          
          
        </div>

      </main>

      <Footer></Footer>

    </>
  );
};

export default Home;