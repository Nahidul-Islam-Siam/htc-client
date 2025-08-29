"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
gsap.registerPlugin(ScrollTrigger);

type Step = {
  title: string;
  description: string;
  image: string;
  iconImage: string;
};

const steps: Step[] = [
  {
    title: "Upload your CV",
    description:
      "Apply for a vacancy or submit an open application. We'll review your profile within minutes.",
    image:
      "/step1.png",
    iconImage: "/images/upload.png",
  },
  {
    title: "Pre-screening within 5 minutes",
    description:
      "Our AI and team quickly assess your fit for available roles and match you accordingly.",
    image:
      "/step2.jpg",
    iconImage: "/images/message.png",
  },
  {
    title: "Intake interview with recruiter",
    description:
      "A personal call to understand your goals, skills, and preferences for the perfect match.",
    image:
  "/step3.jpg",
    iconImage: "/images/tv.png",
  },
  {
    title: "Introduction to employer",
    description:
      "We introduce you to the hiring company and prepare you for a successful interview.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
    iconImage: "/images/people.png",
  },
  {
    title: "Getting Started",
    description:
      "You're hired! We support your onboarding and transition into your new role in Europe.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&w=800",
    iconImage: "/images/bag.png",
  },
];

export default function RecruitmentSteps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLLIElement | null)[]>([]);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || stepsRef.current.length === 0) return;

    // Create a timeline for step-by-step control
    // const tl = gsap.timeline({
    //   defaults: { duration: 0.8, ease: "power2.out" },
    // });

    // Animate image and content via ScrollTrigger
    ScrollTrigger.create({
      trigger: section,
      start: "center center",
      end: `+=${window.innerHeight * 3}`, // Last ~3 screens
      pin: true, // 👉 This pins the entire section
      pinSpacing: true,
      scrub: true,
      onEnter: () => setActiveIndex(0),
      onLeave: () => setActiveIndex(steps.length - 1),
      onLeaveBack: () => setActiveIndex(0),
      onUpdate: (self) => {
        const stepIndex = Math.min(
          steps.length - 1,
          Math.floor(self.progress * steps.length)
        );
        setActiveIndex(stepIndex);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white relative">
      {/* Sticky/Fixed Section */}
      <div className="mx-auto max-w-7xl px-6 p">
        {/* Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
          <h2 className="md:text-3xl text-2xl font-bold text-gray-900 leading-snug">
            Achieve your dream job <br /> in 5 simple steps
          </h2>
          <Link
            href="#apply"
            className="inline-flex items-center rounded-md bg-[#F5C518] px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black/5 hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
          >
            APPLY NOW
          </Link>
        </div>

        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Steps */}
          <div className="flex flex-col flex-1">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-[#F5C518]">
              Our recruitment process
            </p>
            <ol className="divide-y divide-gray-200 rounded-lg border border-gray-200">
              {steps.map((step, idx) => {
                const isActive = idx === activeIndex;
                const isCompleted = idx < activeIndex;

                return (
                  <li
                    key={idx}
           ref={(el) => { stepsRef.current[idx] = el as HTMLLIElement | null; }}
                    className={`px-5 py-5 transition-all ${
                      isActive ? "bg-gray-50" : "hover:bg-gray-25"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-md border-2 flex-shrink-0 ${
                          isActive
                            ? "bg-gray-50 border-black"
                            : isCompleted
                            ? "bg-[#facc15] "
                            : "bg-white border-gray-300"
                        }`}
                      >
                        <Image
                          src={step.iconImage}
                          alt=""
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p
                          className={`text-base font-semibold ${
                            isActive ? "text-gray-900" : "text-gray-600"
                          }`}
                        >
                          {step.title}
                        </p>
                        {isActive && (
                          <p className="mt-1 text-sm text-gray-500">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="flex-1 relative rounded-xl overflow-hidden shadow-lg aspect-video lg:aspect-auto"
          >
            <Image
              src={steps[activeIndex].image}
              alt={steps[activeIndex].title}
              width={800}
              height={600}
              className="object-cover transition-all duration-500"
            />
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-semibold">{steps[activeIndex].title}</h3>
              <p className="text-sm mt-1 text-white/90">
                {steps[activeIndex].description}
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Push content down to allow scroll */}

      <div className="h-[10vh]"></div>
    </section>
  );
}