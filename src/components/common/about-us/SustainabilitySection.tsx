"use client"; 

import React from "react";
import Image from "next/image";

import Car from "@/assets/about-us/Sustainbility/car.png";
import Building from "@/assets/about-us/Sustainbility/building.png";
import Laptop from "@/assets/about-us/Sustainbility/laptop.png";
import Frame from "@/assets/about-us/Sustainbility/Frame.png";

const data = [
  {
    img: Car,
    title: "Efficient transportation",
    description:
      "We minimize travel movements and increasingly opt for sustainable transport solutions, such as carpooling and electric vehicles.",
  },
  {
    img: Building,
    title: "Sustainable offices",
    description:
      "Our facilities are energy-efficient, and where possible, we use green electricity.",
  },
  {
    img: Laptop,
    title: "Digitalization",
    description:
      "By promoting digital processes and online meetings, we reduce unnecessary paper usage and travel.",
  },
  {
    img: Frame,
    title: "Working with sustainable partners",
    description:
      "We collaborate with suppliers and clients who share the same commitment to sustainability.",
  },
];

const SustainabilitySection: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 mb-6 w-full max-w-7xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-start p-8 border-r border-b border-gray-100 bg-white cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:shadow-xl hover:-translate-y-1 rounded-lg"
          >
            {/* Glow-like background on hover */}
            {/* <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

            {/* Icon */}
            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 z-10 relative">
              <Image
                src={item.img}
                alt={item.title}
                width={30}
                height={30}
                className="drop-shadow-md"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300  z-10 relative">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed z-10 relative">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilitySection;