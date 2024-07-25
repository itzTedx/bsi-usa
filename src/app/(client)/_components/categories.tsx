import Image from "next/image";
import React from "react";

function Categories() {
  return (
    <section className="container my-9">
      <h5 className="font-light text-2xl mb-6">
        <span className="text-rose-600 font-bold">Product </span>
        Categories
      </h5>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/bs.jpg" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Building Solutions</h6>
            <p className="font-light">
              Ensure structural longevity with expansion joints, tile movement
              joints, and trims.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image
            fill
            src="/images/interior-decor.jpg"
            alt=""
            className="-z-30"
          />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Interior Decoration Solutions</h6>
            <p className="font-light">
              Enhance aesthetics, functionality, and comfort with skylights,
              mirrors, cladding, acoustics, raised floors, and cabinets.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/images/bridge.png" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Bridge Solutions</h6>
            <p className="font-light">
              Maintain bridge integrity with our reliable expansion joints.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/images/wall.png" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Wall Protection Solutions</h6>
            <p className="font-light">
              Safeguard walls from damage and enhance their appeal with bollards
              and guards.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/images/cabin.png" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Portable Cabin Solutions</h6>
            <p className="font-light">
              Explore versatile portable cabins to meet your temporary or
              permanent space needs.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
        <div className="relative aspect-[4/3] rounded-md overflow-hidden group">
          <Image fill src="/images/office.png" alt="" className="-z-30" />
          <div className="test-rose-700 absolute bottom-0 p-6 text-background">
            <h6 className="font-bold">Office Solutions</h6>
            <p className="font-light">
              Create a productive environment with acoustics, raised floors, and
              metal cabinets.
            </p>
          </div>
          <span className="absolute h-2/4 group-hover:h-full transition-all bg-gradient-to-b from-accent/0 via-accent/00 to-accent/70 w-full bottom-0 left-0 select-none -z-20" />
        </div>
      </div>
    </section>
  );
}

export default Categories;
