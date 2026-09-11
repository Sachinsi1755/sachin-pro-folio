import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, UserRound, Landmark, Award, LineChart, Mail } from "lucide-react";
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
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const services = [
  {
    icon: Award,
    title: "CIBOP Certified",
    body: "Certified Investment Banking Operations Professional training from Imarticus Learning — capital markets, trade lifecycle and post-trade processes.",
  },
  {
    icon: Landmark,
    title: "Financial Operations",
    body: "Hands-on Order-to-Cash operations at Accenture: billing reconciliation, discrepancy resolution and audit-ready records under SLA pressure.",
  },
  {
    icon: LineChart,
    title: "Capital Markets Focus",
    body: "A deliberate career path into investment banking operations, supported by MBA studies and continuous professional development.",
  },
];

function Index() {
  return (
    <main>
      {/* Hero — full purple band like the reference */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-gold/25 blur-3xl" />
          <div className="absolute bottom-[-30%] left-[-10%] h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="grid-lines absolute inset-0 opacity-30" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Open to Investment Banking Operations Opportunities
            </span>

            <h1 className="mt-7 text-5xl leading-[1.08] font-extrabold sm:text-6xl lg:text-7xl">
              Hello, I'm
              <br />
              Sachin S
            </h1>
            <p className="mt-4 text-xl font-semibold text-gold sm:text-2xl">
              Investment Banking Operations Professional
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              CIBOP-certified professional with hands-on financial operations experience at
              Accenture — building a career across capital markets, the trade lifecycle and
              post-trade operations in Bangalore, India.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/experience" className="btn-amber">
                View My Experience <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" hash="resume" className="btn-outline-light">
                <FileText className="h-4 w-4" /> Download CV
              </Link>
            </div>
          </Reveal>

          <Reveal delay={140} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gold/20 blur-xl" />
              <div className="relative flex aspect-4/5 flex-col items-center justify-center rounded-[2rem] border border-white/25 bg-white/10 backdrop-blur-sm">
                <span className="flex h-24 w-24 items-center justify-center rounded-full bg-gold text-primary">
                  <UserRound className="h-10 w-10" />
                </span>
                <p className="mt-6 font-display text-2xl font-bold">Sachin S</p>
                <p className="mt-1 px-8 text-center text-xs leading-relaxed text-primary-foreground/70">
                  Professional profile photograph goes here — share the image and it will appear in
                  this frame.
                </p>
              </div>
              <div className="absolute -right-3 -bottom-3 rounded-2xl bg-gold px-4 py-2 text-xs font-bold text-primary shadow-lg">
                CIBOP Certified
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services-style cards */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">What I Bring</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Expertise! Let's check it out
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Financial operations experience, formal investment-banking training and an analytical,
            controls-first mindset.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="card-hover h-full rounded-3xl border border-border bg-card p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Purple CTA band */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Got An Opportunity? Let's Talk
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
                Open to Investment Banking Operations, Capital Markets Operations and
                financial-services roles in Bangalore and beyond.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-amber">
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
                <Link to="/why-investment-banking" className="btn-outline-light">
                  Why IB Operations <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
