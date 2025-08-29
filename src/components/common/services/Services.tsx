"use client";

import React from "react";
import Bridge from "@/assets/about-us/image 59 (1).png";
import Image from "next/image";
import TrustedBy from "../about-us/TrustedBy";
import { RiGlobalLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { LuFileCheck } from "react-icons/lu";

function Services() {
  const services = [
    {
      id: 1,
      title: "Global reach",
      description:
        "With an extensive international network and years of experience in cross-border technical staffing, HTC Techniek B.V. can quickly and effectively deliver the right professionals – anywhere in the world. Whether it's projects in the Netherlands, Germany, Belgium, or across Europe, we always provide a reliable solution on-site.",
      icon: <RiGlobalLine />,
    },
    {
      id: 2,
      title: "Global top talent making a local impact",
      description:
        "Our professionals are skilled, motivated, and accustomed to contributing directly to the success of a project. We select only proven specialists – experts who not only work technically but also bring old familiarity into local teams and work cultures.",
      icon: <FaRegUser />,
    },
    {
      id: 3,
      title: "Seamless implementation",
      description:
        "HTC Techniek supports you from project start-ups. From certificates and work permits to housing and relocation, we handle the entire process. Thanks to our efficient procedures and in-house expertise, everything runs like clockwork. Staff placement runs smoothly, allowing our clients to focus on their core business.",
      icon: <LuFileCheck />,
    },
  ];

  return (
    <div>
      {/* Section 1: Hero + Image */}
      <section className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="flex items-center h-6 max-w-max px-3 py-1 gap-2 bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DE9400] leading-none">
                  Our Services
                </span>
              </div>

              {/* Headline */}
              <h2 className="mt-2 mb-6 leading-snug text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Why Companies <br /> Choose HTC <br /> Techniek B.V.
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                At HTC Techniek, reliability means delivering the right people,
                at the right time, with zero hassle. Here&apos;s why businesses
                trust us:
              </p>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-[450px] lg:-mt-48">
                <Image
                  src={Bridge}
                  alt="Line art illustration of a bridge"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 md:p-6 lg:p-8 space-y-6 border border-gray-200 rounded-lg"
                >
                  <div className="w-12 h-12 text-yellow-500 text-4xl">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <button className="mt-2 inline-block rounded-md bg-yellow-400 text-black text-xs font-semibold px-4 py-2 uppercase tracking-wide hover:bg-yellow-500 hover:underline transition-all duration-200">
                    CONTACT US
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div>
          <TrustedBy />
        </div>
      </section>
    </div>
  );
}

export default Services;