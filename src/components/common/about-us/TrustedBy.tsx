"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import TrustedByLogo1 from "@/assets/about-us/trustedby/Alll Seas Logo.png";
import TrustedByLogo2 from "@/assets/about-us/trustedby/Ballast Nedam Logo.png";
import TrustedByLogo3 from "@/assets/about-us/trustedby/Damen Logo.png";
import TrustedByLogo4 from "@/assets/about-us/trustedby/Equans logo.png";
import TrustedByLogo5 from "@/assets/about-us/trustedby/HSM logo.png";
import TrustedByLogo6 from "@/assets/about-us/trustedby/PCN.png";
import TrustedByLogo7 from "@/assets/about-us/trustedby/SPIE_(Unternehmen)_logo.png";

const logos = [
  TrustedByLogo1,
  TrustedByLogo2,
  TrustedByLogo3,
  TrustedByLogo4,
  TrustedByLogo5,
  TrustedByLogo6,
  TrustedByLogo7,
];

export default function TrustedBy() {
  return (
    <div className="w-full py-8 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:py-16 grid grid-cols-1">
        {/* Heading */}
        <h3 className="text-lg  sm:text-base md:text-xl font-bold mb-8 text-center text-gray-800">
          Trusted by industry leaders
        </h3>

        {/* Slider */}
        <div className="overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 16,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            className="w-full"
          >
            {logos.map((logo, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto">
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-full h-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
