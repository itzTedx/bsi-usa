import * as z from 'zod'

export const CarouselSchema = z.object({
  id: z.number().optional(),
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters long' }),
  imageUrl: z.string().min(1),
})

export type zCarouselSchema = z.infer<typeof CarouselSchema>
