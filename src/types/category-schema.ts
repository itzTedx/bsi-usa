import * as z from 'zod'

export const CategorySchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters long' }),
})

export type zProductSchema = z.infer<typeof CategorySchema>
