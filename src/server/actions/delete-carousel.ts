'use server'

import { eq } from 'drizzle-orm'
import { createSafeActionClient } from 'next-safe-action'
import { z } from 'zod'
import { db } from '..'
import { carousel } from '../schema'

const action = createSafeActionClient()

export const deleteCarousel = action
  .schema(z.object({ id: z.number() }))
  .action(async ({ parsedInput: { id } }) => {
    try {
      const data = await db
        .delete(carousel)
        .where(eq(carousel.id, id))
        .returning()

      return { success: `Carousel deleted` }
    } catch (error) {
      return { error: 'Failed to delete Carousel' }
    }
  })
