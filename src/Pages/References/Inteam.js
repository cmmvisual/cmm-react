// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import VimeoEmbed from '../../components/Reusable/VimeoEmbed';
import ImageSlider from '../../components/Reusable/ImageSlider';

// Images Import

import heroImg1 from '../../assets/Refs/Inteam/Inteam_Hero_B01.jpg'
import heroImg2 from '../../assets/Refs/Inteam/Inteam_Hero_B02.jpg'

import inteamGrid01 from '../../assets/Refs/Inteam/Inteam-Grid01.jpg'
import inteamGrid02 from '../../assets/Refs/Inteam/Inteam-Grid02.jpg'
import inteamGrid03 from '../../assets/Refs/Inteam/Inteam-Grid03.jpg'

// Slider Images
import SliderImg01 from '../../assets/Refs/Inteam/Inteam_Slider_01.jpg'
import SliderImg02 from '../../assets/Refs/Inteam/Inteam_Slider_02.jpg'
import SliderImg03 from '../../assets/Refs/Inteam/Inteam_Slider_03.jpg'

function Inteam() {

    const sliderImages = [
    SliderImg01,
    SliderImg02,
    SliderImg03
  ];

  return (
    <div>

        <SEO 
            title="Portfolio - Inteam" 
            description="Branding und Packaing Design für ein Produkt-Launch"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Portfolio Image Gewobag"></img>
            </div>

            <div>
                <img src={heroImg2} alt="Portfolio Image Gewobag"></img>
            </div>

        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="INTEAM Beziehungsbox für Paare" 
                paragraphs={[
                    "Im Auftrag der Agentur Movact gestaltete ich das gesamte Look & Feel für den Launch dieses Paarspiels. Das Design umfasste das Packaging sowie die 20 Spielkarten. Um den Auftritt zu vervollständigen, habe ich mit dem Team zusammen zudem die Produktfotografie, 3D Renderings und Visuals sowie die begleitende Werbe-Animationen umgesetzt."
              ]}
              />
            

            <div className='image-gallery m-bottom-100'>
                <img src={inteamGrid01}></img>
                <img src={inteamGrid02}></img>
                <img src={inteamGrid03}></img>
            </div>

            <div className='portfolio-box bg-green'>
                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
                    Trotz des engen Zeitrahmens von nur drei Monaten wurde das Projekt ganzheitlich realisiert. Dabei lag der Fokus auf der parallelen Aufbereitung für den hochwertigen Print-Assets sowie der Erstellung aller digitalen Assets für den Webshop.                    </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Inteam</span>
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

export default Inteam;