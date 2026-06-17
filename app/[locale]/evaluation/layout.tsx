import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const titles: Record<string, string> = {
    fr: 'Évaluation Gratuite — LaTour Immo',
    en: 'Free Property Evaluation — LaTour Immo',
    ar: 'تقييم عقاري مجاني — لاتور إيمو',
    es: 'Evaluación Gratuita — LaTour Immo',
  }
  return {
    title: titles[locale] ?? titles.fr,
    description: 'Obtenez une évaluation gratuite de votre bien immobilier au Maroc.',
    alternates: {
      canonical: `https://latourImmomaroc.com/${locale}/evaluation`,
    },
  }
}

export default function EvaluationLayout({ children }: { children: ReactNode }) {
  return children
}
