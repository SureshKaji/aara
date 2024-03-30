"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ReactNode } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  interface SidebarLinkGroupProps {
    children: (handleClick: () => void, open: boolean) => ReactNode;
    activeCondition: boolean;
  }

  const SidebarLinkGroup = ({
    children,
    activeCondition,
  }: SidebarLinkGroupProps) => {
    const [open, setOpen] = useState<boolean>(activeCondition);

    const handleClick = () => {
      setOpen(!open);
    };

    return <li>{children(handleClick, open)}</li>;
  };




  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    console.log("run", isOpen);
  };

  return (
    <>
      {/* External button to toggle the sidebar */}


      {/* Sidebar */}
      {isOpen && (
        <div className="bg-[#116466] text-gray-100 flex flex-col h-screen p-2 w-60">
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3">
              <Link href="/admin">
                <span className="text-lg font-semibold">Admin</span>
              </Link>
              <div className="flex justify-end">
                <Menu onClick={toggleSidebar}>
                  {isOpen ? "Hide Sidebar" : "Show Sidebar"}
                </Menu>
              </div>
            </div>



            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
              

              <nav className="mt-5 px-4 py-4 ">

                <div>


                  <ul className="mb-6 flex flex-col gap-1.5">

                    <li>
                      <Link
                        href="/admin"
                        className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
                        Dashboard
                      </Link>
                    </li>
                    

                    <li>
                      <Link
                        href="/admin/users"
                        className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Users
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/admin/contact"
                        className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white"
                      >
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
                        Contact
                      </Link>
                    </li>

                    <li>
                      <Link
                        href=""
                        className="group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                        
                        Products
                      
                        <span className="ml-auto">&#x25BC;</span>
                      </Link>
                     
                      <ul className="ml-8">
                        <li>
                          <Link href="/admin/product/" className="group relative flex items-center gap-2 rounded-md px-4 py-2 font-medium text-sm duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white">
                            
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                          Add Products</Link>
                        </li>
                        <li>
                          <Link href="/admin/product/view_product" className="group relative flex items-center gap-2 rounded-md px-4 py-2 font-medium text-sm duration-300 ease-in-out hover:bg-[#0d3d3e] hover:text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                            View Products</Link>
                        </li>
                       
                      </ul>
                    </li>

                    <li>
                      <Link
                        href="/admin/settings"
                        className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                        Settings
                      </Link>
                    </li>

                  </ul>
                </div>



              </nav>
            </div>


          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

