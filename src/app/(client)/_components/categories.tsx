import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const products = [
  {
    name: 'Building Solutions',
    description:
      'Ensure structural longevity with expansion joints, tile movement joints, and trims.',
    imageUrl: '/images/bs.jpg',
    href: '/categories',
  },
  {
    name: 'Interior Decoration Solutions',
    description:
      'Enhance aesthetics, functionality, and comfort with skylights, mirrors, cladding, acoustics, raised floors, and cabinets.',
    imageUrl: '/images/interior-decor.jpg',
    href: '/categories',
  },
  {
    name: 'Bridge Solutions',
    description:
      'Maintain bridge integrity with our reliable expansion joints.',
    imageUrl: '/images/bridge.png',
    href: '/categories',
  },
  {
    name: 'Wall Protection Solutions',
    description:
      'Safeguard walls from damage and enhance their appeal with bollards and guards.',
    imageUrl: '/images/wall.png',
    href: '/categories',
  },
  {
    name: 'Portable Cabin Solutions',
    description:
      'Explore versatile portable cabins to meet your temporary or permanent space needs.',
    imageUrl: '/images/cabin.png',
    href: '/categories',
  },
  {
    name: 'Office Solutions',
    description:
      'Create a productive environment with acoustics, raised floors, and metal cabinets.',
    imageUrl: '/images/office.png',
    href: '/categories',
  },
]

function Categories() {
  return (
    <section className="container my-9">
      <h5 className="font-light text-2xl mb-6">
        <span className="text-rose-600 font-bold">Product </span>
        Categories
      </h5>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <Link key={i} href={product.href}>
            <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
              <Image
                fill
                src={product.imageUrl}
                alt={product.description}
                className="-z-30 group-hover:scale-110 transition-all"
              />
              <div className="test-rose-700 absolute bottom-0 p-6 text-background">
                <h6 className="font-bold">{product.name}</h6>
                <p className="font-light line-clamp-2 text-xs text-muted">
                  {product.description}
                </p>
              </div>
              <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
