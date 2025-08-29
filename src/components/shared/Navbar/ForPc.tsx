"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import { usePathname } from "next/navigation"; // ← Hook to get current route

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  // { label: "Home", href: "/" },
  { label: "Vacancies", href: "/vacancies" },
  { label: "For Employers", href: "/for-employee" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ← Get current route

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Thin dark strip on top */}
      <div className="h-1 w-full bg-zinc-900" aria-hidden="true" />

      {/* Main bar */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Three-column layout */}
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2">
            {/* Left: Logo */}
            <Link href="/" className="justify-self-start" aria-label="Go to home">
              <Image
                src="/images/logo.png"
                alt="HTC Techniek Logo"
                width={120}
                height={30}
                className="object-contain"
                priority
              />
            </Link>

            {/* Center: Nav Links (Desktop) */}
            <nav aria-label="Main" className="hidden justify-self-center md:flex md:items-center md:gap-8">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`md:text-[14px] text-[12px] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-zinc-900 ${
                      isActive
                        ? "text-[#F4C015]" // Active color (yellow)
                        : "text-zinc-700 hover:text-zinc-900" // Default
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: CTA (Desktop) + Menu (Mobile) */}
            <div className="flex items-center gap-2 justify-self-end">
              {/* CTA Desktop */}
              <div className="hidden md:block">
                <Button
                  type="primary"
                  className="h-9 rounded-md px-4 text-[11px] font-semibold uppercase tracking-wide"
                  style={{
                    backgroundColor: "#F4C015",
                    borderColor: "#F4C015",
                    color: "#0f0f0f",
                  }}
                >
                  <Link href="/contact" className="text-[inherit]">
                    Contact Us
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Trigger */}
              <div className="md:hidden">
                <Button
                  aria-label="Open navigation menu"
                  shape="default"
                  className="h-9"
                  onClick={() => setOpen(true)}
                >
                  <MenuOutlined />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        width={300}
        title="Menu"
      >
        <div className="grid gap-1">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#F4C015] font-bold" // Active link in yellow
                    : "text-zinc-800 hover:bg-zinc-100" // Inactive
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="mt-6">
          <Button
            type="primary"
            block
            className="rounded-md text-sm font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: "#F4C015",
              borderColor: "#F4C015",
              color: "#0f0f0f",
              height: 38,
            }}
            onClick={() => setOpen(false)}
          >
            <Link href="/contact" className="text-[inherit]">
              Contact Us
            </Link>
          </Button>
        </div>
      </Drawer>
    </header>
  );
}