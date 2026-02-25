import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  GraduationCap,
  Users,
  Zap,
  Plane,
  Wifi,
  Home as HomeIcon,
  FileText,
  CreditCard,
  Shield,
  Building,
  Coffee,
  Briefcase,
  UserCheck,
  CalendarDays,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { UnigoApp,SERVICES ,getIcon, COLORS } from "../constants";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  COLOR SYSTEM — derived from & locked to the Hero section
 * ═══════════════════════════════════════════════════════════════════
 *
 *  PRIMARY    red-700  (#b91c1c)   Main CTAs, featured cards, key accents
 *               hover: red-800     Darker on interaction
 *               tint:  red-50/100  Light bg for badges/icons on this role
 *               shadow: red-900/20 Depth on primary buttons
 *
 *  SECONDARY  blue-900 (#1e3a5f)   Supporting CTAs, icon fills, step circles,
 *               hover: blue-800    dark banners, connector lines
 *               tint:  blue-50     Icon bg resting state
 *               shadow: blue-900/20
 *
 *  ACCENT     amber-400 (#fbbf24)  Stat numbers, badge highlights, featured
 *                                  card tags, decorative glows
 *
 *  SURFACES
 *    slate-50  (#f8fafc)  Odd sections (1,3,5,7…) — light grey wash
 *    white     (#ffffff)  Even sections (2,4,6,8…) + card backgrounds
 *
 *  TEXT
 *    slate-900   Headings
 *    slate-600   Body / descriptions
 *    slate-500   Muted / supporting copy
 *    slate-400   Meta labels, social proof
 *
 *  BORDERS
 *    slate-100   Card default border
 *    slate-200   Outline button default border
 *    blue-900    Outline button hover border & card hover border
 *
 * ───────────────────────────────────────────────────────────────────
 *  BUTTON VARIANTS  (mirrors hero exactly)
 * ───────────────────────────────────────────────────────────────────
 *  btnPrimary    bg-red-700   text-white  hover:bg-red-800
 *                shadow-xl shadow-red-900/20  rounded-xl
 *  btnSecondary  bg-red-700  text-white  hover:bg-red-800
 *                shadow-lg shadow-red-900/20 rounded-xl
 *  btnOutline    bg-white  border-2 border-slate-200  text-slate-700
 *                hover:border-red-700 hover:text-red-700  rounded-xl
 *  btnGhost      bg-white/10  border-2 border-white/30  text-white
 *                hover:bg-white/20  rounded-xl  (used on dark banners)
 *  btnInverse    bg-white  text-red-700  hover:bg-slate-100
 *                shadow-lg  rounded-xl  (primary action on dark bg)
 *
 * ───────────────────────────────────────────────────────────────────
 *  ICON CONTAINER RULES  (hero floating-card pattern)
 * ───────────────────────────────────────────────────────────────────
 *  Default (white/slate bg)   bg-red-50  text-red-700
 *  On red section             bg-red-100  text-red-700
 *  Hover (group)              group-hover:bg-red-700 group-hover:text-white
 *
 * ───────────────────────────────────────────────────────────────────
 *  BADGE / PILL RULES
 * ───────────────────────────────────────────────────────────────────
 *  Primary sections   → bg-red-100   text-red-700
 *  Secondary sections → bg-red-50   text-red-700
 *  Accent / special   → bg-amber-100 text-amber-700
 * ═══════════════════════════════════════════════════════════════════
 */

/* ── Button primitives ─────────────────────────────────────────── */
const btnPrimary =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-700 text-white font-bold text-base hover:bg-red-800 transition-all shadow-xl shadow-red-900/20";
const btnSecondary =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-700 text-white font-bold text-base hover:bg-red-800 transition-all shadow-lg shadow-red-900/20";
const btnOutline =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-base hover:border-red-700 hover:text-red-700 transition-all";
const btnGhost =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border-2 border-white/30 text-white font-bold text-base hover:bg-white/20 transition-all";
const btnInverse =
  "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-red-700 font-bold text-base hover:bg-slate-100 transition-all shadow-lg";

/* ── Data ──────────────────────────────────────────────────────── */
const postArrivalServices = [
  { label: "Airport Pickup", icon: Plane },
  { label: "Free SIM Card", icon: Wifi },
  { label: "Temporary Accommodation", icon: HomeIcon },
  { label: "DVV Registration", icon: FileText },
  { label: "VERO Registration", icon: Shield },
  { label: "KELA Registration", icon: UserCheck },
  { label: "Police Card Assistance", icon: Shield },
  { label: "Bank Account Opening", icon: CreditCard },
];

const careerHubItems = [
  { label: "Free Tea & Coffee", icon: Coffee },
  { label: "Networking Space", icon: Users },
  { label: "Career Guidance", icon: Briefcase },
  { label: "Job Search Support", icon: MapPin },
  { label: "CV Workshops", icon: FileText },
  { label: "Interview Mock Sessions", icon: UserCheck },
  { label: "Career Melas", icon: CalendarDays },
  { label: "Employer Networking", icon: Building },
];

const languages = [
  { name: "Finnish", tag: "Main Focus", featured: true },
  { name: "German", tag: null, featured: false },
  { name: "Swedish", tag: null, featured: false },
  { name: "French", tag: null, featured: false },
  { name: "Korean", tag: null, featured: false },
  { name: "Japanese", tag: null, featured: false },
];

const steps = [
  {
    title: "Create Profile",
    desc: "Tell us your goals, background, and dream destination.",
  },
  {
    title: "Get AI Matching",
    desc: "Our AI matches you with the right programs and universities.",
  },
  {
    title: "Apply to Universities",
    desc: "We handle your applications end-to-end with expert support.",
  },
  {
    title: "Visa & Financial Help",
    desc: "Navigate visas, scholarships, and funding with ease.",
  },
  {
    title: "Land & Thrive",
    desc: "Arrive with confidence — we're with you on the ground.",
  },
];

/* ── Component ─────────────────────────────────────────────────── */
const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* ══════════════════════════════════════════════════════════
          §1  HERO
          Surface: slate-50 | Geometric accent: red-900/5
          CTA pair: PRIMARY (red-700) + OUTLINE
          Floating card: white bg, red-50/red-700 icon, slate text
      ══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-50">
        {/* Geometric skew panel — red-900/5 = very faint primary tint */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 -skew-x-12 transform origin-top-right hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Your Complete Global Study &amp; Career Journey –{" "}
              {/* PRIMARY red on key phrase */}
              <span className="text-red-700">From Dream to Destination.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              Powered by AI. Supported by Humans. Backed by Real Results.
            </p>

            {/* CTA row: PRIMARY + OUTLINE — exact hero pattern */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://www.unigo.edu.np" className={btnPrimary}>
                Explore UNIGO <ArrowRight size={20} />
              </a>
              <a href="#/ai-guide" className={btnOutline}>
                Book Free Consultation
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-200 w-fit">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    alt="Student"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-400">
                <span className="text-slate-900 font-bold">500+</span> Students
                Assisted
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-up">
            <img
              src="/images/ppppp.png"
              className="w-full"
              alt="Helsinki City"
            />

            {/* Floating card — white bg, red-50/red-700 icon container */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center gap-4">
                {/* Icon: red-50 tint bg + red-700 icon (PRIMARY) */}
                <div className="p-3 bg-blue-50 text-blue-900 rounded-xl">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Post-Arrival Success
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    98% Integration Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Comprehensive Support Network
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              From arrival concierge to career coaching, we provide the ultimate
              student ecosystem in Finland.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="p-8 rounded-2xl border border-slate-100 hover:border-blue-900/20 hover:bg-slate-50 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  {getIcon(service.icon, 28)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#/services"
              className="inline-flex items-center gap-2 text-blue-900 font-bold hover:underline"
            >
              View All 6+ Support Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §2  UNIGO APP FEATURES
          Surface: white | Badge: blue-50/blue-900 (SECONDARY)
          Icons: blue-50/blue-900 → hover blue-900/white
          CTA: SECONDARY (blue-900)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-5 mb-16">
            {/* Badge: SECONDARY tint */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              {UnigoApp.name}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              {UnigoApp.description}
            </p>
            {/* SECONDARY button — Learn About Us */}
            <div>
              <button
                className={btnSecondary}
                onClick={() => (window.location.href = "#/about")}
              >
                Learn About Us
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {UnigoApp.features.map((feature: string, index: number) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-slate-100 hover:border-red-700/20 hover:bg-slate-50 transition-all group"
              >
                {/* Icon container: blue-50/blue-900 resting → blue-900/white hover */}
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors font-extrabold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {feature}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Smart tools and expert guidance designed to carry you from
                  first step to final destination.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            {/* SECONDARY button */}
            <button className={btnSecondary}>
              {UnigoApp.cta} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §3  STATS BAR
          Surface: red-700 full fill (PRIMARY as section bg)
          Numbers: amber-400 (ACCENT — maximum contrast on red)
          Labels: white/80
          Dividers: red-600 (one shade darker than bg)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-red-600 text-center">
          {[
            { value: "12+", label: "Finnish University Partners" },
            { value: "24/7", label: "On-Ground Local Support" },
            { value: "100%", label: "Commitment to Student Success" },
          ].map(({ value, label }) => (
            <div key={label} className="space-y-2 py-8 md:py-0">
              {/* ACCENT amber-400 for standout numbers */}
              <p className="text-5xl font-extrabold text-amber-400">{value}</p>
              <p className="text-lg font-medium text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §4  LANGUAGE ACADEMY
          Surface: slate-50 | Badge: red-100/red-700 (PRIMARY)
          Featured card: red-700 fill + amber-400 tag (PRIMARY + ACCENT)
          Non-featured: white bg, slate-200 border → hover blue-900
          CTAs: PRIMARY (red) + OUTLINE
      ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-5 mb-16">
            {/* Badge: PRIMARY tint */}
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Learn Languages with Technology + Real Tutors
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Hybrid learning designed for immigrants, spouses, and
              international students — combining smart software with live expert
              tutors for faster fluency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {languages.map(({ name, tag, featured }) => (
              <div
                key={name}
                className={`relative p-8 rounded-2xl border-2 transition-all cursor-pointer
                  ${
                    featured
                      ? /* PRIMARY fill: red-700 bg + white text */
                        "border-red-700 bg-red-700 text-white shadow-xl shadow-red-900/20"
                      : /* Default: white + slate border → hover blue-900 */
                        "border-slate-200 bg-white hover:border-red-700 hover:bg-red-50"
                  }`}
              >
                {tag && (
                  /* ACCENT amber-400 tag on featured card */
                  <span className="absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded-full bg-amber-400 text-slate-900">
                    {tag}
                  </span>
                )}
                <h3
                  className={`text-xl font-bold ${featured ? "text-white" : "text-slate-900"}`}
                >
                  {name}
                </h3>
                <p
                  className={`text-sm mt-1 ${featured ? "text-red-100" : "text-slate-500"}`}
                >
                  {featured
                    ? "Intensive tracks available"
                    : "Structured curriculum, live sessions"}
                </p>
              </div>
            ))}
            </div>

          {/* PRIMARY + OUTLINE — mirrors hero CTA pair */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <button className={btnPrimary}>Enroll Now</button>
            <button className={btnOutline}>View Courses</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §5  POST-ARRIVAL PREMIUM SERVICES
          Surface: white | Badge: blue-50/blue-900 (SECONDARY)
          Icons: blue-50/blue-900 → hover blue-900/white
          CTA: SECONDARY
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-5 mb-16">
            {/* Badge: SECONDARY tint */}
          
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              Post-Arrival Premium Services
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg">
              We don't just help you arrive — we help you settle smoothly in
              Finland. From airport pickup to government registrations, our
              premium arrival package ensures stress-free integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {postArrivalServices.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="p-8 rounded-2xl border border-slate-100 hover:border-red-700/20 hover:bg-slate-50 transition-all group text-center"
              >
                {/* Icon: SECONDARY tint resting → SECONDARY fill hover */}
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900">{label}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            {/* SECONDARY button */}
            <button className={btnSecondary}>Book Arrival Package</button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §6  FINNIGO CAREER HUB
          Surface: slate-50 | Cards: white
          Badge: amber-100/amber-700 (ACCENT — community warmth)
          Icons: blue-50/blue-900 → hover blue-900/white
          Banner bg: blue-900 (SECONDARY as full fill)
          Banner CTAs: INVERSE (white/blue-900) + GHOST
          Ambient glow: amber-400/5 (ACCENT presence on dark bg)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-5 mb-16">
            {/* Badge: ACCENT tint — amber warmth for community */}
          
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              More Than a Company – A Community
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              FinniGo Meet-Up Café &amp; Career Hub is where students, job
              seekers, and professionals connect, collaborate, and grow
              together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerHubItems.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="p-8 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group text-center"
              >
                {/* Icon: SECONDARY tint → SECONDARY fill hover */}
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-slate-900">{label}</h3>
              </div>
            ))}
          </div>

          {/* Banner: SECONDARY blue-900 full fill */}
          <div className="mt-16 bg-red-700 text-white rounded-2xl p-10 text-center shadow-xl relative overflow-hidden">
            {/* Ambient amber glow = ACCENT subtly present on dark bg */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl -mr-36 -mt-36" />
            <div className="relative z-10">
              <h3 className="text-2xl font-extrabold mb-4">
                A Place to Learn. Connect. Grow.
              </h3>
              <p className="max-w-2xl mx-auto text-red-100 mb-8">
                Whether you're preparing your CV, meeting employers, or simply
                enjoying coffee with fellow internationals — FinniGo Career Hub
                is your safe space for opportunity and growth.
              </p>
              {/* On dark bg: INVERSE primary action + GHOST secondary */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className={btnInverse}>Visit Our Center</button>
                <button className={btnGhost}>Upcoming Events</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §7  HOW IT WORKS
          Surface: white | Badge: red-100/red-700 (PRIMARY)
          Step circles: blue-900 fill + shadow-red-900/20 (SECONDARY)
          Connector line: blue-100 (SECONDARY lightest tint)
          Chevrons: blue-200
          CTA: PRIMARY (red-700)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-5">
            {/* Badge: PRIMARY tint */}
            
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Your simple 5-step journey from planning to thriving abroad.
            </p>
          </div>

          <div className="relative">
            {/* Connector: blue-100 (lightest SECONDARY tint) */}
            <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-red-100 z-0" />
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {steps.map(({ title, desc }, index) => (
                <div key={title} className="text-center relative">
                  {/* Circle: SECONDARY blue-900 + shadow-red-900/20 */}
                  <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-red-700 text-white text-2xl font-extrabold shadow-lg shadow-red-900/20">
                    {index + 1}
                  </div>
                  {/* Chevron: blue-200 (SECONDARY tint) */}
                  {index < steps.length - 1 && (
                    <ChevronRight
                      size={18}
                      className="absolute top-6 -right-2 text-red-200 hidden md:block"
                    />
                  )}
                  <h3 className="mt-6 text-base font-extrabold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRIMARY CTA below steps */}
          <div className="mt-16 text-center">
            <a href="#/services" className={btnPrimary}>
              Start Your Journey <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          §8  TRUST / TESTIMONIAL
          Surface: slate-50 | Card: white + slate-100 border
          Left accent bar: red-700 (PRIMARY vertical stripe)
          Quote dots: red-700/80 (PRIMARY)
          Ambient glow: amber-400/10 (ACCENT subtle warmth)
          Role label: blue-900 (SECONDARY)
          Ring on image: slate-100
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden">
            {/* LEFT accent bar — PRIMARY red-700 */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-700 rounded-l-[2rem]" />
            {/* Ambient glow — ACCENT amber-400 very faint */}
            <div className="absolute top-0 right-0 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl -mr-28 -mt-28" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 p-12 pl-16">
              <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden ring-4 ring-slate-100 shadow-lg">
                <img
                  src="/images/vijayaaaa.png"
                  className="w-full h-full object-cover"
                  alt="Director"
                />
              </div>
              <div className="space-y-4">
                {/* Quote indicator dots — PRIMARY red-700 */}
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-red-700 opacity-80"
                    />
                  ))}
                </div>
                <p className="text-xl italic text-slate-700 leading-relaxed">
                  FinniGo was born from our realization that Nepali students
                  needed more than just a visa. They needed a home, a guide, and
                  a friend in Finland. We are that bridge.
                </p>
                <div>
                  <h4 className="font-extrabold text-lg text-slate-900">
                    Vijaya Gautam
                  </h4>
                  {/* Role: SECONDARY blue-900 */}
                  <p className="text-red-700 font-semibold text-sm">
                    CEO, Unigo Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
