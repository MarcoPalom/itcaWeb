"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Label,
} from "@headlessui/react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  id: string;
  name: string;
}

interface SelectProps {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
}

export default function Select({
  label,
  value,
  options,
  onChange,
  className = "",
}: SelectProps) {
  const selected = options.find((o) => o.id === value) ?? options[0];

  return (
    <Listbox value={value} onChange={onChange}>
      <div className={`relative ${className}`}>
        <Label className="sr-only">{label}</Label>
        <ListboxButton className="relative w-full cursor-pointer rounded-lg border border-line bg-surface py-3 pl-4 pr-10 text-left text-sm text-ink transition-colors hover:border-line-strong focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
          <span className="block truncate">{selected?.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown aria-hidden="true" className="h-4 w-4 text-ink-faint" />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="dropdown-scrollbar absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-lg border border-line bg-surface py-1 shadow-[var(--poster-shadow)] transition duration-150 ease-out focus:outline-none data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option.id}
              className="group relative cursor-pointer select-none py-2 pl-9 pr-4 text-sm text-ink-muted data-[focus]:bg-brand data-[focus]:text-on-brand data-[selected]:text-ink"
            >
              <span className="block truncate group-data-[selected]:font-semibold">
                {option.name}
              </span>
              <span className="absolute inset-y-0 left-0 hidden items-center pl-2.5 text-brand group-data-[focus]:text-on-brand group-data-[selected]:flex">
                <Check aria-hidden="true" className="h-4 w-4" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
