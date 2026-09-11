import { createFileRoute } from "@tanstack/react-router";
import { Landmark, Receipt, ShieldCheck, Settings2 } from "lucide-react";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Sachin S | Capital Markets & Financial Operations" },
      {
        name: "description",
        content:
          "Skills across investment banking operations, capital markets, trade lifecycle, reconciliation, risk and controls, Excel and process improvement.",
      },
      { property: "og:title", content: "Skills — Sachin S | Capital Markets & Operations" },
      {
        property: "og:description",
        content:
          "Investment banking operations, financial operations, analytical and control skills, and process excellence.",
      },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    icon: Landmark,
    title: "Investment Banking & Capital Markets",
    items: [
      "Investment Banking Operations",
      "Capital Markets",
      "Trade Lifecycle",
      "Financial Services Operations",
    ],
  },
  {
    icon: Receipt,
    title: "Financial Operations",
    items: [
      "Order-to-Cash (O2C)",
      "Billing & Invoicing",
      "Billing Reconciliation",
      "Dispute Resolution",
      "Transaction Processing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Analytical & Control Skills",
    items: [
      "Financial Analysis",
      "Reconciliation",
      "Risk & Controls",
      "Root-Cause Analysis",
      "Process Accuracy",
      "Audit Readiness",
    ],
  },
  {
    icon: Settings2,
    title: "Tools & Process Excellence",
    items: ["Microsoft Excel", "Process Improvement", "Workflow Optimization", "SLA Management"],
  },
];

function SkillsPage() {
  return (
    <Page>
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills"
        lead="A capability set built around accuracy, controls and the operational mechanics of financial services."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 90}>
            <div className="group h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border text-gold transition-colors group-hover:border-gold/60">
                  <g.icon className="h-4.5 w-4.5" />
                </span>
                <h2 className="text-xl">{g.title}</h2>
              </div>
              <div className="rule-gold mt-5 h-px w-full opacity-40" />
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Page>
  );
}
