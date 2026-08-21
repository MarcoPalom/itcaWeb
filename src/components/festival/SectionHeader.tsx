"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  /** Se muestra como conteo discreto junto al titulo. */
  count?: number;
  href: string;
  linkLabel?: string;
}

export default function SectionHeader({
  title,
  count,
  href,
  linkLabel = "Ver todos",
}: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 md:mb-6">
      <div className="flex items-baseline gap-3">
        <h2 className="font-poster text-xl font-extrabold uppercase leading-none tracking-tight text-ink md:text-2xl lg:text-[28px]">
          {title}
        </h2>
        {count !== undefined && (
          <span className="text-sm font-medium tabular-nums text-ink-faint">
            {count}
          </span>
        )}
      </div>

      <Link
        href={href}
        className="group inline-flex shrink-0 items-center gap-1 rounded-md text-sm font-medium text-brand transition-colors hover:text-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        {linkLabel}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
