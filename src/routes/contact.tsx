import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { submitContactForm } from "@/lib/form-actions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | SuperTelque RevOps" },
      { name: "description", content: "Reach the SuperTelque RevOps team. We operate across Nigeria." },
      { property: "og:title", content: "Contact | SuperTelque RevOps" },
      { property: "og:description", content: "Email, LinkedIn and a direct contact form for B2B revenue infrastructure engagements." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [crm, setCrm] = useState("HubSpot");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;

    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Required";
    if (!company.trim()) errs.company = "Required";
    if (!role.trim()) errs.role = "Required";
    if (!email.trim()) errs.email = "Required";
    if (!message.trim()) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    try {
      await submitContactForm({ data: { name, company, role, email, crm, message } });
      toast.success("Message sent. We'll be in touch within 24 hours.");
      setName("");
      setCompany("");
      setRole("");
      setEmail("");
      setCrm("HubSpot");
      setMessage("");
      setErrors({});
    } catch (err) {
      console.error("[contact]", err);
      toast.error("Something went wrong. Please email support@supertelque.com directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-12 lg:pt-32 lg:px-6">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
            Talk to a <span className="text-gradient-gold">revenue engineer.</span>
          </h1>
        </div>
      </section>

      <section className="sec-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-16 lg:py-20">
        <ScrollReveal variant="fadeUp">
          <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="surface-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Direct
              </div>
              <dl className="mt-4 space-y-4 text-sm">
                <Row k="Email" v="support@supertelque.com" href="mailto:support@supertelque.com" />
                <Row k="LinkedIn" v="linkedin.com/company/supertelque" href="https://linkedin.com/company/supertelque" />
              </dl>
            </div>

            <div className="surface-card overflow-hidden">
              <RegionsMap />
              <div className="border-t border-border">
                <div className="p-4 text-center">
                  <div className="font-display text-sm font-semibold">Nigeria</div>
                  <div className="font-mono text-[11px] text-muted-foreground">Lagos</div>
                </div>
              </div>
            </div>

            <div className="surface-card p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Operating standards
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-3 font-mono text-[12px] text-foreground/80">
                <li>SOC2 ready</li>
                <li>GDPR compliant</li>
                <li>Insured engagements</li>
                <li>NDA on request</li>
              </ul>
            </div>
          </div>

          <form className="lg:col-span-7 surface-card p-6 lg:p-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <Field label="Name" placeholder="Alex Morgan" value={name} onChange={(e) => setName(e.target.value)} error={errors.name} />
            <Field label="Company" placeholder="Acme Inc." value={company} onChange={(e) => setCompany(e.target.value)} error={errors.company} />
            <Field label="Role" placeholder="CRO / Head of RevOps" value={role} onChange={(e) => setRole(e.target.value)} error={errors.role} />
            <Field label="Email" placeholder="alex@company.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={errors.email} />
            <div className="sm:col-span-2">
              <Select label="Current CRM" options={["HubSpot", "Salesforce", "Pipedrive", "None / building"]} value={crm} onChange={(e) => setCrm(e.target.value)} />
            </div>
            <div className="sm:col-span-2">
              <Label>Message</Label>
              <textarea
                rows={5}
                placeholder="Tell us about your revenue stack and what you'd like to fix..."
                className="mt-2 w-full resize-none rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && (
                <p className="mt-1 font-mono text-[11px] text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
              <div className="text-xs text-muted-foreground">Typical response in under 24 hours.</div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-[#080D1C] disabled:opacity-40 disabled:pointer-events-none transition hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
              >
                {sending ? "Sending..." : "Send message →"}
              </button>
            </div>
          </form>
        </div>
        </ScrollReveal>
      </div>
      </section>
    </SiteLayout>
  );
}

function Row({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-6 border-b border-border pb-3 last:border-b-0 last:pb-0">
      <dt className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
      <dd className="font-display text-sm break-all text-foreground/90">
        {href ? (
          <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="hover:text-primary transition-colors">
            {v}
          </a>
        ) : v}
      </dd>
    </div>
  );
}
function Label({ children }: { children: React.ReactNode }) {
  return <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{children}</label>;
}
function Field({ label, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && (
        <p className="mt-1 font-mono text-[11px] text-red-500">{error}</p>
      )}
    </div>
  );
}
function Select({ label, options, ...props }: { label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-[color:var(--surface)]/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}

function RegionsMap() {
  // Abstract dotted "world" visualization with active pins for US/UK/CA
  const dots: [number, number][] = [];
  for (let y = 20; y <= 180; y += 14) {
    for (let x = 20; x <= 580; x += 14) {
      if (Math.sin(x * 0.03 + y * 0.04) > -0.2) dots.push([x, y]);
    }
  }
  const pins: { x: number; y: number; label: string }[] = [
    { x: 290, y: 125, label: "Lagos" },
  ];
  return (
    <div className="relative bg-[color:var(--surface)]/60 overflow-hidden">
      <svg viewBox="0 0 600 200" className="block w-full h-auto aspect-[3/1]">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.1" fill="var(--muted-foreground)" opacity="0.35" />
        ))}
        {pins.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="10" fill="var(--accent-blue)" opacity="0.18" />
            <circle cx={p.x} cy={p.y} r="3.5" fill="var(--accent-blue)" />
            <text x={p.x + 8} y={p.y + 4} fill="var(--foreground)" fontSize="9" fontFamily="JetBrains Mono, monospace">
              {p.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}