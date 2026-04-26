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
    default: 'Ucard | USDT Debit Card',
    template: '%s | Ucard',
  },
  description: 'A secure USDT debit card for global payments. Spend USDT anywhere, earn yield on idle balance, and use a crypto debit card backed by licensed partners with KYC/AML compliance and bank-grade encryption.',
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
    title: 'Ucard | USDT Debit Card',
    description: 'Spend USDT globally, earn yield on your balance, and manage funds on-chain with a secure USDT debit card.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ucard | USDT Debit Card',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ucard | USDT Debit Card',
    description: 'USDT debit card for global payments. Spend, earn yield, and stay on-chain.',
    images: ['/images/og-image.png'],
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
    icon: '/favicon.png',
    shortcut: '/favicon.png',
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
