"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Badge } from "@/components/ui/badge";

type Vacancy = {
  id: number;
  title: string;
  location: string;
  sector: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  href: string;
  image: string;
  company: {
    name: string;
    code: string;
  };
};

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Electrician Bridges & Locks",
    location: "Eindhoven, Netherlands",
    sector: "Government and Public Sector",
    type: "Full-Time",
    href: "#",
    image: "/v1.png",
    company: { name: "Heijmans", code: "h" },
  },
  {
    id: 2,
    title: "Bridge Technician",
    location: "Moerdijk, Netherlands",
    sector: "Engineering",
    type: "Full-Time",
    href: "#",
    image: "/v2.png",
    company: { name: "AECOM", code: "a" },
  },
  {
    id: 3,
    title: "Logistics Manager",
    location: "Amsterdam, Netherlands",
    sector: "Logistics & Supply Chain",
    type: "Part-Time",
    href: "#",
    image: "/v3.png",
    company: { name: "Amazon", code: "a" },
  },
  {
    id: 4,
    title: "Logistics Manager",
    location: "Amsterdam, Netherlands",
    sector: "Logistics & Supply Chain",
    type: "Part-Time",
    href: "#",
    image: "/v3.png",
    company: { name: "Amazon", code: "a" },
  },
];

function CompanyBadge({ code, name }: { code: string; name: string }) {
  return (
    <div
      className="inline-flex items-center justify-center rounded-full bg-white/95 text-black shadow-sm border border-black/10"
      aria-label={name}
      title={name}
      style={{ width: 36, height: 36 }}
    >
      <span className="text-[18px] font-bold leading-none">
        {code.toLowerCase()}
      </span>
    </div>
  );
}

export function VacancyCard({ vacancy }: { vacancy: Vacancy }) {
  return (
    <div className="w-[350px] h-[320px] mx-auto">
      <Link
        href={"/vacancies/" + vacancy.id}
        className="group relative block h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/60 hover:shadow-md transition-shadow duration-300"
      >
        {/* Image Container */}
        <div className="relative h-full w-full">
          {/* Main Image */}
          <Image
            src={vacancy.image || "/placeholder.svg"}
            alt={vacancy.title}
            fill
            sizes="300px"
            className="object-cover"
            priority={false}
          />

          {/* Blurred overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2/6">
            <Image
              src={vacancy.image || "/placeholder.svg"}
              alt=""
              fill
              sizes="300px"
              className="object-cover filter blur-md"
              priority={false}
            />
          </div>

          {/* Company Badge */}
          <div className="absolute left-3 top-3 z-10">
            <CompanyBadge
              code={vacancy.company.code}
              name={vacancy.company.name}
            />
          </div>

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent z-5" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 text-white">
            <h3 className="text-lg font-semibold leading-tight">
              {vacancy.title}
            </h3>
            <p className="mt-1 text-sm text-white/80">{vacancy.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-white/15 text-white hover:bg-white/15 text-xs"
              >
                {vacancy.sector}
              </Badge>
              <Badge
                variant="secondary"
                className="bg-[#FFD43833]/40 text-[#e6b600] hover:bg-[#FFD43833]/40 border-transparent text-xs"
              >
                {vacancy.type}
              </Badge>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function Vacancies() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section aria-labelledby="vacancies-heading" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:my-20 my-16 sm:py-16 grid grid-cols-1 relative">
        {/* Header */}
        <div className="md:mb-10 mb-8 flex flex-col items-center justify-between gap-4 sm:mb-8 sm:flex-row">
          <div className="md:max-w-2xl md:mb-6 mb-4 text-center md:text-left">
            <h2 className="md:text-3xl text-2xl font-bold text-gray-900 leading-snug">
              Latest Vacancies
            </h2>
            <p className="text-sm mt-2 sm:text-base max-w-[450px] text-gray-500 font-inter">
              {"Don't"} miss out on the opportunity to be among the first to
              apply for these vacancies
            </p>
          </div>

          {/* View All Button (no animation) */}
          <Link
            href="/vacancies"
            className="inline-flex items-center rounded-md bg-[#F5C518] px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black/5 transition-colors hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
          >
            View All Vacancies
          </Link>
        </div>

        {/* Slider */}
        <div className="pb-8 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-0">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={8}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !w-2.5 !h-2.5 !bg-gray-300 !opacity-100 transition-all duration-200",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-[#F5C518] !w-6 !rounded-full",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 16,
              },
            }}
            loop
            className="px-4 sm:px-6 md:px-8 lg:px-0"
          >
            {vacancies.map((vacancy) => (
              <SwiperSlide key={vacancy.id}>
                <div className="flex justify-center mb-10">
                  <VacancyCard vacancy={vacancy} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}