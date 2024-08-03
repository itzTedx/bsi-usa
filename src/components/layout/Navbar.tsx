'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import Logo from '../logo'
import Link from 'next/link'
import ChipTabs from './tabs'
import { FloatingNav } from './Floating-Navbar'
import { Home, LayoutList, UsersRound } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export const Navbar = () => {
  const LINKS = [
    {
      name: 'Home',
      link: '/',
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: 'About us',
      link: '/about',
      icon: <UsersRound className="w-6 h-6" />,
    },
    {
      name: 'Products',
      link: '/categories',
      icon: <LayoutList className="w-6 h-6" />,
    },
    {
      name: 'Why us',
      link: '/why-us',
      icon: <Home className="w-6 h-6" />,
    },
    {
      name: 'Contact us',
      link: '/contact',
      icon: <Home className="w-6 h-6" />,
    },
  ]

  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {/* <FloatingNav navItems={LINKS.slice(0, 3)} /> */}
      <div className="grid w-full my-2 place-content-center">
        <Link href="/" className="px-3 sm:px-12 xl:px-0">
          <Image
            src="/bsi-logo-full.svg"
            width={990}
            height={100}
            alt="BSI Logo"
          />
        </Link>
      </div>

      <nav className="sticky z-50 flex items-center justify-center w-full mx-auto border shadow-xl max-w-7xl bg-primary border-white/10 h-14 md:rounded-xl shadow-black/10">
        {/* <ChipTabs /> */}
        <ul className="flex mx-auto text-sm sm:gap-10 sm:text-base text-background">
          {LINKS.map(({ name, link }) => {
            const isActive = pathname === link
            return (
              <li
                key={name}
                className={cn(isActive && 'bg-red-600 rounded', 'px-2 py-1')}
              >
                <Link href={link}>{name}</Link>
              </li>
            )
          })}
        </ul>
        {/* <Button
          variant="primary"
          className="absolute font-bold tracking-wide uppercase right-3"
        >
          Enquire Now
        </Button> */}
        <button
          className="absolute group/btn hidden md:flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 right-2 font-medium shadow-input bg-foreground dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
          type="submit"
          onClick={() => router.push('/contact')}
        >
          <span className="text-sm font-bold tracking-wide uppercase text-background">
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
      <span className="absolute block w-1/2 h-px mx-auto transition duration-500 opacity-0 group-hover/btn:opacity-100 blur-sm -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </>
  )
}
