import Button from "@/components/ui/Button";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Database,
  Headphones,
  Languages,
  Layers,
  Lock,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Flag,
  Github,
  Sparkles,
  Workflow,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type UseCase = {
  title: string;
  tag: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: "Rund um die Uhr erreichbar",
    description: "24/7 Antworten auf Standardfragen – auch außerhalb der Öffnungszeiten.",
    icon: <Sparkles className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Mitarbeitende entlasten",
    description: "Weniger repetitive Anfragen, mehr Zeit für komplexe Fälle und persönliche Beratung.",
    icon: <CheckCircle2 className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Sprachenvielfalt",
    description: "Mehrsprachige Auskunft für Bürger:innen – barrierearm und inklusiv.",
    icon: <Languages className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Telefonie & Support intelligent",
    description: "VOICE‑KI nimmt Anrufe entgegen, qualifiziert Anliegen und leitet gezielt weiter.",
    icon: <Phone className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Neue Servicekonzepte",
    description: "Digitale Erstberatung, proaktive Hinweise, Self‑Service – ohne Medienbruch.",
    icon: <Workflow className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Wissensdatenbank aufbauen",
    description: "Wissen aus Website, Intranet/SharePoint, Formularen & Prozessen zentral nutzbar machen.",
    icon: <Database className="h-6 w-6 text-primary-700" />,
  },
  {
    title: "Medienbrüche vermeiden",
    description: "Von Chat/Telefon bis Fachbereich: konsistente Antworten und klare Übergaben.",
    icon: <Layers className="h-6 w-6 text-primary-700" />,
  },
];

const useCases: UseCase[] = [
  { 
    title: "Interaktive Abfallberatung & Aufklärung", 
    tag: "Bürgerservice",
    description: "GeKI beantwortet Fragen zu Müllsortierung, Entsorgungsterminen und Sondermüll automatisch – auf Ihrer Website oder per Telefon. Reduziert Rückfragen an die Verwaltung erheblich und macht Abfallwirtschaft für Bürger:innen verständlich."
  },
  { 
    title: "Digitale Umzugsberatung", 
    tag: "Bürgerservice",
    description: "Führt Bürger:innen durch den Umzugsprozess: Welche Ummeldungen nötig sind, welche Dokumente gebraucht werden und wo Termine vereinbart werden können. Spart Zeit bei Standardanfragen und bereitet komplexe Fälle optimal vor."
  },
  { 
    title: "Info‑Chat zu sozialen Angeboten & Vermittlung", 
    tag: "Soziales",
    description: "Informiert niederschwellig über Hilfsangebote, Beratungsstellen und finanzielle Unterstützung. GeKI leitet bei Bedarf an die richtige Stelle weiter – barrierefrei, mehrsprachig und anonym nutzbar."
  },
  { 
    title: "Hilfestellung bei Schulden / Ratenvereinbarung", 
    tag: "Soziales",
    description: "Beantwortet erste Fragen zu Zahlungsplänen, Stundungen oder Beratungsangeboten. Qualifiziert Anliegen vor und leitet sensible Fälle an Fachberatung weiter – diskret und datenschutzkonform."
  },
  { 
    title: "Telefonunterstützung (VOICE‑KI)", 
    tag: "Telefon",
    description: "VOICE-KI nimmt Anrufe entgegen, beantwortet häufige Fragen oder leitet gezielt an den zuständigen Fachbereich weiter. Mit Gesprächszusammenfassung für Mitarbeitende – damit jeder Anruf vorbereitet ist und weniger Zeit in Warteschleifen verloren geht."
  },
  { 
    title: "ID/Pass – Auskünfte & Terminvorbereitung", 
    tag: "Bürgerservice",
    description: "Beantwortet Fragen zu Personalausweisen, Reisepässen und benötigten Unterlagen. GeKI bereitet Termine vor, indem es prüft, ob alle Dokumente vorliegen – und spart so Zeit am Schalter."
  },
  { 
    title: "Baubewilligung / Bauen & Wohnen", 
    tag: "Bauen",
    description: "Erklärt Bauvorschriften, Genehmigungsprozesse und erforderliche Anträge. GeKI führt durch den Antragsprozess und leitet komplexe bauliche Anfragen an die Bauabteilung weiter – mit allen relevanten Vorabinfos."
  },
  { 
    title: "Bildung (Schule)", 
    tag: "Bildung",
    description: "Beantwortet Eltern-Fragen zu Schulanmeldung, Ferienzeiten, Betreuungsangeboten oder Schulmaterialien. Entlastet Schulsekretariate und macht Informationen rund um die Uhr verfügbar."
  },
  { 
    title: "Todesfallmeldung & Organisation", 
    tag: "Bürgerservice",
    description: "Unterstützt Angehörige in einer sensiblen Situation: Erklärt notwendige Schritte, erforderliche Dokumente und leitet bei Bedarf an Bestattungsamt oder Beratung weiter. Empathisch formuliert und diskret."
  },
  { 
    title: "Dateisuchmanager (Intranet/SharePoint)", 
    tag: "Verwaltung",
    description: "Durchsucht Ihr Intranet, SharePoint oder Dokumentenarchive für Mitarbeitende blitzschnell. Findet Formulare, Vorlagen, interne Richtlinien oder Protokolle – spart Suchzeit und reduziert Rückfragen an Kolleg:innen."
  },
  { 
    title: "Einbürgerung", 
    tag: "Integration",
    description: "Informiert über Voraussetzungen, Antragsprozess und benötigte Unterlagen für die Einbürgerung. Mehrsprachig verfügbar und mit klarer Wegweisung – damit Interessierte den Prozess gut vorbereitet starten können."
  },
  { 
    title: "Integration in bestehende Systeme", 
    tag: "IT",
    description: "GeKI lässt sich in Ihre vorhandene IT-Infrastruktur integrieren: Website, Telefonie, MS Teams, SharePoint oder Fachverfahren. Keine Parallelstrukturen – GeKI arbeitet mit Ihren bestehenden Systemen zusammen."
  },
];

const rolloutSteps = [
  {
    title: "Analyse",
    description:
      "Detaillierte Bestandsaufnahme Ihrer Prozesse. Gemeinsam identifizieren wir zeitintensive, fehleranfällige und repetitive Abläufe – dort entsteht der größte KI‑Mehrwert.",
  },
  {
    title: "Workshop",
    description:
      "Vor‑Ort‑Workshop: Anwendungsszenarien entwickeln, Potenziale bewerten und Handlungsfelder festlegen. Bestandteil: Datenschutz‑Folgenabschätzung (DSGVO/nDSG).",
  },
  {
    title: "Umsetzung",
    description:
      "Individuelle KI‑Module entwickeln und integrieren. Direkte Anbindung an Systeme/Prozesse – ohne Parallelstrukturen.",
  },
  {
    title: "Verankerung",
    description:
      "Schulungen & Begleitung im Betrieb. Wir sorgen dafür, dass Wissen und Nutzung nachhaltig im Team ankommen.",
  },
];

const faqs = [
  {
    q: "Welche konkreten Vorteile bringt GeKI unserer Kommune?",
    a: "GeKI entlastet Ihre Mitarbeitenden spürbar: Weniger repetitive Anfragen, 24/7-Erreichbarkeit für Bürger:innen, schnellere Antwortzeiten und mehrsprachiger Service. Sie gewinnen Zeit für komplexe Fälle und persönliche Beratung – bei gleichzeitig höherer Servicequalität.",
  },
  {
    q: "Ist GeKI DSGVO-konform und sicher?",
    a: "Absolut. GeKI ist eine private KI-Lösung: Ihre Daten bleiben in Ihrer Kontrolle, werden nicht an öffentliche KI-Systeme weitergegeben und können in Ihrem eigenen Rechenzentrum betrieben werden. Wir begleiten Sie durch die Datenschutz-Folgenabschätzung (DSGVO/nDSG) und implementieren Rollen, Berechtigungen sowie ein vollständiges Löschkonzept.",
  },
  {
    q: "Wie einfach ist die Implementierung?",
    a: "Einfacher als gedacht: In nur 4 Schritten von der Analyse zum produktiven Einsatz. Wir analysieren gemeinsam Ihre Prozesse, entwickeln im Workshop die optimale Strategie, setzen die KI-Module um und begleiten Sie beim Go-Live. Sie starten risikolos – ohne große IT-Projekte oder teure Infrastruktur.",
  },
  {
    q: "Was unterscheidet GeKI von ChatGPT & Co.?",
    a: "GeKI ist speziell für kommunale Anforderungen entwickelt: Private KI statt öffentlicher Cloud, kein Training mit Ihren Daten, direkte Anbindung an Ihre Systeme (Website, Intranet, SharePoint, Telefonie) und optimiert für deutsche Verwaltungssprache. Sie bleiben unabhängig und behalten die volle Kontrolle.",
  },
  {
    q: "Wie schnell sehen wir erste Erfolge?",
    a: "Bereits nach 2-4 Wochen können erste KI-Module produktiv laufen. Wir starten mit einem Pilot-Usecase (z.B. Abfallberatung, FAQ-Assistent oder Telefon-Vorqualifizierung), messen die Entlastung und erweitern dann schrittweise. So minimieren Sie Risiken und maximieren den Nutzen.",
  },
  {
    q: "Brauchen unsere Mitarbeitenden spezielle IT-Kenntnisse?",
    a: "Nein. GeKI ist so intuitiv wie ein Chat-Tool. Ihre Mitarbeitenden nutzen es über bekannte Kanäle (Web, Teams, Telefon) – ohne neue Software lernen zu müssen. Wir bieten praxisnahe Schulungen und kontinuierlichen Support, damit Ihr Team von Anfang an sicher arbeitet.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <div className="pt-4 pb-12">
      <div className="container-custom">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-8 mb-12">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary-200/40 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-secondary-200/40 blur-2xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="mb-2">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  GeKI - Ihr kommunaler KI Assistent.
                </div>
                <div className="text-xs font-semibold tracking-wide uppercase text-primary-700 mt-2">
                  powered by AI-BUDDY
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-4 justify-center">
                <Pill>24/7 erreichbar</Pill>
                <Pill>Mehrsprachig</Pill>
                <Pill>Chat + Voice</Pill>
                <Pill>Private KI</Pill>
                <Pill>DSGVO & nDSG</Pill>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                GeKI verbindet Website‑Wissen, Dokumente und Prozesse zu einem digitalen Assistenten.
                <strong> Als Chat</strong> und als <strong>VOICE‑KI für den Telefonkanal</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-6">
                {[
                  "Anfragen automatisch beantworten und vorqualifizieren",
                  "Bürgerservice spürbar entlasten",
                  "Mehrsprachige Kommunikation für alle Zielgruppen",
                  "Kontrollierte Datenquellen & klare Berechtigungen",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary-700" />
                    </div>
                    <span className="text-base">{t}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="tel:+4960237043102" variant="secondary" className="inline-flex items-center">
                  Testanruf: +49 6023 7043102
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
                <Button href="#kontakt" variant="primary" className="inline-flex items-center">
                  Gespräch anfragen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button href="#use-cases" variant="outline">
                  Use‑Cases ansehen
                </Button>
              </div>

              <p className="text-xs text-gray-600 mt-4">
                Hinweis: Diese Landingpage dient der Veranschaulichung.
              </p>
            </div>

            {/* Right-side illustration (native UI, no external images) */}
            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary-700" />
                    <div className="font-semibold text-gray-900">GeKI – Demo</div>
                  </div>
                  <Pill>Live‑Chat</Pill>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-gray-50 border border-gray-200 p-3">
                    <div className="text-xs text-gray-500 mb-1">Bürger:in</div>
                    <div className="text-sm text-gray-800">„Wie beantrage ich einen neuen Ausweis?“</div>
                  </div>
                  <div className="rounded-xl bg-primary-50 border border-primary-100 p-3">
                    <div className="text-xs text-gray-500 mb-1">GeKI</div>
                    <div className="text-sm text-gray-800">
                      „Ich helfe gern. Für den Antrag brauchen Sie … Soll ich Ihnen den Link zum Formular senden?“
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Formular", "Termin", "Kontakt"].map((x) => (
                      <div
                        key={x}
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-semibold text-gray-700 text-center"
                      >
                        {x}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Phone className="h-4 w-4 text-primary-700" />
                      <div className="text-sm font-semibold">VOICE‑KI</div>
                    </div>
                    <div className="text-xs text-gray-600">Annahme, Routing, Zusammenfassung</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Lock className="h-4 w-4 text-primary-700" />
                      <div className="text-sm font-semibold">Private KI</div>
                    </div>
                    <div className="text-xs text-gray-600">Kontrollierte Datenquellen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Vorteile für Gemeinden & Städte</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Was eine <strong>private KI</strong> Ihrer Gemeindeverwaltung bringt – konsistent zum Design dieser Landingpage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-11 w-11 rounded-xl bg-white border border-gray-200 grid place-items-center">
                    {b.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                </div>
                <p className="text-gray-700">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Drei Hauptanwendungsbereiche */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <div className="text-sm font-semibold text-primary-700 mb-2">Drei zentrale Einsatzbereiche.</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              So unterstützt GeKI Ihre Kommune
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chat-Assistent */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <BookOpen className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chat-Assistent für Ihre Website</h3>
                <p className="text-gray-700 mb-4">
                  Beantwortet Bürgeranfragen automatisch auf Ihrer Website – rund um die Uhr. Reduziert Routineanfragen, 
                  entlastet die Hotline und macht kommunale Dienstleistungen jederzeit zugänglich. Mehrsprachig, 
                  barrierefrei und immer aktuell.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>24/7 Erreichbarkeit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>Einfache Website-Integration</span>
                </div>
              </div>
            </div>

            {/* Voice-Assistent */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <Phone className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Voice-KI für den Telefonservice</h3>
                <p className="text-gray-700 mb-4">
                  Intelligente Anrufannahme mit natürlicher Sprachverarbeitung. Qualifiziert Anliegen vor, 
                  leitet gezielt weiter und senkt Call-Center-Kosten erheblich. Mit Gesprächszusammenfassung 
                  für Ihre Mitarbeitenden – damit jeder Anruf optimal vorbereitet ist.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>Natürliche Gespräche</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>Anrufweiterleitung & Routing</span>
                </div>
              </div>
            </div>

            {/* Interne Verwaltungs-KI */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-600 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <Database className="h-16 w-16 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">KI-Assistent für interne Prozesse</h3>
                <p className="text-gray-700 mb-4">
                  Durchsucht Ihr Intranet, SharePoint und Dokumentenarchive blitzschnell. Unterstützt Mitarbeitende 
                  bei der Recherche, beschleunigt die Informationssuche und macht Verwaltungswissen sofort verfügbar. 
                  Spart Zeit und reduziert Rückfragen.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>Schnelle Dokumentensuche</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-700" />
                  <span>Integration in MS Teams</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Was GeKI besonders macht (Chat + Voice) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Sparkles className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Was GeKI besonders macht</h2>
          </div>
          <p className="text-gray-700 mb-6">
            GeKI ist für kommunale Anforderungen gebaut: verständliche Antworten, zentrale Steuerung und ein gemeinsames
            Wissensfundament für <strong>Chat</strong> und <strong>Telefon (VOICE)</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Verständliche Antworten statt Amtsdeutsch</h3>
              </div>
              <p className="text-gray-700">
                Bürger:innen formulieren frei – GeKI antwortet klar, kontextbezogen und nachvollziehbar auf Basis Ihrer
                kommunalen Informationen (Website, Dokumente, Prozesse).
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Workflow className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Flexible Informationssteuerung</h3>
              </div>
              <p className="text-gray-700">
                Aktuelle Meldungen, Korrekturen oder zeitlich befristete Hinweise können gezielt eingesteuert werden – ohne
                dass Ihre IT dafür mehrere Systeme anfassen muss.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Barrierearme Kommunikation</h3>
              </div>
              <p className="text-gray-700">
                Chat und VOICE unterstützen barrierearme Dialoge: klare Gesprächsführung, verständliche Sprache und (je nach
                Kanal) Sprach-Ein/-Ausgabe – damit Informationen für mehr Menschen zugänglich werden.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Analytics & Themen-Insights</h3>
              </div>
              <p className="text-gray-700">
                Erkennen Sie, welche Themen Ihre Bürger:innen wirklich beschäftigen: häufige Fragen, Suchpfade, Abbrüche
                und Hotspots – als Grundlage für Service-Verbesserungen.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Qualitätskontrolle & kontinuierliche Optimierung</h3>
              </div>
              <p className="text-gray-700">
                Monitoring, Feedback-Schleifen und gezielte Nachsteuerung helfen dabei, Antwortqualität und Dialoge laufend
                zu verbessern – ohne dass der Betrieb zur Dauerbaustelle wird.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-primary-700" />
                <h3 className="text-lg font-semibold text-gray-900">Ein Plattform-Fundament für Chat & Voice</h3>
              </div>
              <p className="text-gray-700">
                Chat-Bot und Voice-Bot greifen auf dieselbe Wissensbasis zu. Neue Inhalte oder Verbesserungen wirken damit
                auf beiden Kanälen – zentral steuerbar.
              </p>
            </div>
          </div>
        </section>

        {/* VOICE KI */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Headphones className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">VOICE‑KI für den telefonischen Bürgerservice</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Was VOICE‑KI konkret übernimmt</h3>
              <ul className="space-y-3 text-gray-700">
                {[
                  "24/7 Annahme – weniger Warteschleifen",
                  "Vorqualifizierung: Anliegen, Dringlichkeit, Standort, benötigte Unterlagen",
                  "Routing an Fachbereiche / Terminvorbereitung",
                  "Zusammenfassung für Mitarbeitende (schneller Fall‑Einstieg)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-700 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-sm text-gray-700">
                <strong>Wichtig:</strong> Für rechtlich verbindliche Auskünfte bleibt die zuständige Stelle verantwortlich.
              </div>

              <div className="mt-5 rounded-xl border border-primary-200 bg-white p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Testanruf starten</div>
                    <div className="text-sm text-gray-700 mt-1">
                      Rufen Sie die VOICE‑KI an und testen Sie den Bürgerservice‑Dialog live:
                    </div>
                    <div className="mt-2 font-bold text-primary-800">+49 6023 7043102</div>
                  </div>
                  <div className="shrink-0">
                    <Button
                      href="tel:+4960237043102"
                      variant="primary"
                      className="inline-flex items-center"
                    >
                      Jetzt anrufen
                      <Phone className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mehrsprachigkeit & Barrierefreiheit</h3>
              <p className="text-gray-700 mb-4">
                Gerade im DACH‑Raum sind Mehrsprachigkeit und verständliche Kommunikation entscheidend.
              </p>
              <ul className="space-y-3 text-gray-700">
                {[
                  "Erkennung/Wechsel der Sprache während des Gesprächs",
                  "Übersetzung in Verwaltungssprache + Gesprächszusammenfassung",
                  "Einfache Sprache & klare Dialogführung (barrierearm)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary-700 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <BookOpen className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Konkrete Use‑Cases (Auswahl)</h2>
          </div>
          <p className="text-gray-700 mb-6">
            Beispiele, wie GeKI in der Praxis unterstützen kann – von Bürgeranliegen bis interner Verwaltung.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((u, idx) => (
              <div key={u.title} className="group rounded-2xl border border-gray-200 bg-gray-50 p-5 hover:bg-white hover:shadow-md transition-all duration-200 cursor-pointer relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-800 bg-primary-50 border border-primary-100 rounded-full px-3 py-1">
                    {u.tag}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div className="font-semibold text-gray-900 mb-2">{u.title}</div>
                
                {/* Tooltip on hover */}
                <div className="hidden group-hover:block absolute z-10 left-0 right-0 top-full mt-2 p-4 bg-primary-600 text-white border-2 border-primary-700 rounded-xl shadow-2xl text-sm">
                  {u.description}
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-primary-600 border-l-2 border-t-2 border-primary-700 transform rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Architektur (native diagram) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Layers className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Architektur: private KI, kontrollierte Daten</h2>
          </div>

          <p className="text-gray-700 mb-6">
            GeKI wird über mehrere Kanäle genutzt (Web, Telefon, MS Teams, Office 365, Mobile) und verbindet ein
            <strong> KI‑Backend</strong> mit Ihren Datenquellen – nachvollziehbar, berechtigungsbasiert und datenschutzfreundlich.
          </p>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            {/* Channels */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { label: "MS Teams", icon: <Layers className="h-4 w-4" /> },
                { label: "Web", icon: <Sparkles className="h-4 w-4" /> },
                { label: "Telefon", icon: <Phone className="h-4 w-4" /> },
                { label: "Office 365", icon: <Database className="h-4 w-4" /> },
                { label: "Mobile", icon: <Workflow className="h-4 w-4" /> },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-gray-700"
                >
                  <span className="text-primary-700">{c.icon}</span>
                  {c.label}
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-gray-200" />

            {/* GeKI Backend (full width) */}
            <div className="rounded-2xl border border-primary-200 bg-primary-50 p-5 text-center">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <Sparkles className="h-5 w-5 text-primary-800" />
                <div className="font-semibold text-gray-900">GeKI KI‑Backend</div>
              </div>
              <div className="text-sm text-gray-700">
                Orchestriert Chat & VOICE‑KI, Kontext, Berechtigungen, Qualität und Übergaben – zentral steuerbar.
              </div>
            </div>

            {/* Tiles (4) */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lock className="h-5 w-5 text-primary-700" />
                  <div className="font-semibold text-gray-900">KI‑Modell (Private Cloud)</div>
                </div>
                <div className="text-sm text-gray-700">
                  Betrieb in kontrollierten Umgebungen – sensible Inhalte bleiben geschützt.
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Workflow className="h-5 w-5 text-primary-700" />
                  <div className="font-semibold text-gray-900">Konfiguration</div>
                </div>
                <div className="text-sm text-gray-700">Prompting, Rollen/Berechtigungen, Qualitätssicherung.</div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-5 w-5 text-primary-700" />
                  <div className="font-semibold text-gray-900">Unternehmens-/Gemeindedaten (Web)</div>
                </div>
                <div className="text-sm text-gray-700">Website‑Inhalte, Leistungsbeschreibungen, FAQ, Formulare.</div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="h-5 w-5 text-primary-700" />
                  <div className="font-semibold text-gray-900">Unternehmens-/Gemeindedaten (Intern)</div>
                </div>
                <div className="text-sm text-gray-700">Intranet/SharePoint, Dokumente, Prozesse, Wissensbasen.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Umsetzung */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="flex items-center mb-6">
            <Workflow className="h-8 w-8 text-primary-700 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">4 Schritte: So gelingt die Umsetzung</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rolloutSteps.map((s, idx) => (
              <div key={s.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-600 text-white grid place-items-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-gray-700">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Datenschutz & Kontrolle */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold text-primary-700">Für höchste Sicherheitsansprüche.</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Datenschutz & Kontrolle – 100% souverän.
            </h2>
            <div className="mt-6">
              <Button href="mailto:timo.bast@ai-buddy.net?subject=GeKI%20Landingpage%20%E2%80%93%20kostenlos%20testen" variant="primary" className="bg-gray-900 hover:bg-black">
                Jetzt kostenlos testen
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 grid place-items-center">
                  <ShieldCheck className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">DSGVO-konform</h3>
                  <p className="text-gray-700 mt-2">
                    Datenschutzfreundliches Vorgehen (DSGVO/nDSG) inkl. Rollen/Berechtigungen, Löschkonzept und
                    Datenschutz-Folgenabschätzung im Workshop.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 grid place-items-center">
                  <Github className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Open Source</h3>
                  <p className="text-gray-700 mt-2">
                    Optionaler Open-Source-Betrieb (z.B. AGPLv3) – in der Cloud oder im eigenen Rechenzentrum und
                    unabhängig von einzelnen LLM-Anbietern betreibbar.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 grid place-items-center">
                  <Flag className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Made in Germany</h3>
                  <p className="text-gray-700 mt-2">
                    Entwickelt nach hohen Qualitätsstandards – mit Fokus auf Zuverlässigkeit, Sicherheit und
                    nachvollziehbaren Prozessen für den öffentlichen Sektor.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white border border-gray-200 grid place-items-center">
                  <BadgeCheck className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">ISO-27001-zertifizierte Infrastruktur</h3>
                  <p className="text-gray-700 mt-2">
                    Betrieb auf ISO-27001-zertifizierter Infrastruktur ist optional möglich (z.B. über Hosting-Partner)
                    – abhängig vom gewählten Betriebsmodell.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            Hinweis: Konkrete Zertifizierungen/Deployment-Optionen sind vom gewählten Betriebsmodell und ggf. Hosting-Partnern abhängig.
          </p>
        </section>

        {/* FAQ (native accordion) */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-12">
          <div className="mb-8 text-center">
            <div className="text-sm font-semibold text-primary-700 mb-2">Ihre Fragen – unsere Antworten.</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Vorteile, Sicherheit & Einfachheit
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-semibold text-gray-900">{f.q}</span>
                  <span className="text-primary-700 group-open:rotate-90 transition-transform">›</span>
                </summary>
                <div className="mt-3 text-gray-700">{f.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="kontakt" className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl border border-gray-200 p-8 text-center">
          <Sparkles className="h-12 w-12 text-primary-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bereit für den nächsten Schritt?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Lassen Sie uns gemeinsam identifizieren, welche Prozesse in Ihrer Kommune am meisten profitieren – und wie
            Chat & VOICE‑KI datenschutzkonform eingeführt werden.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:+4960237043102" variant="secondary" className="inline-flex items-center justify-center">
              Testanruf: +49 6023 7043102
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button href="mailto:timo.bast@ai-buddy.net?subject=GeKI%20Landingpage%20%E2%80%93%20Kontakt" variant="primary" className="inline-flex items-center">
              Kontakt aufnehmen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href="https://www.ai-buddy.net" variant="outline">
              Mehr auf ai-buddy.net
            </Button>
        </div>
        </section>
        </div>
    </div>
  );
}
