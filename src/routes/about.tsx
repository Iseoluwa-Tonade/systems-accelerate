import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal, StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";

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
  { k: "Data first", d: "We build on the integrity of the model. Garbage CRM data isn't just a reporting problem; it's a revenue ceiling." },
  { k: "Automation before headcount", d: "Hire a system before you hire a seat. Every recurring motion is a candidate for engineering." },
  { k: "Revenue alignment", d: "Marketing, sales and CS share one funnel, one definition, one scoreboard. No exceptions." },
  { k: "Process scalability", d: "Architect for 10×. Patch work compounds into legacy cost; clean systems compound into leverage." },
  { k: "Measurable outcomes", d: "Every engagement reports against pipeline, velocity, conversion or cost, never activity." },
];

const INDUSTRIES = [
  { title: "Manufacturing", desc: "Automating inventory tracking, RFX routing, and vendor communication portals.", color: "var(--accent-blue)" },
  { title: "Real Estate", desc: "Lead intake, property database ingestion, and automated client sequencing.", color: "var(--accent-indigo)" },
  { title: "Ecommerce", desc: "Shopping platform syncs, order automation, and customer feedback triggers.", color: "var(--accent-teal)" },
  { title: "Logistics & Supply Chain", desc: "Waybill processing, real-time dispatch alerts, and tracking integrations.", color: "var(--accent-purple)" },
  { title: "Healthcare & Pharmaceuticals", desc: "Compliance-first intake flows, doctor matching queues, and scheduling syncs.", color: "var(--accent-blue)" },
  { title: "Edutech", desc: "Student onboarding workflows, automated course access, and event reminders.", color: "var(--accent-teal)" },
] as const;


function AboutPage() {
  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-32 lg:px-6">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[76px] lg:leading-[1.02]">
            We are <span className="text-gradient-brand">technical revenue operators</span> not a marketing agency.
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="lg:col-span-7 text-lg leading-relaxed text-muted-foreground">
              SuperTelque is a small, senior team of operators who have run RevOps, built GTM
              engineering functions, and shipped automation inside enterprise revenue orgs.
              We bring that operating experience to founders and CROs who want infrastructure, not slides.
            </p>
            <div className="lg:col-span-5 surface-card p-6 flex flex-col justify-center items-center text-center">
              <div className="font-display text-3xl font-semibold tracking-tight">HQ</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Lagos, Nigeria
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-cream border-b border-border py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <ScrollReveal variant="fadeUp">
            <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader eyebrow="Mission" title={<>Scale revenue through systems.</>} />
            </div>
            <p className="lg:col-span-8 text-xl leading-relaxed text-foreground/85 lg:text-2xl">
              "To help B2B companies scale revenue through systems, automation, and operational
              excellence, replacing manual work with infrastructure that compounds quarter over
              quarter."
            </p>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-white py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader eyebrow="Core principles" title={<>How we operate.</>} />
          <StaggerReveal className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 md:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p, i) => (
              <StaggerChild key={p.k} className="bg-background p-6">
                <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </StaggerChild>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="sec-navy border-y border-border py-16 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <SectionHeader
            eyebrow="Industries"
            title={
              <>
                Sectors of <span className="text-gradient-brand">expertise.</span>
              </>
            }
            description="Our systems engineered approach is sector-agnostic. Here are the core industries we've shipped revenue operations for."
          />

          <StaggerReveal className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => {
              return (
                <StaggerChild key={ind.title}>
                  <div
                    className="surface-card group relative p-8 transition duration-300 hover:border-border/80"
                  >
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>SECTOR · 0{i + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground/90">
                    {ind.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {ind.desc}
                  </p>
                </div>
                </StaggerChild>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      <section className="sec-lime py-16 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-6 text-center">
        <ScrollReveal variant="scaleIn">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Let's build something durable.
          </h2>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Book a strategy session →
          </Link>
        </ScrollReveal>
      </div>
      </section>
    </SiteLayout>
  );
}