'use server'

import { db } from '..'

export async function getProduct() {
  try {
    const product = await db.query.products.findFirst({
      with: {
        productImages: true,
        productTags: true,
        category: true,
      },
    })

    if (!product) throw new Error('Products not found')

    return { success: product }
  } catch (error) {
    return { error: 'Failed to get products' }
  }
}
