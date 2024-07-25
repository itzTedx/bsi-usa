'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import Logo from '../logo'
import Link from 'next/link'
import ChipTabs from './tabs'
import { FloatingNav } from './Floating-Navbar'
import { Home, LayoutList, UsersRound } from 'lucide-react'

export const Navbar = () => {
  const LINKS = [
    {
      name: 'Home',
      link: '/',
      icon: <Home className="h-6 w-6" />,
    },
    {
      name: 'About us',
      link: '/about',
      icon: <UsersRound className="h-6 w-6" />,
    },
    {
      name: 'Products',
      link: '/categories',
      icon: <LayoutList className="h-6 w-6" />,
    },
    {
      name: 'Why us',
      link: '/why-us',
      icon: <Home className="h-6 w-6" />,
    },
    {
      name: 'Contact us',
      link: '/contact',
      icon: <Home className="h-6 w-6" />,
    },
  ]

  return (
    <>
      <FloatingNav navItems={LINKS.slice(0, 3)} />
      <div className="grid place-content-center w-full my-2">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <nav className="sticky z-50 w-full max-w-7xl mx-auto bg-primary border border-white/10 h-14 sm:rounded-xl flex items-center justify-center shadow-xl shadow-black/10">
        {/* <ChipTabs /> */}
        <ul className="flex sm:gap-10 gap-6 text-sm sm:text-base mx-auto text-background">
          {LINKS.map(({ name, link }) => (
            <li key={name}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
        {/* <Button
          variant="primary"
          className="right-3 absolute uppercase font-bold tracking-wide"
        >
          Enquire Now
        </Button> */}
        <button
          className="absolute group/btn hidden sm:flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 right-2 font-medium shadow-input bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
          type="submit"
        >
          <span className="text-background font-bold text-sm uppercase tracking-wide">
            Enquire Now
          </span>
          <BottomGradient />
        </button>
      </nav>
    </>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[2px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-rose-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </>
  )
}
