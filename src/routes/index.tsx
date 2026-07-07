import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { AgentAvatar } from "@/components/site/AgentAvatar";
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
      <TeamStrip />
      <Testimonials />
      <LeadMagnet />
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
      className="relative overflow-hidden pt-20 md:pt-24"
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
        <svg className="absolute right-4 top-1/2 -translate-y-1/3 h-[340px] w-[340px] opacity-[0.055]" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#1B5EFF" strokeWidth="1.5" strokeDasharray="4 10" className="animate-spin-slow" style={{ transformOrigin: "100px 100px" }} />
          <circle cx="100" cy="100" r="62" fill="none" stroke="#1B5EFF" strokeWidth="1" strokeDasharray="2 8" className="animate-spin-slow-rev" style={{ transformOrigin: "100px 100px" }} />
        </svg>
        <svg className="absolute left-1/3 bottom-4 h-[140px] w-[140px] opacity-[0.045]" viewBox="0 0 100 100">
          <polygon points="50,5 95,95 5,95" fill="none" stroke="#FFB800" strokeWidth="1.5" />
          <polygon points="50,20 80,80 20,80" fill="none" stroke="#FFB800" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-12 lg:gap-10 lg:px-6">
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
                <svg viewBox="0 0 16 16" className="h-4 w-4 animate-bounce-x" fill="none" stroke="currentColor" strokeWidth="2.5">
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
    <section className="sec-white relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-12 h-72 w-72 rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, #1B5EFF 0%, transparent 70%)" }} />
        <svg className="absolute left-8 bottom-8 h-[120px] w-[120px] opacity-[0.04]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="#FFB800" strokeWidth="1.5" strokeDasharray="3 8" />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we do"
            title={
              <>
                Six services. <span className="text-muted-foreground">One accountable partner.</span>
              </>
            }
            description="From sales and operations to RevOps and automation: one team, one relationship, measurable results."
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
            <ScrollReveal
              key={s.code}
              variant="fadeUp"
              delay={i * 0.07}
              className="group relative bg-white p-7 transition-all duration-300 hover:bg-[#F4F6FA] hover:-translate-y-px hover:shadow-[inset_0_-2px_0_0_rgba(255,184,0,0.35)]"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                {s.code}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 font-mono text-[12px] text-foreground/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800] transition-transform group-hover:scale-125" />
                    {b}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
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
          {CASES.map((c, i) => (
            <ScrollReveal key={c.title} variant="fadeUp" delay={i * 0.1} className="rounded-2xl border border-border bg-[#F4F6FA] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#FFB800]/30">
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
            </ScrollReveal>
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

/* ─────────────── TEAM STRIP ─────────────── */
const TEAM_MEMBERS = [
  { v: 1 as const, name: "Sunny T.", role: "RevOps Lead", specialty: "HubSpot · Salesforce · Forecasting" },
  { v: 2 as const, name: "Rhoda O.", role: "Community Manager", specialty: "Social Media · Community · Content" },
  { v: 3 as const, name: "Israel O.", role: "Automation Engineer", specialty: "n8n · Make · AI Integrations" },
];

function TeamStrip() {
  return (
    <section className="sec-white border-t border-border py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="shrink-0 lg:w-72">
            <SectionHeader
              eyebrow="The team"
              title={
                <>
                  Senior operators.{" "}
                  <span className="text-gradient-gold">Not juniors.</span>
                </>
              }
              description="You work directly with the engineers building your system, not an account manager passing notes down."
            />
          </div>
          <div className="flex-1 grid gap-5 sm:grid-cols-3">
            {TEAM_MEMBERS.map((t, i) => (
              <ScrollReveal key={t.name} variant="fadeUp" delay={i * 0.1}>
                <div className="flex flex-col items-center text-center rounded-2xl border border-border bg-[#F8FAFF] p-6 hover:bg-[#EEF3FF] transition-colors">
                  <AgentAvatar v={t.v} size={88} />
                  <div className="mt-4 font-display text-base font-bold text-[#080D1C]">{t.name}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{t.role}</div>
                  <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.specialty}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#F0F4FF]">
                    {"photo" in t && t.photo ? (
                      <img src={t.photo} alt={t.name} className="h-full w-full object-cover object-top" />
                    ) : (
                      <Avatar v={(t as { avatar: 1 | 2 | 3 }).avatar} />
                    )}
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
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-[#FFB800]/30 animate-ping-ring" />
              <Link
                to="/book"
                className="relative inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,184,0,0.45)]"
                style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
              >
                Book a consultation →
              </Link>
            </div>
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
