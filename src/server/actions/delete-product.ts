'use server'

import { ProductSchema } from '@/types/product-schema'
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..'
import { eq } from 'drizzle-orm'
import { productImages, products, productTags } from '../schema'
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

      await db.delete(productImages).where(eq(productImages.productId, id))
      await db.delete(productTags).where(eq(productTags.productId, id))

      revalidatePath('/studio/products')

      return { success: `Product (${data[0].title}) has been deleted` }
    } catch (error) {
      return { error: 'Failed to delete product' }
    }
  })
