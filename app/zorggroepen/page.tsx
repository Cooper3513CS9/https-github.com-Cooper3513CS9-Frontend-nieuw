"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Check, Network } from 'lucide-react';
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
              Uw zorgmedewerkers op de locatie werken gewoon via WhatsApp. Geen nieuwe software om te leren,
              geen implementatietraject, het werkt vanaf de eerste dag. Wat nu op papieren lijstjes staat en
              tijd kost, voorraad bijhouden, vervaldatums nalopen, bestellingen doorgeven, gaat met een foto
              of een appje.
            </p>
            <p className="text-lg text-slate-700 mt-4 leading-relaxed">
              Daarnaast krijgt u iets dat nu nergens bij elkaar staat: <strong>het inkoopbeeld van de hele
              groep op productniveau</strong>. Welke artikelen uw locaties samen verbruiken, hoeveel, hoe vaak
              en bij wie. Verantwoording blijft per locatie, met één factuur voor alles en een uitrol in uw
              eigen tempo.
            </p>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Het gaat om medische verbruiksartikelen en kantoorartikelen. Medicijnen kopen we niet in en
              vergelijken we niet op prijs, dat loopt via uw apotheek. Vervaldatums bewaken we wel van alles wat
              in uw kasten ligt, inclusief de medicatie die u zelf op voorraad heeft.
            </p>
            <p className="text-base text-slate-600 mt-4 leading-relaxed">
              Eén locatie (bezoekadres) telt als één ZenTrack. Vanaf vijf locaties geldt een staffelkorting
              op aanvraag; voor grotere zorggroepen maken we een partnerschap op maat en leggen we de afspraken
              in het gesprek vast. <Link href="/prijzen" className="text-purple-700 underline">Bekijk de prijzen</Link>.
            </p>
          </div>
        </section>

        {/* WAT U KRIJGT — volgorde: rust, inkoopbeeld, positie, timing */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">Wat u krijgt, in deze volgorde</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">1. Rust op de locatie</h3>
                <p className="text-slate-600 leading-relaxed">
                  De zorgmedewerker fotografeert een pakbon in plaats van een lijstje af te vinken.
                  Vervaldatums worden bewaakt. Een bestelling is één JA in WhatsApp. Hier verdient het
                  abonnement zich terug: in tijd van de mensen op de vloer en in niet misgrijpen wanneer
                  het nodig is.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">2. Het inkoopbeeld van de groep</h3>
                <p className="text-slate-600 leading-relaxed">
                  Na een paar maanden weet u op productniveau wat uw locaties samen verbruiken, over alle
                  leveranciers heen. Uw financiële software laat zien wat een locatie heeft uitgegeven. Dit
                  laat zien aan welke producten, in welke aantallen en tegen welke prijs. Die stukken liggen
                  nu verspreid over facturen, mailboxen en webshops. Wij leggen ze bij elkaar.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">3. Een betere positie in uw gesprekken</h3>
                <p className="text-slate-600 leading-relaxed">
                  Met dat beeld gaat u zelf met uw leveranciers in gesprek: deze dertig artikelen kopen wij
                  samen zoveel keer per jaar. Dat werkt door op alle locaties tegelijk. Wat wij aan
                  prijsverschillen aanwijzen is het bewijs dat de cijfers kloppen, het is niet de rekensom
                  waarop u ons afrekent.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">4. Wanneer wat nodig is, per locatie</h3>
                <p className="text-slate-600 leading-relaxed">
                  Omdat elke locatie haar eigen verbruik opbouwt, ziet u niet alleen wát er gekocht wordt maar
                  ook wanneer. Dat maakt bestellen rustiger: op tijd in plaats van met spoed, en in
                  hoeveelheden die passen bij wat er werkelijk doorgaat.
                </p>
              </div>
              <div className="p-5 bg-purple-50 border border-purple-100 rounded-2xl">
                <p className="text-slate-700 leading-relaxed">
                  <strong>Loopt een locatie uit de pas, dan ziet u dat direct.</strong> Betaalt de één meer voor
                  precies hetzelfde product omdat er nog een oude afspraak ligt, dan is dat geen onderhandeling
                  maar één telefoontje.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OP DE LOCATIE — drie startsituaties, geen drempel */}
        <section className="py-16 bg-slate-50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Op de locatie verandert uw manier van werken niet</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Veel locaties hebben helemaal geen systeem, andere werken met kaartjes of stickers van een
              leverancier. Alle drie de situaties kunnen.
            </p>
            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Werkt u nu met niets.</strong> Dan begint u met foto&apos;s: een
                pakbon, een doosje met een vervaldatum, een kastplek met een aantal erbij. Er is niets te
                installeren en niets in te richten.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Hangen er al stickers of kanban-kaarten.</strong> Die kunnen
                blijven hangen. De camera leest de code en koppelt hem aan uw product zodra dat artikel op een
                van uw facturen is voorgekomen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Wilt u het netjes inrichten.</strong> Dan levert ZenTrack
                etiketten voor uw kastplekken als PDF, die u zelf print. Een lege bak betekent dan: scannen, en
                het staat op de lijst. Dat is het kanban-principe, zonder kaartenbak en zonder dat iemand aan
                het eind van de week een lijstje moet overtypen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong className="text-slate-900">Afspraken blijven op de locatie, ook als iemand weggaat.</strong>{' '}
                Per locatie legt u vast wat voor die plek geldt: levertijden, wie bestelt, welke merken wel en
                niet, afspraken met een leverancier. Een waarnemer of nieuwe medewerker vraagt het op in de chat
                in plaats van het rond te moeten vragen. Vragen over hoe iets werkt kunnen daar ook: de chat is
                de vraagbaak, zodat niet iedere keer dezelfde vraag bij u of bij de praktijkmanager belandt.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Elke locatie houdt haar eigen kastindeling, haar eigen minimale aantallen en haar eigen
                leveranciers. ZenTrack past zich daarop aan, niet omgekeerd.
              </p>
            </div>
          </div>
        </section>

        {/* HET VERHAAL — hergebruikt van de homepage */}
        <GroupSection />

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
