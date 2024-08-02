'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function Billboard() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [active, setActive] = React.useState(0)

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
    <div className="relative bg-rose-600 ">
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Carousel
        setApi={setApi}
        className="relative w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="text-background grid lg:grid-cols-2 lg:h-[90dvh] overflow-hidden px-6 pt-4 sm:px-12 sm:pt-9 md:p-0 gap-9 md:gap-3">
                <div className="grid gap-3 mx-auto sm:gap-4 place-content-center md:max-w-2xl">
                  <h1 className="p-3 text-lg font-semibold text-center sm:text-4xl xl:text-5xl sm:text-left bg-rose-800/70 sm:bg-transparent h-fit sm:h-auto sm:p-0">
                    Discover the Full Spectrum of our products and solutions,
                    Today!
                  </h1>

                  <p className="text-[16px] font-light leading-normal tracking-wide text-center lg:text-2xl text-balance sm:text-base sm:text-justify lg:mt-9">
                    Explore our extensive catalog of products and solutions,
                    designed to unlock new possibilities and elevate your
                    projects to new heights of success.
                  </p>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/hero-billboard.jpg"
                    fill
                    className="overflow-hidden rounded-xl"
                    alt="Billboard"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="container bottom-0 flex justify-between py-3 md:absolute">
          <div className="flex gap-2">
            <CarouselPrevious className="bg-rose-600 border-background text-background hover:bg-white/30 hover:text-background" />
            <CarouselNext className="bg-rose-600 border-background text-background hover:bg-white/30 hover:text-background" />
          </div>
          <div className="flex gap-2 py-2 text-sm text-center -translate-x-1/2 text-muted-foreground">
            {Array.from({ length: count }).map((_, i: number) => {
              return (
                <span
                  key={i}
                  className={cn(
                    'outline outline-2 outline-white rounded-full size-3 relative',
                    i === current - 1 && 'bg-white border-2 border-rose-600'
                  )}
                />
              )
            })}
            {/* Slide {current} of {count} */}
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Billboard
