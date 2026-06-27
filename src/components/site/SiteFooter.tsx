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
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">/revops</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Technical revenue operators building the GTM infrastructure behind modern B2B
              technology companies.
            </p>

            <p className="mt-4 text-xs text-[#FFB800]/60">
              B2B RevOps · GTM Engineering · Lagos, Nigeria
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:col-span-8 lg:grid-cols-4 lg:gap-8">
            <FooterCol
              title="Company"
              links={[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/about", label: "About" },
                { to: "/case-studies", label: "Case Studies" },
              ]}
            />
            <FooterCol
              title="Services"
              links={[
                { to: "/services", label: "Revenue Operations" },
                { to: "/services", label: "GTM Engineering" },
                { to: "/services", label: "CRM Architecture" },
                { to: "/services", label: "Automation" },
                { to: "/services", label: "Data & Analytics" },
                { to: "/services", label: "AI Revenue Systems" },
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
                Regions
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>Nigeria (Lagos)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/08 pt-6 text-xs text-muted-foreground md:mt-14 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SuperTelque RevOps. All rights reserved.</div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-mono">SOC2 ready · GDPR compliant</span>
            <a href="https://linkedin.com/company/supertelque" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">LinkedIn</a>
            <a href="https://x.com/supertelque" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB800] transition-colors">X</a>
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