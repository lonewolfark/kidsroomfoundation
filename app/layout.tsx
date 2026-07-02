import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import '@rainbow-me/rainbowkit/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kids Room Foundation - Crypto Donations for Children',
  description: 'Every Child Deserves a Safe Place to Grow. Support children in need through transparent blockchain donations.',
  keywords: ['crypto donation', 'children charity', 'blockchain', 'Ethereum', 'Bitcoin', 'donation', 'kids room foundation'],
  openGraph: {
    title: 'Kids Room Foundation',
    description: 'Every Child Deserves a Safe Place to Grow',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
