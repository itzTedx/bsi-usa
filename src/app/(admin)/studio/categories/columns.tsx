'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteProduct } from '@/server/actions/delete-product'
import { ColumnDef, Row } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import Image from 'next/image'
import { toast } from 'sonner'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import Link from 'next/link'

type CategoryColumn = {
  title: string

  // created: Date
  id: number
}

const ActionCell = ({ row }: { row: Row<CategoryColumn> }) => {
  const { execute, status } = useAction(deleteProduct, {
    onSuccess: ({ data }) => {
      if (data?.success) toast.success(data.success)
      if (data?.error) toast.error(data.error)
    },
  })

  const product = row.original
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center">
        <DropdownMenuItem>
          <Link href={`/studio/categories/new?id=${product.id}`}>
            Edit Category
          </Link>
        </DropdownMenuItem>

        <AlertDialog>
          <AlertDialogTrigger className="relative flex w-full cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none transition-colors focus:bg-accent hover:bg-accent focus:text-accent-foreground hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
            Delete
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                product and remove your data from servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => execute({ id: product.id })}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: 'title',
    header: 'Category Title',
  },

  // {
  //   accessorKey: 'created',
  //   header: 'Created At',
  // },
  // {
  //   accessorKey: 'price',
  //   header: 'Price',
  //   cell: ({ row }) => {
  //     const price = parseFloat(row.getValue('price'))
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       currency: 'USD',
  //       style: 'currency',
  //     }).format(price)

  //     return <div>{formatted}</div>
  //   },
  // },

  {
    id: 'actions',
    cell: ActionCell,
  },
]
