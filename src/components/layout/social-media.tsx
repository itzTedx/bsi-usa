'use client'

import useResponsive from '@/lib/use-responsive'
import {
  Facebook,
  Instagram,
  Linkedin,
  Pin,
  Twitter,
  Youtube,
} from 'lucide-react'
import Link from 'next/link'
import { Magnetic } from '../Magnetic'

export const SocialMedia = () => {
  const isSmallerThan600 = useResponsive(600)

  const LINKS = [
    {
      id: 1,
      href: '/linkedin',
      icon: <Linkedin />,
    },
    {
      id: 2,
      href: '/facebook',
      icon: <Facebook />,
    },
    {
      id: 3,
      href: '/instagram',
      icon: <Instagram />,
    },
    {
      id: 4,
      href: '/youtube',
      icon: <Youtube />,
    },
  ]
  return (
    <>
      {isSmallerThan600 ? (
        <div className="flex gap-3 text-white items-center">
          {LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              rel="nofollow"
              target="_blank"
              className="aspect-square bg-background text-foreground rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex gap-3 text-white">
          {LINKS.map((link) => (
            <Magnetic key={link.id}>
              <Link
                href={link.href}
                rel="nofollow"
                target="_blank"
                className="aspect-square bg-background text-foreground rounded flex items-center justify-center text-xl font-bold p-1.5 w-8 h-8"
              >
                {link.icon}
              </Link>
            </Magnetic>
          ))}
        </div>
      )}
    </>
  )
}
