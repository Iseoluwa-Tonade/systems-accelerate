import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import * as L from "@/components/site/Logos";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SuperTelque | Fix the Revenue Systems Costing You Pipeline" },
      {
        name: "description",
        content:
          "CRM cleanup, lead routing, sales automation and RevOps systems for B2B teams that need predictable pipeline.",
      },
      { property: "og:title", content: "SuperTelque | Revenue Systems That Convert More Pipeline" },
      {
        property: "og:description",
        content: "Fix CRM, follow-up, lead routing and reporting before they cost your B2B team more pipeline.",
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
        <Services />
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
        alt="SuperTelque revenue operator working with a client"
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
            <h1 className="font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[78px] lg:leading-[0.98]">
              Fix the systems
              <br />
              <span className="text-[#FFD44D]">costing you pipeline.</span>
            </h1>

            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/72 sm:text-[17px]">
                We architect the data, decision layers, and autonomous workflows that make enterprise revenue teams faster, more predictable, and easier to scale.
              </p>
            </ScrollReveal>

            <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-y border-white/15 py-5">
              {[['CRM', 'you can trust'], ['Routing', 'that never drops'], ['Reporting', 'leaders use']].map(([a, b]) => (
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
                  Book a 20-minute fit call
                  <span className="header-action-arrow" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </Link>
                
                <Link to="/services" className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white/75 transition-colors hover:text-white border border-white px-4 py-3 rounded-full">
                  See the revenue systems audit 
                  <span className="header-action-arrow" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full rounded-2xl border border-white/20 bg-[#ffffff]/20 p-8 text-white backdrop-blur-xl lg:w-[70%] lg:block lg:right-6">
            <div className="font-mono text-[14px] uppercase tracking-[0.2em] text-[#FFD44D]">Senior operator</div>
            <p className="mt-2 text-md leading-relaxed text-white/">One operating picture across your CRM, pipeline, and growth systems.</p>
            <div className="mt-4 flex justify-between border-t border-white/15 pt-3">
              {[
                { target: 4.2, decimals: 1, suffix: "s", label: "sync" },
                { target: 62, prefix: "+", suffix: "%", label: "selling time" },
                { target: 100, suffix: "%", label: "aligned" },
              ].map(({ target, decimals = 0, prefix = "", suffix = "", label }) => (
                <div key={label} className="text-center">
                  <CountUpMetric
                    target={target}
                    decimals={decimals}
                    prefix={prefix}
                    suffix={suffix}
                  />
                  <div className="text-[20px] text-white/48 whitespace-nowrap">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CountUpMetric({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    let frame = 0;

    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <div className="font-display text-[35px] font-bold">
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </div>
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
            Stacks we engineer
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

/* -------------------------------- SERVICES ------------------------------ */
const SERVICES = [
  {
    code: "01",
    title: "Fractional RevOps & Pipeline Architecture",
    desc: "Senior RevOps direction for teams that need a trusted operating model before they add more headcount or technology.",
    bullets: ["Revenue-system audit", "Forecasting architecture", "Executive roadmaps"],
  },
  {
    code: "02",
    title: "Autonomous AI Engineering",
    desc: "Move beyond point automations with AI agents, orchestration layers, and integrations designed for real revenue operations.",
    bullets: ["AI agent workflows", "n8n orchestration", "Custom API layers"],
  },
  {
    code: "03",
    title: "B2B Demand Generation & GEO",
    desc: "Build a demand engine buyers can find and trust, across outbound systems and the AI search experiences shaping modern vendor selection.",
    bullets: ["GEO visibility", "Signal-led outbound", "Deliverability infrastructure"],
  },
] as const;

const serviceCardColors = ["#B9D6FF", "#FFD84D", "#9BE3CC"] as const;

function Services() {
  return (
    <section className="sec-navy relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="What we build"
            title={
              <>
                Three pillars. <span className="text-muted-foreground">One revenue system.</span>
              </>
            }
            description="We start with the commercial constraint, architect the system around it, then build the capability your team can own."
          />
          <Link
            to="/services"
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground"
          >
            See all capabilities <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.code}
              className="group relative overflow-hidden rounded-2xl border border-black/8 p-7 shadow-[0_12px_30px_-24px_rgba(8,13,28,.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1B5EFF]/35 hover:shadow-[0_22px_45px_-26px_rgba(27,94,255,.38)]"
              style={{ backgroundColor: serviceCardColors[i] }}
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[5rem] bg-white/35 transition-colors group-hover:bg-white/50" />
              <h3 className="relative mt-2 max-w-[15rem] font-display text-xl font-bold tracking-tight text-[#080D1C]">{s.title}</h3>
              <ul className="mt-6 space-y-1.5 font-mono text-[12px] text-[#080D1C]">
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

const methodologyImages = ["/audit.avif", "/architect.avif", "/automate.webp", "/accelerate.jpg"] as const;

function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative pt-16 lg:pt-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="Methodology"
          title={
            <>
              Audit. Architect. Automate.{" "}
              <span className="text-gradient-gold">Accelerate.</span>
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
                className={`group min-w-0 overflow-hidden rounded-2xl p-6 text-left flex flex-col transition-[min-height,flex-grow,flex-basis,transform,box-shadow,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#080D1C] lg:min-h-[460px] ${isActive ? "min-h-[400px] shadow-[0_18px_38px_-18px_rgba(8,13,28,.35)] lg:flex-[3_1_0%]" : "min-h-[150px] opacity-75 hover:opacity-100 lg:flex-[1_1_0%]"}`}
                style={{
                  backgroundColor: c.bg,
                  backgroundImage: isActive
                    ? `linear-gradient(rgba(8, 13, 28, 0.12), rgba(8, 13, 28, 0.12)), url(${methodologyImages[i]})`
                    : `linear-gradient(${c.bg}E6, ${c.bg}E6), url(${methodologyImages[i]})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  border: `1px solid ${c.accent}22`,
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.accent }} />
                  <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: c.accent }}>
                    {c.label}
                  </span>
                  
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

        <CaseStudiesPreview />
      </div>
      <Testimonials />
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
    <div className="relative mt-16 border-t border-border pt-16 lg:mt-24 lg:pt-24">
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
  );
}

const TESTIMONIALS = [
  {
    quote: "The biggest shift was finally having one operating picture. Our leadership conversations moved from reconciling data to making decisions.",
    author: "CRO, Series C SaaS",
  },
  {
    quote: "SuperTelque gave our team the architecture and confidence to automate the work that was slowing every rep down.",
    author: "VP Revenue, Fintech",
  },
  {
    quote: "We stopped losing high-intent leads in shared inboxes. The new routing system made speed and ownership visible to everyone.",
    author: "Founder, AI startup",
  },
  {
    quote: "The work connected our CRM, outbound, and reporting into a system the team could actually maintain after the engagement.",
    author: "Head of Growth, B2B technology",
  },
  {
    quote: "Instead of adding another tool, we fixed the operating model underneath the tools we already had.",
    author: "COO, Professional services",
  },
] as const;

function Testimonials() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [cardRatio, setCardRatio] = useState(0.38);
  const [activeIndex, setActiveIndex] = useState(TESTIMONIALS.length + 1);
  const trackX = useMotionValue(0);
  const carouselItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  const itemCount = TESTIMONIALS.length;

  useEffect(() => {
    const element = viewportRef.current;
    if (!element) return;

    const updateWidth = () => {
      setTrackWidth(element.clientWidth);
      setCardRatio(window.innerWidth < 768 ? 0.82 : 0.38);
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!trackWidth) return;
    trackX.set(trackWidth / 2 - (activeIndex + 0.5) * trackWidth * cardRatio);
  }, [trackWidth, cardRatio]);

  function move(direction: 1 | -1) {
    if (!trackWidth) return;

    const nextIndex = activeIndex + direction;
    const nextX = trackWidth / 2 - (nextIndex + 0.5) * trackWidth * cardRatio;

    animate(trackX, nextX, {
      type: "spring",
      stiffness: 120,
      damping: 22,
      mass: 0.8,
      onComplete: () => {
        let settledIndex = nextIndex;
        if (nextIndex >= itemCount * 2) settledIndex = nextIndex - itemCount;
        if (nextIndex < itemCount) settledIndex = nextIndex + itemCount;

        if (settledIndex !== nextIndex) {
          trackX.set(trackWidth / 2 - (settledIndex + 0.5) * trackWidth * cardRatio);
        }
        setActiveIndex(settledIndex);
      },
    });
    setActiveIndex(nextIndex);
  }

  return (
    <section className="sec-navy mt-16 border-y border-white/10 py-16 lg:mt-24 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-4 font-display text-xl font-extrabold tracking-tight text-white sm:text-3xl">
              Built for better decisions. <span className="text-[#FFB800]">Trusted by operators.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
              The systems matter because they change how revenue teams work, decide, and grow.
            </p>
          </div>

        </div>

          <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#080D1C] to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#080D1C] to-transparent sm:w-24" />

          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#FFB800] bg-[#080D1C]/80 text-[#FFB800] transition hover:bg-[#FFB800] hover:text-[#080D1C]"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#FFB800] bg-[#080D1C]/80 text-[#FFB800] transition hover:bg-[#FFB800] hover:text-[#080D1C]"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div ref={viewportRef} className="overflow-hidden">
            <motion.div
              style={{ x: trackX }}
              className="flex items-stretch"
            >
              {carouselItems.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.article
                    key={`${testimonial.author}-${index}`}
                    animate={{ opacity: isActive ? 1 : 0.46, scale: isActive ? 1 : 0.94 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative shrink-0 px-3 lg:px-10"
                    style={{ width: trackWidth ? `${trackWidth * cardRatio}px` : "38vw" }}
                  >
                    <div className="flex items-center gap-5 text-[#FFB800]/80">
                      <span className="h-px flex-1 bg-white/20" />
                      <span className="font-serif text-6xl leading-none">“</span>
                      <span className="h-px flex-1 bg-white/20" />
                    </div>
                    <p className="mt-5 text-center text-base leading-relaxed text-white/65 sm:text-lg">
                      {testimonial.quote}
                    </p>
                    <div className="mt-7 text-center font-display text-lg font-semibold text-[#FFB800]">
                      {testimonial.author}
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
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
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFB800]/70">Let's build</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            Ready to engineer your <span className="text-gradient-gold">next revenue advantage</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            45 minutes with a senior operator. We identify the system constraint, quantify the opportunity, and map the highest-leverage next move.
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
