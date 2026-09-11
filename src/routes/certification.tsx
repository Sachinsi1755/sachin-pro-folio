import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";

export const Route = createFileRoute("/certification")({
  head: () => ({
    meta: [
      { title: "CIBOP Certification & Education — Sachin S" },
      {
        name: "description",
        content:
          "Certified Investment Banking Operations Professional (CIBOP) from Imarticus Learning, plus MBA studies at Jain University and a BBA foundation.",
      },
      { property: "og:title", content: "CIBOP Certification & Education — Sachin S" },
      {
        property: "og:description",
        content:
          "CIBOP certification covering capital markets, trade lifecycle, securities operations and post-trade processes.",
      },
    ],
  }),
  component: CertificationPage,
});

const areas = [
  "Investment Banking Operations",
  "Capital Markets",
  "Trade Lifecycle",
  "Financial Markets",
  "Securities Operations",
  "Post-Trade Processes",
  "Risk & Controls",
];

const education = [
  {
    icon: GraduationCap,
    title: "MBA",
    org: "Jain University",
    note: "Postgraduate business education strengthening finance, strategy and analytical decision-making.",
  },
  {
    icon: BookOpen,
    title: "Bachelor of Business Administration (BBA)",
    org: "Undergraduate degree",
    note: "Foundation in business, accounting and financial principles.",
  },
  {
    icon: Award,
    title: "CIBOP — Certified Investment Banking Operations Professional",
    org: "Imarticus Learning",
    note: "Specialised training in investment banking operations and capital markets.",
  },
];

function CertificationPage() {
  return (
    <Page>
      <SectionHeading
        eyebrow="Credentials"
        title="Certification"
        lead="Formal training that translates financial-operations experience into investment banking operations expertise."
      />

      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-lg border border-gold/40 bg-card">
          <div className="aurora-slow h-1.5 w-full opacity-80" />
          <div className="grid gap-10 p-6 sm:p-9 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-2xl leading-snug">
                    Certified Investment Banking Operations Professional
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">Imarticus Learning</p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                The CIBOP programme strengthens practical knowledge of how investment banks operate
                behind the trade: how instruments move through the lifecycle, how trades are
                confirmed, cleared and settled, and where risk and control checkpoints sit. It
                directly supports my preparation for middle- and back-office roles across capital
                markets.
              </p>

              <p className="eyebrow mt-8">Areas Covered</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border px-3.5 py-1.5 text-xs tracking-wide text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold/60 px-4 py-2.5 text-xs tracking-wide text-gold transition-colors hover:bg-gold hover:text-background"
              >
                View Certification <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="flex min-h-56 flex-col items-center justify-center rounded-md border border-dashed border-border p-6 text-center">
              <Award className="h-8 w-8 text-gold/70" />
              <p className="mt-4 text-sm text-foreground">Certificate image</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Space reserved for the CIBOP certificate. Share the image and it will be displayed
                here.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">Education</p>
          <div className="rule-gold mt-3 h-px w-24" />
          <h2 className="mt-5 text-3xl">Academic & Professional Background</h2>
        </Reveal>

        <ol className="mt-10 space-y-5 border-l border-border pl-6 sm:pl-10">
          {education.map((e, i) => (
            <Reveal as="li" key={e.title} delay={i * 90} className="relative">
              <span className="absolute -left-[1.9rem] mt-5 h-2.5 w-2.5 rounded-full border border-gold bg-background sm:-left-[3.05rem]" />
              <div className="rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-gold/50">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-gold">
                    <e.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="text-lg leading-snug">{e.title}</h3>
                    <p className="mt-1 text-sm text-gold/90">{e.org}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Page>
  );
}
