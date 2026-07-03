"use client"

import { useState, useRef, useEffect } from "react"
import {
  ArrowRight,
  Globe2,
  Gift,
  TrendingUp,
  CheckCircle,
  Users,
  CreditCard,
  Send,
  ChevronDown,
  X,
  Star,
  Check,
} from "lucide-react"
import { SignupForm } from "@/components/signup-form"

const languages = [
  { code: "EN", name: "English", flag: "🇺🇸" },
  { code: "中文", name: "Chinese", flag: "🇨🇳" },
  { code: "ID", name: "Indonesian", flag: "🇮🇩" },
]

const translations = {
  EN: {
    // Nav
    nav: { products: "Products", features: "Features", rewards: "Rewards", agents: "Agents", aboutUs: "About Us", help: "Help" },
    getUcard: "Launch App",
    // Hero
    heroBadge: "The USDT Card for Everyday Life",
    heroTitle1: "Spend Your USDT",
    heroTitle2: "Like Cash",
    heroDesc: "A seamless USDT card designed for real-world payments. Earn yield, stay on-chain, and spend globally.",
    getYourUcard: "Get Your Ucard",
    launchApp: "Launch App",
    learnMore: "Learn More",
    trustedBy: "Trusted by 50,000+ users worldwide",
    // Learn More section
    learnMoreTitle: "How Ucard Works",
    learnMoreSubtitle: "A crypto debit card built for real life",
    learnMoreDesc: "Ucard turns your USDT into everyday spending power. Top up with stablecoins, spend anywhere Visa and Mastercard are accepted, and keep full visibility of every transaction on-chain. Your idle balance keeps earning yield while you spend — no lock-ups, no hidden fees.",
    learnMorePoint1Title: "Top up with USDT",
    learnMorePoint1Desc: "Fund your card instantly from your on-chain wallet or exchange.",
    learnMorePoint2Title: "Spend globally",
    learnMorePoint2Desc: "Pay online and in-store across 180+ countries with instant conversion.",
    learnMorePoint3Title: "Earn while you hold",
    learnMorePoint3Desc: "Your idle USDT generates transparent DeFi yield automatically.",
    // Signup form
    formTitle: "Get Your Ucard",
    formSubtitle: "Join the waitlist and be first to spend your USDT like cash.",
    formName: "Full Name",
    formNamePlaceholder: "Jane Doe",
    formEmail: "Email Address",
    formEmailPlaceholder: "you@example.com",
    formCountry: "Country",
    formCountryPlaceholder: "Select your country",
    formSubmit: "Join the Waitlist",
    formSubmitting: "Submitting...",
    formSuccessTitle: "You're on the list!",
    formSuccessDesc: "Thanks for signing up. We'll email you as soon as your Ucard is ready.",
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
    moreThanCard: "More Than a Card",
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
    getUcard: "启动应用",
    // Hero
    heroBadge: "日常生活的 USDT 卡",
    heroTitle1: "像现金一样",
    heroTitle2: "消费 USDT",
    heroDesc: "一张专为现实支付设计的无缝 USDT 卡。赚取收益，保持链上，全球消费。",
    getYourUcard: "获取您的 Ucard",
    launchApp: "启动应用",
    learnMore: "了解更多",
    trustedBy: "全球超过 50,000 名用户信赖",
    // Learn More section
    learnMoreTitle: "Ucard 如何运作",
    learnMoreSubtitle: "为现实生活打造的加密借记卡",
    learnMoreDesc: "Ucard 将您的 USDT 转化为日常消费能力。用稳定币充值，在任何接受 Visa 和 Mastercard 的地方消费，并在链上完整查看每一笔交易。消费的同时，闲置余额持续赚取收益——无锁定期，无隐藏费用。",
    learnMorePoint1Title: "用 USDT 充值",
    learnMorePoint1Desc: "从您的链上钱包或交易所即时为卡充值。",
    learnMorePoint2Title: "全球消费",
    learnMorePoint2Desc: "在 180+ 个国家在线和门店支付，即时兑换。",
    learnMorePoint3Title: "持有即赚取",
    learnMorePoint3Desc: "您闲置的 USDT 自动产生透明的 DeFi 收益。",
    // Signup form
    formTitle: "获取您的 Ucard",
    formSubtitle: "加入候补名单，率先像现金一样消费您的 USDT。",
    formName: "全名",
    formNamePlaceholder: "张三",
    formEmail: "电子邮箱",
    formEmailPlaceholder: "you@example.com",
    formCountry: "国家/地区",
    formCountryPlaceholder: "选择您的国家/地区",
    formSubmit: "加入候补名单",
    formSubmitting: "提交中...",
    formSuccessTitle: "您已在名单上！",
    formSuccessDesc: "感谢您的注册。您的 Ucard 准备就绪后，我们会立即通过邮件通知您。",
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
    moreThanCard: "不仅仅是一张卡",
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
    footerLegal: "���律",
    ucardCard: "Ucard 卡",
    app: "应用",
    careers: "��聘",
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
    getUcard: "Luncurkan Aplikasi",
    // Hero
    heroBadge: "Kartu USDT untuk Kehidupan Sehari-hari",
    heroTitle1: "Belanjakan USDT Anda",
    heroTitle2: "Seperti Uang Tunai",
    heroDesc: "Kartu USDT tanpa hambatan yang dirancang untuk pembayaran dunia nyata. Dapatkan hasil, tetap di blockchain, dan belanja secara global.",
    getYourUcard: "Dapatkan Ucard Anda",
    launchApp: "Luncurkan Aplikasi",
    learnMore: "Pelajari Lebih Lanjut",
    trustedBy: "Dipercaya oleh 50.000+ pengguna di seluruh dunia",
    // Learn More section
    learnMoreTitle: "Cara Kerja Ucard",
    learnMoreSubtitle: "Kartu debit kripto untuk kehidupan nyata",
    learnMoreDesc: "Ucard mengubah USDT Anda menjadi daya beli sehari-hari. Isi ulang dengan stablecoin, belanja di mana saja Visa dan Mastercard diterima, dan pantau setiap transaksi secara on-chain. Saldo menganggur Anda tetap menghasilkan yield saat Anda berbelanja — tanpa penguncian, tanpa biaya tersembunyi.",
    learnMorePoint1Title: "Isi ulang dengan USDT",
    learnMorePoint1Desc: "Danai kartu Anda secara instan dari dompet on-chain atau bursa.",
    learnMorePoint2Title: "Belanja global",
    learnMorePoint2Desc: "Bayar online dan di toko di 180+ negara dengan konversi instan.",
    learnMorePoint3Title: "Hasilkan saat menyimpan",
    learnMorePoint3Desc: "USDT menganggur Anda menghasilkan yield DeFi yang transparan secara otomatis.",
    // Signup form
    formTitle: "Dapatkan Ucard Anda",
    formSubtitle: "Bergabunglah dengan daftar tunggu dan jadilah yang pertama membelanjakan USDT Anda seperti uang tunai.",
    formName: "Nama Lengkap",
    formNamePlaceholder: "Budi Santoso",
    formEmail: "Alamat Email",
    formEmailPlaceholder: "anda@contoh.com",
    formCountry: "Negara",
    formCountryPlaceholder: "Pilih negara Anda",
    formSubmit: "Gabung Daftar Tunggu",
    formSubmitting: "Mengirim...",
    formSuccessTitle: "Anda sudah terdaftar!",
    formSuccessDesc: "Terima kasih telah mendaftar. Kami akan mengirim email segera setelah Ucard Anda siap.",
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
    moreThanCard: "Lebih dari Sekadar Kartu",
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
          <img src="/images/ucard-logo.png" alt="Ucard" className="h-8 w-auto" />
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
          
          <a
            href="https://app.ucard.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90"
          >
            {t.getUcard} <ArrowRight className="ml-1 inline h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="mb-4 inline-flex rounded-md border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-[#1E3A8A]">
              {t.heroBadge}
            </div>

            <h1 className="mx-auto max-w-xl text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:mx-0 lg:text-6xl">
              {t.heroTitle1}{" "}
              <span className="text-[#2563EB]">{t.heroTitle2}</span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-slate-600 lg:mx-0 lg:text-lg">
              {t.heroDesc}
            </p>

  <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start lg:gap-4">
  <a
    href="https://app.ucard.cc"
    target="_blank"
    rel="noopener noreferrer"
    className="flex cursor-pointer items-center gap-2 rounded-md bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90 md:px-6 md:py-3 md:text-base"
  >
    {t.launchApp} <ArrowRight size={16} />
  </a>
  <a
    href="#learn-more"
    className="cursor-pointer rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:px-6 md:py-3 md:text-base"
  >
    {t.learnMore}
  </a>
  </div>

            <div className="mt-6 flex items-center justify-center gap-4 lg:justify-start lg:mt-8">
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
          <div className="flex justify-center lg:justify-end lg:-mr-10 lg:overflow-visible">
            <div className="w-full max-w-[320px] md:max-w-none md:scale-110 lg:scale-125 lg:origin-right">
              <img 
                src="/images/ucard-card.png" 
                alt="Ucard USDT Card" 
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-col gap-4 rounded-2xl bg-[#EFF6FF] p-4 shadow-sm md:flex-row md:items-center md:gap-6 md:p-6">
          <div className="text-center md:w-[20%] md:text-left">
            <h3 className="text-sm font-bold leading-snug md:text-base">{t.trustTitle}</h3>
            <p className="mt-1 hidden text-xs leading-relaxed text-slate-500 md:block">
              {t.trustDesc}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 md:w-[80%] md:gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-8 items-center md:h-12">
                <img src="/images/visa-logo.png" alt="VISA" className="h-6 w-auto object-contain md:h-10" />
              </div>
              <p className="text-[10px] text-slate-500 md:text-sm">{t.globalNetwork}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-8 items-center md:h-12">
                <img src="/images/mastercard-logo.png" alt="Mastercard" className="h-6 w-auto object-contain md:h-10" />
              </div>
              <p className="text-[10px] text-slate-500 md:text-sm">{t.licensedPartner}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-8 items-center md:h-12">
                <img src="/images/sumsub-logo.png" alt="Sumsub" className="h-5 w-auto object-contain md:h-8" />
              </div>
              <p className="text-[10px] text-slate-500 md:text-sm">KYC / AML</p>
              <p className="hidden text-xs text-slate-400 md:block">{t.verified}</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="flex h-8 items-center md:h-12">
                <img src="/images/encryption-shield.png" alt="256-bit Encryption" className="h-7 w-auto object-contain md:h-11" />
              </div>
              <p className="text-[10px] text-slate-500 md:text-sm">{t.encryption}</p>
              <p className="hidden text-xs text-slate-400 md:block">{t.secureAndSafe}</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEARN MORE */}
      <section id="learn-more" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-10">
        <div className="grid grid-cols-1 items-start gap-8 rounded-2xl bg-[#EFF6FF] p-6 md:p-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              {t.learnMoreSubtitle}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
              {t.learnMoreTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              {t.learnMoreDesc}
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {[
                { icon: CreditCard, title: t.learnMorePoint1Title, desc: t.learnMorePoint1Desc },
                { icon: Globe2, title: t.learnMorePoint2Title, desc: t.learnMorePoint2Desc },
                { icon: TrendingUp, title: t.learnMorePoint3Title, desc: t.learnMorePoint3Desc },
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                    <point.icon className="h-5 w-5 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-500">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#get-card"
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-md bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-[#1E3A8A]/90 md:text-base"
            >
              {t.getYourUcard} <ArrowRight size={16} />
            </a>
          </div>

          <div id="get-card" className="scroll-mt-24">
            <SignupForm
              labels={{
                title: t.formTitle,
                subtitle: t.formSubtitle,
                name: t.formName,
                namePlaceholder: t.formNamePlaceholder,
                email: t.formEmail,
                emailPlaceholder: t.formEmailPlaceholder,
                country: t.formCountry,
                countryPlaceholder: t.formCountryPlaceholder,
                submit: t.formSubmit,
                submitting: t.formSubmitting,
                successTitle: t.formSuccessTitle,
                successDesc: t.formSuccessDesc,
              }}
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-10">
        <h2 className="relative text-center text-2xl font-extrabold tracking-tight md:text-3xl">
          {t.featuresTitle}
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 overflow-hidden px-6 pb-8 md:gap-8 lg:grid-cols-2">
        
        <div className="flex justify-center">
          <img 
            src="/images/app-mockup.png" 
            alt="Ucard Mobile App" 
            className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[400px]"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            {t.simpleSecure}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl">
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

          <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            <a href="#" className="cursor-pointer transition hover:opacity-80">
              <img 
                src="/images/app-store-badge.png" 
                alt="Download on App Store" 
                className="h-10 w-auto rounded-md"
              />
            </a>
            <a href="#" className="cursor-pointer transition hover:opacity-80">
              <img 
                src="/images/google-play-badge.png" 
                alt="Get it on Google Play" 
                className="h-10 w-auto rounded-md"
              />
            </a>
          </div>
        </div>
      </section>

      {/* REWARDS */}
      <div className="relative mx-auto max-w-7xl overflow-hidden px-6 pb-10">
        <div className="relative flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 px-5 py-4 md:flex-row md:items-center md:gap-5 md:px-6 md:py-4">
          <div className="flex flex-col justify-center text-center md:w-[30%] md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              {t.levelUpExperience}
            </p>
            <h2 className="mt-2 text-xl font-extrabold leading-tight md:text-2xl">
              {t.moreThanCard}<br />{t.itsAJourney}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {t.rewardsDesc}
            </p>
            <button className="mx-auto mt-4 inline-flex w-fit cursor-pointer items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 md:mx-0">
              {t.exploreRewards} <ArrowRight size={14} />
            </button>
          </div>

          <div className="flex items-center justify-center md:w-[70%]">
            <img 
              src="/images/rewards-card.png" 
              alt="Level 12 Ucard Pro Rewards Card" 
              className="w-full max-w-[400px] md:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* SECURITY + GLOBAL */}
      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm md:p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">
            {t.builtForTrust}
          </p>
          <h3 className="mt-1 text-xl font-extrabold md:text-2xl">{t.securityTitle}</h3>
          <div className="mt-4 flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-between">
            <div className="order-2 space-y-3 md:order-1">
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
            {/* Security Shield Image */}
            <img 
              src="/images/security-shield.png" 
              alt="Security Shield" 
              className="order-1 w-24 shrink-0 md:order-2 md:w-28 lg:w-36"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:gap-4 md:p-6">
          <div className="text-center md:w-2/5 md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">{t.globalAccess}</p>
            <h3 className="mt-1 text-lg font-extrabold md:text-xl">{t.useUcardAnywhere}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.globalDesc}</p>
          </div>
          <div className="md:w-3/5">
            <img 
              src="/images/world-map.png" 
              alt="Global Access Map" 
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm md:flex-row md:items-center md:p-6">
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

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] px-6 py-8 text-center text-white md:px-8 md:py-10">
          <h2 className="text-2xl font-extrabold md:text-3xl lg:text-4xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-2 text-blue-200">{t.ctaSubtitle}</p>
  <a href="#get-card" className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-md bg-white px-6 py-3 font-bold text-[#1E3A8A] transition hover:bg-slate-100">
    {t.getYourUcard} <ArrowRight size={18} />
  </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:py-10 sm:grid-cols-2 lg:grid-cols-7">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/images/ucard-logo.png" alt="Ucard" className="h-7 w-auto" />
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
