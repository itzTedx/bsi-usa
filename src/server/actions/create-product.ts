'use server'

import { ProductSchema } from '@/types/product-schema'
import { createSafeActionClient } from 'next-safe-action'
import { db } from '..'
import { eq } from 'drizzle-orm'
import { productImages, products, productTags } from '../schema'
import { revalidatePath } from 'next/cache'
import { slugify } from '@/lib/utils'

const action = createSafeActionClient()

export const createProduct = action
  .schema(ProductSchema)
  .action(
    async ({
      parsedInput: {
        title,
        description,
        id,
        categoryId,
        productTags: tags,
        productImages: newImgs,
        attachment,
      },
    }) => {
      try {
        if (id) {
          const currentProduct = await db.query.products.findFirst({
            where: eq(products.id, id),
          })
          if (!currentProduct) return { error: 'Product not found' }

          const editedProduct = await db
            .update(products)
            .set({
              description,
              title,
              categoryId,
              slug: slugify(title),
              attachment,
            })
            .where(eq(products.id, id))
            .returning()

          //deleting existing tags
          await db
            .delete(productTags)
            .where(eq(productTags.productId, editedProduct[0].id))
          //and updating to the new tags
          await db.insert(productTags).values(
            tags.map((tag: any) => ({
              tag,
              productId: editedProduct[0].id,
            }))
          )

          //deleting existing images and adding edited ones
          await db
            .delete(productImages)
            .where(eq(productImages.productId, editedProduct[0].id))
          await db.insert(productImages).values(
            newImgs.map(
              (img: { name: any; size: any; url: any }, idx: any) => ({
                name: img.name,
                size: img.size,
                url: img.url,
                productId: editedProduct[0].id,
                order: idx,
              })
            )
          )

          revalidatePath('/studio/products')

          return {
            success: `Product: (${editedProduct[0].title}) has been edited`,
          }
        }

        if (!id) {
          const newProduct = await db
            .insert(products)
            .values({
              description,
              title,
              categoryId,
              slug: slugify(title),
              attachment,
            })
            .returning()

          await db.insert(productTags).values(
            tags.map((tag: any) => ({
              tag,
              productId: newProduct[0].id,
            }))
          )

          await db.insert(productImages).values(
            newImgs.map(
              (img: { name: string; size: string; url: string }, idx: any) => ({
                name: img.name,
                size: img.size,
                url: img.url,
                productId: newProduct[0].id,
                order: idx,
              })
            )
          )

          revalidatePath('/studio/products')

          return {
            success: `Product: (${newProduct[0].title}) has been created`,
          }
        }
      } catch (err) {
        return { error: JSON.stringify(err) }
      }
    }
  )
