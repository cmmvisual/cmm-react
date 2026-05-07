// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import VimeoEmbed from '../../components/Reusable/VimeoEmbed';
import ImageSlider from '../../components/Reusable/ImageSlider';

// Images Import
import heroImg1 from '../../assets/Refs/DRF/DRF-UI-Station-UI_1080x1350.jpg'
import heroImg2 from '../../assets/Refs/DRF/DRF_Konzept-startgrafik.jpg'

// Slider Images
import SliderImg01 from '../../assets/Refs/DRF/Slider_Bild_02.jpg'
import SliderImg02 from '../../assets/Refs/DRF/Slider_Bild_03.jpg'
import SliderImg03 from '../../assets/Refs/DRF/Slider_Bild_04.jpg'

function DRF() {

const sliderImages = [
    SliderImg01,
    SliderImg02,
    SliderImg03
  ];

  return (
    <div>

        <SEO 
            title="Portfolio - Gewobag" 
            description="Welcome to my website homepage"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Portfolio DRF Welt der Luftrettung Vorschau Stationen"></img>
            </div>

            <div>
                <img src={heroImg2} alt="Portfolio DRF Welt der Luftrettung Hero Bild"></img>
            </div>

        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="DRF: Welt der Luftretter" 
                paragraphs={[
                    "Im Auftrag von Movact habe ich als Designer sämtliche Stationen der DRF Luftrettung sowie deren Hubschrauber als detailreiche 3D-Modelle entwickelt und für den Einsatz auf einer interaktiven Plattform optimiert. Darüber hinaus habe ich diverse grafische Assets, darunter Icons und andere Elemente, gestaltet, um eine ansprechende und funktionale Benutzererfahrung zu schaffen."
              ]}
              />

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1049598033" 
                privateHash="f167385cb1" 
                title="My Private Vimeo Video" 
                />
            </div>

            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
                        Die DRF-Luftrettungsstationen sind über ganz Deutschland verteilt, wodurch das Sammeln und Aufbereiten des Referenzmaterials für den Bau der einzelnen Stationen entsprechend aufwendig war.
                        Zusätzlich lag ein starker Fokus auf der technischen Umsetzung und dem Export: Die 3D-Elemente mussten webtauglich, performant und auf möglichst allen Rechnern kompatibel sein.
                        </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>DRF Luftrettung</span>
                    </div>
                    <div>
                        <h3>Agentur</h3>
                        <span>Movact</span>
                    </div>
                </div>
            </div>
    
        <ImageSlider images={sliderImages} height="600px" interval={5000} autoplay={true}/>


        </div>

    </div>
        

    <Footer></Footer>

    </div>
  );
}

export default DRF;