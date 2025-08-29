// components/OurApproach.tsx
"use client";

import Image from "next/image";
import OurApproachBridge from "@/assets/about-us/image 59 (1).png";

export default function OurApproach() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-8 items-center">
        {/* Left Column */}
        <div>
          {/* Small yellow label */}
           <div className="flex items-center h-6 mb-4 max-w-max px-3 py-1 gap-2 bg-[rgba(250,187,0,0.15)] backdrop-blur-sm bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md text-left">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DE9400] leading-none">
              Our Approach
            </span>
          </div>

          {/* Main heading */}
          <h2 className="mt-2 mb-6 leading-snug text-2xl sm:text-3xl lg:text-4xl font-bold">
            HTC Techniek &amp; the Rotterdam Mentality:
            <br className="hidden sm:block" /> A Bond of Over Three Decades
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            <p>
              HTC Techniek BV, founded in 1989, is known for its Rotterdam
              mentality: no-nonsense approach, and strong work ethic. It is from
              this foundation that HTC has grown and maintained a service
              provider culture that continues to be guided by the same core
              values on which it was built.
            </p>
            <p>
              HTC Techniek and Rotterdam are inextricably linked: Our roots run
              deep in this city – and this is reflected in our approach: direct,
              committed, and solution-oriented. Since our inception, we have
              delivered skilled technical personnel who are not afraid of a
              challenge or responsibility – whether in offshore, shipbuilding,
              civil engineering, or petrochemical industries.
            </p>
            <p>
              We believe that results start with mindset. And ours remains
              distinctly Rotterdam.
            </p>
            <p>
              HTC Techniek BV. continuously works on professionalizing its
              services. In a world that is rapidly changing due to
              globalization, technological developments, and new laws and
              regulations, we aim for the highest standards. And we look for
              workers in a transparent and reliable way.
            </p>
            <p>
              As a response to these changes, HTC Techniek actively invests in
              modern technologies.
            </p>
            <p>
              For instance, we apply Artificial Intelligence (AI) to more
              effectively, quickly, and accurately select skilled workers from
              around the globe. This automation is not only important for the
              sake of efficiency, but also to place the right people in the
              right positions – globally.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[550px]">
          <Image
            src={OurApproachBridge}
            alt="Line art illustration"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
