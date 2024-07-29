import Nav from '@/components/navigation/nav'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Builder Solutions - Construction Services & Specialty Materials.',
  description:
    'Builders Solutions Inc. is a leading international trading company specializing in the construction industry. We bridge the gap between businesses across the globe, facilitating seamless trade of high-quality building materials.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  profile: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Nav>
        <main className="flex flex-col flex-1 gap-4 p-4 lg:gap-6 lg:p-6 lg:px-10">
          {children}
        </main>
      </Nav>
      <Toaster richColors />
    </ThemeProvider>
  )
}
