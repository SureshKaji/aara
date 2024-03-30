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
               We Provide Best Service
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
              Best customized designer boutique at Jaffna
              </h2>
              <p className="mb-5 text-base text-body-color ">
              If you are looking for something unique, Aara Fashion in Jaffna has a wide range of collections to choose from, as well as courteous guidance.
              </p>
              <p className="mb-8 text-base text-body-color">
              Aari embroidered blouses, Bridal blouses, Saree waist belts, Lehengas, and Readymade designer blouses are among our specialty offerings
              </p>

            </div>
          </div>
          </div>
  )
}

export default Service