import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Page, PageIntro, Cta } from "@/components/site/chrome";
import { photos } from "@/lib/photography";
import { Reveal } from "@/components/site/motion";
import { Field, SelectField, AreaField, SubmitButton } from "@/components/site/fields";
import { submitContactForm } from "@/lib/form-actions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.team },
      { name: "twitter:image", content: photos.team },
      { title: "Contact | SuperTelque" },
      {
        name: "description",
        content: "Talk about managed sales, customer or business operations, CRM and automation.",
      },
      { property: "og:title", content: "Contact | SuperTelque" },
      { property: "og:description", content: "Discuss the workflows taking time from your team." },
    ],
  }),
  component: Contact,
});

const supportTypes = [
  "Sales & Revenue Operations",
  "Customer Operations",
  "Business Operations",
  "CRM & Automation",
  "Not sure",
];

function Contact() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactPref, setContactPref] = useState<"call" | "text">("call");
  const [supportType, setSupportType] = useState("Not sure");
  const [message, setMessage] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;

    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Required";
    if (!company.trim()) errs.company = "Required";
    if (!role.trim()) errs.role = "Required";
    if (!email.trim()) errs.email = "Required";
    if (!message.trim()) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setBusy(true);
    try {
      await submitContactForm({
        data: {
          name,
          company,
          role,
          email,
          phone,
          contactPref,
          smsConsent,
          crm: supportType,
          message,
        },
      });
      toast.success("Message sent. We'll be in touch within 24 hours.");
      setName("");
      setCompany("");
      setRole("");
      setEmail("");
      setPhone("");
      setContactPref("call");
      setSupportType("Not sure");
      setMessage("");
      setSmsConsent(false);
      setErrors({});
      setSent(true);
    } catch (err) {
      console.error("[contact]", err);
      toast.error("Something went wrong. Please email support@supertelque.com directly.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Page darkHeader>
      <PageIntro
        compact
        eyebrow="Contact"
        title="Let's talk about your next stage."
        lede="A senior operator. A real conversation. Your operational challenges, without the sales pitch."
        image={photos.team}
      />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-muted-foreground">Contact</p>
          <h2 className="h-section mt-6">Tell us what's slowing your business down.</h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            A senior operator reads every message. Ready to talk now? Book an Operations Review
            instead.
          </p>
          <Cta to="/book" tone="ghost" className="mt-8">
            Book an Operations Review
          </Cta>
          <dl className="mt-16 space-y-5 text-sm">
            <div className="border-t border-border pt-4">
              <dt className="text-muted-foreground">Email</dt>
              <dd className="mt-1">
                <a className="link-underline" href="mailto:support@supertelque.com">
                  support@supertelque.com
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="text-muted-foreground">Phone</dt>
              <dd className="mt-1">
                <a className="link-underline" href="tel:+13074293798">
                  +1 (307) 429-3798
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="text-muted-foreground">Text message</dt>
              <dd className="mt-1">
                <a className="link-underline" href="sms:+13074293798">
                  +1 (307) 429-3798
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="text-muted-foreground">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  className="link-underline"
                  href="https://linkedin.com/company/supertelque"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/company/supertelque
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="text-muted-foreground">Office</dt>
              <dd className="mt-1">Lagos, Nigeria - Remote-first</dd>
            </div>
          </dl>
          <p className="mt-6 border-t border-border pt-4 text-[11px] leading-relaxed text-muted-foreground">
            SMS/text consent is collected at form submission. Msg &amp; data rates may apply. Reply
            STOP to cancel, HELP for help. Subject to TCPA (US). We do not sell your number.
          </p>
        </div>
        <Reveal className="border-t-4 border-blue bg-stone p-8 md:p-12">
          {sent ? (
            <div className="flex min-h-[420px] flex-col justify-center">
              <p className="eyebrow text-muted-foreground">Received</p>
              <h2 className="h-section mt-4">Thank you - your message is with us.</h2>
              <p className="mt-4 text-muted-foreground">
                We'll reply from a real person, not a sequence.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 self-start rounded-full border border-ink/25 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-8 sm:grid-cols-2">
              <Field
                label="Name"
                placeholder="Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
              />
              <Field
                label="Company"
                placeholder="Acme Inc."
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                error={errors.company}
              />
              <Field
                label="Role"
                placeholder="Owner / Operations Director"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                error={errors.role}
              />
              <Field
                label="Work email"
                placeholder="alex@company.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Phone number (optional)"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <SelectField
                  label="Type of support needed"
                  options={supportTypes}
                  value={supportType}
                  onChange={(e) => setSupportType(e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <AreaField
                  label="Message"
                  placeholder="Tell us about the workflow or process that's slowing your team down..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={errors.message}
                />
              </div>

              <div className="sm:col-span-2 rounded-md border border-border bg-paper/60 p-5 space-y-3">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={smsConsent}
                    onChange={(e) => setSmsConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 rounded border border-border accent-[var(--gold)] cursor-pointer"
                  />
                  <span className="text-[12px] leading-relaxed text-foreground/75 group-hover:text-foreground transition-colors">
                    <strong>Yes, SuperTelque can reach me at the number above.</strong> This is
                    optional and completely free to me. SuperTelque may call or text to verify my
                    details, clarify my inquiry, or follow up on my request. I am not charged for
                    any call or message I receive.
                  </span>
                </label>

                {smsConsent && phone.trim() && (
                  <div className="pl-7 flex flex-wrap items-center gap-4">
                    <span className="text-[11px] font-medium text-foreground/60">I prefer:</span>
                    {(["call", "text"] as const).map((pref) => (
                      <label
                        key={pref}
                        className="flex items-center gap-1.5 cursor-pointer text-[12px] text-foreground/75 hover:text-foreground transition-colors capitalize"
                      >
                        <input
                          type="radio"
                          name="contactPref"
                          value={pref}
                          checked={contactPref === pref}
                          onChange={() => setContactPref(pref)}
                          className="accent-[var(--gold)]"
                        />
                        {pref === "call" ? "A phone call (to verify / discuss)" : "A text message"}
                      </label>
                    ))}
                  </div>
                )}

                <p className="pl-7 text-[10px] leading-relaxed text-muted-foreground">
                  By checking the box above I consent to receive calls and/or texts from SuperTelque
                  LLC at the number provided. Consent is not a condition of any purchase. Msg &amp;
                  data rates may apply for texts. Message frequency varies. Reply STOP to opt out of
                  texts, HELP for assistance. Subject to TCPA (US). We do not sell your number to
                  third parties.
                </p>
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
                <p className="font-mono text-[11px] text-muted-foreground">
                  Typical response in under 24 hours.
                </p>
                <SubmitButton busy={busy}>Send message</SubmitButton>
              </div>
            </form>
          )}
        </Reveal>
      </section>
    </Page>
  );
}
