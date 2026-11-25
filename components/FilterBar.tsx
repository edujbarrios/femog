'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { CATEGORIES } from '@/data/categories';
import type { CategoryId } from '@/types';
import { Check, ChevronDown, LayoutGrid, Search, X } from 'lucide-react';

interface FilterBarProps {
  selectedCategories: CategoryId[];
  onToggleCategory: (id: CategoryId) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export function FilterBar({
  selectedCategories,
  onToggleCategory,
  onClearFilters,
  hasActiveFilters,
}: FilterBarProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [open]);

  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = CATEGORIES.filter((category) =>
    [category.label, category.id, category.description].join(' ').toLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="flex flex-col gap-3">
      <div
        ref={rootRef}
        className="relative"
        onKeyDown={(event) => {
          if (open && event.key === 'Escape') {
            event.stopPropagation();
            setOpen(false);
            setQuery('');
            triggerRef.current?.focus();
          }
        }}
      >
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => {
            setOpen(!open);
            setQuery('');
          }}
          className="flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border border-accent bg-surface px-4 py-3 text-left text-base font-semibold text-accent transition-colors hover:bg-raised hover:text-accent-hover"
        >
          <span className="flex min-w-0 items-center gap-2">
            <LayoutGrid size={20} className="shrink-0 text-accent" aria-hidden="true" />
            <span>{selectedCategories.length ? `Categories (${selectedCategories.length})` : 'Browse categories'}</span>
          </span>
          <ChevronDown size={18} className={`shrink-0 text-accent transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>

        <div
          id={panelId}
          hidden={!open}
          className="absolute inset-x-0 top-full z-30 mt-2 rounded-2xl border border-control-border bg-surface p-3 shadow-2xl"
        >
          <div className="relative mb-3">
            <Search size={16} className="pointer-events-none absolute left-3 top-3.5 text-ink-muted" aria-hidden="true" />
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search categories…"
              aria-label="Search categories"
              className="h-11 w-full rounded-lg border border-control-border bg-background pl-9 pr-3 text-base text-ink placeholder:text-ink-muted"
            />
          </div>
          <div className="max-h-72 space-y-1 overflow-y-auto overscroll-contain" role="group" aria-label="Select categories">
            {visibleCategories.map((category) => {
              const selected = selectedCategories.includes(category.id);
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onToggleCategory(category.id)}
                  className={`flex min-h-12 w-full items-center gap-3 rounded-lg border px-3 py-2 text-left text-sm transition-colors ${selected ? 'border-accent bg-raised text-ink' : 'border-transparent text-ink-secondary hover:bg-raised hover:text-ink'}`}
                >
                  <span className="shrink-0" aria-hidden="true">{category.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold" style={{ color: category.color }}>{category.label}</span>
                    <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">{category.description}</span>
                  </span>
                  {selected && <Check size={18} className="shrink-0 text-accent" aria-hidden="true" />}
                </button>
              );
            })}
            {visibleCategories.length === 0 && (
              <p className="px-3 py-4 text-sm text-ink-muted" role="status">No matching categories.</p>
            )}
          </div>
          <div className="mt-3 flex justify-end border-t border-line pt-3">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setQuery('');
                triggerRef.current?.focus();
              }}
              className="min-h-10 rounded-lg bg-accent-solid px-4 py-2 text-sm font-semibold text-accent-ink hover:bg-accent-hover"
            >
              Done
            </button>
          </div>
        </div>
      </div>

      {(selectedCategories.length > 0 || hasActiveFilters) && (
        <div className="flex flex-wrap items-center gap-2">
          {selectedCategories.map((id) => {
            const category = CATEGORIES.find((item) => item.id === id);
            if (!category) return null;
            return (
              <button
                key={id}
                type="button"
                aria-label={`Remove ${category.label} filter`}
                onClick={() => onToggleCategory(id)}
                className="inline-flex min-h-9 items-center gap-2 rounded-full border border-control-border bg-raised px-3 py-1.5 text-sm font-medium text-ink hover:border-accent"
              >
                <span style={{ color: category.color }}>{category.label}</span>
                <X size={14} aria-hidden="true" />
              </button>
            );
          })}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onClearFilters}
              className="min-h-9 rounded-lg px-2 text-sm font-medium text-accent hover:bg-raised hover:text-accent-hover"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
