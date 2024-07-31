import { Button } from '@/components/ui/button'
import { db } from '@/server'
import { auth } from '@/server/auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { DataTable } from './data-table'
import { columns } from './columns'

export default async function CategoryPage() {
  const session = await auth()
  const isAdmin = session?.user.role === 'admin'

  if (!session) redirect('/auth/login')
  if (!isAdmin) {
    redirect('/auth/not-allowed')
  }

  const categories = await db.query.categories.findMany({
    orderBy: (categories, { desc }) => [desc(categories.id)],
  })

  const dataTable = categories.map((category) => {
    return {
      id: category.id,
      title: category.title,
    }
  })

  if (!dataTable) throw new Error('No data found')

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Categories</h1>
        <Button variant={'outline'} asChild>
          <Link href="/studio/categories/new">Add Category</Link>
        </Button>
      </div>

      <DataTable columns={columns} data={dataTable} />
    </>
  )
}
