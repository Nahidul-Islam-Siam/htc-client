"use client";

import type React from "react";

import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

import Image from "next/image";
import flag from "@/assets/contact/Call Us.png";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#E7E5E4]  mx-auto md:mb-20 mb-10 ">
      <main className="  bg-[#f7f7f7] py-10 md:py-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-36 items-start">
            {/* Left Side - Header and Contact Info */}
            <div className="space-y-8 border-x-1 border-b-1 ">
              {/* Header Section */}
              <div className=" border-b-1 py-24 px-10">
                <h1 className="text-4xl lg:text-5xl  font-bold text-gray-900 mb-6">
                  Let&rsquo;s get in <br /> touch
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Do you have any questions or are you running into something?
                  We are happy to help you. Leave a message and we will get back
                  to you within 1 business day
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 flex justify-between px-5 pb-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-[20px] w-[20px] bg-[#f7eac6]">
                    <Image
                      src={flag}
                      alt="Industrial worker in safety gear working on equipment"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <span className="text-sm text-gray-600 font-medium">
                    NETHERLANDS
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-3 ">
                    <FaPhone className="w-4 h-4 text-gray-600" />
                    <Link href={""}>
                      <span className="text-sm text-gray-600">
                        +31 10 421 52 55
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 mt-2">
                    <IoMdMail className="w-4 h-4 text-gray-600" />
                    <Link href={""}>
                      <span className="text-sm text-gray-600">
                     info@htctechniek.com
                      </span>
                    </Link>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <IoLocationSharp className="w-4 h-4 text-gray-600 mt-0.5" />
                    <div className="text-sm text-gray-600">
                      <div>Rivium Quadrant 2</div>
                      <div>2909 LC Capelle aan den IJssel</div>
                      <div>The Netherlands</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className=" px-2 py-5 rounded-lg shadow-sm ">
              <form onSubmit={handleSubmit} className="space-y-6 p-5 bg-white">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    NAME <span className="text-[#f24f46]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. James Torn"
                    className="w-full px-4 py-3 text-[#D7D3D0] border-b border-gray-200   outline-none"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email<span className="text-[#f24f46]"> *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. jamestorn@htctechniek.com"
                    className="w-full px-4 py-3 border-b border-gray-200   outline-none"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    PHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 123-456-789"
                    className="w-full px-4 py-3 border-b border-gray-200    outline-none"
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    COMPANY
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. HTC Techniek"
                    className="w-full px-4 py-3 border-b border-gray-200    outline-none"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    MESSAGE*
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here"
                    className="w-full px-4 py-3 border-b border-gray-200   outline-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-md transition-colors duration-200"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
