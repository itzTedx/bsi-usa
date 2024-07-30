'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { NAV_LINKS } from '../../lib/nav-links'
import Logo from '../logo'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { useState } from 'react'

const SidebarMob = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(false)
  }
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
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
              onClick={handleClick}
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
      </SheetContent>{' '}
    </Sheet>
  )
}

export default SidebarMob
