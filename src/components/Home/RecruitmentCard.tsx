"use client";

import Image from "next/image";
import overImg from "@/assets/requirment/image 43.png";
import Link from "next/link";

export function RecruitmentCard() {
  return (
    <div className="max-w-7xl mx-auto my-16 md:my-20 relative">
      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative z-10">
        
        {/* Left Card: Content (Text Updated) */}
        <div className="bg-[#292524] text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Refer a Friend, Earn a Bonus
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
            Know someone who would be a great fit for our team? If you recommend a candidate and we hire them, you&rsquo;ll receive a referral bonus as a thank-you!
          </p>

          <p className="text-gray-300 mb-2 leading-relaxed text-sm sm:text-base">
            It&rsquo;s simple:
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-6 text-sm sm:text-base">
            <li>Share your colleague&rsquo;s details with us.</li>
            <li>If they join our team, you get rewarded.</li>
          </ul>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
            Help us grow with the right people and enjoy a bonus for your great recommendation.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 w-fit rounded-md transition duration-300 text-sm sm:text-base">
        <Link href="/vacancies">
            VIEW ALL VACANCIES
        </Link>
          </button>
        </div>

        {/* Right Card: Background (Unchanged) */}
        <div 
          className="relative rounded-lg shadow-lg overflow-hidden min-h-[280px] md:min-h-[350px]"
          style={{
            backgroundImage: "url(/images/Hero.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Overlay Image (Unchanged) */}
      <div className="absolute bottom-1 md:-right-5 lg:bottom-0 lg:-top-32 right-0  w-[400px] lg:w-[675px] pointer-events-none z-10">
        <Image
          src={overImg}
          alt="Overlay image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}