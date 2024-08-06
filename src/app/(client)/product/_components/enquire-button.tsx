'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function EnquireButton({ product }: { product: string }) {
  const router = useRouter()
  return (
    <Button
      onClick={() => {
        router.push(`/contact?product=${product}`)
      }}
    >
      Enquire Now
    </Button>
  )
}
