import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Landmark, Award, LineChart, Mail, MapPin, Briefcase } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import profileAsset from "@/assets/profile.jpg.asset.json";

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
      {/* Hero — modern mesh glass */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        {/* Animated mesh orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
          <div
            className="absolute -top-32 -right-32 h-[32rem] w-[32rem] rounded-full bg-gold/20 blur-[100px]"
            style={{ animation: "float-orb 18s ease-in-out infinite alternate" }}
          />
          <div
            className="absolute -bottom-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-white/8 blur-[110px]"
            style={{ animation: "float-orb 22s ease-in-out infinite alternate-reverse" }}
          />
          <div
            className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-primary-foreground/5 blur-[80px]"
            style={{ animation: "float-orb 16s ease-in-out infinite alternate" }}
          />
          <div className="grid-lines absolute inset-0 opacity-[0.22]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-16 pb-20 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/8 px-4 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Open to Investment Banking Operations Opportunities
            </span>

            <h1 className="mt-7 text-5xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
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

          <Reveal delay={160} className="lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-sm">
              {/* Glow ring behind card */}
              <div
                className="absolute -inset-3 rounded-[2.25rem] bg-gradient-to-br from-gold/30 to-primary-foreground/10 blur-xl"
                style={{ animation: "glow-pulse 5s ease-in-out infinite alternate" }}
              />

              {/* Floating stat chips */}
              <div
                className="absolute -top-4 -left-6 z-20 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-md"
                style={{ animation: "float-chip 6s ease-in-out infinite" }}
              >
                <Briefcase className="h-3.5 w-3.5 text-gold" />
                Accenture O2C
              </div>
              <div
                className="absolute top-1/2 -right-8 z-20 flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-lg backdrop-blur-md"
                style={{ animation: "float-chip 7s ease-in-out infinite 1s" }}
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                Bangalore, India
              </div>

              {/* Photo card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl">
                <div className="aspect-4/5 w-full">
                  <img
                    src={profileAsset.url}
                    alt="Sachin S — Investment Banking Operations Professional"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Bottom name strip */}
                <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-gradient-to-t from-black/60 to-transparent p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-display text-lg font-bold">Sachin S</p>
                      <p className="text-xs text-primary-foreground/80">CIBOP Certified</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10">
                      <Award className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CIBOP badge */}
              <div
                className="absolute -bottom-4 -right-4 z-20 rounded-full border-4 border-primary bg-gold px-4 py-3 text-center text-[10px] font-black leading-tight text-primary shadow-xl"
                style={{ animation: "float-chip 5s ease-in-out infinite 0.5s" }}
              >
                CIBOP
                <br />
                CERT
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
