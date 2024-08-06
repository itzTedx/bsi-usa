import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError } from 'uploadthing/server'

const f = createUploadthing()

export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  avatarUploader: f({ image: { maxFileSize: '4MB' } }).onUploadComplete(
    async ({ metadata, file }) => {}
  ),
  productImageUploader: f({
    image: { maxFileCount: 10, maxFileSize: '4MB' },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log(metadata)
  }),
  attachmentUploader: f({ pdf: { maxFileSize: '4MB' } }).onUploadComplete(
    async ({ metadata, file }) => {
      console.log(metadata)
    }
  ),
  carouselImageUploader: f({
    image: { maxFileSize: '4MB' },
  }).onUploadComplete(async ({ metadata, file }) => {
    console.log(metadata)
  }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
