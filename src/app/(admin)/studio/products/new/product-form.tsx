'use client'

import { ProductSchema, zProductSchema } from '@/types/product-schema'
import { useForm } from 'react-hook-form'

import Tiptap from '@/components/tiptap'
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { Input } from '@/components/ui/input'
import { createProduct } from '@/server/actions/create-product'
import { getProduct } from '@/server/actions/get-product'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, Trash } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import ImageUpload from './image-upload'
import { InputTags } from './input-tags'
import { deleteProduct } from '@/server/actions/delete-product'

export const ProductForm = () => {
  const searchParams = useSearchParams()
  const editMode = searchParams.get('id')

  const checkProduct = async (id: number) => {
    if (editMode) {
      const { error, success } = await getProduct(id)

      if (error) {
        toast.error(error)
        router.push('/studio/products')
        return
      }
      if (success) {
        const id = parseInt(editMode)
        form.setValue('title', success.title)
        form.setValue('description', success.description)
        form.setValue('id', success.id)
        form.setValue('productImages', success.productImages)
        form.setValue(
          'productTags',
          success.productTags.map((tag) => tag.tag)
        )
      }
    }
  }

  useEffect(() => {
    if (editMode) {
      checkProduct(parseInt(editMode))
    }
  }, [])

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const form = useForm<zProductSchema>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: '',
      description: '',
      productTags: [],
      productImages: [],
    },
  })

  const { execute, status } = useAction(createProduct, {
    onExecute: () => {
      setLoading(true)
    },
    onSuccess: ({ data }) => {
      if (data?.success) {
        router.push('/studio/products')
        toast.success(data.success)
        setLoading(false)
      }
    },

    onError: (error) => {
      console.log(error)
      setLoading(false)
    },
  })

  const { execute: deleteExistingProduct } = useAction(deleteProduct, {
    onSuccess: ({ data }) => {
      if (data?.success) {
        router.push('/studio/products')
        toast.success(data.success)
      }
      if (data?.error) toast.error(data.error)
    },
  })
  function onSubmit(values: z.infer<typeof ProductSchema>) {
    execute(values)
  }
  return (
    <Card className="w-full overflow-hidden xl:w-1/2">
      <CardHeader className="p-1 pb-3 flex flex-row justify-between">
        <div className="">
          <CardTitle>{editMode ? 'Edit Product' : 'Add new product'}</CardTitle>
          <CardDescription>
            {editMode
              ? 'Make changes to existing product'
              : 'Add a brand new product'}
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
                  your product and remove your data from servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    deleteExistingProduct({ id: parseInt(editMode) })
                  }
                >
                  Delete
                </AlertDialogAction>
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
                  <FormLabel className="">Product Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Title" {...field} />
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
            <ImageUpload />

            <FormField
              control={form.control}
              name="productTags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Keywords</FormLabel>
                  <FormDescription>For SEO keywords</FormDescription>
                  <InputTags {...field} onChange={(e) => field.onChange(e)} />

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
