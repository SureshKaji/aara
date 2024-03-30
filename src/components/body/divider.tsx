import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
const Divider = () => {
  return (
    <section className="bg-[#116466] text-gray-50 mt-14 p-0">
        <div className=" justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-around lg:flex lg:flex-row">
          <div className="flex flex-col space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-bold leading-none">
            Follow the page for more collection
            </h2>
            <p className="px-4 text-lg lg:px-0">
              {" "}
              When I add something new, you will be the first to know{" "}
            </p>
          </div>
          <div className="flex flex-row items-center self-center justify-center flex-shrink-0 lg:justify-end">
            <Link href="/home/product">
              <Button
                variant="outline"
                size="lg"
                className="text-black dark:text-white"
              >
                See More
              </Button>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Divider
