import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, GraduationCap, Landmark, MapPin, Award, LineChart } from "lucide-react";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sachin S — Investment Banking Operations" },
      {
        name: "description",
        content:
          "Sachin S combines Order-to-Cash financial operations experience at Accenture with CIBOP certification and MBA studies to build a career in Investment Banking Operations.",
      },
      { property: "og:title", content: "About Sachin S — Investment Banking Operations" },
      {
        property: "og:description",
        content:
          "Financial operations experience, CIBOP certification and MBA studies focused on capital markets operations.",
      },
    ],
  }),
  component: AboutPage,
});

const profile = [
  { icon: Landmark, label: "Professional Focus", value: "Investment Banking Operations" },
  { icon: LineChart, label: "Domain", value: "Capital Markets & Financial Services" },
  { icon: Briefcase, label: "Experience", value: "Order-to-Cash / Financial Operations" },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
];

const highlights = [
  { icon: Award, text: "CIBOP certification from Imarticus Learning" },
  { icon: Briefcase, text: "Order-to-Cash operations experience at Accenture" },
  { icon: GraduationCap, text: "MBA studies at Jain University, BBA background" },
  { icon: LineChart, text: "Focused interest in capital markets and trade lifecycle" },
];

function AboutPage() {
  return (
    <Page>
      <SectionHeading
        eyebrow="About"
        title="About Me"
        lead="I am building my career in Investment Banking Operations, combining practical financial-operations experience with formal investment-banking training."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr]">
        <Reveal className="space-y-5 text-[0.975rem] leading-relaxed text-muted-foreground">
          <p>
            My day-to-day work in Order-to-Cash operations at Accenture is built around accuracy:
            validating and reconciling billing data across high-volume transactions, investigating
            discrepancies, and keeping records audit-ready. That discipline — controls, precision
            and clean process ownership — is the same discipline that underpins investment banking
            operations.
          </p>
          <p>
            To formalise that direction I completed the Certified Investment Banking Operations
            Professional (CIBOP) programme at Imarticus Learning, covering capital markets, the
            trade lifecycle, securities operations and post-trade processes. Alongside my MBA
            studies at Jain University and a BBA foundation, this gives me both the commercial
            framing and the operational vocabulary of the industry.
          </p>
          <p>
            I work best where detail matters: reconciliation, root-cause analysis, exception
            handling and process improvement. My goal is to apply that in a middle- or back-office
            capital markets environment and grow deep expertise across the trade lifecycle.
          </p>

          <ul className="!mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h.text} className="flex items-start gap-3 text-sm text-foreground">
                <h.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {h.text}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Profile</p>
            <div className="rule-gold mt-3 h-px w-16" />
            <dl className="mt-6 space-y-6">
              {profile.map((p) => (
                <div key={p.label} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-border text-gold">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs tracking-wide text-muted-foreground uppercase">
                      {p.label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{p.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <Link
              to="/experience"
              className="mt-8 inline-flex w-full items-center justify-center rounded-sm border border-gold/60 px-4 py-2.5 text-xs tracking-wide text-gold transition-colors hover:bg-gold hover:text-background"
            >
              View Experience
            </Link>
          </div>
        </Reveal>
      </div>
    </Page>
  );
}
