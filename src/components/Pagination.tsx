"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/** Devuelve las paginas visibles, con elipsis donde se corta el rango. */
function visiblePages(current: number, total: number): (number | "gap")[] {
  const delta = 1;
  const pages: (number | "gap")[] = [1];
  const from = Math.max(2, current - delta);
  const to = Math.min(total - 1, current + delta);

  if (from > 2) pages.push("gap");
  for (let i = from; i <= to; i++) pages.push(i);
  if (to < total - 1) pages.push("gap");
  if (total > 1) pages.push(total);

  return pages;
}

const stepClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-line-strong hover:text-ink disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const goTo = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Paginación"
      className={`mt-10 flex items-center justify-center gap-1.5 ${className}`}
    >
      <button
        type="button"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
        className={stepClasses}
      >
        <ChevronLeft aria-hidden="true" className="h-4 w-4" />
      </button>

      {visiblePages(currentPage, totalPages).map((page, i) =>
        page === "gap" ? (
          <span
            key={`gap-${i}`}
            aria-hidden="true"
            className="px-1 text-ink-faint"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => goTo(page)}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Página ${page}`}
            className={`inline-flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas ${
              page === currentPage
                ? "bg-brand text-on-brand"
                : "border border-line text-ink-muted hover:border-line-strong hover:text-ink"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Página siguiente"
        className={stepClasses}
      >
        <ChevronRight aria-hidden="true" className="h-4 w-4" />
      </button>
    </nav>
  );
}
