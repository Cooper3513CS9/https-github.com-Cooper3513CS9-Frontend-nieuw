import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visitatie & kwaliteitsdossier (NPA-accreditatie 3.0) — bèta | ZenTrack',
  description: 'NPA 3.0 (Principe 13) vereist dat medische middelen geschikt en beschikbaar zijn. ZenTrack helpt je om die bewijsstukken vast te leggen voor de NPA — facturen, vervaldatums en leveringen, uit je dagelijkse werk, uit te draaien als rapport. Ruim 70% van huisartspraktijken heeft het NPA-keurmerk (bron: npacertificering.nl).',
  keywords: [
    'NPA accreditatie huisarts',
    'NPA 3.0 normen voorraadbeheer',
    'NPA visitatie voorbereiden',
    'accreditatie huisartspraktijk',
    'NPA dossier beheer',
    'kwaliteitsvisitatie huisarts',
    'NPA voorraadbeheer software',
    'NPA compliant voorraad',
    'NPA 3.0 Principe 13 middelen',
    'npacertificering huisarts',
  ],
  openGraph: {
    title: 'Visitatie & kwaliteitsdossier (NPA-accreditatie 3.0) | ZenTrack',
    description: 'NPA 3.0 Principe 13 vereist geschikte en beschikbare medische middelen. ZenTrack helpt je de bewijsstukken daarvoor vast te leggen, terwijl je werkt.',
    type: 'website',
    locale: 'nl_NL',
  },
  alternates: {
    canonical: 'https://www.zentrack.nl/npa-accreditatie',
  },
}

export default function NpaAccreditatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
