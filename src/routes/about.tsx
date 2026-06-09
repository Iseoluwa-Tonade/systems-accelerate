import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader, Eyebrow } from "@/components/site/Eyebrow";

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

const TEAM = [
  { role: "RevOps Strategist", name: "M. Aldridge", region: "Lagos" },
  { role: "GTM Engineer", name: "S. Patel", region: "Lagos" },
  { role: "CRM Architect", name: "J. Okafor", region: "Lagos" },
  { role: "Automation Specialist", name: "L. Becker", region: "Lagos" },
  { role: "Data Analyst", name: "R. Tanaka", region: "Lagos" },
  { role: "AI Engineer", name: "K. Halberg", region: "Lagos" },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 lg:pt-32">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-6xl lg:text-[76px] lg:leading-[1.02]">
            We are <span className="text-gradient-brand">technical revenue operators</span> not a marketing agency.
          </h1>
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
        </div>
      </section>

      <section className="border-b border-border bg-[color:var(--surface)]/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
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
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Core principles" title={<>How we operate.</>} />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
            {PRINCIPLES.map((p, i) => (
              <li key={p.k} className="bg-background p-6">
                <div className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{p.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-[color:var(--surface)]/30 py-24 hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Team" title={<>Operators, engineers, analysts.</>} description="A deliberately small bench. The same senior person who scopes the work ships the work." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((m, i) => (
              <div key={m.name} className="group relative overflow-hidden bg-background p-6">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-full"
                    style={{
                      background: `conic-gradient(from ${i * 60}deg, var(--accent-blue), var(--accent-indigo), var(--accent-teal), var(--accent-blue))`,
                    }}
                  >
                    <div className="m-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-full bg-[color:var(--surface-2)] flex items-center justify-center font-display font-semibold text-foreground/80">
                      {m.name.split(" ").pop()?.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-base font-semibold">{m.name}</div>
                    <div className="text-sm text-muted-foreground">{m.role}</div>
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>{m.region}</span>
                  <span>since · 202{i % 4 + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Let's build something durable.
          </h2>
          <Link
            to="/book"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Book a strategy session →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}