'use client'

import { Session } from 'next-auth'
import { signOut } from 'next-auth/react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import Link from 'next/link'

export default function UserButton({ user }: Session) {
  if (user)
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={user.image!}
              alt={user.name!}
              className="object-cover"
            />

            <AvatarFallback>
              <span className="font-bold text-muted">
                {user.name?.charAt(0).toUpperCase()}
              </span>
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4" align="end">
          <div className="flex items-center px-4 py-3 mb-4 rounded-lg bg-primary/10">
            <Avatar>
              <AvatarImage
                src={user.image!}
                alt={user.name!}
                className="object-cover"
              />

              <AvatarFallback>
                <span className="font-bold text-muted">
                  {user.name?.charAt(0).toUpperCase()}
                </span>
              </AvatarFallback>
            </Avatar>
            <DropdownMenuLabel className="flex flex-col">
              <span className="text-xs ">{user.name}</span>
              <span className="text-[10px] text-secondary-foreground font-medium">
                {user.email}
              </span>
            </DropdownMenuLabel>
          </div>
          <DropdownMenuSeparator />

          <Link href="/studio/settings">
            <DropdownMenuItem>
              <Settings className="mr-2 size-5" /> Settings
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem
            onClick={() => signOut()}
            className="hover:bg-destructive/50"
          >
            <LogOut className="mr-2 size-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
