import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductCardProps {
  product: {
    image: string
    link: string
    title: string
    description?: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="rounded-lg overflow-hidden">
      <Link href={product.link}>
        <CardContent className="p-0">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </AspectRatio>
        </CardContent>
        <CardFooter className="bg-rose-600 p-3 text-background font-medium">
          <p>{product.title}</p>
        </CardFooter>
      </Link>
    </Card>
  )
}
