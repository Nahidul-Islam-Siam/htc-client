import { Grid2X2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchForm from "./Form";
import hero1 from "@/assets/home/Left - Yellow Helmet.png";
import hero2 from "@/assets/home/Right - Yellow Helmet.png";


export default function Hero() {
  return (
    <div className="bg-[#ffffff]">
      <section className="relative mx-auto    md:mb-24 mb-16">
        <div className="relative overflow-hidden rounded-2xl border bg-[#ffffff] md:py-16 py-12 shadow-sm">
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center text-center max-w-7xl mx-auto">
            {/* Badge */}
            <div className="flex h-6  px-3 py-1 justify-center gap-2 bg-[rgba(250,187,0,0.15)] backdrop-blur-[10px] mx-auto items-center rounded-md text-[11px] uppercase tracking-wider text-[#DE9400] leading-none font-normal">
              Your recruitment partner
            </div>

            {/* Headline */}
            <h1 className="text-[#1C1917] text-center mt-4 text-3xl  lg:text-[68px] font-semibold leading-tight lg:leading-[1.05] tracking-[-0.025em]">
              Your Gateway to Europe&apos;s
              <span className="block">Top Technical Careers</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#79716B] text-center font-['Geist'] text-sm sm:text-base md:text-lg mt-4 md:max-w-xl mx-auto leading-relaxed">
              With a worldwide talent network and deep industry expertise, we deliver skilled professionals to Europe’s most demanding technical projects.
            </p>

            {/* Search Form */}
            <div className="mt-6">
              <SearchForm />
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link
                href="/vacancies"
                className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-500"
              >
                <Grid2X2 className="h-4 w-4" />
                View all vacancies
              </Link>
            </div>
          </div>

          {/* Images */}
          <div className="absolute bottom-0 left-0 w-full flex h-auto">
            <div className="w-1/2 hidden sm:flex">
              <Image
                src={hero1}
                alt="Skilled technician with helmet and tools"
                className="object-contain"
                style={{ maxHeight: "550px", width: "auto" }}
                priority
              />
            </div>
            <div className="w-1/2 hidden sm:flex justify-end">
              <Image
                src={hero2}
                alt="Smiling engineer wearing blue safety helmet"
                className="object-contain"
                style={{ maxHeight: "550px", width: "auto" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}