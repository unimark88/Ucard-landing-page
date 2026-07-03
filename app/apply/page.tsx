import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CreditCard, ShieldCheck, Globe2, Wallet, CheckCircle, ChevronRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SignupForm } from "@/components/signup-form"

export const metadata: Metadata = {
  title: "Get Your USDT Visa Card | Apply for the Ucard Crypto Debit Card",
  description:
    "Apply for the Ucard USDT Visa and Mastercard debit card. Spend USDT anywhere, top up instantly from your crypto wallet, and get approved in minutes with fast KYC. Join the waitlist today.",
  keywords: [
    "USDT Visa card",
    "apply for USDT card",
    "get a USDT debit card",
    "crypto Visa card",
    "USDT Mastercard",
    "buy USDT card",
    "stablecoin debit card",
    "crypto card application",
  ],
  alternates: { canonical: "/apply" },
  openGraph: {
    title: "Get Your USDT Visa Card | Apply for Ucard",
    description:
      "Apply for the Ucard USDT Visa and Mastercard debit card. Spend USDT anywhere and top up instantly from your crypto wallet.",
    url: "/apply",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Get your Ucard USDT Visa Card" }],
  },
}

const steps = [
  {
    icon: Wallet,
    title: "1. Create your account",
    desc: "Sign up with your email in under a minute. No bank account or credit history required.",
  },
  {
    icon: ShieldCheck,
    title: "2. Complete quick KYC",
    desc: "Verify your identity with our licensed KYC/AML partner. Most applications are approved within minutes.",
  },
  {
    icon: CreditCard,
    title: "3. Top up and spend",
    desc: "Fund your card with USDT from any wallet or exchange and start spending anywhere Visa and Mastercard are accepted.",
  },
]

const benefits = [
  "Spend USDT at 90M+ Visa and Mastercard merchants worldwide",
  "Instant top-up from any on-chain wallet or exchange",
  "Virtual card issued instantly, physical card shipped globally",
  "Earn transparent DeFi yield on your idle USDT balance",
  "No hidden FX fees and real-time on-chain transaction tracking",
  "Licensed partners with full KYC/AML compliance and 256-bit encryption",
]

const faqs = [
  {
    q: "What is a USDT Visa card?",
    a: "A USDT Visa card is a debit card funded with the USDT stablecoin. Ucard converts your USDT to fiat at the point of sale, so you can spend your crypto anywhere Visa or Mastercard is accepted — online, in stores, and at ATMs.",
  },
  {
    q: "How do I apply for the Ucard USDT card?",
    a: "Join the waitlist using the form on this page, complete a short identity verification (KYC), then top up your card with USDT. Most users are approved within minutes and receive a virtual card instantly.",
  },
  {
    q: "Which countries can apply?",
    a: "Ucard supports users across 180+ countries. Availability of the physical card and specific features may vary by region based on local regulations.",
  },
  {
    q: "Is there a fee to get a USDT debit card?",
    a: "Joining the waitlist is free. Ucard uses transparent pricing with no hidden foreign exchange markups. Full fee details are shared during onboarding.",
  },
]

export default function ApplyPage() {
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
          <li className="font-medium text-slate-900" aria-current="page">Get Your Ucard</li>
        </ol>
      </nav>

      {/* HERO + FORM */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-6 py-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mb-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
            Apply in minutes
          </div>
          <h1 className="max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
            Get Your <span className="text-[#2563EB]">USDT Visa Card</span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 lg:text-lg">
            The Ucard USDT debit card lets you spend stablecoins like cash. Apply today, complete a fast KYC check, and
            top up instantly from any crypto wallet to spend across 180+ countries.
          </p>

          <ul className="mt-6 space-y-3">
            {benefits.slice(0, 4).map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB]">
                  <CheckCircle className="h-3 w-3 text-white" />
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <SignupForm
          labels={{
            title: "Get Your Ucard",
            subtitle: "Join the waitlist and be first to spend your USDT like cash.",
            name: "Full Name",
            namePlaceholder: "Jane Doe",
            email: "Email Address",
            emailPlaceholder: "you@example.com",
            country: "Country",
            countryPlaceholder: "Select your country",
            submit: "Join the Waitlist",
            submitting: "Submitting...",
            successTitle: "You're on the list!",
            successDesc: "Thanks for signing up. We'll email you as soon as your Ucard is ready.",
          }}
        />
      </section>

      {/* HOW TO GET */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">
          How to Get Your USDT Debit Card
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm leading-relaxed text-slate-600 md:text-base">
          Getting a crypto Visa card with Ucard takes three simple steps — no bank account required.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
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

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <div className="flex items-center gap-3">
            <Globe2 className="h-6 w-6 text-[#2563EB]" />
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Why Choose the Ucard USDT Card</h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB]">
                  <CheckCircle className="h-3 w-3 text-white" />
                </span>
                <span className="text-sm leading-relaxed text-slate-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Frequently Asked Questions</h2>
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
          <h2 className="text-2xl font-extrabold md:text-3xl">Ready to spend your USDT like cash?</h2>
          <p className="mt-2 text-blue-200">Join thousands of users on the Ucard waitlist.</p>
          <Link
            href="#top"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#1E3A8A] transition hover:bg-slate-100"
          >
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <SiteFooter />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  )
}
