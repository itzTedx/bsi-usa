import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Expansion = () => {
  const CATEOGORIES = [
    { title: "Expansion Joints", href: "/categories/expansion-joints" },
    { title: "Tile Movement Joints", href: "/categories/expansion-joints" },
    { title: "Tile Trims", href: "/categories/expansion-joints" },
    { title: "Skirtings", href: "/categories/expansion-joints" },
    { title: "Stair Noising", href: "/categories/expansion-joints" },
    { title: "Solar Skylight", href: "/categories/expansion-joints" },
    { title: "Silent Pods", href: "/categories/expansion-joints" },
    { title: "Hammered Mirrors", href: "/categories/expansion-joints" },
    { title: "Wall Gaurds", href: "/categories/expansion-joints" },
    { title: "Sandwich Panels", href: "/categories/expansion-joints" },
  ];
  const Products = [
    { title: "Parking Expansion Joints", href: "parking.jpg" },
    { title: "Building Expansion Joints", href: "building-exp.jpg" },
    { title: "Bridge Expansion Joints", href: "bridge-exp.jpg" },
    { title: "Square Expansion Joints", href: "square-exp.jpg" },
  ];
  return (
    <section>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold">
        Expansion Joints
      </h2>
      <div className="container my-16 flex gap-6">
        <div className="shrink-0 flex flex-col text-center gap-4">
          {CATEOGORIES.map((product, i) => (
            <Link
              key={i}
              href="/product/expansion-joints"
              className="border border-red-700 hover:bg-red-100 transition py-2 px-6 font-semibold text-red-700 uppercase"
            >
              {product.title}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-3 w-full">
          {Products.map((product) => (
            <Card key={product.title}>
              <Link href="/product/expansion-joints">
                <CardContent>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={`/images/products/${product.href}`}
                      alt="Image"
                      fill
                      className="rounded-md object-cover border border-black"
                    />
                  </AspectRatio>
                </CardContent>
                <CardFooter>
                  <p>{product.title}</p>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expansion;
