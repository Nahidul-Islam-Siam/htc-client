import React from "react";

export default function ServiceSection() {
  return (
    <section
      className="relative max-w-7xl mx-auto py-16 md:mb-20 mb-10 px-4 overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `url('/images/bg3.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gray-900/60"></div> */}

      <div className="relative px-8 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready for the
              <br />
              next step?
            </h2>

            <p
              className="text-[#A9A29D]
               text-lg mb-8 leading-relaxed max-w-md"
            >
              It&apos;s your turn. Whether you&apos;re looking for new
              challenges or want to take a step in your career, we&apos;re happy
              to help you find opportunities that match your skills and
              ambitions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md">
                VIEW OUR SERVICES
              </button>
              <button className="border-gray-400  bg-[rgba(255,255,255,0.1)] text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md ">
                CONTACT US
              </button>
            </div>
          </div>

          {/* Right side - space for the workers image (integrated in background) */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
