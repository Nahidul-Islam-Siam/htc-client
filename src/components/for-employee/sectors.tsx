"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Import your sector images
import utilityImg from "@/assets/employee/Illustration.png";
import shipbuildingImg from "@/assets/employee/I.png";
import infrastructureImg from "@/assets/employee/I2.png";
import oilgasImg from "@/assets/employee/I3.png";
import windenergyImg from "@/assets/employee/I4.png";

export default function SectorsSection() {
  const sectors = [
    {
      title: "Utility",
      image: utilityImg,
    },
    {
      title: "Ship building/Ship repair",
      image: shipbuildingImg,
    },
    {
      title: "Infrastructure",
      image: infrastructureImg,
    },
    {
      title: "Petrochemical/Oil & Gas",
      image: oilgasImg,
    },
    {
      title: "Wind transition industry",
      image: windenergyImg,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="mx-auto text-[11px] uppercase tracking-wider text-[#DE9400] flex items-center justify-center text-center h-6 mb-4 max-w-max px-3 py-1 gap-2 bg-[#FFF5D9] border border-[#DE9400]/20 rounded-md leading-none"
            style={{ fontWeight: 300 }}
          >
            Advantages
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            We serve these sectors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We know that a successful recruitment campaign relies on innovation,
            dedication, and personal contact. Our proven strategy has helped
            numerous clients fill their vacancies.
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-2xl p-8 text-center cursor-pointer border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="mb-6 flex justify-center rounded-lg overflow-hidden">
                <div className="relative w-96 h-96">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#1C1917] transition-colors duration-300 group-hover:text-[#DE9400]">
                {sector.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}