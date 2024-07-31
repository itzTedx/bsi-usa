'use server'

import { eq } from 'drizzle-orm'
import { db } from '..'
import { categories } from '../schema'

export async function getCategory(id: number) {
  try {
    const category = await db.query.categories.findFirst({
      where: eq(categories.id, id),
    })

    if (!category) throw new Error('Category not found')

    return { success: category }
  } catch (error) {
    return { error: 'Failed to get category' }
  }
}
