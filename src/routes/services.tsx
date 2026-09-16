import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Managed Sales & Business Operations | SuperTelque" },
      { name: "description", content: "Managed revenue, customer and business operations for growing companies. People, process, automation and AI — delivered as a service." },
      { property: "og:title", content: "Services | Managed Sales & Business Operations | SuperTelque" },
      { property: "og:description", content: "Four operational services: Sales & Revenue, Customer Operations, Business Operations, and CRM & Automation Engineering." },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    id: "revenue",
    code: "01",
    title: "Managed Sales & Revenue Operations",
    blurb: "Build a more consistent sales pipeline without placing every task on your sales team. We handle prospect research, outbound execution, lead qualification, CRM management and reporting.",
    items: [
      "Prospect research & enrichment",
      "Outbound execution & lead qualification",
      "Appointment setting",
      "CRM management & follow-up",
      "Sales coordination",
      "Pipeline reporting",
    ],
    who: "Owners, Sales Directors, Heads of Sales and RevOps teams",
    color: "#1B5EFF",
  },
  {
    id: "customers",
    code: "02",
    title: "Managed Customer Operations",
    blurb: "Make sure customer inquiries receive attention and appointments, communications and follow-ups stay organized. We manage the front line of your customer experience.",
    items: [
      "Inquiry management",
      "Appointment coordination",
      "Customer communications",
      "Service follow-up",
      "Escalation handling",
      "Customer operations reporting",
    ],
    who: "Operations Directors, General Managers and Customer Service Managers",
    color: "#F59E0B",
  },
  {
    id: "operations",
    code: "03",
    title: "Managed Business Operations",
    blurb: "Remove administrative bottlenecks and give your internal team more time for high-value work. We run the back-office tasks that keep your business moving.",
    items: [
      "Back-office administration",
      "Workflow coordination",
      "Data management & scheduling",
      "SOPs & task management",
      "Operational reporting",
      "Process improvement",
    ],
    who: "Owners, COOs, Operations Directors and Office Managers",
    color: "#10B981",
  },
  {
    id: "systems",
    code: "04",
    title: "CRM, AI & Workflow Engineering",
    blurb: "Connect your tools, automate repetitive work and create systems that support your team. This is the technical foundation that powers the other three services.",
    items: [
      "CRM implementation & RevOps architecture",
      "Workflow automation",
      "AI-assisted processes",
      "Integrations & dashboards",
      "Process documentation",
      "System optimization",
    ],
    who: "Operations leaders, Sales Operations and businesses scaling existing systems",
    color: "#8B5CF6",
  },
] as const;

function ServicesPage() {
  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative isolate min-h-[620px] overflow-hidden border-b border-border lg:min-h-[680px]">
        <img
          src="/hero.jpg"
          alt="SuperTelque operations team working with a client"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 -z-10 backdrop-blur-[8px]"
          style={{
            background:
              "linear-gradient(to right, rgba(8, 13, 28, 0.94) 0%, rgba(8, 13, 28, 0.72) 36%, rgba(8, 13, 28, 0) 68%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-end px-4 pb-10 pt-32 lg:min-h-[680px] lg:items-center lg:px-8 lg:pb-16 lg:pt-28">
          <div className="max-w-4xl">
            <Eyebrow>Services</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-[42px] font-extrabold leading-[1.02] tracking-tight text-white sm:text-[58px] lg:text-[72px] lg:leading-[0.98]">
              Operational support that{" "}
              <span className="text-[#FFD44D]">grows with your business.</span>
            </h1>
            <ScrollReveal variant="fadeUp" delay={0.15}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
                We combine experienced people, structured processes, automation and AI to run the sales and operational workflows that help growing businesses move forward.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#FFD44D] px-5 py-3 text-[15px] font-bold text-[#080D1C] transition-all duration-200 hover:scale-[1.03] hover:bg-white"
                >
                  Discuss your operations
                  <span className="header-action-arrow" aria-hidden="true">
                    <ArrowRight className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                </Link>
                <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">
                  Revenue · Customers · Operations · Systems
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <div className="sticky top-[72px] z-20 border-b border-border bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex items-center gap-1.5 overflow-x-auto py-3" style={{ scrollbarWidth: "none" }}>
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-[10px] text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all whitespace-nowrap"
              >
                <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                {s.title.split(" & ")[0].split(" ").slice(0, 2).join(" ")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service blocks */}
      <section className="sec-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 space-y-16 lg:space-y-28">
          {SERVICES.map((s, i) => (
            <ServiceBlock key={s.id} svc={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Delivery Models */}
      <section className="sec-mid border-y border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="How we deliver"
            title={
              <>
                Two ways to <span className="text-gradient-gold">work with us.</span>
              </>
            }
            description="Choose the engagement model that fits where you are right now."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <div className="rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#1B5EFF] mb-3">Build & Handover</div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">Design the system. Train your team.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We design and implement the system, document it and train your team. You own everything and run it internally going forward.
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
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FFB800] mb-3">Build & Manage</div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#080D1C]">We implement and run it for you.</h3>
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

      <CTA />
    </SiteLayout>
  );
}

function ServiceBlock({
  svc,
  reverse,
}: {
  svc: (typeof SERVICES)[number];
  reverse: boolean;
}) {
  return (
    <section id={svc.id} className="scroll-mt-28">
      <div className={"grid items-start gap-10 lg:grid-cols-12 " + (reverse ? "lg:[direction:rtl]" : "")}>
        <ScrollReveal variant="slideRight" className="lg:col-span-5 [direction:ltr]">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl font-mono text-[11px] font-bold text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: svc.color }}
            >
              <span className="h-2 w-2 rounded-full bg-white/70" />
            </span>
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-foreground">
              Service
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[42px] lg:leading-[1.06]">
            {svc.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{svc.blurb}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {svc.items.map((it, idx) => (
              <li
                key={it}
                className="flex items-center gap-2 text-foreground/85 animate-slide-up-fade"
                style={{ animationDelay: `${idx * 70 + 200}ms` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: svc.color }} />
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-xl border border-border bg-[#F4F6FA] px-4 py-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Best for</div>
            <div className="mt-1 text-sm text-foreground/80">{svc.who}</div>
          </div>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium text-foreground/70 hover:bg-[#F4F6FA] hover:text-foreground transition-all"
          >
            Discuss this service →
          </Link>
        </ScrollReveal>
        <ScrollReveal variant="slideLeft" className="lg:col-span-7 [direction:ltr]">
          <ServiceDetails svc={svc} />
        </ScrollReveal>
      </div>
    </section>
  );
}

function ServiceDetails({ svc }: { svc: (typeof SERVICES)[number] }) {
  return (
    <div className="surface-card relative overflow-hidden p-5" style={{ borderTop: `2px solid ${svc.color}40` }}>
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: svc.color }} />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              service detail
            </span>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-border bg-white/60 p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">What's included</div>
            <div className="grid grid-cols-2 gap-2">
              {svc.items.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: svc.color }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-white/60 p-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2">Engagement model</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border bg-[#F4F6FA] p-3">
                <div className="font-display text-sm font-bold text-[#080D1C]">Build & Handover</div>
                <div className="mt-1 text-xs text-muted-foreground">We set it up, document it, train your team</div>
              </div>
              <div className="rounded-lg border border-[#FFB800]/30 bg-[#FFFDF5] p-3">
                <div className="font-display text-sm font-bold text-[#080D1C]">Build & Manage</div>
                <div className="mt-1 text-xs text-muted-foreground">We set it up and run it for you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CTA() {
  return (
    <section className="sec-navy relative overflow-hidden border-t border-white/08 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-[350px] w-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,184,0,0.12) 0%, transparent 65%)", filter: "blur(40px)" }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <img src="/supertelque-logo.png" alt="" className="h-7 w-7 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-white/40">SuperTelque LLC</span>
          </div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Not sure where to begin?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-white/50">
            Book a 20-minute call. Tell us what's taking too much time, and we'll tell you where support or automation could help. No pressure, no pitch.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-white/30">
            {["Free · no pressure", "Response in 24 hours", "Senior operator, not an SDR"].map((t, i) => (
              <span key={t} className="flex items-center gap-2 font-mono text-[11px]">
                {i > 0 && <span className="h-px w-3 bg-white/20" />}
                {t}
              </span>
            ))}
          </div>
          <Link
            to="/book"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_16px_40px_-8px_rgba(255,184,0,0.50)]"
            style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 60%, #E08A00 100%)" }}
          >
            Book an Operations Review
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
