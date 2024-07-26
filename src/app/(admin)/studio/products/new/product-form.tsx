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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { DollarSign, Loader, Loader2 } from 'lucide-react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { createProduct } from '@/server/actions/create-product'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { useEffect, useState } from 'react'
import { getProduct } from '@/server/actions/get-product'

export default function ProductForm() {
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
        form.setValue('price', success.price)
        form.setValue('id', success.id)
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
      price: 0,
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

  function onSubmit(values: z.infer<typeof ProductSchema>) {
    execute(values)
  }
  return (
    <Card className="w-full xl:w-1/2 overflow-hidden">
      <CardHeader>
        <CardTitle>{editMode ? 'Edit Product' : 'Add new product'}</CardTitle>
        <CardDescription>
          {editMode
            ? 'Make changes to existing product'
            : 'Add a brand new product'}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
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
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Price</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <DollarSign
                        size={36}
                        className="p-2 bg-muted rounded-md"
                      />
                      <Input
                        placeholder="Product Price"
                        type="number"
                        step="0.1"
                        min={0}
                        {...field}
                      />
                    </div>
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
