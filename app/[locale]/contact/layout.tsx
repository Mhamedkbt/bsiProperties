import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    fr: 'Contact — LaTour Immo',
    en: 'Contact — LaTour Immo',
    ar: 'اتصل بنا — لاتور إيمو',
    es: 'Contacto — LaTour Immo',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: 'Contactez LaTour Immo pour toute question sur nos propriétés au Maroc.',
    alternates: {
      canonical: `https://latourImmomaroc.com/${locale}/contact`,
    },
  }
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
