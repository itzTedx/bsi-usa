'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SocialMedia } from './social-media'

const navigationRoutes = [
  'expansion joints',
  'tile movement joints',
  'tile trims',
  'solar skylight',
  'hammered Mirro',
  'Acoustic Materials',
]

const Footer = () => {
  const router = usePathname()

  return (
    <footer className="bg-blue-950 text-neutral-200">
      <div className="grid justify-center grid-flow-row grid-rows-1 gap-3 px-0 py-16 mx-auto space-y-5 text-center md:grid-cols-2 lg:grid-cols-5 lg:grid-flow-col max-w-7xl md:px-5 lg:justify-between lg:space-y-0">
        <div className="flex flex-col justify-between lg:text-left">
          <div className="space-y-2 ">
            <h4 className="text-xl font-semibold text-sky-200">
              Builders Solution inc.
            </h4>
            <p className="text-sm font-light md:text-justify">
              Your one-stop solution for construction needs and specialty
              materials.
            </p>
          </div>
          <div className="pt-6">
            <Link
              href="/privacypolicy"
              className="text-xs font-thin transition-all duration-300 hover:text-sky-400"
              rel="nofollow"
            >
              <h6>Terms of Service and Privacy Policy</h6>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-xl font-semibold text-sky-200">Follow Us</h3>
          <SocialMedia />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-sky-200 md:text-left">
            Products
          </h3>
          <div className="">
            {navigationRoutes.map((singleRoute) => {
              return (
                <NavigationLink
                  key={singleRoute}
                  href={`/${singleRoute}`}
                  text={singleRoute}
                  router={router}
                />
              )
            })}
          </div>
        </div>
        <div className="flex justify-center gap-9">
          <div className="space-y-2 ">
            <h3 className="text-xl font-semibold text-sky-200 lg:text-left">
              Head Office
            </h3>
            <div className="space-y-6 lg:text-left md:space-y-2">
              <div className="flex justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 fill-neutral-300 mt-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
                <Link
                  href="https://goo.gl/maps/djSrXwAjCSwqGefi7"
                  className="transition duration-300 cursor-pointer hover:text-sky-500"
                  target="_blank"
                >
                  1910 Madison Ave.
                  <br /> #2256 Memphis,
                  <br /> Tennessee 38104,
                  <br /> USA
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 fill-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <p>
                  <Link
                    href="tel:+19014670606"
                    className="transition duration-300 cursor-pointer hover:text-sky-500"
                  >
                    +1 901 467 0606
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 fill-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <p>
                  <Link
                    className="transition duration-300 cursor-pointer hover:text-sky-500"
                    href="mailto:info@bsi-usa.com"
                  >
                    info@bsi-usa.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 ">
            <h3 className="text-xl font-semibold text-sky-200 lg:text-left">
              Middle East Office
            </h3>
            <div className="space-y-6 lg:text-left md:space-y-2">
              <div className="flex justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 mt-1.5 fill-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>
                <Link
                  href="https://goo.gl/maps/djSrXwAjCSwqGefi7"
                  className="transition duration-300 cursor-pointer hover:text-sky-500"
                  target="_blank"
                >
                  Compass Building, <br />
                  Ras Al Khaimah,
                  <br />
                  United Arab Emirates
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 fill-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <p>
                  <Link
                    href="tel:+97317791317"
                    className="transition duration-300 cursor-pointer hover:text-sky-500"
                  >
                    +971 50 477 8537
                  </Link>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 lg:justify-start">
                <svg
                  className="w-5 h-5 fill-neutral-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <p>
                  <Link
                    className="transition duration-300 cursor-pointer hover:text-sky-500"
                    href="mailto:info@alliedgulf.me"
                  >
                    info@bsi-usa.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 text-center border-t border-blue-950">
        <p className="text-sm font-light text-neutral-400">
          Copyright © {new Date().getFullYear()}. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer

function NavigationLink({
  href,
  text,
  router,
}: {
  href: string
  text: string
  router: string
}) {
  return (
    <Link
      href={href === '/home' ? '/' : href}
      className={`hover:text-sky-400 transition-all duration-300 capitalize flex py-1 justify-center md:justify-start`}
    >
      {text}
    </Link>
  )
}
