CREATE TABLE IF NOT EXISTS "carousel" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"image_url" text NOT NULL,
	"order" real NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "attachment" DROP NOT NULL;