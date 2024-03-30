import React from 'react';

const ClientProfile = () => {
  return (

    <div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        <div className="h-32 rounded-2xl border border-blue-100 bg-white shadow-lg">
          <div className='flex flex-row p-4 justify-between'>
            <div className='text-xl font-medium mt-4 text-[#116466]'>
              Total Users
            </div>
            <div className='mt-4 text-xl font-medium text-[#116466]'>15</div>
          </div>
          <div className='ml-5'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#116466"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" /></svg></div>
        </div>
        <div className="h-32 rounded-2xl border border-blue-100 bg-white shadow-lg">
          <div className='flex flex-row p-4 justify-between'>
            <div className='text-xl font-medium mt-4 text-[#116466]'>
              Total Products
            </div>
            <div className='mt-4 text-xl font-medium text-[#116466]'>40</div>
          </div>
          <div className='ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#116466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg></div>
        </div>
        <div className="h-32 rounded-2xl border border-blue-100 bg-white shadow-lg">
          <div className='flex flex-row p-4 justify-between'>
            <div className='text-xl font-medium mt-4 text-[#116466]'>
              Total Contects
            </div>
            <div className='mt-4 text-xl font-medium text-[#116466]'>20</div>
          </div>
          <div className='ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#116466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-book-user"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /><circle cx="12" cy="8" r="2" /><path d="M15 13a3 3 0 1 0-6 0" /></svg></div>
        </div>
        <div className="h-32 rounded-2xl border border-blue-100 bg-white shadow-lg">
          <div className='flex flex-row p-4 justify-between'>
            <div className='text-xl font-medium mt-4 text-[#116466]'>
              Total Reviews
            </div>
            <div className='mt-4 text-xl font-medium text-[#116466]'>5</div>
          </div>
          <div className='ml-5'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#116466" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
        </div>
      </div>

      <div className='mt-3 flex flex-row gap-4'>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-[#116466] p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </span>

            <p className="font-medium sm:text-lg">New message!</p>
          </div>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
            blanditiis voluptates eum. Nam, cum minima?
          </p>

          <div className="mt-6 sm:flex sm:gap-4">
            <a
              className="inline-block w-full rounded-lg bg-[#116466] px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              href="#"
            >
              Take a Look
            </a>

            <a
              className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
              href="#"
            >
              Mark as Read
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8" role="alert">
          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-[#116466] p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </span>

            <p className="font-medium sm:text-lg">New message!</p>
          </div>

          <p className="mt-4 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea quo unde vel adipisci
            blanditiis voluptates eum. Nam, cum minima?
          </p>

          <div className="mt-6 sm:flex sm:gap-4">
            <a
              className="inline-block w-full rounded-lg bg-[#116466] px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              href="#"
            >
              Take a Look
            </a>

            <a
              className="mt-2 inline-block w-full rounded-lg bg-gray-50 px-5 py-3 text-center text-sm font-semibold text-gray-500 sm:mt-0 sm:w-auto"
              href="#"
            >
              Mark as Read
            </a>
          </div>
        </div>
      </div>
    </div>




  );
};


export default ClientProfile;