// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import VimeoEmbed from '../../components/Reusable/VimeoEmbed';

// Images Import

import heroImg1 from '../../assets/Refs/Medieninsider/Medieninsider-Leseletter.png'
import heroImg2 from '../../assets/Refs/Medieninsider/Medieninsider-gruender.png'


import brandmedien01 from '../../assets/Refs/Medieninsider/Medieninsider_Brandguidelines_V2_Page_02-p-1600.jpg'
import brandmedien02 from '../../assets/Refs/Medieninsider/Medieninsider_Brandguidelines_V2_Page_03-p-1600.jpg'
import brandmedien03 from '../../assets/Refs/Medieninsider/Medieninsider_Brandguidelines_V2_Page_04-p-1600.jpg'

function Medieninsider() {
  return (
    <div>

        <SEO 
            title="Portfolio - Medieninsider" 
            description="Logo und Brandentwicklung vom Fachmagazin Medieninsider"
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
            <TextSectionCenter title="Medieninsder" 
                paragraphs={[
                    "Für das digitale Magazin Medien-Insider habe ich das Logo und das gesamte Branding entwickelt. Das Magazin bietet exklusive Einblicke, Analysen und Hintergründe zur Medienbranche und richtet sich an Medienschaffende, Entscheider sowie alle, die sich für die Zukunft des Journalismus interessieren."
              ]}
              />

            <div className='portfolio-box bg-green'>

                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
                        Medieninsider ist primär digital ausgerichtet, sollte jedoch den Charme eines klassischen Print-Magazins bewahren. Entstanden ist ein Mix aus klassisch und modern, bei dem vor allem das Zusammenspiel von Farben und Typografie im Fokus steht.
                        </p>                
                        </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Matthias Bannert</span>
                        <span>Marvin Schade</span>
                    </div>
                    <div>
                        <h3>Agentur</h3>
                        <span>Movact</span>
                    </div>
                </div>
            </div>
            

            <div className='image-big m-bottom-100'>
                <img src={brandmedien01}></img>
                <img src={brandmedien02}></img>
                <img src={brandmedien03}></img>
            </div>

        </div>
        </div>

        

        <Footer></Footer>

    </div>
  );
}

export default Medieninsider;