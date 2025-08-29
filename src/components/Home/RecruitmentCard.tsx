"use client";

import Image from "next/image";
import overImg from "@/assets/requirment/image 43.png";

export function RecruitmentCard() {
  return (
    <div className="max-w-7xl mx-auto my-16 md:my-20 relative">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative z-10">
        
        {/* Left Card: Content */}
        <div className="bg-[#292524] text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Earn €1500!</h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
            You will receive a recruitment bonus of €1500 gross in total. This
            amount applies per candidate that you recommend. Your network is
            worth gold!
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 w-fit rounded-md transition duration-300 text-sm sm:text-base">
            VIEW ALL VACANCIES
          </button>
        </div>

        {/* Right Card: Background */}
        <div 
          className="relative rounded-lg shadow-lg overflow-hidden min-h-[280px] md:min-h-[350px]"
          style={{
            backgroundImage: "url(/images/Hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Keep this empty if image will be outside */}
        </div>
      </div>

      {/* Overlay Image outside the card */}
      <div className="absolute bottom-1 md:-right-5 lg:bottom-0 lg:-top-32 right-0 w-[400px] 
      lg:w-[600px] pointer-events-none z-10">
        <Image
          src={overImg}
          alt="Overlay image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
