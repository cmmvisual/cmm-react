import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SplitHeadline from '../components/Reusable/SplitHeadline';

function Datenschutz() {
  return (
    <>
      <SEO title="Datenschutz" description="Datenschutzerklärung – Catalina Mejia Martinez" />

      <main className="mainContent">
        <div className="max-width legal-page">

          <SplitHeadline tag="h1" start="top 90%">Datenschutz&shy;erklärung</SplitHeadline>

          <section>
            <h2>1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2>2. Verantwortliche Stelle</h2>
            <p>
              Catalina Mejia Martinez<br />
              E-Mail: kontakt@cmmvisual.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
              personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2>3. Datenerfassung auf dieser Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum entnehmen. Ihre Daten werden zum einen dadurch
              erhoben, dass Sie uns diese mitteilen, z. B. durch das Kontaktformular.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2>4. Hosting</h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz des Hosters
              erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
              Kunden (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
          </section>

          <section>
            <h2>5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen.
            </p>
          </section>

          <section>
            <h2>6. Analyse-Tools und Werbung</h2>
            <p>
              Diese Website verwendet keine Analyse-Tools von Drittanbietern. Es werden keine
              personenbezogenen Daten zu Werbe- oder Trackingzwecken an Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2>7. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
              der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Datenschutz;
