/* Minimalist wordmark SVG logos rendered with currentColor for the tools used in the stack. */
import type { ComponentProps } from "react";

type LogoProps = ComponentProps<"svg"> & { label: string };

function Frame({ label, children, ...props }: LogoProps & { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground/90">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        {...props}
      >
        {children}
      </svg>
      <span className="font-display text-[13px] font-semibold tracking-tight text-foreground/85">
        {label}
      </span>
    </div>
  );
}

export const HubSpot = (p: ComponentProps<"svg">) => (
  <Frame label="HubSpot" {...p}>
    <circle cx="16" cy="14" r="4" />
    <path d="M16 10V4M8 14H4M8 14a4 4 0 108-0" />
  </Frame>
);
export const Salesforce = (p: ComponentProps<"svg">) => (
  <Frame label="Salesforce" {...p}>
    <path d="M5 14a3 3 0 013-3 4 4 0 017-2 3 3 0 014 3 3 3 0 01-2 5H8a3 3 0 01-3-3z" />
  </Frame>
);
export const Apollo = (p: ComponentProps<"svg">) => (
  <Frame label="Apollo" {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M8 16l3-8 2 5 3-3" />
  </Frame>
);
export const Clay = (p: ComponentProps<"svg">) => (
  <Frame label="Clay" {...p}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <path d="M9 9h6v6H9z" />
  </Frame>
);
export const OpenAI = (p: ComponentProps<"svg">) => (
  <Frame label="OpenAI" {...p}>
    <path d="M12 4a4 4 0 014 4v8a4 4 0 11-8 0V8a4 4 0 014-4z" />
    <path d="M4 12a4 4 0 014-4h8a4 4 0 110 8H8a4 4 0 01-4-4z" />
  </Frame>
);
export const Stripe = (p: ComponentProps<"svg">) => (
  <Frame label="Stripe" {...p}>
    <path d="M8 9c0-1.5 1.5-2 3-2s3 .5 3 2-1.5 2-3 2-3 .5-3 2 1.5 2 3 2 3-.5 3-2" />
  </Frame>
);
export const PowerBI = (p: ComponentProps<"svg">) => (
  <Frame label="Power BI" {...p}>
    <path d="M6 18V10M12 18V6M18 18v-5" strokeLinecap="round" strokeWidth="2" />
  </Frame>
);
export const Zapier = (p: ComponentProps<"svg">) => (
  <Frame label="Zapier" {...p}>
    <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M18 6l-4 4M10 14l-4 4" />
  </Frame>
);
export const N8n = (p: ComponentProps<"svg">) => (
  <Frame label="n8n" {...p}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M8 12h4M14 8l-2 4 2 4" />
  </Frame>
);
export const Make = (p: ComponentProps<"svg">) => (
  <Frame label="Make" {...p}>
    <path d="M6 18L10 6M12 18l4-12M18 18V6" strokeLinecap="round" strokeWidth="2" />
  </Frame>
);
export const Slack = (p: ComponentProps<"svg">) => (
  <Frame label="Slack" {...p}>
    <rect x="5" y="9" width="6" height="6" rx="2" />
    <rect x="13" y="9" width="6" height="6" rx="2" />
    <path d="M9 5v4M15 19v-4" strokeLinecap="round" />
  </Frame>
);
export const GoHighLevel = (p: ComponentProps<"svg">) => (
  <Frame label="GoHighLevel" {...p}>
    <path d="M22 12A10 10 0 1112 2a10 10 0 0110 10z" />
    <path d="M8 16V10M12 16V8M16 16v-11" strokeLinecap="round" strokeWidth="2" />
  </Frame>
);
export const Lemlist = (p: ComponentProps<"svg">) => (
  <Frame label="Lemlist" {...p}>
    <path d="M12 2s-4 4-4 8a4 4 0 008 0c0-4-4-8-4-8z" />
    <path d="M12 6a2 2 0 00-2 2" strokeLinecap="round" />
  </Frame>
);
export const Instantly = (p: ComponentProps<"svg">) => (
  <Frame label="Instantly" {...p}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
  </Frame>
);
export const LowNoCode = (p: ComponentProps<"svg">) => (
  <Frame label="Low/No-code" {...p}>
    <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round" />
  </Frame>
);
export const Supabase = (p: ComponentProps<"svg">) => (
  <Frame label="Supabase" {...p}>
    <path d="M4 14.5L12 3v7.5h8L12 21v-7.5H4z" strokeLinecap="round" strokeLinejoin="round" />
  </Frame>
);