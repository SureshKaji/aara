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
              It is All About My Business 
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
              Fashion Designer In Jaffna
              </h2>
              <p className="mb-5 text-base text-body-color ">
              The Best Designer In Jaffna , Marking Its Territory With Epic Customization And Work Man Ship , Our Designs Have Been Recognised In Both National And International Levels Till Date , We Being Very Enthusiastic About Designs Are Crafted As The Best Designers For Clothing In Jaffna. 
              </p>
              <p className="mb-8 text-base text-body-color">
              We customise outfits that are trendy and outlooking , Starting from basic designs of lehengas , gowns , half sarees , indo western wear we design the bridal wear with hand embroidery which is a trade mark of our designs.
              Fashion designing industry is blooming day to day , it is an influenced by culture and trends , we are responsible for creating creative looks for individual garments
              We Conduct research on the current fashion trends and interpret the same for the clients . We ensure the quality of the soursed fabric and design . until  it reaches the satisfaction of the customer .
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
