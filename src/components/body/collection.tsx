import React from 'react'
import Image from 'next/image'

const Collection = () => {
  return (
    <section className="p-2 my-6 ">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#116466]">
            <Image
                alt="icon"
                src={"/svg/bucket.svg"}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">150+</p>
              <p className="capitalize">Buyers</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#116466]">
            <Image
                alt="icon"
                src={"/svg/smile.svg"}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">100+</p>
              <p className="capitalize">satisfied</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#116466]">
            <Image
                alt="icon"
                src={"/svg/heart.svg"}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">100%</p>
              <p className="capitalize">Care and experience</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#116466]">
            <Image
                alt="icon"
                src={"/svg/secure.svg"}
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leadi">100%</p>
              <p className="capitalize">Guarantee and trust</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Collection