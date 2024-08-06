import Explore from '@/components/HeadAnim'
import About from './_components/about'
import Billboard from './_components/billboard'
import Categories from './_components/categories'
import Experience from './_components/experience'
import Products from './_components/products'
import { db } from '@/server'

export default async function Home() {
  const carousel = await db.query.carousel.findMany()

  return (
    <section className="space-y-24">
      <Billboard data={carousel} />
      <About />
      <Explore head="EXPLORE OUR" text="Products" />
      <Categories />
      <Experience />
      <Products />
    </section>
  )
}
