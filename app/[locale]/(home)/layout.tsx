import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    fr: 'Accueil — Immobilier de Luxe au Maroc',
    en: 'Home — Luxury Real Estate in Morocco',
    ar: 'الرئيسية — عقارات فاخرة في المغرب',
    es: 'Inicio — Inmuebles de Lujo en Marruecos',
  }
  const descs: Record<string, string> = {
    fr: 'Trouvez votre propriété de rêve au Maroc avec LaTour Immo. Villas, appartements et espaces commerciaux de luxe.',
    en: 'Find your dream property in Morocco with LaTour Immo. Luxury villas, apartments and commercial spaces.',
    ar: 'اعثر على عقار أحلامك في المغرب مع لاتور إيمو. فيلات فاخرة وشقق ومساحات تجارية.',
    es: 'Encuentra la propiedad de tus sueños en Marruecos con LaTour Immo.',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: descs[locale] ?? descs.fr,
    alternates: {
      canonical: `https://latourImmomaroc.com/${locale}`,
      languages: {
        'fr': 'https://latourImmomaroc.com/fr',
        'en': 'https://latourImmomaroc.com/en',
        'ar': 'https://latourImmomaroc.com/ar',
        'es': 'https://latourImmomaroc.com/es',
      },
    },
  }
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children
}
