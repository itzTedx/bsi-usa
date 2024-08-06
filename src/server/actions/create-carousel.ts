'use server'

import { CarouselSchema } from '@/types/carousel-schema'
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..'
import { carousel } from '../schema'

const action = createSafeActionClient()

export const createCarousel = action
  .schema(CarouselSchema)
  .action(async ({ parsedInput: { title, description, imgUrl, order } }) => {
    console.log(title, description, imgUrl)
    try {
      const carousels = await db
        .insert(carousel)
        .values({
          title,
          description,
          order,
          imgUrl,
        })
        .returning()

      return { success: 'Carousel Uploaded' }
    } catch (err) {
      return { error: JSON.stringify(err) }
    }
  })
