import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CommandCenter } from "@/components/site/CommandCenter";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
import * as L from "@/components/site/Logos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbound — Revenue Systems Engineered for Scale" },
      { name: "description", content: "B2B RevOps, GTM engineering, CRM architecture and AI revenue systems built on HubSpot, Salesforce, Clay, Apollo, n8n and OpenAI." },
      { property: "og:title", content: "Northbound — Revenue Systems Engineered for Scale" },
      { property: "og:description", content: "Architecting revenue systems that scale for B2B technology companies in the US, UK, and Canada." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <Methodology />
      <CommandCenterSection />
      <CaseStudiesPreview />
      <FinalCTA />
    </SiteLayout>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-28">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[color:var(--surface)]/70 px-3 py-1 text-[12px] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-teal)] animate-pulse-dot" />
            <span className="text-muted-foreground">Now booking Q3 — </span>
            <span className="font-medium">3 spots left</span>
          </div>

          <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.04] tracking-[-0.025em] sm:text-[56px] lg:text-[68px]">
            Architecting
            <br />
            <span className="text-gradient-brand">revenue systems</span>
            <br />
            that scale.
          </h1>

          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted-foreground sm:text-[17px]">
            We turn disconnected sales, marketing, and customer success operations into a single
            revenue engine — powered by automation, AI, and modern GTM infrastructure on HubSpot,
            Salesforce, Clay, Apollo and OpenAI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Book a strategy session
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-[color:var(--surface)]/60 px-5 py-3 text-sm font-medium hover:bg-[color:var(--surface)]"
            >
              Explore services
            </Link>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <Stat label="Pipeline managed" value="$120M+" />
            <Stat label="Velocity lift" value="3.5×" />
            <Stat label="Automations" value="100+" />
          </dl>
        </div>

        <div className="lg:col-span-6">
          <CommandCenter />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-display text-2xl font-semibold tabular-nums">{value}</dd>
    </div>
  );
}

/* ------------------------------- TRUST BAR ------------------------------ */
function TrustBar() {
  const items = [L.HubSpot, L.Salesforce, L.Apollo, L.Clay, L.OpenAI, L.Stripe, L.PowerBI, L.Zapier, L.N8n, L.Make, L.Slack];
  return (
    <section className="border-y border-border bg-[color:var(--surface)]/40">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center gap-6">
          <div className="hidden shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground sm:block">
            Stacks we engineer
          </div>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
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
    desc: "Intent-driven prospecting systems using Clay and Apollo — built to ship pipeline, not vanity activity.",
    bullets: ["Clay waterfalls", "Apollo sequencing", "Signal-based routing"],
  },
  {
    code: "06",
    title: "Fractional Operations",
    desc: "Embedded RevOps and GTM engineering leadership — strategic ownership without full-time overhead.",
    bullets: ["Embedded leadership", "Quarterly roadmaps", "Team enablement"],
  },
] as const;

function Services() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we build"
            title={
              <>
                Six disciplines.{" "}
                <span className="text-muted-foreground">One revenue engine.</span>
              </>
            }
            description="Every engagement combines strategy, engineering and measurement. Pick a starting point — we architect the rest around it."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all capabilities <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.code}
              className="group relative bg-background p-7 transition-colors hover:bg-[color:var(--surface)]/60"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground">
                  {s.code}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent-blue)] opacity-40 group-hover:opacity-100 transition" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 font-mono text-[12px] text-foreground/70">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-px w-3 bg-accent-blue/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- METHODOLOGY ---------------------------- */
const STEPS = [
  { k: "Audit", d: "Forensic review of pipeline, CRM, data flows and reporting. We map what exists, what breaks, and what each gap costs in revenue.", out: "Findings deck · risk model · ROI plan" },
  { k: "Architect", d: "Design the target-state revenue stack — objects, lifecycles, integrations, attribution, AI layers — so every downstream build has a blueprint.", out: "Architecture diagram · data contracts" },
  { k: "Automate", d: "Engineer workflows across HubSpot, Salesforce, Clay, Apollo, n8n and custom Python — versioned, monitored, owned.", out: "Production automations · runbooks" },
  { k: "Accelerate", d: "Instrument outcomes, enable the team, and run continuous optimisation against pipeline, velocity and conversion.", out: "Exec dashboards · QBR loop" },
] as const;

function Methodology() {
  return (
    <section className="relative border-t border-border bg-[color:var(--surface)]/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Methodology"
          title={
            <>
              Audit. Architect. Automate. <span className="text-gradient-brand">Accelerate.</span>
            </>
          }
          description="A repeatable engineering rhythm — the same four phases every senior team uses to ship infrastructure that compounds."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.k} className="relative bg-background p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  PHASE 0{i + 1}
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">{s.k}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              <div className="mt-6 rounded-md border border-border bg-[color:var(--surface-2)]/60 px-3 py-2 font-mono text-[11px] text-foreground/75">
                ↳ {s.out}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* --------------------------- COMMAND CENTER SEC -------------------------- */
function CommandCenterSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="GTM Command Center"
              title={
                <>
                  See revenue
                  <br />
                  <span className="text-gradient-brand">moving in real time.</span>
                </>
              }
              description="One operational surface that replaces five disconnected tabs. Lead flow, routing, AI scoring, and pipeline impact — observable end-to-end."
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
          </div>
          <div className="lg:col-span-7">
            <CommandCenter />
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

function CaseStudiesPreview() {
  return (
    <section className="relative border-t border-border py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Field work"
            title={<>What we ship, and what it changes.</>}
          />
          <Link
            to="/case-studies"
            className="text-sm text-foreground/80 hover:text-foreground"
          >
            View all case studies →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="surface-card group relative flex flex-col overflow-hidden p-7 transition hover:-translate-y-0.5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />
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
                <span className="font-display text-5xl font-semibold tracking-tight text-gradient-brand">
                  {c.metric}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.label}</p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-[color:var(--surface)]/60 px-2 py-0.5 font-mono text-[10.5px] text-muted-foreground"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 lg:py-32">
      <div className="absolute inset-0 bg-radial-glow opacity-80" />
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Eyebrow>Let's build</Eyebrow>
        <h2 className="mt-6 font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          Ready to build a revenue
          <br />
          engine that <span className="text-gradient-brand">runs itself?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          A 45-minute working session with a senior RevOps engineer. You leave with a stack
          assessment, three automation wins, and a written roadmap.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90"
          >
            Book a consultation
            <span aria-hidden>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-[color:var(--surface)]/60 px-6 py-3 text-sm font-medium"
          >
            Contact the team
          </Link>
        </div>
      </div>
    </section>
  );
}
