"use client"

import Link from "next/link"
import { useState } from "react"
import { Button, Drawer } from "antd"
import { MenuOutlined } from "@ant-design/icons"

type NavLink = {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "Vacancies", href: "/vacancies" },
  { label: "For Employers", href: "/for-employers" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
]

// Simple logo to approximate the tilted yellow square + TECHNIEK
function LogoHTC({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-6 w-6 -rotate-12 rounded-[2px] bg-[#F4C015] shadow" aria-hidden="true">
        <span className="absolute inset-0 flex items-center justify-center rotate-12 text-[10px] font-extrabold tracking-wide text-white">
          {"HTC"}
        </span>
      </div>
      <span className="text-sm font-extrabold tracking-wide text-zinc-900">{"TECHNIEK"}</span>
      <span className="sr-only">{"HTC TECHNIEK"}</span>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full">
      {/* thin dark strip on top */}
      <div className="h-1 w-full bg-zinc-900" aria-hidden="true" />

      {/* main bar */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {/* three-column layout to keep center nav perfectly centered */}
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-2">
            {/* left: logo */}
            <Link href="/" className="justify-self-start" aria-label="Go to home">
              <LogoHTC />
            </Link>

            {/* center: nav links (desktop) */}
            <nav aria-label="Main" className="hidden justify-self-center md:flex md:items-center md:gap-8">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-700 transition-colors hover:text-zinc-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* right: CTA (desktop) + menu (mobile) */}
            <div className="flex items-center gap-2 justify-self-end">
              {/* CTA desktop */}
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
                    {"Contact Us"}
                  </Link>
                </Button>
              </div>

              {/* Mobile menu trigger */}
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
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium uppercase tracking-wider text-zinc-800 hover:bg-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Button
            type="primary"
            block
            className="rounded-md text-[12px] font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: "#F4C015",
              borderColor: "#F4C015",
              color: "#0f0f0f",
              height: 38,
            }}
            onClick={() => setOpen(false)}
          >
            <Link href="/contact" className="text-[inherit]">
              {"Contact Us"}
            </Link>
          </Button>
        </div>
      </Drawer>
    </header>
  )
}
