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
    fr: 'À Propos — BSI Properties',
    en: 'About — BSI Properties',
    ar: 'عن BSI Properties',
    es: 'Sobre Nosotros — BSI Properties',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: 'Découvrez BSI Properties, votre agence immobilière de luxe au Maroc.',
    alternates: {
      canonical: `${siteUrl}/${locale}/about`,
    },
  }
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
