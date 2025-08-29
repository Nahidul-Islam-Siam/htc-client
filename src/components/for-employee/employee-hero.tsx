"use client";

import Image from "next/image";
import bgImage from "@/assets/home/employee-hero.png";

export default function Home2() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="flex bg-[#F8F7F7]">
      <div className="w-full max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-6 items-center justify-center min-h-[60vh]">
        {/* Left Content */}
        <div className="max-w-lg mx-auto lg:mx-0 text-left lg:text-left">
          {/* Label */}
          <div className="flex items-center h-6 mb-4 max-w-max px-3 py-1 gap-2 bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DE9400] leading-none">
              For Employers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Find the right people for your project
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Let HTC Techniek help you connect with skilled professionals across
            maritime, oil & gas, heavy construction, and more.
          </p>

          {/* CTA Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 w-fit rounded-md transition duration-300 uppercase tracking-wide text-sm shadow-sm hover:shadow">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="relative h-[65vh] md:min-h-[800px] min-h-[400px]">
          <Image
            src={bgImage}
            alt="Industrial worker in safety gear working on equipment"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}