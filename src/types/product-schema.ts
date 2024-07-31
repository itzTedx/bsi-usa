import * as z from 'zod'

export const ProductSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters long' }),
  editMode: z.boolean().optional(),
  categoryId: z.string(),
  category: z.string(),
  productTags: z.array(z.string()).optional(),
  productImages: z.array(
    z.object(
      {
        url: z.string().refine((url) => url.search('blob:') !== 0, {
          message: 'Please wait for the image to upload',
        }),
        size: z.number(),
        key: z.string().optional(),
        id: z.number().optional(),
        name: z.string({ message: 'Please upload image' }),
      },
      { message: 'Image is required' }
    )
  ),
  // price: z.coerce
  //   .number()
  //   .positive({ message: 'Price should be in positive digit' }),
})

export type zProductSchema = z.infer<typeof ProductSchema>
