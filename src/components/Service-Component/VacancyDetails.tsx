"use client";

import { MapPin} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import BGImg from "../../../public/images/image.png";
import VacancyMap from "./VacancyMap";
import JobDetails from "./JobDetails";
import ApplicationForm from "./ApplicationForm";
import SimilarVacancy from "./SimilarVacancy";
import { Button } from "antd";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function VacancyDetails() {
  return (
    <div className="-mt-7 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative">
        <motion.div {...fadeInUp}>
          <div className="relative w-full h-[400px]">
            <Image
              src={BGImg}
              alt="Professional electrician working on electrical panel"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute left-10 -bottom-14 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg"
        >
          <Image
            src={BGImg}
            alt="Company logo or technician"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="w-full flex flex-col md:flex-row gap-5 mt-16"
      >
        {/* Left: Job Description */}
        <div className="w-full md:w-[60%]">
          <div className="bg-white">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <motion.h1 className="text-3xl font-bold text-gray-900 mb-6" {...fadeInUp}>
                Electrician Bridges & Locks
              </motion.h1>

              {/* Job Info Badges */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 mb-8"
                {...fadeInUp}
              >
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-[#A9A29D]" />
                  <span className="text-base font-semibold">Eindhoven, Netherlands</span>
                </div>
                <div className="flex items-center gap-2">
            
                  <span className="text-base font-semibold bg-[#F2F2F2] text-[#1C1917] px-2 py-1 rounded">
                    Government and Public Sector
                  </span>
                </div>
                <div className="flex items-center gap-2">

                  <span className="text-base bg-[#FFF6D7] font-semibold text-[#DE9400] px-2 py-1 rounded-md">
                    Full-Time
                  </span>
                </div>
              </motion.div>

              <motion.h2 className="text-xl font-semibold text-gray-900 mb-6" {...fadeInUp}>
                Vacature: Responsable Commercial Automobile in Antwerpen.
              </motion.h2>

              <motion.div className="text-gray-700 leading-relaxed mb-8" {...fadeInUp}>
                <p>
                  Chez Wiegel, tout tourne autour des camions et des remorques,
                  mais ce sont les personnes qui font la différence. As-tu une
                  passion pour la vente et le transport, et aimerais-tu
                  travailler pour un acteur majeur de ce segment de marché ?
                  Dans le cadre de l&apos;expansion de nos activités en Belgique
                  / Luxembourg, nous recherchons un(e) Responsable Commercial(e)
                  Automobile dans la région d&apos;Anvers.
                </p>
              </motion.div>

              {/* What will you do */}
              <motion.div className="mb-8" {...fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Wat ga je doen?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Après une période de formation approfondie, tes responsabilités en tant que Responsable Commercial(e) Pompes et Compresseurs consisteront à développer les relations d&apos;affaires existantes et à créer de nouvelles relations commerciales.
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Élaborer un plan d'action en étroite collaboration avec le directeur général.",
                    "Développer davantage les relations existantes et créer de nouvelles relations commerciales dans tout le pays.",
                    "Évaluer les besoins des clients et des prospects.",
                    "Préparer des devis, les suivre et conclure des accords.",
                    "Organiser des visites d'usines avec les clients.",
                    "Créer de nouvelles initiatives commerciales pour promouvoir davantage l'entreprise.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What we offer */}
              <motion.div className="mb-8" {...fadeInUp}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Wat wij jou bieden?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Emploi en tant que Responsable Commercial(e) directement chez Wiegel Buik Solutions.",
                    "Travail hybride : 1 jour au bureau à Moerdijk (Pays-Bas), 4 jours de travail à domicile.",
                    "Un salaire compétitif.",
                    "De bonnes conditions de travail.",
                    "26 jours de congé.",
                    "Régime de retraite collectif.",
                    "Véhicule de fonction.",
                    "Ordinateur portable.",
                    "Téléphone mobile.",
                    "Formations en vente et en technique.",
                    "Travailler au sein d'une entreprise stable et en croissance.",
                    "Travailler pour un acteur de niche sur le marché.",
                    "Possibilité d'appliquer ton expertise et créativité.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Map & Form */}
              <motion.div {...fadeInUp}>
                <VacancyMap />
              </motion.div>
              <motion.div className="mt-5" {...fadeInUp}>
                <ApplicationForm />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right: JobDetails Sidebar */}
        <motion.div
          className="w-full md:w-[40%]"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <JobDetails />
        </motion.div>
      </motion.div>

      {/* Similar Vacancies */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <motion.div
          className="flex items-start justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Similar Vacancies</h2>
            <div className="w-16 h-1 bg-[#facc15] mb-6"></div>
            <p className="text-gray-600 max-w-md">
              Don&apos;t miss out on the opportunity to be among the first to apply for these vacancies
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md">
              VIEW ALL VACANCIES
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <SimilarVacancy />
        </motion.div>
      </motion.div>
    </div>
  );
}