import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const RegisterPage = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Pattern"
            src={"/svg/aari1.jpg"}
            className="absolute inset-0 h-full w-full object-cover rounded-xl"
            layout="fill"
            objectFit="cover"
          />
        </aside>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to <span className='text-[#116466] '>Aara Fashion </span>
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Signup to get started with Aara
            </p>
    
            <form className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-800"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="name"
                  required
                  placeholder="name"
                  className="mt-1 h-10 px-2  w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  placeholder="test@gmail.com"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6 ">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-800"
                >
                  {" "}
                  Password{" "}
                </label>

                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  placeholder="*********"
                  className="mt-1 h-10 px-2 w-full rounded-md border-gray-200 bg-white border text-sm text-gray-800 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    required
                    className="h-5 w-5 rounded-md border-gray-200 bg-white border shadow-sm"
                  />

                  <span className="text-sm text-gray-800">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button
                  className="rounded-md  bg-[#116466] hover:bg-[#116566e6] px-12 py-3 text-sm font-medium text-white "
                  type="submit"
                >
            Create account
                </Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <Link
                    href="/login"
                    className="text-gray-800 underline mx-1"
                  >
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  )
}

export default RegisterPage
