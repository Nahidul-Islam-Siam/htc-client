"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import your team images
import Marco from "@/assets/about-us/teams/Content.png";
import Cees from "@/assets/about-us/teams/Content (1).png";
import Ronny from "@/assets/about-us/teams/Content (2).png";
import Hrvoje from "@/assets/about-us/teams/Content (3).png";
import Panar from "@/assets/about-us/teams/Content (4).png";

const team = [
  { img: Marco, name: "Marco Graute", role: "Manager Operations" },
  { img: Cees, name: "Cees Frencken", role: "Senior Account Manager" },
  { img: Ronny, name: "Ronny Onur Ugur", role: "Medior Account Manager" },
  { img: Hrvoje, name: "Hrvoje Rimar", role: "Junior Account Manager" },
  { img: Panar, name: "Panar Kyorova", role: "Recruiter" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const TeamGrid: React.FC = () => {
  return (
    <div className=" py-10 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="p-6 max-w-3xl mx-auto text-center">
          <div className="inline-block text-[#e6ab35] bg-[#fff5d9] text-[10px] font-semibold tracking-wide px-2 py-1 mb-3 uppercase">
            People Behind HTC
          </div>
          <h2
            className="text-4xl font-black tracking-tight mb-3"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            Say hello to our team
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The people who make it all happen. Behind every project success is a
            dedicated HTC team member achieving quality, service, and support.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 0.9,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.12), 0 6px 6px rgba(0,0,0,0.08), 0 0 15px rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white rounded-xl p-4 overflow-hidden text-center w-72 cursor-pointer relative group"
            >
              {/* Image with hover scale */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                className="bg-gray-100"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={288}
                  height={288}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Name & Role */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-xs uppercase text-gray-500 tracking-widest">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamGrid;
