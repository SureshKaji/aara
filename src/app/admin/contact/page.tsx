import React from 'react'
import Image from 'next/image';

const brandData: USER[] = [ ];
  
  const TableOne = () => {
    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Contact Details
        </h4>
  
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                First Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Last Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email Address
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
               Messages
              </h5>
            </div>
            
            
          </div>

            <div className="grid grid-cols-3 sm:grid-cols-5">
              <div className="flex items-center gap-3 p-2.5 xl:p-5">
                <div className="flex-shrink-0">
                
                </div>
                <p className="hidden text-black dark:text-white sm:block">Kaji</p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">K</p>
              </div>
  
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">$</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">$</p>
              </div>
  
        
            </div>
        
        </div>
      </div>
    );
  };
  
  export default TableOne;

export type USER = {
   
    name: string;
    email: string;
    password: string;
   
  };
  
