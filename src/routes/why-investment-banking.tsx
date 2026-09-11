import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/why-investment-banking")({
  head: () => ({
    meta: [
      { title: "Why Investment Banking Operations — Sachin S" },
      {
        name: "description",
        content:
          "Why Sachin S is targeting Investment Banking Operations: a financial operations foundation, capital markets focus, analytical mindset and continuous professional growth.",
      },
      { property: "og:title", content: "Why Investment Banking Operations — Sachin S" },
      {
        property: "og:description",
        content:
          "A logical progression from Order-to-Cash operations into capital markets and trade lifecycle operations.",
      },
    ],
  }),
  component: WhyPage,
});

const pillars = [
  {
    n: "01",
    title: "Financial Operations Foundation",
    body: "Experience managing high-volume financial transactions, billing data, reconciliations and operational workflows under SLA pressure.",
  },
  {
    n: "02",
    title: "Capital Markets Interest",
    body: "Deliberate career development towards Investment Banking Operations and Capital Markets, supported by structured study.",
  },
  {
    n: "03",
    title: "Analytical Mindset",
    body: "Strong attention to detail with discrepancy investigation, root-cause analysis and financial analysis at the core of my work.",
  },
  {
    n: "04",
    title: "Continuous Growth",
    body: "MBA studies and CIBOP certification demonstrate a continued investment in finance and professional development.",
  },
];

const targets = [
  "Investment Banking Operations",
  "Capital Markets Operations",
  "Trade Support",
  "Trade Lifecycle Operations",
  "Securities Operations",
  "Middle Office Operations",
  "Reconciliation & Controls",
  "Financial Operations",
];

function WhyPage() {
  return (
    <Page>
      <SectionHeading eyebrow="Motivation" title="Why Investment Banking Operations?" />

      <Reveal delay={80} className="mt-8 max-w-3xl">
        <blockquote className="border-l-2 border-gold pl-6 text-lg leading-relaxed text-foreground/90">
          “My experience in financial operations has developed a strong foundation in transaction
          accuracy, reconciliation, controls, issue resolution and process efficiency. Combined
          with my CIBOP certification and MBA studies, I am looking to apply these capabilities to
          Investment Banking Operations and build deeper expertise across capital markets and the
          trade lifecycle.”
        </blockquote>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.n} delay={i * 90}>
            <div className="h-full rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50">
              <span className="font-display text-3xl text-gold/70">{p.n}</span>
              <h2 className="mt-3 text-xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">Career Focus</p>
          <div className="rule-gold mt-3 h-px w-24" />
          <h2 className="mt-5 text-3xl">Target Roles</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Roles where accuracy, controls and process ownership drive the outcome.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map((t, i) => (
            <Reveal key={t} delay={i * 50}>
              <div className="flex h-full items-center gap-3 rounded-md border border-border bg-card px-4 py-4 text-sm transition-colors duration-300 hover:border-gold/50">
                <Compass className="h-4 w-4 shrink-0 text-gold" />
                {t}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Let's Connect <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-20">
        <div className="rounded-lg border border-border bg-accent/40 p-7">
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-gold" />
            <p className="eyebrow">Currently Building</p>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Deepening my understanding of the trade lifecycle and post-trade processing, sharpening
            Excel-based reconciliation and analysis techniques, and continuing MBA coursework in
            finance — ongoing professional development rather than side projects.
          </p>
        </div>
      </Reveal>
    </Page>
  );
}
