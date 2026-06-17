import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children, headerTheme = "light" }: { children: ReactNode; headerTheme?: "light" | "dark" }) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <SiteHeader theme={headerTheme} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}