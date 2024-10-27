import type { Metadata } from 'next'

import '@/styles/globals.css'

import localFont from 'next/font/local'
import { Providers } from '@/providers'

import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/layout/site-header'

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'flex h-screen flex-col'
        )}
      >
        <Providers>
          <SiteHeader />
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
