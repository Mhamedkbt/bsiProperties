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
    fr: 'Nos Propriétés — Villas et Appartements au Maroc',
    en: 'Our Properties — Villas and Apartments in Morocco',
    ar: 'عقاراتنا — فيلات وشقق في المغرب',
    es: 'Nuestras Propiedades — Villas y Apartamentos en Marruecos',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: 'Parcourez notre sélection exclusive de propriétés au Maroc.',
    alternates: {
      canonical: `${siteUrl}/${locale}/properties`,
    },
  }
}

export default function PropertiesLayout({ children }: { children: ReactNode }) {
  return children
}
