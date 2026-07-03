import type { Metadata } from "next"
import {
  ArrowRight,
  Users,
  TrendingUp,
  Handshake,
  Store,
  Globe2,
  BadgeDollarSign,
  Headphones,
  CheckCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Become a Partner or Agent | Ucard USDT Card Partner Program",
  description:
    "Grow with the Ucard partner and agent program. Earn commissions by distributing the USDT Visa card, refer businesses, and expand crypto payments in your market. Apply to become a Ucard partner today.",
  keywords: [
    "USDT card partner",
    "crypto card agent program",
    "USDT card affiliate",
    "become a Ucard partner",
    "crypto payments partner",
    "USDT Visa card reseller",
    "stablecoin card partner program",
  ],
  alternates: { canonical: "/agents" },
  openGraph: {
    title: "Become a Partner or Agent | Ucard",
    description:
      "Earn commissions by distributing the Ucard USDT Visa card and expanding crypto payments in your market.",
    url: "/agents",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Become a Ucard partner" }],
  },
}

const partnerTypes = [
  {
    icon: Users,
    title: "Agents & Affiliates",
    desc: "Promote the Ucard USDT card to your audience and earn recurring commissions on every user who signs up and spends.",
  },
  {
    icon: Store,
    title: "Merchants & Businesses",
    desc: "Accept USDT-backed payments and offer branded card programs to your customers with our infrastructure.",
  },
  {
    icon: Handshake,
    title: "Regional Distributors",
    desc: "Bring the USDT Visa card to new markets with localized onboarding, support, and go-to-market resources.",
  },
]

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "Competitive commissions",
    desc: "Earn attractive, transparent revenue share on card issuance, top-ups, and spend from your referred users.",
  },
  {
    icon: Globe2,
    title: "Global reach",
    desc: "Tap into demand for USDT debit cards across 180+ countries backed by the Visa and Mastercard networks.",
  },
  {
    icon: TrendingUp,
    title: "Growth tools",
    desc: "Get marketing assets, referral tracking dashboards, and real-time analytics to scale your business.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    desc: "Work with a partner success team plus compliance and technical resources to launch quickly.",
  },
]

const steps = [
  { title: "1. Apply", desc: "Tell us about your business and audience through the partner application." },
  { title: "2. Onboard", desc: "Get approved, sign our partner agreement, and receive your referral tools." },
  { title: "3. Grow", desc: "Start distributing the Ucard USDT card and earn commissions as your users spend." },
]

const faqs = [
  {
    q: "How does the Ucard partner program work?",
    a: "Partners and agents earn commissions by referring new users and businesses to the Ucard USDT Visa card. Once approved, you receive referral links, marketing assets, and a dashboard to track your earnings in real time.",
  },
  {
    q: "Who can become a Ucard partner?",
    a: "Affiliates, influencers, crypto communities, merchants, payment providers, and regional distributors can all apply. If you have an audience or network interested in spending crypto, the program is for you.",
  },
  {
    q: "How much can I earn as an agent?",
    a: "Commissions are based on card issuance, top-ups, and user spend from your referrals. Exact rates are shared during onboarding and scale with your volume.",
  },
  {
    q: "Is there a cost to join the partner program?",
    a: "Applying is free. We review each application to ensure a good fit, then provide the tools and support you need to start earning.",
  },
]

export default function PartnerPage() {
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
          Grow with Ucard
        </div>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
          Become a <span className="text-[#2563EB]">Ucard Partner</span> or Agent
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Join the Ucard partner program and help expand the future of crypto payments. Earn commissions by distributing
          the USDT Visa card, referring businesses, and bringing stablecoin spending to your market.
        </p>
      </section>

      {/* PARTNER TYPES */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Ways to Partner With Ucard</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {partnerTypes.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB]">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Why Partner With Ucard</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            The demand for USDT debit cards is growing worldwide. Partner with Ucard to monetize that demand with the
            tools and support to succeed.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#2563EB]">
                  <b.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO JOIN */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">How to Become a Partner</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#2563EB]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Partner Program FAQ</h2>
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
          <Handshake className="mx-auto mb-3 h-8 w-8" />
          <h2 className="text-2xl font-extrabold md:text-3xl">Ready to grow with Ucard?</h2>
          <p className="mt-2 text-blue-200">Apply to the partner program and start earning.</p>
          <a
            href="mailto:partners@ucard.cc?subject=Ucard%20Partner%20Application"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#1E3A8A] transition hover:bg-slate-100"
          >
            Become a Partner <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  )
}
