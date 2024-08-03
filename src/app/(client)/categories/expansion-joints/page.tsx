import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCard from '../../_components/product-card'

const Expansion = () => {
  const CATEGORIES = [
    { title: 'Expansion Joints', href: '/categories/expansion-joints' },
    { title: 'Tile Movement Joints', href: '/categories/expansion-joints' },
    { title: 'Tile Trims', href: '/categories/expansion-joints' },
    { title: 'Skirtings', href: '/categories/expansion-joints' },
    { title: 'Stair Noising', href: '/categories/expansion-joints' },
    { title: 'Solar Skylight', href: '/categories/expansion-joints' },
    { title: 'Silent Pods', href: '/categories/expansion-joints' },
    { title: 'Hammered Mirrors', href: '/categories/expansion-joints' },
    { title: 'Wall Gaurds', href: '/categories/expansion-joints' },
    { title: 'Sandwich Panels', href: '/categories/expansion-joints' },
  ]
  const Products = [
    {
      title: 'Parking Expansion Joints',
      image: '/images/Silent Pods.jpg',
      link: '/product/expansion-joints',
    },
    {
      title: 'Building Expansion Joints',
      image: '/images/Silent Pods.jpg',
      link: '/product/expansion-joints',
    },
    {
      title: 'Bridge Expansion Joints',
      image: '/images/Silent Pods.jpg',
      link: '/product/expansion-joints',
    },
    {
      title: 'Square Expansion Joints',
      image: '/images/Silent Pods.jpg',
      link: '/product/expansion-joints',
    },
  ]
  return (
    <section>
      <h1 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold px-4 md:px-0 leading-snug">
        Expansion Joints
      </h1>
      <div className="container my-9 md:my-16 flex flex-col-reverse md:flex-row gap-6">
        <div className="shrink-0 flex flex-col text-center gap-4">
          <h5>Categories</h5>
          {CATEGORIES.map((product, i) => (
            <Link
              key={i}
              href="/product/expansion-joints"
              className="border border-red-700 hover:bg-red-100 transition py-2 px-6 font-semibold text-red-700 uppercase"
            >
              {product.title}
            </Link>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start h-fit">
          {Products.map((product) => (
            <ProductCard product={product} key={product.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Expansion
