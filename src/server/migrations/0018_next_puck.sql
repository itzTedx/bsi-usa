ALTER TABLE "product_tags" RENAME COLUMN "url" TO "tag";--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "attachment" text NOT NULL;