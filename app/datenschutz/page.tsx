import SectionHeader from "@/components/ui/SectionHeader";

export default function DatenschutzPage() {
  const lastUpdated = "13. Januar 2026";

  return (
    <div className="py-12">
      <div className="container-custom max-w-4xl">
        <SectionHeader
          title="Datenschutzerklärung"
          subtitle={`Informationen zur Verarbeitung personenbezogener Daten (Stand: ${lastUpdated})`}
        />

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none text-gray-700 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p>
                <strong>DC Cloud Services GmbH</strong>
                <br />
                Hanauer Straße 45
                <br />
                63755 Alzenau
                <br />
                Deutschland
                <br />
                E-Mail:{" "}
                <a className="text-primary-700 underline" href="mailto:info@ai-buddy.net">
                  info@ai-buddy.net
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Überblick der Verarbeitung</h2>
              <p>
                Diese Website ist eine Landingpage. Wir verarbeiten personenbezogene Daten nur insoweit, wie dies für den
                Betrieb der Website, die IT-Sicherheit sowie die Kommunikation mit Ihnen erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Hosting und Server-Logfiles</h2>
              <p>
                Unsere Website wird über <strong>Azure Static Web Apps</strong> (Microsoft Azure) bereitgestellt. Beim
                Aufruf der Website werden durch den Hosting-Anbieter technisch notwendige Daten verarbeitet (sog.
                Server-Logfiles), insbesondere:
              </p>
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>abgerufene Seite/Datei</li>
                <li>Referrer-URL</li>
                <li>Browser-/Geräteinformationen</li>
                <li>Statuscodes/Fehlermeldungen</li>
              </ul>
              <p>
                <strong>Zweck:</strong> Auslieferung der Website, Gewährleistung der IT-Sicherheit, Fehleranalyse und
                Missbrauchsprävention.
                <br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem und
                stabilem Betrieb).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kontaktaufnahme</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren (z.B. über einen „mailto:“ Link), verarbeiten wir die von Ihnen
                übermittelten Daten (E-Mail-Adresse, Inhalt der Nachricht und ggf. weitere Angaben), um Ihre Anfrage zu
                bearbeiten.
              </p>
              <p>
                <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Kommunikation.
                <br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen/Vertrag) und/oder
                Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kommunikation).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies und Tracking</h2>
              <p>
                Wir setzen auf dieser Landingpage keine Tracking- oder Marketing-Cookies ein. Es können technisch
                notwendige Cookies verwendet werden, soweit diese für grundlegende Funktionen erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Empfänger / Auftragsverarbeitung</h2>
              <p>
                Für Hosting und Auslieferung der Website setzen wir Dienstleister ein (Microsoft Azure). Soweit dabei
                personenbezogene Daten verarbeitet werden, erfolgt dies auf Grundlage eines Auftragsverarbeitungsvertrags
                (Art. 28 DSGVO), soweit erforderlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Speicherdauer</h2>
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder
                gesetzliche Aufbewahrungspflichten bestehen. Server-Logfiles werden in der Regel für einen begrenzten
                Zeitraum zur Sicherheits- und Fehleranalyse vorgehalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ihre Rechte</h2>
              <p>
                Sie haben nach der DSGVO insbesondere folgende Rechte:
              </p>
              <ul>
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
                <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO), sofern anwendbar</li>
              </ul>
              <p>
                Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
                <a className="text-primary-700 underline" href="mailto:info@ai-buddy.net">
                  info@ai-buddy.net
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO), z.B. bei
                der für Ihren Wohnsitz zuständigen Aufsichtsbehörde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen oder
                Änderungen an unserer Website anzupassen.
              </p>
            </section>

            <section className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="m-0 text-sm">
                Hinweis: Diese Datenschutzerklärung stellt eine allgemeine Information dar und ersetzt keine individuelle
                Rechtsberatung.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}


