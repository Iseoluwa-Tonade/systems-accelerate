import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { AgentAvatar } from "@/components/site/AgentAvatar";
import * as L from "@/components/site/Logos";

/* ─────────────── CYCLING WORD ─────────────── */
const HERO_WORDS = ["scale.", "grow.", "convert.", "accelerate."];

function CyclingWord() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_WORDS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const word = HERO_WORDS[idx];
  const letters = word.split("");

  return (
    <span
      className="relative inline-flex overflow-hidden"
      style={{ verticalAlign: "bottom" }}
    >
      <AnimatePresence mode="wait">
        <motion.span key={idx} className="inline-flex" aria-label={word}>
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className="inline-block text-gradient-gold"
              initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
              animate={{
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: {
                  duration: 0.48,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.03,
                },
              }}
              exit={{
                y: "-120%",
                opacity: 0,
                filter: "blur(8px)",
                transition: {
                  duration: 0.28,
                  ease: [0.55, 0, 1, 0.45],
                  delay: i * 0.02,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuperTelque | Revenue Systems Engineered for Scale" },
      {
        name: "description",
        content:
          "B2B RevOps, GTM engineering, CRM architecture and AI revenue systems built on HubSpot, Salesforce, Clay, Apollo, n8n and OpenAI.",
      },
      { property: "og:title", content: "SuperTelque | Revenue Systems Engineered for Scale" },
      {
        property: "og:description",
        content: "Skilled remote talent plus automation and data-driven systems, delivered as one accountable partner.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout headerTheme="light">
      <Hero />
      <TrustBar />
      <WhyUs />
      <Services />
      <Methodology />
      <CaseStudiesPreview />
      <TeamStrip />
      <Testimonials />
      <LeadMagnet />
      <FinalCTA />
    </SiteLayout>
  );
}


/* ─────────────── HERO FLOATING CARDS ─────────────── */
const CARD_SHELL = "rounded-2xl border border-white/12 bg-[#0B1120]/88 backdrop-blur-md shadow-[0_20px_44px_-10px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)]";

function FloatWrap({ children, delay = 0, period = 4, lift = 7 }: {
  children: ReactNode; delay?: number; period?: number; lift?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.91 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={{ y: [0, -lift, 0] }}
        transition={{ duration: period, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* Pipeline metric card with animated bars */
function CardPipeline() {
  const bars = [28, 42, 35, 52, 46, 60, 55, 68, 62, 80];
  return (
    <div className={`${CARD_SHELL} p-4 w-full`}>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Pipeline</div>
      <div className="mt-1.5 font-display text-[28px] font-bold text-white leading-none">$4.2M</div>
      <div className="font-mono text-[10px] text-[#1B5EFF] mt-1">+18% vs prev qtr</div>
      <div className="mt-3 flex items-end gap-[2.5px] h-9">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-[2px]"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.65, delay: 0.6 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: i >= 8 ? "#1B5EFF" : "rgba(27,94,255,0.22)" }}
          />
        ))}
      </div>
      <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/15">16-week trend</div>
    </div>
  );
}

/* Live activity feed card */
const ACTIVITIES = [
  { dot: "#14B8A6", title: "New SQL: Fintech Series B", sub: "Routed to AE · just now" },
  { dot: "#1B5EFF", title: "Deal moved to Proposal", sub: "Stage updated · 2m ago" },
  { dot: "#FFB800", title: "Clay enriched 42 leads", sub: "Waterfall complete · 5m ago" },
  { dot: "#8B5CF6", title: "Sequence enrolled: 38 contacts", sub: "Apollo step 1 · 9m ago" },
];

function CardActivity() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % ACTIVITIES.length), 3000);
    return () => clearInterval(t);
  }, []);
  const act = ACTIVITIES[i];
  return (
    <div className={`${CARD_SHELL} p-4 w-full`}>
      <div className="flex items-center gap-1.5 mb-3">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-55" style={{ backgroundColor: act.dot }} />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ backgroundColor: act.dot }} />
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/28">Live feed</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 7, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -7, filter: "blur(4px)" }}
          transition={{ duration: 0.32 }}
        >
          <div className="font-display text-[13px] font-semibold text-white leading-snug">{act.title}</div>
          <div className="font-mono text-[9.5px] text-white/32 mt-1">{act.sub}</div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-3 flex gap-1 flex-wrap">
        {["HubSpot", "Clay", "n8n"].map((t) => (
          <span key={t} className="rounded-full bg-white/04 border border-white/09 px-1.5 py-0.5 font-mono text-[8px] text-white/30">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* Routing speed card with animated progress */
function CardRouting() {
  return (
    <div className={`${CARD_SHELL} p-4 w-full`}>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Response time</div>
      <div className="mt-1.5 font-display text-[28px] font-bold text-white leading-none">&lt;90s</div>
      <div className="font-mono text-[10px] text-[#8B5CF6] mt-1">Hot lead routing</div>
      <div className="mt-3.5">
        <div className="flex justify-between font-mono text-[8px] text-white/22 mb-1.5">
          <span>SLA compliance</span><span>92%</span>
        </div>
        <div className="h-[3px] rounded-full bg-white/08 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "92%" }}
            transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ background: "linear-gradient(to right, #8B5CF6, #A78BFA)" }}
          />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
        </span>
        <span className="font-mono text-[8.5px] text-emerald-400/55">All systems nominal</span>
      </div>
    </div>
  );
}

/* Won QTD card with sparkline */
function CardWon() {
  return (
    <div className={`${CARD_SHELL} p-4 w-full`}>
      <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/30">Won QTD</div>
      <div className="mt-1.5 font-display text-[28px] font-bold leading-none text-gradient-gold">$680K</div>
      <div className="font-mono text-[10px] text-[#FFB800] mt-1">+41% vs prev qtr</div>
      <svg viewBox="0 0 80 26" className="mt-3 w-full h-5">
        <motion.polyline
          points="0,24 11,20 22,22 33,14 44,11 55,7 66,4 80,1"
          fill="none" stroke="#FFB800" strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeOut" }}
        />
      </svg>
      <div className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/15">8-week sparkline</div>
    </div>
  );
}

/* ─────────────── TOOL FLOW ANIMATION ─────────────── */
const TOOLS = [
  { name: "HubSpot", abbr: "HS", color: "#FF7A59" },
  { name: "Clay", abbr: "CL", color: "#1B5EFF" },
  { name: "Apollo", abbr: "AP", color: "#8B5CF6" },
  { name: "n8n", abbr: "n8", color: "#EA4B71" },
  { name: "Slack", abbr: "SK", color: "#611f69" },
];

function FlowConnector({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="relative flex-1 h-px mx-1" style={{ background: `${color}20` }}>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 h-[5px] w-[5px] rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
        animate={{ left: ["-5px", "calc(100% + 5px)"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay, repeatDelay: 0.5 }}
      />
    </div>
  );
}

function ToolFlow() {
  return (
    <div className="mt-14 w-full max-w-[420px] mx-auto">
      <div className="rounded-2xl border border-[#1B2540]/12 bg-[#080D1C]/06 backdrop-blur-sm px-5 py-4">
        <div className="flex items-center justify-between">
          {TOOLS.map((t, i) => (
            <div key={t.name} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1.5 shrink-0">
                <motion.div
                  className="h-9 w-9 rounded-xl flex items-center justify-center font-display text-[10.5px] font-extrabold"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}22 0%, ${t.color}10 100%)`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                    boxShadow: `0 2px 12px ${t.color}28, inset 0 1px 0 ${t.color}20`,
                  }}
                  initial={{ opacity: 0, scale: 0.65 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {t.abbr}
                </motion.div>
                <span className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-[#4C5670]/50">{t.name}</span>
              </div>
              {i < TOOLS.length - 1 && (
                <FlowConnector color={TOOLS[i + 1].color} delay={0.8 + i * 0.3} />
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-50" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#4C5670]/40">Automation pipeline · live</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  return (
    <section className="relative pt-20 md:pt-24" style={{ background: "#FAFBFF" }}>
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-52 right-[-120px] h-[750px] w-[750px] rounded-full animate-aurora-2"
          style={{ background: "radial-gradient(circle at 55% 40%, rgba(27,94,255,0.11), rgba(99,102,241,0.06) 50%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-[-100px] -left-32 h-[600px] w-[600px] rounded-full animate-aurora-1"
          style={{ background: "radial-gradient(circle at 40% 60%, rgba(255,184,0,0.14), rgba(255,220,80,0.07) 50%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-[10%] left-[35%] h-[500px] w-[500px] rounded-full animate-aurora-1"
          style={{ background: "radial-gradient(circle at 50% 50%, rgba(124,58,237,0.07), transparent 65%)", filter: "blur(100px)", animationDelay: "-12s" }} />
        <div className="absolute bottom-0 right-[10%] h-[380px] w-[380px] rounded-full animate-aurora-2"
          style={{ background: "radial-gradient(circle at 50% 60%, rgba(20,184,166,0.09), transparent 65%)", filter: "blur(70px)", animationDelay: "-8s" }} />
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="hero-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-grain)" opacity="0.022" />
        </svg>
        <div className="absolute inset-0 bg-grid opacity-[0.045]" />
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 5%, rgba(27,94,255,0.35) 35%, rgba(255,184,0,0.35) 65%, transparent 95%)" }} />
      </div>

      {/* ── 3-column grid ── */}
      <div className="relative mx-auto max-w-[1440px] px-4 lg:px-6 py-14 lg:py-20">
        <div className="grid xl:grid-cols-[216px_1fr_216px] xl:gap-8 items-start">

          {/* LEFT: Pipeline + Routing */}
          <div className="hidden xl:flex flex-col gap-5 pt-8">
            <FloatWrap delay={0.7} period={4.2} lift={8}>
              <CardPipeline />
            </FloatWrap>
            <FloatWrap delay={1.0} period={5.2} lift={7}>
              <CardRouting />
            </FloatWrap>
          </div>

          {/* CENTER: headline + CTAs + trust + tool flow */}
          <div className="flex flex-col items-center text-center pt-4 lg:pt-8 pb-16 lg:pb-24">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#1B5EFF]/15 bg-[#1B5EFF]/06 px-4 py-1.5 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#1B5EFF]/70">B2B RevOps & GTM Engineering</span>
            </div>

            <h1 className="font-display text-[46px] font-extrabold leading-[1.07] tracking-tight text-[#080D1C] sm:text-[62px] lg:text-[78px] xl:text-[68px] lg:leading-[1.04]">
              Revenue systems
              <br />
              built to <CyclingWord />
            </h1>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#4C5670] sm:text-[18px]">
                Better data, cleaner workflows, and a revenue system your whole team can rely on.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold text-[#080D1C] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_14px_36px_-8px_rgba(255,184,0,0.55)]"
                  style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
                >
                  Book a strategy session
                  <svg viewBox="0 0 16 16" className="h-4 w-4 animate-bounce-x" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link to="/services" className="text-[15px] font-medium text-[#080D1C]/45 hover:text-[#080D1C] transition-colors">
                  View services →
                </Link>
              </div>
            </ScrollReveal>

            {/* Trust badges */}
            <ScrollReveal variant="fadeUp" delay={0.35}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 border-t border-black/06 pt-8">
                {[
                  { icon: "★", score: "4.9/5", label: "Client Rating" },
                  { icon: "✓", score: "Top Rated", label: "Upwork" },
                  { icon: "⚡", score: "< 24 hrs", label: "Response Time" },
                  { icon: "🔒", score: "NDA", label: "On Request" },
                ].map(({ icon, score, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#F4F7FF] text-sm border border-[#E8EEFF]">{icon}</span>
                    <div>
                      <div className="text-[12px] font-bold text-[#080D1C] leading-tight">{score}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#4C5670]/55">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Tool automation flow */}
            <ScrollReveal variant="fadeUp" delay={0.5}>
              <ToolFlow />
            </ScrollReveal>
          </div>

          {/* RIGHT: Activity + Won */}
          <div className="hidden xl:flex flex-col gap-5 pt-8">
            <FloatWrap delay={0.85} period={4.8} lift={6}>
              <CardActivity />
            </FloatWrap>
            <FloatWrap delay={0.95} period={3.9} lift={9}>
              <CardWon />
            </FloatWrap>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────── TRUST BAR ─────────────── */
function TrustBar() {
  const items = [
    L.HubSpot, L.Salesforce, L.Apollo, L.Clay, L.OpenAI, L.Stripe,
    L.PowerBI, L.Zapier, L.N8n, L.Make, L.Slack, L.GoHighLevel,
    L.Lemlist, L.Instantly, L.LowNoCode, L.Supabase,
  ];
  return (
    <section className="sec-navy border-y border-white/06">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-6">
          <div className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
            Stacks we engineer
          </div>
          <div
            className="relative w-full overflow-hidden"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}
          >
            <div className="flex w-max gap-10 animate-ticker">
              {[...items, ...items].map((Logo, i) => (
                <Logo key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── WHY US ─────────────── */
const PAIN_POINTS = [
  {
    no: "01",
    problem: "Your CRM has data nobody trusts",
    solution: "We fix the foundation first. No automation layer until the data is clean and consistent.",
    color: "#1B5EFF",
  },
  {
    no: "02",
    problem: "Reps spend more time on admin than selling",
    solution: "We automate every repetitive handoff, data entry, and follow-up so your team stays on deals.",
    color: "#14B8A6",
  },
  {
    no: "03",
    problem: "Your forecast is always wrong",
    solution: "We build one unified pipeline view with shared definitions across all revenue teams.",
    color: "#8B5CF6",
  },
  {
    no: "04",
    problem: "Agencies that deliver decks, not systems",
    solution: "We're ex-operators with 10+ years inside revenue orgs. We build, document, and hand over.",
    color: "#FFB800",
  },
] as const;

function WhyUs() {
  return (
    <section className="bg-[#080D1C] relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.13) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute -bottom-20 left-10 h-[350px] w-[350px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.09) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/05 px-4 py-1.5 mb-6">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">Why SuperTelque</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[50px] lg:leading-[1.05]">
              We solve what other agencies<br className="hidden lg:block" />{" "}
              <span className="text-gradient-gold">leave broken.</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/07 sm:grid-cols-2">
          {PAIN_POINTS.map((p, i) => (
            <ScrollReveal key={p.no} variant="fadeUp" delay={i * 0.07}>
              <div className="bg-white/[0.03] hover:bg-white/[0.055] transition-colors duration-300 p-7 lg:p-9 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-white/25">{p.no}</span>
                  <div className="flex-1 h-px bg-white/07" />
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} />
                </div>
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-red-400/60">The problem</div>
                <p className="font-display text-lg font-semibold text-white leading-snug mb-6">
                  &ldquo;{p.problem}&rdquo;
                </p>
                <div className="w-8 h-px mb-5" style={{ backgroundColor: p.color + "55" }} />
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: p.color + "cc" }}>
                  Our answer
                </div>
                <p className="text-sm text-white/50 leading-relaxed flex-1">{p.solution}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SERVICES ─────────────── */
const SERVICES = [
  {
    code: "01",
    title: "Sales & Lead Generation",
    desc: "Fill your pipeline with the right people. We handle lead generation, outreach, and appointment setting.",
    bullets: ["Lead generation", "Appointment setting", "Sales development"],
  },
  {
    code: "02",
    title: "CRM & Sales Operations",
    desc: "Implement and optimise HubSpot or Salesforce so your sales process runs cleanly from day one.",
    bullets: ["CRM implementation", "Sales process optimisation", "Pipeline reporting"],
  },
  {
    code: "03",
    title: "RevOps & GTM Engineering",
    desc: "Align your revenue teams on shared metrics, forecasts, and a pipeline your leadership can trust.",
    bullets: ["Revenue operations", "GTM engineering", "Forecasting & dashboards"],
  },
  {
    code: "04",
    title: "Workflow Automation & AI",
    desc: "Automate the repetitive work and use AI where it creates real leverage across your operations.",
    bullets: ["Workflow automation", "AI-powered solutions", "Process optimisation"],
  },
  {
    code: "05",
    title: "Social Media & Community",
    desc: "Build a consistent presence and an active community around your brand across every channel.",
    bullets: ["Social media management", "Community management", "Content scheduling"],
  },
  {
    code: "06",
    title: "Virtual Assistance & Back Office",
    desc: "Skilled remote talent for the admin, orders, and operations that keep your business running.",
    bullets: ["Virtual assistance", "Order management", "Back-office operations"],
  },
] as const;

function Services() {
  return (
    <section className="sec-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          {/* Sticky left header */}
          <div className="lg:w-72 xl:w-80 shrink-0 mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <SectionHeader
                eyebrow="What we do"
                title={<>Six services.<br /><span className="text-gradient-gold">One partner.</span></>}
                description="From sales ops to AI automation, one senior team delivers it all."
              />
              <Link
                to="/services"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground/70 hover:bg-[#F4F6FA] hover:text-foreground transition-all"
              >
                Explore all services →
              </Link>
            </div>
          </div>
          {/* Editorial list */}
          <div className="flex-1 divide-y divide-border">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={s.code} variant="slideRight" delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group flex items-start gap-5 py-7 transition-all duration-200 hover:pl-3"
                >
                  <span className="pt-1.5 font-mono text-[11px] tracking-[0.18em] text-muted-foreground shrink-0 w-6">{s.code}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-xl font-bold tracking-tight text-[#080D1C] group-hover:text-[#1B5EFF] transition-colors">
                      {s.title}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.bullets.map((b) => (
                        <span key={b} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] text-foreground/55 group-hover:border-[#1B5EFF]/20 transition-colors">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg viewBox="0 0 16 16" className="mt-1.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-[#1B5EFF] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── METHODOLOGY ─────────────── */
const STEPS = [
  {
    k: "Audit",
    d: "We review your pipeline, CRM, and data flows to find what's working and what's costing you.",
    out: "Gap analysis · ROI estimate",
  },
  {
    k: "Architect",
    d: "We map out your data model, automations, and integrations before touching a single setting.",
    out: "Architecture plan · data model",
  },
  {
    k: "Automate",
    d: "We build the workflows, sequences, and integrations your stack needs, and document everything.",
    out: "Live automations · documentation",
  },
  {
    k: "Accelerate",
    d: "Dashboards live, team trained. We track what matters and keep improving from there.",
    out: "Dashboards · quarterly reviews",
  },
] as const;

const cardColors = [
  { bg: "#EFF6FF", accent: "#1B5EFF", label: "Analyze" },
  { bg: "#FFF8E1", accent: "#B45309", label: "Design" },
  { bg: "#ECFDF5", accent: "#059669", label: "Engineer" },
  { bg: "#FFF3E0", accent: "#C2410C", label: "Scale" },
];

function Methodology() {
  return (
    <section className="sec-mid relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute -left-20 top-1/2 -translate-y-1/2 h-[280px] w-[280px] opacity-[0.06]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="88" fill="none" stroke="#1B5EFF" strokeWidth="1.2" strokeDasharray="3 8" className="animate-spin-slow" style={{ transformOrigin: "100px 100px" }} />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#1B5EFF" strokeWidth="0.7" strokeDasharray="2 7" className="animate-spin-slow-rev" style={{ transformOrigin: "100px 100px" }} />
        </svg>
        <svg className="absolute -right-16 bottom-0 h-[200px] w-[200px] opacity-[0.05]" viewBox="0 0 200 200">
          <rect x="20" y="20" width="160" height="160" rx="18" fill="none" stroke="#FFB800" strokeWidth="1.5" strokeDasharray="4 9" />
          <rect x="48" y="48" width="104" height="104" rx="12" fill="none" stroke="#FFB800" strokeWidth="1" strokeDasharray="3 6" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeader
          eyebrow="Methodology"
          title={
            <>
              Audit. Architect. Automate.{" "}
              <span className="text-gradient-gold">Accelerate.</span>
            </>
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => {
            const c = cardColors[i];
            return (
              <ScrollReveal
                key={s.k}
                variant="fadeUp"
                delay={i * 0.09}
                className="rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  backgroundColor: c.bg,
                  border: `1px solid ${c.accent}22`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
                  <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: c.accent }}>
                    {c.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-[#080D1C]/40">
                    {String(i + 1).padStart(2, "0")}/{String(STEPS.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#080D1C]">
                  {s.k}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#080D1C]/65 flex-1">{s.d}</p>
                <div
                  className="mt-4 rounded-md px-3 py-2 font-mono text-[11px]"
                  style={{
                    backgroundColor: `${c.accent}15`,
                    color: c.accent,
                    border: `1px solid ${c.accent}25`,
                  }}
                >
                  {s.out}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CASE STUDIES PREVIEW ─────────────── */
const CASES = [
  {
    tag: "B2B SaaS",
    title: "Pipeline transformation for a Series C platform",
    metric: "+40%",
    label: "Qualified pipeline in 2 quarters",
    stack: ["HubSpot", "Clay", "n8n", "Power BI"],
  },
  {
    tag: "Fintech",
    title: "Outbound automation across 3 GTM motions",
    metric: "3.5×",
    label: "Meeting-booking rate vs. baseline",
    stack: ["Apollo", "Clay", "Salesforce", "OpenAI"],
  },
  {
    tag: "AI Startup",
    title: "Intent-driven lead routing engine",
    metric: "+22%",
    label: "SQL conversion lift in the first sprint",
    stack: ["HubSpot", "OpenAI", "Make", "Slack"],
  },
] as const;

function AnimatedMetric({ metric }: { metric: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.7 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mt-4 font-display text-4xl font-extrabold tracking-tight text-gradient-gold"
      style={visible ? { animation: "pop-in 0.65s cubic-bezier(0.34,1.56,0.64,1) both" } : { opacity: 0 }}
    >
      {metric}
    </div>
  );
}

function CaseStudiesPreview() {
  return (
    <section className="sec-mid border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-12">
          <SectionHeader
            eyebrow="Field work"
            title={<>Real work. Real numbers.</>}
          />
          <Link to="/case-studies" className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors">
            Full teardowns →
          </Link>
        </div>

        <div className="space-y-3">
          {CASES.map((c, i) => (
            <ScrollReveal key={c.title} variant="fadeUp" delay={i * 0.08}>
              <Link
                to="/case-studies"
                className="group flex flex-col gap-4 rounded-2xl border border-border bg-white px-5 py-5 sm:px-6 sm:py-6 lg:flex-row lg:items-center lg:gap-8 lg:px-8 lg:py-7 transition-all hover:shadow-lg hover:border-[#FFB800]/40 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Mobile: metric + tag on same row */}
                <div className="flex items-center gap-4 lg:block lg:shrink-0 lg:w-36">
                  <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient-gold leading-none shrink-0">
                    {c.metric}
                  </div>
                  {/* Tag visible on mobile inline with metric */}
                  <div className="lg:hidden font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{c.tag}</div>
                </div>
                <div className="hidden lg:block self-stretch w-px bg-border" />
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{c.tag}</div>
                  <h3 className="lg:mt-1.5 font-display text-base sm:text-lg font-bold tracking-tight text-[#080D1C] group-hover:text-[#1B5EFF] transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.label}</p>
                </div>
                {/* Stack badges — hidden on mobile */}
                <div className="hidden lg:flex flex-wrap gap-1.5 max-w-48 shrink-0">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-[#F8FAFF] px-2.5 py-0.5 font-mono text-[10px] text-foreground/60">
                      {s}
                    </span>
                  ))}
                </div>
                <svg viewBox="0 0 16 16" className="hidden lg:block h-5 w-5 shrink-0 text-muted-foreground group-hover:text-[#FFB800] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link to="/case-studies" className="text-sm text-foreground/70 hover:text-foreground">Full teardowns →</Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TEAM STRIP ─────────────── */
const TEAM_MEMBERS = [
  { v: 1 as const, name: "Sunny T.", role: "RevOps Lead", specialty: "HubSpot · Salesforce · Forecasting" },
  { v: 2 as const, name: "Rhoda O.", role: "Community Manager", specialty: "Social Media · Community · Content" },
  { v: 3 as const, name: "Israel O.", role: "Automation Engineer", specialty: "n8n · Make · AI Integrations" },
];

function TeamStrip() {
  return (
    <section
      className="relative overflow-hidden border-t border-border py-16 lg:py-24"
      style={{ background: "linear-gradient(160deg, #F0F5FF 0%, #FFFFFF 50%, #FFF8F0 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.08) 0%, transparent 70%)" }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B5EFF]/15 bg-[#1B5EFF]/06 px-4 py-1.5 mb-5">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-[#1B5EFF]/70">The team</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-4xl">
              Senior operators. <span className="text-gradient-gold">Not juniors.</span>
            </h2>
            <p className="mt-3 mx-auto max-w-md text-base text-[#4C5670]">
              You work directly with the engineers building your system.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {TEAM_MEMBERS.map((t, i) => (
            <ScrollReveal key={t.name} variant="zoomIn" delay={i * 0.1}>
              <div className="flex flex-col items-center text-center rounded-2xl border border-white bg-white/90 p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.10)] hover:border-[#FFB800]/30">
                <AgentAvatar v={t.v} size={96} />
                <div className="mt-5 font-display text-lg font-bold text-[#080D1C]">{t.name}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</div>
                <div className="mt-2.5 text-xs text-[#1B5EFF] font-mono">{t.specialty}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-10 text-center">
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors">
              Meet the full team →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── AVATAR FACES ─────────────── */
function Avatar({ v }: { v: 1 | 2 | 3 }) {
  if (v === 1) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#ECFDF5" />
        <path d="M0,80 Q0,60 40,60 Q80,60 80,80" fill="#059669" />
        <rect x="35" y="52" width="10" height="10" rx="2" fill="#5C2A18" />
        <circle cx="40" cy="35" r="21" fill="#6B3A2A" />
        <path d="M19,30 Q21,10 40,10 Q59,10 61,30 Q55,14 40,13 Q25,14 19,30Z" fill="#1A0800" />
        <ellipse cx="32" cy="34" rx="3.5" ry="3" fill="white" />
        <circle cx="32.5" cy="34.5" r="2" fill="#1A0800" />
        <circle cx="33.5" cy="33.5" r="0.7" fill="white" />
        <ellipse cx="48" cy="34" rx="3.5" ry="3" fill="white" />
        <circle cx="48.5" cy="34.5" r="2" fill="#1A0800" />
        <circle cx="49.5" cy="33.5" r="0.7" fill="white" />
        <path d="M37,39 Q40,42 43,39" fill="none" stroke="#3D1808" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M33,45 Q40,50 47,45" fill="none" stroke="#3D1808" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (v === 2) {
    return (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="#EFF6FF" />
        <path d="M0,80 Q0,60 40,60 Q80,60 80,80" fill="#1B5EFF" />
        <rect x="35" y="52" width="10" height="10" rx="2" fill="#C0784A" />
        <circle cx="40" cy="35" r="21" fill="#D4956A" />
        <path d="M19,31 Q21,12 40,11 Q59,12 61,31 Q56,16 40,15 Q24,16 19,31Z" fill="#2D1A0E" />
        <ellipse cx="32" cy="34" rx="3.5" ry="3" fill="white" />
        <circle cx="32.5" cy="34.5" r="2" fill="#2D1A0E" />
        <circle cx="33.5" cy="33.5" r="0.7" fill="white" />
        <ellipse cx="48" cy="34" rx="3.5" ry="3" fill="white" />
        <circle cx="48.5" cy="34.5" r="2" fill="#2D1A0E" />
        <circle cx="49.5" cy="33.5" r="0.7" fill="white" />
        <path d="M37,39 Q40,42 43,39" fill="none" stroke="#A06030" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M33,45 Q40,50 47,45" fill="none" stroke="#8B4A20" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="#F5F3FF" />
      <path d="M0,80 Q0,60 40,60 Q80,60 80,80" fill="#7C3AED" />
      <rect x="35" y="52" width="10" height="10" rx="2" fill="#E8956E" />
      <circle cx="40" cy="35" r="21" fill="#F4A07A" />
      <path d="M19,30 Q20,10 40,10 Q60,10 61,30 Q56,15 40,14 Q24,15 19,30Z" fill="#7B3810" />
      <path d="M19,30 Q17,50 19,58" stroke="#7B3810" strokeWidth="6" strokeLinecap="round" />
      <path d="M61,30 Q63,50 61,58" stroke="#7B3810" strokeWidth="6" strokeLinecap="round" />
      <ellipse cx="32" cy="34" rx="3.5" ry="3" fill="white" />
      <circle cx="32.5" cy="34.5" r="2" fill="#3D2010" />
      <circle cx="33.5" cy="33.5" r="0.7" fill="white" />
      <ellipse cx="48" cy="34" rx="3.5" ry="3" fill="white" />
      <circle cx="48.5" cy="34.5" r="2" fill="#3D2010" />
      <circle cx="49.5" cy="33.5" r="0.7" fill="white" />
      <path d="M37,39 Q40,42 43,39" fill="none" stroke="#C07050" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M33,45 Q40,50 47,45" fill="none" stroke="#A05840" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */
const TESTIMONIALS = [
  {
    quote: "They understood our pipeline problem in the first week and had automated solutions running within the month.",
    name: "Amara O.",
    role: "Head of Sales, Series B Fintech",
    photo: "/advisor-2.png",
  },
  {
    quote: "Our HubSpot was a mess. SuperTelque cleaned it up and built the reporting our board actually trusts.",
    name: "David K.",
    role: "COO, SaaS Platform",
    photo: "/advisor-1.png",
  },
  {
    quote: "Having a dedicated VA plus automation cut 30 hours of admin work per week in the first month.",
    name: "Chisom E.",
    role: "Founder, E-commerce Brand",
    photo: null,
    avatar: 3 as const,
  },
] as const;

function Testimonials() {
  return (
    <section className="sec-white border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal variant="fadeUp">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Client voices</div>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-4xl">
                What operators say about us.
              </h2>
            </div>
            <div className="flex gap-1 shrink-0">
              {Array.from({ length: 5 }).map((_, si) => (
                <svg key={si} viewBox="0 0 12 12" className="h-4 w-4 fill-[#FFB800]">
                  <path d="M6 0l1.5 4H12L8.5 6.5l1.5 4L6 8 2 10.5l1.5-4L0 4h4.5z" />
                </svg>
              ))}
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">4.9 / 5.0</span>
            </div>
          </div>
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} variant="fadeUp" delay={i * 0.1}>
              <div className="relative rounded-2xl border border-border bg-white p-7 flex flex-col h-full overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                {/* Giant background quote mark */}
                <span className="pointer-events-none absolute -top-5 -left-1 font-display text-[110px] font-black text-[#EEF3FF] leading-none select-none">&ldquo;</span>
                <p className="relative text-[15px] font-medium leading-relaxed text-[#080D1C]/80 flex-1">
                  {t.quote}
                </p>
                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#FFB800]/30">
                    {"photo" in t && t.photo ? (
                      <img src={t.photo} alt={t.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      <Avatar v={(t as { avatar: 1 | 2 | 3 }).avatar} />
                    )}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#080D1C]">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── LEAD MAGNET ─────────────── */
const FREE_RESOURCES = [
  {
    tag: "Checklist",
    title: "RevOps Audit Checklist",
    desc: "The 12-point checklist we run on every engagement: CRM hygiene, pipeline design, and automation priorities.",
    color: "#1B5EFF",
    bg: "#EFF6FF",
    border: "rgba(27,94,255,0.15)",
  },
  {
    tag: "Guide",
    title: "GTM Stack Guide",
    desc: "Tools we recommend at each funnel stage, mapped to your team size. From awareness to expansion.",
    color: "#059669",
    bg: "#ECFDF5",
    border: "rgba(5,150,105,0.15)",
  },
  {
    tag: "Template",
    title: "Lead Scoring Framework",
    desc: "A Google Sheets template to qualify leads consistently. Import your CRM data and score in minutes.",
    color: "#7C3AED",
    bg: "#F5F3FF",
    border: "rgba(124,58,237,0.15)",
  },
  {
    tag: "Playbook",
    title: "Outbound Automation Playbook",
    desc: "Five automation flows that cut list-building time by 60%, with exact tool configs and sequences.",
    color: "#B45309",
    bg: "#FFFBEB",
    border: "rgba(180,83,9,0.15)",
  },
] as const;

function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  }

  return (
    <section className="sec-mid relative overflow-hidden border-t border-border py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -left-10 bottom-0 h-56 w-56 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.12) 0%, transparent 70%)" }}
        />
        <svg className="absolute right-1/4 bottom-0 h-[160px] w-[160px] opacity-[0.04]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#1B5EFF" strokeWidth="1" strokeDasharray="3 7" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB800]/30 bg-[#FFB800]/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#B45309]">
              Free resources
            </div>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-[#080D1C] sm:text-4xl">
              Four resources. <span className="text-gradient-gold">One email.</span>
            </h2>
            <p className="mt-3 mx-auto max-w-lg text-base leading-relaxed text-[#4C5670]">
              Templates, playbooks, and guides we use with real clients, free to download.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FREE_RESOURCES.map((r, i) => (
            <ScrollReveal key={r.title} variant="fadeUp" delay={i * 0.08}>
              <div
                className="rounded-2xl p-6 h-full flex flex-col"
                style={{ backgroundColor: r.bg, border: `1px solid ${r.border}` }}
              >
                <div
                  className="self-start rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{ backgroundColor: `${r.color}18`, color: r.color, border: `1px solid ${r.color}25` }}
                >
                  {r.tag}
                </div>
                <h3 className="mt-4 font-display text-base font-bold tracking-tight text-[#080D1C]">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4C5670] flex-1">{r.desc}</p>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px]" style={{ color: r.color }}>
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="currentColor">
                    <path d="M6 0a1 1 0 011 1v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L5 6.586V1a1 1 0 011-1z" />
                    <rect x="1" y="10" width="10" height="1.5" rx="0.75" />
                  </svg>
                  Free download
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-soft">
            <div className="px-8 py-8 lg:px-12 lg:py-10">
              {sent ? (
                <div className="flex flex-col items-center text-center py-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFB800]/15">
                    <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6 stroke-[#B45309]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 10l4 4 8-8" />
                    </svg>
                  </div>
                  <div className="mt-4 font-display text-xl font-bold text-[#080D1C]">All four resources are on their way</div>
                  <p className="mt-2 text-sm text-[#4C5670]">Check your inbox. Free, no strings attached.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end">
                  <div className="flex-1">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Get all 4 resources, one email
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="your@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-border bg-[#F8FAFF] px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B5EFF]/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 rounded-full px-7 py-3.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.02] hover:shadow-[0_8px_24px_-6px_rgba(255,184,0,0.40)]"
                    style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                  >
                    Send me the resources →
                  </button>
                </form>
              )}
              {!sent && (
                <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                  No spam · GDPR compliant · Unsubscribe anytime
                </p>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="sec-navy relative overflow-hidden border-t border-white/08 py-20 lg:py-32">
      {/* Background depth */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,184,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
        <div
          className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.12) 0%, transparent 65%)", filter: "blur(60px)" }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="inline-flex items-center gap-2.5 mb-6 rounded-full border border-white/10 bg-white/05 px-5 py-2">
            <img src="/supertelque-logo.png" alt="" className="h-5 w-5 object-contain" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/45">SuperTelque RevOps</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.04]">
            Ready to build a<br />
            <span className="text-gradient-gold">better revenue system?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[17px] leading-relaxed text-white/50">
            45 minutes with a senior RevOps engineer. We review your setup and hand you a clear starting point.
          </p>
          {/* Trust strip */}
          <div className="mt-8 flex items-center justify-center gap-6 text-white/30">
            {["Free · no pressure", "Response in 24 hours", "Senior engineer, not an SDR"].map((t, i) => (
              <span key={t} className="flex items-center gap-2 font-mono text-[11px]">
                {i > 0 && <span className="h-px w-3 bg-white/20" />}
                {t}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-[#FFB800]/25 animate-ping-ring" />
              <Link
                to="/book"
                className="relative inline-flex items-center gap-2.5 rounded-full px-8 py-4.5 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_16px_40px_-8px_rgba(255,184,0,0.50)]"
                style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
              >
                Book a free strategy session
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/05 px-7 py-4.5 text-[15px] font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all"
            >
              Send a message
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
