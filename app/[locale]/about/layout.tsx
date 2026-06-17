import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    fr: 'À Propos — LaTour Immo',
    en: 'About — LaTour Immo',
    ar: 'عن لاتور إيمو',
    es: 'Sobre Nosotros — LaTour Immo',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: 'Découvrez LaTour Immo, votre agence immobilière de confiance au Maroc.',
    alternates: {
      canonical: `https://latourImmomaroc.com/${locale}/about`,
    },
  }
}

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children
}
