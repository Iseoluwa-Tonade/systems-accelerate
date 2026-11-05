export const operationsReview = { durationMinutes: 20, remote: true, obligation: false } as const;

export const services = [
  {
    slug: "sales",
    kind: "Managed service",
    title: "Managed Sales & Revenue Operations",
    short: "Build a more consistent sales pipeline without placing every task on your sales team.",
    body: "Build a more consistent sales pipeline without placing every task on your sales team. We handle prospect research, outbound execution, lead qualification, CRM management and reporting.",
    capabilities: [
      "Prospect research & enrichment",
      "Outbound execution & lead qualification",
      "Appointment setting",
      "CRM management & follow-up",
      "Sales coordination",
      "Pipeline reporting",
    ],
    bestFor: "Owners, Sales Directors, Heads of Sales and RevOps teams",
    flow: ["Research", "Qualify", "Coordinate", "Report"],
  },
  {
    slug: "customer",
    kind: "Managed service",
    title: "Managed Customer Operations",
    short:
      "Make sure customer inquiries receive attention and appointments, communications and follow-ups stay organized.",
    body: "Make sure customer inquiries receive attention and appointments, communications and follow-ups stay organized. We manage the front line of your customer experience.",
    capabilities: [
      "Inquiry management",
      "Appointment coordination",
      "Customer communications",
      "Service follow-up",
      "Escalation handling",
      "Customer operations reporting",
    ],
    bestFor: "Operations Directors, General Managers and Customer Service Managers",
    flow: ["Receive", "Assign", "Respond", "Follow up"],
  },
  {
    slug: "business",
    kind: "Managed service",
    title: "Managed Business Operations",
    short:
      "Remove administrative bottlenecks and give your internal team more time for high-value work.",
    body: "Remove administrative bottlenecks and give your internal team more time for high-value work. We run the back-office tasks that keep your business moving.",
    capabilities: [
      "Back-office administration",
      "Workflow coordination",
      "Data management & scheduling",
      "SOPs & task management",
      "Operational reporting",
      "Process improvement",
    ],
    bestFor: "Owners, COOs, Operations Directors and Office Managers",
    flow: ["Organize", "Coordinate", "Complete", "Improve"],
  },
  {
    slug: "engineering",
    kind: "Engineering",
    title: "CRM, AI & Workflow Engineering",
    short:
      "Connect your tools, automate repetitive work and create systems that support your team.",
    body: "Connect your tools, automate repetitive work and create systems that support your team. This is the technical foundation that powers the other three services.",
    capabilities: [
      "CRM implementation & RevOps architecture",
      "Workflow automation",
      "AI-assisted processes",
      "Integrations & dashboards",
      "Process documentation",
      "System optimization",
    ],
    bestFor: "Operations leaders, Sales Operations and businesses scaling existing systems",
    flow: ["Map", "Connect", "Automate", "Optimize"],
  },
];

export type Case = {
  slug: string;
  sector: string;
  stage: string;
  type: string;
  headline: string;
  challenge: string;
  solution: string;
  stack: string[];
  outcomes: [string, string][];
};
export const cases: Case[] = [
  {
    slug: "enterprise-saas",
    sector: "Enterprise SaaS",
    stage: "Series C",
    type: "RevOps + Engineering",
    headline: "Bringing fragmented forecasts into one operating picture.",
    challenge:
      "When forecasting systems disagree, leadership meetings can become reconciliation exercises instead of strategic discussions.",
    solution:
      "HubSpot and Salesforce architecture, a versioned object model, bidirectional sync and a unified forecast surface.",
    stack: ["HubSpot", "Salesforce", "Custom sync"],
    outcomes: [
      ["Unified", "forecast definitions"],
      ["Connected", "CRM records"],
      ["Visible", "sync status"],
    ],
  },
  {
    slug: "fintech",
    sector: "Fintech",
    stage: "Series B",
    type: "Demand + Engineering",
    headline: "Connecting prospect research, outreach and sales follow-up.",
    challenge:
      "Manual enrichment, fragmented sequences and no signal layer meant reps spent too much time building lists.",
    solution:
      "A Clay enrichment waterfall feeding Apollo sequences, routed by intent signals, scored by an OpenAI layer and handed off into Salesforce.",
    stack: ["Clay", "Apollo", "OpenAI", "Salesforce"],
    outcomes: [
      ["Qualified", "prospect records"],
      ["Coordinated", "outbound workflows"],
      ["Tracked", "sales handoffs"],
    ],
  },
  {
    slug: "ai-startup",
    sector: "AI Startup",
    stage: "Series A",
    type: "Engineering",
    headline: "Routing new inquiries to the right person.",
    challenge:
      "Hot demo requests landed in shared inboxes and ownership and response expectations were unclear.",
    solution:
      "Intent enrichment, AI prioritization and Slack-native escalation that pages the right account executive.",
    stack: ["Enrichment", "LLM scoring", "Slack"],
    outcomes: [
      ["Prioritised", "incoming inquiries"],
      ["Assigned", "lead ownership"],
      ["Observable", "escalation paths"],
    ],
  },
];

export const principles = [
  [
    "People + Process + Automation",
    "We combine the right people, structured processes and automation to deliver outcomes — not just tools or headcount.",
  ],
  [
    "Operational responsibility",
    "We don’t just install systems and leave. Under our Build & Manage model, we take responsibility for running the agreed workflow.",
  ],
  [
    "Work owned by the client",
    "Every system we build belongs to you. Full documentation, training, and clear handover if you choose to run it internally.",
  ],
  [
    "Honest outcomes",
    "We describe what we built and delivered. We don’t fabricate metrics or claim results we can’t verify.",
  ],
  [
    "Technology as an enabler",
    "AI, automation and CRM architecture are tools in service of a better operational outcome — not the product you have to learn first.",
  ],
] as const;

export const industries = [
  [
    "Home Services",
    "Lead response, appointment coordination, estimate follow-up and customer operations.",
  ],
  [
    "Industrial & Commercial Services",
    "Prospecting, quotation follow-up, CRM management and sales coordination.",
  ],
  ["Property Management", "Inquiry coordination, viewing scheduling and vendor communication."],
  [
    "Logistics & Distribution",
    "Sales coordination, customer updates, workflow and administrative support.",
  ],
  [
    "Professional Services",
    "Client onboarding, scheduling, project coordination and operational reporting.",
  ],
  [
    "Growing B2B Companies",
    "Revenue operations, CRM implementation, workflow automation and AI-assisted processes.",
  ],
] as const;

export const team = [
  {
    name: "Sunny T.",
    role: "Operations Lead",
    specialties: "Revenue Systems · CRM · Workflow Design",
    bio: "Leads client engagements across revenue operations and workflow design. Builds systems that connect CRM, pipeline, and reporting into a single operating picture.",
  },
  {
    name: "Rhoda O.",
    role: "Community Manager",
    specialties: "Social Media · Community · Content",
    bio: "Builds engaged communities and consistent brand presence across channels. Specialist in social media strategy, scheduling, and audience growth.",
  },
  {
    name: "Israel O.",
    role: "Automation Engineer",
    specialties: "n8n · Make · AI Integrations",
    bio: "Builds the automation layer between tools, teams and data. Specialises in workflow automation, AI-powered processes, and system integrations.",
  },
];

export const engagementModels = [
  {
    title: "Build & Handover",
    subtitle: "Design the system. Train your team.",
    body: "We design and implement the system, document it and train your team. You own everything and run it internally going forward.",
    includes: [
      "System design & implementation",
      "Full documentation",
      "Team training & handover",
      "You own the system and processes",
    ],
  },
  {
    title: "Build & Manage",
    subtitle: "We implement and run it for you.",
    body: "We implement the workflow, operate it under an agreed scope and report on performance. We take responsibility for delivery.",
    includes: [
      "Everything in Build & Handover",
      "Ongoing managed operations",
      "Assigned people & automated steps",
      "Performance reporting & improvement",
    ],
  },
];

export const tools = [
  "Power BI",
  "Zapier",
  "n8n",
  "Make",
  "Slack",
  "GoHighLevel",
  "Lemlist",
  "Instantly",
  "HubSpot",
  "Airtable",
  "Notion",
  "Calendly",
];

export const challenges = [
  "Sales pipeline & follow-up",
  "Customer inquiries & appointments",
  "Back-office coordination",
  "CRM & data management",
  "Workflow automation",
  "AI-assisted processes",
];

export const faqs = [
  [
    "Who works on our workflows?",
    "Assigned specialists work on your agreed workflows, supported by operations leads and automation engineers. Responsibilities and escalation paths are defined as part of the engagement.",
  ],
  [
    "Do you only work with sales teams?",
    "No. We support sales, customer operations and back-office workflows, with CRM, AI and workflow engineering as the technical foundation.",
  ],
  [
    "Do we need to replace our tools?",
    "We start with the tools you already use. Any recommended change should solve a practical workflow problem, not add another system for its own sake.",
  ],
  [
    "What is the difference between your delivery models?",
    "We design and implement the system, document it and train your team. You own everything and run it internally going forward. We implement the workflow, operate it under an agreed scope and report on performance. We take responsibility for delivery.",
  ],
  [
    "Who owns the systems you build?",
    "You do. Documentation, training and a clear handover are included so your team can run the system internally.",
  ],
  [
    "What happens during an Operations Review?",
    "In a 20-minute remote conversation, we discuss the workflow, identify where support or automation could help, and determine whether there’s a practical fit. There is no obligation.",
  ],
] as const;
