import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className="flex items-center" title="Go to homepage">
      <div className="relative h-10 w-14 shrink-0 ">
        <Image
          src="/BSI-logo.png"
          fill
          alt="Digital Desk Logo"
          className="object-contain"
          role="logo"
          aria-hidden
        />
      </div>
      <h6 className="font-bold text-[12px]">BUILDERS SOLUTIONS INC</h6>
    </div>
  )
}

export default Logo
