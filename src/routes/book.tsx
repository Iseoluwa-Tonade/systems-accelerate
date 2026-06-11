import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Session | SuperTelque RevOps" },
      { name: "description", content: "Book a 45-minute revenue systems strategy session. Stack assessment, automation opportunities, CRM review and a written roadmap." },
      { property: "og:title", content: "Book a Strategy Session | SuperTelque RevOps" },
      { property: "og:description", content: "Estimated value $2,500 · 45 minutes · senior RevOps engineer." },
    ],
  }),
  component: BookPage,
});

const SLOTS = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
const DAYS = ["MON 14", "TUE 15", "WED 16", "THU 17", "FRI 18"];

function BookPage() {
  const [day, setDay] = useState(2);
  const [slot, setSlot] = useState(2);
  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-radial-glow opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-10 lg:pt-32 lg:px-6">
          <Eyebrow>Book a session</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
            Book a <span className="text-gradient-brand">revenue systems</span> strategy session.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A meeting with a senior RevOps engineer. We audit your stack, identify three automation
            wins, and leave you with a written roadmap.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 surface-card p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Scheduler
                </div>
                <div className="mt-1 font-display text-xl font-semibold">Pick a working block</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-5 gap-1.5 sm:gap-2">
              {DAYS.map((d, i) => (
                <button
                  key={d}
                  onClick={() => setDay(i)}
                  className={
                    "rounded-lg border px-1 sm:px-3 py-3 text-center transition " +
                    (day === i
                      ? "border-accent-blue/60 bg-accent-blue/10 text-foreground"
                      : "border-border bg-[color:var(--surface)]/40 text-muted-foreground hover:text-foreground")
                  }
                >
                  <div className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-[0.12em] sm:tracking-[0.18em]">{d.split(" ")[0]}</div>
                  <div className="mt-1 font-display text-base sm:text-lg font-semibold">{d.split(" ")[1]}</div>
                </button>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {SLOTS.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setSlot(i)}
                  className={
                    "rounded-md border px-3 py-2 font-mono text-sm transition " +
                    (slot === i
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-[color:var(--surface)]/40 hover:border-foreground/50")
                  }
                >
                  {s}
                </button>
              ))}
            </div>

            <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full name" placeholder="Alex Morgan" />
              <Field label="Work email" placeholder="alex@company.com" type="email" />
              <Field label="Company" placeholder="Acme Inc." />
              <Select label="Company size" options={["1–10", "11–50", "51–200", "201–500", "500+"]} />
              <Select label="Current CRM" options={["HubSpot", "Salesforce", "Pipedrive", "None / building"]} />
              <Select
                label="Main challenge"
                options={[
                  "Forecasting accuracy",
                  "Lead routing & SLAs",
                  "CRM re-architecture",
                  "Outbound infrastructure",
                  "Attribution & reporting",
                  "AI in the GTM stack",
                ]}
              />
              <div className="sm:col-span-2">
                <Label>Anything else?</Label>
                <textarea
                  rows={3}
                  placeholder="Context, links, current stack..."
                  className="mt-2 w-full resize-none rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <div className="font-mono text-[12px] text-muted-foreground">
                  Confirming {DAYS[day]} · {SLOTS[slot]} WAT · 45 min
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background">
                  Schedule consultation →
                </button>
              </div>
            </form>
          </div>

          <aside className="lg:col-span-4 space-y-4">
            <div className="surface-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                What you'll get
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "Revenue systems audit",
                  "Three automation opportunities",
                  "CRM architecture assessment",
                  "GTM growth recommendations",
                  "Written 90-day roadmap",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-teal)]" />
                    <span className="text-foreground/85">{i}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card relative overflow-hidden p-6">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-indigo/25 blur-3xl" />
              <div className="relative">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Estimated value
                </div>
                <div className="mt-2 font-display text-4xl font-semibold tracking-tight">
                  $2,500
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Strategic assessment. No charge for qualifying B2B teams.
                </p>
              </div>
            </div>

            <div className="surface-card p-6 text-sm text-muted-foreground">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Trusted by operators at
              </div>
              <div className="mt-3 font-display text-foreground/85 leading-relaxed">
                Series A → C SaaS, fintech and AI companies across Nigeria.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{children}</label>;
}
function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <Label>{label}</Label>
      <select className="mt-2 w-full rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
        {options.map((o) => (
          <option key={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}