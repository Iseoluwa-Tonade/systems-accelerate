import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | SuperTelque RevOps" },
      { name: "description", content: "Technical revenue operators building the GTM infrastructure behind B2B technology companies in Nigeria." },
      { property: "og:title", content: "About | SuperTelque RevOps" },
      { property: "og:description", content: "RevOps expertise. GTM systems thinking. Automation engineering. AI implementation." },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  { k: "Data first", d: "We build on the integrity of the model. Garbage CRM data isn't a reporting problem — it's a revenue ceiling." },
  { k: "Automation before headcount", d: "Hire a system before you hire a seat. Every recurring motion is a candidate for engineering." },
  { k: "Revenue alignment", d: "Marketing, sales and CS share one funnel, one definition, one scoreboard. No exceptions." },
  { k: "Process scalability", d: "Architect for 10×. Patch work compounds into legacy cost; clean systems compound into leverage." },
  { k: "Measurable outcomes", d: "Every engagement reports against pipeline, velocity, conversion or cost — never activity." },
];

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Automating inventory tracking, RFX routing, and vendor communication portals.", accent: "#1B5EFF" },
  { title: "Real Estate", desc: "Lead intake, property database ingestion, and automated client sequencing.", accent: "#4F46E5" },
  { title: "Ecommerce", desc: "Shopping platform syncs, order automation, and customer feedback triggers.", accent: "#14B8A6" },
  { title: "Logistics & Supply Chain", desc: "Waybill processing, real-time dispatch alerts, and tracking integrations.", accent: "#8B5CF6" },
  { title: "Healthcare & Pharma", desc: "Compliance-first intake flows, doctor matching queues, and scheduling syncs.", accent: "#1B5EFF" },
  { title: "Edutech", desc: "Student onboarding workflows, automated course access, and event reminders.", accent: "#14B8A6" },
] as const;

function AboutPage() {
  return (
    <SiteLayout headerTheme="dark">
      {/* Hero */}
      <section className="sec-navy relative overflow-hidden border-b border-white/08 pt-24 md:pt-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,184,0,0.10) 0%, transparent 70%)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-12 lg:px-6">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[72px] lg:leading-[1.02]">
            We are <span className="text-gradient-gold">technical revenue operators</span>,
            <br className="hidden lg:block" /> not a marketing agency.
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <p className="lg:col-span-7 text-lg leading-relaxed text-muted-foreground">
                SuperTelque is a small, senior team of operators who have run RevOps, built GTM
                engineering functions, and shipped automation inside enterprise revenue orgs.
                We bring that operating experience to founders and CROs who want infrastructure, not slides.
              </p>
              <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/05 p-6 flex flex-col justify-center items-center text-center">
                <img src="/supertelque-logo.png" alt="" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
                <div className="mt-3 font-display text-2xl font-bold text-white">HQ</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FFB800]/70">
                  Lagos, Nigeria
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission */}
      <section className="sec-navy border-b border-white/08 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ScrollReveal variant="fadeUp">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <SectionHeader eyebrow="Mission" title={<>Scale revenue through systems.</>} />
              </div>
              <blockquote className="lg:col-span-8 border-l-2 border-[#FFB800]/40 pl-6 text-xl leading-relaxed text-white/75 lg:text-2xl">
                "To help B2B companies scale revenue through systems, automation, and operational
                excellence — replacing manual work with infrastructure that compounds quarter over
                quarter."
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Principles */}
      <section className="sec-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader eyebrow="Core principles" title={<>How we operate.</>} />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p, i) => (
              <div key={p.k} className="rounded-xl border border-border bg-[#F4F6FA] p-5">
                <div className="font-mono text-[11px] tracking-[0.2em] text-[#FFB800]">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-base font-bold tracking-tight text-[#080D1C]">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="sec-navy border-t border-white/08 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Sectors of <span className="text-gradient-gold">expertise.</span>
              </>
            }
            description="Our systems-engineered approach is sector-agnostic. These are the industries we've shipped revenue operations for."
          />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={ind.title}
                className="rounded-xl border border-white/08 bg-white/04 p-6 transition duration-300 hover:bg-white/07"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3">
                  <span style={{ color: ind.accent }}>SECTOR · 0{i + 1}</span>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ind.accent, opacity: 0.6 }} />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-white">{ind.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec-navy border-t border-white/08 py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
          <ScrollReveal variant="scaleIn">
            <div className="flex items-center justify-center gap-2.5 mb-4">
              <img src="/supertelque-logo.png" alt="" className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's build something durable.
            </h2>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.03] hover:shadow-[0_12px_28px_-6px_rgba(255,184,0,0.40)]"
              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
            >
              Book a strategy session →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  );
}
