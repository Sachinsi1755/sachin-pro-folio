import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Sachin S | Order to Cash Associate, Accenture" },
      {
        name: "description",
        content:
          "Order to Cash Associate at Accenture, Bangalore: billing reconciliation, discrepancy resolution, SLA compliance and process improvement across high-volume transactions.",
      },
      { property: "og:title", content: "Experience — Sachin S | Accenture O2C Operations" },
      {
        property: "og:description",
        content:
          "Billing reconciliation, root-cause analysis and controls experience transferable to Investment Banking Operations.",
      },
    ],
  }),
  component: ExperiencePage,
});

const duties = [
  "Validated and reconciled billing data across high-volume transactions while maintaining accuracy and SLA compliance.",
  "Investigated and resolved billing discrepancies using structured root-cause analysis.",
  "Helped minimise revenue leakage and reduce recurring billing errors.",
  "Collaborated with Finance, Operations and Client Services teams to ensure timely invoice generation and dispute resolution.",
  "Maintained accurate and audit-ready billing records.",
  "Identified process-improvement opportunities to streamline reconciliation workflows and improve turnaround time.",
  "Supported end-to-end O2C process alignment across cross-functional teams.",
];

const transferable = [
  "Reconciliation",
  "Controls",
  "Accuracy",
  "Root-Cause Analysis",
  "Financial Operations",
  "SLA Management",
  "Process Improvement",
];

function ExperiencePage() {
  return (
    <Page>
      <SectionHeading
        eyebrow="Experience"
        title="Professional Experience"
        lead="Financial operations delivered at scale, with controls and accuracy at the centre of every process."
      />

      <div className="mt-14 border-l border-border pl-6 sm:pl-10">
        <Reveal className="relative">
          <span className="absolute -left-[1.9rem] mt-2 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-background sm:-left-[3.15rem]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>

          <div className="rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/50 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm border border-border text-gold">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-2xl">Order to Cash Associate</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Accenture — Bangalore, India
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-xs tracking-wide text-gold">
                April 2025 – Present
              </span>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {duties.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 rounded-md border border-border/70 p-4 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 hover:border-gold/40 hover:text-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <div className="rounded-lg border border-gold/30 bg-accent/40 p-6 sm:p-8">
          <p className="eyebrow">Transferable Skills to IB Operations</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {transferable.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-xs tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            The same controls mindset that protects revenue in Order-to-Cash maps directly onto
            trade capture, settlement breaks, cash and position reconciliation, and exception
            management in a capital markets operations environment.
          </p>
          <Link
            to="/why-investment-banking"
            className="mt-6 inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-foreground"
          >
            Why Investment Banking Operations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Page>
  );
}
