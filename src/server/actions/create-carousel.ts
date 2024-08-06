'use server'

import { slugify } from '@/lib/utils'
import { CarouselSchema } from '@/types/carousel-schema'
import { eq } from 'drizzle-orm'
import { createSafeActionClient } from 'next-safe-action'
import { revalidatePath } from 'next/cache'
import { db } from '..'
import { categories } from '../schema'

const action = createSafeActionClient()

export const createCarousel = action
  .schema(CarouselSchema)
  .action(
    async ({ parsedInput: { title, description, order, id, imageUrl } }) => {
      try {
        if (id) {
          const currentCarousel = await db.query.categories.findFirst({
            where: eq(categories.id, id),
          })
          if (!currentCarousel) return { error: 'Carousel not found' }
          const editedCarousel = await db
            .update(categories)
            .set({ description, title, slug: slugify(title) })
            .where(eq(categories.id, id))
            .returning()

          revalidatePath('/studio/carousel')

          return {
            success: `Carousel: (${editedCarousel[0].title}) has been edited`,
          }
        }

        if (!id) {
          const newCarousel = await db
            .insert(categories)
            .values({
              description,
              title,
              slug: slugify(title),
            })
            .returning()

          return {
            success: `Carousel: (${newCarousel[0].title}) has been created`,
          }
        }
      } catch (err) {
        return { error: JSON.stringify(err) }
      }
    }
  )
