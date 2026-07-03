import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CreditCard,
  TrendingUp,
  Globe2,
  Gift,
  ShieldCheck,
  Smartphone,
  Wallet,
  Layers,
  Zap,
  Eye,
  CheckCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "USDT Visa Card Features | Cashback, Yield & Global Spending — Ucard",
  description:
    "Explore Ucard USDT Visa card features: spend USDT anywhere Visa and Mastercard are accepted, earn yield on idle balance, gamified cashback rewards, virtual and physical cards, multi-network top-ups, and on-chain transparency.",
  keywords: [
    "USDT card features",
    "USDT Visa card benefits",
    "crypto debit card features",
    "USDT cashback card",
    "virtual USDT card",
    "physical crypto card",
    "USDT Mastercard features",
    "stablecoin card rewards",
    "best USDT card features",
  ],
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Ucard USDT Visa Card Features",
    description:
      "Spend USDT anywhere, earn yield, unlock cashback rewards, and manage virtual and physical cards — all with on-chain transparency.",
    url: "/features",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ucard USDT Visa card features" }],
  },
}

const coreFeatures = [
  {
    icon: CreditCard,
    title: "Spend USDT anywhere",
    desc: "Use your USDT Visa card at 90M+ merchants online, in-store, and at ATMs across 180+ countries. Your stablecoins convert to local currency instantly at checkout.",
  },
  {
    icon: TrendingUp,
    title: "Earn yield while you hold",
    desc: "Idle USDT on your card earns transparent DeFi yield automatically — no lock-ups, no hidden fees, and full on-chain visibility of your balance.",
  },
  {
    icon: Gift,
    title: "Gamified cashback rewards",
    desc: "Earn cashback in USDT on everyday spending, level up your tier, and unlock exclusive perks the more you use your Ucard.",
  },
  {
    icon: Eye,
    title: "On-chain transparency",
    desc: "Every top-up and transaction is verifiable on-chain, so you always keep full visibility and control of your funds.",
  },
  {
    icon: Layers,
    title: "Multi-network top-ups",
    desc: "Fund your USDT card from major networks and wallets with low fees and fast confirmations — no traditional bank account required.",
  },
  {
    icon: Smartphone,
    title: "Virtual & physical cards",
    desc: "Get an instant virtual USDT card for online payments and order a physical card for in-store and ATM use worldwide.",
  },
]

const security = [
  {
    icon: ShieldCheck,
    title: "Bank-grade security",
    desc: "256-bit encryption, secure custody, and 24/7 transaction monitoring protect every payment you make.",
  },
  {
    icon: CheckCircle,
    title: "KYC / AML compliant",
    desc: "Ucard partners with licensed issuers and applies full KYC and AML checks, so your USDT card meets global standards.",
  },
  {
    icon: Zap,
    title: "Instant control",
    desc: "Freeze and unfreeze your card, set spending limits, and manage everything in real time from the Ucard app.",
  },
  {
    icon: Wallet,
    title: "Self-custody friendly",
    desc: "Top up from your own wallet and keep on-chain ownership of your USDT until the moment you spend it.",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <SiteHeader />

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center">
        <div className="mb-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
          Features
        </div>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
          Everything the <span className="text-[#2563EB]">USDT Visa Card</span> Can Do
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Ucard packs everyday spending power, DeFi yield, and cashback rewards into one crypto debit card. Explore the
          features that make it the practical way to spend USDT stablecoins in real life.
        </p>
      </section>

      {/* CORE FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {coreFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                <f.icon className="h-6 w-6" />
              </div>
              <h2 className="font-bold text-slate-900">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECURITY & CONTROL */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Security & Control Built In</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            A USDT debit card should be as safe as it is convenient. Ucard combines regulated infrastructure with
            real-time controls so you stay protected on every transaction.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {security.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "180+", label: "Countries supported" },
            { value: "90M+", label: "Visa/MC merchants" },
            { value: "0", label: "Lock-ups on yield" },
            { value: "24/7", label: "Card monitoring" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#2563EB] md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-8 text-center text-white md:px-8 md:py-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">Ready to put these features to work?</h2>
          <p className="mt-2 text-blue-200">Apply for your USDT Visa card and start spending in minutes.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#1E3A8A] transition hover:bg-slate-100"
            >
              Get Your Ucard <ArrowRight size={18} />
            </Link>
            <Link
              href="/info"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
