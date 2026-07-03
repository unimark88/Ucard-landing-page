import Link from "next/link"
import { X, Send, Users, Globe2 } from "lucide-react"

const footerCols = [
  {
    title: "Products",
    items: [
      { label: "USDT Card", href: "/apply" },
      { label: "How It Works", href: "/info" },
      { label: "Rewards", href: "/explore" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Partners", href: "/partner" },
      { label: "About Us", href: "/info" },
      { label: "Apply Now", href: "/apply" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "/info" },
      { label: "Contact Us", href: "/partner" },
      { label: "Get Your Ucard", href: "/apply" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "KYC & AML", href: "/info" },
      { label: "Compliance", href: "/info" },
      { label: "Risk Disclosure", href: "/info" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 md:py-10 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/ucard-logo.png" alt="Ucard" className="h-7 w-auto" />
            <span className="text-lg font-bold">Ucard</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">
            The USDT debit card for everyday life. Spend USDT anywhere Visa and Mastercard are accepted, earn yield, and
            stay on-chain — all in one app.
          </p>
          <div className="mt-4 flex gap-3">
            {[X, Send, Users, Globe2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-slate-900">{col.title}</h4>
            <div className="mt-3 space-y-2">
              {col.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block cursor-pointer text-sm text-slate-500 transition hover:text-slate-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <p className="text-xs text-slate-400">© 2024 Ucard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
