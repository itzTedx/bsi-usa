'use client'

import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'

import { FcGoogle } from 'react-icons/fc'

export default function Socials() {
  return (
    <Button
      className="flex gap-4 w-full relative"
      variant="outline"
      onClick={() =>
        signIn('google', {
          redirect: false,
          callbackUrl: '/studio',
        })
      }
    >
      <FcGoogle className="size-5 absolute left-4" />
      Sign in with Google
    </Button>
  )
}
