import { GetAllContactSubmissions } from "@/action.ts/contact";
import React from "react";

const ContactPage = async () => {
  const data = await GetAllContactSubmissions();
  return (
    
<div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
<h4 className="mb-6 text-xl font-semibold text-black dark:text-white transition-colors duration-300">
    Contact Us Page
    </h4>
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
    <tr className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 text-gray-700">
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            First Name
          </th>
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            Last Name
          </th>
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
           Email
          </th>
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            Message
          </th>
        </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    {data.map((contactUs, index) => {
          return (
            <tr
            key={index}
              className="grid grid-cols-3 sm:grid-cols-5 hover:bg-gray-100 dark:hover:bg-meta-3 transition duration-300"
            >
              <td className="flex items-center gap-3 p-2.5 xl:p-5">
              
                <p className="hidden text-black dark:text-white sm:block">
                {contactUs.firstName}
                </p>
              </td>
              <td className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{contactUs.lastName}</p>
              </td>
              <td className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{contactUs.email}</p>
              </td>
              <td className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{contactUs.message}</p>
              </td>
              <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-[#FF0000] px-4 py-2 text-xs font-medium text-white hover:bg-[#FF5050]"
          >
            Delete
          </a>
        </td>
            </tr>
           );
          })}
      </tbody>
    </table>
  </div>
  );
};

export default ContactPage;
