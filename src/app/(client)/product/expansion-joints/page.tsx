import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const ExpansionJoints = () => {
  return (
    <div>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold">
        Parking Expansion Joints
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/products/parking-exp-hi.jpg"
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <div className="space-y-4 my-9 px-9">
          <div className="flex gap-3 items-center font-semibold mb-3">
            <Image src="/back-arrow.svg" height={30} width={30} alt="" />
            Back to Products
          </div>
          <p>
            This wall + ceiling expansion joint system is surface mounted which
            means it&apos;s perfect for renovations, retrofits and additions.
            The dual odometer seal provides a secure fit and optimal
            flexibility.
          </p>
          <ul className="px-9 list-disc">
            <li>
              Install Condition: Wall/Wall, Floor/Wall, Ceiling/Ceiling,
              Ceiling/Wall
            </li>
            <li>Movement: +/- 25%</li>
            <li>Joint width: 1&quot;-3&quot;</li>
            <li>Optional vapor barrier</li>
            <li>Optional fire rated </li>
            <li>
              Dual odometer seal provides secure fit and optimal flexibility
            </li>
            <li>Seals absorb limited serviceable seismic movement</li>
            <li>Designed for renovation and surface mount installations</li>
            <li>Adaptable on any wall finish</li>
            <li>Easy to clean flush seals</li>
            <li> Clear anodized finish</li>
          </ul>
          <p>Snap-fit design for easy on-site assembly</p>
          <Button>Order Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ExpansionJoints;
