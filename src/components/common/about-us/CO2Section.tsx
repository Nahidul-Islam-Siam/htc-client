import Image from "next/image";
import carbonDyOxide from "@/assets/about-us/Crane.png";
import Link from "next/link";

export default function CO2Section() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Left Content */}
        <div>
          <span className="inline-block text-[#e6ab35] bg-[#fff5d9] text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-4">
            Our Quality
          </span>

          <h2 className="mt-2 mb-6 leading-snug text-2xl sm:text-3xl lg:text-4xl font-bold">
          CO₂ Reduction at <br /> HTC Techniek B.V.
          </h2>

          <p className="text-gray-600 mb-8">
            At HTC Techniek B.V., we are actively committed to building a more
            sustainable future. We recognize our responsibility in the fight
            against climate change and are taking concrete steps to structurally
            reduce our CO<sub>2</sub> emissions.
          </p>

            <Link
              href="#apply"
              className="inline-flex items-center rounded-md bg-[#F5C518] px-4 py-2 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-black/5 hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60"
            >
      Get Started
            </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center ">
          <Image
            src={carbonDyOxide}
            alt="CO2 Reduction"
            width={550}
            height={550}
            className="opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
