"use client";
import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

    console.log("run", isOpen);
  };

  return (
    <>
      {/* External button to toggle the sidebar */}
      <button
        className="bg-gray-800 text-gray-100 px-4 py-2 rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? "Hide Sidebar" : "Show Sidebar"}
      </button>

      {/* Sidebar */}
      {isOpen && (
        <div className="bg-gray-800 text-gray-100 flex flex-col h-screen p-3 w-80">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold">Admin</span>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <Link
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700"
                  >
                    <span>Clients</span>
                    <span>
                      <Link href="/admin/settings">Setting</Link>
                    </span>
                  </Link>
                </li>
                {/* Add more sidebar links here */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
