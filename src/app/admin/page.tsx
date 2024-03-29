import React from 'react';

const ClientProfile = () => {
  return (

    <div className='flex flex-row gap-5' >
    <div className="p-6 bg-white rounded-md shadow-md grid grid-rows-4">
    <h2 className="text-lg font-semibold mb-4 row-span-1">Adams, John & Abigail</h2>
    <form className="row-span-3">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add more form fields here */}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  <div className="p-6 bg-white rounded-md shadow-md grid grid-rows-4">
    <h2 className="text-lg font-semibold mb-4 row-span-1">Adams, John & Abigail</h2>
    <form className="row-span-3">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add more form fields here */}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>
  <div className="p-6 bg-white rounded-md shadow-md grid grid-rows-4">
    <h2 className="text-lg font-semibold mb-4 row-span-1">Adams, John & Abigail</h2>
    <form className="row-span-3">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add more form fields here */}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  </div>



  </div>
  
  );
};

export default ClientProfile;