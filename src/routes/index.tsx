import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import * as L from "@/components/site/Logos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Managed Sales & Business Operations | SuperTelque" },
      {
        name: "description",
        content:
          "SuperTelque helps growing businesses manage sales, customer and back-office operations through people, automation and AI.",
      },
      { property: "og:title", content: "Managed Sales & Business Operations | SuperTelque" },
      {
        property: "og:description",
        content:
          "We build, automate and manage the sales, customer and operational processes that keep growing businesses running.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout headerTheme="dark">
      <div className="sec-mid">
        <Hero />
        <TrustBar />
        <Problems />
        <Services />
        <DeliveryModels />
        <Methodology />
        <FinalCTA />
      </div>
    </SiteLayout>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="sec-navy relative isolate min-h-[100svh] overflow-hidden">
      <img
        src="/hero.jpg"
        alt="SuperTelque operations team working with a client"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10 backdrop-blur-[8px]"
        style={{
          background:
            "linear-gradient(to right, rgba(8, 13, 28, 0.92) 0%, rgba(8, 13, 28, 0.68) 34%, rgba(8, 13, 28, 0) 60%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-4 pb-10 pt-32 lg:items-center lg:px-8 lg:pb-20 lg:pt-28">
        <div className="flex flex-col gap-8 lg:gap-40 ">
          <div className="max-w-4xl">
            <div className="font-mono text-[13px] uppercase tracking-[0.22em] text-[#FFD44D] mb-4">
              Revenue · Operations · AI
            </div>
            <h1 className="font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[78px] lg:leading-[0.98]">
              Grow your business.
              <br />
              <span className="text-[#FFD44D]">Not your workload.</span>
            </h1>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/72 sm:text-[17px]">
                We build, automate and manage the sales, customer and back-office processes that keep growing businesses running — without the burden of building another internal department.
              </p>
            </ScrollReveal>

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-y border-white/15 py-5">
              {[
                ["People", "who deliver"],
                ["Processes", "that run"],
                ["Automation", "that scales"],
              ].map(([a, b]) => (
                <div key={a}>
                  <div className="font-mono text-[14px] uppercase tracking-[0.16em] text-[#FFD44D]">{a}</div>
                  <div className="mt-1 text-md text-white/68">{b}</div>
                </div>
              ))}
            </div>

            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFD44D] px-5 py-3 text-[15px] font-bold text-[#080D1C] transition-all duration-200 hover:scale-[1.03] hover:bg-white"
                >
                  Book an Operations Review
                  <span className="header-action-arrow" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </Link>
                
                <Link to="/services" className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white/75 transition-colors hover:text-white border border-white px-4 py-3 rounded-full">
                  Explore our services 
                  <span className="header-action-arrow" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full rounded-2xl border border-white/20 bg-[#ffffff]/20 p-8 text-white backdrop-blur-xl lg:w-[70%] lg:block lg:right-6">
            <div className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#FFD44D]">Built for growing service businesses</div>
            <p className="mt-2 text-md leading-relaxed text-white/">We take responsibility for defined operational outcomes, supported by the right people, processes and technology.</p>
            <div className="mt-4 flex justify-between border-t border-white/15 pt-3">
              {[
                { label: "Sales & Revenue" },
                { label: "Customer Operations" },
                { label: "Business Operations" },
                { label: "AI & Automation" },
              ].map(({ label }) => (
                <div key={label} className="text-center">
                  <div className="text-[13px] text-white/48 whitespace-nowrap font-mono">{label}</div>
                </div>
              ))}
            </div>
          </div>
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
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden shrink-0 font-mono text-[18px] uppercase tracking-[0.22em] text-[#FFD44D] sm:block">
            Tools we work with
          </div>
          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-14 animate-ticker md:gap-20">
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

/* ------------------------------- PROBLEMS ------------------------------ */
const PROBLEMS = [
  {
    title: "Leads and inquiries go unanswered",
    desc: "Your team is too busy delivering the service to consistently follow up with new opportunities.",
  },
  {
    title: "Your best people are buried in admin",
    desc: "Salespeople, managers and owners spend valuable time updating systems and chasing routine tasks.",
  },
  {
    title: "Work gets lost between people and tools",
    desc: "Emails, CRM records, scheduling and customer updates are disconnected.",
  },
  {
    title: "You need more capacity, not more management",
    desc: "You want work completed reliably without coordinating several additional hires or freelancers.",
  },
] as const;

function Problems() {
  return (
    <section className="sec-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="The problem"
          title={
            <>
              Your business is growing.{" "}
              <span className="text-muted-foreground">Why does everything feel harder?</span>
            </>
          }
        />
        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <ScrollReveal key={p.title} variant="fadeUp" delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-[#F4F6FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="font-display text-lg font-bold tracking-tight text-[#080D1C]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fadeUp" delay={0.3}>
          <div className="mt-12 rounded-2xl border border-[#FFB800]/20 bg-[#FFFDF5] p-6 lg:p-8">
            <p className="text-base leading-relaxed text-[#080D1C] font-medium">
              We don't just provide people or install software. We design the workflow, assign the right team, automate repetitive steps and take responsibility for delivery.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* -------------------------------- SERVICES ------------------------------ */
const SERVICES = [
  {
    code: "01",
    title: "Managed Sales & Revenue Operations",
    desc: "Build a more consistent sales pipeline without placing every task on your sales team.",
    bullets: ["Prospect research & enrichment", "Outbound execution & lead qualification", "CRM management & follow-up", "Sales coordination & reporting"],
    color: "#B9D6FF",
    for: "Owners, Sales Directors, Heads of Sales",
  },
  {
    code: "02",
    title: "Managed Customer Operations",
    desc: "Make sure customer inquiries receive attention and appointments, communications and follow-ups stay organized.",
    bullets: ["Inquiry management", "Appointment coordination", "Customer communications", "Service follow-up & escalation"],
    color: "#FFD84D",
    for: "Operations Directors, General Managers",
  },
  {
    code: "03",
    title: "Managed Business Operations",
    desc: "Remove administrative bottlenecks and give your internal team more time for high-value work.",
    bullets: ["Back-office administration", "Workflow coordination & scheduling", "Data management & SOPs", "Operational reporting"],
    color: "#9BE3CC",
    for: "Owners, COOs, Office Managers",
  },
  {
    code: "04",
    title: "CRM, AI & Workflow Engineering",
    desc: "Connect your tools, automate repetitive work and create systems that support your team.",
    bullets: ["CRM implementation & RevOps architecture", "Workflow automation & AI-assisted processes", "Integrations & dashboards", "Process documentation"],
    color: "#D4C4FF",
    for: "Operations leaders, Sales Operations",
  },
] as const;

function Services() {
  return (
    <section className="sec-navy relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services"
            title={
              <>
                Four services. <span className="text-muted-foreground">One accountable partner.</span>
              </>
            }
            description="We combine experienced people, structured processes, automation and AI to run the workflows that help your business move forward."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <div
              key={s.code}
              className="group relative overflow-hidden rounded-2xl border border-black/8 p-7 shadow-[0_12px_30px_-24px_rgba(8,13,28,.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1B5EFF]/35 hover:shadow-[0_22px_45px_-26px_rgba(27,94,255,.38)]"
              style={{ backgroundColor: s.color }}
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[5rem] bg-white/35 transition-colors group-hover:bg-white/50" />
              <h3 className="relative max-w-[15rem] font-display text-lg font-bold tracking-tight text-[#080D1C]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#080D1C]/70">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-[#080D1C]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-[#080D1C]/10 pt-3">
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#080D1C]/45">For: {s.for}</div>
              </div>
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

/* ----------------------------- DELIVERY MODELS -------------------------- */
function DeliveryModels() {
  return (
    <section className="sec-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="How we work"
          title={
            <>
              Two ways to <span className="text-gradient-gold">work with us.</span>
            </>
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="rounded-2xl border border-border bg-[#F4F6FA] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFB800] mb-3">Option A</div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">Build & Handover</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We design and implement the system, document it and train your team. You own everything and run it internally.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {["System design & implementation", "Full documentation", "Team training & handover", "You own the system and processes"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1B5EFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <div className="rounded-2xl border-2 border-[#FFB800]/40 bg-[#FFFDF5] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFB800] mb-3">Option B</div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">Build & Manage</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We implement the workflow, operate it under an agreed scope and report on performance. We take responsibility for delivery.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {["Everything in Build & Handover", "Ongoing managed operations", "Assigned people & automated steps", "Performance reporting & improvement"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- METHODOLOGY ---------------------------- */
const STEPS = [
  {
    k: "Diagnose",
    d: "Identify where time, customers or revenue are being lost.",
    out: "Operational bottleneck identified",
  },
  {
    k: "Design",
    d: "Map the process, define responsibilities and agree on measurable outcomes.",
    out: "Process map & responsibilities",
  },
  {
    k: "Build",
    d: "Configure systems, automations, documentation and operating procedures.",
    out: "Live workflow & documentation",
  },
  {
    k: "Operate",
    d: "Run the agreed workflow with assigned people, automated steps and human oversight.",
    out: "Managed delivery",
  },
  {
    k: "Improve",
    d: "Review performance, address exceptions and improve the process against agreed KPIs.",
    out: "Ongoing optimization",
  },
] as const;

const cardColors = [
  { bg: "#EFF6FF", accent: "#1B5EFF" },
  { bg: "#FFF8E1", accent: "#B45309" },
  { bg: "#ECFDF5", accent: "#059669" },
  { bg: "#FFF3E0", accent: "#C2410C" },
  { bg: "#F3E8FF", accent: "#7C3AED" },
];

function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="sec-navy relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="Our process"
          title={
            <>
              From operational bottleneck{" "}
              <span className="text-[#FFB800]">to managed delivery.</span>
            </>
          }
        />
        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          {STEPS.map((s, i) => {
            const c = cardColors[i];
            const isActive = activeStep === i;
            return (
              <motion.button
                type="button"
                onClick={() => setActiveStep(i)}
                key={s.k}
                layout
                transition={{
                  layout: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                }}
                className={`group min-w-0 overflow-hidden rounded-2xl p-6 text-left flex flex-col transition-[min-height,flex-grow,flex-basis,transform,box-shadow,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:min-h-[400px] ${isActive ? "min-h-[350px] shadow-[0_18px_38px_-18px_rgba(0,0,0,.35)] lg:flex-[3_1_0%]" : "min-h-[120px] opacity-75 hover:opacity-100 lg:flex-[1_1_0%]"}`}
                style={{
                  backgroundColor: c.bg,
                  border: `1px solid ${c.accent}22`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#080D1C]">
                  {s.k}
                </h3>
                <AnimatePresence initial={false} mode="wait">
                  {isActive && (
                    <motion.p
                      key={`${s.k}-description`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="mt-auto w-full rounded-xl border border-white/60 bg-white/65 p-4 text-sm leading-relaxed text-[#080D1C]/75 shadow-sm backdrop-blur-md"
                    >
                      {s.d}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border py-16 lg:py-24">
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFB800]/70">Let's talk</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Ready to stop running{" "}
            <span className="text-gradient-gold">everything manually?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Tell us what's taking too much time from your team. We'll discuss the workflow, identify where support or automation could help, and determine whether there's a practical fit.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-4 py-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            20 minutes · Remote · No obligation
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(255,184,0,0.45)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
            >
              Book an Operations Review →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-7 py-4 text-[15px] font-medium text-foreground/80 hover:bg-white transition-colors"
            >
              Contact the team
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
