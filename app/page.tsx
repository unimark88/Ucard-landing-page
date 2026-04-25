"use client"

import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Gift,
  TrendingUp,
  Lock,
  CheckCircle,
  Users,
  CreditCard,
  Wallet,
  Send,
  RefreshCw,
  MoreHorizontal,
  ChevronDown,
  Apple,
  Play,
  Coffee,
  ShoppingBag,
  ArrowUpRight,
  Car,
  Flame,
  UserPlus,
  X,
  Star,
} from "lucide-react"

export default function UcardLandingPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-950">
      {/* NAV */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              stroke="white"
              strokeWidth="2.5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Ucard</span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          <a href="#" className="cursor-pointer transition hover:text-slate-900">Products</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">Features</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">Rewards</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">Agents</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">About Us</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">Help</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden cursor-pointer items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-slate-900 md:flex">
            <Globe2 size={16} />
            EN
            <ChevronDown size={14} />
          </button>
          <button className="cursor-pointer rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90">
            Get Ucard <ArrowRight className="ml-1 inline h-4 w-4" />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 overflow-hidden px-6 pb-20 pt-8 lg:grid-cols-2">
        {/* Background glow effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-400/30 to-blue-600/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-300/40 to-blue-500/30 blur-[120px]" />
        <div className="pointer-events-none absolute left-1/3 top-0 h-[300px] w-[300px] rounded-full bg-blue-200/50 blur-[80px]" />
        
        <div>
          <div className="mb-6 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
            The USDT Card for Everyday Life
          </div>

          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Spend Your USDT{" "}
            <span className="text-[#2563EB]">Like Cash</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            A seamless USDT card designed for real-world payments. Earn yield,
            stay on-chain, and spend globally.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90">
              Get Your Ucard <ArrowRight size={18} />
            </button>
            <button className="cursor-pointer rounded-md border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50">
              Learn More
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm font-bold text-slate-900">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="ml-1">4.9/5</span>
              </div>
              <div className="text-sm text-slate-500">
                Trusted by 50,000+ users worldwide
              </div>
            </div>
          </div>
        </div>

        {/* HERO MOCKUP */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-10 top-10 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-400/40 to-blue-600/30 blur-[80px]" />
          <div className="absolute -left-20 bottom-20 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-blue-300/30 to-blue-500/20 blur-[60px]" />

          {/* Card */}
          <div className="absolute -left-4 top-32 z-20 h-52 w-80 rotate-[-12deg] rounded-2xl bg-gradient-to-br from-[#0a1628] to-[#1E3A8A] p-6 text-white shadow-2xl lg:left-0">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold">Ucard</span>
            </div>
            <div className="mt-12 flex items-center gap-2">
              <div className="h-8 w-10 rounded bg-gradient-to-br from-yellow-300 to-yellow-500" />
            </div>
            <div className="absolute bottom-5 right-6 text-2xl font-black italic tracking-tight">
              VISA
            </div>
          </div>

          {/* Phone */}
          <div className="relative z-10 w-72 rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl">
            <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
            <div className="p-5 pt-10">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">Hello, Ucarder 👋</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100">
                  <span className="text-sm">🔔</span>
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs text-slate-500">Total Balance</p>
                <h3 className="mt-1 text-2xl font-extrabold text-slate-900">
                  12,856.00 <span className="text-base font-bold text-slate-500">USDT</span>
                </h3>
                <p className="text-xs text-green-500">+ $12,856.00</p>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                {[
                  { icon: Wallet, label: "Top Up" },
                  { icon: Send, label: "Send" },
                  { icon: RefreshCw, label: "Swap" },
                  { icon: MoreHorizontal, label: "More" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mx-auto mb-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                      <item.icon size={18} />
                    </div>
                    <span className="text-[10px] text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">Recent Transactions</span>
                  <span className="cursor-pointer text-[10px] text-[#2563EB] transition hover:underline">View all</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: Coffee, name: "Starbucks", time: "Today, 10:20", amount: "-12.80 USDT", color: "text-slate-600" },
                    { icon: ShoppingBag, name: "Amazon", time: "Today, 09:12", amount: "-45.90 USDT", color: "text-slate-600" },
                    { icon: ArrowUpRight, name: "Top Up", time: "Yesterday, 21:41", amount: "+200.00 USDT", color: "text-green-600" },
                    { icon: Car, name: "Uber", time: "Yesterday, 18:30", amount: "-8.50 USDT", color: "text-slate-600" },
                  ].map((tx) => (
                    <div key={tx.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#2563EB]">
                          <tx.icon size={14} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-900">{tx.name}</p>
                          <p className="text-[9px] text-slate-400">{tx.time}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-semibold ${tx.color}`}>{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-1 border-t border-slate-100 pt-3">
                {[
                  { icon: "🏠", label: "Home", active: true },
                  { icon: "💳", label: "Card" },
                  { icon: "🎁", label: "Rewards" },
                  { icon: "👤", label: "Profile" },
                ].map((item) => (
                  <div key={item.label} className={`text-center ${item.active ? "text-[#2563EB]" : "text-slate-400"}`}>
                    <span className="text-base">{item.icon}</span>
                    <p className="text-[8px]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl bg-[#EFF6FF] p-8 shadow-sm md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold leading-snug">Regulated &<br />Trusted Infrastructure</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Powered by licensed partners and global payment networks. Fully KYC / AML compliant with secure on-chain transparency.
            </p>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="text-3xl font-black italic text-[#1a1f71]">VISA</div>
              <p className="mt-1 text-xs text-slate-400">Global Payment Network</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="h-7 w-7 rounded-full bg-red-500" />
                <div className="-ml-2.5 h-7 w-7 rounded-full bg-orange-400 opacity-80" />
              </div>
              <p className="mt-2 text-xs text-slate-400">Licensed Partner</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">
                <span className="text-[#2563EB]">∞</span> sumsub
              </div>
              <p className="mt-1 text-xs text-slate-400">KYC / AML</p>
              <p className="text-[10px] text-slate-300">Verified</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-300">
                <ShieldCheck className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-2 text-xs text-slate-400">256-bit Encryption</p>
              <p className="text-[10px] text-slate-300">Secure & Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-60 top-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-blue-400/20 to-blue-600/10 blur-[80px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-blue-300/20 to-blue-500/10 blur-[70px]" />
        
        <h2 className="relative text-center text-3xl font-extrabold tracking-tight">
          Everything You Need in One Card
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<CreditCard className="h-6 w-6" />}
            title="Spend Anywhere"
            desc="Use your USDT globally with seamless conversion."
          />
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6" />}
            title="Earn While You Hold"
            desc="Idle USDT generates DeFi yield — transparently on-chain."
          />
          <FeatureCard
            icon={<Globe2 className="h-6 w-6" />}
            title="On-Chain Transparency"
            desc="Track your funds in real-time with full visibility on the blockchain."
          />
          <FeatureCard
            icon={<Gift className="h-6 w-6" />}
            title="Gamified Rewards"
            desc="Earn points, complete quests, and unlock exclusive benefits."
          />
        </div>
      </section>

      {/* APP EXPERIENCE */}
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 overflow-hidden px-6 pb-20 lg:grid-cols-2">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/25 to-blue-600/15 blur-[100px]" />
        
        <div className="relative flex justify-center">
          <div className="absolute h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-300/40 to-blue-500/30 blur-[80px]" />
          <div className="absolute -right-10 top-20 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-blue-400/30 to-blue-300/20 blur-[60px]" />
          
          {/* Phone with Card */}
          <div className="relative w-72 rounded-[2.5rem] border-[8px] border-slate-900 bg-white shadow-2xl">
            <div className="absolute left-1/2 top-3 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
            <div className="p-5 pt-10">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3 w-3"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  </svg>
                </div>
                <span className="text-sm font-bold">Ucard</span>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-[#0a1628] to-[#1E3A8A] p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-80">Virtual Card</span>
                </div>
                <div className="mt-8 flex items-center gap-2">
                  <div className="h-6 w-8 rounded bg-gradient-to-br from-yellow-300 to-yellow-500" />
                </div>
                <div className="mt-3 text-right text-xl font-black italic">VISA</div>
              </div>

              <div className="mt-4">
                <p className="text-xs text-slate-500">Available Balance</p>
                <h3 className="text-2xl font-extrabold">
                  12,856.00 <span className="text-sm font-bold text-slate-400">USDT</span>
                </h3>
                <p className="text-xs text-green-500">+ $12,856.00</p>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { icon: "❄️", label: "Freeze Card" },
                  { icon: "ℹ️", label: "Card Details" },
                  { icon: "⚙️", label: "Limit Settings" },
                  { icon: "•••", label: "More" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm">
                      {item.icon}
                    </div>
                    <span className="text-[8px] text-slate-500">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            Simple. Fast. Secure.
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight">
            Designed for Everyday Use
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "Instant top-up with USDT",
              "Real-time balance tracking",
              "Simple, intuitive interface",
              "Secure transaction history",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]">
                  <CheckCircle className="h-3 w-3 text-white" />
                </div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
              <Apple size={18} />
              <div className="text-left">
                <p className="text-[7px] leading-tight opacity-70">Download on the</p>
                <p className="text-xs font-semibold leading-tight">App Store</p>
              </div>
            </button>
            <button className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-50">
              <Play size={18} className="fill-current" />
              <div className="text-left">
                <p className="text-[7px] leading-tight text-slate-500">GET IT ON</p>
                <p className="text-xs font-semibold leading-tight">Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-20">
        {/* Background glow */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-gradient-to-bl from-blue-400/30 to-blue-600/20 blur-[100px]" />
        
        <div className="relative grid gap-8 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 lg:grid-cols-2 lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              Level up your experience
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight lg:text-4xl">
              More Than a Card —<br />It&apos;s a Journey
            </h2>
            <p className="mt-4 max-w-md text-slate-600">
              Complete missions. Earn points. Invite friends. Unlock levels and exclusive rewards.
            </p>
            <button className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
              Explore Rewards <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative py-8 lg:py-0">
              {/* Gift boxes decoration */}
              <div className="absolute -right-4 -top-4 z-10 flex h-14 w-14 rotate-6 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB] to-[#60A5FA] shadow-xl lg:-right-12 lg:-top-6 lg:h-16 lg:w-16">
                <Gift className="h-7 w-7 text-white lg:h-8 lg:w-8" />
              </div>
              <div className="absolute -bottom-2 -right-2 z-10 flex h-10 w-10 -rotate-12 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 shadow-xl lg:-bottom-4 lg:-right-6 lg:h-12 lg:w-12">
                <Star className="h-5 w-5 text-white lg:h-6 lg:w-6" />
              </div>
              <div className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 rotate-12 -translate-y-1/2 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#93C5FD] shadow-xl lg:-left-10 lg:h-12 lg:w-12">
                <Gift className="h-5 w-5 text-white lg:h-6 lg:w-6" />
              </div>

              <div className="w-80 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
                <div className="mb-4 flex items-start justify-between">
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                    <div className="flex items-center gap-2">
                      <Gift className="h-5 w-5 text-[#2563EB]" />
                      <div>
                        <h3 className="text-sm font-bold">Level 12</h3>
                        <p className="text-xs text-slate-500">Ucard Pro</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">2,450 / 3,000 XP</p>
                  </div>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#60A5FA]" />
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { icon: Flame, label: "Daily Check-in", xp: "+20 XP", done: true },
                    { icon: CreditCard, label: "Pay with Ucard", xp: "+50 XP", done: true },
                    { icon: UserPlus, label: "Invite a Friend", xp: "+100 XP", done: false },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563EB]">
                          <item.icon size={16} />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[#2563EB]">{item.xp}</span>
                        {item.done ? (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY + GLOBAL */}
      <section className="relative mx-auto grid max-w-7xl gap-6 overflow-hidden px-6 pb-10 md:grid-cols-2">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-400/15 to-blue-600/10 blur-[80px]" />
        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Built for Trust
          </p>
          <h3 className="mt-2 text-2xl font-extrabold">Security You Can Rely On</h3>
          <div className="mt-6 flex items-start justify-between gap-6">
            <div className="space-y-3">
              {[
                "Licensed partners & regulated infrastructure",
                "KYC & AML compliant",
                "Secure custody and transaction monitoring",
                "Transparent smart contract integration",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#2563EB]">
                    <CheckCircle className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-sm text-slate-600">{item}</span>
                </div>
              ))}
            </div>
            {/* 3D Shield */}
            <div className="relative shrink-0">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-4">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 shadow-inner">
                  <div className="relative">
                    <ShieldCheck className="h-10 w-10 text-slate-400" />
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]">
                      <Lock className="h-2.5 w-2.5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            Global Access
          </p>
          <h3 className="mt-2 text-2xl font-extrabold">Use Ucard Anywhere</h3>
          <p className="mt-3 text-sm text-slate-600">
            Online. Offline. Borderless. Your USDT, now truly spendable.
          </p>
          <div className="mt-6 flex h-32 items-center justify-center">
            <div className="relative w-full max-w-[220px]">
              {/* World map outline */}
              <svg viewBox="0 0 200 100" className="w-full text-slate-200">
                <ellipse cx="100" cy="50" rx="95" ry="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <ellipse cx="100" cy="50" rx="70" ry="33" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                <ellipse cx="100" cy="50" rx="45" ry="21" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
              </svg>
              {/* Location pins with pulse effect */}
              <div className="absolute left-[15%] top-[25%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute left-[42%] top-[20%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute left-[72%] top-[30%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute left-[28%] top-[55%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute left-[82%] top-[50%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
              <div className="absolute left-[55%] top-[60%]">
                <div className="h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-lg shadow-blue-500/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 p-3 text-[#2563EB]">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2563EB]">Grow With Ucard</h3>
              <p className="text-sm text-slate-500">
                Join as an agent or partner and expand the future of crypto payments.
              </p>
            </div>
          </div>
          <button className="cursor-pointer rounded-md bg-[#1E3A8A] px-6 py-3 font-semibold text-white transition hover:bg-[#1E3A8A]/90">
            Become a Partner <ArrowRight className="ml-1 inline h-4 w-4" />
          </button>
        </div>
      </section>

      {/* FINAL CTA - with glow effects */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-8 py-12 text-center text-white">
          {/* Glow orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-[200px] w-[200px] rounded-full bg-blue-400/30 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-[250px] w-[250px] rounded-full bg-blue-300/25 blur-[80px]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-white/10 blur-[50px]" />
          <h2 className="relative text-3xl font-extrabold md:text-4xl">
            Start Spending Your USDT Today
          </h2>
          <p className="relative mt-3 text-blue-200">Simple. Secure. Global.</p>
          <button className="relative mt-6 inline-flex cursor-pointer items-center gap-2 rounded-md bg-white px-7 py-3.5 font-bold text-[#1E3A8A] transition hover:bg-slate-100">
            Get Your Ucard <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-7">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold">Ucard</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              The USDT card for everyday life.<br />
              Spend, earn, and grow — all in one.
            </p>
            <div className="mt-4 flex gap-3">
              {[X, Send, Users, Globe2].map((Icon, i) => (
                <a key={i} href="#" className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Products", items: ["Ucard Card", "App", "Rewards"] },
            { title: "Company", items: ["About Us", "Careers", "Blog", "Press"] },
            { title: "Support", items: ["Help Center", "Contact Us", "Terms of Service", "Privacy Policy"] },
            { title: "Legal", items: ["KYC & AML", "Compliance", "Risk Disclosure"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-slate-900">{col.title}</h4>
              <div className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <a key={item} href="#" className="block cursor-pointer text-sm text-slate-500 transition hover:text-slate-700">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-slate-900">Subscribe to our newsletter</h4>
            <p className="mt-2 text-sm text-slate-500">Get the latest updates and offers.</p>
            <div className="mt-4 flex items-center rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <ArrowRight size={16} className="cursor-pointer text-slate-400 transition hover:text-slate-600" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <p className="text-xs text-slate-400">© 2024 Ucard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="cursor-pointer rounded-2xl bg-[#EFF6FF] p-6 text-center transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#2563EB] shadow-sm">
        {icon}
      </div>
      <h3 className="font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
    </div>
  )
}
