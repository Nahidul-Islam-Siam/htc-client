"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CountryFlag from "react-country-flag";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

import mapImg from "@/assets/map2.png";
import yellowDot from "@/assets/dot.png";

// Import country label images
import phlinesText from "@/assets/philipinesText.png";
import netherlandsText from "@/assets/nether.png";
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
  countryCode: string;
  avatar: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "MURAT",
    role: "Mig Mag Welder",
    country: "Turkey",
    countryCode: "TR",
    avatar: "/images/a1.png",
    quote:
      "I work as a welder for one of HTC Techniek's clients, and I am very satisfied with the company. I would like to thank all the staff they are always supportive and attentive.",
  },
  {
    id: 2,
    name: "STEFAN",
    role: "Foreman Ironworker",
    country: "Romania",
    countryCode: "RO",
    avatar: "/images/a2.png",
    quote:
      "I have had a very positive experience with this recruitment agency. The office staff are open, approachable, and clearly dedicated to helping people.",
  },
  {
    id: 3,
    name: "ALXANDRU",
    role: "E&I Technician",
    country: "Moldova",
    countryCode: "MD",
    avatar: "/images/a3.png",
    quote:
      "I had a very good experience with this company. They were very supportive and helped me find a job that suited my skills.",
  },
  {
    id: 4,
    name: "ALEXANDER",
    role: "Pipefitter",
    country: "Russia",
    countryCode: "RU",
    avatar: "/images/a4.png",
    quote:
      "HTC Techniek is an excellent company. I have worked with HTC for nearly a year and have not experienced any issues. The staff are friendly and professional.",
  },
];

const TestimonialCard = ({
  name,
  role,
  country,
  countryCode,
  avatar,
  quote,
}: Testimonial) => {
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
        <div className="flex items-center gap-2">
          <div className="gap-2">
            <p className="text-sm font-bold uppercase gap-2">
              {name} {/* Render Flag */}
              <CountryFlag
                countryCode={countryCode}
                svg
                style={{ width: "20px", height: "15px", borderRadius: "2px" }}
                aria-label={country}
              />
            </p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturedTestimonials = () => {
  const totalMarkers = 14;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Auto-advance every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalMarkers);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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

            {/* ——— PHILIPPINES ——— */}
            <div
              className="absolute"
              style={{
                top: "22%",
                left: "57%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Philippines"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 0 && (
                <div
                  className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={phlinesText}
                      alt="Philippines"
                      width={140}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "160px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— NETHERLANDS ——— */}
            <div
              className="absolute"
              style={{
                top: "14%",
                left: "53%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Netherlands"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 1 && (
                <div
                  className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={netherlandsText}
                      alt="Netherlands"
                      width={160}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "180px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— UKRAINE ——— */}
            <div
              className="absolute"
              style={{
                top: "14%",
                left: "70%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Ukraine"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 2 && (
                <div
                  className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={ukrainText}
                      alt="Ukraine"
                      width={130}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "130px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— PORTUGAL ——— */}
            <div
              className="absolute"
              style={{
                top: "7%",
                left: "60%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Portugal"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 3 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={portugalText}
                      alt="Portugal"
                      width={135}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "135px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— VIETNAM ——— */}
            <div
              className="absolute"
              style={{
                top: "80%",
                left: "88%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Vietnam"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 4 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={vietnamText}
                      alt="Vietnam"
                      width={140}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "140px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— ROMANIA ——— */}
            <div
              className="absolute"
              style={{
                top: "60%",
                left: "65%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Romania"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 5 && (
                <div
                  className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={romaniaText}
                      alt="Romania"
                      width={130}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "130px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— LITHUANIA ——— */}
            <div
              className="absolute"
              style={{
                top: "22%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Lithuania"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 6 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={lituniaText}
                      alt="Lithuania"
                      width={140}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "140px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— POLAND ——— */}
            <div
              className="absolute"
              style={{
                top: "18%",
                left: "61%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Poland"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 7 && (
                <div
                  className="absolute left-1/2 -top-16 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={polandiaText}
                      alt="Poland"
                      width={125}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "125px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— SLOVAKIA ——— */}
            <div
              className="absolute"
              style={{
                top: "40%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Slovakia"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 8 && (
                <div
                  className="absolute left-1/2 -top-14 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={sloviaText}
                      alt="Slovakia"
                      width={140}
                      height={60}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "140px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— HUNGARY ——— */}
            <div
              className="absolute"
              style={{
                top: "60%",
                left: "80%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Hungary"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 9 && (
                <div
                  className="absolute left-1/2 -top-14 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={hungariaText}
                      alt="Hungary"
                      width={140}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "140px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— BULGARIA ——— */}
            <div
              className="absolute"
              style={{
                top: "70%",
                left: "60%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Bulgaria"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 10 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={bulgariaText}
                      alt="Bulgaria"
                      width={130}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "130px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— BANGLADESH ——— */}
            <div
              className="absolute"
              style={{
                top: "60%",
                left: "55%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Bangladesh"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 11 && (
                <div
                  className="absolute left-1/2 -top-14 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={bangladeshText}
                      alt="Bangladesh"
                      width={300}
                      height={180}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "160px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— INDIA ——— */}
            <div
              className="absolute"
              style={{
                top: "60%",
                left: "45%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="India"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 12 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={indiaText}
                      alt="India"
                      width={110}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "110px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* ——— TURKEY ——— */}
            <div
              className="absolute"
              style={{
                top: "50%",
                left: "30%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Image
                src={yellowDot}
                alt="Turkey"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
              {activeIndex === 13 && (
                <div
                  className="absolute left-1/2 -top-12 z-50 pointer-events-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  <div style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
                    <Image
                      src={turkeyText}
                      alt="Turkey"
                      width={115}
                      height={40}
                      className="drop-shadow-lg"
                      style={{
                        maxWidth: "none",
                        height: "auto",
                        width: "115px",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
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
              bulletClass:
                "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-gray-300 !opacity-100",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-[#F5C518] !w-6 !rounded-full",
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

      {/* Animation Styles */}
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

export default FeaturedTestimonials;
