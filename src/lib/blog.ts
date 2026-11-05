import { photos } from "@/lib/photography";

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  sections: { title: string; paragraphs: string[] }[];
};

// Editorial guidance, not claims of client results or invented company history.
export const articles: Article[] = [
  {
    slug: "build-handover-or-build-manage",
    title: "Build & Handover or Build & Manage: which fits your business?",
    category: "Operating models",
    excerpt: "The right model depends on who will own the day-to-day work once the system is live.",
    image: photos.team,
    sections: [
      {
        title: "Start with the work, not the software",
        paragraphs: [
          "A new CRM or automation is only one part of an operational change. Someone still needs to respond to exceptions, keep records accurate and make sure the workflow reaches its intended outcome. Before deciding how to engage a partner, decide who will be responsible for those activities.",
          "Write down the workflow’s starting point, its completion criteria and the person accountable for each handoff. This makes the choice between a system build and a managed workflow much clearer.",
        ],
      },
      {
        title: "When Build & Handover makes sense",
        paragraphs: [
          "Choose Build & Handover when your internal team has the capacity to run the workflow but needs better systems and structure. The engagement covers system design and implementation, documentation, team training and handover. Your business owns the system and processes.",
          "Plan the handover before the build begins. Identify the internal owner, agree what documentation they need and walk through both routine tasks and exceptions during training. A successful handover is more than sharing passwords or a diagram.",
        ],
      },
      {
        title: "When Build & Manage makes sense",
        paragraphs: [
          "Choose Build & Manage when you need the workflow operated as well as implemented. Under an agreed scope, assigned people and automated steps carry out the work, supported by performance reporting and improvement.",
          "The scope should say what is included, what requires your approval and how issues are escalated. Retain visibility over the work through agreed reporting rather than assuming that automation means everything runs unattended.",
        ],
      },
      {
        title: "A practical decision",
        paragraphs: [
          "Ask three questions: Do we have a named internal owner? Do they have time to operate the workflow? Do we need ongoing delivery support? If ownership and capacity are already in place, handover may fit. If capacity is the missing piece, a managed model may be more useful.",
          "An Operations Review can help define the workflow before choosing either model. The aim is a practical fit, not a larger project than the business needs.",
        ],
      },
    ],
  },
  {
    slug: "lead-follow-up-workflow",
    title: "A lead follow-up workflow that does not depend on memory",
    category: "Sales operations",
    excerpt:
      "Connect inquiry capture, ownership and follow-up so opportunities do not disappear between tools.",
    image: photos.analytics,
    sections: [
      {
        title: "Make every inquiry visible",
        paragraphs: [
          "New opportunities can arrive through forms, phone calls, email and social channels. If each source is handled differently, it becomes difficult to know what has been received and what still needs attention.",
          "Define where inquiries are recorded and the minimum information needed to act on them. Capture the source, contact details, reason for the inquiry and current status. Avoid collecting fields that nobody uses.",
        ],
      },
      {
        title: "Assign a person and a next action",
        paragraphs: [
          "A record in a CRM is not the same as an assigned task. Each inquiry needs an owner, a next action and a clear point at which another person should be involved. Agree response expectations that fit your business and staffing.",
          "Document what happens when the owner is unavailable or the inquiry is outside the normal service area. Escalation paths stop exceptions from sitting quietly in a shared inbox.",
        ],
      },
      {
        title: "Automate support, not judgment",
        paragraphs: [
          "Automation can create records, route inquiries, schedule reminders and prepare context for the person following up. It should also make failures visible so a team member can intervene.",
          "Qualification and customer conversations may still require human judgment. Keep approval steps where an incorrect message, booking or commitment would create a problem.",
        ],
      },
      {
        title: "Review the workflow itself",
        paragraphs: [
          "Look at unassigned inquiries, overdue follow-ups and records without a next action. These measures help identify where work is getting stuck without relying on a headline conversion claim.",
          "Use what you find to adjust ownership, remove unnecessary steps and improve the information available to the team. Consistency comes from a workflow people can actually operate.",
        ],
      },
    ],
  },
  {
    slug: "before-you-automate",
    title: "Before you automate, make the workflow clear",
    category: "Automation & AI",
    excerpt:
      "A practical starting point for connecting people, processes and tools without creating more complexity.",
    image: photos.work,
    sections: [
      {
        title: "Map the current process",
        paragraphs: [
          "Start with a real task and follow it from beginning to end. Note where information arrives, who handles it, which tools are involved and how completion is recorded. Include the workarounds people use, not just the documented ideal.",
          "A short conversation with the person doing the work often reveals more than a long list of desired software features. Look for repeated entry, unclear approvals and handoffs that rely on someone remembering to send a message.",
        ],
      },
      {
        title: "Define the outcome and exceptions",
        paragraphs: [
          "Describe what a completed task looks like. For an appointment workflow, that might include an agreed time, a confirmed customer and an updated record. For a quotation follow-up, it may include a response, a next action or a documented reason to close the task.",
          "List the exceptions: missing details, duplicate records, unavailable staff or a request that needs approval. A reliable workflow needs a route for these situations as well as the routine path.",
        ],
      },
      {
        title: "Choose a contained first build",
        paragraphs: [
          "Begin with a repeatable step where the inputs and outputs are clear. Connecting a form to a CRM and creating an assigned follow-up task can be a better starting point than trying to automate an entire department.",
          "Test the normal path and likely failures. Make sure someone can see when the automation stops, and keep a way to complete the work manually while an issue is resolved.",
        ],
      },
      {
        title: "Give the system an owner",
        paragraphs: [
          "Document how the workflow works, what it depends on and who can change it. Changes to forms, CRM fields or permissions can affect an integration even when the automation itself has not changed.",
          "AI and automation are enablers of a better operational outcome. The goal is work completed with clear responsibility, not simply more tools running in the background.",
        ],
      },
    ],
  },
];
