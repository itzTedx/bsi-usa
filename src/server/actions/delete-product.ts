'use server'

import { ProductSchema } from '@/types/product-schema'
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..'
import { eq } from 'drizzle-orm'
import { products } from '../schema'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'

const action = createSafeActionClient()

export const deleteProduct = action
  .schema(z.object({ id: z.number() }))
  .action(async ({ parsedInput: { id } }) => {
    try {
      const data = await db
        .delete(products)
        .where(eq(products.id, id))
        .returning()

      revalidatePath('/studio/products')

      return { success: `Product (${data[0].title}) has been deleted` }
    } catch (error) {
      return { error: 'Failed to delete product' }
    }
  })
