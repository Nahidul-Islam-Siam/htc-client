"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

import mapImg from "@/assets/map2.png";
import yellowDot from "@/assets/dot.png";

// Import country label images
import phlinesText from "@/assets/philipinesText.png";
import netherlandsText from "@/assets/netherlandsText.png";
import portugalText from "@/assets/portugalText.png";
import lituniaText from "@/assets/lituniaText.png";
import polandiaText from "@/assets/polandiaText.png";
import sloviaText from "@/assets/sloviaText.png";
import hungariaText from "@/assets/hungariaText.png";
import bulgariaText from "@/assets/bulgariaText.png";
import vietnamText from "@/assets/vietnamText.png";
import indiaText from "@/assets/indiaText.png";
import bangladeshText from "@/assets/bangladeshText.png";
import ukrainText from "@/assets/ukrainText.png";
import turkeyText from "@/assets/turkeyText.png";
import romaniaText from "@/assets/romaniaText.png";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  country: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MURAT",
    role: "Mig Mag Welder",
    country: "🇹🇷 Turkey",
    avatar: "/images/a1.png",
    quote:
      "I work as a welder for one of HTC Techniek's clients, and I am very satisfied with the company. I would like to thank all the staff, they are always supportive and attentive.",
  },
  {
    id: 2,
    name: "STEFAN",
    role: "Foreman Ironworker",
    country: "🇷🇴 Romania",
    avatar: "/images/a2.png",
    quote:
      "I have had a very positive experience with this recruitment agency. The office staff are open, approachable, and clearly dedicated to helping people.",
  },
  {
    id: 3,
    name: "ALXANDRU",
    role: "E&I Technician",
    country: "🇲🇩 Moldova",
    avatar: "/images/a3.png",
    quote:
      "I had a very good experience with this company. Always there to help you with everything if it is possible, they create a very friendly atmosphere.",
  },
  {
    id: 4,
    name: "ALEXANDER",
    role: "Pipefitter",
    country: "🇷🇺 Russia",
    avatar: "/images/a4.png",
    quote:
      "Professional team, clear communication, and fast support. They truly care about workers' well-being and career growth.",
  },
];

const TestimonialCard = ({ name, role, country, avatar, quote }: Testimonial) => {
  return (
    <div className="bg-[#F8F7F7] rounded-xl p-6 flex flex-col h-[280px]">
      <p className="text-lg flex-grow">“{quote}”</p>
      <div className="flex items-center gap-3 mt-4">
        <Image
          width={40}
          height={40}
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-md object-cover"
        />
        <div>
          <p className="text-sm font-bold uppercase">{name}</p>
          <p className="text-xs text-gray-500">
            {role} • {country}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturedTestimonials2 = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Index of current tooltip

  const countryMarkers = [
    { id: "philippines", top: "22%", left: "57%", src: phlinesText, alt: "Philippines" },
    { id: "netherlands", top: "14%", left: "53%", src: netherlandsText, alt: "Netherlands" },
    { id: "ukraine", top: "14%", left: "70%", src: ukrainText, alt: "Ukraine" },
    { id: "portugal", top: "7%", left: "60%", src: portugalText, alt: "Portugal" },
    { id: "vietnam", top: "80%", left: "88%", src: vietnamText, alt: "Vietnam" },
    { id: "romania", top: "60%", left: "65%", src: romaniaText, alt: "Romania" },
    { id: "lithuania", top: "22%", left: "50%", src: lituniaText, alt: "Lithuania" },
    { id: "poland", top: "18%", left: "61%", src: polandiaText, alt: "Poland" },
    { id: "slovakia", top: "40%", left: "75%", src: sloviaText, alt: "Slovakia" },
    { id: "hungary", top: "60%", left: "80%", src: hungariaText, alt: "Hungary" },
    { id: "bulgaria", top: "70%", left: "60%", src: bulgariaText, alt: "Bulgaria" },
    { id: "bangladesh", top: "60%", left: "55%", src: bangladeshText, alt: "Bangladesh" },
    { id: "india", top: "60%", left: "45%", src: indiaText, alt: "India" },
    { id: "turkey", top: "50%", left: "30%", src: turkeyText, alt: "Turkey" },
  ];

  // Auto-advance tooltip every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % countryMarkers.length);
    }, 2000); // Change tooltip every 2 seconds

    return () => clearInterval(interval);
  }, [countryMarkers.length]);

  return (
    <div className="w-full px-4 md:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl bg-white md:my-20 my-16 sm:py-16 grid grid-cols-1 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug">
              Global Talent. <br /> Local Impact.
            </h2>
            <Link
              href="/about"
              className="mt-2 inline-block text-sm font-semibold text-[#E2C59F] hover:underline"
            >
              View All →
            </Link>
          </div>

          {/* Right Map */}
          <div className="relative w-full md:w-[500px] mx-auto overflow-visible">
            <Image
              src={mapImg}
              alt="World Map showing HTC Techniek's global talent network"
              width={1000}
              height={350}
              className="object-contain w-full h-auto"
            />

            {/* Render all country markers */}
            {countryMarkers.map((country, index) => (
              <div
                key={country.id}
                className="absolute"
                style={{ top: country.top, left: country.left, transform: 'translate(-50%, -50%)' }}
              >
                {/* Always show yellow dot */}
                <Image
                  src={yellowDot}
                  alt={`Location dot for ${country.alt}`}
                  width={10}
                  height={10}
                  className="w-auto h-auto"
                />

                {/* Show tooltip only for active index */}
                {activeIndex === index && (
                  <div
                    className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                    style={{ transform: 'translateX(-50%)' }}
                  >
                    <div
                      style={{
                        animation: 'fadeInUp 0.4s ease-out forwards',
                      }}
                    >
                      <Image
                        src={country.src}
                        alt={country.alt}
                        width={160}
                        height={40}
                        className="drop-shadow-lg"
                        style={{ maxWidth: 'none', height: 'auto' }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-gray-300 !opacity-100",
              bulletActiveClass: "swiper-pagination-bullet-active !bg-[#F5C518] !w-6 !rounded-full",
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="mb-12">
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Add Animation */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .testimonial-swiper {
          --swiper-pagination-bottom: -10px;
        }
      `}</style>
    </div>
  );
};

export default FeaturedTestimonials2;