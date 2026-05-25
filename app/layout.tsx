import './globals.css'
import type { Metadata } from 'next'
import { Anton, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hjp-movement.vercel.app'),
  title: 'HJP — Hindu Janta Party | Dharma Above Politics',
  description:
    'HJP is a Hindu civilizational and cultural movement rooted in Dharma, Sanskrit, temple preservation, and Gau Seva. Not a party. Not a protest. A refusal.',
  keywords: ['Hindu', 'Dharma', 'HJP', 'Hindu Janta Party', 'Sanskrit', 'Gau Mata', 'Hindu movement', 'Sanatan Dharma'],
  openGraph: {
    type: 'website',
    url: 'https://hjp-movement.vercel.app',
    title: 'HJP — Dharma Above Politics',
    description:
      'Not a party. Not a protest. A Hindu civilizational movement rooted in Dharma, Sanskrit, Gau Seva, and sacred continuity. Sign the Gau Mata petition.',
    siteName: 'Hindu Janta Party — HJP',
    images: [
      {
        url: '/images/dharma-above-politics.png',
        width: 1200,
        height: 630,
        alt: 'HJP — Dharma Above Politics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HJP — Dharma Above Politics',
    description:
      'Not a party. Not a protest. A Hindu civilizational movement rooted in Dharma, Sanskrit, Gau Seva, and sacred continuity.',
    images: ['/images/dharma-above-politics.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi" className={`${anton.variable} ${inter.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#070707] text-[#f5f1ea] antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
