import Image from "next/image";
import Link from "next/link";

export default function HeroSection2() {
  return (
    <section className="relative md:my-20 my-10 bg-gray-900 overflow-hidden max-w-7xl mx-auto rounded-xl px-4 sm:px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero2.png" // Replace with your actual image path
          alt="Industrial Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text contrast */}
        {/* <div className="absolute inset-0 bg-black/60"></div> */}
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-2 sm:px-6 md:px-12 py-16 md:py-24 lg:py-32">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Image
            src="/images/logo-footer.png" // Replace with actual path to logo
            alt="HTC Techniek Logo"
            width={160}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Join us on this journey.
          <br />
          We guide your path.
        </h1>

        {/* CTA Button */}
        <Link
          href="#apply"
          className="inline-flex items-center rounded-lg bg-[#F5C518] px-6 py-3 text-base sm:text-lg font-semibold text-black shadow-lg hover:bg-[#e6b600] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
