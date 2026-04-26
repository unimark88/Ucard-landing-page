"use client"

import { useState, useRef, useEffect } from "react"
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
  Send,
  ChevronDown,
  Apple,
  Play,
  Flame,
  UserPlus,
  X,
  Star,
  Check,
} from "lucide-react"

const languages = [
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "中文", name: "Chinese", flag: "🇨🇳" },
  { code: "ID", name: "Indonesian", flag: "🇮🇩" },
]

const translations = {
  EN: {
    // Nav
    nav: { products: "Products", features: "Features", rewards: "Rewards", agents: "Agents", aboutUs: "About Us", help: "Help" },
    getUcard: "Get Ucard",
    // Hero
    heroBadge: "The USDT Card for Everyday Life",
    heroTitle1: "Spend Your USDT",
    heroTitle2: "Like Cash",
    heroDesc: "A seamless USDT card designed for real-world payments. Earn yield, stay on-chain, and spend globally.",
    getYourUcard: "Get Your Ucard",
    learnMore: "Learn More",
    trustedBy: "Trusted by 50,000+ users worldwide",
    // Phone
    hello: "Hello, Ucarder",
    totalBalance: "Total Balance",
    topUp: "Top Up",
    send: "Send",
    swap: "Swap",
    more: "More",
    recentTransactions: "Recent Transactions",
    viewAll: "View all",
    today: "Today",
    yesterday: "Yesterday",
    home: "Home",
    card: "Card",
    profile: "Profile",
    // Trust bar
    trustTitle: "Regulated & Trusted Infrastructure",
    trustDesc: "Powered by licensed partners and global payment networks. Fully KYC / AML compliant with secure on-chain transparency.",
    globalNetwork: "Global Payment Network",
    licensedPartner: "Licensed Partner",
    verified: "Verified",
    encryption: "256-bit Encryption",
    secureAndSafe: "Secure & Safe",
    // Features
    featuresTitle: "Everything You Need in One Card",
    spendAnywhere: "Spend Anywhere",
    spendAnywhereDesc: "Use your USDT globally with seamless conversion.",
    earnWhileHold: "Earn While You Hold",
    earnWhileHoldDesc: "Idle USDT generates DeFi yield — transparently on-chain.",
    onChainTransparency: "On-Chain Transparency",
    onChainTransparencyDesc: "Track your funds in real-time with full visibility on the blockchain.",
    gamifiedRewards: "Gamified Rewards",
    gamifiedRewardsDesc: "Earn points, complete quests, and unlock exclusive benefits.",
    // App Experience
    simpleSecure: "Simple. Fast. Secure.",
    designedForEveryday: "Designed for Everyday Use",
    instantTopUp: "Instant top-up with USDT",
    realTimeBalance: "Real-time balance tracking",
    simpleInterface: "Simple, intuitive interface",
    secureHistory: "Secure transaction history",
    downloadOn: "Download on the",
    appStore: "App Store",
    getItOn: "GET IT ON",
    googlePlay: "Google Play",
    virtualCard: "Virtual Card",
    availableBalance: "Available Balance",
    freezeCard: "Freeze Card",
    cardDetails: "Card Details",
    limitSettings: "Limit Settings",
    // Rewards
    levelUpExperience: "Level up your experience",
    moreThanCard: "More Than a Card —",
    itsAJourney: "It's a Journey",
    rewardsDesc: "Complete missions. Earn points. Invite friends. Unlock levels and exclusive rewards.",
    exploreRewards: "Explore Rewards",
    level: "Level",
    ucardPro: "Ucard Pro",
    dailyCheckIn: "Daily Check-in",
    payWithUcard: "Pay with Ucard",
    inviteFriend: "Invite a Friend",
    // Security
    builtForTrust: "Built for Trust",
    securityTitle: "Security You Can Rely On",
    securityItem1: "Licensed partners & regulated infrastructure",
    securityItem2: "KYC & AML compliant",
    securityItem3: "Secure custody and transaction monitoring",
    securityItem4: "Transparent smart contract integration",
    // Global
    globalAccess: "Global Access",
    useUcardAnywhere: "Use Ucard Anywhere",
    globalDesc: "Online. Offline. Borderless. Your USDT, now truly spendable.",
    // Partner
    growWithUcard: "Grow With Ucard",
    partnerDesc: "Join as an agent or partner and expand the future of crypto payments.",
    becomePartner: "Become a Partner",
    // CTA
    ctaTitle: "Start Spending Your USDT Today",
    ctaSubtitle: "Simple. Secure. Global.",
    // Footer
    footerDesc: "The USDT card for everyday life. Spend, earn, and grow — all in one.",
    footerProducts: "Products",
    footerCompany: "Company",
    footerSupport: "Support",
    footerLegal: "Legal",
    ucardCard: "Ucard Card",
    app: "App",
    careers: "Careers",
    blog: "Blog",
    press: "Press",
    helpCenter: "Help Center",
    contactUs: "Contact Us",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
    kycAml: "KYC & AML",
    compliance: "Compliance",
    riskDisclosure: "Risk Disclosure",
    newsletterTitle: "Subscribe to our newsletter",
    newsletterDesc: "Get the latest updates and offers.",
    enterEmail: "Enter your email",
    copyright: "© 2024 Ucard. All rights reserved.",
  },
  "中文": {
    // Nav
    nav: { products: "产品", features: "功能", rewards: "奖励", agents: "代理", aboutUs: "关于我们", help: "帮助" },
    getUcard: "获取 Ucard",
    // Hero
    heroBadge: "日常生活的 USDT 卡",
    heroTitle1: "像现金一样",
    heroTitle2: "消费 USDT",
    heroDesc: "一张专为现实支付设计的无缝 USDT 卡。赚取收益，保持链上，全球消费。",
    getYourUcard: "获取您的 Ucard",
    learnMore: "了解更多",
    trustedBy: "全球超过 50,000 名用户信赖",
    // Phone
    hello: "你好，Ucarder",
    totalBalance: "总余额",
    topUp: "充值",
    send: "发送",
    swap: "兑换",
    more: "更多",
    recentTransactions: "最近交易",
    viewAll: "查看全部",
    today: "今天",
    yesterday: "昨天",
    home: "首页",
    card: "卡片",
    profile: "个人资料",
    // Trust bar
    trustTitle: "受监管和可信的基础设施",
    trustDesc: "由持牌合作伙伴和全球支付网络提供支持。完全符合 KYC/AML 标准，具有安全的链上透明度。",
    globalNetwork: "全球支付网络",
    licensedPartner: "持牌合作伙伴",
    verified: "已验证",
    encryption: "256位加密",
    secureAndSafe: "安全可靠",
    // Features
    featuresTitle: "一卡满足所有需求",
    spendAnywhere: "随处消费",
    spendAnywhereDesc: "在全球范围内无缝兑换使用您的 USDT。",
    earnWhileHold: "持有即赚取",
    earnWhileHoldDesc: "闲置的 USDT 产生 DeFi 收益 - 链上透明。",
    onChainTransparency: "链上透明",
    onChainTransparencyDesc: "在区块链上实时追踪您的资金，完全可见。",
    gamifiedRewards: "游戏化奖励",
    gamifiedRewardsDesc: "赚取积分，完成任务，解锁专属福利。",
    // App Experience
    simpleSecure: "简单。快速。安全。",
    designedForEveryday: "专为日常使用设计",
    instantTopUp: "USDT 即时充值",
    realTimeBalance: "实时余额追踪",
    simpleInterface: "简单直观的界面",
    secureHistory: "安全的交易历史",
    downloadOn: "下载于",
    appStore: "App Store",
    getItOn: "下载于",
    googlePlay: "Google Play",
    virtualCard: "虚拟卡",
    availableBalance: "可用余额",
    freezeCard: "冻结卡片",
    cardDetails: "卡片详情",
    limitSettings: "限额设置",
    // Rewards
    levelUpExperience: "升级您的体验",
    moreThanCard: "不仅仅是一张卡 —",
    itsAJourney: "这是一段旅程",
    rewardsDesc: "完成任务。赚取积分。邀请朋友。解锁等级和专属奖励。",
    exploreRewards: "探索奖励",
    level: "等级",
    ucardPro: "Ucard Pro",
    dailyCheckIn: "每日签到",
    payWithUcard: "使用 Ucard 支付",
    inviteFriend: "邀请朋友",
    // Security
    builtForTrust: "为信任而建",
    securityTitle: "值得信赖的安全保障",
    securityItem1: "持牌合作伙伴和受监管的基础设施",
    securityItem2: "符合 KYC & AML 标准",
    securityItem3: "安全托管和交易监控",
    securityItem4: "透明的智能合约集成",
    // Global
    globalAccess: "全球通用",
    useUcardAnywhere: "随处使用 Ucard",
    globalDesc: "线上。线下。无国界。您的 USDT，真正可消费。",
    // Partner
    growWithUcard: "与 Ucard 共成长",
    partnerDesc: "作为代理或合作伙伴加入，拓展加密支付的未来。",
    becomePartner: "成为合作伙伴",
    // CTA
    ctaTitle: "立即开始消费您的 USDT",
    ctaSubtitle: "简单。安全。全球化。",
    // Footer
    footerDesc: "日常生活的 USDT 卡。消费、赚取、成长 - 一卡搞定。",
    footerProducts: "产品",
    footerCompany: "公司",
    footerSupport: "支持",
    footerLegal: "法律",
    ucardCard: "Ucard 卡",
    app: "应用",
    careers: "招聘",
    blog: "博客",
    press: "新闻",
    helpCenter: "帮助中心",
    contactUs: "联系我们",
    termsOfService: "服务条款",
    privacyPolicy: "隐私政策",
    kycAml: "KYC & AML",
    compliance: "合规",
    riskDisclosure: "风险披露",
    newsletterTitle: "订阅我们的新闻通讯",
    newsletterDesc: "获取最新更新和优惠。",
    enterEmail: "输入您的邮箱",
    copyright: "© 2024 Ucard。保留所有权利。",
  },
  ID: {
    // Nav
    nav: { products: "Produk", features: "Fitur", rewards: "Hadiah", agents: "Agen", aboutUs: "Tentang Kami", help: "Bantuan" },
    getUcard: "Dapatkan Ucard",
    // Hero
    heroBadge: "Kartu USDT untuk Kehidupan Sehari-hari",
    heroTitle1: "Belanjakan USDT Anda",
    heroTitle2: "Seperti Uang Tunai",
    heroDesc: "Kartu USDT tanpa hambatan yang dirancang untuk pembayaran dunia nyata. Dapatkan hasil, tetap di blockchain, dan belanja secara global.",
    getYourUcard: "Dapatkan Ucard Anda",
    learnMore: "Pelajari Lebih Lanjut",
    trustedBy: "Dipercaya oleh 50.000+ pengguna di seluruh dunia",
    // Phone
    hello: "Halo, Ucarder",
    totalBalance: "Total Saldo",
    topUp: "Isi Ulang",
    send: "Kirim",
    swap: "Tukar",
    more: "Lainnya",
    recentTransactions: "Transaksi Terbaru",
    viewAll: "Lihat semua",
    today: "Hari ini",
    yesterday: "Kemarin",
    home: "Beranda",
    card: "Kartu",
    profile: "Profil",
    // Trust bar
    trustTitle: "Infrastruktur Teregulasi & Terpercaya",
    trustDesc: "Didukung oleh mitra berlisensi dan jaringan pembayaran global. Sepenuhnya sesuai KYC/AML dengan transparansi on-chain yang aman.",
    globalNetwork: "Jaringan Pembayaran Global",
    licensedPartner: "Mitra Berlisensi",
    verified: "Terverifikasi",
    encryption: "Enkripsi 256-bit",
    secureAndSafe: "Aman & Terlindungi",
    // Features
    featuresTitle: "Semua yang Anda Butuhkan dalam Satu Kartu",
    spendAnywhere: "Belanja di Mana Saja",
    spendAnywhereDesc: "Gunakan USDT Anda secara global dengan konversi tanpa hambatan.",
    earnWhileHold: "Hasilkan Sambil Menyimpan",
    earnWhileHoldDesc: "USDT idle menghasilkan yield DeFi — transparan di blockchain.",
    onChainTransparency: "Transparansi On-Chain",
    onChainTransparencyDesc: "Lacak dana Anda secara real-time dengan visibilitas penuh di blockchain.",
    gamifiedRewards: "Hadiah Bergaya Game",
    gamifiedRewardsDesc: "Dapatkan poin, selesaikan misi, dan buka manfaat eksklusif.",
    // App Experience
    simpleSecure: "Sederhana. Cepat. Aman.",
    designedForEveryday: "Dirancang untuk Penggunaan Sehari-hari",
    instantTopUp: "Isi ulang instan dengan USDT",
    realTimeBalance: "Pelacakan saldo real-time",
    simpleInterface: "Antarmuka sederhana dan intuitif",
    secureHistory: "Riwayat transaksi aman",
    downloadOn: "Unduh di",
    appStore: "App Store",
    getItOn: "DAPATKAN DI",
    googlePlay: "Google Play",
    virtualCard: "Kartu Virtual",
    availableBalance: "Saldo Tersedia",
    freezeCard: "Bekukan Kartu",
    cardDetails: "Detail Kartu",
    limitSettings: "Pengaturan Limit",
    // Rewards
    levelUpExperience: "Tingkatkan pengalaman Anda",
    moreThanCard: "Lebih dari Sekadar Kartu —",
    itsAJourney: "Ini adalah Perjalanan",
    rewardsDesc: "Selesaikan misi. Dapatkan poin. Undang teman. Buka level dan hadiah eksklusif.",
    exploreRewards: "Jelajahi Hadiah",
    level: "Level",
    ucardPro: "Ucard Pro",
    dailyCheckIn: "Check-in Harian",
    payWithUcard: "Bayar dengan Ucard",
    inviteFriend: "Undang Teman",
    // Security
    builtForTrust: "Dibangun untuk Kepercayaan",
    securityTitle: "Keamanan yang Dapat Anda Andalkan",
    securityItem1: "Mitra berlisensi & infrastruktur teregulasi",
    securityItem2: "Sesuai KYC & AML",
    securityItem3: "Penyimpanan aman dan pemantauan transaksi",
    securityItem4: "Integrasi smart contract yang transparan",
    // Global
    globalAccess: "Akses Global",
    useUcardAnywhere: "Gunakan Ucard di Mana Saja",
    globalDesc: "Online. Offline. Tanpa batas. USDT Anda, benar-benar dapat dibelanjakan.",
    // Partner
    growWithUcard: "Berkembang Bersama Ucard",
    partnerDesc: "Bergabung sebagai agen atau mitra dan kembangkan masa depan pembayaran kripto.",
    becomePartner: "Menjadi Mitra",
    // CTA
    ctaTitle: "Mulai Belanjakan USDT Anda Hari Ini",
    ctaSubtitle: "Sederhana. Aman. Global.",
    // Footer
    footerDesc: "Kartu USDT untuk kehidupan sehari-hari. Belanja, hasilkan, dan berkembang — semua dalam satu.",
    footerProducts: "Produk",
    footerCompany: "Perusahaan",
    footerSupport: "Dukungan",
    footerLegal: "Hukum",
    ucardCard: "Kartu Ucard",
    app: "Aplikasi",
    careers: "Karir",
    blog: "Blog",
    press: "Pers",
    helpCenter: "Pusat Bantuan",
    contactUs: "Hubungi Kami",
    termsOfService: "Ketentuan Layanan",
    privacyPolicy: "Kebijakan Privasi",
    kycAml: "KYC & AML",
    compliance: "Kepatuhan",
    riskDisclosure: "Pengungkapan Risiko",
    newsletterTitle: "Berlangganan newsletter kami",
    newsletterDesc: "Dapatkan pembaruan dan penawaran terbaru.",
    enterEmail: "Masukkan email Anda",
    copyright: "© 2024 Ucard. Hak cipta dilindungi.",
  },
} as const

type LangCode = keyof typeof translations

export default function UcardLandingPage() {
  const [selectedLang, setSelectedLang] = useState(languages[0])
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)

  // Get translations for current language
  const t = translations[selectedLang.code as LangCode]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

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
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.products}</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.features}</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.rewards}</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.agents}</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.aboutUs}</a>
          <a href="#" className="cursor-pointer transition hover:text-slate-900">{t.nav.help}</a>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative hidden md:block" ref={langDropdownRef}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <span>{selectedLang.flag}</span>
              <span>{selectedLang.code}</span>
              <ChevronDown size={14} className={`transition-transform ${langDropdownOpen ? "rotate-180" : ""}`} />
            </button>
            
            {langDropdownOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-44 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang)
                      setLangDropdownOpen(false)
                    }}
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm transition hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span className="font-medium text-slate-900">{lang.name}</span>
                      <span className="text-slate-400">({lang.code})</span>
                    </div>
                    {selectedLang.code === lang.code && (
                      <Check size={14} className="text-[#2563EB]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button className="cursor-pointer rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90">
            {t.getUcard} <ArrowRight className="ml-1 inline h-4 w-4" />
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
            {t.heroBadge}
          </div>

          <h1 className="max-w-xl text-5xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            {t.heroTitle1}{" "}
            <span className="text-[#2563EB]">{t.heroTitle2}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
            {t.heroDesc}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex cursor-pointer items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3.5 font-semibold text-white shadow-xl shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90">
              {t.getYourUcard} <ArrowRight size={18} />
            </button>
            <button className="cursor-pointer rounded-md border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:bg-slate-50">
              {t.learnMore}
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
                {t.trustedBy}
              </div>
            </div>
          </div>
        </div>

        {/* HERO MOCKUP */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -right-10 top-10 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-blue-400/40 to-blue-600/30 blur-[80px]" />
          <div className="absolute -left-20 bottom-20 h-[250px] w-[250px] rounded-full bg-gradient-to-tr from-blue-300/30 to-blue-500/20 blur-[60px]" />

          {/* Card Image */}
          <div className="absolute -left-4 top-24 z-20 w-72 rotate-[-12deg] lg:left-0 lg:w-80">
            <img 
              src="/images/ucard-card.jpg" 
              alt="Ucard USDT Card" 
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          {/* Phone Image */}
          <div className="relative z-10 w-64 lg:w-72">
            <img 
              src="/images/ucard-phone.jpg" 
              alt="Ucard Mobile App" 
              className="w-full rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 rounded-2xl bg-[#EFF6FF] p-8 shadow-sm md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold leading-snug">{t.trustTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {t.trustDesc}
            </p>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="text-3xl font-black italic text-[#1a1f71]">VISA</div>
              <p className="mt-1 text-xs text-slate-400">{t.globalNetwork}</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <div className="h-7 w-7 rounded-full bg-red-500" />
                <div className="-ml-2.5 h-7 w-7 rounded-full bg-orange-400 opacity-80" />
              </div>
              <p className="mt-2 text-xs text-slate-400">{t.licensedPartner}</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="text-lg font-bold text-slate-900">
                <span className="text-[#2563EB]">∞</span> sumsub
              </div>
              <p className="mt-1 text-xs text-slate-400">KYC / AML</p>
              <p className="text-[10px] text-slate-300">{t.verified}</p>
            </div>
          </div>

          <div className="flex items-center justify-center border-slate-200/60 md:border-l md:pl-6">
            <div className="text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-300">
                <ShieldCheck className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-2 text-xs text-slate-400">{t.encryption}</p>
              <p className="text-[10px] text-slate-300">{t.secureAndSafe}</p>
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
          {t.featuresTitle}
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={<CreditCard className="h-6 w-6" />}
            title={t.spendAnywhere}
            desc={t.spendAnywhereDesc}
          />
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6" />}
            title={t.earnWhileHold}
            desc={t.earnWhileHoldDesc}
          />
          <FeatureCard
            icon={<Globe2 className="h-6 w-6" />}
            title={t.onChainTransparency}
            desc={t.onChainTransparencyDesc}
          />
          <FeatureCard
            icon={<Gift className="h-6 w-6" />}
            title={t.gamifiedRewards}
            desc={t.gamifiedRewardsDesc}
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
                <p className="text-xs text-slate-500">{t.availableBalance}</p>
                <h3 className="text-2xl font-extrabold">
                  12,856.00 <span className="text-sm font-bold text-slate-400">USDT</span>
                </h3>
                <p className="text-xs text-green-500">+ $12,856.00</p>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { icon: "❄️", label: t.freezeCard },
                  { icon: "ℹ️", label: t.cardDetails },
                  { icon: "⚙️", label: t.limitSettings },
                  { icon: "•••", label: t.more },
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
            {t.simpleSecure}
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight">
            {t.designedForEveryday}
          </h2>

          <div className="mt-6 space-y-4">
            {[
              t.instantTopUp,
              t.realTimeBalance,
              t.simpleInterface,
              t.secureHistory,
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
                <p className="text-[7px] leading-tight opacity-70">{t.downloadOn}</p>
                <p className="text-xs font-semibold leading-tight">{t.appStore}</p>
              </div>
            </button>
            <button className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium transition hover:bg-slate-50">
              <Play size={18} className="fill-current" />
              <div className="text-left">
                <p className="text-[7px] leading-tight text-slate-500">{t.getItOn}</p>
                <p className="text-xs font-semibold leading-tight">{t.googlePlay}</p>
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
              {t.levelUpExperience}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight lg:text-4xl">
              {t.moreThanCard}<br />{t.itsAJourney}
            </h2>
            <p className="mt-4 max-w-md text-slate-600">
              {t.rewardsDesc}
            </p>
            <button className="mt-6 inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50">
              {t.exploreRewards} <ArrowRight size={16} />
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
                        <h3 className="text-sm font-bold">{t.level} 12</h3>
                        <p className="text-xs text-slate-500">{t.ucardPro}</p>
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
                    { icon: Flame, label: t.dailyCheckIn, xp: "+20 XP", done: true },
                    { icon: CreditCard, label: t.payWithUcard, xp: "+50 XP", done: true },
                    { icon: UserPlus, label: t.inviteFriend, xp: "+100 XP", done: false },
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
            {t.builtForTrust}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold">{t.securityTitle}</h3>
          <div className="mt-6 flex items-start justify-between gap-6">
            <div className="space-y-3">
              {[
                t.securityItem1,
                t.securityItem2,
                t.securityItem3,
                t.securityItem4,
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
            {t.globalAccess}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold">{t.useUcardAnywhere}</h3>
          <p className="mt-3 text-sm text-slate-600">
            {t.globalDesc}
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
              <h3 className="text-lg font-bold text-[#2563EB]">{t.growWithUcard}</h3>
              <p className="text-sm text-slate-500">
                {t.partnerDesc}
              </p>
            </div>
          </div>
          <button className="cursor-pointer rounded-md bg-[#1E3A8A] px-6 py-3 font-semibold text-white transition hover:bg-[#1E3A8A]/90">
            {t.becomePartner} <ArrowRight className="ml-1 inline h-4 w-4" />
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
            {t.ctaTitle}
          </h2>
          <p className="relative mt-3 text-blue-200">{t.ctaSubtitle}</p>
          <button className="relative mt-6 inline-flex cursor-pointer items-center gap-2 rounded-md bg-white px-7 py-3.5 font-bold text-[#1E3A8A] transition hover:bg-slate-100">
            {t.getYourUcard} <ArrowRight size={18} />
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
              {t.footerDesc}
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
            { title: t.footerProducts, items: [t.ucardCard, t.app, t.nav.rewards] },
            { title: t.footerCompany, items: [t.nav.aboutUs, t.careers, t.blog, t.press] },
            { title: t.footerSupport, items: [t.helpCenter, t.contactUs, t.termsOfService, t.privacyPolicy] },
            { title: t.footerLegal, items: [t.kycAml, t.compliance, t.riskDisclosure] },
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
            <h4 className="font-bold text-slate-900">{t.newsletterTitle}</h4>
            <p className="mt-2 text-sm text-slate-500">{t.newsletterDesc}</p>
            <div className="mt-4 flex items-center rounded-md border border-slate-200 bg-slate-50 px-4 py-2.5">
              <input
                type="email"
                placeholder={t.enterEmail}
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <ArrowRight size={16} className="cursor-pointer text-slate-400 transition hover:text-slate-600" />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <p className="text-xs text-slate-400">{t.copyright}</p>
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
