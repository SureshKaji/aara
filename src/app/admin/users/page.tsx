import { GetUser } from "@/action.ts/user";
import React from "react";

const TableOne = async () => {
  const data = await GetUser();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
    <h4 className="mb-6 text-xl font-semibold text-black dark:text-white transition-colors duration-300">
      User Registration
    </h4>
    <table className="w-full table-auto">
      <thead>
        <tr className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 text-gray-700">
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            Name
          </th>
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            Email
          </th>
          <th className="p-2.5 text-center xl:p-5 text-sm font-medium uppercase xsm:text-base">
            Password
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr
              key={index}
              className="grid grid-cols-3 sm:grid-cols-5 hover:bg-gray-100 dark:hover:bg-meta-3 transition duration-300"
            >
              <td className="flex items-center gap-3 p-2.5 xl:p-5">
              
                <p className="hidden text-black dark:text-white sm:block">
                  {user.username}
                </p>
              </td>
              <td className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{user.email}</p>
              </td>
              <td className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{user.password}</p>
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

export default TableOne;
