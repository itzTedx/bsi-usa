import { Button } from '@/components/ui/button'
import CarouselForm from './carousel-form'
import Link from 'next/link'

export default function Carousels() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Banner</h1>
        <Button variant={'outline'} asChild>
          <Link href="/studio/products">Add new Banner</Link>
        </Button>
      </div>
      <div className="flex flex-1 p-0 md:border md:border-dashed sm:shadow-sm md:p-6 sm:rounded-lg">
        <CarouselForm />
      </div>
    </>
  )
}
