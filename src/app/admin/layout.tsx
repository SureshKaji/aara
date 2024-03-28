'use client'
import "../globals.css";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";
export default function RootLayout({ children }: any) {
  return (

    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
      {children}
      </div>
    </div>
  );
}
