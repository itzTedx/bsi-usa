import { Home, LineChart, Package } from 'lucide-react'
import { FcFlowChart } from 'react-icons/fc'

export const NAV_LINKS = [
  {
    title: 'Dashboard',
    href: '/studio',
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: 'Categories',
    href: '/studio/categories',
    icon: <FcFlowChart className="h-4 w-4" />,
  },
  {
    title: 'Products',
    href: '/studio/products',
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: 'Analytics',
    href: '/studio/analytics',
    icon: <LineChart className="h-4 w-4" />,
  },
]
