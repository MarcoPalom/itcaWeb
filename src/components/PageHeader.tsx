"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface PageHeaderProps {
  title: string;
  description?: string;
  /** Se muestra bajo el titulo, p. ej. "24 artistas". */
  count?: string;
}

export default function PageHeader({
  title,
  description,
  count,
}: PageHeaderProps) {
  const router = useRouter();

  return (
    <header className="pb-8 pt-6 md:pb-10">
      <button
        type="button"
        onClick={() => router.back()}
        className="mb-8 inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink-muted transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
        Volver
      </button>

      <h1 className="font-poster text-[clamp(2rem,5vw,3.25rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-ink">
        {title}
      </h1>

      {(description || count) && (
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {description && (
            <p className="text-base text-ink-muted">{description}</p>
          )}
          {count && (
            <span className="text-sm tabular-nums text-ink-faint">{count}</span>
          )}
        </div>
      )}
    </header>
  );
}
