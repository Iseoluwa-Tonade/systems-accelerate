import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
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
        content: "Architecting revenue systems that scale for B2B technology companies in Nigeria.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout headerTheme="dark">
      <Hero />
      <TrustBar />
      <Services />
      <Methodology />
      <CaseStudiesPreview />
      <FinalCTA />
    </SiteLayout>
  );
}

function HeroDashboard() {
  const bars = [45, 62, 38, 71, 55, 83, 67, 49, 78, 91, 63, 72, 85, 58, 94, 77];
  const metrics = [
    { l: "Pipeline", v: "$4.2M", d: "+18%", c: "#1B5EFF" },
    { l: "Active Deals", v: "147", d: "+23%", c: "#14B8A6" },
    { l: "MQL → SQL", v: "34%", d: "+6pp", c: "#8B5CF6" },
    { l: "Won QTD", v: "$680K", d: "+41%", c: "#FFB800" },
  ];
  return (
    <div className="rounded-2xl border border-white/12 bg-white/04 p-5 lg:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">Revenue Command · Q2 2026</div>
          <div className="mt-0.5 font-display text-sm font-semibold text-white">Pipeline Intelligence</div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
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

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="sec-navy relative overflow-hidden pt-24 md:pt-28">
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.14) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:px-6">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-6">
            <img src="/supertelque-logo.png" alt="SuperTelque" className="h-10 w-10 object-contain drop-shadow-[0_0_12px_rgba(255,184,0,0.5)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFB800]/80">Revenue Systems · GTM Engineering</span>
          </div>

          <h1 className="mt-2 font-display text-[38px] font-extrabold leading-[1.02] tracking-tight sm:text-[52px] lg:text-[76px] lg:leading-[1.0]">
            Architecting
            <br />
            <span className="text-gradient-gold">revenue systems</span>
            <br />
            that scale.
          </h1>

          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground sm:text-[18px]">
              We turn disconnected sales, marketing, and customer success operations into a single
              revenue engine — powered by automation, AI, and modern GTM infrastructure.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
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
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/06 px-6 py-4 text-[15px] font-medium text-white/80 hover:bg-white/12 hover:text-white transition-colors"
              >
                Explore services
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-6 pb-8 lg:pb-16">
          <ScrollReveal variant="scaleIn" delay={0.2}>
            <HeroDashboard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUST BAR ------------------------------ */
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

/* -------------------------------- SERVICES ------------------------------ */
const SERVICES = [
  {
    code: "01",
    title: "Revenue Operations",
    desc: "Align sales, marketing, and customer success into a unified revenue organization with shared metrics, motions, and forecasts.",
    bullets: ["Funnel architecture", "Forecasting", "Territory & quota"],
  },
  {
    code: "02",
    title: "GTM Engineering & Automation",
    desc: "Design and deploy scalable workflows that eliminate manual operations across the entire revenue lifecycle.",
    bullets: ["n8n · Make · Zapier", "Custom API plumbing", "Lifecycle automation"],
  },
  {
    code: "03",
    title: "CRM Architecture",
    desc: "Build HubSpot and Salesforce ecosystems that scale from Series A through enterprise without re-implementation.",
    bullets: ["Object model design", "Bi-directional sync", "Lifecycle stages"],
  },
  {
    code: "04",
    title: "Revenue Intelligence",
    desc: "Forecasting, attribution, dashboards, and pipeline analytics that give every leader a single source of revenue truth.",
    bullets: ["Power BI · Looker", "Multi-touch attribution", "Exec reporting"],
  },
  {
    code: "05",
    title: "Outbound Infrastructure",
    desc: "Intent-driven prospecting systems using Clay and Apollo, built to ship pipeline, not vanity activity.",
    bullets: ["Clay waterfalls", "Apollo sequencing", "Signal-based routing"],
  },
  {
    code: "06",
    title: "Fractional Operations",
    desc: "Embedded RevOps and GTM engineering leadership, providing strategic ownership without full-time overhead.",
    bullets: ["Embedded leadership", "Quarterly roadmaps", "Team enablement"],
  },
] as const;

function Services() {
  return (
    <section className="sec-white relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we build"
            title={
              <>
                Six disciplines. <span className="text-muted-foreground">One revenue engine.</span>
              </>
            }
            description="Every engagement combines strategy, engineering and measurement. Pick a starting point, we architect the rest."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all capabilities <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.code}
              className="group relative bg-white p-7 transition-colors hover:bg-[#F4F6FA]"
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
            See all capabilities →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- METHODOLOGY ---------------------------- */
const STEPS = [
  {
    k: "Audit",
    d: "Forensic review of pipeline, CRM, data flows and reporting. We map what exists, what breaks, and what each gap costs in revenue.",
    out: "Findings deck · risk model · ROI plan",
  },
  {
    k: "Architect",
    d: "Design the target-state revenue stack, detailing objects, lifecycles, integrations, attribution, and AI layers.",
    out: "Architecture diagram · data contracts",
  },
  {
    k: "Automate",
    d: "Engineer workflows across HubSpot, Salesforce, Clay, Apollo, n8n and custom integrations — versioned, monitored, owned.",
    out: "Production automations · runbooks",
  },
  {
    k: "Accelerate",
    d: "Instrument outcomes, enable the team, and run continuous optimisation against pipeline, velocity and conversion.",
    out: "Exec dashboards · QBR loop",
  },
] as const;

const cardColors = [
  { bg: "#EFF6FF", accent: "#1B5EFF", label: "Analyze" },
  { bg: "#FFFBEB", accent: "#FFB800", label: "Design" },
  { bg: "#ECFDF5", accent: "#059669", label: "Engineer" },
  { bg: "#FFF3E0", accent: "#EA580C", label: "Scale" },
];

function Methodology() {
  return (
    <section className="sec-navy py-16 lg:py-24">
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
                  <span className="ml-auto font-mono text-[10px] text-muted-foreground">
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
                  ↳ {s.out}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CASE STUDIES PREVIEW --------------------- */
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

function CaseStudiesPreview() {
  return (
    <section className="sec-white border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-10">
          <SectionHeader
            eyebrow="Field work"
            title={<>What we ship, and what it changes.</>}
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
              <div className="mt-4 font-display text-4xl font-extrabold tracking-tight text-gradient-gold">
                {c.metric}
              </div>
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

/* ------------------------------- FINAL CTA ------------------------------ */
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
            Ready to build a <span className="text-gradient-gold">revenue engine</span> that runs itself?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
            A 45-minute working session with a senior RevOps engineer. You leave with a stack
            assessment, three automation wins, and a written roadmap.
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
