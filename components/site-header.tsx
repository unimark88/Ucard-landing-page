"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Apply", href: "/apply" },
  { label: "Features", href: "/features" },
  { label: "Rewards", href: "/rewards" },
  { label: "Partner", href: "/partner" },
  { label: "About Us", href: "/about" },
  { label: "Info", href: "/info" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#F8FAFC]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src="/images/ucard-logo.png" alt="Ucard" className="h-8 w-auto" />
          <span className="text-xl font-bold tracking-tight">Ucard</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="cursor-pointer transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://app.ucard.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90 sm:inline-block"
          >
            Launch App <ArrowRight className="ml-1 inline h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-200/70 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-[#F8FAFC] px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-200/60"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.ucard.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#1E3A8A] px-5 py-3 text-base font-semibold text-white transition hover:bg-[#1E3A8A]/90"
            >
              Launch App <ArrowRight className="ml-1 inline h-4 w-4" />
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
