import {
  Component,
  GalleryThumbnails,
  Home,
  LineChart,
  Package,
} from 'lucide-react'

export const NAV_LINKS = [
  {
    title: 'Dashboard',
    href: '/studio',
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: 'Categories',
    href: '/studio/categories',
    icon: <Component className="h-4 w-4" />,
  },
  {
    title: 'Products',
    href: '/studio/products',
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: 'Carousel',
    href: '/studio/carousel',
    icon: <GalleryThumbnails className="h-4 w-4" />,
  },
  {
    title: 'Analytics',
    href: '/studio/analytics',
    icon: <LineChart className="h-4 w-4" />,
  },
] as const
