// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import VimeoEmbed from '../../components/Reusable/VimeoEmbed';

// Images Import
import heroImg1 from '../../assets/Refs/Innovationspreis/Innovationspreis_BB.jpg'

function Nevio() {


  return (
    <div>

        <SEO 
            title="Portfolio - Innovationspreis Berlin-Brandenburg" 
            description="Motion Graphics zu den Videos"
        />

        <div className='ref-hero'>
            <div>
                <img src={heroImg1} alt="Hero Section Screenshot vom Innovationspreis Berlin Brandenburg"></img>
            </div>


        </div>

        <div className='mainContent'>
            <div className='max-width'>
            <TextSectionCenter title="Innovationspreis Berlin-Brandenburg" 
                paragraphs={[
                    "Im Rahmen des jährlich ausgelobten Innovationspreises Berlin-Brandenburg war ich für die Erstellung der Motion Graphics verantwortlich. Diese ergänzten das Filmmaterial und wurden im Rahmen der Preisverleihung sowie auf der offiziellen Website präsentiert."

              ]}
              />

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1190412510"
                privateHash="bcff8882c1"
                title="My Private Vimeo Video"
              />

            </div>

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1190412508"
                privateHash="bdaab713de"
                title="My Private Vimeo Video"
              />

            </div>

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1190412509"
                privateHash="a97d16e7e7"
                title="My Private Vimeo Video"
              />

            </div>

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1190412511"
                privateHash="a401ae83b5"
                title="My Private Vimeo Video"
              />

            </div>

            <div className='portfolio-box bg-green col-black'>

                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
                        Eine besondere Herausforderung stellte der enge Zeitplan dar, da die finalen Unternehmen erst kurz vor dem Event feststanden. Dies erforderte eine effiziente Konzeption, um die komplexen Innovationen der jeweiligen Firmen visuell aufzubereiten.                    
                        </p>
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Innovationen BB</span> <span>Movact</span>
                    </div>
                    <div>
                        <h3>Leistungen</h3>
                        <span>Illustration und Motion</span>
                    </div>
                </div>
            </div>
    
            
            
              


        </div>

    </div>
        

    <Footer></Footer>

    </div>
  );
}

export default Nevio;