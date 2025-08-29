"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

// Import certification/partner logos
import logo1 from "@/assets/footer/f1.png";
import logo2 from "@/assets/footer/f2.png";
import logo3 from "@/assets/footer/f3.png";
import logo4 from "@/assets/footer/Frame (4).png";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Example links
const employers = [
  { label: "Our services", href: "/services" },
  { label: "Self-employed", href: "/self-employed" },
];

const jobSeekers = [
  { label: "Vacancies", href: "/vacancies" },
  { label: "Self-employed", href: "/self-employed" },
];

const company = [
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer role="contentinfo" className="bg-[#1c1a18] text-[#878686]">
      <div className="container mx-auto px-4 md:px-6 py-10">
        {/* Top Section: Logo, Tagline, Contact & Rating */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left: Logo & Contact Info */}
          <div>
            <Link href="/" aria-label="Home" className="inline-block mb-4">
              <Image
                src="/images/logo-footer.png"
                alt="HTC Techniek Logo"
                width={140}
                height={36}
                className="object-contain"
                priority
              />
            </Link>

            <h4 className="text-white text-lg font-semibold mb-4">
              Your talent in the right place
            </h4>

            <div className="space-y-1 text-sm text-[#79716B] opacity-75">
              <p>Rivium Quadrant 2, 2909 LC Capelle aan den IJssel</p>
              <Link
                href="mailto:info@htctechniek.com"
                className="hover:opacity-90 block"
              >
                info@htctechniek.nl
              </Link>
              <Link href="tel:0104215255" className="hover:opacity-90 block">
                010 421 5255
              </Link>
            </div>
          </div>

          {/* Right: Rating & CTA */}
          <div className="flex flex-col items-start md:items-end space-y-3">
            <div className="flex items-center gap-2">
              {/* Simple star rating (5 stars, 4.8 filled) */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#F4C015"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-400 font-semibold text-sm">76</span>
            </div>
            <p className="text-[#79716B] opacity-55">Powered by Google</p>
            <Link
              href="/rate-us"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded text-sm transition"
            >
              Rate us
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex md:justify-end mb-8">
          <div className="flex space-x-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              // className="w-10 h-10 border border-gray-600 hover:border-gray-400 flex items-center justify-center text-gray-300 hover:text-white rounded-full transition"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className=" flex items-center justify-center"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>

            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              // className="w-10 h-10 border border-gray-600 hover:border-gray-400 flex items-center justify-center text-gray-300 hover:text-white rounded-full transition"
            >
              <FaXTwitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Middle Section: Links & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left: Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
            {[
              { title: "EMPLOYERS", links: employers },
              { title: "JOB SEEKERS", links: jobSeekers },
              { title: "COMPANY", links: company },
            ].map((section) => (
              <div key={section.title}>
                <h5 className="text-xs font-semibold tracking-widest text-[#79716B] mb-3 uppercase">
                  {section.title}
                </h5>
                <ul className="space-y-2">
                  {section.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white hover:opacity-90 transition"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Certifications & Partnerships */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Certified By */}
            <div>
              <h5 className="text-xs font-semibold tracking-widest text-gray-500 mb-3 uppercase">
                Certified by
              </h5>
              <div className="flex flex-wrap gap-5">
                <Image src={logo1} alt="VCUV logo" width={70} height={35} />
                <Image src={logo2} alt="NBBU logo" width={70} height={35} />
              </div>
              <Image
                src={logo3}
                alt="Seal logo "
                className="mt-3"
                width={70}
                height={35}
              />
            </div>

            {/* Partnership */}
            <div>
              <h5 className="text-xs font-semibold tracking-widest text-gray-500 mb-3 uppercase">
                Partnership
              </h5>
              <div className="h-[130px] w-[130px]">
                <Image src={logo4} alt="jaicob" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="text-[#79716B] md:text-left text-center">
            © {year} HTC Techniek
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            <Link
              href="/terms"
              className="text-[#79716B] hover:text-white hover:opacity-90"
            >
              General terms
            </Link>
            <div className="border-l border-gray-600 mx-2"></div>
            <Link
              href="/privacy"
              className="text-[#79716B] hover:text-white hover:opacity-90"
            >
              Privacy
            </Link>
            <div className="border-l border-gray-600 mx-2"></div>
            <Link
              href="/anti-discrimination"
              className="text-[#79716B] hover:text-white hover:opacity-90"
            >
              Anti-discrimination
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
