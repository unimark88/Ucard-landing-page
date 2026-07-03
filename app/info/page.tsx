import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CreditCard,
  Globe2,
  TrendingUp,
  ShieldCheck,
  Wallet,
  Coins,
  Lock,
  ChevronRight,
  CheckCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "What Is a USDT Visa Card? How the Ucard Crypto Debit Card Works",
  description:
    "Learn how a USDT Visa card works. Ucard is a crypto debit card that lets you spend USDT stablecoins anywhere Visa and Mastercard are accepted, earn yield on idle balance, and track funds on-chain — with full KYC/AML compliance.",
  keywords: [
    "what is a USDT card",
    "USDT Visa card",
    "how USDT debit card works",
    "crypto debit card",
    "USDT to fiat card",
    "spend USDT",
    "stablecoin Visa card",
    "USDT Mastercard",
    "best USDT card",
  ],
  alternates: { canonical: "/info" },
  openGraph: {
    title: "What Is a USDT Visa Card? How Ucard Works",
    description:
      "A crypto debit card that lets you spend USDT anywhere Visa and Mastercard are accepted. Learn how the Ucard USDT card works.",
    url: "/info",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "How the Ucard USDT Visa card works" }],
  },
}

const howItWorks = [
  {
    icon: Wallet,
    title: "Top up with USDT",
    desc: "Fund your Ucard instantly with USDT from any on-chain wallet or exchange. Support for major networks means low fees and fast confirmations.",
  },
  {
    icon: Globe2,
    title: "Spend anywhere",
    desc: "Your USDT is converted to local currency at the point of sale, so you can pay online, in stores, and at ATMs across 180+ countries wherever Visa and Mastercard are accepted.",
  },
  {
    icon: TrendingUp,
    title: "Earn while you hold",
    desc: "Idle USDT on your card generates transparent DeFi yield automatically — no lock-ups, no hidden fees, and full on-chain visibility.",
  },
]

const whyUsdt = [
  {
    icon: Coins,
    title: "Stable value",
    desc: "USDT is pegged 1:1 to the US dollar, so your spending power stays predictable — unlike volatile cryptocurrencies.",
  },
  {
    icon: CreditCard,
    title: "Real-world acceptance",
    desc: "A USDT Visa card bridges crypto and everyday commerce, letting you use stablecoins for groceries, travel, subscriptions, and more.",
  },
  {
    icon: Lock,
    title: "Self-custody friendly",
    desc: "Top up from your own wallet and keep full on-chain transparency over every transaction you make.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated & secure",
    desc: "Built with licensed partners, KYC/AML compliance, secure custody, and 256-bit encryption for peace of mind.",
  },
]

const comparison = [
  { feature: "Fund with USDT stablecoin", ucard: true, bank: false },
  { feature: "Spend at Visa/Mastercard merchants", ucard: true, bank: true },
  { feature: "Earn yield on idle balance", ucard: true, bank: false },
  { feature: "On-chain transaction transparency", ucard: true, bank: false },
  { feature: "No traditional bank account required", ucard: true, bank: false },
  { feature: "Global access in 180+ countries", ucard: true, bank: false },
]

const faqs = [
  {
    q: "What is a USDT Visa card?",
    a: "A USDT Visa card is a debit card that is funded with the USDT stablecoin instead of a traditional bank balance. When you pay, your USDT is converted to local currency at the point of sale, letting you spend crypto anywhere Visa or Mastercard is accepted.",
  },
  {
    q: "Is USDT the same as spending US dollars?",
    a: "USDT (Tether) is a stablecoin pegged 1:1 to the US dollar, so its value stays close to one dollar. With a USDT debit card, spending USDT feels similar to spending dollars, but the funds live on-chain in your wallet until you use them.",
  },
  {
    q: "Can I use a USDT card anywhere in the world?",
    a: "Yes. Because Ucard runs on the Visa and Mastercard networks, you can spend at more than 90 million merchants and withdraw at ATMs across 180+ countries, subject to local regulations.",
  },
  {
    q: "How is a USDT debit card different from a bank card?",
    a: "A USDT card is funded with stablecoins from your own crypto wallet rather than a bank account. It offers on-chain transparency, optional DeFi yield on your idle balance, and does not require a traditional bank relationship to get started.",
  },
  {
    q: "Is a USDT Visa card safe?",
    a: "Ucard works with licensed payment partners and applies full KYC/AML checks, secure custody, transaction monitoring, and 256-bit encryption. You also keep on-chain visibility of your funds at all times.",
  },
]

export default function InfoPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      <SiteHeader />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6">
        <ol className="flex items-center gap-1 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-slate-900">Home</Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-4 w-4" /></li>
          <li className="font-medium text-slate-900" aria-current="page">How It Works</li>
        </ol>
      </nav>

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center">
        <div className="mb-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
          Learn More
        </div>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
          What Is a <span className="text-[#2563EB]">USDT Visa Card</span> and How Does It Work?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          A USDT Visa card lets you spend the USDT stablecoin like everyday cash. Ucard converts your stablecoins to
          local currency at checkout, so you can pay online, in stores, and at ATMs anywhere Visa and Mastercard are
          accepted — while your idle balance keeps earning yield on-chain.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/apply"
            className="inline-flex items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90 md:text-base"
          >
            Get Your Ucard <ArrowRight size={16} />
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:text-base"
          >
            Explore Rewards
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">How the Ucard USDT Card Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {howItWorks.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY USDT */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Why Spend With a USDT Debit Card?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            Stablecoins combine the speed and transparency of crypto with the price stability of the US dollar. That
            makes a USDT card the practical way to bring your on-chain funds into everyday life.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {whyUsdt.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                  <w.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">
          USDT Card vs. Traditional Bank Card
        </h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-4 font-bold text-slate-900">Feature</th>
                <th className="px-5 py-4 text-center font-bold text-[#2563EB]">Ucard USDT Card</th>
                <th className="px-5 py-4 text-center font-bold text-slate-500">Traditional Card</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-slate-100 last:border-0">
                  <td className="px-5 py-4 text-slate-700">{row.feature}</td>
                  <td className="px-5 py-4 text-center">
                    {row.ucard ? (
                      <CheckCircle className="mx-auto h-5 w-5 text-[#2563EB]" aria-label="Yes" />
                    ) : (
                      <span className="text-slate-300" aria-label="No">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-center">
                    {row.bank ? (
                      <CheckCircle className="mx-auto h-5 w-5 text-slate-400" aria-label="Yes" />
                    ) : (
                      <span className="text-slate-300" aria-label="No">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">
          USDT Card FAQ
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-8 text-center text-white md:px-8 md:py-10">
          <h2 className="text-2xl font-extrabold md:text-3xl">Start spending your USDT today</h2>
          <p className="mt-2 text-blue-200">Get the USDT Visa card built for everyday life.</p>
          <Link
            href="/apply"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#1E3A8A] transition hover:bg-slate-100"
          >
            Get Your Ucard <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  )
}
