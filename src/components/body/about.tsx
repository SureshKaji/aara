import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="w-full flex flex-col">
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
      <div className="mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <Image
                    width={300}
                    height={400}
                    src={"/svg/4.jpeg"}
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <Image
                    width={300}
                    height={400}
                    src={"/svg/3.jpeg"}
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <Image
                    width={300}
                    height={400}
                    src={"/svg/2.jpeg"}
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2  xl:w-5/12">
            <div className="mt-5 lg:mt-0">
              <span className="block mb-4 text-lg font-semibold text-primary">
                About US
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 text-base text-body-color ">
               Embrace the timeless allure of saree blouse on our website, 
               where each click unveils a world of elegance. Just as a reader is captivated by the engaging layout of a page, 
               immerse yourself in the captivating designs and exquisite craftsmanship of our saree blouse collections. 
              </p>
              <p className="mb-8 text-base text-body-color">
              unparalleled shopping experience, where the allure of traditional attire meets the convenience 
              of online browsing. Step into our digital boutique and discover why saree bloues are more than just fabric 
              they are a narrative of culture and style. 
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default About
