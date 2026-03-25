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
  placeholder = 'Search by name, username, skills, company…',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search size={16} className="text-white/30" aria-hidden="true" />
      </div>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Search profiles"
        className="h-11 w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-10 text-sm text-white placeholder:text-white/25 transition focus:border-teal-500/50 focus:bg-white/8 focus:outline-none focus:ring-1 focus:ring-teal-500/25"
      />

      {value && (
        <button
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
          aria-label="Clear search"
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-white/25 transition hover:text-white/60"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
