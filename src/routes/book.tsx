import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      { name: "description", content: "Book a 45-minute revenue systems strategy session with a senior RevOps engineer." },
      { property: "og:title", content: "Book a Strategy Session | SuperTelque RevOps" },
      { property: "og:description", content: "Estimated value $2,500 · 45 minutes · senior RevOps engineer." },
    ],
  }),
  component: BookPage,
});

const SLIDE_VARIANTS = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 32 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -32 }),
};
const SLIDE_TRANSITION = { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

function BookPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [dir, setDir] = useState(1);

  /* Step 1 */
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  /* Step 2 */
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [companySize, setCompanySize] = useState("1–10");
  const [crm, setCrm] = useState("HubSpot");
  const [challenge, setChallenge] = useState("none");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);

  function goTo(next: 1 | 2 | 3, direction: number) {
    setDir(direction);
    setStep(next);
  }

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
        data: { fullName, workEmail, company, companySize, crm, challenge, notes, selectedDate: formatConfirmDate(selectedDate), selectedSlot },
      });
      goTo(3, 1);
    } catch {
      toast.error("Something went wrong. Please email support@supertelque.com");
    } finally {
      setSending(false);
    }
  }

  return (
    <SiteLayout headerTheme="light">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-border pt-24 md:pt-28"
        style={{ background: "linear-gradient(155deg, #EEF4FF 0%, #FFFFFF 60%, #FFF9F0 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-1/4 h-[360px] w-[360px] rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, rgba(255,184,0,0.11) 0%, transparent 70%)" }} />
          <svg className="absolute right-4 bottom-0 h-[180px] w-[180px] opacity-[0.05]" viewBox="0 0 200 200">
            <rect x="20" y="20" width="160" height="160" rx="20" fill="none" stroke="#1B5EFF" strokeWidth="1.5" strokeDasharray="4 9" />
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pb-14 lg:pt-16 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-7">
              <Eyebrow>Book a session</Eyebrow>
              <h1 className="mt-5 font-display text-[34px] font-extrabold tracking-tight text-[#080D1C] sm:text-5xl lg:text-[68px] lg:leading-[1.03]">
                Book a <span className="text-gradient-gold">free strategy</span> session.
              </h1>
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  45 minutes with a senior RevOps engineer. Your stack reviewed, quick wins identified, and a clear plan to move forward.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal variant="fadeUp" delay={0.2} className="lg:col-span-5">
              <div className="rounded-2xl border border-border overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&auto=format&fit=crop"
                    alt="Professional strategy session in a modern office"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1C]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">Free · No pressure</div>
                    <div className="mt-0.5 font-display text-sm font-bold text-white">45 minutes. Clear starting point.</div>
                  </div>
                </div>
                <div className="px-5 py-4 bg-[#F4F7FF] flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4C5670]">Est. value $2,500 · Free for qualifying teams</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Booking ── */}
      <section className="sec-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-14 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12">

            {/* ── Main card ── */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-[#E8EEFF] bg-white shadow-[0_4px_32px_rgba(27,94,255,0.07)] overflow-hidden">

                {/* Step header */}
                {step !== 3 && (
                  <div className="px-6 pt-6 pb-5 border-b border-[#F0F4FF]">
                    <div className="flex items-center gap-3">
                      {/* Step 1 pill */}
                      <div className={`flex items-center gap-2 transition-colors ${step >= 1 ? "text-[#1B5EFF]" : "text-[#4C5670]/35"}`}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors"
                          style={{ background: step >= 1 ? "#1B5EFF" : "#E8EEFF", color: step >= 1 ? "white" : "#4C5670" }}>
                          {step > 1 ? (
                            <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M2 6l3 3 5-5" />
                            </svg>
                          ) : "1"}
                        </span>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em]">Schedule</span>
                      </div>
                      {/* Connector */}
                      <div className="flex-1 h-px" style={{ background: step >= 2 ? "#1B5EFF" : "#E8EEFF" }} />
                      {/* Step 2 pill */}
                      <div className={`flex items-center gap-2 transition-colors ${step >= 2 ? "text-[#1B5EFF]" : "text-[#4C5670]/35"}`}>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold transition-colors"
                          style={{ background: step >= 2 ? "#1B5EFF" : "#E8EEFF", color: step >= 2 ? "white" : "#4C5670" }}>
                          2
                        </span>
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.16em]">Your details</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step content */}
                <div className="relative overflow-hidden">
                  <AnimatePresence mode="wait" custom={dir}>
                    {step === 1 && (
                      <motion.div key="step1" custom={dir} variants={SLIDE_VARIANTS} initial="initial" animate="animate" exit="exit" transition={SLIDE_TRANSITION} className="p-6 lg:p-8">
                        <BookingCalendar
                          selectedDate={selectedDate}
                          selectedSlot={selectedSlot}
                          onDateChange={(d) => { setSelectedDate(d); setSelectedSlot(null); }}
                          onSlotChange={setSelectedSlot}
                        />
                        <div className="mt-8 flex items-center justify-between border-t border-[#F0F4FF] pt-6">
                          <div>
                            {selectedDate && selectedSlot ? (
                              <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="font-mono text-[12px] text-[#080D1C]/60">
                                  {formatConfirmDate(selectedDate)} · {selectedSlot} WAT
                                </span>
                              </div>
                            ) : (
                              <span className="font-mono text-[12px] text-[#4C5670]/40">
                                {selectedDate ? "Now pick a time slot" : "Pick a date to get started"}
                              </span>
                            )}
                          </div>
                          <button
                            type="button"
                            disabled={!selectedDate || !selectedSlot}
                            onClick={() => goTo(2, 1)}
                            className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[14px] font-bold text-[#080D1C] transition-all disabled:opacity-35 disabled:pointer-events-none hover:scale-[1.02] hover:shadow-[0_8px_24px_-6px_rgba(255,184,0,0.45)]"
                            style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                          >
                            Continue
                            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" custom={dir} variants={SLIDE_VARIANTS} initial="initial" animate="animate" exit="exit" transition={SLIDE_TRANSITION} className="p-6 lg:p-8">
                        {/* Selected time reminder */}
                        {selectedDate && selectedSlot && (
                          <div className="mb-7 flex items-center gap-3 rounded-xl border border-[#E8EEFF] bg-[#F8FAFF] px-4 py-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1B5EFF]/10">
                              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 text-[#1B5EFF]" stroke="currentColor" strokeWidth="1.8">
                                <rect x="2" y="3" width="12" height="11" rx="2" /><path d="M5 1v3M11 1v3M2 7h12" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-display text-[13px] font-semibold text-[#080D1C]">
                                {formatConfirmDate(selectedDate)} · {selectedSlot} WAT
                              </div>
                              <div className="font-mono text-[10px] text-[#4C5670]/55 uppercase tracking-[0.14em]">45-minute strategy session</div>
                            </div>
                            <button type="button" onClick={() => goTo(1, -1)} className="ml-auto font-mono text-[10.5px] text-[#1B5EFF] hover:underline shrink-0">
                              Change
                            </button>
                          </div>
                        )}

                        <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                          <FormField label="Full name" placeholder="Alex Morgan" value={fullName} onChange={(e) => setFullName(e.target.value)} error={errors.fullName} />
                          <FormField label="Work email" type="email" placeholder="alex@company.com" value={workEmail} onChange={(e) => setWorkEmail(e.target.value)} error={errors.workEmail} />
                          <FormField label="Company" placeholder="Acme Inc." value={company} onChange={(e) => setCompany(e.target.value)} error={errors.company} />
                          <FormSelect label="Company size" options={["1–10", "11–50", "51–200", "201–500", "500+"]} value={companySize} onChange={(e) => setCompanySize(e.target.value)} />
                          <FormSelect label="Current CRM" options={["HubSpot", "Salesforce", "Pipedrive", "Zoho CRM", "Monday.com CRM", "Close", "ActiveCampaign", "Keap / Infusionsoft", "Other", "None / building"]} value={crm} onChange={(e) => setCrm(e.target.value)} />
                          <FormSelect
                            label="Main challenge"
                            options={["none", "Forecasting accuracy", "Lead routing & SLAs", "CRM re-architecture", "Outbound infrastructure", "Attribution & reporting", "AI in the GTM stack"]}
                            value={challenge}
                            onChange={(e) => setChallenge(e.target.value)}
                          />
                          <div className="sm:col-span-2">
                            <FieldLabel>Anything else? (optional)</FieldLabel>
                            <textarea
                              rows={3}
                              placeholder="Context, links, current stack..."
                              value={notes}
                              onChange={(e) => setNotes(e.target.value)}
                              className="mt-2 w-full resize-none rounded-xl border border-[#E8EEFF] bg-[#FAFBFF] px-4 py-3 text-sm text-[#080D1C] placeholder:text-[#4C5670]/40 focus:outline-none focus:ring-2 focus:ring-[#1B5EFF]/20 focus:border-[#1B5EFF]/40 transition-colors"
                            />
                          </div>
                          <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#F0F4FF] pt-5">
                            <button type="button" onClick={() => goTo(1, -1)}
                              className="inline-flex items-center gap-2 font-mono text-[12px] text-[#4C5670]/60 hover:text-[#080D1C] transition-colors">
                              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M13 8H3M7 4l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={sending}
                              className="inline-flex items-center gap-2.5 rounded-full px-7 py-3 text-[14px] font-bold text-[#080D1C] transition-all disabled:opacity-50 hover:scale-[1.02] hover:shadow-[0_8px_24px_-6px_rgba(255,184,0,0.45)]"
                              style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}
                            >
                              {sending ? (
                                <>
                                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                  </svg>
                                  Confirming...
                                </>
                              ) : (
                                <>
                                  Confirm booking
                                  <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" custom={dir} variants={SLIDE_VARIANTS} initial="initial" animate="animate" exit="exit" transition={SLIDE_TRANSITION} className="p-10 lg:p-14 flex flex-col items-center text-center">
                        <motion.div
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                          className="flex h-16 w-16 items-center justify-center rounded-full mb-6"
                          style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)", boxShadow: "0 8px 24px rgba(255,184,0,0.35)" }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="#080D1C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l4.5 4.5L19 7" />
                          </svg>
                        </motion.div>
                        <h2 className="font-display text-2xl font-extrabold text-[#080D1C] sm:text-3xl">
                          Session booked!
                        </h2>
                        <p className="mt-3 text-base text-[#4C5670] max-w-sm">
                          We'll send a calendar invite to <strong className="text-[#080D1C]">{workEmail}</strong> shortly.
                        </p>
                        {selectedDate && selectedSlot && (
                          <div className="mt-6 rounded-2xl border border-[#E8EEFF] bg-[#F8FAFF] px-6 py-4 text-center">
                            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#4C5670]/50 mb-1.5">Your session</div>
                            <div className="font-display text-lg font-bold text-[#080D1C]">
                              {formatConfirmDate(selectedDate)} · {selectedSlot} WAT
                            </div>
                            <div className="font-mono text-[11px] text-[#4C5670]/55 mt-1">45 min · SuperTelque RevOps</div>
                          </div>
                        )}
                        <div className="mt-8 flex flex-wrap gap-3 justify-center">
                          <a href="/"
                            className="inline-flex items-center gap-2 rounded-full border border-[#E8EEFF] px-5 py-2.5 text-sm font-medium text-[#4C5670] hover:bg-[#F4F7FF] hover:text-[#080D1C] transition-colors">
                            Back to home
                          </a>
                          <a href="/services"
                            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-[#080D1C] transition-all hover:scale-[1.02]"
                            style={{ background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)" }}>
                            Explore services →
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside className="lg:col-span-4 space-y-4">
              <div className="rounded-2xl border border-[#E8EEFF] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#4C5670]/55 mb-4">What you'll get</div>
                <ul className="space-y-3">
                  {[
                    "Full revenue stack audit",
                    "Three quick wins to act on now",
                    "CRM health check",
                    "Growth recommendations",
                    "Written 90-day roadmap",
                  ].map((item, idx) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFB800]/15">
                        <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#B45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm text-[#4C5670]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E8EEFF] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#4C5670]/55">Estimated value</div>
                <div className="mt-2 font-display text-4xl font-extrabold tracking-tight text-[#080D1C]">$2,500</div>
                <p className="mt-2 text-sm text-[#4C5670]/70">Typical market rate. Free for qualifying B2B teams.</p>
              </div>

              <div className="rounded-2xl border border-[#E8EEFF] bg-[#FAFBFF] p-5">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#4C5670]/55 mb-3">Who it's for</div>
                <div className="text-sm text-[#4C5670] leading-relaxed">
                  Series A–C B2B companies in SaaS, fintech, ecommerce, and beyond.
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["B2B SaaS", "Fintech", "Ecommerce", "AI Startups"].map((t) => (
                    <span key={t} className="rounded-full border border-[#E8EEFF] bg-white px-2.5 py-1 font-mono text-[10px] text-[#4C5670]/60">{t}</span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

/* ─── Form primitives ─── */
function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#4C5670]/60">{children}</label>
  );
}
function FormField({ label, error, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        {...props}
        className="mt-2 w-full rounded-xl border border-[#E8EEFF] bg-[#FAFBFF] px-4 py-3 text-sm text-[#080D1C] placeholder:text-[#4C5670]/40 focus:outline-none focus:ring-2 focus:ring-[#1B5EFF]/20 focus:border-[#1B5EFF]/40 transition-colors"
      />
      {error && <p className="mt-1 font-mono text-[10px] text-red-500">{error}</p>}
    </div>
  );
}
function FormSelect({ label, options, ...props }: { label: string; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        {...props}
        className="mt-2 w-full rounded-xl border border-[#E8EEFF] bg-[#FAFBFF] px-4 py-3 text-sm text-[#080D1C] focus:outline-none focus:ring-2 focus:ring-[#1B5EFF]/20 focus:border-[#1B5EFF]/40 transition-colors"
      >
        {options.map((o) => <option key={o} className="bg-white">{o}</option>)}
      </select>
    </div>
  );
}
