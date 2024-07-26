'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { NAV_LINKS } from '@/lib/nav-links'
import Logo from '../logo'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block ">
      <div className="flex h-full max-h-screen flex-col gap-4 sticky top-0">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo />
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-4">
            {NAV_LINKS.map((nav, i) => (
              <Link
                key={i}
                href={nav.href}
                className={cn(
                  'flex justify-between gap-3 rounded-lg p-3 transition-all hover:text-primary hover:bg-accent group',
                  pathname === nav.href && 'bg-accent'
                )}
              >
                <span className="flex items-center gap-3">
                  {nav.icon}
                  {nav.title}
                </span>
                <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
