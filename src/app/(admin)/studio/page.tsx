import { auth } from '@/server/auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await auth()

  if (!session) redirect('/auth/login')

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        Admin Panel
      </div>
    </>
  )
}
