ALTER TABLE "products" DROP CONSTRAINT "products_categoryId_categories_id_fk";
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "categoryId" SET DATA TYPE integer;