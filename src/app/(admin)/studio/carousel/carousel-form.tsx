'use client'

import { UploadButton } from '@/app/api/uploadthing/upload'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Input } from '@/components/ui/input'
import { createProduct } from '@/server/actions/create-product'
import { CarouselSchema, zCarouselSchema } from '@/types/carousel-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlignJustify } from 'lucide-react'
import { useAction } from 'next-safe-action/hooks'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import Image from 'next/image'

export default function CarouselForm() {
  const [active, setActive] = useState(0)

  const form = useForm<zCarouselSchema>({
    resolver: zodResolver(CarouselSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  })

  const { execute, status } = useAction(createProduct, {})

  function onSubmit(values: zCarouselSchema) {
    console.log(values)
  }

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
                  name="imageUrl"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center gap-2">
                        {form.getValues('imageUrl') && (
                          <div className="relative size-12 rounded overflow-hidden">
                            <Image
                              src={form.getValues('imageUrl')}
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
                            form.setError('imageUrl', {
                              type: 'validate',
                              message: error.message,
                            })
                            //   setAvatarUpload(false)
                            return
                          }}
                          onClientUploadComplete={(res) => {
                            form.setValue('imageUrl', res[0].url!)
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

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
