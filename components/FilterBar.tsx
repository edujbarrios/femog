'use client';

import { CATEGORIES } from '@/data/categories';
import { PROFILES } from '@/data/profiles';
import type { CategoryId } from '@/types';
import { cn } from '@/lib/utils';
import { Check, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  selectedCategories: CategoryId[];
  onToggleCategory: (id: CategoryId) => void;
  resultCount: number;
  totalCount: number;
}

export function FilterBar({
  selectedCategories,
  onToggleCategory,
  resultCount,
  totalCount,
}: FilterBarProps) {
  // Pre-compute how many profiles exist per category
  const categoryCounts = Object.fromEntries(
    CATEGORIES.map((cat) => [
      cat.id,
      PROFILES.filter((p) => p.categories.includes(cat.id)).length,
    ]),
  );

  return (
    <div className="space-y-4">
      {/* Category pill buttons */}
      <div>
        <h3 className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
          <SlidersHorizontal size={11} aria-hidden="true" />
          Filter by role
        </h3>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategories.includes(cat.id);
            const count = categoryCounts[cat.id] ?? 0;
            return (
              <button
                key={cat.id}
                onClick={() => onToggleCategory(cat.id)}
                aria-pressed={isActive}
                className={cn(
                  'inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors duration-150',
                  isActive
                    ? 'ring-1 ring-inset ring-current'
                    : 'border-control-border bg-surface text-ink-secondary hover:border-accent hover:bg-raised hover:text-ink',
                )}
                style={
                  isActive
                    ? {
                        color: cat.color,
                        backgroundColor: cat.bgColor,
                        borderColor: cat.borderColor,
                      }
                    : undefined
                }
              >
                {isActive ? <Check size={14} aria-hidden="true" /> : <span aria-hidden="true">{cat.icon}</span>}
                {cat.label}
                <span
                  className={cn(
                    'rounded-full px-1.5 py-px text-xs font-semibold tabular-nums',
                    isActive ? 'bg-background' : 'bg-raised text-ink-secondary',
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="flex items-center">
        <p className="text-sm text-ink-muted" aria-live="polite" aria-atomic="true">
          Showing{' '}
          <span className="font-semibold text-ink-secondary">{resultCount}</span>{' '}
          of {totalCount} profiles
        </p>
      </div>
    </div>
  );
}
