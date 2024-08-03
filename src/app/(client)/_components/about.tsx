import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

function About() {
  return (
    <section className="grid items-center max-w-6xl p-6 mx-auto md:grid-cols-2 gap-14 my-9">
      <div className="relative flex-shrink-0 aspect-square">
        <Image src="/about-rec.png" fill alt="" />
      </div>
      <div className="">
        <h5 className="text-3xl font-bold text-rose-600">About Us</h5>
        <p className="mt-3 leading-7 text-balance">
          At Builders Solutions Inc, we hold a profound belief: the pursuit of
          &apos;better&apos; is not a solitary endeavor, but a collaborative
          journey fueled by shared opportunities. With a steadfast commitment to
          understanding and addressing our customer&apos;s diverse and intricate
          challenges, Builders Solutions Inc. emerges as a pioneering force in
          architectural product problem-solving. Our approach is simple yet
          trans-formative: we listen, we learn, and we innovate. This unwavering
          dedication to our customer&apos;s needs has propelled many of our
          solutions to the forefront of industry standards. Innovation
          isn&apos;t just a buzzword for us; it&apos;s a way of life. By
          embracing complexity and fostering collaboration, we continuously push
          the boundaries of what&apos;s possible, setting new benchmarks for
          excellence in the process. Join us at Builders Solutions Inc as we
          pave the way for a future where people and buildings thrive together,
          united by the pursuit of better.
        </p>
        <div className="flex gap-4 mt-3">
          <Link
            href="/about"
            className={buttonVariants({ variant: 'primary' })}
          >
            More
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: 'outline' })}
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
