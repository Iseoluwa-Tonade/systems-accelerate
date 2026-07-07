import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import * as L from "@/components/site/Logos";

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
      <Services />
      <Methodology />
      <CaseStudiesPreview />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}

/* ─────────────── HERO DASHBOARD ─────────────── */
function HeroDashboard() {
  const bars = [45, 62, 38, 71, 55, 83, 67, 49, 78, 91, 63, 72, 85, 58, 94, 77];
  const metrics = [
    { l: "Pipeline", v: "$4.2M", d: "+18%", c: "#1B5EFF" },
    { l: "Active Deals", v: "147", d: "+23%", c: "#14B8A6" },
    { l: "MQL → SQL", v: "34%", d: "+6pp", c: "#8B5CF6" },
    { l: "Won QTD", v: "$680K", d: "+41%", c: "#FFB800" },
  ];
  return (
    <div className="rounded-2xl border border-white/12 bg-[#080D1C] p-5 lg:p-6 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Revenue Command · Q2 2026</div>
          <div className="mt-0.5 font-display text-sm font-semibold text-white">Pipeline Intelligence</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] text-white/40">live</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {metrics.map((m) => (
          <div key={m.l} className="rounded-xl border border-white/08 bg-white/04 p-3">
            <div className="font-mono text-[10px] text-white/40">{m.l}</div>
            <div className="mt-1 font-display text-xl font-bold text-white">{m.v}</div>
            <div className="mt-0.5 font-mono text-[10px]" style={{ color: m.c }}>{m.d} vs prev</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/06 bg-white/02 p-3">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30 mb-3">Pipeline · 16-week view</div>
        <div className="flex items-end gap-[3px] h-16">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{ height: `${h}%`, background: "linear-gradient(to top, rgba(27,94,255,0.75), rgba(79,70,229,0.50))" }}
            />
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {["HubSpot", "Clay", "n8n", "Apollo", "Snowflake"].map((t) => (
            <span key={t} className="rounded px-2 py-0.5 font-mono text-[9px] text-white/45 border border-white/08">{t}</span>
          ))}
        </div>
        <span className="font-mono text-[9px] text-white/25">synced 2s ago</span>
      </div>
    </div>
  );
}

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-28"
      style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 50%, #FFF9F0 100%)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:px-6">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h1 className="font-display text-[40px] font-extrabold leading-[1.02] tracking-tight text-[#080D1C] sm:text-[54px] lg:text-[72px] lg:leading-[1.0]">
            Revenue systems
            <br />
            <span className="text-gradient-gold">built to scale.</span>
          </h1>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-[#4C5670] sm:text-[17px]">
              Better data, cleaner workflows, and a revenue system your whole team can rely on.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                to="/book"
                className="group inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-bold text-[#080D1C] transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,184,0,0.50)]"
                style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
              >
                Book a strategy session
                <svg viewBox="0 0 16 16" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link to="/services" className="text-[15px] font-medium text-[#080D1C]/50 hover:text-[#080D1C] transition-colors">
                View services →
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6 flex items-center pb-8 lg:pb-0">
          <ScrollReveal variant="scaleIn" delay={0.2} className="w-full">
            <div className="animate-float">
              <HeroDashboard />
            </div>
          </ScrollReveal>
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
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
    <section className="sec-white relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title={
              <>
                Six services. <span className="text-muted-foreground">One accountable partner.</span>
              </>
            }
            description="From sales and operations to RevOps and automation — one team, one relationship, measurable results."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.code}
              className="group relative bg-white p-7 transition-colors hover:bg-[#F4F6FA]"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                {s.code}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 font-mono text-[12px] text-foreground/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center lg:hidden">
          <Link to="/services" className="text-sm text-foreground/70 hover:text-foreground">
            See all services →
          </Link>
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
    <section className="sec-mid py-16 lg:py-24">
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
              <div
                key={s.k}
                className="rounded-2xl p-6 flex flex-col"
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
              </div>
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
    <section className="sec-white border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-10">
          <SectionHeader
            eyebrow="Field work"
            title={<>Work we've done, and what it delivered.</>}
          />
          <Link to="/case-studies" className="hidden lg:block text-sm text-foreground/70 hover:text-foreground transition-colors">
            Full teardowns →
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {CASES.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-[#F4F6FA] p-6 flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {c.tag}
              </span>
              <AnimatedMetric metric={c.metric} />
              <p className="mt-1 text-xs text-muted-foreground">{c.label}</p>
              <h3 className="mt-4 text-sm font-semibold text-foreground/90 flex-1 leading-snug">
                {c.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-1">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] text-muted-foreground border border-border rounded-full px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link to="/case-studies" className="text-sm text-foreground/70 hover:text-foreground">
            Full teardowns →
          </Link>
        </div>
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
    avatar: 1 as const,
  },
  {
    quote: "Our HubSpot was a mess. SuperTelque cleaned it up and built the reporting our board actually trusts.",
    name: "David K.",
    role: "COO, SaaS Platform",
    avatar: 2 as const,
  },
  {
    quote: "Having a dedicated VA plus automation cut 30 hours of admin work per week in the first month.",
    name: "Chisom E.",
    role: "Founder, E-commerce Brand",
    avatar: 3 as const,
  },
] as const;

function Testimonials() {
  return (
    <section className="sec-white border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeader
          eyebrow="Client voices"
          title="What our clients say."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} variant="fadeUp" delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6 flex flex-col gap-4 h-full">
                <div className="flex gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <svg key={si} viewBox="0 0 12 12" className="h-3 w-3 fill-[#FFB800]">
                      <path d="M6 0l1.5 4H12L8.5 6.5l1.5 4L6 8 2 10.5l1.5-4L0 4h4.5z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/80 flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <Avatar v={t.avatar} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
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

/* ─────────────── FINAL CTA ─────────────── */
function FinalCTA() {
  return (
    <section className="sec-navy relative overflow-hidden border-t border-white/08 py-16 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(255,184,0,0.10) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFB800]/70">Let's build</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Ready to build a <span className="text-gradient-gold">better business</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
            45 minutes. We review your setup and tell you exactly where to start.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,184,0,0.45)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
            >
              Book a consultation →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/06 px-7 py-4 text-[15px] font-medium text-white/80 hover:bg-white/12 transition-colors"
            >
              Contact the team
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
