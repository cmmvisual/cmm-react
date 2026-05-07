import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SplitHeadline from '../components/Reusable/SplitHeadline';

function Impressum() {
  return (
    <>
      <SEO title="Impressum" description="Impressum – Catalina Mejia Martinez" />

      <main className="mainContent">
        <div className="max-width legal-page">

          <SplitHeadline tag="h1" start="top 90%">Impressum</SplitHeadline>

          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Catalina Mejia Martinez<br />
              c/o Leicht Digital GmbH<br />
              Innsbrucker Str. 37<br />
              10825 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2>Kontakt</h2>
            <p>
              E-Mail: kontakt@cmmvisual.de<br />
              Website: cmmvisual.de
            </p>
          </section>

          <section>
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              25/491/00799
            </p>
          </section>

          <section>
            <h2>Berufsbezeichnung & berufsrechtliche Regelungen</h2>
            <p>
              Berufsbezeichnung: Art Direktorin / Motion Designerin<br />
            </p>
          </section>

          <section>
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen.
            </p>
          </section>

          <section>
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Impressum;
