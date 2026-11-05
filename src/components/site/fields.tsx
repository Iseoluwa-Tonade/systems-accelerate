import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const base =
  "mt-2 w-full border-0 border-b border-input bg-transparent py-2.5 text-base outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ink";

const errorText = "mt-1.5 block font-mono text-[11px] text-red-500";

export function Field({
  label,
  error,
  ...p
}: { label: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <input {...p} className={base} />
      {error && <span className={errorText}>{error}</span>}
    </label>
  );
}

export function SelectField({
  label,
  error,
  options,
  ...p
}: { label: string; error?: string; options: string[] } & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <select {...p} className={base}>
        <option value="" disabled>
          Select...
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      {error && <span className={errorText}>{error}</span>}
    </label>
  );
}

export function AreaField({
  label,
  error,
  ...p
}: { label: string; error?: string } & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="eyebrow text-muted-foreground">{label}</span>
      <textarea rows={4} {...p} className={`${base} resize-none`} />
      {error && <span className={errorText}>{error}</span>}
    </label>
  );
}

export function SubmitButton({ busy, children }: { busy: boolean; children: string }) {
  return (
    <Button
      type="submit"
      disabled={busy}
      className="h-auto group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ink-foreground transition-colors hover:bg-ink-soft disabled:opacity-60"
    >
      {busy ? "Sending..." : children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        <ArrowRight strokeWidth={3} className="inline size-[1em] align-[-0.125em]" />
      </span>
    </Button>
  );
}
