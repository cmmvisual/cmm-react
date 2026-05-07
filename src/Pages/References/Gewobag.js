// src/Pages/About.js
import React from 'react';
import SEO from '../../components/SEO';
import CSS from '../References/References.css'
import TextSectionCenter from '../../components/Reusable/TextSectionCenter';
import Footer from '../../components/Footer';
import VimeoEmbed from '../../components/Reusable/VimeoEmbed';

// Images Import

import heroImg1 from '../../assets/Refs/Gewobag/header01.jpg'
import heroImg2 from '../../assets/Refs/Gewobag/header02.jpg'
import heroImg3 from '../../assets/Refs/Gewobag/header03.jpg'

import gallery01 from '../../assets/Refs/Gewobag/01_Helm.jpg'
import gallery02 from '../../assets/Refs/Gewobag/02_Shirt.jpg'
import gallery03 from '../../assets/Refs/Gewobag/03_Ausmaluntergrund-stifte.jpg'
import gallery04 from '../../assets/Refs/Gewobag/04_Happy-Home_Sticker.jpg'
import gallery05 from '../../assets/Refs/Gewobag/05_LKW.jpg'
import gallery06 from '../../assets/Refs/Gewobag/06_Papphome.jpg'
import gallery07 from '../../assets/Refs/Gewobag/07_Snacks.jpg'
import gallery08 from '../../assets/Refs/Gewobag/08_Bausteine.jpg'
import gallery09 from '../../assets/Refs/Gewobag/09_Box.jpg'

function Gewobag() {
  return (
    <div>

        <SEO 
            title="Portfolio - Gewobag" 
            description="Welcome to my website homepage"
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
            <TextSectionCenter title="Referenz - Gewobag" 
                paragraphs={[
                    "Die Gewobag feiert jährlich den „Tag der kleinen Baumeister“. Da die Veranstaltung während der Pandemie nicht vor Ort stattfinden konnte, entstand als kreative Alternative die Bauprofi-Box zum Bestellen für zu Hause. Da die physischen Elemente zum Zeitpunkt der Kampagne noch in der Produktion waren, haben wir das Produkt mittels 3D-Modellen visualisiert. Zusätzlich produzierten wir ein begleitendes Video, um die kostenlose Box zu bewerben und die Inhalte anschaulich zu erklären."
                ]}
              />

            <div className='m-bottom-100'>
                <VimeoEmbed
                videoId="1090020661" 
                privateHash="ca88b1bc84" 
                title="My Private Vimeo Video" 
                />
            </div>

            <div className='portfolio-box bg-green col-black'>
                <div className='long-text'>
                    <h3>Herrausforderung</h3>
                    <p className='col-black'>
                        Die besondere Schwierigkeit lag darin, dass die Box während der Marketingphase noch nicht physisch existierte. Wir lösten dies durch hochwertige 3D-Renderings und eine Videoproduktion, die das Produkt und dessen Anwendung bereits vorab erlebbar machte.        
                    </p>       
                </div>

                <div className='short-text'>
                    <div>
                        <h3>Kunde</h3>
                        <span>Gewobag</span>
                    </div>
                    <div>
                        <h3>Agentur</h3>
                        <span>Movact</span>
                    </div>
                </div>
            </div>
            

            <div className='image-gallery m-bottom-100'>
                <img src={gallery01}></img>
                <img src={gallery02}></img>
                <img src={gallery03}></img>
                <img src={gallery04}></img>
                <img src={gallery05}></img>
                <img src={gallery06}></img>
                <img src={gallery07}></img>
                <img src={gallery08}></img>
                <img src={gallery09}></img>
            </div>

        </div>

        </div>
        

        <Footer></Footer>

    </div>
  );
}

export default Gewobag;