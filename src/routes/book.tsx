import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { BookingCalendar, formatConfirmDate } from "@/components/site/BookingCalendar";
import { submitBookSession } from "@/lib/form-actions";

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

function BookPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("1–10");
  const [crm, setCrm] = useState("HubSpot");
  const [challenge, setChallenge] = useState("none");
  const [notes, setNotes] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (sending || !selectedDate || !selectedSlot) return;

    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = "Required";
    if (!workEmail.trim()) errs.workEmail = "Required";
    if (!company.trim()) errs.company = "Required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    try {
      await submitBookSession({
        data: {
          fullName,
          workEmail,
          company,
          companySize,
          crm,
          challenge,
          notes,
          selectedDate: formatConfirmDate(selectedDate),
          selectedSlot,
        },
      });
      toast.success("Session booked! We'll send a calendar invite shortly.");
      setFullName("");
      setWorkEmail("");
      setCompany("");
      setCompanySize("1–10");
      setCrm("HubSpot");
      setChallenge("none");
      setNotes("");
      setSelectedDate(null);
      setSelectedSlot(null);
      setErrors({});
    } catch (err) {
      console.error("[book]", err);
      toast.error("Something went wrong. Please email support@supertelque.com directly.");
    } finally {
      setSending(false);
    }
  }

  const confirmationText =
    selectedDate && selectedSlot
      ? `${formatConfirmDate(selectedDate)} · ${selectedSlot} WAT · 45 min`
      : selectedDate
        ? `${formatConfirmDate(selectedDate)} · Pick a time slot`
        : "Select a date and time";

  return (
    <SiteLayout headerTheme="dark">
      <section className="sec-navy relative overflow-hidden border-b border-border pt-24 md:pt-28">
        <div className="relative mx-auto max-w-7xl px-4 pb-10 lg:pt-16 lg:px-6">
          <Eyebrow>Book a session</Eyebrow>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
            Book a <span className="text-gradient-gold">free strategy</span> session.
          </h1>
          <ScrollReveal variant="fadeUp" delay={0.15}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A 45-minute call with a senior RevOps engineer. We review your setup, spot the quick
              wins, and leave you with a clear plan to move forward.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="sec-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8 surface-card p-3 max-[375px]:p-2 sm:p-6 lg:p-8 overflow-hidden">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Scheduler
                    </div>
                    <div className="mt-1 font-display text-xl font-semibold">
                      Pick a working block
                    </div>
                  </div>
                </div>

                {/* Calendar + time slots */}
                <div className="mt-6">
                  <BookingCalendar
                    selectedDate={selectedDate}
                    selectedSlot={selectedSlot}
                    onDateChange={(date) => {
                      setSelectedDate(date);
                      setSelectedSlot(null);
                    }}
                    onSlotChange={setSelectedSlot}
                  />
                </div>

                <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
                  <Field
                    label="Full name"
                    placeholder="Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    error={errors.fullName}
                  />
                  <Field
                    label="Work email"
                    placeholder="alex@company.com"
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    error={errors.workEmail}
                  />
                  <Field
                    label="Company"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    error={errors.company}
                  />
                  <Select
                    label="Company size"
                    options={["1–10", "11–50", "51–200", "201–500", "500+"]}
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                  />
                  <Select
                    label="Current CRM"
                    options={["HubSpot", "Salesforce", "Pipedrive", "None / building"]}
                    value={crm}
                    onChange={(e) => setCrm(e.target.value)}
                  />
                  <Select
                    label="Main challenge"
                    options={[
                      "none",
                      "Forecasting accuracy",
                      "Lead routing & SLAs",
                      "CRM re-architecture",
                      "Outbound infrastructure",
                      "Attribution & reporting",
                      "AI in the GTM stack",
                    ]}
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                  />
                  <div className="sm:col-span-2">
                    <Label>Anything else? (optional)</Label>
                    <textarea
                      rows={3}
                      placeholder="Context, links, current stack..."
                      className="mt-2 w-full resize-none rounded-md border border-border bg-(--surface)/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                    <div className="font-mono text-[12px] text-muted-foreground">
                      {confirmationText}
                    </div>
                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedSlot || sending}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-[#080D1C] disabled:opacity-40 disabled:pointer-events-none transition hover:scale-[1.02]"
                      style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                    >
                      {sending ? "Scheduling..." : "Schedule consultation →"}
                    </button>
                  </div>
                </form>
              </div>

              <aside className="lg:col-span-4 space-y-4">
                <div className="surface-card p-4 sm:p-6">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    What you'll get
                  </div>
                  <ul className="mt-4 space-y-3 text-sm">
                    {[
                      "Full stack audit",
                      "Three quick wins to act on",
                      "CRM health check",
                      "Growth recommendations",
                      "Written 90-day plan",
                    ].map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-(--accent-teal)" />
                        <span className="text-foreground/85">{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="surface-card relative overflow-hidden p-4 sm:p-6">
                  <div className="relative">
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Estimated value
                    </div>
                    <div className="mt-2 font-display text-4xl font-semibold tracking-tight">
                      $2,500
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Typical market rate for this assessment. Free for qualifying B2B teams.
                    </p>
                  </div>
                </div>

                <div className="surface-card p-4 sm:p-6 text-sm text-muted-foreground">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Who it's for
                  </div>
                  <div className="mt-3 font-display text-foreground/85 leading-relaxed">
                    Series A to C companies across Nigeria: SaaS, fintech, and beyond.
                  </div>
                </div>
              </aside>
            </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </label>
  );
}
function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-(--surface)/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 font-mono text-[11px] text-red-500">{error}</p>}
    </div>
  );
}
function Select({
  label,
  options,
  ...props
}: { label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <select
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-(--surface)/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {options.map((o) => (
          <option key={o} className="bg-background">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}