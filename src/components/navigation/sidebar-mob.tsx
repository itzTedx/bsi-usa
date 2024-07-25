import { ArrowRight, Package2 } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS } from '../../lib/nav-links'
import { SheetContent } from '../ui/sheet'
import Logo from '../logo'

const SidebarMob = () => {
  return (
    <SheetContent side="bottom" className="flex flex-col">
      <nav className="grid gap-2 text-lg font-medium">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Logo />
        </Link>

        {NAV_LINKS.map((nav, i) => (
          <Link
            key={i}
            href={nav.href}
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <span className="flex items-center gap-3">
              {nav.icon}
              {nav.title}
            </span>
            <ArrowRight className="size-5 ml-auto" />
          </Link>
        ))}
      </nav>
    </SheetContent>
  )
}

export default SidebarMob
