import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import { AOSInit } from '@/components/Aos'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My portfolio built with Next.js and TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        {/* Next top loader */}
        <NextTopLoader color='#5700FF' showSpinner={false} />
        {/* Init aos */}
        <AOSInit />
        {children}</body>
    </html>
  )
}
