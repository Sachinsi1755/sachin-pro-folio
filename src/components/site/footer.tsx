import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, FileText } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl">Sachin S</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Investment Banking Operations Professional
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Building a career in Investment Banking Operations through financial expertise,
              analytical thinking, and continuous learning.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="eyebrow">Connect</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4" /> Email
            </Link>
            <Link
              to="/contact"
              hash="resume"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <FileText className="h-4 w-4" /> Resume
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sachin S. All rights reserved.</p>
          <p>Bangalore, India</p>
        </div>
      </div>
    </footer>
  );
}
