import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, UserRound, Landmark, Award, LineChart } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sachin S — Investment Banking Operations Professional" },
      {
        name: "description",
        content:
          "CIBOP-certified Investment Banking Operations professional in Bangalore with Order-to-Cash financial operations experience at Accenture. Capital markets, trade lifecycle, reconciliation and controls.",
      },
      { property: "og:title", content: "Sachin S — Investment Banking Operations Professional" },
      {
        property: "og:description",
        content:
          "CIBOP certified | Financial Operations | Capital Markets | Trade Lifecycle. Open to Investment Banking Operations opportunities.",
      },
    ],
  }),
  component: Index,
});

const marks = [
  { icon: Award, label: "CIBOP Certified", sub: "Imarticus Learning" },
  { icon: Landmark, label: "Accenture", sub: "Order to Cash Operations" },
  { icon: LineChart, label: "Capital Markets", sub: "Trade Lifecycle Focus" },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
        <div className="aurora-slow pointer-events-none absolute inset-0 opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-24 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-3.5 py-1.5 text-xs tracking-wide text-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Open to Investment Banking Operations Opportunities
            </span>

            <h1 className="mt-7 text-5xl leading-[1.05] sm:text-7xl">Sachin S</h1>
            <p className="mt-4 text-xl text-foreground/90 sm:text-2xl">
              Investment Banking Operations Professional
            </p>
            <div className="rule-gold mt-6 h-px w-32" />
            <p className="mt-6 text-sm tracking-wide text-gold/90">
              CIBOP Certified · Financial Operations · Capital Markets · Trade Lifecycle
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Investment Banking Operations professional with CIBOP certification from Imarticus
              Learning and hands-on experience in Order-to-Cash financial operations at Accenture.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View My Experience <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                hash="resume"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
              >
                <FileText className="h-4 w-4" /> Download Resume
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-3 rounded-lg border border-gold/25" />
              <div className="relative flex aspect-4/5 flex-col items-center justify-center rounded-lg border border-border bg-card">
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <UserRound className="h-10 w-10" />
                </span>
                <p className="mt-6 font-display text-2xl">Sachin S</p>
                <p className="mt-1 px-8 text-center text-xs leading-relaxed text-muted-foreground">
                  Professional profile photograph goes here — share the image and it will appear in
                  this frame.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-3">
          {marks.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <div className="flex h-full items-center gap-4 bg-background px-6 py-8 sm:px-8">
                <m.icon className="h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm">{m.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{m.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Positioning</p>
          <div className="rule-gold mt-3 h-px w-24" />
          <h2 className="mt-5 text-3xl leading-snug sm:text-4xl">
            Precision, controls and operational excellence — applied to capital markets.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Practical financial-operations experience at Accenture, CIBOP certification from
            Imarticus Learning, MBA education and strong analytical capability — directed towards
            opportunities across Investment Banking and Capital Markets Operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm text-gold transition-colors hover:text-foreground"
            >
              About me <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/why-investment-banking"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              Why Investment Banking Operations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
