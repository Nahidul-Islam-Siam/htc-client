/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import avatar from "@/assets/avatar.png";

import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "MURAT",
    role: "Mig Mag Welder",
    country: "🇹🇷 Turkey",
  avatar: avatar, // ✅ now uses local image
    quote: "HTC connects everything seamlessly!",
  },
  {
    id: 2,
    name: "STEFAN",
    role: "Foreman Ironworker",
    country: "🇷🇴 Romania",
  avatar: avatar, // ✅ now uses local image
    quote: "HTC really thought along and responded quickly.",
  },
  {
    id: 3,
    name: "ALXANDRU",
    role: "E&I Technician",
    country: "🇲🇩 Moldova",
      avatar: avatar, // ✅ now uses local image
    quote: "Excellent mediation via HTC!",
  },
  {
    id: 4,
    name: "ALEXANDER",
    role: "Pipefitter",
    country: "🇷🇺 Russia",
   avatar: avatar, // ✅ now uses local image
    quote: "Professional team, clear communication, and fast support.",
  },
];

// Single testimonial card
const TestimonialCard = ({ name, role, country, avatar, quote }: any) => (
  <div className="p-5 sm:p-6 flex items-start gap-4 max-w-md w-full">
    {/* Avatar */}
    <Image
      width={56}
      height={56}
      src={avatar}
      alt={name}
      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
    />

    {/* Text content */}
    <div>
      <p className="text-gray-800 text-sm sm:text-base leading-relaxed italic">
        “{quote}”
      </p>
      <p className="mt-2 text-xs sm:text-sm text-gray-600 font-semibold uppercase tracking-wide">
        {name}{" "}
        <span className="normal-case font-normal text-gray-500">
          • {role} {country}
        </span>
      </p>
    </div>
  </div>
);

const Testimonials2: React.FC = () => {
  const swiperRef = useRef<SwiperType>();

  return (
    <section className="max-w-7xl mx-auto py-10 bg-white md:my-20 my-16 sm:py-16 grid grid-cols-1 relative">
      <div className="w-full justify-center items-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-10">
          Trusted by Industry Leaders
        </h2>

        {/* Slider */}
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay]}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="w-full"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials2;
