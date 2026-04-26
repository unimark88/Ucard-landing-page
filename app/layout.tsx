import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL 
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'https://ucard.app'

export const metadata: Metadata = {
  title: {
    default: 'Ucard - Spend Your USDT Like Cash',
    template: '%s | Ucard',
  },
  description: 'A seamless USDT card designed for real-world payments. Earn yield, stay on-chain, and spend globally with Ucard. Licensed partners, KYC/AML compliant, and 256-bit encryption for secure transactions.',
  keywords: [
    'USDT card',
    'crypto debit card',
    'USDT payments',
    'cryptocurrency card',
    'spend crypto',
    'USDT to fiat',
    'crypto spending card',
    'stablecoin card',
    'digital payments',
    'DeFi yield',
    'on-chain transparency',
    'crypto rewards',
  ],
  authors: [{ name: 'Ucard' }],
  creator: 'Ucard',
  publisher: 'Ucard',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'zh': '/zh',
      'id': '/id',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ucard.app',
    siteName: 'Ucard',
    title: 'Ucard - Spend Your USDT Like Cash',
    description: 'A seamless USDT card designed for real-world payments. Earn yield, stay on-chain, and spend globally.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ucard - The USDT Card for Everyday Life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ucard - Spend Your USDT Like Cash',
    description: 'A seamless USDT card designed for real-world payments. Earn yield, stay on-chain, and spend globally.',
    images: ['/images/og-image.jpg'],
    creator: '@ucard',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/ucard-logo.png',
  },
  manifest: '/manifest.json',
  category: 'finance',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
