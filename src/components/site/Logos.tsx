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
export const TaxDome = (p: ComponentProps<"svg">) => (
  <Frame label="TaxDome" {...p}>
    <path d="M12 3L4 7v5c0 4 3.6 7.7 8 8.9 4.4-1.2 8-4.9 8-8.9V7l-8-4z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </Frame>
);
export const MetaSuite = (p: ComponentProps<"svg">) => (
  <Frame label="Meta Suite" {...p}>
    <path d="M3 12c0-2.2 1.2-4 3-4 1.4 0 2.5 1 3.5 2.5S11.5 13 12 13s1-1 2-2.5S15.6 8 17 8c1.8 0 3 1.8 3 4s-1.2 4-3 4c-1.4 0-2.5-1-3.5-2.5S12 11 12 11s-1 1-2 2.5S4.4 16 3 16c-1.8 0-3-1.8-3-4z" strokeLinecap="round" />
  </Frame>
);
export const Freshdesk = (p: ComponentProps<"svg">) => (
  <Frame label="Freshdesk" {...p}>
    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" strokeLinecap="round" strokeWidth="2" />
    <path d="M8 14s1 2 4 2 4-2 4-2" strokeLinecap="round" />
  </Frame>
);
export const DNS = (p: ComponentProps<"svg">) => (
  <Frame label="Domain & DNS" {...p}>
    <rect x="3" y="4" width="18" height="4" rx="1" />
    <rect x="3" y="10" width="18" height="4" rx="1" />
    <rect x="3" y="16" width="18" height="4" rx="1" />
    <path d="M7 6h.01M7 12h.01M7 18h.01" strokeLinecap="round" strokeWidth="2" />
  </Frame>
);
export const Pipedrive = (p: ComponentProps<"svg">) => (
  <Frame label="Pipedrive" {...p}>
    <circle cx="12" cy="10" r="4" />
    <path d="M12 14v7" strokeLinecap="round" strokeWidth="2" />
    <path d="M8 17h8" strokeLinecap="round" />
  </Frame>
);
export const Airtable = (p: ComponentProps<"svg">) => (
  <Frame label="Airtable" {...p}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </Frame>
);
export const Freshworks = (p: ComponentProps<"svg">) => (
  <Frame label="Freshworks" {...p}>
    <path d="M12 4c-2 0-4 1-5 3" strokeLinecap="round" />
    <path d="M7 7c-1.5 1-2.5 2.5-2.5 4.5A7.5 7.5 0 0012 19a7.5 7.5 0 007.5-7.5A7.5 7.5 0 0012 4" strokeLinecap="round" />
    <path d="M12 8v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </Frame>
);
export const ActiveCampaign = (p: ComponentProps<"svg">) => (
  <Frame label="ActiveCampaign" {...p}>
    <path d="M3 8h6l2 4 2-8 2 6 2-2h4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 16h18" strokeLinecap="round" />
  </Frame>
);