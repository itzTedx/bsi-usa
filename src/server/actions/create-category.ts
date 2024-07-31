'use server'

import { CategorySchema } from '@/types/category-schema'
import { eq } from 'drizzle-orm'
import { createSafeActionClient } from 'next-safe-action'
import { revalidatePath } from 'next/cache'
import { db } from '..'
import { categories } from '../schema'
import { slugify } from '@/lib/utils'

const action = createSafeActionClient()

export const createCategory = action
  .schema(CategorySchema)
  .action(async ({ parsedInput: { title, description, id } }) => {
    try {
      if (id) {
        const currentCategory = await db.query.categories.findFirst({
          where: eq(categories.id, id),
        })
        if (!currentCategory) return { error: 'Category not found' }
        const editedCategory = await db
          .update(categories)
          .set({ description, title, slug: slugify(title) })
          .where(eq(categories.id, id))
          .returning()

        revalidatePath('/studio/categories')

        return {
          success: `Category: (${editedCategory[0].title}) has been edited`,
        }
      }

      if (!id) {
        const newCategory = await db
          .insert(categories)
          .values({
            description,
            title,
            slug: slugify(title),
          })
          .returning()

        // revalidatePath('/studio/categories')

        return {
          success: `Category: (${newCategory[0].title}) has been created`,
        }
      }
    } catch (err) {
      return { error: JSON.stringify(err) }
    }
  })
