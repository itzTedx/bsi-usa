import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  pgEnum,
  serial,
  real,
} from 'drizzle-orm/pg-core'
import { AdapterAccountType } from 'next-auth/adapters'

import { createId } from '@paralleldrive/cuid2'
import { InferSelectModel, relations } from 'drizzle-orm'

export const RoleEnum = pgEnum('roles', ['user', 'admin'])

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  password: text('password'),
  image: text('image'),
  twoFactorEnabled: boolean('twoFactorEnabled').default(false),
  role: RoleEnum('roles').default('user'),
})

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)

export const emailTokens = pgTable(
  'email_tokens',
  {
    id: text('id')
      .notNull()
      .$defaultFn(() => createId()),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
    email: text('email').notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.id, verificationToken.token],
    }),
  })
)

export const passwordResetToken = pgTable(
  'password_reset_token',
  {
    id: text('id')
      .notNull()
      .$defaultFn(() => createId()),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
    email: text('email').notNull(),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.id, verificationToken.token],
    }),
  })
)

export const twoFactorTokens = pgTable(
  'two_factor_tokens',
  {
    id: text('id')
      .notNull()
      .$defaultFn(() => createId()),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
    email: text('email').notNull(),
    userID: text('userID').references(() => users.id, { onDelete: 'cascade' }),
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.id, verificationToken.token],
    }),
  })
)

//Categories Schema
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  slug: text('slug').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),

  // productId: serial('productId')
  //   .notNull()
  //   .references(() => products.id, { onDelete: 'cascade' }),
})
export const categoryRelations = relations(categories, ({ many }) => ({
  products: many(products),
}))

// Products Schema
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  slug: text('slug').notNull(),
  attachment: text('attachment'),

  categoryId: integer('categoryId').notNull(),
})

export const productImages = pgTable('product_images', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  size: real('size').notNull(),
  name: text('title').notNull(),
  order: real('order').notNull(),

  productId: serial('productId')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
})

export const productTags = pgTable('product_tags', {
  id: serial('id').primaryKey(),
  tag: text('tag').notNull(),

  productId: serial('productId')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
})

export const productRelations = relations(products, ({ many, one }) => ({
  productImages: many(productImages, { relationName: 'productImages' }),
  productTags: many(productTags, { relationName: 'productTags' }),
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}))

export const productImagesRelations = relations(
  productImages,
  ({ many, one }) => ({
    product: one(products, {
      fields: [productImages.productId],
      references: [products.id],
      relationName: 'productImages',
    }),
  })
)

export const productTagsRelations = relations(productTags, ({ many, one }) => ({
  product: one(products, {
    fields: [productTags.productId],
    references: [products.id],
    relationName: 'productTags',
  }),
}))

// export const categoryProductRelations = relations(
//   products,
//   ({ many, one }) => ({
//     products: one(products, {
//       fields: [categories.productId],
//       references: [products.id],
//       relationName: 'category',
//     }),
//   })
// )
