import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";
import { WhatWeWorkOn } from "@/components/site/WhatWeWorkOn";
import CardSwap, { Card } from "@/components/site/CardSwap";
import * as L from "@/components/site/Logos";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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
      <WhatWeWorkOn />
      <Methodology />
      <CommandCenterSection />
      <CaseStudiesPreview />
      <FinalCTA />
    </SiteLayout>
  );
}

function ProductShowcase({
  primarySrc,
  secondarySrc,
  secondaryOffset,
}: {
  primarySrc: string;
  secondarySrc: string;
  secondaryOffset: string;
}) {
  return (
    <div className="relative group my-8">
      <div className="surface-card relative overflow-hidden rounded-2xl border border-border shadow-lg transition-all duration-500 perspective-midrange group-hover:scale-[1.01]">
        <div className="w-full transition-transform duration-500 transform-[rotateY(0deg)] group-hover:transform-[rotateY(-2deg)]">
          <img
            src={primarySrc}
            alt="GTM Command Center primary view"
            className="w-full h-auto object-cover select-none"
          />
        </div>
      </div>

      <div
        className={`hidden md:block absolute w-[45%] overflow-hidden rounded-xl border border-border bg-background/80 shadow-md transition-all duration-500 group-hover:translate-y-[-8px] group-hover:scale-[1.03] perspective-midrange ${secondaryOffset}`}
      >
        <div className="w-full transition-transform duration-500 transform-[rotateY(0deg)] group-hover:transform-[rotateY(2deg)]">
          <img
            src={secondarySrc}
            alt="GTM Command Center detailed perspective"
            className="w-full h-auto object-cover select-none"
          />
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="sec-navy relative overflow-hidden pt-24 md:pt-28">
      {/* Background glow orbs — Make.com style */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 right-0 h-[600px] w-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,184,0,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-32 h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(27,94,255,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #FFB800 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:px-6">
        <div className="lg:col-span-6">
          {/* Logo mark + eyebrow */}
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
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
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

        <div className="lg:col-span-6 pb-16 lg:pb-24">
          <ScrollReveal variant="scaleIn" delay={0.2}>
            <ProductShowcase
              primarySrc="/hero-workflow-primary.png"
              secondarySrc="/hero-workflow-detail.png"
              secondaryOffset="right-0 -bottom-8 md:-bottom-16"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- TRUST BAR ------------------------------ */
function TrustBar() {
  const items = [
    L.HubSpot,
    L.Salesforce,
    L.Apollo,
    L.Clay,
    L.OpenAI,
    L.Stripe,
    L.PowerBI,
    L.Zapier,
    L.N8n,
    L.Make,
    L.Slack,
    L.GoHighLevel,
    L.Lemlist,
    L.Instantly,
    L.LowNoCode,
    L.Supabase,
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
    <section className="sec-white relative py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we build"
            title={
              <>
                Six disciplines. <span className="text-muted-foreground">One revenue engine.</span>
              </>
            }
            description="Every engagement combines strategy, engineering and measurement. Pick a starting point, and we architect the rest around it."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all capabilities <span aria-hidden>→</span>
          </Link>
        </div>

        <StaggerReveal className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <StaggerChild
              key={s.code}
              className="group relative bg-background p-7 transition-colors hover:bg-(--surface)/60"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                  {s.code}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 font-mono text-[12px] text-foreground/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                    {b}
                  </li>
                ))}
              </ul>
            </StaggerChild>
          ))}
        </StaggerReveal>
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
    d: "Design the target-state revenue stack, detailing objects, lifecycles, integrations, attribution, and AI layers, so every downstream build has a blueprint.",
    out: "Architecture diagram · data contracts",
  },
  {
    k: "Automate",
    d: "Engineer workflows across HubSpot, Salesforce, Clay, Apollo, n8n and custom Python, ensuring they are versioned, monitored, and owned.",
    out: "Production automations · runbooks",
  },
  {
    k: "Accelerate",
    d: "Instrument outcomes, enable the team, and run continuous optimisation against pipeline, velocity and conversion.",
    out: "Exec dashboards · QBR loop",
  },
] as const;

const total = STEPS.length;

const cardColors: { bg: string; accent: string; label: string }[] = [
  { bg: "#EFF6FF", accent: "#1B5EFF", label: "Analyze" },
  { bg: "#FFFBEB", accent: "#FFB800", label: "Design" },
  { bg: "#ECFDF5", accent: "#059669", label: "Engineer" },
  { bg: "#FFF3E0", accent: "#EA580C", label: "Scale" },
];

function MethodologyCard({
  step,
  index,
  progress,
}: {
  step: (typeof STEPS)[number];
  index: number;
  progress: any;
}) {
  const segment = 1 / total;
  const stackOffset = 24;
  const color = cardColors[index];

  const segmentStart = index * segment;
  const segmentMid = index * segment + segment * 0.6;
  const segmentEnd = (index + 1) * segment;
  const stackScale = 0.85 + (index / (total - 1)) * 0.15;
  const finalY = index * stackOffset;
  const isLast = index === total - 1;

  const yRange = useTransform(
    progress,
    index === 0 ? [segmentStart, segmentMid, segmentEnd] : [segmentStart, segmentMid, segmentEnd],
    index === 0 ? [0, 0, 0] : [420, 0, finalY],
  );

  const scaleRange = useTransform(
    progress,
    [segmentStart, segmentMid, segmentEnd],
    isLast ? [1, 1, 1] : [1, 1, stackScale],
  );

  return (
    <motion.div
      className="absolute inset-x-0 rounded-2xl p-6 md:p-8 flex flex-col"
      style={{
        backgroundColor: color.bg,
        border: `1px solid ${color.accent}22`,
        boxShadow: `0 1px 3px ${color.accent}11, inset 0 1px 0 ${color.accent}08`,
        y: yRange,
        scale: scaleRange,
        zIndex: index,
        transformOrigin: "top center",
        opacity: 1,
        height: "100%",
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color.accent }} />
          <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: color.accent }}>
            {color.label}
          </span>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{step.k}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{step.d}</p>
      <div
        className="mt-auto rounded-md px-3 py-2 font-mono text-[11px]"
        style={{
          backgroundColor: `${color.accent}15`,
          color: color.accent,
          border: `1px solid ${color.accent}25`,
        }}
      >
        ↳ {step.out}
      </div>
    </motion.div>
  );
}

function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative" style={{ height: `${total * 100}vh` }}>
      <div className=" sticky top-0 h-screen flex flex-col overflow-visible bg-background pt-24 md:pt-28">
        <div className="max-w-3xl mx-auto px-4 pt-8 md:pt-10 pb-2">
          <SectionHeader
            eyebrow="Methodology"
            title={
              <>
                Audit. Architect. Automate. <span className="text-gradient-brand">Accelerate.</span>
              </>
            }
          />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div
            className="relative mx-auto"
            style={{
              width: "100%",
              maxWidth: "768px",
              height: "340px",
              maxHeight: "min(340px, 80vw)",
            }}
          >
            {STEPS.map((s, i) => (
              <MethodologyCard key={s.k} step={s} index={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- COMMAND CENTER SEC -------------------------- */
function CommandCenterSection() {
  return (
    <section className="sec-navy relative overflow-hidden py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ScrollReveal variant="slideRight">
              <SectionHeader
                eyebrow="GTM Command Center"
                title={
                  <>
                    See revenue
                    <br />
                    <span className="text-gradient-brand">moving in real time.</span>
                  </>
                }
                description="One operational surface that replaces five disconnected tabs. Lead flow, routing, AI scoring, and pipeline impact are observable end-to-end."
              />

              <ul className="mt-8 space-y-4 text-sm">
                {[
                  ["Clay → Apollo", "Waterfall enrichment with intent overlays"],
                  ["HubSpot ↔ Salesforce", "Bi-directional sync, owned object model"],
                  ["AI scoring layer", "GPT-powered prioritization on every record"],
                  ["Slack + Power BI", "Alerts where reps work, dashboards where leaders decide"],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-4 border-l border-border pl-4">
                    <div>
                      <div className="font-display text-[15px] font-semibold">{k}</div>
                      <div className="text-muted-foreground">{v}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-6 pb-16 lg:pb-24">
            <ScrollReveal variant="slideLeft">
              <ProductShowcase
                primarySrc="/hero-command-center.png"
                secondarySrc="/hero-workflow-detail.png"
                secondaryOffset="right-0 -bottom-8 md:-bottom-16"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- CASE STUDIES ----------------------------- */
const CASES = [
  {
    tag: "B2B SaaS",
    title: "Pipeline transformation for a Series C platform",
    metric: "+40%",
    label: "Qualified pipeline growth in 2 quarters",
    stack: ["HubSpot", "Clay", "n8n", "Power BI"],
  },
  {
    tag: "Fintech",
    title: "Outbound automation across 3 GTM motions",
    metric: "3.5×",
    label: "Meeting-booking rate vs. previous baseline",
    stack: ["Apollo", "Clay", "Salesforce", "OpenAI"],
  },
  {
    tag: "AI Startup",
    title: "Intent-driven lead routing engine",
    metric: "+22%",
    label: "SQL conversion lift inside the first sprint",
    stack: ["HubSpot", "OpenAI", "Make", "Slack"],
  },
] as const;

const CASE_DETAILS: Record<string, { challenge: string; solution: string }> = {
  "Pipeline transformation for a Series C platform": {
    challenge:
      "Three forecasting systems disagreed every Monday. CRO meetings opened with reconciliation, not strategy.",
    solution:
      "Re-architected the HubSpot ↔ Salesforce contract with a versioned object model and bi-directional sync.",
  },
  "Outbound automation across 3 GTM motions": {
    challenge:
      "Manual enrichment and fragmented sequences meant reps spent 60% of their week on list-building.",
    solution:
      "Built a Clay waterfall feeding Apollo sequences, routed by intent signals and scored by OpenAI.",
  },
  "Intent-driven lead routing engine": {
    challenge:
      "Lead response time over an hour. Hot demo requests landing in shared inboxes and going stale.",
    solution:
      "Designed a routing engine with intent enrichment, AI prioritization, and Slack-native escalation.",
  },
};

function CaseStudiesPreview() {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const focused = CASES[focusedIndex];
  const detail = CASE_DETAILS[focused.title];

  return (
    <section className="sec-white relative border-t border-border py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-16 md:mb-44">
          <SectionHeader eyebrow="Field work" title={<>What we ship, and what it changes.</>} />
          <Link to="/case-studies" className="text-sm text-foreground/80 hover:text-foreground">
            View all case studies →
          </Link>
        </div>

        <div className="mt-16 md:mt-24 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {focused.tag}
            </span>
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {focused.title}
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60 mb-1">
                  Challenge
                </div>
                <p>{detail?.challenge}</p>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60 mb-1">
                  Solution
                </div>
                <p>{detail?.solution}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {focused.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-(--surface)/60 px-2.5 py-1 font-mono text-[11px] text-foreground/85"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-display text-3xl font-semibold tracking-tight text-gradient-brand">
                {focused.metric}
              </span>
              <span className="text-sm text-muted-foreground">{focused.label}</span>
            </div>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/85 hover:text-foreground pt-2"
            >
              Read full teardown <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="lg:col-span-7 relative py-16" style={{ minHeight: "320px" }}>
            <CardSwap
              width={500}
              height={480}
              cardDistance={60}
              verticalDistance={70}
              delay={6000}
              pauseOnHover={true}
              skewAmount={4}
              easing="elastic"
              onCardChange={(idx) => setFocusedIndex(idx)}
            >
              {CASES.map((c) => (
                <Card key={c.title} customClass="surface-card !border-border !bg-background p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {c.tag}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground">CS · 2025</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight">
                    {c.title}
                  </h3>
                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="font-display text-4xl font-semibold tracking-tight text-gradient-brand sm:text-5xl">
                      {c.metric}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-(--surface)/60 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/case-studies"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm text-foreground/85 hover:text-foreground"
                  >
                    Read teardown <span aria-hidden>→</span>
                  </Link>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="sec-gold relative overflow-hidden border-t border-black/10 py-16 lg:py-32">
      {/* Subtle noise/texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#080D1C]/60">Let's build</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[64px] lg:leading-[1.02]">
            Ready to build a revenue engine that runs itself?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#080D1C]/70">
            A 45-minute working session with a senior RevOps engineer. You leave with a stack
            assessment, three automation wins, and a written roadmap.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-[#080D1C] px-7 py-4 text-[15px] font-bold text-white hover:bg-[#162038] transition-colors"
            >
              Book a consultation →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/08 px-7 py-4 text-[15px] font-medium text-[#080D1C] hover:bg-black/12 transition-colors"
            >
              Contact the team
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

