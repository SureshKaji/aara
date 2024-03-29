import { GetUser } from "@/action.ts/user";
import React from "react";

const TableOne = async () => {
  const data = await GetUser();
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        User Registration
      </h4>
      <table className="w-full">
        <thead>
          <tr className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <th className="p-2.5 xl:p-5 text-sm font-medium uppercase xsm:text-base">
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
              <tr key={index} className="grid grid-cols-3 sm:grid-cols-5">
                <td className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="flex-shrink-0"></div>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableOne;
