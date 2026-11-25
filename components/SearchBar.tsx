'use client';

import { Search, X } from 'lucide-react';
import { useRef } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search engineers by name or skill…',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search size={20} className="text-ink-muted" aria-hidden="true" />
      </div>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search profiles"
        className="h-14 w-full rounded-xl border border-control-border bg-background pl-12 pr-12 text-base text-ink placeholder:text-ink-muted transition-colors focus:border-accent focus:bg-raised focus:ring-1 focus:ring-accent"
      />

      {value && (
        <button
          type="button"
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
          className="absolute inset-y-1 right-1 flex w-10 items-center justify-center rounded-lg text-ink-secondary transition hover:bg-surface-hover hover:text-ink"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
