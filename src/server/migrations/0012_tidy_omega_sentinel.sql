ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN IF EXISTS "categoryId";