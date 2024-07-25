import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold">
        About Us
      </h2>
      <div className="max-w-5xl mx-auto space-y-4 my-12 px-4 md:px-0">
        <h5 className="font-bold text-xl">
          Transforming Spaces, Empowering Lives: Builders Solutions Inc - Where
          People, Buildings, and Better Meet
        </h5>
        <p>
          At Builders Solutions Inc, we hold a profound belief: the pursuit of
          &apos;better&apos; is not a solitary endeavor, but a collaborative
          journey fueled by shared opportunities. With a steadfast commitment to
          understanding and addressing our customers&apos; diverse and intricate
          challenges, Builders Solutions Inc. emerges as a pioneering force in
          architectural product problem-solving. Our approach is simple yet
          trans-formative: we listen, we learn, and we innovate. This unwavering
          dedication to our customers&apos; needs has propelled many of our
          solutions to the forefront of industry standards. Innovation
          isn&apos;t just a buzzword for us; it&apos;s a way of life. By
          embracing complexity and fostering collaboration, we continuously push
          the boundaries of what&apos;s possible, setting new benchmarks for
          excellence in the process. Join us at Builders Solutions Inc as we
          pave the way for a future where people and buildings thrive together,
          united by the pursuit of &apos;better.&apos;
        </p>
        <h5 className="font-bold text-xl">Social Responsibility: </h5>
        <p>
          &apos;Building for the greater good&apos; is more than just a
          motto—it&apos;s our commitment to creating positive change. Every day,
          we tackle intricate design and construction challenges while
          prioritizing sustainability and well-being. At Builders Solutions Inc,
          we understand the profound impact our choices have on both people and
          the planet. That&apos;s why we go beyond conventional practices,
          utilizing high-quality, sustainable products that not only meet the
          highest standards of performance but also prioritize the health and
          well-being of all stakeholders. With each project we undertake, we
          strive to leave a lasting legacy of responsible construction,
          enriching communities, and fostering a brighter, healthier future for
          generations to come.
        </p>
        <Button variant="outline">Contact us</Button>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 md:my-20 gap-16 px-4 md:px-0">
        <div className="relative aspect-square">
          <Image
            fill
            src={'/images/skyscrapper.jpg'}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Vision</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            At Builders Solutions Inc., our vision is to become the foremost
            facilitator of seamless and sustainable construction projects
            worldwide. We aspire to be the preferred partner for businesses
            seeking efficient international construction solutions, emphasizing
            smooth operations and a steadfast commitment to sustainability. Our
            vision highlights our dedication to leading the industry towards a
            more sustainable and interconnected future.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 md:my-20 gap-16 px-4 md:px-0">
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Mission</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            Our mission at Builders Solutions Inc. is to bridge the gap between
            businesses and the highest quality building materials through
            dependable and streamlined trade practices. We are committed to
            fostering enduring partnerships built on a foundation of integrity
            and excellence. By prioritizing reliability and efficiency, we aim
            to empower businesses to achieve their construction goals while
            upholding the highest standards of quality and trust.
          </p>
        </div>
        <div className="relative aspect-square">
          <Image
            fill
            src={'/images/arabic-person-desery.jpg'}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 md:my-20 gap-16 px-4 md:px-0">
        <div className="relative aspect-square">
          <Image
            fill
            src={'/images/dubai.jpg'}
            alt=""
            className="rounded-xl overflow-hidden object-cover"
          />
        </div>
        <div>
          <h3 className="text-accent font-bold text-4xl">Our Commitment</h3>
          <p className="mt-9 text-xl leading-8 font-light">
            At Builders Solutions Inc., our commitment to sustainability drives
            every decision we make. We are dedicated to preserving the
            environment today to ensure a better tomorrow. Through innovative
            practices and the use of sustainable materials, we aim to create a
            lasting positive impact on our communities and the planet.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutPage
