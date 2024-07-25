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
  console.log(user)
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
          <div className="mb-4 py-3 px-4 flex items-center bg-primary/10 rounded-lg">
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
              <Settings className="size-5 mr-2" /> Settings
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem
            onClick={() => signOut()}
            className="hover:bg-destructive/50"
          >
            <LogOut className="size-5 mr-2" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
