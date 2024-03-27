import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SocialNavbar = () => {
  return (
    <>
     <div className="hidden md:block bg-[#116466]">
        <div className="md:mx-auto md:container flex justify-between text-white text-sm  py-2.5 font-normal ">
          <p>Welcome to AaraFashion</p>

          <div className="flex gap-4">
            <Link href={''} className="flex gap-2">
              <Image alt="icon" src={"/svg/call.svg"} width={15} height={15} />
              <p>075 540 3432</p>{" "}
            </Link>
        
            <Link
              target="_blank"
              href={""}
              className="flex gap-2"
            >
              <Image
                alt="icon"
                src={"/svg/facebook.svg"}
                width={10}
                height={10}
              />
            </Link>
            
            <Link
              target="_blank"
              href={""}
              className="flex gap-2"
            >
              <Image
                alt="icon"
                src={"/svg/whatsapp.svg"}
                width={15}
                height={15}
              />
             
            </Link>

            <Link
              target="_blank"
              href={""}
              className="flex gap-2"
            >
              <Image
                alt="icon"
                src={"/svg/twitter.svg"}
                width={15}
                height={15}
              />
             
            </Link>

            <Link
              target="_blank"
              href={""}
              className="flex gap-2"
            >
              <Image
                alt="icon"
                src={"/svg/linkedin.svg"}
                width={15}
                height={15}
              />
             
            </Link>
            
    
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialNavbar