import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getSiteUrl } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = getSiteUrl()
  const titles: Record<string, string> = {
    fr: 'Accueil — BSI Properties | Immobilier de Luxe au Maroc',
    en: 'Home — BSI Properties | Luxury Real Estate in Morocco',
    ar: 'الرئيسية — BSI Properties | عقارات فاخرة في المغرب',
    es: 'Inicio — BSI Properties | Inmuebles de Lujo en Marruecos',
  }
  const descs: Record<string, string> = {
    fr: 'BSI Properties — Immobilier de luxe et conciergerie au Maroc. Tanger, Tétouan, Casablanca.',
    en: 'BSI Properties — Luxury real estate & conciergerie in Morocco. Tangier, Tetouan, Casablanca.',
    ar: 'BSI Properties — عقارات فاخرة وخدمة كونسierge في المغرب. طنجة، تطوان، الدار البيضاء.',
    es: 'BSI Properties — Inmuebles de lujo y conserjería en Marruecos.',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: descs[locale] ?? descs.fr,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'fr': `${siteUrl}/fr`,
        'en': `${siteUrl}/en`,
        'ar': `${siteUrl}/ar`,
        'es': `${siteUrl}/es`,
      },
    },
  }
}

export default function HomeLayout({ children }: { children: ReactNode }) {
  return children
}
