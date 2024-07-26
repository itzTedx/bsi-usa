import * as z from 'zod'

export const ProductSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters long' }),
  price: z.coerce
    .number()
    .positive({ message: 'Price should be in positive digit' }),
})

export type zProductSchema = z.infer<typeof ProductSchema>
