'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export const Magnetic = ({
  children,
  stiffness = 140,
}: {
  children: React.ReactNode
  stiffness?: number
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  const mouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { width, height, top, left } = ref.current!.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)
    setPosition({ x, y })
  }

  const onMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const { x, y } = position

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={onMouseLeave}
      animate={{ x, y }}
      transition={{ type: 'spring', stiffness, damping: 15, mass: 0.2 }}
      className="cursor-pointer w-fit"
    >
      {children}
    </motion.div>
  )
}
