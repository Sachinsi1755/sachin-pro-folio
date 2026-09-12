import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, FileText, Download } from "lucide-react";
import resumeAsset from "@/assets/Sachin_S_Resume_IB_Operations.pdf.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-bold">Sachin S</p>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Investment Banking Operations Professional
            </p>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              Building a career in Investment Banking Operations through financial expertise,
              analytical thinking, and continuous learning.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Connect</p>
            <a
              href="https://www.linkedin.com/in/sachu1755"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/sachu1755
            </a>
            <a
              href="mailto:sachinsi1755@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" /> sachinsi1755@gmail.com
            </a>
            <a
              href="tel:+919481560139"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" /> +91 94815 60139
            </a>
            <Link
              to="/contact"
              hash="resume"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-gold"
            >
              <FileText className="h-4 w-4" /> Resume
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sachin S. All rights reserved.</p>
          <p>Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}
