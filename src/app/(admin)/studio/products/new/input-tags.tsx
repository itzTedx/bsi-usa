'use client'

import { Dispatch, forwardRef, SetStateAction, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { XIcon } from 'lucide-react'

import { Input, InputProps } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

type InputTagsProps = InputProps & {
  value?: string[] | null
  onChange: Dispatch<SetStateAction<string[]>>
}

export const InputTags = forwardRef<HTMLInputElement, InputTagsProps>(
  ({ value, onChange, ...props }, ref) => {
    const [pendingDataPoint, setPendingDataPoint] = useState<string>('')
    const [focused, setFocused] = useState(false)

    function addPendingDataPoint() {
      if (pendingDataPoint) {
        if (value) {
          const newDataPoints = new Set([...value, pendingDataPoint])
          onChange(Array.from(newDataPoints))
          setPendingDataPoint('')
        }
      }
    }

    const { setFocus } = useFormContext()

    return (
      <div
        onClick={() => setFocus('tag')}
        className={cn(
          'flex min-h-[20px] w-full rounded-md border border-input bg-background px-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          focused
            ? 'ring-offset-2 outline-none ring-ring ring-2'
            : 'ring-offset-0 outline-none ring-ring ring-red-700'
        )}
      >
        <motion.div className="rounded-md min-h-[2.5rem] p-2 flex gap-2 flex-wrap items-center">
          <AnimatePresence>
            {value &&
              value.map((tag) => (
                <motion.div
                  animate={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  exit={{ scale: 0 }}
                  key={tag}
                  className="flex items-center rounded-md bg-muted"
                >
                  <Badge variant={'secondary'}>{tag}</Badge>
                  <Button
                    className="h-6 px-1 bg-inherit"
                    onClick={() => onChange(value.filter((i) => i !== tag))}
                  >
                    <XIcon className="size-4" />
                  </Button>
                </motion.div>
              ))}
          </AnimatePresence>

          <div className="flex">
            <Input
              className="border-transparent focus-visible:border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Add tags"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault()
                  addPendingDataPoint()
                }
                if (e.key === ',') {
                  e.preventDefault()
                  addPendingDataPoint()
                }
                if (value) {
                  if (
                    e.key === 'Backspace' &&
                    !pendingDataPoint &&
                    value.length > 0
                  ) {
                    e.preventDefault()
                    const newValue = [...value]
                    newValue.pop()
                    onChange(newValue)
                  }
                }
              }}
              value={pendingDataPoint}
              onFocus={() => setFocused(true)}
              onBlurCapture={(e) => setFocused(false)}
              onChange={(e) => setPendingDataPoint(e.target.value)}
              {...props}
            />
          </div>
        </motion.div>
      </div>
    )
  }
)

InputTags.displayName = 'InputTags'
