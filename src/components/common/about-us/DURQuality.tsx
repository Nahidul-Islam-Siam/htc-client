"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import planet from "@/assets/about-us/Planet.png";
import QualityCards from "./QualityCards";
import Link from "next/link";

const DURQuality = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="bg-white w-full max-w-7xl mx-auto h-96 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section>
      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between p-6 sm:p-8 bg-white w-full container mx-auto gap-8 lg:gap-12">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-0">
          {/* Badge */}
          <div className="flex items-center h-6 mb-4 max-w-max px-3 py-1 gap-2 bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DE9400] leading-none">
              Our Quality
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            DNA
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-500">
            We&apos;re built on quality, engagement, and responsibility. Our
            Rotterdam roots inspire a spirit of ambition and reliability. This
            mindset shapes the way we work, the relationships we build, and the
            results we deliver.
          </p>

          {/* CTA Button */}
          <Link
            href="#apply"
            className="inline-flex items-center rounded-md bg-[#F5C518] px-5 py-2.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black/5 hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* Right Side - Planet Image */}
        <div className="relative w-full lg:w-auto lg:ml-8 h-64 sm:h-80 lg:h-[450px] flex justify-center lg:justify-end">
          <div className="relative w-60 h-60 sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] lg:-mt-7">
            <Image
              src={planet}
              alt="Globe representing HTC Techniek's global quality DNA"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quality Cards */}
      <div>
        <QualityCards />
      </div>
    </section>
  );
};

export default DURQuality;