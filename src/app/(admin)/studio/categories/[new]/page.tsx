import { Button } from '@/components/ui/button'
import { auth } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { CategoryForm } from './category-form'

export default async function Page({ params }: { params: { new: string } }) {
  const session = await auth()
  const isAdmin = session?.user.role === 'admin'

  if (!session) redirect('/auth/login')
  if (!isAdmin) {
    redirect('/auth/not-allowed')
  }

  const editMode = params.new
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Categories</h1>
        <Button variant={'outline'} asChild>
          <Link href="/studio/products">Back to Category</Link>
        </Button>
      </div>
      <div className="flex flex-1 p-0 md:border md:border-dashed sm:shadow-sm md:p-6 sm:rounded-lg">
        <CategoryForm editMode={editMode} />
      </div>
    </>
  )
}
