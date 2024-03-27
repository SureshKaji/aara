import Image from "next/image";
import HeroBanner from "@/components/body/herobanner";
import Collection from "@/components/body/collection";
import Divider from "@/components/body/divider";
import Products from "@/components/body/products";
import About from "@/components/body/about";
import Service from "@/components/body/service";
import { Import } from "lucide-react";
import Review from "@/components/body/review";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <HeroBanner />
        <Collection />
        <Divider />
        <Products />
        <About />
        <Service />
        <Review/>
        


      </div>

    </>
  );
}
