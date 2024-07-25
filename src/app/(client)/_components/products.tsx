"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Products = () => {
  return (
    <section className="container mt-20 ">
      <h5 className="text-2xl text-accent font-bold">Products</h5>
      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full mx-auto mt-6"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4">
            <Card>
              <CardContent>
                <AspectRatio ratio={5 / 3.5}>
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
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default Products;
