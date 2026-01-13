import "./globals.css";

export const metadata = {
  title: "GeKI – Gemeinde-KI (Chat & VOICE)",
  description:
    "GeKI ist eine private KI-Assistenz für Kommunen: Chat & VOICE-KI für den Bürgerservice im DACH-Raum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white border-b border-gray-200">
            <div className="container-custom py-4 flex items-center justify-between">
              <a
                href="https://www.ai-buddy.net"
                className="font-bold text-gray-900"
                rel="noopener noreferrer"
              >
                AI-Buddy
              </a>
              <a
                href="https://www.ai-buddy.net"
                className="text-sm font-semibold text-primary-700 hover:text-primary-800"
                rel="noopener noreferrer"
              >
                Zur Website
              </a>
            </div>
          </header>

          {children}

          <footer className="bg-gray-900 text-gray-300 mt-16">
            <div className="container-custom py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-white font-semibold mb-3">AI-Buddy</div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div>DC Cloud Services GmbH</div>
                    <div>Hanauer Straße 45</div>
                    <div>63755 Alzenau, Deutschland</div>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-white font-semibold mb-3">Kontakt</div>
                  <div className="text-gray-400 space-y-2">
                    <a className="hover:text-white transition-colors block" href="mailto:info@designerscapitol.net">
                      info@designerscapitol.net
                    </a>
                    <a className="hover:text-white transition-colors block" href="tel:+4960239521127">
                      +49 (0) 6023 9521127
                    </a>
                    <a className="hover:text-white transition-colors block" href="https://www.ai-buddy.net" rel="noopener noreferrer">
                      www.ai-buddy.net
                    </a>
                  </div>
                </div>

                <div className="text-sm">
                  <div className="text-white font-semibold mb-3">Rechtliches</div>
                  <div className="text-gray-400 space-y-2">
                    <a className="hover:text-white transition-colors block" href="/impressum">
                      Impressum
                    </a>
                    <a className="hover:text-white transition-colors block" href="https://www.ai-buddy.net/privacy" rel="noopener noreferrer">
                      Datenschutz
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center gap-3">
                <div>© {new Date().getFullYear()} DC Cloud Services GmbH. Alle Rechte vorbehalten.</div>
                <div className="text-gray-500">Landingpage: GeKI.ai-buddy.net</div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
