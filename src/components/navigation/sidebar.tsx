import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { NAV_LINKS } from '@/lib/nav-links'
import Logo from '../logo'

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-4">
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
                className="flex justify-between gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary"
              >
                <span className="flex items-center gap-3">
                  {nav.icon}
                  {nav.title}
                </span>
                <ArrowRight className="size-5" />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
