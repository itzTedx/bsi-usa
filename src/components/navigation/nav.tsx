import { auth } from '@/server/auth'
import UserButton from './user-button'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export default async function Nav() {
  const session = await auth()

  return (
    <header className="py-2">
      <nav>
        <ul className="flex justify-between p-4">
          <li>
            <Link href="/">Logo</Link>
          </li>
          <li>User Icon</li>
          {!session ? (
            <li>
              <Button asChild>
                <Link
                  href="/auth/login"
                  className="flex gap-x-3 justify-center items-center"
                >
                  <LogIn /> Login
                </Link>
              </Button>
            </li>
          ) : (
            <li>
              <UserButton user={session?.user} expires={session?.expires} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
