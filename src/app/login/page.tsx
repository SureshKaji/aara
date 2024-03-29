import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const LoginPage = () => {
  return (
    
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="sm:text-3xl md:text-4xl text-2xl font-bold">
            Welcome to  <span className='text-[#116466] '>Aara Fashion </span>
          </h1>

          <p className="mt-4 text-gray-500">
           Login to Admin Dashboard
          </p>
        </div>
{/*        
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> 
          </div> */}
    
        <form
        
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
                placeholder="test@gmail.com"
                required
                name="email"
            
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="w-full rounded-lg border-gray-200 border p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter password"
                required
                name="password"
           
              />
            </div>
          </div>

          <div className="flex items-center justify-between">

            <Button
              type="submit"
              className="rounded-lg bg-[#116466] hover:bg-[#116566e6] item-center md:px-20 py-3 text-sm font-medium text-white">
                Login
            </Button>

          </div>
        </form>
       
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <Image
          fill
          alt="Welcome"
          src={"/svg/aari1.jpg"}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
  )
}

export default LoginPage