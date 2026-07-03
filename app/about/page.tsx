import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Target,
  ShieldCheck,
  Globe2,
  Users,
  Sparkles,
  Building2,
  CheckCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About Ucard | The Team Behind the USDT Visa Card",
  description:
    "Learn about Ucard, the company building the USDT Visa and Mastercard crypto debit card. Our mission is to make spending USDT stablecoins as easy as cash — secure, compliant, and available worldwide.",
  keywords: [
    "about Ucard",
    "USDT card company",
    "crypto debit card provider",
    "USDT Visa card team",
    "stablecoin card mission",
    "crypto payments company",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ucard | The USDT Visa Card Company",
    description:
      "Our mission is to make spending USDT stablecoins as easy as cash — secure, compliant, and available worldwide.",
    url: "/about",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "About Ucard" }],
  },
}

const values = [
  {
    icon: ShieldCheck,
    title: "Security first",
    desc: "Every Ucard USDT card is backed by bank-grade security, full KYC/AML compliance, and on-chain transparency so your funds are always protected.",
  },
  {
    icon: Globe2,
    title: "Borderless by design",
    desc: "We believe spending crypto shouldn't stop at borders. Ucard works across 180+ countries wherever Visa and Mastercard are accepted.",
  },
  {
    icon: Sparkles,
    title: "Simple and rewarding",
    desc: "From instant USDT top-ups to cashback and rewards, we make the crypto debit card experience effortless and worthwhile.",
  },
]

const stats = [
  { value: "180+", label: "Countries supported" },
  { value: "USDT", label: "Spend stablecoins directly" },
  { value: "Visa & MC", label: "Global card networks" },
  { value: "24/7", label: "Support & monitoring" },
]

const faqs = [
  {
    q: "What is Ucard?",
    a: "Ucard is a crypto debit card platform that lets you spend USDT stablecoins anywhere Visa and Mastercard are accepted. Our mission is to bridge on-chain funds with everyday spending — securely and compliantly.",
  },
  {
    q: "Who is Ucard for?",
    a: "Ucard is built for anyone who holds USDT and wants to spend it in the real world — from crypto natives and freelancers paid in stablecoins to travelers and everyday shoppers.",
  },
  {
    q: "Is Ucard regulated and compliant?",
    a: "Yes. Ucard follows full KYC and AML procedures and partners with regulated card issuers so your USDT Visa card meets global compliance standards.",
  },
  {
    q: "How do I get started with Ucard?",
    a: "Getting a USDT Visa card is simple — apply online, complete verification, top up with USDT, and start spending anywhere Visa and Mastercard are accepted.",
  },
]

export default function AboutPage() {
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

      {/* HERO */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center">
        <div className="mb-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
          About Ucard
        </div>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
          Making <span className="text-[#2563EB]">USDT</span> Spendable Everywhere
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Ucard is the company building the USDT Visa and Mastercard crypto debit card. We&apos;re on a mission to make
          spending stablecoins as easy as cash — secure, compliant, and available around the world.
        </p>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-[#2563EB]" />
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Our Mission</h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            Billions of dollars in USDT sit on-chain, but spending it in daily life is still hard. Ucard exists to close
            that gap. By connecting your stablecoin balance to the global Visa and Mastercard networks, we let you pay
            online, in stores, and at ATMs across 180+ countries — while your funds stay transparent and on-chain until
            the moment you spend.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-[#2563EB] md:text-3xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">What We Stand For</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-[#2563EB]" />
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Who We Serve</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Crypto holders who want to spend USDT in everyday life",
              "Freelancers and remote workers paid in stablecoins",
              "Travelers who need a borderless USDT debit card",
              "Businesses and agents expanding crypto payments",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" />
                <span className="text-sm leading-relaxed text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl scroll-mt-24 px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">About & Help FAQ</h2>
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
          <Building2 className="mx-auto mb-3 h-8 w-8" />
          <h2 className="text-2xl font-extrabold md:text-3xl">Join the future of spending USDT</h2>
          <p className="mt-2 text-blue-200">Get your Ucard and put your stablecoins to work.</p>
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
