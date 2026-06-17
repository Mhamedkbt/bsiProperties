import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'LaTour Immo — Immobilier de Luxe au Maroc',
    template: '%s | LaTour Immo',
  },
  description: 'LaTour Immo est votre agence immobilière de référence au Maroc. Découvrez nos villas de luxe, appartements modernes et espaces commerciaux à Casablanca, Marrakech, Agadir, Rabat et Tanger.',
  keywords: [
    'immobilier maroc',
    'agence immobilière maroc',
    'villa maroc',
    'appartement maroc',
    'achat immobilier maroc',
    'location immobilier maroc',
    'luxe immobilier maroc',
    'casablanca immobilier',
    'marrakech immobilier',
    'agadir immobilier',
    'LaTour Immo',
    'real estate morocco',
    'luxury villa morocco',
  ],
  authors: [{ name: 'LaTour Immo' }],
  creator: 'LaTour Immo',
  publisher: 'LaTour Immo',
  icons: {
    icon: '/images/LaToorImmoLogo.jpg',
    shortcut: '/images/LaToorImmoLogo.jpg',
    apple: '/images/LaToorImmoLogo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://latourImmomaroc.com',
    siteName: 'LaTour Immo',
    title: 'LaTour Immo — Immobilier de Luxe au Maroc',
    description: 'Découvrez nos propriétés exclusives au Maroc. Villas, appartements et espaces commerciaux de prestige.',
    images: [
      {
        url: '/images/LaToorImmoLogo.jpg',
        width: 1200,
        height: 630,
        alt: 'LaTour Immo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaTour Immo — Immobilier de Luxe au Maroc',
    description: 'Découvrez nos propriétés exclusives au Maroc.',
    images: ['/images/LaToorImmoLogo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const locales = ['fr', 'en', 'ar', 'es']

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) notFound()

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ar' }, { locale: 'es' }]
}