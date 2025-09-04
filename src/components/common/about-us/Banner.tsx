"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import bannner1 from "@/assets/about-us/banner/HSM - wind energy project 1.jpeg";
import bannner2 from "@/assets/about-us/banner/HSM - wind energy project 2 (2).jpeg";
import bannner3 from "@/assets/about-us/banner/Project site - Alfa 1.jpeg";
import bannner4 from "@/assets/about-us/banner/Project site - Alfa 2.jpeg";
import bannner5 from "@/assets/about-us/banner/photo 1.jpeg";

import bannner6 from "@/assets/about-us/banner/photo 2.jpeg";
import bannner7 from "@/assets/about-us/banner/photo 3.jpeg";
import bannner8 from "@/assets/about-us/banner/photo 4.jpeg";
import bannner9 from "@/assets/about-us/banner/photo 5.jpeg";
import bannner10 from "@/assets/about-us/banner/photo 6.jpeg";
import bannner11 from "@/assets/about-us/banner/photo 7.jpeg";
import bannner12 from "@/assets/about-us/banner/photo 8.jpeg";
import bannner13 from "@/assets/about-us/banner/photo 9.jpeg";

import bannner14 from "@/assets/about-us/banner/photo 10.jpeg";
import bannner15 from "@/assets/about-us/banner/photo 11.jpeg";
import bannner16 from "@/assets/about-us/banner/photo 12.jpeg";
import bannner17 from "@/assets/about-us/banner/photo 13.jpeg";
import bannner18 from "@/assets/about-us/banner/photo 14.jpeg";
import bannner19 from "@/assets/about-us/banner/photo 15.jpeg";
import bannner20 from "@/assets/about-us/banner/photo 16.jpeg";
import bannner21 from "@/assets/about-us/banner/photo 17.jpeg";
import bannner22 from "@/assets/about-us/banner/photo 18.jpeg";
import bannner23 from "@/assets/about-us/banner/photo 19.jpeg";
import bannner24 from "@/assets/about-us/banner/photo 20.jpeg";
import bannner25 from "@/assets/about-us/banner/photo 21.jpeg";
import bannner26 from "@/assets/about-us/banner/photo 22.jpeg";




// Removed: import { motion } from "framer-motion";

function Banner() {
  const images = [bannner1, bannner2, bannner3, bannner4, bannner5, bannner6, bannner7, bannner8, bannner9, bannner10, bannner11, bannner12, bannner13, bannner14, bannner15, bannner16, bannner17, bannner18, bannner19, bannner20, bannner21, bannner22, bannner23, bannner24, bannner25, bannner26];
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="bg-white h-96"></div>;
  }

  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 px-2">
      {/* Top Section */}
      <div className="py-8 flex flex-col md:flex-row gap-6 lg:py-12 border-b border-gray-200">
        {/* Left Column: Badge + Title */}
        <div className="md:w-1/2 w-full">
          {/* Badge */}
          <div className="flex items-center h-6 mb-4 max-w-max px-3 py-1 gap-2 bg-[rgba(250,187,0,0.15)] backdrop-blur-sm bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DE9400] leading-none">
              About HTC Techniek
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            HTC Techniek
            <br />
            & de Rotterdamse
            <br />
            mentaliteit
          </h2>
        </div>

        {/* Right Column: Description */}
        <div className="md:w-1/2 w-full">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">
            HTC Techniek is a leading recruitment, secondment, and staffing
            agency specializing in providing highly qualified technical
            specialists from the European Union, Asia, and South America. With
            an extensive network of international technicians, we offer flexible
            solutions that align seamlessly with the needs of our clients.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-4 md:px-6 py-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 h-48 sm:h-56 md:h-60 relative">
                <Image
                  src={src}
                  alt={`Banner image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;