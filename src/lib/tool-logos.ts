// Official brand marks stored locally in /public/tool-logos.
const logoSrc = {
  powerbi: "/tool-logos/powerbi.svg",
  zapier: "/tool-logos/zapier-symbol.svg",
  n8n: "/tool-logos/n8n.svg",
  make: "/tool-logos/make.svg",
  slack: "/tool-logos/slack.svg",
  gohighlevel: "/tool-logos/highlevel-symbol.svg",
  lemlist: "/tool-logos/lemlist.png",
  instantly: "/tool-logos/instantly.png",
  hubspot: "/tool-logos/hubspot.svg",
  airtable: "/tool-logos/airtable.svg",
  notion: "/tool-logos/notion.svg",
  calendly: "/tool-logos/calendly.svg",
  clay: "/tool-logos/clay-symbol.png",
  apollo: "/tool-logos/apollo.svg",
  supabase: "/tool-logos/supabase.svg",
  stripe: "/tool-logos/stripe.svg",
  salesforce: "/tool-logos/salesforce.svg",
  openai: "/tool-logos/openai.svg",
  adobe: "/tool-logos/adobe.svg",
  canva: "/tool-logos/canva.svg",
};

// Official brand marks of tools we build and manage workflows inside.
export const toolLogos = [
  { name: "Power BI", logo: logoSrc.powerbi },
  { name: "Zapier", logo: logoSrc.zapier },
  { name: "n8n", logo: logoSrc.n8n },
  { name: "Make", logo: logoSrc.make },
  { name: "Slack", logo: logoSrc.slack },
  { name: "GoHighLevel", logo: logoSrc.gohighlevel },
  { name: "Lemlist", logo: logoSrc.lemlist },
  { name: "Instantly", logo: logoSrc.instantly },
  { name: "HubSpot", logo: logoSrc.hubspot },
  { name: "Airtable", logo: logoSrc.airtable },
  { name: "Notion", logo: logoSrc.notion },
  { name: "Calendly", logo: logoSrc.calendly },
  { name: "Clay", logo: logoSrc.clay },
  { name: "Apollo", logo: logoSrc.apollo },
  { name: "Supabase", logo: logoSrc.supabase },
  { name: "Stripe", logo: logoSrc.stripe },
  { name: "Salesforce", logo: logoSrc.salesforce },
  { name: "OpenAI", logo: logoSrc.openai },
  { name: "Adobe", logo: logoSrc.adobe },
  { name: "Canva", logo: logoSrc.canva },
];

const firstLogo = toolLogos.at(0);
const lastLogo = toolLogos.at(-1);
export const heroArcLogos = firstLogo && lastLogo ? [lastLogo, ...toolLogos, firstLogo] : toolLogos;

// A finite front window: completed cards never wrap back into view.
export function heroArcOpacity(angle: number) {
  return Math.max(0, Math.min(1, (48 - Math.abs(angle)) / 12));
}
