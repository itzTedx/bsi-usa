'use client'

import { ProductSchema } from '@/types/product-schema'
import { Reorder } from 'framer-motion'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { useFieldArray, useFormContext } from 'react-hook-form'
import * as z from 'zod'

import { UploadDropzone } from '@/app/api/uploadthing/upload'
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn, formatFileSize, truncateFileName } from '@/lib/utils'
import { useState } from 'react'

export default function ImageUpload() {
  const { getValues, control, setError } =
    useFormContext<z.infer<typeof ProductSchema>>()

  const { fields, remove, append, update, move } = useFieldArray({
    control,
    name: 'images',
  })

  const [active, setActive] = useState(0)

  return (
    <div className="">
      <FormField
        control={control}
        name="images"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="">Images</FormLabel>
            <FormControl>
              <UploadDropzone
                className="transition-all duration-500 ease-in-out border cursor-pointer border-input ut-allowed-content:text-secondary-foreground/70 ut-label:text-primary ut-upload-icon:text-primary/70 hover:bg-primary/5 ut-button:bg-primary/75"
                endpoint="productImageUploader"
                onUploadError={(error) => {
                  setError('images', {
                    type: 'validate',
                    message: error.message,
                  })
                  return
                }}
                onBeforeUploadBegin={(files) => {
                  files.map((file) =>
                    append({
                      name: file.name,
                      size: file.size,
                      url: URL.createObjectURL(file),
                    })
                  )
                  return files
                }}
                onClientUploadComplete={(files) => {
                  const images = getValues('images')
                  images.map((field, imgIdx) => {
                    if (field.url.search('blob:') === 0) {
                      const image = files.find((img) => img.name === field.name)
                      if (image) {
                        update(imgIdx, {
                          url: image.url,
                          name: image.name,
                          size: image.size,
                          key: image.key,
                        })
                      }
                    }
                  })
                }}
                config={{ mode: 'auto' }}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <div className="overflow-x-hidden rounded-md">
        <Table>
          <TableHeader>
            <TableRow className="text-xs sm:text-sm">
              <TableHead>#</TableHead>
              <TableHead className="w-[120px] sm:w-[250px]">Name</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Images</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <Reorder.Group
            as="tbody"
            values={fields}
            onReorder={(e) => {
              const activeEl = fields[active]
              e.map((item, index) => {
                if (item === activeEl) {
                  move(active, index)
                  setActive(index)
                  return
                }
                return
              })
            }}
          >
            {fields.map((field, i) => {
              return (
                <Reorder.Item
                  as="tr"
                  id={field.id}
                  onDragStart={() => setActive(i)}
                  value={field}
                  key={field.id}
                  className={cn(
                    field.url.search('blob:') === 0
                      ? 'animate-pulse transition-all'
                      : '',
                    'text-xs sm:text-sm sm:font-bold text-muted-foreground hover:text-primary cursor-pointer'
                  )}
                >
                  <TableCell>{i + 1}</TableCell>
                  <TableCell className="sm:hidden">
                    {truncateFileName(field.name, 20)}
                  </TableCell>
                  <TableCell className="hidden sm:block">
                    {truncateFileName(field.name, 44)}
                  </TableCell>
                  <TableCell>{formatFileSize(field.size)}</TableCell>
                  <TableCell>
                    <div className="relative flex items-center justify-center size-9">
                      <Image
                        src={field.url}
                        alt={field.name}
                        className="object-cover rounded-md"
                        fill
                      />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button
                      size={'icon'}
                      variant={'secondary'}
                      className="scale-75"
                      onClick={(e) => {
                        e.preventDefault()
                        remove(i)
                      }}
                    >
                      <Trash className="size-5" />
                    </Button>
                  </TableCell>
                </Reorder.Item>
              )
            })}
          </Reorder.Group>
        </Table>
        {fields.length === 0 ? (
          <div className="mt-2 text-sm text-center text-muted">
            Images not uploaded
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
