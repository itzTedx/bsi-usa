'use server'

import { eq } from 'drizzle-orm'
import { createSafeActionClient } from 'next-safe-action'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { db } from '..'
import { categories, productImages, products, productTags } from '../schema'

const action = createSafeActionClient()

export const deleteCategory = action
  .schema(z.object({ id: z.number() }))
  .action(async ({ parsedInput: { id } }) => {
    try {
      const data = await db
        .delete(categories)
        .where(eq(categories.id, id))
        .returning()

      revalidatePath('/studio/categories')

      return { success: `Category (${data[0].title}) has been deleted` }
    } catch (error) {
      return { error: 'Failed to delete category' }
    }
  })
