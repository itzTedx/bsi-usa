import ProductCard from '../_components/product-card'

const TEMP_CATEGORIES = [
  {
    title: 'Expansion Joints',
    image: '/images/expansion-joints.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Movement Joints',
    image: '/movement-joints 1.png',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Tile Trims',
    image: '/images/tile-trims.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Carpet Trims',
    image: '/images/carpet-trims.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Skirting',
    image: '/images/skirting.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Stair Nosing',
    image: '/images/stair-nosing.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Wall Gaurds',
    image: '/images/Wall Gaurds.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Silent Pods',
    image: '/images/Silent Pods.jpg',
    link: '/categories/expansion-joints',
  },
  {
    title: 'Solar Skylights',
    image: '/images/Solar Skylights.jpg',
    link: '/categories/expansion-joints',
  },
]

const ProductsPage = () => {
  return (
    <section>
      <h2 className="w-full h-60 bg-blue-950 text-white about-billboard grid place-content-center text-6xl font-bold px-6 md:px-0">
        Product Categories
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container gap-6 my-9 md:my-16">
        {TEMP_CATEGORIES.map((product, i) => (
          <ProductCard key={i} product={product!} />
        ))}
      </div>
    </section>
  )
}

export default ProductsPage
