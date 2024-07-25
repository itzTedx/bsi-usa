import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { cn } from '@/lib/utils'
import Footer from '@/components/layout/Footer'
import { TailwindIndicator } from './_components/breakpointTW'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Builder Solutions - Construction Services & Specialty Materials.',
  description:
    'Builders Solutions Inc. is a leading international trading company specializing in the construction industry. We bridge the gap between businesses across the globe, facilitating seamless trade of high-quality building materials.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'w-screen overflow-x-hidden')}>
        <Navbar />
        <main className="sm:-mt-7 -z-10">{children}</main>
        <TailwindIndicator />
        <Footer />
      </body>
    </html>
  )
}
