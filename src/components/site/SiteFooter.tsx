import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-blue/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <img src="/supertelque-logo.png" alt="SuperTelque" className="h-7 w-7 rounded-md object-contain" />
              <span className="font-display text-base font-semibold">SuperTelque</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Technical revenue operators building the GTM infrastructure behind modern B2B
              technology companies.
            </p>

            <form className="mt-6 flex max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-md border border-border bg-surface px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="rounded-md bg-foreground px-3 py-2 text-sm font-medium text-background">
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-muted-foreground">
              One field-tested teardown per month. No fluff.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-4">
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
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Regions
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>United States</li>
                <li>United Kingdom</li>
                <li>Canada</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} SuperTelque RevOps. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="font-mono">SOC2 ready · GDPR compliant</span>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">X</a>
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
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-foreground/80 hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}