import Link from "next/link"
import { ArrowRight } from "lucide-react"

const navLinks = [
  { label: "How It Works", href: "/info" },
  { label: "Rewards", href: "/explore" },
  { label: "Partners", href: "/partner" },
  { label: "Get Ucard", href: "/apply" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#F8FAFC]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
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

        <a
          href="https://app.ucard.cc"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90"
        >
          Launch App <ArrowRight className="ml-1 inline h-4 w-4" />
        </a>
      </div>
    </header>
  )
}
