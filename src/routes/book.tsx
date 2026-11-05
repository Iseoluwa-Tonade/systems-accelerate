import { ArrowLeft, ArrowRight } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Page, PageIntro } from "@/components/site/chrome";
import { photos } from "@/lib/photography";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/motion";
import { Field, SelectField, AreaField, SubmitButton } from "@/components/site/fields";
import { challenges } from "@/lib/content";
import { submitBookSession } from "@/lib/form-actions";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: photos.workplace },
      { name: "twitter:image", content: photos.workplace },
      { title: "Book an Operations Review | SuperTelque" },
      {
        name: "description",
        content:
          "A 20-minute remote conversation about your workflows, support needs and automation opportunities.",
      },
      { property: "og:title", content: "Book an Operations Review | SuperTelque" },
      { property: "og:description", content: "20 minutes - Remote - No obligation." },
    ],
  }),
  component: Book,
});

const slots = ["09:00", "10:30", "13:00", "14:30", "16:00"];
const schema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Company is required").max(160),
  company_size: z
    .string()
    .max(40)
    .optional()
    .transform((v) => v || ""),
  crm: z
    .string()
    .trim()
    .max(80)
    .optional()
    .transform((v) => v || ""),
  challenge: z.string().min(1, "Choose a main challenge"),
  notes: z
    .string()
    .trim()
    .max(4000)
    .optional()
    .transform((v) => v || ""),
});

function toIso(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function Book() {
  const [month, setMonth] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [day, setDay] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  const days = useMemo(() => {
    const first = (month.getDay() + 6) % 7;
    const count = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    return [
      ...Array(first).fill(null),
      ...Array.from(
        { length: count },
        (_, i) => new Date(month.getFullYear(), month.getMonth(), i + 1),
      ),
    ];
  }, [month]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!day || !slot) {
      toast.error("Pick a date and time first");
      return;
    }
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check the form");
      return;
    }
    setBusy(true);
    try {
      await submitBookSession({
        data: {
          fullName: parsed.data.full_name,
          workEmail: parsed.data.email,
          company: parsed.data.company,
          companySize: parsed.data.company_size,
          crm: parsed.data.crm,
          challenge: parsed.data.challenge,
          notes: parsed.data.notes,
          selectedDate: toIso(day),
          selectedSlot: slot,
        },
      });
      setDone(true);
    } catch {
      toast.error("Something went wrong. Please email support@supertelque.com");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Page darkHeader>
      <PageIntro
        compact
        eyebrow="Operations Review"
        title="Let's look at your operations."
        lede="Tell us what is taking too much time from your team. We'll explore where support or automation could help."
        image={photos.workplace}
      />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <p className="eyebrow text-muted-foreground">Operations Review</p>
            <h2 className="h-section mt-6">20 minutes on your operations.</h2>
            <p className="mt-6 text-muted-foreground">Remote - No obligation.</p>
            <p className="eyebrow mt-12 text-muted-foreground">What we discuss</p>
            <ul className="mt-4">
              {[
                "The workflow taking too much time",
                "Where handoffs or tasks get stuck",
                "Support and automation opportunities",
                "Which delivery model could fit",
                "Practical next steps",
              ].map((x) => (
                <li key={x} className="border-t border-border py-3 text-sm">
                  {x}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Choose a preferred date and time. This is a request; the team will confirm
              availability before the review.
            </p>
          </div>

          <Reveal className="border-t-4 border-orange bg-stone p-6 md:p-10">
            {done ? (
              <div className="flex min-h-[480px] flex-col justify-center">
                <p className="eyebrow text-muted-foreground">Requested</p>
                <h2 className="h-section mt-4">
                  You're pencilled in for{" "}
                  {day?.toLocaleDateString(undefined, {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}{" "}
                  at {slot}.
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We'll confirm the invite by email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="grid gap-8 md:grid-cols-[1.3fr_1fr]">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-serif text-xl">
                        {month.toLocaleDateString(undefined, { month: "long", year: "numeric" })}
                      </p>
                      <div className="flex gap-1">
                        {[-1, 1].map((d) => (
                          <Button
                            variant="ghost"
                            type="button"
                            key={d}
                            aria-label={d < 0 ? "Previous month" : "Next month"}
                            onClick={() =>
                              setMonth(new Date(month.getFullYear(), month.getMonth() + d, 1))
                            }
                            className="h-8 w-8 rounded-full border border-border text-sm hover:border-ink"
                          >
                            {d < 0 ? (
                              <ArrowLeft strokeWidth={3} className="size-4" />
                            ) : (
                              <ArrowRight strokeWidth={3} className="size-4" />
                            )}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
                      {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                        <span key={i} className="py-1">
                          {d}
                        </span>
                      ))}
                    </div>
                    <div className="mt-1 grid grid-cols-7 gap-1">
                      {days.map((d, i) => {
                        if (!d) return <span key={i} />;
                        const off = d < today || d.getDay() === 0 || d.getDay() === 6;
                        const sel = day && toIso(d) === toIso(day);
                        return (
                          <Button
                            variant="ghost"
                            type="button"
                            key={i}
                            disabled={off}
                            onClick={() => {
                              setDay(d);
                              setSlot(null);
                            }}
                            className={cn(
                              "aspect-square h-auto min-w-0 w-full p-0 rounded-full text-sm transition-colors",
                              off ? "text-muted-foreground/40" : "hover:bg-stone",
                              sel && "bg-ink text-ink-foreground hover:bg-ink",
                            )}
                          >
                            {d.getDate()}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <p className="eyebrow text-muted-foreground">
                      {day
                        ? day.toLocaleDateString(undefined, {
                            weekday: "short",
                            day: "numeric",
                            month: "short",
                          })
                        : "Choose a date"}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {slots.map((s) => (
                        <Button
                          variant="ghost"
                          type="button"
                          key={s}
                          disabled={!day}
                          onClick={() => setSlot(s)}
                          className={cn(
                            "rounded-full border border-border py-2.5 text-sm transition-colors disabled:opacity-40",
                            slot === s
                              ? "border-ink bg-ink text-ink-foreground"
                              : "hover:border-ink",
                          )}
                        >
                          {s} <span className="opacity-60">WAT</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-2">
                  <Field label="Full name" name="full_name" required />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Company" name="company" required />
                  <SelectField
                    label="Company size"
                    name="company_size"
                    options={["1-20", "21-50", "51-200", "201-500", "500+"]}
                  />
                  <Field label="Current CRM" name="crm" />
                  <SelectField
                    label="Main challenge"
                    name="challenge"
                    options={challenges}
                    required
                  />
                  <div className="sm:col-span-2">
                    <AreaField label="Notes (optional)" name="notes" />
                  </div>
                  <div className="sm:col-span-2">
                    <SubmitButton busy={busy}>Request this session</SubmitButton>
                  </div>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
