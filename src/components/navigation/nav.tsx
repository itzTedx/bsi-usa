import { auth } from '@/server/auth'
import { LogIn, Menu, Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import UserButton from './user-button'

import { Input } from '@/components/ui/input'
import { Sheet, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from './sidebar'
import SidebarMob from './sidebar-mob'
import { ThemeToggle } from '../ui/theme-toggle-button'

export default async function Nav({ children }: { children: React.ReactNode }) {
  const session = await auth()

  return (
    <>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Sidebar />
        <div className="flex flex-col">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SidebarMob />
            </Sheet>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              {!session ? (
                <Button asChild>
                  <Link
                    href="/auth/login"
                    className="flex gap-x-3 justify-center items-center"
                  >
                    <LogIn /> Login
                  </Link>
                </Button>
              ) : (
                <UserButton user={session?.user} expires={session?.expires} />
              )}
            </div>
          </header>
          {children}
        </div>
      </div>
    </>
  )
}
