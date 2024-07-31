'use client'

import { useForm } from 'react-hook-form'

import Tiptap from '@/components/tiptap'
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
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { createCategory } from '@/server/actions/create-category'
import { getProduct } from '@/server/actions/get-product'
import { CategorySchema, zCategorySchema } from '@/types/category-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Trash } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'

export const CategoryForm = () => {
  const searchParams = useSearchParams()
  const editMode = searchParams.get('id')

  const checkProduct = async (id: number) => {
    if (editMode) {
      const { error, success } = await getProduct(id)

      if (error) {
        toast.error(error)
        router.push('/studio/categories')
        return
      }
      if (success) {
        const id = parseInt(editMode)
        form.setValue('title', success.title)
        form.setValue('description', success.description)
        form.setValue('id', success.id)
      }
    }
  }

  useEffect(() => {
    if (editMode) {
      checkProduct(parseInt(editMode))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<zCategorySchema>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const { execute, status } = useAction(createCategory, {
    onExecute: () => {
      setLoading(true)
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        router.push('/studio/categories')
        toast.success(data.success)
        setLoading(false)
      }
    },

    onError: (error) => {
      console.log(error)
      setLoading(false)
    },
  })

  function onSubmit(values: z.infer<typeof CategorySchema>) {
    execute(values)
  }

  return (
    <Card className="w-full overflow-hidden xl:w-1/2">
      <CardHeader className="p-1 pb-3 flex flex-row justify-between">
        <div className="">
          <CardTitle>
            {editMode ? 'Edit Category' : 'Add new category'}
          </CardTitle>
          <CardDescription>
            {editMode
              ? 'Make changes to existing category'
              : 'Add a brand new category'}
          </CardDescription>
        </div>

        {editMode ? (
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant={'destructive'} size={'icon'}>
                <Trash className="size-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your category and products related to that.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => {}}>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : null}
      </CardHeader>
      <CardContent className="w-full p-1">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Category Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Description</FormLabel>
                  <FormControl>
                    <Tiptap val={field.value} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={
                status === 'executing' ||
                !form.formState.isValid ||
                !form.formState.isDirty
              }
              type="submit"
              className="w-full"
            >
              {loading && <Loader className="mr-2 size-4 animate-spin" />}
              {editMode ? 'Save Changes' : 'Create'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
