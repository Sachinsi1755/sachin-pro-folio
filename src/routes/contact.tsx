import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Linkedin, MapPin, FileText, Send, Download } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Page } from "@/components/site/page";
import { Reveal, SectionHeading } from "@/components/site/reveal";
import { toast } from "sonner";


const EMAILJS_SERVICE_ID = "service_0wop2ka";
const EMAILJS_TEMPLATE_ID = "template_glgvupn";
const EMAILJS_PUBLIC_KEY = "-oRQ3ZGsjRjEK3nLX";
const OWNER_EMAIL = "sachinsi1755@gmail.com";
const RESUME_URL = "/Sachin_S_Resume_IB_Operations.pdf";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sachin S — Investment Banking Operations, Bangalore" },
      {
        name: "description",
        content:
          "Get in touch with Sachin S regarding Investment Banking Operations, Capital Markets Operations and financial-services opportunities in Bangalore, India.",
      },
      { property: "og:title", content: "Contact Sachin S — Investment Banking Operations" },
      {
        property: "og:description",
        content:
          "Connect regarding investment banking operations and capital markets operations opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "sachinsi1755@gmail.com",
    href: "mailto:sachinsi1755@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 94815 60139", href: "tel:+919481560139" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/sachu1755",
    href: "https://www.linkedin.com/in/sachu1755",
  },
  { icon: MapPin, label: "Location", value: "Bangalore, India" },
];

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Recipient: always the portfolio owner
          to_email: OWNER_EMAIL,
          to_name: "Sachin S",
          email: OWNER_EMAIL,
          // Sender details
          from_name: name,
          from_email: email,
          reply_to: email,
          name,
          message: `${message}\n\n---\nFrom: ${name} <${email}>`,
          title: `Portfolio message from ${name}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you shortly.",
      });
      form.reset();
    } catch {
      toast.error("Message could not be sent", {
        description: "Please try again, or email me directly at sachinsi1755@gmail.com.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <Page>
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        lead="Interested in connecting regarding Investment Banking Operations, Capital Markets Operations and financial-services opportunities."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 transition-colors duration-300 hover:border-gold/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-gold">
                <d.icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs tracking-wide text-muted-foreground uppercase">{d.label}</p>
                {"href" in d && d.href ? (
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") ? "_blank" : undefined}
                    rel={d.href.startsWith("http") ? "noreferrer" : undefined}
                    className="mt-1 inline-block text-sm transition-colors hover:text-primary"
                  >
                    {d.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm">{d.value}</p>
                )}
              </div>
            </div>
          ))}

          <a
            id="resume"
            href={RESUME_URL}
            download="Sachin_S_Resume_IB_Operations.pdf"
            className="group flex items-center justify-between rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-gold/50 hover:bg-gold/5"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border text-gold transition-colors group-hover:border-gold/50">
                <FileText className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-medium">Download Resume</p>
                <p className="text-xs text-muted-foreground">PDF · 290 KB</p>
              </div>
            </div>
            <Download className="h-4 w-4 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            className="rounded-lg border border-border bg-card p-6 sm:p-8"
            aria-label="Contact form"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-xs tracking-wide text-muted-foreground uppercase">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs tracking-wide text-muted-foreground uppercase">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="text-xs tracking-wide text-muted-foreground uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                  placeholder="Role, team and how I can help."
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {sending ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Page>
  );
}
