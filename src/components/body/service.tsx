import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <div className="flex flex-col max-w-xl lg:max-w-full  lg:flex-row-reverse min-h-96">
            <div className="flex items-center justify-center mr-8 flex-1 mb-8 lg:flex-3 h-72 lg:justify-end sm:h-80 lg:h-96 lg:mb-0">
            <div className="">
              <Image
              className="rounded-2xl"
                src={"/svg/service.jpeg"}
                alt=""
                height={700}
                width={700}
                
              />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2  xl:w-5/12">
            <div className="mt-5 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 text-base text-body-color ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p className="mb-8 text-base text-body-color">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>

            </div>
          </div>
          </div>
  )
}

export default Service