"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

// Import your image
import recruitmentImg from "@/assets/employee/c.png"; // Update path as needed

// Custom auto-counting hook
const useCounter = (target: number, duration = 5000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
};

export default function HTCTechniek() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const count1 = useCounter(600);
  const count2 = useCounter(35);
  const count3 = useCounter(7.6);

  if (!isMounted) {
    return <div className="min-h-screen bg-white"></div>;
  }

  return (
    <main className=" bg-white chakra-petch">
      {/* HTC Techniek Statistics Section */}
      <section className="bg-gray-100 max-w-7xl mx-auto ">
        <div className="">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-start justify-between p-8 rounded-lg"
          >
            {/* Left side - Heading and Stats */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-8 leading-tight chakra "
              >
                Why employers choose
                <br />
                HTC Techniek?
              </motion.h2>
            </motion.div>

            {/* Right side - Single Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-shrink-0 w-48 h-48 relative"
            >
              <div className="absolute inset-0 md:-ml-60 lg:-ml-80 flex items-center justify-center z-10">
                <Image
                  src={recruitmentImg}
                  alt="HTC Techniek professional recruitment services"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
          {/* Statistics Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-3 -mt-8 "
          >
            {/* Stat 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[#DE9400] mb-3">
                {count1}+
              </div>
              <p className="text-sm text-[#1C1917] font-medium leading-relaxed">
                Professionals matched with projects
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Through global recruitment, we help clients in oil and gas,
                maritime, offshore wind, and heavy construction find the right
                talent for their projects.
              </p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[#DE9400] mb-3">
                {count2}+
              </div>
              <p className="text-sm text-[#1C1917] font-medium leading-relaxed">
                Years of recruitment experience
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Connecting skilled professionals worldwide with top technical
                employers across the Netherlands and Belgium.
              </p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6  border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-5xl font-bold text-[#DE9400] mb-3">
                {count3}
              </div>
              <p className="text-sm text-[#1C1917] font-medium leading-relaxed">
                Candidate Satisfaction Score
              </p>
              <p className="text-xs text-gray-500 mt-2">
                This score shows good service quality but reveals room to
                improve communication, support, and application experience.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
