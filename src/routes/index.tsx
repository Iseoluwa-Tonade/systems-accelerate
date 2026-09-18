import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow, SectionHeader } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import * as L from "@/components/site/Logos";
import { ToolFlow } from "@/components/site/ToolFlow";
import { ArrowRight, Check, CircleAlert, Clock3, Layers3, MoveRight, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import AccordionGallery from "@/components/site/AccordionGallery";
import type { AccordionGalleryItem } from "@/components/site/AccordionGallery";

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

function ScrollScene({
  children,
  delay = 0,
  direction = "up",
  className,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-14% 0px -14% 0px" });
  const offset = direction === "left" ? -120 : direction === "right" ? 120 : direction === "down" ? -120 : 110;
  const isVertical = direction === "up" || direction === "down";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 1, x: isVertical ? 0 : offset, y: isVertical ? offset : 0 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 1, x: isVertical ? 0 : offset * 0.55, y: isVertical ? offset * 0.55 : 0 }}
      transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ filter: "none", willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RevealWords({ text, highlight }: { text: string; highlight?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-12% 0px -12% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} aria-label={text}>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[.,!?]/g, "");
        const isHighlighted = highlight?.split(" ").includes(cleanWord);
        return (
          <span key={`${word}-${index}`} className={`inline-block overflow-hidden align-bottom ${index < words.length - 1 ? "mr-[0.22em]" : ""}`}>
            <motion.span
              className={`inline-block ${isHighlighted ? "text-gradient-gold" : ""}`}
              initial={{ y: "110%", opacity: 0 }}
              animate={isInView ? { y: "0%", opacity: 1 } : { y: "110%", opacity: 0 }}
              transition={{ duration: 0.55, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

function TypeLine({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    if (!isInView) {
      setVisibleText("");
      return;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));
      if (index >= text.length) window.clearInterval(timer);
    }, 26);

    return () => window.clearInterval(timer);
  }, [isInView, text]);

  return (
    <span ref={ref} className="inline-flex items-center">
      {visibleText}
      <span className="ml-1 inline-block h-4 w-px bg-current animate-pulse" aria-hidden="true" />
    </span>
  );
}

/* --------------------------------- HERO --------------------------------- */
function Hero() {
  return (
    <section className="sec-navy relative isolate min-h-[100svh] overflow-hidden">
      <img
        src="/hero1.jpg"
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

      <div className="relative mx-auto grid min-h-[100svh] max-w-[1440px] items-end gap-10 px-4 pb-10 pt-28 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="lg:col-span-7 xl:col-span-6">
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
                We build, automate and manage the sales, customer and back-office processes that keep growing businesses running, without the burden of building another internal department.
              </p>
            </ScrollReveal>

            {/* <div className="mt-7 grid max-w-xl grid-cols-3 gap-3 border-y border-white/15 py-5">
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
            </div> */}

            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-6 flex flex-wrap items-center gap-5">
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
        </div>

        <div className="lg:col-span-5 xl:col-span-6">
          <ToolFlow />
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
    icon: CircleAlert,
    image: "/problem-leads.jpg",
    title: "Leads and inquiries go unanswered",
    desc: "Your team is too busy delivering the service to consistently follow up with new opportunities.",
    accent: "#FFB800",
  },
  {
    icon: Clock3,
    image: "/problem-admin.jpg",
    title: "Your best people are buried in admin",
    desc: "Salespeople, managers and owners spend valuable time updating systems and chasing routine tasks.",
    accent: "#1B5EFF",
  },
  {
    icon: Layers3,
    image: "/problem-tools.jpg",
    title: "Work gets lost between people and tools",
    desc: "Emails, CRM records, scheduling and customer updates are disconnected.",
    accent: "#14B8A6",
  },
  {
    icon: MoveRight,
    image: "/problem-capacity.jpg",
    title: "You need more capacity, not more management",
    desc: "You want work completed reliably without coordinating several additional hires or freelancers.",
    accent: "#8B5CF6",
  },
] as const;

function Problems() {
  const [api, setApi] = useState<CarouselApi>();
  const [activeProblem, setActiveProblem] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActiveProblem(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!isPaused || !api) return;
    const timer = window.setInterval(() => api.scrollNext(), 5200);
    return () => window.clearInterval(timer);
  }, [isPaused, api]);

  return (
    <section className="sec-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="The problem"
          title={
            <RevealWords text="Your business is growing. Why does everything feel harder?" highlight="harder?" />
          }
        />
        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          className="problem-carousel mt-10 sm:mt-14"
        >
          <CarouselContent className="-ml-3 items-center sm:-ml-4" aria-live="polite">
            {PROBLEMS.map((problem, index) => {
              const isFocused = index === activeProblem;
              return (
                <CarouselItem
                  key={problem.title}
                  className="basis-[85%] pl-3 sm:basis-[70%] sm:pl-4"
                >
                  <article
                    onClick={() => {
                      if (!isFocused) api?.scrollTo(index);
                    }}
                    className={`problem-card group relative overflow-hidden rounded-2xl border p-6 text-left shadow-[0_24px_50px_-28px_rgba(0,0,0,.65)] transition-all duration-500 sm:p-10 ${isFocused ? "min-h-[24rem] cursor-default sm:min-h-[26rem]" : "min-h-[19rem] cursor-pointer hover:opacity-90 sm:min-h-[20rem]"}`}
                    style={{
                      backgroundColor: isFocused ? "#162038" : "#0F1628",
                      borderColor: isFocused ? `${problem.accent}88` : "rgba(255,255,255,0.1)",
                    }}
                  >
                    <img
                      src={problem.image}
                      alt=""
                      aria-hidden="true"
                      className="problem-card-visual"
                    />
                    <div className="problem-card-visual-shade" aria-hidden="true" />
                    <div className="problem-card-content">
                      <problem.icon className="h-7 w-7" style={{ color: problem.accent }} strokeWidth={1.8} />
                      <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{problem.title}</h3>
                      <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">{problem.desc}</p>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="problem-carousel-indicators mt-7 flex items-center justify-center gap-2" role="tablist" aria-label="Problem carousel navigation">
            {PROBLEMS.map((problem, index) => (
              <button
                key={problem.title}
                type="button"
                role="tab"
                aria-selected={activeProblem === index}
                aria-label={`Show problem ${index + 1}`}
                onClick={() => api?.scrollTo(index)}
                className={`problem-indicator ${activeProblem === index ? "problem-indicator-active" : ""}`}
                style={{ "--indicator-color": problem.accent } as React.CSSProperties}
              >
                {activeProblem === index && <span className={`problem-indicator-progress ${isPaused ? "problem-indicator-progress-paused" : ""}`} />}
              </button>
            ))}
          </div>
        </Carousel>
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
  },
  {
    code: "02",
    title: "Managed Customer Operations",
    desc: "Make sure customer inquiries receive attention and appointments, communications and follow-ups stay organized.",
    bullets: ["Inquiry management", "Appointment coordination", "Customer communications", "Service follow-up & escalation"],
    color: "#FFD84D",
  },
  {
    code: "03",
    title: "Managed Business Operations",
    desc: "Remove administrative bottlenecks and give your internal team more time for high-value work.",
    bullets: ["Back-office administration", "Workflow coordination & scheduling", "Data management & SOPs", "Operational reporting"],
    color: "#9BE3CC",
  },
  {
    code: "04",
    title: "CRM, AI & Workflow Engineering",
    desc: "Connect your tools, automate repetitive work and create systems that support your team.",
    bullets: ["CRM implementation & RevOps architecture", "Workflow automation & AI-assisted processes", "Integrations & dashboards", "Process documentation"],
    color: "#D4C4FF",
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
              <RevealWords text="Four services. One accountable partner." highlight="accountable partner." />
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

        <div className="services-stack mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[minmax(260px,1fr)_minmax(260px,1fr)]">
          {SERVICES.map((s, i) => (
            <ScrollScene
              key={s.code}
              delay={i * 0.1}
              direction={["left", "down", "up", "right"][i] as "left" | "down" | "up" | "right"}
              className={`services-stack-item services-stack-item-${i + 1}`}
            >
            <motion.div
              whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              className="service-card group relative h-full overflow-hidden rounded-[1.45rem] border border-black/8 p-7 shadow-[0_12px_30px_-24px_rgba(8,13,28,.35)] transition-shadow duration-300 hover:border-[#1B5EFF]/35 hover:shadow-[0_22px_45px_-26px_rgba(27,94,255,.38)]"
              style={{ backgroundColor: s.color }}
            >
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-[5rem] bg-white/35 transition-colors group-hover:bg-white/50" />
              <div className="relative mb-10 flex items-center justify-between">
                <Sparkles className="h-4 w-4 text-[#080D1C]/45 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-125" />
              </div>
              <h3 className="relative max-w-[15rem] font-display text-lg font-bold tracking-tight text-[#080D1C]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#080D1C]">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-[#080D1C]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            </ScrollScene>
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
            <RevealWords text="Two ways to work with us." highlight="work with us." />
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <ScrollScene direction="left" delay={0.1}>
            <div className="delivery-card group relative overflow-hidden rounded-2xl border border-border bg-[#F4F6FA] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#1B5EFF]/10 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex items-center justify-end">
                <span className="rounded-full border border-[#1B5EFF]/20 bg-[#1B5EFF]/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#1B5EFF]">Build</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">Build & Handover</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We design and implement the system, document it and train your team. You own everything and run it internally.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {["System design & implementation", "Full documentation", "Team training & handover", "You own the system and processes"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#1B5EFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollScene>
          <ScrollScene direction="right" delay={0.2}>
            <div className="delivery-card group relative overflow-hidden rounded-2xl border-2 border-[#FFB800]/40 bg-[#FFFDF5] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-[#FFB800]/15 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative flex items-center justify-end">
                <span className="rounded-full bg-[#FFB800] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[#080D1C]">Most popular</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">Build & Manage</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We implement the workflow, operate it under an agreed scope and report on performance. We take responsibility for delivery.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground/80">
                {["Everything in Build & Handover", "Ongoing managed operations", "Assigned people & automated steps", "Performance reporting & improvement"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#FFB800]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollScene>
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

function Methodology() {
  const [activeStep, setActiveStep] = useState(0);

  const items: AccordionGalleryItem[] = STEPS.map((s) => ({
    image: `/${s.k.toLowerCase()}.png`,
    label: s.k,
    alt: `${s.k} process illustration`,
  }));

  const activeStepData = STEPS[activeStep];

  return (
    <section className="sec-navy relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <SectionHeader
          eyebrow="Our process"
          title={
            <RevealWords text="From operational bottleneck to managed delivery." highlight="managed delivery." />
          }
        />
        <div className="mt-10">
          <AccordionGallery
            items={items}
            defaultIndex={0}
            height={480}
            accentColor="#FFB800"
            overlayColor="#080D1C"
            trigger="hover"
            expandRatio={0.52}
            onChange={setActiveStep}
          />
          <div className="mt-5 text-sm leading-relaxed text-white/80">
            <TypeLine text={activeStepData.d} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- FINAL CTA ------------------------------ */
function FinalCTA() {
  return (
    <section className="cta-section relative overflow-hidden border-t border-border py-16 lg:py-24">
      <div className="cta-orbit cta-orbit-one" aria-hidden="true" />
      <div className="cta-orbit cta-orbit-two" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="inline-flex items-center gap-2 mb-4">
            <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#FFB800]/70">Let's talk</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            <RevealWords text="Ready to stop running everything manually?" highlight="everything manually?" />
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
