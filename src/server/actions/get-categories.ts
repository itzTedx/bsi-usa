'use server'

import { db } from '..'

export async function getCategories() {
  try {
    const category = await db.query.categories.findMany()

    if (!category) throw new Error('Category not found')

    return { success: category }
  } catch (error) {
    return { error: 'Failed to get Category' }
  }
}
