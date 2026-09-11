import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer = 0;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            timer = window.setTimeout(() => setShown(true), delay);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
    
  }, [delay]);

  return (
    <Tag ref={ref as never} className={cn("reveal", shown && "reveal-in", className)}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <div className="rule-gold mt-3 h-px w-24" />
      <h1 className="mt-5 text-4xl leading-tight sm:text-5xl">{title}</h1>
      {lead ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p> : null}
    </Reveal>
  );
}
