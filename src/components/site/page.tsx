import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Page({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <main className={cn("mx-auto max-w-6xl px-5 pt-16 pb-24 sm:px-8 sm:pt-24", className)}>
      {children}
    </main>
  );
}
