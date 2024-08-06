import { auth } from '@/server/auth'
import { redirect } from 'next/navigation'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { db } from '@/server'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default async function Home() {
  const session = await auth()

  if (!session) redirect('/auth/login')

  const products = await db.query.products.findMany({
    with: {
      productImages: true,
      productTags: true,
      category: true,
    },
  })

  const categories = await db.query.categories.findMany()

  const banner = await db.query.carousel.findMany()

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="sm:border sm:border-dashed rounded-lg shadow-sm p-0 sm:p-6">
        <h2 className="mb-3">Quick Links</h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-6">
          <Link href="/studio/products">
            <Card className="hover:bg-muted transition-all flex justify-between group p-3">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Products</CardTitle>
                <CardDescription className="text-xs sm:text-base">
                  Manage your products
                </CardDescription>
              </CardHeader>
              <ArrowUpRight className="text-muted-foreground m-2 group-hover:rotate-45 transition-all" />
            </Card>
          </Link>
          <Link href="/studio/categories">
            <Card className="hover:bg-muted transition-all flex justify-between group p-3">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Categories</CardTitle>
                <CardDescription className="text-xs sm:text-base">
                  Manage your categories
                </CardDescription>
              </CardHeader>
              <ArrowUpRight className="text-muted-foreground m-2 group-hover:rotate-45 transition-all" />
            </Card>
          </Link>
        </div>
        <section className="mt-3 space-y-3">
          <Card className="p-3">
            <div className="flex justify-between group">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">
                  Featured Banner
                </CardTitle>
                <CardDescription className="text-xs sm:text-base">
                  Manage Carousel in homepage
                </CardDescription>
              </CardHeader>
              <ArrowUpRight className="text-muted-foreground m-2 group-hover:rotate-45 transition-all" />
            </div>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {banner.map((carousel) => (
                <Card
                  className="p-3 relative bg-transparent group"
                  key={carousel.id}
                >
                  <CardHeader className="z-50 relative">
                    <CardTitle className="text-lg sm:text-xl line-clamp-2">
                      {carousel.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-base line-clamp-4">
                      {carousel.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 opacity-10 transition-all duration-500 group-hover:opacity-30">
                    <Image
                      src={carousel.imgUrl}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </section>
        <h2 className="mt-6 mb-3">Categories</h2>
        <Card className="p-3">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Categories</CardTitle>
            <CardDescription className="text-xs sm:text-base">
              Manage your categories
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <Card
                key={category.slug}
                className="hover:bg-muted transition-all duration-500"
              >
                <CardHeader className="flex flex-row gap-3">
                  <div className="">
                    <CardTitle className="font-medium text-base">
                      {category.title}
                    </CardTitle>
                    <div className="text-xs text-muted-foreground">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: category.description,
                        }}
                      />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </CardContent>
        </Card>
        <h2 className="mt-6 mb-3">Products</h2>
        <Card className="mt-3 p-3">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Products</CardTitle>
            <CardDescription className="text-xs sm:text-base">
              Manage your products
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {products.map((product) => (
              <Card
                key={product.slug}
                className="hover:bg-muted transition-all duration-500"
              >
                <CardHeader className="flex flex-row gap-3">
                  <div className="relative size-14">
                    {product.productImages && (
                      <Image
                        src={product.productImages[0].url}
                        fill
                        alt={product.title}
                        className="rounded-md object-cover"
                      />
                    )}
                  </div>
                  <div className="">
                    <CardTitle className="font-medium text-base">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-base">
                      {product.category.title}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
