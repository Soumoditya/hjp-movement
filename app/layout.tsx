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
  title: 'HJP — Hindu Janta Party | Dharma. Memory. Continuity.',
  description:
    'HJP is a Hindu civilizational and cultural movement rooted in Dharma, sacred continuity, Sanskrit, temple preservation, and Gau Seva.',
  keywords: ['Hindu', 'Dharma', 'HJP', 'Hindu Janta Party', 'Sanskrit', 'Gau Mata', 'Hindu movement'],
  openGraph: {
    title: 'HJP — Hindu Janta Party',
    description: 'Dharma above politics. A Hindu civilizational movement.',
    images: ['/images/hjp-flag-logo.png'],
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
