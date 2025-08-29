import img from "@/assets/consulting-page/1.png";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const BusinessStrategyPlanning = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className=" mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-semibold text-[#171B26] font-inter leading-[120%]">
              Business Strategy & Planning
            </h1>

            <div className="space-y-5 text-gray-700 text-base sm:text-lg">
              <p>
                Get clear, actionable guidance to drive your business forward
                with purpose and clarity.
              </p>
              {[ 
                "Create a clear, realistic roadmap tailored to your goals",
                "Identify opportunities to grow, improve, or pivot",
                "Support with business plans, vision mapping, or funding prep"
              ].map((text, i) => (
                <p key={i} className="flex gap-3 items-center text-[#28543F]">
                  <BsCheckCircleFill className="flex-shrink-0" size={20} />
                  {text}
                </p>
              ))}
            </div>

              <button className="mt-6 hover:bg-white hover:text-green-800 bg-green-800 text-white px-6 py-3 rounded-full font-medium  border-2 border-green-800 transition">
      Start With a Discovery Call
          </button>
          </div>

          {/* Right Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={img}
              alt="Business Strategy Planning"
              className="w-full h-auto rounded-2xl"
              width={555}
              height={610}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessStrategyPlanning;
