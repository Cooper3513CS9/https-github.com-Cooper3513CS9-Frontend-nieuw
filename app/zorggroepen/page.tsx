"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Network, ShieldCheck, LineChart, Handshake, CalendarClock, Camera, QrCode, Printer, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { GroupSection } from '@/components/GroupSection';
import { GroupContact } from '@/components/GroupContact';

export default function ZorggroepenPage() {
  const router = useRouter();
  const navigateToLogin = () => { window.location.href = 'https://app.zentrack.nl/sign-in'; };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={navigateToLogin} cta={{ label: 'Plan een gesprek', href: '#contact' }} contactHref="#contact" />
      <main>

        {/* ANTWOORD-EERST */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-purple-50/60 to-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-purple-200">
              <Network className="w-4 h-4" />
              <span>Voor zorggroepen, ketens en gezondheidscentra</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              ZenTrack voor zorggroepen
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              Uw zorgmedewerkers werken gewoon via WhatsApp. Geen nieuwe software om te leren, geen
              implementatietraject. Wat nu op papieren lijstjes staat en tijd kost, gaat met een foto of een appje.
            </p>
            <p className="text-lg text-slate-700 mt-4 leading-relaxed">
              En u krijgt iets dat nu nergens bij elkaar staat: <strong>het inkoopbeeld van de hele groep op
              productniveau</strong>. Welke artikelen uw locaties samen verbruiken, hoeveel, hoe vaak en bij wie.
            </p>
            <p className="text-sm text-slate-500 mt-6 leading-relaxed">
              Medische verbruiksartikelen en kantoorartikelen. Medicijnen kopen we niet in en vergelijken we niet
              op prijs, dat loopt via uw apotheek; vervaldatums bewaken we wel, ook van uw eigen
              medicatievoorraad. Eén locatie (bezoekadres) telt als één ZenTrack, vanaf vijf locaties geldt een
              staffelkorting op aanvraag en voor grotere zorggroepen maken we een partnerschap op maat.{' '}
              <Link href="/prijzen" className="text-purple-700 underline">Bekijk de prijzen</Link>.
            </p>
          </div>
        </section>

        {/* WAT U KRIJGT — vier kaarten, volgorde: rust, inkoopbeeld, positie, timing */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Wat u krijgt, in deze volgorde</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Eerst rust op de vloer, daarna het inzicht waarmee u zelf onderhandelt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: ShieldCheck,
                  titel: 'Rust op de locatie',
                  tekst: 'De zorgmedewerker fotografeert een pakbon in plaats van een lijstje af te vinken. Vervaldatums worden bewaakt. Een bestelling is één JA in WhatsApp. Hier verdient het abonnement zich terug: in tijd van de mensen op de vloer en in niet misgrijpen wanneer het nodig is.',
                },
                {
                  icon: LineChart,
                  titel: 'Het inkoopbeeld van de groep',
                  tekst: 'Na een paar maanden weet u op productniveau wat uw locaties samen verbruiken, over alle leveranciers heen. Uw financiële software laat zien wat een locatie heeft uitgegeven. Dit laat zien aan welke producten, in welke aantallen en tegen welke prijs.',
                },
                {
                  icon: Handshake,
                  titel: 'Een betere positie in uw gesprekken',
                  tekst: 'Met dat beeld gaat u zelf met uw leveranciers in gesprek: deze dertig artikelen kopen wij samen zoveel keer per jaar. Dat werkt door op alle locaties tegelijk. Wat wij aan prijsverschillen aanwijzen is het bewijs dat de cijfers kloppen.',
                },
                {
                  icon: CalendarClock,
                  titel: 'Wanneer wat nodig is, per locatie',
                  tekst: 'Omdat elke locatie haar eigen verbruik opbouwt, ziet u niet alleen wát er gekocht wordt maar ook wanneer. Dat maakt bestellen rustiger: op tijd in plaats van met spoed, en in hoeveelheden die passen bij wat er werkelijk doorgaat.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-purple-100 shadow-sm">
                  <div className="w-12 h-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.titel}</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">{item.tekst}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-50 border border-purple-100 rounded-2xl">
              <p className="text-slate-700 leading-relaxed">
                <strong>Loopt een locatie uit de pas, dan ziet u dat direct.</strong> Betaalt de één meer voor
                precies hetzelfde product omdat er nog een oude afspraak ligt, dan is dat geen onderhandeling
                maar één telefoontje.
              </p>
            </div>
          </div>
        </section>

        {/* OP DE LOCATIE — drie startsituaties als kaarten */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Wij sluiten aan bij hoe elke locatie nu werkt
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Niet elke locatie werkt op dezelfde manier. De één houdt het bij op papier, de ander heeft
                kaartjes of stickers van een leverancier. Wij sluiten aan bij wat er ligt, en is er nog geen
                vaste werkwijze, dan brengen we er een mee die op de vloer werkt.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Camera,
                  titel: 'Nog geen vaste werkwijze',
                  tekst: 'Dan begint u met foto’s: een pakbon, een doosje met een vervaldatum, een kastplek met een aantal erbij. Er is niets te installeren en niets in te richten.',
                },
                {
                  icon: QrCode,
                  titel: 'Hangen er al stickers of kanban-kaarten',
                  tekst: 'Die kunnen blijven hangen. De camera leest de code en koppelt hem aan uw product zodra dat artikel op een van uw facturen is voorgekomen.',
                },
                {
                  icon: Printer,
                  titel: 'Wilt u het netjes inrichten',
                  tekst: 'Dan levert ZenTrack etiketten voor uw kastplekken als PDF, die u zelf print. Een lege bak betekent: scannen, en het staat op de lijst. Het kanban-principe zonder kaartenbak.',
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.titel}</h3>
                  <p className="text-slate-600 leading-relaxed text-[15px]">{item.tekst}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl p-6 border border-slate-200 flex gap-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  De afspraken van een locatie blijven bij die locatie
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  Iemand vertelt het één keer in de chat: wij bestellen handschoenen altijd per tien dozen, een
                  klacht bij deze leverancier melden we binnen veertien dagen, de kast wordt op vrijdag geteld.
                  Emma onthoudt dat voor die locatie.
                </p>
                <p className="text-slate-600 leading-relaxed text-[15px] mt-3">
                  Daarna vraagt iedereen het gewoon. Een waarnemer die niet weet wie er bestelt, een nieuwe
                  assistente die vraagt hoe de vervaldatumcontrole gaat: zij krijgen het antwoord dat de praktijk
                  zelf heeft opgeschreven. Niet rondbellen, en niet iedere keer dezelfde vraag bij de
                  praktijkmanager.
                </p>
                <p className="text-slate-600 leading-relaxed text-[15px] mt-3">
                  Wat over leveranciers bekend is, levertijden en hoe een klacht wordt ingediend, vult ZenTrack
                  zelf aan. Patiëntgegevens gaan er niet in: namen, geboortedata en diagnoses worden geweigerd.
                </p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mt-8 text-center max-w-3xl mx-auto">
              Elke locatie houdt haar eigen kastindeling, haar eigen minimale aantallen en haar eigen
              leveranciers. ZenTrack past zich daarop aan, niet omgekeerd.
            </p>
          </div>
        </section>

        {/* HET VERHAAL — hergebruikt van de homepage */}
        <GroupSection variant="bewijs" />

        {/* CONTACT — eigen blok, houdt de zorggroep-lead op deze pagina */}
        <GroupContact />

        {/* CTA */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Begin klein.<br />
              <span className="text-purple-400">Rol uit als het werkt.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-4 max-w-xl mx-auto">
              Start met één locatie. Bevalt het, dan schalen we op, locatie voor locatie, in uw tempo.
            </p>
            <p className="text-base text-slate-300 mb-8 max-w-2xl mx-auto">
              Stuur de facturen van twee of drie locaties mee, per locatie gebundeld. In het gesprek laten we
              zien óf en welke producten bij andere leveranciers goedkoper zijn, en of uw locaties onderling
              verschillende prijzen betalen.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-900/20 inline-flex items-center justify-center gap-2"
              >
                Plan een strategische sessie <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/prijzen"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-300 font-bold border border-slate-700 hover:bg-slate-800 transition-colors text-center"
              >
                Bekijk prijzen & garantie
              </Link>
            </div>
            <p className="text-sm text-slate-500 mt-6">
              Liever direct contact? Mail <a href="mailto:info@zentrack.nl" className="text-purple-400 underline">info@zentrack.nl</a> of bel 06-2666-7714.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Geen nieuwe software, gewoon WhatsApp</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Eén factuur, verantwoording per locatie</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Inkoopbeeld van de hele groep</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Uitrol in uw tempo</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Data op Europese datacenters</span>
            </div>
          </div>
        </section>

      </main>
      <Footer ctaVariant="gesprek" onLoginClick={navigateToLogin} onNavigate={(v) => router.push(v === 'legal-terms' ? '/legal/terms' : '/legal/privacy')} />
    </div>
  );
}
