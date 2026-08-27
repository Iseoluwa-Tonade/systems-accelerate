import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SuperTelque | Revenue Systems for B2B Companies" },
      { name: "description", content: "SuperTelque builds the systems B2B companies run on: CRM, RevOps, GTM engineering, workflow automation, AI, business technology management, solution consulting, and web development. Remote-first. Global clients." },
      { name: "author", content: "SuperTelque" },
      { name: "keywords", content: "B2B revenue operations, CRM administration, CRM implementation, RevOps consulting, GTM engineering, workflow automation, AI automation, business technology management, solution consulting, business operations, HubSpot Salesforce Pipedrive setup, web development" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "SuperTelque | Revenue Systems for B2B Companies" },
      { property: "og:description", content: "SuperTelque builds the systems B2B companies run on: CRM, RevOps, GTM engineering, workflow automation, AI, business technology management, and web development." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://supertelque.com" },
      { property: "og:image", content: "https://supertelque.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://supertelque.com/og-image.png" },
      { name: "twitter:title", content: "SuperTelque | Revenue Systems for B2B Companies" },
      { name: "twitter:description", content: "CRM, RevOps, lead generation, automation, social media, and virtual assistance for B2B companies. Remote-first. One accountable partner." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/supertelque-logo.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Inter+Tight:wght@600;700;800&family=JetBrains+Mono:wght@400&display=optional",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T80QV3FXEC" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-T80QV3FXEC');` }} />
        <script dangerouslySetInnerHTML={{ __html: `function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,o.onload=function(){window.trackingFunctions.onLoad({appId:"69c83565c43ef5001d514789"})},document.head.appendChild(o)}initApollo();` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SuperTelque",
          "url": "https://supertelque.com",
          "logo": "https://supertelque.com/supertelque-logo.png",
          "description": "SuperTelque builds the systems B2B companies run on: CRM administration, RevOps, GTM engineering, workflow automation with AI, business technology management, solution consulting, and web development. Remote-first, serving clients globally.",
          "email": "support@supertelque.com",
          "foundingLocation": { "@type": "Place", "addressCountry": "US" },
          "areaServed": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "Canada" },
            { "@type": "Country", "name": "United Kingdom" }
          ],
          "serviceType": [
            "Revenue Operations",
            "GTM Engineering",
            "CRM Implementation",
            "CRM Administration",
            "Workflow Automation",
            "AI Automation",
            "Business Technology Management",
            "Solution Consulting",
            "Business Operations",
            "Web Development"
          ],
          "sameAs": [
            "https://www.linkedin.com/company/supertelque"
          ]
        }) }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
