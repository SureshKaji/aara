import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const HeroBanner = () => {
    return (
        <div className="p-2 w-full">
            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-[#116466] sm:text-6xl">
                                All aari work collections 
                            </h1>
                            <p className="mt-4 text-xl text-gray-500">
                                At AaraFashion.Com, We undertake Aari work, Hand work orders from Boutiques and Tailor shops and do at lowest rate in Market
                               aari, zardoshi, maggam work, mirror work, cut work, bead work, machine embroidery, saree tassels and all kind of orders taken
                                
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari1.jpg"}
                                                        alt="img1"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari7.jpeg"}
                                                        alt="img2"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari2.jpeg"}
                                                        alt="img3"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari3.jpeg"}
                                                        alt="img4"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari4.jpg"}
                                                        alt="img4"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari5.jpeg"}
                                                        alt="img5"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                                    <Image
                                                        width={300}
                                                        height={300}
                                                        src={"/svg/aari6.jpeg"}
                                                        alt="img6"
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/products"
                                    className="inline-block rounded-md border border-transparent bg-[#116466] px-8 py-3 text-center font-medium text-white hover:bg-[#116566e6]"
                                >
                                    Explore More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
