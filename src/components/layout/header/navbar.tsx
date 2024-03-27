import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className="w-full relative">
            <header className="bg-white ">
                <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link className="block text-teal-600" href="/">
                        <span className="sr-only">Home</span>
                        <Image
                alt="icon"
                src={"/svg/logo.svg"}
                width={80}
                height={15}
              />
                    </Link>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block ">
                            <ul className="flex items-center gap-6 text-sm ">

                            <li
                                    className="relative"
                                >
                                    <Link
                                        href={"/"}
                                        className="text-gray-800 transition hover:text-[#116466] cursor-pointer "
                                    >
                                        Home
                                    </Link>

                                </li>

                                <li>
                                    <Link
                                        className="text-gray-800 transition hover:text-[#116466] "
                                        href="/about"
                                    >
                                        About Us
                                    </Link>
                                </li>

                                <li
                                    className="relative"
                                >
                                    <Link
                                        href={"/product"}
                                        className="text-gray-800 transition hover:text-[#116466] cursor-pointer "
                                    >
                                        Products
                                    </Link>

                                </li>


                                <li>
                                    <Link
                                        className="text-gray-800 transition hover:text-[#116466] "
                                        href="/contact">
                                        Contact Us
                                    </Link>
                                </li>

                            </ul>
                        </nav>

                        <div className="flex items-center gap-2">
                    
                            <div className="sm:flex sm:gap-4">
                                <Link
                                    href="/login"
                                    className="block rounded-md bg-[#116466] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#116566e6] ">
                                    Login
                                </Link>

                                <Link
                                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#2f4550] transition hover:text-[#116466]/75 sm:block"
                                    href="/register"
                                >
                                    Register
                                </Link>
                            </div>

                            <button
                
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75  md:hidden gap-2"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              

                           
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default NavBar