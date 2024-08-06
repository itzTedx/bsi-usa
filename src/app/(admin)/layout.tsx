import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Metadata, Viewport } from 'next'
import { siteConfig } from '@/config/site'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const metadata: Metadata = {
  title: siteConfig.name,

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className)}>{children}</body>
    </html>
  )
}
