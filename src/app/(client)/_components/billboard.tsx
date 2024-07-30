'use client'
import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

function Billboard() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="bg-rose-600 text-background grid sm:grid-cols-2 sm:h-[90dvh] overflow-hidden p-6 sm:p-0 gap-3">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 place-content-center sm:max-w-2xl mx-auto p-3">
                  <h1 className="text-sm md:text-3xl lg:text-5xl tracking-wide text-center sm:text-left bg-rose-800/70 sm:bg-transparent h-fit sm:h-auto p-4 sm:p-0">
                    Discover the Full Spectrum of our products and solutions,
                    Today!
                  </h1>

                  <p className="lg:text-2xl text-balance text-[14px] font-light sm:text-justify leading-normal lg:mt-9 tracking-wide ">
                    Explore our extensive catalog of products and solutions,
                    designed to unlock new possibilities and elevate your
                    projects to new heights of success.
                  </p>
                </div>
                <div className="aspect-square relative mt-4 sm:mt-0">
                  <Image
                    src="/hero-billboard.jpg"
                    fill
                    className="rounded-xl overflow-hidden"
                    alt="Billboard"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground absolute bottom-0 left-1/2 -translate-x-1/2">
        Slide {current} of {count}
      </div>
    </div>
  )
}

export default Billboard
