import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

import NextTopLoader from 'nextjs-toploader'
import { Navbar } from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { TailwindIndicator } from './_components/breakpointTW'
import FloatingWhatsapp from '@/components/layout/floating-whatsapp'

import { siteConfig } from '@/config/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@digitaldesk_uae',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: '/' },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://analytics.alliedgulf.me/script.js"
          data-website-id="53f5bb02-a7cc-4cc8-9c9a-e8fcb1287746"
        ></script>
      </head>
      <body className={cn(poppins.className, 'w-screen overflow-x-hidden')}>
        <NextTopLoader />
        <Navbar />
        <main className="lg:-mt-7 -z-10">{children}</main>
        <FloatingWhatsapp />
        <TailwindIndicator />
        <Footer />
      </body>
    </html>
  )
}
