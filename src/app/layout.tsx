import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aara Fashion",
  description: "Aara Fashion is Aari work website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins md:font-inter">
        <Header/>
      <div className="md:mx-auto md:container px-4 min-h-[200px] my-1 ">
          {children}
        </div>

        <Footer/>
        </body>
    </html>
  );
}
