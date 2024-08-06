'use client'

import { UploadButton } from '@/app/api/uploadthing/upload'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Input } from '@/components/ui/input'
import { createProduct } from '@/server/actions/create-product'
import { CarouselSchema, zCarouselSchema } from '@/types/carousel-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlignJustify, Trash } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { createCarousel } from '@/server/actions/create-carousel'
import { deleteCarousel } from '@/server/actions/delete-carousel'

interface CarouselProps {
  data: {
    id: number
    title: string
    description: string
    imgUrl: string
    order: number
  }[]
}

export default function CarouselForm({ data }: CarouselProps) {
  const [active, setActive] = useState(0)

  const form = useForm<zCarouselSchema>({
    resolver: zodResolver(CarouselSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const { execute, status } = useAction(createCarousel, {
    onSuccess: ({ data }) => {
      if (data?.success) {
        // router.push('/studio/products')
        console.log(data.success)
        toast.success(data.success)
      }
      if (data?.error) toast.error(data.error)
    },
    onError: (data) => {
      console.log(data)
    },
  })

  function onSubmit(values: zCarouselSchema) {
    console.log(values)
    execute(values)
  }

  const { execute: deleteItem } = useAction(deleteCarousel, {
    onSuccess: ({ data }) => {
      if (data?.success) toast.success(data.success)
      if (data?.error) toast.error(data.error)
    },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Image</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((car) => (
              <TableRow key={car.id}>
                <TableCell>
                  <AlignJustify />
                </TableCell>
                <TableCell>
                  <span>{car.title}</span>
                </TableCell>
                <TableCell>
                  <span>{car.description}</span>
                </TableCell>
                <TableCell className="flex gap-3 items-center">
                  <div className="relative size-12 rounded overflow-hidden">
                    <Image src={car.imgUrl} fill alt="" className="" />
                  </div>
                  <Button
                    size={'icon'}
                    variant={'secondary'}
                    onClick={(e) => {
                      e.preventDefault()
                      deleteItem({ id: car.id })
                    }}
                  >
                    <Trash className="p-0.5" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <AlignJustify />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Title for banner" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Description" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={form.control}
                  name="imgUrl"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        {form.getValues('imgUrl') && (
                          <div className="relative size-12 rounded overflow-hidden">
                            <Image
                              src={form.getValues('imgUrl')}
                              fill
                              alt=""
                              className=""
                            />
                          </div>
                        )}

                        <UploadButton
                          className="scale-90 ut-button:bg-primary/75 hover:ut-button:bg-primary/100 ut-button:w-28 ut-button:transitions-all ut-label:hidden ut-allowed-content:hidden ut-button:ring-primary focus-within:ut-button:ring-offset-background"
                          endpoint="carouselImageUploader"
                          onUploadBegin={() => {
                            //   setAvatarUpload(true)
                          }}
                          onUploadError={(error) => {
                            form.setError('imgUrl', {
                              type: 'validate',
                              message: error.message,
                            })
                            //   setAvatarUpload(false)
                            return
                          }}
                          onClientUploadComplete={(res) => {
                            form.setValue('imgUrl', res[0].url!)
                            //   setAvatarUpload(false)
                            return
                          }}
                          content={{
                            button({ ready }) {
                              if (ready) return <div>Upload</div>
                              return <div>Uploading...</div>
                            },
                          }}
                        />
                      </div>
                      <FormControl>
                        <Input
                          type="hidden"
                          placeholder="Banner image"
                          {...field}
                          disabled={status === 'executing'}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Button disabled={status === 'executing'} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
