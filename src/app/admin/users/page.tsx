import React from 'react'
import Image from 'next/image';

const brandData: BRAND[] = [
    {
     
      name: "Google",
      visitors: 3.5,
      revenues: "5,768",
      
     
    },
    {
   
      name: "Twitter",
      visitors: 2.2,
      revenues: "4,635",
     
     
    },
    {
     
      name: "Github",
      visitors: 2.1,
      revenues: "4,290",
     
    },
    {
 
      name: "Vimeo",
      visitors: 1.5,
      revenues: "3,580",
      
     
    },
    {
     
      name: "Facebook",
      visitors: 3.5,
      revenues: "6,768",
     
      
    },
  ];
  
  const TableOne = () => {
    return (
      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
         User Registration
        </h4>
  
        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Email
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Password
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
  
        
            </div>
        
        </div>
      </div>
    );
  };
  
  export default TableOne;

export type BRAND = {
   
    name: string;
    visitors: number;
    revenues: string;
   
  };
  
