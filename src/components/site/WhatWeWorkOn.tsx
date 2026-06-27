import { SectionHeader } from "@/components/site/Eyebrow";
import { StaggerReveal, StaggerChild } from "@/components/site/ScrollReveal";

const WORK_ITEMS = [
  { title: "Lead generation", desc: "Automate prospect scraping, signal-based filtering, and warm outreach setup." },
  { title: "ICP fitness", desc: "Analyze customer data to define, validate, and score your ideal profile." },
  { title: "Data entry", desc: "Sync pipeline events and client records with zero human manual input." },
  { title: "Virtual assistant", desc: "Build automated agents to support operations, routing, and notifications." },
  { title: "Ecommerce support", desc: "Streamline stores, shopping APIs, and customer fulfillment flows." },
  { title: "Logistics support", desc: "Connect shipping status trackers, warehouses, and freight logs." },
  { title: "Domain setup", desc: "Provision clean sending subdomains and optimize deliverability." },
  { title: "DNS record", desc: "Configure SPF, DKIM, DMARC, and MX records for spam prevention." },
  { title: "Email delivery", desc: "Monitor bounce rates, warm sending profiles, and verify inboxes." },
  { title: "Event management", desc: "Automate invitation pipelines, tickets, checks, and post-event syncs." },
  { title: "Access control", desc: "Define workspace permissions, roles, API tokens, and SSO policies." },
  { title: "RFX", desc: "Parse and generate responses for RFPs, RFQs, and RFIs using AI parsing." },
] as const;

export function WhatWeWorkOn() {
  return (
    <section className="sec-navy relative border-t border-border py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              What we work on. <span className="text-muted-foreground">Every day.</span>
            </>
          }
          description="Operational problems solved with software, triggers, and solid engineering. If it can be mapped, it can be automated."
        />

        <div className="mt-10 md:mt-14">
          <div className="sm:hidden overflow-x-auto -mx-4 px-4 pb-2">
            <div className="flex gap-4 w-max">
              {WORK_ITEMS.map((item, i) => (
                <div
                  key={item.title}
                  className="surface-card group relative w-[260px] shrink-0 p-5 transition duration-300 hover:border-border/80"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>CAP · {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <StaggerReveal className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WORK_ITEMS.map((item, i) => (
              <StaggerChild key={item.title}>
                <div className="surface-card group relative p-6 transition duration-300 hover:border-border/80">
                  <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                    <span>CAP · {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground/90">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}
