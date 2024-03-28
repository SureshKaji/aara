"use client";
import Header from "@/components/layout/header/header";
import "../globals.css";

import React from "react";
import Footer from "@/components/Footer/footer";
export default function RootLayout({ children }: any) {
  return (
    <body className="font-poppins md:font-inter">
      <Header />
      <div className="md:mx-auto md:container px-4 min-h-[200px] my-1 ">
        {children}
      </div>

      <Footer />
    </body>
  );
}
