import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="sec-navy relative border-t border-white/08">
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,184,0,0.50), transparent)" }} />
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/supertelque-logo.png"
                alt="SuperTelque"
                className="h-9 w-9 object-contain drop-shadow-[0_0_10px_rgba(255,184,0,0.40)]"
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-base font-bold text-white">SuperTelque</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">/partner</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A revenue operations team that builds the systems B2B companies run on. Remote-first, with offices in Wyoming, US and Lagos, Nigeria.
            </p>

            <p className="mt-4 text-xs text-[#FFB800]/60">
              B2B RevOps · GTM Engineering · Automation
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:col-span-8 lg:grid-cols-4 lg:gap-8">
            <FooterCol
              title="Company"
              links={[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/careers", label: "Open Roles" },
                { to: "/blog/", label: "Blog" },
                { to: "/faq", label: "FAQ" },
                { to: "/case-studies", label: "Case Studies" },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { to: "/services#sales", label: "Sales & Lead Generation" },
                { to: "/services#crm", label: "CRM & Sales Operations" },
                { to: "/services#revops", label: "RevOps & GTM Engineering" },
                { to: "/services#automation", label: "Workflow Automation & AI" },
                { to: "/services#social", label: "Social Media & Community" },
                { to: "/services#backoffice", label: "Virtual Assistance" },
              ]}
            />
            <FooterCol
              title="Connect"
              links={[
                { to: "/book", label: "Book a session" },
                { to: "/contact", label: "Contact" },
              ]}
            />
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#FFB800]/70">
                Client portal
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://crm.supertelque.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/05 group-hover:border-[#FFB800]/30 group-hover:bg-[#FFB800]/08 transition-colors">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <rect x="2" y="5" width="12" height="9" rx="1.5" />
                        <path d="M5 5V4a3 3 0 0 1 6 0v1" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span>
                      <span className="block text-[13px] font-medium text-white/80 group-hover:text-white">Manage your project</span>
                      <span className="block font-mono text-[10px] text-white/30 mt-0.5">crm.supertelque.com</span>
                    </span>
                  </a>
                </li>
                <li className="pl-9 text-[12px] leading-relaxed text-white/40">
                  Track progress, review deliverables, and collaborate with your SuperTelque team.
                </li>
              </ul>
              <div className="mt-6 space-y-1.5 text-[12px] text-white/40">
                <div>Wyoming, US</div>
                <div>Lagos, Nigeria</div>
                <div>Remote-first · Global clients</div>
                <div>GDPR compliant</div>
                <div>NDA on request</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/08 pt-6 md:mt-14">
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/05 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-emerald-400"><path d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6S9.3 0 6 0zm2.8 4.6L5.3 8.1 3.2 6l.9-.9 1.2 1.2 2.6-3.6.9.9z"/></svg>
              GDPR compliant
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/05 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
              NDA on request
            </span>
          </div>
          <div className="flex flex-col-reverse items-start justify-between gap-4 text-xs text-muted-foreground md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} SuperTelque LLC. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <a href="https://linkedin.com/company/supertelque" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">LinkedIn</a>
              <a href="https://x.com/supertelque" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">X</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#FFB800]/70">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/60 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}