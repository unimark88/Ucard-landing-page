import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Gift,
  Trophy,
  Target,
  Users,
  Sparkles,
  Coins,
  CheckCircle,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "USDT Card Rewards & Cashback | Explore Ucard Rewards",
  description:
    "Explore Ucard rewards: earn points and cashback every time you spend USDT, complete quests, level up, and invite friends. Turn your USDT Visa card into a rewarding everyday experience.",
  keywords: [
    "USDT card rewards",
    "crypto card cashback",
    "USDT Visa card rewards",
    "crypto rewards program",
    "spend USDT earn rewards",
    "crypto debit card cashback",
    "stablecoin rewards",
  ],
  alternates: { canonical: "/rewards" },
  openGraph: {
    title: "USDT Card Rewards & Cashback | Ucard",
    description:
      "Earn points and cashback every time you spend USDT, complete quests, level up, and invite friends with Ucard.",
    url: "/rewards",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Ucard USDT card rewards" }],
  },
}

const earnWays = [
  {
    icon: Coins,
    title: "Spend to earn",
    desc: "Collect reward points on every USDT purchase you make with your Ucard Visa or Mastercard.",
  },
  {
    icon: Target,
    title: "Complete quests",
    desc: "Finish daily and weekly missions — like topping up, spending, or trying new features — to unlock bonus points.",
  },
  {
    icon: Users,
    title: "Invite friends",
    desc: "Share your referral link and earn rewards when friends get their own USDT card and start spending.",
  },
  {
    icon: Sparkles,
    title: "Daily check-ins",
    desc: "Open the app each day to keep your streak alive and stack up extra points over time.",
  },
]

const tiers = [
  {
    name: "Starter",
    level: "Level 1–4",
    perks: ["Base points on every spend", "Access to daily quests", "Referral rewards"],
  },
  {
    name: "Pro",
    level: "Level 5–11",
    perks: ["Boosted points multiplier", "Higher cashback on spend", "Exclusive seasonal quests"],
    featured: true,
  },
  {
    name: "Elite",
    level: "Level 12+",
    perks: ["Maximum rewards multiplier", "Priority support", "Early access to new features"],
  },
]

const faqs = [
  {
    q: "How do Ucard rewards work?",
    a: "Every time you spend USDT with your Ucard, you earn reward points. You can also earn by completing quests, checking in daily, and inviting friends. Points help you level up and unlock higher cashback and perks.",
  },
  {
    q: "Do I earn cashback for spending USDT?",
    a: "Yes. As you level up your Ucard, your rewards multiplier increases, so you earn more points and cashback on everyday USDT spending.",
  },
  {
    q: "How do I level up?",
    a: "Levels rise as you complete quests, spend with your card, and stay active. Higher levels unlock bigger multipliers and exclusive benefits in the Pro and Elite tiers.",
  },
  {
    q: "Can I earn rewards for referrals?",
    a: "Absolutely. Share your unique referral link, and when friends get their USDT Visa card and start spending, you both earn bonus rewards.",
  },
]

export default function ExplorePage() {
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
          Level up your experience
        </div>
        <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-5xl text-balance">
          Earn Rewards Every Time You <span className="text-[#2563EB]">Spend USDT</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          Ucard turns your USDT Visa card into a game. Earn points and cashback on every purchase, complete quests, level
          up your tier, and invite friends to unlock exclusive rewards.
        </p>
      </section>

      {/* WAYS TO EARN */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Ways to Earn Rewards</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {earnWays.map((w) => (
            <div key={w.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-900">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIERS */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="rounded-2xl bg-[#EFF6FF] p-6 md:p-10">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-[#2563EB]" />
            <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Reward Tiers & Levels</h2>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            The more you spend and engage, the higher your level — and the bigger your rewards multiplier.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-6 shadow-sm ${
                  tier.featured ? "border-[#2563EB] bg-white ring-2 ring-blue-100" : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-slate-900">{tier.name}</h3>
                  {tier.featured ? (
                    <span className="rounded-full bg-[#2563EB] px-2.5 py-0.5 text-xs font-semibold text-white">
                      Popular
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-medium text-[#2563EB]">{tier.level}</p>
                <ul className="mt-4 space-y-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                      <span className="text-sm leading-relaxed text-slate-600">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="text-center text-2xl font-extrabold tracking-tight md:text-3xl">Rewards FAQ</h2>
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
          <Gift className="mx-auto mb-3 h-8 w-8" />
          <h2 className="text-2xl font-extrabold md:text-3xl">Start earning rewards on your USDT</h2>
          <p className="mt-2 text-blue-200">Get your Ucard and turn everyday spending into perks.</p>
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
