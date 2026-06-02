// src/Pages/Contact.js
import React from 'react';
import SEO from '../components/SEO';

import TextSectionCenter from '../components/Reusable/TextSectionCenter';
import ContactForm from '../components/Contact/ContactForm';
import Footer from '../components/Footer';

const contactText = [
  "Ich freue mich, von dir zu hören! Ob du Fragen zu meiner Arbeit hast, ein Projekt besprechen möchtest oder einfach Hallo sagen willst – schreib mir gerne.",
  "Ich melde mich so schnell wie möglich bei dir."
];


function Contact() {
  return (
    <div>
      <SEO
        title="Kontakt – Catalina Mejia Martinez | Art Direction & Motion Design Berlin"
        description="Projekt anfragen, Zusammenarbeit besprechen oder einfach Hallo sagen – kontaktiere Catalina Mejia Martinez, freiberufliche Art Directorin und Motion Designerin aus Berlin."
        keywords="Kontakt, Art Direction Anfrage, Motion Design Freelance Berlin, Freelance Designerin beauftragen, Catalina Mejia Martinez Kontakt, cmmvisual"
      />

      <div className='max-width pad-v-100'>
        <TextSectionCenter title="Kontakt" paragraphs={contactText} />
        <ContactForm />
      </div>

    <Footer></Footer>



    </div>
  );
}

export default Contact;