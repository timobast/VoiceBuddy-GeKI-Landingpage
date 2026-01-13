import SectionHeader from "@/components/ui/SectionHeader";

export default function ImpressumPage() {
  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG und Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Firmenangaben</h2>
              <p>
                <strong>DC Cloud Services GmbH</strong>
                <br />
                Hanauer Straße 45
                <br />
                63755 Alzenau
                <br />
                Deutschland
              </p>
              <p className="mt-4">
                <strong>Telefon:</strong> +49 (0) 6023 9521127
                <br />
                <strong>E-Mail:</strong>{" "}
                <a className="text-primary-700 underline" href="mailto:info@ai-buddy.net">
                  info@ai-buddy.net
                </a>
                <br />
                <strong>Website:</strong>{" "}
                <a className="text-primary-700 underline" href="https://www.ai-buddy.net" rel="noopener noreferrer">
                  https://www.ai-buddy.net
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Rechtliche Angaben</h2>
              <p>
                <strong>Geschäftsführer:</strong> Timo Bast
                <br />
                <strong>Registergericht:</strong> Amtsgericht Aschaffenburg
                <br />
                <strong>Handelsregisternummer:</strong> HRB 16918
                <br />
                <strong>Umsatzsteuer-ID:</strong> DE358520353
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
              <p>Verantwortlich im Sinne des § 18 MStV:</p>
              <p>
                <strong>Timo Bast</strong>
                <br />
                Hanauer Straße 45, 63755 Alzenau, Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
                eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


