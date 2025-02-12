"use client";

import LandingPage from "@/components/LandingPage";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-6">
      <NavBar />
      <LandingPage />
    </main>
  );
}

function NavBar() {
  return (
    <nav className="mb-8 flex flex-col md:flex-row items-center justify-between border rounded-xl border-[#197686] py-4 px-2">
      <div className="mb-2 md:mb-0">
        <div className="flex">
      <Image
                src="/icons/logo.svg"
                width={24}
                height={24}
                alt="logo"
                className=""
              />
              <Image
                src="/icons/logo2.svg"
                width={44}
                height={23}
                alt="logo"
                className="ml-3"
              />
              </div>
      </div>
      <div className="text-lg md:text-xl font-bold flex gap-3 md:gap-6 flex-wrap justify-center">
        <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
          Events
        </a>
        <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
          My Tickets
        </a>
        <a href="#" className="text-sm md:text-base text-gray-300 hover:text-white transition-colors">
          About Project
        </a>
      </div>
      <div>
        <Button
        variant="outline"
        className="bg-[#FFFFFF] text-[#0A0C11]">
          <p>MY TICKETS</p>
        <Image
                src="/icons/arrow.svg"
                width={16}
                height={0}
                alt="logo"
                className=""
              />
         </Button>
      </div>
    </nav>
  );
}