'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { getCurrentTime } from '@/lib/utils'
import { Icons } from './icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FloatingWhatsapp() {
  const [showMessage, setShowMessage] = useState(false)
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const [message, setMessage] = useState('')

  const router = useRouter()

  useEffect(() => {
    const delay = 1 * 1000
    let timer: NodeJS.Timeout

    if (isPopupVisible) {
      timer = setTimeout(() => {
        setShowMessage(true)
      }, delay)
    }
    // Cleanup the timer on component unmount
    return () => clearTimeout(timer)
  }, [isPopupVisible])

  const handleClick = () => {
    setIsPopupVisible(true)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value)
  }

  const sendMessageToWhatsApp = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/971588102324?text=${encodedMessage}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-3 right-3 z-[99999999]">
      <Popover>
        <PopoverTrigger onClick={handleClick}>
          <div className="bg-green-500 rounded-full size-14">
            <Icons.whatsapp className="fill-white scale-[.65]" />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-[375px] p-0 rounded-xl overflow-hidden shadow-lg"
        >
          <Card className="border-0">
            <CardHeader className="flex flex-row gap-3 bg-rose-700 text-background">
              <div className="relative bg-blue-500 rounded-full size-16">
                <span className="absolute flex w-3 h-3 bottom-1 right-1">
                  <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                  <span className="relative inline-flex w-3 h-3 bg-green-500 rounded-full" />
                </span>
              </div>
              <div className="">
                <CardTitle className="text-xl">Builder Solutions inc</CardTitle>
                <CardDescription className="font-light text-background">
                  Typically replies within 1 hour
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="bg-[url('/whatsapp-bg.jpg')] bg-cover">
              <div className="relative pt-4 h-[170px] ml-3 border-0">
                <div className="whatsapp-clip z-[999] absolute inline-block w-0 h-0 top-4 -left-3" />
                <div className="p-3 px-4 rounded-lg shadow-md bg-rose-700 text-background w-fit">
                  {showMessage ? (
                    <>
                      <h6 className="pb-1 pr-12 font-bold">
                        Builder Solution inc
                      </h6>
                      <p className="text-sm">
                        Hello there! 🤝
                        <br />
                        How can we help?{' '}
                      </p>
                      <aside className="text-xs text-right">
                        {getCurrentTime()}
                      </aside>
                    </>
                  ) : (
                    <div className="flex items-center h-4">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-3 bg-muted">
              <Input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="rounded-full"
              />
              <Button
                onClick={sendMessageToWhatsApp}
                type="submit"
                variant={'ghost'}
                size={'icon'}
                className="px-2 ml-2"
              >
                <Icons.send className="fill-muted-foreground" />
              </Button>
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  )
}
