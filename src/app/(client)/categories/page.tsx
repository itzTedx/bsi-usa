import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <section>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold px-6 md:px-0">
        Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 container my-16">
        <Card>
          <Link href="/categories/expansion-joints">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/expansion-joints.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Expansion Joints</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/movement-joints 1.png"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Movement Joints</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/tile-trims.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Tile Trims</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/carpet-trims.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Carpet Trims</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/skirting.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Skirting</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/stair-nosing.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Stair Nosing</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/Wall Gaurds.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Wall Gaurds</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/Silent Pods.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Silent Pods</p>
            </CardFooter>
          </Link>
        </Card>

        <Card>
          <Link href="/">
            <CardContent>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src="/images/Solar Skylights.jpg"
                  alt="Image"
                  fill
                  className="rounded-md object-cover border border-black"
                />
              </AspectRatio>
            </CardContent>
            <CardFooter>
              <p>Solar Skylights</p>
            </CardFooter>
          </Link>
        </Card>
      </div>
    </section>
  )
}

export default ProductsPage
